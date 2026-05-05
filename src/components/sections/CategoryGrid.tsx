// src/components/sections/CategoryGrid.tsx
import Link from 'next/link';
import { Card, CardImage, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';
import { MasonryGrid } from '@/components/ui/MasonryGrid';
import { CATEGORIES } from '@/lib/constants';

export function CategoryGrid() {
  const floatAnimations = [
    'animate-float-diagonal',
    'animate-float-diagonal-delayed',
    'animate-float-diagonal-delayed-2',
    'animate-float-diagonal-delayed-3',
  ];

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-white via-pink-50/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-neutral-900 mb-4">
            Our Collections
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600">
            Explore our handcrafted creations made with love and care
          </p>
        </div>

        <MasonryGrid
          columns={{ default: 2, sm: 2, md: 3, lg: 4 }}
          gap="gap-5 sm:gap-6"
          enableDiagonalFloat
        >
          {CATEGORIES.map((category, index) => {
            const floatClass = floatAnimations[index % floatAnimations.length];
            return (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className={`block ${floatClass}`}
              >
                <Card hover>
                  <CardImage src={category.image} alt={category.title} />
                  <CardContent>
                    <CardTitle>{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </MasonryGrid>
      </div>
    </section>
  );
}
