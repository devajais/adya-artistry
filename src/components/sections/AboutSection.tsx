'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { Reveal } from '@/components/motion/Reveal';
import { AnimatedHeading } from '@/components/motion/AnimatedHeading';
import { PROCESS_STEPS } from '@/lib/constants';

export function AboutSection() {
  return (
    <section id="story" className="relative overflow-hidden bg-cream-100 py-24 sm:py-32">
      <div className="container-wide grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        {/* Images — overlapping, hand-placed feel */}
        <Reveal direction="right">
          <div className="relative mx-auto max-w-md lg:mx-0">
            <ImageSlot
              src="/images/about/studio.jpg"
              alt="Inside the Adya Artistry studio"
              label="Studio photo"
              tone="sage"
              className="aspect-[4/5] w-full rounded-[2rem] border border-cream-300 shadow-lift"
              sizes="(max-width: 1024px) 90vw, 40vw"
            />
            <div className="absolute -bottom-10 -right-6 w-44 rotate-[5deg] sm:w-52">
              <ImageSlot
                src="/images/about/hands.jpg"
                alt="Hands at work on a craft piece"
                label="Hands at work"
                tone="terracotta"
                className="aspect-square w-full rounded-2xl border-4 border-cream-100 shadow-lift"
                sizes="200px"
              />
            </div>
            <div className="absolute -left-6 top-8 hidden rounded-2xl bg-cream-50/95 px-5 py-4 shadow-soft backdrop-blur sm:block">
              <p className="font-display text-3xl font-semibold text-terracotta-600">est. 2021</p>
              <p className="text-xs uppercase tracking-wider text-ink-muted">a small studio</p>
            </div>
          </div>
        </Reveal>

        {/* Copy + process */}
        <div>
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-8 bg-terracotta-400" />
              Our story
            </span>
          </Reveal>
          <AnimatedHeading
            as="h2"
            text="Slow craft, made one pair of hands at a time"
            highlight="hands"
            className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft text-pretty">
              Adya Artistry began at a single kitchen table, with a box of paper and
              a stubborn belief that handmade things carry a warmth machines can&apos;t.
              Today we&apos;re still small on purpose — every card, bloom, and keepsake
              passes through our own hands before it reaches yours.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.id} delay={0.15 + i * 0.1}>
                <div className="border-t border-cream-300 pt-4">
                  <span className="font-display text-2xl font-semibold text-terracotta-400">
                    {step.no}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-10">
              <Link href="/about">
                <Button variant="secondary" size="lg">
                  Read our full story
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
