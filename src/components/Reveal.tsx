import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Masked reveal — the child slides up out of a clipped box rather than
 * fading in.
 *
 * The observer has to sit on the mask, not the sliding child: a child that
 * starts fully translated outside an overflow:hidden parent has an empty
 * intersection rect, so whileInView on it would never fire. Variants
 * propagate the mask's in-view state down instead.
 */
const variants = {
  hidden: (y: string) => ({ y }),
  visible: { y: '0%' },
};

export default function Reveal({
  children,
  delay = 0,
  duration = 1,
  y = '110%',
  as = 'div',
  className,
  style,
  ...rest
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: string;
  as?: 'div' | 'span';
  className?: string;
  style?: React.CSSProperties;
  [key: `data-${string}`]: string | undefined;
}) {
  const inline = as === 'span';
  const Outer = inline ? motion.span : motion.div;

  return (
    <Outer
      className={className}
      {...rest}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      style={{ overflow: 'hidden', display: inline ? 'inline-block' : 'block', ...style }}
    >
      <motion.span
        custom={y}
        variants={variants}
        transition={{ duration, delay, ease: EASE }}
        style={{ display: 'block', willChange: 'transform' }}
      >
        {children}
      </motion.span>
    </Outer>
  );
}

/** Splits a string on spaces and reveals each word on its own stagger. */
export function RevealWords({
  text,
  delay = 0,
  stagger = 0.045,
  className,
  style,
}: {
  text: string;
  delay?: number;
  stagger?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      style={style}
    >
      {text.split(' ').map((word, i) => (
        <span key={`${word}-${i}`} style={{ overflow: 'hidden', display: 'inline-block', verticalAlign: 'bottom' }}>
          <motion.span
            custom="110%"
            variants={variants}
            transition={{ duration: 0.95, delay: delay + i * stagger, ease: EASE }}
            style={{ display: 'inline-block', willChange: 'transform' }}
          >
            {word}
          </motion.span>
          {' '}
        </span>
      ))}
    </motion.span>
  );
}
