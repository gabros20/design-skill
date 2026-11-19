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
- WCAG 2.2 AA decisions design owns
- Reduced motion
- Color independence and CVD
- Forced colors / high contrast
- Design-decidable priority ladder
- Boundary and routing

## Contrast

Contrast is always foreground vs the background it actually sits on (nearest parent's background;
for text over an image, the worst region under the text). **Every pair passes WCAG 2 AA — that is
the gate** (EN 301 549, Section 508 and ADA rules cite WCAG 2.x; WCAG 3 is a draft). APCA is a second,
stricter lens for body text, thin weights and dark mode, where WCAG 2 misjudges; where they disagree,
satisfy both.

| Content | WCAG 2 (ratio) |
|---|---|
| Normal text (<24px, or <18.66px bold) | 4.5:1 AA · 7:1 AAA |
| Large text (≥24px, or ≥18.66px bold — WCAG's 18pt / 14pt bold; 1pt = 1.333px) | 3:1 AA · 4.5:1 AAA |
| UI components, graphical objects, focus rings | 3:1 AA |

**APCA lens** (Lc is signed; compare the absolute value): body and column text **75** (aim 90) · other
text — labels, headings **60** · large text (≥36px, or ≥24px bold) and fine-line icons **45** · solid
icons, controls, focus rings **30** · dividers **15**. Body copy at Lc 60 is a fail.

- **Fix contrast by moving lightness only** (OKLCH; hold C and H). Guide: on a light bg (L > 0.85)
  foreground L < 0.45; on a dark bg (L < 0.25) foreground L > 0.75 — then measure.
- Error and success colors must themselves meet 4.5:1; placeholder text meets 4.5:1.
- **A background that changes** with scroll, time, chapter or theme: text colour follows one global variable and passes at every stop — check each page's end state and the 404, not just the hero. Fixed UI over imagery stays legible via a scrim or a solid chip; `mix-blend-mode: difference` fails over mid-tones (white over 50% grey is ~1:1).

## Target sizes (per-platform divergence)

A web-trained default flattens these to one number. They differ by platform:

| Surface | Minimum interactive target | Source |
|---|---|---|
| Web | **24×24 CSS px** (WCAG 2.5.8 AA), or smaller when 24px circles centred on each target overlap no other target or circle (20px targets need a 4px gap); **44×44** is AAA (2.5.5) | WCAG 2.2 |
| iOS / iPadOS | **44×44 pt** | Apple HIG |
| Android | **48×48 dp** | Material 3 |

- **24px is the conformance floor, not the target:** a touch-first web layout designs to the native numbers (44–48px); 24–32px targets are for dense, pointer-first tools.
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
- Support browser zoom to **200% and 400%**; iOS Dynamic Type takes Body from 17pt to 53pt at AX5
  (~3×) — review at AX5: rows stack, nothing essential truncates.
- Never set `maximum-scale=1` or `user-scalable=no` — it breaks pinch-zoom (WCAG 1.4.4). Use
  `viewport width=device-width, initial-scale=1`.
- Form-control text ≥16px on mobile web (iOS zooms the page on focus below that).

## Focus

- Every interactive element has a **visible focus indicator**; never `outline: none` without a
  visible replacement.
- **Focus order follows visual/reading order.** No positive `tabindex`; an irregular collage keeps its source order in the story's order (read the page with CSS off to check).
- **Skip link:** on any page with repeated navigation, the first Tab stop is a "Skip to content" link, visible on focus, landing on `<main>` (2.4.1); repeated landmarks get distinguishing labels (Primary, Breadcrumbs).
- **Focus indicator:** visible (2.4.7 AA), ≥3:1 against the colours it touches (1.4.11 AA), never
  fully hidden by sticky or fixed chrome (2.4.11 AA). Design to 2.4.13 (AAA): a ring ≥2px around the
  perimeter whose pixels change ≥3:1 between unfocused and focused; implement with `:focus-visible`.
- Overlays: trap focus inside a modal, set initial focus inside it, restore focus to the trigger on
  close, and let Escape close it.

## WCAG 2.2 AA decisions design owns

Default target: **WCAG 2.2 AA** unless the brief sets another. Decided in design, not in code:

- **Content on hover or focus (1.4.13):** a tooltip or flyout closes on Escape without moving the pointer, lets the pointer travel onto it, and stays until dismissed; essential information never lives only in a tooltip.
- **Single-key shortcuts (2.1.4):** can be turned off, remapped, or work only while their component has focus.
- **Redundant entry (3.3.7):** nothing asked twice in one flow — prefill or offer to reuse.
- **Accessible authentication (3.3.8):** no step that depends on memory, transcription or a puzzle without an alternative; paste and password managers work; offer a passkey or emailed link.
- **Consistent help (3.2.6):** help and contact sit in the same place on every page.
- **Timeouts (2.2.1):** warn ≥20s before expiry, extend with one action, keep what was entered.
- **Headings follow structure, not size:** one `h1`, no skipped levels; the look comes from a type role.

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
- CVD affects ~8% of males, ~0.5% of females. **Orange↔blue is the most robust CVD-safe pair**
  (why: color.md); avoid red/green as the sole signal.
- A grayscale/lightness-separation check is a fast screen, not proof — still verify WCAG/APCA and
  test deuteranopia + protanopia.

## Forced colors / high contrast

- `prefers-contrast: more` = macOS/iOS "Increase Contrast"; `forced-colors: active` = Windows High
  Contrast Mode (it overrides your colors — respect it with system color keywords such as
  `ButtonText` / `ButtonFace` / `ButtonBorder`).
- Declare `color-scheme: light dark` so native controls and scrollbars match the theme.

## Design-decidable priority ladder

Rank a11y work by user impact; the top three block release: (1) **accessible names** — every control
named, icon-only buttons labelled, inputs labelled, meaningful link text, decorative icons hidden ·
(2) **keyboard access** — no `div`-as-button, everything reachable by Tab with visible focus, Escape
closes overlays · (3) **focus & dialogs** — trap and restore focus; opening a dialog never scrolls the
page · (4) contrast and states — disabled not by colour alone, hover-only interactions have keyboard
equivalents · (5) media and motion — meaningful or empty `alt`, captions for spoken video, reduced
motion; no autoplaying audio, and sound only when the concept is about sound, off by default, behind a
toggle that states its state.

## Boundary and routing

Design owns the **decisions**: which state must be announced, which control needs a name, target
size, contrast floor, focus and reading order intent, reduced-motion intent. Route the rest:

- ARIA attribute wiring, semantic-HTML structure, live-region implementation → `frontend`.
- Automated tooling (Axe/Lighthouse/WAVE — catches only ~30–40% of issues), manual screen-reader
  and keyboard test execution, and WCAG audits **as conformance evidence** → `quality`.
