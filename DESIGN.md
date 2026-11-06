---
name: Veylo Digital
description: Blue-hour property marketing for real estate agents and firms in Delhi NCR and Uttarakhand.
colors:
  ground: "#04050a"
  night: "#070b16"
  sky: "#0a1630"
  electric-blue: "#1f7bff"
  arc-blue: "#59a8ff"
  action-blue: "#1463e0"
  silver: "#c9ced6"
  silver-hi: "#eef1f5"
  muted: "#9aa3b2"
  line: "rgb(201 206 214 / 0.14)"
  whatsapp-green: "#1fa855"
typography:
  display:
    fontFamily: "Michroma, Eurostile, sans-serif"
    fontSize: "clamp(2rem, 5.2vw, 4.4rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "0.02em"
  headline:
    fontFamily: "Michroma, Eurostile, sans-serif"
    fontSize: "clamp(1.6rem, 3.4vw, 2.9rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "0.02em"
  title:
    fontFamily: "Michroma, Eurostile, sans-serif"
    fontSize: "clamp(1rem, 1.5vw, 1.2rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "0.08em"
  body:
    fontFamily: "Manrope Variable, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  lede:
    fontFamily: "Manrope Variable, Segoe UI, sans-serif"
    fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Manrope Variable, Segoe UI, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 400
    letterSpacing: "0.12em"
rounded:
  field: "12px"
  frame: "14px"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 4vw, 48px)"
  section: "clamp(88px, 12vw, 168px)"
  container: "1240px"
components:
  button-ghost:
    backgroundColor: "rgb(255 255 255 / 0.03)"
    textColor: "{colors.silver-hi}"
    rounded: "{rounded.pill}"
    padding: "0.95em 1.5em"
  button-ghost-hover:
    backgroundColor: "rgb(31 123 255 / 0.12)"
  button-primary:
    backgroundColor: "{colors.action-blue}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0.95em 1.5em"
  button-primary-hover:
    backgroundColor: "#0f56c8"
  band-form:
    backgroundColor: "rgb(7 11 22 / 0.72)"
    textColor: "{colors.silver-hi}"
    rounded: "{rounded.pill}"
  band-submit:
    backgroundColor: "{colors.action-blue}"
    textColor: "#ffffff"
    typography: "{typography.title}"
    padding: "0 34px 0 30px"
  field:
    backgroundColor: "rgb(4 5 10 / 0.6)"
    textColor: "{colors.silver-hi}"
    rounded: "{rounded.field}"
    padding: "14px 18px"
  chip:
    textColor: "{colors.silver}"
    rounded: "{rounded.pill}"
    padding: "9px 16px"
  chip-selected:
    backgroundColor: "rgb(31 123 255 / 0.18)"
    textColor: "{colors.silver-hi}"
  frame:
    backgroundColor: "{colors.night}"
    rounded: "{rounded.frame}"
  whatsapp-float:
    backgroundColor: "{colors.whatsapp-green}"
    textColor: "#ffffff"
    size: "58px"
---

# Design System: Veylo Digital

## Overview

**Creative North Star: "The Blue-Hour Shoot"**

The site is lit like a property shoot in the twenty minutes after sunset. Every page is a sky that falls from navy at the top to near-black at the ground, with one electric-blue arc, taken from the logo's V swoosh, sweeping behind the headline and carrying the eye from section to section. Silver wide-tracked capitals are the wall lettering on the building. The body copy is a quiet, legible sans.

Density is low and cinematic: tall sections, large renders, and hairline rules in place of boxes. Light in the world comes from three sources only: the sky gradient, the arc, and lit windows in the imagery. The build rejects the category default of a flat black page with neon glow and a grid of icon cards.

**Key Characteristics:**
- Navy-to-black vertical sky on every hero; dark scheme only.
- One tapered blue arc per section that uses it, always decorative and behind content.
- Silver uppercase Michroma display over Manrope body.
- Hairline dividers and list rows instead of cards.
- Pill shapes for actions, 14px corners for media.
- Scroll-driven motion in CSS only, static under reduced motion.

## Colors

A night palette: three depths of dark blue-black, one electric blue in three strengths, and silver for text.

### Primary
- **Electric Blue** (`electric-blue`): the arc's core, the step-line gradient, and the consent checkbox accent. The brand's own swoosh color.
- **Arc Blue** (`arc-blue`): the lit end of the arc, and the color for every interactive accent on dark: icons, h3s in the audience split, link hover, focus rings, and selected borders.
- **Action Blue** (`action-blue`): the fill for the primary button and the band-form submit block. It is deeper than Electric Blue so white label text holds contrast.

### Neutral
- **Ground** (`ground`): the page background and the bottom of every sky gradient.
- **Night** (`night`): raised dark surfaces such as the close section, the mobile nav panel, media frames, and select options.
- **Sky** (`sky`): the top of the hero and page-hero gradients only.
- **Silver** (`silver`): body text.
- **Silver Hi** (`silver-hi`): headings, strong text, input values, and ghost-button labels.
- **Muted** (`muted`): field labels, captions, secondary list text, and footer base text.
- **Line** (`line`): every hairline divider and resting border.

### Tertiary
- **WhatsApp Green** (`whatsapp-green`): only on the floating WhatsApp button, because that is the platform's recognizable color. It appears nowhere else.

### Named Rules
**The Blue-Hour Sky Rule.** Each top-of-page hero is a vertical gradient from Sky to Ground (the home hero passes through Night at 55%). Never a flat black hero.

**The Light Sources Rule.** Blue light only enters a page through the arc, a blue gradient wash (the close section's radial at 22% alpha, the service-row hover sweep), or lit windows in the imagery. Text and boxes never glow.

## Typography

**Display Font:** Michroma (with Eurostile, sans-serif)
**Body Font:** Manrope Variable (with Segoe UI, sans-serif)

**Character:** Michroma is wide, architectural lettering, set in silver capitals like signage on a tower. Manrope keeps long reading calm and legible on phones.

### Hierarchy
- **Display** (400, clamp(2rem, 5.2vw, 4.4rem), 1.12, uppercase): page h1. The home hero uses a reduced clamp(1.75rem, 3.8vw, 3.5rem) across three stacked lines so it clears the tower.
- **Headline** (400, clamp(1.6rem, 3.4vw, 2.9rem), 1.12, uppercase): section h2s, balanced wrap.
- **Title** (400, clamp(1rem, 1.5vw, 1.2rem), 0.08em tracking, uppercase): h3 and `.h3` subheads. The process step names scale up to clamp(1.4rem, 2.4vw, 2rem) at 0.18em.
- **Body** (400, 1.0625rem, 1.65): paragraphs, max 64ch, pretty wrap. Strong text is 600 in Silver Hi.
- **Lede** (clamp(1.1rem, 1.6vw, 1.3rem)): one intro paragraph under a page or section heading, 46–48ch in heroes.
- **Label** (0.72–0.75rem, 0.12em tracking, uppercase, Muted): field labels, figure captions, and the "Sample" render label.

### Named Rules
**The Wall Lettering Rule.** Michroma is always uppercase at weight 400, and its tracking widens as size falls: 0.02em for h1/h2, 0.08em for h3, and 0.32em for the wordmark and the "Build · Grow · Scale" motto. Never set it in sentence case or bold.

## Layout

The container is 1240px wide, with a fluid gutter (`spacing.gutter`) and generous fluid section padding (`spacing.section`). Sections that follow a related section drop their top padding so they read as one sequence. Two-column splits (1.1fr / 1fr) keep the h2 sticky at 48px while the content scrolls. Service and media splits keep the figure sticky. The work reel is an asymmetric 1.4fr / 1fr grid with the lead frame spanning two rows. Content is organized as ruled lists (services, areas, FAQ, points) rather than card grids. The single main breakpoint is 860px, where everything collapses to one column, the nav becomes a menu panel, and the band form stacks. Area rows also reflow at 700px.

## Elevation & Depth

The system is flat and lit, not stacked. Depth comes from layering imagery under masks, the sky gradient, and translucent dark glass with backdrop blur (the band form and mobile menu). Shadows are limited to soft, diffuse drop shadows under floating actions and text shadows that keep nav and hero type legible over imagery.

### Shadow Vocabulary
- **Action lift** (`box-shadow: 0 12px 28px -12px rgb(0 0 0 / 0.9)`): the primary button.
- **Float** (`box-shadow: 0 12px 30px -8px rgb(0 0 0 / 0.7)`): the fixed WhatsApp button.
- **Legibility halo** (`text-shadow: 0 2px 24px rgb(4 5 10 / 0.6)`): the hero h1 over the render. Nav links use `0 1px 10px rgb(4 5 10 / 0.9)`.

## Shapes

There are three corner families. Pill shapes (999px) are for actions, chips, and the band form. Gently rounded corners (14px) are for media frames and stacked panels, with 12px for form fields. Circles are used for the WhatsApp float and the process-step nodes. Borders are 1px hairlines in Line, and they brighten to Arc Blue on hover or focus. The signature silhouette is the arc: a tapered crescent (Arc.astro), filled with a gradient that fades from transparent deep blue to pale ice blue at its tip.

## Components

### Buttons
- **Shape:** full pill (999px), 600 Manrope at 0.95rem, with a trailing or leading 1.5px line icon.
- **Ghost (default):** near-transparent fill, Line border, Silver Hi label. On hover, the border turns Arc Blue and the fill becomes a 12% blue tint.
- **Primary:** Action Blue fill with a white label and an action-lift shadow. On hover it darkens to #0f56c8 and lifts 1px. Use one per view: the nav "Book a growth call" or the form submit.
- **Focus:** a 2px Arc Blue outline at 3px offset, used site-wide.

### Band Form (signature)
- Adapted from the brand graphic's bottom bar: a pill of dark glass (72% Night, 10px blur, 28% silver border), divided into label cells by Line hairlines. Each cell has a Muted caps label above a borderless input.
- The submit is a flush corner block with a 115° Action Blue to #0d4fc4 gradient, white Michroma caps, and an arrow. On hover it brightens by 1.1.
- Focused cells tint 8% blue. Below 860px the pill becomes a 14px-radius stack.

### Inputs / Fields
- **Style:** 12px-radius box, 20% silver border, 60% Ground fill, and a Muted caps label above 500-weight Silver Hi input text.
- **Focus:** the border shifts to Arc Blue. The input itself has no outline because the field carries the focus state.

### Chips
- Pill-shaped multi-select service options with a Line border. When checked they take an 18% blue fill, an Arc Blue border, and Silver Hi text.

### Cards / Containers
- **Frames:** 14px radius, Line border, Night fill, and clipped imagery. Captions overlay the bottom on a gradient to 88% Ground.
- No content cards. Grouped content uses ruled rows instead.

### Ruled Rows (services, areas, FAQ, points)
- Each row has a 1px Line top border. Service rows have a 34px line icon, a title, a Muted line, and an arrow. On hover the row indents 14px, a blue sweep fades in from the left, and the arrow nudges 6px. Area rows set the name in large Michroma, which turns Arc Blue on hover. FAQ rows rotate a plus icon 45° when open. Point lists use a 16px blue hairline as the bullet.

### Navigation
- The header sits absolutely over the hero. It holds the V mark with the wide-tracked VEYLO / DIGITAL wordmark, Silver links that turn Silver Hi with an Arc Blue underline on hover or when current, and a primary pill. Below 860px a ghost "Menu" pill opens a Night panel with a 14px radius, using a CSS-only checkbox toggle.

### Arc
- A decorative SVG swoosh, aria-hidden, placed behind content (z-index −1 or −2). It sits in the hero, the page hero (75% opacity), the gallery (50%), and the close section (55%). Its opacity drops on mobile.

### Icons
- One family on a 24px grid: 1.5px stroke, round caps and joins, `currentColor`, usually Arc Blue. They are inline SVG only.

### Motion
- Easing is `cubic-bezier(0.16, 1, 0.3, 1)` with 0.3–0.4s transitions. The signature motion is **Lights on**: the hero tower crossfades from the dusk render to the lit render over the first 55vh of scroll. Sections rise 28px on view. Both use CSS scroll timelines with no JS, and frames are static under reduced motion and in browsers without support.

### Imagery & Assets
- The renders in `src/assets/renders/` are three.js sample renders that we authored. Each one is labelled "Sample" on the site until the owner supplies real footage.
- `public/brand/` holds the owner's original logo and About Us graphic.
- Every raster under `src/assets/` and `public/` carries its origin as an embedded PNG tEXt chunk (`impeccable embed-prompt`). `embed-prompt --scan src/assets public` reports 0 missing. New rasters must be embedded before they ship.

## Do's and Don'ts

### Do:
- **Do** start every hero with the Sky to Ground gradient and at most one arc behind the headline.
- **Do** use Arc Blue for interactive accents and Action Blue only for filled primary actions with white text.
- **Do** set headings in uppercase Michroma 400 with the tracking ladder from the Wall Lettering Rule.
- **Do** group content as ruled rows with 1px Line dividers.
- **Do** label every demonstration render "Sample" and embed provenance in every shipped raster.
- **Do** keep motion in CSS scroll timelines with a static fallback.

### Don't:
- **Don't** add glowing box-shadows or neon text glow. Blue light comes only from the arc, gradient washes, and lit windows.
- **Don't** lay out services or features as a grid of icon cards.
- **Don't** use WhatsApp Green anywhere except the floating WhatsApp button.
- **Don't** add light themes or light surfaces. The scheme is dark only.
- **Don't** use filled or multi-weight icons, icon fonts, or emoji. Use the 1.5px line family only.
