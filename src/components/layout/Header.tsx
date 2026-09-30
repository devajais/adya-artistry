// src/components/layout/Header.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-cream-300 bg-cream-100/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="container-wide">
        <div className="flex h-20 items-center justify-between sm:h-24">
          <Link href="/" aria-label="Adya Artistry — home" className="flex items-center">
            <Image
              src="/adya-artistry-logo-cropped.png"
              alt="Adya Artistry — made with heart"
              width={852}
              height={307}
              priority
              className="h-14 w-auto sm:h-16"
            />
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-sm font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-terracotta-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream-50 transition-all hover:-translate-y-0.5 hover:bg-terracotta-600"
            >
              Get in touch
            </Link>
          </nav>

          <button
            type="button"
            className="rounded-full p-2 text-ink hover:bg-ink/5 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-cream-300 bg-cream-100/95 backdrop-blur-md md:hidden"
          >
            <div className="container-wide flex flex-col py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-b border-cream-200 py-3 font-display text-lg text-ink-soft transition-colors hover:text-terracotta-600"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-4 rounded-full bg-ink px-5 py-3 text-center text-sm font-medium text-cream-50"
                onClick={() => setOpen(false)}
              >
                Get in touch
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
