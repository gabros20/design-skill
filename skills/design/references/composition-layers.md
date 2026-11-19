# Composition layers

Purpose: Compose a collage, layered, poster-led or type-as-image section — arranging discrete things
on planes so the result reads as one picture — with the plane stack, the grid under it, the decoration
kit, text-image interleave, the responsive stage, and the layer contract handed to code.

Read when:
- The contract's composition is *composited*: collage, zine, poster, Y2K, art-directed editorial or a
  layered hero.

Skip when:
- Atmosphere and materials (glow, glass, grain, shadow) → imagery-depth-decoration.md; a plain grid
  section → layout-composition.md; the code → `frontend` `css-craft.md` "Composited layouts".

Inputs:
- The direction contract (lane, image treatment), the assets and their alpha, the headline.

Produces:
- A layer contract per section, a decoration kit, and a phone stage.

## Contents
- The plane stack
- Depth cues
- The grid under the chaos
- The decoration kit
- One treatment unifies
- Text and image interleave
- Responsive stage or flow
- Floors and performance
- Layer contract and checks

Numbers here are working defaults for composited lanes; the contract may change them; floors (marked
by their basis) do not.

## The plane stack

Back to front; each plane has one job, and a plane with nothing to say is deleted:

| Plane | Carries |
|---|---|
| 0 Ground | Colour, paper or texture; sets temperature |
| 1 Field | Large shapes, colour blocks, ghost words, visible grid; zones the frame |
| 2 Image | Photographs, cutouts, drawings — the subject |
| 3 Display type | The headline as an image; interlocks with plane 2, in front of or behind it |
| 4 Marks | The decoration kit: labels, stamps, arrows, tape, annotations |
| 5 Interface | Navigation, body copy, actions — on top, unrotated and unoccluded (legibility; WCAG 1.4.3 / 2.4.11 for controls) |
| 6 Finish | Grain, print texture, overprint; fuses the stack |

## Depth cues

Strongest first: overlap · scale · contact shadow (one light; a hard short shadow says paper on a
table, a soft long one says floating — default one shadow kind per composition) · focus and atmosphere · value and temperature (dark
and cool recede) · bleed off the frame. Default: use two or three, not all.

## The grid under the chaos

- A column grid exists; most elements sit on it and the rest break it decisively.
- **Two angles** by default (0° and one other, about 3–8°); reading text stays at 0°.
- **Three sizes** by default — hero (≥40% of the frame), mid, small — at least 1 : 2.5 between steps; a frame of mid-sized things is the amateur tell.
- **Overlaps are decisive:** 15–40% of the smaller element, or no contact; no near-tangents.
- One subject leads. Empty ground is a shape: keep a quarter or more of the frame open, clustered, not sprinkled; elements bleed off at least two edges.
- Cluster marks beside what they annotate; scattered marks read as confetti.

## The decoration kit

Define it before composing: five to nine marks in one material logic by default (all print ephemera, or all
screen artefacts; Y2K and collage may cross on purpose), two or three palette colours, one line weight, a count budget per viewport,
and a job for each mark (point, label, bridge two planes, bleed). A mark that states a fact states a
true one (honesty).

## One treatment unifies

The same grade, duotone, halftone or threshold on every image; one cutout edge (clean path, torn, or a
sticker outline) throughout; one light direction; compatible eye levels. Mixed sources with no shared
treatment read as a ransom note. When a photograph leads, sample the palette from it — ground from its
shadows or highlights, accent from its smallest saturated area. **Direct the pictures:** people and
vehicles face into the layout, toward the copy; vary shot distance across sections (wide, medium,
close — no two neighbours the same).

## Text and image interleave

Six ways: type over image (scrim rules, imagery-depth-decoration.md) · type behind a cutout subject (default: at
most a quarter of the letterforms hidden, a word's first letter kept clear) · type wrapped to a contour ·
image inside type (display sizes and heavy weights only) · type as a frame along the edges ·
overprint. Reading text never interleaves: it sits in a quiet zone with measured contrast (WCAG 1.4.3).

## Responsive stage or flow

Default: a composition is recomposed, not shrunk. Choose per section:
- **Stage** — one picture with a locked aspect ratio that scales as a unit; author two or three stages (wide, tall) and swap between them. Text inside has a size floor; when it is hit, switch stage.
- **Flow** — layers anchored to grid cells overlap through the grid and restack in reading order on narrow screens.

The phone version is a poster of its own: the subject, the headline and at most three marks; six
planes become three or four; side-by-side overlap becomes vertical overlap.

## Floors and performance

- DOM order is reading order whatever the z-order (WCAG 1.3.2); a cropped or occluded display word still exists intact as the heading.
- Decorative planes are hidden from assistive tech (WCAG 1.1.1) and take no pointer events; a focused control is never fully covered (WCAG 2.4.11 AA); default: nothing overlaps a control or its ring (2.4.12 AAA).
- Contrast is measured on the worst patch behind each line (WCAG 1.4.3).
- At 320px and 200% zoom a stage gives way to flow: no clipped text, no sideways scroll (WCAG 1.4.10, 1.4.4). Reduced motion holds the composed still.
- Performance defaults: planes that never move apart are flattened into one plate; six to eight image layers above the fold at most; alpha images in a modern format at 2×; the subject or headline loads first and decoration after; at most two blended layers per viewport.

## Layer contract and checks

Hand off, per plane: asset, order, anchor (grid cell or stage point), size relative to the stage,
overlap rule, travel relative to the others and what it must keep touching (what moves together is
one plane), and its phone variant; plus the opening, midpoint and exit in words when it moves (motion
code: `scroll-animation` `layered-visuals.md` "2. Depth parallax"). **Checks:** squint — one subject
reads · cover the marks — the composition still stands · remove the texture — the treatment still
unifies · count angles (≤2) and sizes (3) · no tangents.
