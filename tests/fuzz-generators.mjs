#!/usr/bin/env node
// Fuzz test for every quiz generator exported by js/practice.js (the 8 originals + gen-algebra*.js).
// Each generator runs N times (default 5,000). Checks: exactly 4 distinct non-blank choices, no
// NaN/undefined/Infinity/−0, tidy plain-text math, and that c[0] really is correct AND no wrong choice
// is also correct. Answers are recomputed here — by parsing the question text with a small Unicode-math
// evaluator, or from the raw numbers in the hidden _check object — never by calling generator code.
// Usage: node tests/fuzz-generators.mjs [N]           (N defaults to 5000)
//        node tests/fuzz-generators.mjs [N] --mutate  (self-test: swaps the right answer with a wrong one;
//                                                      every generator's check must then FAIL)
import { generators } from '../js/practice.js';
import { algebraGenerators } from '../js/gen-algebra.js';

const N = Number(process.argv.find((a) => /^\d+$/.test(a))) || 5000;
const MUTATE = process.argv.includes('--mutate');

// ── Unicode math → JavaScript ──
const SUPMAP = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', '⁻': '-', 'ⁿ': 'n', 'ˣ': 'x' };
function toJS(src) {
  const s = src.replace(/−/g, '-').replace(/[·×]/g, '*').replace(/÷/g, '/').replace(/(\d),(?=\d{3})/g, '$1');
  let out = '', prev = false, depth = 0;
  const val = (code, ends = true) => { if (prev) out += '*'; out += code; prev = ends; };
  for (let i = 0; i < s.length;) {
    const ch = s[i], rest = s.slice(i); let m;
    if (/\s/.test(ch)) { i++; continue; }
    if ((m = /^\d+(\.\d+)?/.exec(rest))) { val(m[0]); i += m[0].length; continue; }
    if ((m = /^[⁰¹²³⁴⁵⁶⁷⁸⁹⁻ⁿˣ]+/.exec(rest))) { out += `**(${[...m[0]].map((c) => SUPMAP[c]).join('')})`; prev = true; i += m[0].length; continue; }
    if (/[A-Za-z]/.test(ch)) { val(ch); i++; continue; }
    if (ch === 'π') { val('Math.PI'); i++; continue; }
    if (ch === '½') { val('(1/2)'); i++; continue; }
    if (ch === '√' || ch === '∛') {
      const fn = ch === '√' ? 'Math.sqrt' : 'Math.cbrt';
      if (s[i + 1] === '(') { val(fn, false); i++; continue; }
      m = /^(\d+(\.\d+)?|[A-Za-z])/.exec(s.slice(i + 1)); if (!m) throw new Error(`bad root in "${src}"`);
      val(`${fn}(${m[0]})`); i += 1 + m[0].length; continue;
    }
    if (ch === '|') { if (prev && depth) { out += ')'; depth--; prev = true; } else { val('Math.abs(', false); depth++; } i++; continue; }
    if (ch === '(') { val('(', false); i++; continue; }
    if (ch === ')') { out += ')'; prev = true; i++; continue; }
    if (ch === '-' && !prev) { out += '(-1)*'; i++; continue; }
    if ('+-*/^'.includes(ch)) { out += ch === '^' ? '**' : ch; prev = false; i++; continue; }
    throw new Error(`toJS: unexpected "${ch}" in "${src}"`);
  }
  return out;
}
const cache = new Map();
function ev(src, env = {}) {
  let f = cache.get(src);
  if (!f) {
    const vars = [...new Set((src.replace(/ⁿ/g, 'n').replace(/ˣ/g, 'x').match(/[A-Za-z]/g)) || [])];
    f = { vars, fn: new Function(...vars, `return (${toJS(src)});`) };
    if (cache.size > 20000) cache.clear();
    cache.set(src, f);
  }
  return f.fn(...f.vars.map((v) => env[v]));
}
const near = (a, b) => Number.isFinite(a) && Number.isFinite(b) && Math.abs(a - b) <= 1e-9 * Math.max(1, Math.abs(a), Math.abs(b));
const unk = (s) => s.replace(/(\d),(?=\d{3}(?!\d))/g, '$1'); // drop thousands commas
function num(s) {
  const m = /−?\d+(\.\d+)?(\/\d+)?/.exec(unk(String(s)));
  if (!m) return NaN;
  const [a, b] = m[0].replace('−', '-').split('/');
  return b ? Number(a) / Number(b) : Number(a);
}
const nums = (s) => (unk(s).match(/−?\d+(?:\.\d+)?(?:\/\d+)?/g) || []).map(num);
const P = (s) => { const m = /\((−?\d+), (−?\d+)\)/.exec(s); return m ? [num(m[1]), num(m[2])] : null; };
const sameArr = (a, b) => a.length === b.length && a.every((v, i) => near(v, b[i]));
const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
const isSq = (n) => n >= 0 && Number.isInteger(Math.sqrt(n));
const squarefree = (n) => { for (let d = 2; d * d <= n; d++) if (n % (d * d) === 0) return false; return true; };
const SUBD = (s) => Number([...s].map((c) => '₀₁₂₃₄₅₆₇₈₉'.indexOf(c)).join(''));

// Relations: "a ≤ b", "lo < E ≤ hi", "y = 2x + 1"
const RELS = ['≤', '≥', '<', '>', '='];
function splitRel(src) {
  const parts = [], ops = []; let depth = 0, cur = '';
  for (const ch of src) {
    if (ch === '(') depth++; if (ch === ')') depth--;
    if (depth === 0 && RELS.includes(ch)) { parts.push(cur.trim()); ops.push(ch); cur = ''; } else cur += ch;
  }
  parts.push(cur.trim());
  return { parts, ops };
}
const cmp = (a, op, b) => (op === '<' ? a < b - 1e-9 : op === '>' ? a > b + 1e-9 : op === '≤' ? a <= b + 1e-9 : op === '≥' ? a >= b - 1e-9 : near(a, b));
function holds(src, env) {
  const { parts, ops } = splitRel(src);
  if (!ops.length) throw new Error(`no relation in "${src}"`);
  for (let i = 0; i < ops.length; i++) if (!cmp(ev(parts[i], env), ops[i], ev(parts[i + 1], env))) return false;
  return true;
}
function coefs(src) { const { parts } = splitRel(src), F = (x, y) => ev(parts[0], { x, y }) - ev(parts[1], { x, y }), C = F(0, 0); return { A: F(1, 0) - C, B: F(0, 1) - C, C }; }
const SAMPLE = [1.37, -0.73, 2.91, 0.41, -2.2, 1.9];
function equiv(a, b, vars = ['x']) {
  let n = 0;
  for (let i = 0; i < SAMPLE.length; i++) {
    const env = {}; vars.forEach((v, j) => { env[v] = SAMPLE[(i + 2 * j) % SAMPLE.length] + 0.17 * j; });
    let u, w; try { u = ev(a, env); w = ev(b, env); } catch { return false; }
    if (!Number.isFinite(u) || !Number.isFinite(w)) continue;
    if (!near(u, w)) return false; n++;
  }
  return n >= 3;
}
const varsOf = (s) => [...new Set(s.match(/[a-z]/g) || ['x'])];
const rhs = (s) => s.slice(s.indexOf('=') + 1).trim();

// ── Check helpers. Each returns an error string or null. ──
const wrongs = (g) => g.c.slice(1);
function numAns(g, exp) {
  if (!near(num(g.c[0]), exp)) return `c[0] "${g.c[0]}" but expected ${exp}`;
  const w = wrongs(g).find((c) => near(num(c), exp));
  return w ? `wrong choice "${w}" is also ${exp}` : null;
}
function oneTrue(g, test, label = 'correct') { // c[0] passes test, the wrong ones fail
  if (!test(g.c[0])) return `c[0] "${g.c[0]}" is not ${label}`;
  const w = wrongs(g).find((c) => test(c));
  return w ? `wrong choice "${w}" is also ${label}` : null;
}
const exprAns = (g, expr, strip = /^[^=]*= /) => oneTrue(g, (c) => equiv(c.replace(strip, ''), expr, varsOf(expr)), 'equivalent');
function inQ(g, ...ns) { const q = unk(g.q); for (const n of ns) if (!new RegExp(`(^|[^\\d.])${String(n).replace('-', '−')}([^\\d]|$)`).test(q)) return `question does not show ${n}`; return null; }
const first = (...errs) => errs.find(Boolean) || null;
function rx(re, s) { const m = re.exec(s); if (!m) throw new Error(`text did not match ${re}: "${s}"`); return m; }
const ptsOn = (eq) => (c) => { const p = P(c); return !!p && holds(eq, { x: p[0], y: p[1] }); };
// Same linear relation as A·x + B·y + C (op) 0? Compares coefficients, so it can't be fooled by a coarse grid.
function sameLin(c, w, op) {
  const { ops } = splitRel(c); if (ops.length !== 1 || ops[0] !== op) return false;
  const q = coefs(c), pairs = [[q.A, w.A], [q.B, w.B], [q.C, w.C]], ref = pairs.find(([, b]) => b !== 0), r = ref[0] / ref[1];
  return (op === '=' || r > 0) && pairs.every(([a, b]) => near(a, r * b));
}
function sameTruth(a, b, samples) { return samples.every((env) => holds(a, env) === holds(b, env)); }
const xsAround = (vals) => { const out = []; for (const v of vals) for (const d of [-10, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 10]) out.push({ x: v + d }); return out; };
const seqList = (q) => nums(rx(/(?:of|for) (.+), …\?/, q)[1]);
const isArith = (t) => t.every((v, i) => i < 2 || near(v - t[i - 1], t[1] - t[0]));
const isGeo = (t) => t.every((v) => v !== 0) && t.every((v, i) => i < 2 || near(v * t[i - 2], t[i - 1] * t[i - 1]));
function solveSet(eq) { const out = []; for (let x = -80; x <= 80; x += 0.5) if (holds(eq, { x })) out.push(x); return out; }
function ansSet(c) { if (c === 'no solution') return []; let m = /^x = (.+) or x = (.+)$/.exec(c); if (m) return [num(m[1]), num(m[2])].sort((a, b) => a - b); m = /^x = (.+) only$/.exec(c); return m ? [num(m[1])] : null; }
function linePts(g, q) { const m = rx(/^Solve: (.+) and (.+)\.$/, q); return oneTrue(g, (c) => { const p = P(c); return !!p && holds(m[1], { x: p[0], y: p[1] }) && holds(m[2], { x: p[0], y: p[1] }); }, 'on both lines'); }

const CHECK = {
  // ── original practice.js generators (checked by parsing the text) ──
  isFunction(g) {
    const pairs = [...rx(/^Is \{(.+)\} a function\?$/, g.q)[1].matchAll(/\((−?\d+), (−?\d+)\)/g)].map((m) => [num(m[1]), num(m[2])]);
    const fn = pairs.every(([x, y]) => pairs.every(([u, v]) => u !== x || v === y)), word = fn ? 'Yes' : 'No';
    return oneTrue(g, (c) => c.split(' ')[0] === word, `"${word}"`);
  },
  evaluate(g) {
    let m = /^If f\(x\) = (.+), what is f\((.+)\)\?$/.exec(g.q);
    if (m) return numAns(g, ev(m[1], { x: num(m[2]) }));
    m = rx(/^If f\(x\) = (.+), which x makes f\(x\) = (.+)\?$/, g.q);
    return oneTrue(g, (c) => near(ev(m[1], { x: num(c) }), num(m[2])), 'a solution');
  },
  domainRange(g) {
    const m = rx(/^What is the (domain|range) of \{(.+)\}\?$/, g.q), pairs = [...m[2].matchAll(/\((−?\d+), (−?\d+)\)/g)].map((p) => [num(p[1]), num(p[2])]);
    const want = [...new Set(pairs.map((p) => p[m[1] === 'domain' ? 0 : 1]))].sort((a, b) => a - b);
    return oneTrue(g, (c) => sameArr(nums(c), want), `the ${m[1]}`);
  },
  readTable(g) {
    const m = rx(/^Table — x: (.+) {2}→ {2}f\(x\): (.+)\. (.+)$/, g.q), xs = nums(m[1]), ys = nums(m[2]), ask = m[3];
    let a;
    if ((a = /^What is f\((\d+)\)\?$/.exec(ask))) return numAns(g, ys[xs.indexOf(num(a[1]))]);
    if ((a = /^Which x gives f\(x\) = (.+)\?$/.exec(ask))) return numAns(g, xs[ys.findIndex((y) => near(y, num(a[1])))]);
    return oneTrue(g, (c) => c === (ys[1] > ys[0] ? 'Increasing' : 'Decreasing'), 'the trend');
  },
  slope(g) { const [x1, y1, x2, y2] = nums(rx(/between (.+)\?$/, g.q)[1]); return numAns(g, (y2 - y1) / (x2 - x1)); },
  intercepts(g) {
    const m = rx(/^What is the (x|y)-intercept of y = (.+)\?$/, g.q);
    if (m[1] === 'y') return oneTrue(g, (c) => { const p = P(c); return !!p && p[0] === 0 && near(p[1], ev(m[2], { x: 0 })); }, 'the y-intercept');
    return oneTrue(g, (c) => { const p = P(c); return !!p && p[1] === 0 && near(ev(m[2], { x: p[0] }), 0); }, 'the x-intercept');
  },
  slopeIntercept(g) {
    let m = /^What is the slope of y = (.+)\?$/.exec(g.q);
    if (m) return numAns(g, ev(m[1], { x: 1 }) - ev(m[1], { x: 0 }));
    if ((m = /^What is the y-intercept of y = (.+)\?$/.exec(g.q))) return numAns(g, ev(m[1], { x: 0 }));
    m = rx(/^Which line has slope (.+) and y-intercept (.+)\?$/, g.q);
    return oneTrue(g, (c) => { const e = rhs(c); return near(ev(e, { x: 1 }) - ev(e, { x: 0 }), num(m[1])) && near(ev(e, { x: 0 }), num(m[2])); }, 'that line');
  },
  models(g) {
    let n;
    if (/repair shop/.test(g.q)) { n = nums(g.q); return numAns(g, n[0] + n[1] * n[2]); }
    if (/save \$/.test(g.q)) { n = nums(g.q); return numAns(g, n[0] + n[1] * n[2]); }
    if (/candle/.test(g.q)) { n = nums(g.q); return numAns(g, n[0] / n[1]); }
    n = nums(g.q); return numAns(g, (n[2] - n[0]) / n[1]);
  },

  // ── Unit 1 ──
  evalExpr(g) {
    const m = rx(/^Evaluate (.+) when (.+)\.$/, g.q), env = {};
    for (const a of m[2].split(' and ')) { const [v, val] = a.split(' = '); env[v] = num(val); }
    return numAns(g, ev(m[1], env));
  },
  likeTerms: (g) => exprAns(g, rx(/^Simplify (.+)\.$/, g.q)[1], /^$/),
  distribute: (g) => exprAns(g, rx(/^Which is equivalent to (.+)\?$/, g.q)[1], /^$/),
  // ── Unit 2 ──
  bothSides(g) { const eq = rx(/^Solve: (.+)$/, g.q)[1]; return oneTrue(g, (c) => holds(eq, { x: num(c) }), 'a solution'); },
  parenEquation(g) { const eq = rx(/^Solve: (.+)$/, g.q)[1]; return oneTrue(g, (c) => holds(eq, { x: num(c) }), 'a solution'); },
  numSolutions(g) {
    const { parts } = splitRel(rx(/^How many solutions does (.+) have\?$/, g.q)[1]), F = (x) => ev(parts[0], { x }) - ev(parts[1], { x }), s = F(1) - F(0), c0 = F(0);
    const right = (c) => { if (Math.abs(s) > 1e-9) { const m = /^One solution: x = (.+)$/.exec(c); return !!m && near(num(m[1]), -c0 / s); } return c === (Math.abs(c0) < 1e-9 ? 'Infinitely many solutions' : 'No solution'); };
    return oneTrue(g, right, 'the right count');
  },
  unknownCoef(g) {
    let m = /^Solve (.+) for x\. What is x when a = (.+)\?$/.exec(g.q);
    if (m) return oneTrue(g, (c) => holds(m[1], { a: num(m[2]), x: num(c) }), 'a solution');
    const eq = rx(/^Solve for x: (.+)$/, g.q)[1];
    const envs = [{ a: 2.3, c: 1.9 }, { a: 3.7, c: 4.4 }, { a: 5.1, c: -2.6 }];
    return oneTrue(g, (c) => envs.every((e) => holds(eq, { ...e, x: ev(rhs(c), e) })), 'a solution for every a');
  },
  formulas(g) {
    const k = g._check;
    if (k.t === 0) return first(inQ(g, k.A, k.l), numAns(g, k.A / k.l));
    if (k.t === 1) return first(inQ(g, k.d, k.r), numAns(g, k.d / k.r));
    if (k.t === 2) return first(inQ(g, k.P, k.w), numAns(g, (k.P - 2 * k.w) / 2));
    if (k.t === 3) return first(inQ(g, k.A, k.b), numAns(g, (2 * k.A) / k.b));
    const m = rx(/^Solve (.+) for ([a-zA-Z])\.$/, g.q), v = m[2], others = [...new Set(m[1].match(/[A-Za-z]/g))].filter((c) => c !== v);
    const envs = [[1.3, 2.7, 0.6, 3.1], [4.2, 1.1, 2.5, 0.8]].map((vals) => Object.fromEntries(others.map((o, i) => [o, vals[i % 4]])));
    return oneTrue(g, (c) => { if (!c.startsWith(`${v} = `)) return false; return envs.every((e) => holds(m[1], { ...e, [v]: ev(rhs(c), e) })); }, 'a correct rearrangement');
  },
  inequality(g) {
    const ineq = rx(/^Solve: (.+)$/, g.q)[1], pts = xsAround(g.c.map(num));
    return oneTrue(g, (c) => sameTruth(ineq, c, pts), 'the same solution set');
  },
  compoundIneq(g) {
    let m = /^Solve: (.+)$/.exec(g.q);
    if (m) { const pts = xsAround(g.c.flatMap(nums)); return oneTrue(g, (c) => sameTruth(m[1], c, pts), 'the same solution set'); }
    m = rx(/^Which number is a solution of "(.+)"\?$/, g.q);
    const [a, b] = m[1].split(/ (and|or) /).filter((s) => s !== 'and' && s !== 'or'), and = m[1].includes(' and ');
    return oneTrue(g, (c) => { const e = { x: num(c) }; return and ? holds(a, e) && holds(b, e) : holds(a, e) || holds(b, e); }, 'a solution');
  },
  // ── Unit 3 ──
  rateConvert(g) {
    const k = g._check, LEN = { mi: 5280, ft: 1, km: 1000, m: 1, u: 1 }, TIME = { s: 1, min: 60, h: 3600, day: 86400, week: 604800 };
    return first(inQ(g, k.v), numAns(g, (k.v * LEN[k.from[0]] * TIME[k.to[1]]) / (LEN[k.to[0]] * TIME[k.from[1]])));
  },
  unitConvert(g) {
    const k = g._check;
    if (k.t <= 1) return first(inQ(g, k.n, k.f1, k.f2), numAns(g, k.n * k.f1 * k.f2));
    if (k.t === 2) return first(inQ(g, k.D, k.M), numAns(g, ((k.D / k.M) * k.pc) / 100));
    return first(inQ(g, k.L, k.M, k.Dd), numAns(g, (k.L * k.M * k.Dd) / 1000));
  },
  // ── Unit 4 ──
  pointOnLine(g) {
    let m = /^Which point is on the line (.+)\?$/.exec(g.q);
    if (m) return oneTrue(g, ptsOn(m[1]), 'on the line');
    if ((m = /^For y = (.+), what is y when x = (.+)\?$/.exec(g.q))) return numAns(g, ev(m[1], { x: num(m[2]) }));
    m = rx(/^For y = (.+), what are the y-values for x = 0, 1, 2\?$/, g.q);
    return oneTrue(g, (c) => sameArr(nums(c), [0, 1, 2].map((x) => ev(m[1], { x }))), 'the y-values');
  },
  horizVert(g) {
    let m = /^What does the graph of ([xy]) = (.+) look like\?$/.exec(g.q);
    if (m) return oneTrue(g, (c) => { const a = rx(/^A (vertical|horizontal) line through (.+)$/, c), p = P(a[2]); return m[1] === 'x' ? a[1] === 'vertical' && p[0] === num(m[2]) : a[1] === 'horizontal' && p[1] === num(m[2]); }, 'the graph');
    if ((m = /^What is the slope of the line ([xy]) = /.exec(g.q))) return oneTrue(g, (c) => c === (m[1] === 'x' ? 'undefined' : '0'), 'the slope');
    m = rx(/through (\(.+\)) and (\(.+\))\?$/, g.q);
    const [p1, p2] = [P(m[1]), P(m[2])];
    return oneTrue(g, (c) => holds(c, { x: p1[0], y: p1[1] }) && holds(c, { x: p2[0], y: p2[1] }), 'through both points');
  },
  writeModel(g) {
    const k = g._check;
    if (k.t === 0) return first(inQ(g, k.S, Math.abs(k.r)), oneTrue(g, (c) => near(ev(rhs(c), { x: 0 }), k.S) && near(ev(rhs(c), { x: 1 }), k.S + k.r), 'the model'));
    if (k.t === 1) return first(inQ(g, k.f, k.r, k.B), oneTrue(g, (c) => sameLin(c, { A: k.r, B: 0, C: k.f - k.B }, k.op), 'the same inequality'));
    return first(inQ(g, k.p1, k.p2, k.T), oneTrue(g, (c) => sameLin(c, { A: k.p1, B: k.p2, C: -k.T }, '='), 'the same equation'));
  },
  // ── Unit 5 ──
  pointSlope(g) {
    let m;
    if (g._check.t === 0) { const { m: s, x1, y1 } = g._check; return first(inQ(g, s, x1, y1), oneTrue(g, (c) => holds(c, { x: x1, y: y1 }) && holds(c, { x: x1 + 1, y: y1 + s }) && Math.abs(coefs(c).B) > 1e-9, 'the line')); }
    if ((m = /^Which point is on the line (.+)\?$/.exec(g.q))) return oneTrue(g, ptsOn(m[1]), 'on the line');
    m = rx(/^Which point and slope does (.+) show\?$/, g.q);
    const { A, B } = coefs(m[1]);
    return oneTrue(g, (c) => { const p = P(c), s = num(c.split('slope ')[1]); return holds(m[1], { x: p[0], y: p[1] }) && near(s, -A / B); }, 'its point and slope');
  },
  standardForm(g) {
    let m = /^What is the (x|y)-intercept of (.+)\?$/.exec(g.q);
    if (m) return oneTrue(g, (c) => { const p = P(c); return !!p && p[m[1] === 'x' ? 1 : 0] === 0 && holds(m[2], { x: p[0], y: p[1] }); }, 'the intercept');
    m = rx(/^Rewrite (.+) in slope-intercept form\.$/, g.q);
    return oneTrue(g, (c) => [0, 1, 2].every((x) => holds(m[1], { x, y: ev(rhs(c), { x }) })), 'the same line');
  },
  // ── Unit 6 ──
  meanMedian(g) {
    const m = rx(/(?:of|Data:) ([\d, ]+)[?.]/, g.q), d = nums(m[1]), s = [...d].sort((a, b) => a - b), n = s.length, med = (a) => (a.length % 2 ? a[(a.length - 1) / 2] : (a[a.length / 2 - 1] + a[a.length / 2]) / 2);
    if (/mean/.test(g.q)) return numAns(g, d.reduce((a, b) => a + b, 0) / n);
    if (/median/.test(g.q)) return numAns(g, med(s));
    return numAns(g, med(s.slice(n / 2)) - med(s.slice(0, n / 2)));
  },
  residual(g) {
    const k = g._check;
    if (k.t === 0) { const line = rx(/(y = [^(,]+?)(?: \(|,)/, g.q)[1]; return first(inQ(g, k.x), numAns(g, ev(rhs(line), { x: k.x }))); }
    if (k.t === 1) { const [p, a] = nums(g.q); return numAns(g, a - p); }
    if (k.t === 2) { const line = rx(/is (y = .+)\. A real/, g.q)[1], [x, y] = P(rx(/point is (\(.+\))\./, g.q)[1]); return numAns(g, y - ev(rhs(line), { x })); }
    const r = num(rx(/residual of (.+)\. Where/, g.q)[1]);
    return oneTrue(g, (c) => c === (r > 0 ? 'Above the line' : 'Below the line'), 'the side');
  },
  twoWay(g) {
    const { t, a, b, c, d } = g._check, e = inQ(g, a, b, c, d);
    return first(e, numAns(g, [a + b + c + d, a + c, ((a + c) * 100) / (a + b + c + d)][t]));
  },
  // ── Unit 7 ──
  systemCheck(g) {
    let m = /^Is (\(.+?\)) a solution to (.+) and (.+)\?$/.exec(g.q);
    if (m) {
      const [x, y] = P(m[1]), h1 = holds(m[2], { x, y }), h2 = holds(m[3], { x, y });
      const want = h1 && h2 ? /^Yes/ : h1 ? /first equation but not the second/ : h2 ? /second equation but not the first/ : /neither/;
      return oneTrue(g, (c) => want.test(c), 'the right verdict');
    }
    m = rx(/^The lines (.+) and (.+) cross at which point\?$/, g.q);
    return oneTrue(g, (c) => { const p = P(c); return holds(m[1], { x: p[0], y: p[1] }) && holds(m[2], { x: p[0], y: p[1] }); }, 'on both lines');
  },
  systemSub: (g) => linePts(g, g.q),
  systemElim(g) {
    let m;
    if (/^Solve: /.test(g.q)) return linePts(g, g.q);
    if ((m = /^(Add|Subtract) (.+) (?:and|from) (.+)\. What do you get\?$/.exec(g.q))) {
      const [e1, e2] = m[1] === 'Add' ? [m[2], m[3]] : [m[3], m[2]], s = m[1] === 'Add' ? 1 : -1, c1 = coefs(e1), c2 = coefs(e2);
      const want = { A: c1.A + s * c2.A, B: c1.B + s * c2.B, C: c1.C + s * c2.C };
      return oneTrue(g, (c) => { const k = coefs(c); return near(k.A, want.A) && near(k.B, want.B) && near(k.C, want.C); }, 'the combined equation');
    }
    m = rx(/^To make y disappear in (.+) and (.+), you should…$/, g.q);
    const b1 = coefs(m[1]).B, b2 = coefs(m[2]).B;
    return oneTrue(g, (c) => c === (near(b1, -b2) ? 'add the equations' : near(b1, b2) ? 'subtract the equations' : '?'), 'the right move');
  },
  systemCount(g) {
    const m = rx(/^How many solutions: (.+) and (.+)\?$/, g.q), a = coefs(m[1]), b = coefs(m[2]), det = a.A * b.B - a.B * b.A;
    const cat = Math.abs(det) > 1e-9 ? 'One' : near(a.A * b.C, b.A * a.C) && near(a.B * b.C, b.B * a.C) ? 'Infinitely' : 'None';
    return oneTrue(g, (c) => c.split(' ')[0] === cat, `"${cat}"`);
  },
  systemWord(g) {
    const k = g._check;
    if (k.t === 0) return first(inQ(g, k.S, k.D), oneTrue(g, (c) => { const [u, v] = nums(c); return u + v === k.S && Math.abs(u - v) === k.D; }, 'the pair'));
    if (k.t === 1) return first(inQ(g, k.k, k.ad, k.N, k.T), numAns(g, (k.T - k.k * k.N) / (k.ad - k.k)));
    return first(inQ(g, k.d, k.S), numAns(g, (k.S + k.d) / 2));
  },
  // ── Unit 8 ──
  ineqPoint(g) {
    const m = rx(/^Which point is (NOT )?a solution of (.+)\?$/, g.q), want = !m[1];
    return oneTrue(g, (c) => { const p = P(c); return holds(m[2], { x: p[0], y: p[1] }) === want; }, want ? 'a solution' : 'a non-solution');
  },
  ineqGraph(g) {
    let m = /^How do you graph (.+)\?$/.exec(g.q);
    if (m) {
      const { parts } = splitRel(m[1]), G = (y) => ev(parts[0], { x: 0, y }) - ev(parts[1], { x: 0, y }), yb = -G(0) / (G(1) - G(0));
      const want = `${holds(m[1], { x: 0, y: yb }) ? 'Solid' : 'Dashed'} line, shade ${holds(m[1], { x: 0, y: yb + 1 }) ? 'above' : 'below'}`;
      return oneTrue(g, (c) => c === want, want);
    }
    m = rx(/^You test \(0, 0\) in (.+) and get .+, which is (true|false)\. What do you shade\?$/, g.q);
    const ok = holds(m[1], { x: 0, y: 0 });
    if (ok !== (m[2] === 'true')) return `question says (0, 0) gives ${m[2]}`;
    return oneTrue(g, (c) => c === (ok ? 'The side WITH (0, 0)' : 'The side WITHOUT (0, 0)'), 'the side');
  },
  ineqSystem(g) {
    let m = /^Is (\(.+?\)) a solution of the system (.+) and (.+)\?$/.exec(g.q);
    if (m) {
      const [x, y] = P(m[1]), h1 = holds(m[2], { x, y }), h2 = holds(m[3], { x, y });
      const want = h1 && h2 ? 'Yes — it makes both true' : !h1 && !h2 ? 'No — it fails both' : `No — it fails ${h1 ? m[3] : m[2]}`;
      return oneTrue(g, (c) => c === want, want);
    }
    m = rx(/^Which point is a solution of the system (.+) and (.+)\?$/, g.q);
    return oneTrue(g, (c) => { const p = P(c), e = { x: p[0], y: p[1] }; return holds(m[1], e) && holds(m[2], e); }, 'in both regions');
  },
  budgetIneq(g) {
    const k = g._check;
    if (k.t === 0) return first(inQ(g, k.p1, k.p2, k.B), oneTrue(g, (c) => sameLin(c, { A: k.p1, B: k.p2, C: -k.B }, '≤'), 'the same inequality'));
    if (k.t === 1) return first(inQ(g, k.N), oneTrue(g, (c) => sameLin(c, { A: 1, B: 1, C: -k.N }, '≥'), 'the same inequality'));
    if (k.t === 2) {
      const cost = k.p1 * k.x + k.p2 * k.y, yes = cost <= k.B ? 'Yes' : 'No';
      return first(inQ(g, k.x, k.y, k.B), oneTrue(g, (c) => c.startsWith(yes) && near(num(c), cost), `"${yes}" with cost ${cost}`),
        wrongs(g).some((c) => c.startsWith(yes)) ? 'a wrong choice has the right Yes/No' : null);
    }
    return first(inQ(g, k.x, k.B), numAns(g, Math.floor((k.B - k.p1 * k.x) / k.p2)));
  },
  // ── Unit 9 ──
  toFunctionForm(g) { const eq = rx(/^Write (.+) in function form\.$/, g.q)[1]; return oneTrue(g, (c) => [-1, 0, 1, 2].every((x) => holds(eq, { x, y: ev(rhs(c), { x }) })), 'the same line'); },
  funcContext(g) {
    const k = g._check;
    if (k.t === 0) return first(inQ(g, k.a, k.b), oneTrue(g, (c) => sameArr(nums(c), [k.a, k.b]) && !/[Ee]ach|every/.test(c), 'the meaning'));
    if (k.t === 1) { const f = rx(/^([A-Za-z])\(/, g.q)[1]; return first(inQ(g, k.a, k.b), oneTrue(g, (c) => c === `${f}(${k.a}) = ${k.b}`, 'the notation')); }
    const m = rx(/^([A-Z])\(([a-z])\) = (.+?) is .* What is \1\((\d+)\)\?$/, g.q);
    return numAns(g, ev(m[3], { [m[2]]: num(m[4]) }));
  },
  domainOf(g) {
    let m = /^Which number is NOT in the domain of g\(x\) = (.+)\?$/.exec(g.q);
    if (m) return oneTrue(g, (c) => !Number.isFinite(ev(m[1], { x: num(c) })), 'outside the domain');
    m = rx(/^What is the domain of f\(x\) = (.+)\?$/, g.q);
    const def = (x) => Number.isFinite(ev(m[1], { x }));
    const pred = (c) => { let a; if (c === 'All real numbers') return () => true; if ((a = /^All real numbers except (.+)$/.exec(c))) return (x) => !near(x, num(a[1])); a = rx(/^x (≥|>) (.+)$/, c); return (x) => cmp(x, a[1], num(a[2])); };
    const pts = xsAround([...g.c.map(num).filter(Number.isFinite), 0]).map((e) => e.x);
    return oneTrue(g, (c) => pts.every((x) => pred(c)(x) === def(x)), 'the domain');
  },
  avgRate(g) {
    const k = g._check;
    if (k.t === 0) { const m = rx(/^f\(x\) = (.+)\. What is the average rate of change from x = (.+) to x = (.+)\?$/, g.q), a = num(m[2]), b = num(m[3]); return numAns(g, (ev(m[1], { x: b }) - ev(m[1], { x: a })) / (b - a)); }
    return first(inQ(g, k.a, k.b, k.A, k.B), numAns(g, (k.B - k.A) / (k.b - k.a)));
  },
  inverseLinear(g) {
    let m = /^What is the inverse of f\(x\) = (.+)\?$/.exec(g.q);
    if (m) return oneTrue(g, (c) => [1.5, -2.25, 4].every((t) => near(ev(m[1], { x: ev(rhs(c), { x: t }) }), t)), 'the inverse');
    if ((m = /^f\((.+)\) = (.+)\. What is f⁻¹\((.+)\)\?$/.exec(g.q)) && m[1] !== 'x') return numAns(g, num(m[1]));
    m = rx(/^f\(x\) = (.+)\. What is f⁻¹\((.+)\)\?$/, g.q);
    return oneTrue(g, (c) => near(ev(m[1], { x: num(c) }), num(m[2])), 'the input');
  },
  // ── Unit 10 ──
  arithSeq(g) {
    if (/^Which is an arithmetic/.test(g.q)) return oneTrue(g, (c) => isArith(nums(c)), 'arithmetic');
    const s = seqList(g.q); if (!isArith(s)) return 'question list is not arithmetic';
    return numAns(g, /difference/.test(g.q) ? s[1] - s[0] : s[3] + s[1] - s[0]);
  },
  arithNth(g) {
    let m;
    if ((m = /^What is the (\d+)(?:st|nd|rd|th) term of/.exec(g.q))) { const s = seqList(g.q); return numAns(g, s[0] + (num(m[1]) - 1) * (s[1] - s[0])); }
    if ((m = /^aₙ = (.+)\. What is a([₀-₉]+)\?$/.exec(g.q))) return numAns(g, ev(m[1], { n: SUBD(m[2]) }));
    const s = seqList(g.q);
    if (/explicit/.test(g.q)) return oneTrue(g, (c) => s.every((v, i) => near(ev(c.replace(/^aₙ = /, ''), { n: i + 1 }), v)), 'the formula');
    return oneTrue(g, (c) => { const a = rx(/^a₁ = (.+), aₙ = aₙ₋₁ (.+)$/, c), out = [num(a[1])]; while (out.length < 4) out.push(ev(`p ${a[2]}`, { p: out[out.length - 1] })); return sameArr(out, s); }, 'the recursion');
  },
  geoSeq(g) {
    if (/^Which is a geometric/.test(g.q)) return oneTrue(g, (c) => isGeo(nums(c)), 'geometric');
    const s = seqList(g.q); if (!isGeo(s)) return 'question list is not geometric';
    return numAns(g, /ratio/.test(g.q) ? s[1] / s[0] : (s[3] * s[1]) / s[0]);
  },
  geoNth(g) {
    let m;
    const F = (c) => c.replace(/^aₙ = /, '');
    if ((m = /^aₙ = (.+)\. What is a([₀-₉]+)\?$/.exec(g.q))) return numAns(g, ev(m[1], { n: SUBD(m[2]) }));
    if ((m = /^What is the (\d+)(?:st|nd|rd|th) term of/.exec(g.q))) { const s = seqList(g.q); return numAns(g, s[0] * (s[1] / s[0]) ** (num(m[1]) - 1)); }
    if ((m = /^In aₙ = (.+), what are the first term and the common ratio\?$/.exec(g.q))) { const a1 = ev(m[1], { n: 1 }), r = ev(m[1], { n: 2 }) / a1; return oneTrue(g, (c) => sameArr(nums(c), [a1, r]), 'first term and ratio'); }
    const s = seqList(g.q);
    return oneTrue(g, (c) => s.every((v, i) => near(ev(F(c), { n: i + 1 }), v)), 'the formula');
  },
  seqModel(g) {
    const k = g._check;
    if (k.t === 1) return first(inQ(g, k.a1, k.n), numAns(g, k.a1 * k.r ** (k.n - 1)));
    return first(inQ(g, k.a1, k.d, k.n), numAns(g, k.a1 + (k.n - 1) * k.d));
  },
  // ── Unit 11 ──
  absEquation(g) {
    let m = /^What is (\|.+\|)\?$/.exec(g.q);
    if (m) return numAns(g, ev(m[1]));
    m = rx(/^Solve (.+)\.$/, g.q);
    const want = solveSet(m[1]);
    return oneTrue(g, (c) => { const s = ansSet(c); return !!s && sameArr(s, want); }, `the solution set {${want}}`);
  },
  absShift(g) {
    const vertex = (e) => { let best = [0, Infinity]; for (let x = -30; x <= 30; x++) { const y = ev(e, { x }); if (y < best[1]) best = [x, y]; } return best; };
    let m = /^What is the vertex of g\(x\) = (.+)\?$/.exec(g.q);
    if (m) { const v = vertex(m[1]); return oneTrue(g, (c) => sameArr(P(c), v), 'the vertex'); }
    if ((m = /^How is g\(x\) = (.+) moved compared to \|x\|\?$/.exec(g.q))) {
      const v = vertex(m[1]);
      return oneTrue(g, (c) => { const h = /(right|left) (\d+)/.exec(c), u = /(up|down) (\d+)/.exec(c); return sameArr([h ? (h[1] === 'right' ? 1 : -1) * num(h[2]) : 0, u ? (u[1] === 'up' ? 1 : -1) * num(u[2]) : 0], v); }, 'the move');
    }
    m = rx(/^g\(x\) = (.+)\. What is g\((.+)\)\?$/, g.q);
    return numAns(g, ev(m[1], { x: num(m[2]) }));
  },
  piecewise(g) {
    const m = rx(/^f\(x\) = (.+) when x (<|≤|>|≥) (\S+), and f\(x\) = (.+) when x (<|≤|>|≥) (\S+)\. What is f\((\S+)\)\?$/, g.q), x = num(m[7]);
    const l = cmp(x, m[2], num(m[3])), r = cmp(x, m[5], num(m[6]));
    if (l === r) return 'pieces overlap or leave a gap';
    return numAns(g, ev(l ? m[1] : m[4], { x }));
  },
  // ── Unit 12 ──
  exponentRules(g) {
    const m = /^Simplify: (.+)$/.exec(g.q);
    if (m) return exprAns(g, m[1], /^$/);
    return numAns(g, ev(rx(/^What is (.+)\?$/, g.q)[1]));
  },
  roots(g) {
    if (/perfect square/.test(g.q)) return oneTrue(g, (c) => isSq(num(c)), 'a perfect square');
    const v = ev(rx(/^What is (.+)\?$/, g.q)[1]);
    return Number.isNaN(v) ? oneTrue(g, (c) => c === 'no real answer', 'no real answer') : numAns(g, v);
  },
  simplifySqrt(g) {
    const e = rx(/^Simplify (.+)\.$/, g.q)[1], v = ev(e), c0 = /^(\d+)√(\d+)$/.exec(g.c[0]);
    if (!c0 || !squarefree(num(c0[2])) || num(c0[2]) < 2) return `c[0] "${g.c[0]}" is not in simplest radical form`;
    return oneTrue(g, (c) => near(ev(c), v), `equal to ${e}`);
  },
  rationalExp(g) {
    const m = /^Which is the same as (\d+)\^\(1\/(\d)\)\?$/.exec(g.q);
    if (m) return oneTrue(g, (c) => near(ev(c), num(m[1]) ** (1 / num(m[2]))), `equal to ${m[1]}^(1/${m[2]})`);
    return numAns(g, Math.round(ev(rx(/^What is (.+)\?$/, g.q)[1]) * 1e9) / 1e9);
  },
  // ── Unit 13 ──
  growthType(g) {
    const y = nums(rx(/y: (.+)\. What kind/, g.q)[1]), lin = isArith(y), geo = isGeo(y);
    const ok = (c) => {
      let a;
      if ((a = /^Linear — it (adds|subtracts) (.+) each time$/.exec(c))) return lin && near((a[1] === 'adds' ? 1 : -1) * num(a[2]), y[1] - y[0]);
      if ((a = /^Exponential — it multiplies by (.+) each time$/.exec(c))) return geo && near(num(a[1]), y[1] / y[0]);
      return c.startsWith('Neither') && !lin && !geo;
    };
    return oneTrue(g, ok, 'the growth type');
  },
  expValue(g) {
    const k = g._check; let m;
    if ((m = /^If f\(x\) = (.+), what is f\((\d+)\)\?$/.exec(g.q))) return numAns(g, ev(m[1], { x: num(m[2]) }));
    if (k.t === 5) return numAns(g, 1 + k.p / 100);
    if ((m = /^For y = (.+), what is y when x = −1\?$/.exec(g.q))) return numAns(g, ev(m[1], { x: -1 }));
    m = rx(/y = (\d+) · (\d+)ˣ/, g.q); const a = num(m[1]), b = num(m[2]);
    if (k.t === 1) return numAns(g, k.init ? a : b);
    if (k.t === 2) return oneTrue(g, (c) => sameArr(P(c), [0, a]), 'the y-intercept');
    return oneTrue(g, (c) => { const p = P(c); return near(p[1], a * b ** p[0]); }, 'on the graph');
  },
  expDecay(g) {
    const k = g._check; let m;
    if (k.t === 0) { const [A0, h, T] = nums(g.q); return numAns(g, A0 / 2 ** (T / h)); }
    if (k.t === 1) return first(inQ(g, k.p), numAns(g, (100 - k.p) / 100));
    if ((m = /^For y = (.+), what is y when x = (\d+)\?$/.exec(g.q))) return numAns(g, ev(m[1], { x: num(m[2]) }));
    const b = num(rx(/· ([\d.]+)ˣ growth or decay/, g.q)[1]), w = b > 1 ? 'Growth' : 'Decay';
    return oneTrue(g, (c) => c.startsWith(w), `"${w}"`);
  },
  expTable(g) {
    let m;
    if ((m = /y: (.+)\. (.+)$/.exec(g.q))) {
      const y = nums(m[1]);
      if (/Which function/.test(m[2])) return oneTrue(g, (c) => y.every((v, x) => near(ev(rhs(c), { x }), v)), 'a fit');
      return numAns(g, /growth factor/.test(m[2]) ? y[1] / y[0] : y[0]);
    }
    if ((m = /passes through \(0, (\d+)\) and \(1, (\d+)\)\. What is y when x = 3\?$/.exec(g.q))) { const a = num(m[1]), b = num(m[2]); return numAns(g, a * (b / a) ** 3); }
    m = rx(/y-axis at (\d+) and passes through \(1, (\d+)\)/, g.q);
    const yi = num(m[1]), y1 = num(m[2]);
    return oneTrue(g, (c) => { const [u, v] = nums(c); return u === yi && u * v === y1; }, 'a and b');
  },
  // ── Unit 14 ──
  monomialTimes: (g) => exprAns(g, rx(/^(?:Expand|Simplify): (.+)$/, g.q)[1], /^$/),
  foil(g) {
    const m = /^Expand: (.+)$/.exec(g.q);
    if (m) return exprAns(g, m[1], /^$/);
    const [a, b] = rx(/box for (.+) and (.+)\?$/, g.q).slice(1).map(num);
    return oneTrue(g, (c) => /^−?\d+$/.test(c) && num(c) === a * b, `the number ${a * b}`);
  },
  gcfFactor(g) {
    let m = /^What is the GCF of (\d+) and (\d+)\?$/.exec(g.q);
    if (m) return numAns(g, gcd(num(m[1]), num(m[2])));
    if ((m = /^What is the GCF of (.+) and (.+)\?$/.exec(g.q))) {
      const info = (s) => { const c = ev(s, { x: 1 }); return [c, Math.round(Math.log2(ev(s, { x: 2 }) / c))]; };
      const [c1, e1] = info(m[1]), [c2, e2] = info(m[2]), want = [gcd(c1, c2), Math.min(e1, e2)];
      return oneTrue(g, (c) => sameArr(info(c), want), 'the GCF');
    }
    const e = rx(/^Factor: (.+)$/, g.q)[1], inner = /\((.+)\)$/.exec(g.c[0]);
    if (!inner) return `c[0] "${g.c[0]}" is not factored`;
    const q = ev(inner[1], { x: 0 }), p = ev(inner[1], { x: 1 }) - q;
    if (gcd(p, q) !== 1 || q === 0) return `c[0] "${g.c[0]}" is not fully factored`;
    return exprAns(g, e, /^$/);
  },
  factorTrinomial(g) {
    const tri = rx(/^(?:Factor: |To factor )(.+?)(?:, you need.*|, the two numbers.*)?$/, g.q)[1];
    const c = ev(tri, { x: 0 }), b = (ev(tri, { x: 1 }) - ev(tri, { x: -1 })) / 2;
    if (/^Factor: /.test(g.q)) return first(/^\(x [+−] \d+\)\(x [+−] \d+\)$/.test(g.c[0]) ? null : 'c[0] is not two binomials', exprAns(g, tri, /^$/));
    if (/you need two numbers/.test(g.q)) return oneTrue(g, (s) => { const n = nums(s); return near(n[0], c) && near(n[1], b); }, 'multiply to c and add to b');
    const want = c < 0 ? 'one positive and one negative' : b > 0 ? 'both positive' : 'both negative';
    return oneTrue(g, (s) => s === want, want);
  },
  factorGrouping(g) {
    const tri = rx(/^(?:Factor: |To factor |For )(.+?)(?: by grouping.*|, which.*)?$/, g.q)[1];
    const C = ev(tri, { x: 0 }), A = (ev(tri, { x: 1 }) + ev(tri, { x: -1 })) / 2 - C, B = (ev(tri, { x: 1 }) - ev(tri, { x: -1 })) / 2;
    if (/^Factor: /.test(g.q)) return exprAns(g, tri, /^$/);
    if (/what is a · c/.test(g.q)) return numAns(g, A * C);
    return oneTrue(g, (s) => { const [u, v] = nums(s); return u * v === A * C && u + v === B; }, 'the split pair');
  },
  diffSquares(g) {
    if (/does NOT factor/.test(g.q)) {
      const factors = (s) => { const m = /^(\d*)x² − (\d+)$/.exec(s); return !!m && isSq(num(m[1] || '1')) && isSq(num(m[2])); };
      return oneTrue(g, (s) => !factors(s), 'not a difference of squares');
    }
    const e = rx(/^Factor: (.+)$/, g.q)[1];
    return oneTrue(g, (s) => s !== 'It can\'t be factored' && equiv(s, e), 'equivalent');
  },
  // ── Unit 16 ──
  irrational(g) {
    const rational = (s) => { let m; if ((m = /^√(\d+)$/.exec(s))) return isSq(num(m[1])); if (s === 'π') return false; if (/^−?\d+(\/\d+|\.\d+)?$/.test(s) || /^0\.(\d\d)\1\1…$/.test(s)) return true; throw new Error(`unknown number "${s}"`); };
    if (/^Which number is irrational/.test(g.q)) return oneTrue(g, (s) => !rational(s), 'irrational');
    if (/^Which number is rational/.test(g.q)) return oneTrue(g, (s) => rational(s), 'rational');
    const n = num(rx(/^Is √(\d+) rational/, g.q)[1]), w = isSq(n) ? 'Rational' : 'Irrational';
    return oneTrue(g, (s) => s.split(' ')[0] === w, `"${w}"`);
  },
  irrationalOps(g) {
    const rational = (s) => {
      let m;
      if ((m = /^√(\d+) × √(\d+)$/.exec(s))) return isSq(num(m[1]) * num(m[2]));
      if ((m = /^(−?\d+) × √(\d+)$/.exec(s))) return num(m[1]) === 0 || isSq(num(m[2]));
      if ((m = /^(−?\d+) × π$/.exec(s))) return num(m[1]) === 0;
      if ((m = /^(−?\d+) \+ √(\d+)$/.exec(s))) return isSq(num(m[2]));
      if ((m = /^√(\d+) \+ \(−√(\d+)\)$/.exec(s))) return m[1] === m[2] || (isSq(num(m[1])) && isSq(num(m[2])));
      if ((m = /^√(\d+) [+−] (\d+)$/.exec(s))) return isSq(num(m[1]));
      if (/^\d+\/\d+ \+ \d+\/\d+$/.test(s)) return true;
      throw new Error(`unknown expression "${s}"`);
    };
    if (/^Which product is rational/.test(g.q)) return oneTrue(g, rational, 'rational');
    if (/^Which sum is irrational/.test(g.q)) return oneTrue(g, (s) => !rational(s), 'irrational');
    return numAns(g, ev(rx(/^What is (.+)\?$/, g.q)[1]));
  },
};

// ── Text hygiene shared by every generator ──
function hygiene(g) {
  const errs = [];
  if (!g || typeof g.q !== 'string' || !g.q.trim()) return ['missing q'];
  if (!Array.isArray(g.c) || g.c.length !== 4) return [`needs exactly 4 choices (has ${g.c ? g.c.length : 0})`];
  if (g.c.some((c) => typeof c !== 'string' || !c.trim())) errs.push('blank or non-string choice');
  if (new Set(g.c.map((c) => String(c).trim())).size !== 4) errs.push('duplicate choices');
  if (typeof g.why !== 'string' || !g.why.trim()) errs.push('missing why');
  const all = [g.q, ...g.c, g.why].join(' ¦ '), shown = [g.q, ...g.c].join(' ¦ ');
  // "undefined" is a real answer for the slope of a vertical line; allow only that exact use.
  const leakable = /^What is the slope of the line [xy] = /.test(g.q) ? all.replace(/(^| ¦ )undefined(?= ¦ )/g, '$1').replace('its slope is undefined', '') : all;
  for (const bad of ['NaN', 'undefined', 'Infinity', 'null', '[object']) if (leakable.includes(bad)) errs.push(`contains "${bad}"`);
  if (/−0(?![.\d])/.test(all)) errs.push('contains −0');
  if (/(^|[\s(,=¦])-\d/.test(all)) errs.push('ASCII hyphen used as a minus sign');
  if (/(^|[^\d.])[01][a-z](?![a-z])/.test(all)) errs.push('coefficient 1 or 0 written out (like "1x")');
  if (/[a-z]¹(?![⁰¹²³⁴⁵⁶⁷⁸⁹])/.test(all)) errs.push('exponent 1 written out');
  if (/[+−] [+−] |−−/.test(all) || /\+ 0(?![.\d/])|− 0(?![.\d/])/.test(shown)) errs.push('messy signs (like "+ −" or "+ 0")');
  if (/<\/?(b|p|i|br|li|ul|ol|span|div)\b/i.test(all)) errs.push('contains HTML');
  return errs;
}

// ── Run ──
const names = Object.keys(generators);
const newNames = Object.keys(algebraGenerators);
const problems = [];
if (names.length !== 8 + newNames.length) problems.push(`generator name clash: practice.js has ${names.length}, expected ${8 + newNames.length}`);
for (const n of newNames) if (generators[n] !== algebraGenerators[n]) problems.push(`${n} is not wired into practice.js`);
for (const n of names) if (!CHECK[n]) problems.push(`${n}: no correctness check written in this test`);

let total = 0;
const caught = new Map(); // mutate mode: generator → how many mutated questions were rejected
for (const name of names) {
  const fails = new Map(); let bad = 0;
  const note = (msg, g) => { if (!fails.has(msg)) fails.set(msg, { n: 0, g }); fails.get(msg).n += 1; };
  for (let i = 0; i < N; i++) {
    let g;
    try { g = generators[name](); } catch (e) { note(`threw: ${e.message}`, null); continue; }
    total += 1;
    if (MUTATE) g = { ...g, c: [g.c[1], g.c[0], ...g.c.slice(2)] };
    const errs = hygiene(g);
    if (!errs.length && CHECK[name]) {
      try { const e = CHECK[name](g); if (e) errs.push(e); } catch (e) { errs.push(`check threw: ${e.message}`); }
    }
    if (errs.length) bad += 1;
    for (const e of errs) note(e, g);
  }
  if (MUTATE) { caught.set(name, bad); continue; }
  for (const [msg, { n, g }] of fails) problems.push(`${name}: ${msg} (${n}×)${g ? `\n    q: ${g.q}\n    c: ${JSON.stringify(g.c)}` : ''}`);
}

if (MUTATE) {
  const missed = names.filter((n) => caught.get(n) !== N).map((n) => `${n} (${N - caught.get(n)} of ${N} slipped through)`);
  console.log(missed.length ? `MUTATION MISSED by: ${missed.join(', ')}` : `mutation OK — all ${names.length} checks rejected every one of ${N} swapped answers`);
  process.exit(missed.length || problems.length ? 1 : 0);
}
if (problems.length) {
  console.log(problems.join('\n'));
  console.log(`\nFUZZ FAILED — ${problems.length} problem(s) across ${names.length} generators × ${N} runs`);
  process.exit(1);
}
console.log(`fuzz OK — ${names.length} generators × ${N} runs = ${total.toLocaleString('en-US')} questions, 0 failures`);
