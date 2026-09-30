// src/app/(marketing)/about/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { PageHeader } from '@/components/layout/PageHeader';
import { AboutSection } from '@/components/sections/AboutSection';
import { Values } from '@/components/sections/Values';
import { Testimonials } from '@/components/sections/Testimonials';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'Adya Artistry began at a single kitchen table with a box of paper. Meet the small studio behind our handmade cards, paper flowers and crochet keepsakes.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'Our Story | Adya Artistry',
    description:
      'The small studio behind Adya Artistry — slow craft, made one pair of hands at a time.',
    url: `${SITE_CONFIG.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title="Where creativity meets craftsmanship"
        highlight="craftsmanship"
        subtitle="A small studio with an outsized love for handmade things — and the people we make them for."
      />

      <AboutSection />
      <Values />
      <Testimonials />

      <section className="bg-cream-50 py-24">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Let&apos;s make something together
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-ink-soft">
            Whether it&apos;s a single card or a whole wedding suite, we&apos;d love to hear
            your idea.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/contact">
              <Button size="lg">Get in touch</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
