---
slug: portfolio-build
title: Build World-Class Professional Portfolio
description: Implement a high-performance, aesthetically premium portfolio website following the "Sharp Educational" guide.
status: in-progress
todo:
  - [ ] **Infrastructure & Design System**
    - [ ] Configure `globals.css` with new variables (Sharp geometry, No Purple).
    - [ ] Update `tailwind.config.js` with semantic colors and animations.
    - [ ] Install `framer-motion` (already in package.json, verify).
    - [ ] Setup `lucide-react` icons.
  - [ ] **Component Architecture** (Server Components by default)
    - [ ] `Hero`: Typography-driven, "Swipe" effects (Enrico Deiana style).
    - [ ] `ProjectCard`: Asymmetric/Interactive layout.
    - [ ] `About`: Personal branding section.
    - [ ] `Testimonials`: Social proof carousel/grid.
    - [ ] `Contact`: CTA with form/links.
  - [ ] **Page Assembly**
    - [ ] Implement `page.tsx` (Home) with scroll revealing sections.
    - [ ] Ensure Mobile responsiveness (Mobile-first).
    - [ ] Add Micro-interactions (hover states, custom cursor?).
  - [ ] **Content Injection (Dummy)**
    - [ ] Use placeholder data structure for easy future replacement.
    - [ ] Add catchy copy to Hero and About.
---

# Design Strategy: "Sharp Editorial"

## 1. Visual Identity

- **Geometry**: Sharp edges (0px - 2px radius). No "soft SaaS" rounded corners.
- **Typography**: "Inter" (Clean) + "Plus Jakarta Sans" (Headings) - High contrast weights.
- **Palette**: Deep Charcoal (`#0a0a0a`) background, Bright Accent (e.g., `Signal Orange` or `Acid Green`), White text. **NO PURPLE.**
- **Texture**: Subtle noise/grain or grid lines to avoid "flat" look.

## 2. Animation (The "Wow" Factor)

- **Entrance**: Staggered fade-up for text (`y: 20 -> 0`).
- **Scroll**: Parallax on images, sticky positioning for textual narrative.
- **Micro**: Magnetic buttons, text skew on scroll (Enrico Deiana vibes).

## 3. Structure (User Guidance)

- **Hero**: 90% Screen Height. Massive Text. Definition of "Value Proposition".
- **Projects**: Alternating layout (Left-Right) or Horizontal Scroll.
- **Trust**: Logo strip + "Impact" numbers.
- **CTA**: Minimalist but massive clickable area.

# Implementation Steps

1.  **Refine Design Tokens**: Edit `globals.css` and `tailwind.config.js`.
2.  **Build Core UI**: Buttons, Cards, Inputs (Custom, no Shadcn defaults).
3.  **Construct Sections**: Create `components/sections/Hero.tsx`, `Projects.tsx`, etc.
4.  **Assemble Page**: Combine in `app/page.tsx`.
