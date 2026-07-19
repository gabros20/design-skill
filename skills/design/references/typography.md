# Typography

Purpose: Choose and set type — scale, pairing, measure, leading, display craft — with exact values, and refuse the font and sizing choices that read as templated.

Read when:
- Building a type scale, selecting or pairing fonts, or setting headings, body, or display.
- Fixing type that reads generic, cramped, or unbalanced, or setting multilingual/CJK text.

Skip when:
- The task is layout structure or spacing rhythm (layout-composition) or motion of type (motion).
- You need native platform type systems — Dynamic Type and Material type scale live in surface-ios / surface-android.

Inputs:
- Register (from visual-direction), brief/vibe, content lengths, and any brand fonts.

Produces:
- A type scale, a font pairing with justification, and measure/leading/display settings.

## Contents

- Scale
- Selection and pairing
- Measure and leading
- Display craft
- Fluid vs fixed
- CJK and multilingual
- Font loading
- Validation

## Scale

Size steps are a **ratio**, not increments — `size(n) = base × ratio^n` from a 16px base. Pick one ratio; do not nudge sizes 1–2px ("scale drift").

| Ratio | Use |
|---|---|
| 1.125 major second | Long-form, dense dashboards |
| 1.2 minor third | Calm/dense product UI |
| 1.25 major third | **Default** — most UI, marketing |
| 1.333 perfect fourth | Punchy, display-led |
| 1.5 perfect fifth | Editorial, sparingly |

- **≤ 5 sizes per page.** Do not invent a new size for emphasis — change **weight or color** instead (reaching for a new size is usually a spacing problem: add distance).
- **Body 16px floor; nothing below 14px anywhere.** Sub-16px only for a whitelist (captions, timestamps, table metadata, helper text, fine print). ≥5 distinct sub-16px roles on one screen means it is over-shrunk — cut content, don't shrink type.
- **Rule of three** — most pages need only H1–H3. Reaching for H4–H6 is a complexity smell; split, simplify, or hide behind a disclosure. Differentiate low headings by uppercase/color, not a 4th size.
- **Weight extremes** commit — 200 next to 800 reads intentional; 400/600 reads like a default setting. Keep ≤ 2 active weight levels of contrast.

## Selection and pairing

- **2+1 rule: max three families** — one display, one body, one optional outlier for ≤2 slots (wordmark/hero-stat/pull-quote). Mono counts as a family; same family at different weights counts as one.
- **Pair on a contrast axis** — serif + sans, geometric + humanist, condensed + wide, or one family multi-weight. Never two similar-but-not-identical sans (reads as a mistake). Pair by **role** (display/body/utility), not by vibe.
- **Emphasis** uses italic or bold of the **same** font; mixed-family emphasis is amateur.
- **Reflex-reject list** (no font is banned; reflex picks are): if a candidate is on this list, restart selection and justify it against the brief; **rotate, do not reuse across consecutive projects.** Fraunces · Newsreader · Lora · Crimson · Playfair Display · Cormorant · Syne · IBM Plex · Space Mono · Space Grotesk · **Inter** · DM Sans · DM Serif · Outfit · Plus Jakarta Sans · Instrument Sans · **Instrument Serif** · Poppins · Montserrat · Raleway · Work Sans (+ Roboto/Open Sans/Lato/system stack as body). Inter/SF/Roboto are legitimate in the **serve register** and as native platform defaults.
- **Selection procedure**: write 3 concrete physical-object voice words for the brand; list your 3 reflex fonts and reject any on the list; browse a real catalog (Google, Fontshare, Klim, Pangram Pangram) for the brand-as-physical-object; if the pick matches the original reflex, restart.
- Serif is **discouraged as a reflexive default** ("creative brief = serif" is wrong); use serif only when the brief names it or the brand is genuinely editorial/luxury/heritage and you can say why *this* serif fits.
- **Em-dash** in UI strings, headlines, and generated marketing copy is banned as an AI tell (home: content.md); curly quotes `" " ' '` and ellipsis remain required craft.

## Measure and leading

- **Measure 45–75ch, 66 ideal**; `max-width: 65ch` default. Narrower for captions (40–60ch), wider only for long-form.
- **Leading scales *with* measure**: ~45ch → 1.4, 55–66ch → 1.5, ~75ch → 1.6–1.7. Body never below 1.4; leave headroom for a 1.5 user override (WCAG 1.4.12).
- **Headings tighten as size grows** (inverse relation): display 1.05–1.2, body 1.5–1.65. Fix the cause, not the symptom — widen leading or narrow measure rather than shrinking the font.
- Vertical rhythm: use line-height as the base spacing unit (1.5 × 16 = 24 → space on 24px multiples).

## Display craft

- **Display max ≤ 5.5–6rem (~88–96px)** — bigger reads generated. Default hero `clamp(2.75rem, 5vw + 1rem, 5.25rem)`.
- **Letter-spacing floor ≥ −0.04em** on display (tighter and letters touch); tracking is **size-specific** — negative on large display, ~0 on body, 0.05–0.12em on all-caps labels. A single `letter-spacing` for all sizes is wrong somewhere.
- **Hero headline sizing by character count**: ≤20 chars → full display (single word → up to 7rem); 21–50 → the default sweet spot; 51–90 → cap at display-small and split into eyebrow + headline; >90 → rewrite (a 100-char headline at display size is a reliable AI tell). When you write the headline: ≤7 words, ≤50 chars, no gerund opener.
- `text-wrap: balance` on h1–h3; `text-wrap: pretty` on long prose (kills orphans).
- **All-caps line-height floor 1.0** (rec 1.02–1.08) — below 1.0 the cap-tops collide on wrap.
- Enable `font-optical-sizing: auto`; `tabular-nums` for any data/prices/timers/columns; oldstyle figures for body prose.

## Fluid vs fixed

- **Fluid `clamp()` only for marketing/content headings; fixed `rem` for app UI** (Material, Polaris, Primer, Carbon all use a fixed scale). **Body is always fixed.**
- Apply `clamp()` only to the **top** of the scale; the fluid preferred term **must include a `rem` anchor** (`1.5rem + 3vw`, never `3vw` alone) or zoom accessibility (WCAG 1.4.4) breaks.
- **Clamp max ≤ ~2.5× min** (wider breaks zoom/reflow). Responsive: compress the **ratio** on mobile (1.25 → 1.125), never shrink from the bottom past the 16px body floor.

## CJK and multilingual

- Use a system CJK stack with **Latin first**: `-apple-system, "SF Pro Text", "PingFang SC", "Noto Sans SC", sans-serif`.
- **CJK body line-height 1.7–1.8** (denser than Latin needs).
- Tag content `lang="zh"` / `lang="en"` so the browser picks the right font and line-breaking.
- Most reading-serif webfonts have **no CJK glyphs** — pair a Latin serif with a CJK serif fallback (`"Newsreader", "Songti SC", "Noto Serif SC", serif`) or the serif silently breaks to sans on Chinese.
- Localized text expands (German +20–35%, Finnish +30–40%); design headings and buttons for the long case (budgets live in content.md).

## Font loading

- `font-display: swap` (or `optional` for zero CLS); metric-match the fallback via `size-adjust`/`ascent-override`/`descent-override` to prevent layout shift (Fontaine automates this).
- Preload only the critical weight; use a variable font when you need 3+ weights.
- Never name a paid font in code without confirming it is licensed.

## Validation

- ≤3 heading levels, ≤5 sizes, ≤3 families in use; body ≥16px; measure inside 45–75ch.
- Chosen face is not a reflex pick, or is justified against the brief.
- Display letter-spacing ≥ −0.04em; fluid preferred terms carry a `rem` anchor; all-caps line-height ≥ 1.0.
