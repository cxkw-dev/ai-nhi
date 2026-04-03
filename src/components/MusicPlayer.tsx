import { useState } from 'react';

const pulseKeyframes = `
@keyframes pulse-ring {
  0% { transform: scale(1); opacity: 0.8; }
  70% { transform: scale(2.2); opacity: 0; }
  100% { transform: scale(2.2); opacity: 0; }
}
`;

export default function MusicPlayer() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      position: 'fixed', bottom: '28px', right: '28px', zIndex: 100,
    }}>
      <style>{pulseKeyframes}</style>
      {/* Spotify embed — slides up when open */}
      <div style={{
        position: 'absolute', bottom: '52px', right: 0,
        width: '300px', height: open ? '80px' : '0px',
        overflow: 'hidden', borderRadius: '8px',
        transition: 'height 0.3s ease',
        boxShadow: open ? '0 4px 24px rgba(0,0,0,0.3)' : 'none',
      }}>
        <iframe
          src="https://open.spotify.com/embed/track/3gS6Nh0LNlKsMblEzVNt3l?utm_source=generator&theme=0"
          width="300"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media"
          loading="lazy"
          style={{ borderRadius: '8px' }}
        />
      </div>

      {/* Pulse ring — only when closed */}
      {!open && (
        <div style={{
          position: 'absolute', bottom: 0, right: 0,
          width: '44px', height: '44px', borderRadius: '50%',
          border: '2px solid rgba(26,26,26,0.4)',
          animation: 'pulse-ring 2s ease-out infinite',
          pointerEvents: 'none',
        }} />
      )}

      {/* Custom toggle button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '44px', height: '44px', borderRadius: '50%',
          border: '1px solid rgba(26,26,26,0.15)',
          background: open ? '#1a1a1a' : '#f5f2ed',
          color: open ? '#f5f2ed' : '#1a1a1a',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.3s ease',
          boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
        }}
      >
        {open ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </div>
  );
}
