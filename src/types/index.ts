export interface Category {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    instagram: string;
    whatsapp: string;
  };
}
