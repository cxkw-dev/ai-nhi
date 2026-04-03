import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About({ base = '' }: { base?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div id="about" ref={ref} style={{
      position: 'relative', display: 'flex', minHeight: '550px', overflow: 'hidden',
    }}>
      <div style={{
        fontSize: '180px', fontWeight: 800, textTransform: 'lowercase' as const,
        lineHeight: 0.8, letterSpacing: '-8px', color: 'rgba(26,26,26,0.04)',
        position: 'absolute', zIndex: 0, pointerEvents: 'none', whiteSpace: 'nowrap',
        top: '10px', left: '-10px',
      }}>about</div>

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          width: '55%', padding: '80px 48px', position: 'relative', zIndex: 2,
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}
      >
        <div style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'lowercase' as const, color: '#999', marginBottom: '24px' }}>02 — about</div>
        <div style={{
          fontSize: '56px', fontWeight: 800, textTransform: 'lowercase' as const,
          lineHeight: 0.92, letterSpacing: '-2px', marginBottom: '24px',
        }}>
          denver raised.<br />cloud platforms.<br />agentic ai.
        </div>
        <p style={{ fontSize: '15px', lineHeight: 1.75, fontWeight: 300, color: '#666', maxWidth: '440px' }}>
          a decade at ibm — shipping cloud platforms, kubernetes migrations, and innovation projects across health-tech and enterprise. did time in the bay, now crafting agentic ai at kyndryl out of dallas.
        </p>
        <p style={{ fontSize: '15px', lineHeight: 1.75, fontWeight: 300, color: '#666', maxWidth: '440px', marginTop: '12px' }}>
          along the way i picked up vinyl, passport stamps, and a mean toprock.
        </p>
        <div style={{ display: 'flex', gap: '40px', marginTop: '32px' }}>
          <div>
            <div style={{ fontSize: '36px', fontWeight: 800, lineHeight: 1, letterSpacing: '-1px' }}>14+</div>
            <div style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'lowercase' as const, color: '#999', marginTop: '4px' }}>years building</div>
          </div>
          <div>
            <div style={{ fontSize: '36px', fontWeight: 800, lineHeight: 1, letterSpacing: '-1px' }}>10</div>
            <div style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'lowercase' as const, color: '#999', marginTop: '4px' }}>years at ibm</div>
          </div>
        </div>
        <a href="https://linkedin.com" target="_blank" rel="noopener" style={{
          display: 'inline-block', fontSize: '11px', fontWeight: 700, letterSpacing: '2px',
          textTransform: 'lowercase' as const, textDecoration: 'underline', textUnderlineOffset: '3px',
          color: '#1a1a1a', marginTop: '24px',
        }}>[&nbsp;&nbsp;linkedin&nbsp;&nbsp;]</a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{ width: '45%', position: 'relative', overflow: 'hidden' }}
      >
        <img
          src={`${base}/assets/images/cafe-portrait.jpg`}
          alt=""
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 15%',
            filter: 'sepia(25%) saturate(60%) brightness(85%) contrast(100%) hue-rotate(-5deg)',
          }}
        />
      </motion.div>
    </div>
  );
}
