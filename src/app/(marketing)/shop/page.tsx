import type { Metadata } from 'next';
import Link from 'next/link';
import { CATEGORIES, SITE_CONFIG } from '@/lib/constants';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/motion/Reveal';
import { PageHeader } from '@/components/layout/PageHeader';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shop the Collection',
  description:
    'Browse handmade cards, paper flowers, crochet keepsakes, gift boxes and more — each piece handcrafted in small batches by Adya Artistry.',
  alternates: { canonical: '/shop' },
  openGraph: {
    title: 'Shop the Collection | Adya Artistry',
    description:
      'Handmade cards, paper flowers, crochet keepsakes and more — crafted by hand in small batches.',
    url: `${SITE_CONFIG.url}/shop`,
  },
};

const tones = ['terracotta', 'sage', 'cream'] as const;

export default function ShopPage() {
  return (
    <>
      <PageHeader
        eyebrow="The collection"
        title="Little things, made by hand"
        highlight="hand"
        subtitle="Every piece is cut, folded and finished by hand. Explore the collection below, or commission something entirely your own."
      />

      <section className="bg-cream-50 py-20 sm:py-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat, i) => (
              <Reveal key={cat.id} delay={(i % 3) * 0.08}>
                <Link href="/contact" className="group block h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-cream-300 bg-cream-100 shadow-soft transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-lift">
                    <ImageSlot
                      src={cat.image}
                      alt={cat.title}
                      label={cat.title}
                      tone={tones[i % tones.length]}
                      className="aspect-[4/3] w-full overflow-hidden"
                      imgClassName="transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="flex flex-1 flex-col justify-between gap-3 p-6">
                      <div>
                        <h2 className="font-display text-2xl font-semibold text-ink">
                          {cat.title}
                        </h2>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                          {cat.description}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta-600">
                        Enquire &amp; order
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Custom order CTA */}
      <section className="bg-cream-50 pb-24">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-sage-800 px-6 py-16 text-center text-cream-100 shadow-lift sm:px-14">
            <div className="grain-overlay pointer-events-none absolute inset-0" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-semibold text-cream-50 sm:text-4xl">
                Have something special in mind?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-cream-200/85">
                Weddings, birthdays, a one-of-a-kind gift — tell us the occasion and
                we&apos;ll design a piece made only for you.
              </p>
              <div className="mt-8 flex justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-cream-50 text-sage-800 hover:bg-cream-100">
                    Start a custom order
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
