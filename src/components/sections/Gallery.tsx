'use client';

import { GALLERY } from '@/lib/constants';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { Reveal } from '@/components/motion/Reveal';
import { AnimatedHeading } from '@/components/motion/AnimatedHeading';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-cream-50 py-24 sm:py-32">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-8 bg-terracotta-400" />
                From the studio
              </span>
            </Reveal>
            <AnimatedHeading
              as="h2"
              text="A gallery of little things we've loved making"
              highlight="loved"
              className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl"
            />
          </div>
          <Reveal delay={0.15}>
            <Link
              href="/shop"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-terracotta-600 hover:text-terracotta-700"
            >
              See the shop
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        {/* CSS columns masonry */}
        <div className="mt-14 columns-2 gap-5 lg:columns-4 [&>*]:mb-5">
          {GALLERY.map((item, i) => (
            <Reveal key={item.id} delay={(i % 4) * 0.06} className="break-inside-avoid">
              <motion.div
                whileHover={{ y: -5, rotate: i % 2 ? 1 : -1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative overflow-hidden rounded-2xl border border-cream-300 shadow-soft"
              >
                <ImageSlot
                  src={item.image}
                  alt={item.alt}
                  label={item.alt}
                  tone={item.tone as 'terracotta' | 'sage' | 'cream'}
                  className={item.span === 'tall' ? 'aspect-[3/4]' : 'aspect-square'}
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink/60 via-ink/0 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-sm font-medium text-cream-50">{item.alt}</span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
