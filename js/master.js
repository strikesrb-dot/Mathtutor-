// Master side (you): live status, today's time, red flags, lesson progress, written answers, settings.
// Drawn with Calm Glass: shared header, a segmented control for the three tabs, grouped lists, steppers.

import { buildCurriculum, lessonStage, currentLesson, todayKey, dayStatus, videosDone, doneCount, originalVideos } from './curriculum.js';
import { esc, hm, toast, parseYouTubeId, icon, refreshSegs, bar } from './ui.js';
import { STUDENT_NAME } from './config.js';
import factsDefault from '../content/facts.js';

const FLAG_LABEL = {
  leftApp: 'Left the app',
  missedCheck: 'Missed "Still watching?"',
  pausedLong: 'Video paused too long',
  idle: 'Went idle',
  skipTry: 'Tried to skip ahead',
  videoError: 'A video wouldn\'t play',
  manyTries: 'Passed a quiz only after 3+ tries',
};
const STAGE_LABEL = { watch: 'Watching', learn: 'Reading', quiz: 'Quiz', real: 'Real-life answer', done: 'Done' };
const STEP_LABEL = { A1: 'Algebra · Block 1', A2: 'Algebra · Block 2', F1: 'Fun video 1', B1: 'Biology · Block 1', B2: 'Biology · Block 2', F2: 'Fun video 2', X: 'Extra practice' };
const TABS = [['overview', 'Overview'], ['lessons', 'Lessons'], ['settings', 'Settings']];

export function startMaster(root, { store, sid, isDemo, onSignOut, onSwitchToStudent }) {
  const S = { settings: {}, lessons: {}, days: {}, live: {} };
  let cur = buildCurriculum({});
  let tab = 'overview';
  const open = new Set();
  const openUnits = new Set();
  let unitsSeeded = false;
  const unsubs = [];
  let editLesson = '';

  root.innerHTML = `<div class="sc-loading"><i class="sc-spin"></i><p class="cg-meta">Loading his progress…</p></div>`;
  if (!sid) {
    root.innerHTML = `<main class="cg-content sc-main"><div class="cg-card"><h2 class="cg-title2">One more setup step</h2><p class="cg-text">Put your brother's User UID in <code>js/config.js</code> as <code>STUDENT_UID</code>.</p></div></main>`;
    return { destroy() {} };
  }
  let rendered = false;
  const have = { l: false, d: false };
  const gate = (k) => { have[k] = true; if (!rendered && have.l && have.d) { rendered = true; render(); } };
  const slow = setTimeout(() => { if (!rendered) { rendered = true; render(); } }, 6000);
  unsubs.push(() => clearTimeout(slow));
  unsubs.push(store.watchSettings((s) => { S.settings = s; cur = buildCurriculum(s); if (rendered) softRender(); }));
  unsubs.push(store.watchLessons(sid, (l) => { S.lessons = l || {}; rendered ? softRender() : gate('l'); }));
  unsubs.push(store.watchDays(sid, (d) => { S.days = d || {}; rendered ? softRender() : gate('d'); }));
  unsubs.push(store.watchLive(sid, (l) => { S.live = l || {}; updateLive(); }));
  const liveTimer = setInterval(() => { if (tab === 'overview') softRender(); }, 30000);
  const cardTimer = setInterval(updateLive, 5000);   // keeps "on the app now" / "last seen" honest between saves

  // Don't wipe the settings form while you're typing in it.
  function softRender() { if (tab !== 'settings') render(); }

  function render() {
    const scrollY = window.scrollY;
    root.innerHTML = `
      <header class="cg-header">
        <h1 class="cg-header-title">Master view<small>${esc(STUDENT_NAME)}'s study coach${isDemo ? ' · demo' : ''}</small></h1>
      </header>
      <main class="cg-content sc-main">
        <div class="cg-seg sc-tabs" role="group" aria-label="Section">${TABS.map(([t, label]) => `<button type="button" data-t="${t}" aria-pressed="${t === tab}">${label}</button>`).join('')}</div>
        <div id="mbody"></div>
      </main>`;
    root.querySelectorAll('.sc-tabs > button').forEach((b) => { b.onclick = () => { if (tab === b.dataset.t) return; tab = b.dataset.t; render(); window.scrollTo(0, 0); }; });
    const body = root.querySelector('#mbody');
    if (tab === 'overview') overview(body);
    if (tab === 'lessons') lessons(body);
    if (tab === 'settings') settings(body);
    refreshSegs();
    window.scrollTo(0, scrollY);
  }

  function row({ ic, label, sub = '', value = '', cls = '', tag = 'li', attrs = '' }) { return `
    <${tag} class="cg-row ${ic ? 'has-icon' : ''} ${cls}" ${attrs}>
      ${ic ? `<span class="cg-row-icon">${icon(ic)}</span>` : ''}
      <span class="cg-row-text"><span class="cg-row-label">${label}</span>${sub ? `<span class="cg-row-sub">${sub}</span>` : ''}</span>
      ${value ? `<span class="cg-row-value">${value}</span>` : ''}
    </${tag}>`; }
  function flagSum(dd) { return Object.values((dd || {}).flags || {}).reduce((a, b) => a + b, 0); }

  // ─────────────── Overview ───────────────
  function overview(body) {
    const d = S.days[todayKey()] || {};
    const goal = cur.rules.blockMinutes * 60 * 4;
    const st = dayStatus(cur.rules, d);
    const blocksDone = st.list.filter((s) => s.type === 'block' && s.done).length;
    const flags = d.flags || {};
    const flagTotal = flagSum(d);

    body.innerHTML = `
      <div id="liveCard">${liveCard()}</div>

      <p class="cg-caption">Today</p>
      <div class="sc-stats">
        <div class="cg-card sc-stat"><b class="cg-num">${d.openSec ? hm(d.openSec) : '—'}</b><span class="cg-meta">on the app</span></div>
        <div class="cg-card sc-stat"><b class="cg-num">${hm(d.activeSec || 0)}</b><span class="cg-meta">focused (counts)</span></div>
        <div class="cg-card sc-stat"><b class="cg-num">${blocksDone}/4</b><span class="cg-meta">blocks done</span></div>
        <div class="cg-card sc-stat"><b class="cg-num">${flagTotal}</b><span class="cg-meta">red flags</span></div>
      </div>
      <ul class="cg-group sc-today">
        <li class="cg-row"><span class="cg-row-text"><span class="cg-row-label">Goal: ${hm(goal)} of focused time</span>${bar(((d.activeSec || 0) / goal) * 100)}</span></li>
        ${d.openSec >= 60 && d.openSec >= (d.activeSec || 0) ? row({ label: 'Focus rate', sub: 'Share of his app time that counted', value: `${Math.round(((d.activeSec || 0) / d.openSec) * 100)}%` }) : ''}
        ${st.list.filter((s) => s.type !== 'break').map((s) => row({
          ic: s.done ? 'check' : s.type === 'fact' ? 'globe' : s.subject === 'biology' ? 'biology' : 'algebra',
          cls: s.done ? 'sc-done' : '',
          label: STEP_LABEL[s.id],
          value: s.type === 'block' ? `${Math.floor(s.sec / 60)} / ${cur.rules.blockMinutes} min` : s.done ? 'Watched' : '',
        })).join('')}
      </ul>

      <p class="cg-caption">Red flags today</p>
      <ul class="cg-group flags">${flagTotal
        ? Object.entries(flags).filter(([, v]) => v).map(([k, v]) => row({ ic: 'flag', label: FLAG_LABEL[k] || esc(k), value: `×${v}` })).join('')
        : row({ ic: 'check', label: 'No red flags today' })}</ul>
      ${d.practice ? `<p class="cg-foot">Extra practice: ${Object.entries(d.practice).map(([k, v]) => `${esc(k)} ${v.right}/${v.total}`).join(' · ')}</p>` : ''}

      <p class="cg-caption">This weekend</p>
      <ul class="cg-group">${lastWeekend().map(([key, dd]) => row({
        ic: 'clock', label: dayName(key), sub: dd ? daySub(dd) : 'No study', value: hm((dd || {}).activeSec || 0),
      })).join('')}</ul>

      <p class="cg-caption">History</p>
      <ul class="cg-group">${Object.keys(S.days).sort().reverse().slice(0, 21).map((k) => {
        const dd = S.days[k];
        return row({ label: dayName(k), sub: daySub(dd), value: hm(dd.activeSec || 0) });
      }).join('') || row({ label: 'Nothing yet' })}</ul>
      <p class="cg-foot">The time on the right is focused time (the part that counts). ${allTime()}</p>

      <p class="cg-caption">Today's activity log</p>
      <ul class="cg-group">${(d.events || []).slice().reverse().slice(0, 40).map((e) => row({
        ic: 'flag', label: FLAG_LABEL[e.type] || esc(e.type), sub: e.step ? STEP_LABEL[e.step] || esc(e.step) : '',
        value: new Date(e.t).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
      })).join('') || row({ label: 'Nothing flagged' })}</ul>`;
  }

  function daySub(dd) { return `${dd.openSec ? hm(dd.openSec) + ' on the app · ' : ''}${Object.keys(dd.blocksDone || {}).length}/4 blocks · ${flagSum(dd)} flags`; }
  function allTime() {
    let a = 0, o = 0;
    for (const dd of Object.values(S.days)) { a += dd.activeSec || 0; o += dd.openSec || 0; }
    return a || o ? `All time: ${hm(a)} focused${o ? ` · ${hm(o)} on the app` : ''}.` : '';
  }

  // ── "Right now" card. His app saves where he is to students/{uid}/meta/live: at once on every new screen,
  // and every 10–30 seconds while he's on it. Older app versions only left day.lastSeen, so that's the fallback.
  function liveCard() {
    const L = S.live || {};
    if (!L.at) return oldLiveCard();
    const age = Math.max(0, (Date.now() - L.at) / 1000);
    const online = L.visible !== false && age < 50;
    const ago = age < 60 ? 'just now' : agoText(Math.round(age / 60));
    const head = online ? 'On the app now' : L.visible === false ? `Left the app ${ago}` : `App closed · last seen ${ago}`;
    const status = !online ? '' : L.flashing ? 'Red alert showing' : L.counting ? 'Counting' : 'Not counting';
    const clock = (t) => new Date(t).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    const sessionOld = !online && age > 600;
    return `
      <p class="cg-caption">${online ? 'Right now' : 'Where he stopped'}</p>
      <ul class="cg-group sc-live ${online ? 'is-live' : ''}">
        <li class="cg-row has-icon"><span class="cg-row-icon"><i class="sc-live-dot"></i></span>
          <span class="cg-row-text"><span class="cg-row-label">${head}</span></span>${status ? `<span class="cg-row-value">${status}</span>` : ''}</li>
        ${row({ ic: L.view === 'break' ? 'cup' : L.view === 'fact' ? 'globe' : L.view === 'home' ? 'list' : /biology/i.test(L.title || '') ? 'biology' : 'algebra',
          label: esc(L.title || 'Home screen'), sub: esc([L.lesson, L.sub].filter(Boolean).join(' · ')) })}
        ${L.detail ? row({ ic: 'play', label: esc(L.stage ? `${L.stage}: ${L.detail}` : L.detail), sub: esc(L.pos || '') }) : ''}
        ${L.sessionStart ? row({ ic: 'clock', label: sessionOld ? 'Last session' : 'This session',
          sub: `Started ${clock(L.sessionStart)} · ${hm(L.sessionOpen || 0)} on the app · ${hm(L.sessionFocus || 0)} focused${L.sessionOpen >= 60 ? ` (${Math.round(((L.sessionFocus || 0) / L.sessionOpen) * 100)}%)` : ''}` }) : ''}
      </ul>`;
  }
  function oldLiveCard() {
    const seen = latestSeen();
    const ago = seen ? Math.round((Date.now() - seen.t) / 60000) : null;
    const live = ago != null && ago < 2;
    return `<ul class="cg-group sc-live ${live ? 'is-live' : ''}">
      <li class="cg-row has-icon"><span class="cg-row-icon"><i class="sc-live-dot"></i></span>
        <span class="cg-row-text"><span class="cg-row-label">${live ? 'Studying right now' : ago == null ? 'Hasn\'t started yet' : `Last active ${agoText(ago)}`}</span>
        ${seen && seen.step ? `<span class="cg-row-sub">${STEP_LABEL[seen.step] || esc(seen.step)}${seen.lesson ? ' · ' + esc(lessonTitle(seen.lesson)) : ''}</span>` : ''}</span></li>
    </ul>`;
  }
  function updateLive() {
    const box = tab === 'overview' && root.querySelector('#liveCard');
    if (box) box.innerHTML = liveCard();
  }

  function latestSeen() {
    let best = null;
    for (const dd of Object.values(S.days)) if (dd.lastSeen && (!best || dd.lastSeen > best.t)) best = { t: dd.lastSeen, step: dd.lastStep, lesson: dd.lastLesson };
    return best;
  }
  function lastWeekend() {
    const d = new Date();
    const sat = new Date(d); sat.setDate(d.getDate() - ((d.getDay() + 1) % 7));
    const sun = new Date(sat); sun.setDate(sat.getDate() + 1);
    return [sat, sun].map((x) => { const k = todayKey(x); return [k, S.days[k]]; });
  }
  function dayName(k) { const [y, m, dd] = k.split('-').map(Number); return new Date(y, m - 1, dd).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' }); }
  function agoText(m) { return m < 60 ? `${m} min ago` : m < 1440 ? `${Math.round(m / 60)} h ago` : `${Math.round(m / 1440)} days ago`; }
  function allLessons() { return [...cur.algebra.units, ...cur.biology.units].flatMap((u) => u.lessons); }
  function lessonTitle(key) { return allLessons().find((l) => l.key === key)?.title || key; }

  // ─────────────── Lessons ───────────────
  function lessons(body) {
    if (!unitsSeeded) {   // open the unit he is working in
      unitsSeeded = true;
      for (const subj of ['algebra', 'biology']) { const L = currentLesson(cur[subj], S.lessons); if (L) openUnits.add(L.u.id); }
    }
    body.innerHTML = ['algebra', 'biology'].map((subj) => {
      const course = cur[subj];
      const now = currentLesson(course, S.lessons);
      const done = doneCount(course.lessons, S.lessons);
      return `<p class="cg-caption">${esc(course.name)} — ${done} of ${course.lessons.length} lessons done</p>
        <div class="cg-group">${course.units.map((u) => {
          const uDone = doneCount(u.lessons, S.lessons);
          const isOpen = openUnits.has(u.id);
          const skipped = course.startUnit && u.n < course.startUnit;
          return `
            <button type="button" class="cg-row unit-row ${now && now.u.id === u.id ? 'sc-current' : ''}" data-u="${u.id}" aria-expanded="${isOpen}">
              <span class="cg-row-text"><span class="cg-row-label">Unit ${u.n}: ${esc(u.title)}</span><span class="cg-row-sub">${skipped ? 'Skipped (before the start unit)' : `${uDone} of ${u.lessons.length} lessons done`}</span>${skipped ? '' : bar((uDone / u.lessons.length) * 100)}</span>
              <span class="cg-chev ${isOpen ? 'is-open' : ''}"></span>
            </button>
            ${isOpen ? u.lessons.map((l) => lessonRows(l, now)).join('') : ''}`;
        }).join('')}</div>`;
    }).join('');
    body.querySelectorAll('.unit-row').forEach((b) => { b.onclick = () => { const k = b.dataset.u; openUnits.has(k) ? openUnits.delete(k) : openUnits.add(k); render(); }; });
    body.querySelectorAll('.lesson-row').forEach((b) => { b.onclick = () => { const k = b.dataset.k; open.has(k) ? open.delete(k) : open.add(k); render(); }; });
    // Destructive: do it at once, offer Undo (Calm Glass rule 12 — no confirm dialogs).
    body.querySelectorAll('[data-reset]').forEach((b) => {
      b.onclick = async () => {
        const key = b.dataset.reset;
        const before = JSON.parse(JSON.stringify(S.lessons[key] || {}));
        await store.resetLesson(sid, key);
        toast('Lesson reset', { action: () => store.saveLesson(sid, key, before).then(() => toast('Restored')), label: 'Undo' });
      };
    });
  }

  function lessonRows(l, now) {
    const p = S.lessons[l.key] || {};
    const stage = lessonStage(l, p);
    const q = p.quiz || {};
    const isOpen = open.has(l.key);
    const status = p.timeSec || stage !== 'watch' ? STAGE_LABEL[stage] : 'Not started';
    const sub = `${p.timeSec ? hm(p.timeSec) + ' · ' : ''}${videosDone(l, p)}/${l.videos.length} videos · quiz ${q.best != null ? q.best + '%' : '—'}${q.attempts ? ` (${q.attempts.length} ${q.attempts.length === 1 ? 'try' : 'tries'})` : ''}`;
    const many = q.passed && (q.passedOnTry || (q.attempts || []).length) >= cur.rules.manyTries;
    return `
      <button type="button" class="cg-row has-icon lesson-row ${now && now.key === l.key ? 'sc-current' : ''}" data-k="${l.key}" aria-expanded="${isOpen}">
        <span class="cg-row-icon">${stage === 'done' ? `<span class="sc-on">${icon('check')}</span>` : `<span class="sc-n cg-num">${l.i}</span>`}</span>
        <span class="cg-row-text"><span class="cg-row-label">${esc(l.title)}</span><span class="cg-row-sub">${sub}</span>${many ? `<span class="cg-row-sub sc-flagged">${icon('flag')} Passed only on try ${q.passedOnTry || q.attempts.length} — check his written answer</span>` : ''}</span>
        <span class="cg-row-value">${status}</span><span class="cg-chev ${isOpen ? 'is-open' : ''}"></span>
      </button>
      ${isOpen ? `<div class="cg-row cg-row-tall lesson-detail"><div class="cg-row-block">
        ${p.realLife && p.realLife.answer
          ? `<p class="cg-meta">His real-life answer</p><blockquote class="sc-quote">${esc(p.realLife.answer)}</blockquote><p class="cg-meta">Question: ${esc(l.realLife.prompt)}</p>`
          : '<p class="cg-meta">No real-life answer yet.</p>'}
        ${q.attempts && q.attempts.length ? `<p class="cg-meta">Quiz tries</p><ul class="sc-tries">${q.attempts.map((a) => `<li><span>${new Date(a.at).toLocaleString([], { weekday: 'short', hour: 'numeric', minute: '2-digit' })}</span><b class="cg-num ${a.pct >= cur.rules.passPct ? 'sc-pass' : ''}">${a.right}/${a.total} · ${a.pct}%${a.pct >= cur.rules.passPct ? ' ✓' : ''}</b></li>`).join('')}</ul>` : ''}
        <button type="button" class="cg-btn cg-btn-plain sc-danger-text" data-reset="${l.key}">Reset this lesson</button>
      </div></div>` : ''}`;
  }

  // ─────────────── Settings ───────────────
  function settings(body) {
    const all = allLessons();
    if (!editLesson) editLesson = all[0].key;
    const L = all.find((l) => l.key === editLesson) || all[0];
    const factsText = cur.facts.map((x) => `https://youtu.be/${x.id} | ${x.title} | ${x.cat || ''} | ${x.blurb || ''}`).join('\n');
    const stepper = (id, value, min, max, step) => `<div class="cg-stepper" data-id="${id}" data-min="${min}" data-max="${max}" data-step="${step}">
      <button type="button" class="sc-step-btn" data-d="-1" aria-label="Less">−</button><span class="cg-stepper-value" id="${id}">${value}</span><button type="button" class="sc-step-btn" data-d="1" aria-label="More">+</button></div>`;
    body.innerHTML = `
      <p class="cg-caption">Study rules</p>
      <div class="cg-group">
        <div class="cg-row"><span class="cg-row-text"><span class="cg-row-label">Minutes per block</span><span class="cg-row-sub">Focused time, plus a 10-minute break</span></span>${stepper('bm', cur.rules.blockMinutes, 10, 90, 5)}</div>
        <div class="cg-row"><span class="cg-row-text"><span class="cg-row-label">Quiz pass mark</span><span class="cg-row-sub">Percent needed to pass a lesson</span></span>${stepper('pp', cur.rules.passPct, 50, 100, 5)}</div>
        ${['algebra', 'biology'].map((subj) => `<label class="cg-row cg-row-tall"><span class="cg-row-text"><span class="cg-row-label">Start ${esc(cur[subj].name)} at</span><span class="cg-row-sub">Earlier units are skipped</span></span>
          <select id="start-${subj}" class="sc-select cg-row-block"><option value="0">Unit ${cur[subj].units[0] ? cur[subj].units[0].n : 1} (the beginning)</option>${cur[subj].units.slice(1).map((u) => `<option value="${u.n}" ${cur[subj].startUnit === u.n ? 'selected' : ''}>Unit ${u.n}: ${esc(u.title)}</option>`).join('')}</select></label>`).join('')}
      </div>
      <div class="sc-actions"><button class="cg-btn cg-btn-strong" id="saveRules">Save rules</button></div>

      <p class="cg-caption">Swap lesson videos</p>
      <div class="cg-group">
        <label class="cg-row cg-row-tall"><span class="cg-row-text"><span class="cg-row-label">Lesson</span></span>
          <select id="ls" class="sc-select cg-row-block">${['algebra', 'biology'].map((subj) => cur[subj].units.map((u) => `<optgroup label="${esc(cur[subj].name)} · Unit ${u.n}: ${esc(u.title)}">${u.lessons.map((l) => `<option value="${l.key}" ${l.key === editLesson ? 'selected' : ''}>${esc(l.title)}</option>`).join('')}</optgroup>`).join('')).join('')}</select></label>
        <div class="cg-row cg-row-tall"><div class="cg-row-block" id="vids">${L.videos.map((v) => vidRow(v)).join('')}</div>
          <div class="cg-btns cg-row-block"><button type="button" class="cg-btn cg-btn-glass" id="addVid">Add video</button><button type="button" class="cg-btn cg-btn-glass" id="saveVids">Save videos</button><button type="button" class="cg-btn cg-btn-plain" id="resetVids">Restore original</button></div></div>
      </div>
      <p class="cg-foot">Paste any YouTube link. If he already finished a video you replace, he'll need to watch the new one.</p>

      <p class="cg-caption">Fun-fact videos</p>
      <div class="cg-group">
        <div class="cg-row cg-row-tall"><div class="cg-row-block"><textarea id="facts" class="sc-textarea" rows="9" aria-label="Fun-fact videos">${esc(factsText)}</textarea></div>
          <div class="cg-btns cg-row-block"><button type="button" class="cg-btn cg-btn-glass" id="saveFacts">Save list</button><button type="button" class="cg-btn cg-btn-plain" id="resetFacts">Restore original</button></div></div>
      </div>
      <p class="cg-foot">One per line: link | title | category | short blurb. They play in order, two per day.</p>

      ${isDemo ? `<p class="cg-caption">Demo tools</p>
        <div class="cg-group">
          <button type="button" class="cg-row cg-row-accent" id="toStudent"><span class="cg-row-text"><span class="cg-row-label">Switch to student view</span></span><span class="cg-chev"></span></button>
        </div>
        <div class="cg-group"><button type="button" class="cg-row cg-row-danger" id="wipe"><span class="cg-row-text"><span class="cg-row-label">Wipe demo data</span></span></button></div>` : ''}

      <div class="cg-group sc-signout"><button type="button" class="cg-row cg-row-danger has-icon" id="out"><span class="cg-row-icon">${icon('out')}</span><span class="cg-row-text"><span class="cg-row-label">Sign out</span></span></button></div>`;

    function vidRow(v) {
      return `<div class="sc-vid-row"><label class="cg-field"><input class="v-url" placeholder="YouTube link" aria-label="YouTube link" value="${v.id ? `https://youtu.be/${esc(v.id)}` : ''}"></label>
        <label class="cg-field"><input class="v-title" placeholder="Title" aria-label="Video title" value="${esc(v.title || '')}"></label>
        <button type="button" class="cg-key v-del" aria-label="Remove video">${icon('close')}</button></div>`;
    }
    const wireDel = () => body.querySelectorAll('.v-del').forEach((b) => { b.onclick = () => b.closest('.sc-vid-row').remove(); });
    wireDel();

    body.querySelectorAll('.cg-stepper').forEach((sp) => {
      const out = sp.querySelector('.cg-stepper-value');
      const min = Number(sp.dataset.min), max = Number(sp.dataset.max), stepBy = Number(sp.dataset.step);
      const sync = () => { const v = Number(out.textContent); sp.querySelector('[data-d="-1"]').disabled = v <= min; sp.querySelector('[data-d="1"]').disabled = v >= max; };
      sp.querySelectorAll('.sc-step-btn').forEach((b) => { b.onclick = () => { out.textContent = Math.min(max, Math.max(min, Number(out.textContent) + stepBy * Number(b.dataset.d))); sync(); }; });
      sync();
    });
    body.querySelector('#saveRules').onclick = async () => {
      await store.saveSettings({ blockMinutes: Number(body.querySelector('#bm').textContent), passPct: Number(body.querySelector('#pp').textContent),
        startUnit: { algebra: Number(body.querySelector('#start-algebra').value), biology: Number(body.querySelector('#start-biology').value) } });
      toast('Rules saved');
    };
    body.querySelector('#ls').onchange = (e) => { editLesson = e.target.value; render(); };
    body.querySelector('#addVid').onclick = () => { body.querySelector('#vids').insertAdjacentHTML('beforeend', vidRow({ id: '', title: '' })); wireDel(); };
    body.querySelector('#saveVids').onclick = async () => {
      const vids = [];
      for (const r of body.querySelectorAll('.sc-vid-row')) {
        const raw = r.querySelector('.v-url').value;
        const id = parseYouTubeId(raw);
        if (!id) { if (raw.trim()) return toast('One of the links isn\'t a YouTube link'); continue; }
        vids.push({ id, title: r.querySelector('.v-title').value.trim() || 'Video' });
      }
      if (!vids.length) return toast('Add at least one video');
      await store.saveSettings({ videoOverrides: { [editLesson]: vids } });
      toast('Videos saved');
    };
    body.querySelector('#resetVids').onclick = async () => {
      await store.saveSettings({ videoOverrides: { [editLesson]: originalVideos(editLesson) } });
      toast('Original videos restored'); render();
    };
    body.querySelector('#saveFacts').onclick = async () => {
      const list = [];
      for (const ln of body.querySelector('#facts').value.split('\n').map((x) => x.trim()).filter(Boolean)) {
        const [u, title = 'Fun video', cat = 'Fun fact', blurb = ''] = ln.split('|').map((x) => x.trim());
        const id = parseYouTubeId(u);
        if (!id) return toast(`Not a YouTube link: ${u.slice(0, 30)}`);
        list.push({ id, title, cat, blurb });
      }
      if (list.length < 2) return toast('Add at least 2 videos');
      await store.saveSettings({ facts: list });
      toast('Fun-fact list saved');
    };
    body.querySelector('#resetFacts').onclick = async () => { await store.saveSettings({ facts: factsDefault }); toast('Original list restored'); render(); };
    body.querySelector('#out').onclick = () => onSignOut();
    if (isDemo) {
      body.querySelector('#toStudent').onclick = () => onSwitchToStudent();
      body.querySelector('#wipe').onclick = async () => {
        const backup = store.exportDemo();
        await store.resetDemo();
        toast('Demo data wiped', { action: () => store.importDemo(backup), label: 'Undo' });
      };
    }
  }

  return { destroy() { clearInterval(liveTimer); clearInterval(cardTimer); unsubs.forEach((u) => { try { u && u(); } catch {} }); } };
}
