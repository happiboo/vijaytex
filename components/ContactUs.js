/* components/ContactUs.js */
'use client';
import { useState } from 'react';
import { useReveal } from './useReveal';
import styles from '../styles/ContactUs.module.css';

const contactInfo = {
  address: 'Coimbatore, Tamil Nadu',
  phone:   '+91 98765 — 43210',
  email:   'Available on request',
  hours:   'Mon — Sat · 09:00 to 18:00 IST',
};

function FloatingField({ id, label, type = 'text', placeholder, name, required, textarea }) {
  const [focused, setFocused]  = useState(false);
  const [hasVal, setHasVal]    = useState(false);

  const active = focused || hasVal;
  const Tag = textarea ? 'textarea' : 'input';

  return (
    <div className={`${styles.field} ${active ? styles.fieldActive : ''}`}>
      <label htmlFor={id} className={`${styles.label} ${active ? styles.labelFloat : ''}`}>
        {label}
      </label>
      <Tag
        id={id}
        name={name}
        type={type}
        className={textarea ? styles.textarea : styles.input}
        placeholder={active ? placeholder : ''}
        required={required}
        rows={textarea ? 5 : undefined}
        onFocus={() => setFocused(true)}
        onBlur={(e)  => { setFocused(false); setHasVal(e.target.value.length > 0); }}
        onChange={(e) => setHasVal(e.target.value.length > 0)}
      />
      <div className={styles.fieldLine} />
    </div>
  );
}

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [phoneRevealed, setPhoneRevealed] = useState(false);
  const leftRef  = useReveal({ threshold: 0.1 });
  const rightRef = useReveal({ threshold: 0.1 });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

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
              <span className={styles.detailIcon}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </span>
              <span style={{ whiteSpace: 'pre-line' }}>{contactInfo.address}</span>
            </div>
            <div className={styles.detail}>
              <span className={styles.detailIcon}>◎</span>
              <span>{contactInfo.hours}</span>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className={`reveal ${styles.rightCol}`} ref={rightRef}>
          {submitted ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>✓</div>
              <h3 className={styles.successTitle}>Message Received</h3>
              <p className={styles.successText}>We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.row}>
                <FloatingField id="name"  label="Name" name="name"  placeholder="John Doe" required />
                <FloatingField id="company" label="Company / Mill" name="company" placeholder="ABC Textiles" />
              </div>
              <FloatingField id="message" label="Message"  name="message" placeholder="Your requirements..." required textarea />

              <button type="submit" className={`btn-primary ${styles.submit}`}>
                Send Enquiry
                <span>→</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
