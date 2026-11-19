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

- **The bar** is "would the best practitioner of *this lane* sign it?", judged against the direction contract (lane, dimensions, fail-if list) — a value the contract chose is not a finding.
- **No vision, no art review.** A visual verdict needs rendered evidence + a multimodal reviewer: per-section crops at ~1440×900 and iPhone-class (plus the user's real viewport), reduced motion emulated, ~2s settle after each scroll, in an ordered manifest; a headless 390px shot is not a device test. Cite one detail visible only in the image.
- **Validate evidence first:** no blank, black, wrong-section or half-loaded frame; entrance motion settled (a timing-hidden element reads as missing). Invalid evidence yields *recapture*, never a verdict.
- **Degrade honestly.** No render → "code-level pass — not an art review; no build was viewed." Value-determined defects (a fixed 384px panel at 320px) are still findings; visual judgments are not; an unrendered check is unchecked, never passed.
- **Separate the eyes.** Taste and detector passes run isolated (else a `⚠️ DEGRADED` banner). A **blind read** sees only the crops and states the design's idea in one sentence; a mismatch with the concept is a design defect. The thread that built the page is its weakest reviewer.

## The review method

0. **Stage it.** Review the nav and first screen in a fresh context before anything below the fold exists (the cheapest redirect), then the page.
1. **Scope & intent.** Write the criteria before looking; infer user, task and feel. **Calibrate to fidelity:** wireframe → hierarchy/flow/missing states; low-fi adds layout; hi-fi adds visual and brand; prototype adds transitions and error paths. **Calibrate to the change mode** (visual-direction.md): *reproduce* is an **element matrix** — your own inventory of the reference, each salient element match / adaptation / missing / contradicted / added, always scoring TYPE (lettering character), MATERIAL (flat CSS for a painted source is contradicted) and GROUND; the total never excuses one missing region; anti-default findings advisory, floors still block. *Redesign/rebrand* put anti-defaults first-class.
2. **See the whole first.** Does one thing lead, does it breathe, does it look like *this* product? Squint twice — for the focal point, and at a text block for even grey (blotches mean rivers or uneven spacing). **Drift check:** scroll a screen at a time; material, heading spec, containers and dividers must survive — a committed hero above a third section turned card-grid-on-white is the commonest half-finished page.
3. **Run the lenses section by section, writing each finding as you go:** **A Hierarchy** · **B Typography & color** · **C Surfaces & depth** · **D Composition & rhythm** · **E States, polish & motion** (incl. the half-finished change: a variant missing states, a component without empty/loading/error/narrow, strings missing from the catalogue, a control added to one surface but not its siblings) · **F Structure, reuse & content**. Hunt the small defect; nothing found is earned by looking.
4. **Score & filter**, then **5. report & verdict.**

## Severity, tiers and rounds

- **One scale, P0–P3:** **P0** blocks the core task or excludes a user · **P1** "would a real user contact support over this?", or an art defect — a contract violation (off-palette/type/register, an *unchosen* tell, broken hierarchy) or a detail failure (mis-sized icon, overflow/clip, misalignment) · **P2** friction with a workaround, or a refinement · **P3** polish or delight. **Any P0, or a P1 you can't fix now, is NO-GO.** **P0 on sight, never averaged down or capped:** unnamed control · invisible focus · pointer-only path · auto-motion >5s with no pause (2.2.2) or vestibular-scale motion with no reduced path · clip or loss at 320px/200% · text failing contrast · meaning by colour alone (WCAG 1.4.1) · destructive action with no confirm, undo or distinct treatment · truncation or hidden content with no way back · an error with no recovery · a semantic colour against its meaning · a deceptive pattern (journeys.md).
- **Waivers:** a *Floor* finding (honesty, access, correctness) is never waived; a *Reflex* (a model default) may be, on the record with a reason about *this* page and who decided — three builds running makes it house style (write it into DESIGN.md), >~5 on a page means fix.
- **Rounds:** round 1 never signs off — with no P0/P1, promote the 1–3 best refinements for one polish pass; from round 2, approve once P0/P1 clear. **Re-review scores the listed fixes, not narration:** a fix not visible in the recapture is unresolved; name ≤3 regressions, no new hunt; a pass approves the list, not the surface. The user's own screenshot reopens a full review. Cap at 3 rounds, record the residual — release go/no-go is `quality`'s.
## Presumptive blockers and the false-positive filter

**Presumptive blockers**, judged against the contract's fail-if list, not the catalog — any one → not
approved: no focal point *where the lane wants one* · unchosen typography or palette · competing
accents · harsh or fragmented surfaces · missing states · under-fill *where the lane promises mass* · structural hacks (negative
margins undoing padding, escape-hatch `calc()`, absolute positioning to dodge flow) · an inaccessible
hand-rolled control where a keyboard-accessible primitive exists.

**False-positive filter** (half the skill): cut taste-not-defect, out of scope, ratified by the design
system (a convention settles taste, never a P0), or a lint concern. A bold choice "works" only if
**consistent** (recurs wherever its condition does), **motivated** (serves the intent) and
**controlled** (knock-on effects handled); fail one and it is a finding. "If you can't say *why* it
costs the user or reads as generated, it's taste — cut it."

## Scored heuristic critique

Run alongside the taste review (agreement = high confidence):

- **Nielsen's 10 heuristics, 0–4 each (/40):** 36–40 ship · 28–35 good · 20–27 acceptable · 12–19 poor; **most shipped interfaces score 20–32; a 38 means you aren't looking hard enough.** On Persuade/Experience surfaces H7 and H10 may be `n/a` — score the rest as a percentage (90/70/50/30). Name the lowest two.
- **Scoring to a bar:** anchors first (8 polished · 7 one noticeable flaw · 6 rough edges); score the baseline first; two fresh judges — the **lower** score counts and only faults both name get fixed (one judge drifts ~½ point on unchanged work); never round up; stop at the bar or after two flat rounds.
- **Cognitive load**, 8 checks (single focus · ≤4 per chunk · grouping · obvious hierarchy · one decision at a time · ≤4 visible options · no memory bridge · progressive disclosure): 0–1 failures low, 2–3 moderate, 4+ critical. Name it — Wall of Options, Memory Bridge, Hidden Navigation, Jargon Barrier, Visual Noise Floor. Caps: interaction.md's Laws.
- **Personas by surface** (2–3, walking the primary action): landing — first-timer, stress-tester, mobile · dashboard — power user, a11y · checkout/forms — mobile, stress, first-timer. Power user <60s with Esc; first-timer finds the first action in 5s; stress-tester tries 0/1,000 items, refresh mid-flow, two tabs; mobile tries one thumb and 3G. Report what broke, by element.
- First-click success **>65%** = good findability. Close with a **peak-end read.**

## Deslop (fast pass)

- **Pass 1 — Squint (rendered), against the contract**, ranked: (1) no focal point (2) flat hierarchy (3) unchosen monotone layout (4) unchosen timid color (5) borders doing the work of space.
- **Pass 2 — Scan (the diff):** tokens & color · typography — diagnose before swapping the face: slop is usually spacing and finish (one gap everywhere, straight quotes, hyphen-as-dash, untracked caps, 1.2 paragraph leading, no measure cap); fix finish, then setting, then structure · surfaces & depth · states & motion · spacing & structure · reinvention (hand-rolled → reused primitive).
- **Pass 3 — Remove, then group.** For each suspect (pasteable into an unrelated product; carries no state, action, hierarchy or brand meaning), delete it in your head; if meaning survives, cut it; else the smallest fix inside the system — never a new effect. Group by root cause (generic SaaS kit · card apocalypse · motion theater · fake sophistication · reference mismatch · polish before truth) and close with the one removal that buys the most.

## Motion review

Score motion against motion.md "Restraint gate and review standards" and review sequences on frames
(choreography.md "Reviewing motion on frames"); `ease-in` on a UI entrance is a block.
## Output contract

- The reviewer delivers **the punch-list, not the fix.** Open with the verdict word — `recapture` (evidence wrong; no round spent) · `rebuild` · `fix` · `ship` — and whether an unrelated product could use this unchanged.
- **A markdown table, one row per root cause with every location, Before / After / Why columns** — never prose; a shared token's defect is reported once, against the token. Each finding: location, observed vs expected, the principle, why it costs the user. Never taste language. The After is the cheapest fix that works: delete → native element → existing token or component → corrected value → something new.
- **Order:** broken, blocked, data-losing or inaccessible paths → missing states → flow, hierarchy and system drift → visual and motion → cleanup. Tag each drift missing token / one-off (use the shared component) / conceptual mismatch / local defect, and fix it at that level. If the concept is wrong, say *redesign*.
- **Cap** ≤5 findings for a hero, ~15 for a page (P0s exempt), never padded. Add a coverage line per lens (Clear / Not reviewed, why), a **Not checked** line, 2–5 considered-but-rejected candidates, and the single highest-return change plus what must not be diluted while fixing.
- **Variants:** a read-only audit groups by severity (`[severity] Tell — file:line / why / →fix`, a summary count, a `Verdict` line); a high-stakes (Jobs) verdict uses journeys.md's touchpoint audit as the lens, is binary, and is demoed on the target device at target data scale.

## Failure modes and routing

- No rendered evidence → degrade honestly. Floors → `accessibility.md`. Overlap with a supplied reference → research.md.
- Findings that must prove they reach the rendered surface (three-proof gate) → `handoff.md`.
- Build health, route parity, independent WCAG audits and the release gate → `quality`.
