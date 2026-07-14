import { useEffect, useRef, useState } from 'react';

export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let raf = 0;
    let hovering = false;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setHidden(false);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
      }
      const target = e.target as HTMLElement;
      const interactive = target.closest('button, a, [data-tilt], input, [role="button"]');
      hovering = !!interactive;
      if (ringRef.current) {
        ringRef.current.style.width = hovering ? '56px' : '32px';
        ringRef.current.style.height = hovering ? '56px' : '32px';
        ringRef.current.style.borderColor = hovering
          ? 'rgba(179, 136, 255, 0.9)'
          : 'rgba(76, 201, 255, 0.7)';
      }
    };

    const onLeave = () => setHidden(true);

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        const w = ringRef.current.offsetWidth;
        ringRef.current.style.transform = `translate3d(${ringX - w / 2}px, ${ringY - w / 2}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return null;

  return (
    <div className={`fixed inset-0 z-[9999] pointer-events-none transition-opacity duration-300 ${hidden ? 'opacity-0' : 'opacity-100'}`}>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-neon-blue"
        style={{ boxShadow: '0 0 12px rgba(76,201,255,0.9)' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full border"
        style={{
          width: 32,
          height: 32,
          borderColor: 'rgba(76, 201, 255, 0.7)',
          transition: 'width 0.25s, height 0.25s, border-color 0.25s',
          boxShadow: '0 0 20px rgba(76,201,255,0.3)',
        }}
      />
    </div>
  );
}
