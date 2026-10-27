import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type { IconType } from 'react-icons';
import jobs from '../data/experience.json';
import skills from '../data/skills.json';
import {
  SiAnthropic, SiClaude, SiOpenai, SiGoogle, SiLangchain, SiGithubcopilot,
  SiGooglegemini, SiPython, SiTypescript, SiMilvus, SiOllama, SiCrewai,
  SiLangflow, SiReact, SiNextdotjs, SiTrpc, SiPrisma, SiPostgresql,
  SiRedis, SiRedhatopenshift, SiTerraform, SiNodedotjs, SiExpress,
  SiKubernetes, SiDocker, SiCloudfoundry, SiSap, SiGooglecloud, SiMongodb,
  SiGithubactions, SiFastapi, SiHelm, SiOkta, SiPytest,
} from 'react-icons/si';


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
        <div><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 52 }}><span className="eyebrow">Selected history</span><span className="section-index">05</span></div><motion.h2 style={{ x: headingX, fontFamily: 'var(--display)', fontSize: 'clamp(64px, 9vw, 145px)', lineHeight: .8, letterSpacing: '-.06em', textTransform: 'uppercase' }}>Work,<br /><span style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontStyle: 'italic', color: 'var(--lime)' }}>with</span> intent.</motion.h2></div>
        <p style={{ alignSelf: 'end', justifySelf: 'end', maxWidth: 470, fontFamily: 'var(--serif)', fontSize: 'clamp(24px, 2.6vw, 42px)', lineHeight: 1.08, color: 'rgba(241,237,223,.78)' }}>My path from finance and data operations to building software, cloud applications, and AI agents.</p>
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
          <div data-exp="header" style={{ display: 'grid', gridTemplateColumns: '155px 1fr auto', gap: 32, alignItems: 'baseline' }}>
            <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 17, color: 'var(--lime)' }}>{job.year}</div>
            <h3 className="exp-role" style={{ fontSize: 'clamp(27px, 3.2vw, 50px)', fontWeight: 400, lineHeight: 1 }}>{job.role}</h3>
            <div style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(241,237,223,.48)' }}>{job.org}</div>
          </div>
          <div data-exp="body" style={{ marginTop: 18, marginLeft: 187, maxWidth: 760 }}>
            {job.desc && <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(241,237,223,.82)' }}>{job.desc}</p>}
            {job.projects.length > 0 && <ul data-exp="projects" style={{ marginTop: 18, display: 'grid', gap: 10, paddingLeft: 16, color: 'rgba(241,237,223,.72)' }}>{job.projects.map((project) => <li key={project} style={{ fontSize: 14, lineHeight: 1.65 }}>{project}</li>)}</ul>}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 20 }}>
              {job.tech.map((tech) => { const entry = techIcons[tech.toLowerCase()]; return <span className="tech-chip" key={tech}>{entry && <entry.icon style={{ fontSize: 11, color: entry.color }} />}{tech}</span>; })}
            </div>
          </div>
        </motion.div>
      ))}

      <div data-exp="education" style={{ marginTop: 70, paddingTop: 24, borderTop: '1px solid rgba(241,237,223,.18)', display: 'grid', gridTemplateColumns: '160px 1fr 1fr', gap: 26 }}>
        <div className="eyebrow">Education</div>
        <div><strong style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 400 }}>University of Colorado, Boulder</strong><p style={{ marginTop: 6, fontSize: 11, color: 'rgba(241,237,223,.45)' }}>Finance & Information Systems · 2005—09</p></div>
        <div><strong style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 400 }}>Galvanize · DaVinci Coders</strong><p style={{ marginTop: 6, fontSize: 11, color: 'rgba(241,237,223,.45)' }}>Coding programs · Galvanize 2014–15 · DaVinci Coders 2013</p></div>
      </div>
      <div className="skills-section" aria-labelledby="skills-heading">
        <h3 id="skills-heading" className="eyebrow">Technical skills</h3>
        <div className="skills-grid">
          {skills.map(({ category, items }) => (
            <div key={category}>
              <h4>{category}</h4>
              <p>{items.join(' · ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
