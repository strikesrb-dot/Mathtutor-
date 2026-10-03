// The weekend day plan and the tracking rules.
// Master can override blockMinutes and passPct from the Master view → Settings.

export default {
  // One day = 2 Algebra blocks, a fun-fact video, 2 Biology blocks, a fun-fact video.
  steps: [
    { id: 'A1', type: 'block', subject: 'algebra' },
    { id: 'R1', type: 'break' },
    { id: 'A2', type: 'block', subject: 'algebra' },
    { id: 'F1', type: 'fact' },
    { id: 'R2', type: 'break' },
    { id: 'B1', type: 'block', subject: 'biology' },
    { id: 'R3', type: 'break' },
    { id: 'B2', type: 'block', subject: 'biology' },
    { id: 'F2', type: 'fact' },
  ],
  studyDays: [6, 0],        // Saturday, Sunday (JS getDay numbers). Other days are "bonus" days.
  blockMinutes: 50,         // active minutes per block (plus a 10-min break = 1 hour)
  breakMinutes: 10,
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
};
