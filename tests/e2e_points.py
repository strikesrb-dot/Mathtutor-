# Demo-mode test of points (owner request 2026-10-05): a perfect first-try quiz (+25 +10), a finished lesson (+100, +50 on a
# weekday), a full day (+25, +200 focus if he never left), his home card, and the master's card (owed, Mark paid + Undo, add points).
# Run on a demo copy (js/config.js firebase = null): python3 tests/e2e_points.py   (BROWSER=webkit for Safari's engine)
import os, subprocess, time, json, datetime
from playwright.sync_api import sync_playwright
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(HERE); SP = os.path.join(HERE, 'screens'); os.makedirs(SP, exist_ok=True)
srv = subprocess.Popen(['python3', '-m', 'http.server', '8775'], cwd=ROOT, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL); time.sleep(1)
fake = open(os.path.join(HERE, 'fake-youtube.js')).read()
URL = 'http://localhost:8775/index.html'; errs = []; fails = []
K = 'study-coach-demo-v1'
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
try:
  with sync_playwright() as p:
    b = getattr(p, os.environ.get('BROWSER', 'chromium')).launch(); ctx = b.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=2, is_mobile=True, has_touch=True)
    ctx.route('https://www.youtube.com/iframe_api', lambda r: r.fulfill(status=200, content_type='text/javascript', body=fake))
    ctx.route('**/api/breakdown', lambda r: r.fulfill(status=200, content_type='application/json', body='{"analysis":"x"}'))
    st = ctx.new_page(); st.on('pageerror', lambda e: errs.append('STUDENT ' + str(e)))
    st.goto(URL); st.click('[data-role=student]'); st.wait_for_selector('#go')
    x = ctx.new_page(); x.goto('http://localhost:8775/assets/fonts/OFL.txt')
    until(lambda: x.evaluate(f"!!localStorage.getItem('{K}')"), 100)
    ledger = lambda: x.evaluate(f"(() => JSON.parse(localStorage.getItem('{K}')).students['demo-student'].points || {{}})()")
    weekday = x.evaluate("![6, 0].includes(new Date().getDay())")
    lessonKey = x.evaluate(f"""async () => {{ const c = (await import('/content/algebra/index.js')).default; const l = c.units[0].lessons[0];
      const d = JSON.parse(localStorage.getItem('{K}')); const s = d.students['demo-student']; s.lessons = s.lessons || {{}};
      s.lessons[l.key] = Object.assign(s.lessons[l.key] || {{}}, {{ videos: Object.fromEntries(l.videos.map(v => [v.id, {{ done: true, max: 500 }}])), learnDone: true }});
      localStorage.setItem('{K}', JSON.stringify(d)); return l.key; }}""")
    check('his home shows the points card at 0', until(lambda: st.query_selector('.sc-points') and st.inner_text('.sc-points-big') == '0'))
    st.reload(); st.wait_for_selector('#go'); st.click('#go'); st.wait_for_selector('#start')
    st.evaluate("document.getElementById('start').scrollIntoView({block:'center'})"); st.click('#start'); st.wait_for_selector('.opt')
    # a perfect quiz on the first try
    for i in range(10):
      ans = x.evaluate(f"(() => JSON.parse(localStorage.getItem('{K}')).students['demo-student'].lessons['{lessonKey}'].quizRun.qs[{i}].c[0])()")
      [o for o in st.query_selector_all('.opt') if o.inner_text().strip() == ans][0].click()
      st.wait_for_selector('#nx'); st.click('#nx')
      if i < 9: until(lambda: st.query_selector('.opt:not([disabled])'))
    st.wait_for_selector('.sc-result')
    check('quiz: +25 first try, +10 perfect (toast)', until(lambda: '+35 points' in st.inner_text('.cg-toast-msg')) and ledger().get(f'quiz-{lessonKey}', {}).get('pts') == 25
      and ledger().get(f'perfect-{lessonKey}', {}).get('pts') == 10)
    # real-life answer → lesson finished
    st.click('#cont'); st.wait_for_selector('#ans')
    st.click('#ans'); st.keyboard.type('Algebra helps me split money fairly with my friends when we buy food together and share the cost of things evenly every time.')
    until(lambda: not st.eval_on_selector('#send', 'e => e.disabled')); st.click('#send')
    want = 150 if weekday else 100
    check(f'lesson finished: +100{" and +50 weekday session" if weekday else ""}', until(lambda: f'+{want} points' in st.inner_text('.cg-toast-msg')) and ledger().get(f'lesson-{lessonKey}', {}).get('pts') == 100
      and (('weekday-' + datetime.date.today().isoformat()) in ledger()) == weekday)
    # a full day: a 1-block plan with that block and the fun video done
    today = x.evaluate("(() => { const t = new Date(), p = (n) => String(n).padStart(2, '0'); return `${t.getFullYear()}-${p(t.getMonth() + 1)}-${p(t.getDate())}`; })()")
    x.evaluate(f"""() => {{ const d = JSON.parse(localStorage.getItem('{K}')); d.settings = Object.assign(d.settings || {{}}, {{ plan: ['algebra'] }});
      const s = d.students['demo-student']; s.days = s.days || {{}}; s.days['{today}'] = Object.assign(s.days['{today}'] || {{}}, {{ blocksDone: {{ A1: true }}, factsDone: {{ F1: true }} }});
      localStorage.setItem('{K}', JSON.stringify(d)); }}""")
    st.click('#home') if st.query_selector('#home') else None
    st.reload(); st.wait_for_selector('.sc-hero')
    left = x.evaluate(f"(() => ((JSON.parse(localStorage.getItem('{K}')).students['demo-student'].days['{today}'] || {{}}).flags || {{}}).leftApp || 0)()")
    check('full day: +25' + (' and +200 focus day (never left the app)' if not left else ' (he left the app, so no focus bonus)'),
      until(lambda: f'day-{today}' in ledger()) and ((f'focus-{today}' in ledger()) == (not left)))
    total = sum(v['pts'] for v in ledger().values())
    check('his card: points and dollars match the ledger, level and badges show', until(lambda: st.inner_text('.sc-points-big') == f'{total:,}' and f'${total / 100:.2f}' in st.inner_text('.sc-points')))
    st.locator('.sc-points').scroll_into_view_if_needed(); time.sleep(0.5); st.screenshot(path=f'{SP}/80-points-home.png')
    st.click('[data-points-how]'); st.wait_for_selector('.sc-points-sheet.is-open'); time.sleep(0.5)
    check('"How to earn" lists the rules and badges', 'Focus day' in st.inner_text('.sc-points-sheet') and bool(st.query_selector('.sc-badges .cg-chip.is-on')))
    st.screenshot(path=f'{SP}/81-points-how.png'); st.click('.sc-points-sheet [data-cg-close]'); time.sleep(0.4)
    # master: owed, Mark paid + Undo, add points
    m = ctx.new_page(); m.on('pageerror', lambda e: errs.append('MASTER ' + str(e)))
    m.goto(URL); m.click('[data-role=master]'); m.wait_for_selector('#ptsPaid')
    check('master card shows what he is owed', m.inner_text('.sc-points-big') == f'${total / 100:.2f}')
    m.locator('.sc-points').first.scroll_into_view_if_needed(); time.sleep(0.4); m.screenshot(path=f'{SP}/82-points-master.png')
    m.click('#ptsPaid'); check('Mark paid → owed $0.00', until(lambda: m.inner_text('.sc-points-big') == '$0.00') and 'Paid him' in m.inner_text('.cg-group:below(.sc-points)'))
    m.click('.cg-toast .cg-btn'); check('Undo → owed again', until(lambda: m.inner_text('.sc-points-big') == f'${total / 100:.2f}'))
    m.click('#ptsAdjOpen'); m.fill('#ptsAdj [name=n]', '40'); m.fill('#ptsAdj [name=why]', 'Great effort today'); m.click('#ptsAdj [type=submit]')
    check('adding 40 points works and he sees it', until(lambda: m.inner_text('.sc-points-big') == f'${(total + 40) / 100:.2f}') and until(lambda: st.inner_text('.sc-points-big') == f'{total + 40:,}'))
    print('errors:', errs or 'none')
    b.close()
finally: srv.terminate()
print('all passed' if not fails and not errs else f'{len(fails)} failed')
