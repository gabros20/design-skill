# Changelog

All notable changes to **design** are documented here.

The release procedure synchronizes `.codex-plugin/plugin.json`, this changelog, git tag
`v<version>`, and the matching GitHub Release. Runtime `SKILL.md` contains no version metadata.

## [Unreleased]

### Changed
- `choreography.md` "Exits, swaps and direction": a view swap still crossfades, but two readable texts
  never overlap; the old leaves in ~0.3s, then the new arrives. A field rebuild measured a 1.1s act
  crossfade in a scroll scene that read as broken, overlapping text.
- Pointers to `scroll-animation` follow its 2.2.0 lifecycle: the hero budget now lives in
  `lifecycle.md` "The hero budget"; the blur-placeholder pointer names its heading, not a section number.

## [0.3.2] — 2026-11-21

### Added
- `surface-website.md` "Award / experimental tier": a busy hero runs one heavy thing at a time. The
  type leads and lands first; a live scene, video and loop strips start after it settles, one at a
  time; glass fades in place and sits over a live scene only after the entrance; delayed items fade.
  Points at `scroll-animation` (the hero budget) and `3d` (`threejs-orchestration.md`).
- `handoff.md` "Motion plan": a hero with heavy movers names their order, which wait for the
  entrance to settle, and its first paint (a still poster or a build-up from empty).
- `product-visuals.md` "An app demo in a hero": size it to the viewport, scale it as one picture but
  never past real size, show the explanatory (labelled) state, let it break the text column, and make
  its clicks legible at the scaled size. "The honesty rule": no real customer's site in a preview pane
  unless that customer agreed; `image-sourcing.md` scrubs it from captures.
- `critique.md` "Preconditions and evidence": how to get the phone width: CDP device emulation, an iOS
  Simulator for WebKit sign-off, a phone-width iframe as a last resort; a window resize fails silently
  (macOS floors Chrome near 500px), so confirm the breakpoint fired.
- `imagery-depth-decoration.md`: full-bleed and hero images load over the background colour, never a
  blur placeholder (a whole-box filter blur; the measurement is `scroll-animation`'s).

### Changed
- `choreography.md` "Stagger": a word-by-word display headline drops the 4px entrance blur, since
  each word becomes its own filter layer. The hero chunks' duration is the marketing-entrance tier in
  `motion.md`, which the line used to contradict (300ms against 400–800ms); a loop's pause is stated
  once.
- `surface-website.md` busy hero: a product demo arrives after the copy, into space reserved from the
  first paint, with an opacity-only fade, and starts its story once in view; the hero image takes no
  blur placeholder; move-only entrances point to `scroll-animation` `craft.md` §5 instead of restating
  the rule.
- `critique.md` "Failure modes and routing" drops two restatements of its own preconditions and
  Skip-when lines.

## [0.3.1] — 2026-11-20

### Changed
- `choreography.md` "Scroll and reveal" takes the family's content-reveal ruling: never let a reveal
  depend on script (the floor); by default content (text, cards) arrives by trigger with the pre-JS
  gate as its guarantee, since a scrubbed fade leaves copy half-faded at rest; decoration and media
  may scrub on `view()`. Points at `scroll-animation` `entrances.md` "Triage by clock" and "The gate,
  the failsafe and the server". Replaces the "prefer `view()` reveals" default.

## [0.3.0] — 2026-11-19

### Added
- **Solid Glass** (deeplethe/solid-glass, MIT), the thick-glass web design language for AI/agent
  apps: `surface-webapp.md` "Solid Glass (AI and agent apps)" (when to choose it over Liquid Glass,
  Material 3 Expressive or flat; its four principles as rules; the motion-means-running AI-state
  vocabulary; a legibility check with computed contrast), `imagery-depth-decoration.md` "Solid
  glass" material values, cross-pointers from the iOS and Android language sections, and the web-app
  router row. Room made by moving domain-expert configuration to `forms.md` "Expert settings" and
  tightening wording in both references.
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

- `forms.md` (new, router-wired): layout, control choice by answer type, validation timing (reward
  early, punish late), forgiving input, passwords and sign-in, field states, save model — moved and
  expanded from interaction.md. WCAG 2.2 AA decisions design owns (1.4.13, 2.1.4, 3.3.7, 3.3.8, 3.2.6,
  2.2.1); deceptive-pattern floor; Liquid Glass (current HIG); Material 3 Expressive; webapp paging,
  table hygiene, shortcuts and ordered colour scales; web column spec; warm-ramp hue rotation.

- Law-vs-taste pass (decision D6): `conventions.md` (new, router-wired) holds the precedence rule,
  style dimensions, a product-type × dimension matrix (marketing, SaaS, UX flow, editorial, cinematic
  scroll, luxury/hospitality, AI app, native, docs, e-commerce) and the lane table (moved from
  visual-direction, plus cinematic, maximalist, dense-instrument and platform-native lanes). SKILL.md
  states precedence (floors > direction contract > leaf defaults > tells) and a phrasing legend;
  the direction contract gains LANE + DIMENSIONS; craft leaves carry an override line; critique is
  judged against the contract (unchosen tells, the best practitioner of this lane).

- Fable advisory 2 (D7, D8): a family "Standalone context check" in SKILL.md (common core + design
  questions; a question never carries a look, three labelled directions are shown instead);
  `intake.md` (signals, owner questions, direction cards, vocabulary bridge, assumption ledger,
  reaction round and feedback translation, headless and no-brand rules); `composition-layers.md`
  (plane stack, depth cues, grid under the chaos, decoration kit, interleave, stage vs flow, layer
  contract). The contract's values cite reasons, carry a DEPARTS field and the actual headline;
  brand mandatories join the precedence line; conventions gains keep/break codes, three style axes,
  four product types, eight lanes, hybrids by axis and the period rule; critique rejects post-hoc
  contract edits and adds the rhythm strip.

### Fixed
- WCAG large text is ≥24px / ≥18.66px bold (18pt / 14pt), not 18px / 14px; the 2.5.8 spacing rule
  is the 24px-circle exception, not a 24px gap.
- Law-vs-taste reclassification: ~50 rules stated as law are now defaults with conditions or lane
  values (one bold move, anti-boring checklist, presumptive blockers, double-the-spacing, accent cap,
  hero bans, rotation, weight extremes, size and family caps, fluid body, motion primitives, aurora,
  photo quotas, nav as reflex, repetition bans, hamburger, hand-tuned M3 schemes); under-stated floors
  restored (names and keyboard in the universal list, 2.2.2 HIGH, label wrap at zoom, luxury-lane
  contrast, keyboard scroll in scroll scenes, App Store 4.8, 1.4.3 exemptions, clamp ratio basis).
- Advisory corrections: OKLCH semantic hue anchors (error 20–30, warning 65–90, info 235–260);
  WCAG 2 AA is the contrast gate with APCA as a second lens (WCAG 3 is a draft); focus indicator
  criteria (2.4.7 / 1.4.11 / 2.4.11 AA, 2.4.13 AAA); iOS alert button order and Dynamic Type at AX5
  (17→53pt); form-control 16px zoom rule; `mix-blend-mode: difference` legibility; known dates as three
  fields, not a picker; submit stays enabled (one statement); sentence case by default; display cap as
  a default with a declared exception; F-pattern as a failure to design out; tree tests over click
  counts; equal cells for equal rank; browser gamut clipping.
- Measure is counted in characters, not `ch`; ramp lightness is spaced unevenly; dismiss on distance
  *or* velocity; tabs never slide; the focus ring is never animated; short UI exits ease out;
  Motion's `x`/`y`/`scale` shorthands are accelerated from v14.2.

### Changed
- Contested positions settled: aurora glow scoped to atmospheric registers (the single accent
  spotlight is a tell); gradients limited by hue count, not stop count; near-black and pure black by
  lane; light-on-dark weight tuned per face; eyebrows kept as a tell with a keep-test; DESIGN.md
  starts as a seed and is finalised from the first built surface. The new-surface bundle loads only the
  craft leaves the brief makes material; anti-defaults and page-anatomy load on demand. Motion library
  internals and versions are left to `frontend` `ui-motion.md`; design points to its headings.

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

[0.3.1]: https://github.com/gabros20/design-skill/releases/tag/v0.3.1
[0.3.0]: https://github.com/gabros20/design-skill/releases/tag/v0.3.0
[0.2.0]: https://github.com/gabros20/design-skill/releases/tag/v0.2.0
[0.1.2]: https://github.com/gabros20/design-skill/releases/tag/v0.1.2
[0.1.0]: https://github.com/gabros20/design-skill/releases/tag/v0.1.0
