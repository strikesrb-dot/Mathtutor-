// Unit test for netlify/functions/tutor-video.mjs + netlify/lib/video-check.mjs (no network): fake Google certs, a fake Claude
// web-search reply and fake YouTube oEmbed answers. Also checks that /api/tutor turns a [video-search: …] line into videoQuery.
// Run: node tests/tutor-video.test.mjs
import { execSync } from 'node:child_process';
import { createSign } from 'node:crypto';
import fs from 'node:fs'; import os from 'node:os'; import path from 'node:path';
import { handle } from '../netlify/functions/tutor-video.mjs';
import { handle as tutor } from '../netlify/functions/tutor.mjs';
import { _resetCertCache } from '../netlify/lib/firebase-auth.mjs';
import { _resetVideoCache, titleProblem, checkVideo } from '../netlify/lib/video-check.mjs';
import { rulesPrompt } from '../netlify/lib/tutor-prompt.mjs';
import { firebase as FB, STUDENT_UID } from '../js/config.js';

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'tvid-'));
execSync(`openssl req -x509 -newkey rsa:2048 -nodes -keyout ${dir}/k.pem -out ${dir}/c.pem -days 1 -subj /CN=test 2>/dev/null`);
const key = fs.readFileSync(`${dir}/k.pem`, 'utf8'), cert = fs.readFileSync(`${dir}/c.pem`, 'utf8');
const b64 = (o) => Buffer.from(typeof o === 'string' ? o : JSON.stringify(o)).toString('base64url');
function token(over = {}) {
  const now = Math.floor(Date.now() / 1000);
  const h = b64({ alg: 'RS256', kid: 'k1' }), p = b64({ aud: FB.projectId, iss: `https://securetoken.google.com/${FB.projectId}`, sub: STUDENT_UID, iat: now, exp: now + 600, ...over });
  return `${h}.${p}.${createSign('RSA-SHA256').update(`${h}.${p}`).sign(key).toString('base64url')}`;
}
let fails = 0; const check = (name, ok) => { console.log((ok ? 'ok   ' : 'FAIL ') + name); if (!ok) fails++; };

const KHAN = 'https://www.youtube.com/@khanacademy', CRASH = 'https://www.youtube.com/@crashcourse', AMOEBA = 'https://www.youtube.com/@AmoebaSisters';
const OEMBED = {
  SHORT000001: { author_url: KHAN, author_name: 'Khan Academy', title: 'Square roots in 30 seconds', width: 113, height: 200 },
  ANIME000001: { author_url: 'https://www.youtube.com/@AnimeMathGirl', author_name: 'Anime Math Girl', title: 'Square roots explained by anime', width: 200, height: 113 },
  BLOCK000001: { author_url: CRASH, author_name: 'CrashCourse', title: 'Unpacking Masturbation: Sex Ed #3', width: 200, height: 113 },
  EMBEDOFF001: 401,
  AMOEBA00001: { author_url: AMOEBA, author_name: 'Amoeba Sisters', title: 'Square roots? No — Mitosis', width: 200, height: 113 },
  CCBIO000001: { author_url: CRASH, author_name: 'CrashCourse', title: 'Mitosis: Splitting Up is Complicated - Crash Course Biology #12', width: 200, height: 113 },
  CCHIST00001: { author_url: CRASH, author_name: 'CrashCourse', title: 'The Agricultural Revolution: Crash Course World History #1', width: 200, height: 113 },
  GOOD0000001: { author_url: 'https://www.youtube.com/@KhanAcademy', author_name: 'Khan Academy', title: 'Approximating square roots', width: 200, height: 113 },
};
let sent = [], claude = [];
const fake = (claudeReplies) => async (url, init) => {
  if (url.includes('googleapis.com')) return new Response(JSON.stringify({ k1: cert }), { headers: { 'cache-control': 'max-age=600' } });
  if (url.startsWith('https://www.youtube.com/oembed')) {
    const id = /v%3D([A-Za-z0-9_-]{11})/.exec(url)[1], o = OEMBED[id];
    return o === undefined ? new Response('Not Found', { status: 404 }) : typeof o === 'number' ? new Response('Unauthorized', { status: o }) : new Response(JSON.stringify(o));
  }
  sent.push(JSON.parse(init.body));
  const next = claudeReplies.shift();
  return typeof next === 'number' ? new Response('{"error":"x"}', { status: next }) : new Response(JSON.stringify(next));
};
const req = (tok, body, p = 'tutor-video') => new Request(`http://x/api/${p}`, { method: 'POST', headers: { authorization: `Bearer ${tok}`, 'content-type': 'application/json' }, body: JSON.stringify(body) });
const env = { ANTHROPIC_API_KEY: 'test-key' };
const searchResult = { type: 'web_search_tool_result', tool_use_id: 's1', content: [
  { type: 'web_search_result', url: 'https://www.youtube.com/watch?v=EMBEDOFF001', title: 'x' },
  { type: 'web_search_result', url: 'https://www.youtube.com/watch?v=GOOD0000001&t=5', title: 'y' }] };
const answer = (ids, extra = []) => ({ content: [{ type: 'server_tool_use', id: 's1', name: 'web_search', input: { query: 'Khan Academy square roots' } }, ...extra,
  { type: 'text', text: JSON.stringify({ ids }) }], stop_reason: 'end_turn' });

// 1. the checks: Short, anime channel, blocked title, embedding off, wrong subject are all skipped; the good one is returned
let r = await handle(req(token(), { query: 'estimating square roots', subject: 'algebra', lesson: 'Square roots' }), env,
  fake([answer(['SHORT000001', 'ANIME000001', 'BLOCK000001', 'AMOEBA00001'], [searchResult])]));
let j = await r.json();
check('finds the one video that passes every check', r.status === 200 && j.video && j.video.id === 'GOOD0000001' && j.video.channel === 'Khan Academy');
check('search is youtube.com only, at most 2 searches, on Haiku', sent[0].tools[0].type === 'web_search_20250305' && sent[0].tools[0].allowed_domains.join() === 'youtube.com'
  && sent[0].tools[0].max_uses === 2 && sent[0].model === 'claude-haiku-4-5-20251001');
check('the search prompt lists only approved algebra channels', sent[0].system.includes('Khan Academy') && sent[0].system.includes('Math Antics') && !sent[0].system.includes('Amoeba Sisters'));

// 2. nothing passes → video: null
_resetVideoCache(); _resetCertCache(); sent = [];
r = await handle(req(token(), { query: 'square roots', subject: 'algebra' }), env, fake([answer(['ANIME000001', 'SHORT000001', 'MADEUP00001'])]));
j = await r.json(); check('nothing passes → no video (never a fallback to an unchecked one)', r.status === 200 && j.video === null);

// 3. Haiku refused (400) → one retry on the tutor's model; a paused long search is continued
_resetVideoCache(); _resetCertCache(); sent = [];
r = await handle(req(token(), { query: 'mitosis', subject: 'biology' }), env,
  fake([400, { content: [{ type: 'server_tool_use', id: 's1', name: 'web_search', input: {} }], stop_reason: 'pause_turn' }, answer(['AMOEBA00001'])]));
j = await r.json();
check('400 → retried on Sonnet 5.5; pause_turn → continued with the paused content', sent.length === 3 && sent[1].model === 'claude-sonnet-5-5'
  && sent[2].messages.length === 2 && sent[2].messages[1].role === 'assistant');
check('Amoeba Sisters is fine for biology', j.video && j.video.id === 'AMOEBA00001');

// 4. sign-in and input checks
_resetCertCache(); r = await handle(req(token({ sub: 'someone-else' }), { query: 'x y', subject: 'algebra' }), env, fake([])); check('someone else signed in → 403', r.status === 403);
_resetCertCache(); r = await handle(req(token(), { query: 'x y', subject: 'history' }), env, fake([])); check('unknown subject → 400', r.status === 400);
r = await handle(req(token(), { query: 'x y', subject: 'algebra' }), {}, fake([])); check('no API key → 503', r.status === 503);

// 5. the title rules on their own
check('title rules: genetics words allowed, sensitive and off-topic titles blocked',
  !titleProblem('Sex-Linked Traits') && !titleProblem('Solving Two-Step Equations') && !!titleProblem('Evolution and Islam')
  && !!titleProblem('Study music lo-fi') && !!titleProblem('La fotosíntesis'));

{ const f = fake([]); _resetVideoCache();
  const [bio, hist, sexed] = await Promise.all(['CCBIO000001', 'CCHIST00001', 'BLOCK000001'].map((id) => checkVideo(id, 'biology', f)));
  check('Crash Course: only its school science series, never Sex Ed', bio.ok && !hist.ok && !sexed.ok); }

// 6. /api/tutor: a [video-search: …] line becomes videoQuery and is never shown; links are removed
_resetCertCache(); sent = [];
const tutorReply = { content: [{ type: 'text', text: 'A square root undoes squaring.\n\nHere\'s a short video that shows it.\n[video-search: estimating square roots]\nhttps://www.youtube.com/watch?v=abcdefghijk' }], stop_reason: 'end_turn' };
r = await tutor(req(token(), { stage: 'learn', lesson: { title: 'Square roots', subject: 'Algebra 1' }, messages: [{ role: 'user', content: 'Show me a video' }] }, 'tutor'), env, fake([tutorReply]));
j = await r.json();
check('tutor reply: videoQuery set, tag and link removed', j.videoQuery === 'estimating square roots' && !/video-search|youtube/i.test(j.reply) && j.reply.includes('short video'));
check('tutor rules explain the video line', rulesPrompt({ name: 'X', quotes: [], quotesOn: false }).includes('[video-search:'));

console.log(fails ? `${fails} failed` : 'all passed'); process.exit(fails ? 1 : 0);
