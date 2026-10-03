/* calm-glass.js — Calm Glass, v1. Small optional helpers; no dependencies; plain ES5.
   The page still works without this file: the CSS draws every component, the chosen segment
   draws its own pill, and switches are real checkboxes. This file adds:
     · CalmGlass.theme('auto' | 'light' | 'dark')   remembered on this device
     · CalmGlass.accent('clay' | 'green' | 'blue' | 'black' | 'grey' | '#hex' | {day, night})
     · segmented controls with a sliding thumb      <div class="cg-seg"> <button aria-pressed> …
     · sheets: CalmGlass.open('#id') / close()      Escape closes, focus returns to the opener
     · CalmGlass.toast('Deleted', { undo: fn })     a toast with Undo
     · steppers                                     <div class="cg-stepper" data-min data-max data-step>
   Markup hooks (no script of your own needed):
     data-cg-theme="auto|light|dark"   data-cg-accent="green"   data-cg-open="#sheet"   data-cg-close
     data-cg-toast="Message"           data-cg-step="-1|1" (inside a .cg-stepper)
   Put the <script> in <head> (no defer) so a remembered theme is applied before the first paint. */
(function (w, d) {
  'use strict';
  var root = d.documentElement;
  var KEY_THEME = 'cg-theme', KEY_ACCENT = 'cg-accent';
  var PRESETS = ['clay', 'green', 'blue', 'black', 'grey'];
  var stack = [];        // open sheets, last on top
  var toastEl = null, toastTimer = 0;

  function load(k) { try { return w.localStorage.getItem(k); } catch (e) { return null; } }
  function save(k, v) { try { if (v == null) w.localStorage.removeItem(k); else w.localStorage.setItem(k, v); } catch (e) { /* private mode: fine */ } }
  function emit(el, name, detail) {
    var ev;
    try { ev = new CustomEvent(name, { bubbles: true, detail: detail }); }
    catch (e) { ev = d.createEvent('CustomEvent'); ev.initCustomEvent(name, true, false, detail); }
    el.dispatchEvent(ev);
  }
  function each(sel, fn, scope) { var l = (scope || d).querySelectorAll(sel); for (var i = 0; i < l.length; i++) fn(l[i], i); }
  function closest(el, sel) {
    while (el && el.nodeType === 1) { if (matches(el, sel)) return el; el = el.parentNode; }
    return null;
  }
  function matches(el, sel) { var f = el.matches || el.webkitMatchesSelector || el.msMatchesSelector; return f ? f.call(el, sel) : false; }

  /* ── theme ── */
  function theme(mode, opts) {
    if (mode === undefined) return root.getAttribute('data-theme') || 'auto';
    if (mode !== 'light' && mode !== 'dark') mode = 'auto';
    if (mode === 'auto') root.removeAttribute('data-theme'); else root.setAttribute('data-theme', mode);
    if (!opts || opts.save !== false) save(KEY_THEME, mode === 'auto' ? null : mode);
    sync();
    emit(root, 'cg-theme', { theme: mode, dark: isDark() });
    return mode;
  }
  function isDark() {
    var t = root.getAttribute('data-theme');
    if (t) return t === 'dark';
    return !!(w.matchMedia && w.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  /* ── accent ── */
  function accent(v, opts) {
    if (v === undefined) {
      if (root.style.getPropertyValue('--cg-accent-day')) return 'custom';
      return root.getAttribute('data-accent') || 'clay';
    }
    root.style.removeProperty('--cg-accent-day');
    root.style.removeProperty('--cg-accent-night');
    var stored;
    if (!v || v === 'clay') { root.removeAttribute('data-accent'); v = 'clay'; stored = null; }
    else if (PRESETS.indexOf(v) >= 0) { root.setAttribute('data-accent', v); stored = v; }
    else {
      var day = v, night = v;
      if (typeof v === 'object') { day = v.day; night = v.night || v.day; }
      else if (String(v).indexOf('|') > 0) { day = v.split('|')[0]; night = v.split('|')[1]; }
      root.removeAttribute('data-accent');
      root.style.setProperty('--cg-accent-day', day);
      root.style.setProperty('--cg-accent-night', night);
      stored = day + '|' + night; v = 'custom';
    }
    if (!opts || opts.save !== false) save(KEY_ACCENT, stored);
    sync();
    emit(root, 'cg-accent', { accent: v });
    return v;
  }

  /* ── segmented control ── */
  function segChosen(seg) {
    var bs = seg.querySelectorAll(':scope > button'), i;
    for (i = 0; i < bs.length; i++) if (bs[i].getAttribute('aria-pressed') === 'true') return bs[i];
    return null;
  }
  function segPlace(seg, instant) {
    var thumb = seg.querySelector(':scope > .cg-seg-thumb');
    if (!thumb) {
      thumb = d.createElement('span'); thumb.className = 'cg-seg-thumb'; thumb.setAttribute('aria-hidden', 'true');
      seg.insertBefore(thumb, seg.firstChild); instant = true;
    }
    var b = segChosen(seg);
    if (!b || !b.offsetWidth) { thumb.style.opacity = b ? '' : '0'; return; }
    var inset = parseFloat(w.getComputedStyle(thumb).top) || 0;
    if (instant) seg.classList.add('is-settling');
    seg.style.setProperty('--cg-seg-x', (b.offsetLeft + inset) + 'px');
    seg.style.setProperty('--cg-seg-w', Math.max(0, b.offsetWidth - inset * 2) + 'px');
    thumb.style.opacity = '';
    seg.classList.add('is-live');
    if (instant) { void seg.offsetWidth; seg.classList.remove('is-settling'); }
  }
  function segSelect(seg, btn) {
    each(':scope > button', function (b) { b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); }, seg);
    segPlace(seg);
    emit(seg, 'cg-change', { value: btn.getAttribute('data-value') || btn.getAttribute('data-cg-theme') || btn.textContent.trim() });
  }
  function segAll(instant) { each('.cg-seg', function (s) { segPlace(s, instant); }); }

  /* keep controls that show the theme or the accent in step */
  function sync() {
    var t = theme(), a = accent();
    each('[data-cg-theme]', function (el) {
      var on = el.getAttribute('data-cg-theme') === t;
      if (el.getAttribute('role') === 'radio' || el.hasAttribute('aria-checked')) el.setAttribute('aria-checked', on ? 'true' : 'false');
      else el.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    each('[data-cg-accent]', function (el) {
      var on = el.getAttribute('data-cg-accent') === a;
      if (el.getAttribute('role') === 'radio' || el.hasAttribute('aria-checked')) el.setAttribute('aria-checked', on ? 'true' : 'false');
      else el.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    segAll();
  }

  /* ── sheets ── */
  var FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
  function sheetOf(x) { return typeof x === 'string' ? d.querySelector(x) : x; }
  function scrim() {
    var s = d.querySelector('.cg-scrim[data-cg-auto]');
    if (!s) { s = d.createElement('div'); s.className = 'cg-scrim'; s.setAttribute('data-cg-auto', ''); s.setAttribute('data-cg-close', ''); s.setAttribute('aria-hidden', 'true'); d.body.appendChild(s); }
    return s;
  }
  function open(x, opener) {
    var sh = sheetOf(x); if (!sh || sh.classList.contains('is-open')) return;
    var sc = scrim();
    sh.__cgOpener = opener || d.activeElement;
    if (!sh.hasAttribute('tabindex')) sh.setAttribute('tabindex', '-1');
    sh.removeAttribute('hidden'); sh.setAttribute('aria-hidden', 'false');
    stack.push(sh);
    sc.style.zIndex = '';
    void sh.offsetWidth;
    sh.classList.add('is-open'); sc.classList.add('is-open');
    d.body.classList.add('cg-locked');
    var first = sh.querySelector('[autofocus]') || sh;
    setTimeout(function () { try { first.focus({ preventScroll: true }); } catch (e) { first.focus(); } segAll(true); }, 30);
    emit(sh, 'cg-open', {});
  }
  function close(x) {
    var sh = x ? sheetOf(x) : stack[stack.length - 1]; if (!sh) return;
    var i = stack.indexOf(sh); if (i >= 0) stack.splice(i, 1);
    sh.classList.remove('is-open'); sh.setAttribute('aria-hidden', 'true');
    if (!stack.length) { scrim().classList.remove('is-open'); d.body.classList.remove('cg-locked'); }
    var back = sh.__cgOpener; sh.__cgOpener = null;
    if (back && back.focus && d.body.contains(back)) { try { back.focus({ preventScroll: true }); } catch (e) { back.focus(); } }
    emit(sh, 'cg-close', {});
  }
  function trap(e) {
    var sh = stack[stack.length - 1]; if (!sh) return;
    var f = sh.querySelectorAll(FOCUSABLE), list = [], i;
    for (i = 0; i < f.length; i++) if (f[i].offsetWidth || f[i].offsetHeight) list.push(f[i]);
    if (!list.length) { e.preventDefault(); sh.focus(); return; }
    var a = list[0], z = list[list.length - 1];
    if (e.shiftKey && (d.activeElement === a || d.activeElement === sh)) { e.preventDefault(); z.focus(); }
    else if (!e.shiftKey && d.activeElement === z) { e.preventDefault(); a.focus(); }
    else if (!sh.contains(d.activeElement)) { e.preventDefault(); a.focus(); }
  }

  /* ── toast with Undo ── */
  function toast(msg, opts) {
    opts = opts || {};
    if (!toastEl) {
      toastEl = d.createElement('div'); toastEl.className = 'cg-toast'; toastEl.setAttribute('role', 'status'); toastEl.setAttribute('aria-live', 'polite');
      toastEl.innerHTML = '<span class="cg-toast-msg"></span><button type="button" class="cg-btn cg-btn-plain"></button>';
      d.body.appendChild(toastEl);
    }
    var m = toastEl.firstChild, b = toastEl.lastChild;
    m.textContent = msg;
    if (typeof opts.undo === 'function') {
      b.hidden = false; b.textContent = opts.label || 'Undo';
      b.onclick = function () { hideToast(); opts.undo(); };
    } else { b.hidden = true; b.onclick = null; }
    clearTimeout(toastTimer);
    toastEl.classList.remove('is-on'); void toastEl.offsetWidth; toastEl.classList.add('is-on');
    toastTimer = setTimeout(hideToast, opts.time || (opts.undo ? 6000 : 3500));
    return { hide: hideToast };
  }
  function hideToast() { clearTimeout(toastTimer); if (toastEl) toastEl.classList.remove('is-on'); }

  /* ── stepper ── */
  function step(st, dir) {
    var out = st.querySelector('.cg-stepper-value');
    var min = parseFloat(st.getAttribute('data-min')), max = parseFloat(st.getAttribute('data-max'));
    var by = parseFloat(st.getAttribute('data-step')) || 1, unit = st.getAttribute('data-unit') || '';
    var v = parseFloat(st.getAttribute('data-value') || (out && out.textContent) || 0) + dir * by;
    if (!isNaN(min)) v = Math.max(min, v);
    if (!isNaN(max)) v = Math.min(max, v);
    v = Math.round(v * 1000) / 1000;
    st.setAttribute('data-value', v);
    if (out) out.textContent = v + unit;
    stepBounds(st);
    emit(st, 'cg-change', { value: v });
  }
  function stepBounds(st) {
    var v = parseFloat(st.getAttribute('data-value')), min = parseFloat(st.getAttribute('data-min')), max = parseFloat(st.getAttribute('data-max'));
    if (isNaN(v)) return;
    each('[data-cg-step]', function (b) {
      var dir = parseFloat(b.getAttribute('data-cg-step'));
      b.disabled = (dir < 0 && !isNaN(min) && v <= min) || (dir > 0 && !isNaN(max) && v >= max);
    }, st);
  }

  /* ── wiring ── */
  function onClick(e) {
    var t = e.target, el;
    if ((el = closest(t, '[data-cg-theme]'))) { theme(el.getAttribute('data-cg-theme')); }
    if ((el = closest(t, '[data-cg-accent]'))) { accent(el.getAttribute('data-cg-accent')); }
    if ((el = closest(t, '.cg-seg > button')) && !el.disabled) { segSelect(el.parentNode, el); }
    if ((el = closest(t, '.cg-stepper [data-cg-step]')) && !el.disabled) { step(closest(el, '.cg-stepper'), parseFloat(el.getAttribute('data-cg-step')) || 1); }
    if ((el = closest(t, '[data-cg-open]'))) { e.preventDefault(); open(el.getAttribute('data-cg-open'), el); }
    if ((el = closest(t, '[data-cg-close]'))) { e.preventDefault(); var v = el.getAttribute('data-cg-close'); close(v || closest(el, '.cg-sheet') || undefined); }
    if ((el = closest(t, '[data-cg-toast]'))) { toast(el.getAttribute('data-cg-toast')); }
  }
  function onKey(e) {
    if (!stack.length) return;
    if (e.key === 'Escape' || e.key === 'Esc') { e.preventDefault(); close(); }
    else if (e.key === 'Tab') trap(e);
  }
  function init() {
    d.addEventListener('click', onClick);
    d.addEventListener('keydown', onKey);
    each('.cg-sheet:not(.is-inline):not(.is-open)', function (s) { s.setAttribute('aria-hidden', 'true'); });
    each('.cg-stepper', stepBounds);
    sync(); segAll(true);
    var rt = 0;
    w.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { segAll(true); }, 60); });
    if (w.matchMedia) {
      var mq = w.matchMedia('(prefers-color-scheme: dark)');
      var fn = function () { sync(); emit(root, 'cg-theme', { theme: theme(), dark: isDark() }); };
      if (mq.addEventListener) mq.addEventListener('change', fn); else if (mq.addListener) mq.addListener(fn);
    }
    if (d.fonts && d.fonts.ready) d.fonts.ready.then(function () { segAll(true); });
  }

  /* apply what this device remembers, before the first paint */
  (function restore() {
    var t = load(KEY_THEME); if (t === 'light' || t === 'dark') root.setAttribute('data-theme', t);
    var a = load(KEY_ACCENT);
    if (a && PRESETS.indexOf(a) >= 0) root.setAttribute('data-accent', a);
    else if (a && a.indexOf('|') > 0) { root.style.setProperty('--cg-accent-day', a.split('|')[0]); root.style.setProperty('--cg-accent-night', a.split('|')[1]); }
  })();

  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', init); else init();

  w.CalmGlass = { version: '1', theme: theme, isDark: isDark, accent: accent, presets: PRESETS.slice(),
    open: open, close: close, toast: toast, hideToast: hideToast, refresh: function () { segAll(true); } };
})(window, document);
