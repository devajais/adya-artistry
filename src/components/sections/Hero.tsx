'use client';

import { Button } from '@/components/ui/Button';
import { Magnetic } from '@/components/motion/MagneticButton';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { STATS } from '@/lib/constants';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight, ArrowDown } from 'lucide-react';

// Three.js is client-only and heavy — load it lazily so first paint stays fast.
const CraftScene = dynamic(() => import('@/components/three/CraftScene'), {
  ssr: false,
});

const WORDS = ['Cards', 'Blooms', 'Crochet', 'Keepsakes', 'Gifts'];

export function Hero() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), 2400);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <section className="relative -mt-16 overflow-hidden bg-cream-100 grain-overlay sm:-mt-20">
      {/* soft warm wash, kept to the right so text stays clean */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 top-24 h-[32rem] w-[32rem] rounded-full bg-terracotta-200/40 blur-3xl" />
      </div>

      {/* 3D floating clay objects — confined to the right half, desktop only,
          kept soft so the feature photo stays the focus */}
      <div className="absolute right-0 top-0 z-0 hidden h-full w-1/2 opacity-70 lg:block">
        <CraftScene />
      </div>

      <div className="container-wide relative z-10 grid min-h-[92vh] grid-cols-1 items-center gap-12 py-28 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: copy */}
        <div className="max-w-2xl">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="h-px w-8 bg-terracotta-400" />
            Handmade in small batches
          </motion.span>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-6xl md:text-7xl">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              Beautifully
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              handcrafted
            </motion.span>
            <motion.span
              className="mt-1 flex flex-wrap items-baseline gap-x-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.19, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-normal italic text-ink-muted">paper</span>
              {/* Single word in normal flow so it shares "paper"'s baseline
                  exactly; mode="wait" keeps only one word present at a time. */}
              {reduce ? (
                <span className="text-gradient-warm italic">{WORDS[0]}</span>
              ) : (
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={WORDS[index]}
                    className="text-gradient-warm inline-block whitespace-nowrap italic"
                    initial={{ opacity: 0, y: '0.18em' }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: '-0.18em' }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {WORDS[index]}
                  </motion.span>
                </AnimatePresence>
              )}
            </motion.span>
          </h1>

          <motion.p
            className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft text-pretty"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            Adya Artistry makes cards, paper flowers, and crochet keepsakes — each
            one cut, folded and finished by hand, so every occasion feels as
            thoughtful as the person it&apos;s for.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <Magnetic>
              <Link href="/shop">
                <Button size="lg">
                  Explore the collection
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </Magnetic>
            <Link href="/about">
              <Button variant="outline" size="lg">
                Our story
              </Button>
            </Link>
          </motion.div>

          {/* stats */}
          <motion.dl
            className="mt-14 grid max-w-lg grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl font-semibold text-terracotta-600">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-ink-muted">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Right: featured image slot, floating card style */}
        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, scale: 0.94, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative mx-auto max-w-sm animate-float-slow">
            <ImageSlot
              src="/images/hero/feature.jpg"
              alt="A signature handcrafted Adya Artistry piece"
              label="Hero feature photo"
              priority
              tone="cream"
              className="aspect-[4/5] w-full rounded-[2rem] border border-cream-300 shadow-lift"
              sizes="(max-width: 1024px) 0px, 34vw"
            />
            <div className="absolute -bottom-5 -left-5 rounded-full bg-cream-50/95 px-4 py-2 text-sm font-medium text-ink shadow-soft backdrop-blur">
              ✦ made with love
            </div>
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-ink-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[0.7rem] uppercase tracking-[0.25em]">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
