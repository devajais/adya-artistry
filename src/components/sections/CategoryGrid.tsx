'use client';

import Link from 'next/link';
import { CATEGORIES, FEATURED_CATEGORY_IDS } from '@/lib/constants';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { Reveal } from '@/components/motion/Reveal';
import { AnimatedHeading } from '@/components/motion/AnimatedHeading';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const featured = FEATURED_CATEGORY_IDS.map(
  (id) => CATEGORIES.find((c) => c.id === id)!,
);

// Editorial layout: first card is a tall feature, the rest stack in a column.
const tones = ['terracotta', 'sage', 'cream', 'terracotta'] as const;

export function CategoryGrid() {
  return (
    <section id="collections" className="relative overflow-hidden bg-cream-50 py-24 sm:py-32">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-8 bg-terracotta-400" />
                What we make
              </span>
            </Reveal>
            <AnimatedHeading
              as="h2"
              text="A little collection, made with a lot of heart"
              highlight="heart"
              className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl"
            />
          </div>
          <Reveal delay={0.15}>
            <Link
              href="/shop"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-terracotta-600 hover:text-terracotta-700"
            >
              Browse everything
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:grid-rows-2">
          {featured.map((cat, i) => {
            const isFeature = i === 0;
            return (
              <Reveal
                key={cat.id}
                delay={i * 0.08}
                className={isFeature ? 'lg:row-span-2' : ''}
              >
                <Link href={`/shop`} className="group block h-full">
                  <motion.article
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                    className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-cream-300 bg-cream-100 shadow-soft"
                  >
                    <ImageSlot
                      src={cat.image}
                      alt={cat.title}
                      label={cat.title}
                      tone={tones[i]}
                      className={`w-full overflow-hidden ${isFeature ? 'aspect-[3/4] lg:h-[68%]' : 'aspect-[16/10]'}`}
                      imgClassName="transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="flex flex-1 flex-col justify-between gap-3 p-6">
                      <div>
                        <h3 className="font-display text-2xl font-semibold text-ink">
                          {cat.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                          {cat.description}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta-600">
                        Discover
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </motion.article>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
