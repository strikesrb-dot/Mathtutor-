// Student side: today's plan → blocks (Watch → Learn → Quiz → Real life), fun-fact videos, breaks.
// Drawn with Calm Glass (css/calm-glass.css): one shared header, grouped lists, one dark main button per screen,
// and a floating glass island that holds the block timer.

import { buildCurriculum, lessonStage, currentLesson, STAGES, todayKey, dayStatus, doneCount } from './curriculum.js';
import { createTracker } from './tracker.js';
import { mountVideo } from './video.js';
import { applyMerge, inc, union } from './store.js';
import { esc, mmss, hm, shuffle, toast, unlockAudio, icon, refreshSegs } from './ui.js';
import { practiceFor } from './practice.js';
import { STUDENT_NAME } from './config.js';

const SUBJECT = {
  algebra: { name: 'Algebra 1', icon: 'algebra' },
  biology: { name: 'Biology', icon: 'biology' },
  fact: { name: 'Did you know?', icon: 'globe' },
};

export function startStudent(root, { store, sid, onSignOut }) {
  const S = { settings: {}, lessons: {}, days: {}, meta: {} };
  let cur = buildCurriculum({});
  const tracker = createTracker(store, sid, cur.rules);
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
  unsubs.push(store.watchSettings((s) => { S.settings = s; cur = buildCurriculum(s); if (rendered && view.name === 'home') render(); }));
  unsubs.push(store.watchLessons(sid, (l) => { S.lessons = l || {}; gate('l'); }));
  unsubs.push(store.watchDays(sid, (d) => {
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

  function pctOf(subject) { return subject.lessons.length ? (doneCount(subject.lessons, S.lessons) / subject.lessons.length) * 100 : 0; }
  function bar(pct) { return `<span class="sc-bar"><i style="width:${Math.min(100, Math.max(0, pct)).toFixed(1)}%"></i></span>`; }

  // ─────────────────────────── HOME ───────────────────────────
  function renderHome() {
    clean();
    const st = dayStatus(cur.rules, day());
    const d = new Date();
    const isStudyDay = cur.rules.studyDays.includes(d.getDay());
    const goal = cur.rules.blockMinutes * 60 * 4;
    const active = day().activeSec || 0;
    const pct = Math.min(100, Math.round((active / goal) * 100));
    const blockNo = { A1: 1, A2: 2, B1: 1, B2: 2 };

    const stepRow = (s) => {
      const isCur = st.current && st.current.id === s.id;
      let label, sub = '', ic;
      if (s.type === 'block') { ic = SUBJECT[s.subject].icon; label = `${SUBJECT[s.subject].name} · Block ${blockNo[s.id]}`; sub = s.done ? 'Done' : `${Math.floor(s.sec / 60)} of ${cur.rules.blockMinutes} min`; }
      if (s.type === 'break') { ic = 'cup'; label = `Break · ${cur.rules.breakMinutes} min`; sub = s.done ? 'Done' : ''; }
      if (s.type === 'fact') { ic = 'globe'; label = 'Did you know? video'; sub = s.done ? 'Done' : 'Reward video'; }
      return `<li class="cg-row has-icon sc-step ${isCur ? 'sc-current' : ''}" ${isCur ? 'aria-current="step"' : ''}>
        <span class="cg-row-icon">${icon(ic)}</span>
        <span class="cg-row-text"><span class="cg-row-label">${label}</span>${sub ? `<span class="cg-row-sub">${sub}</span>` : ''}
          ${s.type === 'block' && !s.done && s.sec > 0 ? bar((s.sec / s.need) * 100) : ''}</span>
        ${s.done ? `<span class="cg-check sc-on">${icon('check')}</span>` : isCur ? '<span class="cg-row-value">Next</span>' : ''}
      </li>`;
    };
    const courseRow = (subject, subj) => {
      const L = currentLesson(subject, S.lessons);
      const done = doneCount(subject.lessons, S.lessons);
      return `<li class="cg-row has-icon">
        <span class="cg-row-icon">${icon(SUBJECT[subj].icon)}</span>
        <span class="cg-row-text"><span class="cg-row-label">${SUBJECT[subj].name}${L ? ` — Unit ${L.u.n}: ${esc(L.u.title)}` : ''}</span>
          <span class="cg-row-sub">${L ? `Lesson ${L.i} of ${L.of}: ${esc(L.title)}` : 'Course finished'}</span>
          ${bar(pctOf(subject))}<span class="cg-row-sub cg-num">${done} of ${subject.lessons.length} lessons done</span></span>
      </li>`;
    };

    root.innerHTML = `
      <header class="cg-header">
        <h1 class="cg-header-title">Study Coach<small>${d.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })} · ${isStudyDay ? 'Study day' : 'Bonus day'}</small></h1>
        <button class="cg-key cg-key-end" id="me" aria-label="Account">${icon('person')}</button>
      </header>
      <main class="cg-content sc-main">
        <h2 class="cg-title1 sc-hello">As-salamu alaykum, ${esc(STUDENT_NAME)}</h2>
        <section class="cg-card sc-hero">
          <div class="sc-ring" style="--p:${pct}" role="img" aria-label="${hm(active)} of ${hm(goal)} focused time"><div><b class="cg-num">${hm(active)}</b><span class="cg-meta">of ${hm(goal)}</span></div></div>
          <div class="sc-hero-text">
            <h3 class="cg-title2">${st.allDone ? 'MashaAllah — today is done' : st.current ? nextLabel(st.current) : ''}</h3>
            <p class="cg-meta">${st.allDone ? 'All 4 blocks and both fun videos are finished. Proud of you.' : 'Only real, focused time counts. Stay on the app and keep the video playing.'}</p>
            ${st.allDone ? '<button class="cg-btn cg-btn-strong cg-btn-block" id="extra">Extra practice (bonus)</button>' : `<button class="cg-btn cg-btn-strong cg-btn-block" id="go">${active > 0 ? 'Continue' : 'Start'}</button>`}
          </div>
        </section>
        <p class="cg-caption">Today's plan</p>
        <ul class="cg-group sc-plan">${st.list.map(stepRow).join('')}</ul>
        <p class="cg-caption">Your courses</p>
        <ul class="cg-group">${courseRow(cur.algebra, 'algebra')}${courseRow(cur.biology, 'biology')}</ul>
      </main>`;
    root.querySelector('#me').onclick = () => toast(`Signed in as ${STUDENT_NAME}`, { action: onSignOut, label: 'Sign out' });
    const goBtn = root.querySelector('#go');
    if (goBtn) goBtn.onclick = () => { unlockAudio(); go({ name: 'step', stepId: st.current.id }); };
    const ex = root.querySelector('#extra');
    if (ex) ex.onclick = () => { unlockAudio(); go({ name: 'step', stepId: 'X', extra: true }); };
  }

  function nextLabel(s) {
    if (s.type === 'block') return `Next: ${SUBJECT[s.subject].name}`;
    if (s.type === 'break') return 'Break time';
    return 'Reward video time';
  }

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
        <button class="cg-key cg-key-end" id="help" aria-label="How time counts">${icon('help')}</button>
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
    root.querySelector('#help').onclick = () => toast('Time counts only while the video plays or you are working on this screen.');
    const clock = root.querySelector('#clock'), clockT = root.querySelector('#clockT');
    const notice = root.querySelector('#blockDone');
    let done = false;
    root.querySelector('#clockPill').onclick = () => {
      if (done) return takeBreak();
      toast(clock.classList.contains('on') ? 'Counting — keep going' : 'Not counting right now');
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
      await tracker.flush();
      patchDay({ blocksDone: { [step.id]: true } });
      nextStep();
    };
    root.querySelector('#takeBreak').onclick = takeBreak;
    return root.querySelector('#stepInner');
  }

  // ── BLOCK: the current lesson for this subject ──
  function renderBlock(step) {
    const unit = cur[step.subject];
    const lesson = currentLesson(unit, S.lessons);
    const blockNo = step.id.endsWith('1') ? 1 : 2;
    const body = shell(step, '', { title: `${SUBJECT[step.subject].name} · Block ${blockNo} of 2`, sub: lesson ? `Unit ${lesson.u.n} · Lesson ${lesson.i} of ${lesson.of}` : 'Review' });
    if (!lesson) return renderPractice(step, body, unit);
    renderLesson(step, body, unit, lesson, view.stage);
  }

  function renderLesson(step, body, unit, lesson, forceStage) {
    const prog = S.lessons[lesson.key] || {};
    const realStage = lessonStage(lesson, prog);
    const order = STAGES.map((s) => s.key);
    let stage = forceStage && order.indexOf(forceStage) <= order.indexOf(realStage) ? forceStage : realStage;
    if (stage === 'done') stage = 'real';
    const ri = order.indexOf(realStage === 'done' ? 'real' : realStage);

    body.innerHTML = `
      <div class="sc-lesson-head">
        <h2 class="cg-title1">${esc(lesson.title)}</h2>
      </div>
      <div class="cg-seg sc-stages" role="group" aria-label="Lesson steps">${STAGES.map((s) => {
        const i = order.indexOf(s.key);
        const locked = i > ri && realStage !== 'done';
        const finished = i < ri || realStage === 'done';
        return `<button type="button" data-stage="${s.key}" aria-pressed="${s.key === stage}" ${locked ? 'disabled' : ''}>${finished && s.key !== stage ? '✓ ' : ''}${s.label}</button>`;
      }).join('')}</div>
      <div id="stage" class="sc-stage"></div>`;
    body.querySelectorAll('.sc-stages > button:not([disabled])').forEach((b) => {
      b.onclick = () => { if (b.dataset.stage === stage) return; clean(); view.stage = b.dataset.stage; renderStep(); };
    });
    refreshSegs();
    const el = body.querySelector('#stage');
    const ctx = { step, unit, lesson, el, advance: () => { clean(); view.stage = null; renderStep(); } };
    tracker.set({ mode: stage === 'watch' ? 'video' : 'active', stepId: step.id, subject: step.subject, lessonKey: lesson.key });
    if (stage === 'watch') stageWatch(ctx);
    if (stage === 'learn') stageLearn(ctx);
    if (stage === 'quiz') stageQuiz(ctx);
    if (stage === 'real') stageReal(ctx);
  }

  // ── Watch ──
  // After a failed quiz he must review: reread Learn (40 s) or watch 60 s of a video. Returns true if review is still owed.
  const owesReview = (lesson) => !!(((S.lessons[lesson.key] || {}).quiz || {}).needReview);
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
      cleanups.push(tracker.onTick(({ counting }) => { if (counting && ++watched === 60) reviewDone(lesson); }));
    }
    const draw = () => {
      const v = lesson.videos[idx];
      const p = vprog(v.id);
      el.innerHTML = `
        ${owesReview(lesson) ? '<div class="cg-card sc-notice"><p class="cg-headline">Review time</p><p class="cg-meta">Watch at least one minute, then go back to the quiz.</p></div>' : ''}
        ${lesson.videos.length > 1 ? `<div class="cg-chips sc-vids">${lesson.videos.map((vv, i) => `
          <button type="button" class="cg-chip" data-i="${i}" aria-pressed="${i === idx}">${vprog(vv.id).done ? icon('check') : ''}${i + 1}. ${esc(vv.title)}</button>`).join('')}</div>`
          : `<p class="cg-meta sc-vid-title">${esc(v.title)}</p>`}
        <div id="player"></div>
        <p class="cg-meta sc-hint">Keep it playing and stay on this screen. A "Still watching?" button pops up sometimes — tap it fast. No skipping ahead.</p>
        <div class="sc-actions"><button class="cg-btn cg-btn-strong" id="nextVid" ${p.done ? '' : 'disabled'}>${idx < lesson.videos.length - 1 ? 'Next video' : 'Continue to Learn'}</button></div>`;
      el.querySelectorAll('.sc-vids .cg-chip').forEach((b) => {
        b.onclick = () => {
          const i = Number(b.dataset.i);
          const can = i <= Math.max(firstOpen < 0 ? lesson.videos.length - 1 : firstOpen, 0) || vprog(lesson.videos[i].id).done;
          if (!can) return toast('Finish the earlier video first');
          player.destroy(); idx = i; view.videoIdx = i; draw();
        };
      });
      const player = mountVideo(el.querySelector('#player'), {
        id: v.id, startMax: p.max || 0, rules: cur.rules, tracker,
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
      <div class="sc-actions"><button class="cg-btn cg-btn-strong" id="gotIt" ${wait ? 'disabled' : ''}>${wait ? `Read it first… ${wait}` : ready}</button></div>`;
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
      if (reviewing) { reviewDone(lesson); clean(); view.stage = 'quiz'; return renderStep(); }
      patchLesson(lesson.key, { learnDone: true }); advance();
    };
  }

  // One multiple-choice question as a grouped list.
  function questionHTML(item, opts, top) {
    return `
      <div class="sc-quiz">
        <p class="cg-meta sc-qtop">${top}</p>
        <h3 class="cg-title2 q">${esc(item.q)}</h3>
        <div class="cg-group sc-opts" role="group">${opts.map((o, k) => `
          <button type="button" class="cg-row opt" data-k="${k}"><span class="cg-row-text"><span class="cg-row-label">${esc(o.text)}</span></span><span class="cg-check">${icon('check')}</span></button>`).join('')}</div>
        <div id="fb"></div>
      </div>`;
  }
  // reveal = show the right answer + explanation after a miss (practice). Graded quizzes keep it hidden.
  function wireAnswer(el, item, opts, onAnswer, nextLabel, onNext, reveal = true) {
    el.querySelectorAll('.opt').forEach((b) => {
      b.onclick = () => {
        const o = opts[Number(b.dataset.k)];
        el.querySelectorAll('.opt').forEach((x, k) => {
          x.disabled = true;
          if (opts[k].ok && (reveal || o.ok)) { x.setAttribute('aria-checked', 'true'); x.classList.add('cg-row-accent'); }
        });
        if (!o.ok) {
          b.classList.add('sc-wrong');
          b.querySelector('.cg-row-text').insertAdjacentHTML('beforeend', '<span class="cg-row-sub">Your answer</span>');
          b.querySelector('.cg-check').outerHTML = `<span class="sc-x">${icon('wrong')}</span>`;
        }
        onAnswer(o.ok);
        const body = o.ok || reveal ? esc(item.why) : 'The right answer stays hidden until you pass. If you\'re stuck, the Learn page and the videos have it.';
        el.querySelector('#fb').innerHTML = `
          <div class="cg-card sc-why"><p class="cg-headline">${o.ok ? 'Correct' : 'Not quite'}</p><p class="cg-text">${body}</p></div>
          <div class="sc-actions"><button class="cg-btn cg-btn-strong" id="nx">${nextLabel}</button></div>`;
        el.querySelector('#nx').onclick = onNext;
        el.querySelector('#nx').scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      };
    });
  }

  // Questions for one attempt: fresh-number questions where the lesson has a generator, the rest from the bank.
  function buildQuiz(lesson, size) {
    const fresh = [];
    if (practiceFor(lesson)) {
      const want = Math.min(Math.floor(size / 2), 5);
      for (let k = 0; k < want; k++) { const g = practiceFor(lesson); if (g) fresh.push({ ...g, fresh: true }); }
    }
    const bank = shuffle(lesson.quiz).slice(0, size - fresh.length);
    return shuffle([...bank, ...fresh]).map((item) => ({ ...item, opts: shuffle(item.c.map((text, i) => ({ text, ok: i === 0 }))) }));
  }

  // ── Quiz ──
  function stageQuiz({ lesson, el, advance }) {
    const rules = cur.rules;
    const q = (S.lessons[lesson.key] || {}).quiz || {};
    const attempts = (q.attempts || []).length;
    const size = Math.min(rules.quizSize, lesson.quiz.length);
    const needRight = Math.ceil((rules.passPct / 100) * size);

    if (q.passed && view.stage === 'quiz') {
      el.innerHTML = `<div class="cg-card sc-center"><h3 class="cg-title2">You passed this quiz (${q.best}%)</h3>
        <p class="cg-meta">Want to take it again for practice? It still counts as study time.</p>
        <div class="cg-btns sc-center-btns"><button class="cg-btn cg-btn-glass" id="again">Take it again</button><button class="cg-btn cg-btn-strong" id="cont">Continue</button></div></div>`;
      el.querySelector('#again').onclick = () => run();
      el.querySelector('#cont').onclick = () => advance();
      return;
    }

    // Locked after a fail: review first, and wait out the timer.
    const lockedFor = () => Math.max(0, Math.ceil(((q.retryAt || 0) - Date.now()) / 1000));
    const review = owesReview(lesson);
    el.innerHTML = `<div class="cg-card sc-center">
      <h3 class="cg-title2">${attempts ? 'Try the quiz again' : 'Quiz time'}</h3>
      <p class="cg-text">${size} questions. You need ${needRight} right (${rules.passPct}%) to pass.</p>
      ${attempts ? `<p class="cg-meta">Tries so far: ${attempts} · Best: ${q.best || 0}%</p>` : ''}
      ${review ? `<p class="cg-text">First, review: reread the Learn page or rewatch a video for a minute.</p>
        <div class="cg-btns sc-center-btns"><button class="cg-btn cg-btn-glass" id="revLearn">Reread Learn</button><button class="cg-btn cg-btn-glass" id="revWatch">Rewatch a video</button></div>` : ''}
      <button class="cg-btn cg-btn-strong cg-btn-block" id="start" disabled>Start quiz</button>
      <p class="cg-meta cg-num" id="lockMsg"></p></div>`;
    const start = el.querySelector('#start'), lockMsg = el.querySelector('#lockMsg');
    const sync = () => {
      const left = lockedFor();
      start.disabled = review || left > 0;
      lockMsg.textContent = left > 0 ? `You can retry in ${mmss(left)}` : review ? 'Review first, then you can retry.' : '';
    };
    sync();
    const t = setInterval(sync, 1000);
    cleanups.push(() => clearInterval(t));
    start.onclick = () => { clearInterval(t); run(); };
    if (review) {
      el.querySelector('#revLearn').onclick = () => { clean(); view.stage = 'learn'; renderStep(); };
      el.querySelector('#revWatch').onclick = () => { clean(); view.stage = 'watch'; renderStep(); };
    }

    function run() {
      const qs = buildQuiz(lesson, size);
      const graded = !q.passed;
      let i = 0, right = 0;
      const show = () => {
        const it = qs[i];
        el.innerHTML = questionHTML(it, it.opts, `Question ${i + 1} of ${qs.length} · ${right} right`);
        el.querySelector('.sc-qtop').insertAdjacentHTML('afterend', bar((i / qs.length) * 100));
        wireAnswer(el, it, it.opts, (ok) => { if (ok) right += 1; }, i < qs.length - 1 ? 'Next' : 'See my score',
          () => { i += 1; if (i < qs.length) { show(); window.scrollTo(0, 0); } else finish(); }, !graded);
      };
      const finish = () => {
        const pct = Math.round((right / qs.length) * 100);
        const passed = pct >= rules.passPct;
        const prev = (S.lessons[lesson.key] || {}).quiz || {};
        const tries = (prev.attempts || []).length + 1;
        const patch = { attempts: union({ at: Date.now(), right, total: qs.length, pct }), best: Math.max(prev.best || 0, pct), passed: !!(prev.passed || passed) };
        if (!passed && !prev.passed) Object.assign(patch, { needReview: true, retryAt: Date.now() + rules.retryWaitMin * 60000 });
        if (passed && !prev.passed) { patch.passedOnTry = tries; if (tries >= rules.manyTries) tracker.flag('manyTries', lesson.key); }
        patchLesson(lesson.key, { quiz: patch });
        const answers = passed ? `<div class="cg-group sc-answers">${qs.map((it) => `<div class="cg-row"><span class="cg-row-text"><span class="cg-row-label">${esc(it.q)}</span><span class="cg-row-sub">Answer: ${esc(it.c[0])}</span></span></div>`).join('')}</div>` : '';
        el.innerHTML = `<div class="cg-card sc-center sc-result">
          <h3 class="cg-title1 cg-num">${right} / ${qs.length} — ${pct}%</h3>
          <p class="cg-text">${passed ? 'You passed. On to the real-life part.' : `You need ${rules.passPct}% to pass. Review the Learn page or rewatch a video, then you can retry in ${rules.retryWaitMin} minutes.`}</p>
          <div class="cg-btns sc-center-btns">${passed ? '<button class="cg-btn cg-btn-strong" id="cont">Continue</button>'
            : '<button class="cg-btn cg-btn-glass" id="revWatch">Rewatch a video</button><button class="cg-btn cg-btn-strong" id="rev">Review Learn</button>'}</div></div>
          ${passed ? `<p class="cg-caption">The answers</p>${answers}` : ''}`;
        window.scrollTo(0, 0);
        if (passed) el.querySelector('#cont').onclick = () => advance();
        else {
          el.querySelector('#rev').onclick = () => { clean(); view.stage = 'learn'; renderStep(); };
          el.querySelector('#revWatch').onclick = () => { clean(); view.stage = 'watch'; renderStep(); };
        }
      };
      show();
    }
  }

  // ── Real life ──
  function stageReal({ unit, lesson, el }) {
    const prev = ((S.lessons[lesson.key] || {}).realLife || {}).answer;
    const MIN = 15;
    el.innerHTML = `
      <article class="cg-card sc-read">${lesson.realLife.text}</article>
      <p class="cg-caption">Your turn</p>
      <div class="cg-card">
        <p class="cg-headline">${esc(lesson.realLife.prompt)}</p>
        <textarea id="ans" class="sc-textarea" rows="5" placeholder="Explain it in your own words…">${esc(prev || '')}</textarea>
        <div class="sc-row-between"><span id="wc" class="cg-meta cg-num"></span><button class="cg-btn cg-btn-strong" id="send" disabled>${prev ? 'Update answer' : 'Submit'}</button></div>
      </div>`;
    const ta = el.querySelector('#ans'), wc = el.querySelector('#wc'), send = el.querySelector('#send');
    const upd = () => { const n = ta.value.trim().split(/\s+/).filter(Boolean).length; wc.textContent = n >= MIN ? `${n} words ✓` : `${n} of ${MIN} words`; send.disabled = n < MIN; };
    ta.oninput = upd; upd();
    ta.addEventListener('paste', (e) => { e.preventDefault(); toast('Type it in your own words'); });
    send.onclick = () => {
      const wasDone = lessonStage(lesson, S.lessons[lesson.key]) === 'done';
      patchLesson(lesson.key, { realLife: { answer: ta.value.trim(), at: Date.now() }, ...(wasDone ? {} : { completedAt: Date.now() }) });
      const next = currentLesson(unit, S.lessons);
      el.innerHTML = `<div class="cg-card sc-center"><h3 class="cg-title1">Lesson complete</h3>
        <p class="cg-text">${next ? (next.u.id !== lesson.u.id ? `Unit ${lesson.u.n} finished! Next: Unit ${next.u.n} — ${esc(next.u.title)}` : `Up next: ${esc(next.title)}`) : 'You finished the whole course.'}</p>
        <button class="cg-btn cg-btn-strong cg-btn-block" id="nextL">${next ? 'Start next lesson' : 'Practice'}</button></div>`;
      window.scrollTo(0, 0);
      el.querySelector('#nextL').onclick = () => { clean(); view.stage = null; view.videoIdx = null; renderStep(); };
    };
  }

  // ── Practice (unit finished, block still has time) ──
  function renderPractice(step, body, unit) {
    tracker.set({ mode: 'active', stepId: step.id, subject: step.subject, lessonKey: null });
    let right = 0, total = 0;
    const nextQ = () => {
      const l = unit.lessons[Math.floor(Math.random() * unit.lessons.length)];
      const item = practiceFor(l) || (() => { const b = l.quiz[Math.floor(Math.random() * l.quiz.length)]; return { q: b.q, c: b.c, why: b.why }; })();
      const opts = shuffle(item.c.map((text, i) => ({ text, ok: i === 0 })));
      body.innerHTML = questionHTML(item, opts, `Review · ${esc(l.title)} · ${right} of ${total} right`)
        + '<p class="cg-meta sc-hint">You finished every lesson in this course. Keep practicing until the block time is done.</p>';
      wireAnswer(body, item, opts, (ok) => {
        total += 1; if (ok) right += 1;
        patchDay({ practice: { [step.subject]: { right: inc(ok ? 1 : 0), total: inc(1) } } });
      }, 'Next', () => { nextQ(); window.scrollTo(0, 0); });
    };
    nextQ();
  }

  // ── Extra practice after the day is done (bonus, still tracked) ──
  function renderExtra() {
    const step = { id: 'X', type: 'extra', subject: 'algebra' };
    const body = shell(step, '', { title: 'Extra practice', sub: 'Bonus' });
    const finished = [...cur.algebra.lessons, ...cur.biology.lessons].filter((l) => lessonStage(l, S.lessons[l.key]) === 'done');
    renderPractice(step, body, { lessons: finished.length ? finished : cur.algebra.lessons.slice(0, 1) });
  }

  // ── Break ──
  function renderBreak(step) {
    tracker.off();
    document.body.classList.remove('cg-has-island');
    let left = cur.rules.breakMinutes * 60;
    root.innerHTML = `
      <header class="cg-header">
        <button class="cg-key cg-key-start" id="home" aria-label="Back to today's plan">${icon('back')}</button>
        <h1 class="cg-header-title">Break</h1>
      </header>
      <main class="cg-content sc-main">
        <div class="cg-card sc-center sc-break">
          <span class="sc-break-icon">${icon('cup')}</span>
          <div class="sc-num cg-num break-clock" id="bc">${mmss(left)}</div>
          <p class="cg-text">Stand up, stretch, drink some water. This time doesn't count — and that's fine.</p>
          <button class="cg-btn cg-btn-strong cg-btn-block" id="skip">I'm ready — next</button>
        </div>
      </main>`;
    const bc = root.querySelector('#bc');
    const t = setInterval(() => {
      left -= 1; bc.textContent = mmss(left);
      if (left <= 0) { clearInterval(t); bc.textContent = '0:00'; bc.classList.add('sc-over'); toast('Break is over — back to it'); }
    }, 1000);
    cleanups.push(() => clearInterval(t));
    root.querySelector('#home').onclick = () => go({ name: 'home' });
    root.querySelector('#skip').onclick = () => { patchDay({ breaks: { [step.id]: true } }); nextStep(); };
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
    const doneBtn = body.querySelector('#done');
    const vp = (day().factProg || {})[f.id] || 0;
    const player = mountVideo(body.querySelector('#player'), {
      id: f.id, startMax: vp, rules: cur.rules, tracker,
      onProgress: (max) => patchDay({ factProg: { [f.id]: max } }),
      onDone: () => { doneBtn.disabled = false; toast('Nice — video done'); },
    });
    cleanups.push(() => player.destroy());
    doneBtn.onclick = async () => { await tracker.flush(); patchDay({ factsDone: { [step.id]: f.id } }); nextStep(); };
  }

  return {
    destroy() { clean(); tracker.destroy(); document.body.classList.remove('cg-has-island'); unsubs.forEach((u) => { try { u && u(); } catch {} }); },
  };
}
