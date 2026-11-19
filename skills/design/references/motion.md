# Motion

Purpose: The canonical source for single-element motion values and doctrine — duration/easing scale,
motion character, the should-it-animate gate, physical correctness, springs, performance, reduced
motion, and the restraint gate. Sequencing across elements lives in choreography.md; every other
reference points to these two for motion numbers and restates none.

Read when:
- Choosing durations, easing curves, or spring parameters for any transition or animation.
- Deciding whether an element should animate at all, or reviewing or auditing motion for over-animation.

Skip when:
- The task is static layout, color, or type with no state change (but honor the restraint gate).
- The question is order, stagger, exits, gestures, loops, loaders or page transitions → choreography.md.

Inputs:
- The interaction's frequency, purpose, and surface register (is-the-product vs serves-the-product).

Produces:
- Motion tokens (duration/easing/spring, motion character) and a per-moment reduced-motion spec.

Numbers here are Restrained-lane defaults; the direction contract's dimensions override them; floors (marked by their basis) do not.

## Contents
- Canonical scale (durations, character, easing)
- The gate: should it animate?
- Physical correctness, press and hover
- Springs
- Performance
- Reduced motion
- Restraint gate and review standards

## Canonical scale

Durations, keyed by what the motion does (not by pixel count alone):

| Tier | Duration | Uses |
|---|---|---|
| instant / micro | 80–150ms | button press, toggle, hover feedback |
| standard UI | 150–300ms | menu, tooltip, dropdown, input focus |
| large surfaces | 300–500ms | modal, drawer, accordion, page section |
| marketing entrances | 400–800ms | hero reveal, onboarding, first-run delight |

- Measured long-tail scroll entrances are judged by when they read as arrived, not by total length: `scroll-animation` `craft.md` "3. Durations" (~1.3s editorial moves).
- **Exit ≈ 60–75% of enter.** Opening invites; closing gets out of the way.
- **UI stays under 300ms.** Above that needs a reason (a large surface or a marketing moment).
- **80ms is the "instant" threshold**; a press/toggle can be 0ms and often should be. **The focus ring is never animated** — it appears in full the frame focus lands.
- **Duration by distance** (within a tier): 8–16px → 100–150ms; 50–100px → 150–250ms; full-screen → 250–350ms. Travel scales down with frequency, up with ceremony.
- **Tab bars and bottom nav switch without sliding** (peers, not depth; paid dozens of times a session); swipeable top tabs track the finger laterally.
- **Motion character** scales the duration tokens system-wide: still (only functional state changes), severe (×0.7–0.75), brisk (×0.85–0.9), calm (×1.0–1.3). Motion intensity is a dimension: a Restrained page spends ≤3 primitives (one reveal, one hover signal, one functional loop); a cinematic lane commits a vocabulary under one motion verb.

Easing — built-in CSS curves are too weak; use strong custom curves:

- **Entrances: ease-out** (expo/quart/quint family). Fast in, settle. `ease-out` at 200ms *feels* faster than `ease-in` at 200ms because it front-loads the moment the user watches.
- **Exits:** a short UI dismissal (popover, menu, toast) **eases out** too, so it moves the instant it is triggered; **ease-in only for an element travelling off-screen** (accelerating away). **On-screen movement / morph: ease-in-out.** **Loops, progress, and fills that visualise time: linear.**
- **Never `ease-in` on UI entrances; never `linear` for *timed* UI movement** (scroll-scrubbed motion maps linear — the scroll is the easing). Both read as blocks in review.

```css
--ease-out-expo:   cubic-bezier(0.16, 1, 0.3, 1);
--ease-out-quart:  cubic-bezier(0.25, 1, 0.5, 1);
--ease-out-quint:  cubic-bezier(0.22, 1, 0.36, 1);   /* default UI ease-out */
--ease-in-out-expo:cubic-bezier(0.87, 0, 0.13, 1);
--ease-drawer:     cubic-bezier(0.32, 0.72, 0, 1);   /* full-width edge-attached sheet, ~500ms */
```

A floating drawer that touches no edge is a standard-tier ~200ms motion, not `--ease-drawer`. The
curves are a palette, not a per-element free-for-all: **commit to at most 3 easing curves system-wide**
(typically one ease-out, one ease-in-out, one exit). **Default no overshoot** outside gesture-driven physics (drag-release,
throw, toggle) in Restrained lanes; Expressive and playful lanes use spatial overshoot, never on colour or opacity.

## The gate: should it animate?

Write a **motion thesis** first — focal moment, continuity, feedback, budget; a generic fade-and-rise,
hover lift, parallax layer or scroll reveal is not one. Then answer in order — most candidates should
be rejected. Cap a whole app at ~5–7 deliberate moments; Operate and Read surfaces get no load
choreography users wait through.

1. **Frequency.** 100+×/day (keyboard shortcuts, command palette) → **no movement, ever** (Raycast has no open/close animation); a ≤150ms colour/opacity change is feedback and stays allowed. Tens/day → reduce hard. Occasional (modals/drawers/toasts) → standard. Rare/first-run → can add delight.
2. **Purpose.** Name one of: feedback · state indication · spatial consistency · explanation · preventing a jarring change. "It looks cool" on a frequently-seen element is not a purpose.
3. **Speed.** Must fit the scale above.
4. **Function.** Decoration on dense/functional UI hinders; a functional graph is better still.

**Match on usage, not the nearest number:** a "300ms modal close" belongs in the standard tier (~150ms)
because it is a close.

## Physical correctness, press and hover

Code: `frontend` `ui-motion.md` "Hover and press".

- **Default: start from `scale(0.95–0.97)` + `opacity: 0`**, not `scale(0)`; small badges and dots may grow from 0. Exception: a small icon swap (play→pause, copy→copied) cross-fades from scale 0.25 with a 4px blur over ~300ms, no bounce; tab and nav icons swap instantly.
- **Origin-aware popovers:** scale from the trigger. **Modals are exempt — they stay `transform-origin: center`.** This exemption recurs everywhere; preserve it.
- **Press feedback:** `scale(0.96)` on `:active`, ~150ms ease-out (range 0.95–0.98, **never below 0.95**); never on a disabled control; it survives reduced motion (feedback, not travel). *A design system may instead declare stillness — no press transform (nothing-design / dembrandt "component stability"); name which stance the system takes; do not mix.*
- **Hold-to-confirm:** a linear fill over ~2s while pressed, snapping back in ~200ms ease-out on early release. A newly selected item may glow ~1s, then settles to a static style.
- **Hover may move the visual, never the hit area** — it stays the resting footprint (interaction.md), or the card slips from under the cursor and flickers; never push a neighbour. Delay hover-in previews only; leaving is immediate.
- **Blur masks an imperfect crossfade:** `blur(2px)` during a two-state overlap reads as one transformation; keep blur <20px, never on a plain fade or theme change.
- **Zoom in log space:** a scale over a ratio ≳1.6 runs `from·(to/from)^ease(p)` so equal time buys an equal ratio; a value-space tween visibly decelerates as it grows.
- **A flash, pulse or shake has an age:** 40–120ms attack from zero slope, then exponential decay; overlapping events add.
- **Colour in motion:** distant hues pass through mud — ~200ms, in OKLab; a new item may take the accent and cool to rest (hold ~0.3s, cool 0.2–0.5s).

## Springs

Springs have no fixed duration — for momentum, "alive" elements, interruptible gestures. Use Apple's two params:

- **Damping ratio** (overshoot): 1.0 = critically damped, no bounce; <1.0 overshoots. Most UI = 1.0; Motion's `bounce: 0` is the house default.
- **Response** (seconds to reach target). Bounce (~0.8 damping) only after a momentum gesture. Apple values: move/reposition 1.0 / 0.4; rotation 0.8 / 0.4; drawer 0.8 / 0.3. Keep bounce subtle (0.1–0.3).
- **Copied a physics-form spring? Convert first:** ζ = damping ÷ (2√(stiffness × mass)). `stiffness 300, damping 20` is ζ≈0.58, a visible bounce; content and UI springs stay ζ ≥ ~0.9.
- **Two clocks** (pointer-driven visuals): a discrete change gets a timed ease-out (~700ms, `--ease-drawer`); a continuous input gets a spring (stiffness 100, damping 18 ≈ ζ 0.9) since its target moves every frame. Pointer follow: `x += (target − x)·(1 − e^(−dt/τ))`, τ 0.1–0.3s, dt clamped to 1/30s.

Gesture phases, momentum and dismissal: choreography.md.

## Performance

`transform` and `opacity` are the default (they skip layout and paint). Bounded `filter`, `mask` or
`clip-path` on an isolated region is allowed once measured smooth on a mid-range phone;
`width/height/margin/padding/top/left`, `box-shadow` spread and `backdrop-filter` stay banned; never
`transition: all`. Pause offscreen loops, cap DPR and particles, hold 60fps on a mid-range phone.
Drivers, library behaviour and versions: `frontend` `ui-motion.md` "Motion performance traps";
scroll-linked code: `scroll-animation`.

## Reduced motion

`prefers-reduced-motion: reduce` means **gentler, not zero, decided per moment** — keep opacity/colour
transitions that aid comprehension; slides, scales and blurs become an opacity cross-fade, not a hard
cut (a route change may swap at once or crossfade in place: `scroll-animation` `page-transitions.md`
"8. Reduced motion and pointer events"); drop parallax, overshoot and large traveling objects. The
no-motion state must be the complete, usable state (a reduced-motion path per motion device). Also honor `prefers-reduced-transparency`
(frostier/solid surfaces) and `prefers-contrast: more`. Gate hover motion behind `@media (hover:
hover) and (pointer: fine)` — touch fires false hovers. Gestures and choreographed groups:
choreography.md.

## Restraint gate and review standards

When unsure whether motion feels right, **the strongest move is to delete it.** Remedial order:
delete → reduce → fix easing → fix origin/physicality → make interruptible → move to GPU →
asymmetric timing → polish (blur/stagger/spring) → accessibility & cohesion. "It's already there" is no
defence. **Reduce means a smaller version of the same motion:** hover lift → colour/opacity ≤150ms;
frequent slide/scale → opacity 150ms; UI >300ms → 200–250ms; long stagger → 30ms or one group fade;
an infinite pulse, shimmer or glow on a persistent element → once, then static. Data the user reads
(charts, tables, counts) animates only to show a real change, never on every mount; a spinner or
shimmer that flashes reads as a glitch (thresholds: interaction.md "Feedback and latency ladder").

Flag on sight: `transition: all`, `scale(0)`/pure-fade entrances, `ease-in` on an entrance or on-screen move,
weak easing, animation on 100+/day actions, UI >300ms with no reason, `transform-origin: center` on a
trigger-anchored popover, keyframes on toasts/toggles, animating layout props, missing reduced-motion,
symmetric enter/exit on press/hold. Named motion tells live here; general anti-default tells are in
anti-defaults.md — do not restate them.

**Auditing a codebase's motion:** give each animated surface a frequency tier (it sets severity);
rank HIGH (auto-motion >5s with no pause, WCAG 2.2.2; vestibular-scale motion with no reduced path; ease-in on UI; motion on
high-frequency UI; dropped frames) / MEDIUM (origin, non-interruptible, a small fade with no reduced path) / LOW; close with ≤4 missing moments and ≤5 rejected
candidates, each with the gate question that killed it. The code sweep: `frontend` `ui-motion.md`
"Removing and importing motion".
