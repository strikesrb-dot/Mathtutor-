// Master side (you): live status, today's time, red flags, lesson progress, written answers, settings.

import { buildCurriculum, lessonStage, currentLesson, todayKey, dayStatus, videosDone } from './curriculum.js';
import { esc, hm, toast, parseYouTubeId } from './ui.js';
import { STUDENT_NAME } from './config.js';
import algebraDefault from '../content/algebra.js';
import bioDefault from '../content/biology-cells.js';
import factsDefault from '../content/facts.js';

const FLAG_LABEL = {
  leftApp: 'Left the app',
  missedCheck: 'Missed "Still watching?"',
  pausedLong: 'Video paused too long',
  idle: 'Went idle',
  skipTry: 'Tried to skip ahead',
  videoError: 'Video wouldn\'t play',
};
const STAGE_LABEL = { watch: 'Watching', learn: 'Reading', quiz: 'Quiz', real: 'Real-life answer', done: 'Done' };
const STEP_LABEL = { A1: 'Algebra · Block 1', A2: 'Algebra · Block 2', F1: 'Fun video 1', B1: 'Biology · Block 1', B2: 'Biology · Block 2', F2: 'Fun video 2', X: 'Extra practice' };

export function startMaster(root, { store, sid, isDemo, onSignOut, onSwitchToStudent }) {
  const S = { settings: {}, lessons: {}, days: {} };
  let cur = buildCurriculum({});
  let tab = 'overview';
  const open = new Set();
  const unsubs = [];
  let editLesson = '';

  root.innerHTML = '<div class="loading"><i class="spin"></i>Loading his progress…</div>';
  if (!sid) {
    root.innerHTML = `<main class="wrap"><div class="card"><h2>One more setup step</h2><p>Put your brother's User UID in <code>js/config.js</code> as <code>STUDENT_UID</code>. See SETUP.html, step 6.</p></div></main>`;
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
  const liveTimer = setInterval(() => { if (tab === 'overview') softRender(); }, 30000);


  // Don't wipe the settings form while you're typing in it.
  function softRender() { if (tab !== 'settings') render(); }

  function render() {
    const scrollY = window.scrollY;
    root.innerHTML = `
      <header class="top master">
        <div><div class="hello">Master view</div><div class="date">${esc(STUDENT_NAME)}'s study coach${isDemo ? ' · DEMO' : ''}</div></div>
        <button class="btn btn-ghost btn-sm" id="out">Sign out</button>
      </header>
      <nav class="tabs">${['overview', 'lessons', 'settings'].map((t) => `<button class="tab ${t === tab ? 'on' : ''}" data-t="${t}">${t[0].toUpperCase() + t.slice(1)}</button>`).join('')}</nav>
      <main class="wrap" id="mbody"></main>`;
    root.querySelector('#out').onclick = () => { if (confirm('Sign out?')) onSignOut(); };
    root.querySelectorAll('.tab').forEach((b) => { b.onclick = () => { tab = b.dataset.t; render(); window.scrollTo(0, 0); }; });
    const body = root.querySelector('#mbody');
    if (tab === 'overview') overview(body);
    if (tab === 'lessons') lessons(body);
    if (tab === 'settings') settings(body);
    window.scrollTo(0, scrollY);
  }

  // ─────────────── Overview ───────────────
  function overview(body) {
    const tk = todayKey();
    const d = S.days[tk] || {};
    const goal = cur.rules.blockMinutes * 60 * 4;
    const st = dayStatus(cur.rules, d);
    const lastSeen = latestSeen();
    const ago = lastSeen ? Math.round((Date.now() - lastSeen.t) / 60000) : null;
    const live = ago != null && ago < 2;
    const blocksDone = st.list.filter((s) => s.type === 'block' && s.done).length;
    const factsDone = st.list.filter((s) => s.type === 'fact' && s.done).length;
    const flags = d.flags || {};
    const flagTotal = Object.values(flags).reduce((a, b) => a + b, 0);
    const weekend = lastWeekend();

    body.innerHTML = `
      <section class="card live ${live ? 'on' : ''}">
        <span class="live-dot"></span>
        <div><b>${live ? 'Studying right now' : ago == null ? 'Hasn\'t started yet' : `Last active ${agoText(ago)}`}</b>
        <small>${lastSeen && lastSeen.step ? `${STEP_LABEL[lastSeen.step] || lastSeen.step}${lastSeen.lesson ? ' · ' + esc(lessonTitle(lastSeen.lesson)) : ''}` : ''}</small></div>
      </section>

      <section class="card">
        <h2>Today</h2>
        <div class="stat-row">
          <div class="stat"><b>${hm(d.activeSec || 0)}</b><small>focused time (goal ${hm(goal)})</small></div>
          <div class="stat"><b>${blocksDone}/4</b><small>blocks done</small></div>
          <div class="stat"><b>${factsDone}/2</b><small>fun videos</small></div>
          <div class="stat ${flagTotal ? 'warn' : ''}"><b>${flagTotal}</b><small>red flags</small></div>
        </div>
        <div class="bar"><i style="width:${Math.min(100, ((d.activeSec || 0) / goal) * 100)}%"></i></div>
        <ul class="mlist">${st.list.filter((s) => s.type !== 'break').map((s) => `<li><span>${s.done ? '✅' : '⬜'} ${STEP_LABEL[s.id]}</span><span>${s.type === 'block' ? `${Math.floor(s.sec / 60)} / ${cur.rules.blockMinutes} min` : s.done ? 'watched' : ''}</span></li>`).join('')}</ul>
        ${flagTotal ? `<h3>Red flags today</h3><ul class="mlist flags">${Object.entries(flags).filter(([, v]) => v).map(([k, v]) => `<li><span>🚩 ${FLAG_LABEL[k] || k}</span><b>×${v}</b></li>`).join('')}</ul>` : '<p class="muted">No red flags today. 👍</p>'}
        ${d.practice ? `<p class="muted">Extra practice: ${Object.entries(d.practice).map(([k, v]) => `${k} ${v.right}/${v.total}`).join(' · ')}</p>` : ''}
      </section>

      <section class="card">
        <h2>This weekend</h2>
        <div class="grid2">${weekend.map(([key, dd]) => `<div class="mini-day"><b>${dayName(key)}</b><span>${hm((dd || {}).activeSec || 0)}</span>
          <div class="bar"><i style="width:${Math.min(100, (((dd || {}).activeSec || 0) / goal) * 100)}%"></i></div>
          <small>${dd ? `${Object.keys(dd.blocksDone || {}).length}/4 blocks · ${Object.values(dd.flags || {}).reduce((a, b) => a + b, 0)} flags` : 'no study'}</small></div>`).join('')}</div>
      </section>

      <section class="card">
        <h2>History</h2>
        <table class="hist"><thead><tr><th>Day</th><th>Time</th><th>Blocks</th><th>Flags</th></tr></thead><tbody>
        ${Object.keys(S.days).sort().reverse().slice(0, 21).map((k) => { const dd = S.days[k]; return `<tr><td>${dayName(k)}</td><td>${hm(dd.activeSec || 0)}</td><td>${Object.keys(dd.blocksDone || {}).length}/4</td><td>${Object.values(dd.flags || {}).reduce((a, b) => a + b, 0)}</td></tr>`; }).join('') || '<tr><td colspan="4" class="muted">Nothing yet</td></tr>'}
        </tbody></table>
      </section>

      <section class="card">
        <h2>Today's activity log</h2>
        <ul class="mlist log">${(d.events || []).slice().reverse().slice(0, 40).map((e) => `<li><span>${new Date(e.t).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</span><span>🚩 ${FLAG_LABEL[e.type] || e.type}${e.step ? ` · ${STEP_LABEL[e.step] || e.step}` : ''}</span></li>`).join('') || '<li class="muted">Nothing flagged.</li>'}</ul>
      </section>`;
  }

  function latestSeen() {
    let best = null;
    for (const dd of Object.values(S.days)) if (dd.lastSeen && (!best || dd.lastSeen > best.t)) best = { t: dd.lastSeen, step: dd.lastStep, lesson: dd.lastLesson };
    return best;
  }
  function lastWeekend() {
    const d = new Date(); const out = [];
    // most recent Saturday (today if it's Saturday or Sunday counts this weekend)
    const back = (d.getDay() + 1) % 7; // days since Saturday
    const sat = new Date(d); sat.setDate(d.getDate() - back);
    const sun = new Date(sat); sun.setDate(sat.getDate() + 1);
    for (const x of [sat, sun]) { const k = todayKey(x); out.push([k, S.days[k]]); }
    return out;
  }
  function dayName(k) { const [y, m, dd] = k.split('-').map(Number); return new Date(y, m - 1, dd).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' }); }
  function agoText(m) { return m < 60 ? `${m} min ago` : m < 1440 ? `${Math.round(m / 60)} h ago` : `${Math.round(m / 1440)} days ago`; }
  function lessonTitle(key) { return [...cur.algebra.lessons, ...cur.biology.lessons].find((l) => l.key === key)?.title || key; }

  // ─────────────── Lessons ───────────────
  function lessons(body) {
    body.innerHTML = ['algebra', 'biology'].map((subj) => {
      const unit = cur[subj];
      const now = currentLesson(unit, S.lessons);
      return `<section class="card"><h2>${subj === 'algebra' ? '📐 Algebra 1' : '🧬 Biology'} — ${esc(unit.unit)}</h2>
        <ul class="lessons">${unit.lessons.map((l, i) => {
          const p = S.lessons[l.key] || {};
          const stage = lessonStage(l, p);
          const q = p.quiz || {};
          const isOpen = open.has(l.key);
          return `<li class="lesson ${stage} ${now && now.key === l.key ? 'now' : ''}">
            <button class="lesson-row" data-k="${l.key}">
              <span class="num">${stage === 'done' ? '✓' : i + 1}</span>
              <span class="lt"><b>${esc(l.title)}</b><small>${p.timeSec ? hm(p.timeSec) + ' · ' : ''}${videosDone(l, p)}/${l.videos.length} videos · quiz ${q.best != null ? q.best + '%' : '—'}${q.attempts ? ` (${q.attempts.length} ${q.attempts.length === 1 ? 'try' : 'tries'})` : ''}</small></span>
              <span class="tag ${stage}">${p.timeSec || stage !== 'watch' ? STAGE_LABEL[stage] : 'Not started'}</span>
            </button>
            ${isOpen ? `<div class="lesson-detail">
              ${p.realLife && p.realLife.answer ? `<h4>His real-life answer</h4><blockquote>${esc(p.realLife.answer)}</blockquote><small class="muted">Q: ${esc(l.realLife.prompt)}</small>` : '<p class="muted">No real-life answer yet.</p>'}
              ${q.attempts && q.attempts.length ? `<h4>Quiz tries</h4><ul class="mlist">${q.attempts.map((a) => `<li><span>${new Date(a.at).toLocaleString([], { weekday: 'short', hour: 'numeric', minute: '2-digit' })}</span><b class="${a.pct >= cur.rules.passPct ? 'ok' : 'no'}">${a.right}/${a.total} · ${a.pct}%</b></li>`).join('')}</ul>` : ''}
              <div class="row-end"><button class="btn btn-ghost btn-sm" data-reset="${l.key}">Reset this lesson</button></div>
            </div>` : ''}
          </li>`;
        }).join('')}</ul></section>`;
    }).join('');
    body.querySelectorAll('.lesson-row').forEach((b) => { b.onclick = () => { const k = b.dataset.k; open.has(k) ? open.delete(k) : open.add(k); render(); }; });
    body.querySelectorAll('[data-reset]').forEach((b) => {
      b.onclick = async () => {
        if (!confirm('Reset this lesson? He\'ll have to redo the videos, quiz, and answer.')) return;
        await store.resetLesson(sid, b.dataset.reset); toast('Lesson reset');
      };
    });
  }

  // ─────────────── Settings ───────────────
  function settings(body) {
    const all = [...cur.algebra.lessons, ...cur.biology.lessons];
    if (!editLesson) editLesson = all[0].key;
    const L = all.find((l) => l.key === editLesson);
    const factsText = cur.facts.map((x) => `https://youtu.be/${x.id} | ${x.title} | ${x.cat || ''} | ${x.blurb || ''}`).join('\n');
    body.innerHTML = `
      <section class="card">
        <h2>Study rules</h2>
        <label class="field"><span>Minutes per block (focused time)</span><input type="number" id="bm" min="10" max="90" value="${cur.rules.blockMinutes}"></label>
        <label class="field"><span>Quiz pass mark (%)</span><input type="number" id="pp" min="50" max="100" value="${cur.rules.passPct}"></label>
        <label class="field"><span>Biology unit</span><select id="bu"><option value="cells">Cells</option></select>
          <small class="muted">More units get added once we know what his class is on.</small></label>
        <div class="row-end"><button class="btn" id="saveRules">Save rules</button></div>
      </section>

      <section class="card">
        <h2>Swap lesson videos</h2>
        <label class="field"><span>Lesson</span><select id="ls">${all.map((l) => `<option value="${l.key}" ${l.key === editLesson ? 'selected' : ''}>${l.key.startsWith('alg') ? 'Algebra' : 'Biology'} — ${esc(l.title)}</option>`).join('')}</select></label>
        <div id="vids">${L.videos.map((v, i) => vidRow(v, i)).join('')}</div>
        <div class="row-between"><button class="btn btn-ghost btn-sm" id="addVid">+ Add video</button>
          <span><button class="btn btn-ghost btn-sm" id="resetVids">Restore original</button> <button class="btn btn-sm" id="saveVids">Save videos</button></span></div>
        <small class="muted">Paste any YouTube link. If he already finished a video you replace, he'll need to watch the new one.</small>
      </section>

      <section class="card">
        <h2>Fun-fact videos</h2>
        <p class="muted">One per line: <code>link | title | category | short blurb</code>. They play in order, 2 per day.</p>
        <textarea id="facts" rows="10">${esc(factsText)}</textarea>
        <div class="row-end"><button class="btn btn-ghost btn-sm" id="resetFacts">Restore original</button> <button class="btn btn-sm" id="saveFacts">Save list</button></div>
      </section>

      ${isDemo ? `<section class="card"><h2>Demo tools</h2><p class="muted">Demo mode keeps everything on this device only.</p>
        <div class="row-center"><button class="btn btn-ghost" id="toStudent">Switch to student view</button><button class="btn btn-ghost" id="wipe">Wipe demo data</button></div></section>` : ''}`;

    function vidRow(v, i) { return `<div class="vid-row" data-i="${i}"><input class="v-url" placeholder="YouTube link" value="https://youtu.be/${esc(v.id)}"><input class="v-title" placeholder="Title" value="${esc(v.title)}"><button class="icon-btn sm v-del" aria-label="Remove">✕</button></div>`; }
    const wireDel = () => body.querySelectorAll('.v-del').forEach((b) => { b.onclick = () => b.closest('.vid-row').remove(); });
    wireDel();

    body.querySelector('#bu').value = S.settings.bioUnit || 'cells';
    body.querySelector('#saveRules').onclick = async () => {
      const bm = Math.max(10, Math.min(90, Number(body.querySelector('#bm').value) || 50));
      const pp = Math.max(50, Math.min(100, Number(body.querySelector('#pp').value) || 90));
      await store.saveSettings({ blockMinutes: bm, passPct: pp, bioUnit: body.querySelector('#bu').value });
      toast('Saved ✓', 'good');
    };
    body.querySelector('#ls').onchange = (e) => { editLesson = e.target.value; render(); };
    body.querySelector('#addVid').onclick = () => {
      const wrap = body.querySelector('#vids');
      wrap.insertAdjacentHTML('beforeend', vidRow({ id: '', title: '' }, wrap.children.length));
      wrap.lastElementChild.querySelector('.v-url').value = '';
      wireDel();
    };
    body.querySelector('#saveVids').onclick = async () => {
      const rows = [...body.querySelectorAll('.vid-row')];
      const vids = [];
      for (const r of rows) {
        const id = parseYouTubeId(r.querySelector('.v-url').value);
        if (!id) { if (r.querySelector('.v-url').value.trim()) return toast('One of the links isn\'t a YouTube link', 'bad'); continue; }
        vids.push({ id, title: r.querySelector('.v-title').value.trim() || 'Video' });
      }
      if (!vids.length) return toast('Add at least one video', 'bad');
      await store.saveSettings({ videoOverrides: { [editLesson]: vids } });
      toast('Videos saved ✓', 'good');
    };
    body.querySelector('#resetVids').onclick = async () => {
      const orig = [...algebraDefault.lessons, ...bioDefault.lessons].find((l) => l.key === editLesson);
      await store.saveSettings({ videoOverrides: { [editLesson]: orig ? orig.videos : [] } });
      toast('Restored ✓', 'good'); render();
    };
    body.querySelector('#saveFacts').onclick = async () => {
      const lines = body.querySelector('#facts').value.split('\n').map((x) => x.trim()).filter(Boolean);
      const list = [];
      for (const ln of lines) {
        const [u, title = 'Fun video', cat = 'Fun fact', blurb = ''] = ln.split('|').map((x) => x.trim());
        const id = parseYouTubeId(u);
        if (!id) return toast(`Not a YouTube link: ${u.slice(0, 30)}`, 'bad');
        list.push({ id, title, cat, blurb });
      }
      if (list.length < 2) return toast('Add at least 2 videos', 'bad');
      await store.saveSettings({ facts: list });
      toast('Fun-fact list saved ✓', 'good');
    };
    body.querySelector('#resetFacts').onclick = async () => { await store.saveSettings({ facts: factsDefault }); toast('Restored ✓', 'good'); render(); };
    if (isDemo) {
      body.querySelector('#toStudent').onclick = () => onSwitchToStudent();
      body.querySelector('#wipe').onclick = async () => { if (confirm('Wipe all demo data?')) { await store.resetDemo(); toast('Wiped'); } };
    }
  }

  return { destroy() { clearInterval(liveTimer); unsubs.forEach((u) => { try { u && u(); } catch {} }); } };
}
