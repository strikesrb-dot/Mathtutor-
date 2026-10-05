// A YouTube player that only counts real watching:
//   • no skipping ahead past what he's already watched
//   • speed capped (default 1.5x)
//   • a "Still there?" tap every 4–7 minutes; miss it → video pauses, rewinds to the check, red flash
//   • paused too long → red flash
//   • leaving the app → video pauses (the tracker handles the flash)

import { flash, toast, beep, mmss } from './ui.js';
const STATE_NAME = { '-1': 'not started', 0: 'ended', 1: 'playing', 2: 'paused', 3: 'buffering', 5: 'ready' };

let apiPromise = null;
function loadYT() {
  if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
  if (apiPromise) return apiPromise;
  apiPromise = new Promise((resolve, reject) => {
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => { prev && prev(); resolve(window.YT); };
    const s = document.createElement('script');
    s.src = 'https://www.youtube.com/iframe_api';
    s.onerror = () => { apiPromise = null; reject(new Error('YouTube did not load')); };
    document.head.appendChild(s);
    setTimeout(() => reject(new Error('YouTube took too long to load')), 15000);
  });
  return apiPromise;
}

/**
 * mountVideo(container, { id, startMax, startAt, done, countReplay, rules, tracker, onProgress(max, dur), onDone(), onTime(t, dur, state) })
 *   startMax = furthest point already watched · startAt = where to start (default: just before startMax)
 *   done = already finished before · countReplay = replays count as time (only for the review after a failed quiz)
 *   Time counts only while he's watching new parts: replaying what he already watched doesn't count.
 * Returns { destroy() }.
 */
export function mountVideo(container, opts) {
  const { id, rules, tracker } = opts;
  let maxWatched = opts.startMax || 0;
  let player = null, dur = 0, done = !!opts.done, destroyed = false;
  let replaySec = 0, replayToast = false;
  let pausedFor = 0, nagged = false;
  let sinceCheck = 0, nextCheck = rand(rules.attentionMinSec, rules.attentionMaxSec);
  let check = null; // { pos, left, el }
  let lastSaved = 0, lastState = null;
  tracker.log('video', `opened ${id} at ${mmss(opts.startAt != null ? opts.startAt : maxWatched > 5 ? maxWatched - 3 : 0)}${done ? ' (already finished — replays don\'t count)' : ''}${opts.countReplay ? ' (review: counts)' : ''}`);

  container.innerHTML = `
    <div class="video-frame sc-video"><div class="video-el"></div>
      <div class="video-loading cg-meta">Loading video…</div>
    </div>`;
  const frame = container.querySelector('.video-frame');

  loadYT().then((YT) => {
    if (destroyed) return;
    player = new YT.Player(container.querySelector('.video-el'), {
      videoId: id,
      playerVars: { playsinline: 1, rel: 0, modestbranding: 1, start: Math.floor(opts.startAt != null ? opts.startAt : maxWatched > 5 ? maxWatched - 3 : 0), disablekb: 1, fs: 0 },
      events: {
        onReady: () => { frame.querySelector('.video-loading')?.remove(); dur = player.getDuration() || 0; },
        onError: () => {
          frame.querySelector('.video-loading').textContent = 'This video can\'t play right now. Tell your brother so he can swap it.';
          tracker.flag('videoError', id);
        },
        onPlaybackRateChange: (e) => {
          tracker.log('video', `speed set to ${e.data}x${e.data > rules.maxPlaybackRate ? ' (too fast, reset to 1x)' : ''}`);
          if (e.data > rules.maxPlaybackRate) { player.setPlaybackRate(1); toast(`Max speed is ${rules.maxPlaybackRate}x`); }
        },
      },
    });
  }).catch(() => {
    const l = frame.querySelector('.video-loading');
    if (l) l.textContent = 'Couldn\'t reach YouTube. Check the Wi-Fi, then reopen this lesson.';
  });

  const tick = setInterval(() => {
    if (!player || !player.getPlayerState) { tracker.setVideoOK(false, 'video loading'); return; }
    const state = player.getPlayerState(); // 1 playing, 2 paused, 0 ended, 3 buffering
    const t = player.getCurrentTime() || 0;
    if (!dur) dur = player.getDuration() || 0;
    if (opts.onTime) opts.onTime(t, dur, state);
    if (state !== lastState) { lastState = state; tracker.log('video', `${STATE_NAME[state] || state} at ${mmss(t)}${dur ? ` of ${mmss(dur)}` : ''}`); }

    // Leaving the app, or the chat is open: pause the video.
    if (document.visibilityState !== 'visible' || tracker.isHeld()) { if (state === 1) player.pauseVideo(); tracker.setVideoOK(false); return; }

    // No skipping ahead.
    if (t > maxWatched + 3 && !done) {
      player.seekTo(maxWatched, true);
      toast('No skipping ahead — watch it through');
      tracker.flag('skipTry');
      tracker.setVideoOK(false, 'tried to skip ahead');
      return;
    }

    const playing = state === 1;
    if (playing) {
      pausedFor = 0; nagged = false;
      if (t > maxWatched) maxWatched = t; // (rewound to the check point if he misses it)
      const fresh = t >= maxWatched - 5 || opts.countReplay;   // a few seconds back still counts; replays don't
      if (!fresh && replaySec === 0) tracker.log('video', `replaying from ${mmss(t)} (already watched up to ${mmss(maxWatched)}) — not counted`);
      replaySec = fresh ? 0 : replaySec + 1;
      if (replaySec === 4 && !replayToast) { replayToast = true; toast('Rewatching doesn\'t count toward your time'); }
      if (check) {
        check.left -= 1;
        updateCheck();
        if (check.left <= 0) return missCheck();
        tracker.setVideoOK(false, 'waiting for the "Still watching?" tap'); // held until he taps
        return;
      }
      sinceCheck += 1;
      if (sinceCheck >= nextCheck) openCheck(t);
      tracker.setVideoOK(fresh, 'replaying a part already watched');
    } else {
      tracker.setVideoOK(false, state === 2 ? 'video paused' : state === 0 ? 'video ended' : state === 3 ? 'video buffering' : 'video not started');
      if (state === 2 && !done) {
        pausedFor += 1;
        if (pausedFor >= rules.pausedNagSec && !nagged) {
          nagged = true;
          tracker.flag('pausedLong');
          flash('Press play ▶', 'The video has been paused, so your time isn\'t counting.', 'OK');
        }
      }
    }

    if (state === 0) maxWatched = Math.max(maxWatched, dur);
    const pct = dur ? (maxWatched / dur) * 100 : 0;
    if (Math.abs(maxWatched - lastSaved) >= 10 || (state === 0 && lastSaved !== maxWatched)) {
      lastSaved = maxWatched; opts.onProgress && opts.onProgress(Math.round(maxWatched), Math.round(dur));
    }
    if (!done && dur && pct >= rules.videoDonePct) {
      done = true;
      opts.onProgress && opts.onProgress(Math.round(maxWatched), Math.round(dur));
      opts.onDone && opts.onDone();
    }
  }, 1000);

  function openCheck(pos) {
    check = { pos, left: rules.attentionReplySec };
    const el = document.createElement('button');
    el.className = 'attn cg-btn cg-btn-glass sc-attn';
    el.innerHTML = `<span class="cg-headline">Still watching? Tap here</span><span class="attn-count cg-num">${check.left}</span>`;
    tracker.log('check', '"Still watching?" shown');
    el.addEventListener('click', () => {
      tracker.log('check', `answered in ${rules.attentionReplySec - (check ? check.left : 0)}s`);
      sinceCheck = 0; nextCheck = rand(rules.attentionMinSec, rules.attentionMaxSec);
      el.remove(); check = null;
      toast('Nice — keep going');
    });
    frame.appendChild(el);
    check.el = el;
    beep();
  }
  function updateCheck() { if (check) check.el.querySelector('.attn-count').textContent = Math.max(0, check.left); }
  function missCheck() {
    const pos = check.pos;
    check.el.remove(); check = null;
    sinceCheck = 0; nextCheck = rand(rules.attentionMinSec, rules.attentionMaxSec);
    player.pauseVideo();
    maxWatched = Math.min(maxWatched, pos);
    player.seekTo(Math.max(0, pos - 5), true);
    tracker.flag('missedCheck');
    tracker.setVideoOK(false);
    nagged = true; // don't double-flash for the pause
    flash('You missed the check!', 'The video went back to where you stopped paying attention. That time didn\'t count.', 'Rewatch it');
  }

  // Save his spot the moment he leaves the app or the phone locks (iOS may freeze timers right after).
  const saveNow = () => { if (maxWatched > lastSaved && opts.onProgress) { lastSaved = maxWatched; opts.onProgress(Math.round(maxWatched), Math.round(dur)); } };
  const onHide = () => { if (document.visibilityState === 'hidden') saveNow(); };
  document.addEventListener('visibilitychange', onHide);
  window.addEventListener('pagehide', saveNow);

  return {
    destroy() {
      document.removeEventListener('visibilitychange', onHide); window.removeEventListener('pagehide', saveNow);
      destroyed = true; clearInterval(tick); tracker.setVideoOK(false);
      if (maxWatched > lastSaved && opts.onProgress) opts.onProgress(Math.round(maxWatched), Math.round(dur));
      try { player && player.destroy(); } catch {}
    },
  };
}

function rand(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
