import type { Category, NavLink, SiteConfig } from '@/types';

export const SITE_CONFIG: SiteConfig = {
  name: 'Adya Artistry',
  description: 'Handcrafted creations that blend tradition with modern elegance',
  url: 'https://adyaartistry.in',
  ogImage: 'https://adyaartistry.in/og-image.jpg',
  links: {
    instagram: 'https://instagram.com/adya.artistry',
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
    image: 'https://placehold.co/400x500/fce7f3/ec4899?text=Handmade+Cards',
    slug: 'handmade-cards',
  },
  {
    id: 'paper-flowers',
    title: 'Paper Flowers',
    description: 'Beautiful paper flowers that last forever',
    image: 'https://placehold.co/400x500/fce7f3/ec4899?text=Paper+Flowers',
    slug: 'paper-flowers',
  },
  {
    id: 'art-supplies',
    title: 'Art Supplies',
    description: 'Quality materials for your creative projects',
    image: 'https://placehold.co/400x500/fce7f3/ec4899?text=Art+Supplies',
    slug: 'art-supplies',
  },
  {
    id: 'crochet',
    title: 'Crochet Items',
    description: 'Handmade crochet pieces with love',
    image: 'https://placehold.co/400x500/fce7f3/ec4899?text=Crochet+Items',
    slug: 'crochet',
  },
  {
    id: 'custom-orders',
    title: 'Custom Orders',
    description: 'Personalized creations just for you',
    image: 'https://placehold.co/400x500/fce7f3/ec4899?text=Custom+Orders',
    slug: 'custom-orders',
  },
  {
    id: 'paper-packs',
    title: 'Paper Packs',
    description: 'Curated collections of beautiful papers',
    image: 'https://placehold.co/400x500/fce7f3/ec4899?text=Paper+Packs',
    slug: 'paper-packs',
  },
] as const;
