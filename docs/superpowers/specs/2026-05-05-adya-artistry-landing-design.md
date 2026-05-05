# Adya Artistry - Pinterest-Style Craft Brand Website Design

**Date:** 2026-05-05  
**Project:** Adya Artistry Web  
**Phase:** Landing Page (No Database, CMS-Ready Architecture)

## Overview

Build a Pinterest-style, minimalistic landing page for "Adya Artistry" - a handmade craft brand selling cards, customized cards, handmade flowers, paper packs, art supplies, painting materials, crochet items, and more. The site will eventually serve individual gift buyers, craft enthusiasts, both audiences combined, and wholesale buyers, but launches with a static landing page first.

## Goals

1. Create a beautiful, minimalistic Pinterest-inspired landing page
2. Establish clean architecture for future CMS and e-commerce integration
3. Optimize for SEO from day one
4. Deploy to GCP Cloud Run
5. Build with MongoDB/cloud storage in mind but start static

## Technology Stack

### Core Framework
- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Node.js 18+**

### Styling
- **TailwindCSS** - Pinterest-minimal aesthetic
- **CSS Grid** - Native masonry layout (no heavy libraries)
- **Mobile-first** responsive design

### Future Integration (Architecture Ready)
- **MongoDB** - Product catalog, CMS data
- **Cloud Storage** - GCS/Azure/S3 (abstracted, configurable)
- **Custom CMS** - Hidden admin panel with env-based auth

### Deployment
- **GCP Cloud Run** (Docker containerized)
- **Environment Variables** - Configuration management

## Project Structure

```
adya-artistry-web/
├── src/
│   ├── app/                           # Next.js App Router
│   │   ├── (marketing)/               # Public marketing pages
│   │   │   ├── page.tsx               # Landing page (/)
│   │   │   ├── about/
│   │   │   │   └── page.tsx           # About page
│   │   │   ├── contact/
│   │   │   │   └── page.tsx           # Contact page
│   │   │   └── layout.tsx             # Marketing layout
│   │   ├── (legal)/                   # Legal pages
│   │   │   ├── privacy/
│   │   │   │   └── page.tsx           # Privacy Policy
│   │   │   ├── terms/
│   │   │   │   └── page.tsx           # Terms of Service
│   │   │   └── layout.tsx             # Legal layout
│   │   ├── admin/                     # Future CMS (not implemented yet)
│   │   │   └── page.tsx               # Admin dashboard
│   │   ├── api/                       # API routes (future)
│   │   │   └── auth/
│   │   ├── layout.tsx                 # Root layout
│   │   ├── globals.css                # Global styles
│   │   └── not-found.tsx              # 404 page
│   ├── components/
│   │   ├── ui/                        # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   └── MasonryGrid.tsx
│   │   ├── layout/                    # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   └── sections/                  # Page sections
│   │       ├── Hero.tsx
│   │       ├── CategoryGrid.tsx
│   │       ├── AboutSection.tsx
│   │       └── Newsletter.tsx
│   ├── lib/
│   │   ├── utils.ts                   # Utility functions
│   │   ├── constants.ts               # App constants
│   │   └── db/                        # Future DB utilities
│   │       └── mongodb.ts
│   ├── types/
│   │   ├── index.ts                   # Shared types
│   │   └── product.ts                 # Product types (future)
│   └── middleware.ts                  # Auth middleware (future)
├── public/
│   ├── images/
│   │   └── placeholders/              # Placeholder images
│   ├── favicon.ico
│   └── robots.txt
├── docs/
│   └── superpowers/specs/
├── .env.local.example                 # Environment template
├── .env.local                         # Local environment (gitignored)
├── Dockerfile                         # GCP Cloud Run deployment
├── .dockerignore
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

**Why:** Route groups `(marketing)` and `(legal)` organize routes without affecting URLs. Clear separation of concerns makes future expansion easier.

**How to apply:** All new pages follow this structure. Marketing content goes in `(marketing)`, legal in `(legal)`, admin features in `admin/`.

## Landing Page Design

### Sections (Top to Bottom)

1. **Header/Navigation**
   - Logo (Adya Artistry wordmark)
   - Minimal navigation: About, Contact
   - Clean, fixed/sticky on scroll

2. **Hero Section**
   - Large, beautiful hero image or illustration
   - Brand tagline: "Handcrafted with Love, Designed for You"
   - Subtle CTA: "Explore Our Craft" (future products link)
   - Minimalistic, lots of whitespace

3. **Category Grid (Pinterest Masonry)**
   - CSS Grid masonry layout
   - Category cards: Handmade Cards, Paper Flowers, Art Supplies, Crochet, Custom Orders, Paper Packs
   - Placeholder images (replaceable via future CMS)
   - Hover effects: subtle scale/shadow
   - Responsive: 1 col mobile, 2 col tablet, 3-4 col desktop

4. **About Section (Brief)**
   - 2-3 sentences about the brand
   - Image + text side-by-side
   - Link to full About page

5. **Newsletter Signup**
   - Simple email input + subscribe button
   - "Stay updated on new collections"
   - Future: integrate with email service

6. **Footer**
   - Social links (Instagram, Pinterest, etc.)
   - Legal links: Privacy Policy, Terms of Service
   - Copyright notice
   - Contact email

**Why:** Pinterest users expect visual discovery with minimal friction. The masonry grid encourages exploration while maintaining clean aesthetics.

**How to apply:** Keep text minimal, let images tell the story. Each section is a separate component for easy content management later.

## SEO Optimization

### Metadata Strategy
- Next.js `metadata` API for all pages
- Dynamic Open Graph images
- Structured data (JSON-LD) for Organization, Product (future)
- Semantic HTML: proper heading hierarchy, nav, main, footer

### Technical SEO
- `/sitemap.xml` - Dynamic sitemap generation
- `/robots.txt` - Search engine directives
- Image optimization: Next.js Image component with responsive sizes
- Lazy loading: Images below fold
- Route prefetching: Next.js Link component

### Content SEO
- Descriptive alt text for all images
- Keyword-optimized headings and copy
- Meta descriptions for each page
- Schema markup for products (future)

**Why:** SEO must be built-in from the start, not retrofitted later.

**How to apply:** Every new page includes metadata export. All images use Next.js Image with alt text.

## Styling Philosophy

### Pinterest-Inspired Minimal Design

**Color Palette:**
- Primary: Soft pastels (customizable via Tailwind config)
- Neutral: Whites, soft grays for backgrounds
- Accent: One vibrant color for CTAs
- Text: Dark gray (not pure black) for readability

**Typography:**
- Clean sans-serif for headings (e.g., Inter, Plus Jakarta Sans)
- Readable serif or sans for body (e.g., Crimson Text, Source Sans)
- Generous line spacing
- Limited font sizes (design system)

**Layout:**
- Abundant whitespace
- No borders/boxes unless necessary
- Cards with subtle shadows on hover
- Rounded corners (subtle, not extreme)

**Interactions:**
- Smooth transitions (200-300ms)
- Subtle hover effects (scale 1.02, shadow increase)
- No jarring animations
- Focus states for accessibility

**Why:** Pinterest's success comes from letting content breathe. Minimalism reduces cognitive load and highlights the handmade products.

**How to apply:** Use Tailwind's utility classes. Create design tokens in `tailwind.config.ts`. Limit custom CSS.

## Component Design

### Key Components

**MasonryGrid Component:**
```typescript
// Responsive CSS Grid masonry
// Props: items, columns (responsive), gap
// Features: lazy loading, skeleton states
```

**Card Component:**
```typescript
// Reusable card for categories/products
// Props: image, title, description, link
// Hover: subtle scale + shadow
```

**Header Component:**
```typescript
// Sticky navigation
// Mobile: hamburger menu
// Desktop: horizontal nav
```

**Newsletter Component:**
```typescript
// Email capture form
// Future: API route to email service
// Initial: Just UI (no backend)
```

**Why:** Component-driven architecture ensures consistency and speeds up development as the site grows.

**How to apply:** Build components in isolation. Each component is self-contained with its own types and styles.

## Future CMS Architecture (Ready, Not Implemented)

### Admin Panel Design

**Route:** `/admin` (hidden, no links from public site)

**Authentication:**
- Basic auth via environment variables
- `ADMIN_USERNAME` and `ADMIN_PASSWORD`
- Middleware protects `/admin` routes
- Session-based (simple, no OAuth needed initially)

**CMS Features (Future Implementation):**
1. **Product Management**
   - Add/edit/delete products
   - Image upload to cloud storage
   - Categories, pricing, descriptions
   - SEO fields per product

2. **Category Management**
   - Manage category cards on landing page
   - Upload category images
   - Reorder categories

3. **Content Management**
   - Edit About page content
   - Manage hero section
   - Update footer links

4. **Image Management**
   - Upload to GCS/S3/Azure
   - Abstraction layer: `lib/storage.ts`
   - Automatic image optimization

**Why:** Custom CMS gives full control and avoids third-party costs. Environment-based auth is simple and secure for a single admin.

**How to apply:** When implementing CMS, create MongoDB schemas first, then API routes, then admin UI. Keep admin UI simple (forms + tables).

### Database Schema (MongoDB)

**Collections:**

```typescript
// products
{
  _id: ObjectId,
  title: string,
  slug: string,
  description: string,
  category: string,
  price: number,
  images: string[],  // Cloud storage URLs
  featured: boolean,
  seo: {
    metaTitle: string,
    metaDescription: string,
    keywords: string[]
  },
  createdAt: Date,
  updatedAt: Date
}

// categories
{
  _id: ObjectId,
  name: string,
  slug: string,
  description: string,
  image: string,  // Cloud storage URL
  order: number,
  visible: boolean,
  createdAt: Date,
  updatedAt: Date
}

// pages (for CMS-managed content)
{
  _id: ObjectId,
  slug: string,  // 'home', 'about', etc.
  sections: [{
    type: string,  // 'hero', 'text', 'gallery', etc.
    content: any,  // Flexible schema
    order: number
  }],
  updatedAt: Date
}

// newsletter
{
  _id: ObjectId,
  email: string,
  subscribedAt: Date,
  active: boolean
}
```

**Why:** Flexible schema for varied product types. Pages collection allows CMS to manage any page content.

**How to apply:** Create TypeScript interfaces matching these schemas. Use Mongoose or MongoDB driver for type safety.

### Cloud Storage Abstraction

```typescript
// lib/storage.ts
interface StorageAdapter {
  upload(file: File, path: string): Promise<string>;
  delete(url: string): Promise<void>;
  getPublicUrl(path: string): string;
}

// Implementations: GCSAdapter, S3Adapter, AzureAdapter
// Configured via environment variable: STORAGE_PROVIDER
```

**Why:** Allows switching between GCS/S3/Azure without code changes. Upload logic stays consistent.

**How to apply:** Implement one adapter first (e.g., GCS), add others as needed. Environment variable determines which to use.

## Deployment

### GCP Cloud Run Setup

**Dockerfile:**
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

**Environment Variables:**
```env
NODE_ENV=production
MONGODB_URI=mongodb+srv://...
ADMIN_USERNAME=admin
ADMIN_PASSWORD=<secure-password>
STORAGE_PROVIDER=gcs|s3|azure
GCS_BUCKET_NAME=adya-artistry-images
# Or S3/Azure equivalents
```

**Why:** Cloud Run auto-scales and only charges for usage. Docker ensures consistent environments.

**How to apply:** Build image locally first, test with Docker, then deploy to Cloud Run via gcloud CLI or GitHub Actions.

### Build Optimization

**next.config.js:**
```javascript
module.exports = {
  output: 'standalone',  // For Docker
  images: {
    domains: ['storage.googleapis.com', 's3.amazonaws.com'],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  swcMinify: true,
}
```

**Why:** Standalone output creates minimal Docker images. Image optimization reduces bandwidth and improves performance.

**How to apply:** These settings are set once and apply to all builds.

## Pages Specification

### Landing Page (/)
- Hero section
- Category masonry grid
- Brief about section
- Newsletter signup
- Footer

### About Page (/about)
- Brand story
- Process/craftsmanship
- Team/founder (optional)
- Mission statement

### Contact Page (/contact)
- Contact form (future: API route)
- Email address
- Social links
- Business hours (if applicable)

### Privacy Policy (/privacy)
- Standard privacy policy template
- Editable via CMS later
- Required for newsletter/commerce

### Terms of Service (/terms)
- Standard terms template
- Editable via CMS later
- Required for e-commerce

**Why:** These pages are legal requirements for e-commerce and establish trust with visitors.

**How to apply:** Use templates initially, make them editable via CMS later. Keep legal pages simple and readable.

## Accessibility

### WCAG 2.1 AA Compliance

**Requirements:**
- Semantic HTML (header, nav, main, footer, article, section)
- ARIA labels where needed (hamburger menu, form inputs)
- Color contrast: minimum 4.5:1 for text
- Keyboard navigation: all interactive elements focusable
- Focus indicators: visible outlines on focus
- Alt text: descriptive for all images
- Skip links: "Skip to main content"

**Testing:**
- Lighthouse accessibility score > 90
- Screen reader testing (VoiceOver/NVDA)
- Keyboard-only navigation test

**Why:** Accessibility is both ethical and improves SEO. Many Pinterest users rely on assistive technology.

**How to apply:** Use semantic HTML by default. Test with Lighthouse on every page. Add ARIA only when semantic HTML isn't enough.

## Performance Targets

### Metrics (Lighthouse)
- Performance: > 90
- Accessibility: > 95
- Best Practices: 100
- SEO: 100

### Strategies
- Server components for static content
- Client components only when interactive
- Image optimization: WebP/AVIF, responsive sizes
- Code splitting: automatic with App Router
- Route prefetching: Next.js Link
- CSS-in-JS avoided (use Tailwind)

**Why:** Fast sites rank better and convert better. Pinterest users expect snappy interactions.

**How to apply:** Measure with Lighthouse after every major change. Use Next.js built-in optimizations.

## Development Workflow

### Phase 1: Static Landing (Current)
1. Set up Next.js project with TypeScript and Tailwind
2. Build component library (UI components)
3. Implement landing page with placeholder content
4. Add legal pages
5. Optimize for SEO
6. Deploy to Cloud Run

### Phase 2: CMS Integration (Future)
1. Set up MongoDB connection
2. Define schemas and types
3. Build admin authentication
4. Create API routes for CRUD operations
5. Build admin UI for content management
6. Integrate cloud storage
7. Make landing page dynamic (fetch from DB)

### Phase 3: E-commerce (Future)
1. Add product detail pages
2. Shopping cart functionality
3. Payment integration (Stripe/Razorpay)
4. Order management
5. Customer accounts

### Phase 4: Advanced Features (Future)
1. Custom order forms
2. Wholesale portal
3. Inventory management
4. Analytics dashboard

**Why:** Incremental approach reduces risk and allows for user feedback at each stage.

**How to apply:** Complete each phase fully before moving to the next. Each phase should be deployable.

## Key Design Principles Summary

1. **YAGNI (You Aren't Gonna Need It)** - Build only what's needed now, architect for future needs
2. **Mobile-first** - Design for small screens, enhance for larger
3. **Component-driven** - Reusable, self-contained components
4. **SEO-first** - Metadata, semantic HTML, performance from day one
5. **Accessibility** - Semantic HTML, keyboard navigation, screen readers
6. **Minimalism** - Pinterest-style clean design, whitespace, content-first
7. **Type-safe** - TypeScript everywhere, proper interfaces
8. **Separation of concerns** - Clear boundaries between UI, logic, data

## Success Criteria

**Launch (Phase 1):**
- Beautiful, responsive landing page live on GCP Cloud Run
- Perfect Lighthouse SEO score
- All legal pages present
- Clean codebase ready for CMS integration

**Post-CMS (Phase 2):**
- Admin can add/edit products and categories without code changes
- Images upload to cloud storage automatically
- Landing page pulls from database

**Post-E-commerce (Phase 3):**
- Users can browse and purchase products
- Payment processing works
- Order confirmation emails sent

## Open Questions / Future Decisions

1. **Email Service:** Mailchimp, SendGrid, or custom SMTP for newsletter?
2. **Payment Gateway:** Stripe, Razorpay, or PayPal for Indian market?
3. **Analytics:** Google Analytics, Plausible, or custom?
4. **Search:** Algolia, Meilisearch, or MongoDB text search for product search?

**How to apply:** These decisions can wait until Phase 2/3. Initial architecture supports any choice.

---

## Implementation Notes

This spec provides the complete design for Adya Artistry web platform. The immediate implementation focuses on Phase 1 (static landing page) while architecting for future phases. All technical decisions prioritize SEO, performance, and maintainability.

Next step: Create detailed implementation plan with file-by-file breakdown.
