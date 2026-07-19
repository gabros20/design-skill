# Usage reference

The full control surface: how the skill triggers, how its faceted router selects references, the
universal invariants every artifact answers to, and what each route produces. For ready-to-paste
prompts, see [recipes.md](recipes.md).

## There is no invocation grammar

`design` takes no flags, dimensions, or config file — there's nothing to memorize before using it.
It triggers one of two ways:

- **Explicit**: `$design` in Codex, `/design` in slash-command clients, or the equivalent explicit
  form supported by the current host.
- **Implicit**: natural design-task phrasing — "map this onboarding flow", "define the states for
  this form", "set a visual direction for this landing page", "build a palette and check contrast",
  "critique this screen", "prepare a frontend handoff" — matched against the frontmatter
  `description` in `skills/design/SKILL.md`.

It should **not** activate for production frontend implementation, backend or system architecture,
marketing/SEO strategy, or release verification — unless the request also requires experience
design. Those are the close neighbors in the [Digital Product Skills](https://github.com/gabros20/digital-product-skill)
family (frontend, architecture, marketing, quality, product).

## The faceted router

`SKILL.md` is a **router, not a workflow engine**. It never executes a fixed sequence. Instead it
composes the smallest sufficient reference set from three facets, then reads only those files before
producing the affected artifact:

1. **Primary job** — exactly one. The core design task: research, a journey, information
   architecture, interaction/state design, visual direction, typography, layout, color,
   imagery/depth, motion, a prototype, a design system, a critique, or a handoff.
2. **Surface overlay** — at most one, unless the task explicitly compares platforms. Website, web
   app, iOS, or Android. The surface decides the register and platform floors.
3. **Concern overlay** — only the ones that materially affect the request. Accessibility (numeric
   floors) and content (copy, voice, i18n length).

That "read only what you need" discipline is the whole point. A one-section color job loads
`color.md`, not all 21 references.

### Declared bundles

Some jobs pair predictably, so the router encodes the pairing — no lateral discovery required:

- **Native mobile prototype** → `prototyping.md` + `surface-ios.md` (or `surface-android.md`).
- **A new surface from scratch** → `visual-direction.md` first, then its craft leaves
  (`typography.md`, `layout-composition.md`, `color.md`, `imagery-depth-decoration.md`,
  `motion.md`) plus the one surface overlay.
- **A design system for a specific surface** → `design-systems.md` + that surface overlay.
- **Any flow, screen, or system where accessibility is explicit** → the primary reference +
  `accessibility.md`.

## Route by job

Read only what the job requires. This is the fast path from "what am I trying to do" to "which
reference file(s)".

### Primary job

| I need to… | Read |
|---|---|
| **Plan or synthesize UX research** — jobs, interviews, surveys, usability studies, design-DNA | `research.md` |
| **Map a flow, onboarding, wizard, checkout, or end-to-end journey** | `journeys.md` |
| **Model objects, sitemap, navigation, naming, or findability** | `information-architecture.md` |
| **Define component behavior and states** — forms, feedback, overlays, selection, search | `interaction.md` |
| **Set the point of view / fix a result that reads generic or templated** | `visual-direction.md` |
| **Choose or set type** — scale, pairing, measure, display | `typography.md` |
| **Lay out a screen** — grid, spacing, hierarchy, density, elevation | `layout-composition.md` |
| **Build a palette, neutral ramp, accent, dark mode, or check contrast** | `color.md` |
| **Add depth, materials, imagery, or decoration** | `imagery-depth-decoration.md` |
| **Choose motion values or decide whether to animate** | `motion.md` |
| **Build or evaluate a prototype / compare design options** | `prototyping.md` |
| **Create or extend a design system, tokens, or component contracts** | `design-systems.md` |
| **Judge or QA a rendered design against its intent** (a scored review, not setting direction) | `critique.md` |
| **Prepare an implementation handoff to frontend** | `handoff.md` |

### Surface overlay

| When the surface is | Read |
|---|---|
| Marketing, brand, landing, or portfolio site (design **is** the product) | `surface-website.md` |
| Product/app UI on the web — dashboards, admin, data tools (design **serves** the product) | `surface-webapp.md` |
| A native iOS / iPadOS app | `surface-ios.md` |
| A native Android app | `surface-android.md` |

### Concern overlay

| When the request involves | Read |
|---|---|
| Contrast, target size, focus, zoom, or reduced-motion floors; which states must be announced | `accessibility.md` |
| Labels, microcopy, errors, empty states, notifications, voice/tone, or i18n length | `content.md` |
| Tracing a technique to its source | `SOURCES.md` |

## The universal invariants

These govern every technique in the references, whether or not the concern overlay is opened:

1. **Name the register per surface** — design-IS-the-product vs design-SERVES-the-product. The
   audience picks the aesthetic, not taste; the serve register legitimately inverts several
   distinctiveness defaults.
2. **Design the full state set** when it applies: default, hover, focus, active, disabled, loading,
   error, success, plus empty for every data region.
3. **Use real content at real lengths** — the longest realistic string, the empty case, the
   overflow case. Never fabricate metrics, logos, testimonials, or decorative data.
4. **Classify every coded artifact** — disposable, design-reference, or production-candidate. Never
   present prototype code as production-ready without engineering, accessibility, and quality
   review.
5. **One bold move + restraint** — spend boldness in one place per section or page; two bold moves
   compete, zero reads generic.
6. **Accessibility floors are design constraints** — contrast, target size, focus order, and
   reduced-motion, even when `accessibility.md` is not opened.
7. **Preserve upstream constraints** — product, brand, and architecture decisions. When the design
   and a constraint conflict, report it explicitly rather than silently overriding.
8. **A visual verdict requires rendered evidence.** When no build was viewed, state "code-level
   pass, not an art review" rather than signing off on appearance.

## What the skill produces

There's no fixed run directory or ledger — each route's output is a normal project artifact, kept
wherever your project convention puts it. Every artifact states, at minimum: the register and
one-line design read; the assumptions and constraints it was built under; the states it covers (or
defers); and its maturity when coded.

| Route | Artifact |
|---|---|
| Research | Synthesized findings, each marked observed / inferred / assumed. |
| Journeys | A breadboard, flow, or journey/service map with every required edge. |
| Information architecture | Object/relationship model, vocabulary, sitemap, navigation model. |
| Interaction | A state-complete interaction spec (the canonical 8-state model). |
| Visual direction | A design read, named register + aesthetic lane, one bold move, refuse-list. |
| Typography / Layout / Color / Imagery / Motion | The craft spec with exact tokens, sizes, timings. |
| Prototyping | A classified prototype (disposable / design-reference / production-candidate) + test plan. |
| Design systems | A layered token set, component specs, and a `DESIGN.md`/`PRODUCT.md` contract. |
| Critique | A severity-ranked Before/After/Why punch-list and a binary verdict. |
| Handoff | A frontend-ready per-screen spec, tokens, motion plan, and `handoff.yaml`. |

## Completion and handoff

The skill is complete only when requested artifacts exist, relevant states and edge cases have been
covered, material assumptions and unresolved work are recorded, and any claimed visual review names
the rendered evidence actually inspected. When downstream implementation is expected, it emits a
compact handoff — artifact paths, owners, constraints, and a recommended next skill — without
duplicating the full artifact. It recommends adjacent skills; it does not invoke them automatically.

## Adjacent skills (don't duplicate these)

`design` owns experience *intent*. Recommend these neighbors for adjacent jobs; do not invoke them
automatically:

- **frontend** — production frontend implementation, reusable component API engineering.
- **architecture** — system architecture and feasibility.
- **marketing** — acquisition and SEO strategy.
- **quality** — independent audits and release verification (a full WCAG audit lives here;
  `accessibility.md` covers design-decidable floors only).
- **product** — product strategy and metrics.
