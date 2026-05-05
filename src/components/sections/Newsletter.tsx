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
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Stay Updated
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Subscribe to our newsletter for new collections, exclusive offers, and creative
            inspiration delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-4">
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
            <Button type="submit" size="lg" className="sm:w-auto">
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
