# Design systems

Purpose: Define tokens, components, and patterns as durable design contracts a team and downstream engineers build against.

Read when:
- The request is to create or extend a design system, token set, theme, or component contract.
- Repeated UI needs one source of truth (colors, spacing, type, components, states).
- You are writing a DESIGN.md / PRODUCT.md, keeping it learning, or auditing drift against one.

Skip when:
- The task is a single screen or one-off visual (route to visual-direction / layout-composition).
- The work is production component-API engineering, Tailwind wiring, or a build registry (route to `frontend`).

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
1. Primitive (raw value, changed rarely): `--blue-600: #2563eb`, `--space-4: 1rem`; numeric ramps (`font-size-100…900`) leave room to insert a step.
2. Semantic (purpose alias, changed on theme switch): `--color-primary: var(--blue-600)`.
3. Component (per component, references semantic): `--button-bg: var(--color-primary)` — a documented exception; a pile of component tokens means missing semantic roles.

Naming: `--{category}-{item}-{variant}-{state}` (`--button-bg-hover`). Categories: color, space, font-size, radius, shadow, duration, z-index, border. One word per concept, never mixed synonyms (`text` not fg/foreground/ink; `border` not stroke). Semantic names carry role — never hue, position or a number (`--color-blue-button`, `--color-text-2`; `--color-light-gray` lies in dark mode); watch the `--color-primary` vs `--color-text-primary` collision. Use a token only in its role; if none fits, add one. Never reference a raw primitive from a component. Align exported files to W3C DTCG JSON (`$value`/`$type`).

Semantic role set (minimum): background/foreground, card, popover, primary (+hover/active/foreground), secondary, muted, accent, destructive, border, input, ring; status success/warning/error/info each with a foreground; raised and sunken surfaces, an overlay scrim, inverse and on-accent text, and separator distinct from border (they diverge the first time inputs are restyled). Spacing semantics (component-xs..lg, section-sm/md/lg, page-x/y). Typography semantics are **composite tokens** (DTCG `typography`: family, size, weight, unitless line-height, tracking) named by role (`text-body`, `text-card-title`), never by value (`text-16`). Text hierarchy needs four levels (primary/secondary/tertiary/muted). Inputs and controls get their own background/border/focus tokens. Compact density is a semantic layer over the same primitives.

Floors live in accessibility.md, motion values in motion.md, palette and dark-mode math in color.md — reference, never restate.

## Procedural tokens

Store how a value is chosen, not the value, so the system survives regeneration and theming. Selection functions: `bestContrastWith(target, scope)`, `mostVivid(scope, {against, minContrast, not:[...]})` (OKLCH chroma, not HSL saturation), `nth(ramp, 0 | 0.5 | -1)` = lightest / mid / darkest (a role pinned to a position survives regenerating the ramp), `shade(c)` (adaptive: OKLCH L>0.5 darkens, else lightens, so a hover never collapses to black on dark). Render native: refs to `var()`, mixes to `color-mix()`, channel edits to relative color syntax. Example: `text := bestContrastWith(surface, palette)`; `hover := colorMix(accent, ink, 0.12)`. Raw literals appear only in palette definitions.

## DESIGN.md / PRODUCT.md contract

A portable, machine-readable design-system file (Stitch / google-labs `design.md` spec). YAML front-matter carries normative tokens — only `colors`, `typography`, `rounded`, `spacing`, `components` (`{path.to.token}` refs; a component holds ≤8 props, so shadows, focus rings and motion go in prose or a `## Motion` section); the Markdown body carries intent and application rules and never restates a token's value. Prose is primary: a specific reference ("a 1970s university lecture handout") steers generation better than adjectives. Exact canonical headings in order (out of order warns; a duplicate is a hard error; tooling parses them): Overview, Colors, Typography, Layout, Elevation & Depth, Shapes, Components, Do's and Don'ts; unknown sections are allowed. Open with a named North Star and 1–3 **Named Rules** per section ("**The One Voice Rule.** The accent stays under 10% of any screen") — stickier for agents than bullets. Variants and states are sibling entries (`button-primary-hover`). DESIGN.md covers the look only, beside the IA plan and content model. **PRODUCT.md** holds product truth: users, purpose, positioning (the mechanism a neighbour can't truthfully claim), brand personality, anti-references, **evidence on hand, including what's absent and must not be invented**, and the accessibility baseline; register and surface strategy live per surface, not here.

Authoring follows the change mode (visual-direction.md): *reproduce* extracts tokens from computed styles and screenshots (research.md); *redesign* keeps logo and core brand colours/type; *rebrand* authors from the strategy brief. A **new world starts as a seed** — invariants plus honest `[to be resolved]` placeholders, no components — finalised from the first built surface (a rulebook written first gets defended against reality); later pages are built from it. Every recorded rule needs evidence in the build, and a defect is never a rule: an eyebrow shipped by mistake is logged as debt (that is how one violation becomes house style); check each prohibition against the world's own materials. The reference tooling (`@google/design.md`, Apache-2.0; format version `alpha`, so pin the package and load the format with `spec` from the installed version) makes it a gate: `lint` reports broken references, WCAG contrast and out-of-order sections; `diff` flags regressions; `export` emits Tailwind v3/v4 themes or DTCG `tokens.json` — generated, so re-export, never hand-edit. `export` exits 0 despite lint findings; run `lint` to gate.

Multi-page or app work inverts diversification: pages of one product share the wordmark, the accent (~5% of viewport, fixed placement), display and body fonts, CTA voice and section-heading rhythm. Drift from DESIGN.md is a finding: an undeclared font is an error; an off-scale colour, radius or size is advisory (an intentional addition updates DESIGN.md). A long commit gap is not drift — compare the document with the tokens first.

## Components as contracts

A component spec states: anatomy; variants; the full state set (interaction.md's 8-state model); behavior; exact tokens per state; content limits; accessibility intent (name, keyboard, focus, announcement). Change state via background/outline/box-shadow, never border-width. Worked example: Button primary is 40px tall, 16/8px padding, 14px/500, radius 6px; hover darker, active darkest, focus a 2px ring at 2px offset, disabled opacity 0.5 plus `not-allowed`.

**Icons:** a named convention (gear = settings, magnifier = search), never an invented icon for a solved concept; one library, one stroke and one optical size per surface. Resolve the concept against the library's name/tag index (Lucide `tags.json`, Tabler `icons.json`, the Iconify search API) and specify it by exact name; never hand-draw a glyph the library has. Stroke follows the neighbouring text as rendered (~1.5px beside regular, 2px semibold, 2.5px bold); size 1–1.25em, checked at the smallest size on the matching grid; filled style at ≤14px and in tinted tiles; outline is resting, fill is selected; one opaque colour. "AI" gets no generic sparkle or wand — show what it does. Licence rules: image-sourcing.md.

## Reuse discipline

The most common way AI degrades a system is hand-rolling what exists. Controls: native HTML (`<button>`, `<dialog>`, `<details>`) → a headless primitive for anything stateful (select, dialog, popover, tabs) → hand-roll last, and then you owe the full contract (keyboard, focus trap and return, ARIA, click-outside, scroll-lock). Styling: existing variant → extract on the second real reuse → bind to semantic tokens → an inline utility only for a one-off.

Promotion rule: a treatment appearing independently in two or three places has earned a name; tokenize it before the fourth copy — but never create a shared primitive from repetition alone; prove the system cannot express the decision and name the consumers. A role must be readable before interaction (squint test): a badge or tag has no hover and no pointer cursor, ever. Prefer one component per meaning (Tag, Code, Kbd, Metric) over one Badge with color variants; callers never pass color or shape.

## Theming and dual mode

Both modes are first-class, neither derived. One token table with Dark and Light columns, stating what is identical (accent, status colors, fonts, scale, spacing, shapes) and what flips (surface/text/border lightness); give each mode a feel anchor. Themes override only the semantic layer; theme types are color mode (light/dark/high-contrast), brand (white-label/seasonal) and density. Dark: lean on borders, elevate with lighter surfaces (imagery-depth-decoration.md), one hue across surfaces (recipe in color.md). Ship `prefers-color-scheme` plus a `[data-theme]` override.

## Governance

Semver is a communication contract: patch = bug/docs, minor = backwards-compatible additions, major = breaking. Deprecate on touch: announce the replacement, ship a migration guide, keep the old path for at least one minor cycle, warn in-product. Entry bar: documented props/variants/states, accessibility review (WCAG AA + keyboard + screen reader), responsive, no hardcoded values, usage guidance, design synced with code, used in three or more contexts, reviewed by two disciplines. The top failure is abandonment (decay within ~six months); fund an owner at ≥20% of one person.

**Inventory before you systematize:** collect every literal in use (colour incl. SVG, charts and email templates; spacing, type size, radius, shadow); sort colours by lightness within each hue and merge pairs under ΔE 0.02 (keep the most-used, never average); give each survivor a role (no role = missing token or mistake). Broken-system signals: >5 sizes on a page, >15 off-scheme colours, >3 components doing one job. Audit and refactor in separate passes; consolidation is a proposal until accepted; track the violation count per release — the trend is the health signal.

Localization is a system rule: a component passes one RTL and one long-expansion locale before entry. Use CSS logical properties; in RTL mirror reading-direction icons and progressions (arrows, chevrons, steppers, ratings filling from the leading edge) but never logos, clocks, checkmarks, numbers or media controls. Text-expansion budgets: content.md.

## System memory

Persist decisions so they survive sessions (`.design/system.md` or equivalent): direction and feel, depth strategy and spacing base, scale ratio and density, key component patterns as concrete values (saved at the second reuse), a Decision / Rationale / Date table, and each build's fingerprint (page-anatomy.md). **Keep it learning:** after a session, turn each correction — explicit, a silent edit of your value, a repeated nudge (record where it landed), a revert, a confirmed choice — into a class-level rule with exact values and the user's words (an *inferred* why until confirmed); prefer a lint or token check to a sentence; a rule that failed gets stricter, not duplicated; propose, then write only what is approved. Starter directions for a blank brief: Precision & Density (dev tools), Warmth & Approachability (consumer), Sophistication & Trust (B2B), Boldness & Clarity (data-heavy), Utility & Function, Data & Analysis (BI).
