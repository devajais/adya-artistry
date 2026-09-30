// src/components/sections/Newsletter.tsx
'use client';

import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/motion/Reveal';
import { AnimatedHeading } from '@/components/motion/AnimatedHeading';
import { ImageSlot } from '@/components/ui/ImageSlot';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Future: API call to subscribe email. For now, optimistic success.
    if (email) {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section className="bg-cream-50 py-24 sm:py-28">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-terracotta-500 px-6 py-16 text-cream-50 shadow-lift sm:px-14 sm:py-20">
          <div className="grain-overlay pointer-events-none absolute inset-0" />
          {/* decorative floating slot */}
          <div className="pointer-events-none absolute -right-10 -top-10 hidden h-56 w-56 rotate-12 opacity-90 md:block">
            <ImageSlot
              src="/images/newsletter/accent.jpg"
              alt=""
              label="Accent"
              tone="cream"
              className="h-full w-full rounded-3xl border-4 border-terracotta-400/40"
              sizes="224px"
            />
          </div>

          <div className="relative mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="eyebrow justify-center text-cream-100">
                <span className="h-px w-8 bg-cream-100/60" />
                Join the studio list
                <span className="h-px w-8 bg-cream-100/60" />
              </span>
            </Reveal>
            <AnimatedHeading
              as="h2"
              text="Be first to see new little things"
              className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-cream-50 sm:text-5xl"
            />
            <Reveal delay={0.1}>
              <p className="mx-auto mt-4 max-w-lg text-cream-100/90">
                New collections, quiet restocks, and the occasional behind-the-scenes
                from the studio. No noise — just the good stuff.
              </p>
            </Reveal>

            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
                className="h-14 flex-1 rounded-full border border-cream-100/30 bg-cream-50/10 px-6 text-cream-50 placeholder:text-cream-100/60 backdrop-blur focus:border-cream-50 focus:outline-none focus:ring-2 focus:ring-cream-50/50"
              />
              <Button
                type="submit"
                size="lg"
                variant="secondary"
                className="bg-cream-50 text-terracotta-700 hover:bg-cream-100"
              >
                Subscribe
              </Button>
            </form>

            {status === 'success' && (
              <p className="mt-4 text-sm text-cream-50" role="status">
                Thank you for subscribing — we&apos;ll be in touch soon. ✦
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
