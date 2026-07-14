import { useRef, ReactNode, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  bg?: string;
}

export default function Section({ id, children, className = '', bg }: SectionProps) {
  return (
    <section
      id={id}
      data-parallax-scope
      className={`relative w-full min-h-screen overflow-hidden ${className}`}
      style={bg ? { background: bg } : undefined}
    >
      {children}
    </section>
  );
}

/** Reveals children with a fade + slight upward movement when scrolled into view. */
export function useReveal<T extends HTMLElement = HTMLDivElement>(delay = 0) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(el, {
        y: 60,
        opacity: 0,
        duration: 1,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 82%',
          toggleActions: 'play none none reverse',
        },
      });
    });
    return () => ctx.revert();
  }, [delay]);

  return ref;
}

/** Splits text content into spans for letter-by-letter reveal. */
export function useLetterReveal<T extends HTMLElement = HTMLDivElement>(delay = 0) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const text = el.dataset.text || el.textContent || '';
    el.textContent = '';
    el.dataset.text = text;

    const chars = text.split('');
    const spans = chars.map((c) => {
      const span = document.createElement('span');
      span.textContent = c === ' ' ? '\u00A0' : c;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(0.4em) rotate(6deg)';
      el.appendChild(span);
      return span;
    });

    const ctx = gsap.context(() => {
      gsap.to(spans, {
        opacity: 1,
        y: 0,
        rotate: 0,
        duration: 0.6,
        stagger: 0.025,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    });
    return () => ctx.revert();
  }, [delay]);

  return ref;
}
