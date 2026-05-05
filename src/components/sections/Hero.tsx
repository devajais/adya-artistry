// src/components/sections/Hero.tsx
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
            Handcrafted with Love,
            <br />
            <span className="text-primary-600">Designed for You</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600 sm:text-xl">
            Discover unique handmade cards, paper flowers, art supplies, and more.
            Each piece crafted with care and creativity.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg">
              Explore Our Craft
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-20">
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary-400 to-primary-600"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
