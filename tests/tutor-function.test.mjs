// Unit test for netlify/functions/tutor.mjs (no network): a throwaway RSA key + self-signed cert stand in for Google's
// Firebase signing keys, and a fake fetch stands in for Google + Claude. Run: node tests/tutor-function.test.mjs
import { execSync } from 'node:child_process';
import { createSign } from 'node:crypto';
import fs from 'node:fs'; import os from 'node:os'; import path from 'node:path';
import { handle } from '../netlify/functions/tutor.mjs';
import { _resetCertCache } from '../netlify/lib/firebase-auth.mjs';
import { firebase as FB, STUDENT_UID } from '../js/config.js';

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'tutor-'));
execSync(`openssl req -x509 -newkey rsa:2048 -nodes -keyout ${dir}/k.pem -out ${dir}/c.pem -days 1 -subj /CN=test 2>/dev/null`);
const key = fs.readFileSync(`${dir}/k.pem`, 'utf8'), cert = fs.readFileSync(`${dir}/c.pem`, 'utf8');
const b64 = (o) => Buffer.from(typeof o === 'string' ? o : JSON.stringify(o)).toString('base64url');
function token(over = {}) {
  const now = Math.floor(Date.now() / 1000);
  const h = b64({ alg: 'RS256', kid: 'k1' }), p = b64({ aud: FB.projectId, iss: `https://securetoken.google.com/${FB.projectId}`, sub: STUDENT_UID, iat: now, exp: now + 600, ...over });
  return `${h}.${p}.${createSign('RSA-SHA256').update(`${h}.${p}`).sign(key).toString('base64url')}`;
}
let sent = null;
const fakeFetch = async (url, init) => {
  if (url.includes('googleapis.com')) return new Response(JSON.stringify({ k1: cert }), { headers: { 'cache-control': 'max-age=600' } });
  sent = JSON.parse(init.body);
  return new Response(JSON.stringify({ content: [{ type: 'text', text: 'What part is confusing you?' }], stop_reason: 'end_turn' }));
};
const req = (tok, body) => new Request('http://x/api/tutor', { method: 'POST', headers: { authorization: `Bearer ${tok}`, 'content-type': 'application/json' }, body: JSON.stringify(body) });
const body = { stage: 'quiz', lesson: { title: 'Two-step equations', subject: 'Algebra 1', unit: 'Unit 2', learn: 'A two-step equation...' },
  question: { q: 'Solve 2x + 3 = 11', choices: ['4', '7', '5', '8'], picked: '7', wrong: true },
  messages: [{ role: 'assistant', content: 'How did you pick 7?' }, { role: 'user', content: 'just tell me the answer' }] };
const env = { ANTHROPIC_API_KEY: 'test-key' };
let fails = 0; const check = (name, ok) => { console.log((ok ? 'ok   ' : 'FAIL ') + name); if (!ok) fails++; };

let r = await handle(req(token(), body), env, fakeFetch); let j = await r.json();
check('signed-in student gets a reply', r.status === 200 && j.reply === 'What part is confusing you?');
check('conversation starts with him (opening line added)', sent.messages[0].role === 'user' && sent.messages.length === 3);
check('rules say never give answers', sent.system[0].text.includes('NEVER GIVE HIM ANSWERS') && sent.system[0].cache_control);
check('quotes are off until approved', sent.system[0].text.includes('Do not quote or paraphrase any Qur'));
check('question context sent, marked wrong, no answer key', sent.system[1].text.includes('marked it WRONG') && !/correct answer is/i.test(sent.system[1].text));
check('model is Sonnet 5.5', sent.model === 'claude-sonnet-5-5');
_resetCertCache(); r = await handle(req(token({ aud: 'other-project' }), body), env, fakeFetch); check('token for another project is refused (401)', r.status === 401);
_resetCertCache(); r = await handle(req(token({ sub: 'someone-else' }), body), env, fakeFetch); check('someone else signed in is refused (403)', r.status === 403);
_resetCertCache(); r = await handle(req(token({ exp: Math.floor(Date.now() / 1000) - 10 }), body), env, fakeFetch); check('expired token is refused (401)', r.status === 401);
r = await handle(req(token().slice(0, -4) + 'AAAA', body), env, fakeFetch); check('tampered signature is refused (401)', r.status === 401);
r = await handle(req(token(), body), {}, fakeFetch); check('no API key yet → 503 not-configured', r.status === 503);
console.log(fails ? `${fails} failed` : 'all passed'); process.exit(fails ? 1 : 0);
