// Unit test for the points rules in js/points.js (pure functions, no browser). Run: node tests/points.test.mjs
import { lessonAwards, quizAwards, dayAwards, streakEnding, currentStreak, prevStudyDay, totals, level, badges, money } from '../js/points.js';
import schedule from '../content/schedule.js';
const P = schedule.points, SD = schedule.studyDays;   // Saturday + Sunday
let fails = 0; const check = (name, ok) => { console.log((ok ? 'ok   ' : 'FAIL ') + name); if (!ok) fails++; };
const ids = (list) => list.map((a) => `${a.id}=${a.pts}`).join(' ');
const day = (d) => ({ [`day-${d}`]: { pts: P.fullDay, kind: 'day' } });

// dates: 2026-10-03 Sat, 10-04 Sun, 10-05 Mon, 10-10 Sat, 10-11 Sun
check('previous study day: Sun → Sat, Sat → last Sun, Mon → Sun', prevStudyDay('2026-10-04', SD) === '2026-10-03' && prevStudyDay('2026-10-10', SD) === '2026-10-04' && prevStudyDay('2026-10-05', SD) === '2026-10-04');
const unit = { id: 'u1', title: 'Foundations', lessons: [{ key: 'a' }, { key: 'b' }] };
check('lesson on a Saturday: 100 only', ids(lessonAwards({ lesson: { key: 'a', title: 'A' }, unit, lessons: {}, date: '2026-10-03', P, studyDays: SD })) === 'lesson-a=100');
check('lesson on a Monday: +50 weekday session', ids(lessonAwards({ lesson: { key: 'a', title: 'A' }, unit, lessons: {}, date: '2026-10-05', P, studyDays: SD })) === 'lesson-a=100 weekday-2026-10-05=50');
check('last lesson of a unit: +150', ids(lessonAwards({ lesson: { key: 'b', title: 'B' }, unit, lessons: { a: { completedAt: 1 } }, date: '2026-10-03', P, studyDays: SD })) === 'lesson-b=100 unit-u1=150');
check('quiz: 1st try 100% → +25 +10; 2nd try → +10; 3rd → nothing', ids(quizAwards({ lesson: { key: 'a' }, tries: 1, pct: 100, P })) === 'quiz-a=25 perfect-a=10'
  && ids(quizAwards({ lesson: { key: 'a' }, tries: 2, pct: 90, P })) === 'quiz-a=10' && quizAwards({ lesson: { key: 'a' }, tries: 3, pct: 90, P }).length === 0);
check('first study day, never left: day + focus (no streak yet)', ids(dayAwards({ date: '2026-10-03', points: {}, P, studyDays: SD, leftApp: 0 })) === 'day-2026-10-03=25 focus-2026-10-03=200');
check('left the app once: no focus bonus', ids(dayAwards({ date: '2026-10-03', points: {}, P, studyDays: SD, leftApp: 1 })) === 'day-2026-10-03=25');
check('Sunday after a full Saturday: streak 2 (+50) and full weekend (+100)', ids(dayAwards({ date: '2026-10-04', points: day('2026-10-03'), P, studyDays: SD, leftApp: 2 }))
  === 'day-2026-10-04=25 streak-2026-10-04=50 weekend-2026-10-03=100');
const two = { ...day('2026-10-03'), ...day('2026-10-04') }, three = { ...two, ...day('2026-10-10') };
check('next Saturday: streak 3 (+75)', ids(dayAwards({ date: '2026-10-10', points: two, P, studyDays: SD, leftApp: 1 })) === 'day-2026-10-10=25 streak-2026-10-10=75');
check('next Sunday: streak 4 (+100) and full weekend', ids(dayAwards({ date: '2026-10-11', points: three, P, studyDays: SD, leftApp: 1 })) === 'day-2026-10-11=25 streak-2026-10-11=100 weekend-2026-10-10=100');
check('a weekday full day: no streak, no weekend', ids(dayAwards({ date: '2026-10-05', points: two, P, studyDays: SD, leftApp: 0 })) === 'day-2026-10-05=25 focus-2026-10-05=200');
check('streak counting', streakEnding('2026-10-04', two, SD) === 2 && currentStreak(two, SD, '2026-10-05') === 2 && currentStreak(two, SD, '2026-10-10') === 2 && currentStreak({}, SD, '2026-10-05') === 0);
check('missing a study day breaks the streak', currentStreak({ ...day('2026-10-03') }, SD, '2026-10-05') === 0);
const t = totals({ a: { pts: 100 }, b: { pts: 25 }, c: { pts: -20, kind: 'adjust' } }, { x: { pts: 50 } });
check('totals: earned, lifetime (no negatives), paid, owed', t.earned === 105 && t.lifetime === 125 && t.paid === 50 && t.owed === 55 && money(t.owed) === '$0.55');
check('levels every 1,000', level(0).n === 1 && level(999).n === 1 && level(1000).n === 2 && level(1000).name === 'Learner' && level(9500).name === 'Legend 2');
check('badges', badges({ 'lesson-a': { pts: 100 }, 'focus-x': { pts: 200 } }, P).filter((b) => b.got).map((b) => b.name).join() === 'First lesson,Focus day');
// the owner's estimate: a strong weekend (5 lessons a day, mostly first-try quizzes, focus both days, Sat already part of a streak)
const wk = 10 * P.lesson + 7 * P.quizFirst + 3 * P.quizSecond + 3 * P.perfect + 2 * P.fullDay + 2 * P.focusDay + P.streak[3] + P.streak[4] + P.weekend;
console.log(`strong weekend ≈ ${wk} points = ${money(wk)}`);
console.log(fails ? `${fails} failed` : 'all passed'); process.exit(fails ? 1 : 0);
