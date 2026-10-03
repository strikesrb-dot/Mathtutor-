# Demo-mode browser test (Playwright + Chromium). Run: python3 tests/e2e_lesson.py
# Uses a fake YouTube player and a fake clock, so it runs in a few minutes.
import subprocess, time, json, sys
from playwright.sync_api import sync_playwright
import os
HERE=os.path.dirname(os.path.abspath(__file__)); ROOT=os.path.dirname(HERE); SP=os.path.join(HERE,'screens'); os.makedirs(SP, exist_ok=True)
srv = subprocess.Popen(['python3','-m','http.server','8765'], cwd=ROOT, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
time.sleep(1)
fake = open(os.path.join(HERE,'fake-youtube.js')).read()
errs=[]
def shot(page,name): page.screenshot(path=f'{SP}/{name}.png', full_page=False)
try:
  with sync_playwright() as p:
    b = p.chromium.launch(executable_path='/opt/pw-browsers/chromium-1194/chrome-linux/chrome' if False else None)
    ctx = b.new_context(viewport={'width':390,'height':844}, device_scale_factor=2, is_mobile=True, has_touch=True)
    page = ctx.new_page()
    page.on('pageerror', lambda e: errs.append('PAGEERR '+str(e)))
    page.on('console', lambda m: errs.append('CONSOLE '+m.type+' '+m.text) if m.type in ('error','warning') else None)
    page.route('https://www.youtube.com/iframe_api', lambda r: r.fulfill(status=200, content_type='text/javascript', body=fake))
    page.clock.install()
    page.add_init_script('window.__ytDur = 500;')
    page.goto('http://localhost:8765/index.html')
    page.wait_for_selector('[data-role=student]'); shot(page,'01-login')
    page.click('[data-role=student]'); page.wait_for_selector('#go'); shot(page,'02-home')
    page.click('#go'); page.wait_for_selector('.video-frame')
    page.clock.run_for(1500)
    page.evaluate('window.__players[0].playVideo()')
    page.clock.run_for(30_000)
    print('clock after 30s:', page.inner_text('#clockT'), 'counting:', page.eval_on_selector('#clock','e=>e.classList.contains("on")'))
    shot(page,'03-watch')
    # skip attempt
    page.evaluate('window.__players[0].seekTo(400)'); page.clock.run_for(1100)
    print('after skip t=', page.evaluate('window.__players[0].getCurrentTime()'))
    # leave app
    page.evaluate("Object.defineProperty(document,'visibilityState',{value:'hidden',configurable:true}); document.dispatchEvent(new Event('visibilitychange'))")
    page.clock.run_for(10_000)
    print('state while hidden', page.evaluate('window.__players[0].getPlayerState()'))
    page.evaluate("Object.defineProperty(document,'visibilityState',{value:'visible',configurable:true}); document.dispatchEvent(new Event('visibilitychange'))")
    page.wait_for_selector('.sc-flash'); print('away message:', page.inner_text('.sc-flash p')); shot(page,'04-flash-left'); page.click('.sc-flash button')
    page.evaluate('window.__players[0].playVideo()')
    # wait for attention check
    for i in range(500):
      page.clock.run_for(1000)
      if page.query_selector('.attn'): break
    print('attn appeared after ~', i, 's'); shot(page,'05-attn')
    page.clock.run_for(16_000)
    print('flash after missed check:', bool(page.query_selector('.sc-flash')), 'player state', page.evaluate('window.__players[0].getPlayerState()'))
    shot(page,'06-missed'); page.click('.sc-flash button')
    # now watch through, tapping checks
    page.evaluate('window.__players[0].playVideo()')
    for i in range(700):
      page.clock.run_for(1000)
      a = page.query_selector('.attn')
      if a: a.click()
      if page.query_selector('.sc-flash'): page.click('.sc-flash button'); page.evaluate('window.__players[0].playVideo()')
      if not page.eval_on_selector('#nextVid','e=>e.disabled'): break
    print('video1 done after', i, 's; clock', page.inner_text('#clockT'))
    page.click('#nextVid')
    print('stage now:', page.inner_text('.sc-stages'))
    shot(page,'07-learn')
    for i in range(45): page.mouse.move(10, 10+i); page.touchscreen.tap(5,400); page.clock.run_for(1000)
    page.click('#gotIt'); page.wait_for_selector('#start'); shot(page,'08-quizstart')
    answers = page.evaluate("import('/content/algebra.js').then(m=>{const o={};m.default.lessons.forEach(l=>l.quiz.forEach(q=>o[q.q]=q.c[0]));return o})")
    page.click('#start')
    # fail first attempt on purpose (answer 2 wrong)
    for qn in range(10):
      qt = page.inner_text('.q'); right = answers[qt]
      opts = page.query_selector_all('.opt')
      pick = [o for o in opts if (o.inner_text()==right) != (qn<2)][0]
      pick.click(); page.click('#nx')
    print('attempt1:', page.inner_text('.sc-result h3')); shot(page,'09-fail')
    page.click('#retry')
    for qn in range(10):
      qt = page.inner_text('.q'); right = answers[qt]
      [o for o in page.query_selector_all('.opt') if o.inner_text()==right][0].click()
      if qn==0: shot(page,'10-quiz-q')
      page.click('#nx')
    print('attempt2:', page.inner_text('.sc-result h3'))
    page.click('#cont'); page.wait_for_selector('#ans')
    page.fill('#ans', 'My input is the button I press on the vending machine and the output is the snack that comes out every single time I press it.')
    shot(page,'11-real')
    page.click('#send'); print(page.inner_text('.sc-center'))
    page.clock.run_for(20_000)
    page.click('#nextL'); print('next lesson:', page.inner_text('.sc-lesson-head h2'))
    page.click('#home'); page.wait_for_selector('#go'); shot(page,'12-home-after')
    # master view
    page.click('#out') if False else None
    page.evaluate("sessionStorage.setItem('sc-demo-role','master')"); page.reload(); page.wait_for_selector('.sc-tabs')
    shot(page,'13-master')
    print('ERRS SO FAR', errs[-5:]); print('master today text:', page.inner_text('.sc-stats').replace('\n',' | '))
    print('flags:', page.inner_text('.flags') if page.query_selector('.flags') else 'none')
    page.click('[data-t=lessons]'); page.click('[data-k=alg-1]'); shot(page,'14-master-lessons')
    print(page.inner_text('.lesson-detail')[:300])
    page.click('[data-t=settings]'); shot(page,'15-master-settings')
    # ipad
    page.set_viewport_size({'width':820,'height':1180}); page.click('[data-t=overview]'); shot(page,'16-ipad-master')
    page.evaluate("sessionStorage.setItem('sc-demo-role','student')"); page.reload(); page.wait_for_selector('#go'); shot(page,'17-ipad-home')
    # dark mode check
    page.emulate_media(color_scheme='dark'); shot(page,'18-ipad-dark')
    b.close()
finally:
  srv.terminate()
  print('\n'.join(errs) or 'no console errors')
