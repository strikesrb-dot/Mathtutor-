# Handoff — Study Coach (updated 2026-10-03)

Live: https://mbackestudy.netlify.app (Netlify auto-deploys `main`). Firebase project `study-tutor-45335`.
Master = owner (strikesrb@…), student = his brother. UIDs and keys are in `js/config.js`.

## Status
- App works end to end:
  - Calm Glass design, focused-time tracking, red flags, master view.
  - Demo mode when `firebase = null`.
  - Startup fix for iOS: memory cache + long polling. Open with `?debug=1` to see the startup timing.
- **Full curriculum build in progress.** The plan was agreed with the owner: Khan Academy course order, checked against
  NJ 2023 standards. Both subjects start from Unit 1. Units are written by helper agents following `tools/CONTENT-SPEC.md`.

| Algebra 1 (16 units) | | Biology — Khan's new NGSS course (9 units) | |
|---|---|---|---|
| 1 Algebra foundations | ✅ | 1 Ecology and natural systems | ✅ |
| 2 Solving equations & inequalities (+ rearranging formulas) | ✅ | 2 From cells to organisms (reuses bio-1…7) | ✅ |
| 3 Working with units | ✅ | 3 Cell cycle and differentiation | ✅ |
| 4 Linear equations & graphs (reuses alg-5, alg-6) | ✅ | 4 Energy and matter (reuses bio-8) | ✅ |
| 5 Forms of linear equations (reuses alg-7, alg-8) | ✅ | 5 Gene expression and regulation | ✅ |
| 6 Statistics & data — NJ addition, incl. two-way tables | ✅ | 6 Inheritance and variation of traits | ✅ |
| 7 Systems of equations | ✅ | 7 Mechanisms of evolution | ✅ |
| 8 Inequalities (systems & graphs) | ✅ | 8 Common ancestry and phylogeny | ✅ |
| 9 Functions (reuses alg-1…4) | ✅ | 9 Biodiversity and human impacts | ✅ |
| 10 Sequences | ✅ | | |
| 11 Absolute value & piecewise | ✅ | | |
| 12 Exponents & radicals | ✅ | | |
| 13 Exponential growth & decay | ✅ | | |
| 14 Quadratics: multiplying & factoring | ✅ | | |
| 15 Quadratic functions & equations | ✅ | | |
| 16 Irrational numbers | ✅ | | |

Khan lesson lists for every unit came from the curriculum research done 2026-10-03. Re-fetch them from khanacademy.org/math/algebra
and khanacademy.org/science/hs-bio if needed.

## How to add a unit
1. Write `content/<subject>/uNN.js` following `tools/CONTENT-SPEC.md`. Verify every video with oEmbed and recompute every number.
2. Add it to `content/<subject>/index.js` in unit order.
3. Run `node tools/sync-preload.mjs`, `node tools/validate-content.mjs`, and the design check. Then commit and push.
4. Have a separate agent fact-check each batch before or soon after shipping. All 25 units are fact-checked and fixed (the original 12-item banks + u15). **The 12 added items per lesson (bank growth) were math-checked by their writers but not by a separate checker.**

## Flags for the owner (preview before his brother watches)
- Two Islamic-history fun-fact videos from smaller channels: TRT World and Islamic Museum of Australia.
- a01-01 describes al-Khwārizmī as a Persian scholar in Baghdad whose book included inheritance math. Owner to check the wording.
- b02-09 body-systems video briefly covers the reproductive system (textbook level). b02-10 uses Ramadan fasting in its blood-sugar example.
- b04-03 Amoeba Sisters respiration video may say "alcoholic fermentation".
- a02-04 "Solving for a variable" video content not confirmed. Some algebra lessons have under 10 minutes of video because Khan's clips are short.
- Four statistics videos (a06) are AP-level and dense.
- b06-04 CrashCourse #32 worth a quick preview. b06 uses Unicode allele symbols (Iᴬ, Xᴺ) — confirm they render on iPhone.
- a13-06 video cwnke_pjX90 compares two pay offers and says "compounding" once (not bank interest) — owner's call.
- b08-03 CrashCourse video opens with scientific theories of the origin of life; b07-03 TED-Ed ant video briefly mentions ant mating — preview.
- Evolution units (b07, b08) are written in neutral textbook language ("scientists explain…").
- Some helper agents ran out of web searches; remaining units may need videos found by browsing channels (WebFetch).

## Fixed 2026-10-04 — master showed "no study" although he studied
- Cause: `watchDays` used `orderBy(documentId(), 'desc')`. That sort needs an index Firestore doesn't create by default, so the
  read failed from v1 onward. The error handler returned `{}`, so the master saw empty days and the student's block timers and done
  blocks reset on every reload. The writes were fine all along. Now it's a plain collection read (see the comment in store.js).
- Failed reads now pass the error code to the callback. The master Overview shows a "Some of his data didn't load" card instead of zeros.
- Demo-mode tests can't catch Firestore index or rule errors. When the master looks empty, open `?debug=1`. "days FAILED: …" means a read error.

## Added 2026-10-05 (owner requests)
- Time limits per screen (schedule.js caps): Learn 10 min, real-life 10, one question 3, in-between screens 90 s. After that the clock
  stops and a `stalled` flag is raised. Replaying video he already watched doesn't count (except the review after a failed quiz). Waiting
  out the quiz retry doesn't count. The tracker's `screen()` sets the limits; `hold()` pauses the clock while chat is open.
- Resume: a quiz in progress is saved as `quizRun` (same questions, same spot; closing the app can't get him a fresh quiz). The real-life
  draft saves as he types. The video spot saves when the app hides.
- Chat + nudge (js/chat.js): master Chat tab and "Nudge him"/"Message him" on the Overview. The student sees a sheet (his clock pauses)
  from the chat key in the header, the break screen, or the home row. A nudge shows as the red alert with a beep.
- Activity log (tracker `log()`, js/log-export.js): every screen, clock start/stop with the reason, video, quiz answers with seconds and
  the pick, flags, chat. Saved per day in `log/{date}`. Master Overview → "Activity log for Claude" → Copy / Share / Download. The
  export starts with instructions so Claude analyzes it with no extra prompt.
- Student home screen moved to js/home.js (student.js was past 500 lines).

## Lesson order is forward-only (owner request 2026-10-04)
- He can't go back to Watch or Learn once he has moved past them. That was the loophole: rewatching videos filled block time without doing the quiz.
- The only way back is the review after a failed quiz. After 60 s of rewatching he's sent straight back to the quiz.

## Anti-cheat (owner request 2026-10-03)
- Graded quizzes hide the right answer on a miss; answers show only after passing.
- After a fail he must review (reread Learn 40 s or watch 60 s of video), then wait `retryWaitMin` (3) minutes.
- Passing on try 3 or later raises a `manyTries` red flag. The master's lesson row shows "Passed only on try N".
- Fresh numbers: 66 generators (`js/practice.js`, `js/gen-algebra.js`, `js/gen-algebra-2.js`, `js/gen-util.js`) are attached to 61+ algebra
  lessons via `practice:`. Up to 5 generated questions go into every attempt. `node tests/fuzz-generators.mjs` must pass.
- Bigger banks: every one of the 139 lessons has 24 questions (3,336 total).
- Quiz code lives in `js/quiz.js` (split from student.js on 2026-10-03).

## Live session + time on app (owner request 2026-10-03)
- His app writes `students/{uid}/meta/live` right away on every new screen and every 10–30 s: which block, lesson, stage, what he's doing
  (video position, quiz question, break countdown…), whether time is counting, and this session's on-app/focused time.
  A new session starts when the app opens or after 10+ minutes away.
- `days/{date}.openSec` = seconds the app was open on screen (focused time is `activeSec`). Only tracked from 2026-10-03 on; older days show focused time only.
- Master Overview: "Right now" card at the top (online = saved in the last 50 s and on screen), tiles for on-app vs focused time, focus rate, and on-app time in the weekend/history rows.

## Not verified yet
- Real iPhone/iPad (WebKit) run. Only Chromium was available in the build environment.
- Real YouTube playback for every video. Embedding could be blocked, which shows as the `videoError` flag.

## Ideas parked
- Per-day summary to the owner (needs a scheduled task or backend).
- Streaks or rewards. A master → student message banner.
- Tighten `firestore.rules` so only STUDENT_UID can write under `students/` (anyone who self-signs-up can currently write their own uid path).
