import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, A11y, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Star, Phone, MessageCircle, ArrowRight, Calendar } from 'lucide-react';
import { clinicInfo } from '../../../data/clinic';
import { heroCarouselSlides } from '../../../data/home';

const GOLD = '#D4AF5A';
const EASE = [0.25, 0.46, 0.45, 0.94];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const blurReveal = {
  hidden: { opacity: 0, filter: 'blur(10px)', y: 12 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE } },
};

const stagger = (delay = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: delay },
  },
});

const glassCard =
  'flex h-24 flex-col items-center justify-center rounded-[20px] border border-white/[0.12] bg-white/[0.06] backdrop-blur-md shadow-soft';

/**
 * HeroMobile — premium iOS-style luxury healthcare hero.
 * Mobile only (320–767px). Independent from Desktop / Tablet.
 */
export default function HeroMobile() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B0B0B]">
      {/* Ambient gold glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,175,90,0.14),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_75%,rgba(212,175,90,0.07),transparent_45%)]" />

      <div className="relative z-10 w-full px-5 pt-[calc(var(--header-height)+24px)] pb-12">
        {/* ── Carousel · fade up ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          role="region"
          aria-label="Clinic highlights"
        >
          <div className="overflow-hidden rounded-[28px] border border-white/10 shadow-premium">
            <Swiper
              modules={[Autoplay, Pagination, A11y, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              loop
              speed={700}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="mobile-swiper hero-mobile-swiper"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/85 via-[#0B0B0B]/25 to-transparent" />
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
        </motion.div>

        {/* ── Heading · fade + blur reveal ── */}
        <motion.div
          variants={blurReveal}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
          className="mt-9 text-center"
        >
          <h1
            className="whitespace-nowrap text-[clamp(15px,4.8vw,22px)] font-bold leading-[1.2] tracking-[-0.3px] text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Capilla Dental{' '}
            <span className="text-[#D4AF5A]">&amp; Aesthetic Center</span>
          </h1>
        </motion.div>

        {/* ── Tagline · stagger ── */}
        <motion.div
          variants={stagger(0.3)}
          initial="hidden"
          animate="visible"
          className="mt-7 flex flex-col items-center gap-3 text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <motion.p
            variants={fadeUp}
            className="text-[28px] font-medium leading-[1.35] text-white"
          >
            Smile Brighter.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-[28px] font-medium leading-[1.35] text-white"
          >
            Glow Naturally.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-[28px] font-medium leading-[1.35] text-[#D4AF5A]"
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
          className="mx-auto mt-7 max-w-[330px] text-center text-[17px] font-normal leading-[1.8] text-[#BDBDBD]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Luxury multi-specialty clinic in Perumbakkam offering advanced
          dentistry, medical-grade skin therapies and hair restoration.
        </motion.p>

        {/* ── Primary CTA · scale in ── */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Link
            to="/contact"
            className="flex h-[58px] w-full items-center justify-center gap-2.5 rounded-[18px] text-[18px] font-semibold text-[#0B0B0B] shadow-gold transition-transform duration-200 active:scale-[0.97]"
            style={{
              fontFamily: "'Poppins', sans-serif",
              background: `linear-gradient(135deg, ${GOLD} 0%, #E2C27B 50%, #C09A45 100%)`,
            }}
          >
            <Calendar size={19} />
            Book Appointment
          </Link>
        </motion.div>

        {/* ── Secondary CTA row · scale in ── */}
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
            className="flex h-14 flex-1 items-center justify-center gap-2 rounded-[18px] border border-white/20 text-[17px] font-semibold text-white transition-colors duration-200 active:scale-[0.97] active:border-[#D4AF5A]"
          >
            <MessageCircle size={18} className="text-[#25D366]" />
            WhatsApp
          </a>
          <a
            href={clinicInfo.phoneHref}
            className="flex h-14 flex-1 items-center justify-center gap-2 rounded-[18px] border border-white/20 text-[17px] font-semibold text-white transition-colors duration-200 active:scale-[0.97] active:border-[#D4AF5A]"
          >
            <Phone size={17} className="text-[#D4AF5A]" />
            Call Now
          </a>
        </motion.div>

        {/* ── Trust cards · 2×2 stagger fade up ── */}
        <motion.div
          variants={stagger(0.8)}
          initial="hidden"
          animate="visible"
          className="mt-9 grid grid-cols-2 gap-3.5"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <motion.div variants={fadeUp} className={glassCard}>
            <div className="flex items-center gap-1 text-[#D4AF5A]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className="fill-[#D4AF5A]" />
              ))}
            </div>
            <p className="mt-2 text-[15px] font-medium text-white">
              Google Rated
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className={glassCard}>
            <p
              className="text-[32px] font-semibold leading-none text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              5000+
            </p>
            <p className="mt-1.5 text-[15px] text-[#BDBDBD]">Happy Patients</p>
          </motion.div>

          <motion.div variants={fadeUp} className={glassCard}>
            <p
              className="text-[32px] font-semibold leading-none text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              10+
            </p>
            <p className="mt-1.5 text-[15px] text-[#BDBDBD]">
              Years Experience
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className={glassCard}>
            <p
              className="text-[32px] font-semibold leading-none text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Modern
            </p>
            <p className="mt-1.5 text-[15px] text-[#BDBDBD]">Equipment</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Seam into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-primary-white to-transparent" />
    </section>
  );
}
