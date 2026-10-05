// Messages between you (master) and him (student), plus nudges.
// Stored in students/{uid}/chat/{id} { from: 'master'|'student', kind: 'msg'|'nudge', text, at }.
// Read marks in students/{uid}/meta/chat { masterRead, studentRead } = the time of the last message each side has seen.
// Student: a sheet over whatever he's doing (his study clock pauses while it's open); a nudge pops up as the red alert.
// Master: the Chat tab, plus the Nudge button on the Overview.

import { esc, icon, toast, flash, beep } from './ui.js';
import { STUDENT_NAME } from './config.js';

export const NUDGE_TEXT = 'Time to get back to studying!';

function when(t) {
  const d = new Date(t), time = d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  return d.toDateString() === new Date().toDateString() ? time : `${d.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}, ${time}`;
}

function messagesHTML(msgs, me, otherRead, empty) {
  if (!msgs.length) return `<p class="cg-meta sc-chat-empty">${esc(empty)}</p>`;
  const lastMine = [...msgs].reverse().find((m) => m.from === me);
  return msgs.map((m) => `
    <div class="sc-msg ${m.from === me ? 'is-me' : ''}">
      ${m.kind === 'nudge' ? '<p class="cg-headline">Nudge</p>' : ''}
      <p class="cg-text">${esc(m.text || (m.kind === 'nudge' ? NUDGE_TEXT : ''))}</p>
      <span class="cg-meta">${when(m.at)}${m === lastMine && otherRead >= m.at ? ' · Seen' : ''}</span>
    </div>`).join('');
}

function composerHTML(placeholder) {
  return `<form class="sc-composer"><label class="cg-field"><input name="t" maxlength="500" autocomplete="off" placeholder="${esc(placeholder)}" aria-label="Message"></label>
    <button class="cg-btn cg-btn-strong" type="submit">Send</button></form>`;
}
function wireComposer(form, onSend) {
  form.onsubmit = (e) => {
    e.preventDefault();
    const inp = form.querySelector('input'), text = inp.value.trim();
    if (!text) return;
    inp.value = '';
    onSend(text);
  };
}
const lastAt = (msgs) => (msgs.length ? msgs[msgs.length - 1].at || 0 : 0);

// ─────────────── Student ───────────────
export function studentChat({ store, sid, tracker }) {
  let msgs = [], read = {}, seen = null, readLoaded = false, firstDone = false, isOpen = false;
  const sheet = document.createElement('section');
  sheet.className = 'cg-sheet sc-chat-sheet';
  sheet.setAttribute('aria-label', 'Messages');
  sheet.hidden = true;
  sheet.innerHTML = `
    <span class="cg-grabber"></span>
    <header class="cg-header"><h2 class="cg-header-title">Your brother<small>Your study clock is paused</small></h2>
      <button class="cg-key cg-key-end" type="button" data-cg-close aria-label="Close">${icon('close')}</button></header>
    <div class="cg-sheet-body"><div class="sc-msgs" id="chatList"></div></div>
    ${composerHTML('Message your brother…')}`;
  document.body.appendChild(sheet);
  const list = sheet.querySelector('#chatList'), body = sheet.querySelector('.cg-sheet-body');
  wireComposer(sheet.querySelector('form'), (text) => {
    tracker.log('chat', `sent a message (${text.length} characters)`);
    store.sendChat(sid, { from: 'student', kind: 'msg', text, at: Date.now() }).catch(() => toast('Message didn\'t send — check the Wi-Fi'));
  });

  const unread = () => msgs.filter((m) => m.from === 'master' && (m.at || 0) > (read.studentRead || 0)).length;
  const markRead = (at = lastAt(msgs)) => { if (at > (read.studentRead || 0)) { read = { ...read, studentRead: at }; store.saveChatRead(sid, { studentRead: at }).catch(() => {}); } };

  function paint() {
    list.innerHTML = messagesHTML(msgs, 'student', read.masterRead || 0, 'No messages yet. Your brother can message you here.');
    if (isOpen) { markRead(); body.scrollTop = body.scrollHeight; }
    const n = unread(), last = msgs[msgs.length - 1];
    document.querySelectorAll('[data-chat-dot]').forEach((d) => { d.hidden = !n; });
    const sub = document.getElementById('chatRowSub'), val = document.getElementById('chatRowVal');
    if (sub) sub.textContent = last ? `${last.from === 'master' ? 'Your brother' : 'You'}: ${last.text || NUDGE_TEXT}` : 'Message your brother';
    if (val) val.textContent = n ? `${n} new` : '';
  }

  function alertFor(m) {
    if (m.kind === 'nudge') {
      const shown = Date.now();
      tracker.log('chat', 'got a nudge');
      flash('Your brother nudged you', m.text || NUDGE_TEXT, 'OK').then(() => {
        tracker.log('chat', `tapped OK on the nudge after ${Math.round((Date.now() - shown) / 1000)}s`);
        markRead(Math.max(m.at || 0, read.studentRead || 0));
      });
    } else if (!isOpen) {
      beep();
      toast(`Your brother: ${m.text}`, { action: open, label: 'Open', time: 7000 });
    }
  }
  // On the first load, replay a nudge he hasn't seen yet if it's from the last 15 minutes (his phone may have been off).
  function firstCheck() {
    if (firstDone || !readLoaded || !seen) return;
    firstDone = true;
    const nudge = msgs.filter((m) => m.from === 'master' && m.kind === 'nudge' && m.at > (read.studentRead || 0) && Date.now() - m.at < 15 * 60000).pop();
    if (nudge) alertFor(nudge);
  }

  const unsubs = [
    store.watchChat(sid, (m) => {
      m = m || [];
      const fresh = seen ? m.filter((x) => !seen.has(x.id) && x.from === 'master') : [];
      seen = new Set(m.map((x) => x.id));
      msgs = m; paint();
      fresh.forEach(alertFor);
      firstCheck();
    }),
    store.watchChatRead(sid, (r) => { read = { ...read, ...(r || {}) }; readLoaded = true; paint(); firstCheck(); }),
  ];

  function open() { if (window.CalmGlass) window.CalmGlass.open(sheet); }
  let openedAt = 0;
  sheet.addEventListener('cg-open', () => { isOpen = true; openedAt = Date.now(); tracker.log('chat', 'opened messages (clock paused)'); tracker.hold(true); if (window.CalmGlass) window.CalmGlass.hideToast(); paint(); });
  sheet.addEventListener('cg-close', () => { isOpen = false; tracker.hold(false); tracker.log('chat', `closed messages after ${Math.round((Date.now() - openedAt) / 1000)}s`); });

  return {
    open,
    // The home-screen row. Call wire(root) after drawing it (also wires any [data-chat-open] key).
    rowHTML() {
      return `<p class="cg-caption">Messages</p><div class="cg-group">
        <button type="button" class="cg-row has-icon" data-chat-open><span class="cg-row-icon">${icon('chat')}</span>
          <span class="cg-row-text"><span class="cg-row-label">Your brother</span><span class="cg-row-sub" id="chatRowSub"></span></span>
          <span class="cg-row-value" id="chatRowVal"></span><span class="cg-chev"></span></button></div>`;
    },
    keyHTML(cls = 'cg-key cg-key-end') { return `<button type="button" class="${cls} sc-chat-key" data-chat-open aria-label="Messages">${icon('chat')}<i class="sc-dot" data-chat-dot hidden></i></button>`; },
    wire(root) { root.querySelectorAll('[data-chat-open]').forEach((b) => { b.onclick = open; }); paint(); },
    destroy() {
      unsubs.forEach((u) => { try { u && u(); } catch {} });
      if (isOpen && window.CalmGlass) window.CalmGlass.close(sheet);
      tracker.hold(false); sheet.remove();
    },
  };
}

// ─────────────── Master ───────────────
// onNew(list of new messages from him) → the master shows a toast / updates the tab badge.
export function masterChat({ store, sid, onNew }) {
  let msgs = [], read = {}, seen = null, el = null;
  const unread = () => msgs.filter((m) => m.from === 'student' && (m.at || 0) > (read.masterRead || 0)).length;
  const markRead = () => { const at = lastAt(msgs); if (at > (read.masterRead || 0)) { read = { ...read, masterRead: at }; store.saveChatRead(sid, { masterRead: at }).catch(() => {}); } };
  const send = (kind, text) => store.sendChat(sid, { from: 'master', kind, text, at: Date.now() })
    .then(() => { if (kind === 'nudge') toast('Nudge sent — it pops up on his screen'); })
    .catch(() => toast('Didn\'t send — check the Wi-Fi'));

  function update() {
    if (!el || !el.isConnected) { el = null; return; }
    const box = el.querySelector('.sc-chat-box');
    box.querySelector('.sc-msgs').innerHTML = messagesHTML(msgs, 'master', read.studentRead || 0, `No messages yet. Write to ${STUDENT_NAME} below.`);
    box.scrollTop = box.scrollHeight;
    markRead();
  }
  const unsubs = [
    store.watchChat(sid, (m) => {
      m = m || [];
      const fresh = seen ? m.filter((x) => !seen.has(x.id) && x.from === 'student') : [];
      seen = new Set(m.map((x) => x.id));
      msgs = m; update();
      if (fresh.length) onNew(fresh);
    }),
    store.watchChatRead(sid, (r) => { read = { ...read, ...(r || {}) }; update(); }),
  ];

  return {
    unread,
    messages: () => msgs,
    say: (text) => send('msg', text),
    nudge: (text = '') => send('nudge', text),
    // Draw the Chat tab into body.
    panel(body) {
      body.innerHTML = `
        <p class="cg-caption">Messages with ${esc(STUDENT_NAME)}</p>
        <div class="sc-chat-box"><div class="sc-msgs"></div></div>
        ${composerHTML(`Message ${STUDENT_NAME}…`)}
        <div class="cg-btns sc-chat-actions"><button type="button" class="cg-btn cg-btn-glass" id="nudgeChat">Send a nudge</button></div>
        <p class="cg-foot">A nudge pops up on his screen with a beep, even in the middle of a video. Type something first to send it as the nudge's message.</p>`;
      el = body;
      const input = body.querySelector('.sc-composer input');
      wireComposer(body.querySelector('.sc-composer'), (text) => send('msg', text));
      body.querySelector('#nudgeChat').onclick = () => { send('nudge', input.value.trim()); input.value = ''; };
      update();
    },
    destroy() { unsubs.forEach((u) => { try { u && u(); } catch {} }); },
  };
}
