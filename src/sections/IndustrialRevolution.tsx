import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParallaxLayer from '../components/ParallaxLayer';
import SectionDivider from '../components/SectionDivider';

gsap.registerPlugin(ScrollTrigger);

export default function IndustrialRevolution() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from('.ind-text', {
        y: 60,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.ind-text', start: 'top 82%', toggleActions: 'play none none reverse' },
      });
      // Train crossing the screen
      gsap.fromTo('.train-track',
        { xPercent: -120 },
        {
          xPercent: 120,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top 60%', end: 'bottom 40%', scrub: 1.2 },
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} data-parallax-scope className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-[#1a1410] via-[#1e1612] to-[#0d0f24]">
      {/* Warm industrial glow */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 70%, rgba(255,120,40,0.12), transparent 60%)' }} />

      {/* Distant factories (background - slowest) */}
      <ParallaxLayer speed={-0.2} className="absolute bottom-[30%] left-0 right-0 h-[35%] opacity-50">
        <svg viewBox="0 0 1920 300" preserveAspectRatio="none" className="w-full h-full">
          <g fill="#1a1410">
            <rect x="100" y="120" width="80" height="180" />
            <rect x="200" y="160" width="60" height="140" />
            <rect x="300" y="100" width="100" height="200" />
            <rect x="440" y="140" width="70" height="160" />
            <rect x="560" y="110" width="90" height="190" />
            <rect x="700" y="150" width="60" height="150" />
            <rect x="800" y="90" width="110" height="210" />
            <rect x="960" y="130" width="80" height="170" />
            <rect x="1080" y="100" width="100" height="200" />
            <rect x="1220" y="140" width="70" height="160" />
            <rect x="1340" y="110" width="90" height="190" />
            <rect x="1480" y="150" width="60" height="150" />
            <rect x="1580" y="100" width="100" height="200" />
            <rect x="1720" y="130" width="80" height="170" />
          </g>
          {/* Chimneys */}
          <g fill="#241814">
            <rect x="120" y="60" width="14" height="60" />
            <rect x="320" y="40" width="16" height="60" />
            <rect x="600" y="50" width="14" height="60" />
            <rect x="830" y="30" width="18" height="60" />
            <rect x="1100" y="40" width="16" height="60" />
            <rect x="1370" y="50" width="14" height="60" />
            <rect x="1610" y="40" width="16" height="60" />
          </g>
        </svg>
      </ParallaxLayer>

      {/* Smoke from chimneys */}
      <div className="absolute bottom-[55%] left-0 right-0 h-[30%] pointer-events-none">
        {[
          { left: '6.5%', delay: 0 }, { left: '17%', delay: 1.2 }, { left: '31.5%', delay: 0.6 },
          { left: '43.5%', delay: 2 }, { left: '57.5%', delay: 0.3 }, { left: '71.5%', delay: 1.5 },
          { left: '84%', delay: 0.9 },
        ].map((s, i) => (
          <div key={i} className="absolute bottom-0" style={{ left: s.left }}>
            <div
              className="w-12 h-12 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(180,180,180,0.35), transparent 70%)',
                animation: `smoke-rise ${5 + (i % 3)}s ease-out infinite`,
                animationDelay: `${s.delay}s`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Midground - closer buildings with windows */}
      <ParallaxLayer speed={-0.45} className="absolute bottom-[18%] left-0 right-0 h-[40%]">
        <svg viewBox="0 0 1920 400" preserveAspectRatio="none" className="w-full h-full">
          <g fill="#0d0a08">
            <rect x="0" y="180" width="180" height="220" />
            <rect x="180" y="140" width="140" height="260" />
            <rect x="320" y="200" width="160" height="200" />
            <rect x="480" y="120" width="200" height="280" />
            <rect x="680" y="160" width="180" height="240" />
            <rect x="860" y="100" width="220" height="300" />
            <rect x="1080" y="170" width="160" height="230" />
            <rect x="1240" y="130" width="200" height="270" />
            <rect x="1440" y="190" width="170" height="210" />
            <rect x="1610" y="150" width="180" height="250" />
            <rect x="1790" y="200" width="130" height="200" />
          </g>
          {/* Warm windows */}
          <g fill="#ff9d4a" opacity="0.6">
            {Array.from({ length: 40 }).map((_, i) => (
              <rect key={i} x={20 + (i % 10) * 190 + Math.floor(i / 10) * 30} y={160 + (i % 4) * 50} width="6" height="8" />
            ))}
          </g>
        </svg>
      </ParallaxLayer>

      {/* Rotating gears (midground) */}
      <ParallaxLayer speed={-0.5} className="absolute top-[20%] right-[15%]">
        <div className="w-[100px] h-[100px] md:w-[160px] md:h-[160px] opacity-40">
          <svg viewBox="0 0 100 100" className="w-full h-full anim-spin-slow" style={{ animationDuration: '30s' }}>
            <g fill="#3a2818">
              <circle cx="50" cy="50" r="30" />
              {Array.from({ length: 14 }).map((_, i) => {
                const a = (i / 14) * Math.PI * 2;
                const x = 50 + Math.cos(a) * 34;
                const y = 50 + Math.sin(a) * 34;
                return <rect key={i} x={x - 4} y={y - 4} width="8" height="8" rx="1" transform={`rotate(${(a * 180) / Math.PI} ${x} ${y})`} />;
              })}
              <circle cx="50" cy="50" r="14" fill="#1e1612" />
            </g>
          </svg>
        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={-0.55} className="absolute top-[30%] left-[10%]">
        <div className="w-[70px] h-[70px] md:w-[110px] md:h-[110px] opacity-30">
          <svg viewBox="0 0 100 100" className="w-full h-full anim-spin-rev" style={{ animationDuration: '24s' }}>
            <g fill="#3a2818">
              <circle cx="50" cy="50" r="28" />
              {Array.from({ length: 12 }).map((_, i) => {
                const a = (i / 12) * Math.PI * 2;
                const x = 50 + Math.cos(a) * 32;
                const y = 50 + Math.sin(a) * 32;
                return <rect key={i} x={x - 3.5} y={y - 3.5} width="7" height="7" rx="1" transform={`rotate(${(a * 180) / Math.PI} ${x} ${y})`} />;
              })}
              <circle cx="50" cy="50" r="12" fill="#1e1612" />
            </g>
          </svg>
        </div>
      </ParallaxLayer>

      {/* Train crossing the screen (foreground) */}
      <div className="absolute bottom-[12%] left-0 right-0 h-[80px] overflow-hidden pointer-events-none">
        <div className="train-track flex items-end gap-1 whitespace-nowrap" style={{ width: 'max-content' }}>
          {/* Locomotive */}
          <div className="relative">
            <svg width="160" height="70" viewBox="0 0 160 70">
              <rect x="10" y="20" width="100" height="35" rx="4" fill="#2a1d14" stroke="#ff9d4a" strokeWidth="1" />
              <rect x="20" y="28" width="20" height="14" fill="#ff9d4a" opacity="0.7" />
              <rect x="50" y="28" width="20" height="14" fill="#ff9d4a" opacity="0.7" />
              <rect x="80" y="28" width="20" height="14" fill="#ff9d4a" opacity="0.7" />
              {/* Cabin */}
              <rect x="110" y="10" width="40" height="45" rx="3" fill="#3a2818" stroke="#ff9d4a" strokeWidth="1" />
              <rect x="118" y="16" width="24" height="16" fill="#ffb84a" opacity="0.5" />
              {/* Chimney */}
              <rect x="30" y="6" width="12" height="16" fill="#1a1410" />
              {/* Wheels */}
              <circle cx="25" cy="58" r="8" fill="#1a1410" stroke="#ff9d4a" strokeWidth="1.5" className="anim-spin-slow" style={{ animationDuration: '2s', transformOrigin: '25px 58px' }} />
              <circle cx="60" cy="58" r="8" fill="#1a1410" stroke="#ff9d4a" strokeWidth="1.5" className="anim-spin-slow" style={{ animationDuration: '2s', transformOrigin: '60px 58px' }} />
              <circle cx="95" cy="58" r="8" fill="#1a1410" stroke="#ff9d4a" strokeWidth="1.5" className="anim-spin-slow" style={{ animationDuration: '2s', transformOrigin: '95px 58px' }} />
              <circle cx="130" cy="58" r="8" fill="#1a1410" stroke="#ff9d4a" strokeWidth="1.5" className="anim-spin-slow" style={{ animationDuration: '2s', transformOrigin: '130px 58px' }} />
            </svg>
          </div>
          {/* Carriages */}
          {[0, 1, 2].map((i) => (
            <svg key={i} width="120" height="60" viewBox="0 0 120 60">
              <rect x="5" y="14" width="110" height="36" rx="3" fill="#2a1d14" stroke="#ff9d4a" strokeWidth="1" opacity="0.85" />
              <rect x="14" y="22" width="14" height="14" fill="#ff9d4a" opacity="0.5" />
              <rect x="36" y="22" width="14" height="14" fill="#ff9d4a" opacity="0.5" />
              <rect x="58" y="22" width="14" height="14" fill="#ff9d4a" opacity="0.5" />
              <rect x="80" y="22" width="14" height="14" fill="#ff9d4a" opacity="0.5" />
              <circle cx="20" cy="52" r="7" fill="#1a1410" stroke="#ff9d4a" strokeWidth="1" className="anim-spin-slow" style={{ animationDuration: '2s', transformOrigin: '20px 52px' }} />
              <circle cx="100" cy="52" r="7" fill="#1a1410" stroke="#ff9d4a" strokeWidth="1" className="anim-spin-slow" style={{ animationDuration: '2s', transformOrigin: '100px 52px' }} />
            </svg>
          ))}
        </div>
      </div>

      {/* Ground / foreground */}
      <ParallaxLayer speed={-0.8} className="absolute bottom-0 left-0 right-0 h-[12%]">
        <div className="w-full h-full bg-[#05060f]" />
      </ParallaxLayer>

      {/* Text content */}
      <div className="relative z-10 min-h-screen flex items-center justify-end px-6 md:px-20">
        <div className="max-w-xl text-right">
          <span className="font-mono text-xs tracking-[0.3em] text-[#ff9d4a] uppercase mb-4 block">
            02 — Industrial Revolution
          </span>
          <h2 className="ind-text font-display font-bold text-3xl md:text-5xl leading-tight mb-6 text-balance">
            The Age of <span className="text-[#ff9d4a]" style={{ textShadow: '0 0 30px rgba(255,157,74,0.4)' }}>Steam</span>
          </h2>
          <p className="ind-text text-ink-dim text-base md:text-lg leading-relaxed">
            Iron and fire reshaped the world. Steam engines roared to life, factories belched smoke into
            the sky, and railways stitched continents together. Humanity had harnessed power itself.
          </p>
        </div>
      </div>

      <SectionDivider from="#0d0f24" to="#0a0b1e" variant="spike" />
    </section>
  );
}
