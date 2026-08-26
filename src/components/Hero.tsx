import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ArchedText from './ArchedText';
import Reveal from './Reveal';

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Landing — the turntable, duotoned into bone + forest, with the
 * back-print lockup sat over it: arched name, club line, motto.
 */
export default function Hero({ base = '' }: { base?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const imgY = useTransform(scrollYProgress, [0, 1], ['-2%', '9%']);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.0]);
  const lockupY = useTransform(scrollYProgress, [0, 1], ['0%', '-52%']);
  const footerY = useTransform(scrollYProgress, [0, 1], ['0%', '26%']);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div
      ref={ref}
      data-section="hero"
      className="duo"
      style={{
        position: 'relative', height: '100vh', minHeight: '680px',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      }}
    >
      {/* the photograph unmasks from the centre out as the page loads */}
      <motion.div
        initial={{ clipPath: 'inset(14% 12% 14% 12%)' }}
        animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        transition={{ duration: 1.8, ease: EASE, delay: 0.1 }}
        style={{ position: 'absolute', inset: 0, willChange: 'clip-path' }}
      >
        <motion.img
          src={`${base}/assets/images/vinyl.jpg`}
          alt=""
          style={{
            position: 'absolute', inset: '-6% 0', width: '100%', height: '112%',
            objectFit: 'cover', objectPosition: 'center 58%', y: imgY, scale: imgScale,
          }}
        />
      </motion.div>

      {/* scrim — guarantees the top reads bone and the base reads forest,
          whatever the viewport crops away */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background:
          'linear-gradient(180deg, rgba(237,230,211,0.62) 0%, rgba(237,230,211,0.18) 34%,' +
          ' rgba(47,74,51,0.28) 68%, rgba(30,50,35,0.78) 100%)',
      }} />

      {/* back-print lockup */}
      <motion.div
        data-hero="lockup"
        style={{
          position: 'relative', zIndex: 3, y: lockupY,
          padding: '0 var(--edge)', marginTop: '17vh',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          color: 'var(--forest)',
        }}
      >
        <motion.div style={{ opacity: fade, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div
            data-hero="arch"
            initial={{ y: 34, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: EASE, delay: 0.45 }}
            style={{ width: 'min(880px, 96%)' }}
          >
            <ArchedText text="andy nguyen" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: EASE, delay: 1 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <div data-hero="club" className="t-club" style={{
              fontSize: '19px', lineHeight: 1, marginTop: '-14px',
            }}>nocturnal club</div>

            <div data-hero="motto" className="t-club" style={{
              fontSize: '10px', lineHeight: 1, marginTop: '9px', opacity: 0.72,
            }}>ai engineer · dallas</div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* footer rule */}
      <motion.div
        data-hero="footer"
        style={{
          position: 'relative', zIndex: 3, y: footerY,
          margin: '0 var(--edge)', padding: '16px 0 26px',
          borderTop: '1px solid rgba(237,230,211,0.22)',
          display: 'flex', alignItems: 'baseline', gap: '26px',
          color: 'var(--bone)', fontSize: '11px',
          letterSpacing: '0.2em', textTransform: 'uppercase',
        }}
      >
        <motion.div style={{
          opacity: fade, display: 'flex', alignItems: 'baseline',
          gap: '26px', width: '100%',
        }}>
          <Reveal as="span" delay={1.15} duration={0.9}>est. denver</Reveal>
          <Reveal as="span" delay={1.22} duration={0.9} style={{ opacity: 0.5 }}>kyndryl · dallas</Reveal>
          <span style={{ marginLeft: 'auto', marginRight: '52px', display: 'flex', alignItems: 'baseline', gap: '10px', opacity: 0.5 }}>
            <Reveal as="span" delay={1.3} duration={0.9}>scroll</Reveal>
            <motion.span
              aria-hidden="true"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ display: 'inline-block', fontSize: '13px', lineHeight: 1 }}
            >↓</motion.span>
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
