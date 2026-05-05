import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shop - Coming Soon',
  description: 'Our shop is launching soon! Stay tuned for beautiful handmade crafts.',
};

export default function ShopPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-pink-100 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Animated icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-primary-100 rounded-full">
            <Sparkles className="w-10 h-10 text-primary-600 animate-pulse" />
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-neutral-900 sm:text-6xl md:text-7xl mb-6">
            Coming Soon
          </h1>

          <p className="text-xl text-neutral-600 mb-8">
            We're crafting something special for you! Our shop will be opening soon with beautiful handmade items.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/contact">
              <Button size="lg" className="group">
                Get Notified
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" size="lg">
                Explore Our Craft
              </Button>
            </Link>
          </div>

          {/* Progress indicator */}
          <div className="max-w-md mx-auto">
            <p className="text-sm text-neutral-500 mb-3">Launch Progress</p>
            <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full animate-pulse" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
