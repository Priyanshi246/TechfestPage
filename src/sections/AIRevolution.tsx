import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Brain, Cpu, Sparkles, Atom } from 'lucide-react';
import TiltCard from '../components/TiltCard';
import SectionDivider from '../components/SectionDivider';

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  { icon: Brain, title: 'Machine Learning', desc: 'Algorithms that learn patterns from data, improving decisions without explicit programming.', color: '#4cc9ff' },
  { icon: Cpu, title: 'Robotics', desc: 'Machines that sense, think, and act — extending human capability into every environment.', color: '#b388ff' },
  { icon: Sparkles, title: 'Generative AI', desc: 'Models that create text, images, and code — augmenting human creativity at scale.', color: '#5eead4' },
  { icon: Atom, title: 'Quantum Computing', desc: 'Computation beyond classical limits, solving problems once thought impossible.', color: '#ff79c6' },
];

const NODES = [
  { x: 50, y: 20 }, { x: 25, y: 45 }, { x: 75, y: 45 },
  { x: 15, y: 75 }, { x: 38, y: 80 }, { x: 62, y: 80 }, { x: 85, y: 75 },
  { x: 50, y: 55 },
];
const EDGES = [
  [0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6], [1, 7], [2, 7], [4, 7], [5, 7], [3, 7], [6, 7],
];

export default function AIRevolution() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from('.ai-title', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.ai-title', start: 'top 85%', toggleActions: 'play none none reverse' },
      });
      gsap.from('.ai-card', {
        y: 60,
        opacity: 0,
        scale: 0.92,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.ai-cards', start: 'top 80%', toggleActions: 'play none none reverse' },
      });
      gsap.from('.ai-robot', {
        scale: 0.7,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.ai-robot', start: 'top 85%', toggleActions: 'play none none reverse' },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} data-parallax-scope className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-[#0a0b1e] via-[#0c0e22] to-[#05060f]">
      {/* Ambient glow */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 45%, rgba(179,136,255,0.12), transparent 55%)' }} />
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Neural network background */}
      <svg className="absolute inset-0 w-full h-full opacity-40" preserveAspectRatio="none" viewBox="0 0 100 100">
        {EDGES.map(([a, b], i) => (
          <line
            key={i}
            x1={NODES[a].x}
            y1={NODES[a].y}
            x2={NODES[b].x}
            y2={NODES[b].y}
            stroke="#4cc9ff"
            strokeWidth="0.2"
            strokeDasharray="2"
            style={{ animation: `data-flow ${3 + i * 0.2}s linear infinite`, animationDelay: `${i * 0.15}s` }}
          />
        ))}
        {NODES.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r="0.8" fill="#b388ff" opacity="0.7">
            <animate attributeName="opacity" values="0.3;1;0.3" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>

      {/* Floating data particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-neon-purple/60"
          style={{
            left: `${8 + i * 8}%`,
            top: `${20 + (i % 5) * 15}%`,
            animation: `float-y ${3 + i * 0.4}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
            boxShadow: '0 0 8px rgba(179,136,255,0.6)',
          }}
        />
      ))}

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20">
        {/* Robot in center */}
        <div className="ai-robot relative mb-12">
          <div className="absolute inset-0 -m-12 rounded-full" style={{ background: 'radial-gradient(circle, rgba(179,136,255,0.2), transparent 70%)' }} />
          <div className="relative w-[140px] h-[180px] md:w-[180px] md:h-[230px] anim-float-y">
            <svg viewBox="0 0 140 180" className="w-full h-full">
              {/* Head */}
              <rect x="45" y="10" width="50" height="44" rx="10" fill="#0d1028" stroke="#b388ff" strokeWidth="1.5" />
              {/* Eyes */}
              <circle cx="60" cy="32" r="6" fill="#4cc9ff">
                <animate attributeName="r" values="6;3;6" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="80" cy="32" r="6" fill="#4cc9ff">
                <animate attributeName="r" values="6;3;6" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="60" cy="32" r="2" fill="#fff" />
              <circle cx="80" cy="32" r="2" fill="#fff" />
              {/* Antenna */}
              <line x1="70" y1="10" x2="70" y2="2" stroke="#b388ff" strokeWidth="2" />
              <circle cx="70" cy="2" r="2" fill="#5eead4">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
              </circle>
              {/* Neck */}
              <rect x="62" y="54" width="16" height="8" fill="#1a1d44" />
              {/* Body */}
              <rect x="30" y="62" width="80" height="70" rx="8" fill="#0d1028" stroke="#b388ff" strokeWidth="1.5" />
              {/* Chest core */}
              <circle cx="70" cy="95" r="12" fill="#1a1d44" stroke="#4cc9ff" strokeWidth="1" />
              <circle cx="70" cy="95" r="6" fill="#4cc9ff" opacity="0.8">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
              </circle>
              {/* Circuit lines on body */}
              <line x1="40" y1="75" x2="55" y2="75" stroke="#4cc9ff" strokeWidth="0.8" opacity="0.5" />
              <line x1="85" y1="75" x2="100" y2="75" stroke="#4cc9ff" strokeWidth="0.8" opacity="0.5" />
              <line x1="40" y1="120" x2="55" y2="120" stroke="#b388ff" strokeWidth="0.8" opacity="0.5" />
              <line x1="85" y1="120" x2="100" y2="120" stroke="#b388ff" strokeWidth="0.8" opacity="0.5" />
              {/* Arms */}
              <rect x="18" y="66" width="12" height="50" rx="6" fill="#0d1028" stroke="#b388ff" strokeWidth="1" />
              <rect x="110" y="66" width="12" height="50" rx="6" fill="#0d1028" stroke="#b388ff" strokeWidth="1" />
              {/* Legs */}
              <rect x="42" y="132" width="22" height="40" rx="6" fill="#0d1028" stroke="#b388ff" strokeWidth="1" />
              <rect x="76" y="132" width="22" height="40" rx="6" fill="#0d1028" stroke="#b388ff" strokeWidth="1" />
              {/* Feet */}
              <rect x="38" y="168" width="30" height="8" rx="4" fill="#1a1d44" />
              <rect x="72" y="168" width="30" height="8" rx="4" fill="#1a1d44" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-12 max-w-2xl">
          <span className="font-mono text-xs tracking-[0.3em] text-neon-purple uppercase mb-4 block">
            04 — AI Revolution
          </span>
          <h2 className="ai-title font-display font-bold text-3xl md:text-5xl leading-tight text-balance">
            Machines That <span className="gradient-text">Think</span>
          </h2>
          <p className="ai-title text-ink-dim text-base md:text-lg leading-relaxed mt-6 max-w-xl mx-auto">
            Intelligence emerged from silicon. Neural networks fire in silicon brains, learning the patterns
            of the universe and reshaping what it means to create, decide, and understand.
          </p>
        </div>

        {/* Cards */}
        <div className="ai-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl w-full">
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <TiltCard key={card.title} className="ai-card glass rounded-2xl p-6 gradient-border group" maxTilt={10}>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ background: `${card.color}15`, border: `1px solid ${card.color}40` }}
                >
                  <Icon size={22} style={{ color: card.color }} />
                </div>
                <h3 className="font-display text-sm font-bold tracking-wide mb-2" style={{ color: card.color }}>
                  {card.title}
                </h3>
                <p className="text-ink-dim text-sm leading-relaxed">{card.desc}</p>
                <div className="mt-4 h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-0 group-hover:w-full transition-all duration-700 rounded-full" style={{ background: card.color }} />
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>

      <SectionDivider from="#05060f" to="#0a0b1e" variant="wave" />
    </section>
  );
}
