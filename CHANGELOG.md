# Changelog

All notable changes to **design** are documented here.

The release procedure synchronizes `.codex-plugin/plugin.json`, this changelog, git tag
`v<version>`, and the matching GitHub Release. Runtime `SKILL.md` contains no version metadata.

## [Unreleased]

### Added
- Queue unreleased changes here.

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

[0.1.2]: https://github.com/gabros20/design-skill/releases/tag/v0.1.2
[0.1.0]: https://github.com/gabros20/design-skill/releases/tag/v0.1.0
