import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

/**
 * Mid-page centrepiece — the name as a signature rather than a print.
 * Bone field, forest script, nothing else competing for it.
 */
export default function Statement() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const wordY = useTransform(scrollYProgress, [0, 1], ['16%', '-16%']);

  const rise = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: '-100px' as const },
  };

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
      {/* vertical side marks */}
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

      <motion.div {...rise} transition={{ duration: 0.9 }} style={{
        display: 'flex', alignItems: 'center', gap: '18px', width: 'min(560px, 100%)',
      }}>
        <div className="rule" style={{ flex: 1 }} />
        <div className="t-label" style={{ opacity: 0.5, whiteSpace: 'nowrap' }}>the night shift</div>
        <div className="rule" style={{ flex: 1 }} />
      </motion.div>

      <motion.div
        {...rise}
        transition={{ duration: 1.2, delay: 0.1 }}
        style={{ y: wordY, width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <div data-statement="word" className="t-script" style={{
          fontSize: 'clamp(72px, 17vw, 300px)', lineHeight: 1.05,
          padding: '0.14em 0', whiteSpace: 'nowrap',
        }}>Nocturnal</div>
      </motion.div>

      <motion.p {...rise} transition={{ duration: 0.9, delay: 0.2 }} style={{
        maxWidth: '420px', textAlign: 'center', marginTop: '10px',
        fontSize: '14px', lineHeight: 1.8, opacity: 0.6,
      }}>
        best work happens after midnight — a record on, the room quiet,
        the problem finally holding still long enough to solve.
      </motion.p>
    </section>
  );
}
