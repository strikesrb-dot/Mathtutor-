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
    <main class="cg-content sc-main sc-login">
      <h1 class="cg-large-title">Study Coach</h1>
      <p class="cg-meta">Weekend study — Algebra 1 and Biology</p>
      ${isDemo ? `
        <div class="cg-card"><p class="cg-headline">Demo mode</p><p class="cg-meta">Nothing is shared between devices yet. Follow SETUP.html to connect the database.</p></div>
        <div class="sc-actions sc-stack">
          <button class="cg-btn cg-btn-strong cg-btn-block" data-role="student">Open as student</button>
          <button class="cg-btn cg-btn-glass cg-btn-block" data-role="master">Open as master (you)</button>
        </div>`
      : `
        <form id="lf" class="sc-form">
          <label class="cg-field"><input type="email" id="em" autocomplete="username" placeholder="Email" aria-label="Email" required></label>
          <label class="cg-field"><input type="password" id="pw" autocomplete="current-password" placeholder="Password" aria-label="Password" required></label>
          ${err ? `<p class="cg-meta err">${esc(err)}</p>` : ''}
          <button class="cg-btn cg-btn-strong cg-btn-block" type="submit">Sign in</button>
        </form>`}
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
    root.innerHTML = `<main class="cg-content sc-main sc-login"><h1 class="cg-title1">Can't connect</h1><div class="cg-card"><p class="cg-text">Couldn't load the database. Check the Wi-Fi and reload.</p><p class="cg-meta">${esc(e.message)}</p></div></main>`;
    return;
  }
  store.onAuth((user) => {
    current && current.destroy(); current = null;
    if (!user) return showLogin(store);
    const role = store.roleOf(user);
    const sid = store.studentId();
    const signOut = () => store.signOut();
    if (!isDemo && role !== 'master' && user.uid !== STUDENT_UID) {
      root.innerHTML = `<main class="cg-content sc-main sc-login"><h1 class="cg-title1">Account not set up</h1>
        <div class="cg-card"><p class="cg-text">This account isn't the master or the student. Check the UIDs in <code>js/config.js</code>.</p>
        <p class="cg-meta">Your UID: <code>${esc(user.uid)}</code></p></div>
        <div class="sc-actions"><button class="cg-btn cg-btn-strong" id="so">Sign out</button></div></main>`;
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
  box.className = 'sc-debug';
  document.body.appendChild(box);
  const draw = () => { box.textContent = 'STARTUP TIMING\n' + marks.join('\n'); };
  window.addEventListener('sc-mark', draw); draw();
}
mark('app started');
boot();
