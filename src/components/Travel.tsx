import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

const cities: { name: string; style: 'bold' | 'outline' | 'ghost' }[] = [
  { name: 'seoul', style: 'bold' },
  { name: 'london', style: 'outline' },
  { name: 'melbourne', style: 'ghost' },
  { name: 'são paulo', style: 'outline' },
  { name: 'vietnam', style: 'bold' },
  { name: 'waikiki', style: 'outline' },
  { name: 'los angeles', style: 'ghost' },
  { name: 'san diego', style: 'outline' },
  { name: 'rosarito', style: 'bold' },
  { name: 'winnipeg', style: 'ghost' },
  { name: 'las vegas', style: 'outline' },
  { name: 'dubai', style: 'ghost' },
];

const cityColors = {
  bold: { color: '#f5f2ed' },
  outline: { WebkitTextStroke: '2px rgba(245,242,237,0.35)', color: 'transparent' },
  ghost: { color: 'rgba(245,242,237,0.12)' },
};

const bands = [
  { img: 'dubai.jpg', top: 0, height: 350, clip: 'polygon(0% 0%, 100% 0%, 100% 88%, 0% 100%)', pos: '35% 20%' },
  { img: 'night-out-crew.jpg', top: 300, height: 350, clip: 'polygon(0% 12%, 100% 0%, 100% 100%, 0% 88%)', pos: 'center 15%' },
  { img: 'hanbok-hanok.jpg', top: 600, height: 350, clip: 'polygon(0% 0%, 100% 12%, 100% 88%, 0% 100%)', pos: 'center center' },
  { img: 'camry.jpg', top: 900, height: 360, clip: 'polygon(0% 12%, 100% 0%, 100% 100%, 0% 100%)', pos: '40% 20%' },
];

function ParallaxBand({ img, top, height, clip, pos, base, index }: {
  img: string; top: number; height: number; clip: string; pos: string; base: string; index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      style={{
        position: 'absolute', left: 0, width: '100%', overflow: 'hidden',
        top: `${top}px`, height: `${height}px`, clipPath: clip,
      }}
    >
      <motion.img
        className="warm"
        src={`${base}/assets/images/${img}`}
        alt=""
        style={{
          width: '100%', height: '120%', objectFit: 'cover', objectPosition: pos, y,
        }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(26, 26, 26, 0.65)', pointerEvents: 'none',
      }} />
    </motion.div>
  );
}

export default function Travel({ base = '' }: { base?: string }) {
  const citiesRef = useRef<HTMLDivElement>(null);
  const inView = useInView(citiesRef, { once: true, margin: '-80px' });

  return (
    <div style={{ position: 'relative', minHeight: '1260px', overflow: 'hidden', padding: 0 }}>
      {/* Image bands */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, overflow: 'hidden' }}>
        {bands.map((band, i) => (
          <ParallaxBand key={i} {...band} base={base} index={i} />
        ))}
      </div>

      {/* Travel story */}
      <div style={{ position: 'absolute', zIndex: 3, top: '120px', right: '48px', width: '280px' }}>
        <div style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'lowercase' as const, color: 'rgba(245,242,237,0.5)', marginBottom: '24px' }}>places that shaped me</div>
        <p style={{ fontSize: '14px', lineHeight: 1.75, fontWeight: 300, color: '#d4cbbf' }}>
          i travel for the spontaneous turns — the wrong alley that leads to the best meal, the stranger who rewrites your perspective over coffee. every city taught me something i couldn't google. city lights and insomnia walks — this is my classroom.
        </p>
      </div>

      {/* City names */}
      <div ref={citiesRef} style={{
        position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', padding: '80px 0',
      }}>
        {cities.map((city, i) => (
          <motion.div
            key={city.name}
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.07, ease: 'easeOut' }}
            style={{
              textTransform: 'lowercase' as const, lineHeight: 0.85,
              letterSpacing: '-0.5vw', fontSize: '9vw', fontWeight: 800,
              paddingLeft: '24px', ...cityColors[city.style],
            }}
          >
            {city.name}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
