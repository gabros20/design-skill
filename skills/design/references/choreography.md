# Choreography

Purpose: Sequence motion across elements and time — who moves, in what order, how exits and swaps
behave, gestures, scroll reveals, loops and demo loops, loaders and page transitions — and review a
sequence on frames. Single-element values (tiers, easing, springs) are in motion.md.

Read when:
- More than one thing moves at once: a staggered list, a panel with contents, a view swap, a hero
  entrance, a drag-to-dismiss sheet, an ambient or demo loop, a loader, a page transition.
- Reviewing a sequence that feels slow, busy, or broken.

Skip when:
- One element's duration, curve or spring → motion.md. Motion code → `frontend` `ui-motion.md`
  (component and UI motion) or `scroll-animation` (scroll-linked, entrance, page-transition code).

Inputs:
- The movers, the event that causes them, their frequency, and the surface register.

Produces:
- A choreography spec: cast, order, offsets, exit rules, gesture model, loop and reduced-motion plan.

Numbers here are Restrained-lane defaults; the direction contract's dimensions override them; floors (marked by their basis) do not.

## Contents
- Cast and relate
- Stagger
- Exits, swaps and direction
- Timing family, overlap and interruptibility
- Gestures
- Scroll and reveal
- Loops, idle and demo loops
- Continuity: loaders and page transitions
- Copy in motion
- Reduced motion for groups and gestures
- Reviewing motion on frames

## Cast and relate

Choreography is mostly cutting movers and running the rest in parallel. Cast each:
**lead** (moves first, travels most) · **support** (shorter, smaller) · **decoration** (fade only, or
nothing) · **static** (containers whose content animates). Relate each pair: **together** by default
(same object or moment, or order means nothing) → **overlap** (stagger) when order means
something → **sequence** only when overlap looks broken → **carry** a child you can't steer by
animating its parent. **One entrance per container** — never a panel entrance plus a stagger of its
children. Order by importance, not DOM. Two leads is a hierarchy bug motion cannot fix.

## Stagger

- **UI staggers: 30–80ms per item, total ≤500ms;** storytelling staggers follow the concept. Stagger the first ~5 items; the rest land with the 5th.
- **Never on anything opened many times a day** (menus, dropdown rows, palettes, tab content).
- **Default: not uniform:** an identical gap, distance and duration on every item is a metronome tell. Vary gaps ≥15% or ease the delays, let the lead travel furthest, accelerate a run into its payoff, and play a repeated reveal ~40% faster the second time.
- **A list that arrives as a list** is staggered; every scrolled section is not.
- **Hero and first-run entrances stagger semantic chunks**, not containers: title, description, actions ~100ms apart, each rising 12px from a 4px blur on the marketing-entrance tier (motion.md); a short display headline goes word by word at 80ms unblurred (a filter per word).
- **Stagger from the hand** when the pointer triggered it: `delay = |i − a| × 30–60ms`, spreading from what was touched; reach falls off to a clamped floor.

## Exits, swaps and direction

Code: `frontend` `ui-motion.md` "Enter and exit".

- **Closes are faster and quieter than opens.** The enter carries the distance and blur; the exit travels a fixed ~12px in ~150ms (never its full height) unless the destination means something (a drawer, a card returning to its list). **Never bounce and never delay a close.** Symmetric exceptions — tabs, accordion, icon/text swap — read as one reversible motion; keep one duration both ways.
- **An exiting element leaves the layout at once**; siblings close the gap while it fades.
- **A view swap in one container crossfades** (old exits while new enters); wait only between two dense views in a container resizing in both dimensions.
- **Exits run together and shorter** — never reverse-staggered out — and leave along the entry path.
- **Direction follows the mental model:** forward moves content left (new enters from the right), back moves it right; sibling menus enter from the trigger's side; the exiting element reads the direction when it starts.

## Timing family, overlap and interruptibility

Code: `frontend` `ui-motion.md` "Springs and interruption".

- **One component, one timing family:** a drawer that opens in 500ms and resizes in 200ms reads as two objects; inner motion may take a lighter curve of the same family. Sync secondaries to the lead's start, impact or settle, on the event that caused them.
- **Scale a resize's fade to the change:** `clamp(0.15s, Δheight/500, 0.27s)`; a tiny jump with a full fade flickers. Smaller elements need more bounce to read alike.
- **Overlap, don't queue:** a secondary starts before its primary is ~90% home; the foreground lands ~⅓s before the background. Two eases to rest in series read as stall-then-lurch. Dependent changes (a setting, its label, the totals it feeds) overlap with cause before effect; a resizing surface moves size, position and content as one and never stretches its text.
- **Interruptibility is the single most important native principle.** Every animation is redirectable mid-flight; never lock input during a transition; animate from the *current presentation value*, not the target. **Transitions or springs over keyframes** for anything re-triggered (toasts, toggles, drags) — keyframes restart from zero.

## Gestures

- **Track** (pointer down): position maps 1:1 — no easing, no spring, keep the grab offset; respond on touch-down, not release.
- **Release:** a spring seeded with the finger's exact velocity (no seam). **Momentum projection** (Apple's shipped form): `project(v, decel=0.998) = (v/1000)·decel/(1−decel)`; project the resting point, then snap to the nearest target.
- **Dismiss on distance (~40–50% of travel) OR velocity** (~0.11 px/ms for a toast swipe; sheets often ~0.4–0.5 px/ms) — distance alone ignores flicks, velocity alone can't commit a slow drag. Snap-back is fast. Rubber-band soft boundaries rather than a hard stop.
- Bounce only at the end of a drag that carried force; the same element closed by a button gets none. Overlay opacity and backdrop scale derive from the one drag value, never a parallel animation. A "weird" spring is usually fixed by raising damping. Code: `frontend` `ui-motion.md` "Gestures and drag".

## Scroll and reveal

- **Never let a reveal depend on script to become visible** (robustness): with motion off or scripting off the finished state shows.
- **Default: content (text, cards) arrives by trigger**, the pre-JS gate its guarantee; a scrubbed fade leaves copy half-faded at rest. Decoration and media may scrub on `view()`. CSS scroll-triggered animations merge the two once portable.
- Reveal once, cap staggered items at ~6, keep displacement small; no parallax on text being read; display type may move when the lane is cinematic.
- Readable text never moves while it is read (legibility): reveal, then rest; no word-by-word reveals of body copy. A sticky label that updates as content passes animates only the token that changed. Code: `scroll-animation` `entrances.md` "Triage by clock", "The gate, the failsafe and the server".

## Loops, idle and demo loops

Code: `frontend` `ui-motion.md` "Scripted loops and demos".

- **Alive vs busy** (is-the-product): alive is one system that responds everywhere and may keep a slow, small motion at rest (the concept's own object, zero under reduced motion); busy is many unrelated effects. A quiet brief may stay still — record it.
- **Any loop** rests on its finished frame (never an empty window), changes one thing every 1–2s, holds the finished frame for its last ~15%, pauses on hover and focus and off-screen, and ships a visible pause past 5s (accessibility.md, 2.2.2); default one self-mover per screen.
- **Idle invitation** (an icon that occasionally nudges): first run after ~2.5s, then about every 6s, stops on interaction, resumes only after its reset completes.
- **Demo loops:** a walkthrough runs 3–5 steps of 4–8s, each holding its result ≥1s; a hero loop runs 10–16s with 3–5 beats, a payoff held ~2s, nothing still >3s. The **poster** (thumbnail, reduced motion, first paint) is the beat that tells the story alone, nothing caught mid-change; open the loop on it. A reset removes what the loop added as one thing — a visible cause (undo, clear), an exit around an anchor (all within 0.5s), or a snap while hidden; data never rewinds in view. UI feedback stays as fast as the real product; only storytelling slows (arrivals 0.8–1s); solid things arrive by moving and stay opaque; content arrives after its container.
- **Interactive figures:** the designed rest pose is the thumbnail. Untouched, a tour starts after ~1.4s, visits 3–6 parts in hand order, drives the user's own targets, pauses on any input and resumes ~3.6s after it; on take-over the state stays put.

## Continuity: loaders and page transitions

A loader is earned by the brief (portfolio, launch), never default: it tracks real loading, finishes
within ~2.6s *including its exit* on a throttled phone, is skipped on repeat visits and under reduced
motion, and its last frame equals the hero's first (or its counter lands where a persistent element
lives). Page transitions derive from the concept's physics and stay ≤~1s each way; a cross-fade is the
floor, not the goal; a clicked thumbnail growing into the next hero is the strongest continuity. Code:
`scroll-animation` `page-transitions.md`.

## Copy in motion

Hold an animated line max(~0.9s, 0.6s + ~0.12s per word) after it resolves, at least ~1s on screen per 3 words. A
line arrives whole or in 2–3 chunks and leaves at speed — a slow fade-out on a statement is a tell. No
two consecutive lines share an entrance. Code: `frontend` `ui-motion.md` "Animated text and numbers".

## Reduced motion for groups and gestures

Gestures keep 1:1 tracking (the user is the motion); drop flings, bounce and decoration, and settle
with a short opacity or position change. A choreographed group collapses: no delays, no travel, one
opacity step; a sequence that *is* the explanation steps frame to frame.

## Reviewing motion on frames

Capture harness: `frontend` `ui-motion.md` "Verify motion".

One screenshot never proves motion. Sample before, first, evenly spaced middles, last and settled — in
normal and reduced motion, entrance and exit apart (an exit only after its setup settles). Hunt five
shapes: **entrance-replay** (an entrance re-runs on content already on screen) · **crossfade-dip**
(old+new opacity sums outside ~0.95–1.05: a flash or dim) · **orphan-linger** (old-only or new-only
content animating past the rest) · **end-paint-swap** (the top item swaps when transition layers drop)
· **start/end jump** (a shadow switched off at start or on at end). For reduced motion, measure travel
distance across frames, not duration. Step through at 2–5× slower to check origin and sync.

**Sequenced motion** (a hero sequence, a launch scene) is reviewed from a contact sheet at fixed
fractions: the first frame is already a composed picture; beats connect by one continuous move, not
fades between layouts; something meaningful still moves in the last third; the last frame is a
confident poster. Two rounds stuck at one score whose notes name the idea mean a new idea, not polish.
