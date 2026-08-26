import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Reveal from './Reveal';

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Mid-page centrepiece — the name as a signature rather than a print.
 * The script is unmasked left-to-right so it reads as being written.
 */
export default function Statement() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const wordY = useTransform(scrollYProgress, [0, 1], ['14%', '-14%']);
  const ruleScale = useTransform(scrollYProgress, [0.1, 0.45], [0, 1]);

  return (
    <section
      ref={ref}
      data-section="statement"
      style={{
        position: 'relative', overflow: 'hidden',
        background: 'var(--bone)', color: 'var(--forest)',
        padding: '150px var(--edge)',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}
    >
      {(['left', 'right'] as const).map((side) => (
        <div
          key={side}
          data-statement="side"
          className="t-label"
          style={{
            position: 'absolute', [side]: 'var(--edge)', top: '50%',
            transform: side === 'left'
              ? 'translateY(-50%) rotate(180deg)'
              : 'translateY(-50%)',
            writingMode: 'vertical-rl' as const,
            opacity: 0.3, fontSize: '9px',
          }}
        >
          {side === 'left' ? 'after hours' : 'vol. 01'}
        </div>
      ))}

      <div style={{ display: 'flex', alignItems: 'center', gap: '18px', width: 'min(560px, 100%)' }}>
        <motion.div className="rule" style={{ flex: 1, scaleX: ruleScale, transformOrigin: 'right' }} />
        <Reveal as="span" duration={0.8} className="t-label" style={{ opacity: 0.5, whiteSpace: 'nowrap' }}>
          the night shift
        </Reveal>
        <motion.div className="rule" style={{ flex: 1, scaleX: ruleScale, transformOrigin: 'left' }} />
      </div>

      <motion.div style={{ y: wordY, width: '100%', display: 'flex', justifyContent: 'center' }}>
        <motion.div
          data-statement="word"
          className="t-script"
          initial={{ clipPath: 'inset(0 100% -30% 0)' }}
          whileInView={{ clipPath: 'inset(0 0% -30% 0)' }}
          viewport={{ once: true, margin: '-150px' }}
          transition={{ duration: 1.5, ease: EASE, delay: 0.05 }}
          style={{
            fontSize: 'clamp(72px, 17vw, 300px)', lineHeight: 1.05,
            padding: '0.14em 0', whiteSpace: 'nowrap', willChange: 'clip-path',
          }}
        >Nocturnal</motion.div>
      </motion.div>

      <div style={{ maxWidth: '420px', textAlign: 'center', marginTop: '10px' }}>
        {[
          'best work happens after midnight — a record on, the room quiet,',
          'the problem finally holding still long enough to solve.',
        ].map((line, i) => (
          <Reveal key={i} delay={0.5 + i * 0.08} duration={0.9}
            style={{ fontSize: '14px', lineHeight: 1.8, opacity: 0.62 }}>
            {line}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
