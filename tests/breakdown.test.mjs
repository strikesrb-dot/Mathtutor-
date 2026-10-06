// Unit test for netlify/functions/breakdown.mjs (no network): fake Google certs + a fake Claude. Run: node tests/breakdown.test.mjs
import { execSync } from 'node:child_process';
import { createSign } from 'node:crypto';
import fs from 'node:fs'; import os from 'node:os'; import path from 'node:path';
import { handle, missText } from '../netlify/functions/breakdown.mjs';
import { _resetCertCache } from '../netlify/lib/firebase-auth.mjs';
import { firebase as FB, STUDENT_UID, MASTER_UID } from '../js/config.js';

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'bd-'));
execSync(`openssl req -x509 -newkey rsa:2048 -nodes -keyout ${dir}/k.pem -out ${dir}/c.pem -days 1 -subj /CN=test 2>/dev/null`);
const key = fs.readFileSync(`${dir}/k.pem`, 'utf8'), cert = fs.readFileSync(`${dir}/c.pem`, 'utf8');
const b64 = (o) => Buffer.from(typeof o === 'string' ? o : JSON.stringify(o)).toString('base64url');
function token(over = {}) {
  const now = Math.floor(Date.now() / 1000);
  const h = b64({ alg: 'RS256', kid: 'k1' }), p = b64({ aud: FB.projectId, iss: `https://securetoken.google.com/${FB.projectId}`, sub: STUDENT_UID, iat: now, exp: now + 600, ...over });
  return `${h}.${p}.${createSign('RSA-SHA256').update(`${h}.${p}`).sign(key).toString('base64url')}`;
}
let fails = 0; const check = (name, ok) => { console.log((ok ? 'ok   ' : 'FAIL ') + name); if (!ok) fails++; };
let sent = null;
const fake = async (url, init) => {
  if (url.includes('googleapis.com')) return new Response(JSON.stringify({ k1: cert }), { headers: { 'cache-control': 'max-age=600' } });
  sent = JSON.parse(init.body);
  return new Response(JSON.stringify({ content: [{ type: 'text', text: '**What he likely thought**\nHe added first.' }], stop_reason: 'end_turn' }));
};
const miss = { lesson: 'Two-step equations', subject: 'algebra', unit: 'Unit 2', q: 'Solve 2x + 3 = 11', choices: ['4', '7', '5', '8'], picked: '7',
  retryPick: '5', retryOk: false, correct: '4', why: 'Subtract 3, then divide by 2.', sec: 4, quizTry: 2, qNum: 3, of: 10 };
const req = (tok, body) => new Request('http://x/api/breakdown', { method: 'POST', headers: { authorization: `Bearer ${tok}`, 'content-type': 'application/json' }, body: JSON.stringify(body) });
const env = { ANTHROPIC_API_KEY: 'k' };
let r = await handle(req(token(), { miss }), env, fake), j = await r.json();
check('student app gets a breakdown', r.status === 200 && j.analysis.includes('What he likely thought'));
check('Claude is told the question, his pick, his retry, the right answer, the time', sent.messages[0].content.includes('He picked: "7"') && sent.messages[0].content.includes('picked "5" (wrong again)')
  && sent.messages[0].content.includes('The right answer: "4"') && sent.messages[0].content.includes('4 seconds'));
check('the prompt asks for the five parts, written to his brother', ['What he likely thought', 'Why his answer is wrong', 'The right answer', 'How to explain it to him', 'Check question'].every((k) => sent.system[0].text.includes(k)));
_resetCertCache(); r = await handle(req(token({ sub: MASTER_UID }), { miss }), env, fake); check('master app can ask too', r.status === 200);
_resetCertCache(); r = await handle(req(token({ sub: 'someone' }), { miss }), env, fake); check('anyone else → 403', r.status === 403);
_resetCertCache(); r = await handle(req(token(), { miss: { q: 'x' } }), env, fake); check('incomplete miss → 400', r.status === 400);
r = await handle(req(token(), { miss }), {}, fake); check('no key → 503', r.status === 503);
check('missText caps long fields', missText({ ...miss, q: 'x'.repeat(5000) }).length < 2500);
console.log(fails ? `${fails} failed` : 'all passed'); process.exit(fails ? 1 : 0);
