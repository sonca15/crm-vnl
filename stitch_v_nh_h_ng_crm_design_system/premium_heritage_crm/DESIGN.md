---
name: Premium Heritage CRM
colors:
  surface: '#fff8f0'
  surface-dim: '#e1d9cc'
  surface-bright: '#fff8f0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf3e5'
  surface-container: '#f5eddf'
  surface-container-high: '#efe7da'
  surface-container-highest: '#eae1d4'
  on-surface: '#1f1b13'
  on-surface-variant: '#4d4635'
  inverse-surface: '#343027'
  inverse-on-surface: '#f8f0e2'
  outline: '#7f7663'
  outline-variant: '#d0c5af'
  surface-tint: '#735c00'
  primary: '#735c00'
  on-primary: '#ffffff'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#e9c349'
  secondary: '#7b5800'
  on-secondary: '#ffffff'
  secondary-container: '#fdc34d'
  on-secondary-container: '#715000'
  tertiary: '#415ba4'
  on-tertiary: '#ffffff'
  tertiary-container: '#97b0ff'
  on-tertiary-container: '#254188'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#ffdea6'
  secondary-fixed-dim: '#f7bd48'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5d4200'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#27438a'
  background: '#fff8f0'
  on-background: '#1f1b13'
  surface-variant: '#eae1d4'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

This design system is crafted for a premium bird’s nest brand, blending traditional luxury with modern administrative efficiency. The brand personality is **Exquisite, Timeless, and Trustworthy**, reflecting the high-value nature of the product. 

The visual direction follows **Modern Glassmorphism**. This style uses translucent layers and subtle background blurs to create a sense of depth and lightness, moving away from heavy, opaque enterprise interfaces. By utilizing frosted surfaces and gold accents, the UI evokes a sense of "preciousness"—aligning the digital management experience with the physical product's prestige. The goal is to make the CRM feel less like a utility and more like a high-end concierge dashboard.

## Colors

The palette is rooted in the warmth of **Royal Gold** and **Cream White**, avoiding the sterile blues typical of CRM platforms.

- **Primary & Secondary Gold:** Used for highlights, call-to-actions, and active states. These represent the premium nature of the "Yến Sào" product.
- **System Background:** A warm Cream White (#FDFBF7) provides a softer, more organic canvas than pure white, reducing eye strain during long periods of data management.
- **Typography:** Warm Charcoal (#1E1E10) ensures high legibility while maintaining a softer contrast than pitch black.
- **Semantic Badges:** Success Green (Emerald), Warning Amber, and Error Coral are used sparingly to signal status without clashing with the gold-centric brand identity.

## Typography

The design system utilizes **Inter** exclusively to provide a systematic, clean, and highly legible experience. Given the complexity of CRM data, the typography scale relies on deliberate weight changes and subtle tracking adjustments to create hierarchy.

Headlines use semi-bold weights with tighter letter spacing to feel modern and "editorial." Body text uses standard weights with generous line heights to ensure readability of customer notes and transaction histories. Small labels use increased tracking and medium weights to remain distinct even at 12px.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a focus on "White Space as Luxury." 

- **Grid:** A 12-column layout for desktop with 24px gutters.
- **Rhythm:** An 8px base unit drives all padding and margins to ensure visual harmony.
- **Adaptability:** On mobile, the margin shrinks to 16px, and complex data tables should transform into card-based layouts. 
- **Structure:** Content is organized into clear "Glass" modules. Navigation is pinned to the left in a slim, translucent sidebar to maximize the workspace for customer data.

## Elevation & Depth

Depth is conveyed through **backlight and transparency** rather than traditional heavy shadows.

- **The Glass Layer:** Primary containers use a 12px backdrop blur with a semi-transparent background color (#FFFFFF at 60% opacity).
- **The Border:** A 1px solid border using Primary Gold (#D4AF37) at 15% opacity defines the edges of containers, catching the light like a glass edge.
- **Shadows:** Only used for interactive elements (buttons/modals). These are "Ambient Shadows"—diffused, low-opacity, and slightly tinted with the Primary Gold color to avoid looking "dirty" on the cream background.
- **Z-Index:** Higher elevation levels increase the backdrop blur intensity (up to 24px) rather than increasing shadow darkness.

## Shapes

The design system adopts a **Rounded** aesthetic (0.5rem / 8px base) to feel approachable and organic. This softens the "corporate" feel of the CRM. 

- **Standard Elements:** Buttons and input fields use an 8px radius.
- **Large Containers:** Cards and Modals use "rounded-lg" (16px) or "rounded-xl" (24px) to emphasize the soft, premium glass effect.
- **Iconography:** Should feature rounded terminals and a consistent 2px stroke weight to match the gold border thickness.

## Components

### Buttons
- **Primary:** Linear gradient from Primary Gold to Secondary Gold. Includes a soft, gold-tinted drop shadow. Text is Warm Charcoal for maximum contrast.
- **Secondary:** Transparent background with a 1px Primary Gold border.
- **Hover States:** A subtle "inner glow" or increased saturation in the gradient.

### Input Fields
- **Default:** Minimalist design with a 1px border in Primary Gold at 30% opacity. 
- **Active/Focus:** The border opacity increases to 100%, and a subtle 4px outer glow in gold is applied. Background remains a slightly more opaque white to distinguish from the card surface.

### Glassmorphism Cards
- Background: `#FFFFFF` at 60% opacity.
- Blur: `12px` backdrop-filter.
- Border: `1px solid #D4AF37` at 15% opacity.
- Inner Padding: `24px` (lg spacing).

### Semantic Badges
- Small, pill-shaped indicators. 
- Backgrounds use 10% opacity of the semantic color (Green/Amber/Coral).
- Text uses 100% opacity of the same color for high contrast and modern styling.

### Tables
- Rows are separated by thin gold lines at 10% opacity. 
- Header rows use a slightly more opaque glass effect to stay pinned during scroll.