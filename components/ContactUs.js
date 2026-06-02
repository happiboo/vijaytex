/* components/ContactUs.js */
'use client';
import { useState } from 'react';
import { useReveal } from './useReveal';
import styles from '../styles/ContactUs.module.css';

const contactInfo = {
  address: 'No 10, K.K.Nagar, Kurichi,\nCoimbatore, Tamil Nadu 641021',
  phone:   '+91 98765 — 43210',
  whatsapp: '919876543210',
  email:   'info@vijaytex.in',
  hours:   'Mon — Sat · 09:00 to 18:00 IST',
};

export default function ContactUs() {
  const [phoneRevealed, setPhoneRevealed] = useState(false);
  const leftRef  = useReveal({ threshold: 0.1 });
  const rightRef = useReveal({ threshold: 0.1 });

  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>

        {/* Left — heading */}
        <div className={`reveal ${styles.leftCol}`} ref={leftRef}>
          <div className="pre-label">— Get In Touch</div>
          <h2 className={`display-heading ${styles.heading}`}>
            Let's Build a Long-Term Supply<br /><em className={styles.em}>Partnership.</em>
          </h2>

          {/* Contact details */}
          <div className={styles.details}>
            <div className={styles.detail}>
              <span className={styles.detailIcon}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z"/>
                </svg>
              </span>
              {phoneRevealed ? (
                <span>{contactInfo.phone}</span>
              ) : (
                <button 
                  onClick={() => setPhoneRevealed(true)} 
                  style={{ background: 'none', border: 'none', color: 'inherit', padding: 0, font: 'inherit', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Reveal Phone Number
                </button>
              )}
            </div>
            <div className={styles.detail}>
              <span className={styles.detailIcon}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              <span>{contactInfo.email}</span>
            </div>
            <div className={styles.detail}>
              <span className={styles.detailIcon}>◎</span>
              <span>{contactInfo.hours}</span>
            </div>
          </div>
        </div>

        {/* Right — Address & WhatsApp */}
        <div className={`reveal ${styles.rightCol}`} ref={rightRef}>
          <div className={styles.addressCard}>
            <h3 className={styles.cardTitle}>Headquarters</h3>
            <iframe 
              src="https://maps.google.com/maps?q=Kurichi,%20Coimbatore,%20Tamil%20Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="350" 
              style={{ border: 0, borderRadius: '8px', filter: 'grayscale(0.3) contrast(1.1)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            <a 
              href={`https://wa.me/${contactInfo.whatsapp}?text=Hi,%20I%20would%20like%20to%20inquire%20about%20a%20partnership%20with%20Vijay%20Tex.`}
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              Connect on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
