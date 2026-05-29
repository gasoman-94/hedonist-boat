# Design Documentation

## Purpose
Poreč Luxury Yacht Charters is a premium boutique travel lookbook and booking engine for luxury boat rentals and excursions in Poreč.

## Visual Identity
- **Themes:** Dark, nautical, luxurious, premium.
- **Color Palette:** 
  - Primarily deep dark backgrounds (e.g., `#0B0C10`).
  - White and off-white text for contrast.
  - Accent colors: Golden/Sand (e.g., `#C5A059`, `#8B6B25`, `#D6BB8A`) for calls to action, icons, and highlights.
- **Typography:** 
  - Sans-serif fonts for a clean, modern aesthetic.
  - Tracking/Letter-spacing for uppercase subtitles (e.g., `START NOW` and `Check out our fleet`).
  - Drop shadows on main text for readability over cinematic background images.

## Core Component Patterns
- **Full-Screen Sections:** Usage of `min-h-[100svh]` or `h-[100svh]` mixed with snap scrolling logic (`snap-y snap-mandatory`).
- **Cinematic Backgrounds:** Large screen-covering images with multi-layered gradient overlays to enable text contrast (`from-black/20 via-transparent via-50% to-[#0B0C10] to-90%`).
- **Interactive Prompts:** Scroll indicators like bouncing chevron down icons or vertical overlapping text to naturally guide the user's flow down the page.

## Data Structures & State
- Application uses simple React state array hooks to manage selections (e.g., `selectedBoatId`, `selectedServiceId`).

## Key Files
- `src/App.tsx`: The main structure featuring snap scrolling layout and section rendering.
- `src/components/Hero.tsx`: The landing impression. Sets the mood with a hero background and elegant typography.
- `src/components/IntroSection.tsx`: Continuation of the premium narrative with aligned textual overlay and scroll indicator. 
- `src/components/FleetSection.tsx`: The core product offering area.

## Goals
- Reflect an exclusive, seamless, and upscale feel.
- Ensure smooth transitions and visually pleasing blending between vertical sections.
- Keep the user immersed in imagery while retaining high readability via precise gradients.
