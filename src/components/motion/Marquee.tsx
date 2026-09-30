'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * Infinite horizontal marquee. Duplicates its children so the loop is seamless.
 * Used for the "crafted with love" ticker strip.
 */
export function Marquee({
  children,
  speed = 32,
  reverse = false,
  className = '',
}: {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={`flex gap-10 overflow-hidden ${className}`}>{children}</div>;
  }

  return (
    <div className={`flex overflow-hidden ${className}`}>
      <motion.div
        className="flex shrink-0 items-center gap-10 pr-10"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
