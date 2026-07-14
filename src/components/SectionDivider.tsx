interface DividerProps {
  from?: string;
  to?: string;
  variant?: 'wave' | 'circuit' | 'spike' | 'curve';
}

export default function SectionDivider({
  from = '#05060f',
  to = '#0a0b1e',
  variant = 'wave',
}: DividerProps) {
  const paths: Record<string, string> = {
    wave: 'M0,64 C320,120 640,0 960,64 C1280,128 1600,32 1920,80 L1920,160 L0,160 Z',
    curve: 'M0,80 Q480,160 960,80 T1920,80 L1920,160 L0,160 Z',
    spike: 'M0,120 L160,40 L320,120 L480,30 L640,120 L800,50 L960,120 L1120,40 L1280,120 L1440,30 L1600,120 L1760,50 L1920,120 L1920,160 L0,160 Z',
    circuit: 'M0,80 L240,80 L260,40 L500,40 L520,100 L760,100 L780,60 L1020,60 L1040,110 L1280,110 L1300,50 L1540,50 L1560,90 L1920,90 L1920,160 L0,160 Z',
  };

  return (
    <div className="relative w-full overflow-hidden leading-[0] -mb-1" style={{ background: from }}>
      <svg
        viewBox="0 0 1920 160"
        preserveAspectRatio="none"
        className="w-full h-[60px] md:h-[100px]"
      >
        <path d={paths[variant]} fill={to} />
        <path
          d={paths[variant]}
          fill="none"
          stroke="rgba(76,201,255,0.4)"
          strokeWidth="1.5"
          style={{ filter: 'drop-shadow(0 0 6px rgba(76,201,255,0.5))' }}
        />
      </svg>
    </div>
  );
}
