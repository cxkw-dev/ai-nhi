import { motion } from 'framer-motion';

const jobs = [
  {
    year: '2026 —',
    role: 'agentic ai engineer',
    org: 'kyndryl · dallas',
    desc: 'building autonomous agents that think, plan, and ship — claude, copilot, and whatever comes next.',
    tech: ['anthropic claude', 'github copilot', 'python', 'typescript'],
  },
  {
    year: '2024 — 26',
    role: 'senior developer & ai csm',
    org: 'ibm · remote',
    desc: 'ran workshops and hackathons turning client "what if" into production ai. watson orchestrate, use-case discovery, the whole playbook.',
    tech: ['watson', 'python', 'orchestrate'],
  },
  {
    year: '2020 — 24',
    role: 'senior developer, cloud expert labs',
    org: 'ibm · san francisco',
    desc: 'rewired how health-tech handles drug-trial adjudication. streamlined the system that decides who gets what, faster.',
    tech: ['react', 'next.js', 'node', 'kubernetes'],
  },
  {
    year: '2015 — 20',
    role: 'senior developer, cloud garage',
    org: 'ibm · san francisco',
    desc: 'took a monolithic dental school platform and broke it into microservices. kubernetes, containers, the whole migration.',
    tech: ['kubernetes', 'docker', 'ibm cloud', 'postman'],
  },
  {
    year: '2011 — 14',
    role: 'sap master data analyst',
    org: 'leprino foods · denver',
    desc: 'stood up master data across three plants from scratch — migration, validation, governance. the unglamorous backbone work.',
    tech: ['sap', 'data governance'],
  },
  {
    year: '2008 — 11',
    role: 'portfolio accountant · risk analyst',
    org: 'alps · xcel energy',
    desc: 'reconciled cash funds and risk models — equities, bonds, swaps, futures. then moved to energy trading systems.',
    tech: ['risk modeling', 'sungard'],
  },
];

export default function Experience() {
  return (
    <div id="experience" style={{
      background: '#1a1a1a', color: '#d4cbbf', padding: '80px 48px', position: 'relative',
    }}>
      <div style={{
        fontSize: '180px', fontWeight: 800, textTransform: 'lowercase' as const,
        lineHeight: 0.8, letterSpacing: '-8px', color: 'rgba(212,203,191,0.03)',
        position: 'absolute', zIndex: 0, pointerEvents: 'none', whiteSpace: 'nowrap',
        top: '10px', right: '48px',
      }}>exp</div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: '48px' }}
      >
        <h2 style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '3px', textTransform: 'lowercase' as const }}>experience</h2>
      </motion.div>

      {jobs.map((job, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.6 }}
          style={{
            padding: '28px 0',
            borderTop: '1px solid rgba(212,203,191,0.08)',
          }}
        >
          {/* Top row: year + role + org */}
          <div style={{ display: 'flex', gap: '32px', alignItems: 'baseline' }}>
            <div style={{
              fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
              fontSize: '15px', opacity: 0.3, width: '110px', flexShrink: 0,
            }}>{job.year}</div>
            <div style={{ fontSize: '15px', fontWeight: 500 }}>{job.role}</div>
            <div style={{ fontSize: '13px', fontWeight: 300, opacity: 0.35, marginLeft: 'auto' }}>{job.org}</div>
          </div>

          {/* Description */}
          <div style={{
            marginTop: '10px', marginLeft: '142px',
            fontSize: '13px', fontWeight: 300, lineHeight: 1.6, opacity: 0.5,
            maxWidth: '480px',
          }}>{job.desc}</div>

          {/* Tech tags */}
          <div style={{
            marginTop: '10px', marginLeft: '142px',
            display: 'flex', flexWrap: 'wrap' as const, gap: '8px',
          }}>
            {job.tech.map((t) => (
              <span key={t} style={{
                fontSize: '10px', letterSpacing: '1px', textTransform: 'lowercase' as const,
                padding: '3px 10px', border: '1px solid rgba(212,203,191,0.12)',
                borderRadius: '2px', color: 'rgba(212,203,191,0.4)',
              }}>{t}</span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
