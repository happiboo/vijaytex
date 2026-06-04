/* components/HeroSection.js */
'use client';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/HeroSection.module.css';

const specs = [
  { value: 'PPCP', label: 'Material Standard' },
  { value: '3° / 4° / 5°', label: 'Cone Angle' },
  { value: '150+', label: 'Satisfied Customers' },
];

export default function HeroSection() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Force video play (some browsers block autoplay)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => { });
    }
  }, []);

  // Magnetic button effect
  const handleMagnetic = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };
  const resetMagnetic = (e) => {
    e.currentTarget.style.transform = '';
  };

  return (
    <section className={`${styles.hero} ${loaded ? styles.loaded : ''}`} id="hero" ref={heroRef}>

      {/* RIGHT — Full-height video pane, 99% visible */}
      <div className={styles.videoPane}>
        <video
          ref={videoRef}
          className={styles.video}
          src="/hero-pingpong.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Thin left-edge fade so it blends into text side */}
        <div className={styles.videoEdgeFade} />

      </div>

      {/* LEFT — Text content inside centered container */}
      <div className={styles.innerContainer}>
        {/* Subtle grid on text side only */}
        <div className={styles.grid} aria-hidden="true" />
        {/* Accent glow */}
        <div className={styles.blob} aria-hidden="true" />

        <div className={styles.textInner}>

          {/* Top Label */}
          <div className={styles.topLabel}>
            <span className={styles.dot} />
            ESTD. 1996
          </div>

          {/* Brand name */}
          <h1 className={styles.brandName}>
            <span className={styles.brandLine1}>VIJAY</span>
            <span className={styles.brandLine2}>
              <em className={styles.brandItalic}>TEX</em>
            </span>
          </h1>

          {/* Tagline */}
          <div className={styles.taglineRow}>
            <div className={styles.taglineLine} />
            <p className={styles.tagline}>
              Three decades<br />of trust, commitment and responsibility.
            </p>
          </div>

          {/* Subtext */}
          <p className={styles.subtext}>
            Manufacturers of textile cone accessories trusted by 150+ mills across India and overseas.
          </p>

          {/* CTAs */}
          <div className={styles.ctaRow}>
            <a
              href="#products"
              className={`btn-primary ${styles.ctaPrimary}`}
              onMouseMove={handleMagnetic}
              onMouseLeave={resetMagnetic}
            >
              Explore Products <span>→</span>
            </a>
            <a href="#contact" className="btn-ghost">
              Contact Us
            </a>
          </div>

          {/* Stats */}
          <div className={styles.statsRow}>
            {specs.map((s, i) => (
              <div key={i} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </div>

      <div className={styles.bottomBorder} />
    </section>
  );
}
