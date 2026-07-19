# Color

Purpose: Build palettes that are perceptually correct, in-gamut, accessible, and owned rather than
defaulted — the OKLCH model, deterministic palette construction, state derivation, semantic and dark
systems, and contrast math.

Read when:
- Choosing or generating a palette, a neutral ramp, or accent(s); deriving hover/active/disabled
  states; building a dark mode; or checking contrast on a specific pairing.

Skip when:
- You only need the universal contrast floors (those live in accessibility.md) or motion values.

Inputs:
- A brand hue or reference, the surface register, and the target contrast standard.

Produces:
- An OKLCH token set (paper/ink/neutrals/accent + semantic + surfaces), verified for contrast and gamut.

## Contents
- Why OKLCH; syntax
- Palette construction (4 layers + deterministic ramp)
- Tinted neutrals and the anti-cream band
- Color-strategy commitment axis
- State derivation
- Semantic color
- Dark mode
- Contrast and gamut
- CVD and harmony

## Why OKLCH

Use OKLCH as the canonical space for design tokens. Its capability delta over hex/HSL:

- **Perceptual uniformity:** equal L steps look equally different; `oklch(0.5 …)` is visually mid.
  HSL `lightness: 50%` varies wildly by hue — `hsl(60 100% 50%)` yellow and `hsl(240 100% 50%)` blue
  share L=50% but read at very different brightness (sRGB CIELAB L* is ~98 for yellow, ~30 for blue).
- **Stable hue:** OKLCH hue holds across the lightness range; HSL blue drifts toward purple as it
  lightens. Auditing an old HSL ramp: convert each step to OKLCH — hue spread >10° is visible drift.
- **Independent chroma:** an absolute measure of colorfulness, so ramps stay coherent.
- **Finite gamut:** not every OKLCH value is displayable; high chroma clips — gamut awareness required.

Syntax: `oklch(L C H)` or `oklch(L C H / alpha)` — L 0–1, C 0–~0.4 (0 = gray), H 0–360°, alpha via
slash only. Relative-color keeps identity: `oklch(from var(--brand) calc(l + 0.1) c h)`. Baseline 2023
(~96% support); ship a hex fallback under `@supports (color: oklch(0 0 0))`.

## Palette construction

**Four layers** (light / dark values):

- **Paper** (background): `oklch(0.96–0.98 0.005–0.015 H)` / `oklch(0.12–0.16 0.008–0.015 H)`.
- **Ink** (body text): `oklch(0.16–0.22 …)` / `oklch(0.92–0.96 …)`.
- **Neutrals:** 5–9 steps, each tinted ≥0.005 chroma toward the anchor hue (never flat gray).
- **Accent:** one saturated color, chroma 0.12–0.22, occupying ≤3–5% of the viewport.

Bans: pure `#000`/`#fff` (halation — use near-black/off-white); zero-chroma gray; three-stop
gradients (two-stop only); accent as a fill >5%; gray text on a color; alpha standing in for an
undefined color ("alpha is a design smell" — define explicit overlay colors).

**Deterministic ramp** (50 lightest → 950 darkest; 9 steps standard):

1. Lightness bounds: `delta = 0.4; minL = max(0.05, baseL − delta); maxL = min(0.95, baseL + delta)` —
   clamp to [0.05, 0.95] so no step is pure black/white (which carry zero chroma).
2. Distribute L evenly from `maxL` (50) to `minL` (950).
3. **Clamp chroma per step to the gamut:** `step.C = (chroma% / 100) · maxChroma(step.L, H)`. High-chroma
   bases correctly thin out at the lightest and darkest ends.

**Multi-hue palettes:** hold the same **L** and the same **chroma percentage** across hues (not the
same absolute C). Same L → equal perceived brightness; same C% → equal vividness relative to each
hue's own maximum (blue's max chroma at a given L differs from green's).

*(Model, ramp algorithm, and contrast numbers re-expressed from jakubkrehel/oklch-skill (no license —
facts only) and meodai/color-expert (CC BY 4.0). Procedural token functions live in design-systems.md.)*

## Tinted neutrals and the anti-cream band

Add **0.005–0.015 chroma toward the brand hue** for greys — warm accent → warm neutrals; never
reflex to default-warm or default-cool. The single most common AI color tell is the warm-neutral
cream/sand/paper band (a specific OKLCH range catalogued in visual-direction.md), which reads cream
regardless of the token name `--paper/--sand/--linen/…`. Don't reflex to hue 250 (blue) or 60
(orange) either — the dominant defaults. The full anti-default catalog is in visual-direction.md; do
not restate it here.

## Color-strategy commitment axis

Pick before picking colors: **Restrained** (tinted neutrals + one accent ≤10%; product default) ·
**Committed** (one saturated color 30–60% of surface) · **Full palette** (3–4 named roles) ·
**Drenched** (the surface *is* the color). The ≤10% accent rule applies to Restrained only. Choose the
mode from a physical-scene sentence ("who uses this, where, under what light, in what mood") — if it
doesn't force the decision, add detail until it does. Dark/light is never a default.

**Distribution: 60-30-10 is visual weight, not pixel count** — 60% dominant neutral surface, 30%
secondary text/surfaces, 10% accent. Vivid works *because* it is rare; multiple accents read as the
"AI gradient" look.

## State derivation

Derive interactive states by a lightness delta from the base — never pick them independently (the
capability delta; a base model picks state colors ad hoc). Re-expressed as OKLCH L deltas:

- `hover` = base L − ~0.03; `active` = base L − ~0.05 (light-on-dark inverts: lighten on hover).
- `subtle`/selected fill = base hue at ~5–8% opacity or a high-L, low-chroma tint; never a saturated
  background in dense tables (competes with content).
- **Fix any state's contrast by moving L only** — chroma has negligible contrast effect; hold C and H.

## Semantic color

Exactly four semantic roles, each mapped to one meaning product-wide: **Red** error/destructive ·
**Amber** warning only · **Green** success · **Blue** info. Hue anchors: error 0–10, warning 35–45,
success 140–160, info 210–230. Align S/L to the brand (muted brand → muted semantics); **reduce
warning L by 5–10%** because yellow/orange read brighter at equal L. If the brand primary is orange,
define a distinct amber for warnings — one hue can't carry two meanings. When in doubt, cut the color;
neutral gray beats a misused semantic.

## Dark mode

Dark mode is **a second verified palette, not an algorithmic flip** — contrast that passes on light
routinely fails on dark. Recipe: paper L 0.12–0.18, ink 0.92–0.96; **build surface elevation from
lighter surfaces, not shadow** (shadows barely read on dark; ladder in imagery-depth-decoration.md); desaturate the accent
0.02–0.04 and raise its L 5–10%; drop body font weight ~one notch (light-on-dark reads heavier from
halation); **never switch hue between modes.** Redefine only the semantic token layer for dark.

## Contrast and gamut

Full numeric floors — the APCA/WCAG pass table and the scarcity stat — live in accessibility.md. The
design-level math to carry here:

- **APCA is the perceptually accurate default and pairs naturally with OKLCH; WCAG 2 is still required
  for formal conformance claims.** Feed the lighter color as the "background" input, and fix any failing
  pair by moving L only (chroma has negligible contrast effect; hold C and H). Accessible pairs are a
  scarce, constrained search — see accessibility.md for the floors — not a checkbox.
- **Gamut:** the most common mistake is requesting chroma the gamut can't show, which clips to a
  duller, hue-shifted color. **Reduce chroma, holding L and H** (clamp toward the boundary). CSS
  gamut-maps `oklch()` automatically; a naive JS oklch→hex only truncates channels. Ship an sRGB base
  and enhance under `@media (color-gamut: p3)`. Cyan has the lowest max chroma; purple the highest.

## CVD and harmony

- **Orange↔blue is the most robust color-vision-deficient-safe contrast pair:** orange spans both
  opponent axes (red + yellow), so it stays distinct whichever axis a viewer is missing. ~8% of men
  have CVD. Never carry meaning by hue alone — pair with lightness, icon, or label.
- **Harmony is character-first, not hue-first.** Geometric hue schemes (complementary/triadic) are
  weak standalone predictors — every hue plane has a different shape in perceptual space. Organize by
  character (pale/muted/deep/vivid) instead; **chroma + lightness predict emotional response better
  than hue** (a muted palette reads calm across many hues). Legibility is lightness variation:
  grayscale is a quick separation check, not accessibility proof.
