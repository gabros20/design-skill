# Critique (expert design review)

Purpose: One coherent method for judging a design against its own intent — art review, scored
heuristic critique, deslop pass, and motion review — with the honesty rules and the output contract
that keep judging separate from fixing.

Read when:
- Reviewing, critiquing, or QA-ing a rendered build or design for craft and usability.
- Running a go/no-go gate before handoff, or a fast slop-removal pass on a draft.

Skip when:
- You need to build or fix the design (this file produces a punch-list, not the patch).
- You need contrast/target/focus floors → `accessibility.md`; motion timing canon → `motion.md`;
  the anti-default catalog → `visual-direction.md`; an independent WCAG audit → quality-skill.

Inputs:
- The design's own intent (brief, `DESIGN.md`/design system, inferred user/task/feel).
- Rendered evidence: per-section crops at two viewports, reduced-motion emulated.

Produces:
- A severity-ranked punch-list in a Before / After / Why table, and a binary verdict.

## Contents

- Preconditions and honesty
- The review method
- Severity scales
- Presumptive blockers and the false-positive filter
- Scored heuristic critique
- Deslop (fast pass)
- Motion review
- Output contract
- Failure modes and routing

## Preconditions and honesty

- **The bar** is not "does it work / does the grid align" but "would a design lead at Linear or
  Apple put their name on this?" Review against the design's *own* intent, never a generic ideal.
- **No vision, no art review.** A visual verdict requires rendered evidence + a multimodal reviewer.
  Capture per-section tight crops at two viewports (desktop ~1440×900 + iPhone-class), with
  `prefers-reduced-motion` emulated and each element scrolled into view; build an ordered manifest
  in document order, desktop before mobile. Spend tokens reading crops, not driving the browser.
- **Degrade honestly.** No browser/render available → state "code-level pass — not an art review;
  no build was viewed." Never sign off a visual on code alone.
- **Isolated dual assessment (anti-anchoring):** run A = taste/design review and B = deterministic
  detector + browser evidence as isolated passes, so detector output does not anchor visual
  judgment. A degraded single-context run must emit a `⚠️ DEGRADED` banner.

## The review method

1. **Scope & intent.** Bound what's under review; read the design system; infer user, task, and
   intended feel. Everything downstream is judged against that intent. **Calibrate scope to
   fidelity:** a wireframe is judged on hierarchy/flow/missing states only (no color or brand
   notes); low-fi adds layout & labeling; hi-fi adds visual & brand; a prototype adds
   transitions & error paths.
2. **See the whole first.** Look at the rendered output as a user: does one thing lead, does it
   breathe, does it look like *this* product? Squint. "The worst slop is compositional."
3. **Run the lenses independently, section by section, writing each finding as you go** (never
   batch-and-judge at the end). Zoom in and hunt the small defect — mis-sized/wrong-meaning icon,
   orphan or overflow text, misaligned label, off-baseline element. "Finding nothing is a
   conclusion you earn by looking."
   - **A Hierarchy** (highest-value) · **B Typography & color** · **C Surfaces & depth** ·
     **D Composition & rhythm** · **E States, polish & motion** · **F Structure, reuse & content**
     (reinvention, structural hacks, content coherence).
4. **Score & filter.** Assign a severity to each finding, then cut the false positives.
5. **Report & verdict.** Emit the punch-list (see Output contract) and a binary verdict.

## Severity scales

Two compatible scales; a finding on either blocks if it lands in a blocking band.

- **Art review A0–A3** (taste vs direction): **A0** direction violation — off-palette/type/register,
  anti-default tell, broken hierarchy (blocks). **A1** composition/rhythm failure or a real detail
  defect — centered-everything, uniform card grids, no signature section, mis-sized icon,
  overflow/clip/collide, visible misalignment (blocks). **A2** sub-perceptual refinement (advisory).
  **A3** delight (advisory).
- **Issue P0–P3** (task/user): **P0** blocks the core task or excludes a user — contrast failure on
  a primary action, keyboard trap. **P1** "would a real user contact support over this?" **P2**
  friction with a workaround. **P3** polish. **Any P0, or a P1 you can't immediately fix, is NO-GO.**

**No first-pass sign-off.** Round 1 must never be a sign-off — if genuinely no A0/A1, promote the
1–3 highest-value refinements into the blocking list for one real polish pass. From round 2,
approve the moment A0/A1 are clear. Converge, don't chase perfection: round-over-round only
escalate, adding no new low-value nitpicks. Cap the loop (default 3 rounds).

## Presumptive blockers and the false-positive filter

**Presumptive blockers** — any one present → not approved: no focal point · size-only or defaulted
typography · monotone layout · timid or competing-accent palette · harsh or fragmented surfaces ·
missing states · structural hacks (negative margins undoing parent padding, escape-hatch `calc()`,
absolute positioning to dodge layout flow — the correct answer is simpler than the hack) · an
inaccessible hand-rolled control where a keyboard-accessible primitive exists.

**False-positive filter** (this is half the skill). Cut a finding when it is taste-not-defect, a
bold choice that is working, out of scope, ratified by the design system, or a lint/compile concern.
"If you can't say *why* a finding costs the user or makes the UI read as generated, it's taste —
cut it." Generated UI looks generated because it defaulted; it does not become good by defaulting
harder.

## Scored heuristic critique

A repeatable go/no-go rubric, run alongside the taste review (agreement = high confidence):

- **Nielsen's 10 heuristics, each 0–4 (/40).** Bands: 36–40 excellent/ship · 28–35 good ·
  20–27 acceptable · 12–19 poor · 0–11 critical. **Honesty calibration: most shipped interfaces
  score 20–32; a 38 means you aren't looking hard enough.** Report per-heuristic, name the lowest
  two. (Formal evaluation: 3–5 evaluators find ~75% of problems; run two independent passes, take
  the median on disagreement.)
- **Cognitive load.** Classify each demand intrinsic (keep/structure) / extraneous (cut) / germane
  (keep). **Working memory ≤4 items at once** (Cowan 2001, revising Miller 7±2); the practical caps
  (nav ≤5, hierarchy ≤3 tiers, form group ≤4, ≤3 pricing tiers, ≤4 dashboard metrics) live in
  interaction.md's Laws — 8+ = overloaded. Named failure: "The Wall of Options."
- **Five test personas.** Power user (fast, keyboardable) · first-timer (is the next step obvious) ·
  accessibility user (focus order, contrast, labels, reduced motion) · stress-tester (long strings,
  empty/overflow/error) · distracted-mobile (one thumb, sunlight, half-attention).
- **Findability:** first-click success **>65%** = good findability (metric defined in research.md).
- **Close with a peak-end read:** the emotional high point and the last thing the user feels shape
  memory disproportionately.

## Deslop (fast pass)

A quick slop-removal pass, distinct from a full review:

- **Pass 1 — Squint (rendered)**, ranked by how much each gives the game away: (1) no focal point
  (2) flat hierarchy (3) monotone layout (4) timid color (5) borders doing the work of space.
- **Pass 2 — Scan (the diff)**, line-level tells grouped by category: tokens & color (generic
  names → semantic, competing accents → one) · typography (default face → chosen, size-only → add
  weight+color) · surfaces & depth · states & motion · spacing & structure (off-grid → snap,
  structural hacks → clean layout) · reinvention (hand-rolled → reused primitive).
- Apply the same false-positive filter, then output the Before/After table, compositional fixes
  first.

## Motion review

Canonical timing values live in `motion.md`; here are the review standards. **Ten non-negotiables:**
justified · frequency-appropriate · responsive easing (`ease-in` on UI is a block) · sub-300ms UI ·
origin & physical correctness (no `scale(0)`; popovers from their trigger; modals exempt) ·
interruptible · GPU-only properties · reduced-motion gentler-not-zero + hover gating · asymmetric
enter/exit · cohesion.

Flag on sight: `transition: all` · `scale(0)`/pure-fade entrances · `ease-in` on deliberate
animation · animation on a 100+/day action · UI motion >300ms with no reason ·
`transform-origin: center` on a trigger-anchored popover · animating layout props · missing
reduced-motion.

Remedial preference, earliest move first: (1) delete (2) reduce (3) fix easing (4) fix
origin/physicality (5) make interruptible (6) move to GPU (7) asymmetric timing (8) polish
(9) accessibility & cohesion. "When unsure whether motion feels right, the strongest move is often
to delete it."

## Output contract

- The reviewer delivers **the punch-list, not the fix** — roles stay separate. On `revise`, every
  blocker is a specific addressable instruction: name the page, the section, what's wrong, and the
  concrete fix (the decision, not a patch).
- **Required format: a markdown table, one row per issue, with Before / After / Why columns** —
  never a "Before:/After:" prose list. Write each finding to the **feedback formula:** [what's
  wrong] + [which principle it violates] + [why it matters for the user] + [specific
  recommendation]. Never taste language — "I don't like this" becomes "This violates [principle]
  because [reason]."
- **Read-only audit variant:** group by severity, don't edit; per finding `[severity] Tell —
  file:line / why / →fix`, then `Summary — N critical · M major · K minor` and a `Verdict` line.
- **High-stakes (Jobs) verdict:** run journeys.md's end-to-end touchpoint audit (back of the fence,
  worst touchpoint, steps-to-value ≤3) as the review lens; the verdict is binary — insanely great or
  not done, no "pretty good." Demo on the target device at target data scale.

## Failure modes and routing

- No rendered evidence → degrade honestly; do not sign off a visual on code.
- Contrast math, target-size floors, focus and reduced-motion floors → `accessibility.md`.
- Design-audit findings that must prove they reach the rendered surface (Contract/Runtime/
  Correction three-proof gate) → `handoff.md`.
- Build-health, coverage, route-parity gates, and independent WCAG audits → quality-skill.
