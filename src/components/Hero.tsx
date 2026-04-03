import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero({ base = '' }: { base?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0px', '80px']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={ref} style={{
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
      <motion.div style={{ position: 'relative', zIndex: 2, padding: '0 48px 12px', y: textY, opacity }}>
        <div style={{
          fontSize: '28px', fontWeight: 800, textTransform: 'uppercase' as const,
          lineHeight: 1.1, letterSpacing: '1px', color: '#f5f2ed',
        }}>covix krew</div>
        <div style={{
          fontSize: '28px', fontWeight: 800, textTransform: 'uppercase' as const,
          lineHeight: 1.1, letterSpacing: '1px', color: 'rgba(245,242,237,0.35)',
        }}>
          full s<span style={{ color: '#ffffff', opacity: 1 }}>n</span>ack developer
        </div>
      </motion.div>
      <motion.div style={{
        position: 'relative', zIndex: 2, padding: '20px 0 28px',
        display: 'flex', alignItems: 'baseline',
        borderTop: '1px solid rgba(245,242,237,0.15)', margin: '0 48px', opacity,
      }}>
        <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: '14px', color: '#f5f2ed', opacity: 1, marginRight: '32px' }}>andy nguyen</span>
        <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: '14px', color: '#f5f2ed', opacity: 0.4, marginRight: '32px' }}>kyndryl · dallas</span>
        <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: '14px', color: '#f5f2ed', opacity: 0.4, marginLeft: 'auto' }}>scroll</span>
      </motion.div>
    </div>
  );
}
