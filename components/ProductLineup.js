/* components/ProductLineup.js — Ario-law style practice cards */
'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useReveal } from './useReveal';
import styles from '../styles/ProductLineup.module.css';

const products = [
  {
    id: 1,
    index: '01',
    name: 'Yarn cone cover',
    description: 'Yarn cone covers made from HM-HDPE and LDPE for giving higher cover per kg.',
    detail: 'Available at 20g,30g,40g.',
    gradient: 'linear-gradient(135deg, #1a1f2c 0%, #0d0f14 100%)',
    accentColor: 'rgba(29, 78, 216, 0.55)',
    image: '/products/cone-cover.jpg',
  },
  {
    id: 2,
    index: '02',
    name: 'PP Plastic\nTwine',
    description: 'Made from premimum vergin grade for higher kg to meter convertion',
    detail: 'Available at 1000,1500,2000 meters per kg',
    gradient: 'linear-gradient(135deg, #1e2230 0%, #0d0f14 100%)',
    accentColor: 'rgba(29, 78, 216, 0.70)',
    image: '/products/twine.jpg',
  },
  {
    id: 3,
    index: '03',
    name: 'Yarn Cone Disc',
    description: 'PP cone discs for 3°,4°,5° paper cones .',
    detail: 'Made from 60% recycled plastic,30% virgin plastic,10% hardening agents .',
    gradient: 'linear-gradient(135deg, #171c28 0%, #0d0f14 100%)',
    accentColor: 'rgba(29, 78, 216, 0.45)',
    image: '/products/cone-disc.png',
  },
];

function ProductCard({ product, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => card.classList.add(styles.revealed), index * 120);
          observer.unobserve(card);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div className={styles.card} ref={cardRef} style={{ background: product.gradient }} tabIndex="0">
      {/* Corner decorators — ario.law style */}
      <div className={styles.cornerTL}>
        <span className={styles.lineH} /><span className={styles.lineV} />
      </div>
      <div className={styles.cornerBR}>
        <span className={styles.lineH} /><span className={styles.lineV} />
      </div>

      {/* Product Image */}
      {product.image && (
        <div className={styles.imageWrap}>
          <Image 
            src={product.image} 
            alt={product.name.replace('\n', ' ')} 
            fill 
            style={{ objectFit: 'cover' }} 
            className={styles.cardImage}
          />
          <div className={styles.imageOverlay} />
        </div>
      )}

      {/* Card content */}
      <div className={styles.cardInner}>
        {/* Index */}
        <div className={styles.indexWrap}>
          <span className={styles.index}>{product.index}</span>
          <div className={styles.indexLine} />
        </div>

        {/* Name */}
        <h3 className={styles.name}>
          {product.name.split('\n').map((line, i) => (
            <span key={i} className={styles.nameLine}>{line}</span>
          ))}
        </h3>

        {/* Separator */}
        <div className={styles.sep} />

        {/* Description */}
        <p className={styles.desc}>{product.description}</p>

      </div>

      {/* Hover overlay — ario-style "More" panel */}
      <div className={styles.hoverOverlay}>
        <div className={styles.hoverGrad} style={{ background: `radial-gradient(ellipse at center, ${product.accentColor} 0%, transparent 70%)` }} />
        <div className={styles.hoverContent}>
          <span className={styles.hoverIndex}>{product.index}</span>
          <h3 className={styles.hoverName}>
            {product.name.replace('\n', ' ')}
          </h3>
          <p className={styles.hoverDetail}>{product.detail}</p>
          <div className={styles.hoverCta}>
            <span>Details</span>
            <svg width="16" height="16" viewBox="0 0 48 48" fill="currentColor">
              <path d="M29.3 29.5V45.6H19V29.5H3V19.3H19V3.3H29.3V19.3H45.3V29.5H29.3Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductLineup() {
  const headRef = useReveal();

  return (
    <section className={styles.section} id="products">
      <div className={styles.inner}>
        {/* Header */}
        <div className={`${styles.header} reveal`} ref={headRef}>
          <div className="pre-label">— Product Line</div>
          <h2 className={`${styles.heading} display-heading`}>
            Three Products.<br /><em>Zero Compromise.</em>
          </h2>
          <p className={styles.headSub}>
            Every component  is engineered for precision fit, durability, and mill-floor performance.
          </p>
        </div>

        {/* Cards grid */}
        <div className={styles.grid}>
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
