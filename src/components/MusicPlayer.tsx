import { useState } from 'react';

const pulseKeyframes = `
@keyframes pulse-ring {
  0%   { transform: scale(1.05); opacity: 0.45; }
  100% { transform: scale(2);    opacity: 0; }
}
`;

export default function MusicPlayer() {
  const [open, setOpen] = useState(false);

  return (
    <div data-section="music-player" style={{
      position: 'fixed', bottom: '28px', right: '28px', zIndex: 100,
    }}>
      <style>{pulseKeyframes}</style>

      {/* spotify embed — mounted on open so autoplay is a user gesture */}
      <div data-music="embed" style={{
        position: 'absolute', bottom: '54px', right: 0,
        width: '300px', height: open ? '80px' : '0px',
        overflow: 'hidden',
        transition: 'height 0.35s ease',
        boxShadow: open ? '0 6px 28px rgba(30,50,35,0.28)' : 'none',
      }}>
        {open && (
          <iframe
            title="now playing"
            src="https://open.spotify.com/embed/track/3gS6Nh0LNlKsMblEzVNt3l?utm_source=generator&theme=0&autoplay=1"
            width="300"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media"
          />
        )}
      </div>

      {!open && (
        <div style={{
          position: 'absolute', bottom: 0, right: 0,
          width: '42px', height: '42px', borderRadius: '50%',
          border: '1px solid var(--forest)',
          animation: 'pulse-ring 2.6s cubic-bezier(0.4, 0, 0.2, 1) infinite',
          pointerEvents: 'none',
        }} />
      )}

      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'close player' : 'open player'}
        style={{
          width: '42px', height: '42px', borderRadius: '50%',
          border: '1px solid var(--forest)',
          background: open ? 'var(--forest)' : 'var(--bone)',
          color: open ? 'var(--bone)' : 'var(--forest)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.3s ease, color 0.3s ease',
        }}
      >
        {open ? (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="9.5" />
            <circle cx="12" cy="12" r="2.6" fill="currentColor" stroke="none" />
          </svg>
        )}
      </button>
    </div>
  );
}
