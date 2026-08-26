import { useEffect, useState } from 'react';

const sections = ['about', 'experience', 'contact'] as const;

const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Nav() {
  const [docked, setDocked] = useState(false);

  useEffect(() => {
    const onScroll = () => setDocked(window.scrollY > 90);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav data-nav="bar" style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '20px var(--edge)',
      color: 'var(--forest)',
      background: docked ? 'rgba(237,230,211,0.9)' : 'transparent',
      backdropFilter: docked ? 'blur(10px)' : 'none',
      WebkitBackdropFilter: docked ? 'blur(10px)' : 'none',
      borderBottom: `1px solid ${docked ? 'rgba(47,74,51,0.12)' : 'transparent'}`,
      transition: 'background 0.4s ease, border-color 0.4s ease',
    }}>
      <a
        data-nav="mark"
        href="#top"
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        className="t-club"
        style={{ fontSize: '15px', textDecoration: 'none', lineHeight: 1 }}
      >nocturnal</a>

      <div data-nav="links" style={{
        display: 'flex', gap: '24px',
        fontSize: '10px', fontWeight: 500,
        letterSpacing: '0.22em', textTransform: 'uppercase',
      }}>
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={(e) => scrollTo(e, section)}
            style={{ textDecoration: 'none', opacity: 0.7 }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.7'; }}
          >{section}</a>
        ))}
      </div>
    </nav>
  );
}
