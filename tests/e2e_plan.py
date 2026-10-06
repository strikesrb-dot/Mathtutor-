# Demo-mode test of the master's Study plan (Settings → Study plan: 1–6 blocks, Algebra or Biology each, quick presets, Undo).
# Run on a demo copy (js/config.js firebase = null): python3 tests/e2e_plan.py   (BROWSER=webkit for Safari's engine)
import os, subprocess, time
from playwright.sync_api import sync_playwright
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(HERE); SP = os.path.join(HERE, 'screens'); os.makedirs(SP, exist_ok=True)
srv = subprocess.Popen(['python3', '-m', 'http.server', '8773'], cwd=ROOT, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL); time.sleep(1)
fake = open(os.path.join(HERE, 'fake-youtube.js')).read()
URL = 'http://localhost:8773/index.html'; errs = []; fails = []
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
    st = ctx.new_page(); st.on('pageerror', lambda e: errs.append('STUDENT ' + str(e)))
    st.goto(URL); st.click('[data-role=student]'); st.wait_for_selector('#go')
    blocks = lambda: [t for t in st.eval_on_selector_all('.sc-step .cg-row-label', 'els => els.map(e => e.textContent)') if '· Block' in t]
    check('default plan: 2 Algebra then 2 Biology', blocks() == ['Algebra 1 · Block 1', 'Algebra 1 · Block 2', 'Biology · Block 1', 'Biology · Block 2'])
    m = ctx.new_page(); m.on('pageerror', lambda e: errs.append('MASTER ' + str(e)))
    m.goto(URL); m.click('[data-role=master]'); m.wait_for_selector('#gear'); m.click('#gear'); m.wait_for_selector('.sc-plan')
    rows = lambda: len(m.query_selector_all('.sc-plan-row'))
    check('Settings shows the plan card with 4 blocks and "Mix" lit', rows() == 4 and m.get_attribute('[data-preset=mix]', 'aria-pressed') == 'true')
    m.screenshot(path=f'{SP}/60-plan-card.png')

    m.click('[data-preset=algebra]')
    check('All math → toast', until(lambda: 'All 4 blocks are now Algebra' in m.inner_text('.cg-toast-msg')))
    check('his home follows live: 4 Algebra blocks', until(lambda: blocks() == [f'Algebra 1 · Block {i}' for i in range(1, 5)]))
    m.click('.sc-plan-del[data-i="3"]'); check('remove block 4 → 3 blocks', until(lambda: rows() == 3 and len(blocks()) == 3))
    m.click('.cg-toast .cg-btn'); check('Undo brings block 4 back', until(lambda: rows() == 4 and len(blocks()) == 4))
    m.click('#planAdd'); m.click('#planAdd')
    check('add two → 6 blocks, Add is disabled at 6', until(lambda: rows() == 6 and m.eval_on_selector('#planAdd', 'e => e.disabled') and len(blocks()) == 6))
    m.click('.sc-plan-seg[data-i="1"] [data-value=biology]')
    check('block 2 → Biology (toast)', until(lambda: 'Block 2 is now Biology' in m.inner_text('.cg-toast-msg')))
    check('his plan: Algebra, Biology, Algebra ×4', until(lambda: blocks() == ['Algebra 1 · Block 1', 'Biology · Block 1', 'Algebra 1 · Block 2', 'Algebra 1 · Block 3', 'Algebra 1 · Block 4', 'Algebra 1 · Block 5']))
    m.screenshot(path=f'{SP}/61-plan-card-custom.png')
    st.screenshot(path=f'{SP}/62-home-custom-plan.png', full_page=True)

    # back to the usual Mix; he starts Biology block 1, then his brother switches to all math mid-block
    m.click('[data-preset=mix]'); until(lambda: blocks()[:3] == ['Algebra 1 · Block 1', 'Algebra 1 · Block 2', 'Algebra 1 · Block 3'])
    x = ctx.new_page(); x.goto('http://localhost:8773/assets/fonts/OFL.txt')
    x.evaluate("""() => { const k = 'study-coach-demo-v1', d = JSON.parse(localStorage.getItem(k)); const s = d.students['demo-student'];
      const t = new Date(), p = (n) => String(n).padStart(2, '0'), key = `${t.getFullYear()}-${p(t.getMonth() + 1)}-${p(t.getDate())}`;
      s.days = s.days || {}; s.days[key] = Object.assign(s.days[key] || {}, { blocksDone: { A1: true, A2: true, A3: true }, breaks: { R1: true, R2: true, R3: true },
        games: { G1: { done: true }, G2: { done: true }, G3: { done: true } }, factsDone: { F1: true } });
      localStorage.setItem(k, JSON.stringify(d)); }""")
    st.reload(); st.wait_for_selector('#go'); st.click('#go'); st.wait_for_selector('.cg-header-title')
    check('he is on Biology block 1 of 3', until(lambda: 'Biology · Block 1 of 3' in st.inner_text('.cg-header-title')))
    subs = lambda: m.eval_on_selector_all('.sc-plan-row .cg-row-sub', 'els => els.map(e => e.textContent)')
    check('plan card shows his day: 3 Done, then the one he is on', until(lambda: subs()[:3] == ['Done'] * 3 and subs()[3] in ('Up next',) or subs()[3].startswith('On it now')))
    m.screenshot(path=f'{SP}/63-plan-card-midday.png')
    m.click('[data-preset=algebra]')
    check('plan changed under him → back home with a toast', until(lambda: st.query_selector('#go') and "changed today's plan" in st.inner_text('.cg-toast-msg')))
    st.click('#go'); check('next block is Algebra block 4 of 6', until(lambda: 'Algebra 1 · Block 4 of 6' in st.inner_text('.cg-header-title')))
    m.click('#back'); m.click('.sc-tabs [data-t=today]'); m.wait_for_selector('.sc-stats')
    check('master Today counts against the plan (3/6 blocks)', '3/6' in m.inner_text('.sc-stats'))
    m.click('#gear'); m.wait_for_selector('.sc-plan'); m.click('[data-preset=mix]')
    until(lambda: m.get_attribute('[data-preset=mix]', 'aria-pressed') == 'true')
    print('errors:', errs or 'none')
    b.close()
finally: srv.terminate()
print('all passed' if not fails and not errs else f'{len(fails)} failed')
