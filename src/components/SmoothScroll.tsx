import { useEffect } from 'react';
import Lenis from 'lenis';

declare global {
  interface Window { lenis?: Lenis }
}

/**
 * Inertial scrolling. Everything else on the page is scroll-driven, so the
 * easing here is what makes the parallax and reveals feel weighted rather
 * than snappy. Respects prefers-reduced-motion by simply not mounting.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.6,
    });
    window.lenis = lenis;

    let raf = 0;
    const tick = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  return null;
}
