// ─────────────────────────────────────────────────────────────
//  STUDY COACH — your settings. This is the ONLY file you edit
//  during setup. Follow SETUP.html step by step.
// ─────────────────────────────────────────────────────────────
//
//  Leave firebase as null to run in DEMO mode (everything saves
//  on this device only — good for trying it out).

export const firebase = null;
/*  After setup it will look like this (paste YOUR values):

export const firebase = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abc123",
};
*/

// The two accounts you create in Firebase → Authentication → Users.
// Copy each account's "User UID" here.
export const MASTER_UID = 'Fzz1e3x7FAdkanqvVTiHtdGgEqh2';   // you
export const STUDENT_UID = 'm6gnU0H4lkTvPjSzLAHxD7lBOP32';  // your brother

// What the app calls him on screen.
export const STUDENT_NAME = 'Champ';
