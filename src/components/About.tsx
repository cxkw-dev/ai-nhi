import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Reveal from './Reveal';

export default function About({ base = '' }: { base?: string }) {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);

  const fade = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: '-80px' as const },
  };

  const EASE = [0.22, 1, 0.36, 1] as const;

  return (
    <section id="about" data-section="about" style={{
      position: 'relative', display: 'flex', alignItems: 'stretch', gap: '64px',
      padding: '128px var(--edge) 128px', background: 'var(--bone)',
    }}>
      <div data-about="text" style={{
        width: '52%', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>
        <Reveal duration={0.9} className="t-label" style={{ opacity: 0.45 }}>01 — about</Reveal>

        <h2
          data-about="heading"
          className="t-arch"
          style={{
            fontSize: '46px', fontWeight: 400, textTransform: 'uppercase',
            lineHeight: 1.02, letterSpacing: '-0.01em', margin: '26px 0 26px',
          }}
        >
          {['denver raised.', 'cloud platforms.', 'agentic ai.'].map((line, i) => (
            <Reveal key={line} delay={0.06 + i * 0.09} duration={1.05}>{line}</Reveal>
          ))}
        </h2>

        <motion.div {...fade} transition={{ duration: 1, delay: 0.28 }} style={{ maxWidth: '430px' }}>
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
              <Reveal className="t-arch" duration={1} style={{ fontSize: '32px', lineHeight: 1 }}>{s.n}</Reveal>
              <Reveal className="t-label" delay={0.1} duration={1} style={{ marginTop: '8px', opacity: 0.45 }}>
                {s.label}
              </Reveal>
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
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-120px' }}
        style={{ width: '48%', minHeight: '560px', position: 'relative' }}
      >
        <motion.div
          className="duo"
          variants={{
            hidden: { clipPath: 'inset(0% 0% 100% 0%)' },
            visible: { clipPath: 'inset(0% 0% 0% 0%)' },
          }}
          transition={{ duration: 1.4, ease: EASE }}
          style={{ position: 'absolute', inset: 0, willChange: 'clip-path' }}
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
      </motion.div>
    </section>
  );
}
