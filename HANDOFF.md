# Handoff — Study Coach v1 (2026-10-03)

## Done
- Full student flow: daily plan of Algebra ×2 → fun video → Biology ×2 → fun video, with 10-min breaks between.
- Each block runs the current lesson: Watch → Learn (40s minimum read) → Quiz (10 questions from a bank of 12, 90% to pass, unlimited retries) → Real-life written answer (15+ words, paste blocked). Lessons auto-advance. When a unit is finished, the block switches to review practice.
- Focused-time tracking:
  - It counts only while the video is playing on screen, or during active interaction on reading and quiz screens (stops after 90s idle).
  - Red flash when he leaves the app, misses a "Still watching?" check (the video rewinds), pauses for 30s+, or goes idle.
  - Skipping ahead is blocked and speed is capped at 1.5×.
- Master view:
  - Overview: live "studying now" status, today's time and blocks, red flags with an activity log, the weekend, and history.
  - Lessons: per-lesson progress, quiz attempts, his written answers, reset.
  - Settings: block length, pass mark, swap lesson videos, edit the fun-fact list.
- Demo mode (localStorage) and a Firebase mode with the same interface.
- Content: Algebra 1 "Functions & Graphs" (8 lessons) and Biology "Cells" (8 lessons), with 192 quiz questions. An independent check recomputed all the math and corrected 4 biology/algebra wording issues. 16 fun-fact videos cover history, science, geography, and Islamic history.
- Every video ID was checked through YouTube oEmbed.
- e2e tests pass in Chromium (demo mode, fake YouTube, fake clock).

## Not verified yet — do these first
1. **Real Firebase has never run.** Test the full login → study → master sync on the live Netlify URL. (Firebase project `study-tutor-45335`; config + UIDs are in `js/config.js`. GitHub Pages was dropped — Safari showed a Safe Browsing warning on strikesrb-dot.github.io.) Watch for persistent-cache errors in Safari private mode, which should fall back to `getFirestore` automatically.
2. **WebKit was not tested.** Only Chromium was available in the build environment. Run the tests with `p.webkit.launch()` and check on a real iPhone:
   - The YouTube iframe gets `playsinline`.
   - The "Still watching?" button sits above the iframe.
   - Fullscreen is disabled (`fs: 0`) so he can't escape the checks.
   - The video pauses when the app goes to the background.
3. **Real YouTube playback.** Check that every lesson video actually embeds; some channels block embedding. `video.js` shows a "can't play" message and logs a `videoError` flag, which the master can fix by swapping the video.
4. The owner should preview the two Islamic-history videos from smaller channels (TRT World, Islamic Museum of Australia) before his brother watches them.

## Open items / owner decisions pending
- **Which biology unit is he on?** The owner will find out. `cells` is a starter. Add `content/biology-<unit>.js` in the same shape and register it in `BIO_UNITS` in `js/curriculum.js`. The master's Settings dropdown in `master.js` also needs the new option.
- Possible additions:
  - A per-day summary push or email to the master. That needs a backend or a scheduled task; for now the master opens the site.
  - More algebra units after Functions & Graphs (systems of equations, exponents, quadratics).
  - A master "message to student" banner.
  - A streak or reward system.
- If the owner wants the rules changed (block length, idle seconds, check frequency), the thresholds are in `content/schedule.js`. Block length and pass mark can also be set from the master view.

## Known limits (by design)
- A determined kid could mute the video and leave the phone face-up. The checks every 4–7 minutes and the quiz at 90% are the backstop.
- Time spent in the Learn stage counts only with interaction, since scrolling counts as input. A slow reader may get an idle flash after 90s with no touch.
- Firestore rules let the student write his own progress. That's acceptable for a family tool, but it isn't tamper-proof.
