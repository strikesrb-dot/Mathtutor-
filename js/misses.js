// Missed quiz questions (owner request 2026-10-05: "if he fails a question give me a full breakdown", automatic for every miss).
// Student side: recordMiss() saves each final graded miss to students/{uid}/misses/{id} — the question, every choice, his pick,
// his retry, the right answer, the lesson's explanation, his time and which try — then asks /api/breakdown for Claude's
// analysis and saves it on the same record.
// Master side: missesHTML() + wireMisses() draw the "Missed questions" list on the Overview; a tap opens the full breakdown.
// fillMissing() asks for the analysis of any miss his app couldn't finish (closed too soon, no Wi-Fi).

import { esc, icon, toast } from './ui.js';
import { renderText } from './tutor.js';

async function askClaude(store, miss) {
  const token = await store.idToken();
  const r = await fetch('/api/breakdown', { method: 'POST',
    headers: { 'content-type': 'application/json', ...(token ? { authorization: `Bearer ${token}` } : {}) },
    body: JSON.stringify({ miss }) });
  const j = await r.json().catch(() => ({}));
  if (!r.ok || !j.analysis) throw new Error(`breakdown ${r.status}`);
  return j.analysis;
}

// ── student ──
export async function recordMiss(store, sid, rec) {
  const miss = { at: Date.now(), ...rec };
  let id;
  try { id = await store.addMiss(sid, miss); } catch (e) { console.warn('miss not saved', e); return; }
  try { await store.patchMiss(sid, id, { analysis: await askClaude(store, miss), analysisAt: Date.now() }); }
  catch (e) { console.warn('breakdown later', e); }   // his brother's app fills it in
}

// ── master ──
const tried = new Set();   // misses this app already asked about (once per visit)
export function fillMissing(store, sid, misses) {
  const todo = misses.filter((m) => !m.analysis && !tried.has(m.id) && Date.now() - (m.at || 0) > 60000).slice(0, 3);
  todo.forEach((m) => {
    tried.add(m.id);
    askClaude(store, m).then((analysis) => store.patchMiss(sid, m.id, { analysis, analysisAt: Date.now() })).catch((e) => console.warn('breakdown failed', e));
  });
}

const when = (t) => { const d = new Date(t); return `${d.toLocaleDateString([], { weekday: 'short' })} ${d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`; };
const short = (s, n) => { s = String(s || ''); return s.length > n ? `${s.slice(0, n - 1)}…` : s; };
let showAll = false;

export function missesHTML(misses) {
  const list = (misses || []).slice(0, showAll ? 40 : 8);
  if (!list.length) return `<p class="cg-caption">Missed quiz questions</p><ul class="cg-group"><li class="cg-row has-icon"><span class="cg-row-icon">${icon('check')}</span><span class="cg-row-text"><span class="cg-row-label">No missed questions yet</span></span></li></ul>`;
  return `<p class="cg-caption">Missed quiz questions</p>
    <div class="cg-group">${list.map((m) => `
      <button type="button" class="cg-row has-icon" data-miss="${esc(m.id)}"><span class="cg-row-icon">${icon('wrong')}</span>
        <span class="cg-row-text"><span class="cg-row-label">${esc(short(m.q, 90))}</span>
          <span class="cg-row-sub">${esc(short(m.lesson, 50))} · picked "${esc(short(m.picked, 40))}"${m.retryPick ? (m.retryOk ? ' · fixed it on his retry' : ' · retry wrong too') : ''} · ${when(m.at)}</span></span>
        <span class="cg-row-value">${m.analysis ? '' : 'Writing…'}</span><span class="cg-chev"></span></button>`).join('')}
      ${(misses || []).length > list.length ? `<button type="button" class="cg-row" id="missMore"><span class="cg-row-text"><span class="cg-row-label">Show more (${misses.length - list.length})</span></span></button>` : ''}
    </div>
    <p class="cg-foot">Tap one for the full breakdown: every choice, his pick, the right answer, and Claude's read on why he missed it and how to explain it.</p>`;
}

let sheet = null, openId = null, getMisses = () => [];
function sheetBody(m) {
  if (!m) return '<p class="cg-meta">This question was removed.</p>';
  const rows = (m.choices || []).map((c) => {
    const right = c === m.correct, his = c === m.picked, retry = c === m.retryPick;
    const tag = [right ? 'Right answer' : '', his ? 'His answer' : '', retry ? `His retry${m.retryOk ? '' : ' (wrong)'}` : ''].filter(Boolean).join(' · ');
    return `<li class="cg-row has-icon ${right ? 'cg-row-accent' : ''}"><span class="cg-row-icon">${right ? icon('check') : his || retry ? icon('wrong') : ''}</span>
      <span class="cg-row-text"><span class="cg-row-label">${esc(c)}</span>${tag ? `<span class="cg-row-sub">${tag}</span>` : ''}</span></li>`;
  }).join('');
  return `
    <p class="cg-meta">${esc(m.subject === 'biology' ? 'Biology' : 'Algebra 1')}${m.unit ? ` · ${esc(m.unit)}` : ''} · ${esc(m.lesson || '')}</p>
    <p class="cg-meta">Quiz try ${Number(m.quizTry) || 1} · question ${Number(m.qNum) || '?'} of ${Number(m.of) || '?'} · answered in ${Number(m.sec) || 0} s · ${when(m.at)}</p>
    <h3 class="cg-title2 sc-miss-q">${esc(m.q)}</h3>
    <ul class="cg-group sc-miss-choices">${rows}</ul>
    ${m.why ? `<p class="cg-caption">The lesson's explanation</p><div class="cg-card"><p class="cg-text">${esc(m.why)}</p></div>` : ''}
    <p class="cg-caption">Claude's breakdown</p>
    <div class="cg-card sc-breakdown">${m.analysis ? renderText(m.analysis) : '<p class="cg-meta">Writing the breakdown… it shows up here in a few seconds.</p>'}</div>`;
}
function openSheet(id) {
  if (!sheet) {
    sheet = document.createElement('section');
    sheet.className = 'cg-sheet sc-miss-sheet';
    sheet.setAttribute('aria-label', 'Missed question');
    sheet.hidden = true;
    sheet.innerHTML = `<span class="cg-grabber"></span>
      <header class="cg-header"><h2 class="cg-header-title">Missed question<small>Full breakdown</small></h2>
        <button class="cg-key cg-key-end" type="button" data-cg-close aria-label="Close">${icon('close')}</button></header>
      <div class="cg-sheet-body"><div class="sc-miss-body"></div></div>`;
    document.body.appendChild(sheet);
    sheet.addEventListener('cg-close', () => { openId = null; });
  }
  openId = id;
  sheet.querySelector('.sc-miss-body').innerHTML = sheetBody(getMisses().find((m) => m.id === id));
  if (window.CalmGlass) window.CalmGlass.open(sheet); else toast('Couldn\'t open the breakdown');
}
// Call on every update of the list: the open breakdown fills in when Claude's analysis arrives.
export function refreshMissSheet(misses) {
  getMisses = () => misses;
  if (sheet && openId) sheet.querySelector('.sc-miss-body').innerHTML = sheetBody(misses.find((m) => m.id === openId));
}
export function wireMisses(root, misses, redraw) {
  getMisses = () => misses;
  root.querySelectorAll('[data-miss]').forEach((b) => { b.onclick = () => openSheet(b.dataset.miss); });
  const more = root.querySelector('#missMore');
  if (more) more.onclick = () => { showAll = true; redraw(); };
}
export function closeMissSheet() { if (sheet && openId && window.CalmGlass) window.CalmGlass.close(sheet); }
