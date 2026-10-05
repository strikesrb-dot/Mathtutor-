// The break games' kit — Slice and Glide run on it. Ported from the owner's Mithlayn site (Repo-1, branch
// claude/read-handoff-plb7xv: site/modules/tools/break-play.js and break-arcade.js). The functions below are lifted from
// those files as they are, so the games keep the API they were written against: K = the break's kit, AR = the arcade kit.
// Left out (Mithlayn only): the āyāt and the Read card between rounds, the counter's reps, the end-of-break pause.
// The game scenes draw their own colours inside the canvas (the break games' exception in Mithlayn's design language;
// see tools/calm-glass.allow.json). Colours outside the scene come from css/app.css (--bp-* mapped to Calm Glass tokens).

/* eslint-disable */
var D = document, W = window;
function el(t, c, h) { var n = D.createElement(t); if (c) n.className = c; if (h != null) n.innerHTML = h; return n; }
function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
function lget(k, d) { try { var v = localStorage.getItem('sc.games.' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } }
function lset(k, v) { try { localStorage.setItem('sc.games.' + k, JSON.stringify(v)); } catch (e) {} }
function RM() { try { return W.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }
function rnd(a, b) { return a + Math.random() * (b - a); }
var TOKN = ['page', 'group', 'fill', 'fill2', 'ink', 'ink2', 'ink3', 'hair', 'acc', 'accsoft', 'pillar', 'pillaredge', 'sand', 'sandhi', 'sandlo',
  'water', 'waterring', 'stonea', 'stoneb', 'stonec', 'z1', 'z2', 'z3', 'z4', 'restbg', 'red', 'green', 'white'];
var TOK = {};
function h2(n) { n = Math.max(0, Math.min(255, Math.round(n))); return (n < 16 ? '0' : '') + n.toString(16); }
function hexOf(c) {
  var m = /\(([^)]+)\)/.exec(c || ''); if (!m) return c;
  var p = m[1].replace(/^srgb\s+/, '').split(/[\s,/]+/).filter(Boolean).map(Number);
  if (/^color\(/.test(c)) p = [p[0] * 255, p[1] * 255, p[2] * 255, p[3]];
  var a = p[3] == null || isNaN(p[3]) ? 1 : p[3];
  return '#' + h2(p[0]) + h2(p[1]) + h2(p[2]) + (a < 1 ? h2(a * 255) : '');
}
function readTok(root) {
  var host = root && root.isConnected ? root : D.body, pr = el('i', 'bp-probe'); host.appendChild(pr);
  TOKN.forEach(function (n) { pr.style.color = 'var(--bp-' + n + ')'; TOK[n] = hexOf(getComputedStyle(pr).color); });
  pr.remove();
  var cs = getComputedStyle(host); TOK.arf = (cs.getPropertyValue('--bp-arf') || '').trim() || 'serif'; TOK.uif = (cs.getPropertyValue('--bp-uif') || '').trim() || 'sans-serif';
}

var themeFns = [];
try { W.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () { if (CUR) readTok(CUR); themeFns.forEach(function (f) { try { f(); } catch (e) {} }); }); } catch (e) {}
var CUR = null;   // the game area on screen (for the colours)

// the frame every game shares: its pill (score) and a bar of keys (Study Coach: no Read key, no Read card)
function scaffold(aw, G, opt) {
  var hud = el('div', 'bp-hud'); hud.innerHTML = '<span class="bp-pill" data-gp></span>'; aw.appendChild(hud);
  var bar = el('div', 'bp-keybar'); bar.innerHTML = opt.keys || ''; aw.appendChild(bar); bar.hidden = !opt.keys;
  var api = { gp: function (t) { hud.querySelector('[data-gp]').textContent = t; measure(); }, hud: hud, bar: bar };
  function measure() {
    if (!aw.clientHeight) return;
    var t = hud.offsetTop + hud.offsetHeight + 12, b = bar.hidden ? 12 : aw.clientHeight - bar.offsetTop + 12;
    aw.style.setProperty('--bp-top', t + 'px'); aw.style.setProperty('--bp-bot', b + 'px'); api.top = t; api.bot = b;
  }
  api.measure = measure; api.top = 64; api.bot = 76;
  try { var ro = new ResizeObserver(measure); ro.observe(aw); ro.observe(hud); ro.observe(bar); } catch (e) {}
  api.rc = { show: function () { setTimeout(function () { if (opt.after) opt.after(false); kick(); }, 0); }, hide: function () {}, isOpen: function () { return false; }, el: null };
  api.free = true; api.read = function () {};
  bar.addEventListener('pointerdown', function (e) { e.stopPropagation(); });
  return api;
}
// Mithlayn pauses games when the break runs out; Study Coach's game time handles its own end (game-time.js)
function breakPause() { return { check: function () { return false; }, el: null }; }

var E = { loops: [], raf: 0, frames: 0, last: 0, live: false };
function loop(on, f) { var o = { on: on, f: f }; E.loops.push(o); return o; }
function anyOn() { for (var i = 0; i < E.loops.length; i++) if (E.loops[i].on()) return true; return false; }
function kick() { if (!E.raf && E.live && !D.hidden && anyOn()) { E.last = 0; E.raf = requestAnimationFrame(frame); } }
function frame(t) {
  E.raf = 0; if (!E.live || D.hidden) return;
  var dt = Math.min(0.066, E.last ? (t - E.last) / 1000 : 0.016); E.last = t; E.frames++;
  var any = false;
  E.loops.slice().forEach(function (l) { if (l.on()) { any = true; try { l.f(dt, t / 1000); } catch (e) { if (W.console) console.error(e); } } });
  if (any) E.raf = requestAnimationFrame(frame);
}
function stopLoop() { if (E.raf) cancelAnimationFrame(E.raf); E.raf = 0; }
D.addEventListener('visibilitychange', function () { if (D.hidden) stopLoop(); else kick(); });
function makeCanvas(parent) {
  var c = el('canvas', 'bp-cv'); c.setAttribute('data-noswipe', ''); parent.appendChild(c); /* v1525: a stroke on a game is the game's, never sheet-pull.js's swipe back */ var ctx = c.getContext('2d'), o = { c: c, ctx: ctx, w: 1, h: 1, onResize: null };
  o.fit = function () {
    var w = c.clientWidth, hh = c.clientHeight; if (!w || !hh) return;
    var dpr = Math.min(3, W.devicePixelRatio || 1);
    if (w === o.w && hh === o.h && c.width === Math.round(w * dpr)) return;
    o.w = w; o.h = hh; c.width = Math.round(w * dpr); c.height = Math.round(hh * dpr); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (o.onResize) o.onResize();
  };
  try { new ResizeObserver(o.fit).observe(c); } catch (e) {}
  return o;
}
function localXY(cv, e) { var r = cv.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; }
function rr(ctx, x, y, w, hh, r) { r = Math.max(0, Math.min(r, w / 2, hh / 2)); ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + hh, r); ctx.arcTo(x + w, y + hh, x, y + hh, r); ctx.arcTo(x, y + hh, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); }
function uiFont(px, wt) { return (wt || 400) + ' ' + px + 'px ' + TOK.uif; }
function overlay(aw) {
  var o = el('div', 'bp-ovl'); o.hidden = true; aw.appendChild(o);
  return { el: o, show: function (t, p, btn) { o.innerHTML = '<div><b>' + t + '</b><p>' + p + '</p>' + (btn ? '<span class="bp-btn on">' + btn + '</span>' : '') + '</div>'; o.hidden = false; }, hide: function () { o.hidden = true; } };
}
function vis(aw) { return function () { return E.live && aw.isConnected && !aw.hidden; }; }
export var K = { el: el, esc: esc, lget: lget, lset: lset, RM: RM, rnd: rnd, makeCanvas: makeCanvas, localXY: localXY, rr: rr, uiFont: uiFont,
breakPause: breakPause, scaffold: scaffold, overlay: overlay, vis: vis, loop: loop, kick: kick,
atGoal: function () { return true; }, overBreak: function () { return false; },
tok: function () { return TOK; }, theme: function (f) { themeFns.push(f); } };

function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
function now() { return performance.now(); }
var ART = 'assets/games/', IMG = {};
var RECT = {
  fruit: [[4, 4, 199, 220], [207, 4, 219, 220], [430, 4, 196, 220], [630, 4, 118, 220], [752, 4, 148, 220], [904, 4, 210, 220], [1118, 4, 218, 220], [1340, 4, 220, 188]],
  halves: [[4, 4, 133, 186], [141, 4, 127, 187], [272, 4, 132, 164], [408, 4, 128, 162], [540, 4, 135, 172], [679, 4, 125, 169], [808, 4, 129, 174], [941, 4, 131, 177], [1076, 4, 133, 210], [1213, 4, 127, 210], [1344, 4, 130, 154], [1478, 4, 130, 154], [1612, 4, 133, 150], [1749, 4, 127, 150], [1880, 4, 136, 162], [2020, 4, 124, 158]],
  splat: [[4, 4, 215, 220], [223, 4, 215, 220], [442, 4, 216, 220], [662, 4, 216, 220], [882, 4, 213, 220], [1099, 4, 215, 220], [1318, 4, 215, 220], [1537, 4, 215, 220]],
  bomb: [[4, 4, 200, 220], [208, 4, 217, 220], [429, 4, 201, 220]],
  runner: [[4, 4, 116, 300], [124, 4, 107, 300], [235, 4, 139, 300], [378, 4, 99, 300], [481, 4, 126, 300], [611, 4, 113, 300]],
  obst: [[4, 4, 270, 300], [278, 4, 300, 203], [582, 4, 300, 283], [886, 4, 244, 245], [1134, 4, 234, 259], [1372, 4, 300, 247]],
  toss: [[4, 4, 280, 276], [288, 4, 286, 287], [578, 4, 239, 300], [821, 4, 208, 300]],
  side: [[4, 4, 260, 129], [268, 4, 260, 136], [532, 4, 260, 130], [796, 4, 260, 149], [1060, 4, 260, 223], [1324, 4, 117, 260], [1445, 4, 260, 155]],
  fruit2: [[4, 4, 206, 220], [214, 4, 174, 220], [392, 4, 167, 220], [563, 4, 202, 220], [769, 4, 190, 220], [963, 4, 200, 220], [1167, 4, 200, 220], [1371, 4, 149, 220]],
  halves2: [[4, 4, 140, 150], [148, 4, 120, 123], [272, 4, 129, 143], [405, 4, 131, 143], [540, 4, 127, 156], [671, 4, 133, 156], [808, 4, 128, 196], [940, 4, 132, 200], [1076, 4, 129, 151], [1209, 4, 131, 151], [1344, 4, 130, 172], [1478, 4, 130, 173], [1612, 4, 130, 185], [1746, 4, 130, 185], [1880, 4, 129, 182], [2013, 4, 131, 184]],
  bananas: [[4, 4, 171, 220], [179, 4, 153, 220], [336, 4, 152, 220], [492, 4, 189, 220]],
  runpow: [[4, 4, 179, 200], [187, 4, 200, 169], [391, 4, 200, 198], [595, 4, 159, 200]],
  balls: [[4, 4, 120, 120], [128, 4, 120, 108], [252, 4, 116, 120], [372, 4, 120, 120], [496, 4, 120, 120], [620, 4, 120, 120], [744, 4, 120, 119], [868, 4, 120, 120]]
};
function img(n) {
  var o = IMG[n]; if (o) return o;
  o = IMG[n] = { i: new Image(), ok: false }; o.i.decoding = 'async';
  o.p = new Promise(function (res) { o.i.onload = function () { o.ok = true; res(o); }; o.i.onerror = function () { res(o); }; });
  o.i.src = ART + n + '.webp'; return o;
}
function ready(list) { return Promise.all(list.map(function (n) { return img(n).p; })); }
// one sprite, by its box, centred on (x, y), h tall (w from its own shape); a = rotation
function spr(ctx, n, k, x, y, h, a, alpha) {
  var o = img(n); if (!o.ok) return 0; var r = RECT[n][k], w = h * r[2] / r[3];
  if (a || alpha != null) { ctx.save(); ctx.translate(x, y); if (a) ctx.rotate(a); if (alpha != null) ctx.globalAlpha = alpha; ctx.drawImage(o.i, r[0], r[1], r[2], r[3], -w / 2, -h / 2, w, h); ctx.restore(); }
  else ctx.drawImage(o.i, r[0], r[1], r[2], r[3], x - w / 2, y - h / 2, w, h);
  return w;
}
function cover(ctx, n, w, h, ax, ay) {   // a backdrop over the whole stage, cropped to fill it (ax, ay: where the crop leans, 0–1)
  var o = img(n); if (!o.ok) return false; var iw = o.i.naturalWidth, ih = o.i.naturalHeight, s = Math.max(w / iw, h / ih);
  ctx.drawImage(o.i, (w - iw * s) * (ax == null ? 0.5 : ax), (h - ih * s) * (ay == null ? 0.5 : ay), iw * s, ih * s); return true;
}
// ═══ the sound: Web Audio, off by default ═══
var SND = { on: !!K.lget('sound', false), ac: null };
function ac() { if (!SND.ac) { var C = W.AudioContext || W.webkitAudioContext; if (!C) return null; try { SND.ac = new C(); } catch (e) { return null; } } if (SND.ac.state === 'suspended') SND.ac.resume(); return SND.ac; }
function noise(a, dur) { var b = a.createBuffer(1, Math.max(1, Math.round(a.sampleRate * dur)), a.sampleRate), d = b.getChannelData(0); for (var i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; var s = a.createBufferSource(); s.buffer = b; return s; }
function env(a, g, t, peak, att, dec) { g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + att); g.gain.exponentialRampToValueAtTime(0.0001, t + att + dec); }
function play(kind, v) {
  if (!SND.on) return; var a = ac(); if (!a) return; var t = a.currentTime, g = a.createGain(); g.connect(a.destination); v = v == null ? 1 : v;
  if (kind === 'crack') { var n = noise(a, 0.12), f = a.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 2400; f.Q.value = 0.8; n.connect(f); f.connect(g); env(a, g, t, 0.9 * v, 0.002, 0.11); n.start(t);
    var o = a.createOscillator(), g2 = a.createGain(); o.frequency.setValueAtTime(180, t); o.frequency.exponentialRampToValueAtTime(60, t + 0.12); o.connect(g2); g2.connect(a.destination); env(a, g2, t, 0.6 * v, 0.002, 0.12); o.start(t); o.stop(t + 0.15); }
  else if (kind === 'cheer') { var n2 = noise(a, 2.4), f2 = a.createBiquadFilter(); f2.type = 'bandpass'; f2.frequency.value = 1100; f2.Q.value = 0.5; n2.connect(f2); f2.connect(g); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.35, t + 0.5); g.gain.exponentialRampToValueAtTime(0.0001, t + 2.3); n2.start(t); }
  else if (kind === 'swish') { var n3 = noise(a, 0.18), f3 = a.createBiquadFilter(); f3.type = 'highpass'; f3.frequency.setValueAtTime(800, t); f3.frequency.exponentialRampToValueAtTime(5000, t + 0.15); n3.connect(f3); f3.connect(g); env(a, g, t, 0.25 * v, 0.02, 0.15); n3.start(t); }
  else if (kind === 'splat') { var n4 = noise(a, 0.2), f4 = a.createBiquadFilter(); f4.type = 'lowpass'; f4.frequency.value = 900; n4.connect(f4); f4.connect(g); env(a, g, t, 0.5 * v, 0.004, 0.18); n4.start(t); }
  else if (kind === 'boom') { var n5 = noise(a, 0.9), f5 = a.createBiquadFilter(); f5.type = 'lowpass'; f5.frequency.setValueAtTime(1200, t); f5.frequency.exponentialRampToValueAtTime(80, t + 0.8); n5.connect(f5); f5.connect(g); env(a, g, t, 0.9, 0.005, 0.85); n5.start(t); }
  else if (kind === 'coin') { [988, 1319].forEach(function (fq, i) { var o2 = a.createOscillator(), g3 = a.createGain(); o2.type = 'square'; o2.frequency.value = fq; o2.connect(g3); g3.connect(a.destination); env(a, g3, t + i * 0.07, 0.08, 0.003, 0.12); o2.start(t + i * 0.07); o2.stop(t + i * 0.07 + 0.16); }); }
  else if (kind === 'thud') { var o3 = a.createOscillator(); o3.frequency.setValueAtTime(120, t); o3.frequency.exponentialRampToValueAtTime(45, t + 0.2); o3.connect(g); env(a, g, t, 0.7 * v, 0.003, 0.2); o3.start(t); o3.stop(t + 0.25); }
  else if (kind === 'rustle') { var n6 = noise(a, 0.25), f6 = a.createBiquadFilter(); f6.type = 'bandpass'; f6.frequency.value = 3200; f6.Q.value = 1.5; n6.connect(f6); f6.connect(g); env(a, g, t, 0.18, 0.01, 0.22); n6.start(t); }
  else if (kind === 'freeze') { [1760, 2349, 3136].forEach(function (fq, i) { var o5 = a.createOscillator(), g5 = a.createGain(); o5.type = 'triangle'; o5.frequency.value = fq; o5.connect(g5); g5.connect(a.destination); env(a, g5, t + i * 0.05, 0.09, 0.005, 0.6); o5.start(t + i * 0.05); o5.stop(t + i * 0.05 + 0.7); }); }
  else if (kind === 'frenzy') { var o6 = a.createOscillator(); o6.type = 'sawtooth'; o6.frequency.setValueAtTime(220, t); o6.frequency.exponentialRampToValueAtTime(880, t + 0.35); var f7 = a.createBiquadFilter(); f7.type = 'lowpass'; f7.frequency.value = 1800; o6.connect(f7); f7.connect(g); env(a, g, t, 0.18, 0.01, 0.4); o6.start(t); o6.stop(t + 0.45); }
  else if (kind === 'combo') { [523, 659, 784, 1047].forEach(function (fq, i) { var o7 = a.createOscillator(), g7 = a.createGain(); o7.type = 'square'; o7.frequency.value = fq; o7.connect(g7); g7.connect(a.destination); env(a, g7, t + i * 0.06, 0.06, 0.003, 0.12); o7.start(t + i * 0.06); o7.stop(t + i * 0.06 + 0.15); }); }
  else if (kind === 'crit') { var o8 = a.createOscillator(); o8.type = 'square'; o8.frequency.setValueAtTime(1400, t); o8.frequency.exponentialRampToValueAtTime(2800, t + 0.12); o8.connect(g); env(a, g, t, 0.08, 0.003, 0.18); o8.start(t); o8.stop(t + 0.2); }
  else if (kind === 'clang') { [520, 1310, 2140].forEach(function (fq) { var o4 = a.createOscillator(), g4 = a.createGain(); o4.frequency.value = fq; o4.connect(g4); g4.connect(a.destination); env(a, g4, t, 0.1, 0.002, 0.5); o4.start(t); o4.stop(t + 0.55); }); }
}
function soundKey() { return '<button type="button" class="bp-btn ba-snd" data-snd aria-pressed="' + SND.on + '">' + (SND.on ? 'Sound on' : 'Sound off') + '</button>'; }
D.addEventListener('click', function (e) {
  var b = e.target.closest && e.target.closest('.sc-game [data-snd]'); if (!b) return;
  e.stopPropagation(); SND.on = !SND.on; K.lset('sound', SND.on); if (SND.on) { ac(); play('coin'); }
  [].forEach.call(D.querySelectorAll('.sc-game [data-snd]'), function (x) { x.textContent = SND.on ? 'Sound on' : 'Sound off'; x.setAttribute('aria-pressed', String(SND.on)); });
}, true);
function buzz(ms) { try { if (navigator.vibrate) navigator.vibrate(ms); } catch (e) {} }
// ═══ the shared frame of a game: the stage, its menu panel, the score pill, the keys (Menu, Sound) ═══
function gameFrame(aw, G, o) {
  aw.setAttribute('data-noswipe', '');   // v1525 (owner: "pomegranate isn't working"): a slice to the right was sheet-pull.js's swipe back — it left the game
  var cv = K.makeCanvas(aw), ctx = cv.ctx, pn = el('div', 'ba-pn'); pn.hidden = true; aw.appendChild(pn);
  var sc = K.scaffold(aw, G, { keys: (o.keys || '') + soundKey(), before: function () { if (o.pause) o.pause(); if (o.before) o.before(); }, after: function (ok) { if (o.after) o.after(ok); if (o.resume) o.resume(); } });
  var bp = K.breakPause(aw, { pause: o.pause, resume: o.resume });
  var g = { cv: cv, ctx: ctx, sc: sc, bp: bp, pn: pn, live: false };
  g.panel = function (h) { pn.innerHTML = '<div class="ba-pc">' + h + '</div>'; pn.hidden = false; };
  g.close = function () { pn.hidden = true; pn.innerHTML = ''; };
  // the round is over: in Mithlayn the āyāt are read twice here; in Study Coach the game just goes on
  g.round = function (then) { then(); };
  g.vis = K.vis(aw);
  return g;
}
function swipeOn(target, h) {   // a pointer swipe: down, the path, up — one finger (a second one is ignored), no page gestures
  var p = null; target.style.touchAction = 'none';
  target.addEventListener('pointerdown', function (e) { if (p) return; e.preventDefault(); var t = now(); p = { id: e.pointerId, x: e.clientX, y: e.clientY, t: t, pts: [[e.clientX, e.clientY, t]] }; try { target.setPointerCapture(e.pointerId); } catch (x) {} if (h.down) h.down(e, p); });
  target.addEventListener('pointermove', function (e) { if (!p || e.pointerId !== p.id) return; p.pts.push([e.clientX, e.clientY, now()]); if (h.move) h.move(e, p); });
  target.addEventListener('pointerup', function (e) { if (!p || e.pointerId !== p.id) return; var l = p.pts[p.pts.length - 1]; if (!l || l[0] !== e.clientX || l[1] !== e.clientY) { p.pts.push([e.clientX, e.clientY, now()]); if (h.move) h.move(e, p); } var q = p; p = null; if (h.up) h.up(e, q); });   // critique r1: Safari often gives the last stretch of a flick only on the lift
  target.addEventListener('pointercancel', function (e) { if (!p || e.pointerId !== p.id) return; p = null; if (h.cancel) h.cancel(); });
}
function pvLoad(list, f) { return function (ctx, w, h, t, T) { ready(list); f(ctx, w, h, t, T); }; }
export var AR = { img: img, ready: ready, spr: spr, cover: cover, play: play, buzz: buzz, frame: gameFrame, swipeOn: swipeOn, RECT: RECT, clamp: clamp, now: now, pvLoad: pvLoad, sound: function () { return SND.on; } };

// ── Study Coach: put a game in a box, and take it out again ──
var MAKERS = { slice: function () { return import('./slice.js'); }, glide: function () { return import('./glide.js'); } };
export async function mountGame(id, host) {
  var aw = el('div', 'bp-aw'); aw.setAttribute('data-act', id); host.appendChild(aw);
  CUR = aw; readTok(aw); E.live = true;
  var mod = await MAKERS[id]();
  var api = mod.make(aw, { dev: W.innerWidth >= 744 ? 'pad' : 'phone' });
  api.start();
  return {
    api: api,
    destroy: function () { try { api.stop(); } catch (e) {} E.loops = []; themeFns = []; stopLoop(); if (CUR === aw) CUR = null; aw.remove(); },
  };
}
