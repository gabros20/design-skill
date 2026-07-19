# Surface: Android

Purpose: Design native Android apps to Material 3. Owns the M3 tonal color system and dynamic color, the type scale, elevation-as-tint, window size classes, the navigation matrix, predictive back, and Material components. States the Roboto exception.

Read when:
- The request is a native Android app (or a Jetpack Compose / Material 3 surface).

Skip when:
- The surface is web (→ surface-website / surface-webapp) or Apple (→ surface-ios).
- The rule is generic: state design → interaction.md; motion timings → motion.md; universal contrast/target floors → accessibility.md. (M3 tonal color and dynamic color live HERE, not in color.md.)

Inputs: app IA (top-level destinations), window size-class targets, seed/brand color.
Produces: M3 theme (color roles + tone mapping), type scale, navigation model, responsive plan.

## Contents
- Fonts and units (Roboto exception)
- Dynamic color and color roles
- Elevation as tint
- Type scale
- Shape scale
- Layout and window classes
- Navigation matrix and predictive back
- Components
- Targets, gestures, motion, system

Material 3 governs; brand comes through theming. The slop tell is an iOS app in an Android skin — do not mix iOS and Material patterns.

## Fonts and units (Roboto exception)

**Roboto / Roboto Flex IS the correct default in Material 3** — this overrides the general "avoid Roboto" advice (ruling 2). Roboto Flex axes: wght 100–1000, wdth 25–151, opsz 8–144. Two typeface roles: Brand (Display + Headline) and Plain (Title + Body + Label), both default Roboto. Always use **`sp` for text** (never `dp`).

## Dynamic color and color roles

**Dynamic color is the default on Android 12+** (`dynamicLightColorScheme` / `dynamicDarkColorScheme`, derived from wallpaper). Provide a static fallback below Android 12. Never hardcode hex — reference color roles; test with ≥3 wallpapers; generate custom palettes from a seed via Material Theme Builder, never hand-picked tones. Baseline seed = `#6750A4`.

**Color roles are semantic**, each with a matching `on-` role: `primary`/`onPrimary`, `primaryContainer` (same for secondary, tertiary); `error` family is **static** (does not change with dynamic color); `surface`, `surfaceVariant`, and `surface-container-{lowest,low,container,high,highest}` + `surface-dim`/`surface-bright`; `outline` (important 3:1 boundaries, text-field borders) vs `outline-variant` (dividers/decorative — never swap them); `inverseSurface` = snackbar background; `secondaryContainer` = navigation active indicator. Never use `primary`/`secondary` as large backgrounds — use `surface`. Fill → text pairs only (`primaryContainer` → `onPrimaryContainer`); pairing outside the intended pair breaks contrast under dynamic/high-contrast.

**Tonal mapping** (seed → 5 palettes: Primary, Secondary, Tertiary, Neutral, Neutral-Variant; 16 tone stops 0–100). Key values — Light / Dark: Primary = **40 / 80** · On-Primary = 100 / 20 · Primary Container = 90 / 30 · Surface = **98 / 6** · On-Surface = 10 / 90 · Surface Container = 94 / 12 · Outline = Neutral-Variant 50 / 60. **Dark theme uses elevation-based tonal mapping, not pure `#000000`.** Three user-controlled contrast levels: Standard 0.0 / Medium 0.5 / High 1.0.

## Elevation as tint

Elevation is communicated via **tonal surface color, not shadows.** Levels 0–5 → dp / tonal offset (% primary): 0 = 0dp / none · 1 = 1dp / **+5%** (elevated cards, modal sheets) · 2 = 3dp / **+8%** (menus, nav bar, scrolled app bar) · 3 = 6dp / **+11%** (FAB, dialogs, search) · 4 = 8dp / **+12%** · 5 = 12dp / **+14%** (hover/focus only). Surface-container mapping: L0 = surface, L1 = container-low, L2 = container, L3 = container-high, L4–5 = container-highest. Most interactive components increase +1 level on hover/focus.

## Type scale

15 roles, all weight 400 except Title/Label = **500**. Size (sp) / line-height (sp) / tracking:

| Role | sp | LH | Track |
|---|---|---|---|
| Display L/M/S | 57 / 45 / 36 | 64 / 52 / 44 | −0.25 / 0 / 0 |
| Headline L/M/S | 32 / 28 / 24 | 40 / 36 / 32 | 0 |
| Title L/M/S | 22 / 16 / 14 | 28 / 24 / 20 | 0 / 0.15 / 0.1 |
| Body L/M/S | 16 / 14 / 12 | 24 / 20 / 16 | 0.5 / 0.25 / 0.4 |
| Label L/M/S | 14 / 12 / 11 | 20 / 16 / 16 | 0.1 / 0.5 / 0.5 |

Min 12sp body, labels down to 11sp. Test at 200% font scale. Component usage: button = Label Large; card title = Title Medium; top-app-bar title = Title Large; nav label = Label Medium; dialog headline = Headline Small; text-field input = Body Large.

## Shape scale

`none` 0dp · `extra-small` 4dp (snackbar) · `small` 8dp (text fields, menus, chips) · `medium` 12dp (cards) · `large` 16dp (FAB, nav drawer) · `extra-large` 28dp (dialogs, bottom/side sheets) · `full` 9999px (buttons, pills, sliders, switch track, search bar). Use shape tokens — never `border-radius` directly. Text fields = small *top* corners; bottom sheets = extra-large top corners.

## Layout and window classes

Use window size classes, not raw pixels — breakpoints **600 / 840 / 1200 / 1600dp** (margins / gutters / columns):
- **Compact < 600dp** (phone) — 16dp / 8dp / 4 col.
- **Medium 600–839dp** (tablet portrait/foldable) — 24dp / 16dp / 8 col.
- **Expanded 840–1199dp** (tablet landscape/desktop) — 24dp / 24dp / 12 col.
- **Large 1200–1599dp / Extra-large 1600dp+** — cap content, prefer list-detail/panes over spanning.

Max content width ~840dp on expanded (or list-detail); don't span full width. **Edge-to-edge is enforced on Android 15+** (`enableEdgeToEdge()`; `Scaffold` handles insets). Foldables: `ListDetailPaneScaffold` / `SupportingPaneScaffold`; never place critical content across the hinge. Base spacing = 4dp grid.

## Navigation matrix and predictive back

| Screen | 3–5 destinations | 5+ destinations |
|---|---|---|
| Compact (<600dp) | Navigation Bar | Modal Drawer + Bar |
| Medium (600–839dp) | Navigation Rail | Modal Drawer + Rail |
| Expanded (840dp+) | Navigation Rail | Permanent Drawer |

Navigation Bar: bottom, 80dp, elevation L2, **always show labels** (icon-only not permitted), filled active icon + `secondaryContainer` indicator. Rail: side, 80dp. Drawer: 360dp. Decision: 2 destinations → Tabs; 3–5 → bar/rail by size; 6+ → drawer.

**Predictive back (Android 13+):** opt in via `android:enableOnBackInvokedCallback="true"`; drive the exit animation from `BackEventCompat.progress` (0.0→1.0) — the exiting screen scales down (`1f - progress*0.1f`) and shifts toward the initiating edge (±`progress*32.dp`, from `swipeEdge` EDGE_LEFT/EDGE_RIGHT). **Back gesture = navigate back in the stack; Up button = navigate up the hierarchy** (they may differ). Never override deprecated `onBackPressed()`.

## Components

Button emphasis order: **Filled > Filled Tonal > Elevated > Outlined > Text.** **FAB:** at most one per screen (single most important action), bottom-end, `primaryContainer`; prefer `ExtendedFloatingActionButton`, collapse to icon on scroll. Top App Bar: small 64dp / medium 112dp / large 152dp, tied to scroll behavior; limit action icons to 2–3, overflow to a menu. Bottom sheets: **must have a visible drag handle.** Dialogs: critical only; **confirm = text button (not filled); dismiss button always on the left.** Snackbar: brief, auto-dismiss, `inverseSurface`, one action max (e.g. Undo). Chips: `FilterChip` (leading check when selected) / `AssistChip` / `InputChip` / `SuggestionChip` — arrange horizontally, never stacked vertically.

## Targets, gestures, motion, system

- **Min touch target 48×48dp** (Material components handle it by default; `IconButton` is already 48dp) — pad, don't shrink. `contentDescription` on every interactive element (`null` if decorative), describing the action not the appearance.
- **System gesture insets:** never place interactive elements in the **bottom 20dp / left+right 24dp** edges (`WindowInsets.systemGestures`). All tappables get a Material ripple; swipe-to-dismiss must be undoable (snackbar) or confirmed.
- **Motion:** take all durations from the canon in motion.md — do not restate an M3 duration ladder here. If you follow Material motion, its one platform-specific curve still applies: **Emphasized** easing `cubic-bezier(0.2,0,0,1)` for the standard on-screen path (enters decelerate, permanent exits accelerate), bound to motion.md's duration scale.
- **Notifications** importance: HIGH (sound + heads-up: messages/calls) · DEFAULT (sound) · LOW (no sound) · MIN (silent). One channel per type. **Photo Picker (Android 13+)** needs no permission — use it instead of media-read permissions. Widgets via Glance + `GlanceTheme` dynamic color.
