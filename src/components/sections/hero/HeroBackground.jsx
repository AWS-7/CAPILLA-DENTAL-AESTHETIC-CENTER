const HERO_BG_IMAGE = '/gallery/hero-desktop-bg.png';

/**
 * Static hero background image for the Hero section.
 */
export default function HeroBackground() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <img
        src={HERO_BG_IMAGE}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
