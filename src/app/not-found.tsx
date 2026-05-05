// src/app/not-found.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-neutral-900 sm:text-8xl">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-neutral-700 sm:text-3xl">
          Page Not Found
        </h2>
        <p className="mt-4 text-lg text-neutral-600 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. Perhaps you'd like to
          explore our collections instead?
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Link href="/">
            <Button size="lg">Go Home</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
