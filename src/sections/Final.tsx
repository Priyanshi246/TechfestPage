import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Rocket, Calendar } from 'lucide-react';
import ParallaxLayer from '../components/ParallaxLayer';
import MagneticButton from '../components/MagneticButton';
import Starfield from '../components/Starfield';

gsap.registerPlugin(ScrollTrigger);

export default function Final() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from('.final-title', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.final-title', start: 'top 80%', toggleActions: 'play none none reverse' },
      });
      gsap.from('.final-sub', {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.final-sub', start: 'top 85%', toggleActions: 'play none none reverse' },
      });
      gsap.from('.final-cta', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.final-cta', start: 'top 88%', toggleActions: 'play none none reverse' },
      });
      // Crystal rotation + glow pulse
      gsap.to('.crystal', {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none',
        transformOrigin: 'center center',
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} data-parallax-scope className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-[#0a0b1e] via-[#0c0e22] to-[#05060f]">
      {/* Starfield */}
      <ParallaxLayer speed={-0.1} className="absolute inset-0 opacity-60">
        <Starfield density={120} />
      </ParallaxLayer>

      {/* Ambient glow */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(76,201,255,0.15), transparent 55%)' }} />

      {/* Futuristic city skyline (background) */}
      <ParallaxLayer speed={-0.2} className="absolute bottom-0 left-0 right-0 h-[50%] opacity-50">
        <svg viewBox="0 0 1920 500" preserveAspectRatio="none" className="w-full h-full">
          <g fill="#0d1028" stroke="#4cc9ff" strokeWidth="0.5">
            <path d="M0,500 L0,350 L60,350 L60,280 L120,280 L120,320 L180,320 L180,240 L260,240 L260,300 L340,300 L340,200 L420,200 L420,260 L500,260 L500,180 L580,180 L580,240 L660,240 L660,220 L740,220 L740,160 L820,160 L820,200 L900,200 L900,140 L980,140 L980,180 L1060,180 L1060,220 L1140,220 L1140,160 L1220,160 L1220,200 L1300,200 L1300,260 L1380,260 L1380,180 L1460,180 L1460,240 L1540,240 L1540,300 L1620,300 L1620,220 L1700,220 L1700,280 L1780,280 L1780,320 L1860,320 L1860,360 L1920,360 L1920,500 Z" />
          </g>
          {/* Neon building lights */}
          <g fill="#4cc9ff" opacity="0.7">
            {Array.from({ length: 50 }).map((_, i) => (
              <rect key={i} x={20 + i * 38} y={200 + (i % 6) * 30} width="3" height="5" />
            ))}
          </g>
          <g fill="#b388ff" opacity="0.5">
            {Array.from({ length: 30 }).map((_, i) => (
              <rect key={i} x={40 + i * 60} y={220 + (i % 4) * 40} width="3" height="5" />
            ))}
          </g>
        </svg>
      </ParallaxLayer>

      {/* Midground futuristic towers */}
      <ParallaxLayer speed={-0.4} className="absolute bottom-0 left-0 right-0 h-[35%]">
        <svg viewBox="0 0 1920 350" preserveAspectRatio="none" className="w-full h-full">
          <defs>
            <linearGradient id="towerGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#11132e" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#05060f" stopOpacity="1" />
            </linearGradient>
          </defs>
          <g fill="url(#towerGrad)" stroke="#b388ff" strokeWidth="0.8" opacity="0.8">
            <path d="M100,350 L100,180 L130,160 L130,140 L160,120 L160,350 Z" />
            <path d="M280,350 L280,200 L320,180 L320,150 L360,130 L360,350 Z" />
            <path d="M480,350 L480,160 L510,140 L540,120 L540,350 Z" />
            <path d="M680,350 L680,190 L720,170 L760,150 L760,350 Z" />
            <path d="M900,350 L900,130 L940,110 L980,90 L980,350 Z" />
            <path d="M1120,350 L1120,170 L1160,150 L1200,130 L1200,350 Z" />
            <path d="M1340,350 L1340,200 L1380,180 L1420,160 L1420,350 Z" />
            <path d="M1560,350 L1560,180 L1600,160 L1640,140 L1640,350 Z" />
            <path d="M1780,350 L1780,220 L1820,200 L1820,350 Z" />
          </g>
          {/* Glowing tips */}
          <g fill="#5eead4">
            <circle cx="160" cy="120" r="2" opacity="0.8"><animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" /></circle>
            <circle cx="360" cy="130" r="2" opacity="0.8"><animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite" /></circle>
            <circle cx="540" cy="120" r="2" opacity="0.8"><animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" /></circle>
            <circle cx="980" cy="90" r="3" opacity="0.9"><animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" /></circle>
            <circle cx="1200" cy="130" r="2" opacity="0.8"><animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" repeatCount="indefinite" /></circle>
            <circle cx="1640" cy="140" r="2" opacity="0.8"><animate attributeName="opacity" values="0.3;1;0.3" dur="2.8s" repeatCount="indefinite" /></circle>
          </g>
        </svg>
      </ParallaxLayer>

      {/* Floating particles */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-neon-cyan/50"
          style={{
            left: `${10 + i * 9}%`,
            bottom: `${20 + (i % 4) * 20}%`,
            animation: `float-y ${4 + i * 0.4}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
            boxShadow: '0 0 8px rgba(94,234,212,0.6)',
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        {/* Glowing crystal */}
        <div className="relative mb-10">
          <div className="absolute inset-0 -m-16 rounded-full" style={{ background: 'radial-gradient(circle, rgba(94,234,212,0.2), transparent 70%)', animation: 'pulse-glow 4s ease-in-out infinite' }} />
          <div className="crystal relative w-[80px] h-[100px] md:w-[100px] md:h-[130px]">
            <svg viewBox="0 0 80 100" className="w-full h-full" style={{ filter: 'drop-shadow(0 0 20px rgba(94,234,212,0.6))' }}>
              <defs>
                <linearGradient id="crystalGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5eead4" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#4cc9ff" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#b388ff" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="crystalFacet" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#5eead4" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              {/* Crystal shape */}
              <path d="M40,0 L70,30 L60,100 L40,90 L20,100 L10,30 Z" fill="url(#crystalGrad)" stroke="#5eead4" strokeWidth="1" />
              {/* Facets */}
              <path d="M40,0 L40,90 L20,100 L10,30 Z" fill="url(#crystalFacet)" opacity="0.5" />
              <path d="M40,0 L40,90 L60,100 L70,30 Z" fill="url(#crystalFacet)" opacity="0.3" />
              <line x1="40" y1="0" x2="40" y2="90" stroke="#fff" strokeWidth="0.5" opacity="0.5" />
              <line x1="10" y1="30" x2="70" y2="30" stroke="#fff" strokeWidth="0.5" opacity="0.3" />
            </svg>
          </div>
        </div>

        <span className="font-mono text-xs tracking-[0.3em] text-neon-cyan uppercase mb-4 block">
          06 — The Future
        </span>
        <h2 className="final-title font-display font-bold text-4xl md:text-6xl leading-tight mb-6 text-balance">
          The Future Starts <br className="hidden sm:block" />
          <span className="gradient-text neon-purple-text">With You</span>
        </h2>
        <p className="final-sub text-ink-dim text-base md:text-lg leading-relaxed max-w-xl mb-10 text-balance">
          From the first spark of fire to the age of artificial minds, innovation has always been a human story.
          The next chapter is yours to write.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <MagneticButton variant="primary" className="final-cta">
            <Rocket size={16} /> Explore
          </MagneticButton>
          <MagneticButton variant="ghost" className="final-cta">
            <Calendar size={16} /> Join Techfest
          </MagneticButton>
        </div>

        {/* Footer */}
        <div className="mt-20 flex flex-col items-center gap-2 opacity-50">
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-neon-blue to-transparent" />
          <p className="font-mono text-[10px] tracking-[0.3em] text-ink-faint uppercase mt-2">
            Journey Through Innovation — 2026
          </p>
        </div>
      </div>
    </section>
  );
}
