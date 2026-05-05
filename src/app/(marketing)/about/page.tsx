// src/app/(marketing)/about/page.tsx
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Adya Artistry, our story, mission, and the passion behind our handmade crafts.',
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
              Our Story
            </h1>
            <p className="mt-6 text-xl text-neutral-600">
              Where creativity meets craftsmanship
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-neutral mx-auto">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-neutral-200 mb-12">
              <img
                src="/images/placeholders/about-hero.jpg"
                alt="Adya Artistry workspace"
                className="h-full w-full object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-neutral-900">
              Handcrafted with Love
            </h2>
            <p className="text-neutral-600">
              Adya Artistry was born from a passion for creating beautiful, meaningful
              handmade items. Every card, flower, and craft supply we offer is carefully
              selected or created with attention to detail and a love for the art of
              making things by hand.
            </p>

            <h2 className="text-2xl font-bold text-neutral-900 mt-12">
              Our Mission
            </h2>
            <p className="text-neutral-600">
              We believe that handmade items carry a special energy and personal touch
              that mass-produced goods simply cannot replicate. Our mission is to bring
              joy to people's lives through unique, high-quality crafts and to inspire
              creativity in others.
            </p>

            <h2 className="text-2xl font-bold text-neutral-900 mt-12">
              What We Offer
            </h2>
            <ul className="text-neutral-600">
              <li>Handmade greeting cards for every occasion</li>
              <li>Intricate paper flowers that last forever</li>
              <li>Premium art supplies for your creative projects</li>
              <li>Handcrafted crochet items</li>
              <li>Custom orders tailored to your needs</li>
              <li>Curated paper packs for crafters</li>
            </ul>

            <div className="mt-12 text-center">
              <Link href="/contact">
                <Button size="lg">Get in Touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
