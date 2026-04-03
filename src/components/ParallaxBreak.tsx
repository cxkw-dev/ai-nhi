import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxBreak({ base = '' }: { base?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <div ref={ref} data-section="parallax-break" style={{ position: 'relative', height: '500px', overflow: 'hidden' }}>
      <motion.img
        className="warm"
        src={`${base}/assets/images/korea-coast.jpg`}
        alt=""
        style={{
          position: 'absolute', width: '100%', height: '130%',
          objectFit: 'cover', objectPosition: 'center center',
          top: 0, left: 0, y,
        }}
      />
    </div>
  );
}
