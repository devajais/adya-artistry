// src/components/sections/Newsletter.tsx
'use client';

import { FormEvent, useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Future: API call to subscribe email
    // For now, just show success message
    if (email) {
      setStatus('success');
      setEmail('');

      // Reset after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-neutral-900">
            Stay Connected
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-neutral-600">
            Subscribe to get updates on new collections, special offers, and exclusive handcrafted creations
          </p>

          <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />
            </div>
            <Button type="submit" size="lg" className="w-full sm:w-auto">
              Subscribe
            </Button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-sm text-primary-600" role="status">
              Thank you for subscribing! We'll be in touch soon.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
