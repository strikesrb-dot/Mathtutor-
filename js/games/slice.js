// Slice — ported from the owner's Mithlayn site (Repo-1, branch claude/read-handoff-plb7xv, site/modules/tools/break-slice.js,
// commit 468ed1d). The game below is the original, unchanged except: it is an ES module that gets its kit from ./kit.js, the
// art and font load from assets/, and between rounds it goes straight to the results (no āyāt reading — that is Mithlayn's).
// Study Coach runs it inside game time (js/game-time.js). Its original notes follow.
//
// modules/tools/break-slice.js — v1521. SLICE: a full fruit-slicing game for the Counter's break, in the classic's shape.
// The owner (2026-10-04): "Make fruit ninja have the frenzy fruit, freeze, double, combo give me the full experience … do research
//   on all modes … i want every mode + a frenzy and combo and high streak, slice streaks everything please make it realistic. In
//   between games put the ayat and make me read it twice scroll style". Researched from the original's own descriptions (its
//   Wikipedia page and the publisher's guides): Classic (three dropped fruit or one bomb ends it; a life back at every hundred
//   while one is lost), Zen (90 seconds, no bombs), Arcade (60 seconds; a bomb costs 10; the Frenzy, Freeze and Double bananas,
//   which stack; Blitz from combos in a row; critical hits; a pomegranate at the end to slice again and again); combos (three or
//   more in one swipe add one each); the rare dragonfruit (50) and the pomegranate in Classic. A menu of fruit to slice to start.
//   Our own name and our own art (mithlayn-assets/games: fruit, fruit2, halves, halves2, splat, bananas, board, dojo).
// CALLED BY: zero.html, after break-arcade.js (its kit: window.__arcade) — it adds "Slice" to the break's Sport group.
// SAFE TO DELETE: yes, with its <script> tag; the break keeps its other games.

import { K, AR } from './kit.js';

var D = document, el = K.el, RM = K.RM, rnd = K.rnd, rr = K.rr, clamp = AR.clamp, now = AR.now, spr = AR.spr, cover = AR.cover, play = AR.play, buzz = AR.buzz;
// the fruit: [sheet, index, halves sheet, height × the base size, splash colour (splat sheet), name]
var FR = [['fruit', 0, 'halves', 1.15, 0, 'watermelon'], ['fruit', 1, 'halves', 0.85, 1, 'orange'], ['fruit', 2, 'halves', 0.85, 6, 'apple'], ['fruit', 3, 'halves', 1.2, 7, 'pineapple'],
  ['fruit', 4, 'halves', 0.9, 6, 'pear'], ['fruit', 5, 'halves', 0.8, 2, 'lemon'], ['fruit', 6, 'halves', 0.85, 1, 'peach'], ['fruit', 7, 'halves', 0.95, 6, 'coconut'],
  ['fruit2', 0, 'halves2', 0.95, 2, 'banana'], ['fruit2', 1, 'halves2', 0.75, 3, 'kiwi'], ['fruit2', 2, 'halves2', 0.72, 0, 'strawberry'], ['fruit2', 3, 'halves2', 0.9, 7, 'mango'],
  ['fruit2', 4, 'halves2', 0.75, 5, 'plum'], ['fruit2', 5, 'halves2', 0.85, 3, 'green apple']];
var POM_T = 4.2, POM = ['fruit2', 6, 'halves2', 1.35, 0, 'pomegranate'], DRAGON = ['fruit2', 7, 'halves2', 0.9, 4, 'dragonfruit'];
var JC = ['#d9262c', '#f08a1c', '#f5d22b', '#7cc242', '#e8508e', '#7b3fa0', '#f4f1e8', '#f2b52b'];
// v1521b (owner's reference shots): the blade is a glowing swoosh that tapers to a point; each blade its own trail and sparkle
var BLADES = [{ id: 'classic', n: 'Classic', c: ['255,255,255', '170,215,255'], fx: 'spark', need: null },
  { id: 'gold', n: 'Golden', c: ['255,250,215', '255,190,40'], fx: 'star', need: ['best', 'classic', 60] },
  { id: 'fire', n: 'Fire', c: ['255,235,150', '255,90,30'], fx: 'ember', need: ['best', 'classic', 120] },
  { id: 'ice', n: 'Ice', c: ['235,252,255', '80,200,255'], fx: 'snow', need: ['best', 'arcade', 200] },
  { id: 'bolt', n: 'Lightning', c: ['245,250,255', '140,160,255'], fx: 'bolt', need: ['combo', 5] },
  { id: 'leaf', n: 'Bamboo', c: ['235,255,215', '90,190,60'], fx: 'leaf', need: ['best', 'zen', 250] },
  { id: 'dusk', n: 'Dusk', c: ['250,225,255', '170,70,230'], fx: 'star', need: ['games', 15] },
  { id: 'rainbow', n: 'Rainbow', c: ['255,255,255', '255,120,120'], fx: 'rainbow', need: ['best', 'arcade', 400] }];
var GF = "'Lilita One', ";   // the game's lettering (assets/fonts, SIL Open Font License: assets/fonts/OFL.txt); the UI font if it has not loaded
try { if (window.FontFace && !window.__lilita) { window.__lilita = 1; var ff = new FontFace('Lilita One', 'url(assets/fonts/lilita-one.woff2)'); ff.load().then(function (f) { document.fonts.add(f); }, function () {}); } } catch (e) {}
var BAN = { frenzy: { k: 0, n: 'Frenzy', t: 4.5, c: '#ff7a3c' }, freeze: { k: 1, n: 'Freeze', t: 6, c: '#7fd3ff' }, double: { k: 2, n: 'Double score', t: 6.5, c: '#ffd34d' } };
var MODES = { classic: { n: 'Classic', ring: FR[0], sub: '3 drops or a bomb' }, arcade: { n: 'Arcade', ring: ['bananas', 2, null, 1, 7, 'banana'], sub: '60 s · bananas' }, zen: { n: 'Zen', ring: FR[9], sub: '90 s · no bombs' },
  frenzy: { n: 'Frenzy', ring: ['bananas', 0, null, 1, 7, 'banana'], sub: 'Bananas galore · no bombs' } };   // v1524/v1526 (owner): Arcade's rules, no bombs; against Arcade the Frenzy banana three times as often, Freeze and Double twice

function mkSlice(aw, G) {
  var S = K.lget('slice2', null) || { best: { classic: 0, arcade: 0, zen: 0, frenzy: 0 }, combo: 0, streak: 0, blade: 'classic', games: 0 };
  function save() { K.lset('slice2', S); }
  function arc() { return mode === 'arcade' || mode === 'frenzy'; }   // the timed modes with bananas, Blitz and the pomegranate
  var st = 'menu', mode = 'classic', score = 0, lives = 3, items = [], bits = [], stains = [], drops = [], pops = [], sparks = [], trail = [], tLeft = 0, gameT = 0, volT = 0, volN = 0;
  var banNext = 6, bonus = { frenzy: 0, freeze: 0, double: 0 }, frenT = 0, blitzN = 0, lastComboAt = 0, streak = 0, bestStreakRun = 0, sliced = 0, missed = 0, combos = 0, bestCombo = 0, crits = 0, flash = 0, shake = 0, pom = null, lifeAt = 100, rings = [], ringsUntil = 0, isOn = false, holdSt = null, stats = null;
  var g = AR.frame(aw, G, { keys: '<button type="button" class="bp-btn" data-smenu>Menu</button>',
    pause: function () { if (st === 'play' || st === 'pom') { endSwipe(); trail = []; holdSt = st; st = 'held'; } }, resume: function () { if (st === 'held') { st = holdSt; holdSt = null; } } });
  var cv = g.cv, ctx = g.ctx, lw0 = 0, lh0 = 0, glows = [], drift = [];
  var modes = el('div', 'ba-modes'); aw.appendChild(modes);   // the menu's keys (the fruit to slice are on the stage; these are the same choices, for a tap or a keyboard)
  function U() { return Math.min(cv.w, cv.h); }
  function base() { return clamp(U() * 0.2, 64, 120); }
  cv.onResize = function () {
    if (lw0 && lh0) { var sx = cv.w / lw0, sy = cv.h / lh0, ss = Math.min(sx, sy);
      items.concat(bits).forEach(function (o) { o.x *= sx; o.y *= sy; o.vx *= sx; o.vy *= sy; o.h *= ss; if (o.r) o.r *= ss; });
      stains.forEach(function (o) { o.x *= sx; o.y *= sy; o.s *= ss; }); drops.forEach(function (o) { o.x *= sx; o.y *= sy; o.vx *= sx; o.vy *= sy; });
      if (pom) { pom.x *= sx; pom.y *= sy; pom.ty *= sy; pom.r *= ss; pom.h *= ss; } trail.forEach(function (p) { p[0] *= sx; p[1] *= sy; }); sparks.forEach(function (p) { p.x *= sx; p.y *= sy; }); pops.forEach(function (p) { p.x *= sx; p.y *= sy; }); }
    lw0 = cv.w; lh0 = cv.h; if (st === 'menu') layRings();
  };
  function blade() { for (var i = 0; i < BLADES.length; i++) if (BLADES[i].id === S.blade) return BLADES[i]; return BLADES[0]; }
  function open(b) { var n = b.need; if (!n) return true; if (n[0] === 'best') return (S.best[n[1]] || 0) >= n[2]; if (n[0] === 'combo') return (S.combo || 0) >= n[1]; return (S.games || 0) >= n[1]; }
  function needText(b) { var n = b.need; return n[0] === 'best' ? 'Score ' + n[2] + ' in ' + MODES[n[1]].n : n[0] === 'combo' ? 'A ' + n[1] + '-fruit combo' : 'Play ' + n[1] + ' games'; }
  function gy() { return cv.h * 1.6; }   // critique r2: snappier arcs, the same heights
  // ── throwing: a volley from below; frenzy streams from the sides ──
  function toss(f, x, kind, o) {
    o = o || {}; var Hd = cv.h, Wd = cv.w, h = base() * f[3];
    var peak = Hd * rnd(o.lo != null ? o.lo : 0.58, o.hi != null ? o.hi : 0.92), vy = -Math.sqrt(2 * gy() * peak), vx = o.vx != null ? o.vx : (Wd / 2 - x) * rnd(0.25, 0.85);
    items.push({ f: f, kind: kind || 'fruit', x: x, y: o.y != null ? o.y : Hd + h * 0.6, vx: vx, vy: o.vy != null ? o.vy : vy, a: rnd(0, 6), va: rnd(-3.5, 3.5), h: h, r: h * 0.44, delay: o.delay || 0, dead: false, hits: 0 });
  }
  function volley() {
    var Wd = cv.w, t = gameT, hard = clamp(t / (mode === 'classic' ? 150 : 50), 0, 1), cap = Wd < 430 ? 5 : 7;
    var n = clamp(1 + Math.floor(rnd(0, 2 + hard * 4)), 1, cap), pat = Math.random(), bombs = 0;
    if (arc() || (mode === 'zen' && volN > 1)) n = Math.max(2, n);   // critique r4: Arcade and Zen come in groups
    if (mode !== 'zen' && mode !== 'frenzy' && volN > 1 && Math.random() < 0.18 + hard * 0.3) bombs = Math.random() < 0.25 + hard * 0.3 && n > 2 ? 2 : 1;
    if (mode === 'classic' && volN > 3 && Math.random() < 0.05) n = Math.max(1, n - 1);
    var fruitN = Math.max(1, n - bombs), fxs = [];
    for (var i = 0; i < fruitN; i++) {
      var f = FR[Math.floor(Math.random() * FR.length)], x, o = {};
      if (pat < 0.25) { x = Wd * (0.15 + 0.7 * i / Math.max(1, n - 1)); o.delay = i * 0.14; o.vx = rnd(-30, 30); }       // a line, one after another
      else if (pat < 0.45) { x = Wd * rnd(0.42, 0.58); o.vx = (i - (n - 1) / 2) * Wd * 0.12; }                     // a fan from the middle
      else if (pat < 0.6) { x = Wd * rnd(0.2, 0.8); o.delay = i * 0.06; }                                          // a burst
      else { x = Wd * rnd(0.12, 0.88); o.delay = rnd(0, 0.35); }                                                  // scattered
      fxs.push(x); toss(f, x, 'fruit', o);
    }
    var bxs = []; for (var b = 0; b < bombs; b++) { var bx, tr = 0; do { bx = Wd * rnd(0.18, 0.82); } while (tr++ < 12 && bxs.concat(fxs).some(function (x0) { return Math.abs(x0 - bx) < base() * 1.05; })); bxs.push(bx); toss(['bananas', 3, null, 0.95, 5, 'bomb'], bx, 'bomb', { delay: rnd(0.05, 0.3) }); }   // a bomb takes a fruit's place, apart from the others
    if (arc() && gameT >= banNext && items.filter(function (o) { return !o.dead && o.kind === 'banana'; }).length < (mode === 'frenzy' ? 2 : 1)) { banNext = gameT + (mode === 'frenzy' ? rnd(7, 11) * 3 / 7 : rnd(7, 11)); var bk = mode === 'frenzy' ? ['frenzy', 'frenzy', 'frenzy', 'freeze', 'freeze', 'double', 'double'][Math.floor(Math.random() * 7)] : ['frenzy', 'freeze', 'double'][Math.floor(Math.random() * 3)]; /* v1526 Frenzy mode (owner): against Arcade, the Frenzy banana three times as often, Freeze and Double twice */ toss(['bananas', BAN[bk].k, null, 1, 2, bk], Wd * rnd(0.25, 0.75), 'banana', { delay: rnd(0.1, 0.4) }); items[items.length - 1].ban = bk; }
    if (mode === 'classic' && volN > 4 && Math.random() < 0.06) toss(POM, Wd * rnd(0.35, 0.65), 'pom', { lo: 0.6, hi: 0.75, vx: rnd(-40, 40) });
    if (mode === 'classic' && volN > 6 && Math.random() < 0.025) toss(DRAGON, Wd * rnd(0.2, 0.8), 'dragon', { lo: 0.75, hi: 0.9 });
    volN++;
    volT = mode === 'zen' ? rnd(0.85, 1.35) : arc() ? clamp(rnd(1.1, 1.7) - hard * 0.38, 0.72, 1.7) : clamp(rnd(1.5, 2.3) - hard * 0.75, 0.75, 2.3);
    if (volN % 7 === 0) volT += 1.1;   // a rest beat
  }
  function frenzyTick() {   // fruit pours in from both sides, no bombs
    var Wd = cv.w, Hd = cv.h, left = Math.random() < 0.5, f = FR[Math.floor(Math.random() * FR.length)], h = base() * f[3];
    items.push({ f: f, kind: 'fruit', x: left ? -h : Wd + h, y: Hd * rnd(0.45, 0.85), vx: (left ? 1 : -1) * Wd * rnd(0.55, 0.9), vy: -Math.sqrt(2 * gy() * Hd * rnd(0.22, 0.42)), a: rnd(0, 6), va: rnd(-4, 4), h: h, r: h * 0.44, delay: 0, dead: false, hits: 0, side: 1 });
  }
  // ── slicing ──
  function segDist(a, b, it) { var dx = b[0] - a[0], dy = b[1] - a[1], L2 = dx * dx + dy * dy, t = L2 ? clamp(((it.x - a[0]) * dx + (it.y - a[1]) * dy) / L2, 0, 1) : 0; return Math.hypot(a[0] + dx * t - it.x, a[1] + dy * t - it.y); }
  var sw = null;   // the swipe now: the fruit it has cut, where it is
  function cutAlong(a, b) {
    if (sw && sw.blocked) return;   // critique r4: a bomb ends that stroke
    if (st !== 'play' && st !== 'pom' && st !== 'menu') return;
    if (st === 'menu') { rings.forEach(function (rg) { if (!rg.cut && segDist(a, b, rg) < rg.r) cutRing(rg, a, b); }); return; }
    if (pom && pom.live && segDist(a, b, pom) < pom.r && (!pom.lastCut || now() - pom.lastCut > 30)) { pomHit(a, b); }
    var dx = b[0] - a[0], dy = b[1] - a[1];   // critiques r2–r3: cut in the blade's order; a bomb stops the stroke there
    var hits = items.filter(function (it) { return !it.dead && it.delay <= 0 && it.y <= cv.h + it.h * 0.2 && segDist(a, b, it) < it.r; })
      .sort(function (p, q) { return ((p.x - a[0]) * dx + (p.y - a[1]) * dy) - ((q.x - a[0]) * dx + (q.y - a[1]) * dy); });
    for (var i = 0; i < hits.length; i++) {
      var it = hits[i];
      if (it.kind === 'pom') { if (!it.lastCut || now() - it.lastCut > 70) pomClassicHit(it, a, b); continue; }
      it.dead = true;
      if (it.kind === 'bomb') { boom(it); break; }
      slice(it, a, b);
    }
  }
  function slice(it, a, b) {
    var ang = Math.atan2(b[1] - a[1], b[0] - a[0]), nx = -Math.sin(ang), ny = Math.cos(ang), sp = U() * 0.9, f = it.f, mult = bonus.double > 0 ? 2 : 1, pts = 1;
    if (it.kind === 'banana' && sw) { var tb = now(); if (sw.last && tb - sw.last > 300) flushCombo(); sw.last = tb; sw.n++; sw.x = it.x; sw.y = it.y; }   // a banana counts toward the stroke's combo
    if (it.kind === 'banana') { var B = BAN[it.ban], was = bonus[it.ban] > 0; bonus[it.ban] = Math.min(B.t * 3, bonus[it.ban] + B.t); /* bananas stack */ pop(it.x, it.y, B.n + '!', B.c, 26); play(it.ban === 'freeze' ? 'freeze' : it.ban === 'frenzy' ? 'frenzy' : 'combo'); if (it.ban === 'frenzy' && !was) frenT = 0; }
    else if (it.kind === 'dragon') { pts = 50; pop(it.x, it.y, 'Dragonfruit +50', '#ff7ac8', 24); play('combo'); }
    if (it.kind !== 'banana') {
      var crit = it.kind === 'fruit' && Math.random() < (arc() ? 0.045 : 0.032);
      if (crit) { pts = 10; crits++; pop(it.x, it.y - it.h * 0.6, 'Critical! +10', '#ff4d4d', 24); sparks.push({ x: it.x, y: it.y, t: 0, big: 1 }); play('crit'); }
      score += pts * mult; sliced++; streak++; if (streak > bestStreakRun) bestStreakRun = streak;
      if (streak === 25 || streak === 50 || streak === 100 || streak === 200) pop(cv.w / 2, cv.h * 0.32, streak + ' in a row', '#8be0ff', 26);
      if (sw) { var tc = now(); if (sw.last && tc - sw.last > 300) { flushCombo(); } sw.last = tc; sw.n++; sw.x = it.x; sw.y = it.y; (sw.at = sw.at || []).push([it.x, it.y, it.h]); }
    }
    // the two halves fly apart along the cut; juice on the board; droplets; a flash at the cut
    if (f[2]) [0, 1].forEach(function (s2) { var sg = s2 ? 1 : -1; bits.push({ sh: f[2], k: f[1] * 2 + s2, x: it.x + nx * sg * it.r * 0.25, y: it.y + ny * sg * it.r * 0.25, vx: it.vx * 0.5 + nx * sg * sp * 0.32, vy: Math.min(it.vy * 0.35, 0) + ny * sg * sp * 0.32 - U() * 0.25, a: it.a || ang, va: sg * rnd(2, 5), h: it.h * 0.92 }); });
    else bits.push({ sh: f[0], k: f[1], x: it.x, y: it.y, vx: it.vx * 0.4, vy: -U() * 0.2, a: it.a, va: rnd(-4, 4), h: it.h, fade: 1 });
    stains.push({ k: f[4], x: it.x, y: it.y, s: it.h * rnd(1.2, 1.6), a: rnd(0, 6), t: 0 });
    for (var i = 0; i < 12; i++) drops.push({ c: f[4], x: it.x, y: it.y, vx: rnd(-1, 1) * U() * 0.7, vy: rnd(-1, 0.3) * U() * 0.7, t: 0, r: rnd(2, 4.5) });
    sparks.push({ x: it.x, y: it.y, t: 0, a: ang });
    lifeCheck(); play('splat', 0.8); buzz(6);
  }
  function lifeCheck() { if (mode === 'classic' && score >= lifeAt) { if (lives < 3) { lives++; pop(cv.w * 0.82, (g.sc.top || 64) + 30, 'Extra life', '#9ef0a5', 20); play('coin'); } lifeAt = Math.floor(score / 100) * 100 + 100; } }
  function boom(it) {
    if (sw) { flushCombo(); sw.n = 0; sw.blocked = true; }
    flash = 1; shake = RM() ? 0 : 18; play('boom'); buzz(70); streak = 0; blitzN = 0;
    stains.push({ k: 5, x: it.x, y: it.y, s: it.h * 2.4, a: 0, t: 0 }); for (var i = 0; i < 40; i++) sparks.push({ x: it.x, y: it.y, vx: rnd(-1, 1) * U(), vy: rnd(-1, 1) * U(), t: 0, ember: 1 });
    if (arc()) { bonus.frenzy = 0; score = Math.max(0, score - 10); pop(it.x, it.y, '−10', '#ff6b6b', 26); items.forEach(function (o) { if (o !== it && !o.dead) { o.dead = true; drops.push({ c: 6, x: o.x, y: o.y, vx: 0, vy: 0, t: 0.4, r: 6 }); } }); volT = 0.9; }   // the flash clears the board
    else end('A bomb');
  }
  // the pomegranate: in Classic now and then; in Arcade, the finale — slice it again and again
  function pomClassicHit(it, a, b) { it.lastCut = now(); it.hits++; score += 1 * (bonus.double > 0 ? 2 : 1); juice(it, 4); it.vy = Math.min(it.vy, -U() * 0.15); it.va += rnd(-3, 3); pop(it.x, it.y - it.h * 0.5, '+1', '#ffd34d', 18); play('splat', 0.5); if (it.hits >= 8) { it.dead = true; var an = Math.atan2(b[1] - a[1], b[0] - a[0]), nx = -Math.sin(an), ny = Math.cos(an), sp = U() * 0.9; [0, 1].forEach(function (s2) { var sg = s2 ? 1 : -1; bits.push({ sh: POM[2], k: POM[1] * 2 + s2, x: it.x + nx * sg * it.r * 0.25, y: it.y + ny * sg * it.r * 0.25, vx: it.vx * 0.5 + nx * sg * sp * 0.32, vy: Math.min(it.vy * 0.35, 0) + ny * sg * sp * 0.32, a: it.a, va: sg * rnd(2, 5), h: it.h * 0.92 }); }); juice(it, 8); play('splat'); pop(it.x, it.y, 'Pomegranate +' + it.hits, '#ff9aa8', 24); } }   // critique r2: its own burst, not a second ordinary slice
  function pomHit(a, b) { pom.lastCut = now(); pom.hits++; score += bonus.double > 0 ? 2 : 1; juice(pom, 3); pom.wob = 1; pop(pom.x + rnd(-30, 30), pom.y - pom.r - 10, '+1', '#ffd34d', 18); play('splat', 0.4); buzz(4); }
  function juice(it, n) { for (var i = 0; i < n * 3; i++) drops.push({ c: 0, x: it.x + rnd(-it.r, it.r) * 0.5, y: it.y + rnd(-it.r, it.r) * 0.5, vx: rnd(-1, 1) * U() * 0.5, vy: rnd(-1, 0.2) * U() * 0.5, t: 0, r: rnd(2, 4) }); }
  function startPom() { drift = []; endSwipe(); st = 'pom'; items.forEach(function (it) { if (!it.dead && it.delay <= 0) { it.dead = true; if (it.kind !== 'bomb') juice(it, 1); } }); items = []; trail = []; bonus = { frenzy: 0, freeze: 0, double: bonus.double }; pom = { x: cv.w / 2, y: cv.h * 1.2, ty: cv.h * 0.45, r: base() * 0.85, h: base() * 1.9, hits: 0, t: -0.4, live: false, wob: 0 }; pop(cv.w / 2, cv.h * 0.25, 'Pomegranate!', '#ff9aa8', 30); play('combo'); }   // critique r1: a clean stage for the finale
  function pop(x, y, s, c, fs) { x = clamp(x, 90, cv.w - 90); for (var i = 0; i < 4 && pops.some(function (p) { return p.t < 0.5 && Math.abs(p.x - x) < 140 && Math.abs(p.y - y) < 26; }); i++) y -= 30;   // pops at one spot stack, not overlap
    pops.push({ x: x, y: y, s: s, c: c || '#ffe066', fs: fs || 22, t: 0 }); }
  // ── the swipe ──
  AR.swipeOn(cv.c, {
    down: function (e) { var p = K.localXY(cv.c, e); trail = [[p.x, p.y, now()]]; sw = { n: 0, x: p.x, y: p.y }; },
    move: function (e) {
      var p = K.localXY(cv.c, e), l = trail[trail.length - 1]; if (!l) { trail = [[p.x, p.y, now()]]; return; }
      var d = Math.hypot(p.x - l[0], p.y - l[1]); if (d < 2) return;
      if (!sw) sw = { n: 0, x: p.x, y: p.y };   // v1526 (owner: "the pomegranate does not work"): the finale ends the stroke under a moving finger — the finger goes on cutting
      trail.push([p.x, p.y, now()]); if (trail.length > 40) trail.shift(); sw.x = p.x; sw.y = p.y;
      if (d / Math.max(1, now() - l[2]) > 0.25) { cutAlong([l[0], l[1]], [p.x, p.y]); if (d > 14 && Math.random() < 0.35) play('swish', 0.35); }   // a blade cuts only when it moves fast enough
    },
    up: function (e, p) { endSwipe(); if (st === 'menu' && p && p.pts.length < 6) { var q = K.localXY(cv.c, e); rings.forEach(function (rg) { if (!rg.cut && Math.hypot(q.x - rg.x, q.y - rg.y) < rg.r * 1.2) cutRing(rg, [rg.x - rg.r, rg.y], [rg.x + rg.r, rg.y]); }); } }, cancel: function () { endSwipe(); }
  });
  function flushCombo() {   // three or more in one stroke (a pause of 0.3 s closes it): +1 each; in Arcade, combos in a row build a Blitz
    if (!sw) return; var n = sw.n, at = sw.at || []; sw.n = 0; sw.at = [];
    if (n >= 3 && (st === 'play' || st === 'held')) {
      var m = bonus.double > 0 ? 2 : 1; score += n * m; combos++; if (n > bestCombo) bestCombo = n;
      pops.push({ combo: n, plus: n * m, x: clamp(sw.x, 110, cv.w - 110), y: clamp(sw.y - 70, (g.sc.top || 64) + 120, cv.h - 160), t: 0, rot: rnd(-0.12, 0.06) }); play('combo'); buzz(15);
      at.forEach(function (q) { glows.push({ x: q[0], y: q[1], r: q[2] * 0.9, t: 0 }); });   // the combo's fruit glow gold
      if (arc()) { blitzN = gameT - lastComboAt <= 3 ? blitzN + 1 : 1; lastComboAt = gameT; if (blitzN >= 3) { var add = Math.min(6, blitzN - 2) * 5 * m; score += add; pop(sw.x, sw.y - 76, 'Combo Blitz +' + add, '#ff9f43', 22); play('crit', 0.6); } }
      lifeCheck();
    }
  }
  function endSwipe() { if (!sw) return; flushCombo(); sw = null; }
  // ── the round ──
  function setHud() {
    if (st === 'menu') { g.sc.gp('Slice · best ' + S.best.classic + ' · ' + S.best.arcade + ' · ' + S.best.zen + ' · ' + (S.best.frenzy || 0)); return; }
    g.sc.gp(MODES[mode].n + (streak >= 10 ? ' · streak ' + streak : '') + (bonus.double > 0 ? ' · ×2' : ''));
  }
  function start(m) { drift = []; glows = [];
    mode = m; score = 0; lives = 3; items = []; bits = []; drops = []; pops = []; sparks = []; trail = []; pom = null; lifeAt = 100;
    bonus = { frenzy: 0, freeze: 0, double: 0 }; banNext = rnd(5.5, 8); blitzN = 0; lastComboAt = -99; streak = 0; bestStreakRun = 0; sliced = 0; missed = 0; combos = 0; bestCombo = 0; crits = 0; gameT = 0; volN = 0; volT = 0.9;
    tLeft = m === 'arcade' || m === 'frenzy' ? 60 : m === 'zen' ? 90 : 0; g.close(); modes.hidden = true; st = 'play'; S.games++; save(); setHud(); K.kick();
  }
  function end(why) {
    if (st !== 'play' && st !== 'pom') return; endSwipe(); st = 'over';
    var nb = score > (S.best[mode] || 0); if (nb) S.best[mode] = score; if (bestCombo > S.combo) S.combo = bestCombo; if (bestStreakRun > S.streak) S.streak = bestStreakRun; save();
    stats = { why: why, score: score, nb: nb, sliced: sliced, combos: combos, bestCombo: bestCombo, crits: crits, streak: bestStreakRun, missed: missed };
    setHud();
    setTimeout(function () { if (st !== 'over') return; g.round(function () { results(); }); }, RM() ? 300 : 1600);   // between games: the āyāt, read twice
  }
  function results() {
    var s = stats || {}; st = 'results';
    g.panel('<b class="ba-h">' + esc(s.why || 'Game over') + '</b><p class="ba-big">' + s.score + (s.nb ? ' · a new best' : ' · best ' + S.best[mode]) + '</p>' +
      '<div class="ba-meta"><span>' + s.sliced + ' fruit</span><span>' + s.combos + ' combos</span><span>Best combo ' + s.bestCombo + '</span><span>Best streak ' + s.streak + '</span>' + (arc() ? '<span>' + s.crits + ' critical</span>' : '') + '</div>' +
      '<div class="ba-row"><button type="button" class="bp-btn" data-a="menu">Menu</button><button type="button" class="bp-btn bp-go" data-a="again">Play ' + MODES[mode].n + ' again</button></div>');
  }
  function esc(t) { return K.esc(t); }
  // the menu: three fruit to slice (Classic · Arcade · Zen), the blade
  function layRings() {
    var Wd = cv.w, Hd = cv.h, ks = ['classic', 'arcade', 'zen', 'frenzy'], two = Wd < 620, r = clamp(two ? Math.min(U() * 0.15, Wd * 0.13) : Math.min(U() * 0.13, Wd * 0.085), 34, 88);
    rings = ks.map(function (k, i) { var x = two ? Wd * (i % 2 ? 0.72 : 0.28) : Wd * (0.14 + 0.24 * i), y = two ? Hd * (i < 2 ? 0.34 : 0.61) : Hd * 0.44 + (i % 2 ? -r * 0.35 : 0); return { k: k, x: x, y: y, r: r, a: 0, cut: false }; });   // four fruit: a row on a wide stage, two by two on a narrow one
  }
  function cutRing(rg, a, b) { rg.cut = true; var f = MODES[rg.k].ring; if (f[2]) slice({ f: f, x: rg.x, y: rg.y, vx: 0, vy: 0, r: rg.r, h: rg.r * 1.4 }, a, b); play('splat'); setTimeout(function () { if (st === 'menu') start(rg.k); }, RM() ? 0 : 550); }
  function menu() {
    st = 'menu'; items = []; bits = []; drops = []; pops = []; pom = null; g.close(); layRings(); setHud();
    var bl = blade();
    modes.innerHTML = '<div class="ba-mrow">' + Object.keys(MODES).map(function (k) { return '<button type="button" class="bp-btn ba-sr" data-mode="' + k + '">' + MODES[k].n + '</button>'; }).join('') + '<button type="button" class="bp-btn ba-blade" data-blade>Blade · ' + bl.n + '</button></div>';   // critique r1: the fruit are the choice (slice or tap one); the mode keys stay for a screen reader and the keyboard only
    modes.style.bottom = (g.sc.bot || 76) + 'px'; modes.hidden = false; K.kick();
  }
  modes.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return; e.stopPropagation();
    if (b.hasAttribute('data-mode')) start(b.getAttribute('data-mode'));
    else if (b.hasAttribute('data-blade')) { var h = '<div class="ba-hd"><button type="button" class="bp-btn" data-a="menu">Back</button><b class="ba-h">Blades</b></div><div class="ba-bats">';
      BLADES.forEach(function (bl) { var ok = open(bl); h += '<button type="button" class="ba-bat' + (S.blade === bl.id ? ' on' : '') + '" data-bl="' + bl.id + '"' + (ok ? '' : ' disabled') + '><b>' + bl.n + '</b><span class="ba-sw" style="--c1:rgb(' + bl.c[0] + ');--c2:rgb(' + bl.c[1] + ')"></span><em>' + (S.blade === bl.id ? 'In hand' : ok ? 'Use' : needText(bl)) + '</em></button>'; });
      g.panel(h + '</div>'); modes.hidden = true; }
  });
  g.pn.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b || b.disabled) return; e.stopPropagation(); var a = b.getAttribute('data-a');
    if (a === 'again') start(mode); else if (a === 'menu') menu();
    else if (b.hasAttribute('data-bl')) { S.blade = b.getAttribute('data-bl'); save(); menu(); }
  });
  g.sc.bar.addEventListener('click', function (e) { if (e.target.closest('[data-smenu]')) { e.stopPropagation(); if (st === 'play' || st === 'pom') { st = 'over'; } menu(); } });
  // ── the clock ──
  function step(dt) {
    if (st === 'menu') { rings.forEach(function (rg) { rg.a += dt * 0.6; }); stepBits(dt, dt); return; }
    if (st !== 'play' && st !== 'pom') { stepBits(dt, dt); return; }
    var fz = bonus.freeze > 0 ? 0.4 : 1, d = dt * fz;
    for (var k in bonus) if (bonus[k] > 0) bonus[k] = Math.max(0, bonus[k] - dt);
    gameT += dt;
    if (mode !== 'classic' && st === 'play' && !(bonus.freeze > 0)) { tLeft -= dt; if (tLeft <= 0) { tLeft = 0; if (arc()) startPom(); else end('Time'); return; } }
    if (st === 'pom') { stepPom(dt); stepBits(dt, d); stepItems(d); return; }
    if (blitzN && gameT - lastComboAt > 3) blitzN = 0;
    if (sw && sw.n >= 3 && sw.last && now() - sw.last > 220) flushCombo();   // critique r2: the combo lands while the finger is still moving
    if (bonus.frenzy > 0) {   // critique r1: a frenzy is a readable stream of fruit and nothing else
      frenT -= dt; var live = items.filter(function (it) { return !it.dead && it.delay <= 0 && it.kind === 'fruit'; }).length;
      if (frenT <= 0 && live < (cv.w < 430 ? 7 : 10)) { frenzyTick(); frenT = cv.w < 430 ? 0.17 : 0.14; } volT = Math.max(volT, 0.35);
    } else { volT -= bonus.freeze > 0 ? dt : d; if (volT <= 0 && !items.some(function (it) { return !it.dead && it.delay > 0; })) volley(); }
    stepItems(d); stepBits(dt, d); setHud();
  }
  function stepItems(d) {
    var g0 = gy();
    items.forEach(function (it) {
      if (it.delay > 0) { it.delay -= d; return; }
      it.vy += g0 * d; it.x += it.vx * d; it.y += it.vy * d; it.a += it.va * d;
      var gone = it.vy > 0 && it.y > cv.h + it.h; if (it.side && (it.x < -it.h * 2 || it.x > cv.w + it.h * 2)) gone = true;
      if (!it.dead && gone) {
        it.dead = true;
        if (it.kind === 'fruit' && !it.side) { streak = 0; missed++; if (mode === 'classic' && st === 'play') { lives = Math.max(0, lives - 1); pops.push({ x: clamp(it.x, 40, cv.w - 40), y: cv.h - 40, s: '✕', c: '#ff4d4d', fs: 34, t: 0 }); play('thud', 0.4); if (!lives) end('Three dropped'); } }
      }
    });
    items = items.filter(function (it) { return !it.dead; });
  }
  function stepBits(dt, d) {
    var g0 = gy();
    bits.forEach(function (b) { b.vy += g0 * d * 1.25; b.x += b.vx * d; b.y += b.vy * d; b.a += b.va * d; }); bits = bits.filter(function (b) { return b.y < cv.h + 220; });
    drops.forEach(function (p) { p.vy += g0 * d; p.x += p.vx * d; p.y += p.vy * d; p.t += dt; }); drops = drops.filter(function (p) { return p.t < 0.9; });
    sparks.forEach(function (p) { p.t += dt; if (p.ember || p.tw) { p.x += p.vx * dt; p.y += p.vy * dt; } }); sparks = sparks.filter(function (p) { return p.t < (p.ember ? 0.7 : p.tw ? 0.55 : 0.25); });
    glows.forEach(function (q) { q.t += dt; }); glows = glows.filter(function (q) { return q.t < 0.7; });
  }
  function stepPom(dt) {
    pom.t += dt; if (pom.t < 0) return; if (!pom.live) { pom.live = true; pom.up = false; }   // cuttable from the moment it shows
    if (!pom.up) { pom.y += (pom.ty - pom.y) * Math.min(1, dt * 4); if (Math.abs(pom.y - pom.ty) < 4) { pom.up = true; pom.t = 0; } }
    pom.wob = Math.max(0, pom.wob - dt * 4);
    if (pom.t > POM_T) { // it bursts
      var n = pom.hits; pom.live = false; [0, 1].forEach(function (s2) { var sg = s2 ? 1 : -1; bits.push({ sh: POM[2], k: POM[1] * 2 + s2, x: pom.x + sg * pom.r * 0.4, y: pom.y, vx: sg * U() * 0.6, vy: -U() * 0.35, a: 0, va: sg * 4, h: pom.h * 0.6 }); }); for (var i = 0; i < 50; i++) drops.push({ c: 0, x: pom.x, y: pom.y, vx: rnd(-1, 1) * U(), vy: rnd(-1, 0.5) * U(), t: 0, r: rnd(2.5, 5) });
      stains.push({ k: 0, x: pom.x, y: pom.y, s: pom.h * 1.6, a: 0, t: 0 }); pop(pom.x, pom.y, 'Pomegranate +' + n, '#ff9aa8', 28); play('boom'); pom = null; end('Time');
    }
  }
  // ── the picture ──
  // the lettering: a fill that runs light to dark down the letters, a thick dark edge (as the classic's)
  function word(s, x, y, size, fill, edge, align, base) { ctx.font = Math.round(size) + 'px ' + GF + K.tok().uif; ctx.textAlign = align || 'left'; ctx.textBaseline = base || 'top'; ctx.lineJoin = 'round';
    var y0 = base === 'middle' ? y - size / 2 : y, gr = ctx.createLinearGradient(0, y0, 0, y0 + size); gr.addColorStop(0, fill[0]); gr.addColorStop(1, fill[1]);
    ctx.lineWidth = Math.max(3, size * 0.16); ctx.strokeStyle = edge; ctx.strokeText(s, x, y); ctx.fillStyle = gr; ctx.fillText(s, x, y); }
  function shade(h) { var m = /^#?([0-9a-f]{6})$/i.exec(h); if (!m) return h; var v = parseInt(m[1], 16), f = 0.62; return 'rgb(' + Math.round((v >> 16) * f) + ',' + Math.round((v >> 8 & 255) * f) + ',' + Math.round((v & 255) * f) + ')'; }
  function star5(x, y, r, c, a) { ctx.globalAlpha = a == null ? 1 : Math.max(0, a); ctx.fillStyle = c; ctx.beginPath(); for (var j = 0; j < 10; j++) { var rad = j % 2 ? r * 0.45 : r, an = -Math.PI / 2 + j * Math.PI / 5; ctx.lineTo(x + Math.cos(an) * rad, y + Math.sin(an) * rad); } ctx.closePath(); ctx.fill(); ctx.globalAlpha = 1; }
  function crosses(xr, y) {   // Classic's three crosses, small to big: blue outlines, red once a fruit is dropped
    var lost = 3 - lives, sz = [20, 25, 31], x = xr;
    for (var i = 2; i >= 0; i--) { var s = sz[i], cx = x - s / 2, cy = y + 16, on = (2 - i) < lost; x -= s + 6;
      ctx.save(); ctx.translate(cx, cy); ctx.rotate(Math.PI / 4); ctx.lineJoin = 'round';
      var a4 = s / 2, b4 = s * 0.17, arm = function () { ctx.beginPath(); [[-b4, -a4], [b4, -a4], [b4, -b4], [a4, -b4], [a4, b4], [b4, b4], [b4, a4], [-b4, a4], [-b4, b4], [-a4, b4], [-a4, -b4], [-b4, -b4]].forEach(function (q, k5) { ctx[k5 ? 'lineTo' : 'moveTo'](q[0], q[1]); }); ctx.closePath(); };
      arm(); ctx.lineWidth = 4; ctx.strokeStyle = on ? '#5a0d0d' : '#0b1f5c'; ctx.stroke(); arm(); ctx.fillStyle = on ? '#ff3b30' : 'rgba(42,92,214,.92)'; ctx.fill(); ctx.restore(); }
  }
  function plaques(y) {   // FRENZY, FREEZE, DOUBLE SCORE: an orange plaque at the top while each runs
    var on = ['frenzy', 'freeze', 'double'].filter(function (k) { return bonus[k] > 0; }); if (!on.length) return;
    var lab = { frenzy: 'FRENZY', freeze: 'FREEZE', double: 'DOUBLE SCORE' }, col = { frenzy: ['#ffb347', '#e0621b'], freeze: ['#a8e6ff', '#3d9fd6'], double: ['#ffe680', '#e8a51a'] }, fs3 = clamp(cv.w * 0.04, 15, 22), tot = 0, ws = [];
    ctx.font = Math.round(fs3) + 'px ' + GF + K.tok().uif; on.forEach(function (k) { var w = ctx.measureText(lab[k] + ' ×3').width + fs3 * 2; ws.push(w); tot += w + 6; });
    if (tot > cv.w - 24) { var shr = (cv.w - 24) / tot; fs3 *= shr; ws = ws.map(function (w) { return w * shr; }); tot = cv.w - 24; ctx.font = Math.round(fs3) + 'px ' + GF + K.tok().uif; }
    var x = cv.w / 2 - tot / 2;
    on.forEach(function (k, i) { var w = ws[i], h = fs3 * 1.9, gr = ctx.createLinearGradient(0, y, 0, y + h); gr.addColorStop(0, col[k][0]); gr.addColorStop(1, col[k][1]);
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + w, y); ctx.lineTo(x + w - h * 0.35, y + h); ctx.lineTo(x + h * 0.35, y + h); ctx.closePath(); ctx.fillStyle = gr; ctx.fill(); ctx.lineWidth = 2.5; ctx.strokeStyle = '#4a1f06'; ctx.stroke();
      ctx.fillStyle = '#4a1f06'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; var stk = Math.ceil(bonus[k] / BAN[k].t - 0.001); ctx.fillText(lab[k] + (stk > 1 ? ' ×' + stk : ''), x + w / 2, y + h / 2 + 1);
      ctx.fillStyle = 'rgba(0,0,0,.35)'; rr(ctx, x + h * 0.4, y + h + 4, w - h * 0.8, 4, 2); ctx.fill(); ctx.fillStyle = col[k][1]; rr(ctx, x + h * 0.4, y + h + 4, (w - h * 0.8) * clamp(bonus[k] / BAN[k].t, 0, 1), 4, 2); ctx.fill(); x += w + 6; });
  }
  function drawBlade() {   // a swoosh: thin at its tail, widest near the finger, a point at the tip; a soft glow, a bright core
    var tn = now(); trail = trail.filter(function (p) { return tn - p[2] < 170; }); if (trail.length < 2) return; var B = blade(), c = B.c, n = trail.length, W = clamp(U() * 0.034, 9, 18);
    function ribbon(w, fill) { var L = [], R = [];
      for (var i = 0; i < n; i++) { var p = trail[i], q = trail[Math.min(n - 1, i + 1)], o = trail[Math.max(0, i - 1)], dx = q[0] - o[0], dy = q[1] - o[1], d = Math.hypot(dx, dy) || 1, u = i / (n - 1), k = Math.pow(u, 0.8) * (u > 0.82 ? Math.max(0.08, 1 - (u - 0.82) / 0.18) : 1) * w;
        L.push([p[0] - dy / d * k, p[1] + dx / d * k]); R.push([p[0] + dy / d * k, p[1] - dx / d * k]); }
      ctx.beginPath(); ctx.moveTo(L[0][0], L[0][1]); for (var j = 1; j < n; j++) ctx.lineTo(L[j][0], L[j][1]); for (var r = n - 1; r >= 0; r--) ctx.lineTo(R[r][0], R[r][1]); ctx.closePath(); ctx.fillStyle = fill; ctx.fill(); }
    ctx.save(); ctx.shadowColor = 'rgba(' + c[1] + ',.9)'; ctx.shadowBlur = 18;
    if (B.fx === 'rainbow') { var gr = ctx.createLinearGradient(trail[0][0], trail[0][1], trail[n - 1][0], trail[n - 1][1]); ['#ff4d4d', '#ffb02e', '#ffe14d', '#5ee06b', '#4db3ff', '#a66bff'].forEach(function (h, i) { gr.addColorStop(i / 5, h); }); ribbon(W * 1.5, gr); }
    else ribbon(W * 1.5, 'rgba(' + c[1] + ',.55)');
    ctx.shadowBlur = 6; ribbon(W * 0.62, 'rgba(' + c[0] + ',.98)'); ctx.restore();
    if (B.fx === 'bolt') { ctx.save(); ctx.strokeStyle = 'rgba(' + c[0] + ',.95)'; ctx.shadowColor = 'rgba(' + c[1] + ',1)'; ctx.shadowBlur = 12; ctx.lineWidth = 2; for (var b2 = 0; b2 < 2; b2++) { ctx.beginPath(); for (var z = 0; z < n; z++) { var pz = trail[z]; ctx[z ? 'lineTo' : 'moveTo'](pz[0] + rnd(-9, 9), pz[1] + rnd(-9, 9)); } ctx.stroke(); } ctx.restore(); }
    var hd = trail[n - 1];
    if (Math.random() < 0.7) { var kind = B.fx === 'ember' ? 'ember' : 'tw'; sparks.push({ x: hd[0] + rnd(-8, 8), y: hd[1] + rnd(-8, 8), vx: rnd(-50, 50), vy: B.fx === 'ember' ? rnd(-120, -20) : rnd(-30, 50), t: 0, ember: kind === 'ember' ? 1 : 0, tw: kind === 'tw' ? 1 : 0, fx: B.fx, c: c[1] }); }
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    for (var i = 1; i < trail.length; i++) { var f = i / trail.length; ctx.strokeStyle = 'rgba(' + c[1] + ',' + (0.25 * f) + ')'; ctx.lineWidth = 6 + 18 * f; ctx.beginPath(); ctx.moveTo(trail[i - 1][0], trail[i - 1][1]); ctx.lineTo(trail[i][0], trail[i][1]); ctx.stroke(); }
    for (var j = 1; j < trail.length; j++) { var f2 = j / trail.length; ctx.strokeStyle = 'rgba(' + c[0] + ',' + (0.35 + 0.65 * f2) + ')'; ctx.lineWidth = 1.5 + 7 * f2; ctx.beginPath(); ctx.moveTo(trail[j - 1][0], trail[j - 1][1]); ctx.lineTo(trail[j][0], trail[j][1]); ctx.stroke(); }
  }
  function draw(dt) {
    cv.fit(); var Wd = cv.w, Hd = cv.h, uif = K.tok().uif, t = now();
    var sx = 0, sy = 0; if (shake > 0.3) { sx = rnd(-0.5, 0.5) * shake; sy = rnd(-0.5, 0.5) * shake; shake *= 0.85; }
    ctx.save(); ctx.translate(sx, sy);
    if (!cover(ctx, st === 'menu' ? 'dojo' : 'board', Wd, Hd)) { ctx.fillStyle = '#2b1d14'; ctx.fillRect(0, 0, Wd, Hd); }
    stains.forEach(function (s) { s.t += dt; spr(ctx, 'splat', s.k, s.x, s.y, s.s, s.a, clamp(0.8 - s.t / 5, 0, 0.8)); }); stains = stains.filter(function (s) { return s.t < 4; });
    if (st === 'menu') rings.forEach(function (rg) {
      if (rg.cut) return; var f = MODES[rg.k].ring;
      ctx.strokeStyle = 'rgba(255,255,255,.55)'; ctx.lineWidth = 3; ctx.setLineDash([10, 8]); ctx.lineDashOffset = -t / 40; ctx.beginPath(); ctx.arc(rg.x, rg.y, rg.r * 1.18, 0, 7); ctx.stroke(); ctx.setLineDash([]);
      spr(ctx, f[0], f[1], rg.x, rg.y, rg.r * 1.45, Math.sin(rg.a) * 0.25);
      ctx.font = '800 ' + clamp(rg.r * 0.36, 18, 26) + 'px ' + uif; ctx.textAlign = 'center'; ctx.textBaseline = 'top'; ctx.lineWidth = 5; ctx.strokeStyle = 'rgba(0,0,0,.55)'; word(MODES[rg.k].n.toUpperCase(), rg.x, rg.y + rg.r * 1.28, clamp(rg.r * 0.4, 18, 30), ['#ffe9a0', '#f2a33a'], '#3a1606', 'center');
      var sub = MODES[rg.k].sub, fs2 = clamp(rg.r * 0.24, 13, 16); ctx.font = '600 ' + fs2 + 'px ' + uif; var room = Wd * (Wd < 620 ? 0.42 : 0.22); if (ctx.measureText(sub).width > room) { fs2 = Math.max(11, fs2 * room / ctx.measureText(sub).width); ctx.font = '600 ' + fs2 + 'px ' + uif; } { ctx.lineWidth = 4; ctx.strokeText(sub, rg.x, rg.y + rg.r * 1.28 + 28); ctx.fillStyle = 'rgba(255,243,214,.9)'; ctx.fillText(sub, rg.x, rg.y + rg.r * 1.28 + 28); }
    });
    if (st === 'menu') { ctx.font = '800 ' + clamp(Wd * 0.07, 22, 40) + 'px ' + uif; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.lineWidth = 6; ctx.strokeStyle = 'rgba(0,0,0,.6)'; var y0 = (g.sc.top || 64) + 34; word('SLICE A FRUIT TO BEGIN', Wd / 2, y0, clamp(Wd * 0.06, 20, 36), ['#ffe9a0', '#f2a33a'], '#3a1606', 'center', 'middle'); }
    items.forEach(function (it) { if (it.delay > 0) return; var f = it.f; if (it.kind === 'banana') { ctx.save(); ctx.shadowColor = BAN[it.ban].c; ctx.shadowBlur = 22; spr(ctx, 'bananas', BAN[it.ban].k, it.x, it.y, it.h, it.a * 0.6); ctx.restore(); } else if (it.kind === 'bomb') { spr(ctx, 'bananas', 3, it.x, it.y, it.h, it.a * 0.3); var fl = 0.5 + 0.5 * Math.sin(t / 50); ctx.fillStyle = 'rgba(255,' + Math.round(80 + 120 * fl) + ',40,' + (0.5 + 0.4 * fl) + ')'; ctx.beginPath(); ctx.arc(it.x + it.h * 0.26, it.y - it.h * 0.4, 4 + 3 * fl, 0, 7); ctx.fill(); } else spr(ctx, f[0], f[1], it.x, it.y, it.h, it.a); });
    if (pom) { var wb = Math.sin(t / 30) * pom.wob * 0.12; spr(ctx, POM[0], POM[1], pom.x, pom.y, pom.h * (1 + pom.wob * 0.08), wb); if (pom.live) { word(pom.hits + ' HITS', pom.x, pom.y + pom.h * 0.62 - 18, 24, ['#fff1a8', '#f2a33a'], '#3a1606', 'center'); var rem = Math.max(0, POM_T - pom.t) / POM_T; ctx.fillStyle = 'rgba(255,255,255,.3)'; rr(ctx, pom.x - 60, pom.y + pom.h * 0.62 + 16, 120, 6, 3); ctx.fill(); ctx.fillStyle = '#ff9aa8'; rr(ctx, pom.x - 60, pom.y + pom.h * 0.62 + 16, 120 * rem, 6, 3); ctx.fill(); } }
    bits.forEach(function (b) { spr(ctx, b.sh, b.k, b.x, b.y, b.h * (b.fade ? 0.9 : 0.78), b.a, b.fade ? 0.85 : null); });
    drops.forEach(function (p) { ctx.globalAlpha = 1 - p.t / 0.9; ctx.fillStyle = JC[p.c]; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7); ctx.fill(); }); ctx.globalAlpha = 1;
    glows.forEach(function (q) { var a2 = 1 - q.t / 0.7, R = q.r * (1.1 + q.t * 0.6), gg = ctx.createRadialGradient(q.x, q.y, R * 0.15, q.x, q.y, R); gg.addColorStop(0, 'rgba(255,236,150,' + 0.85 * a2 + ')'); gg.addColorStop(1, 'rgba(255,170,40,0)'); ctx.fillStyle = gg; ctx.beginPath(); ctx.arc(q.x, q.y, R, 0, 7); ctx.fill(); for (var s3 = 0; s3 < 4; s3++) { var an = s3 * 1.57 + q.t * 3; star5(q.x + Math.cos(an) * R * 0.8, q.y + Math.sin(an) * R * 0.8, 6 * a2 + 2, '#fff6c4', a2); } });
    sparks.forEach(function (p) { if (p.tw) { var a3 = 1 - p.t / 0.55; if (p.fx === 'snow') { ctx.globalAlpha = a3; ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(p.x, p.y, 2.5, 0, 7); ctx.fill(); ctx.globalAlpha = 1; } else if (p.fx === 'leaf') { ctx.globalAlpha = a3; ctx.fillStyle = '#6cc04a'; ctx.beginPath(); ctx.ellipse(p.x, p.y, 5, 2.4, p.t * 6, 0, 7); ctx.fill(); ctx.globalAlpha = 1; } else star5(p.x, p.y, p.fx === 'star' ? 5 : 3.5, 'rgba(' + p.c + ',1)', a3); return; }
      if (p.ember) { ctx.globalAlpha = 1 - p.t / 0.7; ctx.fillStyle = '#ffb347'; ctx.fillRect(p.x, p.y, 3, 3); ctx.globalAlpha = 1; return; } var k2 = p.t / 0.25, R = (p.big ? 70 : 34) * (0.5 + k2); ctx.globalAlpha = 1 - k2; ctx.fillStyle = '#fffbe0'; ctx.beginPath(); ctx.ellipse(p.x, p.y, R, R * 0.18, p.a || 0, 0, 7); ctx.fill(); ctx.globalAlpha = 1; });
    drawBlade();
    ctx.restore();
    // the screen's tints: freeze (blue frost at the edges), double (a gold edge), frenzy (warm streaks)
    if (bonus.freeze > 0) { var gr = ctx.createRadialGradient(Wd / 2, Hd / 2, Math.min(Wd, Hd) * 0.3, Wd / 2, Hd / 2, Math.max(Wd, Hd) * 0.75); gr.addColorStop(0, 'rgba(150,210,255,0)'); gr.addColorStop(1, 'rgba(170,225,255,' + (0.5 * Math.min(1, bonus.freeze)) + ')'); ctx.fillStyle = gr; ctx.fillRect(0, 0, Wd, Hd); }
    if (bonus.double > 0) { ctx.strokeStyle = 'rgba(255,211,77,' + (0.55 * Math.min(1, bonus.double)) + ')'; ctx.lineWidth = 8; ctx.strokeRect(4, 4, Wd - 8, Hd - 8); }
    if (bonus.frenzy > 0) { ctx.fillStyle = 'rgba(255,122,60,' + (0.08 * Math.min(1, bonus.frenzy)) + ')'; ctx.fillRect(0, 0, Wd, Hd);
      if (!RM() && Math.random() < 0.35) { var lf = Math.random() < 0.5; drift.push({ x: lf ? rnd(0, Wd * 0.18) : rnd(Wd * 0.82, Wd), y: Hd + 10, v: rnd(60, 140), r: rnd(5, 12), c: Math.random() < 0.5 ? '#ffb347' : '#ffd84a', a: rnd(0, 6) }); } }
    drift.forEach(function (d) { d.y -= d.v * dt; d.a += dt; star5(d.x + Math.sin(d.a * 2) * 6, d.y, d.r, d.c, 0.85); }); drift = drift.filter(function (d) { return d.y > -20; });   // the frenzy's stars rise at the sides
    if (flash > 0) { ctx.fillStyle = 'rgba(255,255,255,' + flash + ')'; ctx.fillRect(0, 0, Wd, Hd); flash = Math.max(0, flash - dt * 1.4); }
    // the score, the clock, the crosses, the bananas running
    if (st !== 'menu') {
      // v1521b (owner's reference shots): the classic's HUD — a watermelon half and the score in big orange numerals, BEST under it; the clock in green
      var top = (g.sc.top || 64) + 6, SZ = clamp(Wd * 0.1, 34, 56), ic = SZ * 0.9;
      spr(ctx, 'halves', 0, 16 + ic / 2, top + SZ * 0.55, ic, -0.35);
      word(String(score), 16 + ic + 6, top, SZ, ['#ffe36b', '#f0861c'], '#5a2608', 'left');
      word('BEST: ' + (S.best[mode] || 0), 18 + ic + 8, top + SZ + 2, Math.round(SZ * 0.4), ['#ffe98a', '#f2b23a'], '#5a2608', 'left');
      if (mode === 'classic') { crosses(Wd - 14, top + 4); }
      else { var tl = Math.ceil(tLeft), ts = Math.floor(tl / 60) + ':' + ('0' + tl % 60).slice(-2); word(ts, Wd - 14, top, SZ, bonus.freeze > 0 ? ['#d8f6ff', '#56b9f0'] : tLeft < 10 ? ['#ffd08a', '#f0561c'] : ['#c9f56a', '#3faa2a'], bonus.freeze > 0 ? '#0d3552' : tLeft < 10 ? '#5a1a08' : '#173d0c', 'right'); }
      plaques(top + SZ + Math.round(SZ * 0.4) + (streak >= 10 ? Math.round(SZ * 0.36) + 10 : 0) + 12);
      if (streak >= 10) word('STREAK ' + streak, 18 + ic + 8, top + SZ + Math.round(SZ * 0.4) + 6, Math.round(SZ * 0.36), ['#c9f1ff', '#4fb4ea'], '#0d3552', 'left');
    }
    pops = pops.filter(function (p) { p.t += dt; var life = p.combo ? 1.3 : 1.1; if (p.t > life) return false; var k = Math.min(1, p.t / 0.12), sc2 = RM() ? 1 : (p.t < 0.12 ? 0.6 + 0.6 * k : 1.2 - Math.min(0.2, (p.t - 0.12) * 1.2)); ctx.globalAlpha = 1 - Math.max(0, p.t - (life - 0.45)) / 0.45;
      if (p.combo) { var cs = clamp(Wd * 0.058, 22, 34); ctx.save(); ctx.translate(p.x, p.y - p.t * 14); ctx.rotate(p.rot); ctx.scale(sc2, sc2); word(p.combo + ' FRUIT', 0, -cs * 1.05, cs, ['#ffe9a0', '#f2a33a'], '#4a1f06', 'center', 'middle'); word('COMBO', 0, 0, cs, ['#ffe9a0', '#f2a33a'], '#4a1f06', 'center', 'middle'); word('+' + p.plus, 0, cs * 1.35, cs * 1.6, ['#fff1a8', '#f08a1c'], '#4a1f06', 'center', 'middle'); ctx.restore(); }
      else { ctx.save(); ctx.translate(p.x, p.y - p.t * 36); ctx.scale(sc2 * 0.95, sc2 * 0.95); word(p.s.toUpperCase(), 0, 0, p.fs * 1.05, [p.c, shade(p.c)], '#3a1606', 'center', 'middle'); ctx.restore(); }
      ctx.globalAlpha = 1; return true; });
    if (st === 'over' && stats) { ctx.fillStyle = 'rgba(0,0,0,.35)'; ctx.fillRect(0, 0, Wd, Hd); word('GAME OVER', Wd / 2, Hd * 0.42, clamp(Wd * 0.12, 36, 66), ['#ffe9a0', '#f0861c'], '#3a1606', 'center', 'middle'); word(stats.score + (stats.nb ? ' · NEW BEST' : ''), Wd / 2, Hd * 0.52, clamp(Wd * 0.06, 22, 32), ['#fff1a8', '#f2b23a'], '#3a1606', 'center', 'middle'); }
  }
  K.loop(function () { return isOn && g.vis(); }, function (dt) { dt = Math.min(dt, 0.05); step(dt); draw(dt); if ((st === 'play' || st === 'pom') && K.overBreak()) g.bp.check(); });
  menu();
  return { start: function () { isOn = true; AR.ready(['dojo', 'board', 'fruit', 'fruit2', 'halves', 'halves2', 'splat', 'bananas']).then(function () { if (isOn) K.kick(); }); cv.fit(); K.kick(); },
    stop: function () { isOn = false; endSwipe(); if (/^(play|pom|held)$/.test(st)) { holdSt = null; menu(); } }, rc: g.sc.rc, state: function () { return st; },
    dbg: function () { return { st: st, mode: mode, score: score, lives: lives, tLeft: Math.round(tLeft), bonus: bonus, streak: streak, combos: combos, n: items.length, items: items.filter(function (i) { return i.delay <= 0; }).map(function (i) { return { x: Math.round(i.x), y: Math.round(i.y), kind: i.kind, ban: i.ban || null }; }), pom: pom ? { x: pom.x, y: pom.y, live: pom.live, up: !!pom.up, hits: pom.hits } : null }; },
    _blade: function (pts, id) { var keep = S.blade; if (id) S.blade = id; var t0 = now(); trail = pts.map(function (q, i) { return [q[0], q[1], t0 - (pts.length - i) * 8]; }); draw(0); var u = cv.c.toDataURL('image/png'); S.blade = keep; return u; }, _start: start, _cut: function (a, b) { sw = sw || { n: 0, x: b[0], y: b[1] }; cutAlong(a, b); }, _endSwipe: endSwipe, _time: function (s) { tLeft = s; }, _bonus: function (k) { bonus[k] = BAN[k].t; },
    _toss: function (kind, ban) { if (kind === 'banana') { toss(['bananas', BAN[ban].k, null, 1, 2, ban], cv.w / 2, 'banana', { lo: 0.6, hi: 0.6, vx: 0 }); items[items.length - 1].ban = ban; } else toss(kind === 'bomb' ? ['bananas', 3, null, 0.95, 5, 'bomb'] : FR[0], cv.w / 2, kind, { lo: 0.6, hi: 0.6, vx: 0 }); } };
}

export function make(aw, G) { return mkSlice(aw, G || {}); }
