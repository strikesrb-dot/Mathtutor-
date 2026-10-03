// The study-time meter. Time only counts when:
//   • the app is on screen (not in another app or tab), and
//   • on a video: the video is actually playing and he answered the last "Still there?" check, or
//   • on reading/quiz screens: he has tapped or typed in the last 90 seconds.
// Everything is saved to the day's record every 15 seconds, and when he leaves the app.

import { inc, union } from './store.js';
import { flash, isFlashing } from './ui.js';
import { todayKey } from './curriculum.js';

export function createTracker(store, sid, rules) {
  let ctx = { mode: 'off' };          // { mode: 'video'|'active'|'off', stepId, subject, lessonKey }
  let videoOK = false;                // set by the video player each second
  let lastInput = Date.now();
  let idleFlagged = false;
  let leftAt = null;
  let day = {};                       // latest saved day record (kept fresh by the caller)
  let pending = { sec: 0, steps: {}, subj: {}, lessons: {}, flags: {}, events: [] };
  const listeners = new Set();

  const counting = () => {
    if (ctx.mode === 'off' || document.visibilityState !== 'visible' || isFlashing()) return false;
    if (ctx.mode === 'video') return videoOK;
    return Date.now() - lastInput < rules.idleSec * 1000;
  };

  const onInput = () => { lastInput = Date.now(); idleFlagged = false; };
  ['pointerdown', 'keydown', 'input', 'scroll', 'touchstart'].forEach((ev) => window.addEventListener(ev, onInput, { passive: true, capture: true }));

  function flag(type, note = '') {
    pending.flags[type] = (pending.flags[type] || 0) + 1;
    pending.events.push({ t: Date.now(), type, step: ctx.stepId || '', note });
  }

  // Away time. iOS can fire "hidden" late or more than once, so the leave moment is the earlier of
  // the first "hidden" event and the last second we saw the app on screen (accurate to about 1 second).
  let lastVisibleBeat = Date.now();
  const awayText = (sec) => (sec < 60 ? `${sec} second${sec === 1 ? '' : 's'}` : `${Math.floor(sec / 60)} min ${sec % 60} sec`);
  function markLeft() {
    if (ctx.mode === 'off' || leftAt != null) return;
    leftAt = Math.min(Date.now(), lastVisibleBeat + 1000);
    flag('leftApp');
  }
  function cameBack(fromTs) {
    const away = Math.max(0, Math.round((Date.now() - fromTs) / 1000));
    leftAt = null;
    lastVisibleBeat = Date.now();
    if (ctx.mode !== 'off' && away >= 3) {
      flash('Hey! You left the app', `You were gone ${awayText(away)}. Time outside the app doesn't count.`);
    }
  }
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') { markLeft(); flush(); }
    else if (leftAt != null) cameBack(leftAt);
  });
  window.addEventListener('pagehide', () => { markLeft(); flush(); });
  window.addEventListener('pageshow', () => { if (leftAt != null && document.visibilityState === 'visible') cameBack(leftAt); });

  const timer = setInterval(() => {
    if (document.visibilityState === 'visible') {
      // Timers freeze while the app is in the background. A big gap with no "hidden" event = he left anyway.
      const gap = Date.now() - lastVisibleBeat;
      if (gap > 4000 && leftAt == null && ctx.mode !== 'off') { leftAt = lastVisibleBeat + 1000; flag('leftApp'); cameBack(leftAt); }
      lastVisibleBeat = Date.now();
    }
    const on = counting();
    if (on) {
      pending.sec += 1;
      if (ctx.stepId) pending.steps[ctx.stepId] = (pending.steps[ctx.stepId] || 0) + 1;
      if (ctx.subject) pending.subj[ctx.subject] = (pending.subj[ctx.subject] || 0) + 1;
      if (ctx.lessonKey) pending.lessons[ctx.lessonKey] = (pending.lessons[ctx.lessonKey] || 0) + 1;
    } else if (ctx.mode === 'active' && document.visibilityState === 'visible' && !isFlashing()
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
    const p = pending;
    const hasData = p.sec || Object.keys(p.flags).length;
    pending = { sec: 0, steps: {}, subj: {}, lessons: {}, flags: {}, events: [] };
    const date = todayKey();
    const patch = { lastSeen: Date.now(), lastStep: ctx.stepId || null, lastLesson: ctx.lessonKey || null };
    if (hasData) {
      patch.activeSec = inc(p.sec);
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
      pending.sec += p.sec;
      for (const k of ['steps', 'subj', 'lessons', 'flags']) for (const [kk, v] of Object.entries(p[k])) pending[k][kk] = (pending[k][kk] || 0) + v;
      pending.events.push(...p.events);
      for (const [k, v] of Object.entries(p.steps)) day.steps[k] -= v;
    } finally { flushing = false; }
  }

  return {
    set(next) { if (ctx.lessonKey !== next.lessonKey || ctx.stepId !== next.stepId) flush(); ctx = { mode: 'off', ...next }; lastInput = Date.now(); },
    off() { ctx = { mode: 'off' }; videoOK = false; },
    setVideoOK(ok) { videoOK = ok; },
    setDay(d) { day = d || {}; },
    stepSec,
    flag,
    flush,
    onTick(fn) { listeners.add(fn); return () => listeners.delete(fn); },
    destroy() { clearInterval(timer); clearInterval(flushTimer); flush(); },
  };
}
