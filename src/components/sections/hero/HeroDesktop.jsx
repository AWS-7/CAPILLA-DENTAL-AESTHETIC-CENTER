import { Star, Sparkles } from 'lucide-react';
import { GlobalCTA, AnimatedCounter } from '../../common';
import HeroBackground from './HeroBackground';

const DESCRIPTION =
  'Advanced dentistry, medical-grade skin therapies and hair restoration in Perumbakkam.';

/**
 * HeroDesktop (≥1024px) — premium centered layout.
 */
export default function HeroDesktop() {

  return (
    <section
      id="hero"
      data-hero
      className="relative w-full min-h-[96vh] overflow-hidden xl:min-h-screen"
    >
      {/* Static hero background */}
      <HeroBackground />
      {/* Left-side gradient for text readability only */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.68) 22%, rgba(0,0,0,0.46) 42%, rgba(0,0,0,0.22) 58%, rgba(0,0,0,0) 76%)' }} />

      <div className="relative z-10 flex min-h-[96vh] w-full flex-col items-start justify-center pl-[8%] pr-6 pb-16 pt-[calc(var(--header-height)+2rem)] text-left xl:min-h-screen xl:pb-20" style={{ maxWidth: '45%' }}>
        <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-gold" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.25)' }}>
          <Sparkles size={14} />
          Premium Dental, Skin & Hair Care in Perumbakkam
        </p>

        <h1 className="whitespace-nowrap font-display text-[clamp(2.5rem,4.6vw,4rem)] font-bold leading-[1.1] text-primary-white" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.45)' }}>
          Capilla Dental <span className="text-gold">&amp; Aesthetic Center</span>
        </h1>

        <p className="mt-6 whitespace-nowrap font-display text-[clamp(1.4rem,2.6vw,2.2rem)] leading-[1.2] text-primary-white/90" style={{ textShadow: '0 3px 12px rgba(0,0,0,0.40)' }}>
          Smile Brighter. Glow Naturally.{' '}
          <span className="text-gold-light">Restore Your Confidence.</span>
        </p>

        <p className="mt-6 max-w-[640px] text-lg font-light leading-relaxed text-primary-white/80" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.30)' }}>
          {DESCRIPTION}
        </p>

        <div className="mt-8">
          <GlobalCTA />
        </div>

        <div className="mt-10 grid w-full max-w-[720px] grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="min-w-0 rounded-2xl border border-primary-white/[0.12] bg-primary-white/[0.06] px-3 py-3 text-center shadow-soft backdrop-blur-sm">
            <div className="flex items-center justify-center gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={11} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="mt-1.5 text-xs font-medium text-primary-white">
              Google Rated
            </p>
          </div>
          <div className="min-w-0 rounded-2xl border border-primary-white/[0.12] bg-primary-white/[0.06] px-3 py-3 text-center shadow-soft backdrop-blur-sm">
            <AnimatedCounter
              end={200}
              suffix="+"
              label="Happy Customers"
              className="[&>p:first-child]:text-xl [&>p:first-child]:leading-none [&>p:first-child]:text-primary-white [&>p:last-child]:mt-1 [&>p:last-child]:text-[10px] [&>p:last-child]:text-primary-white/50"
            />
          </div>
          <div className="min-w-0 rounded-2xl border border-primary-white/[0.12] bg-primary-white/[0.06] px-3 py-3 text-center shadow-soft backdrop-blur-sm">
            <AnimatedCounter
              end={3}
              suffix="+"
              label="Years Experience"
              className="[&>p:first-child]:text-xl [&>p:first-child]:leading-none [&>p:first-child]:text-primary-white [&>p:last-child]:mt-1 [&>p:last-child]:text-[10px] [&>p:last-child]:text-primary-white/50"
            />
          </div>
          <div className="min-w-0 rounded-2xl border border-primary-white/[0.12] bg-primary-white/[0.06] px-3 py-3 text-center shadow-soft backdrop-blur-sm">
            <p className="font-display text-xl leading-none text-primary-white">
              Modern
            </p>
            <p className="mt-1 text-[10px] font-light text-primary-white/50">
              Equipment
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[8] h-14 bg-gradient-to-t from-primary-white to-transparent" />
    </section>
  );
}
