import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from './hooks/useScroll';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import CursorGlow from './components/CursorGlow';
import Hero from './sections/Hero';
import TheBeginning from './sections/TheBeginning';
import IndustrialRevolution from './sections/IndustrialRevolution';
import DigitalEra from './sections/DigitalEra';
import AIRevolution from './sections/AIRevolution';
import SpaceFuture from './sections/SpaceFuture';
import Final from './sections/Final';

export default function App() {
  useLenis();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CursorGlow />
      <main className="relative w-full bg-space-900">
        <Hero />
        <TheBeginning />
        <IndustrialRevolution />
        <DigitalEra />
        <AIRevolution />
        <SpaceFuture />
        <Final />
      </main>
    </>
  );
}
