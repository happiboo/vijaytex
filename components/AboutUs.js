/* components/AboutUs.js */
'use client';
import { useReveal, useCounter } from './useReveal';
import styles from '../styles/AboutUs.module.css';

const stats = [
  { value: '1996', label: 'Year Founded', desc: 'Proprietorship' },
  { value: '28+', label: 'Years in Industry', desc: 'Trust built over decades' },
  { value: '150+', label: 'mills supplied', desc: 'across india and in international markets' },
  { value: 'CBE', label: 'Manufacturing Base', desc: 'Coimbatore, Tamil Nadu' },
];

function StatItem({ stat }) {
  // Disable counter for non-numeric values like 'CBE'
  const isNumeric = /\d/.test(stat.value);
  const counterRef = useCounter(isNumeric ? stat.value : '0');

  return (
    <div className={styles.stat}>
      <div className={styles.statVal}>
        {isNumeric ? (
          <span ref={counterRef} className={styles.statNum}>{stat.value}</span>
        ) : (
          <span className={styles.statNum}>{stat.value}</span>
        )}
      </div>
      <div className={styles.statInfo}>
        <span className={styles.statLabel}>{stat.label}</span>
        <span className={styles.statDesc}>{stat.desc}</span>
      </div>
    </div>
  );
}

export default function AboutUs() {
  const leftRef = useReveal({ threshold: 0.1 });
  const rightRef = useReveal({ threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>

        {/* Left — text */}
        <div className={`reveal ${styles.textCol}`} ref={leftRef}>
          <div className="pre-label">— About VijayTex</div>
          <h2 className={`display-heading ${styles.heading}`}>
            Manufactured in Coimbatore.<br /><em className={styles.em}>Trusted Across Globe.</em>
          </h2>

          <p className={styles.para}>
            VijayTex is a Coimbatore-based manufacturer of plastic cone covers, cone inserts/disks and plastic Twines. Established in 1996, serving textile mills with precision-made textile accessories all across india and in international markets
          </p>
          <p className={styles.para}>
            At VijayTex, We never speak insted our products speak for themselves.most of our clients have stood with us for over a decade.thanks to the quality and reliability of our products.
          </p>

          <div className={styles.location}>
            <div className={styles.locationDot} />
            <span>Coimbatore, Tamil Nadu</span>
          </div>
        </div>

        {/* Right — stats grid */}
        <div className={`reveal ${styles.statsCol}`} ref={rightRef}>
          {/* Blueprint circle visual */}
          <div className={styles.visual} aria-hidden="true">
            <div className={styles.ring1} />
            <div className={styles.ring2} />
            <div className={styles.ring3} />
            <div className={styles.crossH} />
            <div className={styles.crossV} />
            <div className={styles.centerDot} />
            <div className={styles.annotation1}>Recyclable</div>
            <div className={styles.annotation2}>Sustainable and ecofriendly</div>
            <div className={styles.annotation3}>PPCP meterial</div>
          </div>

          {/* Stats */}
          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <StatItem key={s.label} stat={s} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
