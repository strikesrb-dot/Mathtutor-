// Master side (you). Four tabs under the header — Today · Progress · Points · Chat — and Settings behind the gear key.
//   Today     js/master-today.js     where he is now, today's numbers and plan, shortcuts, red flags
//   Progress  js/master-progress.js  Lessons (send / reset) · Missed (Claude's breakdowns) · History (log export, past days)
//   Points    js/points-card.js      what he's owed, Mark paid, add or take away points, badges, history
//   Chat      js/chat.js             messages + nudges
//   Settings  js/master-settings.js  study plan, rules, videos, fun facts, demo tools, sign out
// This file holds his data (watchers), the header and tabs, and redraws without wiping anything you're typing.

import { buildCurriculum } from './curriculum.js';
import { esc, toast, icon, refreshSegs } from './ui.js';
import { STUDENT_NAME } from './config.js';
import { masterChat } from './chat.js';
import { closeLogSheet } from './log-export.js';
import { refreshMissSheet, fillMissing, closeMissSheet } from './misses.js';
import { pointsCardHTML, wirePointsCard } from './points-card.js';
import { drawToday, liveCardHTML } from './master-today.js';
import { drawProgress } from './master-progress.js';
import { drawSettings } from './master-settings.js';

const TABS = [['today', 'Today'], ['progress', 'Progress'], ['points', 'Points'], ['chat', 'Chat']];

export function startMaster(root, { store, sid, isDemo, onSignOut, onSwitchToStudent }) {
  const S = { settings: {}, lessons: {}, days: {}, live: {}, misses: [], points: {}, payouts: {}, err: {} };   // err = data that failed to load
  let cur = buildCurriculum({});
  let tab = 'today', back = 'today';   // back = the tab to return to from Settings
  let planCard = null;                  // Settings → Study plan; its Done / On it now labels follow his day
  const unsubs = [];

  root.innerHTML = `<div class="sc-loading"><i class="sc-spin"></i><p class="cg-meta">Loading his progress…</p></div>`;
  if (!sid) {
    root.innerHTML = `<main class="cg-content sc-main"><div class="cg-card"><h2 class="cg-title2">One more setup step</h2><p class="cg-text">Put your brother's User UID in <code>js/config.js</code> as <code>STUDENT_UID</code>.</p></div></main>`;
    return { destroy() {} };
  }
  // Created before the data watchers: in demo mode they draw the screen at once, and the tab label asks chat for unread.
  const chat = masterChat({ store, sid, onNew: (fresh) => {
    if (tab === 'chat') return;
    const m = fresh[fresh.length - 1];
    toast(`${STUDENT_NAME}: ${m.text}`, { action: () => go('chat'), label: 'Open', time: 7000 });
    badge();
  } });

  // What every tab module gets (js/master-shared.js describes it).
  const M = {
    S, store, sid, chat, isDemo, onSignOut, onSwitchToStudent,
    get cur() { return cur; },
    ui: { part: 'lessons', open: new Set(), openUnits: new Set(), unitsSeeded: false, editLesson: '' },
    go, render: () => render(),
  };

  let rendered = false;
  const have = { l: false, d: false };
  const gate = (k) => { have[k] = true; if (!rendered && have.l && have.d) { rendered = true; render(); } };
  const slow = setTimeout(() => { if (!rendered) { rendered = true; render(); } }, 6000);
  unsubs.push(() => clearTimeout(slow));
  unsubs.push(store.watchSettings((s, err) => { S.settings = s; S.err.settings = err; cur = buildCurriculum(s); if (rendered) softRender(); }));
  unsubs.push(store.watchLessons(sid, (l, err) => { S.lessons = l || {}; S.err.lessons = err; rendered ? softRender() : gate('l'); }));
  unsubs.push(store.watchDays(sid, (d, err) => { S.days = d || {}; S.err.days = err; rendered ? softRender() : gate('d'); }));
  unsubs.push(store.watchLive(sid, (l, err) => { S.live = l || {}; S.err.live = err; updateLive(); }));
  unsubs.push(store.watchPoints(sid, (p, err) => { S.points = p || {}; S.err.points = err; if (rendered) softRender(); }));
  unsubs.push(store.watchPayouts(sid, (p, err) => { S.payouts = p || {}; S.err.payouts = err; if (rendered) softRender(); }));
  // missed quiz questions + Claude's breakdowns (js/misses.js); fills in any breakdown his app didn't finish
  unsubs.push(store.watchMisses(sid, (m, err) => { S.misses = m || []; S.err.misses = err; refreshMissSheet(S.misses); fillMissing(store, sid, S.misses); if (rendered) softRender(); }));
  const liveTimer = setInterval(() => { if (tab === 'today') softRender(); }, 30000);
  const cardTimer = setInterval(updateLive, 5000);   // keeps "on the app now" / "last seen" honest between saves

  // New data redraws the open tab, except: Chat (a half-typed message), Settings (its forms; the plan card refreshes
  // itself), or any tab while you're typing in one of its boxes (the points form).
  function typing() { const a = document.activeElement; return !!a && root.contains(a) && /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName); }
  function softRender() {
    badge();
    if (tab === 'settings') { if (planCard) planCard.refresh(); return; }
    if (tab === 'chat' || typing()) return;
    render();
  }
  function tabLabel(t, label) { const n = t === 'chat' ? chat.unread() : 0; return n ? `${label} · ${n}` : label; }
  function badge() { const b = root.querySelector('.sc-tabs [data-t=chat]'); if (b && b.textContent !== tabLabel('chat', 'Chat')) { b.textContent = tabLabel('chat', 'Chat'); refreshSegs(); } }
  function go(t, part) {
    if (t === 'settings' && tab !== 'settings') back = tab;
    tab = t; if (part) M.ui.part = part;
    render(); window.scrollTo(0, 0);
  }

  function render() {
    const scrollY = window.scrollY;
    planCard = null;
    const head = tab === 'settings'
      ? `<button class="cg-key cg-key-start" type="button" id="back" aria-label="Back">${icon('back')}</button>
         <h1 class="cg-header-title">Settings<small>Plan, rules, videos</small></h1>`
      : `<h1 class="cg-header-title">Master view<small>${esc(STUDENT_NAME)}'s study coach${isDemo ? ' · demo' : ''}</small></h1>
         <button class="cg-key cg-key-end" type="button" id="gear" aria-label="Settings">${icon('gear')}</button>`;
    root.innerHTML = `
      <header class="cg-header">${head}</header>
      <main class="cg-content sc-main">
        ${tab === 'settings' ? '' : `<div class="cg-seg sc-tabs" role="group" aria-label="Section">${TABS.map(([t, label]) => `<button type="button" data-t="${t}" aria-pressed="${t === tab}">${tabLabel(t, label)}</button>`).join('')}</div>`}
        <div id="mbody"></div>
      </main>`;
    root.querySelectorAll('.sc-tabs > button').forEach((b) => { b.onclick = () => { if (tab !== b.dataset.t) go(b.dataset.t); }; });
    const gear = root.querySelector('#gear'); if (gear) gear.onclick = () => go('settings');
    const bk = root.querySelector('#back'); if (bk) bk.onclick = () => go(back);
    const body = root.querySelector('#mbody');
    if (tab === 'today') drawToday(body, M);
    if (tab === 'progress') drawProgress(body, M);
    if (tab === 'points') drawPoints(body);
    if (tab === 'settings') planCard = drawSettings(body, M);
    if (tab === 'chat') { chat.panel(body); badge(); }
    refreshSegs();
    window.scrollTo(0, scrollY);
  }

  function drawPoints(body) {
    body.innerHTML = pointsCardHTML(S.points, S.payouts, cur.rules);
    wirePointsCard(body, { store, sid, points: () => S.points, payouts: () => S.payouts, rules: cur.rules, redraw: () => { if (tab === 'points') render(); } });
  }
  function updateLive() {
    const box = tab === 'today' && root.querySelector('#liveCard');
    if (box) box.innerHTML = liveCardHTML(M);
  }

  return { destroy() { clearInterval(liveTimer); clearInterval(cardTimer); chat.destroy(); closeLogSheet(); closeMissSheet(); unsubs.forEach((u) => { try { u && u(); } catch {} }); } };
}
