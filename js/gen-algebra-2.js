// Fresh-number quiz generators for Algebra 1, units 9–16. gen-algebra.js spreads these into its export.
// Each returns { q, c: [correct, wrong, wrong, wrong], why, _check }; _check is only for tests/fuzz-generators.mjs.
import { ri, pick, nz, gcd, fmt, sgn, neg, big, frac, sup, sub, xp, lin, poly, mono, bin, pt, list, ord, opts, mk, nq } from './gen-util.js';

const P2 = (c2, c1, c0) => poly([[c2, 'x²'], [c1, 'x'], [c0, '']]);
const isSq = (n) => n >= 0 && Number.isInteger(Math.sqrt(n));
const nonSq = (lo = 2, hi = 99) => { let n; do { n = ri(lo, hi); } while (isSq(n)); return n; };
const seq4 = (f) => [0, 1, 2, 3].map(f);
const dec2 = (v) => (Math.abs(v * 100 - Math.round(v * 100)) < 1e-9 ? v : null); // keep only tidy decimals
const pair = (u, v) => `${fmt(Math.min(u, v))} and ${fmt(Math.max(u, v))}`;

export const algebra2 = {
  // ── Unit 9 ──
  toFunctionForm() {
    const b = pick([1, 1, 2, 3, -1]), m = nz(-5, 5), k = ri(-9, 9), a = -m * b, c = k * b, F = (mm, kk) => `f(x) = ${lin(mm, kk)}`;
    const eq = Math.random() < 0.7 ? `${poly([[a, 'x'], [b, 'y']])} = ${fmt(c)}` : `${poly([[b, 'y'], [a, 'x']])} = ${fmt(c)}`;
    return mk(`Write ${eq} in function form.`, opts(F(m, k), [F(-m, k), b !== 1 ? F(a, c) : null, F(m, -k), F(-m, -k)], (n) => F(m, k + n)),
      `Get y by itself: move the x term to the other side${b !== 1 ? ` and divide by ${fmt(b)}` : ''}. y = ${lin(m, k)}, so f(x) = ${lin(m, k)}.`, { b, m, k });
  },

  funcContext() {
    const t = ri(0, 2);
    if (t < 2) {
      const C = pick([
        { f: 'C', def: 'C(n) is the cost in dollars of n bus tickets.', say: (a, b) => `${a} tickets cost $${b}`, rate: (b) => `Each ticket costs $${b}`, b: (a) => a * ri(2, 6) },
        { f: 'h', def: 'h(t) is a ball\'s height in feet t seconds after it is thrown.', say: (a, b) => `After ${a} seconds, the ball is ${b} feet high`, rate: (b) => `The ball rises ${b} feet every second`, b: () => ri(10, 60) },
        { f: 'P', def: 'P(d) is the number of pages Omar has read after d days.', say: (a, b) => `After ${a} days, Omar has read ${b} pages`, rate: (b) => `Omar reads ${b} pages every day`, b: (a) => a * ri(5, 20) },
        { f: 'B', def: 'B(h) is your phone battery percent h hours after you unplug it.', say: (a, b) => `After ${a} hours, the battery is at ${b}%`, rate: (b) => `The battery drops ${b}% every hour`, b: (a) => 100 - a * ri(3, 10) },
        { f: 'S', def: 'S(w) is Bilal\'s savings in dollars after w weeks.', say: (a, b) => `After ${a} weeks, Bilal has saved $${b}`, rate: (b) => `Bilal saves $${b} every week`, b: (a) => a * ri(5, 20) + ri(0, 30) },
      ]);
      const a = ri(2, 9), b = C.b(a);
      if (t === 0) return mk(`${C.def} What does ${C.f}(${a}) = ${b} mean?`, [C.say(a, b), C.say(b, a), C.rate(b), C.say(0, b)], `The number inside the ( ) is the input (${a}); the number after = is the output (${b}).`, { t, a, b });
      return mk(`${C.def} "${C.say(a, b)}." Which matches?`, [`${C.f}(${a}) = ${b}`, `${C.f}(${b}) = ${a}`, `${C.f}(0) = ${b}`, `${C.f}(${a}) = 0`], `The input ${a} goes inside the ( ), and the output ${b} goes after the = sign.`, { t, a, b });
    }
    const x = ri(2, 9), E = pick([
      () => { const p = ri(2, 6), fee = ri(1, 5); return [`C(n) = ${p}n + ${fee} is the cost in dollars of n tickets with a $${fee} booking fee. What is C(${x})?`, p * x + fee, `C(${x}) = ${p} × ${x} + ${fee}`, [p * x, p + x + fee, p * (x + fee)], (n) => `$${n}`]; },
      () => { const r = ri(5, 25), s = ri(10, 60); return [`S(w) = ${r}w + ${s} is Bilal's savings in dollars after w weeks. What is S(${x})?`, r * x + s, `S(${x}) = ${r} × ${x} + ${s}`, [r * x, r + x + s, r * (x + s)], (n) => `$${n}`]; },
      () => { const r = ri(4, 10); return [`B(h) = 100 − ${r}h is the battery percent h hours after unplugging. What is B(${x})?`, 100 - r * x, `B(${x}) = 100 − ${r} × ${x}`, [100 - r - x, r * x, (100 - r) * x], (n) => `${n}%`]; },
      () => { const g = ri(2, 5), s = ri(3, 12); return [`H(d) = ${g}d + ${s} is a plant's height in cm after d days. What is H(${x})?`, g * x + s, `H(${x}) = ${g} × ${x} + ${s}`, [g * x, g + x + s, g * (x + s)], (n) => `${n} cm`]; },
    ])();
    return nq(E[0], E[1], `${E[2]} = ${E[1]}. Multiply before you add or subtract.`, E[3], { t }, { f: E[4], pos: true });
  },

  domainOf() {
    const a = nz(-9, 9), t = ri(0, 3), inner = lin(1, -a), ex = (v) => `All real numbers except ${fmt(v)}`, ALL = 'All real numbers';
    let k; do { k = ri(1, 9); } while (k === a || k === -a);
    if (t === 0) return mk(`What is the domain of f(x) = ${k}/(${inner})?`, opts(ex(a), [ex(-a), `x ≥ ${fmt(a)}`, ALL], (n) => ex(a + n)), `You can't divide by 0, and ${inner} = 0 when x = ${fmt(a)}. Every other number works.`, { t });
    if (t === 1) return mk(`What is the domain of f(x) = √(${inner})?`, opts(`x ≥ ${fmt(a)}`, [`x ≥ ${fmt(-a)}`, `x > ${fmt(a)}`, ex(a)], (n) => `x ≥ ${fmt(a + n)}`), `You can't take √ of a negative, so ${inner} ≥ 0. That means x ≥ ${fmt(a)}.`, { t });
    if (t === 2) { const m = nz(-6, 6), b = ri(-9, 9); return mk(`What is the domain of f(x) = ${lin(m, b)}?`, opts(ALL, [ex(0), 'x ≥ 0', b ? ex(b) : null], (n) => `x ≥ ${n}`), 'There is no dividing by x and no square root, so every number works.', { t }); }
    return nq(`Which number is NOT in the domain of g(x) = ${k}/(${inner})?`, a, `x = ${fmt(a)} makes the bottom ${inner} = 0, and you can't divide by 0.`, [-a, 0, k], { t });
  },

  avgRate() {
    const t = ri(0, 2);
    if (t === 0) {
      const p = pick([1, 1, 2]), q = ri(-4, 4), r = ri(-5, 5), f = (x) => p * x * x + q * x + r, a = ri(-3, 3), b = a + ri(1, 4), ans = (f(b) - f(a)) / (b - a);
      return nq(`f(x) = ${P2(p, q, r)}. What is the average rate of change from x = ${fmt(a)} to x = ${fmt(b)}?`, ans,
        `(f(${fmt(b)}) − f(${fmt(a)})) ÷ (${fmt(b)} − ${neg(a)}) = (${fmt(f(b))} − ${neg(f(a))}) ÷ ${b - a} = ${fmt(ans)}.`, [f(b) - f(a), (f(b) + f(a)) / (b - a), f(b) / b, -ans], { t });
    }
    if (t === 1) {
      const a = ri(0, 5), b = a + ri(2, 5), r = nz(-6, 6), A = ri(-10, 20), B = A + r * (b - a);
      return nq(`f(${a}) = ${fmt(A)} and f(${b}) = ${fmt(B)}. What is the average rate of change from x = ${a} to x = ${b}?`, r,
        `(${fmt(B)} − ${neg(A)}) ÷ (${b} − ${a}) = ${fmt(B - A)} ÷ ${b - a} = ${fmt(r)}.`, [B - A, -r, (B + A) / (b - a)], { t, a, b, A, B });
    }
    if (Math.random() < 0.5) {
      const d1 = ri(1, 4), d2 = d1 + ri(2, 6), r = ri(2, 5), h1 = ri(2, 15), h2 = h1 + r * (d2 - d1);
      return nq(`A plant is ${h1} cm tall on day ${d1} and ${h2} cm tall on day ${d2}. What is its average growth rate?`, r, `(${h2} − ${h1}) ÷ (${d2} − ${d1}) = ${h2 - h1} ÷ ${d2 - d1} = ${r} cm per day.`,
        [h2 - h1, -r, h2 / d2], { t, a: d1, b: d2, A: h1, B: h2 }, { f: (n) => `${fmt(n)} cm per day` });
    }
    const t1 = ri(1, 3), t2 = t1 + ri(2, 5), r = ri(5, 15), p1 = ri(80, 100), p2 = p1 - r * (t2 - t1);
    return nq(`A phone battery is at ${p1}% after ${t1} hour${t1 > 1 ? 's' : ''} of use and ${p2}% after ${t2} hours. What is the average rate of change?`, -r,
      `(${p2} − ${p1}) ÷ (${t2} − ${t1}) = ${fmt(p2 - p1)} ÷ ${t2 - t1} = ${fmt(-r)}% per hour.`, [p2 - p1, r, (p2 - p1) / t2], { t, a: t1, b: t2, A: p1, B: p2 }, { f: (n) => `${fmt(n)}% per hour` });
  },

  inverseLinear() {
    const t = ri(0, 2), I = (s) => `f⁻¹(x) = ${s}`, m = ri(2, 6), b = nz(-9, 9);
    if (t === 0) {
      const form = ri(0, 2);
      if (form === 0) return mk(`What is the inverse of f(x) = ${lin(1, b)}?`, [I(lin(1, -b)), I(lin(1, b)), I(lin(-1, b)), I(`1/(${lin(1, b)})`)], `f ${b > 0 ? 'adds' : 'subtracts'} ${Math.abs(b)}, so f⁻¹ does the opposite: ${lin(1, -b)}.`, { t });
      if (form === 1) return mk(`What is the inverse of f(x) = ${m}x?`, [I(`x/${m}`), I(`${m}x`), I(`x − ${m}`), I(`1/(${m}x)`)], `f multiplies by ${m}, so f⁻¹ divides by ${m}.`, { t });
      return mk(`What is the inverse of f(x) = ${lin(m, b)}?`, [I(`(${lin(1, -b)})/${m}`), I(`(${lin(1, b)})/${m}`), I(`x/${m} ${sgn(-b)}`), I(`1/(${lin(m, b)})`)],
        `Undo the steps in reverse order: first ${b > 0 ? 'subtract' : 'add'} ${Math.abs(b)}, then divide by ${m}.`, { t });
    }
    if (t === 1) {
      const a = nz(-9, 9); let y; do { y = nz(-12, 12); } while (Math.abs(y) < 2 || y === a);
      return mk(`f(${fmt(a)}) = ${fmt(y)}. What is f⁻¹(${fmt(y)})?`, opts(fmt(a), [fmt(y), fmt(-a), frac(1, y)], (n) => fmt(a + n)), `f takes ${fmt(a)} to ${fmt(y)}, so f⁻¹ takes ${fmt(y)} back to ${fmt(a)}.`, { t, a, y });
    }
    const x0 = ri(-5, 9), y = m * x0 + b;
    return nq(`f(x) = ${lin(m, b)}. What is f⁻¹(${fmt(y)})?`, x0, `Find the x that gives ${fmt(y)}: ${lin(m, b)} = ${fmt(y)} → x = ${fmt(x0)}.`, [m * y + b, (y + b) / m, y / m - b, -x0], { t });
  },

  // ── Unit 10 ──
  arithSeq() {
    const a1 = ri(-10, 20), d = nz(-9, 9), s = seq4((i) => a1 + i * d), L = `${list(s)}, …`, t = ri(0, 2);
    if (t === 0) return nq(`What is the common difference of ${L}?`, d, `Subtract any term from the next one: ${fmt(s[1])} − ${neg(s[0])} = ${fmt(d)}.`, [-d, s[0] ? s[1] / s[0] : NaN, s[0], s[3] + d], { t });
    if (t === 1) return nq(`What is the next term of ${L}?`, s[3] + d, `The common difference is ${fmt(d)}: ${fmt(s[3])} ${sgn(d)} = ${fmt(s[3] + d)}.`, [s[3] - d, s[3] + 2 * d, d], { t });
    const b = ri(1, 5), r = pick([2, 3]), c = ri(1, 9), k = ri(1, 6);
    const others = [seq4((i) => b * r ** i), [c, c + 1, c + 3, c + 6], seq4((i) => (k + i) ** 2)].map((x) => `${list(x)}, …`);
    return mk('Which is an arithmetic sequence?', opts(L, others, (n) => `${list([c, c + n, c + 3 * n, c + 4 * n])}, …`), `It adds ${fmt(d)} every time. The others don't have one common difference.`, { t });
  },

  arithNth() {
    const a1 = ri(-10, 20), d = nz(-9, 9), s = seq4((i) => a1 + i * d), L = `${list(s)}, …`, t = ri(0, 3), n = ri(8, 30), an = a1 + (n - 1) * d;
    const F = (A, D, nn = '(n − 1)') => `aₙ = ${fmt(A)} + ${nn} · ${neg(D)}`, R = (A, rule) => `a₁ = ${fmt(A)}, aₙ = aₙ₋₁ ${rule}`;
    if (t === 0) return nq(`What is the ${ord(n)} term of ${L}?`, an, `a₁ + (n − 1)d = ${fmt(a1)} + ${n - 1} × ${neg(d)} = ${fmt(an)}.`, [a1 + n * d, n * d, (a1 + n - 1) * d], { t });
    if (t === 1) return nq(`${F(a1, d)}. What is a${sub(n)}?`, an, `${fmt(a1)} + (${n} − 1) × ${neg(d)} = ${fmt(a1)} ${sgn((n - 1) * d)} = ${fmt(an)}.`, [a1 + n * d, (a1 + n - 1) * d, (n - 1) * d], { t });
    if (t === 2) return mk(`What is the explicit formula for ${L}?`, opts(F(a1, d), [a1 !== d ? F(d, a1) : null, F(a1, d, 'n'), F(a1, -d)], (k) => F(a1 + k, d)), `Start at a₁ = ${fmt(a1)} and add d = ${fmt(d)} for each step after the first.`, { t });
    return mk(`What is the recursive formula for ${L}?`, opts(R(a1, sgn(d)), [a1 ? R(d, sgn(a1)) : null, R(a1, `· ${neg(d)}`), R(a1, sgn(-d))], (k) => R(a1 + k, sgn(d))),
      `Start at ${fmt(a1)}. Each term is the one before it ${d > 0 ? 'plus' : 'minus'} ${Math.abs(d)}.`, { t });
  },

  geoSeq() {
    const r = pick([[2, 1], [3, 1], [4, 1], [5, 1], [-2, 1], [-3, 1], [1, 2], [1, 3], [-1, 2]]);
    const a1 = r[1] === 1 ? pick([1, 2, 3, 4, 5, 6, -2, -3]) : r[1] ** 4 * ri(1, 3);
    const s = seq4((i) => (a1 * r[0] ** i) / r[1] ** i), L = `${list(s)}, …`, t = ri(0, 2), rs = frac(r[0], r[1]), nxt = (s[3] * r[0]) / r[1];
    if (t === 0) return mk(`What is the common ratio of ${L}?`, opts(rs, [fmt(s[1] - s[0]), frac(-r[0], r[1]), frac(r[1], r[0])], (k) => frac(r[0] + k * r[1], r[1])), `Divide any term by the one before it: ${fmt(s[1])} ÷ ${neg(s[0])} = ${rs}.`, { t });
    if (t === 1) return nq(`What is the next term of ${L}?`, nxt, `Multiply the last term by the ratio ${rs}: ${fmt(s[3])} × ${r[1] > 1 || r[0] < 0 ? `(${rs})` : rs} = ${fmt(nxt)}.`, [2 * s[3] - s[2], (nxt * r[0]) / r[1], -nxt], { t });
    const b = ri(1, 6), d = ri(2, 6), c = ri(1, 5);
    const others = [seq4((i) => b + i * d), [c, 2 * c, 4 * c, 6 * c], seq4((i) => (c + i) ** 2)].map((x) => `${list(x)}, …`);
    return mk('Which is a geometric sequence?', opts(L, others, (n) => `${list([c, c + n, c + 2 * n + 1, c + 4 * n])}, …`), `It multiplies by ${rs} every time. The others don't have one common ratio.`, { t });
  },

  geoNth() {
    const t = ri(0, 3), a = ri(2, 6), b = pick([2, 3, 4, 5, -2, -3]), bs = b < 0 ? `(${fmt(b)})` : `${b}`, F = (A, B, e = 'ⁿ⁻¹') => `aₙ = ${A} · ${B}${e}`;
    if (t === 0) {
      let k; do { k = ri(2, 6); } while (Math.abs(a * b ** (k - 1)) > 20000);
      const ans = a * b ** (k - 1);
      return nq(`${F(a, bs)}. What is a${sub(k)}?`, ans, `Put in n = ${k}: ${a} · ${bs}${sup(k - 1)} = ${a} × ${fmt(b ** (k - 1))} = ${big(ans)}.`, [a * b ** k, (a * b) ** (k - 1), a * b * (k - 1)], { t }, { f: big });
    }
    const a1 = ri(1, 5), r = pick([2, 3]), s = seq4((i) => a1 * r ** i), L = `${list(s)}, …`;
    if (t === 1) {
      const k = ri(5, 8), ans = a1 * r ** (k - 1);
      return nq(`What is the ${ord(k)} term of ${L}?`, ans, `aₙ = ${a1} · ${r}ⁿ⁻¹, so the ${ord(k)} term is ${a1} · ${r}${sup(k - 1)} = ${big(ans)}.`, [a1 * r ** k, a1 + (k - 1) * (s[1] - s[0]), a1 * r * (k - 1)], { t }, { f: big });
    }
    if (t === 2) {
      const A = ri(2, 6), B = pick([2, 3, 4, -2, -3]), Bs = B < 0 ? `(${fmt(B)})` : `${B}`, S = seq4((i) => A * B ** i);
      return mk(`What is the explicit formula for ${list(S)}, …?`, opts(F(A, Bs), [B > 0 && B !== A ? F(B, A) : null, F(A, Bs, 'ⁿ'), `aₙ = ${A} + (n − 1) · ${neg(S[1] - S[0])}`], (k) => F(A + k, Bs)),
        `First term ${A}, and each term is ${fmt(B)} times the one before: ${F(A, Bs)}.`, { t });
    }
    const FR = (u, v) => `First term ${fmt(u)}, ratio ${fmt(v)}`;
    return mk(`In ${F(a, bs)}, what are the first term and the common ratio?`, opts(FR(a, b), [FR(b, a), FR(a * b, b), FR(a, a * b)], (k) => FR(a + k, b)),
      `In aₙ = a₁ · rⁿ⁻¹, the number in front is the first term and the base of the power is the ratio.`, { t, a, b });
  },

  seqModel() {
    const t = ri(0, 2);
    if (t === 0) {
      const a1 = ri(8, 20), d = ri(2, 5), n = ri(10, 25), ans = a1 + (n - 1) * d;
      return nq(`A theater has ${a1} seats in row 1, and each row has ${d} more seats than the row before. How many seats are in row ${n}?`, ans, `Row ${n} is ${n - 1} steps after row 1: ${a1} + ${n - 1} × ${d} = ${ans}.`, [a1 + n * d, n * d, a1 * n], { t, a1, d, n }, { pos: true });
    }
    if (t === 1) {
      const a1 = pick([20, 25, 40, 50, 100]), r = pick([2, 2, 3]), n = ri(3, 7), ans = a1 * r ** (n - 1);
      return nq(`A dish has ${a1} bacteria on day 1, and the number ${r === 2 ? 'doubles' : 'triples'} each day. How many are there on day ${n}?`, ans, `Day ${n} is ${n - 1} steps after day 1: ${a1} × ${r}${sup(n - 1)} = ${big(ans)}.`,
        [a1 * r ** n, a1 * r * (n - 1), a1 + r * (n - 1)], { t, a1, r, n }, { f: big, pos: true, step: a1 });
    }
    const who = pick(['Bilal', 'Omar', 'Amina', 'Maryam']), a1 = ri(2, 8) * 10, d = ri(1, 5) * 5, n = ri(6, 15), ans = a1 + (n - 1) * d;
    return nq(`${who} has $${a1} saved in week 1 and adds $${d} every week. How much is saved in week ${n}?`, ans, `Week ${n} is ${n - 1} weeks after week 1: ${a1} + ${n - 1} × ${d} = ${ans}.`, [a1 + n * d, n * d, a1 * n], { t, a1, d, n }, { f: (k) => `$${big(k)}`, pos: true, step: d });
  },

  // ── Unit 11 ──
  absEquation() {
    const t = ri(0, 4), S = (u, v) => `x = ${fmt(Math.max(u, v))} or x = ${fmt(Math.min(u, v))}`, only = (u) => `x = ${fmt(u)} only`, NO = 'no solution';
    if (t === 0) {
      if (Math.random() < 0.5) { const n = ri(2, 15); return mk(`What is |−${n}|?`, [`${n}`, `−${n}`, '0', `1/${n}`], `Absolute value is the distance from 0, and distance is never negative: ${n}.`, { t }); }
      const a = ri(1, 9), b = a + ri(2, 12);
      return mk(`What is |${a} − ${b}|?`, [`${b - a}`, `−${b - a}`, `${a + b}`, `−${a + b}`], `${a} − ${b} = −${b - a}, and its distance from 0 is ${b - a}.`, { t });
    }
    const h = nz(-9, 9), k = ri(1, 10), inner = lin(1, h);
    if (t === 1) return mk(`Solve |${inner}| = ${k}.`, opts(S(-h + k, -h - k), [S(h + k, h - k), only(-h + k), S(k, -k)], (n) => S(-h + k + n, -h - k)), `${inner} = ${k} or ${inner} = −${k}. So x = ${fmt(-h + k)} or x = ${fmt(-h - k)}.`, { t });
    if (t === 2) return mk(`Solve |x| = ${k}.`, [S(k, -k), only(k), only(-k), NO], `Both ${k} and −${k} are ${k} away from 0.`, { t });
    if (t === 3) return mk(`Solve |${inner}| = −${k}.`, [NO, S(-h + k, -h - k), only(-h + k), only(-h - k)], 'An absolute value can never be negative, so no number works.', { t });
    const p = ri(1, 4), q = nz(-6, 9), kk = ri(1, 8), r = p * kk + q;
    return mk(`Solve ${p === 1 ? '' : p}|x| ${sgn(q)} = ${fmt(r)}.`, opts(S(kk, -kk), [p > 1 ? S(r - q, q - r) : null, only(kk), (r + q) % p === 0 ? S((r + q) / p, -(r + q) / p) : null, S(r, -r)], (n) => S(kk + n, -kk - n)),
      `Get |x| alone: ${p > 1 ? `${p}|x| = ${fmt(r - q)}, so ` : ''}|x| = ${kk}. So x = ${kk} or x = −${kk}.`, { t });
  },

  absShift() {
    let h, k; do { h = nz(-7, 7); k = nz(-7, 7); } while (Math.abs(h) === Math.abs(k));
    const g = `g(x) = |${lin(1, -h)}| ${sgn(k)}`, t = ri(0, 2), H = (v) => `${v > 0 ? 'right' : 'left'} ${Math.abs(v)}`, V = (v) => `${v > 0 ? 'up' : 'down'} ${Math.abs(v)}`;
    if (t === 0) return mk(`What is the vertex of ${g}?`, [pt(h, k), pt(-h, k), pt(k, h), pt(h, -k)], `|x − h| + k has its vertex at (h, k). Watch the sign inside the bars: ${pt(h, k)}.`, { t });
    if (t === 1) {
      const kind = ri(0, 2);
      if (kind === 0) return mk(`How is g(x) = |${lin(1, -h)}| moved compared to |x|?`, [H(h), H(-h), V(h), V(-h)], `Inside the bars, x ${sgn(-h)} moves the graph the opposite way: ${H(h)}.`, { t });
      if (kind === 1) return mk(`How is g(x) = |x| ${sgn(k)} moved compared to |x|?`, [V(k), V(-k), H(k), H(-k)], `A number added outside the bars moves it up or down: ${V(k)}.`, { t });
      return mk(`How is ${g} moved compared to |x|?`, [`${H(h)} and ${V(k)}`, `${H(-h)} and ${V(k)}`, `${H(h)} and ${V(-k)}`, `${H(k)} and ${V(h)}`], `Inside the bars moves it sideways (opposite sign); outside moves it up or down: ${H(h)} and ${V(k)}.`, { t });
    }
    const x = h + (Math.random() < 0.6 ? -ri(1, 6) : ri(1, 6)), ans = Math.abs(x - h) + k;
    return nq(`${g}. What is g(${fmt(x)})?`, ans, `|${fmt(x)} ${sgn(-h)}| ${sgn(k)} = |${fmt(x - h)}| ${sgn(k)} = ${Math.abs(x - h)} ${sgn(k)} = ${fmt(ans)}.`, [x - h + k, Math.abs(x + h) + k, Math.abs(x - h) - k], { t });
  },

  piecewise() {
    const p = ri(-3, 4), o1 = pick(['<', '≤']), o2 = o1 === '<' ? '≥' : '>';
    let m1, b1, m2, b2; do { m1 = ri(-3, 3); b1 = ri(-6, 6); m2 = ri(-3, 3); b2 = ri(-6, 6); } while (m1 === m2 && b1 === b2);
    const x = pick([p - ri(1, 5), p, p, p + ri(1, 5)]), left = o1 === '<' ? x < p : x <= p;
    const [mm, bb] = left ? [m1, b1] : [m2, b2], ans = mm * x + bb, other = left ? m2 * x + b2 : m1 * x + b1;
    return nq(`f(x) = ${lin(m1, b1)} when x ${o1} ${fmt(p)}, and f(x) = ${lin(m2, b2)} when x ${o2} ${fmt(p)}. What is f(${fmt(x)})?`, ans,
      `${fmt(x)} ${left ? o1 : o2} ${fmt(p)}, so use f(x) = ${lin(mm, bb)}. That gives ${fmt(ans)}.`, [other, mm * x - bb, -ans], { t: 0 });
  },

  // ── Unit 12 ──
  exponentRules() {
    const t = ri(0, 5), X = (e) => xp(e);
    if (t === 0) { let a, b; do { a = ri(2, 7); b = ri(2, 7); } while (a === b); return mk(`Simplify: x${sup(a)} · x${sup(b)}`, opts(X(a + b), [X(a * b), `2${X(a + b)}`, X(Math.abs(a - b))], (k) => X(a + b + k)), `Same base, so add the exponents: ${a} + ${b} = ${a + b}.`, { t }); }
    if (t === 1) { const b = ri(2, 5), a = b + ri(2, 7); return mk(`Simplify: x${sup(a)} ÷ x${sup(b)}`, opts(X(a - b), [X(a + b), a % b === 0 ? X(a / b) : null, X(a * b)], (k) => X(a - b + k)), `Same base, so subtract the exponents: ${a} − ${b} = ${a - b}.`, { t }); }
    if (t === 2) { const a = ri(2, 5), b = ri(2, 5); return mk(`Simplify: (x${sup(a)})${sup(b)}`, opts(X(a * b), [X(a + b), a ** b <= 99 ? X(a ** b) : null], (k) => X(a * b + k)), `A power of a power: multiply the exponents. ${a} × ${b} = ${a * b}.`, { t }); }
    if (t === 3) { const n = ri(2, 99); return mk(`What is ${n}⁰?`, ['1', '0', `${n}`, `1/${n}`], 'Any nonzero number to the power 0 equals 1.', { t }); }
    if (t === 4) { let n, e; do { n = ri(2, 5); e = ri(1, 3); } while (n ** e > 125); return mk(`What is ${n}${sup(-e)}?`, opts(`1/${n ** e}`, [`−${n ** e}`, `−${n * e}`, `1/${n * e}`], (k) => `1/${n ** e + k}`), `A negative exponent means 1 over the positive power: ${e === 1 ? `1/${n}` : `1/${n}${sup(e)} = 1/${n ** e}`}.`, { t }); }
    const p = ri(2, 6), q = ri(2, 6), a = ri(2, 5), b = ri(2, 5);
    return mk(`Simplify: ${p}x${sup(a)} · ${q}x${sup(b)}`, opts(`${p * q}${X(a + b)}`, [`${p + q}${X(a + b)}`, `${p * q}${X(a * b)}`, `${p + q}${X(a * b)}`], (k) => `${p * q}${X(a + b + k)}`), `Multiply the numbers (${p} × ${q} = ${p * q}) and add the exponents (${a} + ${b} = ${a + b}).`, { t });
  },

  roots() {
    const t = ri(0, 4);
    if (t === 0) { const n = ri(2, 15); return nq(`What is √${n * n}?`, n, `${n} × ${n} = ${n * n}, so √${n * n} = ${n}.`, [(n * n) / 2, n * n, 2 * n], { t }, { pos: true }); }
    if (t === 1) { const n = ri(2, 5), s = pick([1, -1]), c = s * n ** 3; return nq(`What is ∛${s < 0 ? `(−${n ** 3})` : c}?`, s * n, `${neg(s * n)} × ${neg(s * n)} × ${neg(s * n)} = ${fmt(c)}.`, [c / 3, -s * n, s * n * n], { t }); }
    if (t === 2) { const n = ri(2, 12); return mk(`What is √(−${n * n})?`, ['no real answer', `−${n}`, `${n}`, `−${n * n}`], 'No real number times itself is negative, so there is no real answer.', { t }); }
    if (t === 3) {
      const k = ri(4, 15), sq = k * k, near = []; while (near.length < 3) { const v = sq + nz(-12, 12); if (v > 1 && !isSq(v) && !near.includes(v)) near.push(v); }
      return mk('Which number is a perfect square?', [`${sq}`, ...near.map(String)], `${k} × ${k} = ${sq}. The others are not a whole number times itself.`, { t });
    }
    let a, b; do { a = ri(2, 8); b = ri(3, 9); } while (a >= b || gcd(a, b) !== 1);
    return mk(`What is √(${a * a}/${b * b})?`, [`${a}/${b}`, `${a * a}/${b}`, `${a}/${b * b}`, `${b}/${a}`], `Take the root of the top and the bottom: √${a * a} = ${a} and √${b * b} = ${b}.`, { t });
  },

  simplifySqrt() {
    let a, b; do { a = ri(2, 6); b = pick([2, 3, 5, 6, 7, 10, 11]); } while (a * a * b > 250);
    const n = a * a * b, R = (c, r) => `${c}√${r}`;
    if (ri(0, 3) < 3) return mk(`Simplify √${n}.`, opts(R(a, b), [R(a * a, b), R(b, a), R(a, n / a)], (k) => R(a + k, b)), `${n} = ${a * a} × ${b}, and ${a * a} is a perfect square. √${a * a} = ${a}, so √${n} = ${R(a, b)}.`, { n });
    const c = ri(2, 5);
    return mk(`Simplify ${c}√${n}.`, opts(R(c * a, b), [R(c + a, b), R(c * a * a, b), R(c, a * b)], (k) => R(c * a + k, b)), `√${n} = ${R(a, b)}, so ${c}√${n} = ${c} × ${R(a, b)} = ${R(c * a, b)}.`, { n, c });
  },

  rationalExp() { // a12-04 teaches only the 1/2 and 1/3 powers
    const t = ri(0, 3), o = { int: false, pos: true, f: big };
    if (t === 0) { const k = ri(2, 12), n = k * k; return nq(`What is ${n}^(1/2)?`, k, `A 1/2 power is a square root: √${n} = ${k}. It is not ${n} ÷ 2.`, [dec2(n / 2), n * n, 2 * n], { t }, o); }
    if (t === 1) { const k = ri(2, 5), n = k ** 3; return nq(`What is ${n}^(1/3)?`, k, `A 1/3 power is a cube root: ∛${n} = ${k}.`, [dec2(n / 3), 3 * n, dec2(n / 2), k * k], { t }, o); }
    if (t === 2) {
      const w = pick([2, 3]), n = nonSq(2, 30), root = (r) => `${r === 2 ? '√' : '∛'}${n}`;
      return mk(`Which is the same as ${n}^(1/${w})?`, [root(w), w === 2 ? `${n / 2}` : frac(n, 3), `${n}${sup(w)}`, root(5 - w)], `The bottom of the fraction picks the root: 1/${w} means ${w === 2 ? 'square' : 'cube'} root, ${root(w)}.`, { t });
    }
    const k1 = ri(2, 10), k2 = ri(2, 5), a = k1 * k1, b = k2 ** 3, plus = Math.random() < 0.5, op = plus ? '+' : '−', ans = plus ? k1 + k2 : k1 - k2;
    return nq(`What is ${a}^(1/2) ${op} ${b}^(1/3)?`, ans, `${a}^(1/2) = √${a} = ${k1} and ${b}^(1/3) = ∛${b} = ${k2}. ${k1} ${op} ${k2} = ${fmt(ans)}.`,
      [plus ? k1 - k2 : k1 + k2, plus ? a + b : a - b, dec2(plus ? a / 2 + b / 3 : a / 2 - b / 3)], { t }, { int: false, f: fmt });
  },

  // ── Unit 13 ──
  growthType() {
    const kind = ri(0, 2), L = (d) => (d > 0 ? `Linear — it adds ${d} each time` : `Linear — it subtracts ${-d} each time`), E = (r) => `Exponential — it multiplies by ${r} each time`;
    const N = 'Neither — no same difference and no same ratio';
    let ys, c, why;
    if (kind === 0) {
      const y0 = ri(1, 20), d = nz(-6, 9); ys = seq4((i) => y0 + i * d);
      const r1 = ys[1] % ys[0] === 0 && ys[1] / ys[0] > 1 ? ys[1] / ys[0] : 2;
      c = opts(L(d), [E(r1), N, `Exponential — it adds ${Math.abs(d)} each time`], (k) => E(r1 + k)); why = `The y-values change by the same amount (${fmt(d)}) each step, so it is linear.`;
    } else if (kind === 1) {
      const dec = Math.random() < 0.3, r = dec ? '1/2' : pick([2, 3, 4]), y0 = dec ? 8 * ri(1, 5) : ri(1, 6);
      ys = seq4((i) => (dec ? y0 / 2 ** i : y0 * r ** i));
      c = opts(E(r), [L(ys[1] - ys[0]), L(ys[2] - ys[1]), N], (k) => E(k + 4)); why = `Each y-value is ${r} times the one before, so it is exponential.`;
    } else {
      if (Math.random() < 0.5) { const k = ri(1, 6); ys = seq4((i) => (k + i) ** 2); }
      else { let y0, g; do { y0 = ri(1, 10); g = ri(1, 6); ys = [y0, y0 + g, y0 + 2 * g + 1, y0 + 3 * g + 3]; } while (ys[1] * ys[1] === ys[0] * ys[2]); }
      const r1 = ys[1] % ys[0] === 0 && ys[1] / ys[0] > 1 ? ys[1] / ys[0] : 2;
      c = opts(N, [L(ys[1] - ys[0]), E(r1), L(ys[2] - ys[1])], (k) => E(r1 + k)); why = 'The differences change and the ratios change, so it is neither.';
    }
    return mk(`Table — x: 0, 1, 2, 3 and y: ${list(ys)}. What kind of growth is this?`, c, why, { kind });
  },

  expValue() {
    const t = ri(0, 5); let a, b; do { a = ri(2, 9); b = ri(2, 5); } while (a === b);
    const F = `${a} · ${b}ˣ`;
    if (t === 0) { const x = ri(0, 4), ans = a * b ** x; return nq(`If f(x) = ${F}, what is f(${x})?`, ans, `${b}${sup(x)} = ${b ** x}, then × ${a} = ${big(ans)}. Do the power before multiplying.`, [(a * b) ** x, a * b * x, a * b ** (x + 1)], { t }, { f: big }); }
    if (t === 1) { const init = Math.random() < 0.5; return mk(`In y = ${F}, what is the ${init ? 'initial value' : 'growth factor'}?`, opts(`${init ? a : b}`, [`${init ? b : a}`, `${a * b}`, `${a + b}`], (k) => `${a * b + k}`), init ? `The initial value is the number in front: ${a}.` : `The growth factor is the base of the power: ${b}.`, { t, init }); }
    if (t === 2) return mk(`Where does the graph of y = ${F} cross the y-axis?`, [pt(0, a), pt(0, b), pt(a, 0), pt(0, a * b)], `Put x = 0: ${b}⁰ = 1, so y = ${a}.`, { t });
    if (t === 3) {
      const x = ri(1, 3), Y = a * b ** x, on = (u, v) => v === a * b ** u;
      const w = [[x, (a * b) ** x], [x, a * b * x], [Y, x]].filter(([u, v]) => !on(u, v)).map(([u, v]) => pt(u, v));
      return mk(`Which point is on the graph of y = ${F}?`, opts(pt(x, Y), w, (k) => pt(x, Y + k)), `Put x = ${x}: ${a} · ${b}${sup(x)} = ${a} × ${b ** x} = ${Y}.`, { t });
    }
    if (t === 4) { const aa = pick([1, 1, a]); return mk(`For y = ${aa === 1 ? '' : `${aa} · `}${b}ˣ, what is y when x = −1?`, opts(frac(aa, b), [fmt(-aa * b), frac(-aa, b), fmt(aa * b)], (k) => frac(aa + k, b)), `${b}⁻¹ = 1/${b}${aa === 1 ? '' : `, and ${aa} × 1/${b} = ${frac(aa, b)}`}.`, { t }); }
    const p = pick([5, 10, 15, 20, 25, 30, 40]);
    return mk(`A population grows ${p}% each year. What is the growth factor?`, [`${(100 + p) / 100}`, `${p / 100}`, `${p}`, `${(100 - p) / 100}`], `Keep 100% and add ${p}%: 100% + ${p}% = ${100 + p}% = ${(100 + p) / 100}.`, { t, p });
  },

  expDecay() {
    const t = ri(0, 3);
    if (t === 0) {
      const n = ri(1, 4), h = pick([2, 3, 5, 6, 8]), A0 = 2 ** n * pick([25, 50, 75, 100, 125]), ans = A0 / 2 ** n, mg = Math.random() < 0.5;
      const q = mg ? `A substance sample starts at ${big(A0)} mg. Its half-life is ${h} hours. How much is left after ${n * h} hours?` : `A phone is worth $${big(A0)}. Its value halves every ${h} years. What is it worth after ${n * h} years?`;
      return nq(q, ans, `${n * h} ÷ ${h} = ${n} half-lives. Halve ${n} time${n > 1 ? 's' : ''}: ${big(A0)} ÷ ${2 ** n} = ${big(ans)}.`, [A0 / (2 * n), A0 / 2, A0 - ans], { t, A0, h, n }, { f: mg ? (v) => `${big(v)} mg` : (v) => `$${big(v)}`, pos: true, step: ans });
    }
    if (t === 1) { const p = pick([5, 10, 15, 20, 25, 30, 40]); return mk(`A phone loses ${p}% of its value each year. What is the decay factor?`, [`${(100 - p) / 100}`, `${p / 100}`, `${(100 + p) / 100}`, `${100 - p}`], `It keeps 100% − ${p}% = ${100 - p}% each year, and ${100 - p}% = ${(100 - p) / 100}.`, { t, p }); }
    if (t === 2) {
      let b, x, m; do { b = ri(2, 5); x = ri(1, 3); m = ri(1, 5); } while (m * b ** x > 2000);
      const a = m * b ** x;
      return nq(`For y = ${a} · (1/${b})ˣ, what is y when x = ${x}?`, m, `(1/${b})${sup(x)} = 1/${b ** x}, and ${a} ÷ ${b ** x} = ${m}.`, [(a * x) / b, x > 1 ? a / b : null, a / (b * x)], { t }, { pos: true });
    }
    const dec = Math.random() < 0.5, b = dec ? pick([0.5, 0.6, 0.75, 0.8, 0.9, 0.95]) : pick([1.05, 1.1, 1.2, 1.5, 2, 3]), a = pick([50, 100, 200, 300, 500]);
    const c = dec ? [`Decay — ${b} is between 0 and 1`, `Growth — ${a} is bigger than 1`, 'Growth — x keeps getting bigger', 'Neither — it is a straight line']
      : [`Growth — ${b} is bigger than 1`, `Decay — ${b} is less than ${a}`, `Decay — ${a} gets smaller`, 'Neither — it is a straight line'];
    return mk(`Is y = ${a} · ${b}ˣ growth or decay?`, c, `Look at the base ${b}: bigger than 1 means growth; between 0 and 1 means decay.`, { t, b });
  },

  expTable() {
    const t = ri(0, 3), dec = t < 2 && Math.random() < 0.25, r = dec ? [1, 2] : [pick([2, 3, 4]), 1], a = dec ? 8 * ri(1, 6) : ri(2, 6);
    const ys = seq4((i) => (a * r[0] ** i) / r[1] ** i), rs = frac(r[0], r[1]), T = `Table — x: 0, 1, 2, 3 and y: ${list(ys)}.`;
    const Fn = (A, B) => `y = ${A} · ${String(B).includes('/') ? `(${B})` : B}ˣ`;
    if (t === 0) return mk(`${T} Which function fits?`, opts(Fn(a, rs), [!dec && a !== r[0] ? Fn(r[0], a) : null, `y = ${lin(ys[1] - ys[0], a)}`, Fn(ys[1], rs)], (k) => Fn(a + k, rs)),
      `Start value a = ${a} (y when x = 0). Each step multiplies by ${rs}, so ${Fn(a, rs)}.`, { t });
    if (t === 1) {
      if (Math.random() < 0.5) return mk(`${T} What is the growth factor?`, opts(rs, [fmt(ys[1] - ys[0]), fmt(ys[1]), fmt(a)], (k) => frac(r[0] + k * r[1], r[1])), `Divide each y by the one before: ${fmt(ys[1])} ÷ ${fmt(a)} = ${rs}.`, { t, ask: 'factor' });
      return mk(`${T} What is the initial value?`, opts(fmt(a), [fmt(ys[1]), rs, fmt(ys[3])], (k) => fmt(a + k)), `The initial value is y when x = 0: ${a}.`, { t, ask: 'initial' });
    }
    const R = r[0];
    if (t === 2) return nq(`An exponential graph passes through (0, ${a}) and (1, ${a * R}). What is y when x = 3?`, a * R ** 3, `a = ${a} and b = ${a * R} ÷ ${a} = ${R}, so y = ${a} · ${R}³ = ${a * R ** 3}.`, [a + 3 * (a * R - a), a * R * 3, a * R ** 4], { t, a, R }, { f: big });
    const AB = (u, v) => `a = ${u}, b = ${v}`;
    return mk(`The graph of y = a · bˣ crosses the y-axis at ${a} and passes through (1, ${a * R}). What are a and b?`, opts(AB(a, R), [a !== R ? AB(R, a) : null, AB(a, a * R - a), AB(a * R, R)], (k) => AB(a, R + k)),
      `a is the y-intercept: ${a}. b = ${a * R} ÷ ${a} = ${R}.`, { t, a, R });
  },

  // ── Unit 14 ──
  monomialTimes() {
    if (ri(0, 2) < 2) {
      const k = pick([2, 3, 4, 5, 6, -2, -3]), e = pick([0, 1, 1]), p = ri(1, 4), q = nz(-9, 9), out = e ? mono(k) : fmt(k);
      const right = e ? P2(k * p, k * q, 0) : P2(0, k * p, k * q);
      const w = e ? [P2(k * p, 0, q), P2(0, k * p, k * q), P2(k * p + k * q, 0, 0)] : [P2(0, k * p, q), P2(0, k * p, -k * q), P2(0, k + p, k * q)];
      return mk(`Expand: ${out}(${lin(p, q)})`, opts(right, w, (n) => (e ? P2(k * p, k * q + n, 0) : P2(0, k * p, k * q + n))), `Multiply ${out} by EACH term inside the parentheses: ${right}.`, { t: 0 });
    }
    const p = ri(2, 6), q = ri(2, 6), a = ri(1, 4), b = ri(1, 4);
    return mk(`Simplify: ${mono(p, xp(a))} · ${mono(q, xp(b))}`, opts(mono(p * q, xp(a + b)), [mono(p + q, xp(a + b)), mono(p * q, xp(a * b)), mono(p + q, xp(a * b))], (n) => mono(p * q + n, xp(a + b))),
      `Multiply the numbers (${p} × ${q} = ${p * q}) and add the exponents (${a} + ${b} = ${a + b}).`, { t: 1 });
  },

  foil() {
    const t = ri(0, 4), a = nz(-9, 9), b = nz(-9, 9);
    if (t === 0) return mk(`Expand: (${lin(1, a)})(${lin(1, b)})`, opts(P2(1, a + b, a * b), [P2(1, 0, a * b), P2(1, a + b, -a * b), P2(1, a * b, a + b)], (k) => P2(1, a + b + k, a * b)),
      `First: x · x = x². Outer + Inner: ${mono(a + b)}. Last: ${neg(a)} · ${neg(b)} = ${fmt(a * b)}.`, { t });
    if (t === 1) { const p = ri(2, 3); return mk(`Expand: (${lin(p, a)})(${lin(1, b)})`, opts(P2(p, p * b + a, a * b), [P2(p, 0, a * b), P2(p, a + b, a * b), P2(p, p * b + a, a + b)], (k) => P2(p, p * b + a + k, a * b)),
      `First: ${p}x². Outer + Inner: ${poly([[p * b, 'x'], [a, 'x']])} = ${mono(p * b + a)}. Last: ${fmt(a * b)}.`, { t }); }
    const p = pick([1, 1, 2, 3]);
    if (t === 2) return mk(`Expand: (${lin(p, a)})²`, opts(P2(p * p, 2 * p * a, a * a), [P2(p * p, 0, a * a), P2(p * p, p * a, a * a), P2(p * p, 2 * p * a, 2 * a)], (k) => P2(p * p, 2 * p * a + k, a * a)),
      `(a + b)² = a² + 2ab + b². Don't forget the middle term ${mono(2 * p * a)}.`, { t });
    const A = Math.abs(a);
    if (t === 3) return mk(`Expand: (${lin(p, A)})(${lin(p, -A)})`, opts(P2(p * p, 0, -A * A), [P2(p * p, 0, A * A), P2(p * p, -2 * p * A, -A * A), p > 1 ? P2(p, 0, -A * A) : P2(1, 0, -2 * A)], (k) => P2(p * p, 0, -A * A - k)),
      `The middle terms cancel (${mono(p * A)} and ${mono(-p * A)}), leaving ${P2(p * p, 0, -A * A)}.`, { t });
    return mk(`In the box method for (x ${sgn(a)})(x ${sgn(b)}), what goes in the box for ${fmt(a)} and ${fmt(b)}?`, opts(fmt(a * b), [fmt(a + b), mono(a * b), mono(a + b)], (k) => fmt(a * b + k)), `Multiply them: ${neg(a)} × ${neg(b)} = ${fmt(a * b)}.`, { t, a, b });
  },

  gcfFactor() {
    const t = ri(0, 2), g = ri(2, 9);
    if (t === 0) {
      let m1, m2; do { m1 = ri(2, 7); m2 = ri(2, 7); } while (m1 === m2 || gcd(m1, m2) !== 1);
      const n1 = g * m1, n2 = g * m2, sm = [...Array(g).keys()].reverse().find((d) => d > 1 && g % d === 0) || 1;
      return nq(`What is the GCF of ${n1} and ${n2}?`, g, `${n1} = ${g} × ${m1} and ${n2} = ${g} × ${m2}. The biggest number that divides both is ${g}.`, [sm, Math.min(n1, n2), g * m1 * m2], { t, n1, n2 }, { pos: true });
    }
    if (t === 1) {
      let m1, m2, e1, e2; do { m1 = ri(1, 6); m2 = ri(1, 6); e1 = ri(0, 3); e2 = ri(0, 3); } while (m1 === m2 || gcd(m1, m2) !== 1 || e1 + e2 === 0 || e1 === e2);
      const lo = Math.min(e1, e2), hi = Math.max(e1, e2), M = (c, e) => mono(c, xp(e));
      return mk(`What is the GCF of ${M(g * m1, e1)} and ${M(g * m2, e2)}?`, opts(M(g, lo), [M(g, hi), lo ? M(g, 0) : M(g, 1), M(g * m1 * m2, hi)], (k) => M(g + k, lo)),
        `Biggest number in both: ${g}. Fewest x's in both: ${lo ? xp(lo) : 'none'}. GCF = ${M(g, lo)}.`, { t });
    }
    const e = pick([0, 1]); let p, q; do { p = ri(1, 5); q = nz(-9, 9); } while (gcd(p, q) !== 1);
    const G = mono(g, xp(e)), F = (c, d) => `${G}(${lin(c, d)})`;
    return mk(`Factor: ${poly([[g * p, xp(e + 1)], [g * q, xp(e)]])}`, opts(F(p, q), [F(p, -q), F(p, g * q), e ? `${g}(${lin(p, q)})` : `${mono(g)}(${lin(p, q)})`], (k) => F(p, q + k)),
      `The GCF is ${G}. Divide each term by it: ${G}(${lin(p, q)}).`, { t });
  },

  factorTrinomial() {
    let r, s; do { r = nz(-9, 9); s = nz(-9, 9); } while (r === s || r === -s);
    const b = r + s, c = r * s, tri = P2(1, b, c), F = (u, v) => `(x ${sgn(Math.max(u, v))})(x ${sgn(Math.min(u, v))})`, t = ri(0, 3) < 3 ? 0 : ri(1, 2);
    if (t === 0) {
      const alt = []; for (let d = 1; d <= Math.abs(c); d++) if (c % d === 0) for (const [u, v] of [[d, c / d], [-d, -c / d]]) if (u + v !== b) alt.push([u, v]);
      const w = [F(-r, -s), F(r, -s), alt.length ? F(...pick(alt)) : null];
      return mk(`Factor: ${tri}`, opts(F(r, s), w, (k) => (r + k ? F(r + k, s) : null)), `Find two numbers that multiply to ${fmt(c)} and add to ${fmt(b)}: ${fmt(r)} and ${fmt(s)}.`, { t });
    }
    if (t === 1) { const M = (u, v) => `multiply to ${fmt(u)} and add to ${fmt(v)}`; return mk(`To factor ${tri}, you need two numbers that…`, opts(M(c, b), [M(b, c), M(c, -b), M(-c, b)], (k) => M(c + k, b)), `For x² + bx + c, the numbers multiply to c (${fmt(c)}) and add to b (${fmt(b)}).`, { t, b, c }); }
    const right = c < 0 ? 'one positive and one negative' : b > 0 ? 'both positive' : 'both negative';
    return mk(`To factor ${tri}, the two numbers must be…`, [right, ...['both positive', 'both negative', 'one positive and one negative', 'impossible to tell'].filter((x) => x !== right)],
      c < 0 ? 'They multiply to a negative, so one is positive and one is negative.' : `They multiply to a positive and add to ${fmt(b)}, so they are ${right}.`, { t, b, c });
  },

  factorGrouping() {
    let p, q, rr, s; do { p = pick([2, 3, 5]); rr = pick([1, 1, 2]); q = nz(-7, 7); s = nz(-7, 7); } while (gcd(p, q) !== 1 || gcd(rr, s) !== 1 || p * s + q * rr === 0 || (p === rr && q === s));
    const A = p * rr, B = p * s + q * rr, C = q * s, tri = P2(A, B, C), t = ri(0, 3) < 2 ? 0 : ri(1, 2);
    const F = (a1, b1, a2, b2) => `${bin(a1, b1)}${bin(a2, b2)}`, same = (a1, b1, a2, b2) => a1 * a2 === A && a1 * b2 + b1 * a2 === B && b1 * b2 === C;
    if (t === 0) {
      const w = [[p, s, rr, q], [p, -q, rr, -s], [p, q, rr, -s], [rr, q, p, s]].filter((f) => !same(...f)).map((f) => F(...f));
      return mk(`Factor: ${tri}`, opts(F(p, q, rr, s), w, (k) => F(p, q + k, rr, s)), `a · c = ${fmt(A * C)}. Two numbers that multiply to ${fmt(A * C)} and add to ${fmt(B)}: ${fmt(p * s)} and ${fmt(q * rr)}. Split the middle term and group.`, { t });
    }
    if (t === 1) return nq(`To factor ${tri} by grouping, what is a · c?`, A * C, `a = ${A} and c = ${fmt(C)}, so a · c = ${fmt(A * C)}.`, [A + C, A * B, B * C], { t, A, C });
    const u = p * s, v = q * rr, ac = A * C, alt = [];
    for (let d = 1; d <= Math.abs(ac); d++) if (ac % d === 0) for (const [x, y] of [[d, ac / d], [-d, -ac / d]]) if (x + y !== B && x <= y) alt.push([x, y]);
    const w = [alt.length ? pick(alt) : null, [u + 1, v - 1], [q, s]].filter((z) => z && !(z[0] * z[1] === ac && z[0] + z[1] === B)).map(([x, y]) => pair(x, y));
    return mk(`For ${tri}, which two numbers multiply to a · c and add to b?`, opts(pair(u, v), w, (k) => pair(u + k + 1, v - k - 1)), `a · c = ${fmt(ac)}. ${fmt(u)} × ${neg(v)} = ${fmt(ac)} and ${fmt(u)} + ${neg(v)} = ${fmt(B)}.`, { t, A, B, C });
  },

  diffSquares() {
    const t = ri(0, 2);
    if (t === 0) {
      const p = pick([1, 1, 1, 2, 3]); let a; do { a = ri(1, 9); } while (gcd(p, a) !== 1);
      const right = `${bin(p, a)}${bin(p, -a)}`, w = p === 1 ? [`${bin(1, -a)}²`, `${bin(1, a)}²`, 'It can\'t be factored'] : [`${bin(p, -a)}²`, `${bin(p, a)}²`, `${bin(p * p, a)}${bin(1, -a)}`];
      return mk(`Factor: ${P2(p * p, 0, -a * a)}`, opts(right, w, (k) => `${bin(p, a + k)}${bin(p, -a - k)}`), `It is a difference of squares: ${p === 1 ? 'x²' : `(${p}x)²`} − ${a}². So it factors as ${right}.`, { t });
    }
    if (t === 1) {
      const p = pick([1, 1, 2]); let a; do { a = nz(-9, 9); } while (gcd(p, a) !== 1);
      return mk(`Factor: ${P2(p * p, 2 * p * a, a * a)}`, opts(`${bin(p, a)}²`, [`${bin(p, a)}${bin(p, -a)}`, `${bin(p, -a)}²`, `${bin(p, 2 * a)}²`], (k) => `${bin(p, a + k)}²`),
        `First and last are squares (${p === 1 ? 'x' : `${p}x`} and ${Math.abs(a)}), and the middle is 2 × ${mono(p)} × ${neg(a)}. So it is ${bin(p, a)}².`, { t });
    }
    const sq = []; while (sq.length < 4) { const v = ri(1, 12); if (!sq.includes(v)) sq.push(v); }
    const pp = ri(2, 4);
    return mk('Which expression does NOT factor as a difference of squares?', [`x² + ${sq[0] ** 2}`, `x² − ${sq[1] ** 2}`, `${pp * pp}x² − ${sq[2] ** 2}`, `x² − ${sq[3] ** 2}`],
      `A difference of squares needs a minus sign between two squares. x² + ${sq[0] ** 2} is a sum, so it doesn't factor that way.`, { t });
  },

  // ── Unit 16 ──
  irrational() {
    const t = ri(0, 2);
    const rat = () => pick([
      () => `√${ri(2, 12) ** 2}`,
      () => { const d = pick([3, 4, 5, 7, 8, 9]); let n; do { n = ri(1, d - 1); } while (gcd(n, d) !== 1); return `${n}/${d}`; },
      () => { const d = pick([2, 4, 5, 8]); let n; do { n = ri(1, d * 3); } while (n % d === 0); return String(n / d); },
      () => { const a = ri(1, 9), b = ri(0, 9); return `0.${a}${b}${a}${b}${a}${b}…`; },
      () => `−${ri(2, 30)}`,
    ])();
    const fill = (f, have) => { let v; do { v = f(); } while (have.includes(v)); have.push(v); return v; };
    if (t === 0) { const c = [`√${nonSq()}`]; for (let i = 0; i < 3; i++) fill(rat, c); return mk('Which number is irrational?', c, `${c[0]}: the number under the root is not a perfect square, so its decimal never ends or repeats.`, { t }); }
    if (t === 1) { const c = [rat()]; fill(() => `√${nonSq()}`, c); fill(() => `√${nonSq()}`, c); c.push('π'); return mk('Which number is rational?', c, `${c[0]} can be written as a fraction of two integers. The others never end or repeat.`, { t }); }
    if (Math.random() < 0.5) {
      const k = ri(2, 12), n = k * k;
      return mk(`Is √${n} rational or irrational?`, [`Rational — √${n} = ${k}`, 'Irrational — every square root is irrational', `Irrational — ${n} is not a perfect square`, 'Irrational — its decimal never ends'], `${k} × ${k} = ${n}, so √${n} = ${k}, a whole number.`, { t, n });
    }
    const n = nonSq(2, 60);
    return mk(`Is √${n} rational or irrational?`, [`Irrational — ${n} is not a perfect square`, 'Rational — every square root is rational', `Rational — √${n} is about ${Math.sqrt(n).toFixed(2)}`, `Rational — ${n} is a whole number`],
      `${n} is not a perfect square, so √${n} never ends or repeats.`, { t, n });
  },

  irrationalOps() {
    const t = ri(0, 3), r = nz(-9, 9);
    const sqPair = () => { const c = pick([2, 3, 5, 6, 7]); let u, v; do { u = ri(1, 3); v = ri(1, 3); } while (u === v); return [c * u * u, c * v * v]; };
    const badPair = () => { let x, y; do { x = nonSq(2, 30); y = nonSq(2, 30); } while (isSq(x * y)); return [x, y]; };
    if (t === 0) {
      const n = nonSq(2, 50), [x, y] = sqPair(), right = pick([`√${n} × √${n}`, `0 × √${n}`, `√${x} × √${y}`]), [u, v] = badPair();
      return mk('Which product is rational?', [right, `√${u} × √${v}`, `${fmt(r)} × √${nonSq(2, 50)}`, `${fmt(r)} × π`], `${right} works out to a whole number. Nonzero rational × irrational is always irrational.`, { t });
    }
    if (t === 1) {
      const n = nonSq(2, 50), k = ri(2, 9), d1 = pick([2, 3, 4]), d2 = pick([3, 4, 5]);
      return mk('Which sum is irrational?', [`${fmt(r)} + √${n}`, `√${n} + (−√${n})`, `√${k * k} ${sgn(r)}`, `1/${d1} + 1/${d2}`], `Rational + irrational is always irrational, and √${n} is irrational.`, { t });
    }
    if (t === 2) {
      const [x, y] = sqPair(), v = Math.sqrt(x * y);
      return mk(`What is √${x} × √${y}?`, opts(`${v}`, [`√${x + y}`, big(x * y), `${x + y}`], (k) => `${v + k}`), `You can multiply under the roots: √${x} × √${y} = √${x * y} = ${v}.`, { t });
    }
    let p, q; do { p = ri(2, 9); q = ri(2, 9); } while (p === q);
    return mk(`What is √${p * p} + √${q * q}?`, opts(`${p + q}`, [`√${p * p + q * q}`, `${p * p + q * q}`, `${p * q}`], (k) => `${p + q + k}`), `Simplify each root first: ${p} + ${q} = ${p + q}. You can't add the numbers under the roots.`, { t });
  },
};
