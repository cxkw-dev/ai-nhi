import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const STAGES = [
  ['01', 'wonder'],
  ['02', 'shape'],
  ['03', 'ship'],
];

export default function ParallaxBreak({ base: _base = '' }: { base?: string }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const moonX = useTransform(scrollYProgress, [0, 1], ['-42vw', '42vw']);
  const moonRotate = useTransform(scrollYProgress, [0, 1], [-35, 35]);
  const ideasX = useTransform(scrollYProgress, [0, .5, 1], ['-4%', '0%', '3%']);
  const darkX = useTransform(scrollYProgress, [0, .5, 1], ['4%', '0%', '-3%']);

  return (
    <section ref={ref} data-section="parallax-break" className="nocturnal-process">
      <div className="process-head"><span className="eyebrow">Nocturnal process</span><span className="section-index">03</span></div>

      <div className="process-core">
        <div className="process-track" aria-hidden="true" />
        <motion.div className="process-moon" aria-hidden="true" style={{ x: moonX, rotate: moonRotate }}><span /></motion.div>
        <h2>
          <motion.span style={{ x: ideasX }}>ideas</motion.span>
          <motion.em style={{ x: darkX }}>after dark.</motion.em>
        </h2>
      </div>

      <div className="process-foot">
        <p>Curiosity becomes structure. Structure becomes something real enough to use.</p>
        <div className="process-stages">
          {STAGES.map(([number, label]) => <div key={number}><span>{number}</span><strong>{label}</strong></div>)}
        </div>
        <p className="process-outcome">built by daylight.</p>
      </div>
    </section>
  );
}
