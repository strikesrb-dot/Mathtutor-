// The study plan (owner request 2026-10-05): the master picks how many study blocks (1–6) and the subject of each.
// Saved as settings.plan, e.g. ['algebra', 'algebra', 'biology', 'biology'] (the default, in content/schedule.js).
// The day's steps are fitted around the blocks: after every block but the last, a break and then game time; a fun-fact
// video after the middle block and after the last one. Block ids count per subject (A1, A2… Algebra; B1, B2… Biology),
// so a plan changed mid-day keeps what he already did. The default plan gives the same steps and ids as before.

import schedule from '../content/schedule.js';

export const PLAN_SUBJECTS = ['algebra', 'biology'];
export const MAX_BLOCKS = 6;

export function normPlan(plan) {
  const p = (Array.isArray(plan) ? plan : []).filter((s) => PLAN_SUBJECTS.includes(s)).slice(0, MAX_BLOCKS);
  return p.length ? p : schedule.plan.slice();
}

// → [{ id, type: 'block'|'fact'|'break'|'game', subject?, n?, of? }]  (n/of = "Block 2 of 3" within the subject, "Fun video 1 of 2")
export function planSteps(plan) {
  const p = normPlan(plan), last = p.length;
  const total = Object.fromEntries(PLAN_SUBJECTS.map((s) => [s, p.filter((x) => x === s).length]));
  const factAfter = last === 1 ? [1] : [Math.ceil(last / 2), last];
  const seen = { algebra: 0, biology: 0 }, steps = [];
  p.forEach((subject, i) => {
    const k = ++seen[subject];
    steps.push({ id: `${subject === 'algebra' ? 'A' : 'B'}${k}`, type: 'block', subject, n: k, of: total[subject] });
    const f = factAfter.indexOf(i + 1);
    if (f >= 0) steps.push({ id: `F${f + 1}`, type: 'fact', n: f + 1, of: factAfter.length });
    if (i < last - 1) steps.push({ id: `R${i + 1}`, type: 'break' }, { id: `G${i + 1}`, type: 'game' });
  });
  return steps;
}

// Quick plans for the Settings card. They keep the number of blocks.
export const PRESETS = {
  algebra: (n) => Array(n).fill('algebra'),
  biology: (n) => Array(n).fill('biology'),
  mix: (n) => Array.from({ length: n }, (_, i) => (i < Math.ceil(n / 2) ? 'algebra' : 'biology')),
};
