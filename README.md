# Design

Design digital-product experiences across websites, web apps, iOS, and Android. `design` owns the
foundational experience-design work — UX research, journeys, information architecture, interaction
and state design, visual direction, typography, color, layout, motion, content, accessibility,
prototypes, design systems, critique, and frontend handoff — expressed as design artifacts and a
frontend-ready handoff, without expanding into production frontend engineering.

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

**Visual guide:** [designskill.vercel.app](https://designskill.vercel.app)

`design` is the **Shape**-stage skill of the [Digital Product Skills](https://github.com/gabros20/digital-product-skill)
family — the capability that decides how a product should look and behave before it is built. See
that repository for the family architecture and the adjacent stages.

## What it owns

Use `design` when the request needs one or more of:

- UX research — jobs, interviews, surveys, usability studies, design-DNA extraction.
- Journeys and flows — breadboards, journey maps, service blueprints, onboarding, checkout.
- Information architecture — object models, sitemaps, navigation, naming, findability.
- Interaction and state design — the canonical 8-state model, forms, feedback, overlays, search.
- Visual direction and craft — register, aesthetic lane, typography, color, layout, imagery, depth,
  motion.
- Accessibility floors, content and microcopy, prototypes, design systems, scored critique, and a
  frontend-ready handoff.

It does **not** own production frontend implementation (frontend-skill), backend or system
architecture (architecture-skill), marketing or SEO strategy (marketing-skill), independent audits
and release verification (quality-skill), or product strategy and metrics (product-skill) — unless
the request also contains an experience-design job. `accessibility.md` covers design-decidable
floors; a full WCAG audit belongs to quality.

## How it works

`SKILL.md` is a faceted **router, not a workflow engine**. It composes the smallest sufficient
reference set from three facets and reads only those files before producing an artifact:

- **One primary job** — the core design task.
- **At most one surface overlay** — website, web app, iOS, or Android (the surface sets the register
  and platform floors).
- **Only the concern overlays that matter** — accessibility, content.

Declared bundles encode the common pairings (a native mobile prototype, a new surface from scratch,
a design system for a surface) so no lateral discovery is needed. The runtime router is
[skills/design/SKILL.md](skills/design/SKILL.md); it links directly to 21 focused references and
loads only what the job needs.

## Install

With skills.sh:

```bash
npx skills add gabros20/design-skill
```

Or clone and install for a specific client:

```bash
git clone https://github.com/gabros20/design-skill.git
cd design-skill
./install.sh codex
```

| Target | Destination |
|---|---|
| `codex` | `${CODEX_HOME:-$HOME/.codex}/skills/design` |
| `agents` | `~/.agents/skills/design` |
| `claude` | `~/.claude/skills/design` |
| `cursor` | `~/.cursor/skills/design` |
| `antigravity` | Gemini IDE and Antigravity CLI skill paths |
| `opencode` | `~/.config/opencode/skills/design` |
| `grok` | `~/.grok/skills/design` |
| `hermes` | `~/.hermes/skills/design` |
| `all` | Claude, Codex, and the cross-agent path |

The installer stages a complete copy before replacing an existing installation and restores the
old copy if replacement fails.

## Use

Codex explicit invocation uses `$design`:

```text
Use $design to set a visual direction for this SaaS landing page.
Use $design to prototype an accessible iOS sign-up flow I can test.
Use $design to map the checkout journey, every edge and empty state.
Use $design to run a scored critique of this rendered screen.
Use $design to package this approved design for frontend handoff.
```

Documentation may use `/design` as shorthand. Other clients may expose a slash command, `@design`,
a skill tool, or natural-language activation. The skill should **not** activate for production
frontend build, system architecture, marketing/SEO, or release verification unless the request also
requires experience design.

## The 21 references

The router selects from a primary-job set, a surface overlay, and concern overlays. It loads the
smallest sufficient set — never all 21.

**Primary job**

| Reference | Scope |
|---|---|
| [research.md](skills/design/references/research.md) | UX research: jobs, interviews, surveys, usability studies, design-DNA |
| [journeys.md](skills/design/references/journeys.md) | Flows and journeys: breadboards, journey maps, service blueprints, onboarding |
| [information-architecture.md](skills/design/references/information-architecture.md) | Object model (OOUX), vocabulary, sitemap, navigation, findability |
| [interaction.md](skills/design/references/interaction.md) | State design (8-state model), forms, feedback, overlays, selection, search |
| [visual-direction.md](skills/design/references/visual-direction.md) | Register doctrine, design read, aesthetic lanes, one bold move, anti-default catalog |
| [typography.md](skills/design/references/typography.md) | Type scales, pairing, measure/leading, display craft, i18n |
| [layout-composition.md](skills/design/references/layout-composition.md) | Grids, spacing scales, hierarchy, density, elevation |
| [color.md](skills/design/references/color.md) | OKLCH model, palette construction, contrast math, dark mode, semantic color |
| [imagery-depth-decoration.md](skills/design/references/imagery-depth-decoration.md) | Depth build order, materials, image treatment, decoration discipline |
| [motion.md](skills/design/references/motion.md) | Duration/easing canon, springs, interruptibility, reduced-motion |
| [prototyping.md](skills/design/references/prototyping.md) | Fidelity ladder, classification, in-page variants, test plan |
| [design-systems.md](skills/design/references/design-systems.md) | Token architecture, DESIGN.md/PRODUCT.md contracts, component specs, governance |
| [critique.md](skills/design/references/critique.md) | Art review (A0–A3), scored critique, cognitive load, personas |
| [handoff.md](skills/design/references/handoff.md) | Frontend-ready handoff package, motion-plan contract, handoff.yaml |

**Surface overlay** (at most one)

| Reference | Scope |
|---|---|
| [surface-website.md](skills/design/references/surface-website.md) | Marketing/content sites: macrostructure, section craft, premium↔info dial |
| [surface-webapp.md](skills/design/references/surface-webapp.md) | Product UI: serve-register craft, density modes, data display, dashboards |
| [surface-ios.md](skills/design/references/surface-ios.md) | iOS/iPadOS: HIG numbers, Dynamic Type, gestures, iPad adaptivity |
| [surface-android.md](skills/design/references/surface-android.md) | Android: Material 3 tonal color, type scale, window classes, navigation |

**Concern overlay** (only when it matters) and provenance

| Reference | Scope |
|---|---|
| [accessibility.md](skills/design/references/accessibility.md) | Numeric floors: contrast, targets, focus, zoom, reduced-motion; a11y priority order |
| [content.md](skills/design/references/content.md) | UI copy, errors, empty states, voice/tone, i18n length |
| [SOURCES.md](skills/design/references/SOURCES.md) | Provenance and attribution index for every mined technique |

## Outputs and completion

Depending on the route, the skill produces synthesized research, a journey map, an IA model, a
state-complete interaction spec, a visual direction, craft specs with exact tokens, a classified
prototype, a design system and contract, a scored critique, or a frontend handoff package.

Work is complete only when requested artifacts exist, relevant states and edge cases have been
covered, assumptions and unresolved work are recorded, and any claimed visual review names the
rendered evidence actually inspected. When no build was viewed, the skill reports a "code-level
pass, not an art review."

## Evaluations

Four fixture layers keep failures diagnosable — each points at a distinct fix:

| Layer | Question | Fixtures |
|---|---|---|
| Activation | Should `design` trigger for this request? | `evals/activation/` (20 cases, incl. adjacent-skill near misses) |
| Traversal | Did it load the smallest sufficient reference set? | `evals/traversal/` (8 cases) |
| Output | Did it satisfy the artifact and completion contracts? | `evals/output/` (5 cases) |
| Compression | Did a shorter candidate preserve quality? | `evals/compression-ablation/` (4 cases) |

`scripts/check-sync` validates fixture structure; representative live activation and traversal runs
are in progress for the v0.1.0 release. See [evals/README.md](evals/README.md).

## Provenance

The pack was synthesized from 27 sources across a research fan-out — the internal `webdesign` skill
plus external design skills — keeping only what `design` owns and rewriting every technique to the
authoring standard. Values and algorithms are re-expressed, not copied; only permissively licensed
sources contribute any verbatim prose. Full attribution and licenses:
[skills/design/references/SOURCES.md](skills/design/references/SOURCES.md).

## Repository map

```text
.codex-plugin/plugin.json  Codex plugin and release metadata
AGENTS.md / CLAUDE.md      repository and client-specific maintainer guidance
skills/design/             portable runtime skill and client metadata (21 references)
evals/                     activation, traversal, output, and compression fixtures
docs/                      installation, usage, and recipes
site/                      visual guide (deployed to designskill.vercel.app)
scripts/                   repository validation and token accounting
```

## Validate

```bash
scripts/check-sync
scripts/count-skill-tokens
```

The gate validates runtime frontmatter, direct reference routing, reference primacy headers and
contents lists, plugin/client metadata, evaluation fixtures, internal links, executable scripts, and
release version alignment. Every reference stays under 2,500 tokens.

## Documentation

- [Installation](docs/installation.md)
- [Usage](docs/usage.md)
- [Recipes](docs/recipes.md)
- [Evaluation fixtures](evals/README.md)

## Versioning and releases

Each release synchronizes `.codex-plugin/plugin.json`, the newest `CHANGELOG.md` release, git tag
`v<version>`, and the matching GitHub Release. Runtime `SKILL.md` intentionally carries no version
or repository metadata. Current release: **v0.1.0**.

## Contributing

See [AGENTS.md](AGENTS.md) for repository invariants and [CONTRIBUTING.md](CONTRIBUTING.md) for the
change and release workflow. The repository is independently versioned and does not require a
sibling skill or collection checkout, though it is designed to compose with the
[Digital Product Skills](https://github.com/gabros20/digital-product-skill) family.

## License

[MIT](LICENSE) · Tamás Gábor ([@gabros20](https://github.com/gabros20))
