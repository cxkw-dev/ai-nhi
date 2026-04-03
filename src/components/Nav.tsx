export default function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '24px 48px', mixBlendMode: 'difference' as const,
    }}>
      <div style={{
        fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
        fontSize: '24px', color: '#f5f2ed',
      }}>andy nguyen</div>
      <div style={{
        display: 'flex', gap: '28px', fontSize: '11px', letterSpacing: '2px',
        textTransform: 'lowercase' as const, fontWeight: 700, color: '#f5f2ed',
      }}>
        <a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>about</a>
        <a href="#experience" style={{ color: 'inherit', textDecoration: 'none' }}>experience</a>
        <a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>contact</a>
      </div>
    </nav>
  );
}
