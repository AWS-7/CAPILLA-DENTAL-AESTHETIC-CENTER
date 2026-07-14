import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, A11y, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Star, Phone, MessageCircle } from 'lucide-react';
import { PrimaryButton, SecondaryButton, AnimatedCounter } from '../../common';
import { clinicInfo } from '../../../data/clinic';
import { heroCarouselSlides } from '../../../data/home';

/**
 * HeroMobile — brand-new mobile-only Hero.
 * Production layout. No Desktop / Tablet JSX reuse.
 */
export default function HeroMobile() {
  return (
    <section className="relative w-full overflow-hidden bg-dark-bg">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#151515] to-[#1a160f]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_12%,rgba(200,164,93,0.14),transparent_55%)]" />

      <div className="relative z-10 w-full pt-[calc(var(--header-height)+32px)] pb-12">
        {/* Full-width carousel */}
        <div className="w-full px-4" role="region" aria-label="Clinic highlights">
          <div className="overflow-hidden rounded-[24px] border border-primary-white/10 shadow-premium">
            <Swiper
              modules={[Autoplay, Pagination, A11y, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              loop
              speed={650}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="mobile-swiper mobile-swiper--light !pb-8"
            >
              {heroCarouselSlides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <Link
                    to={slide.path}
                    className="relative block h-[240px] w-full overflow-hidden"
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="eager"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-black/75 via-primary-black/25 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-gold-light">
                        {slide.label}
                      </p>
                      <p className="mt-0.5 font-display text-[22px] text-primary-white">
                        {slide.title}
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Content column — max 340px, centered */}
        <div className="mx-auto mt-8 flex w-full max-w-[340px] flex-col items-center px-4 text-center">
          <h1 className="w-full font-display text-center text-[20px] font-bold leading-none tracking-tight whitespace-nowrap min-[360px]:text-[22px] min-[390px]:text-[24px]">
            <span className="text-primary-white">Capilla Dental </span>
            <span className="text-gold">& Aesthetic Center</span>
          </h1>

          <div className="mt-6 font-display text-[28px] leading-[1.3] text-primary-white/90">
            <p className="mb-3">Smile Brighter.</p>
            <p className="mb-3">Glow Naturally.</p>
            <p className="text-gold-light">Restore Your Confidence.</p>
          </div>

          <p className="mt-6 max-w-[320px] text-center text-[18px] font-light leading-[1.7] text-primary-white/65">
            A luxury multi-specialty clinic in Perumbakka. offering advanced dentistry, medical-grade skin therapies,
            <br />
            and hair restoration — clinical precision & refined care.
          </p>

          <div className="mt-7 flex w-full flex-col gap-[14px]">
            <PrimaryButton
              to="/contact"
              variant="gold"
              size="lg"
              className="!h-14 !min-h-14 w-full !text-lg"
            >
              Book Appointment
            </PrimaryButton>
            <SecondaryButton
              href={clinicInfo.whatsappHref}
              external
              variant="light"
              size="lg"
              className="!h-14 !min-h-14 w-full !text-lg"
            >
              <MessageCircle size={20} />
              WhatsApp
            </SecondaryButton>
            <SecondaryButton
              href={clinicInfo.phoneHref}
              variant="light"
              size="lg"
              className="!h-14 !min-h-14 w-full !text-lg border-primary-white/25"
            >
              <Phone size={18} />
              Call
            </SecondaryButton>
          </div>

          <div className="mt-6 grid w-full grid-cols-2 gap-3">
            <div className="rounded-2xl border border-primary-white/12 bg-primary-white/[0.06] px-3 py-3.5 text-center backdrop-blur-sm">
              <div className="flex items-center justify-center gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-1.5 text-xs font-medium text-primary-white">
                Google Rated
              </p>
            </div>
            <div className="rounded-2xl border border-primary-white/12 bg-primary-white/[0.06] px-3 py-3.5 text-center backdrop-blur-sm">
              <AnimatedCounter
                end={5000}
                suffix="+"
                label="Happy Patients"
                className="[&>p:first-child]:text-2xl [&>p:first-child]:leading-none [&>p:first-child]:text-primary-white [&>p:last-child]:mt-1 [&>p:last-child]:text-xs [&>p:last-child]:text-primary-white/50"
              />
            </div>
            <div className="rounded-2xl border border-primary-white/12 bg-primary-white/[0.06] px-3 py-3.5 text-center backdrop-blur-sm">
              <AnimatedCounter
                end={10}
                suffix="+"
                label="Years Experience"
                className="[&>p:first-child]:text-2xl [&>p:first-child]:leading-none [&>p:first-child]:text-primary-white [&>p:last-child]:mt-1 [&>p:last-child]:text-xs [&>p:last-child]:text-primary-white/50"
              />
            </div>
            <div className="rounded-2xl border border-primary-white/12 bg-primary-white/[0.06] px-3 py-3.5 text-center backdrop-blur-sm">
              <p className="font-display text-2xl leading-none text-primary-white">
                Modern
              </p>
              <p className="mt-1 text-xs font-light text-primary-white/50">
                Equipment
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-primary-white to-transparent" />
    </section>
  );
}
