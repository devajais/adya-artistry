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
      // Default columns
      columns.default === 1 && 'grid-cols-1',
      columns.default === 2 && 'grid-cols-2',
      columns.default === 3 && 'grid-cols-3',
      columns.default === 4 && 'grid-cols-4',
      // sm breakpoint
      columns.sm === 1 && 'sm:grid-cols-1',
      columns.sm === 2 && 'sm:grid-cols-2',
      columns.sm === 3 && 'sm:grid-cols-3',
      columns.sm === 4 && 'sm:grid-cols-4',
      // md breakpoint
      columns.md === 1 && 'md:grid-cols-1',
      columns.md === 2 && 'md:grid-cols-2',
      columns.md === 3 && 'md:grid-cols-3',
      columns.md === 4 && 'md:grid-cols-4',
      // lg breakpoint
      columns.lg === 1 && 'lg:grid-cols-1',
      columns.lg === 2 && 'lg:grid-cols-2',
      columns.lg === 3 && 'lg:grid-cols-3',
      columns.lg === 4 && 'lg:grid-cols-4',
      // xl breakpoint
      columns.xl === 1 && 'xl:grid-cols-1',
      columns.xl === 2 && 'xl:grid-cols-2',
      columns.xl === 3 && 'xl:grid-cols-3',
      columns.xl === 4 && 'xl:grid-cols-4',
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
