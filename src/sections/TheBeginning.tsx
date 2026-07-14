import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParallaxLayer from '../components/ParallaxLayer';
import SectionDivider from '../components/SectionDivider';

gsap.registerPlugin(ScrollTrigger);

export default function TheBeginning() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from('.begin-text', {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.begin-text', start: 'top 80%', toggleActions: 'play none none reverse' },
      });
      gsap.from('.begin-eyebrow', {
        x: -40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.begin-eyebrow', start: 'top 85%', toggleActions: 'play none none reverse' },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} data-parallax-scope className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-space-900 via-[#0d0f24] to-[#13152e]">
      {/* Sun / ancient glow */}
      <ParallaxLayer speed={-0.15} className="absolute top-[12%] left-1/2 -translate-x-1/2">
        <div className="w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,183,77,0.25), rgba(255,140,50,0.08) 60%, transparent 70%)' }} />
      </ParallaxLayer>

      {/* Background mountains - slowest */}
      <ParallaxLayer speed={-0.2} className="absolute bottom-0 left-0 right-0 h-[60%]">
        <svg viewBox="0 0 1920 600" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,600 L0,380 L180,260 L360,340 L540,200 L760,300 L960,180 L1180,320 L1380,220 L1580,340 L1760,260 L1920,360 L1920,600 Z" fill="#0a0b1e" opacity="0.9" />
        </svg>
      </ParallaxLayer>

      {/* Midground mountains */}
      <ParallaxLayer speed={-0.4} className="absolute bottom-0 left-0 right-0 h-[45%]">
        <svg viewBox="0 0 1920 500" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,500 L0,360 L140,240 L280,320 L440,200 L600,300 L780,180 L960,280 L1140,200 L1320,320 L1500,220 L1680,300 L1840,240 L1920,320 L1920,500 Z" fill="#11132e" />
        </svg>
      </ParallaxLayer>

      {/* Midground gears */}
      <ParallaxLayer speed={-0.5} className="absolute bottom-[18%] left-[8%]">
        <div className="relative w-[120px] h-[120px] md:w-[180px] md:h-[180px] opacity-70">
          <svg viewBox="0 0 100 100" className="w-full h-full anim-spin-slow" style={{ animationDuration: '40s' }}>
            <g fill="#2a2d52">
              <circle cx="50" cy="50" r="28" />
              {Array.from({ length: 12 }).map((_, i) => {
                const a = (i / 12) * Math.PI * 2;
                const x = 50 + Math.cos(a) * 32;
                const y = 50 + Math.sin(a) * 32;
                return <rect key={i} x={x - 4} y={y - 4} width="8" height="8" rx="1" transform={`rotate(${(a * 180) / Math.PI} ${x} ${y})`} />;
              })}
              <circle cx="50" cy="50" r="14" fill="#13152e" />
              <circle cx="50" cy="50" r="5" fill="#2a2d52" />
            </g>
          </svg>
        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={-0.55} className="absolute bottom-[24%] right-[12%]">
        <div className="relative w-[90px] h-[90px] md:w-[140px] md:h-[140px] opacity-60">
          <svg viewBox="0 0 100 100" className="w-full h-full anim-spin-rev" style={{ animationDuration: '32s' }}>
            <g fill="#1f2244">
              <circle cx="50" cy="50" r="26" />
              {Array.from({ length: 10 }).map((_, i) => {
                const a = (i / 10) * Math.PI * 2;
                const x = 50 + Math.cos(a) * 30;
                const y = 50 + Math.sin(a) * 30;
                return <rect key={i} x={x - 3.5} y={y - 3.5} width="7" height="7" rx="1" transform={`rotate(${(a * 180) / Math.PI} ${x} ${y})`} />;
              })}
              <circle cx="50" cy="50" r="12" fill="#13152e" />
            </g>
          </svg>
        </div>
      </ParallaxLayer>

      {/* Foreground - inventor silhouette + ground */}
      <ParallaxLayer speed={-0.7} className="absolute bottom-0 left-0 right-0 h-[30%]">
        <svg viewBox="0 0 1920 300" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
          <path d="M0,300 L0,200 L1920,180 L1920,300 Z" fill="#05060f" />
        </svg>
        {/* Inventor silhouette */}
        <div className="absolute bottom-[20%] right-[18%] opacity-90">
          <svg width="120" height="200" viewBox="0 0 120 200" className="md:w-[160px] md:h-[260px]">
            {/* Body */}
            <path d="M60,200 L60,120 Q60,90 45,75 L40,60 Q40,45 55,42 L65,42 Q80,45 80,60 L75,75 Q60,90 60,120 Z" fill="#05060f" stroke="#1a1d44" strokeWidth="1" />
            {/* Head */}
            <circle cx="60" cy="30" r="16" fill="#05060f" stroke="#1a1d44" strokeWidth="1" />
            {/* Arm raised (holding tool) */}
            <path d="M62,80 L85,55 L95,48" stroke="#05060f" strokeWidth="6" fill="none" strokeLinecap="round" />
            <line x1="95" y1="48" x2="105" y2="40" stroke="#2a2d52" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </ParallaxLayer>

      {/* Floating particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-neon-blue/40"
          style={{
            left: `${10 + i * 11}%`,
            bottom: `${15 + (i % 4) * 18}%`,
            animation: `float-y ${4 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}

      {/* Text content */}
      <div className="relative z-10 min-h-screen flex items-center px-6 md:px-20">
        <div className="max-w-xl">
          <span className="begin-eyebrow font-mono text-xs tracking-[0.3em] text-neon-blue uppercase mb-4 block">
            01 — The Beginning
          </span>
          <h2 className="begin-text font-display font-bold text-3xl md:text-5xl leading-tight mb-6 text-balance">
            From Stone <span className="gradient-text">to Wheel</span>
          </h2>
          <p className="begin-text text-ink-dim text-base md:text-lg leading-relaxed max-w-md">
            In the cradle of civilization, the first sparks of ingenuity flew. The wheel, the lever, the gear —
            humanity learned to bend nature's forces, one invention at a time.
          </p>
        </div>
      </div>

      <SectionDivider from="#13152e" to="#1a1410" variant="curve" />
    </section>
  );
}
