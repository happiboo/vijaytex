/* components/ComparisonTable.js */
'use client';
import { useReveal } from './useReveal';
import styles from '../styles/ComparisonTable.module.css';

const rows = [
  { feature: 'Dimensional Tolerance', vijay: '±0.02mm (Precise cone fit)', generic: '±0.15mm (Loose fit causes autoconer vibration)' },
  { feature: 'Material Quality',      vijay: '100% Virgin PP / HM-HDPE',   generic: 'Regrind plastic blend (warps under heat)' },
  { feature: 'Weight Variance',       vijay: 'Under ±2% (Calibrated balance)', generic: 'No standard (causes winding tension faults)' },
  { feature: 'Autoconer Speed',       vijay: 'Certified for high-speed lines', generic: 'Prone to slippage and ejection errors' },
  { feature: 'Buyback Recycling',     vijay: 'Closed-loop material credits',  generic: 'Zero manufacturer recycling policy' },
  { feature: 'Dispatch Guarantee',    vijay: 'Fast 72-hour turnaround',       generic: '3–7 days standard delivery time' },
];

export default function ComparisonTable() {
  const ref = useReveal({ threshold: 0.1 });

  return (
    <section className={styles.section} id="comparison">
      <div className={`reveal ${styles.inner}`} ref={ref}>
        <div className="pre-label">— Why We Win</div>
        <h2 className={`display-heading ${styles.heading}`}>
          Vijay Tex vs.<br /><em className={styles.em}>Generic Suppliers</em>
        </h2>

        <div className={styles.swipeHint}>
          <span>Swipe horizontally to view full specs</span>
          <span>→</span>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr className={styles.tr}>
                <th className={styles.thFeature}>Specification</th>
                <th className={`${styles.th} ${styles.thVijay}`}>
                  <span className={styles.thBadge}>VT</span>
                  Vijay Tex
                </th>
                <th className={`${styles.th} ${styles.thGeneric}`}>Generic Market</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={styles.tr}>
                  <td className={styles.tdFeature}>{row.feature}</td>
                  <td className={`${styles.td} ${styles.tdVijay}`}>
                    <span className={styles.check}>✓</span>
                    {row.vijay}
                  </td>
                  <td className={`${styles.td} ${styles.tdGeneric}`}>{row.generic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
