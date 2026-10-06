// Shared pieces of the master view (js/master*.js): labels, list rows, dates, and the "Sent to him" lesson card.
// M = the master context built in js/master.js: { S (his data), cur (curriculum), store, sid, chat, go(tab, sub), render(), ui (screen state) }.

import { esc, icon, toast } from './ui.js';
import { lessonStage } from './curriculum.js';

export const FLAG_LABEL = {
  leftApp: 'Left the app',
  missedCheck: 'Missed "Still watching?"',
  pausedLong: 'Video paused too long',
  idle: 'Went idle',
  skipTry: 'Tried to skip ahead',
  videoError: 'A video wouldn\'t play',
  manyTries: 'Passed a quiz only after 3+ tries',
  stalled: 'Stalled on a screen (time limit hit)',
};
export const STAGE_LABEL = { watch: 'Watching', learn: 'Reading', quiz: 'Quiz', real: 'Real-life answer', done: 'Done' };
// A1… Algebra blocks, B1… Biology blocks, F fun videos, R breaks, G game time (js/plan.js), X bonus practice.
const STEP_KIND = { A: 'Algebra · Block ', B: 'Biology · Block ', F: 'Fun video ', R: 'Break ', G: 'Game time ' };
export function stepLabel(id) { const m = /^([ABFRG])(\d+)$/.exec(id || ''); return id === 'X' ? 'Extra practice' : m ? STEP_KIND[m[1]] + m[2] : esc(id || ''); }

export function row({ ic, label, sub = '', value = '', cls = '', tag = 'li', attrs = '', chev = false }) { return `
  <${tag} ${tag === 'button' ? 'type="button" ' : ''}class="cg-row ${ic ? 'has-icon' : ''} ${cls}" ${attrs}>
    ${ic ? `<span class="cg-row-icon">${icon(ic)}</span>` : ''}
    <span class="cg-row-text"><span class="cg-row-label">${label}</span>${sub ? `<span class="cg-row-sub">${sub}</span>` : ''}</span>
    ${value ? `<span class="cg-row-value">${value}</span>` : ''}${chev ? '<span class="cg-chev"></span>' : ''}
  </${tag}>`; }

export const flagSum = (dd) => Object.values((dd || {}).flags || {}).reduce((a, b) => a + b, 0);
export const plural = (n, w) => `${n} ${w}${n === 1 ? '' : 's'}`;
export function dayName(k) { const [y, m, dd] = k.split('-').map(Number); return new Date(y, m - 1, dd).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' }); }
export function agoText(m) { return m < 60 ? `${m} min ago` : m < 1440 ? `${Math.round(m / 60)} h ago` : `${Math.round(m / 1440)} days ago`; }
export const clock = (t) => new Date(t).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
export const startOfToday = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d.getTime(); };

export function allLessons(cur) { return [...cur.algebra.units, ...cur.biology.units].flatMap((u) => u.lessons); }
export function lessonTitle(cur, key) { return allLessons(cur).find((l) => l.key === key)?.title || key; }

// ── A lesson sent to him (settings.focus = { key, at }): his only study until he finishes it (curriculum.js focusLesson) ──
export function focusInfo(M) {
  const f = M.S.settings.focus; if (!f || !f.key) return null;
  const l = allLessons(M.cur).find((x) => x.key === f.key); if (!l) return null;
  const stage = lessonStage(l, M.S.lessons[l.key]);
  return { l, stage, done: stage === 'done' };
}
export function focusCard(M) {
  const fi = focusInfo(M); if (!fi) return '';
  return `<p class="cg-caption">Sent to him</p><div class="cg-group">
    ${row({ tag: 'div', ic: fi.done ? 'check' : 'flag', label: esc(fi.l.title), cls: fi.done ? 'sc-done' : '',
      sub: fi.done ? 'He finished it. He is back on his normal lessons.' : `Unit ${fi.l.u.n} · his only focus until he finishes it · now on: ${STAGE_LABEL[fi.stage]}` })}
    <button type="button" class="cg-row" id="clearFocus"><span class="cg-row-text"><span class="cg-row-label">${fi.done ? 'Clear this' : 'Cancel: back to his normal lessons'}</span></span></button></div>`;
}
export function wireFocus(body, M) {
  const b = body.querySelector('#clearFocus');
  if (b) b.onclick = async () => {
    const prev = M.S.settings.focus || null;
    await M.store.saveSettings({ focus: null });
    toast('Cleared', { action: () => M.store.saveSettings({ focus: prev }), label: 'Undo' });
  };
}
