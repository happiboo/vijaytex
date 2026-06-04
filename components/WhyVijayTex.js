/* components/WhyVijayTex.js */
'use client';
import { useState } from 'react';
import { useReveal, splitWords } from './useReveal';
import styles from '../styles/WhyVijayTex.module.css';

const features = [
  {
    id: '01',
    title: 'IPR protection',
    content: (
      <>
        <p>Most of our designs are protected by Intellectual Property Rights (IPR) and are engineered to deliver lower weight, high performance, and exceptional value at a competitive price.</p>
      </>
    ),
  },
  {
    id: '02',
    title: 'Industry-Standard Material Integrity',
    content: (
      <>
        <p>While some manufacturers reduce costs by using lower-quality raw materials, VijayTex never compromises on quality. We use the right materials and maintain strict standards to ensure consistent performance and reliability.</p>
      </>
    ),
  },
  {
    id: '03',
    title: 'Constant Innovation Through R&D',
    content: (
        <p>At VijayTex, innovation is at the heart of everything we do. Our dedicated R&D team continuously develops new designs and manufacturing solutions to improve efficiency and reduce costs. Supported by our fully equipped in-house tool room, we can rapidly develop, test, and refine products, enabling us to deliver high-quality components at affordable prices without compromising on quality.</p>
    ),
  },
  {
    id: '04',
    title: 'Mill-Tested Durability',
    content: (
      <>
        <p>Trusted by textile mills across india and globe for their  Ring frame,airjet spinning (vortex spinning),Rotor Spinning (OE mills).</p>
      </>
    ),
  },
];

export default function WhyVijayTex() {
  const [openId, setOpenId] = useState('01');
  const leftRef = useReveal({ threshold: 0.1 });
  const rightRef = useReveal({ threshold: 0.1 });

  return (
    <section className={styles.section} id="why-us">
      <div className={styles.inner}>

        {/* Left col — editorial label + heading */}
        <div className={`reveal-left ${styles.leftCol}`} ref={leftRef}>
          <div className="pre-label">— Product Advantage</div>
          <h2 className={`display-heading ${styles.heading}`}>
            {splitWords('Why Our Cone Discs')}<br /><em className={styles.em}>{splitWords('Outperform the Rest.')}</em>
          </h2>
          <p className={styles.sub}>
            Engineered for precision fit, zero deviation, and decades of uninterrupted mill performance.
          </p>

          {/* Large accent number */}
          <div className={styles.bigNumber} aria-hidden="true">30+</div>
          <p className={styles.bigNumberLabel}>Years of precision manufacturing</p>
        </div>

        {/* Right col — accordion list */}
        <div className={`stagger-reveal ${styles.rightCol}`} ref={rightRef}>
          {features.map((f) => (
            <div
              key={f.id}
              className={`${styles.item} ${openId === f.id ? styles.open : ''}`}
              onClick={() => setOpenId(openId === f.id ? null : f.id)}
            >
              {/* Item header */}
              <div className={styles.itemHeader}>
                <span className={styles.itemIndex}>{f.id}</span>
                <h3 className={styles.itemTitle}>{f.title}</h3>
                <span className={styles.itemToggle}>
                  <span className={styles.toggleH} />
                  <span className={`${styles.toggleV} ${openId === f.id ? styles.toggleVHide : ''}`} />
                </span>
              </div>

              {/* Expandable description */}
              <div className={`${styles.itemBody} ${openId === f.id ? styles.itemBodyOpen : ''}`}>
                <div className={styles.itemDesc}>{f.content}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
