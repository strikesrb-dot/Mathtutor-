// A YouTube player that only counts real watching:
//   • no skipping ahead past what he's already watched
//   • speed capped (default 1.5x)
//   • a "Still there?" tap every 4–7 minutes; miss it → video pauses, rewinds to the check, red flash
//   • paused too long → red flash
//   • leaving the app → video pauses (the tracker handles the flash)

import { flash, toast, beep } from './ui.js';

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
 * mountVideo(container, { id, startMax, rules, tracker, onProgress(max, dur), onDone() })
 * Returns { destroy() }.
 */
export function mountVideo(container, opts) {
  const { id, rules, tracker } = opts;
  let maxWatched = opts.startMax || 0;
  let player = null, dur = 0, done = false, destroyed = false;
  let pausedFor = 0, nagged = false;
  let sinceCheck = 0, nextCheck = rand(rules.attentionMinSec, rules.attentionMaxSec);
  let check = null; // { pos, left, el }
  let lastSaved = 0;

  container.innerHTML = `
    <div class="video-frame sc-video"><div class="video-el"></div>
      <div class="video-loading cg-meta">Loading video…</div>
    </div>`;
  const frame = container.querySelector('.video-frame');

  loadYT().then((YT) => {
    if (destroyed) return;
    player = new YT.Player(container.querySelector('.video-el'), {
      videoId: id,
      playerVars: { playsinline: 1, rel: 0, modestbranding: 1, start: Math.floor(maxWatched > 5 ? maxWatched - 3 : 0), disablekb: 1, fs: 0 },
      events: {
        onReady: () => { frame.querySelector('.video-loading')?.remove(); dur = player.getDuration() || 0; },
        onError: () => {
          frame.querySelector('.video-loading').textContent = 'This video can\'t play right now. Tell your brother so he can swap it.';
          tracker.flag('videoError', id);
        },
        onPlaybackRateChange: (e) => {
          if (e.data > rules.maxPlaybackRate) { player.setPlaybackRate(1); toast(`Max speed is ${rules.maxPlaybackRate}x`); }
        },
      },
    });
  }).catch(() => {
    const l = frame.querySelector('.video-loading');
    if (l) l.textContent = 'Couldn\'t reach YouTube. Check the Wi-Fi, then reopen this lesson.';
  });

  const tick = setInterval(() => {
    if (!player || !player.getPlayerState) { tracker.setVideoOK(false); return; }
    const state = player.getPlayerState(); // 1 playing, 2 paused, 0 ended, 3 buffering
    const t = player.getCurrentTime() || 0;
    if (!dur) dur = player.getDuration() || 0;

    // Leaving the app: pause the video.
    if (document.visibilityState !== 'visible') { if (state === 1) player.pauseVideo(); tracker.setVideoOK(false); return; }

    // No skipping ahead.
    if (t > maxWatched + 3 && !done) {
      player.seekTo(maxWatched, true);
      toast('No skipping ahead — watch it through');
      tracker.flag('skipTry');
      tracker.setVideoOK(false);
      return;
    }

    const playing = state === 1;
    if (playing) {
      pausedFor = 0; nagged = false;
      if (t > maxWatched) maxWatched = t; // (rewound to the check point if he misses it)
      if (check) {
        check.left -= 1;
        updateCheck();
        if (check.left <= 0) return missCheck();
        tracker.setVideoOK(false); // held until he taps
        return;
      }
      sinceCheck += 1;
      if (sinceCheck >= nextCheck) openCheck(t);
      tracker.setVideoOK(true);
    } else {
      tracker.setVideoOK(false);
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
    el.addEventListener('click', () => {
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

  return {
    destroy() {
      destroyed = true; clearInterval(tick); tracker.setVideoOK(false);
      if (maxWatched > lastSaved && opts.onProgress) opts.onProgress(Math.round(maxWatched), Math.round(dur));
      try { player && player.destroy(); } catch {}
    },
  };
}

function rand(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
