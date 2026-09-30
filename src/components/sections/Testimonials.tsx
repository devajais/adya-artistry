'use client';

import { TESTIMONIALS } from '@/lib/constants';
import { Reveal } from '@/components/motion/Reveal';
import { AnimatedHeading } from '@/components/motion/AnimatedHeading';

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-cream-100 py-24 sm:py-32">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow justify-center">
              <span className="h-px w-8 bg-terracotta-400" />
              Kind words
              <span className="h-px w-8 bg-terracotta-400" />
            </span>
          </Reveal>
          <AnimatedHeading
            as="h2"
            text="Loved by the people we make for"
            highlight="Loved"
            className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl"
          />
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-[1.75rem] border border-cream-300 bg-cream-50 p-8 shadow-soft">
                <span aria-hidden className="font-display text-6xl leading-none text-terracotta-300">
                  &ldquo;
                </span>
                <blockquote className="-mt-4 flex-1 font-display text-lg italic leading-relaxed text-ink-soft">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-cream-300 pt-4">
                  <div className="font-semibold text-ink">{t.author}</div>
                  <div className="text-sm text-ink-muted">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
