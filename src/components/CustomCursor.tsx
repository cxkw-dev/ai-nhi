import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const prev = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const raf = useRef(0);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const addHover = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        el.addEventListener('mouseenter', () => setHovering(true));
        el.addEventListener('mouseleave', () => setHovering(false));
      });
    };

    const tick = () => {
      const dot = dotRef.current;
      const ringEl = ringRef.current;
      if (dot) {
        const dx = pos.current.x - prev.current.x;
        const dy = pos.current.y - prev.current.y;
        const speed = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        const stretch = Math.min(speed * 0.15, 2.5);

        dot.style.transform =
          `translate(${pos.current.x}px, ${pos.current.y}px) ` +
          `translate(-50%, -50%) ` +
          `rotate(${angle}deg) ` +
          `scaleX(${1 + stretch}) scaleY(${1 - stretch * 0.25})`;
      }
      if (ringEl) {
        // smooth trailing follow
        ring.current.x += (pos.current.x - ring.current.x) * 0.12;
        ring.current.y += (pos.current.y - ring.current.y) * 0.12;
        ringEl.style.transform =
          `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`;
      }
      prev.current = { ...pos.current };
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    addHover();
    raf.current = requestAnimationFrame(tick);

    const observer = new MutationObserver(addHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
      observer.disconnect();
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed', top: 0, left: 0, zIndex: 9999,
          width: hovering ? 6 : 10,
          height: hovering ? 6 : 10,
          borderRadius: '50%',
          backgroundColor: '#f5f2ed',
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          transition: 'width 0.25s, height 0.25s',
          willChange: 'transform',
        }}
      />
      {/* trailing ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed', top: 0, left: 0, zIndex: 9998,
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
          borderRadius: '50%',
          border: '1.5px solid #f5f2ed',
          opacity: hovering ? 0.8 : 0.4,
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          transition: 'width 0.3s, height 0.3s, opacity 0.3s',
          willChange: 'transform',
        }}
      />
    </>
  );
}
