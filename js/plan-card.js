// Master view → Settings → "Study plan" (owner request 2026-10-05): how many study blocks he does (1–6) and the subject of
// each one, with quick "All math / All biology / Mix" buttons. Every change saves right away with an Undo toast, and his
// screens follow it live (js/plan.js builds his day from settings.plan).

import { esc, hm, toast, icon, refreshSegs } from './ui.js';
import { PLAN_SUBJECTS, MAX_BLOCKS, PRESETS, planSteps } from './plan.js';
import { dayStatus } from './curriculum.js';

const NAME = { algebra: 'Algebra', biology: 'Biology' };
const QUICK = [['algebra', 'All math'], ['biology', 'All biology'], ['mix', 'Mix']];

// el: an empty container. rules(): the current curriculum rules (rules().plan, rules().blockMinutes). today(): his day doc.
// save(plan): a promise. Returns { refresh } to redraw the Done / On it now labels when his day changes.
export function drawPlanCard(el, { rules, save, today }) {
  let plan = rules().plan.slice();

  function draw() {
    const n = plan.length;
    // What each block is today: done, the one he's on (or next), or still to come. Same-subject blocks are interchangeable,
    // so removing any Algebra block takes away one Algebra block he hasn't done yet.
    const st = dayStatus({ ...rules(), plan, steps: planSteps(plan) }, today() || {});
    const blocks = st.list.filter((s) => s.type === 'block'), next = blocks.find((s) => !s.done);
    const status = (b) => (b.done ? 'Done' : b !== next ? '' : b.sec > 0 ? `On it now · ${Math.floor(b.sec / 60)} of ${rules().blockMinutes} min` : 'Up next');
    const on = (k) => (k !== 'mix' || n > 1) && plan.join() === PRESETS[k](n).join();
    el.innerHTML = `
      <p class="cg-caption">Study plan</p>
      <div class="cg-chips sc-plan-quick" role="group" aria-label="Quick plans">${QUICK.map(([k, label]) =>
        `<button type="button" class="cg-chip" data-preset="${k}" aria-pressed="${on(k)}">${label}</button>`).join('')}</div>
      <div class="cg-group sc-plan">
        ${plan.map((s, i) => `<div class="cg-row sc-plan-row">
          <span class="cg-row-text sc-plan-n"><span class="cg-row-label">Block ${i + 1}</span>${status(blocks[i]) ? `<span class="cg-row-sub">${status(blocks[i])}</span>` : ''}</span>
          <div class="cg-seg sc-plan-seg" role="group" aria-label="Block ${i + 1} subject" data-i="${i}">${PLAN_SUBJECTS.map((x) =>
            `<button type="button" data-value="${x}" aria-pressed="${x === s}">${NAME[x]}</button>`).join('')}</div>
          <button type="button" class="cg-key sc-plan-del" data-i="${i}" aria-label="Remove block ${i + 1}" ${n === 1 ? 'disabled' : ''}>${icon('close')}</button>
        </div>`).join('')}
        <button type="button" class="cg-row has-icon" id="planAdd" ${n >= MAX_BLOCKS ? 'disabled' : ''}><span class="cg-row-icon">${icon('plus')}</span>
          <span class="cg-row-text"><span class="cg-row-label">Add a block</span><span class="cg-row-sub">${n >= MAX_BLOCKS ? `${MAX_BLOCKS} is the most` : `Up to ${MAX_BLOCKS}`}</span></span></button>
      </div>
      <p class="cg-foot">${n} block${n === 1 ? '' : 's'} × ${esc(String(rules().blockMinutes))} min = ${hm(n * rules().blockMinutes * 60)} of focused study. Breaks, game time and fun videos fit in between on their own. Changes save right away, even in the middle of his day. To cut his day short, remove blocks: if he's in one you remove, it ends right away and he moves on. A lesson you send still takes over every block until it's done.</p>`;
    el.querySelectorAll('[data-preset]').forEach((b) => { b.onclick = () => {
      const k = b.dataset.preset, next = PRESETS[k](plan.length);
      if (next.join() === plan.join()) return;
      const a = next.filter((x) => x === 'algebra').length;
      set(next, k === 'mix' ? `Mix: ${a} Algebra, then ${next.length - a} Biology` : `All ${next.length === 1 ? '' : next.length + ' '}blocks are now ${NAME[k]}`);
    }; });
    el.querySelectorAll('.sc-plan-del').forEach((b) => { b.onclick = () => {
      const i = Number(b.dataset.i);
      set(plan.filter((_, j) => j !== i), `Block ${i + 1} removed`);
    }; });
    el.querySelector('#planAdd').onclick = () => {
      if (plan.length >= MAX_BLOCKS) return;
      const s = plan[plan.length - 1];
      set([...plan, s], `Block ${plan.length + 1} added (${NAME[s]})`);
    };
    refreshSegs();
  }

  // The segmented controls (calm-glass.js) report a tap as a bubbling "cg-change" event.
  el.addEventListener('cg-change', (e) => {
    const seg = e.target.closest('.sc-plan-seg'); if (!seg) return;
    const i = Number(seg.dataset.i), v = e.detail && e.detail.value;
    if (!PLAN_SUBJECTS.includes(v) || plan[i] === v) return;
    const next = plan.slice(); next[i] = v;
    set(next, `Block ${i + 1} is now ${NAME[v]}`);
  });

  async function set(next, msg) {
    const prev = plan; plan = next; draw();
    try { await save(next); } catch { plan = prev; draw(); toast('Didn\'t save — check the Wi-Fi'); return; }
    toast(msg, { label: 'Undo', action: async () => {
      plan = prev; draw();
      try { await save(prev); toast('Undone'); } catch { toast('Didn\'t save — check the Wi-Fi'); }
    } });
  }

  draw();
  return { refresh: () => { if (el.isConnected) draw(); } };
}
