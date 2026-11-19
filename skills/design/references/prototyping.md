# Prototyping

Purpose: Choose and build the cheapest artifact that answers the current experience question, and classify every coded artifact so no one mistakes it for production.

Read when:
- The request asks for a prototype, clickable concept, coded exploration, wireframe, or design options to compare.
- The team needs evidence about an experience before production implementation.

Skip when:
- The task is production frontend implementation (route to `frontend`).
- The uncertainty is technical feasibility, not user experience (route to `architecture`).

Inputs: the hypothesis or decision to inform; audience and surface; known constraints; existing design context (codebase, UI kit, screenshots).

Produces: a classified prototype artifact, the question it answers, findings, and production-readiness caveats.

## Contents
- Classification (the organizing contract)
- Fidelity
- Root hi-fi in existing context
- Format selection
- Render to see
- Definition of done
- Anti-slop test

## Classification (the organizing contract)

Every coded design artifact carries exactly one label, stated up front:

| Label | Meaning | May do |
|---|---|---|
| Disposable | built to learn, then discarded | explore breadth; never merge |
| Design reference | demonstrates behavior or appearance; engineers reimplement it in the codebase's own patterns | guide implementation; not copied verbatim |
| Production candidate | may be adopted after engineering, accessibility, testing, and architecture review | enter engineering review |

No label is production-ready before implementation and quality validation. Never imply production readiness without that review. This label is the single most important line in a prototype handoff.

## Fidelity: match the question, not the deadline

Default to the lowest fidelity that tests the uncertainty; prototype the riskiest assumption first; build to throw away.
- Lo-fi / wireframe validates IA and flow. Gray/black/white only (no color decisions), placeholder text, content-priority order, multiple states shown (empty/loading/populated/error). Offer 3 to 5 distinctly different approaches, not one polished screen; breadth over polish.
- Interactive validates interaction patterns and feel. Real state and transitions (hover, click, validation, multi-step nav): it should feel like a working app, not a static mockup.
- Hi-fi validates visual hierarchy, brand, micro-interaction, and stakeholder sign-off. Pixel-level color, type, spacing.

Use coded interaction only when behavior, responsiveness, motion, device input, or integration affects the answer. Wizard-of-Oz (fake backend, real frontend) tests a flow before the backend exists.

Confirm the direction before writing code. Treat every prototype as a fresh start: re-ask scope, visual direction, reference products (not adjectives), and how many options to show, even on a repeat request. Do not reuse remembered decisions as silent defaults. Starting a prototype without this context reliably produces bad design; a one-line assert-then-confirm ("Reading this as X for Y") is a hard gate before building.

## Root hi-fi in existing context

Mocking from scratch is a last resort and yields poor design. Before building hi-fi, import the codebase, UI kit, or screenshots, collect and copy the real relevant components, then build. When adding to an existing UI, learn its visual vocabulary first and match it (palette, tone, hover/press states, shadow, density). A placeholder beats a bad attempt at the real thing.

**Plan variants: identity, then mode, then axes.** Lock the identity in one sentence of real values (surface and accent hex, the loaded font pair, topology, corners, voice). **Default** (most requests) varies *inside* it; **departure** only on an explicit ask in this request — a wrong default is recoverable, a wrong departure is three unusable off-brand options. Default 3, max 5, each on a different **named primary axis** — hierarchy, topology, type system, colour strategy, density, decomposition, interaction model — named for its direction (Quiet / Editorial / Dense, never "Option A"); two that differ only in accent or copy are one, and departures each name a concrete referent ("museum exhibition label system"). A steer ("more confident") narrows the axes, never the identity. Every variant clears the same accessibility floor, works with real content, and is sold with a Right-when / Costs table, no favourite.

## Format selection: prefer in-page variants

- Purely visual options (color, type, static layout): lay the options side by side on one canvas (each an artboard) for compare and reorder.
- Interactions, flows, or many options: mock the whole product as one hi-fi clickable prototype with an in-page variant selector (a toggle), not N separate files. Flip one variant at a time at full size in the real page with real neighbours (side-by-side thumbnails lie about spacing and scale); the switch is instant. Give each variant 1–3 coarse knobs on CSS variables (density, type scale, colour amount) so "a bit tighter" is a slider, not a regeneration.
- Resist adding a title or splash screen; center or responsively size within the viewport.
- Native mobile prototype: read surface-ios.md alongside this file (declared bundle). Honesty rule: never draw fake device chrome (a status bar, virtual keyboard, or browser frame). Real chrome renders on top and a painted fake looks doubled; use real screenshots and let `env(safe-area-inset-*)` reserve room.

## Render to see before you describe

If an inline visual-render tool exists, show over describe at three moments: proposing a direction (render swatches, the type scale in the real face, elevation as stacked cards), designing a component (render real states: default/hover/empty/error), and critiquing (render current and improved together). Reasoning stays in text; the render shows visual only; match the host theme; a rendered default is still a default. If an image-generation tool exists, a visual-reference pass is a companion, never the deliverable: a direction board, a UI comp, or a paintover, then build in real code and verify in the browser. Both modes are conditional: confirm the tool exists first, else fall back to code and tokens.

- **UI comp prompts:** 150–300 words naming the surface and product, the visitor's job with real content, what leads, the parts in reading order and the frame; leave sizes and colours out unless pinned (a pinned prompt returns a template). Anchor an established world with a screenshot and say what it lends (chrome, palette, type) and what it must not (its content). Generate alternatives from the words, never from comp 1 (they collapse into one). Reject posters, subject-less or photo-with-text renders, illegible text, and any comp whose mode needs a caption.
- **Building from a comp:** give each region a medium before code — code (text, controls, countable diagrams, anything that moves), raster (painted, photographic, textured material), or neither (cut it); a raster region never quietly becomes a CSS gradient (handoff.md). Then screenshot the build at the comp's exact size and answer in writing: **mass** (weight in the same place and size), **interval** (gaps in the same proportion), **entry** (the eye lands first on the same element); fix the largest divergence or argue it — a model reliably believes its recreation succeeded when it did not. Take a comp's composition, never its compliance with the anti-default catalog.

## Definition of done

Real content (no lorem), semantic-first markup, deliberate spacing, and realistic state coverage — interaction.md's 8-state model plus empty, extended for prototypes with overflow, long-and-short, and first-run. **Stress every field** through the data, never the CSS, with plausible worst cases or its schema limit (a front/back limit mismatch is a finding): long, short, missing; 0, 1, page size and page size + 1, 1,000+ rows; at the real container, 320px, 200% zoom, dark and RTL. A coherent icon set. Verify image URLs before referencing them. Respect the build pipeline (edit source, run the build; never write into `dist/`). Reduced-motion respected and keyboard focus visible (floors in accessibility.md).

## Anti-slop test (two altitudes)

Before shipping, ask: could someone guess the theme and palette from the product category alone, or the aesthetic family from category plus your anti-reference? If yes, it must be a choice the contract names (the category standard), never a landing. The general anti-default catalog lives in anti-defaults.md.
