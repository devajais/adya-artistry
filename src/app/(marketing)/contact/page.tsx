// src/app/(marketing)/contact/page.tsx
'use client';

import type { Metadata } from 'next';
import { FormEvent, useState } from 'react';
import { Mail } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';

// Note: metadata export only works in server components
// For client components, use generateMetadata in a parent layout

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Future: API call to send email
    // For now, show success message
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg text-neutral-600">
              Have a question or want to place a custom order? We'd love to hear from you.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-900 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="flex w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-base text-neutral-900 placeholder:text-neutral-400 transition-colors duration-250 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>

                {status === 'success' && (
                  <p className="text-sm text-primary-600 text-center" role="status">
                    Thank you! We'll get back to you soon.
                  </p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <a
                    href={`mailto:${SITE_CONFIG.links.email}`}
                    className="flex items-center gap-3 text-neutral-600 hover:text-primary-600 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    {SITE_CONFIG.links.email}
                  </a>
                  <a
                    href={SITE_CONFIG.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-neutral-600 hover:text-primary-600 transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">
                  Custom Orders
                </h2>
                <p className="text-neutral-600">
                  Looking for something specific? We love creating custom pieces! Reach out
                  with your ideas, and let's bring your vision to life.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">
                  Wholesale Inquiries
                </h2>
                <p className="text-neutral-600">
                  Interested in carrying our products in your store? Contact us to discuss
                  wholesale opportunities and pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
