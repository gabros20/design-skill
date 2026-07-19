# Design systems

Purpose: Define tokens, components, and patterns as durable design contracts a team and downstream engineers build against.

Read when:
- The request is to create or extend a design system, token set, theme, or component contract.
- Repeated UI needs one source of truth (colors, spacing, type, components, states).
- You are writing a DESIGN.md / PRODUCT.md or auditing drift against one.

Skip when:
- The task is a single screen or one-off visual (route to visual-direction / layout-composition).
- The work is production component-API engineering, Tailwind wiring, or a build registry (route to frontend-skill).

Inputs: brand/register intent, existing tokens or codebase, target surfaces, dark/light needs.

Produces: layered token set, semantic role map, component specs, DESIGN.md/PRODUCT.md contract, governance rules.

## Contents
- Token architecture
- Procedural tokens
- DESIGN.md / PRODUCT.md contract
- Components as contracts
- Reuse discipline
- Theming and dual mode
- Governance
- System memory

## Token architecture

Three layers, each changed on a different cadence:
1. Primitive (raw value, changed rarely): `--blue-600: #2563eb`, `--space-4: 1rem`.
2. Semantic (purpose alias, changed on theme switch): `--color-primary: var(--blue-600)`.
3. Component (per component, references semantic): `--button-bg: var(--color-primary)`.

Naming: `--{category}-{item}-{variant}-{state}` (`--button-bg-hover`). Categories: color, space, font-size, radius, shadow, duration, z-index, border. Never reference a raw primitive from a component. Align exported token files to W3C DTCG JSON (`$value`/`$type`).

Semantic role set (minimum): background/foreground, card, popover, primary (+hover/active/foreground), secondary, muted, accent, destructive, border, input, ring; status success/warning/error/info each with a foreground. Spacing semantics (component-xs..lg, section-sm/md/lg, page-x/y) and typography semantics (heading/body/label/caption keyed to the size scale). Text hierarchy needs four levels (primary/secondary/tertiary/muted); using only two reads as flat. Give inputs and controls their own background/border/focus tokens so they tune independently of surfaces.

Universal numeric floors (contrast, target size, focus, reduced-motion) live in accessibility.md; the duration/easing scale lives in motion.md; palette construction and dark-mode color math live in color.md. Reference those; do not restate them here.

## Procedural tokens

Store how a value is chosen, not the value, so the system survives regeneration and theming. Selection functions (token-graph model): `bestContrastWith(target, scope)`, `mostVivid(scope, {against, minContrast, not:[...]})` (uses OKLCH chroma, not HSL saturation), `nth(ramp, 0 | 0.5 | -1)` = lightest / mid / darkest (a role pinned to a position survives regenerating the ramp with a different stop count), `shade(c)` (adaptive: OKLCH L>0.5 darkens, else lightens, so a hover state never collapses to black on a dark theme). Render native so the browser re-runs the decision: refs to `var()`, mixes to `color-mix()`, channel edits to relative color syntax. Example: `text := bestContrastWith(surface, palette)`; `hover := colorMix(accent, ink, 0.12)`. Raw literals appear only in palette/reference definitions.

## DESIGN.md / PRODUCT.md contract

A portable, machine-readable design-system file (Stitch / google-labs `design.md` spec). YAML front-matter carries normative tokens (colors, typography, rounded, spacing, components with `{path.to.token}` refs); the Markdown body carries intent and application rules. Prose is primary, tokens secondary: a specific reference ("a 1970s university lecture handout") steers generation better than a list of adjectives, and negative constraints fall out of a specific-enough reference. Canonical section order (out of order warns; a duplicate heading is a hard error): Overview, Colors, Typography, Layout, Elevation & Depth, Shapes, Components, Do's and Don'ts. Unknown sections are allowed (add `## Motion`, `## Iconography`). Variants and states are sibling entries (`button-primary`, `button-primary-hover`). DESIGN.md covers the look only; it sits beside the IA plan (information-architecture.md) and the content model, not replacing them. Pair it with PRODUCT.md (register, users, purpose, brand personality, anti-references, accessibility baseline).

Multi-page or app work inverts diversification: pages of one product must share the wordmark, the accent (kept under ~5% of viewport plus a fixed placement), the display and body fonts, the CTA voice, and the section-heading rhythm. Write DESIGN.md first, confirm it, then build each page from it. Drift from it is a critical audit finding.

## Components as contracts

A component spec (design-owned) states: anatomy; variants (size and style); the full interactive state set (interaction.md's 8-state model: default/hover/focus/active/disabled/loading/error/success); behavior; the exact tokens per state; content limits; and accessibility intent (name, keyboard, focus, announcement). Change state via background/outline/box-shadow, never via border-width (that shifts layout). One worked example carries more than a full matrix: Button primary is 40px tall, 16/8px padding, 14px/500, radius 6px; hover darker, active darkest, focus a 2px ring at 2px offset, disabled opacity 0.5 plus `not-allowed`. Reach for a named icon convention (gear=settings, magnifier=search); never invent an icon for a solved concept, and use one library at one weight.

## Reuse discipline

The most common way AI degrades a system is hand-rolling what already exists. Order for controls: native HTML (`<button>`, `<dialog>`, `<details>`), then a headless primitive for anything stateful (select, dialog, popover, tabs, which ship keyboard, focus, and ARIA), then hand-roll only as a last resort, and then you owe the full contract (keyboard nav, focus trap and return, ARIA, click-outside, scroll-lock). Order for styling: existing system/variant, then extract a component on the second real reuse, then bind to semantic tokens, then an inline utility only for a genuine one-off.

Promotion rule: a treatment appearing independently in two or three places has earned a name; tokenize it before the fourth copy. Do not create a shared primitive from repetition alone; prove the existing system cannot express the decision and name the consumers. Family resemblance, distinct roles: a role must be readable before interaction (squint test). A badge or tag has no hover response and no pointer cursor, ever, since those two signals are what separate it from a same-shaped button. Prefer one component per meaning (Tag, Code, Kbd, Metric) over one Badge with color variants; color lives in classes, and callers never pass color or shape.

## Theming and dual mode

Both modes are first-class, neither derived. Define one token table with Dark and Light columns; state what is identical across modes (accent, status colors, fonts, type scale, spacing, shapes) and what flips (surface/text/border lightness). Give each mode a feel anchor. Themes override only at the semantic/alias layer; theme types are color mode (light/dark/high-contrast), brand (white-label/seasonal), and density (comfortable/compact/spacious). Dark-mode intent: shadows are weak on dark, so lean on borders; elevation reads as lighter surfaces (about +3% lightness per level), not heavier shadow; keep one hue and shift only lightness across surfaces; desaturate semantics slightly (full recipe in color.md). Ship both `prefers-color-scheme` and a `[data-theme]` override (follow system preference unless the user explicitly chose).

## Governance

Semver is a communication contract: patch is a bug or docs fix, minor adds backwards-compatible components or variants, major is breaking (renamed props, removed components). Deprecate on touch, not big-bang: announce with the replacement, ship a migration guide, keep the old path functional for at least one minor cycle, and warn in-product ("Deprecated in 2.3, removed in 3.0"). Quality bar before a component enters the system: documented props/variants/states, accessibility review (WCAG AA plus keyboard plus screen reader), responsive, token usage with no hardcoded values, usage guidance, and design synced with code. Formal acceptance also requires the pattern to be used in three or more contexts and reviewed by two people from different disciplines. The top cause of design-system failure is abandonment (decay within about six months); fund a dedicated owner at 20% or more of one person's time.

Localization is a system rule: a component must pass at least one RTL locale and one long-expansion locale before entry. Use CSS logical properties (`margin-inline-start`, not `margin-left`); mirror directional icons (arrows, chevrons) but not logos, clocks, numbers, or media controls. Text-expansion budgets live in content.md.

## System memory

Persist decisions so they survive sessions (`.design/system.md` or equivalent): direction and feel, depth strategy plus spacing base, hierarchy decisions (scale ratio, density), key component patterns recorded as concrete values, and a Decision / Rationale / Date table. Save a component pattern at two or more reuses, not on a one-off. Six starter directions when a brief is blank: Precision & Density (dev tools), Warmth & Approachability (consumer), Sophistication & Trust (enterprise B2B), Boldness & Clarity (data-heavy), Utility & Function (GitHub-style), Data & Analysis (BI).
