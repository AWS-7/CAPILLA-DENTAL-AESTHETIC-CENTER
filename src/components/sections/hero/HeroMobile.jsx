import { Star, Sparkles } from 'lucide-react';
import { GlobalCTA } from '../../common';
import HeroBackground from './HeroBackground';

const trustStats = [
  { value: '200+', label: 'Happy Customers' },
  { value: '3+', label: 'Years Exp.' },
  { value: '5.0★', label: 'Google Rated' },
  { value: 'Modern', label: 'Equipment' },
];

/**
 * HeroMobile — premium, compact hero (320–767px).
 */
export default function HeroMobile() {
  return (
    <section
      id="hero"
      data-hero
      className="relative w-full overflow-hidden"
    >
      {/* Static hero background */}
      <div className="absolute inset-0">
        <HeroBackground />
      </div>
      {/* Readability overlay - light gradient for text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

      <div className="relative z-10 flex w-full flex-col items-center px-5 pt-[calc(var(--header-height)+16px)] pb-10 text-center">
        {/* ── Eyebrow pill ── */}
        <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF5A]/30 bg-white/[0.08] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#D4AF5A] backdrop-blur-md">
          <Sparkles size={12} />
          Premium Dental, Skin & Hair Care in Perumbakkam
        </span>

        {/* ── Heading ── */}
        <h1 className="mt-4 whitespace-nowrap text-[clamp(16px,5.1vw,24px)] font-bold leading-[1.15] tracking-[-0.3px] text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.6)]">
          Capilla Dental{' '}
          <span className="text-[#D4AF5A]">&amp; Aesthetic Center</span>
        </h1>

        {/* ── Tagline ── */}
        <div className="mt-3 flex flex-col items-center gap-0.5 [text-shadow:0_2px_12px_rgba(0,0,0,0.55)]">
          <p className="text-[clamp(16px,4.8vw,20px)] font-medium leading-[1.3] text-white/90">
            Smile Brighter. Glow Naturally.
          </p>
          <p className="text-[clamp(16px,4.8vw,20px)] font-medium leading-[1.3] text-[#D4AF5A]">
            Restore Your Confidence.
          </p>
        </div>

        {/* ── Description ── */}
        <p className="mx-auto mt-5 max-w-[330px] text-[clamp(14px,4vw,15.5px)] font-normal leading-[1.65] text-[#E8E8E8] [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
          Advanced dentistry, medical-grade skin therapies and hair restoration
          in Perumbakkam.
        </p>

        {/* ── CTA Buttons ── */}
        <div className="mt-6 w-full">
          <GlobalCTA />
        </div>

        {/* ── Trust strip · divided ── */}
        <div className="mt-6 grid w-full grid-cols-2 gap-2.5 rounded-[16px] border border-white/[0.1] bg-white/[0.06] py-3.5 backdrop-blur-md">
          {trustStats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center px-1">
              <p className="text-[19px] font-semibold leading-none text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-[10.5px] leading-tight text-[#C4C4C4]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Seam into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-primary-white to-transparent" />
    </section>
  );
}
