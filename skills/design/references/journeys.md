# Journeys

Purpose: Design in-product flows and end-to-end journeys — breadboards, task flows, journey/service maps, onboarding, and guided multi-step paths — with every required edge case named.

Read when:
- The request involves a task flow, onboarding, a wizard/checkout, or mapping an experience across stages or channels.
- You need to decide interaction structure before visual design.

Skip when:
- The task is a single screen's state design → `interaction.md`.
- The task is product-level journeys, roadmaps, or business metrics → product.
- The task is the marketing-page narrative/question-chain → `surface-website.md`.

Inputs: the job story or task; actors and entry conditions; surface(s); the domain's natural order if any.

Produces: a flow or map with actors, entry conditions, steps, decision points, failure/recovery paths, exit conditions, and unresolved assumptions.

## Breadboarding (structure before pixels)

Use text notation to force interaction logic before any visual work — Shape Up breadboarding: **Place** (a screen/state) / **affordance → destination** / **[content shown]**. Every affordance names a destination ("Submit → where?"). **Edges are required steps, not extras:** validation, server error, disconnection, timeout, concurrent edit, plus empty / loading / post-action / cancel. Vocabulary must match the product's ubiquitous language (see `information-architecture.md`). **More than 5–6 Places for one job story → look for what to collapse.**

## Flow diagrams

Notation: entry (oval), screen (rect), decision (diamond), action (rounded rect), end (bordered circle); label every arrow with its trigger. Map the happy path first, then branch every decision and error path. JJG visual vocabulary distinguishes two diamonds with different design consequences: an **open diamond = a decision point the *user* makes** (needs affordances and information scent) vs a **filled diamond = a conditional selector the *system* makes** (needs correct logic and edge-case handling). Types: site map / task flow (no branching) / user flow (all paths + errors) / wireflow.

## Journey map vs service blueprint vs experience map

Pick by what you need to see:

| Artifact | Shows | Use for |
|---|---|---|
| Journey map (CJM) | One persona's experience + emotional curve across **3–7 phases** (awareness → advocacy) | Finding emotional lows and "moments of truth" |
| Service blueprint | The whole delivery system in 5 swimlanes | Operational gaps behind the experience |
| Experience map | Phases × layers across channels/ecosystem, product-agnostic | Omnichannel / systems-level, or no product yet |
| Empathy map | Says/Does/Thinks/Feels + goals | Quick synthesis (30–60 min) |

Zoom out → in: ecosystem → experience map → CJM → blueprint → mental model. Sequencing rules: **CJM before blueprint**; a cross-team coordination problem wants a blueprint, not a CJM; no product yet → experience map. **Always map current state before future state.**

**CJM contract** — 8 required rows (Phases, Goals, Actions, Touchpoints, Thinking, Feeling, Pain Points, Opportunities) plus recommended optional rows (Moments of truth, Ownership, Channels, Metrics). One persona per map; time runs left→right; phases named from the user's perspective ("Research", not "Lead Qualification"), mutually exclusive, including pre- and post-product phases. Scope formula: "[Persona] trying to [goal] from [trigger] to [end state]." Prioritize with `Priority = (User Impact + Frequency + Business Impact) / Effort`, each 1–5.

**Linguistic grammar** (consistent within any map): Actions start with a verb ("Compares prices", not "Price comparison"); Thoughts are questions; Feelings are adjectives; Pain points start with a gerund ("Waiting for approval"); Touchpoints are nouns; Opportunities start with a change verb ("Eliminate manual entry"). Two diagnostic instruments: Thoughts phrased as questions expose information gaps, and **the gap between Thinking and Feeling is the insight** (thinks "straightforward" but feels anxious = a hidden barrier).

**Assumption-map-first:** draft the journey from team memory first, then compare to research and circle the wrong guesses — those are the most valuable insights; validate the draft with 2–3 users before polishing. With no research, label every element "assumed" or "verified" and generate a targeted research plan.

**Service blueprint** lanes: physical evidence / customer actions / **frontstage** (visible) / **backstage** (invisible) / support, separated by the lines of interaction, visibility (the most important), and internal interaction. Membership tests: frontstage = "can the customer see it?"; support = "would it exist without this interaction?" Always start from customer actions, never backstage. Trace a customer pain through frontstage → backstage → support to find the real failure (an inventory-sync integration, not "shipping"). Annotate with four tables: pain points per lane, wait times (who waits / duration / cause), failure points (frequency / impact / current recovery), and handoffs between teams (from / to / risk), plus a systems inventory.

## End-to-end touchpoint audit

Work backward from the customer experience. Map the full arc: discovery → purchase → first run → onboarding → daily use → failure → support/billing/offboarding. **"The worst touchpoint sets the perceived quality"** — review the slowest moment (cold start, empty, offline, error recovery), not the happy path. "Back of the fence": audit the unseen surfaces (404, error copy, settings, loading, emails, invoices, cancel flow) to the same quality as the hero screen. **Steps-to-value ≤3.** "If you must explain it, redesign it — instructions are apologies."

## Onboarding

Goal priority: get to first value fast > orient (don't educate) > build confidence > reduce setup friction. Onboarding's job is the **aha moment**, not teaching the product. Patterns: progressive / setup wizard / sample-data demo / interactive tour (sparingly, **3–5 core concepts, dismissable**). Treat empty states as onboarding — never an empty table with only column headers ("new users spend more time in empty states than any other state"). Metrics: activation rate, time-to-activation, completion, drop-off by step, D7/D30 retention. Name the aha moment explicitly.

## Wizards and guided paths

Use a wizard when there are **≥3 sequential steps, later steps depend on earlier ones, and one screen would overwhelm**. Rules: step indicator always visible; back always available without losing later progress; forward disabled until the current step is valid (validate on Continue, not on final Submit); autosave drafts; final step is a summary before commit; deep-linking into step 3 works; land somewhere meaningful afterward, not a generic home. Step titles in user-goal language ("Your delivery address", not "Address input"). Only guide when the task has a natural order.

Purchase/checkout: collect only what each stage requires; keep a persistent order summary; put trust signals near payment; confirm before charging; show immediate post-purchase confirmation with next steps.
