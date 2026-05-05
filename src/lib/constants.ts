import type { Category, NavLink, SiteConfig } from '@/types';

export const SITE_CONFIG: SiteConfig = {
  name: 'Adya Artistry',
  description: 'Handcrafted creations that blend tradition with modern elegance',
  url: 'https://adyaartistry.com',
  ogImage: 'https://adyaartistry.com/og-image.jpg',
  links: {
    instagram: 'https://instagram.com/adyaartistry',
    whatsapp: 'https://wa.me/1234567890',
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

export const CATEGORIES: Category[] = [
  {
    id: 'dreamcatchers',
    name: 'Dreamcatchers',
    slug: 'dreamcatchers',
    description: 'Handwoven dreamcatchers with intricate designs',
    image: '/images/categories/dreamcatchers.jpg',
  },
  {
    id: 'wall-hangings',
    name: 'Wall Hangings',
    slug: 'wall-hangings',
    description: 'Decorative macrame and textile wall art',
    image: '/images/categories/wall-hangings.jpg',
  },
  {
    id: 'candles',
    name: 'Candles',
    slug: 'candles',
    description: 'Hand-poured scented candles in decorative holders',
    image: '/images/categories/candles.jpg',
  },
  {
    id: 'gift-hampers',
    name: 'Gift Hampers',
    slug: 'gift-hampers',
    description: 'Curated gift collections for special occasions',
    image: '/images/categories/gift-hampers.jpg',
  },
  {
    id: 'home-decor',
    name: 'Home Decor',
    slug: 'home-decor',
    description: 'Unique handcrafted pieces for your living space',
    image: '/images/categories/home-decor.jpg',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    slug: 'accessories',
    description: 'Handmade jewelry and personal accessories',
    image: '/images/categories/accessories.jpg',
  },
];
