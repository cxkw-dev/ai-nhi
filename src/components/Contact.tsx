import { motion } from 'framer-motion';
import ArchedText from './ArchedText';
import Reveal from './Reveal';

const links = [
  { label: 'github', href: 'https://github.com/cxkw-dev' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/andynhi' },
];

export default function Contact() {
  const fade = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: '-60px' as const },
  };

  return (
    <footer id="contact" data-section="contact" style={{
      background: 'var(--bone)', color: 'var(--forest)',
      padding: '140px var(--edge) 92px', position: 'relative', overflow: 'hidden',
    }}>
      {/* faint bookend of the hero back-print */}
      <motion.div
        data-contact="mark"
        {...fade} transition={{ duration: 1.4 }}
        style={{
          position: 'absolute', right: 'calc(var(--edge) - 40px)', top: '150px',
          width: 'min(520px, 42vw)', opacity: 0.08, pointerEvents: 'none',
        }}
      >
        <ArchedText id="contact-arch" text="nocturnal" />
      </motion.div>

      <Reveal duration={0.9} className="t-label" style={{ opacity: 0.45 }}>05 — connect</Reveal>

      <h2
        data-contact="heading"
        className="t-serif"
        style={{
          fontStyle: 'italic', fontSize: '58px', fontWeight: 400,
          lineHeight: 1.06, margin: '28px 0 18px',
        }}
      >
        {["let's build", 'something'].map((line, i) => (
          <Reveal key={line} delay={0.08 + i * 0.1} duration={1.05}>{line}</Reveal>
        ))}
      </h2>

      <motion.p {...fade} transition={{ duration: 0.9, delay: 0.14 }} style={{
        fontSize: '15px', lineHeight: 1.8, opacity: 0.65, maxWidth: '380px',
      }}>
        always down to talk ai, dig through crates, or plan the next trip.
      </motion.p>

      <motion.div {...fade} transition={{ duration: 0.9, delay: 0.2 }} style={{
        display: 'flex', gap: '28px', marginTop: '38px',
      }}>
        {links.map((link) => (
          <a key={link.label} className="link" href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
      </motion.div>

      <div data-contact="footer" style={{
        marginTop: '110px', paddingTop: '22px',
        borderTop: '1px solid rgba(47,74,51,0.14)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '16px',
      }}>
        <span className="t-club" style={{ fontSize: '13px' }}>nocturnal club</span>
        <span className="t-label" style={{ opacity: 0.4 }}>andy nguyen</span>
        <span className="t-label" style={{ opacity: 0.4, marginRight: '52px' }}>© 2026</span>
      </div>
    </footer>
  );
}
