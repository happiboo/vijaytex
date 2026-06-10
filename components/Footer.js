/* components/Footer.js */
import Image from 'next/image';
import styles from '../styles/Footer.module.css';
import MagnetDots from './MagnetDots';

const links = [
  { label: 'products', href: '#products' },
  { label: 'why us',   href: '#why-us'   },
  { label: 'about',    href: '#about'    },
  { label: 'contact',  href: '#contact'  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.dotsBackground}>
        <MagnetDots />
      </div>

      {/* ── Top divider ── */}
      <div className={styles.topLine} />

      {/* ── Main footer body ── */}
      <div className={styles.inner}>

        {/* Left — brand column */}
        <div className={styles.brand}>
          <div className={styles.logoRow}>
            <Image
              src="/logo.png"
              alt="Vijay Tex Logo"
              width={80}
              height={80}
              style={{ objectFit: 'contain' }}
              className={styles.logoImage}
            />
          </div>

          <p className={styles.tagline}>
            TRUST - COMMITMENT - RESPONSIBILITY
          </p>
          <p className={styles.estd}>ESTD. 1996 · Coimbatore, Tamil Nadu</p>
          <p className={styles.estd} style={{ marginTop: '0.25rem', opacity: 0.6, fontSize: '0.7rem' }}>
            Manufacturers of cone disks, cone inserts, cone washers &amp; edge protectors for yarn cones and paper cones.
          </p>
        </div>

        {/* Center — nav */}
        <div className={styles.centerCol}>
          <span className={styles.colLabel}>Navigate</span>
          <nav className={styles.nav}>
            {links.map((l) => (
              <a key={l.href} href={l.href} className={styles.navLink}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right — contact */}
        <div className={styles.rightCol}>
          <span className={styles.colLabel}>Contact</span>
          <div className={styles.contact}>
            <a href="mailto:vijaytex07@gmail.com" className={styles.contactItem}>
              vijaytex07@gmail.com
            </a>
            <a href="tel:+919443059101" className={styles.contactItem}>
              +91 94430 59101
            </a>
            <a href="tel:+919442155833" className={styles.contactItem}>
              +91 94421 55833
            </a>
            <span className={styles.hours}>Mon – Sat · 09:00–18:00 IST</span>
          </div>
        </div>

      </div>

      {/* ── Interactive Playground Spacer ── */}
      <div className={styles.playgroundSpacer} />

      {/* ── Bottom bar ── */}
      <div className={styles.bottom}>
        <span className={styles.copy}>© {year} Vijay Tex. All rights reserved.</span>
        <span className={styles.designer}>
          Designed &amp; Built by{' '}
          <a
            href="https://www.instagram.com/heyy.kavin/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.designerLink}
          >
            Kavin
          </a>
        </span>
      </div>

    </footer>
  );
}
