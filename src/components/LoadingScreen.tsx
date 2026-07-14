import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 8 + 2;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => setDone(true), 600);
      }
      setCount(Math.floor(current));
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-space-900"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-space-900" />

          <div className="relative flex flex-col items-center gap-8">
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 rounded-full border-2 border-neon-blue/20" />
              <div className="absolute inset-0 rounded-full border-t-2 border-neon-blue anim-spin-slow" style={{ animationDuration: '1.2s' }} />
              <div className="absolute inset-2 rounded-full border-b-2 border-neon-purple/60 anim-spin-rev" style={{ animationDuration: '1.6s' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-2xl gradient-text font-bold">J</span>
              </div>
            </div>

            <div className="text-center">
              <h1 className="font-display text-sm tracking-[0.3em] text-ink-dim uppercase">
                Journey Through
              </h1>
              <h2 className="font-display text-2xl tracking-[0.2em] gradient-text font-bold mt-1">
                INNOVATION
              </h2>
            </div>

            <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan"
                style={{ width: `${count}%` }}
              />
            </div>
            <span className="font-mono text-xs text-ink-faint tracking-widest">{count}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
