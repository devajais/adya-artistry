// src/app/(marketing)/contact/page.tsx
'use client';

import { FormEvent, useState } from 'react';
import { Mail, MessageCircle, Sparkles, Store } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { PageHeader } from '@/components/layout/PageHeader';
import { Reveal } from '@/components/motion/Reveal';
import { SITE_CONFIG } from '@/lib/constants';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Future: POST to a contact endpoint. For now, optimistic success.
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <>
      <PageHeader
        eyebrow="Say hello"
        title="Let's make something lovely"
        highlight="lovely"
        subtitle="Have a question or a custom order in mind? We'd genuinely love to hear from you."
      />

      <section className="bg-cream-50 py-20 sm:py-24">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Form */}
            <Reveal>
              <div className="rounded-[1.75rem] border border-cream-300 bg-cream-100 p-8 shadow-soft sm:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
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
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
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
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="flex w-full rounded-xl border border-cream-300 bg-cream-50 px-4 py-3 text-base text-ink placeholder:text-ink-muted/60 transition-colors focus:border-terracotta-400 focus:outline-none focus:ring-2 focus:ring-terracotta-400/40"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send message
                  </Button>
                  {status === 'success' && (
                    <p className="text-center text-sm text-sage-600" role="status">
                      Thank you! We&apos;ll get back to you soon. ✦
                    </p>
                  )}
                </form>
              </div>
            </Reveal>

            {/* Info cards */}
            <div className="space-y-5">
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-cream-300 bg-cream-100 p-6 shadow-soft">
                  <h2 className="font-display text-xl font-semibold text-ink">Reach us directly</h2>
                  <div className="mt-4 space-y-3">
                    <a
                      href={`mailto:${SITE_CONFIG.links.email}`}
                      className="flex items-center gap-3 text-ink-soft transition-colors hover:text-terracotta-600"
                    >
                      <Mail className="h-5 w-5 text-terracotta-500" />
                      {SITE_CONFIG.links.email}
                    </a>
                    <a
                      href={SITE_CONFIG.links.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-ink-soft transition-colors hover:text-terracotta-600"
                    >
                      <MessageCircle className="h-5 w-5 text-terracotta-500" />
                      Chat on WhatsApp
                    </a>
                    <a
                      href={SITE_CONFIG.links.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-ink-soft transition-colors hover:text-terracotta-600"
                    >
                      <Sparkles className="h-5 w-5 text-terracotta-500" />
                      @adya.artistry
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="rounded-2xl border border-cream-300 bg-cream-100 p-6 shadow-soft">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-terracotta-500" />
                    <h2 className="font-display text-xl font-semibold text-ink">Custom orders</h2>
                  </div>
                  <p className="mt-3 text-ink-muted">
                    Looking for something specific? We love creating custom pieces — share
                    your idea and let&apos;s bring your vision to life.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.26}>
                <div className="rounded-2xl border border-cream-300 bg-cream-100 p-6 shadow-soft">
                  <div className="flex items-center gap-3">
                    <Store className="h-5 w-5 text-terracotta-500" />
                    <h2 className="font-display text-xl font-semibold text-ink">Wholesale</h2>
                  </div>
                  <p className="mt-3 text-ink-muted">
                    Interested in carrying our pieces in your store? Get in touch to discuss
                    wholesale opportunities and pricing.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
