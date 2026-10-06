// Master view → the Points tab (owner request 2026-10-05): what he's owed, this week / all time / paid, his level and
// streak, "Mark $X paid" (with Undo), add or take away points with a reason (with Undo), and the recent history.
// The rules and the math are in js/points.js; the values in content/schedule.js → points.

import { esc, icon, toast } from './ui.js';
import { totals, money, fmt, level, currentStreak, badges } from './points.js';

const when = (t) => { const d = new Date(t); return `${d.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}, ${d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`; };
const weekStart = () => { const d = new Date(); d.setHours(0, 0, 0, 0); d.setDate(d.getDate() - ((d.getDay() + 6) % 7)); return d.getTime(); };   // Monday

export function pointsCardHTML(points = {}, payouts = {}, rules) {
  const P = rules.points, t = totals(points, payouts), lv = level(t.lifetime, P.levelEvery), streak = currentStreak(points, rules.studyDays);
  const week = Object.values(points).filter((p) => (p.at || 0) >= weekStart()).reduce((a, p) => a + (Number(p.pts) || 0), 0);
  const hist = [
    ...Object.entries(points).map(([id, p]) => ({ at: p.at || 0, label: p.kind === 'adjust' ? `You: ${p.label}` : p.label, value: `${p.pts > 0 ? '+' : ''}${fmt(p.pts)}`, id })),
    ...Object.values(payouts).map((p) => ({ at: p.at || 0, label: `Paid him ${money(p.pts, P.perDollar)}`, value: `−${fmt(p.pts)}` })),
  ].sort((a, b) => b.at - a.at).slice(0, 10);
  return `<p class="cg-caption">What he's owed</p>
    <section class="cg-card sc-points">
      <div class="sc-points-top"><b class="cg-num sc-points-big">${money(t.owed, P.perDollar)}</b><span class="cg-meta">he's owed · ${fmt(t.owed)} points</span></div>
      <p class="cg-meta">This week ${fmt(week)} pts · all time ${fmt(t.lifetime)} pts (${money(t.lifetime, P.perDollar)}) · paid so far ${money(t.paid, P.perDollar)}</p>
      <p class="cg-meta sc-points-line">${icon('flame')}<span>${streak} study day${streak === 1 ? '' : 's'} in a row</span></p>
      <p class="cg-meta sc-points-line">${icon('star')}<span>Level ${lv.n} · ${esc(lv.name)}</span></p>
      <div class="cg-btns"><button type="button" class="cg-btn cg-btn-glass" id="ptsPaid" ${t.owed ? '' : 'disabled'}>Mark ${money(t.owed, P.perDollar)} paid</button>
        <button type="button" class="cg-btn cg-btn-plain" id="ptsAdjOpen">Add or take away points</button></div>
      <form class="sc-points-adj" id="ptsAdj" hidden>
        <label class="cg-field"><input name="n" type="number" inputmode="numeric" step="1" min="-5000" max="5000" placeholder="Points, like 100 or -50" aria-label="Points"></label>
        <label class="cg-field"><input name="why" maxlength="80" placeholder="Reason (he sees it)" aria-label="Reason"></label>
        <button class="cg-btn cg-btn-glass" type="submit">Save</button>
      </form>
    </section>
    <p class="cg-caption">Recent</p>
    <ul class="cg-group sc-points-recent">${hist.map((h) => `<li class="cg-row"><span class="cg-row-text"><span class="cg-row-label">${esc(h.label)}</span><span class="cg-row-sub">${when(h.at)}</span></span><span class="cg-row-value cg-num">${h.value}</span></li>`).join('')
      || '<li class="cg-row"><span class="cg-row-text"><span class="cg-row-label">No points yet</span><span class="cg-row-sub">He earns them as he finishes lessons, quizzes and full days</span></span></li>'}</ul>
    <p class="cg-caption">His badges</p>
    <div class="cg-chips sc-badges">${badges(points, P).map((x) => `<span class="cg-chip ${x.got ? 'is-on' : ''}">${x.got ? icon('star') : ''}${esc(x.name)}</span>`).join('')}</div>
    <p class="cg-foot">${P.perDollar} points = $1. Lesson ${P.lesson} · quiz 1st try +${P.quizFirst}, 2nd +${P.quizSecond} · perfect quiz +${P.perfect} · full day +${P.fullDay} · focus day (never left the app) +${P.focusDay} · streak +${P.streak[2]}/+${P.streak[3]}/+${P.streak[P.streak.length - 1]} · full weekend +${P.weekend} · unit +${P.unit} · weekday session +${P.weekdaySession}. No penalties, no cap.</p>`;
}

// deps: { store, sid, points(), payouts(), rules, redraw() (after the add/take-away form is saved and closed) }
export function wirePointsCard(root, { store, sid, points, payouts, rules, redraw = () => {} }) {
  const paid = root.querySelector('#ptsPaid');
  if (paid) paid.onclick = async () => {
    const t = totals(points(), payouts());
    if (!t.owed) return;
    let id;
    try { id = await store.addPayout(sid, { pts: t.owed, at: Date.now() }); } catch { return toast('Didn\'t save — check the Wi-Fi'); }
    toast(`Marked ${money(t.owed, rules.points.perDollar)} as paid`, { label: 'Undo', action: () => store.removePayout(sid, id).then(() => toast('Undone')).catch(() => toast('Didn\'t save')) });
  };
  const form = root.querySelector('#ptsAdj'), open = root.querySelector('#ptsAdjOpen');
  if (open) open.onclick = () => { form.hidden = !form.hidden; if (!form.hidden) form.querySelector('[name=n]').focus(); };
  if (form) form.onsubmit = async (e) => {
    e.preventDefault();
    const n = Math.round(Number(form.n.value)), why = form.why.value.trim() || (n > 0 ? 'Bonus' : 'Correction');
    if (!n || Math.abs(n) > 5000) return toast('Type a number of points, like 100 or -50');
    const id = `adj-${Date.now()}`;
    try { await store.awardPoints(sid, id, { pts: n, kind: 'adjust', label: why, at: Date.now() }); } catch { return toast('Didn\'t save — check the Wi-Fi'); }
    form.reset(); form.hidden = true;
    if (document.activeElement && form.contains(document.activeElement)) document.activeElement.blur();
    redraw();
    toast(`${n > 0 ? 'Added' : 'Took away'} ${fmt(Math.abs(n))} points`, { label: 'Undo', action: () => store.removePoints(sid, id).then(() => toast('Undone')).catch(() => toast('Didn\'t save')) });
  };
}
