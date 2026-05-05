import type { Category, NavLink, SiteConfig } from '@/types';

export const SITE_CONFIG: SiteConfig = {
  name: 'Adya Artistry',
  description: 'Handcrafted creations that blend tradition with modern elegance',
  url: 'https://adyaartistry.com',
  ogImage: 'https://adyaartistry.com/og-image.jpg',
  links: {
    instagram: 'https://instagram.com/adyaartistry',
    whatsapp: 'https://wa.me/1234567890',
    email: 'hello@adyaartistry.com',
  },
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_LINKS = {
  shop: [
    { label: 'All Products', href: '/shop' },
    { label: 'New Arrivals', href: '/shop?filter=new' },
    { label: 'Best Sellers', href: '/shop?filter=bestsellers' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
  support: [
    { label: 'Shipping Info', href: '/shipping' },
    { label: 'Returns', href: '/returns' },
    { label: 'FAQ', href: '/faq' },
  ],
};

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
