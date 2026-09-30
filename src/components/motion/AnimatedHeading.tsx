'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { createElement, type ElementType, type ReactNode } from 'react';

/**
 * Heading reveal: the whole heading fades + slides up once on scroll into view.
 * Words listed in `highlight` (space-separated) get the warm gradient + italic.
 * Uses a single motion wrapper so the text is never left hidden.
 */
export function AnimatedHeading({
  text,
  highlight,
  as: Tag = 'h2',
  className = '',
  delay = 0,
}: {
  text: string;
  highlight?: string;
  as?: ElementType;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const highlightSet = highlight ? highlight.toLowerCase().split(' ') : [];

  const words: ReactNode = text.split(' ').map((w, i, arr) => {
    const clean = w.toLowerCase().replace(/[^a-z]/g, '');
    const isHighlight = highlightSet.includes(clean);
    return (
      <span
        key={`${w}-${i}`}
        className={isHighlight ? 'text-gradient-warm italic' : undefined}
      >
        {w}
        {i < arr.length - 1 ? ' ' : ''}
      </span>
    );
  });

  const inner = reduce ? (
    <span>{words}</span>
  ) : (
    <motion.span
      className="inline-block"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {words}
    </motion.span>
  );

  return createElement(Tag, { className }, inner);
}
