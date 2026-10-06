// Student side: today's plan → blocks (Watch → Learn → Quiz → Real life), fun-fact videos, breaks.
// Drawn with Calm Glass (css/calm-glass.css): one shared header, grouped lists, one dark main button per screen,
// and a floating glass island that holds the block timer.

import { buildCurriculum, lessonStage, currentLesson, focusLesson, STAGES, todayKey, dayStatus } from './curriculum.js';
import { createTracker } from './tracker.js';
import { mountVideo } from './video.js';
import { applyMerge, inc } from './store.js';
import { esc, mmss, shuffle, toast, icon, refreshSegs } from './ui.js';
import { practiceFor } from './practice.js';
import { questionHTML, wireAnswer, stageQuiz } from './quiz.js';
import { studentChat } from './chat.js';
import { createTutor, tutorButtonHTML, lessonInfo } from './tutor.js';
import { recordMiss } from './misses.js';
import { SUBJECT, renderHome as drawHome } from './home.js';
import { renderBreak as drawBreak } from './break.js';

const VIDEO_STATE = { '-1': 'not started', 0: 'finished', 1: 'playing', 2: 'paused', 3: 'loading', 5: 'not started' };
const videoPos = (t, dur, state) => `${mmss(t)} of ${dur ? mmss(dur) : '…'} · ${VIDEO_STATE[state] || 'loading'}`;

export function startStudent(root, { store, sid, onSignOut }) {
  const S = { settings: {}, lessons: {}, days: {}, meta: {} };
  let cur = buildCurriculum({});
  const tracker = createTracker(store, sid, cur.rules);
  const chat = studentChat({ store, sid, tracker });   // messages + nudges from his brother
  const tutor = createTutor({ store, tracker });       // the study tutor (Claude): asks, explains, never answers
  let cleanups = [];
  let view = { name: 'home' };
  const unsubs = [];

  const today = () => todayKey();
  const day = () => S.days[today()] || {};

  // ── optimistic saves (screen updates instantly, store syncs behind) ──
  function patchDay(patch) {
    S.days[today()] = applyMerge(day(), patch);
    return store.saveDay(sid, today(), patch).catch((e) => { toast('Saving failed — check the Wi-Fi'); console.warn(e); });
  }
  function patchLesson(key, patch) {
    S.lessons[key] = applyMerge(S.lessons[key], patch);
    return store.saveLesson(sid, key, patch).catch((e) => { toast('Saving failed — check the Wi-Fi'); console.warn(e); });
  }

  root.innerHTML = `<div class="sc-loading"><i class="sc-spin"></i><p class="cg-meta">Loading your plan…</p></div>`;

  // ── data: render as soon as his progress (lessons + today) is here; settings/meta update the screen later ──
  let rendered = false;
  const have = { l: false, d: false };
  const gate = (k) => { have[k] = true; if (!rendered && have.l && have.d) { rendered = true; render(); } };
  const slow = setTimeout(() => { if (!rendered) { rendered = true; render(); toast('Slow connection — showing saved progress'); } }, 6000);
  unsubs.push(() => clearTimeout(slow));
  let focusKey = null;   // the lesson his brother sent (settings.focus)
  unsubs.push(store.watchSettings((s) => {
    S.settings = s; cur = buildCurriculum(s);
    const fk = cur.focus ? cur.focus.key : null, changed = fk !== focusKey; focusKey = fk;
    if (!rendered) return;
    if (view.name === 'home') return render();
    // His brother changed the study plan and the step he's on is gone (say a Biology block, now it's all math): back home.
    if (view.name === 'step' && view.stepId !== 'X' && !stepById(view.stepId)) { go({ name: 'home' }); toast('Your brother changed today\'s plan.'); return; }
    // A lesson sent while he's in a study block opens right away (his place in the other lesson is saved).
    if (changed && fk && view.name === 'step' && /^([AB]\d|X)$/.test(view.stepId)) {
      clean(); view.stage = null; view.videoIdx = null; render(); toast('Your brother sent you a lesson. It\'s up now.');
    }
  }));
  unsubs.push(store.watchLessons(sid, (l) => { S.lessons = l || {}; gate('l'); }));
  unsubs.push(store.watchDays(sid, (d, err) => {
    if (err) toast('Couldn\'t load today\'s progress — check the Wi-Fi');
    S.days = d || {};
    tracker.setDay(day());
    if (!rendered) gate('d'); else if (view.name === 'home') render();
  }));
  unsubs.push(store.watchMeta(sid, (m) => { S.meta = m || {}; }));

  function clean() { cleanups.forEach((fn) => { try { fn(); } catch {} }); cleanups = []; tracker.off(); }
  function go(v) { clean(); view = v; render(); window.scrollTo(0, 0); }
  function render() {
    document.body.classList.toggle('cg-has-island', view.name === 'step');
    if (view.name === 'home') return renderHome();
    if (view.name === 'step') return renderStep();
  }


  // ─────────────────────────── HOME ─────────────────────────── (drawn by home.js)
  function renderHome() {
    clean();
    drawHome(root, { cur, lessons: S.lessons, day: day(), chat, tracker, onSignOut, focus: focusLesson(cur, S.lessons),
      start: (id) => go({ name: 'step', stepId: id }), extra: () => go({ name: 'step', stepId: 'X', extra: true }) });
  }

  function blockTitle(step) {
    return step.id === 'X' ? 'Extra practice (bonus)' : `${SUBJECT[step.subject].name} · Block ${step.n} of ${step.of}`;
  }
  function quizApp() {
    return { rules: cur.rules, tracker, prog: (k) => S.lessons[k] || {}, owesReview, patchLesson, chosen: view.stage === 'quiz',
      onClean: (fn) => cleanups.push(fn), goStage: (stage) => { clean(); view.stage = stage; renderStep(); },
      askTutor: (lesson, question) => openTutor(lesson, 'quiz', question),
      // a graded miss → saved for his brother with Claude's breakdown (js/misses.js)
      onMiss: (lesson, m) => recordMiss(store, sid, { lessonKey: lesson.key, lesson: lesson.title, subject: isAlgebra(lesson) ? 'algebra' : 'biology',
        unit: lesson.u ? `Unit ${lesson.u.n}: ${lesson.u.title}` : '', ...m }) };
  }
  // The tutor for this lesson (and step, and question if any). Buttons made by tutorButtonHTML() carry data-tutor.
  // Match by key: the curriculum is rebuilt on every settings change, so lesson objects aren't the same objects.
  const isAlgebra = (lesson) => cur.algebra.units.some((u) => u.lessons.some((l) => l.key === lesson.key));
  function subjectOf(lesson) { return isAlgebra(lesson) ? cur.algebra.name : cur.biology.name; }
  function openTutor(lesson, stage, question) {
    const subject = isAlgebra(lesson) ? 'algebra' : 'biology';
    tutor.open({ lesson: lessonInfo(lesson, subjectOf(lesson)), lessonKey: lesson.key, subject, stage, question });
  }
  function wireTutor(el, lesson, stage) { el.querySelectorAll('[data-tutor]').forEach((b) => { b.onclick = () => openTutor(lesson, stage); }); }


  // ─────────────────────────── STEP ───────────────────────────
  function stepById(id) {
    if (id === 'X') return { id: 'X', type: 'extra' };
    return cur.rules.steps.find((s) => s.id === id);
  }
  function nextStep() {
    const st = dayStatus(cur.rules, day());
    if (!st.current) return go({ name: 'home' });
    go({ name: 'step', stepId: st.current.id });
  }
  function renderStep() {
    const step = stepById(view.stepId);
    if (!step) return go({ name: 'home' });
    if (step.type === 'break') return renderBreak(step);
    if (step.type === 'fact') return renderFact(step);
    if (step.type === 'game') return renderGame(step);
    if (step.type === 'extra') return renderExtra();
    return renderBlock(step);
  }

  // Shared frame for a block or fact video: header · content · the timer island.
  function shell(step, inner, { title, sub = '' }) {
    const need = step.type === 'block' ? cur.rules.blockMinutes * 60 : 0;
    root.innerHTML = `
      <header class="cg-header">
        <button class="cg-key cg-key-start" id="home" aria-label="Back to today's plan">${icon('back')}</button>
        <h1 class="cg-header-title">${esc(title)}${sub ? `<small>${esc(sub)}</small>` : ''}</h1>
        ${chat.keyHTML()}
      </header>
      <main class="cg-content sc-main" id="stepBody">
        <div id="blockDone" class="cg-card sc-notice" hidden>
          <p class="cg-headline">Block time done</p>
          <p class="cg-meta">Finish this part, then take your break.</p>
          <button class="cg-btn cg-btn-glass" id="takeBreak">Take my break</button>
        </div>
        <div id="stepInner">${inner}</div>
      </main>
      <nav class="cg-island" aria-label="Timer">
        <span class="cg-island-key sc-status" id="clock" aria-label="Not counting"><i></i></span>
        <div class="cg-island-mid">
          <button class="cg-island-pill" id="clockPill"><b id="clockT" class="cg-num">${need ? mmss(tracker.stepSec(step.id)) : 'Paused'}</b><span id="clockS">${need ? `of ${mmss(need)}` : ''}</span><i>${icon('clock')}</i></button>
        </div>
        <button class="cg-island-key" id="home2" aria-label="Today's plan">${icon('list')}</button>
      </nav>`;
    root.querySelector('#home').onclick = () => go({ name: 'home' });
    root.querySelector('#home2').onclick = () => go({ name: 'home' });
    chat.wire(root);
    const clock = root.querySelector('#clock'), clockT = root.querySelector('#clockT');
    const notice = root.querySelector('#blockDone');
    let done = false;
    root.querySelector('#clockPill').onclick = () => {
      if (done) return takeBreak();
      toast(clock.classList.contains('on') ? 'Counting — keep going' : 'Not counting right now. Time counts while new video plays or while you work on this step.');
    };
    cleanups.push(tracker.onTick(({ counting, stepSec }) => {
      clock.classList.toggle('on', counting);
      clock.setAttribute('aria-label', counting ? 'Counting' : 'Not counting');
      if (need) {
        clockT.textContent = mmss(stepSec);
        if (stepSec >= need && step.type === 'block' && !done) {
          done = true; notice.hidden = false;
          root.querySelector('#clockS').textContent = 'Done — tap for break';
          toast('Block time done — take your break when you finish this part');
        }
      } else clockT.textContent = counting ? 'Counting' : 'Paused';
    }));
    const takeBreak = async () => {
      tracker.log('block', `${step.id} block time done — took the break`);
      await tracker.flush();
      patchDay({ blocksDone: { [step.id]: true } });
      nextStep();
    };
    root.querySelector('#takeBreak').onclick = takeBreak;
    return root.querySelector('#stepInner');
  }

  // ── BLOCK: the current lesson for this subject ──
  function renderBlock(step) {
    const focus = focusLesson(cur, S.lessons);   // a lesson his brother sent comes first, whatever this block's subject
    const unit = cur[focus ? focus.subject : step.subject];
    const lesson = focus ? focus.lesson : currentLesson(unit, S.lessons);
    const body = shell(step, '', { title: blockTitle(step), sub: focus ? 'Sent by your brother' : lesson ? `Unit ${lesson.u.n} · Lesson ${lesson.i} of ${lesson.of}` : 'Review' });
    if (!lesson) return renderPractice(step, body, unit);
    renderLesson(step, body, unit, lesson, view.stage);
  }

  function renderLesson(step, body, unit, lesson, forceStage) {
    const prog = S.lessons[lesson.key] || {};
    const realStage = lessonStage(lesson, prog);
    const order = STAGES.map((s) => s.key);
    const now = realStage === 'done' ? 'real' : realStage;
    // Forward only (owner's rule): he works the step he's on — videos, then Learn, then the quiz, then real life.
    // The only way back is the review a failed quiz asks for (reread Learn or rewatch a video).
    const review = now === 'quiz' && owesReview(lesson);
    const open = (k) => k === now || (review && (k === 'watch' || k === 'learn'));
    const stage = forceStage && open(forceStage) ? forceStage : now;
    const ri = order.indexOf(now);

    body.innerHTML = `
      <div class="sc-lesson-head">
        <h2 class="cg-title1">${esc(lesson.title)}</h2>
      </div>
      ${cur.focus && cur.focus.key === lesson.key ? `<div class="cg-card sc-notice"><p class="cg-headline">Your brother sent you this lesson</p>
        <p class="cg-meta">It's your only focus until you finish it: the videos, the Learn page, the quiz and the real-life answer. Then you go back to your normal lessons.</p></div>` : ''}
      <div class="cg-seg sc-stages" role="group" aria-label="Lesson steps">${STAGES.map((s) => {
        const i = order.indexOf(s.key);
        const finished = i < ri || realStage === 'done';
        return `<button type="button" data-stage="${s.key}" aria-pressed="${s.key === stage}" ${open(s.key) ? '' : 'disabled'}>${finished && s.key !== stage ? '✓ ' : ''}${s.label}</button>`;
      }).join('')}</div>
      <div id="stage" class="sc-stage"></div>`;
    body.querySelectorAll('.sc-stages > button:not([disabled])').forEach((b) => {
      b.onclick = () => { if (b.dataset.stage === stage) return; clean(); view.stage = b.dataset.stage; renderStep(); };
    });
    refreshSegs();
    const el = body.querySelector('#stage');
    const ctx = { step, unit, lesson, el, advance: () => { clean(); view.stage = null; renderStep(); } };
    tracker.set({ mode: stage === 'watch' ? 'video' : 'active', stepId: step.id, subject: unit.subject || step.subject, lessonKey: lesson.key });
    tracker.setLive({ view: 'block', title: blockTitle(step), lesson: lesson.title, sub: `Unit ${lesson.u.n}: ${lesson.u.title} · Lesson ${lesson.i} of ${lesson.of}`,
      stage: STAGES.find((s) => s.key === stage).label, detail: '', pos: '' }, true);
    if (stage === 'watch') stageWatch(ctx);
    if (stage === 'learn') stageLearn(ctx);
    if (stage === 'quiz') stageQuiz(ctx, quizApp());
    if (stage === 'real') stageReal(ctx);
  }

  // ── Watch ──
  // After a failed quiz he must review: reread Learn (40 s) or watch 60 s of a video. Returns true if review is still owed.
  function owesReview(lesson) { return !!(((S.lessons[lesson.key] || {}).quiz || {}).needReview); }
  function reviewDone(lesson) {
    if (!owesReview(lesson)) return;
    patchLesson(lesson.key, { quiz: { needReview: false } });
    toast('Review done — you can retry the quiz when the timer runs out');
  }

  function stageWatch({ lesson, el, advance }) {
    const pv = (S.lessons[lesson.key] || {}).videos || {};
    const firstOpen = lesson.videos.findIndex((v) => !(pv[v.id] && pv[v.id].done));
    let idx = view.videoIdx != null ? view.videoIdx : Math.max(0, firstOpen);
    const vprog = (id) => ((S.lessons[lesson.key] || {}).videos || {})[id] || {};
    // Rewatching counts as review after a failed quiz (60 seconds of real watching).
    if (owesReview(lesson)) {
      let watched = 0;
      cleanups.push(tracker.onTick(({ counting }) => {
        if (!counting || ++watched !== 60) return;
        reviewDone(lesson);
        setTimeout(() => { if (view.name === 'step' && view.stage === 'watch') { clean(); view.stage = 'quiz'; view.videoIdx = null; renderStep(); } }, 0);
      }));
    }
    const draw = () => {
      const v = lesson.videos[idx];
      const p = vprog(v.id);
      el.innerHTML = `
        ${owesReview(lesson) ? '<div class="cg-card sc-notice"><p class="cg-headline">Review time</p><p class="cg-meta">Watch for one minute. Then you go straight back to the quiz.</p></div>' : ''}
        ${lesson.videos.length > 1 ? `<div class="cg-chips sc-vids">${lesson.videos.map((vv, i) => `
          <button type="button" class="cg-chip" data-i="${i}" aria-pressed="${i === idx}">${vprog(vv.id).done ? icon('check') : ''}${i + 1}. ${esc(vv.title)}</button>`).join('')}</div>`
          : `<p class="cg-meta sc-vid-title">${esc(v.title)}</p>`}
        <div id="player"></div>
        ${tutorButtonHTML()}
        <p class="cg-meta sc-hint">Keep it playing and stay on this screen. A "Still watching?" button pops up sometimes — tap it fast. No skipping ahead.</p>
        <div class="sc-actions"><button class="cg-btn cg-btn-strong" id="nextVid" ${p.done ? '' : 'disabled'}>${owesReview(lesson) ? 'Back to the quiz' : idx < lesson.videos.length - 1 ? 'Next video' : 'Continue to Learn'}</button></div>`;
      tracker.setLive({ detail: `${owesReview(lesson) ? 'Rewatching for review · ' : ''}Video ${idx + 1} of ${lesson.videos.length}: ${v.title}`, pos: '' }, true);
      wireTutor(el, lesson, 'watch');
      el.querySelectorAll('.sc-vids .cg-chip').forEach((b) => {
        b.onclick = () => {
          const i = Number(b.dataset.i);
          const can = i <= Math.max(firstOpen < 0 ? lesson.videos.length - 1 : firstOpen, 0) || vprog(lesson.videos[i].id).done;
          if (!can) return toast('Finish the earlier video first');
          player.destroy(); idx = i; view.videoIdx = i; draw();
        };
      });
      const player = mountVideo(el.querySelector('#player'), {
        // A finished video starts over from the top. Replays don't count as time, except the review after a failed quiz.
        id: v.id, startMax: p.max || 0, startAt: p.done ? 0 : undefined, done: !!p.done, countReplay: owesReview(lesson), rules: cur.rules, tracker,
        onTime: (t, dur, state) => tracker.setLive({ pos: videoPos(t, dur, state) }),
        onProgress: (max, dur) => patchLesson(lesson.key, { videos: { [v.id]: { max: Math.max(max, p.max || 0), dur } } }),
        onDone: () => {
          patchLesson(lesson.key, { videos: { [v.id]: { done: true } } });
          const b = el.querySelector('#nextVid'); if (b) b.disabled = false;
          toast('Video done');
        },
      });
      cleanups.push(() => player.destroy());
      el.querySelector('#nextVid').onclick = () => {
        player.destroy();
        if (owesReview(lesson)) { clean(); view.stage = 'quiz'; view.videoIdx = null; return renderStep(); }
        if (idx < lesson.videos.length - 1) { idx += 1; view.videoIdx = idx; draw(); }
        else { view.videoIdx = null; advance(); }
      };
    };
    draw();
  }

  // ── Learn ── (also the review step after a failed quiz)
  function stageLearn({ lesson, el, advance }) {
    const reviewing = owesReview(lesson);
    const already = !!(S.lessons[lesson.key] || {}).learnDone;
    let wait = already && !reviewing ? 0 : 40;
    const ready = reviewing ? 'Done reviewing — back to the quiz' : 'I\'ve got it — quiz me';
    el.innerHTML = `
      ${reviewing ? '<div class="cg-card sc-notice"><p class="cg-headline">Review time</p><p class="cg-meta">Read this again carefully before you retry the quiz.</p></div>' : ''}
      <article class="cg-card sc-read">${lesson.learn}</article>
      ${tutorButtonHTML()}
      <div class="sc-actions"><button class="cg-btn cg-btn-strong" id="gotIt" ${wait ? 'disabled' : ''}>${wait ? `Read it first… ${wait}` : ready}</button></div>`;
    tracker.setLive({ detail: reviewing ? 'Rereading the Learn page (review after a failed quiz)' : 'Reading the Learn page', pos: '' }, true);
    tracker.screen({ cap: cur.rules.capLearnMin * 60, label: 'Learn page' });
    wireTutor(el, lesson, 'learn');
    const btn = el.querySelector('#gotIt');
    if (wait) {
      const t = setInterval(() => {
        if (document.visibilityState !== 'visible') return;
        wait -= 1;
        if (wait <= 0) { clearInterval(t); btn.disabled = false; btn.textContent = ready; }
        else btn.textContent = `Read it first… ${wait}`;
      }, 1000);
      cleanups.push(() => clearInterval(t));
    }
    btn.onclick = () => {
      tracker.log('learn', reviewing ? 'finished rereading for review' : 'tapped "I\'ve got it — quiz me"');
      if (reviewing) { reviewDone(lesson); clean(); view.stage = 'quiz'; return renderStep(); }
      patchLesson(lesson.key, { learnDone: true }); advance();
    };
  }

  // ── Real life ──
  function stageReal({ unit, lesson, el }) {
    const prev = ((S.lessons[lesson.key] || {}).realLife || {}).answer;
    const draft = (S.lessons[lesson.key] || {}).realDraft;   // what he was typing when the app closed
    const MIN = 15;
    el.innerHTML = `
      <article class="cg-card sc-read">${lesson.realLife.text}</article>
      ${tutorButtonHTML('Not sure what to write? Ask the tutor')}
      <p class="cg-caption">Your turn</p>
      <div class="cg-card">
        <p class="cg-headline">${esc(lesson.realLife.prompt)}</p>
        <textarea id="ans" class="sc-textarea" rows="5" placeholder="Explain it in your own words…">${esc(draft || prev || '')}</textarea>
        <div class="sc-row-between"><span id="wc" class="cg-meta cg-num"></span><button class="cg-btn cg-btn-strong" id="send" disabled>${prev ? 'Update answer' : 'Submit'}</button></div>
      </div>`;
    wireTutor(el, lesson, 'real');
    const ta = el.querySelector('#ans'), wc = el.querySelector('#wc'), send = el.querySelector('#send');
    tracker.setLive({ detail: prev ? 'Rereading his real-life answer' : 'Writing the real-life answer', pos: '' }, true);
    tracker.screen({ cap: cur.rules.capRealMin * 60, label: 'Real-life answer' });
    let draftTimer = null;
    const saveDraft = () => { draftTimer = null; patchLesson(lesson.key, { realDraft: ta.value }); };
    cleanups.push(() => { if (draftTimer) { clearTimeout(draftTimer); saveDraft(); } });
    const upd = () => {
      const n = ta.value.trim().split(/\s+/).filter(Boolean).length;
      wc.textContent = n >= MIN ? `${n} words ✓` : `${n} of ${MIN} words`; send.disabled = n < MIN;
      tracker.setLive({ pos: `${n} word${n === 1 ? '' : 's'} typed (needs ${MIN})` });
    };
    ta.oninput = () => { upd(); clearTimeout(draftTimer); draftTimer = setTimeout(saveDraft, 1500); };
    upd();
    ta.addEventListener('paste', (e) => { e.preventDefault(); toast('Type it in your own words'); });
    send.onclick = () => {
      clearTimeout(draftTimer); draftTimer = null;
      tracker.log('real', `submitted the real-life answer (${ta.value.trim().split(/\s+/).filter(Boolean).length} words)`);
      const wasDone = lessonStage(lesson, S.lessons[lesson.key]) === 'done';
      patchLesson(lesson.key, { realLife: { answer: ta.value.trim(), at: Date.now() }, realDraft: null, ...(wasDone ? {} : { completedAt: Date.now() }) });
      const next = currentLesson(unit, S.lessons);
      const wasSent = !!(cur.focus && cur.focus.key === lesson.key);
      if (wasSent) tracker.log('focus', `finished the lesson his brother sent: ${lesson.title}`);
      tracker.setLive({ detail: wasSent ? 'Finished the lesson you sent him' : 'Finished the lesson — on the "Lesson complete" screen', pos: '' }, true);
      tracker.screen({ cap: cur.rules.capScreenSec, label: 'Lesson complete screen' });
      el.innerHTML = `<div class="cg-card sc-center"><h3 class="cg-title1">Lesson complete</h3>
        ${wasSent ? '<p class="cg-text">That was the lesson your brother sent. Nice work. Now you\'re back on your normal lessons.</p>' : ''}
        <p class="cg-text">${next ? (next.u.id !== lesson.u.id ? `Unit ${lesson.u.n} finished! Next: Unit ${next.u.n} — ${esc(next.u.title)}` : `Up next: ${esc(next.title)}`) : 'You finished the whole course.'}</p>
        <button class="cg-btn cg-btn-strong cg-btn-block" id="nextL">${next ? 'Start next lesson' : 'Practice'}</button></div>`;
      window.scrollTo(0, 0);
      el.querySelector('#nextL').onclick = () => { clean(); view.stage = null; view.videoIdx = null; renderStep(); };
    };
  }

  // ── Practice (unit finished, block still has time) ──
  function renderPractice(step, body, unit) {
    tracker.set({ mode: 'active', stepId: step.id, subject: step.subject, lessonKey: null });
    tracker.setLive({ view: 'block', title: blockTitle(step), lesson: step.id === 'X' ? 'Bonus practice on finished lessons' : 'Review practice (course finished)',
      sub: '', stage: 'Practice', detail: '', pos: '' }, true);
    let right = 0, total = 0;
    const nextQ = () => {
      const l = unit.lessons[Math.floor(Math.random() * unit.lessons.length)];
      const item = practiceFor(l) || (() => { const b = l.quiz[Math.floor(Math.random() * l.quiz.length)]; return { q: b.q, c: b.c, why: b.why }; })();
      const opts = shuffle(item.c.map((text, i) => ({ text, ok: i === 0 })));
      tracker.setLive({ detail: `Practice question on: ${l.title}`, pos: total ? `${right} of ${total} right` : '' });
      tracker.screen({ cap: cur.rules.capQuestionMin * 60, label: 'Practice question' });
      body.innerHTML = questionHTML(item, opts, `Review · ${esc(l.title)} · ${right} of ${total} right`, true)
        + '<p class="cg-meta sc-hint">You finished every lesson in this course. Keep practicing until the block time is done.</p>';
      wireAnswer(body, item, opts, (ok, picked) => {
        total += 1; if (ok) right += 1;
        tracker.log('answer', `practice ${ok ? 'right' : 'WRONG'} — "${String(item.q).slice(0, 100)}"${ok ? '' : ` — picked "${String(picked).slice(0, 60)}"`}`);
        patchDay({ practice: { [step.subject]: { right: inc(ok ? 1 : 0), total: inc(1) } } });
      }, 'Next', () => { nextQ(); window.scrollTo(0, 0); }, true,
      (picked, wrong, final) => openTutor(l, 'practice', { q: item.q, choices: opts.map((o) => o.text), picked, wrong,
        ...(final && picked && wrong ? { final: true, correct: item.c[0] } : {}) }));
    };
    nextQ();
  }

  // ── Extra practice after the day is done (bonus, still tracked) ──
  function renderExtra() {
    const step = { id: 'X', type: 'extra', subject: 'algebra' };
    const focus = focusLesson(cur, S.lessons);
    if (focus) {   // the day is done but the sent lesson isn't: bonus time goes to it
      const body = shell(step, '', { title: 'The lesson your brother sent', sub: 'Bonus time' });
      return renderLesson(step, body, cur[focus.subject], focus.lesson, view.stage);
    }
    const body = shell(step, '', { title: 'Extra practice', sub: 'Bonus' });
    const finished = [...cur.algebra.lessons, ...cur.biology.lessons].filter((l) => lessonStage(l, S.lessons[l.key]) === 'done');
    renderPractice(step, body, { lessons: finished.length ? finished : cur.algebra.lessons.slice(0, 1) });
  }

  // ── Break ──
  // ── Break (break.js) ──
  function renderBreak(step) {
    drawBreak(root, { step, rules: cur.rules, day: day(), tracker, chat, patchDay, addCleanup: (fn) => cleanups.push(fn),
      onHome: () => go({ name: 'home' }), onNext: () => nextStep() });
  }

  // ── Game time after a break (game-time.js; the games load only when he gets here) ──
  function renderGame(step) {
    root.innerHTML = '<div class="sc-loading"><i class="sc-spin"></i><p class="cg-meta">Loading game time…</p></div>';
    import('./game-time.js').then(({ renderGameTime }) => {
      if (view.name !== 'step' || view.stepId !== step.id) return;
      renderGameTime(root, { step, rules: cur.rules, day: day(), tracker, chat, patchDay, addCleanup: (fn) => cleanups.push(fn),
        onHome: () => go({ name: 'home' }), onDone: () => nextStep() });
    }).catch(() => { toast('Game time didn\'t load — check the Wi-Fi'); go({ name: 'home' }); });
  }

  // ── Fun-fact reward video ──
  function renderFact(step) {
    const list = cur.facts;
    let pickId = (day().factPick || {})[step.id];
    if (!pickId) {
      const i = (S.meta.factIdx || 0) % list.length;
      pickId = list[i].id;
      patchDay({ factPick: { [step.id]: pickId } });
      S.meta.factIdx = (S.meta.factIdx || 0) + 1;
      store.saveMeta(sid, { factIdx: inc(1) });
    }
    const f = list.find((x) => x.id === pickId) || list[0];
    const body = shell(step, `
      <div class="cg-card fact-card">
        <p class="cg-meta">${esc(f.cat || 'Fun fact')}</p>
        <h2 class="cg-title2">${esc(f.title)}</h2>
        <p class="cg-text">${esc(f.blurb || '')}</p>
      </div>
      <div id="player"></div>
      <p class="cg-meta sc-hint">Reward time. Same rules: keep it playing and stay on the screen.</p>
      <div class="sc-actions"><button class="cg-btn cg-btn-strong" id="done" disabled>Continue</button></div>`, { title: 'Did you know?', sub: 'Reward video' });
    tracker.set({ mode: 'video', stepId: step.id, subject: 'fact', lessonKey: null });
    tracker.setLive({ view: 'fact', title: `Fun video ${step.n || 1} of ${step.of || 1}`, lesson: f.title, sub: f.cat || 'Fun fact', stage: 'Reward video', detail: 'Watching the reward video', pos: '' }, true);
    const doneBtn = body.querySelector('#done');
    const vp = (day().factProg || {})[f.id] || 0;
    const player = mountVideo(body.querySelector('#player'), {
      id: f.id, startMax: vp, rules: cur.rules, tracker,
      onTime: (t, dur, state) => tracker.setLive({ pos: videoPos(t, dur, state) }),
      onProgress: (max) => patchDay({ factProg: { [f.id]: max } }),
      onDone: () => { doneBtn.disabled = false; toast('Nice — video done'); },
    });
    cleanups.push(() => player.destroy());
    doneBtn.onclick = async () => { await tracker.flush(); patchDay({ factsDone: { [step.id]: f.id } }); nextStep(); };
  }

  return {
    destroy() { clean(); chat.destroy(); tutor.destroy(); tracker.destroy(); document.body.classList.remove('cg-has-island'); unsubs.forEach((u) => { try { u && u(); } catch {} }); },
  };
}
