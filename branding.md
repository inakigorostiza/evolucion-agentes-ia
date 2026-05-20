# Vulpix — Brand Identity

**Source:** https://vulpix-ai.com/
**Stylesheet:** https://vulpix-ai.com/css/estilo.css

---

## 1. Brand

- **Name:** Vulpix (vulpix-ai.com)
- **Sector:** eHealth / HealthTech — Remote Patient Monitoring (RPM) SaaS for hospitals, residences and home hospitalization
- **Tagline / H1:** *"Plataforma de Monitorización Remota de Pacientes"*
- **Value proposition:** *"Reduce costes operativos, mejora la atención al paciente y facilita el trabajo de tu equipo médico con nuestra plataforma intuitiva y segura."*
- **Sub-product:** **UxIA** — AI assistant for automated clinical reports
- **Markets / locales:** ES (default), EN-US, EN-GB, AR-SA

---

## 2. Logo & Mark

- **Wordmark:** `VULPIX` in a clean geometric uppercase sans-serif, filled with the purple→magenta gradient. The "I" dot is replaced by a small fox-tail glyph above the letter.
- **Brandmark / icon (favicon):** A stylized **fox head with a sweeping tail**, rendered in the same purple→magenta gradient (a *vulpix* = fox in Latin → wordplay on the species *Vulpes*).
- **Assets in use:**
  - `/img/logo/logo-purple-horizontal.webp` — primary horizontal lockup
  - `/img/logo/logo-blanco-sin-fondo.webp` — white knockout for dark backgrounds
  - Full favicon set in `/img/favicon/` (16–192 px PNG + Apple touch icons + `manifest.json`)

---

## 3. Color Palette

| Role | Hex | Notes |
|---|---|---|
| **Primary purple** | `#951b80` | Main brand color — buttons, accents, icons |
| **Deep purple** | `#57004e` | Hover on primary buttons, dark text |
| **Mid purple** | `#672483` | Start of brand gradient |
| **Ink / near-black** | `#2c113b` | Headings, body text |
| **Primary translucent** | `#951b80cc` | Semi-transparent overlay (~80%) |
| **Accent pink (hot)** | `#ff1884` | Active state, highlights |
| **Accent pink (mid)** | `#ff52a3` | Hover / secondary CTA |
| **Accent pink (soft)** | `#ffb1d5` | Text on gradient backgrounds |
| **Off-white** | `#fefefe` / `#fefdfe` | Page & header background |
| **Lavender wash** | `#f9f3fa` | Bottom of page gradient |
| **Light surface** | `#f5f4f9` | Section backgrounds |
| **Neutral grey** | `#e5e7eb` | Muted text on dark surfaces |

### Signature gradient
Used on hero accents, primary buttons, footer/menu:
```css
background: linear-gradient(135deg, #672483, #951b80);
```

### Page background gradient
Applied to the entire `.wrapper`:
```css
background: linear-gradient(to bottom, #fefefe 0%, #f9f3fa 100%);
```

---

## 4. Typography

- **Family:** **Manrope** (Google Fonts) — weights **400** and **700**
  ```html
  <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Manrope:wght@400;700&display=swap">
  ```
- **Fallback stack:** `Manrope, sans-serif` (the source CSS literally reads `Sans Sherif` — a typo to be aware of)
- **Body settings:**
  - `line-height: 1.6;`
  - `letter-spacing: -0.03em;` (slightly tight tracking)
- **Headings:** Manrope 700, color `#2c113b` or `#57004e`
- **Accent quotes / eyebrows:** `font-style: italic; font-weight: 500; font-size: 2rem;`

---

## 5. UI / Component Language

- **Framework:** Bootstrap 5 (`/css/bootstrap.css` + grid classes `col-lg-6`, `row align-items-center`, `btn`)
- **Primary CTA — `.btn-dark-purple`:** solid `#951b80` fill, white text, bold; hovers to `#57004e`
- **Secondary CTA:** outlined purple → fills `#951b80` on hover with `#fefefe` text
- **Cards / features:** light `#f5f4f9` surfaces, purple icons, rounded corners
- **Navigation / footer:** purple gradient background with `#ffb1d5` (soft pink) link text → brightens to `#ffffff` on hover

---

## 6. Iconography

- **Google Material Symbols** — inline SVG, `viewBox="0 -960 960 960"`, outlined / filled style, monochrome, color-inherited via `currentColor` so they pick up the purple
- **Font Awesome–style checkmarks** for the hero bullet list (custom SVG path, 20×20)
- Style: simple, single-weight, geometric — reinforces the clean medical-tech tone

---

## 7. Imagery

- Product screenshots of the dashboard on a laptop (`/img/smarter-app-trans.webp`) — transparent WebP layered over the page gradient
- Healthcare professional photography (clinicians, devices)
- All raster assets served as **`.webp`** for performance

---

## 8. Voice & Tone

Professional, benefit-led, reassuring — speaks to clinical decision-makers, not patients:

- *"Reduce costes operativos, mejora la atención"*
- *"Alertas inteligentes para detección precoz de anomalías clínicas"*
- *"Informes automatizados con UxIA la Inteligencia Artificial para reducir carga administrativa"*
- *"Integración sencilla con los sistemas hospitalarios existentes"*

**CTAs:** *"Quiero una Demo Gratuita"* — friendly first-person, low-commitment

---

## 9. Overall Design Language

**Modern healthcare-tech minimalism with a confident magenta-purple personality.**

A light, airy off-white-to-lavender canvas; Manrope's friendly geometric humanist sans; a single bold gradient ramp from deep aubergine `#672483` to magenta `#951b80`, with hot-pink `#ff1884` reserved for energy moments. Bootstrap-grid layout, generous whitespace, outlined Material icons.

The result reads as **trustworthy** (purple = clinical / premium) but **not corporate-cold** — the pink accents and fox mascot add warmth and approachability, intentionally distancing the brand from the typical blue-medical cliché.
