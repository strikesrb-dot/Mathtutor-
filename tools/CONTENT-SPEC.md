# How to write a unit (for Claude sessions and helper agents)

One unit = one file: `content/algebra/uNN.js` or `content/biology/uNN.js` (NN = two digits). Register it in that
subject's `index.js` in unit order, then run `node tools/sync-preload.mjs`.

```js
// Unit 1 — Algebra foundations. NJ: A.SSE.A.1
import { pick } from '../legacy.js';          // only if the unit reuses one of the first 16 lessons
export default {
  id: 'a01', n: 1, title: 'Algebra foundations', nj: ['A.SSE.A.1'],
  lessons: [
    { key: 'a01-01', title: '…', videos: [{ id: 'XXXXXXXXXXX', title: '…' }], learn: `<p>…</p>`,
      quiz: [ { q: '…', c: ['correct', 'wrong', 'wrong', 'wrong'], why: '…' } /* ×12 */ ],
      realLife: { text: `<p>…</p>`, prompt: '…' } },
    pick('alg-5'),                              // a reused lesson keeps its old key so progress carries over
  ],
};
```
Full real examples: `content/algebra.js`, `content/biology-cells.js`.

## Rules
- **Keys**: `a01-01` (algebra unit 1 lesson 1), `b03-02` (biology unit 3 lesson 2). Never reuse or rename a key.
- **Videos**: 1–3 per lesson, about 10–25 minutes total. EVERY id must be checked by WebFetching
  `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<ID>&format=json` and confirming title + channel.
  Never guess an id. Algebra: Khan Academy (US channel only, not "Khan Academy India"). Biology: Khan Academy, Amoeba
  Sisters, CrashCourse, Bozeman Science, TED-Ed. Kid-safe only. Find ids with WebSearch (mode "extended"), e.g.
  `site:youtube.com Khan Academy "combining like terms"`. YouTube search pages are blocked; don't try them.
- **learn**: 120–250 words of HTML (`<p>`, `<b>`, `<ul>/<ol>/<li>` only). Plain words for a struggling 9th grader.
  Define every technical term in parentheses the first time it appears. Math lessons include one worked example.
- **quiz**: exactly 12 items. `c[0]` is ALWAYS the correct answer (the app shuffles). The 3 wrong choices are mistakes a
  student would really make. All 4 choices must be different. `why` is 25 words or fewer. No "all/none of the above".
  Exactly one defensible answer. Recompute every number with node before writing it.
- **Text in quiz strings is plain text** (not HTML): use Unicode − × ÷ ² ³ √ π ≤ ≥ ≠, and write fractions as 3/4.
- **realLife**: `text` = 60–120 words of HTML with concrete everyday examples; `prompt` = one question he answers in his
  own words (15+ words). The family is Muslim: keep examples halal and age-appropriate (no alcohol, pork, gambling,
  dating; avoid interest/loan examples — use savings without interest, population, bacteria, phone battery, depreciation).
- Check before finishing: `node --check <file>` and `node tools/validate-content.mjs <file>` must both pass.
