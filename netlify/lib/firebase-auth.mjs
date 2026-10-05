// Checks a Firebase sign-in token (the ID token the app sends) without any npm package: RS256 signature against Google's
// published certificates, then audience, issuer, expiry and subject. Throws if anything is off.
import { createPublicKey, createVerify } from 'node:crypto';

const CERTS_URL = 'https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com';
let certs = null, certsUntil = 0;

async function getCerts(fetchImpl) {
  if (certs && Date.now() < certsUntil) return certs;
  const r = await fetchImpl(CERTS_URL);
  if (!r.ok) throw new Error('certs ' + r.status);
  const m = /max-age=(\d+)/.exec(r.headers.get('cache-control') || '');
  certs = await r.json(); certsUntil = Date.now() + (m ? Number(m[1]) * 1000 : 3600e3);
  return certs;
}
const b64url = (s) => Buffer.from(String(s).replace(/-/g, '+').replace(/_/g, '/'), 'base64');

export async function verifyIdToken(token, projectId, fetchImpl = fetch) {
  const parts = String(token || '').split('.');
  if (parts.length !== 3) throw new Error('no token');
  const [h, p, sig] = parts;
  const header = JSON.parse(b64url(h).toString('utf8')), payload = JSON.parse(b64url(p).toString('utf8'));
  if (header.alg !== 'RS256' || !header.kid) throw new Error('bad header');
  const pem = (await getCerts(fetchImpl))[header.kid];
  if (!pem) throw new Error('unknown key');
  const ok = createVerify('RSA-SHA256').update(`${h}.${p}`).verify(createPublicKey(pem), b64url(sig));
  const now = Date.now() / 1000;
  if (!ok) throw new Error('bad signature');
  if (payload.aud !== projectId || payload.iss !== `https://securetoken.google.com/${projectId}`) throw new Error('wrong project');
  if (!payload.sub || payload.exp < now || payload.iat > now + 300) throw new Error('expired');
  return payload;
}
export function _resetCertCache() { certs = null; certsUntil = 0; }   // tests
