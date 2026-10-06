// Points, levels, streaks and badges (owner request 2026-10-05: "game point system … 100 points = $1 … 200 points for not
// leaving the app … retention bonuses, gamify it"). Values live in content/schedule.js → points.
// Every award is one doc in students/{uid}/points/{id} with a FIXED id — lesson-<key>, quiz-<key>, perfect-<key>,
// unit-<unitId>, day-<date>, focus-<date>, streak-<date>, weekend-<saturday>, weekday-<date> (adj-<time> = added by his
// brother) — so the same thing can never pay twice. Payouts his brother marks: students/{uid}/payouts/{id} { pts, at }.
// Points count from 2026-10-05 on: lessons he finished before don't pay unless his brother adds them by hand.

import { esc, icon, toast, bar } from './ui.js';
import { todayKey } from './curriculum.js';

// ── pure rules (unit-tested in tests/points.test.mjs) ──
const LEVELS = ['Starter', 'Learner', 'Builder', 'Achiever', 'Scholar', 'Expert', 'Master', 'Champion', 'Legend'];
const at12 = (date) => new Date(`${date}T12:00:00`);
export function prevStudyDay(date, studyDays) { const d = at12(date); do { d.setDate(d.getDate() - 1); } while (!studyDays.includes(d.getDay())); return todayKey(d); }
// how many study days in a row, ending on `date`, had the full-day award
export function streakEnding(date, points, studyDays) { let n = 0, d = date; while (points[`day-${d}`] && n < 400) { n += 1; d = prevStudyDay(d, studyDays); } return n; }
export function currentStreak(points, studyDays, today = todayKey()) {
  const isStudy = studyDays.includes(at12(today).getDay());
  return streakEnding(isStudy && points[`day-${today}`] ? today : prevStudyDay(today, studyDays), points, studyDays);
}
export function totals(points = {}, payouts = {}) {
  const list = Object.values(points);
  const earned = list.reduce((a, p) => a + (Number(p.pts) || 0), 0);
  const lifetime = list.reduce((a, p) => a + Math.max(0, Number(p.pts) || 0), 0);
  const paid = Object.values(payouts).reduce((a, p) => a + (Number(p.pts) || 0), 0);
  return { earned, lifetime, paid, owed: Math.max(0, earned - paid) };
}
export const money = (pts, per = 100) => `$${(Math.max(0, pts) / per).toFixed(2)}`;
export const fmt = (n) => Number(n || 0).toLocaleString('en-US');
export function level(lifetime, every = 1000) {
  const n = Math.floor(Math.max(0, lifetime) / every) + 1;
  return { n, name: n <= LEVELS.length ? LEVELS[n - 1] : `${LEVELS[LEVELS.length - 1]} ${n - LEVELS.length + 1}`, into: Math.max(0, lifetime) % every, every };
}
export function badges(points, P) {
  const ids = Object.keys(points), n = (prefix) => ids.filter((k) => k.startsWith(prefix)).length;
  const best = Math.max(0, ...Object.values(points).filter((p) => p.kind === 'streak').map((p) => p.n || 0));
  const lv = level(totals(points).lifetime, P.levelEvery).n;
  return [['First lesson', n('lesson-') >= 1], ['10 lessons', n('lesson-') >= 10], ['25 lessons', n('lesson-') >= 25], ['50 lessons', n('lesson-') >= 50],
    ['Perfect quiz', n('perfect-') >= 1], ['5 perfect quizzes', n('perfect-') >= 5], ['Focus day', n('focus-') >= 1], ['5 focus days', n('focus-') >= 5],
    ['Unit finished', n('unit-') >= 1], ['Full weekend', n('weekend-') >= 1], ['4 days in a row', best >= 4], ['Level 5', lv >= 5]]
    .map(([name, got]) => ({ name, got }));
}
// awards for: a lesson he just finished / a quiz he just passed / a finished day. Each → [{ id, pts, kind, label, n? }]
export function lessonAwards({ lesson, unit, lessons, date, P, studyDays }) {
  const out = [{ id: `lesson-${lesson.key}`, pts: P.lesson, kind: 'lesson', label: `Lesson finished: ${lesson.title}` }];
  if (!studyDays.includes(at12(date).getDay())) out.push({ id: `weekday-${date}`, pts: P.weekdaySession, kind: 'weekday', label: 'Weekday study session' });
  if (unit && unit.lessons.every((l) => l.key === lesson.key || (lessons[l.key] || {}).completedAt)) {
    out.push({ id: `unit-${unit.id}`, pts: P.unit, kind: 'unit', label: `Unit finished: ${unit.title}` });
  }
  return out;
}
export function quizAwards({ lesson, tries, pct, P }) {
  const out = [];
  if (tries === 1) out.push({ id: `quiz-${lesson.key}`, pts: P.quizFirst, kind: 'quiz', label: 'Quiz passed on the first try' });
  if (tries === 2) out.push({ id: `quiz-${lesson.key}`, pts: P.quizSecond, kind: 'quiz', label: 'Quiz passed on the second try' });
  if (pct === 100) out.push({ id: `perfect-${lesson.key}`, pts: P.perfect, kind: 'perfect', label: 'Perfect quiz' });
  return out;
}
export function dayAwards({ date, points, P, studyDays, leftApp }) {
  const out = [{ id: `day-${date}`, pts: P.fullDay, kind: 'day', label: 'Full study day' }];
  if (!leftApp) out.push({ id: `focus-${date}`, pts: P.focusDay, kind: 'focus', label: 'Focus day: never left the app' });
  const dow = at12(date).getDay();
  if (studyDays.includes(dow)) {
    const n = 1 + streakEnding(prevStudyDay(date, studyDays), points, studyDays);
    const pts = n >= 2 ? P.streak[Math.min(n, P.streak.length - 1)] : 0;
    if (pts) out.push({ id: `streak-${date}`, pts, kind: 'streak', label: `${n} study days in a row`, n });
    const sat = todayKey(new Date(at12(date).getTime() - 86400000));
    if (dow === 0 && studyDays.includes(6) && points[`day-${sat}`]) out.push({ id: `weekend-${sat}`, pts: P.weekend, kind: 'weekend', label: 'Full weekend' });
  }
  return out;
}

// ── his app: watches his points, awards them, shows the card ──
// deps: { store, sid, rules() (cur.rules), tracker, onChange() }
export function createPoints({ store, sid, rules, tracker, onChange = () => {} }) {
  let points = {}, payouts = {}, loaded = false;
  const queue = [], P = () => rules().points, studyDays = () => rules().studyDays;
  const unsubs = [
    store.watchPoints(sid, (p) => { points = p || {}; const first = !loaded; loaded = true; if (first && queue.length) give(queue.splice(0)); onChange(); }),
    store.watchPayouts(sid, (p) => { payouts = p || {}; onChange(); }),
  ];
  function give(list) {
    if (!loaded) { queue.push(...list); return; }
    const fresh = list.filter((a) => a.pts > 0 && !points[a.id]);
    if (!fresh.length) return;
    fresh.forEach((a) => {
      const e = { pts: a.pts, kind: a.kind, label: a.label, at: Date.now(), ...(a.n ? { n: a.n } : {}) };
      points[a.id] = e;
      store.awardPoints(sid, a.id, e).catch((err) => console.warn('points not saved', err));
      tracker.log('points', `+${a.pts} ${a.label}`);
    });
    const sum = fresh.reduce((x, a) => x + a.pts, 0);
    toast(`+${fmt(sum)} points! ${fresh.map((a) => a.label.replace(/^Lesson finished: .*/, 'Lesson finished')).join(' · ')}`, { time: 6000 });
    onChange();
  }
  const unitOf = (cur, lesson) => {
    for (const subj of [cur.algebra, cur.biology]) for (const u of subj.units) if (u.lessons.some((l) => l.key === lesson.key)) return u;
    return null;
  };
  let sheet = null;
  function openHow() {
    const p = P(), t = totals(points, payouts), b = badges(points, p);
    const rows = [['Lesson finished', p.lesson], ['Quiz passed on the 1st try', `+${p.quizFirst}`], ['Quiz passed on the 2nd try', `+${p.quizSecond}`], ['Perfect quiz', `+${p.perfect}`],
      ['Full study day', `+${p.fullDay}`], ['Focus day: finish the day without leaving the app', `+${p.focusDay}`], ['2nd study day in a row', `+${p.streak[2]}`],
      ['3rd study day in a row', `+${p.streak[3]}`], ['4th in a row and every one after', `+${p.streak[p.streak.length - 1]}`], ['Full weekend (Saturday + Sunday)', `+${p.weekend}`],
      ['Finish a whole unit', `+${p.unit}`], ['Study on a weekday (finish a lesson)', `+${p.weekdaySession}`]];
    const recent = Object.values(points).sort((a, c) => (c.at || 0) - (a.at || 0)).slice(0, 8);
    if (!sheet) {
      sheet = document.createElement('section'); sheet.className = 'cg-sheet sc-points-sheet'; sheet.setAttribute('aria-label', 'How to earn points'); sheet.hidden = true;
      document.body.appendChild(sheet);
    }
    sheet.innerHTML = `<span class="cg-grabber"></span>
      <header class="cg-header"><h2 class="cg-header-title">How to earn<small>${p.perDollar} points = $1</small></h2>
        <button class="cg-key cg-key-end" type="button" data-cg-close aria-label="Close">${icon('close')}</button></header>
      <div class="cg-sheet-body">
        <p class="cg-text sc-points-have">You have <b>${fmt(t.owed)} points</b> (${money(t.owed, p.perDollar)}) to collect from your brother.</p>
        <ul class="cg-group">${rows.map(([l, v]) => `<li class="cg-row"><span class="cg-row-text"><span class="cg-row-label">${esc(l)}</span></span><span class="cg-row-value cg-num">${esc(String(v))}</span></li>`).join('')}</ul>
        <p class="cg-caption">Badges</p>
        <div class="cg-chips sc-badges">${b.map((x) => `<span class="cg-chip ${x.got ? 'is-on' : ''}">${x.got ? icon('star') : ''}${esc(x.name)}</span>`).join('')}</div>
        <p class="cg-caption">Recent</p>
        <ul class="cg-group">${recent.map((e) => `<li class="cg-row"><span class="cg-row-text"><span class="cg-row-label">${esc(e.kind === 'adjust' ? `From your brother: ${e.label}` : e.label)}</span></span><span class="cg-row-value cg-num">${e.pts > 0 ? '+' : ''}${fmt(e.pts)}</span></li>`).join('') || '<li class="cg-row"><span class="cg-row-text"><span class="cg-row-label">Finish a lesson to earn your first points</span></span></li>'}</ul>
      </div>`;
    if (window.CalmGlass) window.CalmGlass.open(sheet);
  }
  return {
    lessonDone(cur, lesson, lessons) { give(lessonAwards({ lesson, unit: unitOf(cur, lesson), lessons, date: todayKey(), P: P(), studyDays: studyDays() })); },
    quizPassed(lesson, { tries, pct }) { give(quizAwards({ lesson, tries, pct, P: P() })); },
    dayDone(st) { if (st && st.allDone) give(dayAwards({ date: todayKey(), points, P: P(), studyDays: studyDays(), leftApp: tracker.flagCount('leftApp') })); },
    // his home-screen card: points, money to collect, level bar, streak, badges
    cardHTML() {
      const p = P(), t = totals(points, payouts), lv = level(t.lifetime, p.levelEvery), streak = currentStreak(points, studyDays()), got = badges(points, p).filter((x) => x.got).length;
      return `<p class="cg-caption">Your points</p>
        <section class="cg-card sc-points">
          <div class="sc-points-top"><b class="cg-num sc-points-big">${fmt(t.owed)}</b><span class="cg-meta">points · <b>${money(t.owed, p.perDollar)}</b> to collect</span></div>
          <p class="cg-meta">Level ${lv.n} · ${esc(lv.name)} · ${fmt(lv.every - lv.into)} points to level ${lv.n + 1}</p>${bar((lv.into / lv.every) * 100)}
          <p class="cg-meta sc-points-line">${icon('flame')}<span>${streak ? `${streak} study day${streak === 1 ? '' : 's'} in a row` : 'Finish a full study day to start a streak'}</span></p>
          <p class="cg-meta sc-points-line">${icon('star')}<span>${got} badge${got === 1 ? '' : 's'} earned</span></p>
          <button type="button" class="cg-btn cg-btn-glass" data-points-how>How to earn</button>
        </section>`;
    },
    wire(root) { const b = root.querySelector('[data-points-how]'); if (b) b.onclick = openHow; },
    destroy() { unsubs.forEach((u) => { try { u && u(); } catch {} }); if (sheet) sheet.remove(); },
  };
}
