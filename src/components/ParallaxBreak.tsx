import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxBreak({ base = '' }: { base?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.01, 1.08]);
  const labelY = useTransform(scrollYProgress, [0, 1], ['32%', '-32%']);
  const lineX = useTransform(scrollYProgress, [0, 1], ['-18%', '18%']);

  return (
    <div ref={ref} data-section="parallax-break" style={{ position: 'relative', height: '560px', overflow: 'hidden' }}>
      <motion.img
        className="warm"
        src={`${base}/assets/images/korea-coast.jpg`}
        alt=""
        style={{
          position: 'absolute', width: '100%', height: '150%',
          objectFit: 'cover', objectPosition: 'center center',
          top: '-25%', left: 0, y: imageY, scale: imageScale,
        }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(90deg, rgba(26,26,26,0.52), rgba(26,26,26,0.1) 48%, rgba(26,26,26,0.56))',
      }} />
      <motion.div
        data-parallax="label"
        style={{
          position: 'absolute', left: '48px', bottom: '48px', y: labelY,
          color: '#f5f2ed', zIndex: 2, pointerEvents: 'none',
        }}
      >
        <div style={{
          fontSize: '11px', letterSpacing: '3px', textTransform: 'lowercase' as const,
          color: 'rgba(245,242,237,0.55)', marginBottom: '14px',
        }}>between idea and runtime</div>
        <div style={{
          fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
          fontSize: '72px', lineHeight: 0.9, color: 'rgba(245,242,237,0.88)',
        }}>make it move</div>
      </motion.div>
      <motion.div data-parallax="line" style={{
        position: 'absolute', right: '48px', top: '48px', width: '34vw', height: 1,
        background: 'rgba(245,242,237,0.42)', x: lineX,
      }} />
    </div>
  );
}
