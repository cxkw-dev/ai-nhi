import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

/**
 * Quiet full-bleed band between the script and the work — one duotoned
 * photograph, one line of type, nothing else.
 */
export default function ParallaxBreak({ base = '' }: { base?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-9%', '9%']);
  const labelX = useTransform(scrollYProgress, [0, 1], ['-3%', '3%']);

  return (
    <div ref={ref} data-section="break" className="duo duo-invert" style={{ position: 'relative', height: '420px' }}>
      <motion.img
        src={`${base}/assets/images/korea-coast.jpg`}
        alt=""
        style={{
          position: 'absolute', top: '-14%', left: 0, width: '100%', height: '128%',
          objectFit: 'cover', objectPosition: 'center center', y: imageY,
        }}
      />

      {/* base scrim — the sky in this frame duotones bright, the label is bone */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(0deg, rgba(30,50,35,0.62) 0%, rgba(30,50,35,0) 42%)',
      }} />

      <motion.div
        data-break="label"
        style={{
          position: 'absolute', left: 'var(--edge)', right: 'var(--edge)', bottom: '34px',
          zIndex: 3, color: 'var(--bone)', x: labelX,
          display: 'flex', alignItems: 'baseline', gap: '20px',
        }}
      >
        <span className="t-label" style={{ opacity: 0.8 }}>02 — between idea and runtime</span>
        <span className="t-label" style={{ opacity: 0.45, marginLeft: 'auto', marginRight: '52px' }}>korea</span>
      </motion.div>
    </div>
  );
}
