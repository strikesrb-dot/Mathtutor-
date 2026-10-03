// Endless practice questions. Used after a lesson is finished but the block still has time,
// for review, and mixed into quizzes (fresh numbers each attempt). Every generator returns
// { q, c: [correct, wrong, wrong, wrong], why }. More generators live in gen-algebra.js.
import { algebraGenerators } from './gen-algebra.js';

const ri = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const nz = (a, b) => { let n = 0; while (n === 0) n = ri(a, b); return n; };
const sgn = (n) => (n < 0 ? `− ${-n}` : `+ ${n}`);
const neg = (n) => (n < 0 ? `(−${-n})` : `${n}`);
const fmt = (n) => (n < 0 ? `−${-n}` : `${n}`);
const lin = (m, b) => {
  const mm = m === 1 ? '' : m === -1 ? '−' : fmt(m);
  return b === 0 ? `${mm}x` : `${mm}x ${sgn(b)}`;
};

// Make 3 distinct wrong numbers near the right one.
function wrongNums(ans, extra = []) {
  const set = new Set();
  for (const e of extra) if (e !== ans && Number.isFinite(e)) set.add(e);
  let guard = 0;
  while (set.size < 3 && guard++ < 50) {
    const w = ans + pick([-3, -2, -1, 1, 2, 3, 5, -5, 10]);
    if (w !== ans) set.add(w);
  }
  return [...set].slice(0, 3);
}
const numQ = (q, ans, why, extra) => ({ q, c: [fmt(ans), ...wrongNums(ans, extra).map(fmt)], why });

const pairs = (list) => `{${list.map(([x, y]) => `(${fmt(x)}, ${fmt(y)})`).join(', ')}}`;

export const generators = {
  isFunction() {
    const xs = [];
    while (xs.length < 3) { const x = ri(-5, 9); if (!xs.includes(x)) xs.push(x); }
    const good = xs.map((x) => [x, ri(-5, 9)]);
    const bad = [...good];
    const d = bad[0][0];
    let y2 = ri(-5, 9); while (y2 === bad[0][1]) y2 = ri(-5, 9);
    bad.splice(1, 0, [d, y2]);
    const isGood = Math.random() < 0.5;
    const set = isGood ? good : bad;
    return {
      q: `Is ${pairs(set)} a function?`,
      c: isGood
        ? ['Yes — every input appears only once', `No — the input ${fmt(set[0][0])} repeats`, 'No — an output repeats', 'Only if it is a straight line']
        : [`No — the input ${fmt(d)} has two different outputs`, 'Yes — all outputs are different', 'Yes — there are four pairs', 'Only if you graph it'],
      why: isGood ? 'No x-value shows up twice, so each input has exactly one output.' : `x = ${fmt(d)} goes to both ${fmt(bad[0][1])} and ${fmt(y2)}.`,
    };
  },

  evaluate() {
    const m = nz(-6, 6), b = ri(-9, 9), x = ri(-5, 6);
    const kind = Math.random() < 0.75 ? 'forward' : 'backward';
    if (kind === 'forward') {
      const ans = m * x + b;
      return numQ(`If f(x) = ${lin(m, b)}, what is f(${fmt(x)})?`, ans,
        `Put ${neg(x)} in for x: ${fmt(m)}·${neg(x)} ${sgn(b)} = ${fmt(m * x)} ${sgn(b)} = ${fmt(ans)}.`, [m * x - b, m + x + b, -ans]);
    }
    const out = m * x + b;
    return numQ(`If f(x) = ${lin(m, b)}, which x makes f(x) = ${fmt(out)}?`, x,
      `${lin(m, b)} = ${fmt(out)} → ${lin(m, 0)} = ${fmt(out - b)} → x = ${fmt(x)}.`, [out - b, -x, out]);
  },

  domainRange() {
    const n = 3;
    const xs = []; while (xs.length < n) { const x = ri(-6, 9); if (!xs.includes(x)) xs.push(x); }
    xs.sort((a, b) => a - b);
    const ys = xs.map(() => ri(-6, 9));
    const set = xs.map((x, i) => [x, ys[i]]);
    const askDomain = Math.random() < 0.5;
    const uniqYs = [...new Set(ys)].sort((a, b) => a - b);
    const D = `{${xs.map(fmt).join(', ')}}`, R = `{${uniqYs.map(fmt).join(', ')}}`;
    const both = `{${[...new Set([...xs, ...ys])].sort((a, b) => a - b).map(fmt).join(', ')}}`;
    const wrong3 = `{${[...xs, ...ys].slice(0, 2).map(fmt).join(', ')}}`;
    const choices = askDomain ? [D, R, both, wrong3] : [R, D, both, wrong3];
    const uniq = [...new Set(choices)];
    while (uniq.length < 4) uniq.push(`{${fmt(20 + uniq.length)}}`);
    return {
      q: `What is the ${askDomain ? 'domain' : 'range'} of ${pairs(set)}?`,
      c: uniq.slice(0, 4),
      why: askDomain ? 'Domain = the x-values (the first numbers).' : 'Range = the y-values (the second numbers). Write repeats only once.',
    };
  },

  readTable() {
    const m = nz(-4, 4), b = ri(-5, 8);
    const xs = [0, 1, 2, 3];
    const ys = xs.map((x) => m * x + b);
    const table = `x: ${xs.join(', ')}  →  f(x): ${ys.map(fmt).join(', ')}`;
    const t = ri(0, 2);
    if (t === 0) { const k = ri(0, 3); return numQ(`Table — ${table}. What is f(${k})?`, ys[k], `Find x = ${k} in the table. Its output is ${fmt(ys[k])}.`, ys.filter((_, i) => i !== k)); }
    if (t === 1) { const k = ri(0, 3); return numQ(`Table — ${table}. Which x gives f(x) = ${fmt(ys[k])}?`, k, `The output ${fmt(ys[k])} lines up with x = ${k}.`, [ys[k], 4]); }
    return { q: `Table — ${table}. Is f increasing or decreasing?`, c: m > 0 ? ['Increasing', 'Decreasing', 'Neither', 'Both'] : ['Decreasing', 'Increasing', 'Neither', 'Both'], why: m > 0 ? 'As x goes up, f(x) goes up.' : 'As x goes up, f(x) goes down.' };
  },

  slope() {
    const m = nz(-5, 5);
    const x1 = ri(-5, 4), dx = pick([1, 2, 3, 4]);
    const y1 = ri(-6, 6);
    const x2 = x1 + dx, y2 = y1 + m * dx;
    return numQ(`What is the slope between (${fmt(x1)}, ${fmt(y1)}) and (${fmt(x2)}, ${fmt(y2)})?`, m,
      `(${fmt(y2)} − ${neg(y1)}) ÷ (${fmt(x2)} − ${neg(x1)}) = ${fmt(y2 - y1)} ÷ ${dx} = ${fmt(m)}.`, [-m, dx, y2 - y1]);
  },

  intercepts() {
    const m = nz(-5, 5), x0 = ri(-5, 5);
    const b = -m * x0; // x-intercept is a whole number
    const askX = Math.random() < 0.5;
    if (!askX || b === 0) {
      const bb = b === 0 ? ri(1, 9) : b;
      const c = [...new Set([`(0, ${fmt(bb)})`, `(${fmt(bb)}, 0)`, `(0, ${fmt(m)})`, `(0, ${fmt(-bb)})`, `(0, ${fmt(bb + 1)})`])].slice(0, 4);
      return { q: `What is the y-intercept of y = ${lin(m, bb)}?`, c, why: `Put x = 0: y = ${fmt(bb)}.` };
    }
    return { q: `What is the x-intercept of y = ${lin(m, b)}?`, c: [`(${fmt(x0)}, 0)`, `(${fmt(-x0 || 1)}, 0)`, `(0, ${fmt(b)})`, `(${fmt(b)}, 0)`].filter((v, i, a) => a.indexOf(v) === i).concat(['(1, 1)']).slice(0, 4),
      why: `Put y = 0: 0 = ${lin(m, b)} → ${lin(m, 0)} = ${fmt(-b)} → x = ${fmt(x0)}.` };
  },

  slopeIntercept() {
    const m = nz(-6, 6), b = ri(-9, 9);
    const t = ri(0, 2);
    if (t === 0) return numQ(`What is the slope of y = ${lin(m, b)}?`, m, 'm is the number in front of x.', [b, -m]);
    if (t === 1) return numQ(`What is the y-intercept of y = ${lin(m, b)}?`, b, 'b is the number added on (0 if nothing is added).', [m, -b]);
    const opts = [`y = ${lin(m, b)}`, `y = ${lin(b || 1, m)}`, `y = ${lin(-m, b)}`, `y = ${lin(m, -b || 2)}`];
    const u = [...new Set(opts)];
    for (let k = 1; u.length < 4; k++) { const s = `y = ${lin(m + k, b)}`; if (m + k !== 0 && !u.includes(s)) u.push(s); }
    return { q: `Which line has slope ${fmt(m)} and y-intercept ${fmt(b)}?`, c: u.slice(0, 4), why: `y = mx + b with m = ${fmt(m)} and b = ${fmt(b)}.` };
  },

  models() {
    const s = pick([
      () => { const b = pick([20, 25, 30, 40, 50]), m = pick([10, 15, 20, 25]), x = ri(2, 6); return numQ(`A repair shop charges $${b} plus $${m} per hour. What is the cost for ${x} hours?`, m * x + b, `${m}·${x} + ${b} = ${m * x + b}.`, [m * x, (m + b) * x, m + b * x]); },
      () => { const b = pick([50, 100, 150, 200]), m = pick([10, 15, 20, 25]), x = ri(3, 10); return numQ(`You start with $${b} and save $${m} each week. How much do you have after ${x} weeks?`, b + m * x, `${b} + ${m}·${x} = ${b + m * x}.`, [m * x, b * x, b + m]); },
      () => { const m = pick([2, 3, 4, 5]), t = pick([10, 12, 15, 20]); const b = m * t; return numQ(`A candle is ${b} cm tall and burns ${m} cm per hour (y = −${m}x + ${b}). After how many hours is it gone?`, t, `0 = −${m}x + ${b} → x = ${b} ÷ ${m} = ${t}.`, [b, b - m, m]); },
      () => { const a = pick([20, 25, 30]), r = pick([4, 5, 10]), x = pick([2, 3, 4, 5]); const flat = a + r * x; return numQ(`Plan A costs $${a} + $${r} per GB. Plan B costs $${flat} flat. At how many GB do they cost the same?`, x, `${a} + ${r}x = ${flat} → ${r}x = ${flat - a} → x = ${x}.`, [flat - a, r, a]); },
    ]);
    return s();
  },

  ...algebraGenerators,
};

export function practiceFor(lesson) {
  const g = lesson.practice && generators[lesson.practice];
  if (g) return g();
  return null; // biology uses its own quiz banks for review
}
