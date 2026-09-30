'use client';

import { VALUES } from '@/lib/constants';
import { Reveal } from '@/components/motion/Reveal';
import { Hand, Sparkles, Leaf, type LucideIcon } from 'lucide-react';

const icons: Record<string, LucideIcon> = {
  hand: Hand,
  sparkles: Sparkles,
  leaf: Leaf,
};

export function Values() {
  return (
    <section className="relative overflow-hidden bg-sage-800 py-24 text-cream-100 sm:py-28">
      <div className="grain-overlay pointer-events-none absolute inset-0" />
      <div className="container-wide relative">
        <div className="grid gap-12 lg:grid-cols-3">
          {VALUES.map((v, i) => {
            const Icon = icons[v.icon];
            return (
              <Reveal key={v.id} delay={i * 0.12}>
                <div className="flex flex-col items-start">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cream-100/10 text-terracotta-200 ring-1 ring-cream-100/15">
                    {Icon ? <Icon className="h-6 w-6" strokeWidth={1.6} /> : null}
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-cream-50">
                    {v.title}
                  </h3>
                  <p className="mt-3 max-w-xs leading-relaxed text-cream-200/85">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
