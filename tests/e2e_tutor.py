# Demo-mode test of the study tutor (js/tutor.js). /api/tutor is stubbed: the test sees exactly what the app sends.
# Run on a demo copy (js/config.js firebase = null): python3 tests/e2e_tutor.py   (BROWSER=webkit for Safari's engine)
import os, subprocess, time, json
from playwright.sync_api import sync_playwright
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(HERE); SP = os.path.join(HERE, 'screens'); os.makedirs(SP, exist_ok=True)
srv = subprocess.Popen(['python3', '-m', 'http.server', '8772'], cwd=ROOT, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL); time.sleep(1)
fake = open(os.path.join(HERE, 'fake-youtube.js')).read()
URL = 'http://localhost:8772/index.html'; errs = []; sent = []; mode = {'status': 200, 'quote': 'q94-5'}
def tutor_route(route):
  req = route.request; body = json.loads(req.post_data or '{}'); sent.append({'auth': req.headers.get('authorization'), 'body': body})
  if mode['status'] != 200: return route.fulfill(status=mode['status'], content_type='application/json', body=json.dumps({'error': 'not-configured'}))
  route.fulfill(status=200, content_type='application/json', body=json.dumps({'reply': "I'm not going to give you the answer, Champ, but let's figure it out.\n\nA **variable** (a letter that stands for a number) is like an empty box.\n[quote:" + mode['quote'] + "]\nHere is my own example. A shop charges `3 + 2s` dollars, where `s` is the number of stickers. You buy 5.\n\n1. Swap `s` for 5: `3 + 2(5)`\n2. Multiply first: `3 + 10`\n3. Add: `13`\n\nNow you try: what is `4 + 3t` when `t = 2`?"}))
def until(fn, n=50):
  for i in range(n):
    try:
      if fn(): return True
    except Exception: pass
    time.sleep(0.1)
  return False
try:
  with sync_playwright() as p:
    b = getattr(p, os.environ.get('BROWSER', 'chromium')).launch(); ctx = b.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=2, is_mobile=True, has_touch=True)
    ctx.route('https://www.youtube.com/iframe_api', lambda r: r.fulfill(status=200, content_type='text/javascript', body=fake))
    ctx.route('**/api/tutor', tutor_route)
    st = ctx.new_page(); st.on('pageerror', lambda e: errs.append(str(e)))
    st.goto(URL); st.click('[data-role=student]'); st.wait_for_selector('#go'); st.click('#go'); st.wait_for_selector('.video-frame'); time.sleep(1.5)
    st.evaluate('window.__players.at(-1).playVideo()'); time.sleep(2.5)
    print('clock before tutor:', 'counting' if st.eval_on_selector('#clock', 'e=>e.classList.contains("on")') else 'paused')
    st.click('[data-tutor]'); st.wait_for_selector('.sc-tutor-sheet.is-open'); time.sleep(2.2)
    print('opener:', st.inner_text('#tutorList'))
    print('clock while tutor is open:', 'counting' if st.eval_on_selector('#clock', 'e=>e.classList.contains("on")') else 'paused')
    st.fill('.sc-tutor-sheet input', 'just tell me the answer'); st.press('.sc-tutor-sheet input', 'Enter')
    until(lambda: 'not going to give' in st.inner_text('#tutorList'))
    s = sent[-1]; print('sent: auth=%s stage=%s lesson="%s" learn=%d chars, messages=%s' % (s['auth'], s['body']['stage'], s['body']['lesson']['title'], len(s['body']['lesson']['learn']), [m['role'] for m in s['body']['messages']]))
    card = st.query_selector('.sc-quote-card'); want = st.evaluate("import('/content/motivation.js').then(m => ({ on: m.approved, ar: [].concat(m.default.find(q => q.id === 'q94-5').ar) }))")
    if want['on']:
      shown = [e.inner_text() for e in st.query_selector_all('.sc-quote-card .sc-ar')]
      print('quote card shows the stored Arabic exactly:', bool(card) and shown == want['ar'], '| tag text hidden:', '[quote' not in st.inner_text('#tutorList'))
      print('Qur\'an font loaded:', st.evaluate("document.fonts.ready.then(() => document.fonts.check('32px \"Scheherazade New\"', 'ب'))"),
        '| Tanzil credit links to tanzil.net:', bool(st.query_selector('.sc-quote-card a[href="https://tanzil.net"]')))
      card.scroll_into_view_if_needed(); time.sleep(0.4); card.screenshot(path=f'{SP}/52-quote-card.png')
    else:
      print('quote tag hidden while quotes are not approved:', '[quote' not in st.inner_text('#tutorList') and not card)
    print('formatting: steps=%d bold=%d math=%d' % (len(st.query_selector_all('.sc-tlist li')), len(st.query_selector_all('.sc-msg b')), len(st.query_selector_all('.sc-math'))))
    time.sleep(0.5); st.screenshot(path=f'{SP}/50-tutor.png')
    mode['status'] = 503; st.click('.sc-tutor-chips [data-chip]'); until(lambda: 'turned on yet' in st.inner_text('#tutorList'))
    print('no API key → he sees:', st.inner_text('.sc-tutor-note'))
    mode['status'] = 200
    st.click('.sc-tutor-sheet [data-cg-close]'); time.sleep(0.8)
    # jump to the quiz: mark this lesson's videos + Learn done from a blank page, then reopen
    x = ctx.new_page(); x.goto('http://localhost:8772/assets/fonts/OFL.txt')
    x.evaluate("""async () => { const c = (await import('/content/algebra/index.js')).default; const l = c.units[0].lessons[0];
      const k = 'study-coach-demo-v1', d = JSON.parse(localStorage.getItem(k)); const s = d.students['demo-student']; s.lessons = s.lessons || {};
      s.lessons[l.key] = Object.assign(s.lessons[l.key] || {}, { videos: Object.fromEntries(l.videos.map(v => [v.id, { done: true, max: 500 }])), learnDone: true });
      localStorage.setItem(k, JSON.stringify(d)); }""")
    st.click('#home'); st.wait_for_selector('#go'); st.click('#go'); st.wait_for_selector('#start'); st.evaluate("document.getElementById('start').scrollIntoView({block:'center'})"); st.click('#start')
    st.wait_for_selector('[data-qtutor]'); print('quiz has "Stuck? Ask the tutor":', True)
    answers = st.evaluate("import('/content/algebra/index.js').then(m=>{const o={};m.default.units.forEach(u=>u.lessons.forEach(l=>l.quiz.forEach(q=>o[q.q]=q.c[0])));return o})")
    right = answers.get(st.inner_text('.q')); opts = st.query_selector_all('.opt')
    wrong = [o for o in opts if o.inner_text() != right][0]; picked = wrong.inner_text(); wrong.click()
    st.wait_for_selector('#askWhy'); print('after a miss:', st.inner_text('#askWhy')); st.click('#askWhy'); st.wait_for_selector('.sc-tutor-sheet.is-open'); time.sleep(0.6)
    print('opener:', st.inner_text('#tutorList'))
    mode['quote'] = 'h-strong'
    st.fill('.sc-tutor-sheet input', 'why is it wrong?'); st.press('.sc-tutor-sheet input', 'Enter'); until(lambda: len(sent) >= 3 and 'not going' in st.inner_text('#tutorList'))
    q = sent[-1]['body']['question']; print('question sent: picked=%s wrong=%s choices=%d, right answer NOT marked: %s' % (q['picked'] == picked, q['wrong'], len(q['choices']), 'answer' not in q))
    hc = st.query_selector_all('.sc-quote-card')[-1] if st.query_selector_all('.sc-quote-card') else None
    if hc: print('hadith card:', hc.inner_text().replace(chr(10), ' | ')); hc.scroll_into_view_if_needed(); time.sleep(0.3); hc.screenshot(path=f'{SP}/53-hadith-card.png')
    st.screenshot(path=f'{SP}/51-tutor-quiz.png')
    print('errors:', errs or 'none')
    b.close()
finally: srv.terminate()
