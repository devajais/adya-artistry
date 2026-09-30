// src/components/ui/Button.tsx
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-terracotta-500 text-cream-50 shadow-soft hover:bg-terracotta-600 hover:shadow-lift hover:-translate-y-0.5',
        secondary:
          'bg-ink text-cream-50 shadow-soft hover:bg-ink-soft hover:-translate-y-0.5',
        outline:
          'border border-ink/25 bg-transparent text-ink hover:border-ink/60 hover:bg-ink/[0.04]',
        ghost: 'text-ink hover:bg-ink/[0.05]',
      },
      size: {
        sm: 'h-9 px-5 text-sm',
        md: 'h-11 px-7 text-[0.95rem]',
        lg: 'h-14 px-9 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = 'button', children, ...props }, ref) => {
    return (
      <button
        type={type}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
