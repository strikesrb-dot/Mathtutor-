// Master → Today: where he is right now (+ Nudge / Message), the lesson you sent, today's numbers and plan,
// shortcuts to today's missed questions and points, and today's red flags (only when there are some).

import { todayKey, dayStatus } from './curriculum.js';
import { esc, hm, bar } from './ui.js';
import { fmt } from './points.js';
import { FLAG_LABEL, stepLabel, row, flagSum, agoText, clock, startOfToday, lessonTitle, focusCard, wireFocus } from './master-shared.js';

export function drawToday(body, M) {
  const { S, cur } = M;
  const d = S.days[todayKey()] || {};
  const blocks = cur.rules.plan.length, goal = cur.rules.blockMinutes * 60 * blocks;
  const st = dayStatus(cur.rules, d);
  const blocksDone = st.list.filter((s) => s.type === 'block' && s.done).length;
  const flags = d.flags || {}, flagTotal = flagSum(d);
  const since = startOfToday();
  const missedToday = S.misses.filter((m) => (m.at || 0) >= since).length;
  const earned = Object.values(S.points).filter((p) => (p.at || 0) >= since).reduce((a, p) => a + (Number(p.pts) || 0), 0);
  const failed = Object.entries(S.err).filter(([, v]) => v);

  body.innerHTML = `
    ${failed.length ? `<div class="cg-card sc-notice"><p class="cg-headline">Some of his data didn't load</p>
      <p class="cg-meta">${failed.map(([k, v]) => `${esc(k)}: ${esc(v)}`).join(' · ')}. The numbers below may be missing. Reload; if it stays, send Claude a screenshot.</p></div>` : ''}
    <div id="liveCard">${liveCardHTML(M)}</div>
    <div class="cg-btns sc-live-btns"><button type="button" class="cg-btn cg-btn-glass" id="nudgeBtn">Nudge him</button><button type="button" class="cg-btn cg-btn-glass" id="msgBtn">Message him</button></div>
    ${focusCard(M)}

    <p class="cg-caption">Today</p>
    <div class="sc-stats">
      <div class="cg-card sc-stat"><b class="cg-num">${d.openSec ? hm(d.openSec) : '—'}</b><span class="cg-meta">on the app</span></div>
      <div class="cg-card sc-stat"><b class="cg-num">${hm(d.activeSec || 0)}</b><span class="cg-meta">focused (counts)</span></div>
      <div class="cg-card sc-stat"><b class="cg-num">${blocksDone}/${blocks}</b><span class="cg-meta">blocks done</span></div>
      <div class="cg-card sc-stat"><b class="cg-num">${flagTotal}</b><span class="cg-meta">red flags</span></div>
    </div>
    <ul class="cg-group sc-today">
      <li class="cg-row"><span class="cg-row-text"><span class="cg-row-label">Goal: ${hm(goal)} of focused time</span>${bar(((d.activeSec || 0) / goal) * 100)}</span></li>
      ${d.openSec >= 60 && d.openSec >= (d.activeSec || 0) ? row({ label: 'Focus rate', sub: 'Share of his app time that counted', value: `${Math.round(((d.activeSec || 0) / d.openSec) * 100)}%` }) : ''}
      ${st.list.filter((s) => s.type === 'block' || s.type === 'fact').map((s) => row({
        ic: s.done ? 'check' : s.type === 'fact' ? 'globe' : s.subject === 'biology' ? 'biology' : 'algebra',
        cls: s.done ? 'sc-done' : '',
        label: stepLabel(s.id),
        value: s.type === 'block' ? `${Math.floor(s.sec / 60)} / ${cur.rules.blockMinutes} min` : s.done ? 'Watched' : '',
      })).join('')}
    </ul>
    ${d.practice ? `<p class="cg-foot">Extra practice: ${Object.entries(d.practice).map(([k, v]) => `${esc(k)} ${v.right}/${v.total}`).join(' · ')}</p>` : ''}

    <div class="cg-group sc-links">
      ${row({ tag: 'button', ic: 'wrong', label: 'Missed questions today', value: missedToday ? String(missedToday) : 'None', attrs: 'data-go="progress:missed"', chev: true })}
      ${row({ tag: 'button', ic: 'star', label: 'Points earned today', value: earned ? `+${fmt(earned)}` : '0', attrs: 'data-go="points"', chev: true })}
    </div>

    ${flagTotal ? `<p class="cg-caption">Red flags today</p>
      <ul class="cg-group flags">${Object.entries(flags).filter(([, v]) => v).map(([k, v]) => row({ ic: 'flag', label: FLAG_LABEL[k] || esc(k), value: `×${v}` })).join('')}</ul>
      <p class="cg-foot">When each one happened: Progress → History.</p>` : ''}`;

  body.querySelector('#nudgeBtn').onclick = () => M.chat.nudge();
  body.querySelector('#msgBtn').onclick = () => M.go('chat');
  body.querySelectorAll('[data-go]').forEach((b) => { b.onclick = () => { const [t, sub] = b.dataset.go.split(':'); M.go(t, sub); }; });
  wireFocus(body, M);
}

// ── "Right now" card. His app saves where he is to students/{uid}/meta/live: at once on every new screen,
// and every 10–30 seconds while he's on it. Older app versions only left day.lastSeen, so that's the fallback.
export function liveCardHTML(M) {
  const L = M.S.live || {};
  if (!L.at) return oldLiveCard(M);
  const age = Math.max(0, (Date.now() - L.at) / 1000);
  const online = L.visible !== false && age < 50;
  const ago = age < 60 ? 'just now' : agoText(Math.round(age / 60));
  const head = online ? 'On the app now' : L.visible === false ? `Left the app ${ago}` : `App closed · last seen ${ago}`;
  const status = !online ? '' : L.flashing ? 'Red alert showing' : L.counting ? 'Counting' : 'Not counting';
  const sessionOld = !online && age > 600;
  return `
    <p class="cg-caption">${online ? 'Right now' : 'Where he stopped'}</p>
    <ul class="cg-group sc-live ${online ? 'is-live' : ''}">
      <li class="cg-row has-icon"><span class="cg-row-icon"><i class="sc-live-dot"></i></span>
        <span class="cg-row-text"><span class="cg-row-label">${head}</span></span>${status ? `<span class="cg-row-value">${status}</span>` : ''}</li>
      ${row({ ic: L.view === 'break' ? 'cup' : L.view === 'fact' ? 'globe' : L.view === 'game' ? 'play' : L.view === 'home' ? 'list' : /biology/i.test(L.title || '') ? 'biology' : 'algebra',
        label: esc(L.title || 'Home screen'), sub: esc([L.lesson, L.sub].filter(Boolean).join(' · ')) })}
      ${L.detail ? row({ ic: 'play', label: esc(L.stage ? `${L.stage}: ${L.detail}` : L.detail), sub: esc(L.pos || '') }) : ''}
      ${L.sessionStart ? row({ ic: 'clock', label: sessionOld ? 'Last session' : 'This session',
        sub: `Started ${clock(L.sessionStart)} · ${hm(L.sessionOpen || 0)} on the app · ${hm(L.sessionFocus || 0)} focused${L.sessionOpen >= 60 ? ` (${Math.round(((L.sessionFocus || 0) / L.sessionOpen) * 100)}%)` : ''}` }) : ''}
    </ul>`;
}
function oldLiveCard(M) {
  let seen = null;
  for (const dd of Object.values(M.S.days)) if (dd.lastSeen && (!seen || dd.lastSeen > seen.t)) seen = { t: dd.lastSeen, step: dd.lastStep, lesson: dd.lastLesson };
  const ago = seen ? Math.round((Date.now() - seen.t) / 60000) : null;
  const live = ago != null && ago < 2;
  return `<ul class="cg-group sc-live ${live ? 'is-live' : ''}">
    <li class="cg-row has-icon"><span class="cg-row-icon"><i class="sc-live-dot"></i></span>
      <span class="cg-row-text"><span class="cg-row-label">${live ? 'Studying right now' : ago == null ? 'Hasn\'t started yet' : `Last active ${agoText(ago)}`}</span>
      ${seen && seen.step ? `<span class="cg-row-sub">${stepLabel(seen.step)}${seen.lesson ? ' · ' + esc(lessonTitle(M.cur, seen.lesson)) : ''}</span>` : ''}</span></li>
  </ul>`;
}
