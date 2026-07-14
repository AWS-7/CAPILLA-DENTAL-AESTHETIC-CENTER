import { useState, useEffect } from 'react';

/**
 * Returns which Hero variant to mount.
 * Desktop ≥1024 · Tablet ≥768 · Mobile otherwise
 */
export default function useHeroBreakpoint() {
  const [breakpoint, setBreakpoint] = useState('mobile');

  useEffect(() => {
    const desktopMq = window.matchMedia('(min-width: 1024px)');
    const tabletMq = window.matchMedia('(min-width: 768px)');

    const sync = () => {
      if (desktopMq.matches) setBreakpoint('desktop');
      else if (tabletMq.matches) setBreakpoint('tablet');
      else setBreakpoint('mobile');
    };

    sync();
    desktopMq.addEventListener('change', sync);
    tabletMq.addEventListener('change', sync);
    return () => {
      desktopMq.removeEventListener('change', sync);
      tabletMq.removeEventListener('change', sync);
    };
  }, []);

  return breakpoint;
}
