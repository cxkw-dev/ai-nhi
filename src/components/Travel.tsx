import { motion, useScroll, useTransform } from 'framer-motion';
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

const SKEW = 6; // percentage offset from center for diagonal
const MAX_W = 50 + SKEW; // 56% — widest extent of each half

const photos: { img: string; pos: string; side: 'left' | 'right'; row: number }[] = [
  { img: 'dubai.jpg', pos: '40% 15%', side: 'left', row: 0 },
  { img: 'night-out-crew.jpg', pos: '50% 30%', side: 'right', row: 0 },
  { img: 'camry.jpg', pos: '50% 20%', side: 'left', row: 1 },
  { img: 'hanbok-hanok.jpg', pos: '55% 30%', side: 'right', row: 1 },
];

function getClipPath(side: 'left' | 'right') {
  // clip-path relative to the half-width container
  const diagonalEnd = ((50 - SKEW) / MAX_W * 100).toFixed(1);
  const diagonalStart = ((2 * SKEW) / MAX_W * 100).toFixed(1);
  if (side === 'left') {
    return `polygon(0 0, 100% 0, ${diagonalEnd}% 100%, 0 100%)`;
  }
  return `polygon(${diagonalStart}% 0, 100% 0, 100% 100%, 0 100%)`;
}

function ParallaxPhoto({ img, pos, base, side, row }: {
  img: string; pos: string; base: string; side: 'left' | 'right'; row: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        top: `${row * 50}%`,
        left: side === 'left' ? 0 : `${50 - SKEW}%`,
        width: `${MAX_W}%`,
        height: '50%',
        clipPath: getClipPath(side),
        overflow: 'hidden',
      }}
    >
      <motion.img
        className="warm"
        src={`${base}/assets/images/${img}`}
        alt=""
        style={{
          position: 'absolute', width: '100%', height: '120%', objectFit: 'cover', objectPosition: pos, y,
        }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(26, 26, 26, 0.65)', pointerEvents: 'none',
      }} />
    </div>
  );
}

export default function Travel({ base = '' }: { base?: string }) {
  return (
    <div data-section="travel" style={{ position: 'relative', minHeight: '1260px', overflow: 'hidden', padding: 0 }}>
      {/* Layered photos — 2x2 grid, no gaps */}
      <div data-travel="photos" style={{
        position: 'absolute', inset: 0, zIndex: 1,
      }}>
        {photos.map((photo, i) => (
          <ParallaxPhoto key={i} {...photo} base={base} />
        ))}
      </div>

      {/* Travel story */}
      <motion.div
        data-travel="story"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1 }}
        style={{ position: 'absolute', zIndex: 3, top: '120px', right: '48px', width: '280px' }}
      >
        <div style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'lowercase' as const, color: 'rgba(245,242,237,0.5)', marginBottom: '24px' }}>places that shaped me</div>
        <p style={{ fontSize: '14px', lineHeight: 1.75, fontWeight: 300, color: '#d4cbbf' }}>
          i travel for the spontaneous turns — the wrong alley that leads to the best meal, the stranger who rewrites your perspective over coffee. every city taught me something i couldn't google. city lights and insomnia walks — this is my classroom.
        </p>
      </motion.div>

      {/* City names — simple fade in */}
      <div data-travel="cities" style={{
        position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', padding: '80px 0',
      }}>
        {cities.map((city) => (
          <motion.div
            key={city.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.6 }}
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
