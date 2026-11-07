---
name: Veylo Media
description: A premium tower lobby for real estate marketing in Delhi NCR and Uttarakhand.
colors:
  stone: "#07080b"
  slab: "#0e1015"
  slab-hi: "#151820"
  steel: "rgb(196 202 212 / 0.16)"
  steel-hi: "rgb(196 202 212 / 0.34)"
  silver: "#c3c8d0"
  silver-hi: "#e9ecf1"
  muted: "#9198a5"
  signal-blue: "#1f7bff"
  signal-blue-hi: "#6aafff"
  call-plate-blue: "#1463e0"
  call-plate-pressed: "#0f56c8"
typography:
  display:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.4rem, 5vw, 5rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3.6rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.15rem, 1.6vw, 1.35rem)"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 112"
  numeral:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "2rem"
    fontWeight: 300
    lineHeight: 1
    fontFeature: "'tnum'"
    fontVariation: "'wdth' 125"
  lede:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.125rem, 1.5vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0.08em"
    fontVariation: "'wdth' 112"
  button:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.98rem"
    fontWeight: 600
    lineHeight: 1
    fontVariation: "'wdth' 106"
rounded:
  plate: "4px"
  inset: "2px"
spacing:
  gutter: "clamp(16px, 4vw, 48px)"
  section: "clamp(80px, 10vw, 144px)"
  wrap: "1240px"
  stack-sm: "12px"
  stack-md: "16px"
  stack-lg: "48px"
components:
  button-plate:
    backgroundColor: "{colors.slab}"
    textColor: "{colors.silver-hi}"
    typography: "{typography.button}"
    rounded: "{rounded.plate}"
    padding: "0.95em 1.4em"
  button-plate-hover:
    backgroundColor: "{colors.slab-hi}"
  button-plate-active:
    backgroundColor: "{colors.call-plate-blue}"
    textColor: "#ffffff"
  button-call:
    backgroundColor: "{colors.call-plate-blue}"
    textColor: "#ffffff"
    typography: "{typography.button}"
    rounded: "{rounded.plate}"
    padding: "0.95em 1.4em"
  button-call-hover:
    backgroundColor: "{colors.call-plate-pressed}"
  field:
    backgroundColor: "{colors.stone}"
    textColor: "{colors.silver-hi}"
    rounded: "{rounded.plate}"
    padding: "12px 16px"
  band-form:
    backgroundColor: "{colors.slab}"
    textColor: "{colors.silver-hi}"
    rounded: "{rounded.plate}"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.silver}"
    rounded: "{rounded.plate}"
    padding: "9px 14px"
  chip-checked:
    backgroundColor: "{colors.call-plate-blue}"
    textColor: "#ffffff"
  slab-card:
    backgroundColor: "{colors.slab}"
    textColor: "{colors.silver}"
    rounded: "{rounded.plate}"
    padding: "clamp(24px, 3vw, 36px)"
  directory-board:
    backgroundColor: "{colors.slab}"
    textColor: "{colors.silver}"
    rounded: "{rounded.plate}"
    padding: "clamp(8px, 1.5vw, 16px) clamp(16px, 3vw, 40px)"
  display-frame:
    backgroundColor: "{colors.slab}"
    rounded: "{rounded.plate}"
    padding: "6px"
  lift-indicator:
    backgroundColor: "#030405"
    textColor: "{colors.signal-blue-hi}"
    typography: "{typography.numeral}"
    rounded: "{rounded.plate}"
    padding: "7px 10px"
---

# Design System: Veylo Media

## Overview

**Creative North Star: "The Tower Lobby"**

The site is the ground-floor lobby of a premium residential tower: a black stone wall, slightly lighter slabs set into it, steel hairline joints between them, brushed-silver lettering, and a single kind of light, the blue of a lift indicator and a lit call button. Every page is a room in the same lobby. Services are read off a directory board as floors; areas are read off a destination board; renders hang as framed display panels with a caption plate.

Density is calm and architectural: generous section padding, one wrap width, and content held on slabs rather than floating on the wall. Depth comes from tone (stone, slab, slab-hi) and hairlines, never shadows. Motion is limited to the lift indicator stepping floors with scroll, colour changes on hover, and a small arrow nudge on board rows.

The world replaced an earlier blue-hour / wide-caps direction. What carries over is only what the owner pinned: black ground, electric blue, silver, and the V mark. The swoosh lives in the logo only; the wall carries no gradients, glows or swooshes.

**Key Characteristics:**
- Black stone ground with slabs joined by 1px steel hairlines.
- Silver lettering in Archivo Variable, mixed case, width as the expressive axis.
- Blue only as a lit signal.
- Flat 4px call-plate buttons that light blue when pressed.
- Directory boards, display frames and a lift indicator as the signature furniture.

## Colors

A near-monochrome stone-and-silver palette with one signal light.

### Primary
- **Signal Blue Lit** (`signal-blue-hi`): the light itself. The lift indicator LED, focus outlines, the inset underline on a focused field, hover state on board rows (floor numeral, arrow, underline) and nav underlines.
- **Call Plate Blue** (`call-plate-blue`): the fill of the one primary action per view (band-form submit, "Book a growth call", the floating WhatsApp plate), the pressed state of every plate, checked chips and filters, and text selection. **Call Plate Pressed** (`call-plate-pressed`) is its hover fill.
- **Signal Blue** (`signal-blue`): the native control accent (consent checkbox `accent-color`).

### Neutral
- **Lobby Stone** (`stone`): page ground, header, field wells, the caption plate on frames.
- **Slab** (`slab`): every raised surface: boards, cards, frames, the band form, the close section, the mobile menu.
- **Lit Slab** (`slab-hi`): hover on plates and the focused cell of the band form.
- **Steel Hairline** (`steel`) and **Bright Steel** (`steel-hi`): 1px joints. `steel` between rows, sections and cells; `steel-hi` as the outer edge of a slab, frame, plate or field.
- **Brushed Silver** (`silver`): body text. **Polished Silver** (`silver-hi`): headings, strong text, input values, plate labels.
- **Engraved Grey** (`muted`): labels, captions, board column heads, footer headings, resting arrows and floor numerals.

### Named Rules
**The Lit Signal Rule.** Blue is light, not paint. It appears on the lift LED, on the primary call plate, on focus, and on hover/active/checked state. Text, backgrounds, rules and illustrations at rest stay stone and silver.

**The One Call Plate Rule.** A view carries one blue-filled plate at rest; every other action is a slab plate that lights only when pressed.

## Typography

**Display Font:** Archivo Variable (with Helvetica Neue, Arial)
**Body Font:** Archivo Variable at normal width
**Label/Mono Font:** none; labels are Archivo at 112% width

**Character:** One family, three widths. Semi-expanded medium weight for lettering on the wall, wide light numerals for floors, normal width for reading. Mixed case throughout.

### Hierarchy
- **Display** (500, 112% width, clamp(2.4rem, 5vw, 5rem), 1.04): page h1; the home h1 breaks into three set lines.
- **Headline** (500, 112% width, clamp(2rem, 4.2vw, 3.6rem), 1.04): section h2. Area names on the destination board use the same face at clamp(1.6rem, 3.6vw, 2.75rem).
- **Title** (500, 112% width, clamp(1.15rem, 1.6vw, 1.35rem), 1.25): h3 on cards, board rows and side-column headings (`.h3`). Process steps scale it up to clamp(1.8rem, 3vw, 2.6rem).
- **Numeral** (300, 125% width, tabular): floor numbers on the directory board (2rem, 1.6rem on mobile) and the lift indicator (1.05rem).
- **Lede** (400, clamp(1.125rem, 1.5vw, 1.3rem), 1.55): one paragraph under a heading, 44 to 52ch.
- **Body** (400, 1.0625rem, 1.65): paragraphs capped at 66ch, balanced headings, pretty-wrapped text.
- **Label** (400, 0.75rem, 112% width, 0.06 to 0.08em, uppercase): form field labels, board column heads, frame captions. Footer column heads use 0.8rem, 600, 0.06em.
- **Button** (600, 0.98rem, 106% width): plate labels.

### Named Rules
**The Width Is the Voice Rule.** Hierarchy is carried by width and size, not by caps or tracking. Headings are mixed case with tight negative tracking (-0.025em); wide tracked caps are reserved for the VEYLO / MEDIA wordmark lockup beside the V mark.

**The Label Is Not a Kicker Rule.** Small uppercase labels name a field, a column or a picture. They never sit above a heading as an eyebrow.

## Layout

A single centred wrap (1240px, minus a fluid gutter on each side) holds every section. Sections are separated by generous fluid padding and a steel hairline between consecutive sections. Two-column splits pair a sticky h2 (top 40px) with content on the right; the hero is 1.5fr text to 0.85fr display panel, aligned to the bottom, with the band form spanning beneath both. Inner page heads use a 1.2fr / 1fr grid with a 4:3 frame.

Spacing inside slabs uses 12 / 16px gaps between siblings and 48px between a heading and its board, reel or steps. At 860px every grid collapses to one column, the hero panel moves above the headline at 16:11, the nav folds into a slab dropdown behind a "Menu" plate, and the band form stacks its cells with hairlines between them. Board rows reflow at 760px and the area board at 700px.

## Elevation & Depth

The system is flat. There are no drop shadows anywhere. Depth is tonal: stone is the wall, slab is a panel set into it, slab-hi is a panel catching light on hover. Edges are drawn by 1px steel hairlines, brighter (`steel-hi`) on a slab's outer edge than between its rows (`steel`). The only `box-shadow` in the system is an inset 2px blue underline on a focused field, which reads as a lit edge, not elevation.

### Named Rules
**The Hairline Joint Rule.** Surfaces meet at 1px steel lines. Never separate them with shadow, gradient or glow.

## Shapes

Rectangles with a uniform 4px corner (`plate`) on every plate, slab, frame, field, chip and the lift indicator; 2px (`inset`) on the image inside a frame and on focus outlines. The frame caption plate rounds only its top-right corner, cut into the frame's bottom-left. Bullet markers in point lists are 8px squares with 1px corners. Icons are a single stroke family: 24px grid, 1.5 stroke, round caps and joins, `currentColor`.

## Components

### Buttons (call plates)
Flat lift call plates: tactile, quiet until pressed.
- **Shape:** 4px corners, 1px `steel-hi` edge, 0.95em by 1.4em padding, optional 1.15em stroke icon before the label.
- **Slab plate (default):** slab fill, polished-silver label. Hover brightens the edge to silver and the fill to slab-hi.
- **Active:** every plate lights: call-plate blue fill, lit-blue edge, white label.
- **Call plate (primary):** call-plate blue fill and edge, white label; hover deepens to call-plate pressed. One per view.
- **Floating WhatsApp plate:** 56px square call plate fixed bottom-right with a lit-blue edge. On the home page it fades and scales in between 60svh and 90svh of root scroll.

### Chips and filters
- **Style:** transparent with a 1px `steel-hi` edge, 4px corners, 9px by 14px; hover brightens the edge to silver.
- **State:** checked fills call-plate blue with white text; focus draws the lit-blue outline. Work-page filters reuse the slab plate with the same checked state.

### Cards / Containers (slabs)
- **Corner Style:** 4px.
- **Background:** slab on stone.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** 1px `steel` for cards, `steel-hi` for boards and frames.
- **Internal Padding:** clamp(24px, 3vw, 36px) for tenant cards.

### Inputs / Fields
- **Band form:** one slab strip with 1px `steel-hi` edge, split into labelled cells (Name, Phone, I am) by `steel` hairlines, ending in a full-height call-plate submit with the label left and arrow right. The focused cell lights to slab-hi with a 2px lit-blue inset underline. Stacks below 860px.
- **Full form field:** stone well, 1px `steel-hi` edge, 4px corners, 12px by 16px; uppercase label over a transparent 500-weight polished-silver input. Focus turns the edge lit-blue and adds the inset underline.
- **Consent:** native checkbox tinted signal blue, muted 0.9rem text.

### Navigation
- **Header:** sticky, stone fill, steel hairline beneath. V mark plus the wide-tracked VEYLO / MEDIA wordmark at left, then the lift indicator, then silver nav links and one call plate.
- **States:** hover and current page turn the link polished silver with a 1px lit-blue underline.
- **Mobile:** a slab "Menu" plate toggles a slab dropdown (CSS only, `:has()` on a checkbox).

### Lift Indicator (signature)
A small dark well (4px corners, `steel` edge) in the header holding an up-arrow and a floor numeral in lit blue, wide light tabular figures. The floor is a registered integer property rendered through a fixed counter style (G, 1 to 7).
- **Scroll-stepped floors:** on any page without a fixed floor, each `main` section after the first is a floor. Each publishes a view timeline, `body` scopes them, and the numeral steps to that floor as the section enters (entry 60% to 100%), holding with forwards fill. The animation name/fill and the timeline/range are declared in two separate rules so the CSS minifier cannot fold `animation-timeline` into the `animation` shorthand; keep them separate.
- **Static floor:** service pages pass their order as an inline `--floor-at`, which disables the scroll stepping and pins that floor.
- **Reduced motion and no support:** the stepping exists only inside `@supports (animation-timeline: view())` and `prefers-reduced-motion: no-preference`; otherwise the indicator rests at G (or the page's fixed floor).

### Directory Board
The services list as floors. A slab with `steel-hi` edge; a muted label row (Floor, Service, What you get) then rows joined by `steel` hairlines. Each row is a link: wide light numeral, title, one-line description, arrow. Hover lights the numeral and arrow blue, nudges the arrow 5px right on the expo-out ease, and underlines the title in lit blue.

### Destination Board
The areas list. Same slab; each row sets the area name in headline-face silver beside its line and an arrow, with the same blue hover lighting and nudge.

### Display Frame
A framed screen on the wall: slab with `steel-hi` edge and 6px mat around a 2px-rounded cover image. A stone caption plate sits in the bottom-left corner with an uppercase label reading "Sample render" or "Sample · <subject>". Every demonstration image carries this caption.

### Process Steps and Point Lists
Steps sit in three columns under a `steel-hi` top rule, divided by `steel` verticals; they stack with hairlines on mobile. Point lists are rows separated by `steel` hairlines with a small square marker.

## Do's and Don'ts

### Do:
- **Do** build every surface from stone, slab and 1px steel hairlines, with `steel-hi` on a slab's outer edge.
- **Do** set headings in Archivo at 112% width, weight 500, mixed case, -0.025em; set numbers at 125% width, weight 300, tabular.
- **Do** keep one call-plate-blue action per view; every other action is a slab plate that lights blue on `:active`.
- **Do** show demonstration imagery only inside a display frame with a "Sample" caption plate.
- **Do** present lists of services or places as boards on a slab with hairline rows, not as card grids.
- **Do** gate any scroll-driven motion behind `@supports` and `prefers-reduced-motion: no-preference`, with a meaningful static state.

### Don't:
- **Don't** use blue as decoration, body colour or background at rest; it is the lit signal only.
- **Don't** add drop shadows, gradients, glows or swooshes to the wall; the swoosh lives only in the logo.
- **Don't** set headings in wide tracked caps; that treatment belongs to the wordmark alone.
- **Don't** put uppercase labels above headings as kickers or eyebrows.
- **Don't** round corners beyond 4px.
- **Don't** merge the lift indicator's `animation-timeline` back into the `animation` shorthand rule.
