import type { Metadata } from 'next';
import { Fraunces, Instrument_Sans } from 'next/font/google';
import { SITE_CONFIG } from '@/lib/constants';
import './globals.css';

// Characterful "soft" serif for display — warm, editorial, hand-crafted feel
const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['SOFT', 'opsz'],
  variable: '--font-display',
  display: 'swap',
});

// Clean humanist sans for body copy
const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  applicationName: SITE_CONFIG.name,
  alternates: { canonical: '/' },
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
  publisher: SITE_CONFIG.name,
  category: 'shopping',
  formatDetection: { email: false, telephone: false, address: false },
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

// Structured data helps search engines understand the brand & site.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      description: SITE_CONFIG.description,
      email: SITE_CONFIG.links.email,
      logo: `${SITE_CONFIG.url}/adya-artistry-logo.png`,
      sameAs: [SITE_CONFIG.links.instagram],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_CONFIG.url}/#website`,
      url: SITE_CONFIG.url,
      name: SITE_CONFIG.name,
      description: SITE_CONFIG.description,
      publisher: { '@id': `${SITE_CONFIG.url}/#organization` },
      inLanguage: 'en',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${fraunces.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
