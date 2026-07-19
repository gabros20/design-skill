# Layout and composition

Purpose: Structure a screen — grid, spacing rhythm, hierarchy, gestalt grouping, density, repeated-component alignment, and elevation — with exact values and a composition process that avoids the flat, templated result.

Read when:
- Laying out a page or section, building a grid, setting spacing, or fixing weak hierarchy, misalignment, or a "parking lot" screen.
- Aligning a repeated component (cards, rows, tiles, KPIs) or setting elevation/z-index.

Skip when:
- The task is type craft (typography), color, surface materials/glass/grain (imagery-depth-decoration), or motion.
- You need page-level macrostructures/section catalogs — those live in surface-website.

Inputs:
- Register and one-bold-move (from visual-direction), content and its real lengths, target surface.

Produces:
- A grid, a spacing scale, a hierarchy with one focal point, and an alignment/elevation plan.

## Contents

- Grids
- Spacing
- Hierarchy
- Gestalt grouping
- Density
- Repeated-component slot model
- Elevation and z-index
- Composition process and refinement

## Grids

- **CSS Grid for the page, Flexbox for internals** — don't reach for Grid when `flex-wrap` suffices. Breakpoint-free responsive grid: `repeat(auto-fit, minmax(280px, 1fr))`. Container queries size components; viewport sizes the page.
- **Full-bleed breakout grid**: `grid-template-columns: 1fr min(42rem, 100%) 1fr;` — content defaults to the center column (`grid-column: 2`), breakouts span `1 / -1`. Avoid `100vw` for full-bleed (ignores the scrollbar → horizontal scroll); this grid method sidesteps it.
- **12-column base**: `repeat(12, minmax(0, 1fr))` — use `minmax(0, 1fr)`, never bare `1fr` (bare `1fr` won't shrink below content min-size and blows the grid out with long content or images).
- **Bento**: 12-col + `grid-auto-flow: dense` (backfills gaps); limit 6–12 blocks; N items → exactly N cells (no empty cells); give ≥2–3 cells real visual variation, not white-on-white text cards.
- **Never three equal cards** as the layout — break with `1.2fr 1fr 0.8fr` or varied 12-col spans.
- **Break ~20% of the grid, not 100%** — keep at least one consistent edge/baseline or it reads as chaos. Asymmetry reads intentional; centered reads like a default.
- **Ultra-wide cap**: primary content `max-width` 1280–1600px (1440 typical); full-bleed only for backgrounds/decoration (uncapped 4K → >75ch lines + neck movement).
- Page-edge clipping: `overflow-x: clip` on both `html` and `body` (not `hidden` — `clip` preserves sticky/fixed).

## Spacing

- **4pt or 8pt base**; all margins/paddings/gaps are multiples exposed as named tokens (`--space-2xs`…`--space-4xl`), **~6–9 rungs**, not every 4px. A common scale: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96.
- **`gap` over margins** for siblings (kills margin-collapse); reserve `margin` for optical/break-out cases.
- Two scales: **micro** (line-height, padding, gaps) and **macro** (between sections). Section vertical padding often `clamp(4rem, 10vw, 10rem)`.
- The Linear/Stripe/Vercel rule: **"take the spacing that feels like enough, then double it."** Tight within a group (8–16px), generous between groups (48–96px); alternate dense and open sections for cadence — a monotone of one gap everywhere is "the sound of no one deciding."

## Hierarchy

- **Exactly one focal point per view/section** — name it before building, make it win by size/contrast/position/surrounding space, and demote everything else deliberately. Promotion without demotion isn't hierarchy.
- **Levers**: size, weight, color/opacity, whitespace/isolation, scan position. Best hierarchy combines 2–3 at once; use the fewest that work.
- **Weight + color do more work than size** (the Apple/Linear move): one 14px size can hold three tiers — `value 600/primary`, `label 500/secondary`, `meta 400/muted`. Build from three levers, never size alone.
- **Establish hierarchy in grayscale first, color last.** Contrast the primary hard: "make the primary absurdly large and the tertiary absurdly small — the contrast *is* the hierarchy."
- **Squint test**: blur your eyes; if you can't tell headline from body from label, hierarchy is too weak. Universal contrast/target floors live in accessibility.md.
- Eye-flow: **F-pattern** for text-heavy (never put the only CTA bottom-right of a text block); **Z-pattern** for sparse hero (primary CTA at the Z terminus).

## Gestalt grouping

- Proximity, similarity, common region, figure/ground, continuity. **Default to whitespace, not divider lines** — a line takes no space, so deleting it leaves groups cramped; removing a separator usually means *adding* spacing. If you need a divider, the spacing is probably wrong.
- **Weakest container that works**: background tint → border → card surface. Each step adds visual weight; never box the most important element — let it float. **Limit nested containers to two levels.**
- Proximity is set by the *ratio* of within-group to between-group space, not a fixed pixel value: within-group < between-group.

## Density

- Density is a decision expressed in px, then held everywhere: Linear tight, Stripe airy — both chosen. A tool panel at 12–16px padding is workbench-tight; the same card at 24px is a brochure.
- Set density by platform (desktop med-high, mobile low) and user type (power/expert can take high; consumer low). Row tokens: default 44px, compact 32px, spacious 56px; operational expert tools run rows 28–36px with inline status.
- **"Reading is time"** — cut words before shrinking them; front-load the scannable word or number at line start; a recognizable icon replaces reading (a wrong or decorative icon adds work). The goal is *glance*, not *read*.

## Repeated-component slot model

Every repeated element (card, row, tile, KPI, result) is a **fixed slot model**: every slot holds its position even when empty; **one slot absorbs variance** (`flex: 1`); anchors pin with `margin-top: auto` (columns) / `margin-left: auto` (rows).

- **Equal height via a stretched grid/flex track — never a hard-coded `height`** (the tallest instance clips). Reserve optional slots (`min-height`) or overlay them absolutely. Media gets a fixed `aspect-ratio`.
- Handle length in order: (1) **write to length** (titles ≤60, snippets ≤120 chars), (2) clamp + recover with a tooltip/detail view, (3) let one slot grow. Never clamp must-read content (prices, errors, legal). Design for the long i18n case (German/Finnish +30–40%).
- For `-webkit-line-clamp` inside flex/grid, add `min-width: 0` (`min-inline-size: 0`) or truncation silently fails.

## Elevation and z-index

- **Elevation scale**, light and diffuse (heavy black shadows read dated): none / xs `0 1px 2px /.06` / sm `0 1px 3px /.10, 0 1px 2px /.06` / md `0 4px 6px /.08, 0 2px 4px /.06` / lg `0 10px 15px /.08` / xl `0 20px 25px /.08`. One light source (vertical offset = 2× horizontal, light from top-left); on the ramp, offset↑ blur↑ **opacity↓**.
- **Tint the shadow toward the background hue, never pure `#000`** (pure black reads as dead grey). White cards pair a shadow with a 1px border 1.5–2× darker than the shadow tone. On dark themes shadows vanish → use an inset rim-light + border instead. Product surfaces can encode elevation as **lighter surfaces** rather than shadow (ladder in imagery-depth-decoration.md).
- **Named z-index scale, never `9999`**: base 0 / dropdown 100 / sticky 200 / header 300 / modal 400 / toast 500 / tooltip 600.
- **Sticky over fixed** — prefer section-scoped `sticky` to globally `fixed`; header 48–64px, compensate with `body { padding-top: var(--header-height) }`; bottom bar `padding-bottom: env(safe-area-inset-bottom)`. Max simultaneous fixed layers: header + one bottom element.

## Composition process and refinement

1. Decide the section's **one job** before any visuals.
2. Establish hierarchy in **grayscale**; add color last.
3. Type scale: headings ~2–3× body, three levels only (see typography).
4. Set spacing as relationships (proximity), on one scale.
5. Snap to a 12-col grid with one shared left edge.
6. Spend **one bold move**, keep the rest quiet (see visual-direction).
7. Run the refinement checklist before shipping.

**Refinement checklist** — squint test (hierarchy survives blur) · grayscale test · alignment audit (count left edges, collapse strays) · spacing audit (within < between, one 4/8px scale) · type audit (≤3 sizes, ≤2 families, 45–75ch) · color audit (one accent, used once) · **remove-one test** (cut one decorative move before shipping) · consistency (radii/shadows/buttons from one token set).
