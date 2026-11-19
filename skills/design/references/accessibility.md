# Accessibility (design-decidable floors)

Purpose: The collection's canonical home for accessibility numeric floors and design-owned a11y
decisions — contrast, target size, zoom/reflow, focus, reduced motion, color independence. Every
other reference points here instead of restating these numbers.

Read when:
- Setting or checking contrast, target size, focus, zoom, or motion against a minimum.
- Deciding which states must be announced, which controls need names, or focus/reading order.
- Any surface or visual reference needs an accessibility floor (they cite this file).

Skip when:
- You need ARIA attribute wiring, semantic-HTML implementation, or live-region code → `frontend`.
- You need an independent WCAG audit or automated-tool run as conformance evidence → `quality`.

Inputs:
- The design under review (rendered or specified), its palette, and target surfaces.

Produces:
- Pass/fail against each floor, the specific fix, and a design-decidable a11y priority order.

## Contents

- Contrast (APCA + WCAG)
- Target sizes (per-platform divergence)
- Zoom and reflow
- Focus
- Reduced motion
- Color independence and CVD
- Forced colors / high contrast
- Design-decidable priority ladder
- Boundary and routing

## Contrast

Contrast is always foreground vs the background it actually sits on (nearest parent's background;
for text over an image, the brightest region under the text). **APCA is the recommended default**
(perceptually accurate, pairs naturally with OKLCH); **WCAG 2 is still required for any formal
conformance claim.**

| Content | WCAG 2 (ratio) |
|---|---|
| Normal text (<24px, or <18.66px bold) | 4.5:1 AA · 7:1 AAA |
| Large text (≥24px, or ≥18.66px bold — WCAG's 18pt / 14pt bold; 1pt = 1.333px) | 3:1 AA · 4.5:1 AAA |
| UI components, graphical objects, focus rings | 3:1 AA |

**APCA tiers** (Lc is signed; compare the absolute value): body and column text **75** (aim 90) · other
text — labels, headings **60** · large text (≥36px, or ≥24px bold) and fine-line icons **45** · solid
icons, controls, focus rings **30** · dividers **15**. Body copy at Lc 60 is a fail.

- **Fix contrast by adjusting lightness only** (OKLCH): chroma has negligible effect; keep C and H,
  change the L distance between foreground and its background.
- **Lightness-gap guide:** on a light bg (L > 0.85) foreground L < 0.45; on a dark bg (L < 0.25)
  foreground L > 0.75. Approximations — always verify with an actual contrast calculation.
- Error and success colors must themselves meet 4.5:1; placeholder text meets 4.5:1.
- **A background that changes** with scroll, time, chapter or theme: text colour follows one global variable and passes at every stop — check each page's end state and the 404, not just the hero. Fixed UI over imagery stays legible via a scrim or white text with `mix-blend-mode: difference`.
- **Scarcity framing:** accessible pairs are rare, not a checkbox — roughly 12% of random color
  pairs clear WCAG 4.5, and ~0.08% clear APCA Lc 90. Treat contrast as a constrained search.

## Target sizes (per-platform divergence)

A web-trained default flattens these to one number. They differ by platform:

| Surface | Minimum interactive target | Source |
|---|---|---|
| Web | **24×24 CSS px** (WCAG 2.5.8 AA), or smaller when 24px circles centred on each target overlap no other target or circle (20px targets need a 4px gap); **44×44** is AAA (2.5.5) | WCAG 2.2 |
| iOS / iPadOS | **44×44 pt** | Apple HIG |
| Android | **48×48 dp** | Material 3 |

- The target is the interactive area, not the visual glyph. A 16–24px icon can carry a 44pt tap
  area — expand hit area with padding, `::after { inset: -10px }`, or `hitSlop`, not visual size.
- Keep ≥8px / 8dp between adjacent targets; keep targets clear of the notch, Dynamic Island,
  gesture bar, and screen edges. Before calling a web target undersized, check 2.5.8's exceptions
  (spacing, an equivalent control, inline text, user-agent native, essential). Expanded hit areas
  never overlap, and decorative layers over a control (glow, sheen, full-bleed `::after`) are
  non-interactive.
- **Every drag has a single-pointer alternative** (2.5.7) — move buttons on sortable rows, a "Move
  to…" menu on board cards, a list view beside a drag canvas — and every pinch, swipe or path gesture
  has a tap equivalent (2.5.1).

## Zoom and reflow

- Content **reflows at 320px width with no horizontal scroll** (WCAG 1.4.10) — that is 1280px at 400%. Genuinely two-dimensional content (data tables, maps, code) may scroll inside its own box; text containers take `min-height`, never a fixed height.
- **Text spacing (1.4.12):** the layout survives a user override of line-height 1.5×, paragraph spacing 2em, letter-spacing 0.12em and word-spacing 0.16em with no clipping or overlap; fixed heights, `overflow: hidden` and fixed-width labels break first. Contrast, 200% zoom and text spacing fail independently.
- Support browser zoom to **200% and 400%**; iOS Dynamic Type scales text up to ~200% and layouts
  must reflow to fit it (no truncation of essential content).
- Never set `maximum-scale=1` or `user-scalable=no` — it breaks pinch-zoom (WCAG 1.4.4). Use
  `viewport width=device-width, initial-scale=1`.
- Body text ≥16px on mobile web (below it, iOS auto-zooms the field on focus).

## Focus

- Every interactive element has a **visible focus indicator**; never `outline: none` without a
  visible replacement.
- **Focus order follows visual/reading order.** No positive `tabindex`; an irregular collage keeps its source order in the story's order (read the page with CSS off to check).
- **Skip link:** on any page with repeated navigation, the first Tab stop is a "Skip to content" link, visible on focus, landing on `<main>` (2.4.1); repeated landmarks get distinguishing labels (Primary, Breadcrumbs).
- Indicator spec (WCAG 2.2 focus appearance, 2.4.13 AAA — the target to design to): area ≥ the component's perimeter × 2px thickness,
  ≥3:1 contrast against adjacent colors; implement with `:focus-visible`.
- Overlays: trap focus inside a modal, set initial focus inside it, restore focus to the trigger on
  close, and let Escape close it.

## Reduced motion

- `prefers-reduced-motion` is a **required, complete state** — the no-motion experience must be the
  finished, usable design, not a degraded one. Every motion device ships this kill-switch.
- Reduced means **gentler, not necessarily zero**, decided per moment: essential motion (a state
  transition that carries meaning) may remain in a calmer form; decorative motion (parallax,
  ambient loops, scroll-hijack) collapses to static. Never carry meaning by motion alone.
- **Pause, stop, hide (2.2.2, Level A, independent of the OS setting):** anything that moves, blinks
  or auto-updates on its own for more than 5s beside other content — a muted looping hero video, a
  carousel, marquee, ticker, ambient loop — has a visible pause/stop control and pauses on hover and
  focus; carousels start paused under reduced motion. Scroll-linked motion is user-driven and exempt.
  Never more than 3 flashes per second (2.3.1).
- **Vestibular triggers** beyond parallax: full-viewport moving backgrounds, slow loops near 0.2 Hz,
  abrupt light↔dark jumps (ease the theme change), and large objects travelling far (semi-transparent
  in transit, or fade out and back in at the destination).
- The canonical duration/easing scale lives in `motion.md`; this file owns only the floor.

## Color independence and CVD

- **Never carry meaning by color alone** — pair every color signal with icon, label, shape, or
  pattern. The distinction must survive grayscale and every state (hover/focus/disabled).
- **Links in body text** keep an underline or another non-colour cue at rest; colour alone passes
  1.4.1 only with 3:1 against the surrounding text *and* a non-colour cue on hover and focus. Nav and
  buttons, recognisable by position and shape, are exempt.
- CVD affects ~8% of males, ~0.5% of females. **Orange↔blue is the single most robust CVD-safe
  pair:** orange spans both opponent axes (reddish + yellowish), blue is its opposite on the
  yellow–blue axis, so contrast survives whichever axis is lost. Avoid red/green as the sole signal.
- A grayscale/lightness-separation check is a fast screen, not proof — still verify WCAG/APCA and
  test deuteranopia + protanopia.

## Forced colors / high contrast

- `prefers-contrast: more` = macOS/iOS "Increase Contrast"; `forced-colors: active` = Windows High
  Contrast Mode (it overrides your colors — respect it with system color keywords such as
  `ButtonText` / `ButtonFace` / `ButtonBorder`).
- Declare `color-scheme: light dark` so native controls and scrollbars match the theme.

## Design-decidable priority ladder

Rank a11y work by user impact; the top three block release:

1. **Accessible names (critical):** every interactive control has a name; icon-only buttons carry
   a label; every input/select/textarea is labeled; links use meaningful text (never "click here");
   decorative icons are hidden.
2. **Keyboard access (critical):** no `div`/`span`-as-button without full keyboard support; every
   interactive element reachable by Tab with visible focus; Escape closes overlays.
3. **Focus & dialogs (critical):** trap and restore focus (see Focus); opening a dialog must not
   scroll the page unexpectedly.
4. **Contrast & states (medium):** meet the contrast table; disabled states are not conveyed by
   color alone; hover-only interactions have keyboard equivalents.
5. **Media & motion (low–medium):** meaningful (or empty) `alt`; captions for spoken video; respect
   reduced motion; no autoplaying audio — sound only when the concept is about sound, off by default,
   started by a gesture, behind a toggle that states its state.

In a full UI review, Accessibility and Touch/target sizing are the two CRITICAL categories checked
first, before typography, color, or polish.

## Boundary and routing

Design owns the **decisions**: which state must be announced, which control needs a name, target
size, contrast floor, focus and reading order intent, reduced-motion intent. Route the rest:

- ARIA attribute wiring, semantic-HTML structure, live-region implementation → `frontend`.
- Automated tooling (Axe/Lighthouse/WAVE — catches only ~30–40% of issues), manual screen-reader
  and keyboard test execution, and WCAG audits **as conformance evidence** → `quality`.
