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
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-pink-50/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Explore Our Collections
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Handcrafted items for every occasion and creative need
          </p>
        </div>

        <MasonryGrid
          columns={{ default: 1, sm: 2, lg: 3, xl: 4 }}
          gap="gap-6"
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
