import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { PointerEvent } from 'react';

const WORDS = ['nocturnal', 'mind'];

export default function Hero() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 70, damping: 18, mass: .6 });
  const smoothY = useSpring(pointerY, { stiffness: 70, damping: 18, mass: .6 });
  const titleX = useTransform(smoothX, [-1, 1], [-7, 7]);
  const titleY = useTransform(smoothY, [-1, 1], [-4, 4]);
  const glowX = useTransform(smoothX, [-1, 1], [-48, 48]);

  const moveWithPointer = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - .5) * 2);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - .5) * 2);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  let letterIndex = 0;

  return (
    <section
      id="top"
      data-section="hero"
      className="minimal-hero"
      onPointerMove={moveWithPointer}
      onPointerLeave={resetPointer}
    >
      <div className="hero-glyphs" aria-hidden="true"><span>✦</span><span>×</span><span>✣</span><span>••</span></div>

      <motion.h1 aria-label="nocturnal mind" style={{ x: titleX, y: titleY }}>
        {WORDS.map((word) => (
          <span className="hero-word" key={word}>
            {[...word].map((letter) => {
              const delay = .2 + letterIndex++ * .045;
              return <span className="hero-letter" key={`${word}-${letterIndex}`} style={{ animationDelay: `${delay}s` }}>{letter}</span>;
            })}
          </span>
        ))}
      </motion.h1>

      <motion.div className="hero-glow" aria-hidden="true" style={{ x: glowX }}><span /></motion.div>
      <div className="hero-scroll-cue" aria-hidden="true">(scroll down &amp; explore)</div>
    </section>
  );
}
