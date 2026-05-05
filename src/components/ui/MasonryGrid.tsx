// src/components/ui/MasonryGrid.tsx
import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface MasonryGridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: {
    default: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: string;
}

const MasonryGrid = forwardRef<HTMLDivElement, MasonryGridProps>(
  (
    {
      className,
      columns = { default: 1, sm: 2, lg: 3, xl: 4 },
      gap = 'gap-6',
      children,
      ...props
    },
    ref
  ) => {
    const gridClasses = cn(
      'grid',
      gap,
      columns.default === 1 && 'grid-cols-1',
      columns.default === 2 && 'grid-cols-2',
      columns.default === 3 && 'grid-cols-3',
      columns.default === 4 && 'grid-cols-4',
      columns.sm && `sm:grid-cols-${columns.sm}`,
      columns.md && `md:grid-cols-${columns.md}`,
      columns.lg && `lg:grid-cols-${columns.lg}`,
      columns.xl && `xl:grid-cols-${columns.xl}`,
      className
    );

    return (
      <div ref={ref} className={gridClasses} {...props}>
        {children}
      </div>
    );
  }
);

MasonryGrid.displayName = 'MasonryGrid';

export { MasonryGrid };
