# Vulpix · La evolución de los Agentes de IA

Single-page landing-style presentation with eight scroll-snapping slides covering the evolution of AI agents — from LLMs to multi-agent orchestration — styled with the Vulpix visual identity.

## Run it

No build step. Either:

```bash
open index.html
```

…or serve it (recommended, lets the Google Fonts request behave normally):

```bash
npx serve .
# then open http://localhost:3000
```

## Navigation

- **Scroll / swipe** — native scroll-snap between slides
- **Arrow keys** ↑ / ↓ — previous / next slide
- **Page Up / Page Down** — previous / next
- **Space** — next
- **Home / End** — first / last
- **Side dots** (right edge) — click to jump
- **Floating arrow buttons** (bottom-right) — previous / next
- **URL hash** — every slide is deep-linkable (`#slide-4`)

Respects `prefers-reduced-motion`.

## Files

```
.
├── index.html             # 8 sections, inline SVG diagrams
├── styles/
│   ├── main.css           # design tokens, layout, transitions
│   └── images/            # Vulpix logo assets
├── scripts/
│   └── navigation.js      # keyboard / arrow / dot / observer
├── branding.md            # extracted Vulpix corporate identity
└── README.md
```

## Brand tokens

All from [branding.md](./branding.md):

- Manrope 400 / 500 / 700
- Primary `#951b80`, deep `#57004e`, mid `#672483`
- Pink accents `#ff1884`, `#ff52a3`, `#ffb1d5`
- Signature gradient `linear-gradient(135deg, #672483, #951b80)`
- Page background `linear-gradient(to bottom, #fefefe, #f9f3fa)`
