/* components/BuybackPolicy.js */
'use client';
import { useReveal } from './useReveal';
import styles from '../styles/BuybackPolicy.module.css';

const pillars = [
  {
    step: '1',
    title: 'Collect',
    desc: 'Used products are collected from our customers (yarn buyers) like knitting and weaving units.',
  },
  {
    step: '2',
    title: 'Recycle',
    desc: 'Materials are shredded into granules, processed and reused for manufacturing new products. (only mixed up to 20% so quality is never compromised)',
  },
  {
    step: '3',
    title: 'Recreate',
    desc: 'New products manufactured with recovered material, blended into virgin compound at controlled ratios.',
  },
];

export default function BuybackPolicy() {
  const headerRef = useReveal({ threshold: 0.15 });
  const pillarsRef = useReveal({ threshold: 0.1 });

  return (
    <section className={styles.section} id="buyback">
      <div className={styles.inner}>
        {/* Top Header */}
        <div className={`reveal ${styles.header}`} ref={headerRef}>
          {/* Left badge */}
          <div className={styles.badge}>
            <div className={styles.badgeRing} />
            <span className={styles.badgeIcon}>♻</span>
          </div>

          {/* Content */}
          <div className={styles.content}>
            <div className="pre-label">— Sustainability Pledge</div>
            <h2 className={styles.heading}>
              We Take Back<br />What We <em>Make.</em>
            </h2>
            <p className={styles.desc}>
              At VijayTex, we believe manufacturing responsibility doesn't end at delivery. We operate a buy-back program for used cone discs and plastic accessories — collecting, recycling, and reprocessing materials to reduce mill waste and support a circular supply chain.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className={`stagger-reveal ${styles.pillars}`} ref={pillarsRef}>
          {pillars.map((p) => (
            <div key={p.step} className={styles.pillar}>
              <div className={styles.pillarHeader}>
                <span className={styles.pillarStep}>0{p.step}</span>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
              </div>
              <p className={styles.pillarDesc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
