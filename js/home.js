// Student home screen: greeting, today's focused-time ring, today's plan, his two courses, and messages.

import { dayStatus, currentLesson, doneCount } from './curriculum.js';
import { esc, hm, toast, unlockAudio, icon, bar } from './ui.js';
import { STUDENT_NAME } from './config.js';

export const SUBJECT = {
  algebra: { name: 'Algebra 1', icon: 'algebra' },
  biology: { name: 'Biology', icon: 'biology' },
  fact: { name: 'Did you know?', icon: 'globe' },
};

function pctOf(subject, lessons) { return subject.lessons.length ? (doneCount(subject.lessons, lessons) / subject.lessons.length) * 100 : 0; }
function nextLabel(s) {
  if (s.type === 'block') return `Next: ${SUBJECT[s.subject].name}`;
  if (s.type === 'break') return 'Break time';
  if (s.type === 'game') return 'Game time';
  return 'Reward video time';
}

// deps: { cur, lessons, day, chat, tracker, onSignOut, start(stepId), extra() }
export function renderHome(root, { cur, lessons, day, chat, tracker, onSignOut, start, extra }) {
  const st = dayStatus(cur.rules, day);
  const d = new Date();
  const isStudyDay = cur.rules.studyDays.includes(d.getDay());
  const goal = cur.rules.blockMinutes * 60 * 4;
  const active = day.activeSec || 0;
  const pct = Math.min(100, Math.round((active / goal) * 100));
  const blockNo = { A1: 1, A2: 2, B1: 1, B2: 2 };

  const stepRow = (s) => {
    const isCur = st.current && st.current.id === s.id;
    let label, sub = '', ic;
    if (s.type === 'block') { ic = SUBJECT[s.subject].icon; label = `${SUBJECT[s.subject].name} · Block ${blockNo[s.id]}`; sub = s.done ? 'Done' : `${Math.floor(s.sec / 60)} of ${cur.rules.blockMinutes} min`; }
    if (s.type === 'break') { ic = 'cup'; label = `Break · ${cur.rules.breakMinutes} min`; sub = s.done ? 'Done' : ''; }
    if (s.type === 'fact') { ic = 'globe'; label = 'Did you know? video'; sub = s.done ? 'Done' : 'Reward video'; }
    if (s.type === 'game') { ic = 'play'; label = `Game time · ${cur.rules.gameMinutes} min`; sub = s.done ? 'Done' : 'Slice or Glide'; }
    return `<li class="cg-row has-icon sc-step ${isCur ? 'sc-current' : ''}" ${isCur ? 'aria-current="step"' : ''}>
      <span class="cg-row-icon">${icon(ic)}</span>
      <span class="cg-row-text"><span class="cg-row-label">${label}</span>${sub ? `<span class="cg-row-sub">${sub}</span>` : ''}
        ${s.type === 'block' && !s.done && s.sec > 0 ? bar((s.sec / s.need) * 100) : ''}</span>
      ${s.done ? `<span class="cg-check sc-on">${icon('check')}</span>` : isCur ? '<span class="cg-row-value">Next</span>' : ''}
    </li>`;
  };
  const courseRow = (subject, subj) => {
    const L = currentLesson(subject, lessons);
    const done = doneCount(subject.lessons, lessons);
    return `<li class="cg-row has-icon">
      <span class="cg-row-icon">${icon(SUBJECT[subj].icon)}</span>
      <span class="cg-row-text"><span class="cg-row-label">${SUBJECT[subj].name}${L ? ` — Unit ${L.u.n}: ${esc(L.u.title)}` : ''}</span>
        <span class="cg-row-sub">${L ? `Lesson ${L.i} of ${L.of}: ${esc(L.title)}` : 'Course finished'}</span>
        ${bar(pctOf(subject, lessons))}<span class="cg-row-sub cg-num">${done} of ${subject.lessons.length} lessons done</span></span>
    </li>`;
  };

  root.innerHTML = `
    <header class="cg-header">
      <h1 class="cg-header-title">Study Coach<small>${d.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })} · ${isStudyDay ? 'Study day' : 'Bonus day'}</small></h1>
      <button class="cg-key cg-key-end" id="me" aria-label="Account">${icon('person')}</button>
    </header>
    <main class="cg-content sc-main">
      <h2 class="cg-title1 sc-hello">As-salamu alaykum, ${esc(STUDENT_NAME)}</h2>
      <section class="cg-card sc-hero">
        <div class="sc-ring" style="--p:${pct}" role="img" aria-label="${hm(active)} of ${hm(goal)} focused time"><div><b class="cg-num">${hm(active)}</b><span class="cg-meta">of ${hm(goal)}</span></div></div>
        <div class="sc-hero-text">
          <h3 class="cg-title2">${st.allDone ? 'MashaAllah — today is done' : st.current ? nextLabel(st.current) : ''}</h3>
          <p class="cg-meta">${st.allDone ? 'All 4 blocks and both fun videos are finished. Proud of you.' : 'Only real, focused time counts. Stay on the app and keep the video playing.'}</p>
          ${st.allDone ? '<button class="cg-btn cg-btn-strong cg-btn-block" id="extra">Extra practice (bonus)</button>' : `<button class="cg-btn cg-btn-strong cg-btn-block" id="go">${active > 0 ? 'Continue' : 'Start'}</button>`}
        </div>
      </section>
      <p class="cg-caption">Today's plan</p>
      <ul class="cg-group sc-plan">${st.list.map(stepRow).join('')}</ul>
      <p class="cg-caption">Your courses</p>
      <ul class="cg-group">${courseRow(cur.algebra, 'algebra')}${courseRow(cur.biology, 'biology')}</ul>
      ${chat.rowHTML()}
    </main>`;
  chat.wire(root);
  tracker.setLive({ view: 'home', title: 'Home screen', lesson: '', sub: '', stage: '', pos: '',
    detail: st.allDone ? 'Finished today — on the home screen' : `Looking at today's plan (next: ${st.current ? nextLabel(st.current).replace('Next: ', '') : '—'})` }, true);
  root.querySelector('#me').onclick = () => toast(`Signed in as ${STUDENT_NAME}`, { action: onSignOut, label: 'Sign out' });
  const goBtn = root.querySelector('#go');
  if (goBtn) goBtn.onclick = () => { unlockAudio(); start(st.current.id); };
  const ex = root.querySelector('#extra');
  if (ex) ex.onclick = () => { unlockAudio(); extra(); };
}
