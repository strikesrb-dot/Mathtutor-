# Demo-mode test of missed questions (owner request 2026-10-05): one retry per quiz, the tutor explains a FINAL miss and gives the
# right answer (only then), every miss is saved with Claude's breakdown, and the master sees the full breakdown.
# Run on a demo copy (js/config.js firebase = null): python3 tests/e2e_misses.py   (BROWSER=webkit for Safari's engine)
import os, subprocess, time, json
from playwright.sync_api import sync_playwright
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(HERE); SP = os.path.join(HERE, 'screens'); os.makedirs(SP, exist_ok=True)
srv = subprocess.Popen(['python3', '-m', 'http.server', '8774'], cwd=ROOT, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL); time.sleep(1)
fake = open(os.path.join(HERE, 'fake-youtube.js')).read()
URL = 'http://localhost:8774/index.html'; errs = []; fails = []; tsent = []; bsent = []
def until(fn, n=60):
  for i in range(n):
    try:
      if fn(): return True
    except Exception: pass
    time.sleep(0.1)
  return False
def check(name, ok):
  print(('ok   ' if ok else 'FAIL ') + name)
  if not ok: fails.append(name)
def tutor_route(route):
  body = json.loads(route.request.post_data or '{}'); tsent.append(body)
  route.fulfill(status=200, content_type='application/json', body=json.dumps({'reply': "You mixed up the steps.\n\nThe right answer is **the stub answer**.\n\nTry this one: what is `2 + 3`?"}))
def breakdown_route(route):
  body = json.loads(route.request.post_data or '{}'); bsent.append(body)
  route.fulfill(status=200, content_type='application/json', body=json.dumps({'analysis': "**What he likely thought**\nHe read the question too fast.\n\n**How to explain it to him**\n1. Read it out loud\n2. Underline the key word\n3. Check each choice\n\n**Check question**\nWhat is `3 + 4`? Answer: `7`"}))
try:
  with sync_playwright() as p:
    b = getattr(p, os.environ.get('BROWSER', 'chromium')).launch(); ctx = b.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=2, is_mobile=True, has_touch=True)
    ctx.route('https://www.youtube.com/iframe_api', lambda r: r.fulfill(status=200, content_type='text/javascript', body=fake))
    ctx.route('**/api/tutor', tutor_route); ctx.route('**/api/breakdown', breakdown_route)
    st = ctx.new_page(); st.on('pageerror', lambda e: errs.append('STUDENT ' + str(e)))
    st.goto(URL); st.click('[data-role=student]'); st.wait_for_selector('#go')
    # videos + Learn done on the first algebra lesson, so the block opens on its quiz
    x = ctx.new_page(); x.goto('http://localhost:8774/assets/fonts/OFL.txt')
    until(lambda: x.evaluate("!!localStorage.getItem('study-coach-demo-v1')"), 100)   # the app has saved its demo data
    x.evaluate("""async () => { const c = (await import('/content/algebra/index.js')).default; const l = c.units[0].lessons[0];
      const k = 'study-coach-demo-v1', d = JSON.parse(localStorage.getItem(k)); const s = d.students['demo-student']; s.lessons = s.lessons || {};
      s.lessons[l.key] = Object.assign(s.lessons[l.key] || {}, { videos: Object.fromEntries(l.videos.map(v => [v.id, { done: true, max: 500 }])), learnDone: true });
      localStorage.setItem(k, JSON.stringify(d)); return l.key; }""")
    lessonKey = x.evaluate("(async () => (await import('/content/algebra/index.js')).default.units[0].lessons[0].key)()")
    st.reload(); st.wait_for_selector('#go'); st.click('#go'); st.wait_for_selector('#start')
    st.evaluate("document.getElementById('start').scrollIntoView({block:'center'})"); st.click('#start'); st.wait_for_selector('.opt')
    def right_answer(i):   # from the quiz in progress saved on the lesson (fresh-number questions included)
      return x.evaluate(f"(() => JSON.parse(localStorage.getItem('study-coach-demo-v1')).students['demo-student'].lessons['{lessonKey}'].quizRun.qs[{i}].c[0])()")
    def pick(wrong, i):
      ans = right_answer(i); opts = [o for o in st.query_selector_all('.opt:not([disabled])')]
      o = [o for o in opts if (o.inner_text().strip() != ans) == wrong][0]; t = o.inner_text().strip(); o.click(); return t
    check('top line shows the one retry', '1 retry left' in st.inner_text('.sc-qtop'))
    # Q1: miss → retry → right
    pick(True, 0); st.wait_for_selector('#tryAgain')
    check('after a miss: Try again + What did I do wrong? + Next, answer still hidden', bool(st.query_selector('#askWhy')) and bool(st.query_selector('#nx'))
      and not st.query_selector('.opt.cg-row-accent'))
    st.screenshot(path=f'{SP}/70-quiz-miss-retry.png')
    st.click('#tryAgain'); pick(False, 0)
    check('retry right → "Correct on your retry" and it counts', until(lambda: 'Correct on your retry' in st.inner_text('#fb')))
    st.click('#nx'); st.wait_for_selector('.opt')
    check('retry is used up for this quiz', '1 retry left' not in st.inner_text('.sc-qtop') and '1 right' in st.inner_text('.sc-qtop'))
    # Q2: ask the tutor BEFORE answering → it must not get the right answer
    st.click('[data-qtutor]'); st.wait_for_selector('.sc-tutor-sheet.is-open'); time.sleep(1.2)
    st.fill('.sc-tutor-sheet input', 'just tell me'); st.press('.sc-tutor-sheet input', 'Enter')
    until(lambda: len(tsent) >= 1, 100); q = tsent[-1]['question'] if tsent else {'final': 'NO REQUEST'}
    check('open question: no right answer sent to the tutor', 'correct' not in q and not q.get('final'))
    st.click('.sc-tutor-sheet [data-cg-close]'); time.sleep(0.6)
    # Q2: miss (no retry left) → What did I do wrong? → the tutor explains at once, with the right answer
    picked2 = pick(True, 1); st.wait_for_selector('#askWhy')
    check('no retry offered once it is used', not st.query_selector('#tryAgain'))
    st.click('#askWhy'); st.wait_for_selector('.sc-tutor-sheet.is-open')
    until(lambda: len(tsent) >= 2 and 'the stub answer' in st.inner_text('#tutorList'))
    q = tsent[-1]['question']
    check('final miss: the tutor starts by itself and gets the right answer', q.get('final') is True and q.get('correct') == right_answer(1) and q.get('picked') == picked2
      and tsent[-1]['messages'][-1]['content'] == 'Why is my answer wrong?')
    st.screenshot(path=f'{SP}/71-tutor-final-miss.png')
    st.click('.sc-tutor-sheet [data-cg-close]'); time.sleep(0.6); st.click('#nx'); st.wait_for_selector('.opt')
    # Q3: miss → Next (final)
    pick(True, 2); st.wait_for_selector('#nx'); st.click('#nx'); st.wait_for_selector('.opt')
    check('3 misses saved and each sent for a breakdown', until(lambda: len(bsent) >= 3))
    m0 = bsent[0]['miss']
    check('the miss record has everything', all(k in m0 for k in ('q', 'choices', 'picked', 'correct', 'why', 'sec', 'quizTry', 'qNum', 'lesson', 'subject'))
      and m0['retryPick'] and m0['retryOk'] is True)
    # master: Today → "Missed questions today" → Progress → Missed → full breakdown
    m = ctx.new_page(); m.on('pageerror', lambda e: errs.append('MASTER ' + str(e)))
    m.goto(URL); m.click('[data-role=master]'); m.wait_for_selector('[data-go="progress:missed"]')
    check('Today shows the 3 misses as a shortcut', until(lambda: m.inner_text('[data-go="progress:missed"] .cg-row-value') == '3'))
    m.click('[data-go="progress:missed"]'); m.wait_for_selector('[data-miss]')
    rows = m.query_selector_all('[data-miss]')
    check('master sees 3 missed questions, none still "Writing…"', len(rows) == 3 and 'Writing' not in m.inner_text('.cg-group:has([data-miss])'))
    check('the retry shows on the row', 'fixed it on his retry' in m.inner_text('.cg-group:has([data-miss])'))
    m.locator('[data-miss]').first.scroll_into_view_if_needed(); time.sleep(0.4); m.screenshot(path=f'{SP}/72-master-misses.png')
    m.locator('[data-miss]').last.click(); m.wait_for_selector('.sc-miss-sheet.is-open')
    body = m.inner_text('.sc-miss-body')
    check('breakdown sheet: right answer, his answer, lesson explanation, Claude\'s breakdown', 'Right answer' in body and 'His answer' in body
      and "The lesson's explanation" in body and 'What he likely thought' in body and bool(m.query_selector('.sc-breakdown .sc-tlist')))
    time.sleep(0.5); m.screenshot(path=f'{SP}/73-miss-breakdown.png')
    print('errors:', errs or 'none')
    b.close()
finally: srv.terminate()
print('all passed' if not fails and not errs else f'{len(fails)} failed')
