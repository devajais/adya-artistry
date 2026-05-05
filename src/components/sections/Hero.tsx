// src/components/sections/Hero.tsx
'use client';

import { Button } from '@/components/ui/Button';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const words = ['Handcrafted Cards', 'Paper Flowers', 'Art Supplies', 'Crochet Items', 'Custom Creations'];
  const typingSpeed = 150;
  const deletingSpeed = 100;

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(
      handleType,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-pink-50 py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
            Discover Beautiful
            <br />
            <span className="text-primary-600 inline-block min-h-[1.2em]">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600 sm:text-xl">
            Discover unique handmade cards, paper flowers, art supplies, and more.
            Each piece crafted with care and creativity.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link href="/shop">
              <Button size="lg">
                Explore Our Craft
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-20">
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary-400 to-primary-600"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
