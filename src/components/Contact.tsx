import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div id="contact" data-section="contact" style={{ padding: '100px 48px 60px', position: 'relative' }}>
      <div data-contact="bg" style={{
        fontSize: '140px', fontWeight: 800, textTransform: 'lowercase' as const,
        lineHeight: 0.8, letterSpacing: '-8px', color: 'rgba(26,26,26,0.04)',
        position: 'absolute', zIndex: 0, pointerEvents: 'none', whiteSpace: 'nowrap',
        top: '20px', left: '48px',
      }}>connect</div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8 }}
      >
        <h2 data-contact="heading" style={{
          fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
          fontSize: '56px', fontWeight: 400, lineHeight: 1.1, marginBottom: '16px',
        }}>let's build<br />something</h2>

        <p style={{ fontSize: '14px', fontWeight: 300, color: '#888', maxWidth: '380px', lineHeight: 1.6 }}>
          always down to talk ai, dig through crates, or plan the next trip.
        </p>

        <div style={{ display: 'flex', gap: '24px', marginTop: '32px' }}>
          {['github', 'linkedin', 'email'].map((link) => (
            <a key={link} href="#" style={{
              display: 'inline-block', fontSize: '11px', fontWeight: 700, letterSpacing: '2px',
              textTransform: 'lowercase' as const, textDecoration: 'underline', textUnderlineOffset: '3px',
              color: '#1a1a1a',
            }}>[&nbsp;&nbsp;{link}&nbsp;&nbsp;]</a>
          ))}
        </div>
      </motion.div>

      <div data-contact="footer" style={{
        marginTop: '80px', paddingTop: '20px',
        borderTop: '1px solid rgba(26,26,26,0.1)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      }}>
        <div style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: '18px' }}>andy nguyen</div>
        <div style={{ fontSize: '10px', letterSpacing: '2px', color: '#aaa' }}>© 2026</div>
      </div>
    </div>
  );
}
