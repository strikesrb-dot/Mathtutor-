// Helpers for the fresh-number quiz generators (gen-algebra.js, gen-algebra-2.js).
// Quiz text is plain text (not HTML) with Unicode math: − × ÷ · ² ³ √ ∛ ≤ ≥.

export const ri = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
export const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const nz = (a, b) => { let n = 0; while (n === 0) n = ri(a, b); return n; };
export const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
export const fmt = (n) => (n < 0 ? `−${-n}` : `${n === 0 ? 0 : n}`);
export const sgn = (n) => (n < 0 ? `− ${-n}` : `+ ${n}`);
export const neg = (n) => (n < 0 ? `(−${-n})` : `${n}`);
export const big = (n) => (n < 0 ? '−' : '') + Math.abs(n).toLocaleString('en-US');
export const cents = (c) => (c % 100 ? `$${Math.floor(c / 100)}.${String(c % 100).padStart(2, '0')}` : `$${big(c / 100)}`);
export const frac = (n, d) => {
  if (d < 0) { n = -n; d = -d; }
  const g = gcd(n, d) || 1; n /= g; d /= g;
  return d === 1 ? fmt(n) : `${n < 0 ? '−' : ''}${Math.abs(n)}/${d}`;
};
const SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹', SUB = '₀₁₂₃₄₅₆₇₈₉';
export const sup = (n) => (n < 0 ? '⁻' : '') + [...String(Math.abs(n))].map((d) => SUP[+d]).join('');
export const sub = (n) => [...String(n)].map((d) => SUB[+d]).join('');
export const xp = (e, v = 'x') => (e === 0 ? '' : e === 1 ? v : v + sup(e)); // x-power: '', x, x², …
export const list = (xs) => xs.map(fmt).join(', ');
export const pt = (x, y) => `(${fmt(x)}, ${fmt(y)})`;
export const ord = (n) => `${n}${n % 100 >= 11 && n % 100 <= 13 ? 'th' : ['th', 'st', 'nd', 'rd'][n % 10] || 'th'}`;

// Polynomial text from [coef, variablePart] pairs; zero terms are dropped. poly([[2,'x²'],[-1,'x'],[3,'']]) → "2x² − x + 3"
export function poly(terms) {
  const t = terms.filter(([c]) => c !== 0);
  if (!t.length) return '0';
  return t.map(([c, v], i) => {
    const m = Math.abs(c), body = v ? (m === 1 ? v : `${m}${v}`) : `${m}`;
    return i === 0 ? (c < 0 ? `−${body}` : body) : ` ${c < 0 ? '−' : '+'} ${body}`;
  }).join('');
}
export const lin = (m, b, v = 'x') => poly([[m, v], [b, '']]);
export const mono = (c, v = 'x') => poly([[c, v]]);
export const bin = (p, q, v = 'x') => `(${lin(p, q, v)})`; // (2x − 3)

// Exactly 4 distinct choices with the correct one first. fill(k) supplies more wrong ones if needed.
export function opts(correct, wrongs, fill) {
  const out = [correct];
  for (const w of wrongs) if (out.length < 4 && w != null && !out.includes(w)) out.push(w);
  for (let k = 1; out.length < 4 && k < 200; k++) { const w = fill(k); if (w != null && !out.includes(w)) out.push(w); }
  return out;
}
export const mk = (q, c, why, _check) => ({ q, c, why, _check });

// Numeric question: ans is a number, extra = likely mistakes. f formats a number; pos keeps wrong answers above 0;
// int (default) drops non-whole mistakes; step spaces the filler answers.
const STEPS = [1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 10, -10, 6, -6, 7, -7];
export function nq(q, ans, why, extra, _check, { f = fmt, pos = false, int = true, step = 1 } = {}) {
  const ok = (n) => Number.isFinite(n) && n !== ans && (!pos || n > 0) && (!int || Number.isInteger(n));
  const fill = (k) => { const n = ans + STEPS[(k - 1) % STEPS.length] * step * Math.ceil(k / STEPS.length); return ok(n) ? f(n) : null; };
  return mk(q, opts(f(ans), extra.filter(ok).map(f), fill), why, _check);
}
