---
name: design
description: >-
  Design digital-product experiences across websites, web apps, dashboards, product UI, iOS, and
  Android. Use for UX research, journeys, information architecture, page anatomy, interaction and
  state design, forms, visual direction, typography, color, layout, motion, content, accessibility,
  product shots, illustration, logos, prototypes, design systems, critique of rendered work on any
  surface, and frontend handoff. Do not use for production frontend implementation, backend or system
  architecture, marketing or SEO strategy, or release verification unless the request requires
  experience design.
---

# Experience Design

## Mission and boundary

Design how people understand, navigate, and interact with a digital product — the research, structure,
behavior, visual craft, content, and system decisions, expressed as design artifacts and a
frontend-ready handoff. Own experience intent; do not present prototype code as production
implementation. Adjacent work this pack does not own: production frontend build (`frontend`),
system architecture and feasibility (`architecture`), acquisition/SEO strategy (`marketing`),
independent audits and release verification (`quality`), product strategy and metrics (`product`),
deployment and monitoring (`operate`), and cross-system business process automation (`automation`).

Operate independently when invoked alone. When compatible upstream artifacts are supplied, use them
without silently overriding established decisions. Recommend adjacent skills when useful; do not invoke
them automatically unless the user requested a composition workflow.

## Standalone context check

Before producing anything the user will have to live with:
1. **Look first.** Read `digital-product/LEDGER.md` (Context), `digital-product/<pack>/`, upstream
   artifacts, the repo and this conversation. A fact found is never asked; a fact recorded is never
   re-asked.
2. **Size it.** Reversible and small → proceed, stating assumptions. New, costly or hard to undo →
   check.
3. **Ask only what the owner alone knows**, in their words: one round, at most four, highest
   leverage first, each with a recommended answer ("ok" accepts all). Two rounds at most.
4. **No or thin answers → decide as the expert.** Record each assumption with its basis and cost to
   reverse; prefer the reversible option; show the cheapest proof early.
5. **No way to ask → never block.** Proceed, and open the artifact with the assumptions and the
   answers that would change it most.
6. **Write it down.** Answers and assumptions go to the LEDGER's Context block.

This pack's questions (a pool — ask the top four that step 1 left open):
1. What is it, and what is the one thing a visitor or user should do? 2. Who
is it for, and what must they believe before they act? 3. What exists: logo, colours, type, photos,
video, copy, product screenshots, a current site? 4. One to three things you like and one you don't
want to resemble, from any field. 5. *(only when the signals could not answer it)* What is fixed: platform, languages, brand rules,
accessibility or legal requirements, deadline? 6. *(asked by showing, not by question)* Which of three directions is
closest? — never ask for a style, palette or font; show three labelled directions (category standard,
recommended, bolder) in plain words instead. Signals, direction cards, the vocabulary bridge,
feedback translation and the headless rule: [Intake](references/intake.md). The brief block feeds the
design read and the direction contract; write it to `digital-product/design/brief.md`.

## Route before acting

0. No brief or contract and the work sets a look or structure → run the standalone context check first (and read [Intake](references/intake.md)).
1. Identify the primary design job.
2. When the request names or implies a surface, its overlay counts as part of the smallest sufficient set — add it (at most one unless the task explicitly compares platforms).
3. Add only the concern overlays that materially affect the request.
4. A craft task with no direction contract sets the lane and dimensions first, briefly ([Conventions](references/conventions.md)).
5. Read every selected reference completely before producing the affected artifact.
6. Do not scan or load unrelated references.

### Primary job

| When the request is | Read | Expected contribution |
|---|---|---|
| Plan or synthesize UX research — jobs, interviews, surveys, usability studies, design-DNA | [Research](references/research.md) | Method choice and synthesized findings, each marked observed / inferred / assumed |
| Map a flow, onboarding, wizard, checkout, or end-to-end journey | [Journeys](references/journeys.md) | Breadboard, flow, or journey/service map with every required edge |
| Model objects, sitemap, navigation, naming, or findability — including inventorying a site before a redesign | [Information architecture](references/information-architecture.md) | Object/relationship model, vocabulary, sitemap, navigation model |
| Define component behavior and states — feedback, overlays, selection, search | [Interaction](references/interaction.md) | State-complete interaction spec (the canonical 8-state model) |
| Design a form, field, sign-in, checkout step, or settings input — layout, control choice, validation timing, save model | [Forms](references/forms.md) | Field list with controls, validation and recovery behaviour, field states, save model |
| Scope a design request with no brief — discovery questions, direction options, assumptions | [Intake](references/intake.md) | Brief block, three direction cards, assumption ledger |
| Set the point of view — register, visitor mode, change depth, concept, direction contract | [Visual direction](references/visual-direction.md) | Design read, register + mode, direction contract |
| Choose style dimensions and a lane from the product type's conventions | [Conventions](references/conventions.md) | DIMENSIONS line and a named lane with its fail-if list |
| Fix a result that reads generic, templated, or AI-made, or write the refuse-list | [Anti-defaults](references/anti-defaults.md) | Tells found or refused, each with its replacement |
| Plan a website page's sections — anatomy by visitor job, narrative, compositions, pricing, nav/footer | [Page anatomy](references/page-anatomy.md) | Section sequence with compositions, feeling curve, chrome |
| Choose or set type — scale, pairing, measure, display | [Typography](references/typography.md) | Type scale and a justified pairing with measure/leading/display settings |
| Lay out a screen — grid, spacing, hierarchy, density, elevation | [Layout & composition](references/layout-composition.md) | Grid, spacing scale, one focal point, alignment/elevation plan |
| Build a palette, neutral ramp, accent, dark mode, or check contrast | [Color](references/color.md) | OKLCH token set verified for contrast and gamut |
| Compose a collage, layered, poster-led or type-as-image section — plane stack, decoration kit, interleave, responsive stage | [Composition layers](references/composition-layers.md) | Layer contract per section, decoration kit, phone stage |
| Add depth, materials, image treatment, or decoration | [Imagery, depth, decoration](references/imagery-depth-decoration.md) | Depth/material spec and enrichment plan with reduced-motion fallbacks |
| Source licensed icons, illustrations, logos or photos, capture product screenshots, or art-direct a generated image set | [Image sourcing](references/image-sourcing.md) | Per-slot source, licence and provenance; anchored, curated image set |
| Show the product or explain a concept in a picture — product shots, bento, explanatory figures, illustration sets, empty-state art | [Product visuals](references/product-visuals.md) | Product-shot or figure spec with real strings, and a review sheet |
| Design, redesign, or critique a logo, wordmark, monogram, app icon, or identity kit | [Brand mark](references/brand-mark.md) | Three greyscale directions, then master files, lockups and usage sheet |
| Choose motion values or decide whether to animate | [Motion](references/motion.md) | Duration/easing/spring tokens and a per-moment reduced-motion spec |
| Sequence motion — stagger, exits, view swaps, gestures, loops, loaders, page transitions | [Choreography](references/choreography.md) | Cast, order, offsets, gesture model, loop and reduced-motion plan |
| Build or evaluate a prototype, or compare design options | [Prototyping](references/prototyping.md) | Classified prototype (disposable / design-reference / production-candidate) + test plan |
| Create or extend a design system, tokens, or component contracts | [Design systems](references/design-systems.md) | Layered token set, component specs, DESIGN.md/PRODUCT.md contract |
| Judge or QA a rendered design against its intent — a scored review, not setting direction | [Critique](references/critique.md) | Severity-ranked Before/After/Why punch-list and a binary verdict |
| Prepare an implementation handoff to frontend | [Handoff](references/handoff.md) | Frontend-ready per-screen spec, tokens, motion plan, handoff.yaml |

### Surface overlay

Loads in addition to the primary job whenever the request names or implies its surface.

| When the surface is | Read | Expected contribution |
|---|---|---|
| A marketing, brand, landing, or portfolio site (design IS the product) | [Website](references/surface-website.md) | Premium↔information dial, section craft and hero, phone composition, finish, award tier |
| Product/app UI on the web — dashboards, admin, settings, data tools, AI/agent apps (design SERVES the product) | [Web app](references/surface-webapp.md) | Density mode, layout paradigm, data-display and web-platform conformance; the Solid Glass language |
| A native iOS / iPadOS app | [iOS](references/surface-ios.md) | HIG chrome/target numbers, Dynamic Type, gestures, iPad adaptivity |
| A native Android app | [Android](references/surface-android.md) | Material 3 tonal color, type scale, window classes, navigation matrix |

### Concern overlay

| When the request involves | Read | Expected contribution |
|---|---|---|
| Contrast, target size, focus, zoom, or reduced-motion floors; which states must be announced | [Accessibility](references/accessibility.md) | Pass/fail against each floor, the fix, and a design-decidable a11y priority order |
| Labels, microcopy, errors, empty states, notifications, voice/tone, or i18n length | [Content](references/content.md) | Interface copy, voice-and-tone guidance, i18n length budget |

Trace a technique to its source → [Sources](references/SOURCES.md).

### Declared bundles

Read these together — the router encodes the pairing so no lateral hop is required:

- Native mobile prototype → [Prototyping](references/prototyping.md) + [iOS](references/surface-ios.md) (or [Android](references/surface-android.md)).
- A new surface from scratch → [Visual direction](references/visual-direction.md) + [Conventions](references/conventions.md) first, then only the craft leaves the brief makes material — [Typography](references/typography.md), [Layout & composition](references/layout-composition.md), [Color](references/color.md), [Imagery, depth, decoration](references/imagery-depth-decoration.md), [Motion](references/motion.md) — plus the one surface overlay. Add [Composition layers](references/composition-layers.md) when the contract's composition is *composited*, [Page anatomy](references/page-anatomy.md) only when the page's sections are being planned, [Anti-defaults](references/anti-defaults.md) only for a deslop or refuse-list.
- A design system for a specific surface → [Design systems](references/design-systems.md) + that surface overlay.
- A motion spec where several things move → [Motion](references/motion.md) + [Choreography](references/choreography.md).
- Any flow, screen, or system where accessibility is explicit → the primary reference + [Accessibility](references/accessibility.md).

## Universal invariants

- Name the register per surface before craft — design-IS-the-product (Persuade, Experience) vs design-SERVES-the-product (Operate, Read). The audience picks the aesthetic, not taste; the serve register legitimately inverts several distinctiveness defaults.
- Design the full state set when it applies: default, hover, focus, active, disabled, loading, error, success, plus empty for every data region.
- Use real content at real lengths — the longest realistic string, the empty case, the overflow case. Never fabricate claims (honesty) — metrics, logos, testimonials, prices, customers, capabilities, outcomes, or decorative data. Demonstration content may be authored at full fidelity only when labelled synthetic and listed for replacement.
- Label every coded artifact disposable, design-reference, or production-candidate. Never present prototype code as production-ready without engineering, accessibility, and quality review.
- **Precedence:** floors never bend; an existing brand's mandatories come next; above them the direction contract — register, lane, dimensions — outranks every leaf default and every catalogued tell; leaf numbers are Restrained-lane defaults unless the leaf says otherwise. A tell is an *unchosen* default.
- Treat accessibility floors as design constraints even when accessibility.md is not opened: every control named and keyboard-operable, text 4.5:1 / UI 3:1, meaning never by colour alone (WCAG 1.4.1), targets ≥24px (44pt / 48dp touch), visible focus, a reduced-motion path.
- Preserve established product, brand, and architecture constraints. When the design and a constraint conflict, report it explicitly rather than silently overriding.
- A visual verdict requires rendered evidence. When no build was viewed, state "code-level pass, not an art review" rather than signing off on appearance.

**How rules are phrased.** *Floor:* never / must, with its basis in parentheses (WCAG, HIG, M3,
licence, honesty, maths) — never bends. *Default:* "Default X; Y when Z" — bends to the contract.
*Reflex:* "choose it, don't land on it" — a lane value, never a ban. The basis tag marks a Floor; an
untagged never or must is a Default.

## Core workflow

1. Inspect the request, available evidence, existing artifacts, and stated constraints.
2. Route to the smallest sufficient reference set (one primary job, ≤1 surface, only material concerns).
3. State material assumptions and unresolved inputs.
4. Produce the requested design artifact.
5. Validate it against the user goal, constraints, edge states, and acceptance criteria.
6. Emit a compact handoff when downstream implementation is expected.

## Artifact contract

Every design artifact states, at minimum: the register and the design read; the assumptions and
constraints it was built under; the states it covers (or explicitly defers); and its maturity when
coded (disposable / design-reference / production-candidate). Specifications carry exact values —
tokens, sizes, spacing, timings — not adjectives. Reviews use the Before/After/Why table and a binary
verdict. Handoffs use the package and `handoff.yaml` companion defined in
[Handoff](references/handoff.md). Provide a schema or template only where exact structure is
mechanically load-bearing; the references own those.

## Completion and handoff

Before completion:

- Confirm every requested artifact exists.
- Record decisions, assumptions, risks, and unresolved questions.
- Distinguish validation performed from validation remaining — and state plainly when a visual was not rendered.
- When downstream work is expected, provide artifact paths, owners, constraints, and a recommended next skill without duplicating the full artifact.

## Artifact home

Deliverables this skill produces default to `digital-product/design/` at the working repository's
root, with cross-skill state in `digital-product/LEDGER.md` — created on first use and committed
with the repo. The `digital-product` composer skill owns this convention; solo use writes to the
same place. Never write into `.orchestrate/` — that folder belongs to an orchestration run's
execution state, not to this family's deliverables.
