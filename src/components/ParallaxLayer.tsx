import { useRef, ReactNode, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number; // negative = moves up slower, positive = moves down
  className?: string;
  start?: string;
  end?: string;
}

/** A layer that translates vertically relative to scroll progress through its parent section. */
export default function ParallaxLayer({
  children,
  speed = 0.3,
  className = '',
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.closest('[data-parallax-scope]') as HTMLElement | null;
    const trigger = parent || el;
    const amount = speed * 100;

    const tween = gsap.to(el, {
      yPercent: amount,
      ease: 'none',
      scrollTrigger: {
        trigger,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
}
