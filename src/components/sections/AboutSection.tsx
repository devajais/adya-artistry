// src/components/sections/AboutSection.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function AboutSection() {
  return (
    <section className="bg-neutral-50 py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-neutral-900 mb-6">
              Handcrafted with Love
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-neutral-600 mb-4">
              Every piece tells a story. We pour our heart into creating unique, handmade items that bring warmth and creativity to your celebrations.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-neutral-600 mb-6">
              From traditional techniques to modern designs, our creations blend craftsmanship with artistic expression.
            </p>
            <div className="mt-6 sm:mt-8 flex justify-center lg:justify-start">
              <Link href="/about">
                <Button variant="outline" size="lg">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-200 max-w-md mx-auto lg:max-w-none lg:mx-0">
            <img
              src="https://placehold.co/600x600/fce7f3/ec4899?text=Workspace"
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
