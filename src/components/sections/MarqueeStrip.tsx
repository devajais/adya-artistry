'use client';

import { Marquee } from '@/components/motion/Marquee';
import { MARQUEE_WORDS } from '@/lib/constants';

export function MarqueeStrip() {
  return (
    <section className="border-y border-terracotta-700/30 bg-terracotta-500 py-5 text-cream-50">
      <Marquee speed={28}>
        {MARQUEE_WORDS.map((w, i) => (
          <span key={`${w}-${i}`} className="flex items-center gap-10">
            <span className="font-display text-2xl italic sm:text-3xl">{w}</span>
            <span className="text-2xl text-cream-100/70">✦</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
