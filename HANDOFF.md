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

## Anti-cheat (owner request 2026-10-03)
- Graded quizzes hide the right answer on a miss; answers show only after passing.
- After a fail he must review (reread Learn 40 s or watch 60 s of video), then wait `retryWaitMin` (3) minutes.
- Passing on try 3 or later raises a `manyTries` red flag. The master's lesson row shows "Passed only on try N".
- Fresh numbers: 66 generators (`js/practice.js`, `js/gen-algebra.js`, `js/gen-algebra-2.js`, `js/gen-util.js`) are attached to 61+ algebra
  lessons via `practice:`. Up to 5 generated questions go into every attempt. `node tests/fuzz-generators.mjs` must pass.
- Bigger banks: every one of the 139 lessons has 24 questions (3,336 total).
- TODO: `js/student.js` is about 580 lines. Split the quiz/review code into `js/quiz.js` to respect the 500-line rule.

## Not verified yet
- Real iPhone/iPad (WebKit) run. Only Chromium was available in the build environment.
- Real YouTube playback for every video. Embedding could be blocked, which shows as the `videoError` flag.

## Ideas parked
- Per-day summary to the owner (needs a scheduled task or backend).
- Streaks or rewards. A master → student message banner.
- Tighten `firestore.rules` so only STUDENT_UID can write under `students/` (anyone who self-signs-up can currently write their own uid path).
