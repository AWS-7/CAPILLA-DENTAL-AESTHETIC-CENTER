import { Star, Phone, MessageCircle, Sparkles } from 'lucide-react';
import { PrimaryButton, SecondaryButton, AnimatedCounter } from '../../common';
import { clinicInfo } from '../../../data/clinic';
import { placeholders } from '../../../data/content';

const DESCRIPTION =
  'A luxury multi-specialty clinic in Perumbakkam offering advanced dentistry, medical-grade skin therapies, and hair restoration — delivered with clinical precision and refined care.';

/**
 * HeroDesktop (≥1024px) — dedicated premium two-column layout.
 * Own JSX — not shared with Mobile or Tablet.
 */
export default function HeroDesktop() {
  return (
    <section className="relative w-full min-h-[96vh] overflow-hidden bg-dark-bg xl:min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#151515] to-[#1a160f]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_15%,rgba(200,164,93,0.16),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(200,164,93,0.14),transparent_50%)]" />

      <div
        className="relative z-10 mx-auto grid min-h-[96vh] w-full max-w-[1400px] items-center gap-20 px-12 pb-16 pt-[calc(var(--header-height)+1.75rem)] xl:min-h-screen xl:pb-20"
        style={{ gridTemplateColumns: 'minmax(520px, 620px) 1fr' }}
      >
        <div className="flex h-full w-full max-w-[620px] flex-col items-start justify-center text-left">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-gold">
            <Sparkles size={14} />
            Premium Dental, Skin & Hair Care in Perumbakkam
          </p>

          <h1 className="font-display text-primary-white">
            <span className="block text-[4rem] font-bold leading-[1.06] xl:text-[4.25rem]">
              Capilla Dental
            </span>
            <span className="mt-1 block text-[3.25rem] font-bold leading-[1.1] text-gold xl:text-[3.5rem]">
              & Aesthetic Center
            </span>
          </h1>

          <div className="mt-5 space-y-2 font-display text-[2.15rem] leading-[1.2] text-primary-white/90 xl:space-y-2.5 xl:text-[2.35rem] xl:leading-[1.25]">
            <p>Smile Brighter.</p>
            <p>Glow Naturally.</p>
            <p className="text-gold-light">Restore Your Confidence.</p>
          </div>

          <p className="mt-5 max-w-[620px] text-lg font-light leading-relaxed text-primary-white/65">
            {DESCRIPTION}
          </p>

          <div className="mt-7 flex flex-row flex-wrap items-stretch gap-3">
            <PrimaryButton to="/contact" variant="gold" size="lg" className="min-h-12">
              Book Appointment
            </PrimaryButton>
            <SecondaryButton
              href={clinicInfo.whatsappHref}
              external
              variant="light"
              size="lg"
              className="min-h-12"
            >
              <MessageCircle size={18} />
              WhatsApp
            </SecondaryButton>
            <SecondaryButton
              href={clinicInfo.phoneHref}
              variant="light"
              size="lg"
              className="min-h-12 border-primary-white/25"
            >
              <Phone size={16} />
              Call
            </SecondaryButton>
          </div>

          <div className="mt-8 flex w-full max-w-[620px] flex-row gap-3">
            <div className="min-w-0 flex-1 rounded-2xl border border-primary-white/12 bg-primary-white/[0.06] px-3 py-3 text-left shadow-soft backdrop-blur-sm">
              <div className="flex items-center gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={11} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-1.5 text-xs font-medium text-primary-white">
                Google Rated
              </p>
            </div>
            <div className="min-w-0 flex-1 rounded-2xl border border-primary-white/12 bg-primary-white/[0.06] px-3 py-3 text-left shadow-soft backdrop-blur-sm">
              <AnimatedCounter
                end={5000}
                suffix="+"
                label="Happy Patients"
                className="text-left [&>p:first-child]:text-xl [&>p:first-child]:leading-none [&>p:first-child]:text-primary-white [&>p:last-child]:mt-1 [&>p:last-child]:text-left [&>p:last-child]:text-[10px] [&>p:last-child]:text-primary-white/50"
              />
            </div>
            <div className="min-w-0 flex-1 rounded-2xl border border-primary-white/12 bg-primary-white/[0.06] px-3 py-3 text-left shadow-soft backdrop-blur-sm">
              <AnimatedCounter
                end={10}
                suffix="+"
                label="Years Experience"
                className="text-left [&>p:first-child]:text-xl [&>p:first-child]:leading-none [&>p:first-child]:text-primary-white [&>p:last-child]:mt-1 [&>p:last-child]:text-left [&>p:last-child]:text-[10px] [&>p:last-child]:text-primary-white/50"
              />
            </div>
            <div className="min-w-0 flex-1 rounded-2xl border border-primary-white/12 bg-primary-white/[0.06] px-3 py-3 text-left shadow-soft backdrop-blur-sm">
              <p className="font-display text-xl leading-none text-primary-white">
                Modern
              </p>
              <p className="mt-1 text-[10px] font-light text-primary-white/50">
                Equipment
              </p>
            </div>
          </div>
        </div>

        <div className="flex h-full w-full items-center justify-end justify-self-end">
          <div className="relative w-full max-w-[560px]">
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gold-gradient opacity-20 blur-2xl" />
            <img
              src={placeholders.doctor}
              alt="Capilla Dental specialist — premium care in Perumbakkam"
              className="relative max-h-[620px] w-full rounded-3xl border border-primary-white/10 object-cover object-[center_18%] shadow-premium"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-primary-white to-transparent" />
    </section>
  );
}
