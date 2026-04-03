import { motion } from 'framer-motion';

const jobs = [
  {
    year: '2026 —',
    role: 'agentic ai engineer',
    org: 'kyndryl · dallas',
    desc: 'building autonomous agents that think, plan, and ship — from prototype to production across enterprise.',
    projects: [
      'designing multi-agent architectures that orchestrate across tools, apis, and knowledge bases. agents that don\'t just answer — they act.',
      'evaluating and integrating the full model landscape. picking the right brain for the right job.',
    ],
    tech: ['anthropic claude', 'openai codex', 'google agent adk', 'langchain', 'crew ai', 'mcp', 'github copilot', 'claude code', 'cline', 'gemini', 'python', 'typescript', 'milvus', 'chromadb'],
  },
  {
    year: '2024 — 26',
    role: 'senior developer & ai csm',
    org: 'ibm ai/data · denver',
    desc: 'workshops, hackathons, pilot builds — turning client "what if" into production ai.',
    projects: [
      'shipped multi-agent system for a government org. one agent handles employee policy, another serves constituents, third routes IT tickets. rag + milvus + servicenow mcp. all in production.',
      'built event-driven dropped call detection for a contact center platform. agent spots abandoned conversations and triggers live agent recovery in real-time.',
    ],
    tech: ['watson orchestrate', 'watsonx.ai', 'granite', 'milvus', 'langflow', 'anthropic mcp', 'llama'],
  },
  {
    year: '2020 — 24',
    role: 'senior developer, cloud expert labs',
    org: 'ibm · san francisco',
    desc: 'health-tech, chaos engineering, blockchain prototypes — whatever the client needed, built to spec.',
    projects: [
      'rewired how drug-trial adjudication works for health professionals. the system that decides who qualifies, faster.',
      'advised a team in mexico on chaos engineering — how to break things on purpose so production doesn\'t.',
      'built a kpi dashboard for a retail org in mexico. real-time performance tracking from zero.',
      'prototyped a secure personal data vault on blockchain. nestjs + typescript.',
    ],
    tech: ['react', 'next.js', 'trpc', 'prisma', 'postgres', 'redis', 'openshift', 'terraform'],
  },
  {
    year: '2015 — 20',
    role: 'jr → senior developer, cloud garage',
    org: 'ibm · san francisco',
    desc: 'five years building the garage from the inside — client delivery, design workshops, and launching new cities.',
    projects: [
      'ripped out an on-prem monolith for a university, rebuilt as kubernetes microservices. ran the design workshops to get there.',
      're-architected a corporate discount platform from monolith to cloud. tdd culture from day one.',
      'launched garage consulting practices in dubai and são paulo. built the delivery frameworks from scratch.',
      'watson image recognition for a fashion startup — identifies clothing from photos and recommends where to buy it.',
      'hr chatbot for an insurance org. automated employee inquiries so hr could breathe.',
      'iot supply chain — real-time dashboard with socket.io and mqtt. track everything, everywhere.',
    ],
    tech: ['react', 'node', 'express', 'kubernetes', 'docker', 'watson', 'cloudant', 'cloud foundry'],
  },
  {
    year: '2012 — 15',
    role: 'sap master data analyst',
    org: 'leprino foods · denver',
    desc: 'deployed master data across three manufacturing plants. migration, validation, governance — the unglamorous backbone work.',
    projects: [],
    tech: ['sap', 'erp', 'data governance'],
  },
  {
    year: '2009 — 12',
    role: 'portfolio accountant',
    org: 'alp funds · denver',
    desc: 'reconciled cash funds and asset securities — equities, bonds, swaps, options, fx, mortgages, futures. all of it.',
    projects: [],
    tech: ['risk modeling', 'securities'],
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
          style={{ padding: '28px 0', borderTop: '1px solid rgba(212,203,191,0.08)' }}
        >
          {/* Header row */}
          <div style={{ display: 'flex', gap: '32px', alignItems: 'baseline' }}>
            <div style={{
              fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
              fontSize: '15px', opacity: 0.3, width: '110px', flexShrink: 0,
            }}>{job.year}</div>
            <div style={{ fontSize: '15px', fontWeight: 500 }}>{job.role}</div>
            <div style={{ fontSize: '13px', fontWeight: 300, opacity: 0.35, marginLeft: 'auto' }}>{job.org}</div>
          </div>

          {/* Summary */}
          <div style={{
            marginTop: '10px', marginLeft: '142px',
            fontSize: '13px', fontWeight: 300, lineHeight: 1.6, opacity: 0.5,
            maxWidth: '520px',
          }}>{job.desc}</div>

          {/* Project bullets */}
          {job.projects.length > 0 && (
            <div style={{ marginTop: '14px', marginLeft: '142px', maxWidth: '520px' }}>
              {job.projects.map((p, j) => (
                <div key={j} style={{
                  fontSize: '12px', fontWeight: 300, lineHeight: 1.6,
                  opacity: 0.35, marginBottom: '8px', paddingLeft: '14px',
                  borderLeft: '1px solid rgba(212,203,191,0.1)',
                }}>{p}</div>
              ))}
            </div>
          )}

          {/* Tech tags */}
          <div style={{
            marginTop: '12px', marginLeft: '142px',
            display: 'flex', flexWrap: 'wrap' as const, gap: '6px',
          }}>
            {job.tech.map((t) => (
              <span key={t} style={{
                fontSize: '9px', letterSpacing: '1px', textTransform: 'lowercase' as const,
                padding: '2px 8px', border: '1px solid rgba(212,203,191,0.1)',
                borderRadius: '2px', color: 'rgba(212,203,191,0.35)',
              }}>{t}</span>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Education - subtle at the bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginTop: '48px', paddingTop: '28px', borderTop: '1px solid rgba(212,203,191,0.08)' }}
      >
        <div style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '3px', textTransform: 'lowercase' as const, marginBottom: '24px' }}>education</div>
        {[
          { year: '2005 — 09', school: 'university of colorado, boulder', detail: 'finance & info systems' },
          { year: '2013 — 15', school: 'galvanize · davinci coders', detail: 'full-stack development' },
        ].map((edu, i) => (
          <div key={i} style={{ display: 'flex', gap: '32px', padding: '12px 0', alignItems: 'baseline' }}>
            <div style={{
              fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
              fontSize: '15px', opacity: 0.3, width: '110px', flexShrink: 0,
            }}>{edu.year}</div>
            <div style={{ fontSize: '15px', fontWeight: 500 }}>{edu.school}</div>
            <div style={{ fontSize: '13px', fontWeight: 300, opacity: 0.35, marginLeft: 'auto' }}>{edu.detail}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
