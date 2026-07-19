# UI content design

Purpose: Write the words in an interface as design material (labels, actions, errors, empty states, notifications) so the copy helps people navigate and act.

Read when:
- Labels, microcopy, error language, empty/loading states, notifications, or content hierarchy materially affect the outcome.
- You need voice and tone rules or an i18n length budget for the copy.

Skip when:
- The work is acquisition/marketing copywriting, positioning, or SEO keyword research (route to marketing-skill).

Inputs: the flow and its states, brand voice, audience, and the real product vocabulary.

Produces: interface copy (labels, actions, errors, empty/loading states), voice and tone guidance, i18n length budget.

Write the copy before designing the UI (content-first); the words are the signposting the layout arranges.

## Contents
- Words are design material
- Actions and consistency
- Capitalization and length
- Errors, empty, and consequence
- Voice and tone
- Notifications
- Banned openings and AI-tell titles
- Em-dash rule
- Internationalization

## Words are design material

Write from the end user's side of the screen: name things by what people control and recognize, never by how the system is built (a person manages notifications, not webhook config). Describe what something does in plain terms rather than selling it. Specific beats clever. Each element does exactly one job: a label labels, an example demonstrates, and nothing does double duty. Register: conversational, plain verbs, sentence case, no filler, tone matched to brand and audience. Do not pad an interface with invented content or data-slop (decorative numbers, stats, icons a real product would not show); if a section feels empty, that is a layout problem to solve, not a cue to fabricate copy.

## Actions and consistency

Active voice by default; a control says exactly what happens when used ("Save changes," not "Submit" or "OK"). Button labels are verb plus object; never OK, Yes, No, or "Click here." An action keeps the same name across the whole flow: the button that says "Publish" produces a toast that says "Published." Pick one term per action and hold it (Delete or Remove, Sign in or Log in, never both). Destructive labels name the destruction and its scope ("Delete 5 items," not "Delete selected"); "Delete" means permanent, "Remove" means recoverable. Link text stands alone ("View pricing plans," not "click here").

## Capitalization and length

Capitalization is systematic, not taste. Sentence case: body, helper text, errors, tooltips, button labels, H3 and below, captions. Title Case: page and modal titles, nav menu items, form field labels. ALL-CAPS: only overlines/eyebrows of 3 words or fewer, plus acronyms. Edge cases: a dropdown action item is a button, so sentence case (nav menu items stay Title Case); a button pointing to a named page keeps that page's case ("Go to Setup Wizard"); "Coming soon" is always sentence case. Numbers use numerals, spell the month ("August 5, 2025", never "8/5/2025"), and drop ordinal suffixes. Use past tense for completion ("File uploaded," not "File has been uploaded").

Length tracks comprehension: a line of 8 words or fewer is fully understood, 14 words drops to about 90%, and 25 words is the cliff. Limits: buttons 2 to 4 words (15 to 25 chars), titles 3 to 6 words (about 40 chars), error messages 12 to 18 words including the fix, instructions 14 words ideal and 20 max, line length 40 to 60 chars.

## Errors, empty, and consequence

Errors follow one order: what happened, why, and how to fix it, in plain language and in the interface's voice. Never blame the user, never apologize on their input, never use humor for errors, and never surface an error code. Turn `"Error 500"` into `"This email is already in use. Sign in instead, or use a different email."` System errors (the product's fault) own it and offer a path; never make the user feel responsible for the system's failure. State a consequence before the action, inline ("This will email all 240 subscribers"), not after, because fear comes from not knowing what a control will do. Errors appear on four surfaces, each still following what happened, why, how to fix: inline validation ("Email must include @"), system errors ("Action failed. Cause. Recovery."), blocking full-screen ("What is blocked. Why. Action."), and permission prompts, which state the benefit before the ask ("Get notified when orders ship. Enable notifications."). Phrase an inline error so a screen reader announces it in context: write "Must include @" so the field reads "Email address, must include @". Mind stress cases: do not cheerfully report "no activity this week" to someone in a crisis moment. Empty states are onboarding moments in three beats: name what is empty, say why it matters, give one button. New users spend more time in empty states than in any other state.

## Voice and tone

Voice is constant (the brand personality); tone adjusts per moment. Copy voice by state:

| State | Voice |
|---|---|
| Loading | present, calm ("Getting your data," not "Loading...") |
| Empty | invitational: say what belongs and offer the action |
| Error (user) | clear, directive, blame-free; one specific next step |
| Error (system) | own it, apologize briefly, offer a path |
| Success | warm, brief |
| Onboarding | contextual, not a tutorial |

Build a voice chart to hold this steady: 3 to 5 concepts, each with 3 adjectives and Do/Don't interface pairs, framed "We are [attribute] but not [opposite]." Voice is a channel switcher, not a volume knob: it stays constant while tone shifts by the user's emotional state (frustrated to empathetic and solution-focused, confused to patient, cautious to consequences stated, successful to a brief celebration).

## Notifications

Coarse control, not a wall of per-event toggles: 1 to 3 categories, each Off / Minimal / All (the two real needs are silence everything, or keep one or two categories). Notifications are scanned, not read: group by category, lead with an icon plus entity and action, and offer clear-all in one action.

## Banned openings and AI-tell titles

The reader has seen these on a thousand pages; each is a tell. Never open with: "Built for the modern team," "Unleash your X," "Where X meets Y," "Empower," "Reimagine," "Supercharge," "Innovative solutions," "Seamless integration," "In today's digital landscape," "Next-generation." The model may not invent specificity the user's product does not have; the user knows their product. For titles and headings, avoid the AI-tell shapes: delivering a verdict, manufacturing false tension ("It's not X. It's Y."), heavy imperatives, faux-insight, or a punchline where a title belongs. The general anti-default catalog lives in visual-direction.md.

## Em-dash rule

The em-dash is banned in UI strings, headlines, buttons, microcopy, and generated marketing or landing copy, because it is a recognized AI tell. It is permitted only in long-form editorial body prose when the brief's register genuinely demands it. Curly quotes (" " ' ') and the ellipsis (…) remain required typographic craft.

## Internationalization

Copy expands when translated; design to the longest realistic string. Budget: German +30 to 40%, French +20%, Finnish +30 to 40%, Arabic +25% (and RTL), CJK -30%. Size containers for expansion: buttons must tolerate 150 to 200% and titles 130 to 150% of the source length. Keep numbers separate from strings; store full sentences as single strings (word order varies by language); use no abbreviations to save space. Test layouts with German or Finnish as the worst case and all nav items together at about 130% length. System-level RTL and logical-property rules live in design-systems.md.
