// POST /api/breakdown — Claude's breakdown of one missed quiz question, written for his older brother (owner request 2026-10-05:
// "if he fails a question give me a full breakdown", automatic for every miss). His app asks right after a miss; the master's
// app asks for any miss that still has none. The result is saved on students/{uid}/misses/{id}.analysis by the app.
// Body: { miss: { lesson, subject, unit, q, choices[], picked, retryPick, retryOk, correct, why, sec, quizTry, qNum, of } }
// Reply: { analysis } — or { error } (401/403 sign-in, 503 no key, 502 Claude didn't answer). Same key as /api/tutor.
import { verifyIdToken } from '../lib/firebase-auth.mjs';
import { firebase as FB, MASTER_UID, STUDENT_UID, STUDENT_NAME } from '../../js/config.js';

const MODEL = 'claude-sonnet-5-5';
const json = (obj, status = 200) => new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });
const cut = (s, n) => String(s == null ? '' : s).replace(/\s+/g, ' ').trim().slice(0, n);

export function breakdownPrompt(name) {
  return `You help an older brother understand why his younger brother, ${name} (a 9th grader who finds school hard), missed a quiz question in a study app. Write to the older brother, in plain words, for a phone screen.

Use exactly these five parts, each starting with its bold label on its own line:
**What he likely thought** — the specific mix-up that leads to his pick. If he answered very fast (under about 8 seconds), say he may have guessed.
**Why his answer is wrong** — one or two sentences.
**The right answer** — the answer and why, in one or two sentences.
**How to explain it to him** — one simple everyday example, at most 3 numbered steps.
**Check question** — one new question like this one, with its answer, so his brother can test him.

Rules: under 170 words in total. Put math in backticks, like \`x + 3 = 7\`. No headings, tables, LaTeX or emoji. Be kind about ${name}; never mock him. If he used his retry, say whether the second pick shows he understood or was still guessing. Don't invent facts about the lesson beyond what's given.`;
}

export function missText(m = {}) {
  const choices = Array.isArray(m.choices) ? m.choices.slice(0, 6).map((c) => cut(c, 200)) : [];
  return [
    `Subject: ${cut(m.subject, 20)} · ${cut(m.unit, 120)} · Lesson: ${cut(m.lesson, 160)}`,
    `Quiz try ${Number(m.quizTry) || 1}, question ${Number(m.qNum) || '?'} of ${Number(m.of) || '?'}. He answered in ${Number(m.sec) || '?'} seconds.`,
    `Question: ${cut(m.q, 600)}`,
    `Choices on his screen: ${choices.map((c, i) => `(${i + 1}) ${c}`).join('  ')}`,
    `He picked: "${cut(m.picked, 200)}" (wrong).`,
    m.retryPick ? `He used his one retry on this question and picked "${cut(m.retryPick, 200)}" (${m.retryOk ? 'right' : 'wrong again'}).` : 'He did not retry this question.',
    `The right answer: "${cut(m.correct, 200)}".`,
    m.why ? `The lesson's own explanation: ${cut(m.why, 800)}` : '',
  ].filter(Boolean).join('\n');
}

export async function handle(req, env = process.env, fetchImpl = fetch) {
  if (req.method !== 'POST') return json({ error: 'method' }, 405);
  const key = env.ANTHROPIC_API_KEY;
  if (!key) return json({ error: 'not-configured' }, 503);
  let user;
  try { user = await verifyIdToken((req.headers.get('authorization') || '').replace(/^Bearer\s+/i, ''), FB.projectId, fetchImpl); }
  catch { return json({ error: 'auth' }, 401); }
  if (![MASTER_UID, STUDENT_UID].includes(user.sub)) return json({ error: 'not-allowed' }, 403);
  let body;
  try { body = await req.json(); } catch { return json({ error: 'bad-request' }, 400); }
  const m = body && body.miss;
  if (!m || !m.q || !m.picked || !m.correct) return json({ error: 'bad-request' }, 400);
  const request = {
    model: env.TUTOR_MODEL || MODEL, max_tokens: 1200, output_config: { effort: 'low' }, thinking: { type: 'between_tools' },
    system: [{ type: 'text', text: breakdownPrompt(STUDENT_NAME), cache_control: { type: 'ephemeral' } }],
    messages: [{ role: 'user', content: missText(m) }],
  };
  const call = (b) => fetchImpl('https://api.anthropic.com/v1/messages', {
    method: 'POST', headers: { 'content-type': 'application/json', 'x-api-key': key, 'anthropic-version': '2023-06-01' }, body: JSON.stringify(b) });
  let r = await call(request);
  if (r.status === 400) { const { output_config, thinking, ...plain } = request; r = await call(plain); }
  if (!r.ok) { console.error('breakdown error', r.status, (await r.text()).slice(0, 300)); return json({ error: 'upstream' }, 502); }
  const data = await r.json();
  const analysis = (data.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('\n').trim();
  return analysis ? json({ analysis }) : json({ error: 'empty' }, 502);
}

export default (req) => handle(req);
export const config = { path: '/api/breakdown' };
