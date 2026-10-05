// Glide — ported from the owner's Mithlayn site (Repo-1, branch claude/read-handoff-plb7xv, site/modules/tools/break-play.js,
// commit 468ed1d: "GLIDE and CHUNK PATH: one flying engine", mkFly). Only the Glide mode is kept; the physics, sizes and drawing
// are the original's. Left out: Chunk path (it flies through the āyāt) and the Read card after each flight.
// Tap (or Space / ↑) to rise; pass through the gaps; touching a pillar or the ground ends the flight. One flight = one round.

import { K } from './kit.js';

var rnd = K.rnd, rr = K.rr, RM = K.RM;

export function make(aw) {
  var cv = K.makeCanvas(aw), ctx = cv.ctx;
  var ov = K.overlay(aw);
  var st = 'ready', bird = { x: 0, y: 0, vy: 0, r: 14 }, cols = [], score = 0, best = K.lget('glide.best', 0), scroll = 0, flights = 0;
  var sc = K.scaffold(aw, null, { keys: '' });
  function setHud() { sc.gp('Score ' + score + ' · Best ' + best); }
  function intro() {
    st = 'ready'; cols = []; score = 0; bird.vy = 0; bird.x = cv.w * 0.26; bird.y = cv.h * 0.45;
    ov.show('Glide', 'Tap to rise. Pass through the gaps.', 'Tap to start');
    setHud();
  }
  function spawn(x) {
    var H = cv.h, ground = H * 0.92, gap = Math.max(150, H * 0.3);
    cols.push({ x: x, w: Math.max(56, cv.w * 0.09), cy: rnd(H * 0.12 + gap / 2, ground - gap / 2 - H * 0.04), gap: gap, passed: false });
  }
  function begin() { ov.hide(); st = 'play'; flights++; cols = []; bird.x = cv.w * 0.26; bird.y = cv.h * 0.45; bird.vy = 0; score = 0; scroll = 0; spawn(cv.w + 40); setHud(); flap(); K.kick(); }
  function flap() { bird.vy = -Math.max(300, cv.h * 0.5); }
  function tap() { if (st === 'ready' || st === 'over') begin(); else if (st === 'play') flap(); else if (st === 'paused') { ov.hide(); st = 'play'; flap(); K.kick(); } }
  cv.c.addEventListener('pointerdown', function (e) { e.preventDefault(); tap(); });
  ov.el.addEventListener('pointerdown', function (e) { e.preventDefault(); tap(); });
  aw.tabIndex = 0; aw.addEventListener('keydown', function (e) { if (e.key === ' ' || e.key === 'ArrowUp') { e.preventDefault(); e.stopPropagation(); tap(); } });
  function step(dt) {
    var H = cv.h, ground = H * 0.92;
    if (st !== 'play') return;
    var sp = Math.max(150, cv.w * 0.2);
    scroll += sp * dt; bird.vy += Math.max(900, H * 1.35) * dt; bird.y += bird.vy * dt;
    if (bird.y < bird.r) { bird.y = bird.r; bird.vy = 0; }
    if (bird.y > ground - bird.r) { bird.y = ground - bird.r; over(); return; }
    cols.forEach(function (c) { c.x -= sp * dt; });
    var spacing = Math.max(260, cv.w * 0.5), lastC = cols[cols.length - 1];
    if (!lastC || lastC.x < cv.w - spacing) spawn(cv.w + 20);
    cols = cols.filter(function (c) { return c.x + c.w > -20; });
    for (var i = 0; i < cols.length; i++) {
      var c = cols[i], inX = bird.x + bird.r > c.x && bird.x - bird.r < c.x + c.w;
      if (inX && (bird.y - bird.r < c.cy - c.gap / 2 || bird.y + bird.r > c.cy + c.gap / 2)) { over(); return; }
      if (!c.passed && c.x + c.w < bird.x - bird.r) { c.passed = true; score++; setHud(); }
    }
  }
  function over() { st = 'over'; if (score > best) { best = score; K.lset('glide.best', best); } setHud(); ov.show('Soft landing', 'Score ' + score + '. Best ' + best + '.', 'Tap to fly again'); }
  function draw(t) {
    var TOK = K.tok(), W2 = cv.w, H = cv.h, ground = H * 0.92; ctx.clearRect(0, 0, W2, H);
    ctx.fillStyle = TOK.page; ctx.fillRect(0, 0, W2, H);
    ctx.fillStyle = TOK.fill; ctx.beginPath(); ctx.moveTo(0, ground); for (var x = 0; x <= W2 + 20; x += 20) ctx.lineTo(x, ground - H * 0.07 - Math.sin((x + scroll * 0.3) / 90) * H * 0.025); ctx.lineTo(W2, ground); ctx.closePath(); ctx.fill();
    ctx.fillStyle = TOK.fill2; ctx.fillRect(0, ground, W2, H - ground);
    cols.forEach(function (c) {
      ctx.fillStyle = TOK.pillar; ctx.strokeStyle = TOK.pillaredge; ctx.lineWidth = 1.5;
      [[-20, c.cy - c.gap / 2], [c.cy + c.gap / 2, ground]].forEach(function (s) { rr(ctx, c.x, s[0], c.w, s[1] - s[0], 14); ctx.fill(); ctx.stroke(); });
    });
    var tilt = Math.max(-0.5, Math.min(0.6, bird.vy / 900));
    ctx.save(); ctx.translate(bird.x, bird.y); ctx.rotate(tilt);
    ctx.fillStyle = TOK.ink; ctx.beginPath(); ctx.ellipse(0, 0, bird.r * 1.15, bird.r, 0, 0, Math.PI * 2); ctx.fill();
    var wf = RM() ? 0 : Math.sin(t * 12) * 0.35; ctx.fillStyle = TOK.acc; ctx.beginPath(); ctx.ellipse(-bird.r * 0.25, -bird.r * 0.1, bird.r * 0.8, bird.r * (0.45 + wf * 0.4), -0.4, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = TOK.page; ctx.beginPath(); ctx.arc(bird.r * 0.5, -bird.r * 0.3, bird.r * 0.2, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }
  cv.onResize = function () { bird.r = Math.max(13, Math.min(20, cv.h * 0.022)); if (st !== 'play') { bird.x = cv.w * 0.26; bird.y = cv.h * 0.45; } draw(0); };
  var isOn = false, V = K.vis(aw);
  K.loop(function () { return isOn && V() && st === 'play'; }, function (dt, t) { cv.fit(); step(dt); draw(t); });
  K.theme(function () { if (isOn) draw(0); });
  intro();
  return {
    start: function () { isOn = true; cv.fit(); draw(0); K.kick(); },
    stop: function () { isOn = false; if (st === 'play') { st = 'paused'; ov.show('Paused', 'Tap to carry on.', 'Tap to continue'); } },
    tap: tap, state: function () { return st; }, dbg: function () { return { st: st, score: score, best: best, flights: flights, cols: cols.length }; },
  };
}
