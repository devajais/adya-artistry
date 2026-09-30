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

// Image paths point at /public/images/... — drop real photos there to replace
// the on-brand placeholders. See IMAGES.md for dimensions and the full list.
export const CATEGORIES = [
  {
    id: 'handmade-cards',
    title: 'Handmade Cards',
    description: 'Beautiful greeting cards for every occasion',
    image: '/images/categories/handmade-cards.jpg',
    slug: 'handmade-cards',
  },
  {
    id: 'paper-flowers',
    title: 'Paper Flowers',
    description: 'Delicate handcrafted paper blooms',
    image: '/images/categories/paper-flowers.jpg',
    slug: 'paper-flowers',
  },
  {
    id: 'art-supplies',
    title: 'Art Supplies',
    description: 'Premium materials for creative projects',
    image: '/images/categories/art-supplies.jpg',
    slug: 'art-supplies',
  },
  {
    id: 'crochet',
    title: 'Crochet Items',
    description: 'Handmade crochet pieces with love',
    image: '/images/categories/crochet.jpg',
    slug: 'crochet',
  },
  {
    id: 'custom-orders',
    title: 'Custom Orders',
    description: 'Personalized creations just for you',
    image: '/images/categories/custom-orders.jpg',
    slug: 'custom-orders',
  },
  {
    id: 'paper-packs',
    title: 'Paper Packs',
    description: 'Beautiful paper collections for crafts',
    image: '/images/categories/paper-packs.jpg',
    slug: 'paper-packs',
  },
  {
    id: 'gift-boxes',
    title: 'Gift Boxes',
    description: 'Thoughtfully curated gift sets',
    image: '/images/categories/gift-boxes.jpg',
    slug: 'gift-boxes',
  },
  {
    id: 'bookmarks',
    title: 'Bookmarks',
    description: 'Unique handmade bookmarks for readers',
    image: '/images/categories/bookmarks.jpg',
    slug: 'bookmarks',
  },
] as const;

/** The four hero categories featured on the homepage editorial grid. */
export const FEATURED_CATEGORY_IDS = [
  'handmade-cards',
  'paper-flowers',
  'crochet',
  'custom-orders',
] as const;

/** Masonry gallery slots — swap `image` with real work shots. */
export const GALLERY = [
  { id: 'g1', image: '/images/gallery/piece-01.jpg', alt: 'Hand-lettered greeting card', tone: 'terracotta', span: 'tall' },
  { id: 'g2', image: '/images/gallery/piece-02.jpg', alt: 'Paper flower bouquet', tone: 'sage', span: 'short' },
  { id: 'g3', image: '/images/gallery/piece-03.jpg', alt: 'Crocheted keepsake', tone: 'cream', span: 'short' },
  { id: 'g4', image: '/images/gallery/piece-04.jpg', alt: 'Custom gift box set', tone: 'terracotta', span: 'short' },
  { id: 'g5', image: '/images/gallery/piece-05.jpg', alt: 'Botanical bookmark set', tone: 'sage', span: 'tall' },
  { id: 'g6', image: '/images/gallery/piece-06.jpg', alt: 'Layered paper art', tone: 'cream', span: 'short' },
  { id: 'g7', image: '/images/gallery/piece-07.jpg', alt: 'Wedding stationery suite', tone: 'terracotta', span: 'short' },
  { id: 'g8', image: '/images/gallery/piece-08.jpg', alt: 'Pressed-flower frame', tone: 'sage', span: 'short' },
] as const;

export const VALUES = [
  {
    id: 'handmade',
    title: 'Made by hand',
    body: 'Every piece is cut, folded, and finished by hand — never mass-produced.',
    icon: 'hand',
  },
  {
    id: 'custom',
    title: 'Made for you',
    body: 'Tell us the occasion and we design something wholly yours, down to the detail.',
    icon: 'sparkles',
  },
  {
    id: 'sustainable',
    title: 'Made to last',
    body: 'Thoughtful materials and slow craft, so your keepsake stays beautiful for years.',
    icon: 'leaf',
  },
] as const;

export const PROCESS_STEPS = [
  { id: 's1', no: '01', title: 'Imagine', body: 'We start with your story, the occasion, and the feeling you want to give.' },
  { id: 's2', no: '02', title: 'Craft', body: 'Each element is drawn, cut, and assembled by hand in our small studio.' },
  { id: 's3', no: '03', title: 'Deliver', body: 'Your finished piece is wrapped with care and sent to your door.' },
] as const;

export const TESTIMONIALS = [
  {
    id: 't1',
    quote: 'The custom wedding cards were beyond anything I imagined — guests are still talking about them.',
    author: 'Ananya R.',
    role: 'Bride, Jaipur',
  },
  {
    id: 't2',
    quote: 'You can feel the love in every fold. My paper bouquet has not wilted in a year.',
    author: 'Meera K.',
    role: 'Repeat customer',
  },
  {
    id: 't3',
    quote: 'A tiny studio with an enormous heart. Adya turned my idea into a keepsake.',
    author: 'Rahul S.',
    role: 'Gift order',
  },
] as const;

export const STATS = [
  { value: '2K+', label: 'Pieces handcrafted' },
  { value: '600+', label: 'Happy customers' },
  { value: '100%', label: 'Made by hand' },
  { value: '4.9', label: 'Average rating' },
] as const;

export const MARQUEE_WORDS = [
  'Handmade Cards',
  'Paper Flowers',
  'Crochet',
  'Custom Orders',
  'Gift Boxes',
  'Bookmarks',
  'Paper Packs',
  'Art Supplies',
] as const;
