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
    async idToken() { return 'demo'; },   // the tutor (/api/tutor) refuses it; tests stub that endpoint
    studentId() { return DEMO_STUDENT; },
    async resetDemo() { save({}); notify(); },
    exportDemo() { return JSON.stringify(mem); },
    async importDemo(json) { try { save(JSON.parse(json)); notify(); } catch {} },

    watchSettings(cb) { return watch(() => cb(snap('settings') || {})); },
    async saveSettings(patch) { setAt('settings', applyMerge(get('settings'), patch)); },

    watchLessons(sid, cb) { return watch(() => cb(snap(`students/${sid}/lessons`) || {})); },
    async saveLesson(sid, key, patch) { setAt(`students/${sid}/lessons/${key}`, applyMerge(get(`students/${sid}/lessons/${key}`), patch)); },
    async resetLesson(sid, key) { const all = { ...(get(`students/${sid}/lessons`) || {}) }; delete all[key]; setAt(`students/${sid}/lessons`, all); },
    async replaceLesson(sid, key, obj) { setAt(`students/${sid}/lessons/${key}`, obj); },

    watchDays(sid, cb) { return watch(() => cb(snap(`students/${sid}/days`) || {})); },
    async saveDay(sid, date, patch) { setAt(`students/${sid}/days/${date}`, applyMerge(get(`students/${sid}/days/${date}`), patch)); },

    watchMeta(sid, cb) { return watch(() => cb(snap(`students/${sid}/meta`) || {})); },
    async saveMeta(sid, patch) { setAt(`students/${sid}/meta`, applyMerge(get(`students/${sid}/meta`), patch)); },

    watchLive(sid, cb) { return watch(() => cb(snap(`students/${sid}/live`) || {})); },
    async saveLive(sid, obj) { setAt(`students/${sid}/live`, obj); },

    watchChat(sid, cb) { return watch(() => cb(Object.entries(snap(`students/${sid}/chat`) || {}).map(([id, m]) => ({ id, ...m })).sort((a, b) => a.at - b.at))); },
    async sendChat(sid, msg) { setAt(`students/${sid}/chat/${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`, msg); },
    watchChatRead(sid, cb) { return watch(() => cb(snap(`students/${sid}/chatRead`) || {})); },
    async saveLog(sid, date, entries) { setAt(`students/${sid}/log/${date}`, applyMerge(get(`students/${sid}/log/${date}`), { entries: union(...entries) })); },
    async getLog(sid, date) { return snap(`students/${sid}/log/${date}`) || {}; },
    async saveChatRead(sid, patch) { setAt(`students/${sid}/chatRead`, applyMerge(get(`students/${sid}/chatRead`), patch)); },
    // Missed quiz questions (js/misses.js), newest first.
    watchMisses(sid, cb) { return watch(() => cb(Object.entries(snap(`students/${sid}/misses`) || {}).map(([id, m]) => ({ id, ...m })).sort((a, b) => (b.at || 0) - (a.at || 0)))); },
    async addMiss(sid, rec) { const id = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`; setAt(`students/${sid}/misses/${id}`, rec); return id; },
    async patchMiss(sid, id, patch) { setAt(`students/${sid}/misses/${id}`, applyMerge(get(`students/${sid}/misses/${id}`), patch)); },
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
    }, (err) => { mark(`${name} FAILED: ${err.code}`); console.warn('watch failed', name, err); cb({}, err.code || 'error'); });
  };
  const watchDoc = (name, path, cb) => {
    let first = true;
    return F.onSnapshot(F.doc(db, path), (s) => {
      if (first) { first = false; mark(`${name} loaded`); }
      cb(s.data() || {});
    }, (err) => { mark(`${name} FAILED: ${err.code}`); console.warn('watch failed', name, err); cb({}, err.code || 'error'); });
  };

  return {
    mode: 'firebase',
    onAuth(cb) { A.onAuthStateChanged(auth, (u) => { mark(u ? 'signed in' : 'signed out'); cb(u); }); },
    async signIn(email, pw) { await A.signInWithEmailAndPassword(auth, email, pw); },
    async signOut() { await A.signOut(auth); },
    roleOf(u) { return u && u.uid === CFG.MASTER_UID ? 'master' : 'student'; },
    async idToken() { return auth.currentUser ? auth.currentUser.getIdToken() : null; },   // proves who he is to /api/tutor
    studentId() { return CFG.STUDENT_UID; },

    watchSettings(cb) { return watchDoc('settings', 'settings/main', cb); },
    async saveSettings(patch) { await merge(F.doc(db, 'settings/main'), patch); },

    watchLessons(sid, cb) { return watchCol('lessons', `students/${sid}/lessons`, cb); },
    async saveLesson(sid, key, patch) { await merge(F.doc(db, `students/${sid}/lessons/${key}`), patch); },
    async resetLesson(sid, key) { await F.deleteDoc(F.doc(db, `students/${sid}/lessons/${key}`)); },
    async replaceLesson(sid, key, obj) { await F.setDoc(F.doc(db, `students/${sid}/lessons/${key}`), toFs(obj)); },   // whole doc, no merge

    // Plain collection read (one small doc per study day). Don't add orderBy(documentId(), 'desc') here:
    // a descending sort on the doc ID needs an index Firestore doesn't make by default, and the read fails.
    watchDays(sid, cb) { return watchCol('days', `students/${sid}/days`, cb); },
    async saveDay(sid, date, patch) { await merge(F.doc(db, `students/${sid}/days/${date}`), patch); },

    watchMeta(sid, cb) { return watchDoc('meta', `students/${sid}/meta/state`, cb); },
    async saveMeta(sid, patch) { await merge(F.doc(db, `students/${sid}/meta/state`), patch); },

    watchLive(sid, cb) { return watchDoc('live', `students/${sid}/meta/live`, cb); },
    async saveLive(sid, obj) { await F.setDoc(F.doc(db, `students/${sid}/meta/live`), obj); },

    // Chat: the newest 100 by time ("at" is an ordinary field, so Firestore's automatic index covers the sort).
    // If that read ever fails, fall back to a plain read of the whole collection.
    watchChat(sid, cb) {
      const list = (out) => Object.entries(out).map(([id, m]) => ({ id, ...m })).sort((a, b) => (a.at || 0) - (b.at || 0));
      const col = F.collection(db, `students/${sid}/chat`);
      let stop = watchCol('chat', null, (out, err) => {
        if (!err) return cb(list(out));
        stop = watchCol('chat (plain)', `students/${sid}/chat`, (o, e) => cb(list(o), e));
      }, F.query(col, F.orderBy('at', 'desc'), F.limit(100)));
      return () => stop();
    },
    async sendChat(sid, msg) { await F.addDoc(F.collection(db, `students/${sid}/chat`), msg); },
    watchChatRead(sid, cb) { return watchDoc('chat read', `students/${sid}/meta/chat`, cb); },
    // Activity log: one doc per day, read only when the master exports it (never watched — it can get large).
    async saveLog(sid, date, entries) { await merge(F.doc(db, `students/${sid}/log/${date}`), { entries: union(...entries) }); },
    async getLog(sid, date) { const d = await F.getDoc(F.doc(db, `students/${sid}/log/${date}`)); return d.data() || {}; },
    async saveChatRead(sid, patch) { await merge(F.doc(db, `students/${sid}/meta/chat`), patch); },
    // Missed quiz questions (js/misses.js): the newest 80 by "at" (an ordinary field: Firestore's automatic index covers it),
    // with the same plain-read fallback as the chat.
    watchMisses(sid, cb) {
      const list = (out) => Object.entries(out).map(([id, m]) => ({ id, ...m })).sort((a, b) => (b.at || 0) - (a.at || 0));
      const col = F.collection(db, `students/${sid}/misses`);
      let stop = watchCol('misses', null, (out, err) => {
        if (!err) return cb(list(out));
        stop = watchCol('misses (plain)', `students/${sid}/misses`, (o, e) => cb(list(o), e));
      }, F.query(col, F.orderBy('at', 'desc'), F.limit(80)));
      return () => stop();
    },
    async addMiss(sid, rec) { const ref = await F.addDoc(F.collection(db, `students/${sid}/misses`), rec); return ref.id; },
    async patchMiss(sid, id, patch) { await merge(F.doc(db, `students/${sid}/misses/${id}`), patch); },
  };
}

export async function createStore() {
  return isDemo ? demoAdapter() : firebaseAdapter();
}
