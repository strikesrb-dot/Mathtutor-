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
- Game time (owner request 2026-10-05): steps G1–G3 after each break, `gameMinutes` 7. He picks Slice or Glide (can switch); the clock
  is wall time from first opening (day.games[G].start), so leaving doesn't add time. When it runs out mid-round he finishes the round,
  then moves on. Skip / "Back to studying" end it early. Not study time; logged as `game` events.
  The games are ported from Repo-1 (Mithlayn), branch claude/read-handoff-plb7xv @468ed1d: `js/games/kit.js` lifts the kit functions
  from break-play.js + break-arcade.js; `slice.js` is break-slice.js unchanged inside an ES-module wrapper; `glide.js` is mkFly's Glide
  mode. Removed: āyāt reading between rounds. Art: assets/games/*.webp (8 sheets, ~650 KB, loaded only at game time). Font: Lilita One
  (OFL, assets/fonts). Scene colours are allow-listed (CLAUDE.md design exception).
- Study tutor (owner request 2026-10-05): "Ask the tutor" on Watch, Learn, Real life, every quiz/practice question ("Stuck?") and
  after a miss ("What did I do wrong?"). js/tutor.js → POST /api/tutor (netlify/functions/tutor.mjs) → Claude Sonnet 5.5
  (TUTOR_MODEL env overrides). The function verifies the Firebase ID token (RS256 vs Google's certs, aud/iss/exp) and allows only
  MASTER_UID / STUDENT_UID. Rules (netlify/lib/tutor-prompt.mjs): find what confuses him, teach with its own different example, check
  with a mini-question, never give/confirm/eliminate answers, never write his real-life answer, refuse "just tell me" plainly, short
  plain replies, motivation, safety (988/911). 2026-10-05 (research-based, owner approved): under 90 words, at most 3 steps,
  5th-6th grade reading level, no filler openers, worked example → faded example with a ? step → bare problem, a "why" question
  about every other turn, numbered lists for steps and bullets only for unordered items (max 4). The app never sends the right answer. His clock pauses while the tutor is open
  (owner's choice). Every question/reply is in the activity log (kind "tutor").
  The API key is set in Netlify (ANTHROPIC_API_KEY); the tutor is live. 2026-10-05: replies were cut off because Sonnet 5.5 thinks
  first by default and used up max_tokens; fixed with effort low, thinking between_tools, max_tokens 1500, and phone formatting.
  Motivation quotes LIVE (approved = true, owner 2026-10-05): content/motivation.js, built by a script, never hand-typed. 10 Qur'an
  pieces: Arabic = Tanzil Uthmani 1.1 byte-for-byte from tanzil.net (download-form defaults; CC BY 3.0, so every card credits Tanzil with a link), English =
  Saheeh International (tanzil.net en.sahih) verbatim. 4 hadith: sunnah.com's published English verbatim (Bukhari 6464 and 39: Muhsin
  Khan; Muslim 2699a and 2664: Siddiqui), each with the narrator line as published. Two independent reviewers checked every entry first.
  The owner left out Ibn Majah 224, Muslim 1631, al-Hakim 7846 and 13:11, 3:139. Font: Scheherazade New 4.500 (SIL, OFL, unmodified), assets/fonts.
  (The earlier Arabic was really the King Fahd/QPC encoding, not Tanzil: same letters, different marks. Replaced.)
- Study plan (owner request 2026-10-05): master Settings → "Study plan". 1–6 blocks, each Algebra or Biology, quick All math /
  All biology / Mix, saved as settings.plan (js/plan.js builds the day; js/plan-card.js is the card). Saves right away with Undo;
  his screens follow live. Rows show Done / On it now · m of N min / Up next. Removing the block he's in sends him home and on to
  the next one ("cut his day short"). Block ids count per subject, so mid-day changes keep his finished blocks. tests/e2e_plan.py.
- Points game (owner request 2026-10-05: "100 points = 1$ … 200 points for not leaving the app … retention bonuses, gamify it").
  Values in content/schedule.js → points: lesson 100 · quiz 1st try +25 / 2nd +10 · perfect +10 · full day +25 · FOCUS DAY (full
  day, no leftApp flag) +200 · streak (study days in a row: 2nd +50, 3rd +75, 4th+ +100) · full weekend +100 · unit +150 ·
  weekday session +50. No penalties, no cap (owner's choices). Strong weekend ≈ 1,960 pts ≈ $19.60. Cosmetic: levels every
  1,000 lifetime pts, 12 badges, streak flame. Awards are written by his app at the moment (fixed ids = can't pay twice);
  counting starts 2026-10-05 (earlier lessons only by "Add points"). Master: Overview → Points → Mark $X paid (+Undo), add or
  take away points with a reason (he sees it). Note: Firestore rules let his account write his own points (he'd need computer
  tools to fake any); tighten firestore.rules if that ever matters.
- Missed questions (owner request 2026-10-05: "if he fails a question give me a full breakdown … give him the answer eventually and
  explain why his answer is wrong"; he chose: answer only after his answer is wrong and final; Claude's analysis automatic for every
  miss; one retry on one question per quiz).
  - Quiz: after a miss he may use the quiz's ONE retry on that question, ask "What did I do wrong?", or tap Next. Asking the tutor
    (or Next, or the retry's result) makes the question final; the quiz screen still never shows the right answer.
  - Tutor: final + wrong → the app sends final: true + the right answer; the tutor starts by itself ("Why is my answer wrong?"):
    why his pick is wrong → the right answer and why → a similar question to try. Open questions: still no answers, ever.
  - Every final graded miss (retry-fixed ones too) → students/{uid}/misses + /api/breakdown (Claude, written to the owner: what he
    likely thought, why wrong, right answer, how to explain it, a check question). His app asks right away; the master app fills in
    any it couldn't (after 60 s). Master Overview → "Missed quiz questions" → tap for the full breakdown. tests/e2e_misses.py.
- Tutor videos (owner request 2026-10-05: "videos related to the topic, no anime"): chip "Show me a video", or the tutor decides.
  The reply carries a [video-search: …] line → /api/tutor-video (Claude Haiku 4.5 + web search, youtube.com only, ≤2 searches;
  falls back to Sonnet 5.5 if Haiku is refused) → every candidate checked by netlify/lib/video-check.mjs → the first that passes
  plays in the chat (youtube-nocookie). Clock stays paused (owner's choice). Log lines: "looking for a video", "showed a video …".
  Channels: content/video-channels.js — 42 channels, each approved by every one of 10 vetting agents that looked at it (raw
  reports were in the session scratchpad). Held back (disagreement / UK maths wording): Corbettmaths, HegartyMaths, Dr Frost,
  Cognito, FuseSchool, JensenMath, MathHelp.com, Mr H Tutoring, Stated Clearly, PBS Eons, Deep Look, NHM, Cal Academy.
  Rejected incl. TED-Ed (owner had picked it) and Kurzgesagt. Human-evolution, religion and holiday titles are blocked by default.
  NOT YET TRIED LIVE with the real API (needs his sign-in): if no video ever shows, check Netlify function logs for "video search".
- Send a lesson (owner request 2026-10-05): master Lessons tab → open a lesson → "Send to him". Saved as settings.focus { key, at }.
  Until that lesson is done (curriculum.js focusLesson) every study block, and the bonus "extra" time, opens it whatever the block's
  subject; breaks, game time and fun videos stay on schedule. If he's in a block when it's sent, his screen switches at once. A chat
  message tells him. Sending a lesson he already finished restarts it (replaceLesson keeps his old scores under `history`). The master
  sees a "Sent to him" card (Overview + Lessons) with Cancel / Undo. tests/e2e_focus.py covers it.
- Breaks are 7 minutes (was 10) and run on wall time from first opening (day.breakStart). "Cash it in" on the break screen adds
  whatever is left of the break to the next game time (games[G].bonus), so he can play up to 14 minutes instead of resting.

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
