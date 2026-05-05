// src/app/(marketing)/contact/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Adya Artistry for custom orders, questions, or wholesale inquiries.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
