// "Export his activity log for Claude" (master Overview). Builds one plain-text file: instructions for Claude, how the app
// works, the settings in effect, per-day totals, lesson results (quiz tries, his written answers), messages, then every
// logged event (tracker.js log(): screens, clock stops and why, video, quiz answers, flags, chat, games).
// Pasting it into Claude is all it takes: the top of the file says what it is and what to analyze.

import { icon, toast } from './ui.js';
import { todayKey, lessonStage } from './curriculum.js';
import { STUDENT_NAME } from './config.js';

const RANGES = [['today', 'Today'], ['weekend', 'Weekend'], ['7', '7 days'], ['30', '30 days']];

function datesFor(range) {
  const d = new Date(), today = todayKey(d);
  if (range === 'today') return [today];
  if (range === 'weekend') {
    const sat = new Date(d); sat.setDate(d.getDate() - ((d.getDay() + 1) % 7));
    const sun = new Date(sat); sun.setDate(sat.getDate() + 1);
    return [todayKey(sat), todayKey(sun)].filter((k) => k <= today);
  }
  const out = [];
  for (let i = Number(range) - 1; i >= 0; i--) { const x = new Date(d); x.setDate(d.getDate() - i); out.push(todayKey(x)); }
  return out;
}

const hm = (sec) => { sec = Math.round(sec || 0); const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60); return h ? `${h}h ${m}m` : `${m}m ${sec % 60}s`; };
const clock = (t) => { const d = new Date(t); return [d.getHours(), d.getMinutes(), d.getSeconds()].map((n) => String(n).padStart(2, '0')).join(':'); };
const dayName = (k) => { const [y, m, dd] = k.split('-').map(Number); return new Date(y, m - 1, dd).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) + ` (${k})`; };
const inRange = (t, dates) => !!t && dates.includes(todayKey(new Date(t)));

export function buildLogText({ cur, days, lessons, logs, msgs, dates }) {
  const r = cur.rules, out = [];
  const p = (...lines) => out.push(...lines);
  p('=== STUDY COACH ACTIVITY LOG — PLEASE ANALYZE ===', `Exported ${new Date().toLocaleString('en-US')} · covers ${dates.map(dayName).join(', ')}`, '');
  p('INSTRUCTIONS FOR CLAUDE',
    `This is an export from "Study Coach", a web app I (the older brother, the "master") built so my younger brother ("${STUDENT_NAME}", a high-school student who struggles in school) studies Algebra 1 and Biology on weekends. I want an honest, practical analysis. Please:`,
    '1. Summarize his time: per day, time on the app vs focused (counted) time, per subject, blocks finished, and where the rest went (breaks, games, chat, the clock stopped and why).',
    '2. Look for loopholes or gaming the system: farming time without learning, tapping just to keep the clock alive, sitting on a screen until its time limit, leaving the app, replaying videos, answering quiz questions in a few seconds, guessing patterns, failing the same quiz again and again, short or careless real-life answers, long chats. Quote the log lines (with times) behind each finding.',
    '3. What is working: where he is engaged and learning (steady watching, good scores, thoughtful answers).',
    '4. What is hurting him: time wasters, frustration points, the topics he struggles with (his WRONG answers show which ideas he does not get yet), and app rules that slow him down without helping.',
    '5. Specific improvements ranked by impact: changes to the app\'s rules or settings, and things I can do or say as his brother.',
    '6. A few questions I should ask him.',
    'Keep it plain and direct. Say so when the data is too thin to tell.', '');
  p('HOW THE APP WORKS',
    `- A study day: 4 blocks of ${r.blockMinutes} counted minutes (Algebra 1 twice, then Biology twice), a ${r.breakMinutes}-minute break after blocks 1–3 followed by ${r.gameMinutes} minutes of game time (Slice or Glide; he may cash in what is left of the break as extra game time; a round in progress is finished when time is up), and 2 fun-fact reward videos.`,
    `- Each lesson, in order and forward-only: Watch the videos → Learn page (at least 40 s) → Quiz (${r.quizSize} questions, ${r.passPct}% to pass; after a fail he must reread or rewatch, then wait ${r.retryWaitMin} min; the right answers stay hidden until he passes) → Real-life answer (at least 15 typed words, no pasting) → the next lesson.`,
    `- The clock (focused time) runs only while the app is on screen AND either new video is playing (replays do not count; a "Still watching?" button appears every ${Math.round(r.attentionMinSec / 60)}–${Math.round(r.attentionMaxSec / 60)} minutes and must be tapped within ${r.attentionReplySec} s) or he tapped within the last ${r.idleSec} s on a reading/quiz screen.`,
    `- Time limits per screen, after which the clock stops until he moves on: Learn ${r.capLearnMin} min, real-life answer ${r.capRealMin} min, one question ${r.capQuestionMin} min, in-between screens ${r.capScreenSec} s.`,
    '- Breaks, games, chat, waiting out a quiz retry, and red alerts never count.',
    '- A block ends when its counted minutes are done, wherever he is in the lesson; the next block picks up where he stopped.',
    '- Red flags: leftApp, missedCheck (missed "Still watching?"), pausedLong, idle (no taps 90 s), skipTry (tried to skip ahead), videoError, manyTries (passed only on try 3+), stalled (hit a time limit).',
    '- Log kinds: app (open/leave/return), screen (where he is), clock (started/stopped, why, and for how long), video (play/pause/replay at a position), check ("Still watching?"), answer (each quiz or practice answer: right/WRONG, seconds taken, the question, what he picked), quiz (start/finish and score), learn, real, block, chat, flag, game.', '');
  p(`SETTINGS: block ${r.blockMinutes} min · break ${r.breakMinutes} min · pass ${r.passPct}% · quiz ${r.quizSize} questions · retry wait ${r.retryWaitMin} min`, '');

  p('DAY TOTALS');
  for (const k of dates) {
    const d = days[k];
    if (!d) { p(`${dayName(k)}: no study`); continue; }
    const flags = Object.entries(d.flags || {}).filter(([, v]) => v).map(([f, v]) => `${f} ×${v}`).join(', ') || 'none';
    const subj = Object.entries(d.bySubject || {}).map(([s, v]) => `${s} ${hm(v)}`).join(', ') || '—';
    const games = Object.entries(d.games || {}).map(([id, g]) => g.done ? `${id} ${g.played || 'nothing'}${g.bonus ? ` (+${hm(g.bonus)} cashed in from the break)` : ''}` : '').filter(Boolean).join('; ');
    p(`${dayName(k)}: on the app ${d.openSec ? hm(d.openSec) : 'not tracked'} · focused ${hm(d.activeSec)}${d.openSec ? ` (${Math.round(((d.activeSec || 0) / d.openSec) * 100)}%)` : ''} · by subject: ${subj} · blocks done ${Object.keys(d.blocksDone || {}).length}/4 · fun videos ${Object.keys(d.factsDone || {}).length}/2${games ? ` · games: ${games}` : ''} · flags: ${flags}`);
  }
  p('');

  p('LESSON RESULTS (lessons with activity in this period)');
  let any = false;
  for (const subj of ['algebra', 'biology']) {
    for (const l of cur[subj].lessons) {
      const g = lessons[l.key]; if (!g) continue;
      const q = g.quiz || {}, tries = (q.attempts || []).filter((a) => inRange(a.at, dates));
      const touched = tries.length || inRange((g.realLife || {}).at, dates) || inRange(g.completedAt, dates) || (logs.some((e) => e.d && e.d.includes(l.title)));
      if (!touched) continue;
      any = true;
      const vids = l.videos.filter((v) => (g.videos || {})[v.id] && g.videos[v.id].done).length;
      p(`- ${cur[subj].name} · Unit ${l.u.n} · Lesson ${l.i} of ${l.of}: "${l.title}" — now at: ${lessonStage(l, g)} · time in lesson (all-time): ${hm(g.timeSec)} · videos ${vids}/${l.videos.length}`);
      for (const a of q.attempts || []) p(`    quiz try ${new Date(a.at).toLocaleString('en-US', { weekday: 'short', hour: '2-digit', minute: '2-digit' })}: ${a.right}/${a.total} (${a.pct}%)${a.pct >= r.passPct ? ' passed' : ''}`);
      if (q.passedOnTry) p(`    passed on try ${q.passedOnTry}`);
      if (g.realLife && g.realLife.answer) p(`    real-life question: ${l.realLife.prompt}`, `    his answer: "${g.realLife.answer}"`);
    }
  }
  if (!any) p('(none)');
  p('');

  const m = (msgs || []).filter((x) => inRange(x.at, dates));
  p('MESSAGES BETWEEN US');
  if (!m.length) p('(none)');
  for (const x of m) p(`${todayKey(new Date(x.at))} ${clock(x.at)}  ${x.from === 'master' ? 'me' : 'him'}${x.kind === 'nudge' ? ' (nudge)' : ''}: ${x.text || (x.kind === 'nudge' ? '[default nudge: "Time to get back to studying!"]' : '')}`);
  p('');

  p('EVENT LOG (time · kind · detail)');
  let last = '';
  for (const e of logs) {
    const k = todayKey(new Date(e.t));
    if (k !== last) { last = k; p('', `--- ${dayName(k)} ---`); }
    p(`${clock(e.t)}  ${String(e.k).padEnd(6)}  ${e.d}`);
  }
  if (!logs.length) p('(nothing logged in this period — the log started with the 2026-10-05 update)');
  p('', '=== END OF LOG ===');
  return out.join('\n');
}

// ── The sheet ──
let sheet = null;
export function closeLogSheet() { if (sheet) { if (window.CalmGlass) window.CalmGlass.close(sheet); sheet.remove(); sheet = null; } }

// state() → { cur, days, lessons, msgs } (fresh each time it builds)
export function openLogSheet({ store, sid, state }) {
  if (!sheet) {
    sheet = document.createElement('section');
    sheet.className = 'cg-sheet sc-log-sheet';
    sheet.setAttribute('aria-label', 'Activity log');
    sheet.hidden = true;
    sheet.innerHTML = `
      <span class="cg-grabber"></span>
      <header class="cg-header"><h2 class="cg-header-title">Activity log<small>Paste it into Claude for feedback</small></h2>
        <button class="cg-key cg-key-end" type="button" data-cg-close aria-label="Close">${icon('close')}</button></header>
      <div class="cg-sheet-body"><div class="sc-log-body">
        <div class="cg-seg sc-log-range" role="group" aria-label="Which days">${RANGES.map(([k, l]) => `<button type="button" data-r="${k}" aria-pressed="${k === 'weekend'}">${l}</button>`).join('')}</div>
        <p class="cg-meta cg-num" id="logStat">Building…</p>
        <textarea class="sc-textarea sc-log-text" id="logText" rows="12" readonly aria-label="The log"></textarea>
        <div class="cg-btns"><button type="button" class="cg-btn cg-btn-strong" id="logCopy">Copy</button>${navigator.share ? '<button type="button" class="cg-btn cg-btn-glass" id="logShare">Share</button>' : ''}<button type="button" class="cg-btn cg-btn-glass" id="logSave">Download</button></div>
        <p class="cg-foot">The top of the log tells Claude what it is and what to look for, so you can paste it without typing anything else. Share sends it straight to the Claude app on your phone.</p>
      </div></div>`;
    document.body.appendChild(sheet);
  }
  const ta = sheet.querySelector('#logText'), stat = sheet.querySelector('#logStat');
  let range = (sheet.querySelector('.sc-log-range [aria-pressed="true"]') || {}).dataset?.r || 'weekend', text = '', build = 0;
  const fileName = () => `study-coach-log-${range}-${todayKey()}.txt`;
  async function rebuild() {
    const my = ++build;
    stat.textContent = 'Building…'; ta.value = '';
    const dates = datesFor(range);
    let logs = [];
    try {
      const docs = await Promise.all(dates.map((k) => store.getLog(sid, k).catch(() => ({}))));
      logs = docs.flatMap((d) => d.entries || []).sort((a, b) => a.t - b.t);
    } catch { /* still export the totals */ }
    if (my !== build) return;
    text = buildLogText({ ...state(), logs, dates });
    ta.value = text;
    stat.textContent = `${logs.length} events · ${text.split('\n').length} lines · ${Math.ceil(text.length / 1024)} KB`;
  }
  sheet.querySelectorAll('.sc-log-range > button').forEach((b) => {
    b.onclick = () => {
      sheet.querySelectorAll('.sc-log-range > button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      if (window.CalmGlass) window.CalmGlass.refresh();
      range = b.dataset.r; rebuild();
    };
  });
  sheet.querySelector('#logCopy').onclick = () => {
    if (!text) return;
    const fallback = () => { ta.focus(); ta.select(); try { document.execCommand('copy'); toast('Copied — paste it into Claude'); } catch { toast('Select the text and copy it'); } };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(() => toast('Copied — paste it into Claude'), fallback);
    else fallback();
  };
  const share = sheet.querySelector('#logShare');
  if (share) share.onclick = () => {
    if (!text) return;
    const file = typeof File === 'function' ? new File([text], fileName(), { type: 'text/plain' }) : null;
    const data = file && navigator.canShare && navigator.canShare({ files: [file] }) ? { files: [file], title: 'Study Coach log' } : { title: 'Study Coach log', text };
    navigator.share(data).catch(() => {});
  };
  sheet.querySelector('#logSave').onclick = () => {
    if (!text) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([text], { type: 'text/plain' })); a.download = fileName();
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  };
  if (window.CalmGlass) window.CalmGlass.open(sheet);
  rebuild();
}
