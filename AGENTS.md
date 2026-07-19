# Agent guide — design-skill

This repository packages one independently versioned runtime skill: `design`. The GitHub and plugin
package name is `design-skill`; the runtime identifier and Codex invocation remain `design` and
`$design`. It is the Shape-stage skill of the Digital Product Skills family.

## Ownership boundary

`design` owns experience *intent* — research, journeys, information architecture, interaction and
state design, visual direction and craft, accessibility floors, content, prototypes, design systems,
critique, and frontend handoff — expressed as design artifacts, never as production code. It does
not absorb production frontend implementation (frontend), system architecture (architecture),
marketing/SEO strategy (marketing), independent audits and release verification (quality), or
product strategy (product). When an adjacent capability is required, preserve the approved design
artifacts and emit a handoff. Do not silently expand this skill into a lifecycle composer.

## Invariants

- **Experience intent, not production code.** Never present prototype code as production
  implementation. Every coded artifact is classified `disposable`, `design-reference`, or
  `production-candidate`.
- **A visual verdict requires rendered evidence.** When no build was viewed, state "code-level pass,
  not an art review" rather than signing off on appearance.
- **Canonical homes — one source of truth, others point to it, never restate.** Motion
  duration/easing values live in `motion.md`. Universal accessibility floors (contrast, target
  sizes, focus, zoom, reduced-motion) live in `accessibility.md`. The anti-default catalog and
  register doctrine live in `visual-direction.md`. The 8-state model lives in `interaction.md`; the
  handoff package in `handoff.md`; token architecture in `design-systems.md`.

## Change rules

1. Put universal behavior in `SKILL.md`; put conditional depth in the smallest owning reference.
2. Every reference stays directly linked from `SKILL.md` and begins with `Purpose`, `Read when`,
   `Skip when`, `Inputs`, `Produces`; add an early `## Contents` when it exceeds 100 lines. No nested
   reference directories or discovery chains.
3. Keep every reference under 2,500 tokens (`scripts/count-skill-tokens`). Compression is the job.
4. Keep runtime frontmatter to `name` and `description` only. Versions and repository URLs belong in
   plugin metadata, changelog, tags, and releases — never in `SKILL.md`.
5. Route load stays capped: one primary job, at most one surface overlay, only material concern
   overlays. Add a declared bundle to the router rather than a reference-to-reference chain.
6. Preserve upstream product/brand/architecture constraints; report conflicts instead of overriding.
7. Update the affected activation, traversal, output, or compression fixtures when behavior changes.

## Validation and release

Run before handoff:

```bash
scripts/check-sync
scripts/count-skill-tokens
```

Structural success is necessary but not sufficient: representative evals must show useful
activation, minimal traversal, and better outputs. Release by synchronizing
`.codex-plugin/plugin.json`, `CHANGELOG.md`, tag `v<version>`, and the GitHub Release. Never add the
version to runtime `SKILL.md`.
