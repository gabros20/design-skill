# Product visuals

Purpose: Show the product or explain a concept in a picture without inventing anything — product
shots, product UI in motion, bento grids as one picture, explanatory figures, drawn illustration sets,
empty-state pictures, and annotations — and review them on a fixed sheet.

Read when:
- A page needs a product shot, a demo window, a feature card or bento grid, a "how it works" figure, a
  spot illustration or set, an empty-state picture, or callouts on an image.

Skip when:
- Sourcing or generating the image → image-sourcing.md; depth, materials, scrims → imagery-depth-decoration.md;
  a logo or app icon → brand-mark.md; demo-loop timing → choreography.md.

Inputs:
- The real product (running build, screenshots, its own tokens, icons and strings), the claim the
  picture must carry, and its placement and size.

Produces:
- A product-shot or figure spec (stage, crop, strings, accent, motion beats) and a review sheet.

## Contents
- The honesty rule
- Product shots
- Product UI in motion
- An app demo in a hero
- Bento as one picture
- Explanatory figures
- Drawn illustration
- Empty-state pictures
- Annotations
- Review sheet

## The honesty rule

A product visual is a real screenshot, or the product's own components, tokens, icons and strings
rebuilt and simplified — never UI the product does not have (anti-defaults.md: fake product UI is the
#1 tell). Every label, menu item and number traces to the app's source or a reference: one invented
word ("Processing…") makes viewers stop believing the rest. Use one owned example subject across every
window, never a client's or real person's data, nor a real customer's site in a preview pane (even when the design
frames show one) unless that customer agreed: invent the customer, with your own or licensed photography.

## Product shots

- **Stage:** one hero and at most one or two satellites of a different kind (a card plus a small system object; two same-width cards read as a pile). The hero fills ≥⅔ of the stage width and runs 10–40% off an edge; satellites straddle the hero's edge about half outside, over chrome or margin, never over content.
- **Crop only filler:** the action, the payoff and every real word stay whole. **One gutter**, measured in the final crop; every edge sits a full gutter in or well past it, never ~24px short. No near-tangents (layout-composition.md).
- On a white or dark page there is no plate behind the window, and a whole window never floats with even air on four sides. Fade only the foot, over filler, with a mask.
- **Restraint:** count the real strings (title, the thing acted on, what is typed, the result — usually 3–7); elsewhere quiet filler at the edges, never where the eye lands; a label and its value are both real or both filler; one number gets to be big; keep the domain's signature content (album art, avatars). Never ring the hero in an accent to point at it (it reads as a focus state nobody gave).
- **Feature cards read expensive** when the card is barely there (one step off the page, a hairline) and the panel holds the product's own subject at true size, cut by the panel edge — a glimpse of something bigger, not a toy centred in a box; mock text ≥11px, the accent once per fragment, never a third box (card > patterned panel > white card).
- A phone column gets a recomposed shot (crop closer, drop or stack the satellite), not a squeeze. Start flat and frontal; a tilt must beat the straight version at final size.

## Product UI in motion

Each step shows the start, the action, the app's own working state, then holds the result; time
compression states the true numbers; reduced motion shows each step's designed end frame (step and
loop timing: choreography.md "Loops, idle and demo loops"). With no live product, label the path `Sample workflow` and ship a replay plus a text transcript;
grey bars standing in for a page read as unfinished. **Pause test:** any paused frame is a screenshot —
dates match weekdays, counts match the items shown and change on the frame their cause lands, a summary
arrives after the events it sums, newest first, and zero reads "No clashes", never "0 clashes".

## An app demo in a hero

A running mock of the app playing a short scripted story (from a field build, each rule checked at several
viewports):

- **Size it to the viewport, not the artboard:** frame height `clamp(min, 100svh − header − margin, max)`, the app's
  layout flexing to it as the real app does to its window (panels stretch, the chat scrolls), so a jump to `#demo`
  shows the whole app under a fixed header (it fit exactly at 1440×900, 1440×760 and 1920×1080).
- **Scale it as one picture, never past real size:** by width, capped at one design px per CSS px, so a wider screen
  gets a roomier app (a wider preview pane), not inflated UI type.
- **Show the explanatory state:** the labelled sidebar, not the collapsed icon rail the "in use" frames show; a
  compact state at marketing scale reads cramped and explains nothing.
- **It may break the text column:** run it to ~32px from the window edges on desktop while the copy keeps the
  container; it is the page's evidence.
- **Make its interactions legible at the scaled size:** a click is two layers, a soft disc (~72px, from ~0.55
  opacity, fading over 0.7s) and a thin ring (~88px, 2px, from ~0.9, over 0.9s), scale and opacity only. One faint
  ripple sized for the real UI vanishes once the mock is scaled down.
- Its arrival in a busy hero: surface-website.md "Award / experimental tier".

## Bento as one picture

⅓–½ of tiles show UI; the rest are a stat, a statement, an object, a diagram, a collection or a real
photo. One hero tile spans two columns or rows. A UI tile crops to **one component** at real size or
larger, with window chrome at most once per grid (on the hero). Neighbours contrast in kind — two
window crops are never adjacent. A stat tile is one real number at 48–72px with a short lead and
one-line label, never wrapping. Copy sits outside the picture at page size; all tiles share radius,
gap, padding and copy position; no string repeats. One tile leads the motion; the rest play once on
entry. Plan a tile table (span, kind, the one thing, words) before building. Grid mechanics:
layout-composition.md.

## Explanatory figures

Use one only where visitors must understand a mechanism, at most one per page, with a one-sentence
mapping of what moves and what it means; the readout, motion and caption come from one true model, and
reduced motion shows one designed still. Two honest forms: a **diagram** of the real system or data
(imagery-depth-decoration.md tier B), or an **object figure** — a buildable object whose mechanism maps
one-to-one onto the concept (a cache key → a pin-tumbler lock). An object figure fails as floating
labelled slabs or one bare slab. Take a reference's finish, never its object.

## Drawn illustration

- **Concept round:** write 3–5 one-line concepts that differ in kind — **literal** (the product as a well-made machine), **metaphor** (an object whose working is the promise), **scene** (a small diorama) — and pick with five tests: *glance* (named in 1s at shown size), *promise* (says the claim without a caption), *detail* (real parts), *page* (silhouette fits the placement), *brand* (material and era match). Give it one **moment** (a drawer pulled out). Reject a concept that is dead at rest, needs a label, holds two ideas, or is just the icon of the idea (a padlock for security).
- **A set is one family:** one camera, one world scale within ~10% (build the rest at the largest object's scale), one ground, one accent family, one part vocabulary, similar visual weight (add parts to the sparse one).
- **Two looks:** at 1× it reads as one thing; at 4× every region still holds something true. Every line ends on a face, another line or a terminal dot.
- **Object-figure recipe** (a named style — isometric technical line figures — not a rule for all illustration; choose it when the product is a mechanism and the page is calm): tone not colour carries hierarchy (base darkest, subject lightest, one lit part, monochrome unless colour is the subject); detail from mechanism parts, never texture; words out of the drawing; solids filled with the exact page colour, the neutral ramp shifted to the page (all of the lightness, ~60% of the hue); non-scaling strokes ~0.5px at 160–320px, 0.6–0.7 at 600–900px, 0.8–1 at 1,200px+; the object fills 80–90% of its region and leads toward the headline, with the text-side safe zone left empty.

## Empty-state pictures

Draw the absence, not a sad face: the object that holds or finds things, holding none (a rail of empty
hangers, a loupe over a blank sheet). The object is whole; only its contents are missing; one
highlight says where to look. Judge it at rest at ~160px. Copy: content.md.

## Annotations

A leader explains one relationship; if the layout already shows it, draw nothing. 1px quiet ink (1.5px
at hero scale), straight or one bend, stopping 4–6px short of the object or ending on a 4px dot; it
never crosses a surface. One colour per relationship; solid vs dashed carries direction. Dots move along
a route only while data really flows. A ring highlight is a hairline with 4–6px even clearance and the
element's own radius; a word highlight hugs the word (~0.14em sides, 0.08em vertical) and never grazes
the next line.

## Review sheet

Review a fixed sheet: at rest, answering, at the shipped thumbnail width (~160–240px), at both
intensity ends with the pointer at the edge, dark and light, reduced motion — each captured after
motion settles (~1.5s) — plus 4× crops of every junction and accent. The fresh reviewer gets the
frames, the closest reference and a one-line brief, never the builder's reasons; every finding cites
a frame. First question: could this composition belong to any product in its category?
