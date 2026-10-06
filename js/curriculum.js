// Builds the live curriculum (course units + any video swaps / start-unit choices the master saved)
// and works out where the student is in each subject.

import algebraCourse from '../content/algebra/index.js';
import biologyCourse from '../content/biology/index.js';
import facts from '../content/facts.js';
import schedule from '../content/schedule.js';
import { normPlan, planSteps } from './plan.js';

export const COURSES = { algebra: algebraCourse, biology: biologyCourse };

// Each subject comes back as { name, units, lessons }. `lessons` is every lesson he still has to do, in order,
// starting at the master's chosen start unit. Every lesson carries `u` (its unit), `i` (number in the unit) and `of`.
export function buildCurriculum(settings = {}) {
  const ov = settings.videoOverrides || {};
  const startAt = settings.startUnit || {};
  const prep = (course, subj) => {
    const units = course.units.map((u) => {
      const meta = { id: u.id, n: u.n, title: u.title };
      const lessons = u.lessons.map((l, idx) => ({
        ...l,
        videos: ov[l.key] && ov[l.key].length ? ov[l.key] : l.videos,
        u: meta, i: idx + 1, of: u.lessons.length,
      }));
      return { ...u, lessons };
    });
    const start = Number(startAt[subj]) || 0;
    const active = units.filter((u) => u.n >= start);
    return { subject: subj, name: course.name, units, lessons: active.flatMap((u) => u.lessons), startUnit: start };
  };
  return {
    algebra: prep(algebraCourse, 'algebra'),
    biology: prep(biologyCourse, 'biology'),
    facts: settings.facts && settings.facts.length ? settings.facts : facts,
    focus: settings.focus && settings.focus.key ? settings.focus : null,   // a lesson the master sent: { key, at }
    rules: {
      ...schedule,
      plan: normPlan(settings.plan),          // the master's study plan (Settings → Study plan)
      steps: planSteps(settings.plan),        // blocks with breaks, game time and fun videos fitted in
      blockMinutes: Number(settings.blockMinutes) || schedule.blockMinutes,
      passPct: Number(settings.passPct) || schedule.passPct,
    },
  };
}

// The original videos for a lesson (before any swap), for "Restore original".
export function originalVideos(key) {
  for (const c of Object.values(COURSES)) for (const u of c.units) for (const l of u.lessons) if (l.key === key) return l.videos;
  return [];
}

// Stage of one lesson: 'watch' → 'learn' → 'quiz' → 'real' → 'done'
export function lessonStage(lesson, prog = {}) {
  const v = prog.videos || {};
  if (!lesson.videos.every((vid) => v[vid.id] && v[vid.id].done)) return 'watch';
  if (!prog.learnDone) return 'learn';
  if (!(prog.quiz && prog.quiz.passed)) return 'quiz';
  if (!(prog.realLife && prog.realLife.answer)) return 'real';
  return 'done';
}

export function videosDone(lesson, prog = {}) {
  const v = prog.videos || {};
  return lesson.videos.filter((vid) => v[vid.id] && v[vid.id].done).length;
}

// The first lesson in a subject that isn't finished (or null if the course is complete).
export function currentLesson(subject, lessonsProg) {
  return subject.lessons.find((l) => lessonStage(l, lessonsProg[l.key]) !== 'done') || null;
}

// The lesson the master sent him (settings.focus) is his only study until it's done: every block opens it, whatever the
// block's subject. Returns { lesson, subject } while it isn't done yet, else null. (It may sit in a unit before the start unit.)
export function focusLesson(cur, lessonsProg) {
  const f = cur.focus; if (!f) return null;
  for (const subject of ['algebra', 'biology']) {
    const lesson = cur[subject].units.flatMap((u) => u.lessons).find((x) => x.key === f.key);
    if (lesson) return lessonStage(lesson, lessonsProg[lesson.key]) === 'done' ? null : { lesson, subject };
  }
  return null;
}

export function doneCount(lessons, lessonsProg) {
  return lessons.filter((l) => lessonStage(l, lessonsProg[l.key]) === 'done').length;
}

export const STAGES = [
  { key: 'watch', label: 'Watch' },
  { key: 'learn', label: 'Learn' },
  { key: 'quiz', label: 'Quiz' },
  { key: 'real', label: 'Real life' },
];

export function todayKey(d = new Date()) {
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

// Where the student is in today's plan.
export function dayStatus(rules, day = {}) {
  const steps = day.steps || {};
  const breaks = day.breaks || {};
  const factsDone = day.factsDone || {};
  const need = rules.blockMinutes * 60;
  const list = rules.steps.map((s) => {
    let done = false, sec = 0;
    if (s.type === 'block') { sec = steps[s.id] || 0; done = !!(day.blocksDone || {})[s.id]; }
    if (s.type === 'break') done = !!breaks[s.id];
    if (s.type === 'game') done = !!((day.games || {})[s.id] || {}).done;
    if (s.type === 'fact') { sec = steps[s.id] || 0; done = !!factsDone[s.id]; }
    return { ...s, sec, need: s.type === 'block' ? need : 0, done };
  });
  const current = list.find((s) => !s.done) || null;
  return { list, current, allDone: !current };
}
