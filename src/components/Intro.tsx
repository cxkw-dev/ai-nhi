import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ArchedText from './ArchedText';

const EASE = [0.76, 0, 0.24, 1] as const;

/**
 * Cover that lifts off the landing. Locks scroll while it runs, and always
 * tears itself down — a failed animation must never leave the page hidden.
 */
export default function Intro() {
  const [done, setDone] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || sessionStorage.getItem('nocturnal:intro') === 'seen') return;

    sessionStorage.setItem('nocturnal:intro', 'seen');
    setDone(false);
    document.body.style.overflow = 'hidden';
    window.lenis?.stop();

    const release = () => {
      setDone(true);
      document.body.style.overflow = '';
      window.lenis?.start();
      window.scrollTo(0, 0);
    };

    const timer = window.setTimeout(release, 2100);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = '';
      window.lenis?.start();
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="intro"
          exit={{ y: '-100%' }}
          transition={{ duration: 1, ease: EASE }}
          data-intro="cover"
          style={{
            position: 'fixed', inset: 0, zIndex: 9000,
            background: 'var(--forest-deep)', color: 'var(--bone)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: '4px',
            paddingBottom: '7vh',
            pointerEvents: 'none',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: EASE }}
            style={{ width: 'min(620px, 74vw)' }}
          >
            <ArchedText id="intro-arch" text="andy nguyen" fill="var(--bone)" />
          </motion.div>

          <motion.div
            className="t-club"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            style={{ fontSize: '12px', marginTop: '-8px' }}
          >nocturnal club</motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
