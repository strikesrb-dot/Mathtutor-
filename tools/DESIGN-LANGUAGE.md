# Calm Glass — the design language

Calm Glass is the design language of hifzhub.com, where it is called Quiet Glass, packed so you can use it on any site.
It is modeled on the Claude app. Surfaces are warm off-whites by day and warm near-blacks at night. Groups are solid
and have no borders. Round glass keys float over the content. There is one dark main button, and one accent color that
marks only state. Nothing is smaller than 16.

Everything lives in one file, `calm-glass.css`. The **token block** at the top holds every value. The components below
it read only those tokens, so changing one value changes the whole site.

## The rules

1. **Text is never smaller than 16.** Captions, chips, footnotes and meta all use 16 (`--cg-t-min`). Where 16 doesn't
   fit, redraw the screen: drop a count or wrap a line. Never shrink the text. Arabic uses its own font stack
   (`--cg-ar`) and a larger size.
2. **One corner scale:** 8 icon tile · 14 control · 26 group · 32 sheet · capsule · circle. Nothing else.
3. **One accent, and only for state.** The accent marks things that are on, chosen or selected, plus links and focus
   rings. Icons stay grey (`--cg-ink2`). Red (`--cg-danger`) is only for destructive actions.
4. **One dark main button per screen** (`.cg-btn-strong`). Every other button is a glass capsule or plain text.
5. **One shared header.** A centered 17/600 title sits between 44px round glass keys. ✕ goes on the left. On a
   screen pushed from another one, ‹ goes on the left and ✕ moves to the right.
6. **Grouped lists.** Rows are at least 54 tall with 17px labels. Groups have 26px corners and sit 20 in from the
   sides, with a grey caption above. Hairlines start at the text column, not under the icon. The last row has no
   hairline.
7. **Glass only for chrome that floats over content:** round keys, the bottom island, toasts and menus. Content
   (groups, cards) is solid, with no border and no shadow.
8. **Every target is at least 44.** A control can look smaller (a switch is 28 tall), but its tap area is 44.
9. **At least 12 between two controls** (`--cg-sp`). Smaller steps (`--cg-in-*`) are only for spacing inside one
   control or one group.
10. **Light and dark are both designed.** Auto follows the device. Never use pure black for a background.
11. **Calm motion, and none when asked.** Sheets rise on one spring. Reduce Motion turns every duration off.
12. **Destructive actions stand alone.** Put a red row in its own group, or do the action at once and offer Undo in
    a toast. Never use `alert()` or `confirm()`.

## The tokens

| Token | Value (day / night) | Use |
|---|---|---|
| `--cg-page` | `#f9f9f7` / `#20201f` | page and sheet background |
| `--cg-chrome` | `#f3f3f0` / `#161615` | sidebars, toolbars |
| `--cg-group` | `#ffffff` / `#2a2a28` | grouped lists, cards |
| `--cg-fill` | `#f0efec` / `#34332f` | quiet controls: segmented control, chips, fields |
| `--cg-selected` | `#e7e6e0` / `#3a3935` | a selected row, an avatar |
| `--cg-ink` | `#1b1812` / `#f2f1ec` | text |
| `--cg-ink-strong` | `#000` / `#fff` | sheet titles |
| `--cg-ink2` | `#52514e` / `#b5b3ab` | icons |
| `--cg-ink3` | `#6f6e68` / `#9b9991` | captions, subtitles, footnotes |
| `--cg-value` / `--cg-chev` | grey | a row's value and chevron |
| `--cg-hair` | ink at 10% | hairlines |
| `--cg-strong` / `--cg-strong-ink` | `#2a2a27` on white / light ink on dark | the one dark main button |
| `--cg-accent` | clay `#a8502e` / `#e0906c` | state only: on, chosen, links, focus |
| `--cg-accent-soft` / `--cg-accent-ink` | accent at 13% / the page color | a soft wash / text on the accent |
| `--cg-danger` | `#9e2f2a` / `#e5776d` | destructive actions |
| `--cg-glass`, `--cg-glass-rim`, `--cg-blur`, `--cg-sh-glass` | off-white at 82% + white rim + 20px blur | floating chrome |
| `--cg-scrim` | black at 20% / 45%, no blur | behind a sheet |
| `--cg-r-icon` · `-ctl` · `-group` · `-sheet` · `-cap` · `-circle` | 8 · 14 · 26 · 32 · 999px · 50% | the only corners |
| `--cg-t-min` · `-body` · `-head` | 16 · 17 · 17 | the floor · body and rows · sheet title (600) |
| `--cg-t-t3` · `-t2` · `-t1` · `-large` | 20 · 22 · 28 · 34 | titles |
| `--cg-ui` · `--cg-ar` | system UI font · Arabic font stack | fonts (`--cg-t-ar` 24 for Arabic) |
| `--cg-sp` · `-sp-2` · `-sp-3` · `-sp-4` · `-sp-5` | 12 · 16 · 20 · 28 · 40 | space between controls and sections |
| `--cg-in-1` … `--cg-in-10` | 1 to 10 | space inside one control only |
| `--cg-tap` · `--cg-key` · `--cg-ctl` · `--cg-btn-h` | 44 · 44 · 44 · 48 | targets, round keys, controls, buttons |
| `--cg-row-min` · `--cg-inset` · `--cg-text-col` | 54 · 20 · 60 | row height, group inset, where the text and hairline start |
| `--cg-isl-c` · `--cg-isl-m` | 48 / 60 on a tablet · 12 / 20 | island piece height · its gutter |
| `--cg-ease` · `--cg-d-rise` | `cubic-bezier(.32,.72,0,1)` · 500ms | the calm spring for sheets and the island |

**Accent presets.** These match hifzhub's Settings › Appearance › Accent. Clay is the default. Set one with
`<html data-accent="green">`, or with `blue`, `black` or `grey`. To use your own accent, set the two values below. Every
toggle, chip, check and ring will follow.

```css
:root { --cg-accent-day: #3968b9; --cg-accent-night: #8fb0e6; }
```

From script, use `CalmGlass.accent('blue')` or `CalmGlass.accent({ day: '#3968b9', night: '#8fb0e6' })`.

## Adopt it on an existing site

1. **Link the files.** Put `<link rel="stylesheet" href="calm-glass.css">` and, if you want the helpers,
   `<script src="calm-glass.js"></script>` in `<head>`. Add `class="cg-page"` to `<body>`. Nothing else on your site
   changes, because every class starts with `cg-`.
2. **Map your colors to tokens.** Find every color in your CSS (`node check-design.mjs src/` lists them) and replace
   each one with the token for its role: backgrounds become `--cg-page` or `--cg-group`, text becomes `--cg-ink`,
   secondary text becomes `--cg-ink3`, and borders become `--cg-hair`. Your brand color becomes the accent, set
   through `--cg-accent-day` and `--cg-accent-night`, and you use it only for state.
3. **Replace corners and sizes.** Every `border-radius` becomes a `--cg-r-*` token. Every font size becomes a
   `--cg-t-*` token, 16 or larger. Gaps between controls become `--cg-sp` or larger.
4. **Use the components.** Swap your own versions for the kit's: `.cg-sheet`, `.cg-header` and `.cg-key`;
   `.cg-caption`, `.cg-group`, `.cg-row` and `.cg-foot`; `.cg-btn-strong`, `.cg-btn-glass` and `.cg-btn-plain`;
   `.cg-seg`, `.cg-switch`, `.cg-stepper`, `.cg-chip`, `.cg-field`, `.cg-card`, `.cg-toast` and `.cg-island`.
   `index.html` shows the markup for each. Copy it from there.
5. **Check both themes** at phone width (390) and iPad width (1024), with Reduce Motion on and off.

## Keep it from drifting

`check-design.mjs` is a small Node script with no dependencies. It flags literal colors, corners that are not on the
scale, font sizes under 16 (or literal sizes that are not tokens), and gaps or margins under 12. It reads CSS, the
`<style>` blocks, `style=""` attributes and scripts in HTML, and CSS written from JS. Anything between
`@cg-tokens-start` and `@cg-tokens-end` is exempt, because that is the token block.

```sh
node check-design.mjs src/            # a folder (recursive) or a list of files; exits 1 on findings
node check-design.mjs src/ --json     # machine-readable output
```

When a literal is truly needed, add it to `calm-glass.allow.json` with a reason. An entry without a `why` is
rejected, and an entry that no longer matches anything is reported, so you can remove it.

```json
{ "allow": [ { "rule": "colour", "file": "src/legacy/map.css", "match": "#0a84ff", "why": "the map vendor's brand blue" } ] }
```

Run it on every push with GitHub Actions. Save this as `.github/workflows/design.yml`, and adjust the paths to match
your repo:

```yaml
name: Design check
on: [push, pull_request]
jobs:
  calm-glass:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: node calm-glass/check-design.mjs src/ --allow calm-glass.allow.json
```

Keep exceptions in the allow file, never in comments in the code. Change values only in the token block.
