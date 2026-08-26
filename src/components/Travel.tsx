import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Reveal from './Reveal';

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
  bold:    { color: 'var(--bone)' },
  outline: { WebkitTextStroke: '1.5px rgba(237,230,211,0.34)', color: 'transparent' },
  ghost:   { color: 'rgba(237,230,211,0.11)' },
};

const EASE = [0.22, 1, 0.36, 1] as const;

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
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  // two nested clips: the outer holds the diagonal seam, the inner wipes the
  // photo in. they cannot share an element, and the duotone layers have to
  // live inside both or they paint a flat wedge where the photo isn't.
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
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        style={{ position: 'absolute', inset: 0 }}
      >
      <motion.div
        className="duo duo-invert"
        variants={{
          hidden: { clipPath: 'inset(0% 0% 100% 0%)' },
          visible: { clipPath: 'inset(0% 0% 0% 0%)' },
        }}
        transition={{ duration: 1.5, ease: EASE, delay: side === 'right' ? 0.12 : 0 }}
        style={{ position: 'absolute', inset: 0, willChange: 'clip-path' }}
      >
        <motion.img
          src={`${base}/assets/images/${img}`}
          alt=""
          style={{
            position: 'absolute', width: '100%', height: '124%',
            objectFit: 'cover', objectPosition: pos, y,
          }}
        />
        {/* sink the photographs so the city names can sit on top of them */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
          background: 'rgba(30,50,35,0.72)',
        }} />
      </motion.div>
      </motion.div>
    </div>
  );
}

export default function Travel({ base = '' }: { base?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const cityY = useTransform(scrollYProgress, [0, 1], ['-2%', '4%']);
  const storyY = useTransform(scrollYProgress, [0, 1], ['14%', '-14%']);

  return (
    <section ref={ref} data-section="travel" style={{
      position: 'relative', minHeight: '1220px', overflow: 'hidden',
      background: 'var(--forest-deep)', color: 'var(--bone)',
    }}>
      {/* layered photos — 2x2, diagonal seam */}
      <div data-travel="photos" style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        {photos.map((photo, i) => (
          <ParallaxPhoto key={i} {...photo} base={base} />
        ))}
      </div>

      <motion.div
        data-travel="story"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1 }}
        style={{ position: 'absolute', zIndex: 3, top: '150px', right: 'var(--edge)', width: '300px', y: storyY }}
      >
        <Reveal duration={0.9} className="t-label" style={{ opacity: 0.65, textShadow: '0 1px 14px rgba(30,50,35,0.8)' }}>
          04 — places that shaped me
        </Reveal>
        <p style={{
          fontSize: '14px', lineHeight: 1.85, opacity: 0.85, marginTop: '22px',
          textShadow: '0 1px 14px rgba(30,50,35,0.8)',
        }}>
          i travel for the spontaneous turns — the wrong alley that leads to the best meal, the
          stranger who rewrites your perspective over coffee. every city taught me something i
          couldn't google. city lights and insomnia walks — this is my classroom.
        </p>
      </motion.div>

      <motion.div data-travel="cities" style={{
        position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column',
        padding: '104px 0', y: cityY,
      }}>
        {cities.map((city) => (
          <motion.div
            key={city.name}
            style={{ overflow: 'hidden' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.div
              className="t-arch"
              variants={{ hidden: { y: '105%' }, visible: { y: '0%' } }}
              transition={{ duration: 1.1, ease: EASE }}
              style={{
                textTransform: 'uppercase' as const, lineHeight: 0.88,
                letterSpacing: '-0.02em', fontSize: '8.4vw',
                paddingLeft: 'var(--edge)', willChange: 'transform',
                ...cityColors[city.style],
              }}
            >
              {city.name}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
