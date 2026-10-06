// The study-time meter. Time only counts when:
//   • the app is on screen (not in another app or tab), and
//   • on a video: the video is actually playing and he answered the last "Still there?" check, or
//   • on reading/quiz screens: he has tapped or typed in the last 90 seconds.
// Everything is saved to the day's record every 15 seconds, and when he leaves the app.
// The activity log (students/{uid}/log/{date}.entries[] = { t, k, d }) records every screen, every time the clock
// starts or stops and why, leaving/returning, flags, video and quiz events. The master exports it for Claude (log-export.js).

import { inc, union } from './store.js';
import { flash, isFlashing } from './ui.js';
import { todayKey } from './curriculum.js';

export function createTracker(store, sid, rules) {
  let ctx = { mode: 'off' };          // { mode: 'video'|'active'|'off', stepId, subject, lessonKey }
  let videoOK = false, videoWhy = '';  // set by the video player each second (why = reason it isn't counting)
  let lastInput = Date.now();
  let idleFlagged = false;
  // Limits for the screen he's on (set by student.js / quiz.js through screen()):
  //   cap = most seconds that can count here · noCount = nothing counts (e.g. waiting out a quiz retry)
  let scr = { cap: 0, sec: 0, noCount: false, capped: false, label: '' };
  let held = false;                   // the chat sheet is open: the clock pauses
  let leftAt = null;
  let day = {};                       // latest saved day record (kept fresh by the caller)
  let pending = { sec: 0, open: 0, steps: {}, subj: {}, lessons: {}, flags: {}, events: [] };
  const listeners = new Set();

  // ── Activity log ──
  let logBuf = [], logCount = 0;
  const dur = (sec) => (sec < 60 ? `${sec}s` : sec < 3600 ? `${Math.floor(sec / 60)}m ${sec % 60}s` : `${Math.floor(sec / 3600)}h ${Math.floor((sec % 3600) / 60)}m`);
  function log(k, d) { if (logCount++ < 6000) logBuf.push({ t: Date.now(), k, d: String(d).slice(0, k === 'tutor' ? 1500 : 300) }); }
  const device = /iPad|Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1 ? 'iPad' : /iPhone/.test(navigator.userAgent) ? 'iPhone' : 'a browser';
  log('app', `opened on ${device}${navigator.standalone ? ' (Home Screen app)' : ''}`);

  // ── Live status for the master's "right now" card (students/{uid}/meta/live) ──
  // view/title/lesson/sub/stage/detail/pos are plain text set by the student screens (see student.js).
  let live = { view: 'home', title: '', lesson: '', sub: '', stage: '', detail: '', pos: '' };
  let session = { start: Date.now(), open: 0, focus: 0 };
  let lastCounting = false, liveDirty = true, lastLiveWrite = 0, liveTimer = null, dead = false, lastWhere = '';
  function writeLive(extra = {}) {
    if (dead) return Promise.resolve();
    if (liveTimer) { clearTimeout(liveTimer); liveTimer = null; }
    lastLiveWrite = Date.now(); liveDirty = false;
    const where = [live.title, live.lesson, live.stage].filter(Boolean).join(' › ') + (live.detail ? ` — ${live.detail}` : '');
    if (where !== lastWhere) { lastWhere = where; log('screen', where); }
    return store.saveLive(sid, { ...live, at: Date.now(), counting: lastCounting, flashing: isFlashing(),
      visible: document.visibilityState === 'visible', sessionStart: session.start, sessionOpen: session.open, sessionFocus: session.focus, ...extra })
      .catch(() => { liveDirty = true; });
  }
  // major = a new screen or step: saved within ~1.5 s (calls in the same moment are merged into one write).
  // Small changes (video position, countdowns) ride along with the next regular save, every 10 s.
  function setLive(patch, major = false) {
    const next = { ...live, ...patch };
    if (Object.keys(next).every((k) => next[k] === live[k])) return;
    live = next; liveDirty = true;
    if (major && !liveTimer) liveTimer = setTimeout(writeLive, Math.max(300, 1500 - (Date.now() - lastLiveWrite)));
  }

  // Why the clock isn't running right now (for the log).
  function why() {
    if (ctx.mode === 'off') return 'not in a study step';
    if (document.visibilityState !== 'visible') return 'app not on screen';
    if (held) return 'chat open';
    if (isFlashing()) return 'red alert on screen';
    if (ctx.mode === 'video') return videoWhy || 'video not playing';
    if (scr.noCount) return 'waiting out the quiz retry timer';
    if (scr.capped) return `time limit reached (${scr.label})`;
    return `no taps for ${rules.idleSec}s`;
  }
  let clockOn = null, clockWhy = '', clockSince = Date.now();

  const counting = () => {
    if (ctx.mode === 'off' || held || document.visibilityState !== 'visible' || isFlashing()) return false;
    if (ctx.mode === 'video') return videoOK;
    if (scr.noCount || scr.capped) return false;
    return Date.now() - lastInput < rules.idleSec * 1000;
  };

  const onInput = () => { lastInput = Date.now(); idleFlagged = false; };
  ['pointerdown', 'keydown', 'input', 'scroll', 'touchstart'].forEach((ev) => window.addEventListener(ev, onInput, { passive: true, capture: true }));

  function flag(type, note = '') {
    pending.flags[type] = (pending.flags[type] || 0) + 1;
    pending.events.push({ t: Date.now(), type, step: ctx.stepId || '', note });
    log('flag', `${type}${note ? ` (${note})` : ''}`);
  }

  // Away time. iOS can fire "hidden" late or more than once, so the leave moment is the earlier of
  // the first "hidden" event and the last second we saw the app on screen (accurate to about 1 second).
  let lastVisibleBeat = Date.now();
  const awayText = (sec) => (sec < 60 ? `${sec} second${sec === 1 ? '' : 's'}` : `${Math.floor(sec / 60)} min ${sec % 60} sec`);
  function markLeft() {
    if (ctx.mode === 'off' || leftAt != null) return;
    leftAt = Math.min(Date.now(), lastVisibleBeat + 1000);
    flag('leftApp');
    log('app', 'left the app');
  }
  function cameBack(fromTs) {
    const away = Math.max(0, Math.round((Date.now() - fromTs) / 1000));
    log('app', `came back after ${dur(away)} away`);
    if (away > 600) { session = { start: Date.now(), open: 0, focus: 0 }; log('app', 'new session (away 10+ minutes)'); }   // gone 10+ minutes = a new session
    leftAt = null;
    lastVisibleBeat = Date.now();
    if (ctx.mode !== 'off' && away >= 3) {
      flash('Hey! You left the app', `You were gone ${awayText(away)}. Time outside the app doesn't count.`);
    }
  }
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') { markLeft(); flush(); writeLive({ visible: false }); }
    else { if (leftAt != null) cameBack(leftAt); writeLive(); }
  });
  window.addEventListener('pagehide', () => { markLeft(); flush(); writeLive({ visible: false }); });
  window.addEventListener('pageshow', () => { if (leftAt != null && document.visibilityState === 'visible') cameBack(leftAt); });

  const timer = setInterval(() => {
    if (document.visibilityState === 'visible') {
      // Timers freeze while the app is in the background. A big gap with no "hidden" event = he left anyway.
      const gap = Date.now() - lastVisibleBeat;
      if (gap > 8000 && leftAt == null && ctx.mode !== 'off') { leftAt = lastVisibleBeat + 1000; flag('leftApp'); cameBack(leftAt); }
      lastVisibleBeat = Date.now();
    }
    const on = counting();
    lastCounting = on;
    const reason = on ? '' : why();
    if (on !== clockOn || reason !== clockWhy) {
      const ran = dur(Math.round((Date.now() - clockSince) / 1000));
      if (clockOn !== null) log('clock', on ? `running (stopped ${ran}: ${clockWhy})` : `stopped: ${reason}${clockOn ? ` (ran ${ran})` : ''}`);
      clockOn = on; clockWhy = reason; clockSince = Date.now();
    }
    if (document.visibilityState === 'visible') { pending.open += 1; session.open += 1; }
    if (on) session.focus += 1;
    if (Date.now() - lastLiveWrite > (liveDirty ? 10000 : 30000)) writeLive();
    if (on && ctx.mode === 'active' && scr.cap && ++scr.sec >= scr.cap) {
      scr.capped = true;
      flag('stalled', scr.label);
      setLive({ pos: 'Time limit reached on this screen — clock stopped' }, true);
      flash('Time\'s up on this screen', 'Your clock stopped. Do the next step to start it again.', 'OK');
    }
    if (on) {
      pending.sec += 1;
      if (ctx.stepId) pending.steps[ctx.stepId] = (pending.steps[ctx.stepId] || 0) + 1;
      if (ctx.subject) pending.subj[ctx.subject] = (pending.subj[ctx.subject] || 0) + 1;
      if (ctx.lessonKey) pending.lessons[ctx.lessonKey] = (pending.lessons[ctx.lessonKey] || 0) + 1;
    } else if (ctx.mode === 'active' && document.visibilityState === 'visible' && !isFlashing() && !held && !scr.noCount && !scr.capped
      && !idleFlagged && Date.now() - lastInput >= rules.idleSec * 1000) {
      idleFlagged = true;
      flag('idle');
      flash('Time stopped ⏸', 'No taps for a while, so the clock stopped. Tap below to keep going.', 'Keep going');
    }
    listeners.forEach((fn) => fn({ counting: on, stepSec: stepSec(ctx.stepId) }));
  }, 1000);

  const flushTimer = setInterval(() => flush(), 15000);

  function stepSec(stepId) {
    if (!stepId) return 0;
    return ((day.steps || {})[stepId] || 0) + (pending.steps[stepId] || 0);
  }

  let flushing = false;
  async function flush() {
    if (flushing) return;
    if (logBuf.length) { const batch = logBuf.splice(0); store.saveLog(sid, todayKey(), batch).catch(() => { logBuf.unshift(...batch); }); }
    const p = pending;
    const hasData = p.sec || p.open || Object.keys(p.flags).length;
    pending = { sec: 0, open: 0, steps: {}, subj: {}, lessons: {}, flags: {}, events: [] };
    const date = todayKey();
    const patch = { lastSeen: Date.now(), lastStep: ctx.stepId || null, lastLesson: ctx.lessonKey || null };
    if (hasData) {
      patch.activeSec = inc(p.sec);
      patch.openSec = inc(p.open);
      patch.steps = Object.fromEntries(Object.entries(p.steps).map(([k, v]) => [k, inc(v)]));
      patch.bySubject = Object.fromEntries(Object.entries(p.subj).map(([k, v]) => [k, inc(v)]));
      patch.flags = Object.fromEntries(Object.entries(p.flags).map(([k, v]) => [k, inc(v)]));
      if (p.events.length) patch.events = union(...p.events);
    }
    // Keep the local copy in step so the on-screen timer never jumps backwards.
    day = { ...day, steps: { ...(day.steps || {}) } };
    for (const [k, v] of Object.entries(p.steps)) day.steps[k] = (day.steps[k] || 0) + v;
    flushing = true;
    try {
      await store.saveDay(sid, date, patch);
      for (const [key, v] of Object.entries(p.lessons)) await store.saveLesson(sid, key, { timeSec: inc(v) });
    } catch (e) {
      console.warn('save failed, will retry', e);
      // put it back so nothing is lost
      pending.sec += p.sec; pending.open += p.open;
      for (const k of ['steps', 'subj', 'lessons', 'flags']) for (const [kk, v] of Object.entries(p[k])) pending[k][kk] = (pending[k][kk] || 0) + v;
      pending.events.push(...p.events);
      for (const [k, v] of Object.entries(p.steps)) day.steps[k] -= v;
    } finally { flushing = false; }
  }

  return {
    set(next) { if (ctx.lessonKey !== next.lessonKey || ctx.stepId !== next.stepId) flush(); ctx = { mode: 'off', ...next }; lastInput = Date.now(); this.screen(); },
    off() { ctx = { mode: 'off' }; videoOK = false; },
    // A new screen inside the current step: { cap: seconds, noCount: true, label: 'Learn page' }. Resets the screen's count.
    screen(o = {}) { scr = { cap: o.cap || 0, sec: 0, noCount: !!o.noCount, capped: false, label: o.label || '' }; lastInput = Date.now(); idleFlagged = false; },
    hold(on) { held = !!on; if (!on) lastInput = Date.now(); },
    isHeld: () => held,
    setVideoOK(ok, reason = '') { videoOK = ok; videoWhy = ok ? '' : reason; },
    log,
    setDay(d) { day = d || {}; },
    // today's count of a red flag, including ones not saved yet (they're saved every 15 s) — the Focus-day bonus reads leftApp
    flagCount(type) { return ((day.flags || {})[type] || 0) + (pending.flags[type] || 0); },
    setLive,
    stepSec,
    flag,
    flush,
    onTick(fn) { listeners.add(fn); return () => listeners.delete(fn); },
    destroy() { log('app', 'closed / signed out'); clearInterval(timer); clearInterval(flushTimer); flush(); writeLive({ visible: false }); dead = true; },
  };
}
