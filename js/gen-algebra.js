// Fresh-number quiz generators for Algebra 1, units 1–8 (units 9–16 are in gen-algebra-2.js).
// Each returns { q, c: [correct, wrong, wrong, wrong], why, _check }. _check holds the raw numbers so
// tests/fuzz-generators.mjs can recompute the answer on its own; the app ignores it.
import { ri, pick, nz, fmt, sgn, neg, big, cents, lin, poly, mono, pt, list, opts, mk, nq } from './gen-util.js';
import { algebra2 } from './gen-algebra-2.js';

const X = (n) => `x = ${fmt(n)}`;
const FLIP = { '<': '>', '>': '<', '≤': '≥', '≥': '≤' };
const SWAP = { '<': '≤', '≤': '<', '>': '≥', '≥': '>' };
const cmp = (a, op, b) => (op === '<' ? a < b : op === '>' ? a > b : op === '≤' ? a <= b : a >= b);
const calc = (m, x, b) => `${fmt(m)}(${fmt(x)})${b ? ' ' + sgn(b) : ''}`; // "2(3) + 1"
const std = (a, b, c) => `${poly([[a, 'x'], [b, 'y']])} = ${fmt(c)}`; // "2x − y = 5"
const NAMES = ['Omar', 'Bilal', 'Yusuf', 'Ibrahim', 'Zayd'];
const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;

// One point where test() === want (from goodPool) and three where it is not (from badPool). Earlier = preferred.
function pointPick(goodPool, badPool, test, want) {
  const g = goodPool.find(([x, y]) => test(x, y) === want), seen = new Set(), bad = [];
  if (!g) return null;
  for (const [x, y] of badPool) {
    const k = `${x},${y}`; if (seen.has(k) || test(x, y) === want) continue; seen.add(k); bad.push([x, y]);
  }
  return bad.length >= 3 ? [g, bad.slice(0, 3)] : null;
}
const randPts = (n) => Array.from({ length: n }, () => [ri(-5, 6), ri(-5, 8)]);

export const algebraGenerators = {
  // ── Unit 1 ──
  evalExpr() {
    const v = pick(['x', 'n', 'y']), t = ri(0, 3);
    if (t === 0) {
      const a = ri(2, 9), b = nz(-9, 9), k = ri(-5, 9), ans = a * k + b;
      return nq(`Evaluate ${lin(a, b, v)} when ${v} = ${fmt(k)}.`, ans, `Put ${neg(k)} in for ${v}: ${a} × ${neg(k)} ${sgn(b)} = ${fmt(a * k)} ${sgn(b)} = ${fmt(ans)}.`,
        [a + k + b, a * (k + b), a * k - b], { t, a, b, k });
    }
    if (t === 1) {
      const a = ri(2, 6), c = ri(5, 20), k = ri(-4, 8), ans = c - a * k;
      return nq(`Evaluate ${c} − ${a}${v} when ${v} = ${fmt(k)}.`, ans, `Multiply first: ${a} × ${neg(k)} = ${fmt(a * k)}. Then ${c} − ${neg(a * k)} = ${fmt(ans)}.`,
        [(c - a) * k, c + a * k, a * k - c], { t, a, c, k });
    }
    if (t === 2) {
      const k = nz(-9, 9), b = ri(-9, 9), ans = k * k + b;
      return nq(`Evaluate ${poly([[1, v + '²'], [b, '']])} when ${v} = ${fmt(k)}.`, ans, `${neg(k)}² = ${neg(k)} × ${neg(k)} = ${k * k}${b ? `, and ${k * k} ${sgn(b)} = ${fmt(ans)}` : ''}.`,
        [2 * k + b, -k * k + b, k * k - b], { t, k, b });
    }
    const p = ri(2, 5), s = pick([1, -1]), a = ri(1, 6), b = nz(-6, 6), ans = p * a + s * b, op = s > 0 ? '+' : '−';
    return nq(`Evaluate ${p}a ${op} b when a = ${a} and b = ${fmt(b)}.`, ans, `${p} × ${a} ${op} ${neg(b)} = ${fmt(p * a)} ${sgn(s * b)} = ${fmt(ans)}.`,
      [p * a - s * b, p + a + s * b, p * (a + s * b)], { t, p, s, a, b });
  },

  likeTerms() {
    const v = pick(['x', 'm', 'y', 'n']);
    let a, c; do { a = ri(1, 9); c = nz(-6, 6); } while (a + c === 0);
    const b = nz(-9, 9), d = nz(-9, 9);
    const order = pick([[[a, v], [b, ''], [c, v], [d, '']], [[a, v], [c, v], [b, ''], [d, '']], [[b, ''], [a, v], [d, ''], [c, v]]]);
    return mk(`Simplify ${poly(order)}.`, opts(lin(a + c, b + d, v), [lin(a - c, b + d, v), lin(a + c, b - d, v), mono(a + b + c + d, v), lin(a, b + d, v)], (k) => lin(a + c + k, b + d, v)),
      `Add the ${v} terms: ${fmt(a)} ${sgn(c)} = ${fmt(a + c)}. Add the plain numbers: ${fmt(b)} ${sgn(d)} = ${fmt(b + d)}.`, { a, b, c, d });
  },

  distribute() {
    const a = pick([2, 3, 4, 5, 6, 7, 8, 9, -2, -3, -4, -5]), p = pick([1, 1, 2, 3]), b = nz(-9, 9);
    return mk(`Which is equivalent to ${fmt(a)}(${lin(p, b)})?`, opts(lin(a * p, a * b), [lin(a * p, b), lin(a * p, -a * b), lin(a * p, a + b), lin(p, a * b)], (k) => lin(a * p, a * b + k)),
      `Multiply ${neg(a)} by each term inside: ${mono(a * p)} and ${fmt(a * b)}.`, { a, p, b });
  },

  // ── Unit 2 ──
  bothSides() {
    let a, c; do { a = nz(-6, 9); c = nz(-6, 9); } while (a === c);
    const x = ri(-8, 9), b = ri(-12, 12), k = a - c, d = k * x + b;
    return nq(`Solve: ${lin(a, b)} = ${lin(c, d)}`, x, `Get x on one side: ${lin(k, b)} = ${fmt(d)}, so ${mono(k)} = ${fmt(d - b)}${k === 1 ? '' : ` and x = ${fmt(x)}`}.`,
      [-x, d - b, (d + b) / k, (d - b) / (a + c)], { a, b, c, d, x }, { f: X });
  },

  parenEquation() {
    const x = ri(-6, 9), a = pick([2, 3, 4, 5, 6, -2, -3, -1]), b = nz(-7, 7), lv = a * (x + b);
    const L = `${a === -1 ? '−' : fmt(a)}(${lin(1, b)})`;
    let t = ri(0, 2), R, Rx, wr;
    if (t === 2) { // a(x + b) = c(x + e)
      const c = pick([2, 3, 4, 5, 6].filter((n) => n !== a)), e = (lv - c * x) / c;
      if (Number.isInteger(e) && e !== 0) { R = `${c}(${lin(1, e)})`; Rx = lin(c, c * e); wr = [(e - b) / (a - c), (c * e + a * b) / (a - c), -x]; } else t = 1;
    }
    if (t === 1) { const c = pick([1, 2, 3, -1, -2, 4].filter((n) => n !== a)), d = lv - c * x; R = Rx = lin(c, d); wr = [(d - b) / (a - c), (d + a * b) / (a - c), d - a * b]; }
    if (t === 0) { R = Rx = fmt(lv); wr = [lv / a + b, (lv - b) / a, lv - a * b, -x]; }
    return nq(`Solve: ${L} = ${R}`, x, `Distribute first: ${lin(a, a * b)} = ${Rx}. Then solve: x = ${fmt(x)}.`, wr, { t, x }, { f: X });
  },

  numSolutions() {
    const p = ri(2, 6), q = nz(-6, 6), r = ri(-5, 5), A = p, B = p * q + r, kind = ri(0, 2);
    const L = `${p}(${lin(1, q)})${r ? ' ' + sgn(r) : ''}`, one = (n) => `One solution: x = ${fmt(n)}`;
    if (kind === 0) return mk(`How many solutions does ${L} = ${lin(A, B)} have?`, opts('Infinitely many solutions', ['No solution', one(0), B ? one(B) : null], (k) => one(k)),
      `Both sides simplify to ${lin(A, B)}. That is always true, so every x works.`, { kind });
    if (kind === 1) { const g = nz(-6, 6); return mk(`How many solutions does ${L} = ${lin(A, B + g)} have?`, opts('No solution', ['Infinitely many solutions', one(0), one(g)], (k) => one(g + k)),
      `Both sides have ${mono(A)}, but ${fmt(B)} ≠ ${fmt(B + g)}. That is never true.`, { kind }); }
    let C; do { C = nz(-5, 7); } while (C === A);
    const x0 = ri(-6, 8);
    return mk(`How many solutions does ${L} = ${lin(C, A * x0 + B - C * x0)} have?`, opts(one(x0), ['No solution', 'Infinitely many solutions', one(x0 ? -x0 : 1)], (k) => one(x0 + k)),
      `The x terms are different (${mono(A)} and ${mono(C)}), so there is exactly one answer: x = ${fmt(x0)}.`, { kind, x0 });
  },

  unknownCoef() {
    const t = ri(0, 3);
    if (t === 0) {
      const b = ri(1, 9), s = pick([1, -1]); let top; do { top = ri(2, 20); } while (top === b || top === 2 * b);
      const c = s > 0 ? top + b : top - b, op = s > 0 ? '+' : '−';
      return mk(`Solve for x: ax ${op} ${b} = ${fmt(c)}`, opts(`x = ${top}/a`, [`x = ${fmt(s > 0 ? c + b : c - b)}/a`, `x = ${fmt(c)}/a ${s > 0 ? '−' : '+'} ${b}`, `x = a/${top}`], (k) => `x = ${top + k}/a`),
        `${s > 0 ? 'Subtract' : 'Add'} ${b} on both sides: ax = ${top}. Then divide by a: x = ${top}/a.`, { t });
    }
    if (t === 1) {
      const b = ri(2, 6), c = ri(b + 1, 30);
      return mk(`Solve for x: ax + ${b}x = ${c}`, opts(`x = ${c}/(a + ${b})`, [`x = ${c}/a − ${b}`, `x = ${c}/(a − ${b})`, `x = ${c - b}/a`], (k) => `x = ${c + k}/(a + ${b})`),
        `Factor out x: x(a + ${b}) = ${c}. Divide by (a + ${b}).`, { t });
    }
    if (t === 2) {
      const p = ri(2, 6), m = ri(1, 9), q = p * m, s = pick([1, -1]), op = s > 0 ? '+' : '−', inv = s > 0 ? '−' : '+';
      return mk(`Solve for x: ${p}x ${op} c = ${q}`, opts(`x = (${q} ${inv} c)/${p}`, [`x = (${q} ${op} c)/${p}`, `x = ${m} ${inv} c`, `x = ${p}(${q} ${inv} c)`], (k) => `x = (${q + k} ${inv} c)/${p}`),
        `${s > 0 ? 'Subtract' : 'Add'} c on both sides: ${p}x = ${q} ${inv} c. Divide the WHOLE side by ${p}.`, { t });
    }
    const k = ri(2, 6), xv = nz(-5, 9), b = nz(-9, 9), c = k * xv + b;
    return nq(`Solve ax ${sgn(b)} = ${fmt(c)} for x. What is x when a = ${k}?`, xv, `x = (${fmt(c)} ${sgn(-b)})/a = ${fmt(c - b)}/${k} = ${fmt(xv)}.`,
      [(c + b) / k, c / k - b, (c - b) * k, -xv], { t, k, b, c }, { f: X });
  },

  formulas() {
    const t = ri(0, 4);
    if (t === 0) { const l = ri(3, 12), w = ri(2, 12), A = l * w; return nq(`A rectangle has an area of ${A} square feet and a length of ${l} feet. What is its width?`, w, `A = lw, so w = A ÷ l = ${A} ÷ ${l} = ${w} feet.`, [A - l, (A - 2 * l) / 2, A / 2], { t, A, l }, { f: (n) => plural(n, 'foot', 'feet'), pos: true }); }
    if (t === 1) { const r = pick([20, 30, 40, 45, 50, 60, 65]), h = ri(2, 7), d = r * h; return nq(`A car goes ${d} miles at ${r} miles per hour. Using t = d/r, how long does it take?`, h, `t = ${d} ÷ ${r} = ${h} hours.`, [d - r, 2 * h, h + 1], { t, d, r }, { f: (n) => plural(n, 'hour', 'hours'), pos: true }); }
    if (t === 2) { const l = ri(4, 15), w = ri(2, l - 1), P = 2 * l + 2 * w; return nq(`A rectangle has a perimeter of ${P} feet and a width of ${w} feet. Using l = (P − 2w)/2, what is its length?`, l, `l = (${P} − ${2 * w}) ÷ 2 = ${P - 2 * w} ÷ 2 = ${l} feet.`, [P - 2 * w, (P - w) / 2, P / 2 - 2 * w], { t, P, w }, { f: (n) => plural(n, 'foot', 'feet'), pos: true }); }
    if (t === 3) { let b, h; do { b = ri(2, 12); h = ri(2, 12); } while ((b * h) % 2); const A = (b * h) / 2; return nq(`A triangle has an area of ${A} square inches and a base of ${b} inches. Using h = 2A/b, what is its height?`, h, `h = 2 × ${A} ÷ ${b} = ${2 * A} ÷ ${b} = ${h} inches.`, [A / b, 2 * A - b, A - b], { t, A, b }, { f: (n) => plural(n, 'inch', 'inches'), pos: true }); }
    const [f, v, right, wrong] = pick([
      ['A = lw', 'w', 'w = A/l', ['w = Al', 'w = A − l', 'w = l/A']],
      ['d = rt', 't', 't = d/r', ['t = dr', 't = d − r', 't = r/d']],
      ['P = 2l + 2w', 'l', 'l = (P − 2w)/2', ['l = P − 2w', 'l = (P − w)/2', 'l = P/2 − 2w']],
      ['V = lwh', 'h', 'h = V/(lw)', ['h = V − lw', 'h = Vlw', 'h = lw/V']],
      ['y = mx + b', 'b', 'b = y − mx', ['b = y + mx', 'b = mx − y', 'b = y/(mx)']],
      ['y = mx + b', 'x', 'x = (y − b)/m', ['x = (y + b)/m', 'x = y/m − b', 'x = m(y − b)']],
      ['A = ½bh', 'h', 'h = 2A/b', ['h = A/(2b)', 'h = 2A − b', 'h = Ab/2']],
      ['C = 2πr', 'r', 'r = C/(2π)', ['r = 2πC', 'r = C − 2π', 'r = 2C/π']],
    ]);
    return mk(`Solve ${f} for ${v}.`, [right, ...wrong], `Undo each step around ${v}, doing the same thing to both sides. You get ${right}.`, { t, f, v });
  },

  inequality() {
    const op = pick(['<', '>', '≤', '≥']), x0 = nz(-7, 7), t = ri(0, 2);
    let text, k;
    if (t === 0) { const a = nz(-6, 6), b = nz(-9, 9); k = a; text = `${Math.random() < 0.5 ? lin(a, b) : poly([[b, ''], [a, 'x']])} ${op} ${fmt(a * x0 + b)}`; }
    else if (t === 1) { k = pick([-6, -5, -4, -3, -2, 2, 3, 4, 5, 6]); text = `${mono(k)} ${op} ${fmt(k * x0)}`; }
    else { let a, c; do { a = nz(-5, 6); c = nz(-5, 6); } while (a === c); const b = ri(-9, 9); k = a - c; text = `${lin(a, b)} ${op} ${lin(c, k * x0 + b)}`; }
    const rop = k < 0 ? FLIP[op] : op, wop = FLIP[rop], ans = `x ${rop} ${fmt(x0)}`;
    return mk(`Solve: ${text}`, opts(ans, [`x ${wop} ${fmt(x0)}`, `x ${rop} ${fmt(-x0)}`, `x ${wop} ${fmt(-x0)}`], (n) => `x ${rop} ${fmt(x0 + n)}`),
      k < 0 ? `You divide by ${fmt(k)}, a negative number, so the sign flips: ${ans}.` : `You divide by ${k}, a positive number, so the sign stays: ${ans}.`, { op, x0, k });
  },

  compoundIneq() {
    const t = ri(0, 2);
    if (t === 0) {
      const a = ri(2, 5), b = nz(-9, 9), x1 = ri(-6, 3), x2 = x1 + ri(2, 7), o1 = pick(['<', '≤']), o2 = pick(['<', '≤']), lo = a * x1 + b, hi = a * x2 + b;
      const z = (l, h, p = o1, r = o2) => `${fmt(l)} ${p} x ${r} ${fmt(h)}`;
      const added = (lo + b) % a === 0 && (hi + b) % a === 0 ? z((lo + b) / a, (hi + b) / a) : null;
      return mk(`Solve: ${fmt(lo)} ${o1} ${lin(a, b)} ${o2} ${fmt(hi)}`, opts(z(x1, x2), [z(lo - b, hi - b), z(x1, x2, SWAP[o1], SWAP[o2]), added], (n) => z(x1 - n, x2 + n)),
        `Subtract ${neg(b)} from all three parts, then divide all three by ${a}: ${z(x1, x2)}.`, { t });
    }
    const p = ri(-8, 5), q = p + ri(3, 8), mid = ri(p + 1, q - 1);
    if (t === 1) {
      const out = Math.random() < 0.5 ? q + ri(1, 4) : p - ri(1, 4);
      return nq(`Which number is a solution of "x > ${fmt(p)} and x < ${fmt(q)}"?`, mid, `"And" means both must be true: bigger than ${fmt(p)} and smaller than ${fmt(q)}.`, [p, q, out], { t });
    }
    const ans = Math.random() < 0.5 ? q + ri(1, 4) : p - ri(1, 4);
    return nq(`Which number is a solution of "x < ${fmt(p)} or x > ${fmt(q)}"?`, ans, `"Or" means at least one part is true. ${fmt(ans)} is ${ans < p ? `less than ${fmt(p)}` : `more than ${fmt(q)}`}.`, [p, q, mid], { t });
  },

  // ── Unit 3 ──
  rateConvert() {
    const t = ri(0, 3);
    if (t === 0) { const v = pick([15, 30, 45, 60, 75, 90]), ans = (v * 22) / 15; return nq(`A car goes ${v} miles per hour. How many feet per second is that? (1 mile = 5,280 feet, 1 hour = 3,600 seconds)`, ans, `${v} × 5,280 ÷ 3,600 = ${ans} feet per second.`, [v * 88, v * 5280, v], { v, from: ['mi', 'h'], to: ['ft', 's'] }, { f: (n) => `${big(n)} ft/s`, pos: true }); }
    if (t === 1) { const v = pick([18, 36, 54, 72, 90, 108]), ans = (v * 5) / 18; return nq(`A train goes ${v} kilometers per hour. How many meters per second is that? (1 km = 1,000 m, 1 hour = 3,600 seconds)`, ans, `${v} × 1,000 ÷ 3,600 = ${ans} meters per second.`, [(v * 1000) / 60, v * 1000, v], { v, from: ['km', 'h'], to: ['m', 's'] }, { f: (n) => `${big(n)} m/s`, pos: true }); }
    const [thing, what, small, large, f] = pick([['A printer prints', 'pages', 'min', 'h', 60], ['A faucet drips', 'drops', 's', 'min', 60], ['A bakery bakes', 'loaves', 'h', 'day', 24], ['A plant grows', 'millimeters', 'day', 'week', 7]]);
    const W = { s: 'second', min: 'minute', h: 'hour', day: 'day', week: 'week' }, an = (u) => (u === 'h' ? 'an hour' : `a ${W[u]}`);
    if (t === 2) { const n = ri(2, 15), ans = n * f; return nq(`${thing} ${n} ${what} per ${W[small]}. How many ${what} per ${W[large]} is that?`, ans, `There are ${f} ${W[small]}s in ${an(large)}: ${n} × ${f} = ${ans}.`, [n + f, n * (f === 60 ? 100 : 60), n * f * f], { v: n, from: ['u', small], to: ['u', large] }, { f: big, pos: true }); }
    const n = ri(2, 30), v = n * f;
    return nq(`${thing} ${big(v)} ${what} per ${W[large]}. How many ${what} per ${W[small]} is that?`, n, `There are ${f} ${W[small]}s in ${an(large)}: ${big(v)} ÷ ${f} = ${n}.`, [v * f, v - f, n * 10], { v, from: ['u', large], to: ['u', small] }, { f: big, pos: true });
  },

  unitConvert() {
    const t = ri(0, 3);
    if (t <= 1) {
      const [L, M, S, f1, f2] = pick([['gallon', 'quart', 'cups', 4, 4], ['yard', 'foot', 'inches', 3, 12], ['hour', 'minute', 'seconds', 60, 60], ['day', 'hour', 'minutes', 24, 60], ['week', 'day', 'hours', 7, 24], ['kilometer', 'meter', 'centimeters', 1000, 100]]);
      const n = ri(2, 9), Ls = L === 'foot' ? 'feet' : `${L}s`, Ms = M === 'foot' ? 'feet' : `${M}s`;
      return nq(`How many ${S} are in ${n} ${Ls}? (1 ${L} = ${big(f1)} ${Ms}, 1 ${M} = ${big(f2)} ${S})`, n * f1 * f2, `${n} × ${big(f1)} × ${big(f2)} = ${big(n * f1 * f2)} ${S}. Each step cancels a unit.`,
        [n * f1, n * f2, n * (f1 + f2)], { t, n, f1, f2 }, { f: (k) => `${big(k)} ${S}`, pos: true, step: f1 * f2 });
    }
    if (t === 2) {
      const g = ri(4, 12), M = pick([20, 25, 30, 35, 40]), D = g * M, pc = pick([250, 300, 325, 350, 375, 400]), hrs = ri(2, 6);
      return nq(`A trip is ${D} miles${Math.random() < 0.5 ? ` and takes ${hrs} hours` : ''}. The car gets ${M} miles per gallon. Gas costs ${cents(pc)} per gallon. What does the gas cost?`, g * pc,
        `${D} ÷ ${M} = ${g} gallons, and ${g} × ${cents(pc)} = ${cents(g * pc)}. Skip any extra facts.`, [D * pc, g * 100, M * pc], { t, D, M, pc }, { f: cents, pos: true, step: pc });
    }
    let L, M, Dd; do { L = ri(2, 6); M = pick([200, 400, 500]); Dd = ri(2, 7); } while ((L * M * Dd) % 1000);
    const m = L * M * Dd;
    return nq(`You run ${L} laps of a ${M}-meter track every day for ${Dd} days. How many kilometers is that? (1 km = 1,000 m)`, m / 1000, `${L} × ${M} × ${Dd} = ${big(m)} meters, and ${big(m)} ÷ 1,000 = ${m / 1000} km.`,
      [m, m / 100, L * Dd], { t, L, M, Dd }, { f: (k) => `${big(k)} km`, pos: true });
  },

  // ── Unit 4 ──
  pointOnLine() {
    const m = nz(-4, 4), b = ri(-6, 6), eq = `y = ${lin(m, b)}`, t = ri(0, 2), x = ri(-4, 5), y = m * x + b;
    if (t === 0) {
      const off = (p) => p[1] !== m * p[0] + b, c = [[y, x], [x, m * x - b], [-x, y], [x + 1, y], [x, y + 2]].filter(off).map(([a, d]) => pt(a, d));
      return mk(`Which point is on the line ${eq}?`, opts(pt(x, y), c, (k) => pt(x, y + k)), `Put x = ${fmt(x)} in: y = ${calc(m, x, b)} = ${fmt(y)}.`, { t, m, b });
    }
    if (t === 1) return nq(`For ${eq}, what is y when x = ${fmt(x)}?`, y, `y = ${calc(m, x, b)} = ${fmt(y)}.`, [m + x + b, m * x - b, m * (x + b)], { t, m, b, x });
    const row = (f) => [0, 1, 2].map(f).map(fmt).join(', ');
    return mk(`For ${eq}, what are the y-values for x = 0, 1, 2?`, opts(row((u) => m * u + b), [m !== 1 ? row((u) => u + b) : null, b ? row((u) => m * u) : null, row((u) => m * (u + 1) + b)], (k) => row((u) => m * u + b + k)),
      `Put in each x: ${[0, 1, 2].map((u) => `${calc(m, u, b)} = ${fmt(m * u + b)}`).join(', ')}.`, { t, m, b });
  },

  horizVert() {
    const k = nz(-9, 9), vert = Math.random() < 0.5, t = ri(0, 2), L = vert ? `x = ${fmt(k)}` : `y = ${fmt(k)}`;
    const H = (p) => `A horizontal line through ${p}`, V = (p) => `A vertical line through ${p}`;
    if (t === 0) return mk(`What does the graph of ${L} look like?`, vert ? [V(pt(k, 0)), H(pt(0, k)), H(pt(k, 0)), V(pt(0, k))] : [H(pt(0, k)), V(pt(k, 0)), V(pt(0, k)), H(pt(k, 0))],
      vert ? `x is always ${fmt(k)}, so it is a straight up-and-down line.` : `y is always ${fmt(k)}, so it is a flat line.`, { t });
    if (t === 1) return mk(`What is the slope of the line ${L}?`, opts(vert ? 'undefined' : '0', [vert ? '0' : 'undefined', fmt(k), '1'], (n) => fmt(k + n)),
      vert ? 'A vertical line has no run (it never moves sideways), so its slope is undefined.' : 'A flat line never rises, so its slope is 0.', { t });
    const a = ri(-6, 6), b = ri(-6, 6), c = a + nz(-5, 5), d = b + nz(-5, 5);
    const [p1, p2] = vert ? [pt(a, b), pt(a, d)] : [pt(a, b), pt(c, b)];
    const right = vert ? `x = ${fmt(a)}` : `y = ${fmt(b)}`, wr = vert ? [`y = ${fmt(a)}`, `x = ${fmt(b)}`, `y = ${fmt(b)}`] : [`x = ${fmt(b)}`, `y = ${fmt(a)}`, `x = ${fmt(a)}`];
    return mk(`Which equation is the line through ${p1} and ${p2}?`, opts(right, wr, (n) => (vert ? `y = ${fmt(b + n)}` : `x = ${fmt(a + n)}`)),
      vert ? `Both points have x = ${fmt(a)}, so the line is vertical: ${right}.` : `Both points have y = ${fmt(b)}, so the line is flat: ${right}.`, { t, pts: vert ? [[a, b], [a, d]] : [[a, b], [c, b]] });
  },

  writeModel() {
    const t = ri(0, 2);
    if (t === 0) {
      const ctx = pick([
        () => ({ dec: true, S: ri(3, 12) * 100, r: pick([10, 15, 20, 25, 30, 40, 50]), s: (S, r) => `A tank has ${S} gallons and drains ${r} gallons per minute. Which equation gives the gallons left, y, after x minutes?` }),
        () => ({ dec: true, S: pick([80, 90, 100]), r: pick([5, 8, 10, 12]), s: (S, r) => `A phone battery is at ${S}% and drops ${r}% per hour. Which equation gives the battery percent, y, after x hours?` }),
        () => ({ dec: false, S: ri(3, 10) * 10, r: ri(1, 5) * 5, s: (S, r) => `${pick(NAMES)} has $${S} saved and adds $${r} each week. Which equation gives his savings, y, after x weeks?` }),
        () => ({ dec: false, S: ri(7, 15), r: ri(2, 6), s: (S, r) => `A plant is ${S} cm tall and grows ${r} cm per week. Which equation gives its height, y, after x weeks?` }),
      ])();
      const { dec, S, r } = ctx;
      const c = dec ? [`y = ${S} − ${r}x`, `y = ${r} − ${S}x`, `y = ${S} + ${r}x`, `y = ${r}x − ${S}`] : [`y = ${r}x + ${S}`, `y = ${S}x + ${r}`, `y = ${r}x − ${S}`, `y = ${S + r}x`];
      return mk(ctx.s(S, r), c, `Start at ${S}, then ${dec ? 'subtract' : 'add'} ${r} for each x.`, { t, S, r: dec ? -r : r });
    }
    if (t === 1) {
      if (Math.random() < 0.5) {
        const f = pick([10, 12, 14, 15, 20]), r = pick([4, 5, 6, 8]), B = f + r * ri(3, 8) + ri(0, 3);
        return mk(`A trampoline park costs $${f} to get in plus $${r} per hour. You can spend at most $${B}. Which inequality fits, with x = hours?`,
          [`${r}x + ${f} ≤ ${B}`, `${r}x + ${f} ≥ ${B}`, `${f}x + ${r} ≤ ${B}`, `${r + f}x ≤ ${B}`], `Cost = ${r}x + ${f}. "At most" means ≤.`, { t, f, r, B, op: '≤' });
      }
      const H = ri(13, 40), r = pick([5, 8, 10, 12]), N = H + r * ri(3, 9);
      return mk(`You need at least ${N} points. You already have ${H} and earn ${r} points per quiz. Which inequality fits, with x = quizzes?`,
        [`${H} + ${r}x ≥ ${N}`, `${H} + ${r}x ≤ ${N}`, `${r} + ${H}x ≥ ${N}`, `${H + r}x ≥ ${N}`], `Points = ${H} + ${r}x. "At least" means ≥.`, { t, f: H, r, B: N, op: '≥' });
    }
    let p1, p2; do { p1 = ri(2, 6); p2 = ri(2, 6); } while (p1 === p2);
    const T = p1 * ri(1, 5) + p2 * ri(1, 5);
    return mk(`Samosas cost $${p1} and drinks cost $${p2}. You spend exactly $${T}. If x = samosas and y = drinks, which equation fits?`,
      [`${p1}x + ${p2}y = ${T}`, `${p2}x + ${p1}y = ${T}`, `x + y = ${T}`, `${p1}x + ${p2}y ≤ ${T}`], `Samosas cost ${p1}x, drinks cost ${p2}y, and "exactly" means =.`, { t, p1, p2, T });
  },

  // ── Unit 5 ──
  pointSlope() {
    const m = pick([-5, -4, -3, -2, 2, 3, 4, 5]), x1 = nz(-6, 6), y1 = nz(-6, 6), t = ri(0, 2);
    const ps = (mm, a, b) => `y ${sgn(-b)} = ${fmt(mm)}(x ${sgn(-a)})`;
    const onLine = (a, b) => b - y1 === m * (a - x1);
    const eq = ps(m, x1, y1);
    if (t === 0) {
      const c = [[m, y1, x1], [m, -x1, -y1], [-m, x1, y1]].filter(([mm, a, b]) => !(mm === m && onLine(a, b))).map(([mm, a, b]) => ps(mm, a, b));
      return mk(`Write the line with slope ${fmt(m)} through ${pt(x1, y1)} in point-slope form.`, opts(eq, c, (k) => (x1 + k ? ps(m, x1 + k, y1) : null)), `y − y₁ = m(x − x₁) with m = ${fmt(m)}, x₁ = ${fmt(x1)}, y₁ = ${fmt(y1)}.`, { t, m, x1, y1 });
    }
    if (t === 1) {
      const c = [[-x1, -y1], [y1, x1], [-x1, y1], [x1, -y1]].filter(([a, b]) => !onLine(a, b)).map(([a, b]) => pt(a, b));
      return mk(`Which point is on the line ${eq}?`, opts(pt(x1, y1), c, (k) => pt(x1, y1 + k)), `In y − y₁ = m(x − x₁), the point is (x₁, y₁). Flip the signs you see: ${pt(x1, y1)}.`, { t });
    }
    const S = (a, b, mm) => `Point ${pt(a, b)}, slope ${fmt(mm)}`;
    const c = [[-x1, -y1, m], [x1, y1, -m], [y1, x1, m]].filter(([a, b, mm]) => !(mm === m && onLine(a, b))).map(([a, b, mm]) => S(a, b, mm));
    return mk(`Which point and slope does ${eq} show?`, opts(S(x1, y1, m), c, (k) => S(x1, y1 + k, m)), `The slope is the number in front: ${fmt(m)}. The point uses the opposite signs: ${pt(x1, y1)}.`, { t });
  },

  standardForm() {
    const p = nz(-6, 6), q = nz(-6, 6), t = ri(0, 2), g = Math.abs(gcd3(q, p, p * q));
    let A = q / g, B = p / g, C = (p * q) / g; if (A < 0) { A = -A; B = -B; C = -C; }
    const eq = std(A, B, C);
    if (t === 2 && A % B === 0 && C % B === 0) {
      const m = -A / B, b = C / B;
      return mk(`Rewrite ${eq} in slope-intercept form.`, opts(`y = ${lin(m, b)}`, [`y = ${lin(-m, b)}`, `y = ${lin(-A, C)}`, `y = ${lin(m, -b)}`], (k) => `y = ${lin(m, b + k)}`), `Move the x term, then divide everything by ${fmt(B)}: y = ${lin(m, b)}.`, { t: 2 });
    }
    if (t === 0) return mk(`What is the x-intercept of ${eq}?`, opts(pt(p, 0), [pt(0, p), pt(q, 0), pt(C, 0)], (k) => pt(p + k, 0)), `Put y = 0: ${mono(A)} = ${fmt(C)}${A === 1 ? '' : `, so x = ${fmt(p)}`}.`, { t: 0 });
    return mk(`What is the y-intercept of ${eq}?`, opts(pt(0, q), [pt(q, 0), pt(0, p), pt(0, C)], (k) => pt(0, q + k)), `Put x = 0: ${mono(B, 'y')} = ${fmt(C)}${B === 1 ? '' : `, so y = ${fmt(q)}`}.`, { t: 1 });
  },

  // ── Unit 6 ──
  meanMedian() {
    const t = pick([0, 1, 2, 4]), tidy = (v) => (Number.isInteger(v * 2) ? v : null), sum = (a) => a.reduce((s, n) => s + n, 0), srt = (a) => [...a].sort((u, v) => u - v);
    if (t === 0) {
      const n = pick([4, 5, 6]); let xs; do { xs = Array.from({ length: n }, () => ri(1, 20)); } while (sum(xs) % n);
      const s = srt(xs), med = n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2;
      return nq(`What is the mean of ${list(xs)}?`, sum(xs) / n, `Add them: ${sum(xs)}. Divide by how many (${n}): ${sum(xs) / n}.`, [sum(xs), tidy(sum(xs) / (n - 1)), med], { t }, { int: false, pos: true });
    }
    if (t === 1) {
      const n = pick([5, 7]), xs = Array.from({ length: n }, () => ri(1, 30)), s = srt(xs), h = (n - 1) / 2;
      return nq(`What is the median of ${list(xs)}?`, s[h], `Put them in order: ${list(s)}. The middle one is ${s[h]}.`, [xs[h], s[h - 1], s[h + 1], sum(xs) / n], { t }, { pos: true });
    }
    if (t === 2) {
      const n = pick([4, 6]), s = srt(Array.from({ length: n }, () => ri(1, 30))), a = s[n / 2 - 1], b = s[n / 2];
      return nq(`What is the median of ${list(s)}?`, (a + b) / 2, `Two middle numbers: ${a} and ${b}. Their average is ${(a + b) / 2}.`, [a, b, a + b, tidy(sum(s) / n)], { t }, { int: false, pos: true });
    }
    const s = srt(Array.from({ length: 8 }, () => ri(1, 30))), q1 = (s[1] + s[2]) / 2, q3 = (s[5] + s[6]) / 2;
    return nq(`Data: ${list(s)}. What is the IQR?`, q3 - q1, `Q1 = ${q1} (middle of the lower half), Q3 = ${q3} (middle of the upper half). IQR = ${q3} − ${q1} = ${q3 - q1}.`, [s[7] - s[0], q3, q1, s[6] - s[1]], { t }, { int: false });
  },

  residual() {
    const t = ri(0, 3);
    if (t === 0) {
      if (Math.random() < 0.5) {
        const m = pick([2, 3, 4]), b = -pick([60, 80, 100, 120]), x = ri(60, 95), y = m * x + b;
        return nq(`A shop's line of best fit is y = ${lin(m, b)} (x = temperature in °F, y = ice creams sold). Predict sales at ${x}°F.`, y, `y = ${calc(m, x, b)} = ${y}.`, [m * x, m * x - b, m + x + b], { t, m, b, x }, { pos: true, step: m });
      }
      const m = pick([4, 5, 6, 8]), b = pick([40, 45, 50, 55]), x = ri(1, 6), y = m * x + b;
      return nq(`A line of best fit for test scores is y = ${lin(m, b)}, where x = hours studied. Predict the score for ${x} hours.`, y, `y = ${calc(m, x, b)} = ${y}.`, [m * x, m * (x + b), m + x + b], { t, m, b, x }, { pos: true });
    }
    if (t === 1) {
      const P = ri(20, 90), A = P + nz(-9, 9);
      return nq(`The line predicts ${P}. The actual value is ${A}. What is the residual?`, A - P, `Residual = actual − predicted = ${A} − ${P} = ${fmt(A - P)}.`, [P - A, A + P, A], { t, P, A });
    }
    if (t === 2) {
      const m = nz(-3, 4), b = ri(-5, 10), x = ri(1, 8), p = m * x + b, y = p + nz(-6, 6);
      return nq(`The line of best fit is y = ${lin(m, b)}. A real data point is ${pt(x, y)}. What is its residual?`, y - p, `Predicted: ${calc(m, x, b)} = ${fmt(p)}. Residual = ${fmt(y)} − ${neg(p)} = ${fmt(y - p)}.`, [p - y, p, y], { t, m, b, x, y });
    }
    const r = nz(-8, 8), A = 'Above the line', B = 'Below the line';
    return mk(`A data point has a residual of ${fmt(r)}. Where is it compared with the line of best fit?`, [r > 0 ? A : B, r > 0 ? B : A, 'On the line', 'You can\'t tell without the equation'],
      r > 0 ? 'A positive residual means the real value is bigger than predicted, so the dot is above.' : 'A negative residual means the real value is smaller than predicted, so the dot is below.', { t, r });
  },

  twoWay() {
    const T = pick([20, 25, 50]); let a, b, c, d;
    do { a = ri(2, T / 2); b = ri(2, T / 2); c = ri(2, T / 2); d = T - a - b - c; } while (d < 2);
    const [r1, r2, verb, short] = pick([['9th grade', '10th grade', 'play a sport', 'play'], ['the morning class', 'the afternoon class', 'walk to school', 'walk'], ['the boys\' team', 'the girls\' team', 'have a library card', 'have one']]);
    const intro = `Survey: in ${r1}, ${a} ${verb} and ${b} don't. In ${r2}, ${c} ${short} and ${d} don't.`, t = ri(0, 2);
    if (t === 0) return nq(`${intro} How many people were surveyed in all?`, T, `Add all four cells: ${a} + ${b} + ${c} + ${d} = ${T}.`, [a + b + c, a + c, b + d], { t, a, b, c, d }, { pos: true });
    if (t === 1) return nq(`${intro} How many ${verb} in total?`, a + c, `Add the "${short}" cells from both rows: ${a} + ${c} = ${a + c}.`, [a + b, b + d, a], { t, a, b, c, d }, { pos: true });
    const pc = ((a + c) * 100) / T;
    return nq(`${intro} What is the relative frequency of people who ${verb}?`, pc, `${a + c} out of ${T}: ${a + c} ÷ ${T} = ${pc}%.`, [a + c, ((b + d) * 100) / T, Math.round((a * 100) / (a + b))], { t, a, b, c, d }, { f: (n) => `${n}%`, pos: true, step: 100 / T });
  },

  // ── Unit 7 ──
  systemCheck() {
    const x0 = ri(-4, 6), y0 = ri(-4, 8), t = ri(0, 1);
    const line = (on) => {
      const off = on ? 0 : nz(-3, 3);
      if (Math.random() < 0.5) { const m = nz(-3, 3); return `y = ${lin(m, y0 - m * x0 + off)}`; }
      const a = pick([1, 2, -1, 3]), b = pick([1, -1, 2]); return std(a, b, a * x0 + b * y0 + off);
    };
    if (t === 0) {
      const cs = ri(0, 3), on1 = cs === 0 || cs === 1, on2 = cs === 0 || cs === 2;
      let e1, e2; do { e1 = line(on1); e2 = line(on2); } while (e1 === e2);
      const all = ['Yes — it makes both equations true', 'No — it works in the first equation but not the second', 'No — it works in the second equation but not the first', 'No — it works in neither equation'];
      return mk(`Is ${pt(x0, y0)} a solution to ${e1} and ${e2}?`, [all[cs], ...all.filter((_, i) => i !== cs)], `Put x = ${fmt(x0)} and y = ${fmt(y0)} into each equation and check whether each one comes out true.`, { t });
    }
    let m1, m2; do { m1 = nz(-3, 3); m2 = nz(-3, 3); } while (m1 === m2);
    const b1 = y0 - m1 * x0, b2 = y0 - m2 * x0, onBoth = (x, y) => y === m1 * x + b1 && y === m2 * x + b2;
    const c = [[y0, x0], [x0 + 1, m1 * (x0 + 1) + b1], [-x0, -y0], [x0, b1]].filter(([x, y]) => !onBoth(x, y)).map(([x, y]) => pt(x, y));
    return mk(`The lines y = ${lin(m1, b1)} and y = ${lin(m2, b2)} cross at which point?`, opts(pt(x0, y0), c, (k) => pt(x0, y0 + k)), `Set them equal: ${lin(m1, b1)} = ${lin(m2, b2)} gives x = ${fmt(x0)}, then y = ${fmt(y0)}.`, { t });
  },

  systemSub() {
    const x0 = ri(-4, 8), y0 = ri(-4, 10);
    let e1, A1, B1;
    if (Math.random() < 0.7) { const m = nz(-3, 4); e1 = `y = ${lin(m, y0 - m * x0)}`; A1 = -m; B1 = 1; }
    else { const k = nz(-3, 3); e1 = `x = ${lin(k, x0 - k * y0, 'y')}`; A1 = 1; B1 = -k; }
    let a, b; do { a = nz(-3, 4); b = nz(-3, 3); } while (A1 * b - a * B1 === 0);
    const c = a * x0 + b * y0;
    const w = [[y0, x0], [-x0, -y0], b !== 1 ? [x0, b * y0] : null, [x0, y0 + 1]].filter((p) => p && (p[0] !== x0 || p[1] !== y0)).map(([x, y]) => pt(x, y));
    return mk(`Solve: ${e1} and ${std(a, b, c)}.`, opts(pt(x0, y0), w, (k) => pt(x0 + k, y0)), `Put the first equation into the second, solve for one letter, then use it to find the other: ${pt(x0, y0)}.`, { x0, y0 });
  },

  systemElim() {
    const x0 = ri(-3, 8), y0 = ri(-3, 8), opp = Math.random() < 0.5, t = ri(0, 2), b = ri(1, 4), a1 = ri(1, 4);
    let a2 = ri(1, 4); if (!opp) while (a2 === a1) a2 = ri(1, 4);
    const b2 = opp ? -b : b, c1 = a1 * x0 + b * y0, c2 = a2 * x0 + b2 * y0, e1 = std(a1, b, c1), e2 = std(a2, b2, c2);
    if (t === 0) {
      const w = [[y0, x0], [x0, -y0], [-x0, y0]].filter(([x, y]) => x !== x0 || y !== y0).map(([x, y]) => pt(x, y));
      return mk(`Solve: ${e1} and ${e2}.`, opts(pt(x0, y0), w, (k) => pt(x0, y0 + k)), `${opp ? 'Add' : 'Subtract'} the equations so y cancels, solve for x, then find y: ${pt(x0, y0)}.`, { opp });
    }
    if (t === 1) {
      const E = (cx, cy, k) => `${poly([[cx, 'x'], [cy, 'y']])} = ${fmt(k)}`;
      if (opp) return mk(`Add ${e1} and ${e2}. What do you get?`, opts(E(a1 + a2, 0, c1 + c2), [E(a1 + a2, 2 * b, c1 + c2), a1 !== a2 ? E(a1 - a2, 0, c1 - c2) : null, E(a1 + a2, 0, c1 - c2)], (k) => E(a1 + a2, 0, c1 + c2 + k)),
        `Add left sides and right sides: ${mono(b, 'y')} and ${mono(-b, 'y')} cancel, leaving ${E(a1 + a2, 0, c1 + c2)}.`, { op: 'add' });
      return mk(`Subtract ${e2} from ${e1}. What do you get?`, opts(E(a1 - a2, 0, c1 - c2), [E(a1 + a2, 0, c1 + c2), E(a1 - a2, 2 * b, c1 - c2), E(a1 - a2, 0, c1 + c2)], (k) => E(a1 - a2, 0, c1 - c2 + k)),
        `Subtract each part: the ${mono(b, 'y')} terms cancel, leaving ${E(a1 - a2, 0, c1 - c2)}.`, { op: 'sub' });
    }
    const A = 'add the equations', S = 'subtract the equations';
    return mk(`To make y disappear in ${e1} and ${e2}, you should…`, [opp ? A : S, opp ? S : A, 'multiply both equations by 2', 'swap x and y in one equation'],
      opp ? `The y terms are opposites (${mono(b, 'y')} and ${mono(-b, 'y')}), so adding cancels them.` : `The y terms are the same (${mono(b, 'y')}), so subtracting cancels them.`, { opp });
  },

  systemCount() {
    const m = nz(-4, 4), b = ri(-6, 6), kind = ri(0, 2), e1 = `y = ${lin(m, b)}`;
    const forms = [(mm, bb) => { const k = ri(2, 3); return `${k}y = ${lin(k * mm, k * bb)}`; }, (mm, bb) => std(-mm, 1, bb)];
    let e2;
    if (kind === 0) { let m2; do { m2 = nz(-4, 4); } while (m2 === m); e2 = `y = ${lin(m2, ri(-6, 6))}`; }
    else if (kind === 1) { const b2 = b + nz(-5, 5); e2 = Math.random() < 0.5 ? `y = ${lin(m, b2)}` : pick(forms)(m, b2); }
    else e2 = pick(forms)(m, b);
    const C = [['One — the slopes are different', 'None — the slopes are different', 'Infinitely many — it is the same line', 'None — the lines are parallel'],
      ['None — same slope, different y-intercepts', 'One — the lines cross once', 'Infinitely many — same slope', 'Two — one for each line'],
      ['Infinitely many — it is the same line', 'None — the lines are parallel', 'One — the lines cross once', 'Two — one for each line']][kind];
    return mk(`How many solutions: ${e1} and ${e2}?`, C, ['Different slopes means the lines cross at exactly one point.', 'Same slope but a different y-intercept: parallel lines never meet.', 'Simplify the second equation and you get the same line, so every point on it works.'][kind], { kind });
  },

  systemWord() {
    const t = ri(0, 2), who = pick(NAMES);
    if (t === 0) {
      const a = ri(6, 25), b = ri(1, a - 1), S = a + b, D = a - b, P = (x, y) => `${x} and ${y}`;
      const w = [[S - D, D], [S + D, S - D], [a + 1, b - 1]].filter(([x, y]) => !((x === a && y === b) || (x === b && y === a)));
      return mk(`Two numbers add up to ${S}. Their difference is ${D}. What are they?`, opts(P(a, b), w.map(([x, y]) => P(x, y)), (k) => P(a + k + 1, b - k - 1)), `Big + small = ${S} and big − small = ${D}. Add them: 2 × big = ${S + D}, so big = ${a} and small = ${b}.`, { t, S, D });
    }
    if (t === 1) {
      let k, ad, N, A; do { k = ri(2, 6); ad = ri(k + 1, 10); N = ri(20, 90); A = ri(5, N - 5); } while (A === N - A);
      const T = k * (N - A) + ad * A;
      if (Math.random() < 0.5) return nq(`A school event sold ${N} tickets. Kids pay $${k} and adults pay $${ad}. They collected $${T}. How many adult tickets were sold?`, A,
        `k + a = ${N} and ${k}k + ${ad}a = ${T}. Solving gives a = ${A} adult tickets (and ${N - A} kids).`, [N - A, T / ad, Math.round(N / 2)], { t, k, ad, N, T }, { pos: true });
      return nq(`Notebooks cost $${k} and folders cost $${ad}. ${who} buys ${N} items and spends $${T}. How many folders did he buy?`, A,
        `n + f = ${N} and ${k}n + ${ad}f = ${T}. Solving gives f = ${A} folders (and ${N - A} notebooks).`, [N - A, T / ad, Math.round(N / 2)], { t, k, ad, N, T }, { pos: true });
    }
    const sis = ri(5, 15), d = ri(1, 7), S = 2 * sis + d;
    return nq(`${who} is ${d} years older than his sister. Their ages add up to ${S}. How old is ${who}?`, sis + d, `Sister = s, ${who} = s + ${d}. s + s + ${d} = ${S}, so s = ${sis} and ${who} is ${sis + d}.`, [sis, S - d, S / 2 + d], { t, d, S }, { pos: true });
  },

  // ── Unit 8 ──
  ineqPoint() {
    const op = pick(['<', '>', '≤', '≥']), t = ri(0, 1), strict = op === '<' || op === '>';
    let text, val, bpts;
    if (Math.random() < 0.65) { const m = nz(-3, 3), b = ri(-5, 5); text = `y ${op} ${lin(m, b)}`; val = (x, y) => [y, m * x + b]; bpts = [0, 1, 2, -1].map((x) => [x, m * x + b]); }
    else { const a = pick([1, 2, 3]), b = pick([1, 2, 3]), c = a * ri(0, 3) + b * ri(0, 3); text = `${poly([[a, 'x'], [b, 'y']])} ${op} ${c}`; val = (x, y) => [a * x + b * y, c]; bpts = [[c / a, 0], [0, c / b]].filter(([x, y]) => Number.isInteger(x) && Number.isInteger(y)); }
    const test = (x, y) => { const [l, r] = val(x, y); return cmp(l, op, r); };
    const trap = Math.random() < 0.6 ? bpts : [], rnd = randPts(40);
    const res = t === 0 ? pointPick([...(strict ? [] : trap), ...rnd], [...(strict ? trap : []), ...rnd], test, true)
      : pointPick([...(strict ? trap : []), ...rnd], [...(strict ? [] : trap), ...rnd], test, false);
    if (!res) return algebraGenerators.ineqPoint();
    const [[x, y], bad] = res, [l, r] = val(x, y);
    return mk(t === 0 ? `Which point is a solution of ${text}?` : `Which point is NOT a solution of ${text}?`, [pt(x, y), ...bad.map(([u, v]) => pt(u, v))],
      `Check ${pt(x, y)}: ${fmt(l)} ${op} ${fmt(r)} is ${t === 0 ? 'true' : 'false'}.`, { t });
  },

  ineqGraph() {
    const op = pick(['<', '>', '≤', '≥']), m = nz(-4, 4), b = nz(-6, 6), t = ri(0, 3) < 3 ? 0 : 1;
    if (t === 0) {
      const flipSide = Math.random() < 0.25, eff = flipSide ? FLIP[op] : op, text = flipSide ? `${lin(m, b)} ${op} y` : `y ${op} ${lin(m, b)}`;
      const solid = op === '≤' || op === '≥', above = eff === '>' || eff === '≥', right = `${solid ? 'Solid' : 'Dashed'} line, shade ${above ? 'above' : 'below'}`;
      const all = ['Solid line, shade above', 'Dashed line, shade above', 'Solid line, shade below', 'Dashed line, shade below'];
      return mk(`How do you graph ${text}?`, [right, ...all.filter((s) => s !== right)], `${solid ? '≤ and ≥ include the line, so draw it solid' : '< and > leave the line out, so draw it dashed'}. y ${eff} … means shade ${above ? 'above' : 'below'}.`, { t });
    }
    const ok = cmp(0, op, b), W = 'The side WITH (0, 0)', WO = 'The side WITHOUT (0, 0)';
    return mk(`You test (0, 0) in y ${op} ${lin(m, b)} and get 0 ${op} ${fmt(b)}, which is ${ok ? 'true' : 'false'}. What do you shade?`, [ok ? W : WO, ok ? WO : W, 'Only the line', 'Nothing — there is no solution'],
      ok ? '(0, 0) makes it true, so shade its side.' : '(0, 0) makes it false, so shade the other side.', { t });
  },

  ineqSystem() {
    const t = ri(0, 1), mkI = () => { const op = pick(['<', '>', '≤', '≥']), m = pick([0, 1, -1, 2, -2, 1, -1]), b = ri(-4, 5); return { op, m, b, text: `y ${op} ${lin(m, b)}`, ok: (x, y) => cmp(y, op, m * x + b) }; };
    if (t === 0) {
      const x0 = ri(-3, 4), y0 = ri(-3, 5), cs = ri(0, 3), want = [[true, true], [false, true], [true, false], [false, false]][cs];
      let I; do { I = want.map((w) => { const op = pick(['<', '>', '≤', '≥']), m = pick([0, 1, -1, 2]), up = op === '>' || op === '≥', strict = op === '<' || op === '>';
        const gap = w ? (strict ? ri(1, 3) : ri(0, 3)) : (strict ? ri(0, 3) : ri(1, 3)); const b = y0 - m * x0 + (up === w ? -gap : gap);
        return `y ${op} ${lin(m, b)}`; }); } while (I[0] === I[1]);
      const all = ['Yes — it makes both true', `No — it fails ${I[0]}`, `No — it fails ${I[1]}`, 'No — it fails both'];
      return mk(`Is ${pt(x0, y0)} a solution of the system ${I[0]} and ${I[1]}?`, [all[cs], ...all.filter((_, i) => i !== cs)], `A solution must make BOTH inequalities true. Put in x = ${fmt(x0)}, y = ${fmt(y0)} and check each one.`, { t });
    }
    const A = mkI(), B = mkI(), pool = randPts(60), res = pointPick(pool, pool, (x, y) => A.ok(x, y) && B.ok(x, y), true);
    if (!res) return algebraGenerators.ineqSystem();
    const [[x, y], bad] = res;
    return mk(`Which point is a solution of the system ${A.text} and ${B.text}?`, [pt(x, y), ...bad.map(([u, v]) => pt(u, v))], `${pt(x, y)} makes both true. Each other point fails at least one.`, { t });
  },

  budgetIneq() {
    const [i1, i2] = pick([['wraps', 'drinks'], ['notebooks', 'pens'], ['shirts', 'caps'], ['books', 'bookmarks']]);
    let p1, p2; do { p1 = ri(2, 9); p2 = ri(1, 5); } while (p1 === p2);
    const t = ri(0, 3);
    if (t === 0) { const B = ri(15, 60); return mk(`${i1[0].toUpperCase() + i1.slice(1)} cost $${p1} each and ${i2} cost $${p2} each. You can spend at most $${B}. With x = ${i1} and y = ${i2}, which inequality fits?`,
      opts(`${poly([[p1, 'x'], [p2, 'y']])} ≤ ${B}`, [`${poly([[p1, 'x'], [p2, 'y']])} ≥ ${B}`, `${poly([[p2, 'x'], [p1, 'y']])} ≤ ${B}`, `x + y ≤ ${B}`], (k) => `${poly([[p1, 'x'], [p2, 'y']])} ≤ ${B + k}`), `Cost = ${poly([[p1, 'x'], [p2, 'y']])}, and "at most" means ≤.`, { t, p1, p2, B, op: '≤' }); }
    if (t === 1) { const N = ri(4, 12), who = pick(NAMES); return mk(`${who} studies math (x hours) and biology (y hours). He wants at least ${N} hours in total this weekend. Which inequality fits?`,
      [`x + y ≥ ${N}`, `x + y ≤ ${N}`, `x + y > ${N}`, `xy ≥ ${N}`], `Total hours = x + y, and "at least" means ≥ (exactly ${N} counts).`, { t, N }); }
    const x = ri(1, 5), y = ri(1, 6), cost = p1 * x + p2 * y;
    if (t === 2) {
      const B = cost + ri(-3, 3), ok = cost <= B, yes = (v, c) => `${v ? 'Yes' : 'No'} — it costs $${c}`;
      return mk(`Using ${poly([[p1, 'x'], [p2, 'y']])} ≤ ${B} (x = ${i1}, y = ${i2}), can you buy ${x} ${i1} and ${y} ${i2}?`, opts(yes(ok, cost), [yes(!ok, cost), yes(!ok, p2 * x + p1 * y), `${ok ? 'No' : 'Yes'} — it is ${x + y} items`], (k) => yes(!ok, cost + k)),
        `${p1} × ${x} + ${p2} × ${y} = ${cost}, and ${cost} ≤ ${B} is ${ok ? 'true' : 'false'}.`, { t, p1, p2, x, y, B });
    }
    const B = p1 * x + p2 * ri(1, 6) + ri(0, p2 - 1), most = Math.floor((B - p1 * x) / p2);
    return nq(`Using ${poly([[p1, 'x'], [p2, 'y']])} ≤ ${B} (x = ${i1}, y = ${i2}), what is the most ${i2} you can buy with ${x} ${i1}?`, most,
      `${x} ${i1} cost $${p1 * x}, leaving $${B - p1 * x}. ${B - p1 * x} ÷ ${p2} = ${+((B - p1 * x) / p2).toFixed(2)}, so ${most} at most (round down).`,
      [most + 1, Math.floor(B / p2), B - p1 * x], { t, p1, p2, x, B }, { pos: true });
  },

  ...algebra2,
};

function gcd3(a, b, c) { const g = (u, v) => { u = Math.abs(u); v = Math.abs(v); while (v) [u, v] = [v, u % v]; return u; }; return g(g(a, b), c); }
