# Study Coach — rules for Claude Code sessions

Weekend study app for the owner's younger brother. **Student** = the brother (phone and iPad). **Master** = the owner, who checks progress from his phone. Static site hosted on **Netlify** (auto-deploys every push to `main`; `netlify.toml` = no build, publish root), plus Firebase Auth and Firestore (project `study-tutor-45335`). Read `HANDOFF.md` first for current status.

## Design language: Calm Glass
- `css/calm-glass.css` + `js/calm-glass.js` are the owner's design kit (rules: `tools/DESIGN-LANGUAGE.md`). Don't edit them; app styles live in `css/app.css` and use only `--cg-*` tokens and `.cg-*` components.
- Text ≥ 16, corners 8/14/26/32/capsule/circle only, one accent for state only, one `.cg-btn-strong` per screen, no `confirm()`/`alert()` (do it + Undo toast).
- Run `node tools/check-design.mjs css/app.css js index.html --allow tools/calm-glass.allow.json` before every push; it must say clean.
- Deliberate exception: the red "you left / missed the check" flash uses `--cg-danger` because the owner asked for a bright red alert.
- Deliberate exception: the break games (`js/games/`, ported from the owner's Mithlayn site) draw their own colours inside the game canvas.
  Everything around the canvas uses tokens (`.sc-game` maps the games' `--bp-*` colours to `--cg-*`). Allow-listed in `tools/calm-glass.allow.json`.

## Hard constraints
- **No build step.** Plain ES modules loaded by `index.html`. No bundler, no npm runtime deps, no TypeScript. Netlify serves the repo as-is.
- **Safari/WebKit first.** Both devices are Apple (iOS/iPadOS Safari, often added to the Home Screen). Check every change for WebKit issues: no `navigator.vibrate` reliance, audio only after a user tap, 16px+ inputs (prevents iOS zoom), `env(safe-area-inset-*)`, `playsinline` on video, and no APIs newer than Safari 15.4.
- **Demo mode must keep working** when `js/config.js` has `firebase = null`. It's the test harness.
- **Keep files small and single-purpose.** If a file passes about 500 lines, split it by responsibility. Don't let the app grow into one giant file.
- **Source content is the owner's call.** Never silently "fix" lesson text, quiz answers, or video choices he has edited. Flag the issue and propose a change.

## Layout
```
index.html            shell; loads js/app.js
css/app.css           all styles (light/dark tokens at the top)
js/config.js          Firebase keys + MASTER_UID / STUDENT_UID / STUDENT_NAME (the only setup file)
js/app.js             boot, sign-in, role routing
js/store.js           data layer: Firebase adapter + localStorage demo adapter (same interface; inc()/union() markers)
js/tracker.js         focused-time + on-app meter, red flags, 15s flush, live "right now" status (setLive)
js/video.js           YouTube IFrame API wrapper: no-skip, speed cap, "Still watching?" checks, pause nag
js/student.js         student screens: home plan → blocks (Watch → Learn → Quiz → Real life) → breaks → fact videos
js/quiz.js            graded quiz (anti-cheat lock, review, retry wait, resume mid-quiz) + the question widget practice reuses
js/home.js            student home screen (plan, courses, messages row)
js/chat.js            master ↔ student messages + nudges (student sheet pauses his clock; master Chat tab)
js/log-export.js      master's "Activity log for Claude" export (instructions + totals + lessons + every logged event)
js/game-time.js       7-minute game time after each break (Slice or Glide; a round in progress is finished first)
js/games/             kit.js (the break games' kit) + slice.js + glide.js — ported from Repo-1 (Mithlayn), art in assets/games, font in assets/fonts
js/master.js          master screens: Overview / Lessons / Settings
js/curriculum.js      merges content + master overrides; lesson stage + day status logic
js/practice.js        endless algebra practice generators (biology reuses quiz banks)
js/ui.js              escape, flash (red alert), toast, beep, helpers
content/algebra.js    Algebra 1 unit: Functions & Graphs (8 lessons)
content/biology-*.js  Biology units (only `cells` exists so far); register new ones in curriculum.js BIO_UNITS
content/facts.js      fun-fact reward videos (rotating, 2 per day)
content/schedule.js   day plan + tracking thresholds
firestore.rules       security rules (master UID pasted in)
tests/                Playwright e2e tests in demo mode with a fake YouTube player + fake clock
```

## Content format
- Quiz items look like `{ q, c: [correct, wrong, wrong, wrong], why }`. **`c[0]` is always the correct answer.** The UI shuffles the choices. Use 12 items per lesson; the quiz draws 10.
- Write at a struggling-teen reading level. Define each technical term in parentheses the first time it appears.
- **Every YouTube ID must be verified** before shipping. WebFetch `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<ID>&format=json` and check the title and channel. Prefer Khan Academy (US channel, not "Khan Academy India"), Amoeba Sisters, TED-Ed, Crash Course, and Kurzgesagt. Kid-safe only.
- Recompute any math with code before adding a question.

## Firestore data model
```
settings/main                      { blockMinutes, passPct, bioUnit, videoOverrides{lessonKey:[{id,title}]}, facts[] }
students/{uid}/lessons/{key}       { videos{id:{max,dur,done}}, learnDone, quiz{attempts[],best,passed}, realLife{answer,at}, timeSec, completedAt }
students/{uid}/days/{YYYY-MM-DD}   { activeSec, openSec, steps{A1..F2:sec}, bySubject{}, blocksDone{}, breaks{}, factsDone{}, factPick{}, factProg{}, flags{}, events[], practice{}, lastSeen, lastStep, lastLesson }
students/{uid}/meta/state          { factIdx }
students/{uid}/meta/live           { view, title, lesson, sub, stage, detail, pos, at, visible, counting, flashing, sessionStart, sessionOpen, sessionFocus }
students/{uid}/meta/chat           { masterRead, studentRead }   (time of the last message each side has seen)
students/{uid}/chat/{id}           { from: 'master'|'student', kind: 'msg'|'nudge', text, at }
students/{uid}/log/{YYYY-MM-DD}    { entries: [{ t, k, d }] }   (activity log; read only on export, never watched)
lessons/{key} also holds quizRun { at, graded, i, right, qs } (a quiz in progress) and realDraft (unsent real-life text)
days/{date} also holds breakStart{R1..R3: ts} (break clock) and games{G1..G3: { start, bonus, done, played }} (bonus = seconds of break cashed in)
```

## Testing
- `python3 tests/e2e_lesson.py` runs one full lesson, including the skip, leave-app, and missed-check flags, then checks the master view.
- `python3 tests/e2e_day.py` sets 10-minute blocks and runs block → break → block → fact video → biology.
- Both need Playwright with a browser. WebKit is preferred: `p.webkit.launch()`. Screenshots go to `tests/screens/`.
- Syntax check: `for f in js/*.js content/*.js; do node --check $f; done`.
- Demo mode can't catch Firestore-only problems (indexes, rules). Never sort a query by `documentId()` descending: it needs an index
  Firestore doesn't create, and the read fails silently (the 2026-10-04 "no study days" bug). Plain reads or ordinary fields only.

## Releases
When shipping a zip to the owner, number it and always go up (`study-coach-v2.zip`, v3, …). Never reuse a number.
