'use client';
import { useState, useEffect } from 'react';
import { useReveal } from './useReveal';
import styles from '../styles/ComparisonTable.module.css';

export default function ComparisonTable() {
  const ref = useReveal({ threshold: 0.1 });
  const [viewMode, setViewMode] = useState('percentage'); // 'percentage' | 'cost'
  const [yarnCost, setYarnCost] = useState(300); // Cost per kg
  const [animatedSavings, setAnimatedSavings] = useState(0);

  // Animate the 5% number when it comes into view
  useEffect(() => {
    let start = 0;
    const end = 5;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setAnimatedSavings(end);
        clearInterval(timer);
      } else {
        setAnimatedSavings(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, []);

  const calculateCost = (percentageStr, isSavings) => {
    if (viewMode === 'percentage') return percentageStr;

    // Extract average percentage. e.g., "7-10%" -> 8.5%
    const match = percentageStr.match(/(\d+)(?:–|-)(\d+)/);
    let avg = 0;
    if (match) {
      avg = (parseFloat(match[1]) + parseFloat(match[2])) / 2;
    } else {
      const singleMatch = percentageStr.match(/(\d+)/);
      if (singleMatch) avg = parseFloat(singleMatch[1]);
    }

    // 1 Ton = 1000kg
    const amountInKg = 1000 * (avg / 100);
    const cost = amountInKg * yarnCost;

    return `₹${cost.toLocaleString()} ${isSavings ? 'Saved' : 'Extra'}`;
  };

  return (
    <section className={styles.section} id="comparison">
      <div className={`reveal section-inner ${styles.container}`} ref={ref}>
        <div className={styles.header}>
          <div className="pre-label">— The VijayTex Advantage</div>
          <h2 className="display-heading">Why you should use cone inserts</h2>
          <p className={styles.subtitle}>See how VijayTex redefines efficiency across units</p>
        </div>

        <div className={styles.controls}>
          <div className={styles.toggleGroup}>
            <button
              className={`${styles.toggleBtn} ${viewMode === 'percentage' ? styles.active : ''}`}
              onClick={() => setViewMode('percentage')}
            >
              Percentage Savings
            </button>
            <button
              className={`${styles.toggleBtn} ${viewMode === 'cost' ? styles.active : ''}`}
              onClick={() => setViewMode('cost')}
            >
              Cost Savings
            </button>
          </div>

          {viewMode === 'cost' && (
            <div className={styles.inputGroup}>
              <label>Yarn Cost (per kg):</label>
              <div className={styles.inputWrapper}>
                <span className={styles.currencySymbol}>₹</span>
                <input
                  type="number"
                  value={yarnCost}
                  onChange={(e) => setYarnCost(Number(e.target.value))}
                  className={styles.costInput}
                />
              </div>
            </div>
          )}
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th></th>
                <th className={styles.colHeader}>
                  <div className={styles.headerCard}>
                    WITHOUT USING VIJAYTEX (cone disk)
                  </div>
                </th>
                <th className={`${styles.colHeader} ${styles.vijaytexHeader}`}>
                  <div className={`${styles.headerCard} ${styles.premiumCard}`}>
                    WITH USING VIJAYTEX (cone disk)
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Weaving Units */}
              <tr>
                <td className={styles.rowLabel}>
                  <div className={styles.labelCard}>Weaving Units</div>
                </td>
                <td className={styles.cell}>
                  <ul className={styles.featureList}>
                    <li>1 Ton Production</li>
                    <li className={styles.neutralItem}>
                      <span className={styles.iconNeutral}>↑</span>
                      {viewMode === 'percentage' ? 'Requires 7–10% additional yarn (normal)' : calculateCost('7-10%', false)}
                    </li>
                    <li className={styles.costItem}>
                      <span className={styles.iconUp}>↑</span>
                      {viewMode === 'percentage' 
                        ? '+2-5% extra loss because you did not use cone disk made by VijayTex' 
                        : `+ ${calculateCost('2-5%', false).replace(' Extra', '')} extra loss because you did not use cone disk made by VijayTex`}
                    </li>
                    <li className={styles.costItem}><span className={styles.iconUp}>↑</span> Increased handling damage</li>
                  </ul>
                </td>
                <td className={`${styles.cell} ${styles.vijaytexCell}`}>
                  <ul className={styles.featureList}>
                    <li>1 Ton Production</li>
                    <li className={styles.savingsItem}>
                      <span className={styles.iconCheck}>✓</span>
                      {viewMode === 'percentage' ? 'Saves 2–5% yarn (normal)' : calculateCost('2-5%', true)}
                    </li>
                    <li className={styles.savingsItem}><span className={styles.iconCheck}>✓</span> Reduces extra purchases</li>
                    <li className={styles.savingsItem}><span className={styles.iconCheck}>✓</span> Minimizes transport damage</li>
                    <li className={styles.savingsItem}><span className={styles.iconCheck}>✓</span> Improves efficiency</li>
                  </ul>
                </td>
              </tr>

              {/* Knitting Units */}
              <tr>
                <td className={styles.rowLabel}>
                  <div className={styles.labelCard}>Knitting Units</div>
                </td>
                <td className={styles.cell}>
                  <ul className={styles.featureList}>
                    <li>1 Ton Production</li>
                    <li className={styles.neutralItem}>
                      <span className={styles.iconNeutral}>↑</span>
                      {viewMode === 'percentage' ? 'Requires 5–10% additional yarn (normal)' : calculateCost('5-10%', false)}
                    </li>
                    <li className={styles.costItem}>
                      <span className={styles.iconUp}>↑</span>
                      {viewMode === 'percentage' 
                        ? '+1-3% extra loss because you did not use cone disk made by VijayTex' 
                        : `+ ${calculateCost('1-3%', false).replace(' Extra', '')} extra loss because you did not use cone disk made by VijayTex`}
                    </li>
                    <li className={styles.costItem}><span className={styles.iconUp}>↑</span>Increased handling damage</li>
                  </ul>
                </td>
                <td className={`${styles.cell} ${styles.vijaytexCell}`}>
                  <ul className={styles.featureList}>
                    <li>1 Ton Production</li>
                    <li className={styles.savingsItem}>
                      <span className={styles.iconCheck}>✓</span>
                      {viewMode === 'percentage' ? 'Saves 1–3% yarn (normal)' : calculateCost('1-3%', true)}
                    </li>
                    <li className={styles.savingsItem}><span className={styles.iconCheck}>✓</span> Reduces extra purchases</li>
                    <li className={styles.savingsItem}><span className={styles.iconCheck}>✓</span> Better utilization</li>
                    <li className={styles.savingsItem}><span className={styles.iconCheck}>✓</span> Lower material waste</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.summaryContent}>
            <div className={styles.summaryText}>
              <h3>Potential Savings Overview</h3>
              <ul>
                <li>Weaving Units: Save 2–5% Yarn</li>
                <li>Knitting Units: Save 1–3% Yarn</li>
                <li>Reduced Cone Damage & Lower Procurement Costs</li>
                <li>Improved Manufacturing Efficiency</li>
              </ul>
            </div>
            <div className={styles.summaryStat}>
              <div className={styles.statCircle}>
                <span className={styles.statNumber}>
                  Up to {Math.round(animatedSavings)}%
                </span>
                <span className={styles.statLabel}>Yarn Savings Per Ton</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
