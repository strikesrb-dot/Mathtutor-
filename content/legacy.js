// The first 16 lessons (built before the full curriculum). Units reuse them by key so his progress carries over.
import algebra from './algebra.js';
import biology from './biology-cells.js';

const all = [...algebra.lessons, ...biology.lessons];
export function pick(key) {
  const l = all.find((x) => x.key === key);
  if (!l) throw new Error(`legacy lesson ${key} not found`);
  return l;
}
