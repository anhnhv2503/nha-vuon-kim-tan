# Design System Inspired by Caffinity

## 1. Visual Theme & Atmosphere

Caffinity embodies a warm, artisanal spice and exotic fruit aesthetic grounded in rich golds, deep blacks, creamy neutrals, and vibrant accent warmth. The design balances sophisticated minimalism with organic charm—think of curated specialty shops where prized durians, fragrant peppercorns, and liquid gold honey meet clean, contemporary typography. Deep amber and burgundy tones evoke the sensory richness and luxury of premium spices and exotic produce, while cream and off-white backgrounds provide breathing room and elegance. The visual language is intentionally understated yet memorable, celebrating the craftsmanship of rare ingredients through material textures and thoughtful spatial hierarchy rather than visual noise.

**Key Characteristics**

- Warm, earthy color palette dominated by deep golds, blacks, and creams
- Minimalist layout with strategic use of whitespace
- Organic imagery of durians, pepper berries, honeycomb, and artisanal ingredients
- Bold, confident typography for headers and CTAs
- Subtle shadows and depth for visual hierarchy
- Clean, contemporary aesthetic with luxury and heritage undertones
- Focus on high-contrast text for readability and impact

## 2. Color Palette & Roles

### Primary

- **Coffee Brown** (`#4C2004`): Primary brand color used for headings, deep text, and brand identity elements. Conveys richness and coffee expertise.
- **Clay/Terracotta** (`#B6744A`): Secondary primary used for supporting UI elements, containers, and complementary brand touchpoints.

### Accent Colors

- **Burnt Orange** (`#E76B25`): High-energy call-to-action buttons and interactive highlights. Creates urgency and draws attention to key actions.

### Interactive

- **Button Primary** (`#E76B25`): Background for primary action buttons with white text overlay.
- **Button Secondary** (`#F3E7D3`): Soft cream background for secondary or ghost button variants.
- **Link Text** (`#000000`): Navigation links and inline text links in high contrast black.

### Neutral Scale

- **Pure Black** (`#000000`): Text, borders, icons, and strong contrast elements. Primary text color for body copy and navigation.
- **Pure White** (`#FFFFFF`): Button text overlays and minimal accent highlights.

### Surface & Borders

- **Cream Primary** (`#F3E7D3`): Navigation bar background and subtle surface containers. Creates soft, warm backdrop for content.
- **Cream Secondary** (`#F5E9D5`): Variant cream for secondary surface areas and card backgrounds.

## 3. Typography Rules

### Font Family

**Primary:** `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
**Secondary:** `Arial, sans-serif`
**Fallback Stack:** `sans-serif`

### Hierarchy

| Role          | Font          | Size      | Weight | Line Height | Letter Spacing | Notes                            |
| ------------- | ------------- | --------- | ------ | ----------- | -------------- | -------------------------------- |
| Display/H1    | -apple-system | 51.2px    | 800    | 46.08px     | 0px            | Hero headlines, page titles      |
| Heading/H2    | -apple-system | 24px      | 900    | 24px        | 0px            | Section headings, prominent text |
| Subheading/H3 | -apple-system | 18px      | 800    | 18px        | 0px            | Secondary headings, emphasis     |
| Body          | -apple-system | 16px      | 400    | 24px        | 0px            | Primary body text, descriptions  |
| Body Small    | Arial         | 13.3333px | 400    | 13.3333px   | 0px            | Secondary information, captions  |
| Button        | Arial         | 18px      | 800    | 18px        | 0px            | Call-to-action button labels     |
| Link          | -apple-system | 16px      | 500    | 16px        | 0px            | Navigation links, inline links   |
| List Item     | -apple-system | 16px      | 400    | 16px        | 0px            | Bulleted and numbered lists      |

### Principles

- Use `-apple-system` as primary font family for superior readability and native OS integration on all platforms
- Weight 800–900 reserved for headings to establish clear visual hierarchy
- Body text defaults to weight 400 for optimal legibility at smaller sizes
- Line height matches or slightly exceeds font size for comfortable reading rhythm
- All button text uses weight 800 to signal interactivity and importance
- Links use weight 500 for subtle emphasis without overwhelming body text
- Maintain consistent 24px line height on body text for rhythm and accessibility

## 4. Component Stylings

### Buttons

#### Primary Button

- **Background:** `#E76B25`
- **Text Color:** `#FFFFFF`
- **Font Size:** `18px`
- **Font Weight:** `800`
- **Font Family:** `Arial`
- **Padding:** `9.6px`
- **Border Radius:** `0px`
- **Border:** `none`
- **Box Shadow:** `none`
- **Height:** `43.1875px`
- **Width:** `400px` (or responsive)
- **Line Height:** `normal`
- **Hover State:** Background `#D45A1A` (darken by 10%), cursor pointer
- **Active State:** Background `#C2501A`, slight inset shadow `inset 0px 2px 4px rgba(0, 0, 0, 0.2)`

#### Secondary Button

- **Background:** `#F3E7D3`
- **Text Color:** `#000000`
- **Font Size:** `16px`
- **Font Weight:** `600`
- **Font Family:** `-apple-system`
- **Padding:** `12px 24px`
- **Border Radius:** `0px`
- **Border:** `1px solid #B6744A`
- **Box Shadow:** `none`
- **Height:** `auto`
- **Width:** `auto`
- **Line Height:** `normal`
- **Hover State:** Background `#E8DAC4`, border color `#8B5A35`

#### Ghost Button

- **Background:** `transparent`
- **Text Color:** `#000000`
- **Font Size:** `13.3333px`
- **Font Weight:** `400`
- **Font Family:** `Arial`
- **Padding:** `8px`
- **Border Radius:** `0px`
- **Border:** `none`
- **Box Shadow:** `none`
- **Height:** `auto`
- **Width:** `auto`
- **Line Height:** `normal`
- **Hover State:** Text color `#B6744A`, text-decoration underline

### Navigation

- **Background:** `rgba(243, 231, 211, 0.31)` (cream with 31% opacity)
- **Text Color:** `#000000`
- **Font Size:** `16px`
- **Font Weight:** `400`
- **Font Family:** `-apple-system`
- **Padding:** `16px 0px`
- **Border Radius:** `0px`
- **Border:** `none`
- **Box Shadow:** `rgba(0, 0, 0, 0.1) 0px 2px 20px 0px`
- **Height:** `72px`
- **Width:** `100%`
- **Line Height:** `normal`
- **Nav Link Hover:** Text color `#B6744A`, no underline

### Cards & Containers

- **Background:** `#FFFFFF` or `#F5E9D5`
- **Text Color:** `#000000`
- **Padding:** `32px` (standard), `60px` (featured)
- **Border Radius:** `0px`
- **Border:** `1px solid #E8DAC4`
- **Box Shadow:** `rgba(0, 0, 0, 0.08) 0px 4px 12px 0px`
- **Hover State (interactive cards):** Box shadow `rgba(0, 0, 0, 0.12) 0px 8px 24px 0px`

### Inputs & Forms

- **Background:** `#FFFFFF`
- **Text Color:** `#000000`
- **Font Size:** `16px`
- **Font Weight:** `400`
- **Font Family:** `-apple-system`
- **Padding:** `12px 16px`
- **Border Radius:** `0px`
- **Border:** `1px solid #D4C4B0`
- **Box Shadow:** `none`
- **Focus State:** Border color `#B6744A`, box-shadow `0px 0px 0px 3px rgba(182, 116, 74, 0.1)`
- **Placeholder Color:** `#999999`

### Links

- **Background:** `transparent`
- **Text Color:** `#000000`
- **Font Size:** `16px`
- **Font Weight:** `500`
- **Font Family:** `-apple-system`
- **Padding:** `8px 0px`
- **Border Radius:** `0px`
- **Border:** `none`
- **Box Shadow:** `none`
- **Text Decoration:** `none`
- **Hover State:** Text color `#B6744A`, text-decoration `underline`
- **Active State:** Text color `#4C2004`, text-decoration `underline`
- **Visited State:** Text color `#8B6B56`

### Badges

- **Background:** `#F3E7D3`
- **Text Color:** `#4C2004`
- **Font Size:** `12px`
- **Font Weight:** `600`
- **Font Family:** `Arial`
- **Padding:** `4px 12px`
- **Border Radius:** `0px`
- **Border:** `1px solid #B6744A`
- **Display:** `inline-block`

## 5. Layout Principles

### Spacing System

**Base Unit:** `8px`

**Scale:**

- `8px` — Micro spacing (button icon gaps, tight component padding)
- `16px` — Small spacing (navigation padding, input padding, element margins)
- `24px` — Standard spacing (section gaps, card padding)
- `32px` — Medium spacing (container padding, moderate section margins)
- `40px` — Large spacing (gap between content blocks)
- `48px` — Extra-large spacing (gap between major sections)
- `60px` — Featured spacing (hero section padding)
- `64px` — Section padding for major layout shifts
- `120px` — Maximum margin between distinct sections

**Usage Context:**

- **Micro (8px):** Spacing between icon and text, button internal padding
- **Small (16px):** Navigation and form input padding, tight margins
- **Standard (24px):** Default gap between elements, card padding
- **Medium (32px):** Container padding, moderate section separation
- **Large (40px, 48px):** Between logical content blocks
- **Extra-Large (60px, 64px):** Section containers, major layout boundaries
- **Maximum (120px):** Breathing room between distinct page sections

### Grid & Container

- **Max Width:** `1440px` (full container width observed in navigation)
- **Column Strategy:** Responsive grid with 12-column fallback; observe mobile/tablet breakpoint transitions
- **Section Patterns:** Hero sections use full-width background with centered content container; card grids use CSS Grid with 3-column layout on desktop, 2 on tablet, 1 on mobile
- **Horizontal Padding:** `32px` on desktop, `24px` on tablet, `16px` on mobile
- **Vertical Rhythm:** Maintain consistent spacing increments; avoid arbitrary margins

### Whitespace Philosophy

Generous whitespace creates calm, sophisticated layouts. Use breathing room strategically around key content (headlines, CTAs, featured products). Avoid clustering elements; separate logical content groups with `40px–64px` vertical spacing. Whitespace should guide user attention naturally through the page hierarchy.

### Border Radius Scale

- **Sharp (0px):** All components default to square corners. No rounded corners used in design system. This maintains a clean, contemporary aesthetic aligned with minimalist design principles.

## 6. Depth & Elevation

| Level     | Treatment                              | Use                                     |
| --------- | -------------------------------------- | --------------------------------------- |
| None      | No shadow                              | Text, icons, flat UI layers             |
| Subtle    | `rgba(0, 0, 0, 0.08) 0px 4px 12px 0px` | Cards, containers, subtle depth         |
| Elevated  | `rgba(0, 0, 0, 0.1) 0px 2px 20px 0px`  | Navigation bar, light lift              |
| Prominent | `rgba(0, 0, 0, 0.12) 0px 8px 24px 0px` | Modals, hover state cards, maximum lift |

**Shadow Philosophy:**
Shadows in this design system are minimal and serve functional purposes only. Use them to create subtle depth and visual hierarchy, not as decorative elements. The `rgba(0, 0, 0, 0.08–0.12)` shadow palette creates a soft, sophisticated lift without harshness. Navigation receives a `0px 2px 20px` shadow for slight floating effect. Cards and containers receive subtle shadows only on hover to signal interactivity. Avoid stacking multiple shadows; each component uses one shadow value appropriate to its elevation level.

## 7. Do's and Don'ts

### Do

- Use `#4C2004` (Coffee Brown) for all primary headings and brand-critical text
- Apply `#E76B25` (Burnt Orange) exclusively to primary call-to-action buttons—never use as body text
- Maintain `#000000` (Pure Black) for all body text and navigation links for maximum readability
- Pair cream backgrounds (`#F3E7D3`, `#F5E9D5`) with dark text (`#000000` or `#4C2004`) for high contrast
- Use `16px` minimum font size for body text to ensure accessibility
- Employ weight `800–900` exclusively for headlines and button text
- Maintain `0px` border radius on all components for sharp, contemporary aesthetics
- Apply navigation shadow `rgba(0, 0, 0, 0.1) 0px 2px 20px 0px` for subtle floating effect
- Use generous whitespace (`40px–64px` gaps) to separate major content sections
- Scale interactive elements (buttons, links) to at least `44px` height/width for touch accessibility

### Don't

- Do not use `#B6744A` (Clay) as a primary text color; reserve for supporting UI elements
- Do not apply rounded corners to any component; maintain `0px` border radius throughout
- Do not use font weights below `400` or above `900` for any component
- Do not pair light backgrounds (`#F3E7D3`) with light text; always use dark text on cream
- Do not apply more than one shadow to a single component
- Do not use `#E76B25` (Burnt Orange) for non-interactive elements; it signals action
- Do not reduce font size below `12px` even for captions
- Do not apply opacity to solid colors in text; use hex values directly
- Do not use justified text alignment; stick to left alignment for readability
- Do not add decorative elements or patterns that conflict with minimalist aesthetic
- Do not exceed `400px` width for primary buttons without responsive considerations

## 8. Responsive Behavior

### Breakpoints

| Name    | Width         | Key Changes                                                                                     |
| ------- | ------------- | ----------------------------------------------------------------------------------------------- |
| Mobile  | 320px–599px   | Single-column layout, `16px` horizontal padding, `40px` vertical gaps, stacked navigation       |
| Tablet  | 600px–1023px  | Two-column grids, `24px` horizontal padding, `48px` vertical gaps, collapsed navigation menu    |
| Desktop | 1024px–1440px | Three-column grids, `32px` horizontal padding, `64px` vertical gaps, full horizontal navigation |
| Large   | 1441px+       | Max-width container `1440px` centered, maintain desktop spacing                                 |

### Touch Targets

- Minimum interactive element size: `44px × 44px` (buttons, links, form inputs)
- Minimum button height: `43.1875px` (matches primary button height)
- Minimum link padding: `8px` vertical, sufficient spacing for comfortable tapping
- Spacing between interactive elements: at least `16px` to prevent accidental activation
- Form input height: minimum `40px` for comfortable mobile input

### Collapsing Strategy

- **Desktop (1024px+):** Full horizontal navigation, three-column card grids, `32px` container padding
- **Tablet (600px–1023px):** Hamburger menu navigation, two-column card grids, `24px` container padding, consolidate secondary UI
- **Mobile (320px–599px):** Stack-vertical layout, single-column cards, `16px` container padding, hide non-essential decorative elements
- **Typography Scaling:** H1 reduces from `51.2px` (desktop) → `36px` (tablet) → `28px` (mobile); body remains `16px` across all breakpoints
- **Button Width:** Primary button full width (`100%`) on mobile, constrained (`400px`) on tablet/desktop
- **Spacing Collapse:** Reduce gap values by one step at each breakpoint: `64px` → `48px` → `40px` → `24px`

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA:** Burnt Orange (`#E76B25`) — use for primary action buttons only
- **Primary Brand:** Coffee Brown (`#4C2004`) — headings, brand text, emphasis
- **Secondary Brand:** Clay/Terracotta (`#B6744A`) — supporting elements, accents
- **Background (Primary):** Cream (`#F3E7D3`) — navigation, soft surfaces
- **Background (Secondary):** Cream Variant (`#F5E9D5`) — card backgrounds, alt surfaces
- **Text (Primary):** Pure Black (`#000000`) — all body text, navigation, high contrast
- **Text (Secondary):** Pure White (`#FFFFFF`) — button text over dark backgrounds

### Iteration Guide

1. **Color Precedence:** Apply `#4C2004` to all H1/H2 headings. Use `#E76B25` only for primary buttons. Default all other text to `#000000`.

2. **Typography Foundation:** Set body text to `-apple-system, 16px, weight 400, line-height 24px`. Headings use weight 800–900. Buttons use weight 800 on `Arial, 18px`.

3. **Spacing Consistency:** Use `8px` base unit. Apply `32px` padding to containers, `40px–64px` gaps between sections, `16px` padding to navigation.

4. **Border Radius:** All components must have `border-radius: 0px`. No rounded corners under any circumstance.

5. **Shadows (Conservative):** Navigation receives `rgba(0, 0, 0, 0.1) 0px 2px 20px 0px`. Cards receive `rgba(0, 0, 0, 0.08) 0px 4px 12px 0px`. No stacked shadows.

6. **Button Styling:** Primary buttons: `background #E76B25, color #FFFFFF, padding 9.6px, height 43.1875px, border-radius 0px`. Secondary buttons: `background #F3E7D3, color #000000, border 1px solid #B6744A`.

7. **Navigation Bar:** `background rgba(243, 231, 211, 0.31), padding 16px 0px, box-shadow rgba(0, 0, 0, 0.1) 0px 2px 20px 0px, height 72px, border-radius 0px`.

8. **Link Styling:** Default `color #000000, font-weight 500, text-decoration none`. Hover state: `color #B6744A, text-decoration underline`. All links use `-apple-system, 16px`.

9. **Form Inputs:** `background #FFFFFF, border 1px solid #D4C4B0, padding 12px 16px, border-radius 0px, font-size 16px`. Focus: `border-color #B6744A, box-shadow 0px 0px 0px 3px rgba(182, 116, 74, 0.1)`.

10. **Responsive Breakpoints:** Mobile `320px–599px` (single column, `16px` padding), Tablet `600px–1023px` (two columns, `24px` padding), Desktop `1024px+` (three columns, `32px` padding, max-width `1440px`).

11. **Accessibility Minimum:** Font size no smaller than `12px`. Interactive elements minimum `44px × 44px`. Text contrast ratio minimum `4.5:1` (black text on cream, white text on burnt orange both exceed this).

12. **Whitespace Discipline:** Never collapse spacing below `24px` between logical content sections. Use `40px–64px` vertical gaps between major sections. Maintain visual breathing room as core design principle.
