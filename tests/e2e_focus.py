# Demo-mode test of "Send to him" (a lesson the master sends is the student's only focus until done).
# Run on a demo copy (js/config.js firebase = null): python3 tests/e2e_focus.py
import os, subprocess, time
from playwright.sync_api import sync_playwright
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(HERE); SP = os.path.join(HERE, 'screens'); os.makedirs(SP, exist_ok=True)
srv = subprocess.Popen(['python3', '-m', 'http.server', '8771'], cwd=ROOT, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL); time.sleep(1)
fake = open(os.path.join(HERE, 'fake-youtube.js')).read()
URL = 'http://localhost:8771/index.html'; errs = []
def until(fn, n=50):
  for i in range(n):
    try:
      if fn(): return True
    except Exception: pass
    time.sleep(0.1)
  return False
try:
  with sync_playwright() as p:
    b = p.chromium.launch(); ctx = b.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=2, is_mobile=True, has_touch=True)
    ctx.route('https://www.youtube.com/iframe_api', lambda r: r.fulfill(status=200, content_type='text/javascript', body=fake))
    st = ctx.new_page(); st.on('pageerror', lambda e: errs.append('STUDENT ' + str(e)))
    st.goto(URL); st.click('[data-role=student]'); st.wait_for_selector('#go'); st.click('#go'); st.wait_for_selector('.sc-lesson-head')
    print('student starts on:', st.inner_text('.sc-lesson-head h2'))
    m = ctx.new_page(); m.on('pageerror', lambda e: errs.append('MASTER ' + str(e)))
    m.goto(URL); m.click('[data-role=master]'); m.wait_for_selector('.sc-tabs'); m.click('.sc-tabs [data-t=progress]')
    m.click('.unit-row[data-u]:has-text("From cells to organisms")'); m.click('.lesson-row:has-text("Plant cells vs. animal cells")')
    m.click('[data-send]'); print('master toast:', until(lambda: 'only focus' in m.inner_text('.cg-toast-msg')))
    print('student switched:', until(lambda: st.inner_text('.sc-lesson-head h2') == 'Plant cells vs. animal cells'), '|', st.inner_text('.cg-header-title').replace('\n', ' | '))
    print('notice:', st.inner_text('.sc-notice .cg-headline') if st.query_selector('.sc-notice') else 'none')
    st.screenshot(path=f'{SP}/40-sent-lesson.png')
    st.click('#home'); st.wait_for_selector('.sc-hero'); print('home hero:', st.inner_text('.sc-hero h3'), '|', st.inner_text('.sc-hero .cg-meta'))
    st.screenshot(path=f'{SP}/41-home-sent.png')
    m.click('.sc-tabs [data-t=today]'); m.wait_for_selector('#clearFocus'); print('master card:', m.inner_text('#clearFocus'))
    m.screenshot(path=f'{SP}/42-master-sent.png', full_page=True)
    # he finishes the lesson (written straight into the shared demo storage from a third page)
    x = ctx.new_page(); x.goto('http://localhost:8771/assets/fonts/OFL.txt')
    x.evaluate("""async () => { const c = (await import('/content/biology/index.js')).default; const l = c.units.flatMap(u => u.lessons).find(l => l.title === 'Plant cells vs. animal cells');
      const k = 'study-coach-demo-v1', d = JSON.parse(localStorage.getItem(k)); const s = d.students['demo-student']; s.lessons = s.lessons || {};
      s.lessons[l.key] = { videos: Object.fromEntries(l.videos.map(v => [v.id, { done: true }])), learnDone: true, quiz: { passed: true, best: 100, attempts: [] }, realLife: { answer: 'done', at: Date.now() } };
      localStorage.setItem(k, JSON.stringify(d)); }""")
    print('student back to normal:', until(lambda: 'sent you' not in st.inner_text('.sc-hero h3')), '|', st.inner_text('.sc-hero h3'))
    print('master sees it finished:', until(lambda: 'finished it' in m.inner_text('.sc-main')))
    print('errors:', errs or 'none')
    b.close()
finally: srv.terminate()
