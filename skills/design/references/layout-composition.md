# Layout and composition

Purpose: Structure a screen — grid, spacing rhythm, hierarchy, gestalt grouping, density, repeated-component alignment, and elevation — with exact values and a composition process that avoids the flat, templated result.

Read when:
- Laying out a page or section, building a grid, setting spacing, or fixing weak hierarchy, misalignment, or a "parking lot" screen.
- Aligning a repeated component (cards, rows, tiles, KPIs) or setting elevation/z-index.

Skip when:
- The task is type craft (typography), color, surface materials/glass/grain (imagery-depth-decoration), or motion.
- You need page-level macrostructures/section catalogs — those live in page-anatomy.

Inputs:
- Register and one-bold-move (from visual-direction), content and its real lengths, target surface.

Produces:
- A grid, a spacing scale, a hierarchy with one focal point, and an alignment/elevation plan.

Numbers here are Restrained-lane defaults; the direction contract's dimensions override them; floors (marked by their basis) do not.

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
- **12-column base**: `repeat(12, minmax(0, 1fr))` — never bare `1fr` (it won't shrink below content min-size). **Columns by width:** <600px 4 columns, 16px gutter, 16–20px margin · 600–1023px 8 columns, 24px gutter, 32px margin · ≥1024px 12 columns, 24–32px gutter, margin ≥48px until the content cap. Components span whole columns; gutters stay fixed while columns flex.
- **Bento**: 12-col + `grid-auto-flow: dense` (backfills gaps); limit 6–12 blocks; N items → exactly N cells (no empty cells); the tile mix that makes it one picture is in product-visuals.md.
- **Equal-rank items get equal cells;** unequal tracks only where rank differs. Three-up is a tell when it is the page's only composition or content was forced to three (anti-defaults.md). Real metrics can sit as an editorial index, each at its own size and column.
- **Default: break ~20% of the grid, not 100%** — keep at least one consistent edge/baseline or it reads as chaos.
- **Ultra-wide cap**: primary content `max-width` 1280–1600px (1440 typical); full-bleed only for backgrounds/decoration (uncapped 4K → >75ch lines + neck movement).
- Page-edge clipping: `overflow-x: clip` on both `html` and `body` (not `hidden` — `clip` preserves sticky/fixed).

## Spacing

- **4pt or 8pt base**; all margins/paddings/gaps are multiples exposed as named tokens (`--space-2xs`…`--space-4xl`), **~6–9 rungs**, not every 4px. A common scale: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96.
- **`gap` over margins** for siblings; `margin` only for optical or break-out cases (`frontend` `web-platform-css.md` "Margin collapse").
- Two scales: **micro** (line-height, padding, gaps) and **macro** (between sections). Section vertical padding often `clamp(4rem, 10vw, 10rem)`.
- **Spacing is a density dimension:** airy lanes take the spacing that feels like enough, then double it; workbench density holds 12–16px. Tight within a group (8–16px), generous between groups (48–96px in airy lanes); alternate dense and open sections for cadence — a monotone of one gap everywhere is "the sound of no one deciding." A heading binds downward: more space above it than below.
- **Mass, not air** — under-fill is a defect only where the lane promises mass (quiet-luxury and Ma lanes spend air on purpose). There a section body carries mass (a visual ≥~360px, a set of 3–4, a list of ≥3 rows, or a statement at section-head size), and space is earned by it: a 144px gap frames a 700px section and is a hole under a 200px one — fix with a bigger head or visual, not a smaller gap or more copy. Signs at 1440: content fills <½ its section, or a >160px dead band above the fold.
- **Control clearance:** 12px between bordered or filled controls, 24px between the glyphs of borderless text/icon buttons (space is their only boundary), ≥24px between unrelated groups.
- **No near-tangents:** edges 1–3px apart read as an accident — align exactly or separate by ≥8px. Words keep ≥12px from a window, card or row edge; a title sits 4–6px of ink above its subtitle; dots and badges sit fully inside the content edge.

## Hierarchy

- **One focal point per view by default** (index and catalogue grids are equal-rank by design) — name it before building, make it win by size/contrast/position/surrounding space, and demote everything else deliberately. Promotion without demotion isn't hierarchy.
- **Levers**: size, weight, color/opacity, whitespace, scan position — combine 2–3, never size alone. **Weight + color do more than size:** one 14px size holds three tiers (`value 600/primary`, `label 500/secondary`, `meta 400/muted`).
- **Grayscale first, color last;** contrast the primary hard — the contrast *is* the hierarchy. **Squint test**: if headline, body and label blur together, hierarchy is too weak.
- **Scanning:** unstructured text gets an F-scan — the right side and lower lines go unread. Defeat it: a heading or bold lead every 3–5 lines, the information-carrying word first in every heading, link and list item, and the action where the content that motivates it ends.

## Gestalt grouping

- Proximity, similarity, common region, figure/ground, continuity. **Default to whitespace, not divider lines** — a line takes no space, so deleting it leaves groups cramped; removing a separator usually means *adding* spacing. If you need a divider, the spacing is probably wrong.
- **Weakest container that works**: background tint → border → card surface. Each step adds visual weight; never box the most important element — let it float. **Limit nested containers to two levels.**
- Proximity is set by the *ratio*: between-group space ≥2× within-group (8px inside → ≥16px between). Order: space → background shape → hairline separator (dense data only); never a separator plus a gap that already grouped.
- **Repetition is recognition:** vary a section only when its content or priority changes; on Operate and Read surfaces predictable structure *is* the affordance.

## Density

- Density is a decision expressed in px, then held everywhere: Linear tight, Stripe airy — both chosen. A tool panel at 12–16px padding is workbench-tight; the same card at 24px is a brochure.
- Set density by platform (desktop med-high, mobile low) and user type (power/expert can take high; consumer low). Row tokens: default 44px, compact 32px, spacious 56px; operational expert tools run rows 28–36px with inline status.
- **"Reading is time"** — cut words before shrinking them; front-load the scannable word or number; a recognizable icon replaces reading (a wrong one adds work).

## Repeated-component slot model

Every repeated element (card, row, tile, KPI, result) is a **fixed slot model**: every slot holds its position even when empty; **one slot absorbs variance** (`flex: 1`); anchors pin with `margin-top: auto` (columns) / `margin-left: auto` (rows).

- **Equal height via a stretched grid/flex track — never a hard-coded `height`** (the tallest instance clips). Reserve optional slots (`min-height`) or overlay them absolutely. Media gets a fixed `aspect-ratio`.
- Handle length in order: (1) **write to length** (titles ≤60, snippets ≤120 chars), (2) clamp + recover via a detail view or a keyboard- and touch-reachable tooltip (a hover `title` is not recovery), (3) let one slot grow. Never truncate numbers, money, dates or must-read content (errors, legal); middle-truncate file names and shared-domain emails. Design for the long i18n case (German/Finnish +30–40%).
- **Hidden content is always cued:** a horizontal row lets the next item peek 16–32px past the edge (a row ending exactly at the edge looks complete) with an equal inset at both ends at rest; a disclosure names its payload ("Show 12 more results").
- For `-webkit-line-clamp` inside flex/grid, add `min-width: 0` (`min-inline-size: 0`) or truncation silently fails.

## Elevation and z-index

- **Elevation scale**, light and diffuse (heavy black shadows read dated): none / xs `0 1px 2px /.06` / sm `0 1px 3px /.10, 0 1px 2px /.06` / md `0 4px 6px /.08, 0 2px 4px /.06` / lg `0 10px 15px /.08` / xl `0 20px 25px /.08`. Construct each step from the single-light-source, offset↑ blur↑ opacity↓, and shadow-tint rules in imagery-depth-decoration.md.
- White cards pair a shadow with a 1px border 1.5–2× darker than the shadow tone — or, on varied backgrounds, a transparent ring shadow replaces the border (light: 1px ring at 6% + two soft lifts; dark: one 8% white ring); dividers, cells, selected states and inputs (3:1) stay real borders. On dark themes shadows vanish → use an inset rim-light + border instead. Product surfaces can encode elevation as **lighter surfaces** rather than shadow (ladder in imagery-depth-decoration.md).
- **Named z-index scale, never `9999`**: base 0 / dropdown 100 / sticky 200 / header 300 / modal 400 / toast 500 / tooltip 600.
- **Sticky over fixed** — prefer section-scoped `sticky` to globally `fixed`; header 48–64px, compensate with `body { padding-top: var(--header-height) }`; bottom bar `padding-bottom: env(safe-area-inset-bottom)`. Max simultaneous fixed layers: header + one bottom element. Fixed corner UI never sits on content — keep corner zones empty or let the frame step aside on scroll-down; on phones give sections top padding that clears fixed chrome.

## Composition process and refinement

1. Decide the section's **one job** and name its structural system: **axial** (headers, timelines), **modular** (cards, catalogues), **grid** (publications, dashboards), **transitional** (expressive marketing), **bilateral** (one short centred block only); radial and dilatational break on reflow. Test: lay it out at one size and one weight — if order and grouping don't read from position and space alone, fix the structure first.
2. Establish hierarchy in **grayscale**; add color last.
3. Type scale per typography.md.
4. Set spacing as relationships (proximity), on one scale.
5. Snap to the lane's grid (12 by default; editorial 3–5; Swiss asymmetric) with one shared left edge.
6. Spend **one bold move**, keep the rest quiet (see visual-direction).
7. Run the refinement checklist before shipping.

**Refinement checklist** — squint test (hierarchy survives blur) · grayscale test · alignment audit (count left edges, collapse strays; hang text from 2–3 strong vertical lines site-wide) · reorder check (after a responsive reorder, focus order still matches visual order; no opening column runs far past the fold beside a short one; body text keeps ≥16px from the viewport edge, 24–32px ideal) · spacing audit (within < between, one 4/8px scale) · type audit (typography.md Validation) · colour audit (accent only on its job list, color.md) · **remove-one test** (cut one decorative move before shipping) · consistency (radii/shadows/buttons from one token set).
