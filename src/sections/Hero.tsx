import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Starfield from '../components/Starfield';
import { useMousePosition } from '../hooks/useScroll';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const mouse = useMousePosition();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Mouse parallax for layers
  const mx = (mouse.x / window.innerWidth - 0.5) * 2;
  const my = (mouse.y / window.innerHeight - 0.5) * 2;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      // Hero content fades + scales out as you scroll
      gsap.to('.hero-content', {
        yPercent: -30,
        opacity: 0,
        scale: 0.92,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.to('.hero-stars', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-parallax-scope
      className="relative h-screen w-full overflow-hidden bg-space-900"
    >
      {/* Starfield background */}
      <div className="hero-stars absolute inset-0">
        <Starfield density={220} />
      </div>

      {/* Nebula gradient */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(ellipse at 30% 40%, rgba(76,201,255,0.18), transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(179,136,255,0.15), transparent 50%)',
        }}
      />

      {/* Distant mountains (background - moves least) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40%]"
        style={{ transform: `translateX(${mx * -8}px) translateY(${my * -5}px)` }}
      >
        <svg viewBox="0 0 1920 400" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,400 L0,280 L200,180 L380,260 L560,140 L760,220 L960,120 L1160,240 L1360,160 L1560,260 L1760,180 L1920,280 L1920,400 Z" fill="#0a0b1e" opacity="0.8" />
        </svg>
      </div>

      {/* Mid mountains */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[28%]"
        style={{ transform: `translateX(${mx * -16}px) translateY(${my * -10}px)` }}
      >
        <svg viewBox="0 0 1920 300" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,300 L0,200 L160,120 L320,220 L480,100 L640,200 L800,140 L960,240 L1120,160 L1280,220 L1440,120 L1600,200 L1760,140 L1920,220 L1920,300 Z" fill="#11132e" />
        </svg>
      </div>

      {/* Foreground silhouette ridge */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[16%]"
        style={{ transform: `translateX(${mx * -28}px) translateY(${my * -16}px)` }}
      >
        <svg viewBox="0 0 1920 160" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,160 L0,100 L80,80 L160,110 L240,70 L320,100 L400,60 L480,90 L560,50 L640,80 L720,40 L800,70 L880,30 L960,60 L1040,40 L1120,70 L1200,30 L1280,60 L1360,40 L1440,70 L1520,50 L1600,80 L1680,60 L1760,90 L1840,70 L1920,100 L1920,160 Z" fill="#05060f" />
        </svg>
      </div>

      {/* Hero content */}
      <div className="hero-content relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-6 flex items-center gap-3 glass rounded-full px-5 py-2"
        >
          <span className="w-2 h-2 rounded-full bg-neon-cyan anim-pulse-glow" />
          <span className="font-mono text-[11px] tracking-[0.3em] text-ink-dim uppercase">
            An Interactive Experience
          </span>
        </motion.div>

        <motion.h1
          ref={titleRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold leading-[1.05] text-balance"
          style={{ fontSize: 'clamp(2.4rem, 8vw, 6.5rem)' }}
        >
          <span className="block neon-text text-ink">Journey Through</span>
          <span className="block gradient-text mt-2">Innovation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-8 max-w-xl text-ink-dim text-base md:text-lg leading-relaxed text-balance"
        >
          Scroll to travel through the past, present, and future of technology.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-ink-faint uppercase">Scroll</span>
          <div className="relative w-[24px] h-[40px] rounded-full border border-white/20 flex justify-center pt-2">
            <span
              className="w-[3px] h-[8px] rounded-full bg-neon-blue"
              style={{ animation: 'scroll-hint 1.8s ease-in-out infinite', boxShadow: '0 0 8px rgba(76,201,255,0.8)' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
