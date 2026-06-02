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
          <a href="mailto:vijaytex07@gmail.com" className={styles.email}>
            vijaytex07@gmail.com
          </a>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <a href="tel:+919443059101" className={styles.phone}>
              +91 94430 59101
            </a>
            <a href="tel:+919442155833" className={styles.phone}>
              +91 94421 55833
            </a>
          </div>
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
