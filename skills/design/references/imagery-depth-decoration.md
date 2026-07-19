# Imagery, depth, and decoration

Purpose: Make a surface read as crafted rather than flat — the depth build order, materials (shadow,
glass, grain, Apple translucency), image treatment, the enrichment-tier decision, and decoration
discipline that keeps all of it from tipping into slop.

Read when:
- A section reads flat and needs depth; choosing shadow/glass/grain/gradient treatments; placing text
  over imagery; deciding how much visual enrichment a page needs and at what fidelity.

Skip when:
- The register is a dense serve-the-product tool where stillness is the brand (use one hairline/shadow
  and stop), or the task is pure layout/type/color.

Inputs:
- The section's job, register, and whether real product imagery exists.

Produces:
- A depth/material spec and an enrichment plan (tier + archetype), each with a reduced-motion fallback.

## Contents
- Depth build order
- Materials: shadow, glass, grain, gradient glow, Apple translucency
- 3D tilt and scroll depth
- Image treatment and text-over-image
- Enrichment tiers and image-need
- Decoration discipline and authenticity

## Depth build order

Resolve a flat plane into layers in this order: (1) establish a canvas; (2) glow a midground behind
it (aurora); (3) float the foreground on layered shadows/glass; (4) lay one shared grain over
everything to fuse it; (5) add motion (parallax/tilt) as the final ~10%. Cool/dark recede;
warm/bright/high-contrast advance. Put `isolation: isolate` on the section — without it, `mix-blend-mode`
grain and `backdrop-filter` glass leak across sections.

## Materials

**Layered shadows / elevation.** Stack 3–6 shadows with doubling offset+blur and decaying opacity,
from **one light source** (top, so vertical offset ≈ 2× horizontal). Elevation ramp = offset↑ blur↑
**opacity↓**; bake as `--e0…--e4`. **Tint the shadow toward the background hue, never pure `#000`**
(pure black reads dead grey). On dark themes shadows vanish — dark-mode surfaces
elevate by **raising L a few percent per level**, each jump barely visible in isolation; worked ladder:
base → +7% → +9% → +12% absolute offsets from base (≈2–7% per step), plus an inset rim-light + border. Don't animate layered shadows on large elements.

**Glassmorphism.** `backdrop-filter: blur(8–15px) saturate(160%)` (saturate revives washed color); bg
opacity 8–30% (dark UI 6–12%); a 1px low-opacity white border is the edge; an inset top highlight is
the glass. Max 2–3 glass elements per viewport; never animate `backdrop-filter`; ship a `-webkit-`
prefix + `@supports not` solid fallback; drop blur to 6–8px on mobile. Needs a busy backdrop to read.

**Grain / film noise** (highest ROI, kills gradient banding). SVG `feTurbulence` on an `::after`,
`opacity 0.03–0.08` (>0.1 looks like a broken TV), `mix-blend-mode: overlay`, `pointer-events: none`,
static (animating per frame is expensive). Levers: `baseFrequency` 0.6–0.9 = fine film grain (~0.2 =
blotchy clouds); `type='fractalNoise'` soft vs `'turbulence'` rippled; `numOctaves` 2–4;
`stitchTiles='stitch'` for seamless tiling.

**Gradient glow (aurora).** Stacked `radial-gradient`s + a large `blur(60–100px)` at moderate opacity
over a dark base; animate slowly (15–30s) via **`transform` only** (`filter`/`background` animation
stutters). A soft, desaturated multi-point glow reads premium; a hard two-stop linear gradient reads
cheap, and a saturated diagonal purple→pink gradient is the canonical AI tell. Ship a
reduced-motion off-switch.

**Apple translucency (native materials).** Build nav/toolbars/sheets as translucent layers (blur +
semi-transparent bg) with content scrolling under, not opaque bars. Material weight encodes hierarchy:
darker/heavier = structural regions, lighter = interactive; **never stack a light translucent surface
on another** (legibility collapses). Bigger surfaces read thicker (stronger blur + deeper shadow).
Dim-to-focus for modal tasks (scrim + push background back); translucency-without-scrim for parallel
panels. **Vibrancy:** over a translucent surface, don't use flat gray text — raise contrast, bump
weight slightly, add a touch of letter-spacing; put color on a solid layer, not the translucent
foreground. Prefer a soft scroll-edge fade where content meets floating chrome over a hard 1px divider.

**Neumorphism — know it, avoid it:** the dual light/dark "extruded plastic" look fails WCAG contrast
and breaks dark mode. The 2026 equivalent is glass + layered shadow + grain.

## 3D tilt and scroll depth

- **Tilt:** `perspective: 1200px` on the parent; keep angles subtle **8–16°** (over-rotation reads as
  a 2010 app-store mockup); render the asset at 2× (tilt distorts text); mouse-track via rAF; disable
  on touch. Device/browser mockups: tilt ≤20° if the screenshot must read, baked at 2×.
- **Parallax / scroll depth:** the 2026 way is pure CSS (`animation-timeline: scroll()` / `view()`),
  displacement small (≤ a few hundred px). `background-attachment: fixed` is broken on iOS. Parallax
  never on text or critical content; always ship a `prefers-reduced-motion` kill-switch. Ken Burns:
  12–20s pan-zoom via `translate3d`/`scale3d`, zoom ≤1.15 or faces distort. (Motion values: motion.md.)

## Image treatment and text-over-image

- Foundations: `aspect-ratio` reserves space (kills layout shift); `object-fit: cover` fills without
  squishing; `<picture>` swaps the *crop* per viewport (use `srcset`/`sizes` for mere resolution).
  Always ship `width`/`height` or `aspect-ratio`.
- **Shapes:** `clip-path` is GPU-accelerated and hard-edged (aliases on curves); **use `mask-image`
  for soft/alpha edges.** Two shapes with the same number of curve commands can morph. Clipping crops
  — combine with `object-position` and test the focal point per breakpoint.
- **Text over image (scrim), least→most damage:** a strip/highlight behind the text → crop to a quiet
  copy area → a backdrop-blur chip → a full tint (last resort). Add `text-shadow: 0 1px 3px rgb(0 0 0
  /.6)`, felt not seen. Test the *brightest* worst-case region. Contrast floors are in accessibility.md.

## Enrichment tiers and image-need

Reach for the **highest tier you can genuinely ship** — skipping tiers is the new tell:

0. **Typography-only** — always acceptable; the strongest fail-state.
- A **Pure CSS art** → B **Hand-built SVG** → C **Generated illustration** (post-processed, with
  provenance) → D **Library illustration** (customized) → E **Lottie** — last resort, articulated
  character motion only. "Reaching for E because it's familiar is the signature of a templated page."

**Image-need by domain** (default is typography-only): e-commerce / portfolio / food / team / travel /
news → real photos (placeholder if none yet); SaaS / manifesto / agency → an abstract kit; API / docs
/ CLI and editorial/foundry → no imagery. An abstract background (gradient + grain) is a distinct
enrichment archetype — it is **not** the aurora glow; use it where a section wants texture without a
subject. Hero discipline: footprint 70–90% of the first viewport (not `100vh`;
`min-height: clamp(60vh, 75dvh, 88dvh)`), asymmetric padding (`padding-block-end ≥ 1.3× start`), one
orchestrated reveal, max one polish move + one enrichment per hero. Video: `muted`/`loop`/`playsinline`
+ poster; never `loading="lazy"` on a hero video — use `preload="metadata"` + `fetchpriority="high"`.

## Decoration discipline and authenticity

Every decorative element must justify itself as **depth, brand, or eye-guidance** — otherwise cut it
(remove one accessory before shipping). Faint / color-matched / edge-faded / relevant reads premium;
loud / saturated / hard-edged reads cheap. Devices: SVG dot-grid or blueprint (`radial-gradient`,
opacity 3–8%, edge-faded with `mask-image`); color-matched dividers (a loud rainbow wave is a 2017
tell); organic blobs (blurred, low-sat, partly off-canvas); connectors only where they encode a true
sequence; 2–4 relevant PNG/3D cutouts max (`pointer-events: none`, `aria-hidden`); a brand mark as
ghosted texture ≤6% opacity.

**Authenticity — the visual IS the product, not a poster of it.** Use real copy at real lengths (the
longest realistic name, the 0-item empty account, the 3-line title); mirror the real output format,
labels, and truncation. **Refuse fabricated marketing chrome:** invented dashboards, gradient-filled
text, sparkle/aurora glows used as substance, glassmorphism standing in for content, typewriter/rotator
headlines, faux-AI scanning lines, decorative pill badges, re-drawn browser/phone/IDE frames (use real
screenshots). The test: could a visitor screenshot the real product and get the same impression?
