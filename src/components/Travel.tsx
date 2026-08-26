import { motion } from 'framer-motion';

const cards = [
  { image: 'dubai.jpg', place: 'Dubai', note: 'Building new teams', pos: 'center 25%', left: '5%', top: '24%', width: '25%', height: '60%', rotate: -7, z: 2 },
  { image: 'night-out-crew.jpg', place: 'Everywhere', note: 'Better with people', pos: 'center 38%', left: '27%', top: '10%', width: '27%', height: '63%', rotate: 4, z: 4 },
  { image: 'camry.jpg', place: 'California', note: 'Miles after midnight', pos: 'center 22%', left: '50%', top: '25%', width: '25%', height: '61%', rotate: -3, z: 3 },
  { image: 'hanbok-hanok.jpg', place: 'Seoul', note: 'Past meets present', pos: 'center 22%', left: '72%', top: '8%', width: '23%', height: '64%', rotate: 6, z: 1 },
];
const cities = 'Seoul London Melbourne São Paulo Vietnam Waikiki Los Angeles San Diego Rosarito Winnipeg Las Vegas Dubai';

export default function Travel({ base = '' }: { base?: string }) {
  return (
    <section id="travel" data-section="travel" style={{ paddingTop: 'clamp(90px, 10vw, 160px)', overflow: 'hidden' }}>
      <div data-travel="intro" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, padding: '0 var(--page-pad) clamp(64px, 8vw, 110px)' }}>
        <div><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 48 }}><span className="eyebrow">Life outside work</span><span className="section-index">05</span></div><h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(58px, 8vw, 130px)', lineHeight: .84, letterSpacing: '-.06em', textTransform: 'uppercase' }}>Places<br /><span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--sage)' }}>that shaped</span><br />me.</h2></div>
        <div style={{ alignSelf: 'end', justifySelf: 'end', maxWidth: 440 }}><p style={{ color: '#081510', fontSize: 'clamp(14px, 1.05vw, 17px)', lineHeight: 1.6, fontWeight: 400 }}>I travel for the spontaneous turns: the wrong alley that leads to the best meal, the stranger who rewrites your perspective over coffee.</p><p style={{ marginTop: 16, color: '#081510', fontFamily: 'var(--serif)', fontSize: 'clamp(16px, 1.25vw, 19px)', fontStyle: 'italic', lineHeight: 1.35 }}>Every city taught me something I couldn’t Google.</p></div>
      </div>

      <div data-travel="deck" className="travel-deck">
        <svg className="travel-route" aria-hidden="true" viewBox="0 0 1000 520" preserveAspectRatio="none">
          <motion.path d="M 35 365 C 190 145, 315 390, 475 245 S 760 105, 965 285" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }} />
        </svg>

        {cards.map((card, index) => (
          <motion.figure
            key={card.image}
            className="travel-postcard"
            tabIndex={0}
            aria-label={`${card.place}: ${card.note}`}
            initial={{ opacity: 0, y: 90, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: card.rotate }}
            whileHover={{ y: -22, rotate: 0, scale: 1.025, zIndex: 20 }}
            whileFocus={{ y: -16, rotate: 0, scale: 1.02, zIndex: 20 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: .85, delay: index * .1, ease: [0.16, 1, 0.3, 1] }}
            style={{ left: card.left, top: card.top, width: card.width, height: card.height, zIndex: card.z }}
          >
            <div className="postcard-image"><img className="warm" src={`${base}/assets/images/${card.image}`} alt={card.place} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: card.pos }} /></div>
            <figcaption><div><strong>{card.place}</strong><span>{card.note}</span></div><i>{String(index + 1).padStart(2, '0')}</i></figcaption>
          </motion.figure>
        ))}

        <div className="deck-note" aria-hidden="true">collected moments / 2015—26</div>
      </div>

      <div className="city-ticker"><div><span>{cities}</span><span aria-hidden="true">{cities}</span></div></div>
    </section>
  );
}
