import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About({ base = '' }: { base?: string }) {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);

  const fade = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: '-80px' as const },
  };

  return (
    <section id="about" data-section="about" style={{
      position: 'relative', display: 'flex', alignItems: 'stretch', gap: '64px',
      padding: '128px var(--edge) 128px', background: 'var(--bone)',
    }}>
      <div data-about="text" style={{
        width: '52%', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>
        <motion.div {...fade} transition={{ duration: 0.8 }} className="t-label" style={{ opacity: 0.45 }}>
          01 — about
        </motion.div>

        <motion.h2
          {...fade} transition={{ duration: 0.8, delay: 0.08 }}
          data-about="heading"
          className="t-arch"
          style={{
            fontSize: '46px', fontWeight: 400, textTransform: 'uppercase',
            lineHeight: 1.02, letterSpacing: '-0.01em', margin: '26px 0 26px',
          }}
        >
          denver raised.<br />cloud platforms.<br />agentic ai.
        </motion.h2>

        <motion.div {...fade} transition={{ duration: 0.8, delay: 0.16 }} style={{ maxWidth: '430px' }}>
          <p style={{ fontSize: '15px', lineHeight: 1.85, opacity: 0.78 }}>
            a decade at ibm — shipping cloud platforms, kubernetes migrations, and innovation
            projects across health-tech and enterprise. did time in the bay, now crafting agentic
            ai at kyndryl out of dallas.
          </p>
          <p style={{ fontSize: '15px', lineHeight: 1.85, opacity: 0.78, marginTop: '14px' }}>
            along the way i picked up vinyl, passport stamps, and a mean toprock.
          </p>
        </motion.div>

        <motion.div
          data-about="stats" {...fade} transition={{ duration: 0.8, delay: 0.24 }}
          style={{ display: 'flex', gap: '48px', marginTop: '40px' }}
        >
          {[
            { n: '14+', label: 'years building' },
            { n: '10', label: 'years at ibm' },
          ].map((s) => (
            <div key={s.label}>
              <div className="t-arch" style={{ fontSize: '32px', lineHeight: 1 }}>{s.n}</div>
              <div className="t-label" style={{ marginTop: '8px', opacity: 0.45 }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div {...fade} transition={{ duration: 0.8, delay: 0.3 }} style={{ marginTop: '36px' }}>
          <a className="link" href="https://www.linkedin.com/in/andynhi" target="_blank" rel="noopener noreferrer">
            linkedin
          </a>
        </motion.div>
      </div>

      <motion.div
        data-about="image" ref={imgRef}
        {...fade} transition={{ duration: 1 }}
        className="duo"
        style={{ width: '48%', minHeight: '560px', position: 'relative' }}
      >
        <motion.img
          src={`${base}/assets/images/cafe-portrait.jpg`}
          alt=""
          style={{
            position: 'absolute', top: '-10%', left: 0, width: '100%', height: '120%',
            objectFit: 'cover', objectPosition: 'center 15%', y: imgY,
          }}
        />
      </motion.div>
    </section>
  );
}
