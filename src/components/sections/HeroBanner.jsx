import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Phone, MessageCircle, Star, Sparkles } from 'lucide-react';
import {
  PrimaryButton,
  SecondaryButton,
  AnimatedCounter,
} from '../common';
import { clinicInfo } from '../../data/clinic';
import { placeholders } from '../../data/content';
import { slideInLeft, slideInRight } from '../../utils/animations';

const floatingEls = [
  { top: '18%', left: '6%', size: 56, delay: 0 },
  { top: '62%', left: '10%', size: 40, delay: 0.4 },
  { top: '28%', right: '42%', size: 28, delay: 0.8 },
  { bottom: '18%', left: '38%', size: 36, delay: 1.2 },
];

function HeroCTAs({ className = '' }) {
  return (
    <div className={className}>
      <PrimaryButton to="/contact" variant="gold" size="lg" className="w-full lg:w-auto min-h-12">
        Book Appointment
      </PrimaryButton>
      <SecondaryButton
        href={clinicInfo.whatsappHref}
        external
        variant="light"
        size="lg"
        className="w-full lg:w-auto min-h-12"
      >
        <MessageCircle size={18} />
        WhatsApp Consultation
      </SecondaryButton>
      <SecondaryButton
        href={clinicInfo.phoneHref}
        variant="light"
        size="md"
        className="w-full border-primary-white/25 lg:w-auto min-h-12"
      >
        <Phone size={16} />
        Call Now
      </SecondaryButton>
    </div>
  );
}

function TrustBadges({ mobile = false }) {
  if (mobile) {
    return (
      <div className="grid grid-cols-2 gap-2.5 w-full max-w-md mx-auto lg:hidden">
        <div className="rounded-2xl border border-primary-white/12 bg-primary-white/[0.06] backdrop-blur-sm px-3 py-3 text-center shadow-soft">
          <div className="flex items-center justify-center gap-0.5 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={10} className="fill-gold text-gold" />
            ))}
          </div>
          <p className="mt-1.5 text-xs font-medium text-primary-white">Google Rating</p>
        </div>
        <div className="rounded-2xl border border-primary-white/12 bg-primary-white/[0.06] backdrop-blur-sm px-3 py-3 text-center shadow-soft">
          <AnimatedCounter
            end={5000}
            suffix="+"
            label="Happy Patients"
            className="[&>p:first-child]:text-xl [&>p:first-child]:leading-none [&>p:first-child]:text-primary-white [&>p:last-child]:text-primary-white/50 [&>p:last-child]:text-[10px] [&>p:last-child]:mt-1"
          />
        </div>
        <div className="rounded-2xl border border-primary-white/12 bg-primary-white/[0.06] backdrop-blur-sm px-3 py-3 text-center shadow-soft">
          <AnimatedCounter
            end={10}
            suffix="+"
            label="Years Experience"
            className="[&>p:first-child]:text-xl [&>p:first-child]:leading-none [&>p:first-child]:text-primary-white [&>p:last-child]:text-primary-white/50 [&>p:last-child]:text-[10px] [&>p:last-child]:mt-1"
          />
        </div>
        <div className="rounded-2xl border border-primary-white/12 bg-primary-white/[0.06] backdrop-blur-sm px-3 py-3 text-center shadow-soft">
          <p className="font-display text-xl leading-none text-primary-white">Modern</p>
          <p className="mt-1 text-[10px] font-light text-primary-white/50">Equipment</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10 hidden grid-cols-2 gap-4 border-t border-primary-white/10 pt-8 sm:grid-cols-4 sm:gap-6 lg:grid">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-0.5 text-gold">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={12} className="fill-gold text-gold" />
          ))}
        </div>
        <p className="text-sm font-medium text-primary-white">Google Rated</p>
      </div>
      <AnimatedCounter
        end={5000}
        suffix="+"
        label="Happy Patients"
        className="text-left [&>p:first-child]:text-2xl [&>p:first-child]:md:text-3xl [&>p:first-child]:text-primary-white [&>p:last-child]:text-primary-white/50 [&>p:last-child]:text-left"
      />
      <AnimatedCounter
        end={10}
        suffix="+"
        label="Years Experience"
        className="text-left [&>p:first-child]:text-2xl [&>p:first-child]:md:text-3xl [&>p:first-child]:text-primary-white [&>p:last-child]:text-primary-white/50 [&>p:last-child]:text-left"
      />
      <div>
        <p className="font-display text-2xl text-primary-white md:text-3xl">Modern</p>
        <p className="mt-2 text-sm font-light text-primary-white/50">Equipment</p>
      </div>
    </div>
  );
}

export default function HeroBanner() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);

  return (
    <section
      ref={ref}
      className="relative w-full max-w-[100vw] overflow-hidden bg-dark-bg min-h-0 lg:min-h-screen"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#151515] to-[#1a160f]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(200,164,93,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(200,164,93,0.08),transparent_40%)]" />
      </motion.div>

      {floatingEls.map((el, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute hidden rounded-full border border-gold/25 bg-gold/10 backdrop-blur-sm md:block"
          style={{
            top: el.top,
            left: el.left,
            right: el.right,
            bottom: el.bottom,
            width: el.size,
            height: el.size,
          }}
          animate={{ y: [0, -14, 0], opacity: [0.35, 0.7, 0.35] }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: el.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      <motion.div
        style={{ opacity }}
        className="relative z-10 container-premium flex items-start lg:min-h-screen lg:items-center pt-[calc(var(--header-height)+0.35rem)] pb-8 sm:pb-10 md:pb-14 lg:pb-16 sm:pt-[calc(var(--header-height)+0.75rem)]"
      >
        <div className="grid w-full grid-cols-1 items-center gap-4 sm:gap-6 md:gap-10 lg:grid-cols-12 lg:gap-10">
          {/* Copy — mobile: subtitle → heading → description */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left"
          >
            <p className="mb-2 inline-flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-gold sm:mb-5 sm:text-xs sm:tracking-[0.22em] lg:justify-start">
              <Sparkles size={12} className="sm:hidden" />
              <Sparkles size={14} className="hidden sm:inline" />
              Premium Dental, Skin & Hair Care in Perumbakkam
            </p>

            <h1 className="font-display text-primary-white">
              <span className="block text-[1.85rem] leading-[1.08] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
                Capilla Dental
              </span>
              <span className="mt-0.5 block text-[1.55rem] leading-[1.1] text-gold sm:text-4xl md:text-5xl lg:text-[3.5rem]">
                & Aesthetic Center
              </span>
            </h1>

            <div className="mt-3 space-y-0 font-display text-base text-primary-white/90 sm:mt-6 sm:space-y-1 sm:text-3xl md:text-[2.35rem]">
              <p>Smile Brighter.</p>
              <p>Glow Naturally.</p>
              <p className="text-gold-light">Restore Your Confidence.</p>
            </div>

            <p className="mt-3 max-w-xl text-[0.95rem] font-light leading-relaxed text-primary-white/65 sm:mt-6 sm:text-base md:text-lg">
              A luxury multi-specialty clinic in Perumbakkam offering advanced
              dentistry, medical-grade skin therapies, and hair restoration —
              delivered with clinical precision and refined care.
            </p>

            {/* Desktop CTAs + trust */}
            <HeroCTAs className="mt-8 hidden flex-wrap items-center gap-3 sm:gap-4 lg:flex" />
            <TrustBadges mobile={false} />
          </motion.div>

          {/* Doctor image */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="relative mx-auto w-full max-w-[260px] sm:max-w-sm lg:col-span-5 lg:max-w-none"
          >
            <div className="relative mx-auto">
              <div className="absolute -inset-2 rounded-[1.5rem] bg-gold-gradient opacity-20 blur-xl lg:-inset-4 lg:rounded-[2rem] lg:blur-2xl" />
              <div className="relative mx-auto overflow-hidden rounded-[1.35rem] border border-primary-white/10 shadow-premium h-[32vh] max-h-[240px] min-h-[200px] w-full sm:h-[40vh] sm:max-h-[360px] sm:min-h-0 lg:aspect-[3/4] lg:h-auto lg:max-h-[70vh] lg:rounded-[1.75rem]">
                <LazyLoadImage
                  src={placeholders.doctor}
                  alt="Capilla Dental specialist — premium care in Perumbakkam"
                  effect="blur"
                  className="h-full w-full object-cover object-[center_15%]"
                  wrapperClassName="h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black/55 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center sm:p-6 md:p-8 lg:text-left">
                  <p className="text-[9px] uppercase tracking-[0.18em] text-gold-light sm:text-xs">
                    Clinical Excellence
                  </p>
                  <p className="mt-0.5 font-display text-lg text-primary-white sm:text-2xl">
                    Trusted Specialists
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile: CTAs then trust */}
          <HeroCTAs className="flex w-full max-w-md mx-auto flex-col gap-2.5 lg:hidden" />
          <TrustBadges mobile />
        </div>
      </motion.div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-primary-white to-transparent lg:h-24" />
    </section>
  );
}
