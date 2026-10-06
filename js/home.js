// Student home screen, in four tabs under the header (owner request 2026-10-05: "make the UI organized"):
//   Today   — greeting, today's focused-time ring + Start, the lesson his brother sent, his points in one row, today's plan
//   Courses — units and lessons, done / now / coming up (read-only: he always goes forward in order)
//   Points  — balance, level, streak, badges, how to earn, recent points (js/points.js pageHTML)
//   Chat    — messages with his brother (js/chat.js panel)

import { dayStatus, currentLesson, doneCount, lessonStage, STAGES } from './curriculum.js';
import { esc, hm, toast, unlockAudio, icon, bar, refreshSegs } from './ui.js';
import { STUDENT_NAME } from './config.js';

export const SUBJECT = {
  algebra: { name: 'Algebra 1', icon: 'algebra' },
  biology: { name: 'Biology', icon: 'biology' },
  fact: { name: 'Did you know?', icon: 'globe' },
};
const TABS = [['today', 'Today'], ['courses', 'Courses'], ['points', 'Points'], ['chat', 'Chat']];
const LIVE = { today: 'Looking at today\'s plan', courses: 'Looking at his courses', points: 'Looking at his points', chat: 'Reading messages' };
const openUnits = new Set();   // Courses: which units are open (the ones he's in start open)
let seeded = false;

function nextLabel(s) {
  if (s.type === 'block') return `Next: ${SUBJECT[s.subject].name}`;
  if (s.type === 'break') return 'Break time';
  if (s.type === 'game') return 'Game time';
  return 'Reward video time';
}
const stageLabel = (l, p) => (STAGES.find((s) => s.key === lessonStage(l, p)) || STAGES[0]).label;

// deps: { cur, lessons, day, chat, tracker, onSignOut, points, focus (the lesson his brother sent, or null), start(stepId), extra(), tab, setTab(tab) }
export function renderHome(root, deps) {
  const { cur, day, chat, tracker, onSignOut, points, tab = 'today', setTab } = deps;
  const st = dayStatus(cur.rules, day);
  const d = new Date();
  const isStudyDay = cur.rules.studyDays.includes(d.getDay());
  const scrollY = window.scrollY;

  root.innerHTML = `
    <header class="cg-header">
      <h1 class="cg-header-title">Study Coach<small>${d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })} · ${isStudyDay ? 'Study day' : 'Bonus day'}</small></h1>
      <button class="cg-key cg-key-end" type="button" id="me" aria-label="Account">${icon('person')}</button>
    </header>
    <main class="cg-content sc-main">
      <div class="cg-seg sc-tabs" role="group" aria-label="Section">${TABS.map(([t, label]) =>
        `<button type="button" data-t="${t}" aria-pressed="${t === tab}">${t === 'chat' ? chat.tabLabel() : label}</button>`).join('')}</div>
      <div id="hbody"></div>
    </main>`;
  const body = root.querySelector('#hbody');
  if (tab === 'today') today(body, deps, st);
  if (tab === 'courses') body.innerHTML = coursesHTML(deps);
  if (tab === 'points') body.innerHTML = points.pageHTML();
  if (tab === 'chat') chat.panel(body);

  root.querySelectorAll('.sc-tabs > button').forEach((b) => { b.onclick = () => { if (b.dataset.t !== tab) setTab(b.dataset.t); }; });
  root.querySelectorAll('[data-go]').forEach((b) => { b.onclick = () => setTab(b.dataset.go); });
  root.querySelectorAll('[data-u]').forEach((b) => { b.onclick = () => { const k = b.dataset.u; openUnits.has(k) ? openUnits.delete(k) : openUnits.add(k); setTab('courses', true); }; });
  chat.wire(root);
  root.querySelector('#me').onclick = () => toast(`Signed in as ${STUDENT_NAME}`, { action: onSignOut, label: 'Sign out' });
  tracker.setLive({ view: 'home', title: 'Home screen', lesson: '', sub: '', stage: '', pos: '',
    detail: tab !== 'today' ? LIVE[tab] : st.allDone ? 'Finished today — on the home screen' : `${LIVE.today} (next: ${st.current ? nextLabel(st.current).replace('Next: ', '') : '—'})` }, true);
  refreshSegs();
  window.scrollTo(0, scrollY);
}

// ─────────────── Today ───────────────
function today(body, { cur, lessons, day, points, focus, start, extra }, st) {
  const blocks = cur.rules.plan.length, facts = cur.rules.steps.filter((s) => s.type === 'fact').length;
  const goal = cur.rules.blockMinutes * 60 * blocks;
  const active = day.activeSec || 0;
  const pct = Math.min(100, Math.round((active / goal) * 100));
  // A break and game time follow each block; they're folded into that block's row so the list stays short.
  const groups = [];
  for (const s of st.list) {
    if ((s.type === 'break' || s.type === 'game') && groups.length) groups[groups.length - 1].after.push(s);
    else groups.push({ s, after: [] });
  }
  const planRow = ({ s, after }) => {
    const now = st.current && [s, ...after].find((x) => x.id === st.current.id);
    const allDone = s.done && after.every((a) => a.done);
    let ic = 'globe', label = 'Did you know? video', sub = s.done ? 'Done' : 'Reward video';
    if (s.type === 'block') { ic = SUBJECT[s.subject].icon; label = `${SUBJECT[s.subject].name} · Block ${s.n}`; sub = s.done ? 'Done' : `${Math.floor(s.sec / 60)} of ${cur.rules.blockMinutes} min`; }
    if (s.type === 'break') { ic = 'cup'; label = `Break · ${cur.rules.breakMinutes} min`; }
    if (s.type === 'game') { ic = 'play'; label = `Game time · ${cur.rules.gameMinutes} min`; }
    if (after.length) {
      const what = [after.some((a) => a.type === 'break') && `${cur.rules.breakMinutes}-min break`, after.some((a) => a.type === 'game') && 'game'].filter(Boolean).join(' + ');
      sub += now && now !== s ? ` · now: ${now.type === 'break' ? 'your break' : 'game time'}` : allDone ? '' : ` · then a ${what}`;
    }
    return `<li class="cg-row has-icon sc-step ${now ? 'sc-current' : ''}" ${now ? 'aria-current="step"' : ''}>
      <span class="cg-row-icon">${icon(ic)}</span>
      <span class="cg-row-text"><span class="cg-row-label">${label}</span><span class="cg-row-sub">${sub}</span>
        ${s.type === 'block' && !s.done && s.sec > 0 ? bar((s.sec / s.need) * 100) : ''}</span>
      ${allDone ? `<span class="cg-check sc-on">${icon('check')}</span>` : now ? `<span class="cg-row-value">${now === s ? 'Next' : now.type === 'break' ? 'Break' : 'Game'}</span>` : ''}
    </li>`;
  };

  body.innerHTML = `
    <h2 class="cg-title1 sc-hello">As-salamu alaykum, ${esc(STUDENT_NAME)}</h2>
    <section class="cg-card sc-hero">
      <div class="sc-ring" style="--p:${pct}" role="img" aria-label="${hm(active)} of ${hm(goal)} focused time"><div><b class="cg-num">${hm(active)}</b><span class="cg-meta">of ${hm(goal)}</span></div></div>
      <div class="sc-hero-text">
        <h3 class="cg-title2">${st.allDone ? 'MashaAllah — today is done' : focus ? 'Your brother sent you a lesson' : st.current ? nextLabel(st.current) : ''}</h3>
        <p class="cg-meta">${focus ? `"${esc(focus.lesson.title)}" is your only focus until it's done. Every study block opens it.` : st.allDone ? `${blocks === 1 ? 'Your block' : `All ${blocks} blocks`} and ${facts === 1 ? 'the fun video' : 'both fun videos'} are finished. Proud of you.` : 'Only real, focused time counts. Stay on the app and keep the video playing.'}</p>
        ${st.allDone ? `<button type="button" class="cg-btn cg-btn-strong cg-btn-block" id="extra">${focus ? 'Finish the lesson he sent (bonus)' : 'Extra practice (bonus)'}</button>` : `<button type="button" class="cg-btn cg-btn-strong cg-btn-block" id="go">${active > 0 ? 'Continue' : 'Start'}</button>`}
      </div>
    </section>
    ${focus ? `<p class="cg-caption">Sent by your brother</p><ul class="cg-group"><li class="cg-row has-icon sc-current">
      <span class="cg-row-icon">${icon(SUBJECT[focus.subject].icon)}</span>
      <span class="cg-row-text"><span class="cg-row-label">${esc(focus.lesson.title)}</span>
        <span class="cg-row-sub">${SUBJECT[focus.subject].name} · Unit ${focus.lesson.u.n} · now: ${stageLabel(focus.lesson, lessons[focus.lesson.key])}</span></span>
      </li></ul>` : ''}
    ${points.rowHTML()}
    <p class="cg-caption">Today's plan</p>
    <ul class="cg-group sc-plan">${groups.map(planRow).join('')}</ul>`;
  const goBtn = body.querySelector('#go');
  if (goBtn) goBtn.onclick = () => { unlockAudio(); start(st.current.id); };
  const ex = body.querySelector('#extra');
  if (ex) ex.onclick = () => { unlockAudio(); extra(); };
}

// ─────────────── Courses ───────────────
function coursesHTML({ cur, lessons, focus }) {
  if (!seeded) {
    seeded = true;
    for (const subj of ['algebra', 'biology']) { const L = currentLesson(cur[subj], lessons); if (L) openUnits.add(L.u.id); }
    if (focus) openUnits.add(focus.lesson.u.id);
  }
  return ['algebra', 'biology'].map((subj) => {
    const course = cur[subj], now = currentLesson(course, lessons), done = doneCount(course.lessons, lessons);
    const units = course.units.filter((u) => !(course.startUnit && u.n < course.startUnit));   // units his brother skipped don't show
    return `<p class="cg-caption">${SUBJECT[subj].name} — ${done} of ${course.lessons.length} lessons done</p>
      <div class="cg-group sc-course">${units.map((u) => {
        const uDone = doneCount(u.lessons, lessons), isOpen = openUnits.has(u.id), here = now && now.u.id === u.id;
        return `<button type="button" class="cg-row unit-row ${here ? 'sc-current' : ''}" data-u="${u.id}" aria-expanded="${isOpen}">
            <span class="cg-row-text"><span class="cg-row-label">Unit ${u.n}: ${esc(u.title)}</span>
              <span class="cg-row-sub">${uDone === u.lessons.length ? 'Finished' : here ? `You're here · ${uDone} of ${u.lessons.length} done` : `${uDone} of ${u.lessons.length} done`}</span>${bar((uDone / u.lessons.length) * 100)}</span>
            <span class="cg-chev ${isOpen ? 'is-open' : ''}"></span></button>
          ${isOpen ? u.lessons.map((l) => {
            const p = lessons[l.key] || {}, isDone = lessonStage(l, p) === 'done', isNow = now && now.key === l.key, sent = focus && focus.lesson.key === l.key;
            const sub = [isDone ? 'Done' : isNow ? `Now: ${stageLabel(l, p)}` : '', sent && !isDone ? 'Sent by your brother' : ''].filter(Boolean).join(' · ');
            return `<div class="cg-row has-icon ${isNow || (sent && !isDone) ? 'sc-current' : ''}">
              <span class="cg-row-icon">${isDone ? `<span class="sc-on">${icon('check')}</span>` : `<span class="sc-n cg-num">${l.i}</span>`}</span>
              <span class="cg-row-text"><span class="cg-row-label">${esc(l.title)}</span>${sub ? `<span class="cg-row-sub">${sub}</span>` : ''}</span></div>`;
          }).join('') : ''}`;
      }).join('') || '<div class="cg-row"><span class="cg-row-text"><span class="cg-row-label">No lessons yet</span></span></div>'}</div>`;
  }).join('') + '<p class="cg-foot">Lessons open in order. Tap Start on Today to keep going.</p>';
}
