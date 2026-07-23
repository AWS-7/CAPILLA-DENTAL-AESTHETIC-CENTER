import { Star, Sparkles } from 'lucide-react';
import { GlobalCTA, AnimatedCounter } from '../../common';
import { placeholders } from '../../../data/content';
import HeroBackground from './HeroBackground';

const DESCRIPTION =
  'Advanced dentistry, medical-grade skin therapies and hair restoration in Perumbakkam.';

/**
 * HeroTablet (768–1023px) — dedicated two-column layout.
 * Own JSX — not shared with Mobile or Desktop.
 */
export default function HeroTablet() {
  return (
    <section id="hero" data-hero className="relative w-full overflow-hidden">
      {/* Static hero background */}
      <HeroBackground />
      {/* Readability overlay - light gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />

      <div className="relative z-10 mx-auto grid min-h-[80vh] w-full max-w-[960px] grid-cols-2 items-center gap-8 px-8 pb-12 pt-[calc(var(--header-height)+24px)]">
        <div className="flex max-w-[400px] flex-col items-start text-left">
          <p className="mb-2.5 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
            <Sparkles size={12} />
            Premium Dental, Skin & Hair Care in Perumbakkam
          </p>

          <h1 className="font-display text-primary-white">
            <span className="block text-4xl font-bold leading-none">
              Capilla Dental
            </span>
            <span className="mt-1.5 block text-3xl font-bold leading-[1.1] text-gold">
              & Aesthetic Center
            </span>
          </h1>

          <div className="mt-4 space-y-1.5 font-display text-xl leading-[1.3] text-primary-white/90">
            <p>Smile Brighter.</p>
            <p>Glow Naturally.</p>
            <p className="text-gold-light">Restore Your Confidence.</p>
          </div>

          <p className="mt-4 text-sm font-light leading-relaxed text-primary-white/65">
            {DESCRIPTION}
          </p>

          <div className="mt-5">
            <GlobalCTA />
          </div>

          <div className="mt-5 grid w-full grid-cols-2 gap-2.5">
            <div className="rounded-xl border border-primary-white/12 bg-primary-white/[0.06] px-3 py-2.5 text-left backdrop-blur-sm">
              <div className="flex items-center gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={10} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-1 text-[11px] font-medium text-primary-white">
                Google Rated
              </p>
            </div>
            <div className="rounded-xl border border-primary-white/12 bg-primary-white/[0.06] px-3 py-2.5 text-left backdrop-blur-sm">
              <AnimatedCounter
                end={200}
                suffix="+"
                label="Happy Customers"
                className="text-left [&>p:first-child]:text-lg [&>p:first-child]:leading-none [&>p:first-child]:text-primary-white [&>p:last-child]:mt-1 [&>p:last-child]:text-left [&>p:last-child]:text-[10px] [&>p:last-child]:text-primary-white/50"
              />
            </div>
            <div className="rounded-xl border border-primary-white/12 bg-primary-white/[0.06] px-3 py-2.5 text-left backdrop-blur-sm">
              <AnimatedCounter
                end={3}
                suffix="+"
                label="Years Experience"
                className="text-left [&>p:first-child]:text-lg [&>p:first-child]:leading-none [&>p:first-child]:text-primary-white [&>p:last-child]:mt-1 [&>p:last-child]:text-left [&>p:last-child]:text-[10px] [&>p:last-child]:text-primary-white/50"
              />
            </div>
            <div className="rounded-xl border border-primary-white/12 bg-primary-white/[0.06] px-3 py-2.5 text-left backdrop-blur-sm">
              <p className="font-display text-lg leading-none text-primary-white">
                Modern
              </p>
              <p className="mt-1 text-[10px] font-light text-primary-white/50">
                Equipment
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <div className="relative w-full max-w-[340px]">
            <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-gold-gradient opacity-20 blur-xl" />
            <img
              src={placeholders.doctor}
              alt="Capilla Dental specialist"
              className="relative max-h-[400px] w-full rounded-3xl border border-primary-white/10 object-cover object-[center_18%] shadow-premium"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-primary-white to-transparent" />
    </section>
  );
}
