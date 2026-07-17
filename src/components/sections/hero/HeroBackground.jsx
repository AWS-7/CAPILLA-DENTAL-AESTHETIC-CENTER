import { useState, useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { cn } from '../../../utils/helpers';

const HERO_BG_IMAGES = [
  '/gallery/clinic-lounge.webp',
  '/gallery/clinic-reception-desk.webp',
  '/gallery/clinic-treatment-suite.webp',
  '/gallery/clinic-consultation-room.webp',
  '/gallery/clinic-therapy-room.webp',
  '/gallery/clinic-laser-room.webp',
];

/**
 * Rotating clinic-photo background for the Hero section.
 * - Crossfades to the next image on a fixed interval (default 1.5s).
 * - Cinematic slow zoom/drift loop layered over the crossfade.
 * - Performance: rotation pauses when the hero is off-screen or the tab is
 *   hidden, and is disabled entirely when the user prefers reduced motion.
 */
export default function HeroBackground({ interval = 1500 }) {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return undefined;

    const el = containerRef.current;
    let onScreen = true;
    let timer = null;

    const tick = () => setActive((p) => (p + 1) % HERO_BG_IMAGES.length);
    const start = () => {
      if (!timer) timer = setInterval(tick, interval);
    };
    const stop = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };
    const sync = () => {
      if (document.hidden || !onScreen) stop();
      else start();
    };

    let io;
    if (el && 'IntersectionObserver' in window) {
      io = new IntersectionObserver(
        ([entry]) => {
          onScreen = entry.isIntersecting;
          sync();
        },
        { threshold: 0.05 }
      );
      io.observe(el);
    } else {
      start();
    }
    document.addEventListener('visibilitychange', sync);

    return () => {
      stop();
      if (io) io.disconnect();
      document.removeEventListener('visibilitychange', sync);
    };
  }, [interval, reduceMotion]);

  return (
    <div ref={containerRef} className="absolute inset-0" aria-hidden="true">
      <div className={cn('absolute inset-0', !reduceMotion && 'hero-bg-drift')}>
        {HERO_BG_IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out',
              i === active ? 'opacity-100' : 'opacity-0'
            )}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
        ))}
      </div>
    </div>
  );
}
