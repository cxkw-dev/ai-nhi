import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div id="contact" ref={ref} style={{ padding: '100px 48px 60px', position: 'relative' }}>
      <div style={{
        fontSize: '140px', fontWeight: 800, textTransform: 'lowercase' as const,
        lineHeight: 0.8, letterSpacing: '-8px', color: 'rgba(26,26,26,0.04)',
        position: 'absolute', zIndex: 0, pointerEvents: 'none', whiteSpace: 'nowrap',
        top: '20px', left: '48px',
      }}>connect</div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{
          fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
          fontSize: '56px', fontWeight: 400, lineHeight: 1.1, marginBottom: '16px',
        }}
      >let's build<br />something</motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        style={{ fontSize: '14px', fontWeight: 300, color: '#888', maxWidth: '380px', lineHeight: 1.6 }}
      >always down to talk ai, dig through crates, or plan the next trip.</motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        style={{ display: 'flex', gap: '24px', marginTop: '32px' }}
      >
        {['github', 'linkedin', 'email'].map((link) => (
          <a key={link} href="#" style={{
            display: 'inline-block', fontSize: '11px', fontWeight: 700, letterSpacing: '2px',
            textTransform: 'lowercase' as const, textDecoration: 'underline', textUnderlineOffset: '3px',
            color: '#1a1a1a',
          }}>[&nbsp;&nbsp;{link}&nbsp;&nbsp;]</a>
        ))}
      </motion.div>

      <div style={{
        marginTop: '80px', paddingTop: '20px',
        borderTop: '1px solid rgba(26,26,26,0.1)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      }}>
        <div style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: '18px' }}>andy nguyen</div>
        <div style={{ fontSize: '10px', letterSpacing: '2px', color: '#aaa' }}>© 2026</div>
      </div>
    </div>
  );
}
