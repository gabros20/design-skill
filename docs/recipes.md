# Recipes

Copy-paste scenario prompts. Prefix any example with `Use $design to` in Codex; other clients use
their own explicit form or natural-language phrasing. There's no invocation grammar to compose (see
[usage.md](usage.md#there-is-no-invocation-grammar)) — each recipe is a natural-language prompt you
hand to an agent with `design` installed. Each names the references the router loads, so you can see
the smallest sufficient set at work. For the full route table, see
[usage.md](usage.md#route-by-job).

## Set a visual direction for a marketing page

```
Set a visual direction for this SaaS landing page — name the register, pick an aesthetic lane and
one bold move, and give me the type, color, and layout craft to deliver it. Check it against the
anti-default catalog before you hand it back.
```

**Routes**: `visual-direction.md` (primary) → the new-surface bundle: `typography.md` +
`layout-composition.md` + `color.md` + `imagery-depth-decoration.md` + `motion.md` +
`surface-website.md` (surface overlay). **Produces**: a design read, named register + lane, one bold
move, a refuse-list, and the craft specs with exact tokens.

## Build an accessible iOS prototype bundle

```
Prototype the sign-up and first-run flow for this iOS app. I want a design-reference prototype I can
test — Dynamic Type, HIG target sizes, and reduced-motion behavior all handled. Classify its
maturity and give me a test plan.
```

**Routes**: `prototyping.md` (primary) + `surface-ios.md` (the native-mobile bundle) +
`accessibility.md` (concern, because accessibility is explicit). **Produces**: a classified
prototype (disposable / design-reference / production-candidate), HIG chrome/target numbers, a
per-moment reduced-motion spec, and a test plan.

## Map a checkout journey, every edge and empty state

```
Map the checkout flow for this store end to end — breadboard it, then a journey map with every
required edge: guest vs account, payment failure, out-of-stock mid-checkout, and the empty cart.
```

**Routes**: `journeys.md` (primary). Pull in `interaction.md` if the request also needs the state
spec for a specific step (e.g. the payment form). **Produces**: a breadboard and a journey/service
map with every required edge, not just the happy path.

## Specify the states for a component

```
Define the full interaction spec for this async search-and-select field — all eight states, the
latency/feedback ladder, keyboard and selection behavior, and which states a screen reader must
announce.
```

**Routes**: `interaction.md` (primary) + `accessibility.md` (concern, for the announce list).
**Produces**: a state-complete spec on the canonical 8-state model (default, hover, focus, active,
disabled, loading, error, success) plus empty, with the feedback ladder and announced states.

## Build a palette and verify contrast

```
Build a palette for this dashboard — a neutral ramp, one accent, semantic colors, and a dark mode.
Give me OKLCH tokens and verify every text pairing against the contrast floor.
```

**Routes**: `color.md` (primary) + `surface-webapp.md` (surface overlay, serve register) +
`accessibility.md` (concern, for the contrast math). **Produces**: an OKLCH token set verified for
contrast and gamut, with the dark-mode ramp.

## Run a scored design critique

```
Critique this rendered screen against its intent — a scored review with severity-ranked findings
and a go/no-go. I'll give you full-resolution captures, desktop and mobile.
```

**Routes**: `critique.md` (primary). **Produces**: a severity-ranked Before/After/Why punch-list
and a binary verdict. Without rendered captures, the skill returns a code-level pass and says so
rather than signing off on appearance.

## Prepare a frontend handoff

```
Package this approved design for frontend handoff — per-screen specs, the token set, the motion
plan, and a handoff.yaml companion. Flag anything still unresolved.
```

**Routes**: `handoff.md` (primary); pull the relevant craft or surface reference if a spec needs a
value it doesn't already carry. **Produces**: a frontend-ready per-screen spec, tokens, a motion
plan, and the `handoff.yaml` machine companion, with owners and open questions recorded.
