#!/usr/bin/env node
/* check-design.mjs — Calm Glass drift check, v1. Node 16+, no dependencies.

   Usage:   node check-design.mjs src/                 (a folder: scans it recursively)
            node check-design.mjs a.css b.html c.js    (files)
            node check-design.mjs src/ --allow path/to/calm-glass.allow.json
            node check-design.mjs src/ --json          (findings as JSON)

   It reads .css .scss .html .htm .js .jsx .ts .tsx .vue .svelte files and flags:
     colour   a literal colour (#hex, rgb(), hsl(), hwb(), lab(), oklch(), color(), or a named colour such as white)
              — use a --cg-* token instead
     corner   a border-radius that is not on the scale 8 / 14 / 26 / 32 / capsule (999px) / circle (50%) / 0
     type     a font size under 16, or any literal font size that is not a token
     spacing  a gap or margin literal under 12px (best effort: 12 is the least space between two controls;
              steps inside ONE control use the --cg-in-* tokens)
   What lies between the markers  @cg-tokens-start  and  @cg-tokens-end  (the token block) is skipped.
   Exceptions go in calm-glass.allow.json (looked for in the current folder, then next to this script):
     { "allow": [ { "rule": "colour", "file": "src/legacy/map.css", "match": "#0a84ff", "why": "the map vendor's brand blue" } ] }
   "rule" and "file" are required ("file" matches a path ending, or a glob with *), so is "why".
   "match" (optional) narrows it to findings whose text contains it.
   Exit code: 0 clean · 1 findings · 2 bad usage or a bad allow file. */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const EXT = new Set(['.css', '.scss', '.html', '.htm', '.js', '.jsx', '.ts', '.tsx', '.vue', '.svelte']);
const SKIP_DIR = new Set(['node_modules', '.git', 'dist', 'build', 'vendor', '.next', 'coverage']);
const RADII_OK = new Set(['0', '0px', '8px', '14px', '26px', '32px', '999px', '9999px', '50%']);
const NAMED = ['white', 'black', 'red', 'green', 'blue', 'gray', 'grey', 'silver', 'yellow', 'orange', 'purple', 'pink',
  'brown', 'navy', 'teal', 'maroon', 'olive', 'lime', 'aqua', 'fuchsia', 'cyan', 'magenta', 'gold', 'beige', 'ivory', 'tan', 'coral', 'salmon', 'crimson', 'indigo', 'violet'];
const COLOUR_PROPS = /^(color|background(-color|-image)?|background|border(-top|-right|-bottom|-left|-block|-inline)?(-color)?|outline(-color)?|fill|stroke|box-shadow|text-shadow|caret-color|accent-color|column-rule(-color)?|text-decoration(-color)?|stop-color|flood-color|lighting-color|--[\w-]+)$/;
const SPACING_PROPS = /^(gap|row-gap|column-gap|grid-gap|grid-row-gap|grid-column-gap|margin|margin-(top|right|bottom|left|block|inline|block-start|block-end|inline-start|inline-end))$/;
const RE_HEX = /(^|[^\w&#-])#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{3,4})(?![\w-])/g;
const RE_FN = /\b(?:rgba?|hsla?|hwb|lab|lch|oklab|oklch|color)\(/gi;
const RE_NAMED = new RegExp('(^|[\\s,(])(' + NAMED.join('|') + ')(?=$|[\\s,;)!])', 'gi');
const RE_LEN = /(-?\d*\.?\d+)(px|rem|em|pt|%|vw|vh|vmin|vmax|ch|ex)?(?![\w-])/g;

/* ── args ── */
const args = process.argv.slice(2);
let allowPath = null, asJson = false; const targets = [];
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--allow') allowPath = args[++i];
  else if (args[i] === '--json') asJson = true;
  else if (args[i] === '-h' || args[i] === '--help') { usage(0); }
  else targets.push(args[i]);
}
if (!targets.length) usage(2);
function usage(code) { console.log('Usage: node check-design.mjs <folder|files…> [--allow calm-glass.allow.json] [--json]'); process.exit(code); }

/* ── allow list ── */
const here = path.dirname(fileURLToPath(import.meta.url));
if (!allowPath) for (const c of [path.resolve('calm-glass.allow.json'), path.join(here, 'calm-glass.allow.json')]) if (fs.existsSync(c)) { allowPath = c; break; }
let allow = [];
if (allowPath) {
  try {
    const j = JSON.parse(fs.readFileSync(allowPath, 'utf8'));
    allow = Array.isArray(j) ? j : (j.allow || []);
  } catch (e) { console.error(`check-design: cannot read ${allowPath}: ${e.message}`); process.exit(2); }
  const bad = allow.filter(a => !a || !a.rule || !a.file || !a.why || !String(a.why).trim());
  if (bad.length) { console.error(`check-design: every entry in ${allowPath} needs "rule", "file" and "why":`, JSON.stringify(bad)); process.exit(2); }
}
const used = new Set();
function allowed(f) {
  const rel = f.file.split(path.sep).join('/');
  return allow.some((a, i) => {
    if (a.rule !== f.rule && a.rule !== '*') return false;
    const pat = String(a.file).split(path.sep).join('/');
    const ok = pat.includes('*')
      ? new RegExp('(^|/)' + pat.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*\*/g, '\u0000').replace(/\*/g, '[^/]*').replace(/\u0000/g, '.*') + '$').test(rel)
      : (rel === pat || rel.endsWith('/' + pat));
    if (!ok) return false;
    if (a.match && !(f.text || '').includes(a.match) && !(f.msg || '').includes(a.match)) return false;
    used.add(i); return true;
  });
}

/* ── files ── */
const files = [];
function walk(p) {
  let st; try { st = fs.statSync(p); } catch (e) { console.error(`check-design: no such file or folder: ${p}`); process.exit(2); }
  if (st.isDirectory()) { for (const n of fs.readdirSync(p).sort()) { if (SKIP_DIR.has(n) || n.startsWith('.')) continue; walk(path.join(p, n)); } }
  else if (EXT.has(path.extname(p).toLowerCase()) && !/\.min\.(css|js)$/.test(p)) files.push(p);
}
targets.forEach(walk);

/* ── helpers ── */
const findings = [];
function lineCol(src, idx) { let line = 1, last = -1; for (let i = 0; i < idx; i++) if (src.charCodeAt(i) === 10) { line++; last = i; } return [line, idx - last]; }
function blank(s) { return s.replace(/[^\n]/g, ' '); }                            // keep offsets, drop content
function stripComments(css) { return css.replace(/\/\*[\s\S]*?\*\//g, m => /@cg-tokens-(start|end)/.test(m) ? m : blank(m)); }
function maskTokenBlock(s) {
  return s.replace(/@cg-tokens-start[\s\S]*?@cg-tokens-end/g, m => blank(m));
}
function stripVars(v) {                                                           // remove var(...) (nested-safe)
  let out = '', depth = 0, i = 0;
  while (i < v.length) {
    if (depth === 0 && v.startsWith('var(', i)) { depth = 1; i += 4; continue; }
    if (depth > 0) { if (v[i] === '(') depth++; else if (v[i] === ')') depth--; i++; continue; }
    out += v[i++];
  }
  return out;
}
function px(n, unit) { n = parseFloat(n); if (unit === 'rem' || unit === 'em') return n * 16; if (unit === 'pt') return n * 4 / 3; return n; }
function add(file, src, idx, rule, msg, text) { const [line, col] = lineCol(src, idx); const f = { file, line, col, rule, msg, text: (text || '').trim().slice(0, 120) }; if (!allowed(f)) findings.push(f); }

/* check one declaration (prop: value) found at idx in src */
function checkDecl(file, src, idx, prop, value) {
  prop = prop.trim().toLowerCase(); const raw = value; value = value.replace(/!important/i, '').trim();
  if (!value) return;
  const text = `${prop}: ${raw.trim()}`;
  // colour
  {
    const noUrl = value.replace(/url\([^)]*\)/gi, '');
    const hex = noUrl.match(RE_HEX), fn = noUrl.match(RE_FN);
    const named = COLOUR_PROPS.test(prop) && !prop.startsWith('--') ? stripVars(noUrl).match(RE_NAMED) : null;
    if (hex || fn || named) add(file, src, idx, 'colour', 'a literal colour: use a --cg-* colour token', text);
  }
  if (prop.startsWith('--')) return;                                              // a custom property's other values are names, not uses
  // corner
  if (/^border(-(top|bottom|start|end)-(left|right|start|end))?-radius$/.test(prop)) {
    const rest = stripVars(value).replace(/calc\(|min\(|max\(|clamp\(/g, ' ').replace(/[(),/]/g, ' ');
    for (const tok of rest.split(/\s+/).filter(Boolean)) {
      if (/^(inherit|initial|unset|revert|revert-layer)$/i.test(tok) || /^[-+*]$/.test(tok)) continue;
      if (/^-?\d*\.?\d+[a-z%]*$/i.test(tok) && !RADII_OK.has(tok.toLowerCase())) { add(file, src, idx, 'corner', `corner ${tok} is not on the scale (8 / 14 / 26 / 32 / capsule / circle): use --cg-r-*`, text); break; }
    }
  }
  // type
  let size = null;
  if (prop === 'font-size') size = value;
  else if (prop === 'font') {
    const s = stripVars(value);
    const m = s.match(/(?:^|\s)(-?\d*\.?\d+(?:px|rem|em|pt|%)|xx-small|x-small|small|medium|large|x-large|xx-large|smaller|larger)(?=\s*\/|\s)/i);
    size = m ? m[1] : null;
  }
  if (size) {
    const s = stripVars(size);
    if (/\b(xx-small|x-small|small|smaller)\b/i.test(s)) add(file, src, idx, 'type', 'a keyword font size below the floor: use --cg-t-min or larger', text);
    else {
      RE_LEN.lastIndex = 0; let m;
      while ((m = RE_LEN.exec(s))) {
        if (!m[2] || m[1] === '0') continue;
        const unit = m[2].toLowerCase();
        if (['px', 'rem', 'pt'].includes(unit) && px(m[1], unit) < 16) { add(file, src, idx, 'type', `font size ${m[0]} is under 16: use --cg-t-min (16) or a larger --cg-t-* token`, text); break; }
        add(file, src, idx, 'type', `font size ${m[0]} is a literal: use a --cg-t-* token`, text); break;
      }
    }
  }
  // spacing
  if (SPACING_PROPS.test(prop)) {
    const s = stripVars(value).replace(/calc\(|min\(|max\(|clamp\(/g, ' ');
    RE_LEN.lastIndex = 0; let m;
    while ((m = RE_LEN.exec(s))) {
      if (!m[2]) continue;
      const unit = m[2].toLowerCase(); if (!['px', 'rem', 'em', 'pt'].includes(unit)) continue;
      const v = Math.abs(px(m[1], unit));
      if (v > 0 && v < 12) { add(file, src, idx, 'spacing', `${prop} ${m[0]} is under 12: controls keep 12 apart (--cg-sp); inside one control use --cg-in-*`, text); break; }
    }
  }
}

/* CSS text (offset = where it starts in src) */
function checkCss(file, src, css, offset) {
  css = maskTokenBlock(stripComments(css));
  // declarations: prop: value, ended by ; or } — selectors (a:hover {) end at { and are skipped
  const re = /(^|[;{\s])(--[\w-]+|[a-zA-Z-]+)\s*:\s*([^;{}]*)(?=[;}]|$)/g;
  let m;
  while ((m = re.exec(css))) {
    const after = css.slice(re.lastIndex).match(/^\s*([;{}]|$)/);
    if (after && after[1] === '{') continue;                                      // it was a selector
    checkDecl(file, src, offset + m.index + m[1].length, m[2], m[3]);
  }
}
/* JS text: strings that hold CSS, style assignments, setProperty */
function checkJs(file, src, js, offset) {
  js = maskTokenBlock(js.replace(/\/\*[\s\S]*?\*\//g, blank).replace(/(^|[^:'"`\\])\/\/[^\n]*/g, (m, a) => a + blank(m.slice(a.length))));
  let m;
  const assign = /\.style\.([a-zA-Z]+)\s*=\s*(['"`])([^'"`]*)\2/g;
  while ((m = assign.exec(js))) checkDecl(file, src, offset + m.index, m[1].replace(/[A-Z]/g, c => '-' + c.toLowerCase()), m[3]);
  const setp = /setProperty\(\s*(['"`])([^'"`]+)\1\s*,\s*(['"`])([^'"`]*)\3/g;
  while ((m = setp.exec(js))) checkDecl(file, src, offset + m.index, m[2], m[4]);
  const str = /(['"`])((?:\\.|(?!\1)[^\\\n])*)\1/g;
  while ((m = str.exec(js))) {
    const s = m[2];
    if (/[a-z-]+\s*:\s*[^;]+/i.test(s) && /(color|background|radius|font|gap|margin|fill|stroke|shadow|border)/i.test(s)) checkCss(file, src, s, offset + m.index + 1);
    else if ((s.match(RE_HEX) || s.match(RE_FN)) && s.length < 40) add(file, src, offset + m.index, 'colour', 'a literal colour in a script: use a --cg-* token', s);
  }
}
/* HTML: <style>, style="", <script>, and colour attributes */
function checkHtml(file, src) {
  const html = src.replace(/<!--[\s\S]*?-->/g, blank);
  let m;
  const style = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  while ((m = style.exec(html))) checkCss(file, src, m[1], m.index + m[0].indexOf(m[1]));
  const script = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi;
  while ((m = script.exec(html))) checkJs(file, src, m[1], m.index + m[0].indexOf(m[1]));
  const attr = /\sstyle\s*=\s*(["'])([\s\S]*?)\1/gi;
  while ((m = attr.exec(html))) checkCss(file, src, m[2], m.index + m[0].indexOf(m[2]));
  const col = /\s(fill|stroke|stop-color|color|bgcolor)\s*=\s*(["'])([^"']*)\2/gi;
  while ((m = col.exec(html))) { const v = m[3]; if (RE_HEX.test(' ' + v) || /^(rgb|hsl)/i.test(v) || new RegExp('^(' + NAMED.join('|') + ')$', 'i').test(v)) add(file, src, m.index, 'colour', `a literal colour in ${m[1]}="": use currentColor or a token`, m[0]); RE_HEX.lastIndex = 0; }
}

for (const f of files) {
  const src = fs.readFileSync(f, 'utf8'), ext = path.extname(f).toLowerCase(), rel = path.relative(process.cwd(), f) || f;
  if (ext === '.css' || ext === '.scss') checkCss(rel, src, src, 0);
  else if (ext === '.html' || ext === '.htm' || ext === '.vue' || ext === '.svelte') checkHtml(rel, src);
  else checkJs(rel, src, src, 0);
}

/* ── report ── */
const unused = allow.map((a, i) => used.has(i) ? null : a).filter(Boolean);
if (asJson) { console.log(JSON.stringify({ files: files.length, findings, unusedAllow: unused }, null, 2)); }
else {
  for (const f of findings) console.log(`${f.file}:${f.line}:${f.col}  ${f.rule.padEnd(7)}  ${f.msg}\n    ${f.text}`);
  for (const a of unused) console.log(`note: allow entry not used (remove it?): ${JSON.stringify(a)}`);
  const by = findings.reduce((o, f) => (o[f.rule] = (o[f.rule] || 0) + 1, o), {});
  console.log(findings.length
    ? `\ncheck-design: ${findings.length} finding(s) in ${files.length} file(s) — ${Object.entries(by).map(([k, v]) => `${k} ${v}`).join(', ')}`
    : `check-design: clean — ${files.length} file(s) checked${allowPath ? ', allow list ' + path.relative(process.cwd(), allowPath) : ''}`);
}
process.exit(findings.length ? 1 : 0);
