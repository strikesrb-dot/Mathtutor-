// Builds the live curriculum (content files + any video swaps the master saved)
// and works out where the student is in each subject.

import algebra from '../content/algebra.js';
import bioCells from '../content/biology-cells.js';
import facts from '../content/facts.js';
import schedule from '../content/schedule.js';

// Add future biology units here, e.g. import bioGenetics from '../content/biology-genetics.js'
export const BIO_UNITS = { cells: bioCells };

export function buildCurriculum(settings = {}) {
  const ov = settings.videoOverrides || {};
  const apply = (unit) => ({
    ...unit,
    lessons: unit.lessons.map((l) => (ov[l.key] && ov[l.key].length ? { ...l, videos: ov[l.key] } : l)),
  });
  const bio = BIO_UNITS[settings.bioUnit] || bioCells;
  return {
    algebra: apply(algebra),
    biology: apply(bio),
    facts: settings.facts && settings.facts.length ? settings.facts : facts,
    rules: {
      ...schedule,
      blockMinutes: Number(settings.blockMinutes) || schedule.blockMinutes,
      passPct: Number(settings.passPct) || schedule.passPct,
    },
  };
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

// The first lesson in a subject that isn't finished (or null if the unit is complete).
export function currentLesson(unit, lessonsProg) {
  return unit.lessons.find((l) => lessonStage(l, lessonsProg[l.key]) !== 'done') || null;
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
    if (s.type === 'fact') { sec = steps[s.id] || 0; done = !!factsDone[s.id]; }
    return { ...s, sec, need: s.type === 'block' ? need : 0, done };
  });
  const current = list.find((s) => !s.done) || null;
  return { list, current, allDone: !current };
}
