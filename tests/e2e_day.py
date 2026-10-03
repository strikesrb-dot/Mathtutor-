# Demo-mode browser test (Playwright + Chromium). Run: python3 tests/e2e_day.py
# Uses a fake YouTube player and a fake clock, so it runs in a few minutes.
import subprocess, time
from playwright.sync_api import sync_playwright
import os
HERE=os.path.dirname(os.path.abspath(__file__)); ROOT=os.path.dirname(HERE); SP=os.path.join(HERE,'screens'); os.makedirs(SP, exist_ok=True)
srv = subprocess.Popen(['python3','-m','http.server','8766'], cwd=ROOT, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL); time.sleep(1)
fake=open(os.path.join(HERE,'fake-youtube.js')).read(); errs=[]
def shot(page,n): page.screenshot(path=f'{SP}/{n}.png')
def tick(page, secs, play=True):
  for _ in range(secs):
    page.clock.run_for(1000)
    a=page.query_selector('.attn')
    if a: a.click()
    if page.query_selector('.flash'): page.click('.flash button')
    if play and page.evaluate('window.__players && window.__players.length') : page.evaluate('const p=window.__players.at(-1); if(p.getPlayerState()!==1 && p.getPlayerState()!==0) p.playVideo()')
try:
  with sync_playwright() as p:
    b=p.chromium.launch(); ctx=b.new_context(viewport={'width':390,'height':844}, device_scale_factor=2, is_mobile=True, has_touch=True)
    page=ctx.new_page(); page.on('pageerror', lambda e: errs.append(str(e)))
    page.route('https://www.youtube.com/iframe_api', lambda r: r.fulfill(status=200, content_type='text/javascript', body=fake))
    page.clock.install(); page.add_init_script('window.__ytDur = 3000;')
    page.goto('http://localhost:8766/index.html'); page.click('[data-role=master]'); page.click('[data-t=settings]')
    page.fill('#bm','10'); page.click('#saveRules'); page.click('#toStudent'); page.wait_for_selector('#go')
    page.click('#go'); page.wait_for_selector('.video-frame'); page.clock.run_for(500)
    tick(page, 610)
    print('banner visible:', page.is_visible('#blockDone'), page.inner_text('#clockT'))
    shot(page,'20-block-done')
    page.click('#takeBreak'); page.wait_for_selector('.break-clock'); shot(page,'21-break')
    page.click('#skip'); page.wait_for_selector('.lesson-head'); print('A2 lesson:', page.inner_text('.lesson-head h1'))
    page.clock.run_for(500); tick(page, 610); page.evaluate('window.__ytDur=100'); page.click('#takeBreak')
    page.wait_for_selector('.fact-card'); print('fact:', page.inner_text('.fact-card h1')); page.clock.run_for(500)
    tick(page, 100); shot(page,'22-fact')
    print('fact done enabled:', not page.eval_on_selector('#done','e=>e.disabled'))
    page.click('#done'); page.wait_for_selector('.break-clock'); page.click('#skip')
    page.wait_for_selector('.lesson-head'); print('B1:', page.inner_text('.bt-mid'), '|', page.inner_text('.lesson-head h1')); shot(page,'23-bio')
    page.click('#home'); page.wait_for_selector('.steps'); shot(page,'24-home-progress')
    print(page.inner_text('.steps').replace('\n',' / '))
    b.close()
finally:
  srv.terminate(); print('ERRORS:', errs or 'none')
