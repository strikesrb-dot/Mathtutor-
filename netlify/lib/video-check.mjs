// Checks a YouTube video before the tutor may show it (owner request 2026-10-05: videos on the topic, no anime). A video passes
// only if YouTube's oEmbed says it exists and may be embedded, it is landscape (no Shorts), its channel (oEmbed author_url —
// never the name, look-alike channels exist) is in content/video-channels.js for this subject, and its title passes the
// block lists. No API key needed.
import { CHANNELS, BLOCK } from '../../content/video-channels.js';

export const VIDEO_ID = /^[A-Za-z0-9_-]{11}$/;
const words = (list) => new RegExp(`(?:^|[^a-z0-9])(?:${list.join('|')})(?![a-z0-9])`, 'i');
const BLOCK_RE = words(BLOCK);
const norm = (u) => String(u || '').trim().toLowerCase().replace(/\/+$/, '');
const BY_URL = new Map(CHANNELS.map((c) => [norm(c.url), { ...c, blockRe: c.block ? words(c.block) : null, mustRe: c.must ? new RegExp(c.must, 'i') : null }]));

export const channelNames = (subject) => CHANNELS.filter((c) => c.subjects.includes(subject)).map((c) => c.name);

export function titleProblem(title, ch) {
  const t = String(title || '');
  if (!t.trim()) return 'no title';
  if (BLOCK_RE.test(t)) return 'blocked word';
  if (ch && ch.blockRe && ch.blockRe.test(t)) return 'blocked word (channel)';
  if (ch && ch.mustRe && !ch.mustRe.test(t)) return 'not one of the channel\'s school series';
  if (/[¿¡ñáéíóúü]/i.test(t)) return 'not English';
  return '';
}

const cache = new Map();   // per warm function instance: "id|subject" → result
export async function checkVideo(id, subject, fetchImpl = fetch) {
  if (!VIDEO_ID.test(String(id || ''))) return { ok: false, why: 'bad id' };
  const key = `${id}|${subject}`;
  if (cache.has(key)) return cache.get(key);
  const done = (r) => { cache.set(key, r); return r; };
  let r;
  try {
    r = await fetchImpl(`https://www.youtube.com/oembed?format=json&url=${encodeURIComponent(`https://www.youtube.com/watch?v=${id}`)}`,
      { signal: AbortSignal.timeout(5000) });
  } catch { return { ok: false, why: 'oembed unreachable' }; }
  if (!r.ok) return done({ ok: false, why: `oembed ${r.status}` });   // 401/403 = embedding off, 404 = no such video
  let o;
  try { o = await r.json(); } catch { return { ok: false, why: 'oembed bad json' }; }
  const ch = BY_URL.get(norm(o.author_url));
  if (!ch) return done({ ok: false, why: `channel not on the list (${o.author_name || '?'})` });
  if (!ch.subjects.includes(subject)) return done({ ok: false, why: `${ch.name} isn't approved for ${subject}` });
  if (o.width && o.height && Number(o.height) > Number(o.width)) return done({ ok: false, why: 'a Short (vertical video)' });
  const bad = titleProblem(o.title, ch);
  if (bad) return done({ ok: false, why: bad });
  return done({ ok: true, video: { id, title: String(o.title).slice(0, 200), channel: ch.name } });
}

export function _resetVideoCache() { cache.clear(); }
