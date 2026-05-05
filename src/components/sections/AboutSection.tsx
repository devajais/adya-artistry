// src/components/sections/AboutSection.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function AboutSection() {
  return (
    <section className="bg-neutral-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Crafted with Passion
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              At Adya Artistry, every piece tells a story. We believe in the beauty of
              handmade crafts and the joy they bring to people's lives. From personalized
              cards to intricate paper flowers, each creation is made with love and attention
              to detail.
            </p>
            <p className="mt-4 text-lg leading-8 text-neutral-600">
              Whether you're looking for a unique gift or supplies for your own creative
              journey, we're here to inspire and delight.
            </p>
            <div className="mt-8">
              <Link href="/about">
                <Button variant="outline" size="lg">
                  Our Story
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-200">
            <img
              src="/images/placeholders/about.jpg"
              alt="Handcrafted items workspace"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
