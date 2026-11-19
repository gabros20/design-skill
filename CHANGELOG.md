# Changelog

All notable changes to **design** are documented here.

The release procedure synchronizes `.codex-plugin/plugin.json`, this changelog, git tag
`v<version>`, and the matching GitHub Release. Runtime `SKILL.md` contains no version metadata.

## [Unreleased]

### Added
- Design-fold of ~30 external design, motion and illustration skills (MIT / Apache-2.0; unlicensed
  sources as inspiration only), de-duplicated across ten reader lanes. Six new router-wired
  references: `anti-defaults.md` (the tell catalog, moved out of visual-direction, plus the current
  AI cluster and predict-then-refuse), `page-anatomy.md` (anatomy by visitor job, macrostructures and
  the question chain moved from surface-website, SaaS deck, pricing, nav/footer), `choreography.md`
  (cast, stagger, exits, gestures, loops, demo loops, loaders, frame review), `image-sourcing.md`
  (sourcing moved out of imagery, plus capture-before-build and library-photo vetting),
  `product-visuals.md` (product shots, honest demo UI, bento, explanatory figures, illustration
  craft), and `brand-mark.md` (logo and identity method, test ladder, kit).
- Visitor modes (Persuade / Experience / Operate / Read), change depths (polish / restyle / refine),
  concept and world derivation, the direction contract, lane write-ups with count budgets.
- Critique: usability P0 list, evidence validation, blind read, staged hero review, element-matrix
  fidelity, Floor / Reflex / Finish tiers, scoring to a bar, remove-then-group deslop.
- Accessibility floors: WCAG 2.2.2 pause/stop/hide, 2.4.1 skip link, 2.5.7 dragging alternative,
  1.4.12 text spacing, inline-link cue, vestibular triggers, changing-background contrast.
- Craft folds across typography, color, layout, interaction, content, design systems, research,
  prototyping, handoff, and the four surfaces; activation, traversal and output eval cases.

### Fixed
- WCAG large text is ≥24px / ≥18.66px bold (18pt / 14pt), not 18px / 14px; the 2.5.8 spacing rule
  is the 24px-circle exception, not a 24px gap.
- Measure is counted in characters, not `ch`; ramp lightness is spaced unevenly; dismiss on distance
  *or* velocity; tabs never slide; the focus ring is never animated; short UI exits ease out;
  Motion's `x`/`y`/`scale` shorthands are accelerated from v14.2.

### Changed
- Contested positions settled: aurora glow scoped to atmospheric registers (the single accent
  spotlight is a tell); gradients limited by hue count, not stop count; near-black and pure black by
  lane; light-on-dark weight tuned per face; eyebrows kept as a tell with a keep-test; DESIGN.md
  starts as a seed and is finalised from the first built surface.

## [0.2.0] — 2026-10-17

### Added
- `imagery-depth-decoration.md`: sourcing and generating imagery — a per-asset licence gate
  (forced credit, NC, ND, no-AI-training and no-repackaging clauses, per-set licences inside
  aggregators, logos as trademarks), the diversity-vs-consistency strategy, the anchor-first
  reference-image workflow, and a four-axis curation pass with per-asset provenance.
- `design-systems.md`: icon lookup by a library's name/tag index; DESIGN.md authoring by change
  mode and the `@google/design.md` `lint` / `diff` / `export` gate (pin the `alpha` format).
- `visual-direction.md`: the change mode (reproduce / redesign / rebrand) named with the design
  read (reproduce never generates stand-ins for real people, products, places, or work, and never
  suspends accessibility floors); `critique.md` calibrates the rubric to it (reproduce is judged on
  source fidelity) and records residuals at the loop cap.
- `information-architecture.md`: redesign inventory and per-page/section dispositions, the section
  catalog, an in-chrome notice for kept links to unbuilt pages, and the multi-offer hub-and-spokes
  sitemap.
- Router rows, SOURCES primary documents, and activation / traversal / output eval cases for the
  above.
- Cross-pack alignment with `frontend` and `quality` (ruling D-8): in reproduce mode a missing asset
  stays a counted, labeled gap, with a generated fill only in an owner-approved non-brand, non-hero
  decorative slot recorded as `generated`; placeholder routes for unbuilt pages carry `noindex`, stay
  out of the sitemap, and are listed in the gap report; "reproduce" names quality's "fidelity" and
  frontend's "faithful rebuild".

## [0.1.3] — 2026-07-27

### Fixed
- Normalized sibling-skill references from repo names to the backticked runtime id convention used
  by every other pack in the family (`frontend`, `architecture`, `marketing`, `quality`, `product`)
  across `SKILL.md` and six reference files.
- Added `operate` and `automation` to the boundary sentence in "Mission and boundary" — a shipped
  design still needs deployment/monitoring, and a designed flow can trigger a cross-system business
  process.

## [0.1.2] — 2026-07-22

Visual-guide (site + Remotion) refresh only. The runtime pack — `SKILL.md` and every reference —
is unchanged from 0.1.1; nothing about routing, artifacts, or behavior differs for installers.

### Changed
- Rebuilt the [visual guide](https://designskill.vercel.app) from a lightly-filled template into a
  tailored page: sections and purpose-built components derived from the skill's own model rather
  than the scaffold defaults.
- Rebalanced the site so both registers read as co-equal — a distinctive brand/marketing site
  ("design IS the product") and a dense product screen ("design SERVES it") — instead of leading
  UI-first.
- Refactored the page to represent the full capability surface: an "upstream" section for research,
  journeys, and information architecture; a flagship "craft" showcase with a type-scale specimen,
  OKLCH ramp, grid, and motion tokens; the eight-state grid demoted to one compact panel.
- Replaced the Remotion hero with an eight-beat storyboard sweeping the whole arc
  (ask → research → register → direction → craft → states → critique → handoff), light and dark,
  with the craft composition as the poster frame; states are no longer the visual centerpiece.

## [0.1.1] — 2026-07-19

### Changed
- Activation description now names dashboards and product UI explicitly, giving near-miss routing a
  literal anchor against the website-specialist neighbor.
- Routing discipline hardened: a named or implied surface's overlay counts as part of the smallest
  sufficient reference set; the surface-overlay table states it loads in addition to the primary job.
- Typography activation eval case made cross-surface (web app + iOS) so it tests this skill's
  activation rather than the installed website specialist's territory.
- Isolated per-case eval runs (fresh context per judgment): traversal 8/8; activation 19/20 stable
  plus one deliberately hard design-vs-webdesign near miss that strong judges resolve correctly.

## [0.1.0] — 2026-07-19

### Added
- Initial release of the **design** experience-design pack: a lean universal `SKILL.md` core
  (mission and boundary, faceted router, universal invariants, workflow, artifact contract) plus
  21 focused references covering research, journeys, information architecture, interaction and state
  design, visual direction, typography, layout and composition, color, imagery/depth/decoration,
  motion, content, accessibility, prototyping, design systems, critique, handoff, the four surface
  overlays (website, web app, iOS, Android), and a SOURCES trace.
- Faceted router with primary-job, surface-overlay, and concern-overlay tables plus declared bundles,
  capping load at one primary job, ≤1 surface, and only material concerns.
- Pack mined and synthesized from 27 sources across the research fan-out.
- Evaluation fixtures across four dimensions — activation, traversal, output, and
  compression-ablation — replacing the placeholder sets.

[0.2.0]: https://github.com/gabros20/design-skill/releases/tag/v0.2.0
[0.1.2]: https://github.com/gabros20/design-skill/releases/tag/v0.1.2
[0.1.0]: https://github.com/gabros20/design-skill/releases/tag/v0.1.0
