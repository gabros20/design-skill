# Surface: iOS / iPadOS

Purpose: Design native iPhone and iPad apps to Apple HIG. Owns exact chrome and target numbers, Dynamic Type, SF fonts, reserved gestures, sheets/permissions, iPad adaptivity, and the pin-to-home mobile-prototype spec.

Read when:
- The request is a native iOS or iPadOS app (or a SwiftUI/UIKit surface), or an iPhone-shaped web prototype meant to be pinned to the home screen.

Skip when:
- The surface is web (→ surface-website / surface-webapp) or Android (→ surface-android).
- The rule is generic: state design → interaction.md; motion timings and Apple fluid-interface physics → motion.md; universal contrast/target floors → accessibility.md.

Inputs: app IA (top-level sections), device targets (iPhone / iPad), register decision.
Produces: chrome/target spec, navigation model, Dynamic Type plan, iPad adaptivity plan, prototype scaffold.

## Contents
- Layout and targets
- Chrome dimensions
- Navigation and reserved gestures
- Typography / Dynamic Type
- Color and dark mode
- Components
- Motion and haptics
- Permissions
- iPad adaptivity
- Mobile-prototype spec

HIG governs structure; brand lives in the expressive layer (tint, type, motion, content). The slop tell is "ported from a website."

## Layout and targets

- **Minimum touch target and list-row height: 44×44pt.** Design the smallest screen first: **375pt wide (iPhone SE)** through **430pt (Pro Max)** — never hardcode widths.
- **8pt grid** (8/16/24/32/40/48); 4pt for fine adjustments. Content margins **16–20pt** from screen edges.
- **Safe areas:** never place text or controls under the status bar, Dynamic Island, or home indicator; `.ignoresSafeArea()` only for background fills. Primary actions at the bottom (thumb zone); navigation at top.

## Chrome dimensions

Status bar **20pt** classic / **44–54pt** on Dynamic Island devices · Navigation bar **44pt** row + **~52pt** large title (~96pt total) · **Tab bar 49pt**, translucent + blur · Home indicator **34pt** inset. App icon exported **1024×1024**; iOS masks to a squircle — for a matching custom shape, corner radius = side × **0.2225**, corner smoothing **61%** (Figma iOS preset).

## Navigation and reserved gestures

- **Tab bar at the bottom for 2–5 top-level sections** (use a "More" tab if >5). Labels 10pt; filled SF Symbol = selected, outline = unselected. Each tab remembers its own nav state; tapping the active tab returns to that tab's root. Never hide the tab bar navigating deeper.
- **Never use a hamburger/drawer menu** — iOS users expect tab bars.
- Back-button label = the *previous screen's title*, not "Back". Use `NavigationStack` (not deprecated `NavigationView`); large titles collapse to inline on scroll.
- **Reserved system gestures — never override:** swipe-from-left-edge (back), swipe-down on a modal (dismiss), pull-down on a list (refresh), swipe-left on a row (actions), pinch (zoom), long-press (context menu), plus the top-corner Notification/Control Center and bottom home/app-switcher swipes.

## Typography / Dynamic Type

System font = **SF Pro**. Use semantic text styles (`.headline`, `.body`, `.caption`) — never hardcoded `.system(size:)`. Sizes: Large Title 34pt Bold · Title/Body 17pt · Caption 12–13pt · secondary text 15pt @ 60% · tab labels 10pt. **Minimum 11pt** (captions only); prefer 17pt body; line height ≥1.3×. Dynamic Type scales text to **~200%** at the largest accessibility sizes; layouts must reflow (switch HStack→VStack via `ViewThatFits`/`AnyLayout`). Prefer weight + color variation over extreme size for hierarchy. Custom fonts must scale via `Font.custom(_:size:relativeTo:)`.

## Color and dark mode

Semantic colors: `Color(.label)`, `.secondaryLabel`, `.systemBackground`, `.separator`; `.systemBlue` = default tint, `.systemRed` = destructive, `.systemGreen` = success. **Three-level background hierarchy:** `systemBackground` (primary) → `secondarySystemBackground` (cards) → `tertiarySystemBackground` (elements within grouped content). Support Display P3; one tint/accent for all interactive elements. Dark mode: accents need **lower brightness + higher saturation** to pop; define custom colors as Any + Dark asset-catalog variants, not in code.

## Components

- Buttons: `.borderedProminent` (primary) · `.bordered` (secondary) · `.borderless` (tertiary/inline) · `role: .destructive` (red).
- Alerts: critical decisions only, prefer 2 buttons, max 3; **destructive button on the LEFT** (less-expected), Cancel on the right. Not for tips (use banner/toast/inline).
- Sheets: `.presentationDetents([.medium, .large])`; always dismissable; Cancel = `.cancellationAction`, confirm = `.confirmationAction`. Never stack modals on modals.
- Lists: `.insetGrouped` default, `.swipeActions`, min row 44pt. Pickers: segmented for 2–5 options, wheel for many.
- **SF Symbols** rendering modes: monochrome / hierarchical / palette / multicolor (don't override multicolor to gray). Match symbol weight to adjacent text; use scale variants, not explicit sizes. Loading = skeleton via `.redacted(reason: .placeholder)`, never a full-screen blocking spinner.

## Motion and haptics

For durations and easing, use the canon in motion.md. Apple **fluid-interface** behavior (respond on touch-down not release, 1:1 tracking, every animation interruptible, springs animating from the current value, velocity handoff, momentum projection) is documented in motion.md — apply it here. **Feedback = visual + haptic;** haptics are design intent: `UIImpactFeedbackGenerator` (`.light/.medium/.heavy`) for physical actions, `UINotificationFeedbackGenerator` (`.success/.warning/.error`) for outcomes, `UISelectionFeedbackGenerator` for state changes. Honor Reduce Motion (crossfade, don't zero).

## Permissions

Request **just-in-time at the action**, never at launch. Show a **custom pre-permission priming screen** *before* the system dialog (the system prompt appears only once); "Maybe Later" avoids triggering a system denial — wait **≥3 days** before re-showing. Usage string = "[App name] [action] to [user benefit]." Offer **Sign in with Apple** first if any third-party sign-in exists. Use **PHPicker** (photos) and **CNContactPicker** (contacts) — no permission required. Request `.whenInUse` before `.always`; request notifications after the user has seen value. After denial, deep-link to Settings.

## iPad adaptivity

**iPad ≠ big iPhone.** Two horizontal size classes: **regular** (full screen / large splits) and **compact** (Slide Over / narrow splits). Must work at Split View **1/3, 1/2, 2/3** widths (1/3 = compact); support Stage Manager (arbitrary resize, multiple scenes) — never assume full screen.

- **Regular width: replace the tab bar with a sidebar** (`TabView(...).tabViewStyle(.sidebarAdaptable)`). Two-column (sidebar + detail) is common; three-column (`NavigationSplitView`) for category > list > detail. Primary column ~320pt default. **Toolbars at the top** (not bottom). The detail view is never empty — show a placeholder with icon + instruction.
- **Pointer/trackpad:** `.hoverEffect(.highlight/.lift)`; right-click context menus.
- **Keyboard:** Cmd shortcuts for all major actions; Cmd-hold shows the shortcut overlay; Tab/Shift+Tab between fields. Never claim Cmd+H, Cmd+Tab, Cmd+Space, Globe.
- **Drag & drop expected** (`.draggable`/`.dropDestination`, spring-loaded targets). Apple Pencil: never disable Scribble. iPad popovers anchor to their source as floating panels — don't make everything a full-screen sheet.

## Mobile-prototype spec

A pin-to-home-screen iPhone prototype (baoyu). Required `<head>`: `viewport width=device-width, initial-scale=1, viewport-fit=cover`; `apple-mobile-web-app-capable=yes`; `mobile-web-app-capable=yes`; `apple-mobile-web-app-status-bar-style=black-translucent`; `apple-mobile-web-app-title`; `apple-touch-icon` + `icon`. App icon **512×512** square, no edge transparency (iOS masks to a rounded square), bold mark readable at 60×60 — avoid photo bg, tiny type, gradient wash. Layout: full-bleed edge-to-edge on phone widths honoring `env(safe-area-inset-*)`; on ≥700px center in a device rectangle **~390×844**, border-radius ~44px, soft shadow. **No fake chrome** — never draw a fake iOS status bar or virtual keyboard; real iOS chrome renders on top and a painted fake looks doubled. Let `env(safe-area-inset-top/bottom)` reserve the room.
