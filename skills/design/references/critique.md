# Critique (expert design review)

Purpose: Judge a design against its own intent — art review, scored heuristics, deslop, motion review —
with the evidence rules and output contract that keep judging separate from fixing.

Read when:
- Reviewing, critiquing, or QA-ing a rendered build or design for craft and usability.
- Running a go/no-go gate before handoff, or a fast slop-removal pass on a draft.

Skip when:
- Building or fixing the design (this file produces the punch-list, not the patch).
- Floors → `accessibility.md`; motion values → `motion.md`; tells → `anti-defaults.md`; a WCAG audit or release gate → `quality`.

Inputs:
- The design's intent (brief, direction contract, `DESIGN.md`) and rendered evidence.

Produces:
- A severity-ranked punch-list in a Before / After / Why table, and a binary verdict.

## Contents

- Preconditions and evidence
- The review method
- Severity, tiers and rounds
- Presumptive blockers and the false-positive filter
- Scored heuristic critique
- Deslop (fast pass)
- Motion review
- Output contract
- Failure modes and routing

## Preconditions and evidence

- **The bar** is "would a design lead at Linear or Apple put their name on this?", judged against the design's *own* intent.
- **No vision, no art review.** A visual verdict needs rendered evidence + a multimodal reviewer: per-section crops at two viewports (~1440×900 + iPhone-class, plus the user's real viewport when known), reduced motion emulated, each element scrolled into view with ~2s settle, in an ordered manifest. A 390px headless shot is a phone-sized viewport, not a device test.
- **Validate evidence first.** Open each capture: no blank, black, wrong-section or half-loaded frame; entrance motion settled (a timing-hidden element reads as missing and gets "fixed" into a regression). Invalid evidence yields *recapture*, never a verdict.
- **Degrade honestly.** No render → "code-level pass — not an art review; no build was viewed." Value-determined defects (a fixed 384px panel at 320px) are still findings; visual judgments are not; an unrendered check is unchecked, never passed.
- **Separate the eyes.** Taste and detector passes run isolated (a single-context run carries a `⚠️ DEGRADED` banner). A **blind read** sees only the crops — no brief, code or earlier scores — and states the design's idea in one sentence; a mismatch with the concept is a design defect. The thread that built the page is its weakest reviewer.

## The review method

0. **Stage it.** Review the nav and first screen in a fresh context before anything below the fold exists (the cheapest redirect), then the page.
1. **Scope & intent.** Write the criteria before looking; infer user, task and feel. **Calibrate to fidelity:** wireframe → hierarchy/flow/missing states only; low-fi adds layout; hi-fi adds visual and brand; prototype adds transitions and error paths. **Calibrate to the change mode** (visual-direction.md): *reproduce* is an **element matrix** — inventory the reference yourself, mark each salient element match / adaptation (with evidence) / missing / contradicted / added, always scoring TYPE (lettering character), MATERIAL (flat CSS for a painted or photographic source is contradicted) and GROUND; one missing region is never excused by the total; anti-default findings advisory, floors still block. *Redesign/rebrand* are judged on taste with anti-defaults first-class.
2. **See the whole first.** Does one thing lead, does it breathe, does it look like *this* product? Squint twice — for the focal point, and at a text block for even grey (blotches mean rivers or uneven spacing). **Drift check:** scroll a screen at a time; material, heading spec, containers and dividers must survive — a committed hero above a third section turned card-grid-on-white is the commonest half-finished page.
3. **Run the lenses section by section, writing each finding as you go:** **A Hierarchy** · **B Typography & color** · **C Surfaces & depth** · **D Composition & rhythm** · **E States, polish & motion** (incl. the half-finished change: a variant missing states, a component without empty/loading/error/narrow, strings missing from the catalogue, a control added to one surface but not its siblings) · **F Structure, reuse & content**. Hunt the small defect; nothing found is earned by looking.
4. **Score & filter**, then **5. report & verdict.**

## Severity, tiers and rounds

- **Art review A0–A3:** **A0** direction violation — off-palette/type/register, an anti-default tell, broken hierarchy (blocks). **A1** composition/rhythm failure or a real detail defect — centered-everything, uniform card grids, no signature section, mis-sized icon, overflow/clip/collide, misalignment (blocks). **A2** refinement, **A3** delight (advisory).
- **Issue P0–P3:** **P0** blocks the core task or excludes a user · **P1** "would a real user contact support over this?" · **P2** friction with a workaround · **P3** polish. **Any P0, or a P1 you can't fix now, is NO-GO.** **P0 on sight, never averaged down or capped:** unnamed control · invisible focus · pointer-only path · motion ignoring reduced motion · clip or loss at 320px/200% · text failing contrast · meaning by colour or motion alone · destructive action with no confirm, undo or distinct treatment · truncation or hidden content with no way back · an error with no recovery · a semantic colour against its meaning.
- **Tiers:** **Floor** (honesty, access, correctness — never waived) · **Reflex** (a model default — waivable on the record with a reason about *this* page and who decided) · **Finish** (craft — never blocking). A Reflex waived three builds running is house style (write it into DESIGN.md); >~5 waivers means fix.
- **Rounds:** round 1 never signs off — with no A0/A1, promote the 1–3 best refinements for one polish pass; from round 2, approve once A0/A1 clear. **Re-review scores the listed fixes, not narration:** a fix not visible in the recapture is unresolved; name ≤3 regressions, no new hunt; a pass approves the list, not the surface. The user's own screenshot reopens a full review. Cap at 3 rounds, record the residual — release go/no-go is `quality`'s.

## Presumptive blockers and the false-positive filter

**Presumptive blockers** — any one → not approved: no focal point · size-only or defaulted typography ·
monotone layout · timid or competing-accent palette · harsh or fragmented surfaces · missing states ·
**under-filled sections** (a heading + paragraph posing as a section) · structural hacks (negative
margins undoing padding, escape-hatch `calc()`, absolute positioning to dodge flow) · an inaccessible
hand-rolled control where a keyboard-accessible primitive exists.

**False-positive filter** (half the skill): cut taste-not-defect, out of scope, ratified by the design
system (a convention settles taste, never a P0), or a lint concern. A bold choice "works" only if
**consistent** (recurs wherever its condition does), **motivated** (serves the intent) and
**controlled** (knock-on effects handled); fail one and it is a finding. "If you can't say *why* it
costs the user or reads as generated, it's taste — cut it."

## Scored heuristic critique

Run alongside the taste review (agreement = high confidence):

- **Nielsen's 10 heuristics, 0–4 each (/40):** 36–40 ship · 28–35 good · 20–27 acceptable · 12–19 poor; **most shipped interfaces score 20–32; a 38 means you aren't looking hard enough.** On Persuade/Experience surfaces H7 and H10 may be `n/a` (say why) — score out of 4×scored as a percentage (90/70/50/30). Name the lowest two.
- **Scoring to a bar:** anchors first (8 polished · 7 one noticeable flaw · 6 rough edges); score the baseline before changing anything; two fresh judges see only evidence, rubric and subject — the **lower** score counts and only faults both name get fixed (one judge drifts ~½ point on unchanged work); never round up; stop at the bar or after two flat rounds.
- **Cognitive load**, 8 checks (single focus · ≤4 per chunk · grouping · obvious hierarchy · one decision at a time · ≤4 visible options · no memory bridge · progressive disclosure): 0–1 failures low, 2–3 moderate, 4+ critical. Name it — Wall of Options, Memory Bridge, Hidden Navigation, Jargon Barrier, Visual Noise Floor. Caps: interaction.md's Laws.
- **Personas by surface** (2–3, walking the primary action): landing — first-timer, stress-tester, mobile · dashboard — power user, a11y · checkout/forms — mobile, stress, first-timer. Power user <60s with Esc; first-timer finds the first action in 5s; stress-tester tries 0/1,000 items, refresh mid-flow, two tabs, emoji/RTL; mobile tries one thumb, an interruption, 3G. Report what broke, by element.
- First-click success **>65%** = good findability. Close with a **peak-end read.**

## Deslop (fast pass)

- **Pass 1 — Squint (rendered)**, ranked: (1) no focal point (2) flat hierarchy (3) monotone layout (4) timid color (5) borders doing the work of space.
- **Pass 2 — Scan (the diff):** tokens & color · typography — diagnose before swapping the face: slop is usually spacing and finish (one gap everywhere, straight quotes, hyphen-as-dash, untracked caps, 1.2 paragraph leading, no measure cap); fix finish, then setting, then structure · surfaces & depth · states & motion · spacing & structure · reinvention (hand-rolled → reused primitive).
- **Pass 3 — Remove, then group.** For each suspect (pasteable into an unrelated product; carries no state, action, hierarchy or brand meaning), name it, state its job, delete it in your head; if meaning survives, cut it; else the smallest fix inside the system — never a new effect. Group by root cause (generic SaaS kit · card apocalypse · motion theater · fake sophistication · reference mismatch · polish before truth) and close with the one removal that buys the most.

## Motion review

Values: `motion.md`; frame method and failure shapes: `choreography.md`. **Ten non-negotiables:**
justified · frequency-appropriate · responsive easing (`ease-in` on a UI entrance is a block) ·
sub-300ms UI · origin & physical correctness (no `scale(0)`; popovers from their trigger; modals
exempt) · interruptible · GPU-first properties · reduced-motion gentler-not-zero + hover gating ·
asymmetric enter/exit · cohesion.

## Output contract

- The reviewer delivers **the punch-list, not the fix.** Open with the verdict word — `recapture` (evidence wrong; no round spent) · `rebuild` · `fix` · `ship` — and whether an unrelated product could use this unchanged.
- **A markdown table, one row per root cause with every location, Before / After / Why columns** — never prose; a shared token's defect is reported once, against the token. Each finding: location, observed vs expected, the principle, why it costs the user. Never taste language. The After is the cheapest fix that works: delete → native element → existing token or component → corrected value → something new.
- **Order:** broken, blocked, data-losing or inaccessible paths → missing states → flow, hierarchy and system drift → visual and motion → cleanup. If the concept is wrong, say *redesign*.
- **Cap** ≤5 findings for a hero, ~15 for a page (P0s exempt), never padded. Add a coverage line per lens (Clear / Not reviewed, why), a **Not checked** line, 2–5 considered-but-rejected candidates, and the single highest-return change plus what must not be diluted while fixing.
- **Read-only audit variant:** group by severity; `[severity] Tell — file:line / why / →fix`; then `Summary — N critical · M major · K minor` and a `Verdict` line.
- **High-stakes (Jobs) verdict:** journeys.md's end-to-end touchpoint audit as the lens; binary — insanely great or not done; demo on the target device at target data scale.

## Failure modes and routing

- No rendered evidence → degrade honestly. Floors → `accessibility.md`. Overlap with a supplied reference → research.md.
- Findings that must prove they reach the rendered surface (three-proof gate) → `handoff.md`.
- Build health, route parity, independent WCAG audits and the release gate → `quality`.
