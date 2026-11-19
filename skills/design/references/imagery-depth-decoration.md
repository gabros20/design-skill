# Imagery, depth, and decoration

Purpose: Make a surface read as crafted rather than flat — the depth build order, materials (shadow,
glass, grain, glow, tactile, Apple translucency), image treatment and text over image, the
enrichment-tier decision, and the decoration discipline that keeps all of it from tipping into slop.

Read when:
- A section reads flat and needs depth; choosing shadow/glass/grain/gradient treatments; placing text
  over imagery; deciding how much visual enrichment a page needs and at what fidelity.

Skip when:
- Getting the pictures — licences, library photos, screenshots, generated sets → image-sourcing.md;
  product shots, explanatory figures, drawn illustration → product-visuals.md.
- The register is a dense serve-the-product tool where stillness is the brand (use one hairline/shadow
  and stop), or the task is pure layout/type/color.

Inputs:
- The section's job, register, and whether real product imagery exists.

Produces:
- A depth/material spec and an enrichment plan (tier + archetype), each with a reduced-motion fallback.

## Contents
- Depth build order
- Materials: shadow, glass, solid glass, grain, glow, tactile, Apple translucency
- 3D tilt and scroll depth
- Image treatment and text over image
- Enrichment tiers and image-need
- Decoration discipline and authenticity

## Depth build order

Resolve a flat plane into layers in this order: (1) establish a canvas; (2) in an atmospheric,
after-dark register only, glow a midground — at most two fixed radial blooms, each ~20–30% of the
canvas; elsewhere skip to (3), since a glow behind text is the generated default; (3) float the
foreground on layered shadows/glass; (4) lay one shared grain over everything to fuse it; (5) add
motion (parallax/tilt) as the final ~10%. Cool/dark recede; warm/bright/high-contrast advance. Put
`isolation: isolate` on the section, or `mix-blend-mode` grain and `backdrop-filter` glass leak
across sections. A layered hero hands off a **layer contract**: each plane's asset, its relative
travel, what it must keep touching or covering (what moves together is one plane), opening, midpoint
and exit in words, and a separate phone composition; motion code:
`scroll-animation` `layered-visuals.md` "2. Depth parallax".

## Materials

**Layered shadows / elevation.** Stack 3–6 shadows with doubling offset+blur from **one light source**
(top, so vertical offset ≈ 2× horizontal). Tuck each layer with a negative spread of half its blur so
the stack darkens under the box without a side halo — a worked medium step: a 6% 1px ring plus
1/3/6/12/24px layers at 6% each. Elevation ramp = offset↑ blur↑ **opacity↓** across levels; bake as
`--e0…--e4`. **Tint the shadow toward the background hue, never pure `#000`** (dead grey). On dark themes
shadows vanish: elevate by **raising L per level**, each jump
barely visible alone; worked ladder (absolute L from the base): +0 → +7% → +9% → +12%, plus
an inset rim-light + border. Don't animate layered shadows on large elements.

**Glassmorphism.** `backdrop-filter: blur(8–15px) saturate(160%)` (saturate revives washed color); bg
opacity 8–30% (dark UI 6–12%); a 1px low-opacity white border is the edge; an inset top highlight is
the glass. Max 2–3 glass elements per viewport; **never glass on glass** (legibility collapses);
never animate `backdrop-filter`; ship a `-webkit-` prefix + `@supports not` solid fallback; drop blur to
6–8px on mobile; check text against the *brightest* backdrop region. Needs a busy backdrop to read;
liquid-glass refraction belongs on one hero element only.

**Solid glass** (for app UI: surface-webapp.md "Solid Glass"): depth is opacity; on an even, unlit
L 0.16 page, panel ~4.5% white, card L 0.31 at 46%, popover L 0.22 at 96%; light, near-white 44 / 60 /
96% on L 0.925 grey; blur 26px, saturated in light only. The edge is the material, inset shadows on a
borderless pane: 1px top rim (white 16% dark / 90% light), a fainter inner line, a 1px hairline
(white 6% / ink 10%), a narrow drop (`0 12px 32px -14px`; popover `0 24px 60px -18px`). Over imagery
or motion, popover thickness. Reduced transparency: opaque, edge kept; forced colors strips
shadows: give a real border.

**Grain / film noise** (highest ROI, kills gradient banding). SVG `feTurbulence` on an `::after`,
`mix-blend-mode: overlay`, `pointer-events: none`, static (per-frame animation is expensive). Levers:
`baseFrequency` 0.6–0.9 fine grain (~0.2 blotchy); `fractalNoise` soft vs
`turbulence` rippled; `numOctaves` 2–4; `stitchTiles='stitch'`. **Budget:** one texture family per
page (grain, halftone, misregistration, scanline — never two); ≤0.08 opacity page-wide (>0.1 looks like
a broken TV), ≤0.15 inside one plate, ≤0.05 or none under running text; contrast measured on the
textured result. Untreated turbulence at these opacities is invisible haze: threshold it into
specks with an `feColorMatrix` alpha row of about ×9 − 4; specks turn light on dark grounds.

**Gradient glow (aurora).** Where the register earns it (step 2 above): stacked `radial-gradient`s + a
`blur(60–100px)` over a dark base, desaturated and multi-point, and static — never animated (a slow
drift is a busy background; `filter`/`background` animation stutters). A single accent "spotlight" behind the headline
is the tell, not the technique (anti-defaults.md).

**Tactile surfaces.** Raised = a light-to-dark vertical gradient, a 1px edge bright on top and dark
below, outer elevation, an inset top highlight; pressed reverses each of those (plus `translateY(1px)`).
One material per component, never mixed with glass; pressed depth only on controls; text stays
high-contrast — what separates it from **neumorphism**, the dual light/dark "extruded plastic" that
fails WCAG contrast and breaks dark mode.

**Apple translucency (native materials).** Nav, toolbars and sheets are translucent layers (blur +
semi-transparent bg) with content scrolling under, not opaque bars. Heavier material = structural,
lighter = interactive; bigger surfaces read thicker (stronger blur, deeper shadow). Dim-to-focus
(scrim, background pushed back) for modal tasks; no scrim for parallel panels. **Vibrancy:** over a translucent surface, raise contrast, bump
weight slightly, add a touch of letter-spacing; put color on a solid layer, not the translucent
foreground. Where content meets floating chrome, a soft scroll-edge fade beats a hard 1px divider.

## 3D tilt and scroll depth

- **Tilt:** `perspective: 1200px` on the parent for a card (≈1,800–2,600px for a near-full-width panel; less distorts); angles **8–16°** (more reads as a 2010 app-store mockup); render the asset at 2×; disable on touch. A turned panel lands face-on at rest, lit from one key. Pointer tilt ±~15°, spring-smoothed, flat on leave; magnetic pull ≈ 0.6 × distance, zero by ~100px; fine pointers only, never on functional data.
- **Parallax / scroll depth:** pure CSS (`animation-timeline: scroll()` / `view()`), displacement small (≤ a few hundred px). `background-attachment: fixed` is broken on iOS. Placement and reduced-motion rules: choreography.md "Scroll and reveal". Ken Burns: 12–20s pan-zoom via `translate3d`/`scale3d`, zoom ≤1.15 or faces distort. (Motion values: motion.md.)

## Image treatment and text over image

- Foundations: `aspect-ratio` reserves space; `object-fit: cover`; `<picture>` swaps the *crop* per viewport (`srcset`/`sizes` for mere resolution). Default crops: avatar 1:1, headshot 4:5, hero 16:9, story 9:16; eyes about a third from the top.
- **Shapes:** `clip-path` is hard-edged (aliases on curves); **use `mask-image` for soft/alpha edges.** Clipping crops — test the focal point per breakpoint with `object-position`.
- **Content photos take a 1px inset edge** in pure black (light theme) or white (dark) at 10% — a tinted neutral reads as dirt on the edge. Not on transparent art.
- **Text over image (scrim), least→most damage:** a strip/highlight behind the text → crop to a quiet copy area → a backdrop-blur chip → a full tint (last resort). Shape the scrim to the copy: a corner gradient for corner copy, a bottom band once copy spans the width (phones), a column under a text column, or mask the image away from the text. Over bright sky or haze, a soft pool of the photo's deep tone behind the line beats a per-letter shadow. Test dark type on the *darkest* patch under it and light type on the brightest; over video, the worst frame. Contrast floors: accessibility.md.

## Enrichment tiers and image-need

Reach for the **highest tier you can genuinely ship** — skipping tiers is the new tell:

0. **Typography-only** — always acceptable; the strongest fail-state.
- A **Pure CSS art** → B **Hand-built SVG** — geometry, diagrams and charts of a real system or data (named via `aria-label`), never a drawn depiction of the subject (an object, person, product, building or landscape past icon size reads as generated; show its photograph, the product, or type at scale) → C **Generated illustration** (image-sourcing.md) → D **Library illustration** (customized) → E **Lottie** — last resort, illustration only (never UI state); brief the animator first: no expressions (bake them), 3D layers, effects or layer styles. Reaching for E out of familiarity is the templated-page signature. Explanatory figures and product shots: product-visuals.md.

**Image-need by domain** (default typography-only): e-commerce / portfolio / food / team / travel /
news → real photos (placeholder if none yet); SaaS / manifesto / agency → an abstract kit; API / docs /
CLI and editorial/foundry → no imagery. An abstract background (gradient + grain) is a distinct
archetype, not the aurora. **Deletion test per picture:** if removing it loses no fact, it was
mood (a city at night, a laptop on a desk). Below the hero, photographs carry about a quarter to a
third of the page (more only on a photographic or portfolio shape) and never lead two sections in a
row. Hero footprint and discipline: surface-website.md; max one polish move + one enrichment. Video: `muted`/`loop`/`playsinline` + poster,
`preload="metadata"`, `fetchpriority="high"` (never lazy on a hero), a visible pause (accessibility.md).

## Decoration discipline and authenticity

Every decorative element justifies itself as **depth, brand, or eye-guidance** or is cut (remove one
accessory before shipping). Faint / color-matched / edge-faded / relevant reads premium;
loud / saturated / hard-edged reads cheap. Devices: dot-grid, blueprint and stripe textures only where
the subject *is* a canvas, map, plan or instrument (opacity 3–8%, edge-faded with `mask-image`) —
elsewhere they are the generated background; color-matched dividers (a loud rainbow wave is a 2017
tell); organic blobs (blurred, low-sat, partly off-canvas); connectors only where they encode a true
sequence; 2–4 relevant PNG/3D cutouts max (`pointer-events: none`, `aria-hidden`); a brand mark as
ghosted texture ≤6% opacity. A subject's world never licenses hate or militarist emblems as ornament
(Rising Sun rays, the Confederate flag, Nazi-era marks or their stylisations); use its neutral forms.

**Authenticity — the visual IS the product, not a poster of it.** Real copy at real lengths (the 0-item
account, the 3-line title); mirror the real output format, labels, and truncation. **Refuse fabricated marketing chrome:** invented dashboards, gradient-filled
text, sparkle/aurora glows used as substance, glassmorphism standing in for content, typewriter/rotator
headlines, faux-AI scanning lines, decorative pill badges, re-drawn browser/phone/IDE frames. The test:
could a visitor screenshot the real product and get the same impression? The honest routes are in
product-visuals.md.
