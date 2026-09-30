import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { MarqueeStrip } from '@/components/sections/MarqueeStrip';
import { CategoryGrid } from '@/components/sections/CategoryGrid';
import { AboutSection } from '@/components/sections/AboutSection';
import { Values } from '@/components/sections/Values';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { Newsletter } from '@/components/sections/Newsletter';

export const metadata: Metadata = {
  title: {
    absolute: 'Adya Artistry — Handmade Cards, Paper Flowers & Crochet Keepsakes',
  },
  description:
    'Adya Artistry makes handmade cards, paper flowers and crochet keepsakes — each one cut, folded and finished by hand in small batches. Explore the collection or order something custom.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <CategoryGrid />
      <AboutSection />
      <Values />
      <Gallery />
      <Testimonials />
      <Newsletter />
    </>
  );
}
