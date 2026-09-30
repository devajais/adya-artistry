// src/app/(marketing)/contact/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Adya Artistry for custom orders, questions, or wholesale inquiries.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Us | Adya Artistry',
    description: 'Custom orders, questions, or wholesale — we would love to hear from you.',
    url: 'https://adyaartistry.in/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
