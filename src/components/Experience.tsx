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
  const headingX = useTransform(scrollYProgress, [0, 1], ['4%', '-3%']);

  return (
    <section ref={ref} id="experience" data-section="experience" style={{ padding: 'clamp(90px, 9vw, 150px) var(--page-pad)', position: 'relative', overflow: 'hidden' }}>
      <div data-exp="intro" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, marginBottom: 'clamp(72px, 9vw, 130px)' }}>
        <div><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 52 }}><span className="eyebrow">Selected history</span><span className="section-index">04</span></div><motion.h2 style={{ x: headingX, fontFamily: 'var(--display)', fontSize: 'clamp(64px, 9vw, 145px)', lineHeight: .8, letterSpacing: '-.06em', textTransform: 'uppercase' }}>Work,<br /><span style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontStyle: 'italic', color: 'var(--lime)' }}>with</span> intent.</motion.h2></div>
        <p style={{ alignSelf: 'end', justifySelf: 'end', maxWidth: 470, fontFamily: 'var(--serif)', fontSize: 'clamp(24px, 2.6vw, 42px)', lineHeight: 1.08, color: 'rgba(241,237,223,.78)' }}>Fourteen years turning complicated technology into systems people can trust and use.</p>
      </div>

      {jobs.map((job, i) => (
        <motion.div
          key={i}
          className="exp-row"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: .65, delay: Math.min(i * .04, .16) }}
          style={{ padding: 'clamp(28px, 3vw, 46px) 0' }}
        >
          <div data-exp="header" style={{ display: 'grid', gridTemplateColumns: '130px 1fr auto', gap: 32, alignItems: 'baseline' }}>
            <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 17, color: 'var(--lime)' }}>{job.year}</div>
            <h3 className="exp-role" style={{ fontSize: 'clamp(27px, 3.2vw, 50px)', fontWeight: 400, lineHeight: 1 }}>{job.role}</h3>
            <div style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(241,237,223,.48)' }}>{job.org}</div>
          </div>
          <div data-exp="body" style={{ marginTop: 18, marginLeft: 162, maxWidth: 760 }}>
            <p style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(241,237,223,.62)' }}>{job.desc}</p>
            {job.projects.length > 0 && <ul data-exp="projects" style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 30px', paddingLeft: 16, color: 'rgba(241,237,223,.42)' }}>{job.projects.map((project) => <li key={project} style={{ fontSize: 11, lineHeight: 1.55 }}>{project}</li>)}</ul>}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 20 }}>
              {job.tech.map((tech) => { const entry = techIcons[tech]; return <span className="tech-chip" key={tech}>{entry && <entry.icon style={{ fontSize: 11, color: entry.color }} />}{tech}</span>; })}
            </div>
          </div>
        </motion.div>
      ))}

      <div data-exp="education" style={{ marginTop: 70, paddingTop: 24, borderTop: '1px solid rgba(241,237,223,.18)', display: 'grid', gridTemplateColumns: '160px 1fr 1fr', gap: 26 }}>
        <div className="eyebrow">Education</div>
        <div><strong style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 400 }}>University of Colorado, Boulder</strong><p style={{ marginTop: 6, fontSize: 11, color: 'rgba(241,237,223,.45)' }}>Finance & Information Systems · 2005—09</p></div>
        <div><strong style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 400 }}>Galvanize · DaVinci Coders</strong><p style={{ marginTop: 6, fontSize: 11, color: 'rgba(241,237,223,.45)' }}>Full-stack development · 2013—15</p></div>
      </div>
    </section>
  );
}
