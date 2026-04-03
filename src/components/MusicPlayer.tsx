import { useState } from 'react';

const pulseKeyframes = `
@keyframes pulse-ring {
  0% { transform: scale(1.1); opacity: 0.5; }
  100% { transform: scale(2); opacity: 0; }
}
`;

export default function MusicPlayer() {
  const [open, setOpen] = useState(false);

  return (
    <div data-section="music-player" style={{
      position: 'fixed', bottom: '28px', right: '28px', zIndex: 100,
    }}>
      <style>{pulseKeyframes}</style>
      {/* Spotify embed — always loaded but hidden until open, autoplay enabled */}
      <div style={{
        position: 'absolute', bottom: '52px', right: 0,
        width: '300px', height: open ? '80px' : '0px',
        overflow: 'hidden', borderRadius: '8px',
        transition: 'height 0.3s ease',
        boxShadow: open ? '0 4px 24px rgba(0,0,0,0.3)' : 'none',
      }}>
        {open && (
          <iframe
            src="https://open.spotify.com/embed/track/3gS6Nh0LNlKsMblEzVNt3l?utm_source=generator&theme=0&autoplay=1"
            width="300"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media"
            style={{ borderRadius: '8px' }}
          />
        )}
      </div>

      {/* Pulse ring — only when closed */}
      {!open && (
        <div style={{
          position: 'absolute', bottom: 0, right: 0,
          width: '44px', height: '44px', borderRadius: '50%',
          border: '2px solid rgba(255,255,255,0.5)',
          animation: 'pulse-ring 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
          pointerEvents: 'none',
        }} />
      )}

      {/* Custom toggle button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '44px', height: '44px', borderRadius: '50%',
          border: '1px solid rgba(26,26,26,0.15)',
          background: open ? '#1a1a1a' : 'linear-gradient(135deg, #c9a96e, #a8863a)',
          color: open ? '#c9a96e' : '#1a1a1a',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.3s ease',
          boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
        }}
      >
        {open ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 2a10 10 0 0 1 0 20" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="3" />
            <line x1="12" y1="1" x2="12" y2="5" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        )}
      </button>
    </div>
  );
}
