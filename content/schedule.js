// The weekend day plan and the tracking rules.
// Master can override blockMinutes and passPct from the Master view → Settings.

export default {
  // One day = 2 Algebra blocks, a fun-fact video, 2 Biology blocks, a fun-fact video. After each break: game time (G1–G3).
  steps: [
    { id: 'A1', type: 'block', subject: 'algebra' },
    { id: 'R1', type: 'break' },
    { id: 'G1', type: 'game' },
    { id: 'A2', type: 'block', subject: 'algebra' },
    { id: 'F1', type: 'fact' },
    { id: 'R2', type: 'break' },
    { id: 'G2', type: 'game' },
    { id: 'B1', type: 'block', subject: 'biology' },
    { id: 'R3', type: 'break' },
    { id: 'G3', type: 'game' },
    { id: 'B2', type: 'block', subject: 'biology' },
    { id: 'F2', type: 'fact' },
  ],
  studyDays: [6, 0],        // Saturday, Sunday (JS getDay numbers). Other days are "bonus" days.
  blockMinutes: 50,         // active minutes per block (plus a 10-min break = 1 hour)
  breakMinutes: 7,          // he can cash in what's left of a break as extra game time (owner request 2026-10-05)
  gameMinutes: 7,           // game time after each break (Slice or Glide); a round in progress is finished first
  passPct: 90,              // quiz score needed to pass a lesson
  quizSize: 10,             // questions per quiz attempt, drawn from the lesson's bank
  retryWaitMin: 3,          // after a failed quiz: review, then wait this long before retrying
  manyTries: 3,             // passing only on this try or later raises a red flag for the master
  videoDonePct: 90,         // % of a video that must be watched (no skipping ahead)
  maxPlaybackRate: 1.5,     // faster than this gets reset to 1x
  attentionMinSec: 240,     // "Still there?" check every 4–7 minutes of video
  attentionMaxSec: 420,
  attentionReplySec: 15,    // seconds he has to tap before it counts as missed
  pausedNagSec: 30,         // paused this long on a video → red flash
  idleSec: 90,              // no taps this long on quiz/reading screens → time stops counting
  // Time limits per screen (owner request): past these the clock stops until he moves on, and you get a "stalled" flag.
  capLearnMin: 10,          // the Learn page
  capRealMin: 10,           // writing the real-life answer
  capQuestionMin: 3,        // one quiz or practice question
  capScreenSec: 90,         // in-between screens: quiz start, quiz result, "lesson complete"
};
