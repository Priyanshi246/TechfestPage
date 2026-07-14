import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParallaxLayer from '../components/ParallaxLayer';
import Starfield from '../components/Starfield';
import SectionDivider from '../components/SectionDivider';

gsap.registerPlugin(ScrollTrigger);

export default function SpaceFuture() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from('.space-text', {
        y: 60,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.space-text', start: 'top 82%', toggleActions: 'play none none reverse' },
      });
      // Rocket launch triggered on scroll
      gsap.fromTo('.rocket',
        { y: 200, opacity: 0, scale: 0.8 },
        {
          y: -400,
          opacity: 1,
          scale: 1.1,
          ease: 'power2.in',
          scrollTrigger: {
            trigger: el,
            start: 'top 50%',
            end: 'bottom 30%',
            scrub: 1.5,
          },
        }
      );
      gsap.fromTo('.rocket-flame',
        { scaleY: 0.4, opacity: 0.3 },
        {
          scaleY: 1.5,
          opacity: 1,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top 50%', end: 'bottom 30%', scrub: true },
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} data-parallax-scope className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-[#0a0b1e] via-[#080a1a] to-[#05060f]">
      {/* Starfield background (slowest) */}
      <ParallaxLayer speed={-0.15} className="absolute inset-0">
        <Starfield density={160} />
      </ParallaxLayer>

      {/* Aurora effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[10%] left-[-20%] w-[140%] h-[200px] blur-3xl"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(94,234,212,0.2), rgba(76,201,255,0.15), transparent)',
            animation: 'aurora-shift 12s ease-in-out infinite',
          }}
        />
        <div
          className="absolute top-[30%] left-[-20%] w-[140%] h-[180px] blur-3xl"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(179,136,255,0.18), rgba(255,121,198,0.12), transparent)',
            animation: 'aurora-shift 16s ease-in-out infinite',
            animationDelay: '2s',
          }}
        />
      </div>

      {/* Distant planet (background) */}
      <ParallaxLayer speed={-0.2} className="absolute top-[15%] right-[10%]">
        <div className="relative w-[100px] h-[100px] md:w-[160px] md:h-[160px]">
          <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle at 35% 35%, #ff79c6, #b388ff 50%, #4a3a6e 80%)', boxShadow: '0 0 60px rgba(179,136,255,0.3)' }} />
          <div className="absolute inset-0 rounded-full opacity-30" style={{ background: 'radial-gradient(circle at 70% 70%, transparent 60%, rgba(0,0,0,0.5))' }} />
        </div>
      </ParallaxLayer>

      {/* Ringed planet (midground) */}
      <ParallaxLayer speed={-0.35} className="absolute top-[55%] left-[8%]">
        <div className="relative w-[80px] h-[80px] md:w-[120px] md:h-[120px] anim-float-y">
          <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle at 30% 30%, #5eead4, #4cc9ff 60%, #1a4a5e)' }} />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[24px] rounded-full border-2"
            style={{ borderColor: 'rgba(94,234,212,0.4)', transform: 'translate(-50%, -50%) rotate(-20deg)', borderTopColor: 'transparent', borderBottomColor: 'rgba(94,234,212,0.2)' }}
          />
        </div>
      </ParallaxLayer>

      {/* Small moon */}
      <ParallaxLayer speed={-0.4} className="absolute top-[40%] right-[25%]">
        <div className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full opacity-70" style={{ background: 'radial-gradient(circle at 35% 35%, #c0c8e0, #6a7290 60%, #3a3e5a)' }} />
      </ParallaxLayer>

      {/* Satellite animation (midground) */}
      <ParallaxLayer speed={-0.45} className="absolute top-[22%] left-[15%]">
        <div className="relative anim-float-soft">
          <svg width="80" height="50" viewBox="0 0 80 50">
            {/* Solar panels */}
            <rect x="0" y="18" width="22" height="14" fill="#1a1d44" stroke="#4cc9ff" strokeWidth="0.5" />
            <rect x="58" y="18" width="22" height="14" fill="#1a1d44" stroke="#4cc9ff" strokeWidth="0.5" />
            <line x1="0" y1="25" x2="22" y2="25" stroke="#4cc9ff" strokeWidth="0.3" opacity="0.5" />
            <line x1="58" y1="25" x2="80" y2="25" stroke="#4cc9ff" strokeWidth="0.3" opacity="0.5" />
            {/* Body */}
            <rect x="26" y="14" width="28" height="22" rx="3" fill="#0d1028" stroke="#b388ff" strokeWidth="1" />
            <circle cx="40" cy="25" r="4" fill="#4cc9ff" opacity="0.7">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
            </circle>
            {/* Antenna */}
            <line x1="40" y1="14" x2="40" y2="6" stroke="#b388ff" strokeWidth="0.8" />
            <circle cx="40" cy="5" r="1.5" fill="#5eead4" />
          </svg>
          {/* Signal pulses */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-neon-blue/40 anim-pulse-glow" />
        </div>
      </ParallaxLayer>

      {/* Rocket (foreground, launches on scroll) */}
      <div className="rocket absolute bottom-[10%] left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <div className="relative flex flex-col items-center">
          {/* Flame */}
          <div className="rocket-flame origin-top w-[14px] h-[60px] -mb-2" style={{ transformOrigin: 'top' }}>
            <div className="w-full h-full rounded-b-full" style={{ background: 'linear-gradient(to bottom, #ff9d4a, #ff79c6 40%, #4cc9ff 80%, transparent)', filter: 'blur(2px)' }} />
          </div>
          {/* Rocket body */}
          <svg width="60" height="120" viewBox="0 0 60 120">
            {/* Nose cone */}
            <path d="M30,0 L42,28 L18,28 Z" fill="#e7ecff" stroke="#4cc9ff" strokeWidth="1" />
            {/* Body */}
            <rect x="18" y="28" width="24" height="60" rx="2" fill="#e7ecff" stroke="#4cc9ff" strokeWidth="1" />
            {/* Window */}
            <circle cx="30" cy="45" r="6" fill="#0a0b1e" stroke="#4cc9ff" strokeWidth="1" />
            <circle cx="30" cy="45" r="3" fill="#4cc9ff" opacity="0.6" />
            {/* Fins */}
            <path d="M18,80 L6,100 L18,92 Z" fill="#b388ff" stroke="#b388ff" strokeWidth="0.5" />
            <path d="M42,80 L54,100 L42,92 Z" fill="#b388ff" stroke="#b388ff" strokeWidth="0.5" />
            {/* Stripe */}
            <rect x="18" y="62" width="24" height="4" fill="#b388ff" />
            {/* Engine */}
            <rect x="22" y="88" width="16" height="8" rx="2" fill="#1a1d44" stroke="#4cc9ff" strokeWidth="0.5" />
          </svg>
        </div>
      </div>

      {/* Text content */}
      <div className="relative z-10 min-h-screen flex items-center px-6 md:px-20">
        <div className="max-w-xl">
          <span className="font-mono text-xs tracking-[0.3em] text-neon-cyan uppercase mb-4 block">
            05 — Space Future
          </span>
          <h2 className="space-text font-display font-bold text-3xl md:text-5xl leading-tight mb-6 text-balance">
            Beyond the <span className="gradient-text">Stars</span>
          </h2>
          <p className="space-text text-ink-dim text-base md:text-lg leading-relaxed max-w-md">
            The final frontier calls. Satellites map our world, rockets pierce the atmosphere,
            and humanity reaches for worlds beyond our own. The cosmos becomes our canvas.
          </p>
        </div>
      </div>

      <SectionDivider from="#05060f" to="#0a0b1e" variant="curve" />
    </section>
  );
}
