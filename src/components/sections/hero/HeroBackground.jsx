const HERO_BG_IMAGE = '/gallery/hero-desktop-bg.webp';

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
        style={{
          position: 'absolute',
          inset: 0,
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          WebkitObjectFit: 'cover',
        }}
      />
    </div>
  );
}
