import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, A11y, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import {
  Star,
  Phone,
  MessageCircle,
  ArrowRight,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { clinicInfo } from '../../../data/clinic';
import { heroCarouselSlides } from '../../../data/home';
import HeroBackground from './HeroBackground';

const GOLD = '#D4AF5A';
const EASE = [0.25, 0.46, 0.45, 0.94];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const blurReveal = {
  hidden: { opacity: 0, filter: 'blur(8px)', y: 10 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: EASE } },
};

const stagger = (delay = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: delay } },
});

const trustStats = [
  { value: '200+', label: 'Happy Customers' },
  { value: '3+', label: 'Years Exp.' },
  { value: '5.0★', label: 'Google Rated' },
];

/**
 * HeroMobile — premium, compact iOS-style hero (320–767px).
 * Cleaner overlay, tighter spacing, subtle scroll-linked depth.
 */
export default function HeroMobile() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    mass: 0.4,
  });

  // Subtle scroll-linked depth (gentle, not distracting)
  const contentScale = useTransform(progress, [0, 1], [1, 0.96]);
  const contentY = useTransform(progress, [0, 1], [0, -22]);
  const contentOpacity = useTransform(progress, [0, 0.6, 1], [1, 1, 0.4]);
  const cardY = useTransform(progress, [0, 1], [0, 40]);
  const bgY = useTransform(progress, [0, 1], [0, 30]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      data-hero
      className="relative w-full overflow-hidden"
    >
      {/* Rotating clinic photo background · slow parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <HeroBackground />
      </motion.div>
      {/* Lighter, cleaner readability scrim */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/55 via-[#0B0B0B]/42 to-[#0B0B0B]/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_8%,rgba(212,175,90,0.12),transparent_60%)]" />

      <motion.div
        style={{ scale: contentScale, y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex w-full flex-col items-center px-5 pt-[calc(var(--header-height)+16px)] pb-10 text-center"
      >
        {/* ── Eyebrow pill ── */}
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 rounded-full border border-[#D4AF5A]/30 bg-white/[0.08] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#D4AF5A] backdrop-blur-md"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <Sparkles size={12} />
          Premium Multi-Specialty Clinic
        </motion.span>

        {/* ── Heading ── */}
        <motion.h1
          variants={blurReveal}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.08 }}
          className="mt-4 whitespace-nowrap text-[clamp(16px,5.1vw,24px)] font-bold leading-[1.15] tracking-[-0.3px] text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.6)]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Capilla Dental{' '}
          <span className="text-[#D4AF5A]">&amp; Aesthetic Center</span>
        </motion.h1>

        {/* ── Tagline ── */}
        <motion.div
          variants={stagger(0.25)}
          initial="hidden"
          animate="visible"
          className="mt-3 flex flex-col items-center gap-0.5 [text-shadow:0_2px_12px_rgba(0,0,0,0.55)]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <motion.p
            variants={fadeUp}
            className="text-[clamp(16px,4.8vw,20px)] font-medium leading-[1.3] text-white/90"
          >
            Smile Brighter. Glow Naturally.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-[clamp(16px,4.8vw,20px)] font-medium leading-[1.3] text-[#D4AF5A]"
          >
            Restore Your Confidence.
          </motion.p>
        </motion.div>

        {/* ── Hero image card · floating rating badge ── */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.28 }}
          role="region"
          aria-label="Clinic highlights"
          style={{ y: cardY }}
          className="relative mt-6 w-full"
        >
          <div className="overflow-hidden rounded-[24px] border border-white/[0.14] shadow-premium">
            <Swiper
              modules={[Autoplay, Pagination, A11y, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              loop
              speed={700}
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="mobile-swiper hero-mobile-swiper"
            >
              {heroCarouselSlides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <Link
                    to={slide.path}
                    className="relative block h-[210px] w-full overflow-hidden"
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="eager"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/85 via-[#0B0B0B]/15 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                      <p
                        className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#D4AF5A]"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {slide.label}
                      </p>
                      <p
                        className="mt-0.5 text-[19px] font-semibold leading-tight text-white"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {slide.title}
                      </p>
                      <span
                        className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] font-medium text-white/80"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        Explore
                        <ArrowRight size={12} className="text-[#D4AF5A]" />
                      </span>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Floating Google rating badge */}
          <div
            className="absolute right-3 top-3 z-10 flex items-center gap-1.5 rounded-xl border border-white/15 bg-[#0B0B0B]/75 px-2.5 py-1.5 shadow-soft backdrop-blur-md"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <div className="flex items-center gap-0.5 text-[#D4AF5A]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={10} className="fill-[#D4AF5A]" />
              ))}
            </div>
            <span className="text-[11px] font-semibold text-white">5.0</span>
          </div>
        </motion.div>

        {/* ── Description ── */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.42 }}
          className="mx-auto mt-5 max-w-[330px] text-[clamp(14px,4vw,15.5px)] font-normal leading-[1.65] text-[#E8E8E8] [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Advanced dentistry, medical-grade skin therapies and hair restoration
          in Perumbakkam.
        </motion.p>

        {/* ── Primary CTA ── */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="mt-6 w-full"
        >
          <Link
            to="/contact"
            className="flex h-[54px] w-full items-center justify-center gap-2.5 rounded-[16px] text-[16px] font-semibold text-[#0B0B0B] shadow-gold transition-transform duration-200 active:scale-[0.97]"
            style={{
              fontFamily: "'Poppins', sans-serif",
              background: `linear-gradient(135deg, ${GOLD} 0%, #E2C27B 50%, #C09A45 100%)`,
            }}
          >
            <Calendar size={18} />
            Book Appointment
          </Link>
        </motion.div>

        {/* ── Secondary CTA row ── */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.58 }}
          className="mt-2.5 flex w-full gap-2.5"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <a
            href={clinicInfo.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[48px] flex-1 items-center justify-center gap-2 rounded-[16px] border border-white/20 bg-white/[0.06] text-[15px] font-semibold text-white backdrop-blur-sm transition-colors duration-200 active:scale-[0.97] active:border-[#D4AF5A]"
          >
            <MessageCircle size={17} className="text-[#25D366]" />
            WhatsApp
          </a>
          <a
            href={clinicInfo.phoneHref}
            className="flex h-[48px] flex-1 items-center justify-center gap-2 rounded-[16px] border border-white/20 bg-white/[0.06] text-[15px] font-semibold text-white backdrop-blur-sm transition-colors duration-200 active:scale-[0.97] active:border-[#D4AF5A]"
          >
            <Phone size={16} className="text-[#D4AF5A]" />
            Call Now
          </a>
        </motion.div>

        {/* ── Trust strip · divided ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.68 }}
          className="mt-6 grid w-full grid-cols-3 divide-x divide-white/10 rounded-[16px] border border-white/[0.1] bg-white/[0.06] py-3.5 backdrop-blur-md"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {trustStats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center px-1">
              <p
                className="text-[19px] font-semibold leading-none text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {stat.value}
              </p>
              <p className="mt-1 text-[10.5px] leading-tight text-[#C4C4C4]">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Seam into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-primary-white to-transparent" />
    </section>
  );
}
