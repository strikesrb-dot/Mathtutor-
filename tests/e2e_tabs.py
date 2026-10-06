# Demo-mode test of the tabs (owner request 2026-10-05: "make a tab for points and make the UI organized").
# His home: Today · Courses · Points · Chat. Master: Today · Progress (Lessons · Missed · History) · Points · Chat, Settings behind the gear.
# Also checks that new data never wipes a half-typed message (his Chat tab) or the master's half-typed points.
# Run on a demo copy (js/config.js firebase = null): python3 tests/e2e_tabs.py   (BROWSER=webkit for Safari's engine)
import os, subprocess, time
from playwright.sync_api import sync_playwright
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(HERE); SP = os.path.join(HERE, 'screens'); os.makedirs(SP, exist_ok=True)
srv = subprocess.Popen(['python3', '-m', 'http.server', '8776'], cwd=ROOT, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL); time.sleep(1)
fake = open(os.path.join(HERE, 'fake-youtube.js')).read()
URL = 'http://localhost:8776/index.html'; errs = []; fails = []
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
tabs = lambda pg: pg.eval_on_selector_all('.sc-tabs > button', 'bs => bs.map(b => b.textContent.trim())')
try:
  with sync_playwright() as p:
    b = getattr(p, os.environ.get('BROWSER', 'chromium')).launch(); ctx = b.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=2, is_mobile=True, has_touch=True)
    ctx.route('https://www.youtube.com/iframe_api', lambda r: r.fulfill(status=200, content_type='text/javascript', body=fake))
    st = ctx.new_page(); st.on('pageerror', lambda e: errs.append('STUDENT ' + str(e)))
    st.goto(URL); st.click('[data-role=student]'); st.wait_for_selector('#go')
    # ── his home ──
    check('his tabs: Today · Courses · Points · Chat', tabs(st) == ['Today', 'Courses', 'Points', 'Chat'])
    check('Today: hero, points row and plan, no courses or messages list', bool(st.query_selector('.sc-hero')) and bool(st.query_selector('.sc-points-row'))
      and bool(st.query_selector('.sc-plan')) and not st.query_selector('.sc-course') and 'Your courses' not in st.inner_text('#hbody'))
    check('Today: breaks and games are folded into the block rows', 'then a ' in st.inner_text('.sc-plan') and 'Break ·' not in st.inner_text('.sc-plan'))
    st.screenshot(path=f'{SP}/90-his-today.png')
    st.click('.sc-tabs [data-t=courses]'); st.wait_for_selector('.sc-course')
    check('Courses: both courses with units, his lesson marked "Now"', 'Algebra 1 —' in st.inner_text('#hbody') and 'Biology —' in st.inner_text('#hbody') and 'Now: ' in st.inner_text('.sc-course'))
    n = len(st.query_selector_all('.sc-course .unit-row[aria-expanded=true]')); st.click('.sc-course .unit-row[aria-expanded=false]')
    check('Courses: a unit opens and stays on Courses', until(lambda: len(st.query_selector_all('.sc-course .unit-row[aria-expanded=true]')) == n + 1))
    st.screenshot(path=f'{SP}/91-his-courses.png')
    # ── master ──
    m = ctx.new_page(); m.on('pageerror', lambda e: errs.append('MASTER ' + str(e)))
    m.goto(URL); m.click('[data-role=master]'); m.wait_for_selector('.sc-tabs')
    check('master tabs: Today · Progress · Points · Chat, plus the gear', tabs(m) == ['Today', 'Progress', 'Points', 'Chat'] and bool(m.query_selector('#gear')))
    check('master Today: live card, stats, shortcuts; no points card or lesson list', bool(m.query_selector('#liveCard')) and bool(m.query_selector('.sc-stats'))
      and bool(m.query_selector('.sc-links')) and not m.query_selector('#ptsPaid') and not m.query_selector('.unit-row'))
    m.screenshot(path=f'{SP}/92-master-today.png')
    m.click('#gear'); m.wait_for_selector('#back')
    check('gear opens Settings (no tabs, plan card)', 'Settings' in m.inner_text('.cg-header-title') and not m.query_selector('.sc-tabs') and bool(m.query_selector('#planCard .sc-plan-row')))
    m.click('#back'); m.wait_for_selector('.sc-tabs'); check('back returns to Today', m.get_attribute('.sc-tabs [data-t=today]', 'aria-pressed') == 'true')
    m.click('.sc-tabs [data-t=progress]'); m.wait_for_selector('.sc-subtabs')
    check('Progress opens on Lessons', bool(m.query_selector('.unit-row')) and m.get_attribute('.sc-subtabs [data-p=lessons]', 'aria-pressed') == 'true')
    m.screenshot(path=f'{SP}/93-master-progress.png')
    m.click('.sc-subtabs [data-p=missed]'); check('Progress → Missed', until(lambda: 'Missed quiz questions' in m.inner_text('#pbody')))
    m.click('.sc-subtabs [data-p=history]'); check('Progress → History: log export, weekend, past days', until(lambda: bool(m.query_selector('#logBtn'))) and 'This weekend' in m.inner_text('#pbody'))
    m.click('.sc-tabs [data-t=points]'); m.wait_for_selector('#ptsPaid'); m.screenshot(path=f'{SP}/94-master-points.png')
    # the master's half-typed points survive new data
    m.click('#ptsAdjOpen'); m.fill('#ptsAdj [name=n]', '25'); m.focus('#ptsAdj [name=n]')
    x = ctx.new_page(); x.goto('http://localhost:8776/assets/fonts/OFL-scheherazade-new.txt')
    x.evaluate(f"""() => {{ const d = JSON.parse(localStorage.getItem('{K}')); const s = d.students['demo-student']; s.points = s.points || {{}};
      s.points['adj-1'] = {{ pts: 10, kind: 'adjust', label: 'From the test', at: Date.now() }}; localStorage.setItem('{K}', JSON.stringify(d)); }}""")
    time.sleep(0.8)
    check('new points while typing: the form keeps "25"', m.input_value('#ptsAdj [name=n]') == '25' and m.is_visible('#ptsAdj'))
    m.press('#ptsAdj [name=n]', 'Enter')
    check('saved: form closes and the total shows both', until(lambda: not m.is_visible('#ptsAdj') and m.inner_text('.sc-points-big') == '$0.35'))
    # ── chat between the tabs ──
    m.click('.sc-tabs [data-t=chat]'); m.fill('.sc-composer input', 'Salam Champ'); m.click('.sc-composer button[type=submit]')
    check('his Chat tab shows 1 unread', until(lambda: 'Chat · 1' in tabs(st)))
    st.click('.sc-tabs [data-t=chat]'); st.wait_for_selector('#hbody .sc-composer')
    check('his Chat tab: the message shows and counts as read', until(lambda: 'Salam Champ' in st.inner_text('#hbody .sc-msgs') and tabs(st)[3] == 'Chat'))
    st.fill('#hbody .sc-composer input', 'Wa alaykum salam')
    m.fill('.sc-composer input', 'Ready for block 1?'); m.click('.sc-composer button[type=submit]')
    check('a new message shows in his tab, no toast', until(lambda: 'Ready for block 1?' in st.inner_text('#hbody .sc-msgs'))
      and 'Ready for block 1?' not in (st.inner_text('.cg-toast-msg') if st.query_selector('.cg-toast-msg') else ''))
    x.evaluate(f"""() => {{ const d = JSON.parse(localStorage.getItem('{K}')); d.students['demo-student'].points['adj-2'] = {{ pts: 5, kind: 'adjust', label: 'Test', at: Date.now() }};
      localStorage.setItem('{K}', JSON.stringify(d)); }}""")
    time.sleep(0.8)
    check('his half-typed message survives new data', st.input_value('#hbody .sc-composer input') == 'Wa alaykum salam')
    st.press('#hbody .sc-composer input', 'Enter')
    check('master gets his reply', until(lambda: 'Wa alaykum salam' in m.inner_text('.sc-chat-box')))
    st.screenshot(path=f'{SP}/95-his-chat.png')
    st.click('.sc-tabs [data-t=points]'); st.wait_for_selector('.sc-points-big')
    check('his Points tab shows the new points (40)', until(lambda: st.inner_text('.sc-points-big') == '40'))
    st.screenshot(path=f'{SP}/96-his-points.png')
    print('errors:', errs or 'none')
    b.close()
finally: srv.terminate()
print('all passed' if not fails and not errs else f'{len(fails)} failed')
