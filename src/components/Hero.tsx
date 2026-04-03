import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero({ base = '' }: { base?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={ref} data-section="hero" style={{
      position: 'relative', height: '100vh', minHeight: '700px',
      overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
    }}>
      <motion.img
        className="warm-dark"
        src={`${base}/assets/images/vinyl.jpg`}
        alt=""
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center 60%', y: imgY,
        }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(26,26,26,0.1) 0%, rgba(26,26,26,0) 30%, rgba(26,26,26,0.35) 100%)',
      }} />

      <motion.div
        data-hero="text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        style={{ position: 'relative', zIndex: 2, padding: '0 48px 12px' }}
      >
        <motion.div style={{ opacity: contentOpacity }}>
          <div style={{
            fontSize: '28px', fontWeight: 800, textTransform: 'uppercase' as const,
            lineHeight: 1.1, letterSpacing: '1px', color: '#f5f2ed', marginTop: '8px',
          }}>nocturnal</div>
          <div style={{
            fontSize: '28px', fontWeight: 800, textTransform: 'uppercase' as const,
            lineHeight: 1.1, letterSpacing: '1px', color: 'rgba(245,242,237,0.35)',
          }}>ai engineer</div>
        </motion.div>
      </motion.div>

      <motion.div
        data-hero="footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.3, ease: 'easeOut' }}
        style={{
          position: 'relative', zIndex: 2, padding: '20px 0 28px',
          display: 'flex', alignItems: 'baseline',
          borderTop: '1px solid rgba(245,242,237,0.15)', margin: '0 48px',
        }}
      >
        <motion.div style={{ opacity: contentOpacity, display: 'flex', alignItems: 'baseline', width: '100%' }}>
          <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: '14px', color: '#f5f2ed', marginRight: '32px' }}>andy nguyen</span>
          <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: '14px', color: '#f5f2ed', opacity: 0.4, marginRight: '32px' }}>kyndryl · dallas</span>
          <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: '14px', color: '#f5f2ed', opacity: 0.4, marginLeft: 'auto' }}>scroll</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
