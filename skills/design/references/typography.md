# Typography

Purpose: Choose and set type — selection, scale, pairing, measure, leading, display craft — with exact values, and refuse the font and sizing choices that read as templated.

Read when:
- Building a type scale, selecting or pairing fonts, or setting headings, body, or display.
- Fixing type that reads generic, cramped, or unbalanced, or setting multilingual/CJK text.

Skip when:
- The task is layout structure or spacing rhythm (layout-composition) or motion of type (choreography).
- You need native platform type systems — Dynamic Type and Material type scale live in surface-ios / surface-android.

Inputs:
- Register (from visual-direction), brief/vibe, content lengths, scripts, and any brand fonts.

Produces:
- A type scale of role tokens, a font pairing with justification, and measure/leading/display settings.

## Contents

- Selection and pairing
- Scale
- Measure and leading
- Display craft
- Editorial devices
- Fluid vs fixed
- CJK and multilingual
- Font loading
- Validation

## Selection and pairing

- **Eliminate before you browse** (then browse a real catalog — Google, Fontshare, Klim, Pangram Pangram — for 3 physical-object voice words; a pick matching your reflex restarts): list the roles (body, UI, display, data, code), the smallest and largest size, every script now and planned, true italic, the figures *in the served file*, licence per medium (web, app embedding, logo use) and payload; drop any face that fails one. Then **specimen-test** the survivors with real content: the real headline set in 2–3 candidates on the page, the longest locale word, the smallest label, low-DPI, reversed on dark — a face's name or reputation is not a reason.
- **State tone with evidence:** "geometric, near-uniform stroke, circular bowls → technical"; "angled axis, open apertures → warm"; never "feels modern" (a "modern and human" brief does not get a geometric sans). No face is neutral — say *unobtrusive*. Serif vs sans is tone and rendering, not readability. Serif is **discouraged as a reflexive default**; use it when the brief names it or the brand is genuinely editorial/luxury/heritage and you can say why *this* serif fits.
- **Reflex-reject list** (no font is banned; reflex picks are): a candidate on it restarts selection or is justified against the brief; **rotate across consecutive projects.** Fraunces · Newsreader · Lora · Crimson · Playfair Display · Cormorant · Syne · IBM Plex · Space Mono · Space Grotesk · **Inter** · DM Sans · DM Serif · Outfit · Plus Jakarta Sans · Instrument Sans · **Instrument Serif** · Poppins · Montserrat · Raleway · Work Sans (+ Roboto/Open Sans/Lato/system stack as body). Inter/SF/Roboto are legitimate in the **serve register** and as native platform defaults.
- **2+1 rule: max three families** — one display, one body, one optional outlier for ≤2 slots (wordmark/hero-stat/pull-quote). Mono counts as a family; same family at different weights counts as one.
- **Pairing:** exhaust one family's weights, widths and case first, then a superfamily. A second face needs a stated reason, **one shared objective trait** (x-height, proportion, `a/g` shape, terminals) and a contrasted skeleton; anchor on the body face (same designer or foundry is the cheap route). Never two similar-but-not-identical sans — same skeleton is fine, different skeleton with the same low-contrast "flesh" reads as a mistake. Judge the pair where the faces meet, heading over body, and match x-heights at the join, not px.
- Families with **Display and Text cuts** (or an `opsz` axis) set each by size — Display above ~20px, Text below. **Emphasis** uses italic or bold of the **same** font. Numeric columns try `tabular-nums` on the UI face before a mono.

## Scale

Size steps are a **ratio**, not increments — `size(n) = base × ratio^n` from a 16px base. Pick one ratio; do not nudge sizes 1–2px ("scale drift"). Round generated steps to whole or half px and token the rounded value (never 31.25px).

| Ratio | Use |
|---|---|
| 1.125 major second | Long-form, dense dashboards |
| 1.2 minor third | Calm/dense product UI |
| 1.25 major third | **Default** — most UI, marketing |
| 1.333 perfect fourth | Punchy, display-led |
| 1.5 perfect fifth | Editorial, sparingly (1.618 leaves no usable mid size — display only) |

- **One product, two registers:** keep UI on its small ratio and add 2–3 named display steps outside it (`display-1/2`, fluid on marketing only) that no UI component may reference.
- **Each step is a role token** fixing size, leading and weight together (body 16/1.5/400, caption 13/1.4/400, heading 18/1.3/600); emphasis inside a role is one weight step, never a new size.
- **≤ 5 sizes per page.** Do not invent a new size for emphasis — change **weight or color** instead (reaching for a new size is usually a spacing problem).
- **Floors:** long-form body 16px; serve-register UI text 14px (inputs, menus) and 13px (captions, metadata); 12px floor; size in `rem`. Size by **apparent size**: a short-x-height face needs 17–18px body; a face swap re-checks x-height and measure. ≥5 sub-16px roles on one screen means cut content, don't shrink type.
- **Rule of three** — most pages need only H1–H3. Reaching for H4–H6 is a complexity smell; differentiate low headings by case/color, not a 4th size.
- **Weight extremes** commit — 200 next to 800 reads intentional, 400/600 reads like a default; ≤ 2 active weight levels. Hairline weights (100–300) only at ≥28px; below 18px stay ≥400.

## Measure and leading

- **Measure is 45–75 *characters*** (66 ideal), a diagnostic band, not a target — and not `ch`: one `ch` is the width of "0", so 60–75 characters land near 45–60ch and `65ch` holds ~80. Count a full line in the chosen face. ~40 on a phone is fine (never shrink body to buy characters); <35 or >85 is a defect. Size, leading and measure move together.
- **Leading scales *with* measure**: ~45 chars → 1.4, 55–66 → 1.5, ~75 → 1.6–1.7; unitless. Body never below 1.4; leave headroom for a 1.5 user override (accessibility.md). **Leading follows line count, not role:** anything that can wrap to 3+ lines (card descriptions, captions) gets ≥1.4 even in a tight row.
- **Headings tighten as size grows** (display 1.05–1.2, body 1.5–1.65) and **bind forward:** space above > space below, added with margin, never line-height (a wrapped heading then reads as two).
- Paragraphs take one signal — space ≤1em *or* a ≥1em first-line indent, never both, no indent under a heading. A line-height rhythm unit (1.5 × 16 = 24) is for long-form; product UI stays on the 4/8 scale.
- Left-aligned ragged is the default; justify only at ≥50 characters with hyphenation on (narrower opens rivers).

## Display craft

- **Display max ≤ 5.5–6rem (~88–96px)** — bigger reads generated. Default hero `clamp(2.75rem, 5vw + 1rem, 5.25rem)`.
- **Tracking by size, in `em`, never px:** display floor **≥ −0.04em** (tighter and letters touch); headings ≥24px −0.01 to −0.02em; body 0; ≤13px +0.01–0.03em; caps and small caps +0.05–0.12em with common ligatures off on any tracked run. Disabling kerning is never a fix.
- **Hero headline sizing by character count**: ≤20 chars → full display; 21–50 → the sweet spot; 51–90 → cap at display-small and split into a lead-in + headline; >90 → rewrite. When you write it: ≤7 words, ≤50 chars, no gerund opener.
- **Line breaks:** `text-wrap: balance` on h1–h3 and short descriptions (ignored past ~6 lines — never paragraphs), `pretty` on prose. On the hero, break by sense group by hand (≤~24 chars a line) and check every width; if wrapping can't fix a column, edit the copy or widen it.
- **All-caps line-height floor 1.0** (rec 1.02–1.08) — below 1.0 cap-tops collide on wrap; a single-line poster word in heavy caps may run 0.85–0.95.
- **Optical alignment:** hang large display ≈ −0.06em so the glyph's side-bearing lines up with body text; hang opening quotes (`hanging-punctuation: first`). Centre a label on cap height to baseline, not its line box (capitals sit low in pills, discs and icon labels); a centred amount centres its digits with the currency sign hung. A word that must fill a width is sized to its container (`cqi`), checked at 390px. CSS: `frontend` `typography-css.md` "Trimming and optical alignment".
- `font-optical-sizing: auto`; `tabular-nums` (lining) for data/prices/timers/columns; oldstyle proportional figures for body prose.

## Editorial devices

Devices degrade or go: a drop cap only on paragraphs taller than it, never before a quote or numeral;
pull quotes reuse article text outside the measure, never styled as a block quote; captions ≥12px and
≥4.5:1. Each template must look complete with every optional device missing. CSS: `frontend`
`typography-css.md` "Decoration, selection, and drop caps".

## Fluid vs fixed

- **Fluid `clamp()` only for marketing/content headings; fixed `rem` for app UI** (as Material, Polaris and Carbon do). **Body is always fixed.**
- Apply `clamp()` only to the **top** of the scale; the fluid preferred term **must include a `rem` anchor** (`1.5rem + 3vw`, never `3vw` alone) or zoom accessibility (WCAG 1.4.4) breaks.
- **Clamp max ≤ ~2.5× min.** Responsive: compress the **ratio** on mobile (1.25 → 1.125), never shrink from the bottom past the body floor.

## CJK and multilingual

- Use a system CJK stack with **Latin first** (`-apple-system, "PingFang SC", "Noto Sans SC", sans-serif`); tag content with `lang`.
- **CJK body line-height 1.7–1.8**; measure CJK by line width, not character count. Most reading-serif webfonts have **no CJK glyphs** — pair a Latin serif with a CJK serif fallback (`"Newsreader", "Songti SC", "Noto Serif SC", serif`).
- Latin rules stop at the script boundary: never track Arabic (it breaks the joins); give Devanagari, Thai and Vietnamese extra leading for stacked marks; emphasise CJK and Arabic by weight, not italic; require a real bold for every non-Latin script (synthesized bold smears).
- Design for the long localized case (budgets in content.md).

## Font loading

- `font-display: swap` (or `optional` for zero CLS); metric-match the fallback via `size-adjust`/`ascent-override`/`descent-override` (Fontaine automates this).
- Preload only the critical weight; use a variable font when you need 3+ weights.
- Never name a paid font in code unlicensed; logo use needs its own permission (brand-mark.md). CSS: `frontend` `typography-css.md` "Faces and synthesis".

## Validation

- ≤3 heading levels, ≤5 sizes, ≤3 families; body ≥16px; measure inside 45–75 characters.
- At least one heading→body step ≥1.25× — otherwise hierarchy is flat however many sizes exist.
- Chosen face is not a reflex pick, or is justified against the brief.
- At the smallest real size, `1 l I` and `0 O` are distinct (mandatory for codes, IDs and prices) and `c e s` don't converge.
- Display tracking ≥ −0.04em; fluid terms carry a `rem` anchor; all-caps leading ≥ 1.0; fluid type checked at min, max and three widths between (defects live mid-band).
