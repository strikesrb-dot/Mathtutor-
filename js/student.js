// Student side: today's plan → blocks (Watch → Learn → Quiz → Real life), fun-fact videos, breaks.

import { buildCurriculum, lessonStage, currentLesson, STAGES, todayKey, dayStatus, videosDone } from './curriculum.js';
import { createTracker } from './tracker.js';
import { mountVideo } from './video.js';
import { applyMerge, inc, union } from './store.js';
import { esc, mmss, hm, shuffle, toast, unlockAudio } from './ui.js';
import { practiceFor } from './practice.js';
import { STUDENT_NAME } from './config.js';

const SUBJECT = {
  algebra: { name: 'Algebra 1', icon: '📐' },
  biology: { name: 'Biology', icon: '🧬' },
  fact: { name: 'Did you know?', icon: '🌍' },
};

export function startStudent(root, { store, sid, onSignOut }) {
  const S = { settings: {}, lessons: {}, days: {}, meta: {}, ready: 0 };
  let cur = buildCurriculum({});
  let tracker = createTracker(store, sid, cur.rules);
  let cleanups = [];
  let view = { name: 'home' };
  const unsubs = [];

  const today = () => todayKey();
  const day = () => S.days[today()] || {};

  // ── optimistic saves (screen updates instantly, store syncs behind) ──
  function patchDay(patch) {
    S.days[today()] = applyMerge(day(), patch);
    return store.saveDay(sid, today(), patch).catch((e) => toast('Saving failed — check Wi-Fi', 'bad') || console.warn(e));
  }
  function patchLesson(key, patch) {
    S.lessons[key] = applyMerge(S.lessons[key], patch);
    return store.saveLesson(sid, key, patch).catch((e) => toast('Saving failed — check Wi-Fi', 'bad') || console.warn(e));
  }

  root.innerHTML = '<div class="loading">Loading…</div>';
  // ── data subscriptions ──
  const gate = () => { S.ready += 1; if (S.ready === 4) render(); };
  let first = { s: true, l: true, d: true, m: true };
  unsubs.push(store.watchSettings((s) => {
    S.settings = s; cur = buildCurriculum(s);
    if (first.s) { first.s = false; gate(); } else if (view.name === 'home') render();
  }));
  unsubs.push(store.watchLessons(sid, (l) => {
    S.lessons = l || {};
    if (first.l) { first.l = false; gate(); }
  }));
  unsubs.push(store.watchDays(sid, (d) => {
    S.days = d || {};
    tracker.setDay(day());
    if (first.d) { first.d = false; gate(); } else if (view.name === 'home') render();
  }));
  unsubs.push(store.watchMeta(sid, (m) => { S.meta = m; if (first.m) { first.m = false; gate(); } }));


  function clean() { cleanups.forEach((fn) => { try { fn(); } catch {} }); cleanups = []; tracker.off(); }
  function go(v) { clean(); view = v; render(); window.scrollTo(0, 0); }

  function render() {
    if (view.name === 'home') return renderHome();
    if (view.name === 'step') return renderStep();
  }

  // ─────────────────────────── HOME ───────────────────────────
  function renderHome() {
    clean();
    const st = dayStatus(cur.rules, day());
    const d = new Date();
    const isStudyDay = cur.rules.studyDays.includes(d.getDay());
    const goal = cur.rules.blockMinutes * 60 * 4;
    const active = day().activeSec || 0;
    const pct = Math.min(100, Math.round((active / goal) * 100));
    const algL = currentLesson(cur.algebra, S.lessons), bioL = currentLesson(cur.biology, S.lessons);
    const algN = algL ? cur.algebra.lessons.indexOf(algL) + 1 : cur.algebra.lessons.length;
    const bioN = bioL ? cur.biology.lessons.indexOf(bioL) + 1 : cur.biology.lessons.length;
    const blockNo = { A1: 1, A2: 2, B1: 1, B2: 2 };

    const stepRow = (s) => {
      const isCur = st.current && st.current.id === s.id;
      let label, sub = '', icon;
      if (s.type === 'block') { icon = SUBJECT[s.subject].icon; label = `${SUBJECT[s.subject].name} · Block ${blockNo[s.id]}`; sub = s.done ? 'Done' : `${Math.floor(s.sec / 60)} of ${cur.rules.blockMinutes} min`; }
      if (s.type === 'break') { icon = '☕'; label = `Break · ${cur.rules.breakMinutes} min`; }
      if (s.type === 'fact') { icon = '🌍'; label = 'Did you know? video'; sub = s.done ? 'Done' : 'Reward video'; }
      return `<li class="step ${s.done ? 'done' : ''} ${isCur ? 'cur' : ''} ${s.type}">
        <span class="step-ic">${s.done ? '✓' : icon}</span>
        <span class="step-tx"><b>${label}</b>${sub ? `<small>${sub}</small>` : ''}</span>
        ${s.type === 'block' && !s.done ? `<span class="mini-bar"><i style="width:${Math.min(100, (s.sec / s.need) * 100)}%"></i></span>` : ''}
      </li>`;
    };

    root.innerHTML = `
      <header class="top">
        <div><div class="hello">As-salamu alaykum, ${esc(STUDENT_NAME)} 👋</div>
        <div class="date">${d.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })} · ${isStudyDay ? 'Study day' : 'Bonus day'}</div></div>
        <button class="btn btn-ghost btn-sm" id="out">Sign out</button>
      </header>
      <main class="wrap">
        <section class="card hero">
          <div class="ring" style="--p:${pct}"><div><b>${hm(active)}</b><small>of ${hm(goal)}</small></div></div>
          <div class="hero-tx">
            <h1>${st.allDone ? 'MashaAllah — today is done! ✅' : st.current ? nextLabel(st.current) : ''}</h1>
            <p>${st.allDone ? 'All 4 blocks and both fun videos are finished. Proud of you.' : 'Only real, focused time counts. Stay on the app and keep the video playing.'}</p>
            ${st.allDone ? '<button class="btn" id="extra">Extra practice (bonus)</button>' : `<button class="btn btn-big" id="go">${active > 0 ? 'Continue' : 'Start'} →</button>`}
          </div>
        </section>
        <section class="card">
          <h2>Today's plan</h2>
          <ol class="steps">${st.list.map(stepRow).join('')}</ol>
        </section>
        <section class="grid2">
          <div class="card subj algebra"><span class="chip">📐 Algebra 1</span><h3>${esc(cur.algebra.unit)}</h3>
            <p>${algL ? `Lesson ${algN} of ${cur.algebra.lessons.length}: <b>${esc(algL.title)}</b>` : 'Unit finished! 🎉'}</p>
            <div class="bar"><i style="width:${(cur.algebra.lessons.filter((l) => lessonStage(l, S.lessons[l.key]) === 'done').length / cur.algebra.lessons.length) * 100}%"></i></div></div>
          <div class="card subj biology"><span class="chip">🧬 Biology</span><h3>${esc(cur.biology.unit)}</h3>
            <p>${bioL ? `Lesson ${bioN} of ${cur.biology.lessons.length}: <b>${esc(bioL.title)}</b>` : 'Unit finished! 🎉'}</p>
            <div class="bar"><i style="width:${(cur.biology.lessons.filter((l) => lessonStage(l, S.lessons[l.key]) === 'done').length / cur.biology.lessons.length) * 100}%"></i></div></div>
        </section>
      </main>`;
    root.querySelector('#out').onclick = () => { if (confirm('Sign out?')) onSignOut(); };
    const goBtn = root.querySelector('#go');
    if (goBtn) goBtn.onclick = () => { unlockAudio(); go({ name: 'step', stepId: st.current.id }); };
    const ex = root.querySelector('#extra');
    if (ex) ex.onclick = () => { unlockAudio(); go({ name: 'step', stepId: 'X', extra: true }); };
  }

  function nextLabel(s) {
    if (s.type === 'block') return `Next: ${SUBJECT[s.subject].name}`;
    if (s.type === 'break') return 'Break time ☕';
    return 'Reward video time 🌍';
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

  function shell(step, inner, opts = {}) {
    const subj = step.subject || 'fact';
    const need = step.type === 'block' ? cur.rules.blockMinutes * 60 : 0;
    root.innerHTML = `
      <header class="bar-top ${subj}">
        <button class="icon-btn" id="home" aria-label="Home">‹</button>
        <div class="bt-mid"><span class="chip">${SUBJECT[subj].icon} ${opts.title || SUBJECT[subj].name}</span></div>
        <div class="clock" id="clock"><i class="dot"></i><span id="clockT">${need ? `${mmss(tracker.stepSec(step.id))} / ${mmss(need)}` : ''}</span></div>
      </header>
      <div id="blockDone" class="banner hidden"><span>✅ Block time done! Finish this part, then take your break.</span><button class="btn btn-sm" id="takeBreak">Take my break</button></div>
      <main class="wrap ${subj}" id="stepBody">${inner}</main>`;
    root.querySelector('#home').onclick = () => go({ name: 'home' });
    const clockT = root.querySelector('#clockT'), clock = root.querySelector('#clock');
    const banner = root.querySelector('#blockDone');
    cleanups.push(tracker.onTick(({ counting, stepSec }) => {
      clock.classList.toggle('on', counting);
      clock.title = counting ? 'Counting' : 'Not counting';
      if (need) {
        clockT.textContent = `${mmss(stepSec)} / ${mmss(need)}`;
        if (stepSec >= need && step.type === 'block') banner.classList.remove('hidden');
      } else clockT.textContent = counting ? 'Counting' : 'Paused';
    }));
    root.querySelector('#takeBreak').onclick = async () => {
      await tracker.flush();
      patchDay({ blocksDone: { [step.id]: true } });
      nextStep();
    };
    return root.querySelector('#stepBody');
  }

  // ── BLOCK: the current lesson for this subject ──
  function renderBlock(step) {
    const unit = cur[step.subject];
    const lesson = currentLesson(unit, S.lessons);
    const blockNo = step.id.endsWith('1') ? 1 : 2;
    const body = shell(step, '', { title: `${SUBJECT[step.subject].name} · Block ${blockNo} of 2` });
    if (!lesson) return renderPractice(step, body, unit);
    renderLesson(step, body, unit, lesson, view.stage);
  }

  function renderLesson(step, body, unit, lesson, forceStage) {
    const prog = S.lessons[lesson.key] || {};
    const realStage = lessonStage(lesson, prog);
    const order = STAGES.map((s) => s.key);
    let stage = forceStage && order.indexOf(forceStage) <= order.indexOf(realStage) ? forceStage : realStage;
    if (stage === 'done') stage = 'real';
    const n = unit.lessons.indexOf(lesson) + 1;

    body.innerHTML = `
      <div class="lesson-head">
        <small>Lesson ${n} of ${unit.lessons.length}</small>
        <h1>${esc(lesson.title)}</h1>
        <nav class="stages">${STAGES.map((s) => {
          const i = order.indexOf(s.key), ri = order.indexOf(realStage === 'done' ? 'real' : realStage);
          const cls = s.key === stage ? 'active' : i < ri || realStage === 'done' ? 'done' : 'locked';
          return `<button class="stage ${cls}" data-stage="${s.key}" ${cls === 'locked' ? 'disabled' : ''}>${cls === 'done' ? '✓ ' : ''}${s.label}</button>`;
        }).join('')}</nav>
      </div>
      <div id="stage"></div>`;
    body.querySelectorAll('.stage:not([disabled])').forEach((b) => {
      b.onclick = () => { clean(); view.stage = b.dataset.stage; renderStep(); };
    });
    const el = body.querySelector('#stage');
    const ctx = { step, unit, lesson, el, advance: () => { clean(); view.stage = null; renderStep(); } };
    tracker.set({ mode: stage === 'watch' ? 'video' : 'active', stepId: step.id, subject: step.subject, lessonKey: lesson.key });
    if (stage === 'watch') stageWatch(ctx);
    if (stage === 'learn') stageLearn(ctx);
    if (stage === 'quiz') stageQuiz(ctx);
    if (stage === 'real') stageReal(ctx);
  }

  // ── Watch ──
  function stageWatch({ lesson, el, advance }) {
    const prog = S.lessons[lesson.key] || {};
    const pv = prog.videos || {};
    const firstOpen = lesson.videos.findIndex((v) => !(pv[v.id] && pv[v.id].done));
    let idx = view.videoIdx != null ? view.videoIdx : Math.max(0, firstOpen);
    const draw = () => {
      const v = lesson.videos[idx];
      const p = (S.lessons[lesson.key]?.videos || {})[v.id] || {};
      el.innerHTML = `
        <div class="vid-list">${lesson.videos.map((vv, i) => {
          const pp = (S.lessons[lesson.key]?.videos || {})[vv.id] || {};
          return `<button class="vid-pill ${i === idx ? 'on' : ''} ${pp.done ? 'done' : ''}" data-i="${i}">${pp.done ? '✓' : i + 1}. ${esc(vv.title)}</button>`;
        }).join('')}</div>
        <div id="player"></div>
        <p class="hint">Keep it playing and stay on this screen. A <b>"Still watching?"</b> button pops up sometimes — tap it fast. No skipping ahead.</p>
        <div class="row-end"><button class="btn" id="nextVid" ${p.done ? '' : 'disabled'}>${idx < lesson.videos.length - 1 ? 'Next video →' : 'Continue to Learn →'}</button></div>`;
      el.querySelectorAll('.vid-pill').forEach((b) => {
        b.onclick = () => {
          const i = Number(b.dataset.i);
          const can = i <= Math.max(firstOpen < 0 ? lesson.videos.length - 1 : firstOpen, 0) || ((S.lessons[lesson.key]?.videos || {})[lesson.videos[i].id] || {}).done;
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
          toast('✅ Video done!', 'good');
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

  // ── Learn ──
  function stageLearn({ lesson, el, advance }) {
    const already = !!(S.lessons[lesson.key] || {}).learnDone;
    let wait = already ? 0 : 40;
    el.innerHTML = `
      <article class="card learn">${lesson.learn}</article>
      <div class="row-end"><button class="btn" id="gotIt" ${wait ? 'disabled' : ''}>${wait ? `Read it first… ${wait}` : 'I\'ve got it → Quiz'}</button></div>`;
    const btn = el.querySelector('#gotIt');
    if (wait) {
      const t = setInterval(() => {
        if (document.visibilityState !== 'visible') return;
        wait -= 1;
        if (wait <= 0) { clearInterval(t); btn.disabled = false; btn.textContent = 'I\'ve got it → Quiz'; }
        else btn.textContent = `Read it first… ${wait}`;
      }, 1000);
      cleanups.push(() => clearInterval(t));
    }
    btn.onclick = () => { patchLesson(lesson.key, { learnDone: true }); advance(); };
  }

  // ── Quiz ──
  function stageQuiz({ lesson, el, advance }) {
    const rules = cur.rules;
    const prog = S.lessons[lesson.key] || {};
    const q = prog.quiz || {};
    const attempts = (q.attempts || []).length;
    const size = Math.min(rules.quizSize, lesson.quiz.length);
    const needRight = Math.ceil((rules.passPct / 100) * size);

    if (q.passed && view.stage === 'quiz') {
      el.innerHTML = `<div class="card center"><div class="big-emoji">🏆</div><h2>You passed this quiz (${q.best}%)</h2>
        <p>Want to take it again for practice? It still counts as study time.</p>
        <div class="row-center"><button class="btn btn-ghost" id="again">Take it again</button><button class="btn" id="cont">Continue →</button></div></div>`;
      el.querySelector('#again').onclick = () => run();
      el.querySelector('#cont').onclick = () => advance();
      return;
    }
    el.innerHTML = `<div class="card center">
      <div class="big-emoji">📝</div><h2>Quiz time</h2>
      <p>${size} questions. You need <b>${needRight} right (${rules.passPct}%)</b> to pass.</p>
      ${attempts ? `<p class="muted">Tries so far: ${attempts} · Best: ${q.best || 0}%</p>` : ''}
      <button class="btn btn-big" id="start">Start quiz</button></div>`;
    el.querySelector('#start').onclick = () => run();

    function run() {
      const qs = shuffle(lesson.quiz).slice(0, size).map((item) => ({ ...item, opts: shuffle(item.c.map((text, i) => ({ text, ok: i === 0 }))) }));
      let i = 0, right = 0;
      const show = () => {
        const it = qs[i];
        el.innerHTML = `<div class="card quiz">
          <div class="quiz-top"><span>Question ${i + 1} of ${qs.length}</span><span>${right} right</span></div>
          <div class="bar thin"><i style="width:${(i / qs.length) * 100}%"></i></div>
          <h2 class="q">${esc(it.q)}</h2>
          <div class="opts">${it.opts.map((o, k) => `<button class="opt" data-k="${k}">${esc(o.text)}</button>`).join('')}</div>
          <div id="fb"></div></div>`;
        el.querySelectorAll('.opt').forEach((b) => {
          b.onclick = () => {
            const o = it.opts[Number(b.dataset.k)];
            if (o.ok) right += 1;
            el.querySelectorAll('.opt').forEach((x, k) => { x.disabled = true; if (it.opts[k].ok) x.classList.add('right'); });
            if (!o.ok) b.classList.add('wrong');
            el.querySelector('#fb').innerHTML = `<div class="why ${o.ok ? 'good' : 'bad'}"><b>${o.ok ? 'Correct! ' : 'Not quite. '}</b>${esc(it.why)}</div>
              <div class="row-end"><button class="btn" id="nx">${i < qs.length - 1 ? 'Next →' : 'See my score'}</button></div>`;
            el.querySelector('#nx').onclick = () => { i += 1; if (i < qs.length) show(); else finish(); };
          };
        });
      };
      const finish = () => {
        const pct = Math.round((right / qs.length) * 100);
        const passed = pct >= rules.passPct;
        const prev = (S.lessons[lesson.key] || {}).quiz || {};
        patchLesson(lesson.key, { quiz: { attempts: union({ at: Date.now(), right, total: qs.length, pct }), best: Math.max(prev.best || 0, pct), passed: !!(prev.passed || passed) } });
        el.innerHTML = `<div class="card center">
          <div class="big-emoji">${passed ? '🎉' : '💪'}</div>
          <h2>${right} / ${qs.length} — ${pct}%</h2>
          <p>${passed ? 'You passed! On to the real-life part.' : `You need ${rules.passPct}% to pass. Look over the Learn page or rewatch a video, then try again.`}</p>
          <div class="row-center">${passed ? '<button class="btn btn-big" id="cont">Continue →</button>'
            : '<button class="btn btn-ghost" id="rev">Review Learn</button><button class="btn" id="retry">Try again</button>'}</div></div>`;
        if (passed) el.querySelector('#cont').onclick = () => advance();
        else {
          el.querySelector('#retry').onclick = () => run();
          el.querySelector('#rev').onclick = () => { clean(); view.stage = 'learn'; renderStep(); };
        }
      };
      show();
    }
  }

  // ── Real life ──
  function stageReal({ step, unit, lesson, el }) {
    const prog = S.lessons[lesson.key] || {};
    const prev = prog.realLife && prog.realLife.answer;
    const MIN = 15;
    el.innerHTML = `
      <article class="card learn real">${lesson.realLife.text}</article>
      <div class="card">
        <h3>Your turn ✍️</h3>
        <p class="prompt">${esc(lesson.realLife.prompt)}</p>
        <textarea id="ans" rows="5" placeholder="Explain it in your own words…">${esc(prev || '')}</textarea>
        <div class="row-between"><small id="wc" class="muted"></small><button class="btn" id="send" disabled>${prev ? 'Update answer' : 'Submit'}</button></div>
      </div>`;
    const ta = el.querySelector('#ans'), wc = el.querySelector('#wc'), send = el.querySelector('#send');
    const upd = () => { const n = ta.value.trim().split(/\s+/).filter(Boolean).length; wc.textContent = n >= MIN ? `${n} words ✓` : `${n} / ${MIN} words`; send.disabled = n < MIN; };
    ta.oninput = upd; upd();
    // block pasting — answers should be his own words
    ta.addEventListener('paste', (e) => { e.preventDefault(); toast('Type it in your own words 🙂'); });
    send.onclick = () => {
      const wasDone = lessonStage(lesson, S.lessons[lesson.key]) === 'done';
      patchLesson(lesson.key, { realLife: { answer: ta.value.trim(), at: Date.now() }, ...(wasDone ? {} : { completedAt: Date.now() }) });
      const next = currentLesson(unit, S.lessons);
      el.innerHTML = `<div class="card center"><div class="big-emoji">🌟</div><h2>Lesson complete!</h2>
        <p>${next ? `Up next: <b>${esc(next.title)}</b>` : 'You finished the whole unit! 🎉'}</p>
        <button class="btn btn-big" id="nextL">${next ? 'Start next lesson →' : 'Practice →'}</button></div>`;
      el.querySelector('#nextL').onclick = () => { clean(); view.stage = null; view.videoIdx = null; renderStep(); };
    };
  }

  // ── Practice (unit finished, block still has time) ──
  function renderPractice(step, body, unit) {
    tracker.set({ mode: 'active', stepId: step.id, subject: step.subject, lessonKey: null });
    let right = 0, total = 0;
    const nextQ = () => {
      const l = unit.lessons[Math.floor(Math.random() * unit.lessons.length)];
      const gen = practiceFor(l);
      const item = gen || (() => { const b = l.quiz[Math.floor(Math.random() * l.quiz.length)]; return { q: b.q, c: b.c, why: b.why }; })();
      const opts = shuffle(item.c.map((text, i) => ({ text, ok: i === 0 })));
      body.innerHTML = `<div class="card"><div class="quiz-top"><span>🔁 Review practice — ${esc(l.title)}</span><span>${right}/${total}</span></div>
        <h2 class="q">${esc(item.q)}</h2>
        <div class="opts">${opts.map((o, k) => `<button class="opt" data-k="${k}">${esc(o.text)}</button>`).join('')}</div><div id="fb"></div></div>
        <p class="hint">You finished every lesson in this unit. Keep practicing until the block time is done.</p>`;
      body.querySelectorAll('.opt').forEach((b) => {
        b.onclick = () => {
          const o = opts[Number(b.dataset.k)]; total += 1; if (o.ok) right += 1;
          body.querySelectorAll('.opt').forEach((x, k) => { x.disabled = true; if (opts[k].ok) x.classList.add('right'); });
          if (!o.ok) b.classList.add('wrong');
          patchDay({ practice: { [step.subject]: { right: inc(o.ok ? 1 : 0), total: inc(1) } } });
          body.querySelector('#fb').innerHTML = `<div class="why ${o.ok ? 'good' : 'bad'}"><b>${o.ok ? 'Correct! ' : 'Not quite. '}</b>${esc(item.why)}</div>
            <div class="row-end"><button class="btn" id="nx">Next →</button></div>`;
          body.querySelector('#nx').onclick = nextQ;
        };
      });
    };
    nextQ();
  }

  // ── Extra practice after the day is done (bonus, still tracked) ──
  function renderExtra() {
    const step = { id: 'X', type: 'extra', subject: 'algebra' };
    const body = shell({ ...step }, '', { title: 'Extra practice' });
    root.querySelector('.bar-top').classList.add('algebra');
    const finished = [...cur.algebra.lessons, ...cur.biology.lessons].filter((l) => lessonStage(l, S.lessons[l.key]) === 'done');
    renderPractice(step, body, { lessons: finished.length ? finished : cur.algebra.lessons.slice(0, 1) });
  }

  // ── Break ──
  function renderBreak(step) {
    tracker.off();
    let left = cur.rules.breakMinutes * 60;
    root.innerHTML = `
      <main class="wrap break-wrap">
        <div class="card center break">
          <div class="big-emoji">☕</div><h1>Break time</h1>
          <div class="break-clock" id="bc">${mmss(left)}</div>
          <p>Stand up, stretch, drink some water. This time doesn't count — and that's fine.</p>
          <div class="row-center"><button class="btn btn-ghost" id="home">Home</button><button class="btn" id="skip">I'm ready — next →</button></div>
        </div>
      </main>`;
    const bc = root.querySelector('#bc');
    const t = setInterval(() => {
      left -= 1; bc.textContent = mmss(left);
      if (left <= 0) { clearInterval(t); bc.textContent = '0:00'; bc.classList.add('over'); toast('Break is over — back to it! 💪'); }
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
      <div class="card fact-card">
        <span class="chip">${esc(f.cat || 'Fun fact')}</span>
        <h1>${esc(f.title)}</h1>
        <p>${esc(f.blurb || '')}</p>
      </div>
      <div id="player"></div>
      <p class="hint">Reward time! Same rules: keep it playing, stay on the screen.</p>
      <div class="row-end"><button class="btn" id="done" disabled>Continue →</button></div>`, { title: 'Did you know?' });
    tracker.set({ mode: 'video', stepId: step.id, subject: 'fact', lessonKey: null });
    const doneBtn = body.querySelector('#done');
    const vp = (day().factProg || {})[f.id] || 0;
    const player = mountVideo(body.querySelector('#player'), {
      id: f.id, startMax: vp, rules: cur.rules, tracker,
      onProgress: (max) => patchDay({ factProg: { [f.id]: max } }),
      onDone: () => { doneBtn.disabled = false; toast('✅ Nice!', 'good'); },
    });
    cleanups.push(() => player.destroy());
    doneBtn.onclick = async () => { await tracker.flush(); patchDay({ factsDone: { [step.id]: f.id } }); nextStep(); };
  }

  return {
    destroy() { clean(); tracker.destroy(); unsubs.forEach((u) => { try { u && u(); } catch {} }); },
  };
}
