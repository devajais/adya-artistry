'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * A documented image placeholder. Drop a real photo into /public/images and
 * pass its path as `src` to replace the placeholder — nothing else changes.
 * While `src` is empty (or fails to load) a warm, on-brand gradient stands in
 * so layouts always look finished. See IMAGES.md for the full slot list.
 */
export function ImageSlot({
  src,
  alt,
  label,
  className,
  imgClassName,
  priority = false,
  tone = 'terracotta',
  sizes = '(max-width: 768px) 100vw, 50vw',
}: {
  src?: string;
  alt: string;
  /** Small caption shown on the placeholder to identify the slot. */
  label?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  tone?: 'terracotta' | 'sage' | 'cream';
  sizes?: string;
}) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;

  const tones: Record<string, string> = {
    terracotta: 'from-terracotta-200 via-cream-200 to-terracotta-100',
    sage: 'from-sage-200 via-cream-200 to-sage-100',
    cream: 'from-cream-300 via-cream-100 to-cream-200',
  };

  return (
    <div className={cn('relative overflow-hidden bg-cream-200', className)}>
      {showPlaceholder ? (
        <div
          className={cn(
            'absolute inset-0 flex items-center justify-center bg-gradient-to-br',
            tones[tone],
          )}
        >
          {label && (
            <span className="px-4 text-center font-display text-xs italic tracking-wide text-ink-muted/70">
              {label}
            </span>
          )}
        </div>
      ) : (
        <Image
          src={src!}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          onError={() => setFailed(true)}
          className={cn('object-cover', imgClassName)}
        />
      )}
    </div>
  );
}
