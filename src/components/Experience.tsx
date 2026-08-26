import { motion } from 'framer-motion';
import Reveal from './Reveal';
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

const techIcons: Record<string, { icon: IconType }> = {
  'anthropic claude': { icon: SiAnthropic },
  'openai codex':     { icon: SiOpenai },
  'google agent adk': { icon: SiGoogle },
  'langchain':        { icon: SiLangchain },
  'crew ai':          { icon: SiCrewai },
  'github copilot':   { icon: SiGithubcopilot },
  'claude code':      { icon: SiClaude },
  'gemini':           { icon: SiGooglegemini },
  'python':           { icon: SiPython },
  'typescript':       { icon: SiTypescript },
  'milvus':           { icon: SiMilvus },
  'anthropic mcp':    { icon: SiAnthropic },
  'llama':            { icon: SiOllama },
  'langflow':         { icon: SiLangflow },
  'react':            { icon: SiReact },
  'next.js':          { icon: SiNextdotjs },
  'trpc':             { icon: SiTrpc },
  'prisma':           { icon: SiPrisma },
  'postgres':         { icon: SiPostgresql },
  'redis':            { icon: SiRedis },
  'openshift':        { icon: SiRedhatopenshift },
  'terraform':        { icon: SiTerraform },
  'fastapi':          { icon: SiFastapi },
  'gcp':              { icon: SiGooglecloud },
  'gke':              { icon: SiKubernetes },
  'vertex ai':        { icon: SiGooglecloud },
  'cloud build':      { icon: SiGooglecloud },
  'mongodb atlas':    { icon: SiMongodb },
  'github actions':   { icon: SiGithubactions },
  'pytest':           { icon: SiPytest },
  'helm':             { icon: SiHelm },
  'okta':             { icon: SiOkta },
  'node':             { icon: SiNodedotjs },
  'express':          { icon: SiExpress },
  'kubernetes':       { icon: SiKubernetes },
  'docker':           { icon: SiDocker },
  'cloud foundry':    { icon: SiCloudfoundry },
  'sap':              { icon: SiSap },
};


const education = [
  { year: '2005 — 09', school: 'university of colorado, boulder', detail: 'finance & info systems' },
  { year: '2013 — 15', school: 'galvanize · davinci coders', detail: 'full-stack development' },
];

const fade = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: '-40px' as const },
};

export default function Experience() {
  return (
    <section id="experience" data-section="experience" style={{
      background: 'var(--forest-deep)', color: 'var(--bone)',
      padding: '120px var(--edge)', position: 'relative',
    }}>
      <Reveal duration={0.9} className="t-label" style={{ opacity: 0.45 }}>03 — experience</Reveal>

      <div style={{ marginTop: '52px' }}>
        {jobs.map((job, i) => (
          <motion.div
            key={i}
            className="exp-row"
            {...fade}
            transition={{ duration: 0.7 }}
            style={{ position: 'relative', padding: '30px 0', borderTop: '1px solid rgba(237,230,211,0.12)' }}
          >
            {/* hairline that draws across on hover */}
            <span className="exp-rule" aria-hidden="true" />

            <div data-exp="header" style={{ display: 'flex', gap: '32px', alignItems: 'baseline' }}>
              <div className="t-label exp-year" style={{ width: '110px', flexShrink: 0, opacity: 0.4 }}>{job.year}</div>
              <Reveal duration={0.9} style={{ fontSize: '16px', fontWeight: 400 }}>{job.role}</Reveal>
              <div className="t-label exp-org" style={{ marginLeft: 'auto', opacity: 0.4 }}>{job.org}</div>
            </div>

            <div data-exp="desc" style={{
              marginTop: '12px', marginLeft: '142px', maxWidth: '560px',
              fontSize: '13.5px', lineHeight: 1.75, opacity: 0.55,
            }}>{job.desc}</div>

            {job.projects.length > 0 && (
              <ul data-exp="projects" style={{
                marginTop: '16px', marginLeft: '158px', maxWidth: '600px',
                display: 'grid', gap: '9px', paddingLeft: '16px',
              }}>
                {job.projects.map((p, j) => (
                  <li key={j} style={{ fontSize: '12.5px', lineHeight: 1.7, opacity: 0.42 }}>{p}</li>
                ))}
              </ul>
            )}

            <div data-exp="tech" style={{
              marginTop: '16px', marginLeft: '142px',
              display: 'flex', flexWrap: 'wrap' as const, gap: '6px',
            }}>
              {job.tech.map((t) => {
                const entry = techIcons[t];
                return (
                  <span key={t} style={{
                    fontSize: '9px', letterSpacing: '0.14em', textTransform: 'uppercase' as const,
                    padding: '3px 9px', border: '1px solid rgba(237,230,211,0.16)',
                    color: 'rgba(237,230,211,0.42)',
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                  }}>
                    {entry && <entry.icon style={{ fontSize: '11px' }} />}
                    {t}
                  </span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div {...fade} transition={{ duration: 0.7 }} style={{ marginTop: '64px' }}>
        <Reveal duration={0.9} className="t-label" style={{ opacity: 0.45 }}>education</Reveal>
        <div style={{ marginTop: '26px' }}>
          {education.map((edu, i) => (
            <div key={i} data-exp="header" style={{
              display: 'flex', gap: '32px', alignItems: 'baseline',
              padding: '18px 0', borderTop: '1px solid rgba(237,230,211,0.12)',
            }}>
              <div className="t-label" style={{ width: '110px', flexShrink: 0, opacity: 0.4 }}>{edu.year}</div>
              <div style={{ fontSize: '16px', fontWeight: 400 }}>{edu.school}</div>
              <div className="t-label" style={{ marginLeft: 'auto', opacity: 0.4 }}>{edu.detail}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
