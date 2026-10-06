// The graded lesson quiz (start / locked-after-fail screen → questions → score), plus the question widget
// that review practice also uses. Rules: a miss keeps the right answer hidden on the quiz screen (the tutor explains it and
// gives it once the miss is final); one retry on one question per quiz (owner 2026-10-05); after a failed quiz he must review
// (Learn or a video), then wait rules.retryWaitMin minutes before the next try. Every final miss goes to app.onMiss
// (js/misses.js: saved for his brother with Claude's breakdown).

import { union } from './store.js';
import { esc, mmss, shuffle, icon, bar } from './ui.js';
import { practiceFor } from './practice.js';

// One multiple-choice question as a grouped list.
// withTutor: add a "Stuck? Ask the tutor" button under the choices (wired by wireAnswer's askTutor).
export function questionHTML(item, opts, top, withTutor = false) {
  return `
    <div class="sc-quiz">
      <p class="cg-meta sc-qtop">${top}</p>
      <h3 class="cg-title2 q">${esc(item.q)}</h3>
      <div class="cg-group sc-opts" role="group">${opts.map((o, k) => `
        <button type="button" class="cg-row opt" data-k="${k}"><span class="cg-row-text"><span class="cg-row-label">${esc(o.text)}</span></span><span class="cg-check">${icon('check')}</span></button>`).join('')}</div>
      ${withTutor ? '<div class="sc-tutor-row"><button type="button" class="cg-btn cg-btn-plain" data-qtutor>Stuck? Ask the tutor</button></div>' : ''}
      <div id="fb"></div>
    </div>`;
}

// reveal = show the right answer + explanation after a miss (practice). Graded quizzes keep it hidden on screen.
// askTutor(picked, wrong, final): opens the tutor about this question. final = his answer can't change any more, so the tutor
//   may explain why it's wrong and give the right answer. Optional.
// more (graded quiz): { canRetry(), onRetry(), onRetryAnswer(ok, picked), onFinal(firstOk, firstPick, retryPick, retryOk) }.
//   After a miss he may use the quiz's one retry on this question, or ask the tutor (which makes this question final).
export function wireAnswer(el, item, opts, onAnswer, nextLabel, onNext, reveal = true, askTutor = null, more = {}) {
  const qt = el.querySelector('[data-qtutor]');
  if (qt && askTutor) qt.onclick = () => askTutor(null, false, false);
  const fb = el.querySelector('#fb');
  let first = null, retrying = false, finalDone = false;
  const final = (retryPick = null, retryOk = false) => {
    if (finalDone || !first) return;
    finalDone = true;
    if (more.onFinal) more.onFinal(first.ok, first.text, retryPick, retryOk);
  };
  const markPick = (b, o, label) => {
    if (o.ok) return;
    b.classList.add('sc-wrong');
    b.querySelector('.cg-row-text').insertAdjacentHTML('beforeend', `<span class="cg-row-sub">${label}</span>`);
    b.querySelector('.cg-check').outerHTML = `<span class="sc-x">${icon('wrong')}</span>`;
  };
  const lockAll = (showRight) => el.querySelectorAll('.opt').forEach((x, k) => {
    x.disabled = true;
    if (opts[k].ok && showRight) { x.setAttribute('aria-checked', 'true'); x.classList.add('cg-row-accent'); }
  });
  // buttons: 'retry' (use the quiz's one retry), 'why' (ask the tutor: final), then Next
  const showFeedback = (head, body, buttons) => {
    fb.innerHTML = `<div class="cg-card sc-why"><p class="cg-headline">${head}</p><p class="cg-text">${body}</p></div>
      <div class="sc-actions">${buttons.includes('retry') ? '<button class="cg-btn cg-btn-glass" id="tryAgain">Try again</button>' : ''}${buttons.includes('why') && askTutor ? '<button class="cg-btn cg-btn-glass" id="askWhy">What did I do wrong?</button>' : ''}<button class="cg-btn cg-btn-strong" id="nx">${nextLabel}</button></div>`;
    fb.querySelector('#nx').onclick = () => { final(); onNext(); };
    const why = fb.querySelector('#askWhy');
    if (why) why.onclick = () => { final(); hideRetry(); askTutor(first.text, true, true); };
    const again = fb.querySelector('#tryAgain');
    if (again) again.onclick = startRetry;
    fb.querySelector('#nx').scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  };
  const hideRetry = () => { const t = fb.querySelector('#tryAgain'); if (t) t.remove(); };
  function startRetry() {
    retrying = true;
    if (more.onRetry) more.onRetry();
    el.querySelectorAll('.opt').forEach((x, k) => { if (opts[k].text !== first.text) x.disabled = false; });
    fb.innerHTML = '<p class="cg-meta sc-retry-note">One more try on this question. Pick again.</p>';
  }
  el.querySelectorAll('.opt').forEach((b) => {
    b.onclick = () => {
      const o = opts[Number(b.dataset.k)];
      if (qt) qt.hidden = true;
      if (retrying) {   // his second pick on this question (the quiz's one retry)
        retrying = false;
        lockAll(o.ok);
        markPick(b, o, 'Your second try');
        if (more.onRetryAnswer) more.onRetryAnswer(o.ok, o.text);
        final(o.text, o.ok);
        return showFeedback(o.ok ? 'Correct on your retry' : 'Not quite again',
          o.ok ? esc(item.why) : 'Tap "What did I do wrong?" and the tutor will show you why, and the right answer.', ['why']);
      }
      first = { ok: o.ok, text: o.text };
      lockAll(o.ok || reveal);
      markPick(b, o, 'Your answer');
      onAnswer(o.ok, o.text);
      if (o.ok) { final(); return showFeedback('Correct', esc(item.why), []); }
      if (reveal) { final(); return showFeedback('Not quite', esc(item.why), ['why']); }
      if (more.canRetry && more.canRetry()) {
        return showFeedback('Not quite', 'You get one retry in this quiz. Use it here, or ask the tutor what went wrong (asking uses up your retry on this question).', ['retry', 'why']);
      }
      final();
      showFeedback('Not quite', 'Tap "What did I do wrong?" and the tutor will show you why, and the right answer.', ['why']);
    };
  });
}

// Questions for one attempt: fresh-number questions where the lesson has a generator, the rest from the bank.
export function buildQuiz(lesson, size) {
  const fresh = [];
  if (practiceFor(lesson)) {
    const want = Math.min(Math.floor(size / 2), 5);
    for (let k = 0; k < want; k++) { const g = practiceFor(lesson); if (g) fresh.push({ ...g, fresh: true }); }
  }
  const bank = shuffle(lesson.quiz).slice(0, size - fresh.length);
  return shuffle([...bank, ...fresh]).map((item) => withOpts(item, shuffle(item.c.map((_, k) => k))));
}
// order = the shuffled positions of c (c[0] is the right answer). Saved with a quiz in progress so a reopen shows the same screen.
const withOpts = (item, order) => ({ q: item.q, c: item.c, why: item.why, order, opts: order.map((k) => ({ text: item.c[k], ok: k === 0 })) });
const toSaved = (it) => ({ q: it.q, c: it.c, why: it.why || '', order: it.order });

// app = { rules, tracker, prog(key), owesReview(lesson), patchLesson(key, patch), onClean(fn), goStage(stage), chosen, askTutor?, onMiss? }
//   chosen = he tapped the Quiz tab himself (so a passed quiz shows "take it again" instead of moving on).
// A quiz in progress is saved on the lesson as quizRun { at, graded, i, right, retryUsed, qs }: closing the app mid-quiz brings him
// back to the same question with the same questions (and closing it can't get him a fresh, easier quiz).
export function stageQuiz({ lesson, el, advance }, app) {
  const { rules, tracker } = app;
  const q = app.prog(lesson.key).quiz || {};
  const attempts = (q.attempts || []).length;
  const size = Math.min(rules.quizSize, lesson.quiz.length);
  const needRight = Math.ceil((rules.passPct / 100) * size);
  const saved = app.prog(lesson.key).quizRun;
  if (saved && Array.isArray(saved.qs) && saved.i < saved.qs.length) return run(saved);

  if (q.passed && app.chosen) {
    el.innerHTML = `<div class="cg-card sc-center"><h3 class="cg-title2">You passed this quiz (${q.best}%)</h3>
      <p class="cg-meta">Want to take it again for practice? It still counts as study time.</p>
      <div class="cg-btns sc-center-btns"><button class="cg-btn cg-btn-glass" id="again">Take it again</button><button class="cg-btn cg-btn-strong" id="cont">Continue</button></div></div>`;
    tracker.setLive({ detail: `Already passed (${q.best}%) — deciding whether to retake it`, pos: '' }, true);
    tracker.screen({ cap: rules.capScreenSec, label: 'Quiz start' });
    el.querySelector('#again').onclick = () => run();
    el.querySelector('#cont').onclick = () => advance();
    return;
  }

  // Locked after a fail: review first, and wait out the timer.
  const lockedFor = () => Math.max(0, Math.ceil(((q.retryAt || 0) - Date.now()) / 1000));
  const review = app.owesReview(lesson);
  el.innerHTML = `<div class="cg-card sc-center">
    <h3 class="cg-title2">${attempts ? 'Try the quiz again' : 'Quiz time'}</h3>
    <p class="cg-text">${size} questions. You need ${needRight} right (${rules.passPct}%) to pass.</p>
    ${attempts ? `<p class="cg-meta">Tries so far: ${attempts} · Best: ${q.best || 0}%</p>` : ''}
    ${review ? `<p class="cg-text">First, review: reread the Learn page or rewatch a video for a minute.</p>
      <div class="cg-btns sc-center-btns"><button class="cg-btn cg-btn-glass" id="revLearn">Reread Learn</button><button class="cg-btn cg-btn-glass" id="revWatch">Rewatch a video</button></div>` : ''}
    <button class="cg-btn cg-btn-strong cg-btn-block" id="start" disabled>Start quiz</button>
    <p class="cg-meta cg-num" id="lockMsg"></p></div>`;
  const start = el.querySelector('#start'), lockMsg = el.querySelector('#lockMsg');
  const triesNote = attempts ? `${attempts} ${attempts === 1 ? 'try' : 'tries'} so far · best ${q.best || 0}%` : '';
  let first = true, mode = '';
  const sync = () => {
    const left = lockedFor();
    const m = left > 0 ? 'wait' : review ? 'review' : 'ready';   // waiting out the retry timer doesn't count as study time
    if (m !== mode) { mode = m; tracker.screen(m === 'wait' ? { noCount: true } : { cap: rules.capScreenSec, label: 'Quiz start' }); }
    start.disabled = review || left > 0;
    lockMsg.textContent = left > 0 ? `You can retry in ${mmss(left)}` : review ? 'Review first, then you can retry.' : '';
    const detail = review ? 'Failed last try — has to review before retrying'
      : left > 0 ? 'Waiting to retry the quiz'
        : attempts ? `Ready to retry the quiz (try ${attempts + 1}) — hasn't started yet` : 'On the quiz start screen — hasn\'t started yet';
    // Countdowns go in pos (the live card's small line); detail is logged, so it only changes when the screen does.
    tracker.setLive({ detail, pos: left > 0 ? `${mmss(left)} left${triesNote ? ` · ${triesNote}` : ''}` : triesNote }, first); first = false;
  };
  sync();
  const t = setInterval(sync, 1000);
  app.onClean(() => clearInterval(t));
  start.onclick = () => { clearInterval(t); run(); };
  if (review) {
    el.querySelector('#revLearn').onclick = () => app.goStage('learn');
    el.querySelector('#revWatch').onclick = () => app.goStage('watch');
  }

  function run(resume) {
    const qs = resume ? resume.qs.map((it) => withOpts(it, it.order)) : buildQuiz(lesson, size);
    const graded = resume ? resume.graded !== false : !q.passed;
    let i = resume ? resume.i : 0, right = resume ? resume.right || 0 : 0, retryUsed = resume ? !!resume.retryUsed : false;
    if (!resume) app.patchLesson(lesson.key, { quizRun: { at: Date.now(), graded, i: 0, right: 0, qs: qs.map(toSaved) } });
    else tracker.setLive({ pos: 'Picked the quiz back up where he left off' });
    tracker.log('quiz', resume ? `picked the quiz back up at question ${i + 1} (${right} right so far)` : `started ${graded ? `try ${attempts + 1}` : 'a practice retake'} — ${qs.length} questions`);
    let shownAt = Date.now();
    const show = () => {
      const it = qs[i];
      el.innerHTML = questionHTML(it, it.opts, `Question ${i + 1} of ${qs.length} · ${right} right${graded && !retryUsed ? ' · 1 retry left' : ''}`, !!app.askTutor);
      el.querySelector('.sc-qtop').insertAdjacentHTML('afterend', bar((i / qs.length) * 100));
      tracker.setLive({ detail: graded ? `Taking the quiz (try ${attempts + 1})` : 'Retaking a passed quiz for practice',
        pos: `Question ${i + 1} of ${qs.length}${i ? ` · ${right} of ${i} right so far` : ''}` }, true);
      tracker.screen({ cap: rules.capQuestionMin * 60, label: 'Quiz question' });
      shownAt = Date.now();
      let sec = 0;
      wireAnswer(el, it, it.opts, (ok, picked) => {
        if (ok) right += 1;
        sec = Math.round((Date.now() - shownAt) / 1000);
        app.patchLesson(lesson.key, { quizRun: { i: i + 1, right } });
        tracker.log('answer', `Q${i + 1} ${ok ? 'right' : 'WRONG'} in ${sec}s — "${String(it.q).slice(0, 100)}"${ok ? '' : ` — picked "${String(picked).slice(0, 60)}"`}`);
      }, i < qs.length - 1 ? 'Next' : 'See my score',
        () => { i += 1; if (i < qs.length) { show(); window.scrollTo(0, 0); } else finish(); }, !graded,
        app.askTutor ? (picked, wrong, final) => app.askTutor(lesson, { q: it.q, choices: it.opts.map((o) => o.text), picked, wrong,
          ...(final && picked && wrong ? { final: true, correct: it.c[0] } : {}) }) : null,
        !graded ? {} : {
          canRetry: () => !retryUsed,
          onRetry: () => { retryUsed = true; app.patchLesson(lesson.key, { quizRun: { retryUsed: true } }); tracker.log('answer', `Q${i + 1} used his one retry for this quiz`); },
          onRetryAnswer: (ok, picked) => {
            if (ok) { right += 1; app.patchLesson(lesson.key, { quizRun: { right } }); }
            tracker.log('answer', `Q${i + 1} retry ${ok ? 'right' : 'WRONG'} — picked "${String(picked).slice(0, 60)}"`);
          },
          onFinal: (firstOk, firstPick, retryPick, retryOk) => {
            if (firstOk || !app.onMiss) return;
            app.onMiss(lesson, { q: it.q, choices: it.opts.map((o) => o.text), picked: firstPick, retryPick: retryPick || '', retryOk: !!retryOk,
              correct: it.c[0], why: it.why || '', sec, quizTry: attempts + 1, qNum: i + 1, of: qs.length });
          },
        });
    };
    const finish = () => {
      const pct = Math.round((right / qs.length) * 100);
      const passed = pct >= rules.passPct;
      const prev = app.prog(lesson.key).quiz || {};
      const tries = (prev.attempts || []).length + 1;
      const patch = { attempts: union({ at: Date.now(), right, total: qs.length, pct }), best: Math.max(prev.best || 0, pct), passed: !!(prev.passed || passed) };
      if (!passed && !prev.passed) Object.assign(patch, { needReview: true, retryAt: Date.now() + rules.retryWaitMin * 60000 });
      if (passed && !prev.passed) { patch.passedOnTry = tries; if (tries >= rules.manyTries) tracker.flag('manyTries', lesson.key); if (app.onQuizPassed) app.onQuizPassed(lesson, { tries, pct }); }
      app.patchLesson(lesson.key, { quiz: patch, quizRun: null });
      tracker.screen({ cap: rules.capScreenSec, label: 'Quiz result' });
      tracker.log('quiz', `${passed ? 'PASSED' : 'FAILED'} ${right}/${qs.length} (${pct}%) on try ${tries}${passed || prev.passed ? '' : ` — must review, then wait ${rules.retryWaitMin} min`}`);
      tracker.setLive({ detail: `${passed ? 'Passed' : 'Failed'} the quiz: ${right}/${qs.length} (${pct}%) on try ${tries}`,
        pos: passed ? '' : `Must review, then wait ${rules.retryWaitMin} min to retry` }, true);
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
        el.querySelector('#rev').onclick = () => app.goStage('learn');
        el.querySelector('#revWatch').onclick = () => app.goStage('watch');
      }
    };
    show();
  }
}
