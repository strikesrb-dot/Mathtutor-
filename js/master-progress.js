// Master → Progress, three parts in a small segmented control:
//   Lessons — every unit and lesson, his scores and written answers, Send to him / Reset (with Undo)
//   Missed  — every missed quiz question with Claude's breakdown (js/misses.js)
//   History — the activity log export for Claude, this weekend, past days, and today's flag log

import { todayKey, lessonStage, currentLesson, videosDone, doneCount } from './curriculum.js';
import { esc, hm, toast, icon, bar } from './ui.js';
import { openLogSheet } from './log-export.js';
import { missesHTML, wireMisses } from './misses.js';
import { FLAG_LABEL, STAGE_LABEL, stepLabel, row, flagSum, plural, dayName, clock, allLessons, focusInfo, focusCard, wireFocus } from './master-shared.js';

const PARTS = [['lessons', 'Lessons'], ['missed', 'Missed'], ['history', 'History']];

export function drawProgress(body, M) {
  const part = M.ui.part || 'lessons';
  body.innerHTML = `<div class="cg-seg sc-subtabs" role="group" aria-label="Progress">${PARTS.map(([p, label]) =>
    `<button type="button" data-p="${p}" aria-pressed="${p === part}">${label}</button>`).join('')}</div><div id="pbody"></div>`;
  body.querySelectorAll('.sc-subtabs > button').forEach((b) => { b.onclick = () => { if (M.ui.part === b.dataset.p) return; M.ui.part = b.dataset.p; M.render(); window.scrollTo(0, 0); }; });
  const pb = body.querySelector('#pbody');
  if (part === 'lessons') lessons(pb, M);
  if (part === 'missed') { pb.innerHTML = missesHTML(M.S.misses); wireMisses(pb, M.S.misses, () => M.render()); }
  if (part === 'history') history(pb, M);
}

// ─────────────── Lessons ───────────────
function lessons(body, M) {
  const { S, cur, ui } = M;
  if (!ui.unitsSeeded) {   // open the unit he is working in
    ui.unitsSeeded = true;
    for (const subj of ['algebra', 'biology']) { const L = currentLesson(cur[subj], S.lessons); if (L) ui.openUnits.add(L.u.id); }
    const fi = focusInfo(M); if (fi) ui.openUnits.add(fi.l.u.id);
  }
  body.innerHTML = focusCard(M) + ['algebra', 'biology'].map((subj) => {
    const course = cur[subj];
    const now = currentLesson(course, S.lessons);
    const done = doneCount(course.lessons, S.lessons);
    return `<p class="cg-caption">${esc(course.name)} — ${done} of ${course.lessons.length} lessons done</p>
      <div class="cg-group">${course.units.map((u) => {
        const uDone = doneCount(u.lessons, S.lessons);
        const isOpen = ui.openUnits.has(u.id);
        const skipped = course.startUnit && u.n < course.startUnit;
        return `
          <button type="button" class="cg-row unit-row ${now && now.u.id === u.id ? 'sc-current' : ''}" data-u="${u.id}" aria-expanded="${isOpen}">
            <span class="cg-row-text"><span class="cg-row-label">Unit ${u.n}: ${esc(u.title)}</span><span class="cg-row-sub">${skipped ? 'Skipped (before the start unit)' : `${uDone} of ${u.lessons.length} lessons done`}</span>${skipped ? '' : bar((uDone / u.lessons.length) * 100)}</span>
            <span class="cg-chev ${isOpen ? 'is-open' : ''}"></span>
          </button>
          ${isOpen ? u.lessons.map((l) => lessonRows(l, now, M)).join('') : ''}`;
      }).join('')}</div>`;
  }).join('');
  body.querySelectorAll('.unit-row').forEach((b) => { b.onclick = () => { const k = b.dataset.u; ui.openUnits.has(k) ? ui.openUnits.delete(k) : ui.openUnits.add(k); M.render(); }; });
  body.querySelectorAll('.lesson-row').forEach((b) => { b.onclick = () => { const k = b.dataset.k; ui.open.has(k) ? ui.open.delete(k) : ui.open.add(k); M.render(); }; });
  wireFocus(body, M);
  body.querySelectorAll('[data-send]').forEach((b) => { b.onclick = (e) => { e.stopPropagation(); sendLesson(b.dataset.send, M); }; });
  // Destructive: do it at once, offer Undo (Calm Glass rule 12 — no confirm dialogs).
  body.querySelectorAll('[data-reset]').forEach((b) => {
    b.onclick = async () => {
      const key = b.dataset.reset;
      const before = JSON.parse(JSON.stringify(S.lessons[key] || {}));
      await M.store.resetLesson(M.sid, key);
      toast('Lesson reset', { action: () => M.store.saveLesson(M.sid, key, before).then(() => toast('Restored')), label: 'Undo' });
    };
  });
}

function lessonRows(l, now, M) {
  const { S, cur } = M;
  const p = S.lessons[l.key] || {};
  const stage = lessonStage(l, p);
  const q = p.quiz || {};
  const isOpen = M.ui.open.has(l.key);
  const status = p.timeSec || stage !== 'watch' ? STAGE_LABEL[stage] : 'Not started';
  const sub = `${status} · ${p.timeSec ? hm(p.timeSec) + ' · ' : ''}${videosDone(l, p)}/${l.videos.length} videos${q.best != null ? ` · quiz ${q.best}%` : ''}${q.attempts ? ` (${q.attempts.length} ${q.attempts.length === 1 ? 'try' : 'tries'})` : ''}`;
  const many = q.passed && (q.passedOnTry || (q.attempts || []).length) >= cur.rules.manyTries;
  const sent = S.settings.focus && S.settings.focus.key === l.key;
  return `
    <button type="button" class="cg-row has-icon lesson-row ${now && now.key === l.key ? 'sc-current' : ''}" data-k="${l.key}" aria-expanded="${isOpen}">
      <span class="cg-row-icon">${stage === 'done' ? `<span class="sc-on">${icon('check')}</span>` : `<span class="sc-n cg-num">${l.i}</span>`}</span>
      <span class="cg-row-text"><span class="cg-row-label">${esc(l.title)}</span><span class="cg-row-sub">${sub}</span>${many ? `<span class="cg-row-sub sc-flagged">${icon('flag')} Passed only on try ${q.passedOnTry || q.attempts.length} — check his written answer</span>` : ''}${sent && stage !== 'done' ? `<span class="cg-row-sub sc-flagged">${icon('flag')} Sent to him — his only focus until he finishes it</span>` : ''}</span>
      <span class="cg-chev ${isOpen ? 'is-open' : ''}"></span>
    </button>
    ${isOpen ? `<div class="cg-row cg-row-tall lesson-detail"><div class="cg-row-block">
      ${p.realLife && p.realLife.answer
        ? `<p class="cg-meta">His real-life answer</p><blockquote class="sc-quote">${esc(p.realLife.answer)}</blockquote><p class="cg-meta">Question: ${esc(l.realLife.prompt)}</p>`
        : '<p class="cg-meta">No real-life answer yet.</p>'}
      ${q.attempts && q.attempts.length ? `<p class="cg-meta">Quiz tries</p><ul class="sc-tries">${q.attempts.map((a) => `<li><span>${new Date(a.at).toLocaleString([], { weekday: 'short', hour: 'numeric', minute: '2-digit' })}</span><b class="cg-num ${a.pct >= cur.rules.passPct ? 'sc-pass' : ''}">${a.right}/${a.total} · ${a.pct}%${a.pct >= cur.rules.passPct ? ' ✓' : ''}</b></li>`).join('')}</ul>` : ''}
      <div class="cg-btns">${sent && stage !== 'done' ? '<span class="cg-meta">Sent to him ✓</span>' : `<button type="button" class="cg-btn cg-btn-glass" data-send="${l.key}">Send to him</button>`}
        <button type="button" class="cg-btn cg-btn-plain sc-danger-text" data-reset="${l.key}">Reset this lesson</button></div>
      <p class="cg-foot">Send to him: every study block opens this lesson until he finishes it. Then he goes back to his normal order.${stage === 'done' ? ' He already finished it, so sending it makes him do it again (his old scores are kept).' : ''}</p>
    </div></div>` : ''}`;
}

async function sendLesson(key, M) {
  const { S, store, sid } = M;
  const l = allLessons(M.cur).find((x) => x.key === key); if (!l) return;
  const p = S.lessons[key] || {}, before = JSON.parse(JSON.stringify(p)), prevFocus = S.settings.focus || null;
  const finished = lessonStage(l, p) === 'done';
  // Already finished: he does it again from the start. His old quiz scores and answer are kept under history.
  if (finished) await store.replaceLesson(sid, key, { timeSec: p.timeSec || 0,
    history: { attempts: (p.quiz || {}).attempts || [], best: (p.quiz || {}).best || 0, completedAt: p.completedAt || 0, realLife: p.realLife || null, redoAt: Date.now() } });
  await store.saveSettings({ focus: { key, at: Date.now() } });
  M.chat.say(`I sent you a lesson: "${l.title}". It's your only focus until you finish it.`);
  toast(finished ? 'Sent. He finished it before, so he does it again.' : 'Sent. It\'s his only focus until he finishes it.', { label: 'Undo', time: 8000, action: async () => {
    if (finished) await store.replaceLesson(sid, key, before);
    await store.saveSettings({ focus: prevFocus }); toast('Undone');
  } });
}

// ─────────────── History ───────────────
function history(body, M) {
  const { S, store, sid, chat } = M;
  const d = S.days[todayKey()] || {};
  const daySub = (dd) => `${dd.openSec ? hm(dd.openSec) + ' on the app · ' : ''}${plural(Object.keys(dd.blocksDone || {}).length, 'block')} done · ${flagSum(dd)} flags`;
  let a = 0, o = 0;
  for (const dd of Object.values(S.days)) { a += dd.activeSec || 0; o += dd.openSec || 0; }
  const allTime = a || o ? `All time: ${hm(a)} focused${o ? ` · ${hm(o)} on the app` : ''}.` : '';
  const now = new Date(), sat = new Date(now); sat.setDate(now.getDate() - ((now.getDay() + 1) % 7));
  const sun = new Date(sat); sun.setDate(sat.getDate() + 1);
  const weekend = [sat, sun].map((x) => { const k = todayKey(x); return [k, S.days[k]]; });

  body.innerHTML = `
    <div class="cg-group sc-log-row"><button type="button" class="cg-row has-icon" id="logBtn"><span class="cg-row-icon">${icon('list')}</span>
      <span class="cg-row-text"><span class="cg-row-label">Activity log for Claude</span><span class="cg-row-sub">Every screen, clock stop and quiz answer. Export it and paste it into Claude for feedback.</span></span><span class="cg-chev"></span></button></div>

    <p class="cg-caption">This weekend</p>
    <ul class="cg-group">${weekend.map(([key, dd]) => row({ ic: 'clock', label: dayName(key), sub: dd ? daySub(dd) : 'No study', value: hm((dd || {}).activeSec || 0) })).join('')}</ul>

    <p class="cg-caption">Past days</p>
    <ul class="cg-group">${Object.keys(S.days).sort().reverse().slice(0, 21).map((k) => row({ label: dayName(k), sub: daySub(S.days[k]), value: hm(S.days[k].activeSec || 0) })).join('') || row({ label: 'Nothing yet' })}</ul>
    <p class="cg-foot">The time on the right is focused time (the part that counts). ${allTime}</p>

    <p class="cg-caption">Today's red flags, one by one</p>
    <ul class="cg-group">${(d.events || []).slice().reverse().slice(0, 40).map((e) => row({
      ic: 'flag', label: FLAG_LABEL[e.type] || esc(e.type), sub: e.step ? stepLabel(e.step) : '', value: clock(e.t),
    })).join('') || row({ label: 'Nothing flagged' })}</ul>`;
  body.querySelector('#logBtn').onclick = () => openLogSheet({ store, sid, state: () => ({ cur: M.cur, days: S.days, lessons: S.lessons, msgs: chat.messages() }) });
}
