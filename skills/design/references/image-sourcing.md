# Image sourcing

Purpose: Get the pictures honestly — which source fills a slot, capturing the real product, licences
for icons, illustrations, logos and photos, library-photo vetting, generated sets that read as one
family, and the curation pass with provenance.

Read when:
- Filling picture slots, sourcing icons, illustrations, logos, patterns or stock photos (and checking
  their licences), capturing product screenshots, or art-directing a generated image or clip set.

Skip when:
- Treating an image already chosen (crop, scrim, depth) → imagery-depth-decoration.md; composing a
  product shot or drawing a figure → product-visuals.md; designing a logo → brand-mark.md.

Inputs:
- The slots and their jobs, the register, DESIGN.md (palette, Do's and Don'ts), and what the user supplied.

Produces:
- Per slot: the source, licence, provenance (captured / library / generated), and the shot list or
  prompt — plus the handoff list of stand-ins to replace.

## Contents
- Which source fills a slot
- Library assets and the licence gate
- Library photographs
- Generated sets
- Curation pass and provenance

## Which source fills a slot

In order: the user's own images · **screenshots of the real product, captured whenever it can be
reached** (a URL, a dev server, a project that starts with one command, an installed app) · the product
built in code only when nothing runs yet, named in the handoff with the screens to capture later ·
licensed library photos · generated stills on request · type at scale. Capture several states (main
screen for the hero, one detail cropped large, a second screen, the phone view). **Scrub every capture**
— no real names, emails, tokens, file paths, error states or debug overlays — and never retouch what
the product shows. Never generate a stand-in for a real person, product, place, or work (honesty).

**Reproduce gaps** (visual-direction.md): a missing asset stays a counted, labeled gap. A generated fill
is allowed only in a non-brand, non-hero decorative slot, in the source's style, recorded as `generated`
in provenance and approved by the owner; a real subject stays a real photo or a placeholder.

## Library assets and the licence gate

Specify each asset by library + exact name (icon lookup: design-systems.md); one illustration family
per site; seeded generators (blob/wave) or your own SVG geometry make decoration reproducible and
licence-free — expose a few tunable qualities (density, scale, speed), curate by stepping seeds, and
record the chosen seed. **Licence gate — per asset, read at the source.** On a client deliverable
prefer MIT / ISC / Apache-2.0 / CC0: no visible credit (keep their notices in the repo). **Forced
credit** (CC BY — e.g. Hero Patterns — and "free with attribution" tiers) is out unless the brief
accepts it; **NC** disqualifies; **ND** forbids sharing an altered version (recolor, redraw), so it
cannot join a token palette. Read past the licence name: unDraw needs no attribution but forbids AI/ML
training, scraping or bulk download, and repackaging — hand-pick files, embed rendered assets, never
hand over a reusable library. Licences vary inside a collection: one Iconify search for "home" (checked
2026-10) returns Apache-2.0, MIT, OFL-1.1, and CC BY 4.0 sets; Simple Icons is released under CC0 but
says not every icon is — check each icon's licence.

**Logos are trademarks:** no file licence grants trademark rights, and a package licence covers the
compilation, not each mark inside it. Seek permission, follow the brand's guidelines, render marks
unaltered, never imply endorsement (trademark), and never put a letter-in-a-square beside a real company name —
use its real mark or a plain wordmark. **Logo rows:** crop each mark to its drawn box, size by shape
(landscape to ~70% of the tile width, portrait to ~68% of its height), one treatment per row (all colour
or all mono), one baseline, rows split evenly (3+3, never 5+1). Record source + licence per asset in
the handoff.

## Library photographs

Stock fills detail slots only — hands, tools, materials, a process — never the hero, a room, a
shopfront, the product or a person the page claims. Look at each at full size: no other business's
name, sign or logo readable, no face passed off as staff or a customer, no landmark or landscape passed
off as the client's place. One light and grade across the set (or one treatment on every image, the
user's included); never the same frame twice (a crop or mirror counts); never the trade's cliché shot
(latte art from above, flour thrown on black). List every stand-in in the handoff with the photograph
to take in its place (shopfront straight on, the room from the door, hands at work; window light).

## Generated sets

**Pick the strategy first.** *Diversity* (independent spots, iteration) → parallel, one call per
distinct concept. *Consistency* (one family) → one engine, anchored, serial; spreading a set across
engines maximizes drift. **Anchor-first:** (1) generate the most-scrutinized slot (usually the hero)
first; (2) gate it against DESIGN.md (palette, register, Do's and Don'ts) until it passes; (3) pass it
as a **reference image** to every downstream slot — text or session continuity carries the
description, not the pixels. The anchor sets style, not geometry: each slot renders at its own ratio.

- **Shared preamble, reused byte for byte:** medium and lens, the light (how many sources, where), the grade in three words, texture, and what it must not be. Each slot prompt adds where the empty space for copy sits, the page's background colour (so edges blend), and exclusions (no text, letters, logos, UI, watermark).
- **Structured spec** (every count paired with labels, literal text quoted "render exactly") for layout-critical images; dense prose for mood, hero and texture. Where text keeps breaking, generate a clear text-safe area and typeset after; spell unusual names letter by letter. Label every input image by role (style reference vs content anchor).
- **Lock layout and copy first, then vary one variable per variant**; keep revisions as versioned siblings; fix with one targeted change, rewrite only when the concept is wrong.
- **Never ask for grain or texture** (it bakes a tiling artifact) — add texture in code. On the page, mask the image edge into the page colour; a hard rectangle of a different black reads as pasted.
- **Sibling concepts** (a family of brands or campaigns): fix 4–6 constants (medium, palette relationship, wordmark placement, density) and vary meaning, setting and motif.
- Spend top fidelity where a person scrutinizes (hero, social card). A clip needs a shot spec (subject action, camera move, beats, audio or silent); seed image-to-video with a still from the anchored set; the clip's poster is its own frame.

## Curation pass and provenance

Read every image and score **on-brand** (palette/type/register, no Do's-and-Don'ts breach) ·
**consistency** · **slot-fit** (right subject and composition for this section's job) · **technical**.
Judge consistency on a sheet — the new piece beside the set's shipped ones, asking "same hand, same
set?", not "is it nice?" — and check the 1× read (the subject lands at display size without its
caption). Technical covers geometry, garbled text, watermarks and artifacts, re-rendered (never
upscaled) at ≥3× on hands, faces, feet and contact points: every hand runs cuff → narrower wrist →
fingers of unequal length → thumb on the side its handedness dictates; weight on one leg, nothing
floating, no tangent contacts. **Cutouts:** real alpha checked on light and dark (white paint solid,
enclosed holes clear, no halo; RGBA mode proves nothing; never chroma-key native alpha), no baked card
shadow, radius or border (CSS draws those), ≥1.5× the slot; a crop of a comp is a reference, never a
shipped asset. Regenerate only failing slots — fix the prompt field or re-anchor; never re-roll a pass.
Provenance per asset: captured vs library vs generated, slot, source or prompt, model, seed, date.
