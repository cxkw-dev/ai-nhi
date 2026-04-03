import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
        height: 2,
        background: '#d4cbbf',
        transformOrigin: '0%',
        scaleX: scrollYProgress,
      }}
    />
  );
}
