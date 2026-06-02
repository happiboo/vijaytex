/* components/Navbar.js */
'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          {/* Logo */}
          <a href="#hero" className={styles.logo} onClick={() => handleNav('#hero')}>
            <Image src="/logo.png" alt="Vijay Tex Logo" width={240} height={240} style={{ objectFit: 'contain' }} className={styles.logoImage} />
          </a>

          {/* Desktop links */}
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`${styles.link} ${activeLink === link.href ? styles.active : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a href="#contact" className={styles.cta} onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}>
            Get a Quote
            <span className={styles.ctaArrow}>→</span>
          </a>

          {/* Burger */}
          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNav}>
          {navLinks.map((link, i) => (
            <div key={link.href} className={styles.mobileItem}>
              <span className={styles.mobileIndex}>0{i + 1}</span>
              <a
                href={link.href}
                className={styles.mobileLink}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              >
                {link.label}
              </a>
            </div>
          ))}
        </nav>
        <div className={styles.mobileFooter}>
          <span className={styles.mobileFooterText}>Coimbatore, Tamil Nadu</span>
          <a href="mailto:vijaytex07@gmail.com" className={styles.mobileEmail}>vijaytex07@gmail.com</a>
        </div>
      </div>
    </>
  );
}
