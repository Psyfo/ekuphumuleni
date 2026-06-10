# Brand Guidelines for Ekuphumuleni

## Table of Contents

- Brand Overview
- Logo
- Color Palette
- Typography
- Design System
- Imagery
- Voice and Tone
- Applications

## 1. Brand Overview

### About Ekuphumuleni

Ekuphumuleni is a name derived from African languages meaning "place of rest" or "place of restoration." Our brand represents comfort, care, and rejuvenation in all the services we provide.

### Contact Information

**Address:**
Old Falls Rd
Bulawayo, Zimbabwe

**Phone:**
+263 292 216 877

**Email:**
administration@ekuphumuleni.ngo

### Mission Statement

To provide stable, well‑run residential nursing environments where people receive appropriate care, rest, and support.

### Brand Values

- **Compassion:** We approach every interaction with genuine care and empathy
- **Tranquility:** We create peaceful environments that promote restoration
- **Reliability:** We deliver consistent, dependable care that builds trust
- **Cultural sensitivity:** We honor diverse backgrounds and traditions
- **Excellence:** We strive for the highest quality in all our services

## 2. Logo

### Primary Logo

The Ekuphumuleni logo embodies our commitment to providing a peaceful sanctuary. The logo should always be reproduced according to these guidelines and never altered or distorted.

### Logo Variations

- **Full Color:** Use on white or light backgrounds
- **Reversed:** White version for use on dark backgrounds
- **Monochrome:** Black version for single-color applications

### Clear Space

Maintain a clear space around the logo equal to the height of the "E" in Ekuphumuleni to ensure visibility and impact.

### Minimum Size

To maintain legibility, never reproduce the logo smaller than 1 inch or 25mm in width for print, or 100 pixels for digital applications.

## 3. Color Palette

### Primary Colors

**Warm Beige (#F2E8CF):** Our main neutral tone, used for backgrounds and large areas to create a warm, inviting atmosphere.

**Earth Brown (#A68A64):** A grounding element of our visual identity, used for borders, decorative details, and as a logo accent. Earth Brown does not meet accessibility contrast requirements as a text color on our light backgrounds (≈2.7:1 on Warm Beige), so it must not be used for headings or body text.

**Deep Cocoa (#6B4F4F):** Our primary text and heading color, also used for footers and navigation elements (≈6:1 contrast on Warm Beige).

### Secondary Colors

**Soft Sand (#D9C6A5):** Used for secondary backgrounds and subtle sectioning of content.

**Off-White (#EDE6E3):** Used for cards, highlights, and to create balance in layouts.

### Accent Colors

**Muted Terracotta (#C97C5D):** Our vibrant accent color, used sparingly for decorative elements — divider bars, icons, hover glows, and accents on dark backgrounds. It does not meet the 4.5:1 contrast requirement with white text, so it must not be used as a button or link surface.

**Deep Terracotta (#B05A3C):** The accessible counterpart to Muted Terracotta (4.8:1 with white text), used for buttons, links, and calls-to-action.

**Dark Terracotta (#9C4F35):** Hover states and gradient ends for Deep Terracotta surfaces.

### Feedback Colors

Form validation and status feedback stay inside the palette rather than using stock red/green:

**Error (#B3563B):** A terracotta-leaning red (≈4.9:1 on white) for validation errors and failure states.

**Success (#5C7A4A):** An olive-toned green (≈4.9:1 on white) for confirmation and success states.

### Color Usage

Our earthy, warm palette evokes feelings of comfort, stability, and natural healing. Always maintain appropriate contrast ratios for accessibility, particularly between text and background colors.

## 4. Typography

### Primary Typeface

**Headings:** Playfair - A warm serif typeface that conveys tradition and reliability

**Body Text:** Nunito - A clean, highly readable sans-serif font for all body copy

### Font Hierarchy

The scale is fluid: each step uses CSS `clamp()` to size smoothly between a mobile minimum and a desktop maximum, so components never need per-breakpoint size overrides.

**Display:** 48px → 72px (`clamp(3rem, 2.25rem + 3vw, 4.5rem)`), Deep Cocoa, Bold — reserved for the home hero title

**H1:** 36px → 60px (`clamp(2.25rem, 1.5rem + 2.5vw, 3.75rem)`), Deep Cocoa (#6B4F4F), Bold

**H2:** 30px → 36px (`clamp(1.875rem, 1.6rem + 0.9vw, 2.25rem)`), Deep Cocoa (#6B4F4F), Bold

**H3:** 20px → 24px (`clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)`), Deep Cocoa (#6B4F4F), Bold

**Body:** 17px/1.0625rem, line-height 1.625, Deep Cocoa (#6B4F4F), Regular — generous sizing for older readers

**Small/Caption:** 14px/0.875rem, Deep Cocoa (#6B4F4F), Regular

## 5. Design System

### Elevation & Shadows

Our shadow system creates subtle depth while maintaining a warm, approachable aesthetic. Shadows should feel soft and natural, never harsh or heavy.

**Shadow Scale:**

- **sm:** Subtle lift for interactive elements - `0 1px 2px 0 rgba(107, 79, 79, 0.05)`
- **md:** Standard card elevation - `0 4px 6px -1px rgba(107, 79, 79, 0.08), 0 2px 4px -1px rgba(107, 79, 79, 0.04)`
- **lg:** Prominent elements, modals - `0 10px 15px -3px rgba(107, 79, 79, 0.1), 0 4px 6px -2px rgba(107, 79, 79, 0.05)`
- **xl:** Floating elements, dropdowns - `0 20px 25px -5px rgba(107, 79, 79, 0.12), 0 10px 10px -5px rgba(107, 79, 79, 0.04)`

**Usage Guidelines:**

- Use shadows sparingly to maintain visual hierarchy
- Increase shadow on hover for interactive elements
- Keep shadows warm using Deep Cocoa (#6B4F4F) at low opacity

### Borders & Outlines

Borders provide structure and definition without creating harsh visual breaks.

**Border Styles:**

- **Subtle:** `1px solid rgba(166, 138, 100, 0.15)` - For card dividers and subtle separations
- **Standard:** `1px solid rgba(166, 138, 100, 0.25)` - For input fields and standard containers
- **Emphasis:** `2px solid rgba(166, 138, 100, 0.4)` - For focus states and active elements
- **Accent:** `2px solid #C97C5D` - For highlighted or selected states

**Border Radius:**

- **sm:** 6px - Small elements, tags
- **md:** 8px - Buttons, inputs
- **lg:** 12px - Cards, containers
- **xl:** 16px - Large containers, hero sections

### Spacing Scale

Consistent spacing creates visual rhythm and improves readability.

**Scale (in pixels / rem):**

- **xs:** 4px / 0.25rem
- **sm:** 8px / 0.5rem
- **md:** 16px / 1rem
- **lg:** 24px / 1.5rem
- **xl:** 32px / 2rem
- **2xl:** 48px / 3rem
- **3xl:** 64px / 4rem
- **4xl:** 96px / 6rem

**Section Spacing:**

- Vertical padding between sections: 64px (4rem) minimum
- Container max-width: 1280px (80rem)
- Container horizontal padding: 16px (1rem) on mobile, 24px (1.5rem) on desktop

### Section Rhythm

Long pages alternate warm neutrals (Warm Beige, Off-White, Soft Sand) but must not flow entirely through mid-tones — adjacent neutrals sit at low contrast and sections blur together.

- Anchor each long page with **one Deep Cocoa band** roughly two-thirds down (e.g. the donors band on the home page), styled like the footer: Off-White serif headings, terracotta divider, soft warm glows, and an on-dark (Warm Beige) button
- The footer is always Deep Cocoa, closing every page on the dark anchor
- Section headers use the canonical pattern — serif title, 64px terracotta divider bar, optional lede — via the shared `SectionHeading` component

### Interactive States

Consistent interactive feedback creates a cohesive user experience.

**Button System:**

All buttons use one system (`.btn` plus a tone variant) rather than bespoke styles:

- **Primary** (`.btn-primary`): Deep Terracotta surface, white text — the main action on light backgrounds
- **Secondary** (`.btn-secondary`): Translucent white surface, Deep Cocoa text, Earth Brown border — supporting actions
- **On dark** (`.btn-on-dark`): Warm Beige surface, Deep Cocoa text — actions inside Deep Cocoa bands and the footer
- **Small** (`.btn-sm`): Reduced padding for navigation and compact contexts

**Button States:**

- **Default:** Solid color with subtle shadow
- **Hover:** Subtle lift (translateY -1 to -2px) with increased shadow, or subtle opacity change (0.9). Avoid scale effects — they feel jumpy for our audience.
- **Active/Pressed:** Return to rest position (translateY 0), reduced shadow
- **Focus:** 2px ring with accent color, 2px offset
- **Disabled:** 50% opacity, no hover effects, cursor not-allowed

**Link States:**

- **Default:** Accent color with medium font weight
- **Hover:** Underline with 4px offset
- **Visited:** Same as default (maintain consistency)
- **Focus:** Outline ring in accent color

### Gradients

Subtle gradients can add depth and visual interest while maintaining brand warmth.

**Background Gradients:**

- **Warm Fade:** Linear gradient from Warm Beige to Soft Sand (top to bottom)
- **Subtle Overlay:** Radial gradient with Off-White center fading to transparent
- **Accent Highlight:** Linear gradient with Muted Terracotta at low opacity (10-20%)

**Usage:**

- Apply gradients subtly to maintain readability
- Use for hero sections or large background areas
- Combine with solid backgrounds for depth

### Transitions

Smooth transitions enhance user experience without causing distraction.

**Timing Functions:**

- **ease-out:** Default for most transitions (entering elements)
- **ease-in-out:** For reversible states (hover, toggle)
- **ease-in:** For exiting elements

**Duration:**

- **Fast:** 150ms - Color changes, opacity
- **Medium:** 250-300ms - Transform, scale, position
- **Slow:** 500-700ms - Page transitions, complex animations

**Properties to Animate:**

- **Recommended:** opacity, transform, color, background-color, box-shadow
- **Avoid:** width, height, margin, padding (causes layout shifts)

**Entrance Animations:**

- Above-the-fold (hero) content must never wait for JavaScript to become visible — use CSS-only entrance animations that run at first paint
- Always respect the user's `prefers-reduced-motion` setting

### Iconography Standards

Icons create visual landmarks and improve scanability.

**Icon Style:**

- Use outline/stroke style icons (not filled)
- Maintain consistent stroke width (1.5-2px)
- Use rounded line caps and joins
- Size: 20px (sm), 24px (md), 32px (lg), 40px (xl)

**Icon Colors:**

- Feature icons: Muted Terracotta (#C97C5D) on a tinted chip (terracotta/earth-brown at 10–15% opacity)
- Icons on dark backgrounds: Muted Terracotta — the lighter shade is the accessible direction on Deep Cocoa
- Decorative icons: Deep Cocoa at 40% opacity

**Icon Usage:**

- Pair icons with text labels for clarity
- Ensure adequate touch target size (44px minimum)
- Maintain consistent positioning (left-aligned or centered)

## 6. Imagery

### Photography Style

Images should feel warm, natural, and comforting. Use soft natural lighting and avoid harsh contrasts. Subject matter should reflect care, community, and serenity.

### Image Treatment

All content photography passes through one warm grade (the `.img-warm` utility — `saturate(0.88) sepia(0.10) contrast(0.97) brightness(1.03)`) so mixed-quality photos read as a curated set. Logos, icons, and maps are never graded.

- **Hero photography** sits under a Warm Beige wash: near-solid on small screens for text readability, easing toward transparent on larger screens so the photo breathes
- **Missing portraits** never show an empty box: render serif initials in Deep Terracotta on a warm tinted circle (honorifics stripped — "Ms G N Mahlangu" → "GN")
- Avoid overly saturated or cool-toned imagery at the source; the grade softens but cannot rescue clashing casts

### Iconography

Use simple, outlined icons with rounded corners for a soft, approachable feel. Icons should be consistent in style and weight throughout all materials.

## 7. Voice and Tone

### Brand Voice

Our communication style is:

- **Warm:** Friendly and approachable without exaggeration
- **Clear:** Direct and easy to understand
- **Grounded:** Focused on facts, services, and outcomes
- **Respectful:** Honoring dignity and cultural sensitivity
- **Confident:** Knowledgeable without being technical or cold

### Tone Considerations

While our voice remains consistent, our tone may adjust depending on the context:

- **Informational content:** Clear, helpful, and straightforward
- **Crisis situations:** Calm, concise, and directive
- **Marketing materials:** Warm, inviting, and specific about services
- **Community outreach:** Inclusive, engaging, and conversational

## 8. Applications

### Stationery

Business cards, letterheads, and envelopes should use our color palette consistently, with the logo prominently displayed according to clear space guidelines.

### Digital Presence

Websites and social media should maintain our warm, earthy palette, with Deep Terracotta (#B05A3C) used for interactive elements such as buttons and links, and Muted Terracotta reserved for decorative accents. Typography hierarchy should be consistent across all platforms.

### Environmental Design

Physical spaces should embody our brand colors through furnishings, wall colors, and decor. Signage should be clear and consistent with our typography guidelines.

### Marketing Materials

Brochures, flyers, and advertisements should balance our color palette effectively, with ample white space for readability. Imagery should follow our photography guidelines.

### Do's and Don'ts

- **Do:** Maintain consistent color usage across all materials
- **Don't:** Stretch or distort the logo
- **Do:** Use approved typography for all communications
- **Don't:** Use clashing colors outside our palette
- **Do:** Ensure all materials reflect our brand values
- **Don't:** Use imagery that feels clinical or institutional
