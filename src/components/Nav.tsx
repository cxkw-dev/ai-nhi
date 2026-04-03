const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Nav() {
  return (
    <>
      {/* Vertical name — fixed left edge */}
      <div data-nav="vertical-name" style={{
        position: 'fixed', top: 0, left: 0, bottom: 0, zIndex: 100,
        width: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        mixBlendMode: 'difference' as const,
      }}>
        <div style={{
          fontFamily: "'Libre Barcode 39 Text', cursive",
          fontSize: '28px', letterSpacing: '3px', color: '#f5f2ed',
          writingMode: 'vertical-rl' as const, transform: 'rotate(180deg)',
        }}>andy nguyen</div>
      </div>

      {/* Top-right nav links */}
      <nav data-nav="links" style={{
        position: 'fixed', top: 0, right: 0, zIndex: 100,
        padding: '24px 48px',
        mixBlendMode: 'difference' as const,
      }}>
        <div style={{
          display: 'flex', gap: '28px', fontSize: '11px', letterSpacing: '2px',
          textTransform: 'lowercase' as const, fontWeight: 700, color: '#f5f2ed',
        }}>
          {(['about', 'experience', 'contact'] as const).map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => scrollTo(e, section)}
              style={{ color: 'inherit', textDecoration: 'none' }}
            >{section}</a>
          ))}
        </div>
      </nav>
    </>
  );
}
