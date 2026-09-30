// src/components/ui/Input.tsx
import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          type={type}
          className={cn(
            'flex h-12 w-full rounded-xl border border-cream-300 bg-cream-50 px-4 py-2 text-base text-ink placeholder:text-ink-muted/60 transition-colors duration-200',
            'focus:border-terracotta-400 focus:outline-none focus:ring-2 focus:ring-terracotta-400/40',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-red-400 focus:border-red-400 focus:ring-red-400/40',
            className,
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input };
