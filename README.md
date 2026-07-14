# Capilla Dental & Aesthetic Center

Premium medical lead-generation website — frontend foundation.

## Stack

- React 19 + Vite
- Tailwind CSS
- React Router DOM
- Framer Motion
- React Helmet Async
- Lucide React
- Swiper.js
- React CountUp
- React Intersection Observer
- React Lazy Load Image Component

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |

## Architecture

```
src/
  assets/          Brand images & icons
  components/
    common/        Reusable UI primitives & cards
    layout/        Navbar, Footer, floating UI, MainLayout
    sections/      Page section compositions (built per page)
  data/            Clinic info, content, SEO defaults
  hooks/           Scroll, media query, scroll-to-top
  pages/           Route-level pages
  routes/          Route definitions with lazy loading
  styles/          Global CSS + Tailwind layers
  utils/           Helpers & Framer Motion variants
```

## Routes

All routes are registered. Page bodies use placeholders until built in follow-up prompts.

- `/` Home
- `/about` About Us
- `/doctors` Meet Doctors
- `/dental` Dental Treatments
- `/skin` Skin Treatments
- `/hair` Hair Treatments
- `/gallery` Gallery
- `/reviews` Google Reviews
- `/offers` Offers
- `/blog` Blog
- `/blog/:slug` Blog article
- `/contact` Contact
- `/privacy-policy` Privacy Policy
- `/terms-and-conditions` Terms
- `/treatments/:slug` Treatment detail pages
- `/*` 404

## Design System

Colors, typography, spacing, glass effects, and motion tokens are defined in:

- `tailwind.config.js`
- `src/styles/globals.css`
- `src/utils/animations.js`
