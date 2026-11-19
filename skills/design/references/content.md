# UI content design

Purpose: Write the words in an interface as design material (labels, actions, status, errors, empty states, notifications) so the copy helps people navigate and act, and refuse the copy that reads as generated.

Read when:
- Labels, microcopy, status and error language, empty/loading states, notifications, or content hierarchy materially affect the outcome.
- You need voice and tone rules, an AI-tell copy pass, or an i18n length budget for the copy.

Skip when:
- The work is acquisition/marketing copywriting, positioning, or SEO keyword research (route to `marketing`).

Inputs: the flow and its states, brand voice, audience, the brief's facts, and the real product vocabulary.

Produces: interface copy (labels, actions, status, errors, empty states), voice and tone guidance, i18n length budget.

Write the copy before designing the UI (content-first); the words are the signposting the layout arranges.

## Contents
- Words are design material
- Actions and consistency
- Capitalization and length
- Status, errors, empty, and consequence
- Voice and tone
- Notifications
- AI-tell copy
- Punctuation
- Internationalization

## Words are design material

Write from the end user's side of the screen: name things by what people control and recognize, never
by how the system is built (a person manages notifications, not webhook config). Describe what
something does in plain terms rather than selling it. Specific beats clever. Each element does exactly
one job. Public-facing copy targets a lower-secondary reading level, one idea per sentence, a term
of art defined on first use. Register: conversational, plain verbs, sentence case, no filler, never "just", "simply" or
"easily". **Inventory first:** read the locale files and nearby copy, list the noun for each object, the
verb for each action and the case per element, and reuse them.

**Honest gaps.** Never pad with invented content or data-slop; a fact the brief doesn't give is a
visible blank to fill (muted, dashed outline), at most two a page, each listed in the handoff's
`unresolved`; a row or column that would hold only missing facts is cut. Assumed values are marked and
never feed a derived claim (no "Open now" from assumed hours); a count-up or counter needs a verified
number (a concept or pre-launch brand has none). Demonstration content may be written plausibly when
labelled synthetic: one content file flags each invented item (a `{{price}}` token on a real product),
no real company names, logos, awards or metrics-as-fact, odd final digits rather than round numbers,
dates that vary, never one face for two people.

## Actions and consistency

Active voice by default; a control says exactly what happens ("Save changes," not "Submit" or "OK").
Buttons are verb plus object; never OK, Yes, No, or "Click here." An action keeps one name across the
whole flow and page (the "Publish" button produces a "Published" toast; nav and footer agree); one term
per action (Delete or Remove, never both) and one flow vocabulary (Get started → Continue → Done).
Destructive labels name the destruction and its scope ("Delete 5 items"); "Delete" is permanent,
"Remove" recoverable. Match verbs to input (tap, click, or select when both); never mix "My…" and
"Your…". Label toggles by what ON does ("Send read receipts" — a "Don't…" toggle is a double
negative). Clickable text never wraps: buttons, primary nav and CTA labels stay one line from 320 to 1920px — shorten the label first. Link text stands alone; suffix every repeated "Learn more" ("Learn more about exports");
link to a referenced setting instead of narrating its menu path.

## Capitalization and length

One capitalization system per product. Default sentence case everywhere, titles, buttons and labels
included; Title Case only where the platform (Apple) or the brand's existing style sets it. ALL-CAPS:
only overlines of 3 words or fewer, plus acronyms. A dropdown action item is a button
(sentence case); a button pointing to a named page keeps that page's case. Store copy in natural case
and apply caps with `text-transform`. Numbers use numerals; dates and numbers format by locale (`frontend` `i18n.md` "`Intl` APIs and
pluralization"), never a bare `8/5/2025`. Relative times ("3 hours ago") switch to an absolute date after about a week.

Length tracks comprehension: 8 words or fewer is fully understood, 14 drops to about 90%, 25 is the
cliff. Limits: buttons 2–4 words (15–25 chars), titles 3–6 words (~40 chars), errors 12–18 words
including the fix, instructions 14 words ideal and 20 max, a UI copy line 40–60 chars (body measure is
typography.md's).

## Status, errors, empty, and consequence

**Status copy pairs up:** in progress is a verb + object ("Saving changes…") resolving to object + past
tense ("Changes saved", never "successfully", naming where: "8 files uploaded to /reports"). Failure
says what didn't happen and the next step; *unavailable* says why and what unlocks it, beside the
control ("Add a payment method to publish"); *partial* gives both counts ("9 of 12 uploaded. Retry 3").
Per state, write one fact, then the next action, then only the context that changes the decision; a
heading that explains the state leaves the intro nothing to repeat; helper text answers the question
the control raises, never restates it; never promise a cause or fix the system can't know.

Errors follow what happened, why, how to fix — plain language, the interface's voice. Never blame the
user, apologize for their input, joke, or surface an error code: `"Error 500"` becomes `"This email is
already in use. Sign in instead, or use a different email."` System errors own it and offer a path.
State a known requirement as helper text before input, positively; an error that keeps firing is a
design defect, not a copy one. State a consequence before the action, inline ("This will email all 240
subscribers"). Four surfaces, one order: inline validation, system errors, blocking full-screen, and
permission prompts (benefit before the ask). Phrase inline errors to read in context ("Email address,
must include @"). Mind stress cases: never cheerfully report "no activity this week" in a crisis moment.

**Empty copy by kind:** *first use* — three beats: what belongs here, why it matters, one button (new
users spend more time here than in any other state) · *cleared by the user* — a light touch and an easy
way back · *no results* — echo the query and offer the exit ("No results for 'quarterly'. Clear
filters") · *no permission* — why, and how to get access · a *failed load* is an error, never "nothing
here". Never park lasting information in an empty state — it vanishes with the first item.

## Voice and tone

Voice is constant (the brand personality); tone adjusts per moment: loading — present, calm ("Getting
your data") · empty — invitational · user error — clear, directive, blame-free · system error — own it,
apologize briefly, offer a path · success — warm, brief · onboarding — contextual, not a tutorial.
Build a voice chart: 3–5 concepts, each with 3 adjectives and Do/Don't pairs, framed "We are [attribute]
but not [opposite]." Voice is a channel switcher, not a volume knob: tone shifts with the user's state
(frustrated → empathetic, confused → patient, cautious → consequences stated, successful → brief).

## Notifications

Coarse control, not a wall of per-event toggles: 1–3 categories, each Off / Minimal / All. Notifications
are scanned, not read: group by category, lead with an icon plus entity and action, offer clear-all.

## AI-tell copy

Dated 2026-11; learn *why* each reads as a model. A model writes the phrasing that fits the most pages,
so specifics must come from the input, never from style rules. First generation, still banned as
openers: "Built for the modern team," "Unleash your X," "Where X meets Y," "Empower," "Reimagine,"
"Supercharge," "Seamless integration," "In today's digital landscape," "Next-generation"; buzzwords
(streamline, world-class, cutting-edge, elevate, robust, delve). **Current tells look like good copy:**
one warm, wry, modest voice for every client · invented specifics (a timestamp, a batch number, an
unmeasured %) · a strip of figures under the hero · two-fragment heads ("Twelve rooms. Three ways to
stay.") and number-pair heads, once a page at most · contrast frames counted together across "not X but
Y / rather than / instead of" (≤2), and three sections ending on a rebuttal ("Not a feature. A
platform.") · virtue words about the client (honest, calm, quiet) — show it with a fact · a dry closer
on every paragraph · default-cast names (Priya, Okafor; Kestrel, Halcyon, Lumen) — names come from the
brief · everything in threes, every card the same length, hedging stacks · a sentence reused across
sections (the hero line returning as a heading) · device-wrong copy ("hover a day" on touch) · process
talk ("Below, you'll find") · titles that deliver a verdict, manufacture tension ("It's not X. It's
Y."), or punchline where a title belongs.

Clusters are the signal, not one hit. Fix with facts and decisions — a synonym is the next tell — then
look for the over-correction (comma splices, everything in pairs, calm-word sprawl, invented numbers).
**Rival test:** put a competitor's name into the headline, subline and each heading; a line that still
reads true says nothing — rewrite from the brief's own nouns. Each line: can the reader picture it,
could it be proven false, could only this business say it? Not tells: plain "is/has", a true list of
three, persuasion on a sales page that stands on facts.

## Punctuation

The em-dash is banned in UI strings, headlines, buttons, microcopy, and generated marketing or landing
copy (a recognized AI tell); permitted only in long-form editorial prose the register demands.
Required characters: curly quotes **in the locale's form** (de „…“, fr « … » with a narrow no-break
space, set by `lang`), the ellipsis `…`, en dash for ranges (`9–5`), minus `−` in figures, `×` in
dimensions, a no-break space binding number and unit ("12 kg"), and every diacritic in names. Automate
them in the content pipeline.

## Internationalization

Copy expands when translated; design to the longest realistic string. Budget: German +30 to 40%, French
+20%, Finnish +30 to 40%, Arabic +25% (and RTL), CJK −30%. Buttons tolerate 150–200% and titles
130–150% of the source length. Keep numbers separate from strings; store full sentences as single
strings; no abbreviations to save space. Test with German or Finnish as the worst case and all nav items
together at ~130% length. RTL and logical-property rules live in design-systems.md.
