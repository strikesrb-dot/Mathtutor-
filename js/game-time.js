// Game time (owner request 2026-10-05): after each break he gets rules.gameMinutes (7) minutes of Slice or Glide — his pick,
// and he can switch. The clock is wall time from when he first opens it (saved as day.games[G1].start), so leaving or
// reloading doesn't add time. When it runs out in the middle of a round he finishes that round, then it's back to studying.
// None of this is study time (the tracker is off); it is in the activity log and on the master's live card.

import { esc, mmss, icon, toast } from './ui.js';

const GAMES = [
  { id: 'slice', name: 'Slice', sub: 'Slice the fruit, dodge the bombs. A round is about a minute.' },
  { id: 'glide', name: 'Glide', sub: 'Tap to rise and fly through the gaps.' },
];
// the states where a round is still going (Slice: playing, the pomegranate, paused, the game-over moment; Glide: flying)
const IN_ROUND = { slice: /^(play|pom|held|over)$/, glide: /^play$/ };

// deps: { step, rules, day, tracker, chat, patchDay, addCleanup(fn), onHome(), onDone() }
export function renderGameTime(root, { step, rules, day, tracker, chat, patchDay, addCleanup, onHome, onDone }) {
  const total = (rules.gameMinutes || 7) * 60;
  const rec = (day.games || {})[step.id] || {};
  const start = rec.start || Date.now();
  if (!rec.start) { patchDay({ games: { [step.id]: { start } } }); tracker.log('game', `game time started (${rules.gameMinutes} min)`); }
  tracker.off();
  document.body.classList.remove('cg-has-island');
  const played = new Set(rec.played ? String(rec.played).split(', ') : []);
  let game = null, gameId = '', loading = false, finished = false, timeUp = false, lastState = '';

  root.innerHTML = `
    <header class="cg-header">
      <button class="cg-key cg-key-start" id="home" aria-label="Back to today's plan">${icon('back')}</button>
      <h1 class="cg-header-title">Game time<small class="cg-num" id="gtLeft"></small></h1>
      ${chat.keyHTML()}
    </header>
    <main class="cg-content sc-main sc-game">
      <div id="gtUp" class="cg-card sc-notice" hidden><p class="cg-headline">Time's up</p><p class="cg-meta">Finish this round, then it's back to studying.</p></div>
      <div id="gtPick">
        <p class="cg-text">You earned ${rules.gameMinutes} minutes. Pick a game. You can switch any time.</p>
        <div class="cg-group">${GAMES.map((g) => `
          <button type="button" class="cg-row has-icon" data-game="${g.id}"><span class="cg-row-icon">${icon('play')}</span>
            <span class="cg-row-text"><span class="cg-row-label">${esc(g.name)}</span><span class="cg-row-sub">${esc(g.sub)}</span></span><span class="cg-chev"></span></button>`).join('')}</div>
        <div class="sc-actions"><button type="button" class="cg-btn cg-btn-glass" id="gtSkip">Skip — back to studying</button></div>
      </div>
      <div class="sc-game-stage" id="gtStage" hidden></div>
      <div class="cg-btns sc-game-keys" id="gtKeys" hidden><button type="button" class="cg-btn cg-btn-glass" id="gtSwitch">Switch game</button><button type="button" class="cg-btn cg-btn-plain" id="gtDone">Back to studying</button></div>
    </main>`;
  chat.wire(root);
  const $ = (s) => root.querySelector(s);
  const left = () => Math.max(0, Math.ceil(total - (Date.now() - start) / 1000));
  const nameOf = (id) => (GAMES.find((g) => g.id === id) || {}).name || '';
  const inRound = () => !!(game && IN_ROUND[gameId].test(game.api.state()));

  function live(major) {
    tracker.setLive({ view: 'game', title: 'Game time', lesson: gameId ? nameOf(gameId) : '', sub: '', stage: '',
      detail: timeUp ? 'Time is up — finishing the round' : gameId ? `Playing ${nameOf(gameId)}` : 'Picking a game', pos: `${mmss(left())} left` }, major);
  }
  function unmount() { if (game) { game.destroy(); game = null; } gameId = ''; lastState = ''; }
  async function pick(id) {
    if (loading || finished || timeUp) return;
    loading = true; unmount();
    $('#gtPick').hidden = true; $('#gtStage').hidden = false; $('#gtKeys').hidden = false;
    try {
      const { mountGame } = await import('./games/kit.js');
      if (finished) return;
      game = await mountGame(id, $('#gtStage')); gameId = id; played.add(nameOf(id));
      tracker.log('game', `picked ${nameOf(id)}`); live(true);
    } catch (e) { console.warn(e); toast('The game didn\'t load — check the Wi-Fi'); showPicker(); }
    finally { loading = false; }
  }
  function showPicker() { unmount(); $('#gtStage').hidden = true; $('#gtKeys').hidden = true; $('#gtPick').hidden = false; live(true); }
  function finish(why) {
    if (finished) return;
    finished = true; clearInterval(t); unmount();
    tracker.log('game', `game time over — ${why} (played: ${[...played].join(', ') || 'nothing'})`);
    patchDay({ games: { [step.id]: { done: true, played: [...played].join(', ') } } });
    onDone();
  }

  root.querySelectorAll('[data-game]').forEach((b) => { b.onclick = () => pick(b.dataset.game); });
  $('#gtSwitch').onclick = () => { tracker.log('game', `switched away from ${nameOf(gameId)}`); showPicker(); };
  $('#gtSkip').onclick = () => finish('he skipped it');
  $('#gtDone').onclick = () => finish('he went back early');
  $('#home').onclick = () => { unmount(); onHome(); };   // the clock keeps running while he's away

  function tick() {
    const l = left();
    $('#gtLeft').textContent = timeUp ? 'Finish this round' : `${mmss(l)} left`;
    if (game) {   // log each round's end with its score
      const s = game.api.state(), was = lastState && IN_ROUND[gameId].test(lastState), now = IN_ROUND[gameId].test(s);
      if (was && !now) { const d = game.api.dbg ? game.api.dbg() : {}; tracker.log('game', `${nameOf(gameId)} round over — score ${d.score != null ? d.score : '?'}${d.mode ? ` (${d.mode})` : ''}`); }
      lastState = s;
    }
    if (l <= 0 && !timeUp) {
      timeUp = true;
      if (inRound()) { $('#gtUp').hidden = false; tracker.log('game', 'time is up — letting him finish the round'); toast('Time\'s up — finish this round'); live(true); }
    }
    if (timeUp && !inRound()) return finish('7 minutes done');
    live(false);
  }
  const t = setInterval(tick, 1000);
  addCleanup(() => { clearInterval(t); unmount(); });
  tick();
  live(true);
}
