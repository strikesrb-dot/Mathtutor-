// Data layer. Two adapters with the same interface:
//   • Firebase (real use — data syncs between his device and your phone)
//   • Demo (no setup — everything lives in this browser's localStorage)
// Callers write plain objects; use inc(n) to add to a number and union(x) to append to a list.

import * as CFG from './config.js';

export const inc = (n) => ({ __inc: n });
export const union = (...items) => ({ __union: items });

const DEMO_STUDENT = 'demo-student';
const DEMO_MASTER = 'demo-master';
const FB = 'https://www.gstatic.com/firebasejs/10.12.2/';

export const isDemo = !CFG.firebase;

// Startup timing marks — shown on screen when the page is opened with ?debug=1
const T0 = performance.now();
export const marks = [];
export function mark(label) {
  marks.push(`${((performance.now() - T0) / 1000).toFixed(1)}s  ${label}`);
  window.dispatchEvent(new Event('sc-mark'));
}

// ───────────────────────── helpers ─────────────────────────
export function applyMerge(target, patch) {
  const out = { ...(target || {}) };
  for (const [k, v] of Object.entries(patch)) {
    if (v && typeof v === 'object' && '__inc' in v) out[k] = (Number(out[k]) || 0) + v.__inc;
    else if (v && typeof v === 'object' && '__union' in v) {
      const arr = Array.isArray(out[k]) ? [...out[k]] : [];
      for (const it of v.__union) if (!arr.some((a) => JSON.stringify(a) === JSON.stringify(it))) arr.push(it);
      out[k] = arr;
    } else if (v && typeof v === 'object' && !Array.isArray(v)) out[k] = applyMerge(out[k], v);
    else out[k] = v;
  }
  return out;
}

// ───────────────────────── demo adapter ─────────────────────────
function demoAdapter() {
  const KEY = 'study-coach-demo-v1';
  const subs = new Set();
  let user = null;
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } };
  const save = (d) => { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch { /* storage blocked */ } mem = d; };
  let mem = load();
  const notify = () => subs.forEach((fn) => fn());
  window.addEventListener('storage', (e) => { if (e.key === KEY) { mem = load(); notify(); } });

  const get = (path) => path.split('/').reduce((o, k) => (o ? o[k] : undefined), mem);
  const snap = (path) => { const v = get(path); return v ? structuredClone(v) : v; }; // callers get a copy
  const setAt = (path, value) => {
    const d = structuredClone(mem); const keys = path.split('/'); let o = d;
    keys.slice(0, -1).forEach((k) => { o[k] = o[k] || {}; o = o[k]; });
    o[keys.at(-1)] = value; save(d); notify();
  };
  const watch = (fn) => { subs.add(fn); fn(); return () => subs.delete(fn); };
  let authCb = null;
  const savedRole = (() => { try { return sessionStorage.getItem('sc-demo-role'); } catch { return null; } })();
  if (savedRole) user = { uid: savedRole === 'master' ? DEMO_MASTER : DEMO_STUDENT, email: `${savedRole}@demo` };

  return {
    mode: 'demo',
    onAuth(cb) { authCb = cb; cb(user); },
    async demoSignIn(role) {
      user = { uid: role === 'master' ? DEMO_MASTER : DEMO_STUDENT, email: `${role}@demo` };
      try { sessionStorage.setItem('sc-demo-role', role); } catch {}
      authCb && authCb(user);
    },
    async signIn() { throw new Error('Demo mode — use the demo buttons.'); },
    async signOut() { user = null; try { sessionStorage.removeItem('sc-demo-role'); } catch {} authCb && authCb(null); },
    roleOf(u) { return u && u.uid === DEMO_MASTER ? 'master' : 'student'; },
    studentId() { return DEMO_STUDENT; },
    async resetDemo() { save({}); notify(); },

    watchSettings(cb) { return watch(() => cb(snap('settings') || {})); },
    async saveSettings(patch) { setAt('settings', applyMerge(get('settings'), patch)); },

    watchLessons(sid, cb) { return watch(() => cb(snap(`students/${sid}/lessons`) || {})); },
    async saveLesson(sid, key, patch) { setAt(`students/${sid}/lessons/${key}`, applyMerge(get(`students/${sid}/lessons/${key}`), patch)); },
    async resetLesson(sid, key) { const all = { ...(get(`students/${sid}/lessons`) || {}) }; delete all[key]; setAt(`students/${sid}/lessons`, all); },

    watchDays(sid, cb) { return watch(() => cb(snap(`students/${sid}/days`) || {})); },
    async saveDay(sid, date, patch) { setAt(`students/${sid}/days/${date}`, applyMerge(get(`students/${sid}/days/${date}`), patch)); },

    watchMeta(sid, cb) { return watch(() => cb(snap(`students/${sid}/meta`) || {})); },
    async saveMeta(sid, patch) { setAt(`students/${sid}/meta`, applyMerge(get(`students/${sid}/meta`), patch)); },
  };
}

// ───────────────────────── firebase adapter ─────────────────────────
async function firebaseAdapter() {
  const [{ initializeApp }, A, F] = await Promise.all([
    import(FB + 'firebase-app.js'),
    import(FB + 'firebase-auth.js'),
    import(FB + 'firebase-firestore.js'),
  ]);
  mark('firebase code loaded');
  const app = initializeApp(CFG.firebase);
  const auth = A.getAuth(app);
  let db;
  // iOS Safari: IndexedDB-backed persistence and streaming connections can stall for minutes.
  // Memory cache + long polling is slower in theory but reliable on iPhone/iPad.
  try { db = F.initializeFirestore(app, { localCache: F.memoryLocalCache(), experimentalForceLongPolling: true }); }
  catch { db = F.getFirestore(app); }
  mark('database ready');

  // Convert our {__inc}/{__union} markers into Firestore field values.
  const toFs = (obj) => {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      if (v && typeof v === 'object' && '__inc' in v) out[k] = F.increment(v.__inc);
      else if (v && typeof v === 'object' && '__union' in v) out[k] = F.arrayUnion(...v.__union);
      else if (v && typeof v === 'object' && !Array.isArray(v)) out[k] = toFs(v);
      else out[k] = v;
    }
    return out;
  };
  const merge = (ref, patch) => F.setDoc(ref, toFs(patch), { merge: true });
  const watchCol = (name, path, cb, q) => {
    let first = true;
    return F.onSnapshot(q || F.collection(db, path), (snap) => {
      if (first) { first = false; mark(`${name} loaded (${snap.size})`); }
      const out = {}; snap.forEach((d) => { out[d.id] = d.data(); }); cb(out);
    }, (err) => { mark(`${name} FAILED: ${err.code}`); console.warn('watch failed', name, err); cb({}); });
  };
  const watchDoc = (name, path, cb) => {
    let first = true;
    return F.onSnapshot(F.doc(db, path), (s) => {
      if (first) { first = false; mark(`${name} loaded`); }
      cb(s.data() || {});
    }, (err) => { mark(`${name} FAILED: ${err.code}`); cb({}); });
  };

  return {
    mode: 'firebase',
    onAuth(cb) { A.onAuthStateChanged(auth, (u) => { mark(u ? 'signed in' : 'signed out'); cb(u); }); },
    async signIn(email, pw) { await A.signInWithEmailAndPassword(auth, email, pw); },
    async signOut() { await A.signOut(auth); },
    roleOf(u) { return u && u.uid === CFG.MASTER_UID ? 'master' : 'student'; },
    studentId() { return CFG.STUDENT_UID; },

    watchSettings(cb) { return watchDoc('settings', 'settings/main', cb); },
    async saveSettings(patch) { await merge(F.doc(db, 'settings/main'), patch); },

    watchLessons(sid, cb) { return watchCol('lessons', `students/${sid}/lessons`, cb); },
    async saveLesson(sid, key, patch) { await merge(F.doc(db, `students/${sid}/lessons/${key}`), patch); },
    async resetLesson(sid, key) { await F.deleteDoc(F.doc(db, `students/${sid}/lessons/${key}`)); },

    watchDays(sid, cb) {
      const col = F.collection(db, `students/${sid}/days`);
      return watchCol('days', null, cb, F.query(col, F.orderBy(F.documentId(), 'desc'), F.limit(60)));
    },
    async saveDay(sid, date, patch) { await merge(F.doc(db, `students/${sid}/days/${date}`), patch); },

    watchMeta(sid, cb) { return watchDoc('meta', `students/${sid}/meta/state`, cb); },
    async saveMeta(sid, patch) { await merge(F.doc(db, `students/${sid}/meta/state`), patch); },
  };
}

export async function createStore() {
  return isDemo ? demoAdapter() : firebaseAdapter();
}
