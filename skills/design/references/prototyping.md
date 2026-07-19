# Prototyping

Purpose: Choose and build the cheapest artifact that answers the current experience question, and classify every coded artifact so no one mistakes it for production.

Read when:
- The request asks for a prototype, clickable concept, coded exploration, wireframe, or design options to compare.
- The team needs evidence about an experience before production implementation.

Skip when:
- The task is production frontend implementation (route to frontend-skill).
- The uncertainty is technical feasibility, not user experience (route to architecture-skill).

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

Mocking from scratch is a last resort and yields poor design. Before building hi-fi, import the codebase, UI kit, or screenshots, collect and copy the real relevant components, then build. When adding to an existing UI, learn its visual vocabulary first and match it (palette, tone, hover/press states, shadow, density). Give 3 or more variations across several dimensions, mixing by-the-book with novel; a placeholder beats a bad attempt at the real thing.

## Format selection: prefer in-page variants

- Purely visual options (color, type, static layout): lay the options side by side on one canvas (each an artboard) for compare and reorder.
- Interactions, flows, or many options: mock the whole product as one hi-fi clickable prototype with an in-page variant selector (a toggle), not N separate files. In-page variants sit side by side for compare, reorder, and focus.
- Resist adding a title or splash screen; center or responsively size within the viewport.
- Native mobile prototype: read surface-ios.md alongside this file (declared bundle). Honesty rule: never draw fake device chrome (a status bar, virtual keyboard, or browser frame). Real chrome renders on top and a painted fake looks doubled; use real screenshots and let `env(safe-area-inset-*)` reserve room.

## Render to see before you describe

If an inline visual-render tool exists, show over describe at three moments: proposing a direction (render swatches, the type scale in the real face, elevation as stacked cards), designing a component (render real states: default/hover/empty/error), and critiquing (render current and improved together). Reasoning stays in text; the render shows visual only; match the host theme; a rendered default is still a default. If an image-generation tool exists, a visual-reference pass is a companion, never the deliverable: a direction board (2 to 3 abstract mood explorations before code), a UI reference, or a paintover, then build in real code and verify in the browser. Reject generic SaaS, illegible text, and off-domain palettes. Both modes are conditional: confirm the tool exists first, else fall back to code and tokens.

## Definition of done

Real content (no lorem), semantic-first markup, deliberate spacing, and realistic state coverage — interaction.md's 8-state model plus empty, extended for prototypes with overflow, long-and-short, and first-run. A coherent icon set. Verify image URLs before referencing them. Respect the build pipeline (edit source, run the build; never write into `dist/`). Reduced-motion respected and keyboard focus visible (floors in accessibility.md).

## Anti-slop test (two altitudes)

Before shipping, both must be non-obvious. First-order: could someone guess the theme and palette from the product category alone? Second-order: could they guess the aesthetic family from category plus your anti-reference? If either is obvious, the design defaulted. The general anti-default catalog lives in visual-direction.md.
