// src/app/not-found.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream-100 grain-overlay">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-terracotta-200/40 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-sage-200/40 blur-3xl" />
      </div>
      <div className="container-wide relative text-center">
        <p className="eyebrow justify-center">
          <span className="h-px w-8 bg-terracotta-400" />
          Lost the thread
          <span className="h-px w-8 bg-terracotta-400" />
        </p>
        <h1 className="mt-4 font-display text-8xl font-semibold text-ink sm:text-9xl">
          4<span className="text-gradient-warm italic">0</span>4
        </h1>
        <h2 className="mt-2 font-display text-2xl font-semibold text-ink-soft sm:text-3xl">
          This page unravelled
        </h2>
        <p className="mx-auto mt-4 max-w-md text-ink-muted">
          Sorry, we couldn&apos;t find what you were looking for. Let&apos;s get you back to
          something beautiful.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/">
            <Button size="lg">Go home</Button>
          </Link>
          <Link href="/shop">
            <Button variant="outline" size="lg">
              Browse the shop
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
