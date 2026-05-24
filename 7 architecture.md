---
name: elite-frontend-design
description: >
  Apply this skill for ANY frontend design task where the goal is to produce
  world-class, award-winning UI/UX quality. Triggers include: building websites,
  landing pages, portfolios, agency sites, product showcases, React/HTML
  components, dashboards, apps, e-commerce, and any situation where the user
  wants their design to feel premium, immersive, or outstanding. Also use when
  the user says "make it look professional", "improve the design", "buatkan
  website", "buat landing page", or requests any UI component or visual layout.
  This skill auto-detects the project context (niche, audience, tone) and adapts
  palette, typography, and animation level accordingly — while maintaining the
  elite craft standard of Lusion (oryzo.ai), Shader (shader.se), and Made in
  Evolve (madeinevolve.com). Always use this skill before writing any frontend
  code, even for simple components.
---

# Elite Frontend Design Skill — Adaptive Edition

> Design DNA sourced from: **oryzo.ai** (Lusion), **shader.se** (Shader Studio), **madeinevolve.com** (Made in Evolve).
> These studios represent the highest craft standard in modern web design.
> This skill applies their principles — adapted intelligently to any project context.

---

## ⚡ MANDATORY FIRST STEP — THE BRIEF ANALYSIS

**Before writing any code**, execute this 3-step analysis from the user's request:

### Step 1 — Extract Context Signals
Scan the user's message for these signals:

| Signal Type | Keywords to detect |
|---|---|
| **Industry** | health, saas, fashion, food, agency, portfolio, education, finance, startup, retail, NGO |
| **Audience** | B2B, B2C, enterprise, consumer, developer, kids, luxury, mass market |
| **Tone** | professional, playful, minimal, bold, calm, editorial, technical, warm |
| **Scale** | full website, landing page, single component, dashboard, app |
| **Explicit style** | dark, light, colorful, minimalist, animated, clean |

### Step 2 — Select a Project Archetype
Match the signals to one of the 7 archetypes below (Section 1). This determines your base palette, fonts, and motion level.

### Step 3 — Apply the Archetype + Elite Craft
Use the archetype's variables as the CSS foundation, then apply all elite techniques from Section 2 onward. **The craft level never drops — only the aesthetic adapts.**

---

## 1. THE 7 PROJECT ARCHETYPES

Each archetype has: Background · Text · Accent · Font Pair · Motion Level · Key Personality.

---

### ARCHETYPE A — Creative Studio / Agency / Portfolio
*Triggered by: agency, portfolio, creative, studio, digital art, interactive, WebGL*

```css
:root {
  --bg-primary:    #0a0a0a;
  --bg-secondary:  #111111;
  --bg-surface:    #161616;
  --text-primary:  #f0ede8;   /* Warm white */
  --text-secondary:#888888;
  --text-muted:    #444444;
  --accent:        #f0ede8;   /* Monochrome — restraint is sophistication */
  --accent-alt:    #c8ff00;   /* Optional electric lime for contrast moments */
  --border:        rgba(255,255,255,0.08);

  --font-display:  'Syne', 'Cabinet Grotesk', sans-serif;
  --font-body:     'Inter', system-ui, sans-serif;
  --font-serif:    'DM Serif Display', Georgia, serif;

  --motion-level:  MAXIMUM;   /* WebGL, GSAP, Lenis, custom cursor, all on */
}
```
**Personality**: Dramatic, technical, immersive. Every scroll is an experience.

---

### ARCHETYPE B — SaaS / Tech Product
*Triggered by: app, saas, dashboard, software, platform, startup, tool, developer*

```css
:root {
  --bg-primary:    #0d1117;   /* GitHub-dark blue-black */
  --bg-secondary:  #161b22;
  --bg-surface:    #21262d;
  --text-primary:  #e6edf3;
  --text-secondary:#8b949e;
  --text-muted:    #484f58;
  --accent:        #7c3aed;   /* Violet — tech, intelligence */
  --accent-glow:   rgba(124,58,237,0.2);
  --border:        rgba(255,255,255,0.06);

  --font-display:  'Plus Jakarta Sans', 'Inter', sans-serif;
  --font-body:     'Inter', system-ui, sans-serif;
  --font-mono:     'JetBrains Mono', 'Fira Code', monospace;

  --motion-level:  MODERATE;  /* Smooth reveals, hover states, no WebGL unless hero */
}
```
**Personality**: Precise, intelligent, structured. Data feels elegant.

---

### ARCHETYPE C — Luxury / Fashion / Premium Brand
*Triggered by: luxury, fashion, haute, premium, jewelry, watch, leather, exclusive, couture*

```css
:root {
  --bg-primary:    #0e0c0a;   /* Warm near-black */
  --bg-secondary:  #161410;
  --bg-surface:    #1e1b16;
  --text-primary:  #f5efe6;   /* Cream */
  --text-secondary:#9e9186;
  --text-muted:    #5a5248;
  --accent:        #c9a96e;   /* Muted gold */
  --accent-light:  #e8d5b0;
  --border:        rgba(201,169,110,0.12);

  --font-display:  'Cormorant Garamond', 'Playfair Display', serif;
  --font-body:     'Jost', 'Raleway', sans-serif;
  --font-caption:  'Cormorant Garamond', serif;  /* italic captions */

  --motion-level:  SLOW;  /* Deliberate, languid transitions. Fast = cheap. */
}
```
**Personality**: Slow, considered, sensory. Every pause is intentional.

---

### ARCHETYPE D — Health / Wellness / Medical
*Triggered by: health, wellness, clinic, medical, mental health, yoga, meditation, therapy, fitness*

```css
:root {
  --bg-primary:    #f8f7f4;   /* Warm off-white */
  --bg-secondary:  #f0eeea;
  --bg-surface:    #ffffff;
  --text-primary:  #1a1a1a;
  --text-secondary:#6b6b6b;
  --text-muted:    #a0a0a0;
  --accent:        #3d7d6c;   /* Sage green — calm, trust */
  --accent-light:  #d4ede8;
  --border:        rgba(0,0,0,0.07);

  --font-display:  'Plus Jakarta Sans', 'DM Sans', sans-serif;
  --font-body:     'DM Sans', 'Inter', sans-serif;

  --motion-level:  GENTLE;  /* Soft fades, no sudden movement. WCAG-friendly. */
}
```
**Personality**: Warm, trustworthy, human. Never clinical, always caring.

---

### ARCHETYPE E — Food / Restaurant / Hospitality
*Triggered by: restaurant, food, cafe, hotel, hospitality, recipe, culinary, dining*

```css
:root {
  --bg-primary:    #0f0d09;   /* Deep warm dark */
  --bg-secondary:  #1a1610;
  --bg-surface:    #231f18;
  --text-primary:  #f2e8d5;   /* Warm cream */
  --text-secondary:#a89880;
  --text-muted:    #6b5e4e;
  --accent:        #e85d2f;   /* Appetite orange */
  --accent-alt:    #c4a35a;   /* Warm gold for premium moments */
  --border:        rgba(242,232,213,0.1);

  --font-display:  'Playfair Display', 'Cormorant', serif;
  --font-body:     'Jost', 'Source Sans 3', sans-serif;

  --motion-level:  SENSORY;  /* Parallax images, slow reveals, aroma-like drift */
}
```
**Personality**: Warm, textural, appetizing. Design should feel touchable.

---

### ARCHETYPE F — E-commerce / Retail
*Triggered by: shop, store, product, e-commerce, buy, collection, catalog, brand*

```css
:root {
  --bg-primary:    #fafaf9;   /* Near-white for product clarity */
  --bg-secondary:  #f2f1ef;
  --bg-surface:    #ffffff;
  --text-primary:  #111111;
  --text-secondary:#666666;
  --text-muted:    #999999;
  --accent:        #111111;   /* Black CTA on light — conversion-optimized */
  --accent-hover:  #333333;
  --border:        rgba(0,0,0,0.08);

  --font-display:  'Neue Montreal', 'Switzer', 'Inter', sans-serif;
  --font-body:     'Inter', system-ui, sans-serif;

  --motion-level:  CONVERSION;  /* Product zoom, smooth add-to-cart, hover previews */
}
```
**Personality**: Product-first, conversion-aware, clean. Beautiful without friction.

---

### ARCHETYPE G — Education / NGO / Public Sector
*Triggered by: education, school, NGO, nonprofit, government, community, social, learn*

```css
:root {
  --bg-primary:    #ffffff;
  --bg-secondary:  #f5f5f5;
  --bg-surface:    #fafafa;
  --text-primary:  #1a1a1a;
  --text-secondary:#555555;
  --text-muted:    #888888;
  --accent:        #1d4ed8;   /* Trustworthy blue */
  --accent-light:  #dbeafe;
  --border:        rgba(0,0,0,0.1);

  --font-display:  'Plus Jakarta Sans', 'Source Sans 3', sans-serif;
  --font-body:     'Source Sans 3', 'Inter', sans-serif;

  --motion-level:  ACCESSIBLE;  /* Prefers-reduced-motion compliant, no auto-play */
}
```
**Personality**: Transparent, accessible, credible. Substance over spectacle.

---

## 2. UNIVERSAL ELITE DESIGN PRINCIPLES

These apply to **ALL archetypes** without exception. This is the craft layer that stays constant.

### 2.1 Typography Rules (Non-Negotiable)

```css
/* DISPLAY — Hero headlines */
.display {
  font-family: var(--font-display);
  font-size: clamp(3rem, 9vw, 11rem);
  font-weight: 700;
  line-height: 0.92;
  letter-spacing: -0.035em;
}

/* HEADLINE — Section titles */
.headline {
  font-size: clamp(2rem, 5vw, 5rem);
  font-weight: 600;
  line-height: 1.0;
  letter-spacing: -0.02em;
}

/* LABEL — All caps metadata */
.label {
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
}

/* BODY — Readable, never cramped */
.body {
  font-size: clamp(0.9rem, 1.15vw, 1.05rem);
  line-height: 1.7;
  font-weight: 300;
  max-width: 62ch;
}
```

### 2.2 Motion by Level

**MAXIMUM** (Archetype A)
- WebGL / Three.js hero background
- GSAP word-by-word text reveal
- Lenis smooth scroll
- Custom cursor with follower
- Parallax on all images
- Magnetic buttons
- Loading screen with counter

**MODERATE** (Archetype B)
- GSAP scroll reveals (y: 40, opacity: 0)
- Smooth scroll (Lenis or `scroll-behavior: smooth`)
- Hover: border glow, scale(1.02)
- No custom cursor (productized UI)

**SLOW / SENSORY** (Archetypes C, E)
- Long duration transitions: `duration: 1.4s`
- Image parallax at 0.3× scroll speed
- Fade-only reveals (no Y movement — too abrupt)
- `transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94)`

**GENTLE** (Archetype D)
- `@media (prefers-reduced-motion: reduce)` respected
- Only opacity fades, no translate
- No auto-playing video or animation
- Intersection Observer for lazy reveals

**CONVERSION** (Archetype F)
- Instant hover feedback (< 200ms)
- Product image zoom on hover
- Smooth cart interactions
- Scroll-snap for product carousels

**ACCESSIBLE** (Archetype G)
- All motion behind `prefers-reduced-motion`
- Focus indicators clearly visible
- High contrast ratios (WCAG AA minimum)
- No animation that lasts > 5s

---

### 2.3 The Universal Easing Library

Regardless of archetype, **never use default CSS easing**. Always use custom bezier curves:

```css
:root {
  /* Snappy exit — for elements leaving viewport */
  --ease-out-expo:  cubic-bezier(0.19, 1.0, 0.22, 1.0);
  
  /* Smooth settle — for elements entering */
  --ease-out-quart: cubic-bezier(0.25, 1.0, 0.5, 1.0);
  
  /* Elegant in-out — for hover transitions */
  --ease-in-out:    cubic-bezier(0.76, 0, 0.24, 1);
  
  /* Natural spring — for playful moments */
  --ease-spring:    cubic-bezier(0.34, 1.56, 0.64, 1);
  
  /* Luxury slow — for ARCHETYPE C / E */
  --ease-luxury:    cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

---

### 2.4 Spacing System (All Archetypes)

```css
:root {
  --space-2xs: clamp(0.25rem, 0.5vw, 0.4rem);
  --space-xs:  clamp(0.5rem,  1vw,   0.75rem);
  --space-sm:  clamp(1rem,    2vw,   1.5rem);
  --space-md:  clamp(2rem,    4vw,   3rem);
  --space-lg:  clamp(4rem,    7vw,   6rem);
  --space-xl:  clamp(6rem,    11vw,  11rem);
  --space-2xl: clamp(8rem,    15vw,  15rem);
}

/* Section padding uses space-xl or space-2xl — always generous */
.section { padding: var(--space-xl) 0; }
```

---

### 2.5 Grid System

```css
.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: clamp(1rem, 2vw, 2rem);
  padding: 0 clamp(1.5rem, 4vw, 5rem);
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
}

/* Asymmetric column assignments — break the symmetry intentionally */
.col-full     { grid-column: 1 / -1; }
.col-left-8   { grid-column: 1 / 9; }
.col-right-4  { grid-column: 9 / -1; }
.col-offset-7 { grid-column: 2 / 8; }  /* Breathing room on left */
.col-center-6 { grid-column: 4 / 10; }
```

---

## 3. ANIMATION RECIPES (Archetype-Aware)

### 3.1 Scroll Reveal — Universal Core

```javascript
// Base reveal — works for all archetypes, adjust duration per motion level
function initReveal(motionLevel = 'MODERATE') {
  const config = {
    MAXIMUM:    { y: 70,  duration: 1.0, stagger: 0.08 },
    MODERATE:   { y: 40,  duration: 0.8, stagger: 0.06 },
    SLOW:       { y: 20,  duration: 1.4, stagger: 0.12 },
    SENSORY:    { y: 30,  duration: 1.2, stagger: 0.10 },
    GENTLE:     { y: 0,   duration: 0.6, stagger: 0.04 },   // opacity only
    CONVERSION: { y: 20,  duration: 0.5, stagger: 0.04 },
    ACCESSIBLE: { y: 0,   duration: 0.4, stagger: 0.0  },   // no motion
  };
  
  const { y, duration, stagger } = config[motionLevel];
  
  gsap.utils.toArray('[data-reveal]').forEach(el => {
    gsap.fromTo(el,
      { y, opacity: 0 },
      {
        y: 0, opacity: 1, duration, ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
  
  // Staggered groups
  gsap.utils.toArray('[data-reveal-group]').forEach(group => {
    const children = group.querySelectorAll('[data-reveal-item]');
    gsap.fromTo(children,
      { y, opacity: 0 },
      {
        y: 0, opacity: 1, duration, stagger, ease: 'power3.out',
        scrollTrigger: { trigger: group, start: 'top 80%' }
      }
    );
  });
}
```

### 3.2 Word-by-Word Reveal (MAXIMUM only)

```javascript
function wordReveal(selector) {
  document.querySelectorAll(selector).forEach(el => {
    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words
      .map(w => `<span class="word" style="overflow:hidden;display:inline-block">
                   <span class="word-inner" style="display:inline-block">${w}</span>
                 </span>`)
      .join(' ');
    
    gsap.fromTo(
      el.querySelectorAll('.word-inner'),
      { yPercent: 115, rotation: 2 },
      {
        yPercent: 0, rotation: 0,
        duration: 0.85, ease: 'power4.out', stagger: 0.055,
        scrollTrigger: { trigger: el, start: 'top 82%' }
      }
    );
  });
}
```

### 3.3 Smooth Scroll (MAXIMUM + MODERATE)

```javascript
// Lenis — only for MAXIMUM and MODERATE archetypes
function initSmoothScroll() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });
  
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(time => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  
  return lenis;
}
```

### 3.4 Adaptive Image Parallax

```javascript
// Strength varies by archetype
function initParallax(strength = 0.15) {
  // MAXIMUM: 0.25 | SLOW/SENSORY: 0.12 | MODERATE: 0.15 | others: 0
  gsap.utils.toArray('[data-parallax]').forEach(img => {
    gsap.fromTo(img,
      { yPercent: -strength * 100 },
      {
        yPercent: strength * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: img.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    );
  });
}
```

---

## 4. COMPONENT LIBRARY (Archetype-Aware)

### 4.1 Hero Section

```html
<!-- MAXIMUM archetype hero -->
<section class="hero">
  <canvas id="hero-canvas"></canvas>  <!-- WebGL layer -->
  <div class="hero-content">
    <p class="label" data-reveal>Est. 2024 &nbsp;·&nbsp; Creative Studio</p>
    <h1 class="display hero-title">
      <span class="title-line">We Build</span>
      <span class="title-line">Digital</span>
      <span class="title-line title-italic">Worlds</span>
    </h1>
  </div>
  <div class="hero-scroll">
    <div class="scroll-line-animated"></div>
    <span class="label">Scroll</span>
  </div>
</section>

<!-- MODERATE / SaaS hero (simpler, feature-focused) -->
<section class="hero hero--saas">
  <div class="hero-badge" data-reveal>
    <span class="badge-dot"></span>
    Now in public beta
  </div>
  <h1 class="headline" data-reveal>
    The platform that<br>
    <em>actually</em> works.
  </h1>
  <p class="body" data-reveal>
    Short, sharp value proposition. One sentence. No jargon.
  </p>
  <div class="hero-cta" data-reveal>
    <a class="btn btn--primary">Get started free</a>
    <a class="btn btn--ghost">See how it works →</a>
  </div>
</section>
```

### 4.2 Buttons (Adaptive)

```css
/* MAXIMUM — Sliding text reveal */
.btn--creative {
  display: inline-flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.85em 2em;
  border: 1px solid var(--border);
  border-radius: 100px;
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  overflow: hidden;
  position: relative;
  transition: border-color 0.4s var(--ease-in-out);
}

/* MODERATE — Filled with glow */
.btn--primary {
  padding: 0.85em 2em;
  background: var(--accent);
  color: var(--bg-primary);
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: box-shadow 0.3s var(--ease-out-quart), 
              transform 0.3s var(--ease-out-quart);
}
.btn--primary:hover {
  box-shadow: 0 0 30px var(--accent-glow, rgba(0,0,0,0.3));
  transform: translateY(-2px);
}

/* LUXURY — Underline only, no fill */
.btn--luxury {
  padding: 0.5em 0;
  border-bottom: 1px solid currentColor;
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  transition: opacity 0.4s var(--ease-luxury);
}
.btn--luxury:hover { opacity: 0.5; }

/* CONVERSION — High contrast CTA */
.btn--conversion {
  padding: 1em 2.5em;
  background: var(--accent);
  color: white;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 700;
  transition: background 0.2s, transform 0.2s;
}
.btn--conversion:hover {
  background: var(--accent-hover);
  transform: translateY(-1px);
}
```

### 4.3 Cards (Adaptive)

```css
/* Dark archetype card */
.card--dark {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: clamp(1.5rem, 3vw, 2.5rem);
  transition: border-color 0.4s var(--ease-in-out),
              transform 0.4s var(--ease-out-quart);
}
.card--dark:hover {
  border-color: rgba(255,255,255,0.2);
  transform: translateY(-4px);
}

/* Light archetype card */
.card--light {
  background: var(--bg-surface);
  border-radius: 16px;
  padding: clamp(1.5rem, 3vw, 2.5rem);
  box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04);
  transition: box-shadow 0.4s var(--ease-out-quart),
              transform 0.4s var(--ease-out-quart);
}
.card--light:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.08), 0 16px 40px rgba(0,0,0,0.06);
  transform: translateY(-4px);
}
```

### 4.4 Navigation (Adaptive)

```css
/* MAXIMUM — Fixed, blend-mode difference */
.nav--creative {
  position: fixed; top: 0; left: 0; right: 0;
  display: flex; align-items: center; justify-content: space-between;
  padding: clamp(1.2rem, 2.5vw, 2rem) clamp(1.5rem, 4vw, 5rem);
  z-index: 100;
  mix-blend-mode: difference; /* Inverts over images automatically */
}

/* MODERATE — Glassy backdrop */
.nav--saas {
  position: sticky; top: 0;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0.9rem clamp(1.5rem, 4vw, 5rem);
  background: rgba(13, 17, 23, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  z-index: 100;
}

/* LIGHT — Clean white */
.nav--light {
  position: sticky; top: 0;
  display: flex; align-items: center; justify-content: space-between;
  padding: 1rem clamp(1.5rem, 4vw, 5rem);
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border);
  z-index: 100;
}
```

---

## 5. EDITORIAL SYSTEM (From madeinevolve DNA)

Numbers and labels as structural elements — applicable across all archetypes:

```html
<!-- Section with editorial numbering -->
<section class="section">
  <header class="section-header">
    <span class="label">(02)</span>
    <hr class="section-rule">
    <span class="label">Services</span>
  </header>
  
  <div class="section-body">
    <h2 class="headline" data-reveal>What We Build</h2>
    
    <div class="service-list" data-reveal-group>
      <div class="service-row" data-reveal-item>
        <span class="service-index label">(a.)</span>
        <span class="service-name">Brand Direction</span>
        <span class="service-tags label">Strategy · Identity · Tone</span>
      </div>
      <!-- repeat pattern -->
    </div>
  </div>
</section>
```

```css
.section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: var(--space-lg);
}

.section-rule {
  flex: 1;
  height: 1px;
  background: var(--border);
  border: none;
}

.service-row {
  display: flex;
  align-items: baseline;
  gap: 2rem;
  padding: 1.2rem 0;
  border-top: 1px solid var(--border);
  transition: opacity 0.3s;
}

.service-list:hover .service-row { opacity: 0.4; }
.service-list:hover .service-row:hover { opacity: 1; }

.service-name {
  flex: 1;
  font-size: clamp(1rem, 2vw, 1.4rem);
  font-weight: 400;
}

.service-tags {
  color: var(--text-muted);
}
```

---

## 6. CSS RESET + ADAPTIVE BASE TEMPLATE

```css
/* === UNIVERSAL RESET === */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

/* Paste the chosen archetype :root variables here */
/* Then add these universal rules: */

html {
  font-family: var(--font-body, 'Inter', system-ui, sans-serif);
  background: var(--bg-primary);
  color: var(--text-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth; /* Overridden by Lenis if used */
}

body { overflow-x: hidden; line-height: 1.5; }
img, video { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }

/* Reduced motion safety net */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 7. CDN IMPORTS REFERENCE

```html
<!-- GSAP + ScrollTrigger (all archetypes that animate) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

<!-- Lenis smooth scroll (MAXIMUM + MODERATE only) -->
<script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js"></script>

<!-- Three.js (MAXIMUM only) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

<!-- Google Fonts — load only what the archetype needs -->

<!-- ARCHETYPE A (Creative) -->
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet">

<!-- ARCHETYPE B (SaaS) -->
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=JetBrains+Mono&display=swap" rel="stylesheet">

<!-- ARCHETYPE C (Luxury) -->
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet">

<!-- ARCHETYPE D (Health) -->
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">

<!-- ARCHETYPE E (Food) -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Jost:wght@300;400&display=swap" rel="stylesheet">

<!-- ARCHETYPE F (E-commerce) -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<!-- ARCHETYPE G (Education) -->
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;600&display=swap" rel="stylesheet">
```

---

## 8. DECISION FLOW — COMPLETE EXECUTION GUIDE

```
START — User sends a design request
│
├─ Step 1: ANALYZE the brief (What industry? What audience? What tone?)
│
├─ Step 2: SELECT ARCHETYPE (A/B/C/D/E/F/G)
│   If unsure: default to ARCHETYPE A with user confirmation
│
├─ Step 3: INJECT the archetype's :root CSS variables
│
├─ Step 4: SET motion level from archetype
│   MAXIMUM  → Lenis + GSAP + WordReveal + CustomCursor + Loading
│   MODERATE → GSAP ScrollTrigger + Lenis + hover states
│   SLOW     → Long GSAP transitions + image parallax, NO custom cursor
│   SENSORY  → Parallax images + slow fades
│   GENTLE   → Intersection Observer + opacity only
│   CONVERSION → Fast hovers + product zoom + smooth cart
│   ACCESSIBLE → Prefers-reduced-motion compliant only
│
├─ Step 5: APPLY universal typography, grid, spacing (Section 2)
│
├─ Step 6: BUILD components using adaptive library (Section 4)
│   → Use editorial numbering where hierarchy is deep (Section 5)
│
└─ Step 7: RUN the Quality Checklist (Section 9) before delivering
```

---

## 9. ADAPTIVE QUALITY CHECKLIST

Before delivering any output, verify:

**Context**
- [ ] Archetype correctly identified from the brief
- [ ] CSS variables match the archetype (not hardcoded random colors)
- [ ] Font pair is archetype-appropriate

**Typography**
- [ ] Hero text uses `clamp()` for fluid scaling
- [ ] Line-height is tight for display (0.9–1.05) and generous for body (1.6–1.75)
- [ ] Letter-spacing: negative for large text, positive for labels/uppercase

**Motion** (check against chosen motion level)
- [ ] Motion level matches archetype
- [ ] `cubic-bezier` easing used — no `linear` or bare `ease`
- [ ] `prefers-reduced-motion` respected for GENTLE + ACCESSIBLE

**Layout**
- [ ] Section padding is generous (`var(--space-xl)` minimum)
- [ ] Grid uses 12 columns with deliberate offsets
- [ ] Whitespace used as a design element, not wasted space

**Interactions**
- [ ] All hover states have transitions (300–500ms)
- [ ] Hover states follow the archetype personality (subtle for luxury, fast for conversion)
- [ ] Focus states visible (for accessibility archetypes)

**Color & Craft**
- [ ] Color palette max 2 hues (from archetype variables)
- [ ] Whites are warm (never pure #ffffff in dark themes)
- [ ] Borders use rgba with low opacity (never hard lines unless intentional)

---

## 10. QUICK ARCHETYPE LOOKUP TABLE

| Project Type | Archetype | Background | Motion | Fonts |
|---|---|---|---|---|
| Agency / Portfolio | **A** | #0a0a0a | MAX | Syne + DM Serif |
| SaaS / App / Startup | **B** | #0d1117 | MOD | Plus Jakarta Sans |
| Luxury / Fashion | **C** | #0e0c0a | SLOW | Cormorant + Jost |
| Health / Wellness | **D** | #f8f7f4 | GENTLE | DM Sans |
| Restaurant / Food | **E** | #0f0d09 | SENSORY | Playfair + Jost |
| E-commerce / Retail | **F** | #fafaf9 | CONV | Inter |
| Education / NGO | **G** | #ffffff | ACCESS | Source Sans 3 |

---

*Skill derived from: oryzo.ai (Lusion) · shader.se (Shader Studio) · madeinevolve.com (Made in Evolve)*
*Elite craft standard maintained across all archetypes. Only the aesthetic adapts — never the quality.*
