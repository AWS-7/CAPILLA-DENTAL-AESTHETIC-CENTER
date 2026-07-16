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
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const blurReveal = {
  hidden: { opacity: 0, filter: 'blur(10px)', y: 12 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE } },
};

const stagger = (delay = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: delay } },
});

const trustStats = [
  { value: '200+', label: 'Happy Customers' },
  { value: '3+', label: 'Years Experience' },
  { value: '100%', label: 'Modern Setup' },
];

/**
 * HeroMobile — premium iOS-style luxury healthcare hero (320–767px).
 * Redesigned layout with a hero image card, floating rating badge,
 * divided trust strip, and scroll-linked 3D depth motion.
 */
export default function HeroMobile() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });

  const contentRotateX = useTransform(progress, [0, 1], [0, 14]);
  const contentScale = useTransform(progress, [0, 1], [1, 0.9]);
  const contentY = useTransform(progress, [0, 1], [0, -36]);
  const contentOpacity = useTransform(progress, [0, 0.55, 1], [1, 1, 0.25]);

  const cardY = useTransform(progress, [0, 1], [0, 64]);
  const cardScale = useTransform(progress, [0, 1], [1, 1.06]);
  const bgY = useTransform(progress, [0, 1], [0, 40]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      data-hero
      className="relative w-full overflow-hidden [perspective:1000px]"
    >
      {/* Rotating clinic photo background · slow parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <HeroBackground />
      </motion.div>
      {/* Readability scrim — darker at top & bottom for headings / trust strip */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/88 via-[#0B0B0B]/68 to-[#0B0B0B]/92" />
      <div className="pointer-events-none absolute inset-0 bg-[#0B0B0B]/25" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,175,90,0.14),transparent_58%)]" />

      <motion.div
        style={{
          rotateX: contentRotateX,
          scale: contentScale,
          y: contentY,
          opacity: contentOpacity,
          transformStyle: 'preserve-3d',
          transformOrigin: 'center top',
        }}
        className="relative z-10 flex w-full flex-col items-center px-5 pt-[calc(var(--header-height)+22px)] pb-14 text-center"
      >
        {/* ── Eyebrow pill ── */}
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 rounded-full border border-[#D4AF5A]/30 bg-white/[0.06] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#D4AF5A] backdrop-blur-md"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <Sparkles size={13} />
          Premium Multi-Specialty Clinic
        </motion.span>

        {/* ── Heading ── */}
        <motion.h1
          variants={blurReveal}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="mt-5 text-[clamp(26px,8vw,38px)] font-bold leading-[1.1] tracking-[-0.5px] text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Capilla Dental
          <span className="mt-0.5 block text-[#D4AF5A]">
            &amp; Aesthetic Center
          </span>
        </motion.h1>

        {/* ── Hero image card · floating rating badge ── */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          role="region"
          aria-label="Clinic highlights"
          style={{ y: cardY, scale: cardScale }}
          className="relative mt-7 w-full"
        >
          <div className="overflow-hidden rounded-[26px] border border-white/[0.12] shadow-premium">
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
                    className="relative block h-[260px] w-full overflow-hidden"
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="eager"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-[#0B0B0B]/25 to-[#0B0B0B]/15" />
                    <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                      <p
                        className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#D4AF5A]"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {slide.label}
                      </p>
                      <p
                        className="mt-1 text-[22px] font-semibold leading-tight text-white"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {slide.title}
                      </p>
                      <span
                        className="mt-2 inline-flex items-center gap-1.5 text-[12px] font-medium text-white/80"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        Explore
                        <ArrowRight size={13} className="text-[#D4AF5A]" />
                      </span>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Floating Google rating badge */}
          <div
            className="absolute right-3 top-3 z-10 flex items-center gap-2 rounded-2xl border border-white/15 bg-[#0B0B0B]/70 px-3 py-2 shadow-soft backdrop-blur-md"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <div className="flex items-center gap-0.5 text-[#D4AF5A]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={11} className="fill-[#D4AF5A]" />
              ))}
            </div>
            <span className="text-[12px] font-semibold text-white">5.0</span>
          </div>
        </motion.div>

        {/* ── Tagline ── */}
        <motion.div
          variants={stagger(0.35)}
          initial="hidden"
          animate="visible"
          className="mt-8 flex flex-col items-center gap-2 [text-shadow:0_2px_14px_rgba(0,0,0,0.5)]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <motion.p
            variants={fadeUp}
            className="text-[clamp(20px,6vw,26px)] font-medium leading-[1.3] text-white"
          >
            Smile Brighter. Glow Naturally.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-[clamp(21px,6.4vw,28px)] font-medium leading-[1.3] text-[#D4AF5A]"
          >
            Restore Your Confidence.
          </motion.p>
        </motion.div>

        {/* ── Description ── */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="mx-auto mt-5 max-w-[340px] text-[clamp(15px,4.2vw,17px)] font-normal leading-[1.7] text-[#EAEAEA] [text-shadow:0_1px_10px_rgba(0,0,0,0.5)]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          A luxury multi-specialty clinic in Perumbakkam — advanced dentistry,
          medical-grade skin therapies and hair restoration.
        </motion.p>

        {/* ── Primary CTA ── */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="mt-8 w-full"
        >
          <Link
            to="/contact"
            className="flex h-[56px] w-full items-center justify-center gap-2.5 rounded-[18px] text-[17px] font-semibold text-[#0B0B0B] shadow-gold transition-transform duration-200 active:scale-[0.97]"
            style={{
              fontFamily: "'Poppins', sans-serif",
              background: `linear-gradient(135deg, ${GOLD} 0%, #E2C27B 50%, #C09A45 100%)`,
            }}
          >
            <Calendar size={19} />
            Book Appointment
          </Link>
        </motion.div>

        {/* ── Secondary CTA row ── */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
          className="mt-3 flex w-full gap-3"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <a
            href={clinicInfo.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[52px] flex-1 items-center justify-center gap-2 rounded-[18px] border border-white/20 bg-white/[0.04] text-[16px] font-semibold text-white backdrop-blur-sm transition-colors duration-200 active:scale-[0.97] active:border-[#D4AF5A]"
          >
            <MessageCircle size={18} className="text-[#25D366]" />
            WhatsApp
          </a>
          <a
            href={clinicInfo.phoneHref}
            className="flex h-[52px] flex-1 items-center justify-center gap-2 rounded-[18px] border border-white/20 bg-white/[0.04] text-[16px] font-semibold text-white backdrop-blur-sm transition-colors duration-200 active:scale-[0.97] active:border-[#D4AF5A]"
          >
            <Phone size={17} className="text-[#D4AF5A]" />
            Call Now
          </a>
        </motion.div>

        {/* ── Trust strip · divided ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.85 }}
          className="mt-8 grid w-full grid-cols-3 divide-x divide-white/10 rounded-[20px] border border-white/[0.1] bg-white/[0.05] py-4 backdrop-blur-md"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {trustStats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center px-1">
              <p
                className="text-[22px] font-semibold leading-none text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {stat.value}
              </p>
              <p className="mt-1.5 text-[11px] leading-tight text-[#BDBDBD]">
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
