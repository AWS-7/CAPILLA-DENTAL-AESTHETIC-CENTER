import { motion } from 'framer-motion';
import {
  Star,
  Phone,
  MessageCircle,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { clinicInfo } from '../../../data/clinic';
import heroImage from '../../../assets/hero.png';

const GOLD = '#D4AF5A';
const EASE = [0.25, 0.46, 0.45, 0.94];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const blurReveal = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE } },
};

const stagger = (delay = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: delay } },
});

const trustStats = [
  { value: '200+', label: 'Happy Customers' },
  { value: '8+', label: 'Years Exp.' },
  { value: '5.0★', label: 'Google Rated' },
];

/**
 * HeroMobile — premium mobile hero (320–767px) with background image.
 */
export default function HeroMobile() {
  return (
    <section
      id="hero"
      data-hero
      className="relative w-full overflow-hidden min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#000000]/45 via-[#000000]/35 to-[#000000]/50" />

      <div className="relative z-10 flex w-full flex-col items-center px-5 pb-10 text-center max-w-sm">
        {/* ── Eyebrow pill ── */}
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 rounded-full border border-[#D4AF5A]/40 bg-black/30 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#D4AF5A] backdrop-blur-md"
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
          className="mt-4 text-[clamp(20px,6.5vw,28px)] font-bold leading-[1.15] tracking-[-0.5px] text-white [text-shadow:0_3px_12px_rgba(0,0,0,0.8)]"
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
          className="mt-3 flex flex-col items-center gap-0.5"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <motion.p
            variants={fadeUp}
            className="text-[clamp(15px,4.8vw,19px)] font-medium leading-[1.3] text-white/95 [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]"
          >
            Smile Brighter. Glow Naturally.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-[clamp(15px,4.8vw,19px)] font-medium leading-[1.3] text-[#E2C27B] [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]"
          >
            Restore Your Confidence.
          </motion.p>
        </motion.div>

        {/* ── Description ── */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.42 }}
          className="mx-auto mt-4 max-w-[330px] text-[clamp(13px,3.8vw,14.5px)] font-normal leading-[1.6] text-white/90 [text-shadow:0_2px_6px_rgba(0,0,0,0.6)]"
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
          <button
            type="button"
            onClick={() => window.location.href = '/contact'}
            className="flex h-[54px] w-full items-center justify-center gap-2.5 rounded-[16px] text-[15px] font-semibold text-[#0B0B0B] shadow-[0_8px_24px_rgba(212,175,90,0.35)] transition-transform duration-200 active:scale-[0.97]"
            style={{
              fontFamily: "'Poppins', sans-serif",
              background: `linear-gradient(135deg, ${GOLD} 0%, #E2C27B 50%, #C09A45 100%)`,
            }}
          >
            <Calendar size={18} />
            Book Appointment
          </button>
        </motion.div>

        {/* ── Secondary CTA row ── */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.58 }}
          className="mt-3 flex w-full gap-2.5"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <a
            href={clinicInfo.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[48px] flex-1 items-center justify-center gap-2 rounded-[14px] border border-white/30 bg-white/20 text-[13px] font-semibold text-white backdrop-blur-md transition-all duration-200 active:scale-[0.97] hover:bg-white/30"
          >
            <MessageCircle size={16} className="text-[#25D366]" />
            WhatsApp
          </a>
          <a
            href={clinicInfo.phoneHref}
            className="flex h-[48px] flex-1 items-center justify-center gap-2 rounded-[14px] border border-white/30 bg-white/20 text-[13px] font-semibold text-white backdrop-blur-md transition-all duration-200 active:scale-[0.97] hover:bg-white/30"
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
          className="mt-6 grid w-full grid-cols-3 divide-x divide-white/20 rounded-[14px] border border-white/20 bg-black/40 py-3 backdrop-blur-md"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {trustStats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center px-1">
              <p
                className="text-[16px] font-semibold leading-none text-[#D4AF5A]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {stat.value}
              </p>
              <p className="mt-1 text-[9px] leading-tight text-white/80">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
