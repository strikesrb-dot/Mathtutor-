// ─────────────────────────────────────────────────────────────
//  STUDY COACH — your settings. This is the ONLY file you edit
//  during setup. Follow SETUP.html step by step.
// ─────────────────────────────────────────────────────────────
//
//  Leave firebase as null to run in DEMO mode (everything saves
//  on this device only — good for trying it out).

export const firebase = {
  apiKey: "AIzaSyD1RK2hFxTPc5fLjGmay2oohyTl8Ut1AaA",
  authDomain: "study-tutor-45335.firebaseapp.com",
  projectId: "study-tutor-45335",
  storageBucket: "study-tutor-45335.firebasestorage.app",
  messagingSenderId: "498316578162",
  appId: "1:498316578162:web:93534a3cb29fdabbe8a1eb",
};
// To go back to DEMO mode, replace the block above with:  export const firebase = null;

// The two accounts you create in Firebase → Authentication → Users.
// Copy each account's "User UID" here.
export const MASTER_UID = 'Fzz1e3x7FAdkanqvVTiHtdGgEqh2';   // you
export const STUDENT_UID = 'm6gnU0H4lkTvPjSzLAHxD7lBOP32';  // your brother

// What the app calls him on screen.
export const STUDENT_NAME = 'Champ';
