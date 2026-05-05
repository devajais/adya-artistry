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
