// The break between blocks (owner requests 2026-10-05): 7 minutes on wall time from when he first opens it (day.breakStart),
// so reopening the app doesn't restart it. "Cash it in" adds whatever is left of the break to the game time that follows it.
// Not study time (the tracker is off).

import { mmss, icon, toast } from './ui.js';

export function renderBreak(root, { step, rules, day, tracker, chat, patchDay, addCleanup, onHome, onNext }) {
  tracker.off();
  document.body.classList.remove('cg-has-island');
  const total = rules.breakMinutes * 60, saved = (day.breakStart || {})[step.id];
  const started = saved || Date.now();
  if (!saved) patchDay({ breakStart: { [step.id]: started } });
  const remaining = () => Math.max(0, Math.ceil(total - (Date.now() - started) / 1000));
  const steps = rules.steps, next = steps[steps.findIndex((s) => s.id === step.id) + 1];
  const canCash = !!(next && next.type === 'game');
  let left = remaining();
  root.innerHTML = `
    <header class="cg-header">
      <button class="cg-key cg-key-start" id="home" aria-label="Back to today's plan">${icon('back')}</button>
      <h1 class="cg-header-title">Break</h1>
      ${chat.keyHTML()}
    </header>
    <main class="cg-content sc-main">
      <div class="cg-card sc-center sc-break">
        <span class="sc-break-icon">${icon('cup')}</span>
        <div class="sc-num cg-num break-clock" id="bc">${mmss(left)}</div>
        <p class="cg-text">Stand up, stretch, drink some water. This time doesn't count — and that's fine.</p>
        ${canCash ? `<p class="cg-meta">Or cash in your break: whatever is left gets added to your game time.</p>
        <button class="cg-btn cg-btn-glass cg-btn-block cg-num" id="cashIn">Cash it in: +${mmss(left)} of games</button>` : ''}
        <button class="cg-btn cg-btn-strong cg-btn-block" id="skip">I'm ready — next</button>
      </div>
    </main>`;
  const bc = root.querySelector('#bc');
  const liveLeft = (major) => tracker.setLive({ view: 'break', title: 'Break', lesson: '', sub: '', stage: '',
    detail: left > 0 ? 'On break' : 'Break is over — hasn\'t tapped "next" yet', pos: left > 0 ? `${mmss(left)} left` : '' }, major);
  liveLeft(true);
  const cash = root.querySelector('#cashIn');
  const over = () => { bc.textContent = '0:00'; bc.classList.add('sc-over'); if (cash) cash.hidden = true; };
  if (left <= 0) over();
  const t = setInterval(() => {
    left = remaining(); bc.textContent = mmss(left); if (cash) cash.textContent = `Cash it in: +${mmss(left)} of games`; liveLeft(left <= 0);
    if (left <= 0) { clearInterval(t); over(); toast('Break is over — back to it'); }
  }, 1000);
  if (cash) cash.onclick = () => {
    const bonus = remaining(); if (!bonus) return;
    tracker.log('break', `cashed in the break: +${mmss(bonus)} of game time`);
    patchDay({ breaks: { [step.id]: true }, games: { [next.id]: { bonus } } });
    onNext();
  };
  addCleanup(() => clearInterval(t));
  root.querySelector('#home').onclick = onHome;
  chat.wire(root);
  root.querySelector('#skip').onclick = () => { patchDay({ breaks: { [step.id]: true } }); onNext(); };
}
