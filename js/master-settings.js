// Master → Settings (the gear key in the header): study plan, study rules, lesson videos, fun-fact videos, demo tools, sign out.
// Returns the plan card so the master view can refresh its Done / On it now labels as his day changes.

import { todayKey, originalVideos } from './curriculum.js';
import { esc, toast, parseYouTubeId, icon } from './ui.js';
import factsDefault from '../content/facts.js';
import { drawPlanCard } from './plan-card.js';
import { allLessons } from './master-shared.js';

export function drawSettings(body, M) {
  const { S, cur, store, ui, isDemo } = M;
  const all = allLessons(cur);
  if (!ui.editLesson) ui.editLesson = all[0].key;
  const L = all.find((l) => l.key === ui.editLesson) || all[0];
  const factsText = cur.facts.map((x) => `https://youtu.be/${x.id} | ${x.title} | ${x.cat || ''} | ${x.blurb || ''}`).join('\n');
  const stepper = (id, value, min, max, step) => `<div class="cg-stepper" data-id="${id}" data-min="${min}" data-max="${max}" data-step="${step}">
    <button type="button" class="sc-step-btn" data-d="-1" aria-label="Less">−</button><span class="cg-stepper-value" id="${id}">${value}</span><button type="button" class="sc-step-btn" data-d="1" aria-label="More">+</button></div>`;
  body.innerHTML = `
    <div id="planCard"></div>
    <p class="cg-caption">Study rules</p>
    <div class="cg-group">
      <div class="cg-row"><span class="cg-row-text"><span class="cg-row-label">Minutes per block</span><span class="cg-row-sub">Focused time in each block</span></span>${stepper('bm', cur.rules.blockMinutes, 10, 90, 5)}</div>
      <div class="cg-row"><span class="cg-row-text"><span class="cg-row-label">Quiz pass mark</span><span class="cg-row-sub">Percent needed to pass a lesson</span></span>${stepper('pp', cur.rules.passPct, 50, 100, 5)}</div>
      ${['algebra', 'biology'].map((subj) => `<label class="cg-row cg-row-tall"><span class="cg-row-text"><span class="cg-row-label">Start ${esc(cur[subj].name)} at</span><span class="cg-row-sub">Earlier units are skipped</span></span>
        <select id="start-${subj}" class="sc-select cg-row-block"><option value="0">Unit ${cur[subj].units[0] ? cur[subj].units[0].n : 1} (the beginning)</option>${cur[subj].units.slice(1).map((u) => `<option value="${u.n}" ${cur[subj].startUnit === u.n ? 'selected' : ''}>Unit ${u.n}: ${esc(u.title)}</option>`).join('')}</select></label>`).join('')}
    </div>
    <div class="sc-actions"><button class="cg-btn cg-btn-strong" id="saveRules">Save rules</button></div>

    <p class="cg-caption">Swap lesson videos</p>
    <div class="cg-group">
      <label class="cg-row cg-row-tall"><span class="cg-row-text"><span class="cg-row-label">Lesson</span></span>
        <select id="ls" class="sc-select cg-row-block">${['algebra', 'biology'].map((subj) => cur[subj].units.map((u) => `<optgroup label="${esc(cur[subj].name)} · Unit ${u.n}: ${esc(u.title)}">${u.lessons.map((l) => `<option value="${l.key}" ${l.key === ui.editLesson ? 'selected' : ''}>${esc(l.title)}</option>`).join('')}</optgroup>`).join('')).join('')}</select></label>
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

  const planCard = drawPlanCard(body.querySelector('#planCard'), { rules: () => M.cur.rules, save: (plan) => store.saveSettings({ plan }), today: () => S.days[todayKey()] });

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
  body.querySelector('#ls').onchange = (e) => { ui.editLesson = e.target.value; M.render(); };
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
    await store.saveSettings({ videoOverrides: { [ui.editLesson]: vids } });
    toast('Videos saved');
  };
  body.querySelector('#resetVids').onclick = async () => {
    await store.saveSettings({ videoOverrides: { [ui.editLesson]: originalVideos(ui.editLesson) } });
    toast('Original videos restored'); M.render();
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
  body.querySelector('#resetFacts').onclick = async () => { await store.saveSettings({ facts: factsDefault }); toast('Original list restored'); M.render(); };
  body.querySelector('#out').onclick = () => M.onSignOut();
  if (isDemo) {
    body.querySelector('#toStudent').onclick = () => M.onSwitchToStudent();
    body.querySelector('#wipe').onclick = async () => {
      const backup = store.exportDemo();
      await store.resetDemo();
      toast('Demo data wiped', { action: () => store.importDemo(backup), label: 'Undo' });
    };
  }
  return planCard;
}
