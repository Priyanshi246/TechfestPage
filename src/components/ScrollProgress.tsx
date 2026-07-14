import { useScrollProgress } from '../hooks/useScroll';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-[9000] h-[3px] bg-transparent pointer-events-none">
      <div
        className="h-full origin-left bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan"
        style={{
          transform: `scaleX(${progress})`,
          boxShadow: '0 0 12px rgba(76,201,255,0.7)',
        }}
      />
    </div>
  );
}
