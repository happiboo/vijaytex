/* components/Footer.js */
import Image from 'next/image';
import styles from '../styles/Footer.module.css';

const links = [
  { label: 'Products', href: '#products' },
  { label: 'Why Us',   href: '#why-us'   },
  { label: 'About',    href: '#about'    },
  { label: 'Contact',  href: '#contact'  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      {/* Top border line */}
      <div className={styles.topLine} />

      <div className={styles.inner}>
        {/* Left — brand */}
        <div className={styles.brand}>
          <div className={styles.logoRow}>
            <Image src="/logo.png" alt="Vijay Tex Logo" width={120} height={120} style={{ objectFit: 'contain' }} className={styles.logoImage} />
          </div>
          <p className={styles.tagline}>
            Precision Engineered Cone Disks<br />
            <span className={styles.location}>Coimbatore, Tamil Nadu</span>
          </p>
        </div>

        {/* Center — nav */}
        <nav className={styles.nav}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className={styles.navLink}>{l.label}</a>
          ))}
        </nav>

        {/* Right — contact */}
        <div className={styles.contact}>
          <a href="mailto:info@vijaytex.in" className={styles.email}>
            info@vijaytex.in
          </a>
          <a href="tel:+919876543210" className={styles.phone}>
            +91 98765 43210
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <span className={styles.copy}>© {year} Vijay Tex. All rights reserved.</span>
        <span className={styles.made}>Precision. Performance. Partnership.</span>
      </div>
    </footer>
  );
}
