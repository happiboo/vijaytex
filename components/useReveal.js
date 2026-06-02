/* components/useReveal.js — Shared IntersectionObserver hook */
'use client';
import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, 'is-revealed' is added to its classList.
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - 0-1, default 0.15
 * @param {string} options.rootMargin - default '0px 0px -60px 0px'
 */
export function useReveal(options = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-revealed');
          observer.unobserve(el);
        }
      },
      {
        threshold: options.threshold ?? 0.12,
        rootMargin: options.rootMargin ?? '0px 0px -60px 0px',
      }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);
  return ref;
}

/**
 * Splits text into word-wrapped spans for reveal animation.
 * Each word gets: <span class="word-wrap"><span class="word-inner">word</span></span>
 */
export function splitWords(text) {
  return text.split(' ').map((word, i) => (
    <span key={i} className="word-wrap" style={{ marginRight: '0.28em' }}>
      <span className="word-inner" style={{ transitionDelay: `${i * 0.06}s` }}>
        {word}
      </span>
    </span>
  ));
}

/**
 * Counter animation hook — counts up from 0 to target when in view.
 */
export function useCounter(target, duration = 1800) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const raw = parseFloat(target.replace(/[^0-9.]/g, ''));
    const suffix = target.replace(/[0-9.]/g, '');
    let started = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          let start = null;
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = raw < 100
              ? (eased * raw).toFixed(raw % 1 !== 0 ? 1 : 0)
              : Math.floor(eased * raw);
            el.textContent = current + suffix;
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);
  return ref;
}
