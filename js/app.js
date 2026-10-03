// Boot: pick the data store, sign in, then open the student or master side.

import { createStore, isDemo, marks, mark } from './store.js';
import { startStudent } from './student.js';
import { startMaster } from './master.js';
import { MASTER_UID, STUDENT_UID } from './config.js';
import { esc } from './ui.js';

const root = document.getElementById('app');
let current = null;

function showLogin(store, err = '') {
  current && current.destroy(); current = null;
  root.innerHTML = `
    <main class="login">
      <div class="card login-card">
        <div class="logo">📚</div>
        <h1>Study Coach</h1>
        <p class="muted">Weekend study — Algebra 1 &amp; Biology</p>
        ${isDemo ? `
          <div class="demo-note">DEMO MODE — nothing is shared between devices yet. Follow SETUP.html to connect the database.</div>
          <button class="btn btn-big" data-role="student">Open as student</button>
          <button class="btn btn-ghost btn-big" data-role="master">Open as master (you)</button>`
        : `
          <form id="lf">
            <label class="field"><span>Email</span><input type="email" id="em" autocomplete="username" required></label>
            <label class="field"><span>Password</span><input type="password" id="pw" autocomplete="current-password" required></label>
            ${err ? `<div class="err">${esc(err)}</div>` : ''}
            <button class="btn btn-big" type="submit">Sign in</button>
          </form>`}
      </div>
    </main>`;
  if (isDemo) {
    root.querySelectorAll('[data-role]').forEach((b) => { b.onclick = () => store.demoSignIn(b.dataset.role); });
  } else {
    root.querySelector('#lf').onsubmit = async (e) => {
      e.preventDefault();
      const btn = e.target.querySelector('button'); btn.disabled = true; btn.textContent = 'Signing in…';
      try { await store.signIn(root.querySelector('#em').value.trim(), root.querySelector('#pw').value); }
      catch (ex) { showLogin(store, /invalid|wrong|not-found|credential/i.test(ex.code || ex.message) ? 'Email or password is wrong.' : 'Couldn\'t sign in. Check the Wi-Fi and try again.'); }
    };
  }
}

async function boot() {
  let store;
  try { store = await createStore(); }
  catch (e) {
    root.innerHTML = `<main class="login"><div class="card login-card"><h1>Can't connect</h1><p>Couldn't load the database. Check the Wi-Fi and reload.</p><p class="muted">${esc(e.message)}</p></div></main>`;
    return;
  }
  store.onAuth((user) => {
    current && current.destroy(); current = null;
    if (!user) return showLogin(store);
    const role = store.roleOf(user);
    const sid = store.studentId();
    const signOut = () => store.signOut();
    if (!isDemo && role !== 'master' && user.uid !== STUDENT_UID) {
      root.innerHTML = `<main class="login"><div class="card login-card"><h1>Account not set up</h1>
        <p>This account isn't the master or the student. Check the UIDs in <code>js/config.js</code>.</p>
        <p class="muted">Your UID: <code>${esc(user.uid)}</code></p><button class="btn" id="so">Sign out</button></div></main>`;
      root.querySelector('#so').onclick = signOut;
      return;
    }
    if (role === 'master') {
      current = startMaster(root, { store, sid, isDemo, onSignOut: signOut, onSwitchToStudent: () => store.demoSignIn('student') });
    } else {
      current = startStudent(root, { store, sid, onSignOut: signOut });
    }
  });
}

if (!isDemo && (!MASTER_UID || !STUDENT_UID)) console.warn('Set MASTER_UID and STUDENT_UID in js/config.js');
if (/[?&]debug/.test(location.search)) {
  const box = document.createElement('pre');
  box.style.cssText = 'position:fixed;left:8px;bottom:8px;z-index:2000;background:rgba(0,0,0,.82);color:#7CFC9A;font:12px/1.4 ui-monospace,Menlo,monospace;padding:8px 10px;border-radius:10px;max-width:92vw;white-space:pre-wrap;pointer-events:none';
  document.body.appendChild(box);
  const draw = () => { box.textContent = 'STARTUP TIMING\n' + marks.join('\n'); };
  window.addEventListener('sc-mark', draw); draw();
}
mark('app started');
boot();
