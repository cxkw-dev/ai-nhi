import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
        height: 2,
        background: 'linear-gradient(90deg, #b8860b, #d4a017, #cfb53b)',
        transformOrigin: '0%',
        scaleX: scrollYProgress,
      }}
    />
  );
}
