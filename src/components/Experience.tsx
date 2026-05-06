import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type { IconType } from 'react-icons';
import {
  SiAnthropic, SiClaude, SiOpenai, SiGoogle, SiLangchain, SiGithubcopilot,
  SiGooglegemini, SiPython, SiTypescript, SiMilvus, SiOllama, SiCrewai,
  SiLangflow, SiReact, SiNextdotjs, SiTrpc, SiPrisma, SiPostgresql,
  SiRedis, SiRedhatopenshift, SiTerraform, SiNodedotjs, SiExpress,
  SiKubernetes, SiDocker, SiCloudfoundry, SiSap, SiGooglecloud, SiMongodb,
  SiGithubactions, SiFastapi, SiHelm, SiOkta, SiPytest,
} from 'react-icons/si';

const jobs = [
  {
    year: '2026 —',
    role: 'agentic ai engineer',
    org: 'kyndryl · dallas',
    desc: 'designing and productionizing agentic ai systems: llm orchestration, tool use, retrieval, evals, and cloud-native delivery for regulated enterprises.',
    projects: [
      'designed agent workflows that connect llms to apis, data stores, dashboards, and operational tools, turning natural-language requests into grounded actions and surfaced insights.',
      'built production prompt catalogs, model-provider wiring, and tool contracts across google adk, gemini/vertex ai, mcp-style tools, and service apis.',
      'advanced reusable platform capabilities: async orchestration runtime, agent service run-loop refactors, fixed-argument workflows across five repos, and cleaner fastapi route boundaries.',
      'grounded ai systems in enterprise data: secure ingestion, managed database/search retrieval, mainframe data movement, and dataset-specific query hardening.',
      'owned the production envelope: okta/oidc auth, helm/gke/cloud build rollouts, github actions ci with lint/tests/secret scanning, docker image handoffs, mentoring, and engineer interviews.',
    ],
    tech: ['anthropic claude', 'openai codex', 'google agent adk', 'gemini', 'vertex ai', 'python', 'typescript', 'react', 'next.js', 'fastapi', 'gcp', 'gke', 'cloud build', 'mongodb atlas', 'github actions', 'pytest', 'playwright', 'docker', 'helm', 'okta', 'langchain', 'mcp'],
  },
  {
    year: '2024 — 26',
    role: 'senior developer & ai csm',
    org: 'ibm ai/data · denver',
    desc: 'led hands-on ai workshops, pilots, and production builds: the bridge between client ideas and systems people could actually use.',
    projects: [
      'shipped a multi-agent assistant for a public-sector organization, splitting employee policy, constituent support, and IT ticket routing across specialized agents.',
      'built event-driven dropped-call detection for a contact center platform, surfacing abandoned conversations fast enough for live agent recovery.',
    ],
    tech: ['watson orchestrate', 'watsonx.ai', 'granite', 'milvus', 'langflow', 'anthropic mcp', 'llama'],
  },
  {
    year: '2020 — 24',
    role: 'senior developer, cloud expert labs',
    org: 'ibm · san francisco',
    desc: 'delivered high-trust client systems across health tech, retail, resilience engineering, and secure data products.',
    projects: [
      'modernized drug-trial adjudication workflows for health professionals, making qualification review faster and easier to reason about.',
      'coached an engineering team on chaos practices: controlled failure drills, production resilience, and the muscle memory to recover cleanly.',
      'built a real-time retail kpi dashboard from zero, turning scattered operating data into something leaders could scan and act on.',
      'prototyped a secure personal data vault with blockchain-backed ownership patterns using nestjs + typescript.',
    ],
    tech: ['react', 'next.js', 'trpc', 'prisma', 'postgres', 'redis', 'openshift', 'terraform'],
  },
  {
    year: '2015 — 20',
    role: 'jr → senior developer, cloud garage',
    org: 'ibm · san francisco',
    desc: 'grew from junior to senior while helping shape cloud garage delivery: client builds, design workshops, and new-market launches.',
    projects: [
      'led design workshops and helped replace a university monolith with kubernetes-based microservices.',
      're-architected a corporate discount platform from monolith to cloud, pairing delivery speed with a test-driven engineering culture.',
      'helped launch garage consulting practices in dubai and sao paulo, turning repeatable delivery habits into new local teams.',
      'built a watson image-recognition prototype that identified clothing from photos and suggested where to buy similar pieces.',
      'delivered an hr chatbot for an insurance organization, reducing repetitive employee inquiries and freeing the team for higher-touch work.',
      'built an iot supply-chain dashboard with socket.io and mqtt for real-time tracking across moving parts.',
    ],
    tech: ['react', 'node', 'express', 'kubernetes', 'docker', 'watson', 'cloudant', 'cloud foundry'],
  },
  {
    year: '2012 — 15',
    role: 'sap master data analyst',
    org: 'leprino foods · denver',
    desc: 'owned the data backbone for manufacturing rollouts: migration, validation, governance, and the details that keep plants moving.',
    projects: [],
    tech: ['sap', 'erp', 'data governance'],
  },
  {
    year: '2009 — 12',
    role: 'portfolio accountant',
    org: 'alp funds · denver',
    desc: 'reconciled cash, securities, and derivatives across complex portfolios, building the financial rigor that still shows up in my engineering.',
    projects: [],
    tech: ['risk modeling', 'securities'],
  },
];

const techIcons: Record<string, { icon: IconType; color?: string }> = {
  'anthropic claude': { icon: SiAnthropic, color: '#D97757' },
  'openai codex':     { icon: SiOpenai, color: '#412991' },
  'google agent adk': { icon: SiGoogle, color: '#4285F4' },
  'langchain':        { icon: SiLangchain, color: '#7FC8FF' },
  'crew ai':          { icon: SiCrewai, color: '#FF5A50' },
  'github copilot':   { icon: SiGithubcopilot, color: '#6cc644' },
  'claude code':      { icon: SiClaude, color: '#D97757' },
  'gemini':           { icon: SiGooglegemini, color: '#8E75B2' },
  'python':           { icon: SiPython, color: '#3776AB' },
  'typescript':       { icon: SiTypescript, color: '#3178C6' },
  'milvus':           { icon: SiMilvus, color: '#00A1EA' },
  'anthropic mcp':    { icon: SiAnthropic, color: '#D97757' },
  'llama':            { icon: SiOllama, color: '#EEEEEE' },
  'langflow':         { icon: SiLangflow, color: '#FF6E42' },
  'react':            { icon: SiReact, color: '#61DAFB' },
  'next.js':          { icon: SiNextdotjs, color: '#EEEEEE' },
  'trpc':             { icon: SiTrpc, color: '#2596BE' },
  'prisma':           { icon: SiPrisma, color: '#5A67D8' },
  'postgres':         { icon: SiPostgresql, color: '#4169E1' },
  'redis':            { icon: SiRedis, color: '#FF4438' },
  'openshift':        { icon: SiRedhatopenshift, color: '#EE0000' },
  'terraform':        { icon: SiTerraform, color: '#844FBA' },
  'fastapi':          { icon: SiFastapi, color: '#009688' },
  'gcp':              { icon: SiGooglecloud, color: '#4285F4' },
  'gke':              { icon: SiKubernetes, color: '#326CE5' },
  'vertex ai':        { icon: SiGooglecloud, color: '#4285F4' },
  'cloud build':      { icon: SiGooglecloud, color: '#4285F4' },
  'mongodb atlas':    { icon: SiMongodb, color: '#47A248' },
  'github actions':   { icon: SiGithubactions, color: '#2088FF' },
  'pytest':           { icon: SiPytest, color: '#0A9EDC' },
  'helm':             { icon: SiHelm, color: '#0F1689' },
  'okta':             { icon: SiOkta, color: '#00297A' },
  'node':             { icon: SiNodedotjs, color: '#5FA04E' },
  'express':          { icon: SiExpress, color: '#EEEEEE' },
  'kubernetes':       { icon: SiKubernetes, color: '#326CE5' },
  'docker':           { icon: SiDocker, color: '#2496ED' },
  'cloud foundry':    { icon: SiCloudfoundry, color: '#0C9ED5' },
  'sap':              { icon: SiSap, color: '#0FAAFF' },
};

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '16%']);
  const bgX = useTransform(scrollYProgress, [0, 1], ['5%', '-4%']);

  return (
    <div ref={ref} id="experience" data-section="experience" style={{
      background: '#1a1a1a', color: '#d4cbbf', padding: '80px 48px', position: 'relative',
    }}>
      <motion.div style={{
        fontSize: '180px', fontWeight: 800, textTransform: 'lowercase' as const,
        lineHeight: 0.8, letterSpacing: '-8px', color: 'rgba(212,203,191,0.03)',
        position: 'absolute', zIndex: 0, pointerEvents: 'none', whiteSpace: 'nowrap',
        top: '10px', right: '48px', y: bgY, x: bgX,
      }}>exp</motion.div>

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
          <div data-exp="header" style={{ display: 'flex', gap: '32px', alignItems: 'baseline' }}>
            <div style={{
              fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
              fontSize: '15px', opacity: 0.3, width: '110px', flexShrink: 0,
            }}>{job.year}</div>
            <div style={{ fontSize: '15px', fontWeight: 500 }}>{job.role}</div>
            <div style={{ fontSize: '13px', fontWeight: 300, opacity: 0.35, marginLeft: 'auto' }}>{job.org}</div>
          </div>

          {/* Summary */}
          <div data-exp="desc" style={{
            marginTop: '10px', marginLeft: '142px',
            fontSize: '13px', fontWeight: 300, lineHeight: 1.6, opacity: 0.5,
            maxWidth: '520px',
          }}>{job.desc}</div>

          {/* Project bullets */}
          {job.projects.length > 0 && (
            <ul data-exp="projects" style={{
              marginTop: '14px', marginLeft: '158px', maxWidth: '560px',
              display: 'grid', gap: '8px', paddingLeft: '16px',
            }}>
              {job.projects.map((p, j) => (
                <li key={j} style={{
                  fontSize: '12px', fontWeight: 300, lineHeight: 1.6,
                  opacity: 0.46, paddingLeft: '2px',
                }}>{p}</li>
              ))}
            </ul>
          )}

          {/* Tech tags */}
          <div data-exp="tech" style={{
            marginTop: '12px', marginLeft: '142px',
            display: 'flex', flexWrap: 'wrap' as const, gap: '6px',
          }}>
            {job.tech.map((t) => {
              const entry = techIcons[t];
              return (
                <span key={t} style={{
                  fontSize: '9px', letterSpacing: '1px', textTransform: 'lowercase' as const,
                  padding: '2px 8px', border: '1px solid rgba(212,203,191,0.1)',
                  borderRadius: '2px', color: 'rgba(212,203,191,0.35)',
                  display: 'inline-flex', alignItems: 'center', gap: '5px',
                }}>
                  {entry && <entry.icon style={{ fontSize: '11px', color: entry.color }} />}
                  {t}
                </span>
              );
            })}
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
          <div key={i} data-exp="header" style={{ display: 'flex', gap: '32px', padding: '12px 0', alignItems: 'baseline' }}>
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
