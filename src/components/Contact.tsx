import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <footer id="contact" data-section="contact" style={{ minHeight: '780px', padding: '80px var(--page-pad) 34px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>
      <div data-contact="top" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'start' }}><span className="eyebrow">Start a conversation</span><p style={{ justifySelf: 'end', maxWidth: 360, color: 'rgba(241,237,223,.6)', fontSize: 13, lineHeight: 1.6 }}>Always down to talk AI, dig through crates, or plan the next trip.</p></div>
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .9, ease: [0.16, 1, 0.3, 1] }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(62px, 11.5vw, 190px)', fontStyle: 'italic', lineHeight: .72, color: 'var(--lime)' }}>Let’s build</div>
        <div style={{ fontFamily: 'var(--display)', fontSize: 'clamp(58px, 10vw, 165px)', lineHeight: .82, letterSpacing: '-.06em', textTransform: 'uppercase', textAlign: 'right' }}>something.</div>
        <div style={{ marginTop: 'clamp(46px, 6vw, 90px)', display: 'flex', flexWrap: 'wrap', gap: '14px 30px', alignItems: 'center' }}>
          <a className="contact-link" href="https://www.linkedin.com/in/andynhi" target="_blank" rel="noopener noreferrer" style={{ fontSize: 'clamp(20px, 2.4vw, 38px)', fontWeight: 300 }}>LinkedIn ↗</a>
          <a className="contact-link" href="https://github.com/cxkw-dev" target="_blank" rel="noopener noreferrer" style={{ fontSize: 'clamp(20px, 2.4vw, 38px)', fontWeight: 300 }}>GitHub ↗</a>
        </div>
      </motion.div>
      <div data-contact="footer" style={{ paddingTop: 20, borderTop: '1px solid rgba(241,237,223,.16)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(241,237,223,.56)' }}><span>Andy Nguyen © 2026</span><span>Engineer / Traveler / Collector</span><span>Dallas, Texas</span></div>
    </footer>
  );
}
