// The study tutor (owner request 2026-10-05). A sheet over the lesson where he says what confuses him; Claude (through
// /api/tutor → netlify/functions/tutor.mjs) asks what part, teaches with its own examples, and never gives the answer.
// His study clock pauses while the tutor is open (the owner's choice). Every question and reply goes to the activity log.
// Motivation quotes arrive as tags like [quote:q94-5] and are shown from content/motivation.js — only once the owner approves it.
// Videos: when the tutor asks for one (reply.videoQuery), /api/tutor-video finds one from the owner's vetted channels and it plays
// right here in the chat (youtube-nocookie embed). His clock stays paused, like the rest of the tutor.

import { esc, icon } from './ui.js';
import QUOTES, { approved } from '../content/motivation.js';
import { STUDENT_NAME } from './config.js';

const QMAP = Object.fromEntries(QUOTES.map((q) => [q.id, q]));
const CHIPS = ['I don\'t get this part', 'Give me another example', 'Explain it more simply', 'Show me a video', 'I\'m losing motivation'];

// Shows the text exactly as stored. Tanzil's licence asks that the source is named with a link to tanzil.net wherever a verse is shown.
function quoteCard(q) {
  const each = (v) => (Array.isArray(v) ? v : [v]);
  const saw = (t) => esc(t).replace(/ﷺ/g, '<span class="sc-saw">ﷺ</span>');   // same text; ﷺ just drawn in a font that has it
  const quran = q.kind === 'quran';
  const ar = quran ? each(q.ar).map((t) => `<p class="sc-ar" lang="ar" dir="rtl">${esc(t)}</p>`).join('') : '';
  const lead = q.lead ? `<p class="cg-meta">${saw(q.lead)}</p>` : '';
  const en = each(q.en).map((t) => `<p class="cg-text">${saw(t)}</p>`).join('');
  const part = q.part ? (quran ? ' (part of the verse)' : ' (part of the hadith)') : '';
  const credit = quran ? ' · Arabic: <a href="https://tanzil.net" target="_blank" rel="noopener">Tanzil</a> · English: Saheeh International'
    : (q.translator ? ` · English: ${esc(q.translator)}` : '');
  return `<figure class="sc-quote-card">${ar}${lead}${en}<figcaption class="cg-meta">${esc(q.ref)}${part}${credit}</figcaption></figure>`;
}
// Reply text → safe HTML for a phone: paragraphs, numbered/bulleted lists, **bold**, `math` (its own chip), and a quote card
// for each approved [quote:id] tag on its own line (any other bracket tag is dropped). Everything is escaped first.
function inline(t) {
  return esc(t).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/`([^`]+)`/g, '<span class="sc-math">$1</span>').replace(/\[quote:[\w-]+\]/g, '');
}
export function renderText(text) {
  const out = []; let para = [], list = null;
  const flushPara = () => { if (para.length) { out.push(`<p class="cg-text">${para.join(' ')}</p>`); para = []; } };
  const flushList = () => { if (list) { out.push(`<${list.tag} class="sc-tlist">${list.items.map((i) => `<li class="cg-text">${i}</li>`).join('')}</${list.tag}>`); list = null; } };
  for (const raw of String(text).replace(/\r/g, '').split('\n')) {
    const line = raw.trim();
    const q = /^\[quote:([\w-]+)\]$/.exec(line);
    const num = /^(?:\d+[.)]|step\s+\d+[:.)])\s*(.+)$/i.exec(line);
    const bul = /^[-•*]\s+(.+)$/.exec(line);
    if (q) { flushPara(); flushList(); const item = QMAP[q[1]]; if (item && approved === true) out.push(quoteCard(item)); }
    else if (num || bul) {
      flushPara();
      const tag = num ? 'ol' : 'ul';
      if (!list || list.tag !== tag) { flushList(); list = { tag, items: [] }; }
      list.items.push(inline((num || bul)[1]));
    } else if (!line) { flushPara(); flushList(); }
    else { flushList(); const t = inline(line); if (t.trim()) para.push(t); }
  }
  flushPara(); flushList();
  return out.join('');
}
// A video the server checked (id is 11 safe characters; title and channel are escaped).
function videoHTML(v) {
  if (!v) return '';
  if (v.state === 'loading') return '<p class="cg-meta sc-tvideo-note">Finding a short video…</p>';
  if (v.state !== 'ok') return '<p class="cg-meta sc-tvideo-note">I couldn\'t find a good video for that one.</p>';
  return `<figure class="sc-tvideo"><div class="sc-tvideo-frame"><iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.id)}?rel=0&playsinline=1&modestbranding=1"
    title="${esc(v.title)}" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin" loading="lazy"></iframe></div>
    <figcaption class="cg-meta">${esc(v.title)} · ${esc(v.channel)}</figcaption></figure>`;
}
const plain = (html) => { const d = document.createElement('div'); d.innerHTML = html || ''; return d.textContent.replace(/\s+/g, ' ').trim(); };

// What the tutor knows about the lesson (sent with each question; the server puts it after its own rules).
export function lessonInfo(lesson, subjectName) {
  return { title: lesson.title, subject: subjectName, unit: lesson.u ? `Unit ${lesson.u.n}: ${lesson.u.title}` : '',
    learn: plain(lesson.learn).slice(0, 6000), realLifePrompt: (lesson.realLife || {}).prompt || '', videos: (lesson.videos || []).map((v) => v.title) };
}
export const tutorButtonHTML = (label = 'Confused? Ask the tutor') =>
  `<div class="sc-tutor-row"><button type="button" class="cg-btn cg-btn-glass" data-tutor>${icon('help')}${esc(label)}</button></div>`;

export function createTutor({ store, tracker }) {
  const threads = {};   // one conversation per lesson + step + question, kept while the app is open
  let ctx = null, thread = null, busy = false, isOpen = false, openedAt = 0, note = '';
  const sheet = document.createElement('section');
  sheet.className = 'cg-sheet sc-chat-sheet sc-tutor-sheet';
  sheet.setAttribute('aria-label', 'Tutor');
  sheet.hidden = true;
  sheet.innerHTML = `
    <span class="cg-grabber"></span>
    <header class="cg-header"><h2 class="cg-header-title">Tutor<small id="tutorSub"></small></h2>
      <button class="cg-key cg-key-end" type="button" data-cg-close aria-label="Close">${icon('close')}</button></header>
    <div class="cg-sheet-body"><div class="sc-msgs" id="tutorList"></div></div>
    <div class="cg-chips sc-tutor-chips">${CHIPS.map((c) => `<button type="button" class="cg-chip" data-chip>${esc(c)}</button>`).join('')}</div>
    <form class="sc-composer"><label class="cg-field"><input name="t" maxlength="600" autocomplete="off" placeholder="Ask the tutor…" aria-label="Your question"></label>
      <button class="cg-btn cg-btn-strong" type="submit">Ask</button></form>`;
  document.body.appendChild(sheet);
  const list = sheet.querySelector('#tutorList'), body = sheet.querySelector('.cg-sheet-body'), input = sheet.querySelector('input');

  function paint() {
    list.innerHTML = thread.map((m) => `<div class="sc-msg ${m.role === 'user' ? 'is-me' : ''}">${m.role === 'user' ? `<p class="cg-text">${esc(m.content)}</p>` : renderText(m.content) + videoHTML(m.video)}</div>`).join('')
      + (busy ? '<div class="sc-msg sc-typing"><p class="cg-meta">The tutor is thinking…</p></div>' : '')
      + (note ? `<p class="cg-meta sc-tutor-note">${esc(note)}</p>` : '');
    sheet.querySelector('[type=submit]').disabled = busy;
    body.scrollTop = body.scrollHeight;
  }
  function opener(c) {
    const q = c.question;
    if (q && q.picked && q.wrong && q.final) return `You picked "${q.picked}". Let's look at why that's not it.`;
    if (q && q.picked && q.wrong) return `Let's work this one out together. You picked "${q.picked}". How did you decide on that?`;
    if (q) return 'What part of this question is tripping you up? Tell me what you\'re thinking so far.';
    if (c.stage === 'real') return 'Let\'s think it through together. I won\'t write it for you, but I\'ll help you figure out what to say. Which part of the question are you unsure about?';
    return `As-salamu alaykum, ${STUDENT_NAME}! What part of "${c.lesson.title}" is confusing you?`;
  }
  function errorText(status) {
    if (status === 503) return 'The tutor isn\'t turned on yet. Ask your brother to finish setting it up.';
    if (status === 401 || status === 403) return 'The tutor couldn\'t check your sign-in. Close the app, open it again, and retry.';
    return 'The tutor couldn\'t answer just now. Check the Wi-Fi and try again.';
  }
  // What the server sees of the chat: each video the app showed is noted so the tutor knows about it.
  const forServer = (t) => t.map((m) => ({ role: m.role, content: m.content + (m.video && m.video.state === 'ok' ? `\n(The app showed him a video: "${m.video.title}" by ${m.video.channel}.)` : '') }));
  async function authHeaders() { const token = await store.idToken(); return { 'content-type': 'application/json', ...(token ? { authorization: `Bearer ${token}` } : {}) }; }
  async function findVideo(msg, query) {
    tracker.log('tutor', `looking for a video: ${query}`);
    try {
      const r = await fetch('/api/tutor-video', { method: 'POST', headers: await authHeaders(),
        body: JSON.stringify({ query, subject: ctx.subject, lesson: ctx.lesson.title }) });
      const j = await r.json().catch(() => ({}));
      msg.video = r.ok && j.video ? { state: 'ok', ...j.video } : { state: 'none' };
    } catch { msg.video = { state: 'none' }; }
    tracker.log('tutor', msg.video.state === 'ok' ? `showed a video: "${msg.video.title}" (${msg.video.channel})` : 'no video passed the checks');
    if (isOpen) paint();
  }
  async function ask(text) {
    text = String(text || '').trim();
    if (!text || busy || !thread) return;
    note = ''; thread.push({ role: 'user', content: text }); busy = true; paint();
    tracker.log('tutor', `he asked (${ctx.lesson.title}, ${ctx.stage}${ctx.question ? ', about a question' : ''}): ${text}`);
    try {
      const r = await fetch('/api/tutor', { method: 'POST', headers: await authHeaders(),
        body: JSON.stringify({ lesson: ctx.lesson, stage: ctx.stage, question: ctx.question || null, messages: forServer(thread) }) });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || !j.reply) throw Object.assign(new Error('tutor'), { status: r.status });
      const msg = { role: 'assistant', content: j.reply, video: j.videoQuery && ctx.subject ? { state: 'loading' } : null };
      thread.push(msg);
      tracker.log('tutor', `tutor: ${j.reply}`);
      if (msg.video) findVideo(msg, String(j.videoQuery).slice(0, 120));
    } catch (e) {
      thread.pop(); input.value = text; note = errorText(e.status);
      tracker.log('tutor', `no answer (${e.status || 'network'})`);
    } finally { busy = false; paint(); }
  }
  sheet.querySelector('form').onsubmit = (e) => { e.preventDefault(); const t = input.value; input.value = ''; ask(t); };
  sheet.querySelectorAll('[data-chip]').forEach((b) => { b.onclick = () => ask(b.textContent); });
  sheet.addEventListener('cg-open', () => { isOpen = true; openedAt = Date.now(); tracker.hold(true); tracker.log('tutor', `opened the tutor (${ctx.lesson.title}, ${ctx.stage}) — clock paused`); paint(); });
  // Closing the tutor stops any video (the chat is drawn again when it opens).
  sheet.addEventListener('cg-close', () => { isOpen = false; list.innerHTML = ''; tracker.hold(false); tracker.log('tutor', `closed the tutor after ${Math.round((Date.now() - openedAt) / 1000)}s`); });

  return {
    // c = { lesson: lessonInfo(...), lessonKey, subject: 'algebra'|'biology', stage: 'watch'|'learn'|'quiz'|'real'|'practice', question?: { q, choices, picked, wrong } }
    open(c) {
      ctx = c; note = '';
      const q = c.question, final = !!(q && q.final && q.wrong);
      const key = `${c.lessonKey}|${c.stage}|${q ? `${q.q}|${q.picked || ''}|${final ? 'final' : ''}` : ''}`;
      const fresh = !threads[key];
      thread = threads[key] = threads[key] || [{ role: 'assistant', content: opener(c) }];
      sheet.querySelector('#tutorSub').textContent = c.lesson.title;
      paint();
      if (window.CalmGlass) window.CalmGlass.open(sheet);
      // A final miss: his brother wants him to see what went wrong, so the explanation starts right away (owner 2026-10-05).
      if (fresh && final) { tracker.log('tutor', `asked why "${q.picked}" was wrong (answer final — the tutor gives the right answer)`); ask('Why is my answer wrong?'); }
    },
    destroy() { if (isOpen && window.CalmGlass) window.CalmGlass.close(sheet); tracker.hold(false); sheet.remove(); },
  };
}
