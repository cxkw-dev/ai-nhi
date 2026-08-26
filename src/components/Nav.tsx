import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sections = ['about', 'experience', 'contact'] as const;
const EASE = [0.22, 1, 0.36, 1] as const;

function NavLink({ label }: { label: string }) {
  const go = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById(label);
    if (!target) return;
    if (window.lenis) window.lenis.scrollTo(target, { offset: -20, duration: 1.4 });
    else target.scrollIntoView({ behavior: 'smooth' });
  };

  // two stacked copies — the top one rolls out, the bottom rolls in
  return (
    <a
      href={`#${label}`}
      onClick={go}
      className="nav-link"
      style={{ display: 'block', overflow: 'hidden', height: '1em', textDecoration: 'none' }}
    >
      <span style={{ display: 'block' }}>{label}</span>
      <span style={{ display: 'block' }} aria-hidden="true">{label}</span>
    </a>
  );
}

export default function Nav() {
  const [docked, setDocked] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setDocked(y > 90);
      // only hide once past the landing, and ignore jitter
      setHidden(y > 600 && y > last && y - last > 4);
      last = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      data-nav="bar"
      animate={{ y: hidden ? '-110%' : '0%' }}
      transition={{ duration: 0.55, ease: EASE }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px var(--edge)',
        color: 'var(--forest)',
        background: docked ? 'rgba(237,230,211,0.88)' : 'transparent',
        backdropFilter: docked ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: docked ? 'blur(12px)' : 'none',
        borderBottom: `1px solid ${docked ? 'rgba(47,74,51,0.12)' : 'transparent'}`,
        transition: 'background 0.45s ease, border-color 0.45s ease',
      }}
    >
      <a
        data-nav="mark"
        href="#top"
        onClick={(e) => {
          e.preventDefault();
          if (window.lenis) window.lenis.scrollTo(0, { duration: 1.6 });
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="t-club"
        style={{ fontSize: '15px', textDecoration: 'none', lineHeight: 1 }}
      >nocturnal</a>

      <div data-nav="links" style={{
        display: 'flex', gap: '26px',
        fontSize: '10px', fontWeight: 500,
        letterSpacing: '0.22em', textTransform: 'uppercase',
      }}>
        {sections.map((section) => <NavLink key={section} label={section} />)}
      </div>
    </motion.nav>
  );
}
