# Forms

Purpose: Design forms and inputs that people finish without errors — layout, control choice,
validation timing, forgiving input, sign-in, field states, and the save model.

Read when:
- Designing a form, field, sign-in, sign-up, checkout step, or settings page (expert configuration
  included), or reviewing why one produces errors or abandonment.

Skip when:
- The multi-step flow itself (wizard, checkout sequence) → journeys.md; error and helper copy →
  content.md; keyboard types, `autocomplete` values and validation code → `frontend` `forms.md`.

Inputs:
- Who uses each answer, the data's real formats, the platform, and whether changes apply at once.

Produces:
- A form spec: field list with controls and widths, validation timing, error and recovery behaviour,
  field states, and the save model.

## Contents
- Layout
- Choose the control
- Validation timing
- Forgiving input
- Passwords and sign-in
- Field states
- Save model
- Expert settings

## Layout

One column; labels above, left edge on the field edge; never a placeholder as the only label. Side by
side only for short fields people treat as one (city + postcode, expiry + CVC). **Field width signals
the expected answer** (postcode ~8 characters, CVC 4, email full width); equal widths discard the hint.
Ask less: every field names who uses the answer, and nothing is asked twice in one flow (prefill, or
"same as delivery"). Mark the minority in words ("(optional)"). Group past ~6 fields under a legend;
label→field 4–8px, field→field 16–24px, group→group 32–48px. An unfamiliar or high-stakes transaction
on a phone (an application, a claim) gets one topic per screen, a Back that keeps answers and a
check-your-answers page before commit; a routine or expert form stays one dense page. One primary
action at the end, aligned to the field edge; no Reset.

## Choose the control

| The answer is | Control |
|---|---|
| Yes/no, applied on submit | Checkbox |
| On/off, effective immediately | Switch — never inside a form that has Save |
| 2–5 exclusive options worth comparing | Radios (segmented control for 2–4 views or modes) |
| 6–15 exclusive | Select |
| >15, or a known item (country) | Combobox with type-ahead |
| Several of a few / of many | Checkbox group / multi-select combobox with removable chips |
| A small count (1–10) | Stepper |
| An exact number | Text field with the numeric keyboard; a slider only for imprecise ranges, with a paired field |
| A date the person knows (birth, issue, expiry) | Three text fields in locale order |
| A date near today, or where weekday or availability matters | Calendar that also accepts typing; ranges show two months and presets |

Preselect only the safe majority choice — never consent, a paid add-on, or a legally meaningful option.

## Validation timing

**Reward early, punish late.** Validate a field when the person leaves it, never while they first
type. Once a field shows an error, re-check on every keystroke so the error clears the instant it is
fixed. An empty required field errors only on submit (tabbing through is not a mistake). Confirm
inline only where the answer is uncertain (username free, password strength), not a tick per field.
**Submit and Continue stay enabled;** pressing validates, focuses the first error and, on a long form
or ≥3 errors, shows a summary linking to each field. The only lock is in flight. A server rejection
returns to the same fields with every value kept. The error sits directly below its field and states
cause + fix ("Email must include @", not "Invalid"; content.md).

## Forgiving input

Accept any unambiguous format (spaces, dashes, case, a leading +) and normalise it; never reject what
the system could fix. Show the format as hint text above the field, not as a placeholder that vanishes
on typing.

## Passwords and sign-in

One password field with show/hide and no confirm field; requirements visible before typing and ticked
off live; paste and password managers work (accessibility.md, 3.3.8); length over composition rules
(the policy is `backend`'s). A failed sign-in keeps the email, says what to do next, and offers
recovery beside the field.

## Field states

**Border width stays constant across all states** — signal state via background, outline or
box-shadow (border-width shifts layout); reserve a transparent focus-outline slot. Hover = background
4–6% darker. Inputs and buttons share one height per size step; the floor follows the pointer — touch
44pt / 48dp (accessibility.md), pointer-first product UI typically 32–40px. Reserve a right-edge slot
(~24px) for a status icon and a `min-height` for the helper line so validation doesn't reflow.
Disabled = three channels (opacity ~0.5, `not-allowed`, `aria-disabled`), never colour alone.

## Save model

One per surface, stated. *Immediate:* each change applies at once, shows "Saved", and can be undone
(switches, inline edit). *Explicit:* fields plus Save, a visible unsaved marker, and a leave guard.
Never mix them — a switch inside a Save form misleads one way or the other. Long documents autosave
with a visible status ("Saving… / Saved 14:02 / Offline — changes kept on this device").

## Expert settings

For a webapp's domain-expert configuration: domain language over technical (`max_concurrent_jobs` → "Maximum tasks running at once"); if you can't write a domain label, the param belongs in a config file, not the UI. Group by domain concept, not by type/alphabetical. Every param shows a visible default + reset; units are mandatory and adjacent. Progressive disclosure: primary (80% of tasks) / advanced (collapsed) / developer (not in UI). Validate in domain terms, inline, and surface interactions ("when retry is off, max-attempts has no effect").
