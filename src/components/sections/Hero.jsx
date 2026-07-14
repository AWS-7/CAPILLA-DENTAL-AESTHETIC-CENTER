import useHeroBreakpoint from '../../hooks/useHeroBreakpoint';
import HeroDesktop from './hero/HeroDesktop';
import HeroTablet from './hero/HeroTablet';
import HeroMobile from './hero/HeroMobile';

/**
 * Hero orchestrator — mounts exactly one variant.
 * No shared layout. No CSS hide/show across breakpoints.
 *
 *  Hero
 *   ├── HeroDesktop  (≥1024)
 *   ├── HeroTablet   (768–1023)
 *   └── HeroMobile   (<768)
 */
export default function Hero() {
  const breakpoint = useHeroBreakpoint();

  if (breakpoint === 'desktop') return <HeroDesktop />;
  if (breakpoint === 'tablet') return <HeroTablet />;
  return <HeroMobile />;
}
