import { useEffect, useRef } from 'react';

interface StarfieldProps {
  density?: number;
  className?: string;
}

export default function Starfield({ density = 180, className = '' }: StarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);
    let stars: { x: number; y: number; z: number; r: number; tw: number }[] = [];

    const init = () => {
      stars = Array.from({ length: density }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random() * 0.8 + 0.2,
        r: Math.random() * 1.4 + 0.3,
        tw: Math.random() * Math.PI * 2,
      }));
    };
    init();

    let raf = 0;
    let t = 0;
    const render = () => {
      ctx.clearRect(0, 0, w, h);
      t += 0.012;
      for (const s of stars) {
        s.tw += 0.03;
        const alpha = 0.4 + Math.sin(s.tw) * 0.4;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * s.z, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 220, 255, ${alpha * s.z})`;
        ctx.fill();
        if (s.r > 1) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * s.z * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(76, 201, 255, ${alpha * 0.08})`;
          ctx.fill();
        }
        s.y += 0.04 * s.z;
        if (s.y > h) s.y = 0;
      }
      raf = requestAnimationFrame(render);
    };
    render();

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
      init();
    };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, [density]);

  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} />;
}
