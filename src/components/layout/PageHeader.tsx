'use client';

import { AnimatedHeading } from '@/components/motion/AnimatedHeading';
import { Reveal } from '@/components/motion/Reveal';

/**
 * Shared page hero used across all inner pages so every page opens in the same
 * warm, editorial rhythm as the homepage.
 */
export function PageHeader({
  eyebrow,
  title,
  highlight,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-cream-100 grain-overlay">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-terracotta-200/40 blur-3xl" />
        <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-sage-200/40 blur-3xl" />
      </div>
      <div className="container-wide relative py-24 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow justify-center">
              <span className="h-px w-8 bg-terracotta-400" />
              {eyebrow}
              <span className="h-px w-8 bg-terracotta-400" />
            </span>
          </Reveal>
          <AnimatedHeading
            as="h1"
            text={title}
            highlight={highlight}
            className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl"
          />
          {subtitle && (
            <Reveal delay={0.1}>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft text-pretty">
                {subtitle}
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
