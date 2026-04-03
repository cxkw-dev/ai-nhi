import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const jobs = [
  { year: '2026 —', role: 'agentic ai engineer', desc: 'kyndryl · dallas' },
  { year: '2024 — 26', role: 'senior developer & ai csm', desc: 'ibm · remote' },
  { year: '2020 — 24', role: 'senior developer, cloud expert labs', desc: 'ibm · san francisco' },
  { year: '2015 — 20', role: 'senior developer, cloud garage', desc: 'ibm · san francisco' },
  { year: '2011 — 14', role: 'sap master data analyst', desc: 'leprino foods · denver' },
  { year: '2008 — 11', role: 'portfolio accountant · risk analyst', desc: 'alps · xcel energy' },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div id="experience" ref={ref} style={{
      background: '#1a1a1a', color: '#d4cbbf', padding: '80px 48px', position: 'relative',
    }}>
      <div style={{
        fontSize: '180px', fontWeight: 800, textTransform: 'lowercase' as const,
        lineHeight: 0.8, letterSpacing: '-8px', color: 'rgba(212,203,191,0.03)',
        position: 'absolute', zIndex: 0, pointerEvents: 'none', whiteSpace: 'nowrap',
        top: '10px', right: '48px',
      }}>exp</div>

      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '3px', textTransform: 'lowercase' as const }}>experience</h2>
      </div>

      {jobs.map((job, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
          style={{
            display: 'flex', gap: '32px', padding: '24px 0',
            borderTop: '1px solid rgba(212,203,191,0.08)', alignItems: 'baseline',
          }}
        >
          <div style={{
            fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
            fontSize: '15px', opacity: 0.3, width: '110px', flexShrink: 0,
          }}>{job.year}</div>
          <div style={{ fontSize: '15px', fontWeight: 500 }}>{job.role}</div>
          <div style={{ fontSize: '13px', fontWeight: 300, opacity: 0.35, marginLeft: 'auto' }}>{job.desc}</div>
        </motion.div>
      ))}
    </div>
  );
}
