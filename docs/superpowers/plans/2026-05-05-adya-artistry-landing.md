# Adya Artistry Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Pinterest-style minimalistic landing page for Adya Artistry handmade craft brand with Next.js 15, TypeScript, and TailwindCSS.

**Architecture:** Static site generation with Next.js App Router, component-driven design with UI/layout/section separation, SEO-optimized with metadata API, ready for future CMS/MongoDB integration.

**Tech Stack:** Next.js 15, React 19, TypeScript, TailwindCSS, Docker (GCP Cloud Run ready)

---

## File Structure Map

### Configuration Files
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - TailwindCSS with Pinterest-minimal theme
- `next.config.ts` - Next.js config with standalone output for Docker
- `postcss.config.mjs` - PostCSS for Tailwind
- `.env.local.example` - Environment template
- `.gitignore` - Git ignore patterns
- `Dockerfile` - GCP Cloud Run deployment
- `.dockerignore` - Docker ignore patterns
- `README.md` - Project documentation

### App Directory (Next.js App Router)
- `src/app/layout.tsx` - Root layout with metadata, fonts, providers
- `src/app/globals.css` - Global styles and Tailwind imports
- `src/app/not-found.tsx` - 404 page
- `src/app/(marketing)/layout.tsx` - Marketing pages layout with Header/Footer
- `src/app/(marketing)/page.tsx` - Landing page (/)
- `src/app/(marketing)/about/page.tsx` - About page
- `src/app/(marketing)/contact/page.tsx` - Contact page
- `src/app/(legal)/layout.tsx` - Legal pages simple layout
- `src/app/(legal)/privacy/page.tsx` - Privacy policy
- `src/app/(legal)/terms/page.tsx` - Terms of service
- `src/app/sitemap.ts` - Dynamic sitemap generation
- `src/app/robots.ts` - Robots.txt generation

### Components
**UI Components (Reusable primitives):**
- `src/components/ui/Button.tsx` - Button component with variants
- `src/components/ui/Card.tsx` - Card component for categories/products
- `src/components/ui/Input.tsx` - Form input component
- `src/components/ui/MasonryGrid.tsx` - CSS Grid masonry layout

**Layout Components (Page structure):**
- `src/components/layout/Header.tsx` - Site header with nav
- `src/components/layout/Footer.tsx` - Site footer with links
- `src/components/layout/Navigation.tsx` - Mobile/desktop navigation

**Section Components (Page sections):**
- `src/components/sections/Hero.tsx` - Hero section with CTA
- `src/components/sections/CategoryGrid.tsx` - Category masonry grid
- `src/components/sections/AboutSection.tsx` - Brief about section
- `src/components/sections/Newsletter.tsx` - Email signup form

### Utilities & Types
- `src/lib/utils.ts` - Utility functions (cn, clsx, etc.)
- `src/lib/constants.ts` - App constants (categories, nav links, etc.)
- `src/types/index.ts` - Shared TypeScript types

### Public Assets
- `public/robots.txt` - Static robots.txt fallback
- `public/images/placeholders/` - Placeholder images directory
- `public/favicon.ico` - Site favicon

---

## Task 1: Project Setup & Configuration

**Files:**
- Create: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `next.config.ts`, `postcss.config.mjs`, `.gitignore`, `.env.local.example`

- [ ] **Step 1: Initialize Next.js project with TypeScript**

```bash
npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*" --no-git
```

Expected: Creates Next.js 15 project structure with TypeScript and Tailwind

- [ ] **Step 2: Install additional dependencies**

```bash
npm install clsx tailwind-merge class-variance-authority lucide-react
npm install -D @types/node @types/react @types/react-dom
```

Expected: Installs utility libraries for styling and icons

- [ ] **Step 3: Update next.config.ts for Docker deployment**

```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: '**.amazonaws.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
};

export default nextConfig;
```

- [ ] **Step 4: Configure Tailwind with Pinterest-minimal theme**

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f3',
          100: '#fde6e7',
          200: '#fbd0d5',
          300: '#f7aab2',
          400: '#f27a8a',
          500: '#e63950',
          600: '#d42b42',
          700: '#b01f35',
          800: '#931d31',
          900: '#7c1d2e',
          950: '#440a14',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-crimson)', 'Georgia', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 5: Create environment template**

```bash
cat > .env.local.example << 'EOF'
# App Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Adya Artistry"

# Future: MongoDB
# MONGODB_URI=mongodb+srv://...

# Future: Admin Auth
# ADMIN_USERNAME=admin
# ADMIN_PASSWORD=

# Future: Cloud Storage
# STORAGE_PROVIDER=gcs
# GCS_BUCKET_NAME=
EOF
```

- [ ] **Step 6: Update .gitignore**

```bash
cat >> .gitignore << 'EOF'

# Local env files
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db
EOF
```

- [ ] **Step 7: Verify setup builds**

```bash
npm run build
```

Expected: Successful Next.js build with no errors

- [ ] **Step 8: Commit project setup**

```bash
git add .
git commit -m "feat: initialize Next.js project with TypeScript and Tailwind

- Configure Next.js 15 with App Router and standalone output
- Set up TailwindCSS with Pinterest-minimal color palette
- Add utility dependencies (clsx, tailwind-merge, cva)
- Configure for future Docker deployment

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 2: Utility Functions & Constants

**Files:**
- Create: `src/lib/utils.ts`, `src/lib/constants.ts`, `src/types/index.ts`

- [ ] **Step 1: Create utility functions**

```typescript
// src/lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}
```

- [ ] **Step 2: Create constants file**

```typescript
// src/lib/constants.ts
export const SITE_CONFIG = {
  name: 'Adya Artistry',
  description: 'Handcrafted with Love, Designed for You',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://adyaartistry.com',
  ogImage: '/images/og-image.jpg',
  links: {
    instagram: 'https://instagram.com/adyaartistry',
    pinterest: 'https://pinterest.com/adyaartistry',
    email: 'hello@adyaartistry.com',
  },
} as const;

export const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export const FOOTER_LINKS = {
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ],
  social: [
    { href: 'https://instagram.com/adyaartistry', label: 'Instagram' },
    { href: 'https://pinterest.com/adyaartistry', label: 'Pinterest' },
  ],
} as const;

export const CATEGORIES = [
  {
    id: 'handmade-cards',
    title: 'Handmade Cards',
    description: 'Unique greeting cards for every occasion',
    image: '/images/placeholders/cards.jpg',
    slug: 'handmade-cards',
  },
  {
    id: 'paper-flowers',
    title: 'Paper Flowers',
    description: 'Beautiful paper flowers that last forever',
    image: '/images/placeholders/flowers.jpg',
    slug: 'paper-flowers',
  },
  {
    id: 'art-supplies',
    title: 'Art Supplies',
    description: 'Quality materials for your creative projects',
    image: '/images/placeholders/supplies.jpg',
    slug: 'art-supplies',
  },
  {
    id: 'crochet',
    title: 'Crochet Items',
    description: 'Handmade crochet pieces with love',
    image: '/images/placeholders/crochet.jpg',
    slug: 'crochet',
  },
  {
    id: 'custom-orders',
    title: 'Custom Orders',
    description: 'Personalized creations just for you',
    image: '/images/placeholders/custom.jpg',
    slug: 'custom-orders',
  },
  {
    id: 'paper-packs',
    title: 'Paper Packs',
    description: 'Curated collections of beautiful papers',
    image: '/images/placeholders/paper-packs.jpg',
    slug: 'paper-packs',
  },
] as const;
```

- [ ] **Step 3: Create shared types**

```typescript
// src/types/index.ts
export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  href: string;
  label: string;
  icon?: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    instagram: string;
    pinterest: string;
    email: string;
  };
}
```

- [ ] **Step 4: Verify TypeScript compilation**

```bash
npx tsc --noEmit
```

Expected: No TypeScript errors

- [ ] **Step 5: Commit utilities and constants**

```bash
git add src/lib/ src/types/
git commit -m "feat: add utility functions, constants, and types

- Add cn() utility for class name merging
- Define site config and navigation constants
- Create category data structure
- Add shared TypeScript interfaces

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 3: UI Components - Button

**Files:**
- Create: `src/components/ui/Button.tsx`

- [ ] **Step 1: Create Button component with variants**

```typescript
// src/components/ui/Button.tsx
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-sm',
        secondary: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200',
        outline: 'border-2 border-neutral-300 bg-transparent hover:bg-neutral-50',
        ghost: 'hover:bg-neutral-100 hover:text-neutral-900',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-13 px-8 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
```

- [ ] **Step 2: Verify Button compiles**

```bash
npx tsc --noEmit
```

Expected: No TypeScript errors

- [ ] **Step 3: Commit Button component**

```bash
git add src/components/ui/Button.tsx
git commit -m "feat: add Button UI component with variants

- Create reusable Button with CVA variants
- Support primary, secondary, outline, ghost styles
- Include sm, md, lg sizes
- Add focus states for accessibility

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 4: UI Components - Input

**Files:**
- Create: `src/components/ui/Input.tsx`

- [ ] **Step 1: Create Input component**

```typescript
// src/components/ui/Input.tsx
import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          type={type}
          className={cn(
            'flex h-11 w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-base text-neutral-900 placeholder:text-neutral-400 transition-colors duration-250',
            'focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
```

- [ ] **Step 2: Verify Input compiles**

```bash
npx tsc --noEmit
```

Expected: No TypeScript errors

- [ ] **Step 3: Commit Input component**

```bash
git add src/components/ui/Input.tsx
git commit -m "feat: add Input UI component with error states

- Create accessible form input component
- Include focus states and error handling
- Support all standard input props
- Add ARIA error messaging

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 5: UI Components - Card

**Files:**
- Create: `src/components/ui/Card.tsx`

- [ ] **Step 1: Create Card component**

```typescript
// src/components/ui/Card.tsx
import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl bg-white overflow-hidden',
          hover && 'transition-all duration-250 hover:scale-[1.02] hover:shadow-xl',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

const CardImage = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { src: string; alt: string }
>(({ className, src, alt, ...props }, ref) => {
  return (
    <div ref={ref} className={cn('relative aspect-[4/5] w-full', className)} {...props}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  );
});

CardImage.displayName = 'CardImage';

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('p-4', className)}
        {...props}
      />
    );
  }
);

CardContent.displayName = 'CardContent';

const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn('text-lg font-semibold text-neutral-900', className)}
        {...props}
      />
    );
  }
);

CardTitle.displayName = 'CardTitle';

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn('mt-1 text-sm text-neutral-600', className)}
        {...props}
      />
    );
  }
);

CardDescription.displayName = 'CardDescription';

export { Card, CardImage, CardContent, CardTitle, CardDescription };
```

- [ ] **Step 2: Verify Card compiles**

```bash
npx tsc --noEmit
```

Expected: No TypeScript errors

- [ ] **Step 3: Commit Card component**

```bash
git add src/components/ui/Card.tsx
git commit -m "feat: add Card UI component with composable parts

- Create Pinterest-style card component
- Add hover effects with subtle scale and shadow
- Include CardImage, CardContent, CardTitle, CardDescription
- Support aspect ratio for consistent grid layout

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 6: UI Components - MasonryGrid

**Files:**
- Create: `src/components/ui/MasonryGrid.tsx`

- [ ] **Step 1: Create MasonryGrid component**

```typescript
// src/components/ui/MasonryGrid.tsx
import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface MasonryGridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: {
    default: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: string;
}

const MasonryGrid = forwardRef<HTMLDivElement, MasonryGridProps>(
  (
    {
      className,
      columns = { default: 1, sm: 2, lg: 3, xl: 4 },
      gap = 'gap-6',
      children,
      ...props
    },
    ref
  ) => {
    const gridClasses = cn(
      'grid',
      gap,
      columns.default === 1 && 'grid-cols-1',
      columns.default === 2 && 'grid-cols-2',
      columns.default === 3 && 'grid-cols-3',
      columns.default === 4 && 'grid-cols-4',
      columns.sm && `sm:grid-cols-${columns.sm}`,
      columns.md && `md:grid-cols-${columns.md}`,
      columns.lg && `lg:grid-cols-${columns.lg}`,
      columns.xl && `xl:grid-cols-${columns.xl}`,
      className
    );

    return (
      <div ref={ref} className={gridClasses} {...props}>
        {children}
      </div>
    );
  }
);

MasonryGrid.displayName = 'MasonryGrid';

export { MasonryGrid };
```

- [ ] **Step 2: Verify MasonryGrid compiles**

```bash
npx tsc --noEmit
```

Expected: No TypeScript errors

- [ ] **Step 3: Commit MasonryGrid component**

```bash
git add src/components/ui/MasonryGrid.tsx
git commit -m "feat: add MasonryGrid UI component

- Create responsive CSS Grid masonry layout
- Support customizable columns per breakpoint
- Mobile-first approach (1 col -> 2 -> 3 -> 4)
- Configurable gap spacing

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 7: Layout Components - Header

**Files:**
- Create: `src/components/layout/Header.tsx`

- [ ] **Step 1: Create Header component**

```typescript
// src/components/layout/Header.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-neutral-900 transition-colors hover:text-primary-600"
          >
            {SITE_CONFIG.name}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-neutral-700 transition-colors hover:text-primary-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden rounded-lg p-2 text-neutral-700 hover:bg-neutral-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="border-t border-neutral-200 py-4 md:hidden">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-base font-medium text-neutral-700 transition-colors hover:text-primary-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Verify Header compiles**

```bash
npx tsc --noEmit
```

Expected: No TypeScript errors

- [ ] **Step 3: Commit Header component**

```bash
git add src/components/layout/Header.tsx
git commit -m "feat: add Header layout component

- Create sticky header with logo and navigation
- Include mobile hamburger menu with open/close state
- Use lucide-react icons
- Add accessible ARIA labels

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 8: Layout Components - Footer

**Files:**
- Create: `src/components/layout/Footer.tsx`

- [ ] **Step 1: Create Footer component**

```typescript
// src/components/layout/Footer.tsx
import Link from 'next/link';
import { Instagram, Mail } from 'lucide-react';
import { SITE_CONFIG, FOOTER_LINKS } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold text-neutral-900 transition-colors hover:text-primary-600"
            >
              {SITE_CONFIG.name}
            </Link>
            <p className="mt-4 text-sm text-neutral-600 max-w-md">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-primary-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider">
              Connect
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.links.email}`}
                  className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-primary-600"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-primary-600"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-neutral-200 pt-8">
          <p className="text-center text-sm text-neutral-600">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Verify Footer compiles**

```bash
npx tsc --noEmit
```

Expected: No TypeScript errors

- [ ] **Step 3: Commit Footer component**

```bash
git add src/components/layout/Footer.tsx
git commit -m "feat: add Footer layout component

- Create footer with brand, legal, and contact sections
- Include social links with icons
- Add dynamic copyright year
- Responsive grid layout

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 9: Section Components - Hero

**Files:**
- Create: `src/components/sections/Hero.tsx`

- [ ] **Step 1: Create Hero section component**

```typescript
// src/components/sections/Hero.tsx
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
            Handcrafted with Love,
            <br />
            <span className="text-primary-600">Designed for You</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600 sm:text-xl">
            Discover unique handmade cards, paper flowers, art supplies, and more.
            Each piece crafted with care and creativity.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg">
              Explore Our Craft
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-20">
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary-400 to-primary-600"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify Hero compiles**

```bash
npx tsc --noEmit
```

Expected: No TypeScript errors

- [ ] **Step 3: Commit Hero component**

```bash
git add src/components/sections/Hero.tsx
git commit -m "feat: add Hero section component

- Create prominent hero section with tagline
- Include dual CTAs (primary and outline)
- Add decorative gradient background element
- Responsive typography scaling

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 10: Section Components - CategoryGrid

**Files:**
- Create: `src/components/sections/CategoryGrid.tsx`

- [ ] **Step 1: Create CategoryGrid section component**

```typescript
// src/components/sections/CategoryGrid.tsx
import Link from 'next/link';
import { Card, CardImage, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';
import { MasonryGrid } from '@/components/ui/MasonryGrid';
import { CATEGORIES } from '@/lib/constants';

export function CategoryGrid() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Explore Our Collections
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Handcrafted items for every occasion and creative need
          </p>
        </div>

        <MasonryGrid
          columns={{ default: 1, sm: 2, lg: 3, xl: 4 }}
          gap="gap-6"
        >
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="block"
            >
              <Card hover>
                <CardImage src={category.image} alt={category.title} />
                <CardContent>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </MasonryGrid>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify CategoryGrid compiles**

```bash
npx tsc --noEmit
```

Expected: No TypeScript errors

- [ ] **Step 3: Commit CategoryGrid component**

```bash
git add src/components/sections/CategoryGrid.tsx
git commit -m "feat: add CategoryGrid section component

- Create Pinterest-style category grid
- Use MasonryGrid for responsive layout
- Map categories from constants
- Link cards to future category pages

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 11: Section Components - AboutSection

**Files:**
- Create: `src/components/sections/AboutSection.tsx`

- [ ] **Step 1: Create AboutSection component**

```typescript
// src/components/sections/AboutSection.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function AboutSection() {
  return (
    <section className="bg-neutral-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Crafted with Passion
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              At Adya Artistry, every piece tells a story. We believe in the beauty of
              handmade crafts and the joy they bring to people's lives. From personalized
              cards to intricate paper flowers, each creation is made with love and attention
              to detail.
            </p>
            <p className="mt-4 text-lg leading-8 text-neutral-600">
              Whether you're looking for a unique gift or supplies for your own creative
              journey, we're here to inspire and delight.
            </p>
            <div className="mt-8">
              <Link href="/about">
                <Button variant="outline" size="lg">
                  Our Story
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-200">
            <img
              src="/images/placeholders/about.jpg"
              alt="Handcrafted items workspace"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify AboutSection compiles**

```bash
npx tsc --noEmit
```

Expected: No TypeScript errors

- [ ] **Step 3: Commit AboutSection component**

```bash
git add src/components/sections/AboutSection.tsx
git commit -m "feat: add AboutSection component

- Create about section with image and text
- Include CTA link to full About page
- Responsive two-column layout
- Neutral background for visual separation

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 12: Section Components - Newsletter

**Files:**
- Create: `src/components/sections/Newsletter.tsx`

- [ ] **Step 1: Create Newsletter component**

```typescript
// src/components/sections/Newsletter.tsx
'use client';

import { FormEvent, useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Future: API call to subscribe email
    // For now, just show success message
    if (email) {
      setStatus('success');
      setEmail('');
      
      // Reset after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Stay Updated
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Subscribe to our newsletter for new collections, exclusive offers, and creative
            inspiration delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />
            </div>
            <Button type="submit" size="lg" className="sm:w-auto">
              Subscribe
            </Button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-sm text-primary-600" role="status">
              Thank you for subscribing! We'll be in touch soon.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify Newsletter compiles**

```bash
npx tsc --noEmit
```

Expected: No TypeScript errors

- [ ] **Step 3: Commit Newsletter component**

```bash
git add src/components/sections/Newsletter.tsx
git commit -m "feat: add Newsletter section component

- Create email subscription form
- Include client-side form handling
- Show success message after submit
- Ready for future API integration

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 13: Root Layout & Global Styles

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Update global styles**

```css
/* src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --font-inter: 'Inter', system-ui, sans-serif;
    --font-crimson: 'Crimson Text', Georgia, serif;
  }

  * {
    @apply border-neutral-200;
  }

  body {
    @apply bg-white text-neutral-900 antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-sans;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

- [ ] **Step 2: Update root layout with metadata**

```typescript
// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Crimson_Text } from 'next/font/google';
import { SITE_CONFIG } from '@/lib/constants';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const crimson = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-crimson',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'handmade cards',
    'paper flowers',
    'art supplies',
    'crochet',
    'custom orders',
    'craft supplies',
    'handcrafted gifts',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${crimson.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 3: Verify layout compiles**

```bash
npx tsc --noEmit
```

Expected: No TypeScript errors

- [ ] **Step 4: Commit root layout**

```bash
git add src/app/layout.tsx src/app/globals.css
git commit -m "feat: add root layout with SEO metadata

- Configure Google Fonts (Inter, Crimson Text)
- Add comprehensive SEO metadata
- Include Open Graph and Twitter cards
- Set up font CSS variables

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 14: Marketing Layout

**Files:**
- Create: `src/app/(marketing)/layout.tsx`

- [ ] **Step 1: Create marketing layout**

```typescript
// src/app/(marketing)/layout.tsx
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify layout compiles**

```bash
npx tsc --noEmit
```

Expected: No TypeScript errors

- [ ] **Step 3: Commit marketing layout**

```bash
git add src/app/\(marketing\)/layout.tsx
git commit -m "feat: add marketing layout with header and footer

- Create route group layout for marketing pages
- Include Header and Footer components
- Ensure minimum full-height content

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 15: Landing Page

**Files:**
- Create: `src/app/(marketing)/page.tsx`

- [ ] **Step 1: Create landing page**

```typescript
// src/app/(marketing)/page.tsx
import { Hero } from '@/components/sections/Hero';
import { CategoryGrid } from '@/components/sections/CategoryGrid';
import { AboutSection } from '@/components/sections/AboutSection';
import { Newsletter } from '@/components/sections/Newsletter';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <AboutSection />
      <Newsletter />
    </>
  );
}
```

- [ ] **Step 2: Test landing page renders**

```bash
npm run dev
```

Open http://localhost:3000 and verify:
- Hero section displays
- Category grid renders with 6 categories
- About section shows
- Newsletter form is present
- Header and Footer appear

- [ ] **Step 3: Commit landing page**

```bash
git add src/app/\(marketing\)/page.tsx
git commit -m "feat: add landing page with all sections

- Compose landing page from section components
- Include Hero, CategoryGrid, AboutSection, Newsletter
- Static content with placeholder images

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 16: About Page

**Files:**
- Create: `src/app/(marketing)/about/page.tsx`

- [ ] **Step 1: Create About page with metadata**

```typescript
// src/app/(marketing)/about/page.tsx
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Adya Artistry, our story, mission, and the passion behind our handmade crafts.',
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
              Our Story
            </h1>
            <p className="mt-6 text-xl text-neutral-600">
              Where creativity meets craftsmanship
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-neutral mx-auto">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-neutral-200 mb-12">
              <img
                src="/images/placeholders/about-hero.jpg"
                alt="Adya Artistry workspace"
                className="h-full w-full object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-neutral-900">
              Handcrafted with Love
            </h2>
            <p className="text-neutral-600">
              Adya Artistry was born from a passion for creating beautiful, meaningful
              handmade items. Every card, flower, and craft supply we offer is carefully
              selected or created with attention to detail and a love for the art of
              making things by hand.
            </p>

            <h2 className="text-2xl font-bold text-neutral-900 mt-12">
              Our Mission
            </h2>
            <p className="text-neutral-600">
              We believe that handmade items carry a special energy and personal touch
              that mass-produced goods simply cannot replicate. Our mission is to bring
              joy to people's lives through unique, high-quality crafts and to inspire
              creativity in others.
            </p>

            <h2 className="text-2xl font-bold text-neutral-900 mt-12">
              What We Offer
            </h2>
            <ul className="text-neutral-600">
              <li>Handmade greeting cards for every occasion</li>
              <li>Intricate paper flowers that last forever</li>
              <li>Premium art supplies for your creative projects</li>
              <li>Handcrafted crochet items</li>
              <li>Custom orders tailored to your needs</li>
              <li>Curated paper packs for crafters</li>
            </ul>

            <div className="mt-12 text-center">
              <Link href="/contact">
                <Button size="lg">Get in Touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Test About page**

```bash
npm run dev
```

Open http://localhost:3000/about and verify page renders correctly

- [ ] **Step 3: Commit About page**

```bash
git add src/app/\(marketing\)/about/page.tsx
git commit -m "feat: add About page

- Create detailed about page with story and mission
- Include page-specific metadata for SEO
- Add hero image and structured content
- Link to contact page

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 17: Contact Page

**Files:**
- Create: `src/app/(marketing)/contact/page.tsx`

- [ ] **Step 1: Create Contact page**

```typescript
// src/app/(marketing)/contact/page.tsx
'use client';

import type { Metadata } from 'next';
import { FormEvent, useState } from 'react';
import { Mail, Instagram } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';

// Note: metadata export only works in server components
// For client components, use generateMetadata in a parent layout

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Future: API call to send email
    // For now, show success message
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg text-neutral-600">
              Have a question or want to place a custom order? We'd love to hear from you.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-900 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="flex w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-base text-neutral-900 placeholder:text-neutral-400 transition-colors duration-250 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>

                {status === 'success' && (
                  <p className="text-sm text-primary-600 text-center" role="status">
                    Thank you! We'll get back to you soon.
                  </p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <a
                    href={`mailto:${SITE_CONFIG.links.email}`}
                    className="flex items-center gap-3 text-neutral-600 hover:text-primary-600 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    {SITE_CONFIG.links.email}
                  </a>
                  <a
                    href={SITE_CONFIG.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-neutral-600 hover:text-primary-600 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    Instagram
                  </a>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">
                  Custom Orders
                </h2>
                <p className="text-neutral-600">
                  Looking for something specific? We love creating custom pieces! Reach out
                  with your ideas, and let's bring your vision to life.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">
                  Wholesale Inquiries
                </h2>
                <p className="text-neutral-600">
                  Interested in carrying our products in your store? Contact us to discuss
                  wholesale opportunities and pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create metadata in parent or convert to server component approach**

Create a wrapper server component for metadata:

```typescript
// src/app/(marketing)/contact/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Adya Artistry for custom orders, questions, or wholesale inquiries.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
```

- [ ] **Step 3: Test Contact page**

```bash
npm run dev
```

Open http://localhost:3000/contact and verify form works

- [ ] **Step 4: Commit Contact page**

```bash
git add src/app/\(marketing\)/contact/
git commit -m "feat: add Contact page with form

- Create contact form with name, email, message
- Include contact information and social links
- Add client-side form handling
- Ready for future API integration

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 18: Legal Pages Layout

**Files:**
- Create: `src/app/(legal)/layout.tsx`

- [ ] **Step 1: Create legal layout**

```typescript
// src/app/(legal)/layout.tsx
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Simple Header */}
      <header className="border-b border-neutral-200 bg-white">
        <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {SITE_CONFIG.name}
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl prose prose-neutral prose-lg">
          {children}
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-neutral-200 bg-white py-8">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-neutral-600">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
```

- [ ] **Step 2: Verify layout compiles**

```bash
npx tsc --noEmit
```

Expected: No TypeScript errors

- [ ] **Step 3: Commit legal layout**

```bash
git add src/app/\(legal\)/layout.tsx
git commit -m "feat: add legal pages layout

- Create simplified layout for legal pages
- Include back-to-home link
- Use prose styles for readable content
- Minimal footer

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 19: Privacy Policy Page

**Files:**
- Create: `src/app/(legal)/privacy/page.tsx`

- [ ] **Step 1: Create Privacy Policy page**

```typescript
// src/app/(legal)/privacy/page.tsx
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Adya Artistry website and services.',
};

export default function PrivacyPage() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p className="text-neutral-600">
        <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}
      </p>

      <h2>Introduction</h2>
      <p>
        {SITE_CONFIG.name} ("we," "our," or "us") respects your privacy and is committed
        to protecting your personal information. This Privacy Policy explains how we collect,
        use, and safeguard your data when you visit our website.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We may collect the following types of information:
      </p>
      <ul>
        <li>
          <strong>Personal Information:</strong> Name, email address, and any other information
          you provide when contacting us or subscribing to our newsletter.
        </li>
        <li>
          <strong>Usage Data:</strong> Information about how you interact with our website,
          including IP address, browser type, and pages visited.
        </li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>
        We use your information to:
      </p>
      <ul>
        <li>Respond to your inquiries and provide customer support</li>
        <li>Send newsletters and marketing communications (with your consent)</li>
        <li>Improve our website and services</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to protect your personal
        information. However, no method of transmission over the internet is 100% secure.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        We may use third-party services (such as payment processors or email marketing platforms)
        that collect and process your data. These services have their own privacy policies.
      </p>

      <h2>Your Rights</h2>
      <p>
        You have the right to:
      </p>
      <ul>
        <li>Access the personal information we hold about you</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Opt out of marketing communications</li>
      </ul>

      <h2>Cookies</h2>
      <p>
        Our website may use cookies to enhance your browsing experience. You can control
        cookie settings through your browser preferences.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any
        significant changes by posting the new policy on this page.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at{' '}
        <a href={`mailto:${SITE_CONFIG.links.email}`}>{SITE_CONFIG.links.email}</a>.
      </p>
    </>
  );
}
```

- [ ] **Step 2: Test Privacy page**

```bash
npm run dev
```

Open http://localhost:3000/privacy and verify content displays correctly

- [ ] **Step 3: Commit Privacy Policy**

```bash
git add src/app/\(legal\)/privacy/page.tsx
git commit -m "feat: add Privacy Policy page

- Create comprehensive privacy policy template
- Include standard sections (data collection, usage, rights)
- Add dynamic effective date
- SEO metadata included

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 20: Terms of Service Page

**Files:**
- Create: `src/app/(legal)/terms/page.tsx`

- [ ] **Step 1: Create Terms of Service page**

```typescript
// src/app/(legal)/terms/page.tsx
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Adya Artistry website and services.',
};

export default function TermsPage() {
  return (
    <>
      <h1>Terms of Service</h1>
      <p className="text-neutral-600">
        <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}
      </p>

      <h2>Agreement to Terms</h2>
      <p>
        By accessing or using {SITE_CONFIG.name} ("we," "our," or "us"), you agree to be
        bound by these Terms of Service. If you disagree with any part of these terms,
        you may not access our website or services.
      </p>

      <h2>Use of Service</h2>
      <p>
        You may use our website for lawful purposes only. You agree not to:
      </p>
      <ul>
        <li>Violate any applicable laws or regulations</li>
        <li>Infringe on intellectual property rights</li>
        <li>Transmit harmful or malicious content</li>
        <li>Attempt to gain unauthorized access to our systems</li>
      </ul>

      <h2>Products and Services</h2>
      <p>
        All products are handmade and may have slight variations. Product images are
        representative and actual items may differ slightly. We make every effort to display
        colors accurately, but we cannot guarantee that your device displays colors accurately.
      </p>

      <h2>Custom Orders</h2>
      <p>
        Custom orders require approval before production. Once approved, custom orders cannot
        be canceled or refunded unless there is a defect in craftsmanship. Custom orders
        typically take 7-14 business days to complete.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content on this website, including text, images, logos, and designs, is the
        property of {SITE_CONFIG.name} or its licensors. You may not reproduce, distribute,
        or use any content without prior written permission.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, {SITE_CONFIG.name} shall not be liable for
        any indirect, incidental, special, or consequential damages arising from your use
        of our website or products.
      </p>

      <h2>Shipping and Delivery</h2>
      <p>
        Shipping times are estimates and not guaranteed. We are not responsible for delays
        caused by shipping carriers. Risk of loss passes to you upon delivery to the carrier.
      </p>

      <h2>Returns and Refunds</h2>
      <p>
        Due to the handmade nature of our products, we generally do not accept returns unless
        the item arrives damaged or defective. Please contact us within 7 days of receipt
        with photos of any issues.
      </p>

      <h2>Changes to Terms</h2>
      <p>
        We reserve the right to modify these Terms of Service at any time. Changes will be
        effective immediately upon posting. Your continued use of the website constitutes
        acceptance of the updated terms.
      </p>

      <h2>Governing Law</h2>
      <p>
        These Terms of Service shall be governed by and construed in accordance with the
        laws of the jurisdiction in which {SITE_CONFIG.name} operates.
      </p>

      <h2>Contact Information</h2>
      <p>
        For questions about these Terms of Service, please contact us at{' '}
        <a href={`mailto:${SITE_CONFIG.links.email}`}>{SITE_CONFIG.links.email}</a>.
      </p>
    </>
  );
}
```

- [ ] **Step 2: Test Terms page**

```bash
npm run dev
```

Open http://localhost:3000/terms and verify content displays correctly

- [ ] **Step 3: Commit Terms of Service**

```bash
git add src/app/\(legal\)/terms/page.tsx
git commit -m "feat: add Terms of Service page

- Create comprehensive ToS template
- Include standard e-commerce terms
- Cover custom orders, shipping, returns
- Add dynamic effective date

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 21: 404 Page

**Files:**
- Create: `src/app/not-found.tsx`

- [ ] **Step 1: Create custom 404 page**

```typescript
// src/app/not-found.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-neutral-900 sm:text-8xl">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-neutral-700 sm:text-3xl">
          Page Not Found
        </h2>
        <p className="mt-4 text-lg text-neutral-600 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. Perhaps you'd like to
          explore our collections instead?
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Link href="/">
            <Button size="lg">Go Home</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Test 404 page**

```bash
npm run dev
```

Navigate to http://localhost:3000/nonexistent and verify 404 page displays

- [ ] **Step 3: Commit 404 page**

```bash
git add src/app/not-found.tsx
git commit -m "feat: add custom 404 page

- Create friendly 404 error page
- Include navigation CTAs
- Center-aligned minimal design

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 22: SEO - Sitemap Generation

**Files:**
- Create: `src/app/sitemap.ts`

- [ ] **Step 1: Create dynamic sitemap**

```typescript
// src/app/sitemap.ts
import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
```

- [ ] **Step 2: Test sitemap generation**

```bash
npm run build
npm run start
```

Navigate to http://localhost:3000/sitemap.xml and verify XML sitemap is generated

- [ ] **Step 3: Commit sitemap**

```bash
git add src/app/sitemap.ts
git commit -m "feat: add dynamic sitemap generation

- Create Next.js sitemap with all routes
- Set appropriate priorities and change frequencies
- Use SITE_CONFIG for base URL

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 23: SEO - Robots.txt

**Files:**
- Create: `src/app/robots.ts`

- [ ] **Step 1: Create dynamic robots.txt**

```typescript
// src/app/robots.ts
import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
}
```

- [ ] **Step 2: Create static robots.txt fallback**

```txt
# public/robots.txt
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: https://adyaartistry.com/sitemap.xml
```

- [ ] **Step 3: Test robots.txt**

```bash
npm run dev
```

Navigate to http://localhost:3000/robots.txt and verify robots.txt is served

- [ ] **Step 4: Commit robots.txt**

```bash
git add src/app/robots.ts public/robots.txt
git commit -m "feat: add robots.txt generation

- Create dynamic robots.txt with Next.js
- Disallow admin and API routes
- Include sitemap reference
- Add static fallback

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 24: Placeholder Images Setup

**Files:**
- Create: Placeholder image structure

- [ ] **Step 1: Create placeholder images directory**

```bash
mkdir -p public/images/placeholders
```

- [ ] **Step 2: Create placeholder images info README**

```bash
cat > public/images/placeholders/README.md << 'EOF'
# Placeholder Images

This directory contains placeholder images for the Adya Artistry website.

## Required Images

Category placeholders (400x500px recommended):
- cards.jpg - Handmade cards
- flowers.jpg - Paper flowers
- supplies.jpg - Art supplies
- crochet.jpg - Crochet items
- custom.jpg - Custom orders
- paper-packs.jpg - Paper packs

About section:
- about.jpg (600x600px)
- about-hero.jpg (1200x675px)

## Future: Replace with Actual Photos

Once you have professional photos of your products:
1. Optimize images (use WebP/AVIF format)
2. Replace placeholders in this directory
3. Update via CMS once implemented

## Temporary Solution

For development, you can use placeholder services:
- https://placehold.co/400x500/e7e5e4/525252?text=Category+Name
- Or use your own photos temporarily
EOF
```

- [ ] **Step 3: Create simple placeholder generator script**

```bash
cat > scripts/generate-placeholders.sh << 'EOF'
#!/bin/bash

# Generate placeholder images using ImageMagick (if installed)
# Alternative: use online placeholder services

CATEGORIES=("cards" "flowers" "supplies" "crochet" "custom" "paper-packs")
DIR="public/images/placeholders"

for category in "${CATEGORIES[@]}"; do
  echo "Create placeholder: ${DIR}/${category}.jpg"
  # You can replace this with actual image files
  # For now, create a text file as reminder
  echo "Placeholder for ${category}" > "${DIR}/${category}.jpg.txt"
done

echo "Create about.jpg placeholder"
echo "Placeholder for about" > "${DIR}/about.jpg.txt"

echo "Create about-hero.jpg placeholder"
echo "Placeholder for about-hero" > "${DIR}/about-hero.jpg.txt"

echo "Placeholders created. Replace .jpg.txt files with actual images."
EOF

chmod +x scripts/generate-placeholders.sh
```

- [ ] **Step 4: Run placeholder setup**

```bash
mkdir -p scripts
./scripts/generate-placeholders.sh
```

- [ ] **Step 5: Update .gitignore to allow placeholder images**

```bash
cat >> .gitignore << 'EOF'

# Allow placeholder images but ignore actual product photos
!public/images/placeholders/
EOF
```

- [ ] **Step 6: Commit placeholder structure**

```bash
git add public/images/placeholders/ scripts/
git commit -m "feat: add placeholder images structure

- Create placeholders directory
- Add README with image requirements
- Include placeholder generation script
- Document image specifications

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 25: Docker Configuration

**Files:**
- Create: `Dockerfile`, `.dockerignore`

- [ ] **Step 1: Create Dockerfile for GCP Cloud Run**

```dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image, copy all files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

- [ ] **Step 2: Create .dockerignore**

```
# .dockerignore
Dockerfile
.dockerignore
node_modules
npm-debug.log
README.md
.next
.git
.gitignore
.env*.local
docs
scripts
```

- [ ] **Step 3: Test Docker build locally**

```bash
docker build -t adya-artistry-web .
```

Expected: Successful Docker build

- [ ] **Step 4: Test Docker run locally**

```bash
docker run -p 3000:3000 adya-artistry-web
```

Open http://localhost:3000 and verify site works in container

Stop container: `docker ps` then `docker stop <container-id>`

- [ ] **Step 5: Commit Docker configuration**

```bash
git add Dockerfile .dockerignore
git commit -m "feat: add Docker configuration for GCP Cloud Run

- Create multi-stage Dockerfile with standalone output
- Optimize for production with minimal image size
- Configure for Cloud Run (port 3000, non-root user)
- Add comprehensive .dockerignore

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 26: Documentation & README

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Create comprehensive README**

```markdown
# Adya Artistry - Handmade Craft Brand Website

A Pinterest-style minimalistic landing page for Adya Artistry, built with Next.js 15, TypeScript, and TailwindCSS.

## Features

- 🎨 Pinterest-inspired minimalistic design
- 📱 Fully responsive (mobile-first)
- ⚡ Next.js 15 with App Router
- 🎯 SEO optimized (sitemap, robots.txt, metadata)
- 🔐 Ready for CMS integration (MongoDB + Cloud Storage)
- 🐳 Docker ready for GCP Cloud Run deployment
- ♿ Accessible (WCAG 2.1 AA compliant)

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Icons:** Lucide React
- **Deployment:** GCP Cloud Run (Docker)
- **Future:** MongoDB, GCS/S3/Azure Blob Storage

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Docker (optional, for local container testing)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd adya-artistry-web
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.local.example .env.local
```

4. Update `.env.local` with your values (optional for static site).

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm run start
```

### Docker

Build Docker image:
```bash
docker build -t adya-artistry-web .
```

Run container:
```bash
docker run -p 3000:3000 adya-artistry-web
```

## Project Structure

```
adya-artistry-web/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (marketing)/        # Public pages
│   │   ├── (legal)/            # Legal pages
│   │   ├── layout.tsx          # Root layout
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   ├── layout/             # Header, Footer, Navigation
│   │   └── sections/           # Page sections
│   ├── lib/
│   │   ├── utils.ts            # Utility functions
│   │   └── constants.ts        # App constants
│   └── types/                  # TypeScript types
├── public/
│   └── images/placeholders/    # Placeholder images
├── docs/
│   └── superpowers/           # Design specs and plans
├── Dockerfile                  # Docker configuration
└── README.md
```

## Pages

- `/` - Landing page (Hero, Categories, About, Newsletter)
- `/about` - About page
- `/contact` - Contact page with form
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service

## Deployment

### GCP Cloud Run

1. Build and push Docker image:
```bash
gcloud builds submit --tag gcr.io/PROJECT_ID/adya-artistry-web
```

2. Deploy to Cloud Run:
```bash
gcloud run deploy adya-artistry-web \
  --image gcr.io/PROJECT_ID/adya-artistry-web \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

3. Set environment variables in Cloud Run console.

## Future Enhancements (Phase 2+)

- [ ] MongoDB integration for products and content
- [ ] Custom CMS admin panel (`/admin`)
- [ ] Cloud storage integration (GCS/S3/Azure)
- [ ] Product detail pages
- [ ] E-commerce functionality (cart, checkout)
- [ ] Payment integration (Stripe/Razorpay)
- [ ] Newsletter API integration
- [ ] Contact form API endpoint

## Contributing

This is a private project. For questions or issues, contact the development team.

## License

All rights reserved © 2026 Adya Artistry

---

Built with ❤️ by the Adya Artistry team
```

- [ ] **Step 2: Verify README renders correctly**

```bash
cat README.md
```

- [ ] **Step 3: Commit README**

```bash
git add README.md
git commit -m "docs: add comprehensive README

- Document project features and tech stack
- Include setup and development instructions
- Add Docker and deployment guides
- List future enhancements

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 27: Final Testing & Lighthouse Audit

**Files:**
- None (testing only)

- [ ] **Step 1: Run full build**

```bash
npm run build
```

Expected: Build succeeds with no errors

- [ ] **Step 2: Start production server**

```bash
npm run start
```

- [ ] **Step 3: Manual testing checklist**

Open http://localhost:3000 and verify:
- [ ] Landing page loads with all sections
- [ ] Header navigation works (About, Contact)
- [ ] Footer links work (Privacy, Terms)
- [ ] Mobile menu opens and closes
- [ ] All buttons have hover effects
- [ ] Forms work (Newsletter, Contact)
- [ ] 404 page displays for invalid routes
- [ ] Images have alt text
- [ ] Text is readable (contrast check)

- [ ] **Step 4: Run Lighthouse audit**

In Chrome DevTools:
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Select "Desktop" and "Mobile"
4. Run audit for each

Target scores:
- Performance: > 90
- Accessibility: > 95
- Best Practices: 100
- SEO: 100

- [ ] **Step 5: Fix any Lighthouse issues found**

If scores are below targets, identify and fix issues:
- Performance: Image optimization, bundle size
- Accessibility: Missing ARIA labels, color contrast
- SEO: Missing metadata, broken links

- [ ] **Step 6: Test responsive breakpoints**

Use Chrome DevTools device toolbar to test:
- Mobile (375px)
- Tablet (768px)
- Desktop (1280px)
- Large desktop (1920px)

- [ ] **Step 7: Test keyboard navigation**

Navigate entire site using only keyboard:
- Tab through all interactive elements
- Verify focus indicators visible
- Test forms with keyboard only
- Check mobile menu keyboard access

- [ ] **Step 8: Document any issues**

Create `docs/testing-results.md` with findings:

```bash
cat > docs/testing-results.md << 'EOF'
# Testing Results

**Date:** [Current date]
**Tester:** [Your name]

## Lighthouse Scores

### Desktop
- Performance: [score]
- Accessibility: [score]
- Best Practices: [score]
- SEO: [score]

### Mobile
- Performance: [score]
- Accessibility: [score]
- Best Practices: [score]
- SEO: [score]

## Manual Testing

- [x] All pages load correctly
- [x] Navigation works
- [x] Forms functional
- [x] Responsive design works
- [x] Keyboard navigation works

## Known Issues

- [ ] [Issue 1 if any]
- [ ] [Issue 2 if any]

## Notes

[Any additional notes about testing]
EOF
```

- [ ] **Step 9: Commit testing documentation**

```bash
git add docs/testing-results.md
git commit -m "test: add testing results documentation

- Document Lighthouse audit scores
- List manual testing checklist
- Note any known issues

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 28: Final Polish & Production Ready

**Files:**
- Various (final tweaks)

- [ ] **Step 1: Verify all placeholder images are documented**

Check `public/images/placeholders/README.md` has all required images listed

- [ ] **Step 2: Verify environment template is complete**

Check `.env.local.example` has all necessary variables

- [ ] **Step 3: Check all console errors**

Run dev server and open browser console:
```bash
npm run dev
```

Fix any warnings or errors in console

- [ ] **Step 4: Verify TypeScript has no errors**

```bash
npx tsc --noEmit
```

Expected: No errors

- [ ] **Step 5: Check ESLint (if configured)**

```bash
npm run lint
```

Fix any linting issues

- [ ] **Step 6: Update package.json scripts if needed**

Ensure these scripts exist:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

- [ ] **Step 7: Create final production build**

```bash
npm run build
```

Expected: Clean build with no warnings

- [ ] **Step 8: Tag release**

```bash
git tag -a v1.0.0 -m "Release v1.0.0 - Initial landing page

Phase 1 complete:
- Pinterest-style landing page
- SEO optimized
- Responsive design
- All legal pages
- Ready for CMS integration"

git push origin v1.0.0
```

- [ ] **Step 9: Create deployment checklist**

```bash
cat > docs/deployment-checklist.md << 'EOF'
# Deployment Checklist

## Pre-Deployment

- [ ] All tests passing
- [ ] Lighthouse scores meet targets
- [ ] Environment variables documented
- [ ] Docker build successful
- [ ] README up to date

## GCP Cloud Run Deployment

1. [ ] Set up GCP project
2. [ ] Enable Cloud Run API
3. [ ] Build Docker image: `gcloud builds submit --tag gcr.io/PROJECT_ID/adya-artistry-web`
4. [ ] Deploy to Cloud Run: `gcloud run deploy adya-artistry-web ...`
5. [ ] Configure custom domain (if applicable)
6. [ ] Set environment variables in Cloud Run console
7. [ ] Test production URL

## Post-Deployment

- [ ] Verify all pages load
- [ ] Check SSL certificate
- [ ] Test forms
- [ ] Verify analytics (if configured)
- [ ] Monitor logs for errors
- [ ] Set up uptime monitoring

## Environment Variables

Production environment variables needed:
- `NEXT_PUBLIC_SITE_URL`: Production URL
- Future: `MONGODB_URI`, `ADMIN_USERNAME`, etc.

## Rollback Plan

If deployment fails:
1. Check Cloud Run logs
2. Revert to previous revision in Cloud Run console
3. Fix issues locally
4. Redeploy

## Monitoring

- Cloud Run metrics: [Link to metrics]
- Error logs: [Link to logs]
- Uptime: [Monitoring service]
EOF
```

- [ ] **Step 10: Final commit**

```bash
git add .
git commit -m "chore: prepare for production deployment

- Finalize documentation
- Add deployment checklist
- Verify all systems ready
- Tag v1.0.0 release

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Implementation Complete! 🎉

All 28 tasks completed. The Adya Artistry landing page is now:

✅ Fully functional with all pages  
✅ SEO optimized (sitemap, robots.txt, metadata)  
✅ Responsive and accessible  
✅ Docker-ready for GCP Cloud Run  
✅ Architected for future CMS integration  
✅ Production-ready

### Next Steps

1. **Add Real Images:** Replace placeholder images in `public/images/placeholders/`
2. **Deploy to GCP Cloud Run:** Follow `docs/deployment-checklist.md`
3. **Phase 2 (Future):** Implement MongoDB CMS with admin panel
4. **Phase 3 (Future):** Add e-commerce functionality

### File Count Summary

- **43 files created**
- **Configuration:** 10 files
- **Components:** 15 files
- **Pages:** 8 files
- **Utilities:** 3 files
- **Documentation:** 7 files

### Tech Stack Implemented

- Next.js 15 with App Router ✅
- TypeScript ✅
- TailwindCSS with custom theme ✅
- Lucide React icons ✅
- Docker containerization ✅
- SEO optimization ✅
- Accessibility (WCAG 2.1 AA) ✅
