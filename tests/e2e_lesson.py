# Demo-mode browser test (Playwright + Chromium). Run: python3 tests/e2e_lesson.py
# Needs js/config.js with firebase = null (run it on a demo copy). Uses a fake YouTube player and a fake clock.
# Covers: watch rules (skip, leave app, missed check), learn timer, failed quiz → answers hidden → review + wait → pass,
# real-life answer, and the master view.
import os, subprocess, time
from playwright.sync_api import sync_playwright
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(HERE); SP = os.path.join(HERE, 'screens'); os.makedirs(SP, exist_ok=True)
srv = subprocess.Popen(['python3', '-m', 'http.server', '8765'], cwd=ROOT, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL); time.sleep(1)
fake = open(os.path.join(HERE, 'fake-youtube.js')).read()
errs = []
def live(page):  # the "right now" doc the master sees (demo store)
  return page.evaluate("(() => { const d = JSON.parse(localStorage.getItem('study-coach-demo-v1') || '{}'); const s = Object.values(d.students || {})[0] || {}; const L = s.live || {}; return [L.title, L.stage, L.detail, L.pos, L.counting ? 'counting' : 'not counting'].join(' | '); })()")
def shot(page, name): page.screenshot(path=f'{SP}/{name}.png')
def tick(page, n=1):
  for _ in range(n):
    page.clock.run_for(1000)
    a = page.query_selector('.attn')
    if a: a.click()
    if page.query_selector('.sc-flash'): page.click('.sc-flash button')
    page.evaluate('(() => { const p = (window.__players || []).at(-1); if (p && p.getPlayerState() === 2) p.playVideo(); })()')
try:
  with sync_playwright() as p:
    b = p.chromium.launch()
    ctx = b.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=2, is_mobile=True, has_touch=True)
    page = ctx.new_page()
    page.on('pageerror', lambda e: errs.append('PAGEERR ' + str(e)))
    page.route('https://www.youtube.com/iframe_api', lambda r: r.fulfill(status=200, content_type='text/javascript', body=fake))
    page.clock.install(); page.add_init_script('window.__ytDur = 500;')
    page.goto('http://localhost:8765/index.html')
    page.click('[data-role=student]'); page.wait_for_selector('#go'); shot(page, '02-home')
    page.click('#go'); page.wait_for_selector('.video-frame'); page.clock.run_for(1500)
    page.evaluate('window.__players[0].playVideo()'); page.clock.run_for(30_000)
    print('counting after 30s:', page.inner_text('#clockT'), page.eval_on_selector('#clock', 'e=>e.classList.contains("on")'))
    print('live (watching):', live(page))
    page.evaluate('window.__players[0].seekTo(400)'); page.clock.run_for(1100)
    print('skip blocked, t =', page.evaluate('window.__players[0].getCurrentTime()'))
    page.evaluate("Object.defineProperty(document,'visibilityState',{value:'hidden',configurable:true}); document.dispatchEvent(new Event('visibilitychange'))")
    page.clock.run_for(10_000)
    page.evaluate("Object.defineProperty(document,'visibilityState',{value:'visible',configurable:true}); document.dispatchEvent(new Event('visibilitychange'))")
    page.wait_for_selector('.sc-flash'); print('away message:', page.inner_text('.sc-flash p')); page.click('.sc-flash button')
    page.evaluate('window.__players[0].playVideo()')
    for i in range(500):
      page.clock.run_for(1000)
      if page.query_selector('.attn'): break
    page.clock.run_for(16_000)
    print('missed check → flash:', bool(page.query_selector('.sc-flash'))); page.click('.sc-flash button')
    # watch every video of the lesson
    first = True
    while page.query_selector('#nextVid'):
      page.evaluate('window.__players.at(-1).playVideo()')
      for i in range(700):
        tick(page)
        if not page.eval_on_selector('#nextVid', 'e=>e.disabled'): break
      if first:   # replay the video he just finished: the clock must not move
        first = False
        page.click('.sc-vids .cg-chip[data-i="0"]'); page.clock.run_for(1500)
        page.evaluate('window.__players.at(-1).playVideo()'); before = page.inner_text('#clockT')
        for i in range(8): tick(page)
        print('replay of a finished video counted:', page.eval_on_selector('#clock', 'e=>e.classList.contains("on")'), '| clock', before, '->', page.inner_text('#clockT'))
      page.click('#nextVid'); page.clock.run_for(1500)
    print('stage now:', page.inner_text('.sc-stages').replace('\n', ' '))
    print('can\'t go back to videos from Learn:', page.eval_on_selector('.sc-stages [data-stage=watch]', 'e=>e.disabled'))
    for i in range(11):   # keep tapping for 11 minutes: the clock must stop at 10
      page.touchscreen.tap(5, 400); page.clock.run_for(60_000)
      if page.query_selector('.sc-flash'): break
    print('Learn time limit:', page.inner_text('.sc-flash h2') if page.query_selector('.sc-flash') else 'NO ALERT'); page.click('.sc-flash button')
    page.clock.run_for(2000); print('clock after the limit:', 'counting' if page.eval_on_selector('#clock', 'e=>e.classList.contains("on")') else 'stopped')
    page.click('#gotIt'); page.wait_for_selector('#start')
    answers = page.evaluate("import('/content/algebra/index.js').then(m=>{const o={};m.default.units.forEach(u=>u.lessons.forEach(l=>l.quiz.forEach(q=>o[q.q]=q.c[0])));return o})")
    def take_quiz(wrong_first):
      page.evaluate("document.getElementById('start').scrollIntoView({block:'center'})"); page.click('#start')
      page.clock.run_for(2000); print('live (quiz):', live(page))
      revealed = False
      for qn in range(10):
        qt = page.inner_text('.q'); right = answers.get(qt)
        opts = page.query_selector_all('.opt')
        if right is None: opts[0].click()
        else: [o for o in opts if (o.inner_text() == right) != (qn < wrong_first)][0].click()
        if qn < wrong_first and page.query_selector('.opt[aria-checked="true"]'): revealed = True
        page.click('#nx')
      return revealed
    def answer(wrong):
      qt = page.inner_text('.q'); right = answers.get(qt); opts = page.query_selector_all('.opt')
      if right is None: opts[0].click()
      else: [o for o in opts if (o.inner_text() == right) != wrong][0].click()
      hidden = wrong and not page.query_selector('.opt[aria-checked="true"]')
      page.click('#nx'); return hidden
    page.evaluate("document.getElementById('start').scrollIntoView({block:'center'})"); page.click('#start')
    page.clock.run_for(2000); print('live (quiz):', live(page))
    revealed = not all([answer(True), answer(True)]); answer(False)
    q4 = page.inner_text('.q')
    page.reload(); page.wait_for_selector('#go'); page.click('#go'); page.wait_for_selector('.sc-qtop'); page.clock.run_for(1500)
    print('quiz after the app closed:', page.inner_text('.sc-qtop').split('·')[0].strip(), '| same question as before:', page.inner_text('.q') == q4)
    for qn in range(7): answer(False)
    print('attempt 1:', page.inner_text('.sc-result h3'), '| right answer revealed on a miss:', revealed)
    page.click('#revWatch'); page.wait_for_selector('.video-frame'); page.clock.run_for(1500)
    print('failed quiz opens review (rewatch allowed):', page.eval_on_selector('.sc-stages [data-stage=watch]', 'e=>e.getAttribute("aria-pressed")') == 'true')
    page.evaluate('window.__players.at(-1).playVideo()')
    for i in range(80):
      tick(page)
      if page.query_selector('#start'): break
    print('sent back to the quiz after 1 min of review:', bool(page.query_selector('#start')))
    print('locked after review:', page.eval_on_selector('#start', 'e=>e.disabled'), page.inner_text('#lockMsg'))
    print('videos locked again once review is done:', page.eval_on_selector('.sc-stages [data-stage=watch]', 'e=>e.disabled'))
    page.clock.run_for(11_000); print('live (waiting):', live(page))
    page.clock.run_for(181_000)
    if page.query_selector('.sc-flash'): print('idle flash during wait:', page.inner_text('.sc-flash h2')); page.click('.sc-flash button')
    print('unlocked after wait:', not page.eval_on_selector('#start', 'e=>e.disabled'))
    take_quiz(0); print('attempt 2:', page.inner_text('.sc-result h3'))
    page.click('#cont'); page.wait_for_selector('#ans')
    page.fill('#ans', 'My input is the button I press on the vending machine and the output is the snack that comes out every single time I press it.')
    page.click('#send'); page.wait_for_selector('#nextL'); page.click('#nextL')
    print('next lesson:', page.inner_text('.sc-lesson-head h2'))
    # The master on a second tab (same browser storage, like a second device) sees where he is right now.
    page.clock.run_for(3000)
    m = ctx.new_page(); m.on('pageerror', lambda e: errs.append('MASTER PAGEERR ' + str(e))); m.goto('http://localhost:8765/index.html'); m.click('[data-role=master]'); m.wait_for_selector('#liveCard')
    print('master live card (studying):', m.inner_text('#liveCard').replace('\n', ' | '))
    page.evaluate("Object.defineProperty(document,'visibilityState',{value:'hidden',configurable:true}); document.dispatchEvent(new Event('visibilitychange'))")
    for i in range(30):
      if 'Left the app' in m.inner_text('#liveCard'): break
      time.sleep(0.1)
    print('master live card (he left):', m.inner_text('#liveCard').replace('\n', ' | '))
    print('master today:', m.inner_text('.sc-stats').replace('\n', ' | '))
    print('flags:', m.inner_text('.flags').replace('\n', ' | '))
    shot(m, '13-master')
    def until(fn, n=40):
      for i in range(n):
        try:
          if fn(): return True
        except Exception: pass
        time.sleep(0.1)
      return False
    page.evaluate("Object.defineProperty(document,'visibilityState',{value:'visible',configurable:true}); document.dispatchEvent(new Event('visibilitychange'))")
    if page.query_selector('.sc-flash'): page.click('.sc-flash button')
    m.click('#msgBtn'); m.wait_for_selector('.sc-composer input')
    m.fill('.sc-composer input', 'Salam, how is it going?'); m.click('.sc-composer button[type=submit]')
    print('student gets the message:', until(lambda: 'how is it going' in page.inner_text('.cg-toast-msg')))
    page.click('[data-chat-open]'); page.wait_for_selector('.sc-chat-sheet.is-open'); page.clock.run_for(3000)
    print('clock while chat is open:', 'counting' if page.eval_on_selector('#clock', 'e=>e.classList.contains("on")') else 'paused')
    time.sleep(0.7); shot(page, '15a-chat-open')
    page.fill('.sc-chat-sheet .sc-composer input', 'Alhamdulillah, on the quiz now'); page.press('.sc-chat-sheet .sc-composer input', 'Enter')
    print('master sees the reply:', until(lambda: 'on the quiz now' in m.inner_text('.sc-chat-box')))
    print('master sees "Seen":', until(lambda: 'Seen' in m.inner_text('.sc-chat-box')))
    m.click('#nudgeChat')
    print('nudge pops up on his screen:', until(lambda: page.inner_text('.sc-flash h2') == 'Your brother nudged you'))
    shot(page, '14-student-nudge'); page.click('.sc-flash button')
    shot(page, '15-student-chat'); shot(m, '16-master-chat')
    # export the activity log from the master view
    page.clock.run_for(16_000)   # let the student's app save its log (every 15 s)
    m.click('.sc-tabs [data-t=overview]'); m.wait_for_selector('#logBtn'); m.click('#logBtn')
    m.wait_for_selector('.sc-log-sheet.is-open'); m.click('.sc-log-range [data-r=today]')
    until(lambda: 'END OF LOG' in m.eval_on_selector('#logText', 'e=>e.value'), 50)
    txt = m.eval_on_selector('#logText', 'e=>e.value'); open(f'{SP}/sample-log.txt', 'w').write(txt)
    kinds = sorted(set(l.split()[1] for l in txt.split('\n') if len(l) > 10 and l[2] == ':' and l[5] == ':'))
    print('log export:', m.inner_text('#logStat'), '| kinds:', ' '.join(kinds))
    b.close()
finally:
  srv.terminate()
  print('\n'.join(errs) or 'no page errors')
