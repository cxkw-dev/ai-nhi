import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About({ base = '' }: { base?: string }) {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['3%', '-3%']);

  const fade = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: '-80px' as const },
    transition: { duration: 0.8, ease: 'easeOut' as const },
  };

  return (
    <div id="about" style={{
      position: 'relative', display: 'flex', minHeight: '550px', overflow: 'hidden',
    }}>
      <div style={{
        fontSize: '180px', fontWeight: 800, textTransform: 'lowercase' as const,
        lineHeight: 0.8, letterSpacing: '-8px', color: 'rgba(26,26,26,0.04)',
        position: 'absolute', zIndex: 0, pointerEvents: 'none', whiteSpace: 'nowrap',
        top: '10px', left: '-10px',
      }}>about</div>

      <div style={{
        width: '55%', padding: '80px 48px', position: 'relative', zIndex: 2,
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>
        <motion.div {...fade} style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'lowercase' as const, color: '#999', marginBottom: '24px' }}>
          02 — about
        </motion.div>

        <motion.div {...fade} transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}>
          <div style={{
            fontSize: '56px', fontWeight: 800, textTransform: 'lowercase' as const,
            lineHeight: 0.92, letterSpacing: '-2px', marginBottom: '24px',
          }}>denver raised.<br />cloud platforms.<br />agentic ai.</div>
        </motion.div>

        <motion.div {...fade} transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}>
          <p style={{ fontSize: '15px', lineHeight: 1.75, fontWeight: 300, color: '#666', maxWidth: '440px' }}>
            a decade at ibm — shipping cloud platforms, kubernetes migrations, and innovation projects across health-tech and enterprise. did time in the bay, now crafting agentic ai at kyndryl out of dallas.
          </p>
          <p style={{ fontSize: '15px', lineHeight: 1.75, fontWeight: 300, color: '#666', maxWidth: '440px', marginTop: '12px' }}>
            along the way i picked up vinyl, passport stamps, and a mean toprock.
          </p>
        </motion.div>

        <motion.div {...fade} transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }} style={{ display: 'flex', gap: '40px', marginTop: '32px' }}>
          <div>
            <div style={{ fontSize: '36px', fontWeight: 800, lineHeight: 1, letterSpacing: '-1px' }}>14+</div>
            <div style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'lowercase' as const, color: '#999', marginTop: '4px' }}>years building</div>
          </div>
          <div>
            <div style={{ fontSize: '36px', fontWeight: 800, lineHeight: 1, letterSpacing: '-1px' }}>10</div>
            <div style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'lowercase' as const, color: '#999', marginTop: '4px' }}>years at ibm</div>
          </div>
        </motion.div>

        <motion.a
          {...fade} transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
          href="https://linkedin.com" target="_blank" rel="noopener"
          style={{
            display: 'inline-block', fontSize: '11px', fontWeight: 700, letterSpacing: '2px',
            textTransform: 'lowercase' as const, textDecoration: 'underline', textUnderlineOffset: '3px',
            color: '#1a1a1a', marginTop: '24px',
          }}
        >[&nbsp;&nbsp;linkedin&nbsp;&nbsp;]</motion.a>
      </div>

      {/* Image — gentle parallax drift, no flashy reveals */}
      <div ref={imgRef} style={{ width: '45%', position: 'relative', overflow: 'hidden' }}>
        <motion.img
          src={`${base}/assets/images/cafe-portrait.jpg`}
          alt=""
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '110%',
            objectFit: 'cover', objectPosition: 'center 15%',
            filter: 'sepia(25%) saturate(60%) brightness(85%) contrast(100%) hue-rotate(-5deg)',
            y: imgY,
          }}
        />
      </div>
    </div>
  );
}
