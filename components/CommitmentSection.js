/* components/CommitmentSection.js */
'use client';
import { useReveal, splitWords } from './useReveal';
import styles from '../styles/CommitmentSection.module.css';

const commitments = [
  {
    id: '01',
    key: 'Ultra-Fast Delivery',
    title: '24 hours dispatch',
    desc: 'At Vijay Tex, we understand the importance of uninterrupted production in spinning mills. Once the Purchase Order (PO) is confirmed, dispatch from our factory is initiated within 24 hours, irrespective of order volume.',
  },
  {
    id: '02',
    key: 'Emergency Stocking & Supply Assurance',
    title: 'Up to 2 Months Your Volume',
    desc: 'To ensure uninterrupted supply for our customers, Vijay Tex follows a proactive pre-stocking mechanism.Once regular order volumes are established, we maintain up to 2 months of ready stock based on buyer consumption patterns.',
  },
  {
    id: '03',
    key: 'Multiple Product Segments for Every Requirement',
    title: 'Premium, Mid-range & Budget-friendly solutions',
    desc: 'We offer cone disk solutions across multiple pricing categories based on mill requirements and operational preferences.we offer Budget Segment,Mid Segment,Premium Segment.This allows customers to select products based on their requirment.',
  },
];

export default function CommitmentSection() {
  const headRef = useReveal();
  const gridRef = useReveal();

  return (
    <section className={styles.section} id="commitment">
      <div className={styles.inner}>

        {/* Header */}
        <div className={`reveal ${styles.header}`} ref={headRef}>
          <div className="pre-label">— Our Commitment</div>
          <h2 className={`display-heading ${styles.heading}`}>
            {splitWords('More Than a Supplier.')}<br /><em className={styles.em}>{splitWords('A Long-Term Mill Supply Partner.')}</em>
          </h2>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <div className={`stagger-reveal ${styles.grid}`} ref={gridRef}>
            {commitments.map((c) => (
              <div key={c.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.key}>{c.key}</span>
                  <span className={styles.id}>{c.id}</span>
                </div>
                <h3 className={styles.title}>{c.title}</h3>
                <p className={styles.desc}>{c.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.quoteBlock}>
            <p className={styles.quoteText}>
              "At Vijay Tex, we do not just manufacture cone disks — we build reliable textile support solutions "
            </p>
            <p className={styles.quoteAuthor}>— Mr. D. VIJAYAKUMAR [FOUNDER]</p>
          </div>
        </div>

      </div>
    </section>
  );
}
