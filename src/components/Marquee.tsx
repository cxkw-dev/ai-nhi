import { useRef } from 'react';
import {
  motion, useAnimationFrame, useMotionValue, useScroll,
  useSpring, useTransform, useVelocity,
} from 'framer-motion';

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return range === 0 ? min : ((((v - min) % range) + range) % range) + min;
};

/**
 * Back-print ticker. Runs at a constant base speed, then scroll velocity
 * pushes it faster and flips its direction — so the band reacts to how hard
 * you throw the page around.
 */
export default function Marquee({
  items,
  baseVelocity = 2.4,
  tone = 'ink',
}: {
  items: string[];
  baseVelocity?: number;
  tone?: 'ink' | 'paper';
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smooth = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smooth, [0, 1400], [0, 6], { clamp: false });

  // four copies: enough that one full -25% wrap is always covered
  const x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`);
  const direction = useRef(1);

  useAnimationFrame((_, delta) => {
    let move = direction.current * baseVelocity * (delta / 1000);
    const factor = velocityFactor.get();
    if (factor < 0) direction.current = -1;
    else if (factor > 0) direction.current = 1;
    move += direction.current * move * factor;
    baseX.set(baseX.get() + move);
  });

  const onPaper = tone === 'paper';

  return (
    <div
      data-section="marquee"
      style={{
        position: 'relative', overflow: 'hidden',
        background: onPaper ? 'var(--bone)' : 'var(--forest-deep)',
        color: onPaper ? 'var(--forest)' : 'var(--bone)',
        borderTop: `1px solid ${onPaper ? 'rgba(47,74,51,0.16)' : 'rgba(237,230,211,0.14)'}`,
        borderBottom: `1px solid ${onPaper ? 'rgba(47,74,51,0.16)' : 'rgba(237,230,211,0.14)'}`,
        padding: '20px 0',
      }}
    >
      <motion.div style={{ x, display: 'flex', width: 'max-content', willChange: 'transform' }}>
        {[0, 1, 2, 3].map((copy) => (
          <span key={copy} style={{ display: 'flex', alignItems: 'center' }} aria-hidden={copy > 0}>
            {items.map((item, i) => (
              <span key={`${copy}-${i}`} style={{ display: 'flex', alignItems: 'center' }}>
                <span data-marquee="word" className="t-arch" style={{
                  fontSize: 'clamp(30px, 4.6vw, 68px)', textTransform: 'uppercase',
                  lineHeight: 1.1, letterSpacing: '-0.01em', whiteSpace: 'nowrap',
                }}>{item}</span>
                <span data-marquee="dot" style={{
                  display: 'inline-block', width: '9px', height: '9px', borderRadius: '50%',
                  background: 'currentColor', opacity: 0.55, margin: '0 clamp(18px, 2.4vw, 40px)',
                  flexShrink: 0,
                }} />
              </span>
            ))}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
