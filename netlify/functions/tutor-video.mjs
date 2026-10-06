// POST /api/tutor-video — finds one short YouTube video for what he's stuck on (owner request 2026-10-05: "link him a video …
// related to the topic, no anime"). The tutor's reply asks for one with a [video-search: …] line; the app then calls this.
// Claude (web search, youtube.com only) suggests videos; every one is checked by netlify/lib/video-check.mjs (vetted channel
// for this subject, embeddable, not a Short, title passes the block lists) and the first that passes is returned.
// Body: { query, subject: 'algebra'|'biology', lesson }  →  { video: { id, title, channel } } or { video: null }.
// Same sign-in rule and API key as /api/tutor. Optional env: TUTOR_VIDEO_MODEL. Kept separate so a slow search never delays
// or breaks the tutor's reply.
import { verifyIdToken } from '../lib/firebase-auth.mjs';
import { checkVideo, channelNames, VIDEO_ID } from '../lib/video-check.mjs';
import { firebase as FB, MASTER_UID, STUDENT_UID } from '../../js/config.js';

const MODEL = 'claude-haiku-4-5-20251001', FALLBACK = 'claude-sonnet-5-5';
const SUBJECT = { algebra: 'Algebra 1', biology: 'high-school Biology' };
const json = (obj, status = 200) => new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });
const cut = (s, n) => String(s == null ? '' : s).replace(/[\r\n\t]+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, n);

export function videoPrompt({ subject, lesson }) {
  return `You find ONE short YouTube video that teaches a struggling 9th grader a single idea in ${SUBJECT[subject]}. Lesson: "${lesson || 'unknown'}".
Search YouTube with web_search. Put a channel name in each query, for example "Khan Academy estimating square roots".
Only these channels are allowed (videos from any other channel are thrown away): ${channelNames(subject).join('; ')}.
Prefer US channels and short videos (under about 10 minutes) about exactly this idea. Never pick music, songs, anime, games, Shorts, or anything off-topic.
Reply with ONLY this JSON, using video IDs exactly as they appear in youtube.com/watch?v= links in your search results, best first:
{"ids": ["VIDEO_ID", "VIDEO_ID", "VIDEO_ID"]}
If nothing fits, reply {"ids": []}. Never make up an ID.`;
}

// Candidate IDs: the model's picks first, then other watch links from the search results, in order, no repeats.
export function candidates(content = []) {
  const out = [], add = (id) => { if (VIDEO_ID.test(id) && !out.includes(id)) out.push(id); };
  const text = content.filter((b) => b.type === 'text').map((b) => b.text).join('');
  const m = /\{[\s\S]*"ids"[\s\S]*?\}/.exec(text);
  if (m) { try { (JSON.parse(m[0]).ids || []).forEach((id) => add(String(id))); } catch {} }
  for (const b of content) {
    if (b.type !== 'web_search_tool_result' || !Array.isArray(b.content)) continue;
    for (const res of b.content) {
      const u = String(res && res.url || '');
      const w = /youtube\.com\/watch\?(?:.*&)?v=([A-Za-z0-9_-]{11})/.exec(u) || /youtu\.be\/([A-Za-z0-9_-]{11})/.exec(u);
      if (w) add(w[1]);
    }
  }
  return out.slice(0, 10);
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
  const subject = body.subject === 'biology' ? 'biology' : body.subject === 'algebra' ? 'algebra' : '';
  const query = cut(body.query, 120);
  if (!subject || query.length < 2) return json({ error: 'bad-request' }, 400);

  const call = (model, messages) => fetchImpl('https://api.anthropic.com/v1/messages', {
    method: 'POST', headers: { 'content-type': 'application/json', 'x-api-key': key, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({ model, max_tokens: 600, system: videoPrompt({ subject, lesson: cut(body.lesson, 160) }), messages,
      tools: [{ type: 'web_search_20250305', name: 'web_search', max_uses: 2, allowed_domains: ['youtube.com'] }] }) });
  const messages = [{ role: 'user', content: `Find a video for: ${query}` }];
  let model = env.TUTOR_VIDEO_MODEL || MODEL, r = await call(model, messages);
  if (r.status === 400 || r.status === 404) {   // that model can't use web search here: try the tutor's model once
    console.error('video search', r.status, 'on', model, (await r.text()).slice(0, 300));
    model = FALLBACK; r = await call(model, messages);
  }
  if (!r.ok) { console.error('video search failed', r.status, (await r.text()).slice(0, 300)); return json({ video: null, why: 'search failed' }); }
  let data = await r.json(), content = [...(data.content || [])];
  for (let i = 0; i < 2 && data.stop_reason === 'pause_turn'; i++) {   // a long search turn: send it back to continue
    const more = await call(model, [...messages, { role: 'assistant', content: data.content }]);
    if (!more.ok) break;
    data = await more.json(); content = [...content, ...(data.content || [])];
  }
  const ids = candidates(content);
  const checks = await Promise.all(ids.map((id) => checkVideo(id, subject, fetchImpl)));
  const hit = checks.find((c) => c.ok);
  console.log('video search', JSON.stringify({ query, subject, model, tried: ids.map((id, i) => [id, checks[i].ok ? 'ok' : checks[i].why]) }));
  return json(hit ? { video: hit.video } : { video: null, why: ids.length ? 'none passed the checks' : 'no candidates' });
}

export default (req) => handle(req);
export const config = { path: '/api/tutor-video' };
