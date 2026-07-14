import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParallaxLayer from '../components/ParallaxLayer';
import SectionDivider from '../components/SectionDivider';

gsap.registerPlugin(ScrollTrigger);

const BINARY_COLS = 28;

export default function DigitalEra() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from('.dig-text', {
        y: 60,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.dig-text', start: 'top 82%', toggleActions: 'play none none reverse' },
      });
      gsap.from('.holo-panel', {
        y: 80,
        opacity: 0,
        scale: 0.9,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.holo-grid', start: 'top 80%', toggleActions: 'play none none reverse' },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} data-parallax-scope className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-[#0a0b1e] via-[#080a1c] to-[#05060f]">
      {/* Neon grid floor */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(76,201,255,0.12), transparent 60%)' }} />

      {/* Binary rain */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: BINARY_COLS }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 font-mono text-xs text-neon-blue/40 leading-tight"
            style={{
              left: `${(i / BINARY_COLS) * 100}%`,
              animation: `binary-fall ${4 + Math.random() * 6}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <div key={j} style={{ opacity: 1 - j * 0.04 }}>{Math.random() > 0.5 ? '1' : '0'}</div>
            ))}
          </div>
        ))}
      </div>

      {/* Distant cyber city skyline (background) */}
      <ParallaxLayer speed={-0.2} className="absolute bottom-[20%] left-0 right-0 h-[50%] opacity-40">
        <svg viewBox="0 0 1920 500" preserveAspectRatio="none" className="w-full h-full">
          <g fill="#0d1028">
            {Array.from({ length: 30 }).map((_, i) => {
              const x = i * 66;
              const h = 80 + Math.sin(i * 1.7) * 60 + Math.random() * 80;
              return <rect key={i} x={x} y={500 - h} width="50" height={h} />;
            })}
          </g>
          <g fill="#4cc9ff" opacity="0.5">
            {Array.from({ length: 60 }).map((_, i) => (
              <rect key={i} x={10 + i * 32 + Math.floor(i / 3) * 10} y={120 + (i % 5) * 40} width="3" height="3" />
            ))}
          </g>
        </svg>
      </ParallaxLayer>

      {/* Midground cyber buildings with neon edges */}
      <ParallaxLayer speed={-0.45} className="absolute bottom-[10%] left-0 right-0 h-[55%]">
        <svg viewBox="0 0 1920 550" preserveAspectRatio="none" className="w-full h-full">
          <defs>
            <linearGradient id="neonEdge" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4cc9ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#b388ff" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <g fill="#0a0b1e" stroke="url(#neonEdge)" strokeWidth="1.5">
            <rect x="40" y="200" width="120" height="350" />
            <rect x="180" y="120" width="100" height="430" />
            <rect x="300" y="180" width="140" height="370" />
            <rect x="460" y="80" width="110" height="470" />
            <rect x="590" y="160" width="130" height="390" />
            <rect x="740" y="220" width="100" height="330" />
            <rect x="860" y="60" width="120" height="490" />
            <rect x="1000" y="140" width="110" height="410" />
            <rect x="1130" y="100" width="140" height="450" />
            <rect x="1290" y="180" width="100" height="370" />
            <rect x="1410" y="120" width="130" height="430" />
            <rect x="1560" y="200" width="110" height="350" />
            <rect x="1690" y="90" width="120" height="460" />
            <rect x="1830" y="170" width="90" height="380" />
          </g>
          {/* Neon window grids */}
          <g fill="#4cc9ff" opacity="0.6">
            {Array.from({ length: 80 }).map((_, i) => (
              <rect key={i} x={50 + (i % 14) * 130 + Math.floor(i / 14) * 20} y={100 + (i % 7) * 50} width="4" height="6" />
            ))}
          </g>
          <g fill="#b388ff" opacity="0.5">
            {Array.from({ length: 50 }).map((_, i) => (
              <rect key={i} x={70 + (i % 9) * 200 + Math.floor(i / 9) * 30} y={150 + (i % 5) * 60} width="4" height="6" />
            ))}
          </g>
        </svg>
      </ParallaxLayer>

      {/* Floating holographic panels */}
      <div className="holo-grid relative z-10 min-h-screen flex items-center px-6 md:px-20">
        <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-neon-blue uppercase mb-4 block">
              03 — Digital Era
            </span>
            <h2 className="dig-text font-display font-bold text-3xl md:text-5xl leading-tight mb-6 text-balance">
              The World <span className="gradient-text">Goes Online</span>
            </h2>
            <p className="dig-text text-ink-dim text-base md:text-lg leading-relaxed max-w-md mb-8">
              Silicon dreams became reality. Bits replaced atoms in the marketplace of ideas.
              The internet wove humanity into a single nervous system — and code became the
              language of progress.
            </p>

            <div className="holo-panel glass rounded-2xl p-5 max-w-sm gradient-border">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-neon-pink" />
                <span className="w-2.5 h-2.5 rounded-full bg-neon-blue" />
                <span className="w-2.5 h-2.5 rounded-full bg-neon-cyan" />
                <span className="ml-auto font-mono text-[10px] text-ink-faint">terminal.sh</span>
              </div>
              <pre className="font-mono text-xs text-neon-cyan leading-relaxed">
<span className="text-ink-faint">$</span> <span className="text-neon-blue">init</span> network
<span className="text-neon-purple">{'>'}</span> connecting... <span className="text-neon-cyan">OK</span>
<span className="text-neon-purple">{'>'}</span> protocol: TCP/IP
<span className="text-neon-purple">{'>'}</span> nodes: <span className="text-neon-blue">4.2B</span> online
<span className="text-neon-purple">{'>'}</span> <span className="text-neon-cyan">world.connected</span>
              </pre>
            </div>
          </div>

          {/* Holographic laptop illustration */}
          <div className="holo-panel relative flex justify-center">
            <div className="relative w-full max-w-md anim-float-y">
              {/* Holographic screen */}
              <div className="glass-strong rounded-2xl p-6 gradient-border relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] text-neon-blue tracking-widest">SYS.MONITOR</span>
                    <span className="font-mono text-[10px] text-ink-faint">v2.0.21</span>
                  </div>
                  {/* Animated bars */}
                  <div className="space-y-2.5">
                    {['CPU', 'MEM', 'NET', 'GPU'].map((label, i) => (
                      <div key={label} className="flex items-center gap-3">
                        <span className="font-mono text-[10px] text-ink-dim w-8">{label}</span>
                        <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-neon-blue to-neon-purple"
                            style={{ width: `${[78, 54, 92, 66][i]}%`, boxShadow: '0 0 8px rgba(76,201,255,0.6)' }}
                          />
                        </div>
                        <span className="font-mono text-[10px] text-neon-cyan w-8 text-right">{[78, 54, 92, 66][i]}%</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 pt-4 border-t border-white/5">
                    <div className="font-mono text-[10px] text-ink-faint mb-2">DATA STREAM</div>
                    <div className="flex gap-1">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 h-8 rounded-sm bg-neon-blue/20"
                          style={{
                            animation: `pulse-glow ${1 + (i % 4) * 0.3}s ease-in-out infinite`,
                            animationDelay: `${i * 0.1}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Laptop base */}
              <div className="mx-auto w-[110%] -ml-[5%] h-3 bg-gradient-to-b from-[#1a1d44] to-[#0a0b1e] rounded-b-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating code blocks */}
      <ParallaxLayer speed={-0.6} className="absolute top-[15%] left-[5%] opacity-50">
        <div className="glass rounded-lg p-3 font-mono text-[10px] text-neon-cyan anim-float-soft">
          <div>{'<html>'}</div>
          <div className="pl-3">{'<future>'}</div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer speed={-0.5} className="absolute top-[25%] right-[8%] opacity-50">
        <div className="glass rounded-lg p-3 font-mono text-[10px] text-neon-purple anim-float-soft" style={{ animationDelay: '1s' }}>
          <div>{'const ai = new'}</div>
          <div className="pl-3">{'Mind()'}</div>
        </div>
      </ParallaxLayer>

      <SectionDivider from="#05060f" to="#0a0b1e" variant="circuit" />
    </section>
  );
}
