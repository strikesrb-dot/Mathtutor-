// Small UI helpers: escaping, icons, the red alert, toasts (Calm Glass), the attention beep.

export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

export function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

export function mmss(sec) {
  sec = Math.max(0, Math.floor(sec));
  const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
  return h ? `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}` : `${m}:${String(s).padStart(2, '0')}`;
}
export function hm(sec) {
  const m = Math.round(sec / 60);
  if (m < 60) return `${m}m`;
  return `${Math.floor(m / 60)}h ${String(m % 60).padStart(2, '0')}m`;
}
// Thin progress bar (pct 0–100).
export function bar(pct) { return `<span class="sc-bar"><i style="width:${Math.min(100, Math.max(0, pct)).toFixed(1)}%"></i></span>`; }

export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

// ── Icons: thin grey line icons (Calm Glass: icons stay grey, the accent marks state only) ──
const P = {
  back: '<path d="M15 5l-7 7 7 7"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.6 9.4a2.5 2.5 0 0 1 4.8.9c0 1.7-2.4 2.1-2.4 3.7M12 17.2v.3"/>',
  person: '<circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c1.4-3.7 4.3-5.5 7.5-5.5s6.1 1.8 7.5 5.5"/>',
  algebra: '<path d="M4 4v16h16"/><path d="M7.5 16.5c2.5-7 5.5-9.5 10-10.5"/>',
  biology: '<path d="M5 19C5 10.5 11 5 19 5c0 8.5-6 14-14 14z"/><path d="M5 19l8-8"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.8 3 2.8 15 0 18M12 3c-2.8 3-2.8 15 0 18"/>',
  cup: '<path d="M5 9h11v5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5V9z"/><path d="M16 11h1.5a2 2 0 0 1 0 4H16M8.5 4v2.5M12.5 4v2.5"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  wrong: '<path d="M7 7l10 10M17 7L7 17"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 2"/>',
  flag: '<path d="M6 21V4"/><path d="M6 4h11l-2.5 4L17 12H6"/>',
  play: '<path d="M8 5.5v13l10.5-6.5z"/>',
  out: '<path d="M14 4h5v16h-5"/><path d="M10 8l-4 4 4 4M6 12h10"/>',
  star: '<path d="M12 4l2.4 5 5.4.6-4 3.7 1.1 5.4L12 16l-4.9 2.7 1.1-5.4-4-3.7 5.4-.6z"/>',
  list: '<path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"/>',
  chat: '<path d="M4.5 5.5h15v10.5H10l-5.5 4v-14.5z"/>',
};
export function icon(name) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${P[name] || ''}</svg>`;
}

// ── Attention beep (works after the first tap on iOS) ──
let actx = null;
export function unlockAudio() {
  try { actx = actx || new (window.AudioContext || window.webkitAudioContext)(); if (actx.state === 'suspended') actx.resume(); } catch {}
}
export function beep() {
  try {
    if (!actx) return;
    const o = actx.createOscillator(), g = actx.createGain();
    o.type = 'square'; o.frequency.value = 880;
    g.gain.setValueAtTime(0.0001, actx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.25, actx.currentTime + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + 0.35);
    o.connect(g).connect(actx.destination); o.start(); o.stop(actx.currentTime + 0.4);
  } catch {}
}

// ── The red alert. Only one at a time; resolves when he taps the button.
//    (The one deliberate use of red outside destructive actions: the owner asked for a bright red flash.)
let flashOpen = null;
export function flash(title, body, button = "I'm back — let's go") {
  if (flashOpen) return flashOpen;
  beep();
  if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
  const el = document.createElement('div');
  el.className = 'sc-flash';
  el.setAttribute('role', 'alertdialog');
  el.innerHTML = `<div class="sc-flash-card"><div class="sc-flash-icon">!</div><h2 class="cg-title1">${esc(title)}</h2><p class="cg-text">${esc(body)}</p><button class="cg-btn cg-btn-strong">${esc(button)}</button></div>`;
  document.body.appendChild(el);
  flashOpen = new Promise((resolve) => {
    el.querySelector('button').addEventListener('click', () => { el.remove(); flashOpen = null; resolve(); });
  });
  return flashOpen;
}
export const isFlashing = () => !!flashOpen;

// ── Toast: the Calm Glass glass toast, optionally with an Undo (or any) action ──
export function toast(msg, opts = {}) {
  if (typeof opts === 'string') opts = {};
  if (window.CalmGlass) return window.CalmGlass.toast(msg, opts.action ? { undo: opts.action, label: opts.label, time: opts.time } : { time: opts.time });
  console.log('toast:', msg);
}

// Re-place segmented-control thumbs after a render.
export function refreshSegs() { try { window.CalmGlass && window.CalmGlass.refresh(); } catch {} }

export function parseYouTubeId(input) {
  const s = String(input || '').trim();
  if (/^[\w-]{11}$/.test(s)) return s;
  const m = s.match(/(?:v=|youtu\.be\/|embed\/|shorts\/|live\/)([\w-]{11})/);
  return m ? m[1] : null;
}
