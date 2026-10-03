// Small UI helpers: escaping, red flash alerts, toasts, the attention beep.

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

export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
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

// ── Big red flash. Only one at a time; resolves when he taps the button. ──
let flashOpen = null;
export function flash(title, body, button = "I'm back — let's go") {
  if (flashOpen) return flashOpen;
  beep();
  if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
  const el = document.createElement('div');
  el.className = 'flash';
  el.setAttribute('role', 'alertdialog');
  el.innerHTML = `<div class="flash-card"><div class="flash-icon">!</div><h2>${esc(title)}</h2><p>${esc(body)}</p><button class="btn btn-white">${esc(button)}</button></div>`;
  document.body.appendChild(el);
  flashOpen = new Promise((resolve) => {
    el.querySelector('button').addEventListener('click', () => { el.remove(); flashOpen = null; resolve(); });
  });
  return flashOpen;
}
export const isFlashing = () => !!flashOpen;

export function toast(msg, kind = '') {
  const el = document.createElement('div');
  el.className = `toast ${kind}`;
  el.textContent = msg;
  document.body.appendChild(el);
  requestAnimationFrame(() => el.classList.add('show'));
  setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 300); }, 2600);
}

export function parseYouTubeId(input) {
  const s = String(input || '').trim();
  if (/^[\w-]{11}$/.test(s)) return s;
  const m = s.match(/(?:v=|youtu\.be\/|embed\/|shorts\/|live\/)([\w-]{11})/);
  return m ? m[1] : null;
}
