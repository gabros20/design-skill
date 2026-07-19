# Frontend handoff

Purpose: Package an approved design as a frontend-ready specification an engineer who was not in the room can implement, plus a compact machine companion for pipeline routing.

Read when:
- Preparing an implementation handoff to frontend.
- Auditing a built surface against its own design system and writing correction plans.
- Writing a self-contained plan for another agent to execute.

Skip when:
- The design is still being explored (route to prototyping.md).
- You are doing the production implementation yourself (route to frontend-skill).

Inputs: the approved design artifact(s), tokens, and the target codebase's stack and conventions.

Produces: a handoff package (per-screen spec, tokens, interactions, states), a motion plan when animated, and a handoff.yaml companion.

## Contents
- The handoff package
- Annotation standards
- Preserve upstream constraints
- Design-plans discipline
- Motion plan
- Tokens: two formats
- Review gates and QA
- handoff.yaml companion

## The handoff package

Aim for at least Level 4 on the maturity ladder: 1 screenshot, 2 annotated, 3 interactive spec, 4 full spec, 5 integrated. A self-contained folder (`design_handoff_<feature>/`) with a README that lets a developer who was not in the conversation implement from it alone. Frame it up front: the coded files are design references, not production code to copy; recreate them in the target codebase (React, Vue, SwiftUI, native) using its existing patterns. Classify fidelity (from prototyping.md): hi-fi means recreate pixel-perfectly with the codebase's libraries; lo-fi means use as a layout and behavior guide and apply the codebase's own styling.

Per screen or view: name, purpose, layout (grid or flex, widths, heights, margins, padding), and each component (position and size; exact hex if hi-fi; type font/size/weight/line-height; radius/shadow/border; every state; exact copy). Then:
- Interactions and behavior: handlers and nav flows; animations (duration, easing, properties); hover/loading/error states; validation; responsive behavior.
- State management: variables, transitions and their triggers, data fetching.
- Design tokens: colors, spacing scale, type scale, radius, shadows, by token name, not hex.
- Assets, and which project files hold the design.
- Edge cases: min and max content, per breakpoint, ARIA/keyboard/screen-reader.

Include every state, not just the happy path (empty, loading, error, success). Precision on measurements, color, and type is load-bearing. When cutting scope, never cut error states or accessibility. For consequential decisions, record a short rationale (decision, context, options considered, evidence, trade-offs, and how you will know it was right) so the implementer inherits the reasoning, not just the values.

## Annotation standards

Annotate behavior (keys Tab/Enter/Esc/Arrows; loading triggers and duration), content (max chars, truncation mode, pluralization "1 item" / "2 items", dynamic vs static), and layout (overflow, breakpoint reflow). Name frames `[Flow] / [Step] / [State] / [Breakpoint]` (for example `Checkout / Payment / Error / Mobile`) with state suffixes (`/Default`, `/Hover`, `/Focus`, `/Error`, `/Loading`, `/Empty`). Design component names match code exactly (`ButtonPrimary`, not "Main CTA").

## Preserve upstream constraints

State the files you will modify, create, or delete before editing. The existing global stylesheet is append-only: keep the framework's directives and add tokens below them; silently dropping a framework CSS entry un-styles the whole app. Never delete route files, component directories, or an old site without explicit approval. If the approved design omits a state the implementation needs, stop and report the missing state rather than inventing production behavior.

## Design-plans discipline (audit then plan)

When the handoff is a correction to an existing surface, write read-only plans under `design-plans/` and never touch product source. Each plan is self-contained: the executor has zero context and zero taste. Keep a finding only when it is proven against the rendered path (routes, layouts, components, resolved tokens); shared names, repository proximity, and conceptual similarity do not establish a connection. Justify any new primitive by proving the existing system cannot express the decision and naming its consumers. Plan fields: outcome; the commit it is written against; evidence chain; the design decision; reuse (token/variant/component plus an exemplar path); changes (exact path, change, what to preserve, how to verify); scope (inherit/verify/exclude); validation (exact command then expected result); stop conditions.

## Motion plan

When motion ships, the plan gives exact values, never approximated: curves, durations, spring configs, and the token each maps to. Include a feel-check the executor runs: trigger the interaction, watch at 10% playback in DevTools, toggle reduced-motion, and check on a real device. The canonical duration and easing scale is in motion.md; cite it, do not restate it.

## Tokens: two formats

Ship tokens twice: a structured JSON block (spacing scale plus base unit, typography roles, colors by role, radius, shadows, grid) for tooling, and a human design map (concrete values, no prose). Export maps to the target: `tokens.css`, Tailwind `@theme`, DTCG `tokens.json`, or shadcn CSS variables. The token contract and what pages must share are design-owned; the framework wiring is frontend-skill's.

## Review gates and QA

Scale gates to project size and risk: Concept, then Design, then Pre-handoff (all states designed, edge cases covered, accessibility checked, specs complete, dev walkthrough), then Implementation QA. QA against the spec, not memory: visual accuracy, layout, every interaction state, target sizes and keyboard order (floors in accessibility.md), real content (no lorem in production), accessibility, and cross-platform behavior (OS text-size settings, screen densities). Log findings with a severity ladder: Critical (blocked, fix pre-release), Major (this sprint), Minor (next sprint), Cosmetic (backlog). Verify across the breakpoint set 320/414/768/1024/1440/1920; check motion within +/-50ms of spec at 60fps with reduced-motion honored; lint tokens (a literal `#3B82F6` should be `var(--color-primary)`). Automated a11y catches only about 30 to 50%, so manual keyboard and screen-reader passes are required.

## handoff.yaml (machine companion)

Emit a compact companion beside the human package for pipeline routing. It is an index, not a copy; do not duplicate the full artifacts in it.

```yaml
handoff_version: 1
skill: design
status: complete
objective: ""
inputs_used: []
artifacts_created:
  - path: ""
    type: ""
    owner: design
decisions: []
assumptions: []
constraints: []
risks: []
unresolved: []
validation:
  performed: []
  remaining: []
recommended_next:
  - skill: frontend
    reason: "Implement the approved interaction and component states"
```

Only `objective` is universally required; downstream consumers tolerate absent fields.
