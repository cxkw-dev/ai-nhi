import { motion } from 'framer-motion';

const STATS = [
  ['14+', 'years building'],
  ['10', 'years at IBM'],
];

export default function About() {
  return (
    <section id="about" data-section="about">
      <div data-about="copy" style={{ minHeight: 780, padding: 'clamp(90px, 9vw, 145px) var(--page-pad)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'clamp(58px, 7vw, 105px)' }}><span className="eyebrow">The person</span><span className="section-index">02</span></div>
          <motion.h2 className="about-statement" initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .9, ease: [0.16, 1, 0.3, 1] }} style={{ maxWidth: 1180, fontFamily: 'var(--display)', fontSize: 'clamp(54px, 7.5vw, 122px)', lineHeight: .88, letterSpacing: '-.06em', textTransform: 'uppercase' }}>
            Denver raised. <em>Cloud shaped.</em> AI obsessed.
          </motion.h2>
        </div>

        <div data-about="details" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.3fr) minmax(320px, .7fr)', gap: 'clamp(56px, 9vw, 150px)', alignItems: 'end', marginTop: 'clamp(72px, 9vw, 130px)', paddingTop: 26, borderTop: '1px solid var(--line)' }}>
          <div>
            <p style={{ maxWidth: 650, color: '#081510', fontSize: 'clamp(15px, 1.2vw, 18px)', lineHeight: 1.65, fontWeight: 400 }}>A decade at IBM shipping cloud platforms, Kubernetes migrations, and innovation projects across health-tech and enterprise. Now crafting agentic AI at Kyndryl out of Dallas.</p>
            <p style={{ maxWidth: 650, marginTop: 16, color: 'var(--forest)', fontFamily: 'var(--serif)', fontSize: 'clamp(18px, 1.7vw, 26px)', fontStyle: 'italic' }}>Along the way I picked up vinyl, passport stamps, and a mean toprock.</p>
          </div>
          <div data-about="stats" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
            {STATS.map(([value, label]) => <div className="stat-card" key={label} style={{ paddingTop: 14 }}><strong style={{ fontFamily: 'var(--display)', fontSize: 38 }}>{value}</strong><div style={{ marginTop: 4, fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase' }}>{label}</div></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
