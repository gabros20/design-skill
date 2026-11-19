# Brand mark

Purpose: Design, redesign, or critique a logo, wordmark, monogram, app icon, or identity kit — the
brief, concept round, mark type, construction, the test ladder a mark must survive, the kit and
guidelines, and the honesty limits (no trademark clearance).

Read when:
- The request is "design / redesign / critique a logo", a wordmark, monogram, app icon, favicon, or a
  lockup and identity kit.

Skip when:
- Using someone else's logo on a page (licence and trademark rules) → image-sourcing.md.
- Setting the wider brand world, palette or type system → visual-direction.md, color.md, typography.md.

Inputs:
- The exact name, what it does, audience and where they meet the mark, 3–5 adjectives, competitors,
  and constraints (existing equity, colours, where it must work).

Produces:
- Three greyscale directions with a recommendation; after approval, the master files, lockups, small
  cuts, colour versions and a one-page usage sheet.

## Contents
- Brief and concepts
- Mark type
- Construction
- Optical corrections
- The test ladder
- Kit and guidelines
- Honesty and limits

## Brief and concepts

Brief in ≤5 questions (name, offering, audience and where they meet the mark, 3–5 adjectives — the most
useful input — competitors, constraints); state assumptions and proceed. List the category's clichés
(fintech: blue, upward arrows, shields, globes) and treat them as off-limits unless given a fresh form.
Build a word map — name, offering, adjectives, promise → drawable nouns, metaphors, opposites; ideas live
at the intersections. Write 8–12 one-sentence concepts across ≥2 mark types (a sentence that fits a
competitor is not a concept); the concept fits in two words. Build only the 3 strongest and most
different, solid black on white, with the construction described in words first. Present in greyscale
(colour triggers taste debates) at ~80% finish, one line each plus a recommendation, to the smallest
group that includes the decider; then **stop** — lockups, colour and guidelines only after a direction
is chosen. Translate feedback into problems ("make it bigger" usually means "it lacks presence").
Principles: identify, don't explain; relevant, not literal (a tooth for a dentist is clip art); simple,
not plain — reduce, then make one detail ownable.

## Mark type

Decide in order; the first strong yes wins. Short (≤~8 letters), distinctive, new name → **wordmark**,
with one ownable device (custom letters, a ligature, one letter replaced by a sign) and one typographic
move (tight tracking *or* case *or* a glyph swap); never letterspaced lowercase or stretched type ·
long or hard name → **monogram** or letterform + wordmark · a name or story holding a vivid image →
**pictorial**, reduced to geometry, silhouette first · an idea with no object → **abstract**, only with
the reach to teach it · lives mostly as app icon/favicon → letterform or compact symbol first ·
heritage/authority → **emblem** plus a simplified inner symbol · warmth/play → **mascot** plus a
head-only cut · many children → a system with a fixed core. Design symbol and lockup as a pair (full
lockups are often wide, >2.5:1; icons near-square). The first round explores three types. A product
wordmark set in the body face at semibold is the un-designed default.

## Construction

Build from primitives on an integer canvas (256 units for symbols; lockups 256 tall) with one grid
unit and a short list of reused radii and angles; clean angles only (0/15/30/45/60/90° — 1–2° off reads
as a mistake); arcs for circular geometry, few anchors at extremes; negative space as holes in one path
(`evenodd`); touching same-colour shapes merged (no seams). **Master file:** no live `<text>` (outline
the letters), no rasters, filters, masks or deep transforms, ≤3 flat colours; details ≥1/48 of the
mark, smallest gap ≥1/32 of the width, a monoline stroke ≥8% of the width to read at 24px. Keep a flat
master; a stepped gradient (3–5 flat bands) survives small sizes. Save every iteration side by side and
render each — SVG written without rendering is drawing blind.

## Optical corrections

Equal measurements do not look equal: round shapes overshoot flat edges by 1–3% and points by 3–6%; in
an icon set circles sit slightly larger than squares, triangles larger still; the optical centre sits a
little above the geometric one, and an asymmetric glyph (play, arrow) centres on its visual mass;
horizontals look heavier than verticals, so thin them 5–10%; light-on-dark reads bolder (the thinned
reversed file is in the test ladder). A prominent rounded rectangle wants continuous-curvature (squircle) corners — a
plain arc pinches the straight side. The same corrections apply to UI icons, badges and play buttons.

## The test ladder

A mark ships only after: **16px** (the idea survives, else a simplified small-size drawing) and 24–32px
recognisable — the documented minimum size sits just above where identifying features vanish ·
**one-colour** black and white (reversed reads heavier — ship a 2–5% thinned file) and greyscale
separation by value · on brand colour, photos and patterns (else a container device proportioned like
the mark) · squint silhouette · **mirror** (reveals proportion errors you adapted to) · rotate
90/180°, tiny, and by fresh eyes (accidental letters, body parts, hazard or political symbols) ·
**letter test** (every customised letter still reads as itself) · junctions (no notches, slivers, ink
traps) · **peer test** beside 3–4 exemplary marks at one size · **shelf test** among competitors ·
**familiarity** ("if it feels familiar and isn't yours, it's someone else's") · circular avatar crop and
app tile. Critique scores idea, simplicity, distinction, memorability, tone, craft, versatility,
longevity, colour and type; one fatal flaw (illegible small, looks like a competitor, an offensive
reading) outweighs the total.

## Kit and guidelines

Lockups: horizontal, stacked, symbol-only, wordmark-only, with locked relative sizes and a symbol–type
gap derived from a mark element so it scales; a small-size cut; black, white (thinned) and one-colour
versions; ≤2 colours, legible without gradient, shadow or outline. Favicon 32 and 180, app icon with
the symbol optically sized ~60–70% of the tile, and a designed 1200×630 social image (never a page
screenshot). Guidelines: clear space defined by an element of the mark (never a fixed distance),
minimum size in px and mm, approved backgrounds, and misuse (stretch, recolour, rotate, effects,
rearranged lockups, busy backgrounds without a device). A dynamic identity keeps ≥2 anchors constant
(e.g. the name's type + colour). Logo motion: entrance, resolve (final frame = the master), exit, 1–3s,
built from the mark's own construction.

## Honesty and limits

A wordmark is commercial trademark use: confirm the font licence permits logo use (SIL OFL generally
does; many free fonts are personal-use only), check glyph coverage for every brand language plus
`@ & ’`, numerals and currency, and outline the letters — the brand typefaces still need licences for
everyday use. Never claim trademark clearance; recommend a trademark-database and reverse-image search.
For a redesign, audit equity first (visual-direction.md) and keep the strongest anchor.
