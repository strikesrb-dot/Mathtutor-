// POST /api/tutor — the study tutor (Claude). Only the master or the student, signed in with Firebase, may use it.
// Needs the Netlify environment variable ANTHROPIC_API_KEY (Site configuration → Environment variables). Optional: TUTOR_MODEL.
// Body: { lesson: { title, subject, unit, learn, realLifePrompt, videos[] }, stage, question?: { q, choices[], picked, wrong }, messages: [{ role, content }] }
// Reply: { reply, videoQuery } (videoQuery: the app should look for a video, see tutor-video.mjs) — or { error } with 401/403 (not signed in / not allowed), 503 (no API key yet), 502 (Claude didn't answer).
import { verifyIdToken } from '../lib/firebase-auth.mjs';
import { rulesPrompt, contextPrompt, cleanMessages } from '../lib/tutor-prompt.mjs';
import { firebase as FB, MASTER_UID, STUDENT_UID, STUDENT_NAME } from '../../js/config.js';
import quotes, { approved } from '../../content/motivation.js';

const MODEL = 'claude-sonnet-5-5';
const json = (obj, status = 200) => new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });

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
  const messages = cleanMessages(body.messages);
  if (!messages.length) return json({ error: 'bad-request' }, 400);
  const request = {
    model: env.TUTOR_MODEL || MODEL, max_tokens: 1500,
    // Sonnet 5.5 thinks before answering by default (effort high), and thinking uses up max_tokens — that cut replies off
    // mid-step. A tutor reply is short: low effort, no up-front thinking. (Docs: build-with-claude/effort.)
    output_config: { effort: 'low' }, thinking: { type: 'between_tools' },
    system: [
      { type: 'text', text: rulesPrompt({ name: STUDENT_NAME, quotes, quotesOn: approved === true }), cache_control: { type: 'ephemeral' } },
      { type: 'text', text: contextPrompt(body) },
    ],
    messages,
  };
  const call = (b) => fetchImpl('https://api.anthropic.com/v1/messages', {
    method: 'POST', headers: { 'content-type': 'application/json', 'x-api-key': key, 'anthropic-version': '2023-06-01' }, body: JSON.stringify(b) });
  let r = await call(request);
  if (r.status === 400) {   // a model without these settings (e.g. TUTOR_MODEL set to an older one): retry once without them
    console.error('anthropic 400, retrying without effort/thinking:', (await r.text()).slice(0, 300));
    const { output_config, thinking, ...plain } = request;
    r = await call(plain);
  }
  if (!r.ok) { console.error('anthropic error', r.status, (await r.text()).slice(0, 500)); return json({ error: 'upstream', status: r.status }, 502); }
  const data = await r.json();
  let reply = (data.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('\n').trim();
  // A [video-search: …] line asks the app to find a video (/api/tutor-video); it is never shown. Links are never shown either.
  let videoQuery = '';
  reply = reply.replace(/^[ \t]*\[video-search:\s*([^\]\n]{2,120})\][ \t]*$/gim, (m, q) => { if (!videoQuery) videoQuery = q.trim(); return ''; })
    .replace(/https?:\/\/(?:www\.|m\.)?(?:youtube\.com|youtu\.be)\/\S+/gi, '').replace(/\n{3,}/g, '\n\n').trim();
  if (data.stop_reason === 'max_tokens') reply += '\n\n(I ran out of room there. Ask me to keep going.)';
  return json({ reply: reply || 'Sorry, I lost my train of thought. Can you ask that again?', videoQuery, stop: data.stop_reason || '' });
}

export default (req) => handle(req);
export const config = { path: '/api/tutor' };
