#!/usr/bin/env node
// Checks lesson content. Usage:
//   node tools/validate-content.mjs                      → whole course (both subjects, via the index files)
//   node tools/validate-content.mjs content/algebra/u01.js [more unit files…]
// Exit 0 = clean, 1 = problems found.
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const problems = [];
const keys = new Map();
const PRACTICE = ['isFunction', 'evaluate', 'domainRange', 'readTable', 'slope', 'intercepts', 'slopeIntercept', 'models'];

function checkUnit(u, file) {
  const at = (m) => problems.push(`${file} ${u && u.id ? u.id : ''}: ${m}`);
  if (!u || typeof u !== 'object') return at('no default export');
  for (const f of ['id', 'n', 'title']) if (u[f] == null || u[f] === '') at(`unit missing ${f}`);
  if (!Array.isArray(u.nj) || !u.nj.length) at('unit missing nj standards list');
  if (!Array.isArray(u.lessons) || !u.lessons.length) return at('unit has no lessons');
  u.lessons.forEach((l, i) => {
    const w = (m) => at(`lesson ${i + 1} (${l.key || '?'}): ${m}`);
    if (!l.key) w('missing key');
    else if (keys.has(l.key)) w(`duplicate key (also in ${keys.get(l.key)})`);
    else keys.set(l.key, file);
    if (!l.title) w('missing title');
    if (!Array.isArray(l.videos) || !l.videos.length) w('needs at least one video');
    else l.videos.forEach((v) => { if (!/^[\w-]{11}$/.test(v.id || '')) w(`bad video id "${v.id}"`); if (!v.title) w('video missing title'); });
    if (typeof l.learn !== 'string' || l.learn.replace(/<[^>]+>/g, '').trim().split(/\s+/).length < 60) w('learn text missing or under 60 words');
    if (!Array.isArray(l.quiz) || l.quiz.length < 12) w(`quiz needs 12 items (has ${l.quiz ? l.quiz.length : 0})`);
    else l.quiz.forEach((q, k) => {
      if (!q.q) w(`quiz ${k + 1}: missing q`);
      if (!Array.isArray(q.c) || q.c.length !== 4) w(`quiz ${k + 1}: needs exactly 4 choices`);
      else if (new Set(q.c.map((x) => String(x).trim())).size !== 4) w(`quiz ${k + 1}: duplicate choices`);
      if (!q.why) w(`quiz ${k + 1}: missing why`);
    });
    if (!l.realLife || !l.realLife.text || !l.realLife.prompt) w('realLife needs text and prompt');
    if (l.practice && !PRACTICE.includes(l.practice)) w(`unknown practice generator "${l.practice}"`);
  });
  return u.lessons.length;
}

async function load(file) {
  const mod = await import(pathToFileURL(path.resolve(file)).href);
  return mod.default;
}

const files = process.argv.slice(2);
let lessons = 0, units = 0;
if (files.length) {
  for (const f of files) { try { lessons += checkUnit(await load(f), f) || 0; units += 1; } catch (e) { problems.push(`${f}: cannot load — ${e.message}`); } }
} else {
  for (const subj of ['algebra', 'biology']) {
    const course = await load(`content/${subj}/index.js`);
    let last = 0;
    for (const u of course.units) {
      if (u.n <= last) problems.push(`${subj}: units out of order at ${u.id}`);
      last = u.n; lessons += checkUnit(u, `content/${subj}/${u.id}`) || 0; units += 1;
    }
  }
}
if (problems.length) { console.log(problems.join('\n')); console.log(`\n${problems.length} problem(s) in ${units} unit(s)`); process.exit(1); }
console.log(`content OK — ${units} unit(s), ${lessons} lesson(s)`);
