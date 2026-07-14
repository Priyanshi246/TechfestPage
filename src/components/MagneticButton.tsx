import { useRef, ReactNode } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'ghost';
  className?: string;
}

export default function MagneticButton({
  children,
  onClick,
  variant = 'primary',
  className = '',
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0, 0)';
  };

  const base =
    'magnetic-btn relative px-8 py-4 rounded-full font-display text-xs tracking-[0.2em] uppercase font-semibold overflow-hidden';
  const styles =
    variant === 'primary'
      ? 'text-space-900 bg-gradient-to-r from-neon-blue to-neon-purple'
      : 'text-ink glass-strong';

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`${base} ${styles} ${className}`}
    >
      {variant === 'primary' && (
        <span className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-neon-purple to-neon-blue" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}
