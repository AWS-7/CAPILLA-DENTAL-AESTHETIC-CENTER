import { useState, useEffect } from 'react';
import { cn } from '../../../utils/helpers';

const HERO_BG_IMAGES = [
  '/gallery/clinic-lounge.png',
  '/gallery/clinic-reception-desk.png',
  '/gallery/clinic-treatment-suite.png',
  '/gallery/clinic-consultation-room.png',
  '/gallery/clinic-therapy-room.png',
  '/gallery/clinic-laser-room.png',
];

/**
 * Rotating clinic-photo background for the Hero section.
 * Crossfades to the next image on a fixed interval (default 1.5s).
 */
export default function HeroBackground({ interval = 1500 }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((prev) => (prev + 1) % HERO_BG_IMAGES.length),
      interval
    );
    return () => clearInterval(id);
  }, [interval]);

  return (
    <div className="absolute inset-0" aria-hidden="true">
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
  );
}
