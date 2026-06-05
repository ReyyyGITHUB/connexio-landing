# Krea — Design Tokens

**Theme:** Dark monochromatic noir gallery. Pure black canvas, cinematic typography, zero chromatic accent color. The system is entirely achromatic — Pure White is the only accent.

---

## Color Palette

| Name | Hex | CSS Token | Role |
|------|-----|-----------|------|
| **Obsidian** | `#000000` | `--color-obsidian` | Primary page background, canvas base |
| **Midnight** | `#0b0f15` | `--color-midnight` | Hero ambient, image containers — near-black with faint blue undertone |
| **Charcoal** | `#171717` | `--color-charcoal` | Card surfaces, elevated panels |
| **Graphite** | `#262626` | `--color-graphite` | Interactive hover states, most lifted surface |
| **Iron** | `#404040` | `--color-iron` | Subtle borders, muted UI dividers |
| **Slate** | `#525252` | `--color-slate` | Secondary text, less prominent labels |
| **Ash** | `#737373` | `--color-ash` | Tertiary text, helper copy, metadata |
| **Fog** | `#a3a3a3` | `--color-fog` | Secondary body text, sub-labels, link hover |
| **Pearl** | `#d4d4d5` | `--color-pearl` | Hairline borders, ghost button outlines |
| **Mist** | `#e5e5e5` | `--color-mist` | Light divider lines on dark surfaces |
| **Cloud** | `#f5f5f5` | `--color-cloud` | Light surface for inverted sections |
| **Pure White** | `#ffffff` | `--color-pure-white` | Primary CTA, maximum contrast, accent |

**Text Hierarchy (dark background):**
- Primary: `#ffffff` (Pure White)
- Secondary: `#a3a3a3` (Fog)
- Tertiary: `#737373` (Ash)
- Muted: `#525252` (Slate)

---

## Typography

### Font Family
**Suisse Intl** (substitute: Inter, Söhne, or Neue Haas Grotesk)
- Weights: 400, 450, 500, 600, 700
- Applied to: every interface element (nav, body, buttons, hero, pricing, footer)
- OpenType features: `ss01 on`, `tnum on`, `cv11 on`

### Type Scale

| Role | Size | Line Height | Letter Spacing | CSS Token |
|------|------|-------------|----------------|-----------|
| caption | 12px | 1.4 | +0.12px | `--text-caption` |
| body-sm | 14px | 1.5 | — | `--text-body-sm` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading-sm | 20px | 1.38 | -0.3px | `--text-subheading-sm` |
| subheading | 24px | 1.33 | -0.36px | `--text-subheading` |
| heading-sm | 36px | 1.2 | -0.54px | `--text-heading-sm` |
| heading-md | 48px | 1.11 | -1.2px | `--text-heading-md` |
| heading | 60px | 1.05 | -1.5px | `--text-heading` |
| heading-lg | 72px | 1.0 | -1.8px | `--text-heading-lg` |
| display | 96px | 1.0 | -2.4px | `--text-display` |

### Font Weights
- 400 — Regular body text
- 450 — Editorial emphasis (unique, no semibold crossing)
- 500 — Medium: headings, buttons, labels, nav
- 600 — Semibold: strong emphasis, display weights
- 700 — Bold: maximum emphasis

---

## Spacing

**Base unit:** 4px

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 28 | 28px | `--spacing-28` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 44 | 44px | `--spacing-44` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 96 | 96px | `--spacing-96` |
| 108 | 108px | `--spacing-108` |
| 160 | 160px | `--spacing-160` |
| 192 | 192px | `--spacing-192` |

**Rhythm:**
- Section gap: 80–96px
- Element gap: 12–20px
- Card padding: 24–32px

---

## Border Radius

| Element | Value |
|---------|-------|
| buttons, badges, pills | 9999px |
| input fields | 8px |
| cards, small surfaces | 8px |
| large feature surfaces | 14–32px |

---

## Shadows

| Name | Value | Token |
|------|-------|-------|
| sm | `rgba(0, 0, 0, 0.1) 0px 1px 6px 0px` | `--shadow-sm` |
| subtle | `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px` | `--shadow-subtle` |
| subtle-2 | `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` | `--shadow-subtle-2` |
| sm-2 (product mockup) | `rgba(0, 0, 0, 0.2) 0px 9px 8px 0px, rgba(0, 0, 0, 0.2) 0px 6px 4px -1px` | `--shadow-sm-2` |

**Cards:** No shadow — elevation comes from surface tone only
**Ghost buttons:** `--shadow-sm`
**Hero mockups:** `--shadow-sm-2`

---

## Surface Hierarchy

| Level | Name | Hex | Use Case |
|-------|------|-----|----------|
| 0 | Obsidian | `#000000` | Base page canvas (default bg) |
| 1 | Midnight | `#0b0f15` | Hero sections, image containers |
| 2 | Charcoal | `#171717` | Floating cards, panels |
| 3 | Graphite | `#262626` | Hover states, most elevated UI |

---

## CSS Custom Properties (Quick Reference)

```css
:root {
  /* Colors */
  --color-obsidian: #000000;
  --color-midnight: #0b0f15;
  --color-charcoal: #171717;
  --color-graphite: #262626;
  --color-iron: #404040;
  --color-slate: #525252;
  --color-ash: #737373;
  --color-fog: #a3a3a3;
  --color-pearl: #d4d4d5;
  --color-mist: #e5e5e5;
  --color-cloud: #f5f5f5;
  --color-pure-white: #ffffff;

  /* Typography */
  --font-suisse-intl: 'Suisse Intl', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-weight-regular: 400;
  --font-weight-w450: 450;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-96: 96px;

  /* Border Radius */
  --radius-sm: 8px;
  --radius-pill: 9999px;
  --radius-lg: 14px;
  --radius-xl: 32px;

  /* Shadows */
  --shadow-sm: rgba(0, 0, 0, 0.1) 0px 1px 6px 0px;
  --shadow-subtle: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
  --shadow-sm-2: rgba(0, 0, 0, 0.2) 0px 9px 8px 0px, rgba(0, 0, 0, 0.2) 0px 6px 4px -1px;
}
```

---

## Critical Rules

✅ **Do**
- Use Pure White (#ffffff) as the ONLY accent — never introduce chromatic color
- Display text at 48–96px with -0.025em tight tracking and 1.0–1.11 line-height
- Use 9999px radius on all buttons, badges, and pills
- Apply 8px radius on inputs and small cards
- Reserve Charcoal (#171717) for surfaces that lift off Obsidian
- Maintain sub-1.5 line-height on dark backgrounds for tight rhythm

❌ **Don't**
- Never add red, blue, green, or any chromatic accent — the system is 0% colorfulness
- Don't use 8px radius on buttons (always 9999px pill)
- Don't place shadows on cards — use surface tone only
- Don't use italic, underline, or color-only links — use weight or tone shifts only
- Don't set body text below 14px or above 16px without typographic reason
- Don't use line-height above 1.5 for body text
- Don't use light surfaces as full-page background — reserve for content blocks only