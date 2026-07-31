# PRD — Yichun Hou Portfolio

## Problem statement
Build a responsive single-page editorial portfolio for Yichun Hou (social media marketing & creator operations, London). Minimalist editorial layout + playful hand-drawn doodles. Warm-white background, pink (#ED4D9E) as single accent. Four case studies: Morelli's Gelato, Tesla, The PuXuan Hotel, HSBC. Award-worthy motion (framer-motion + Lenis smooth scroll, masked hero reveal, marquee, subtle parallax).

## Stack
- Frontend: React 19 + Tailwind + framer-motion + lenis + sonner
- Backend: FastAPI + MongoDB (contact message storage only)

## Architecture
- All site copy in one data object: `/app/frontend/src/data/content.js`
- Reusable SVG doodles: `/app/frontend/src/components/Doodles.jsx` (draw-in on view, reduced-motion aware)
- Motion primitives: `/app/frontend/src/components/primitives.jsx` (Reveal, MaskedLines, ImageSlot, MetricsStrip, PullQuote…)
- Case-study parts: `/app/frontend/src/components/CaseParts.jsx`
- Sections: `/app/frontend/src/components/sections/*` (Hero, Marquee, About, SelectedWork, CaseMorellis, CaseTesla, CasePuXuan, CaseHSBC, Contact)
- Lenis smooth scroll + anchor handling in `App.js`; skipped under prefers-reduced-motion
- Backend: `POST /api/contact` saves {name,email,message} to `contact_messages`

## Implemented (2026)
- Full single-page site with sticky nav (shadcn dropdown on mobile), anchor smooth scroll
- Kinetic hero (masked title reveal, staggered stack lines, parallax doodles), editorial marquee
- About (numbered blocks + connecting doodles), Selected Work (4 unified cards: illustrations + logos in matching grey containers)
- Morelli's: image-slot grids (9/16, 4/5, 16/9) with captions, handwritten notes, doodle-bordered metric strips
- Tesla: diagram-driven (no photos) — work streams, workflow chains with wavy connectors, chip diagrams, 4-phase timelines, arrow-flow signal diagrams, checklists, pull-quotes
- PuXuan: key visuals, 6-step workflow, 3 campaign cards, KOL/media coverage rows with external "View Coverage →" links, result box
- HSBC: descending funnel diagram, metric boxes, "What I did" checklist, closing line
- Contact: LET'S TALK, email + LinkedIn links, WORKING contact form (saves to MongoDB, sonner toast), footer
- Image slots render as pink dashed placeholders with handwritten captions + graceful img fallback (swap by adding `src` in content.js)
- Responsive at 375/768/1280; prefers-reduced-motion disables motion; keyboard focus in pink

## Contact info
- Email: 3014048h@gmail.com
- LinkedIn: http://linkedin.com/in/yichun-hou-a63312330
- No Instagram/TikTok provided (not shown)

## Backlog / Next
- P1: Upload real screenshots (add `src` to slots in content.js)
- P1: Two visual reference images from brief not attached — style built from description
- P2: Admin view / email notification for contact submissions
- P2: Optional light/dark section rhythm tuning, SEO/OG tags, favicon
