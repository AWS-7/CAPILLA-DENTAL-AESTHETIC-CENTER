import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Phone,
  MessageCircle,
  Calendar,
  Sparkles,
  Star,
} from 'lucide-react';
import { clinicInfo } from '../../../data/clinic';

const GOLD = '#D4AF5A';
// ⚠️ Use a CLEAN photo (no baked-in text/logo on it) for best results
const HERO_BG_IMAGE = '/gallery/hero-mobile-bg.png';
const EASE = [0.25, 0.46, 0.45, 0.94];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};
const blurReveal = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE } },
};
const stagger = (delay = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: delay } },
});

/**
 * HeroMobile — clean, premium mobile hero (320–767px)
 * Layout: badge → rating → headline → taglines → specialties → description → CTAs
 */
export default function HeroMobile() {
  return (
    <section
      id="hero"
      data-hero
      className="relative w-full min-h-screen overflow-hidden bg-[#0B0B0B]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG_IMAGE}
          alt="Capilla Dental & Aesthetic Center clinic interior"
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
        {/* Stronger, cleaner overlay so text always reads clearly */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/85" />
      </div>

      <div className="relative z-10 flex w-full flex-col items-center px-5 pt-[calc(var(--header-height)+20px)] pb-10 text-center">

        {/* ── Badge + Rating row ── */}
        <motion.div
          variants={stagger(0)}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-2"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-[#D4AF5A]/40 bg-white/[0.10] px-4 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.18em] text-[#D4AF5A] backdrop-blur-md"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <Sparkles size={11} />
            Premium Multi-Specialty Clinic
          </motion.span>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-1.5 text-[12px] font-medium text-white/90"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <div className="flex items-center gap-0.5 text-[#D4AF5A]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="#D4AF5A" strokeWidth={0} />
              ))}
            </div>
            <span>5.0</span>
            <span className="text-white/50">·</span>
            <span className="text-white/70">15 Google Reviews</span>
          </motion.div>
        </motion.div>

        {/* ── Main Headline ── */}
        <motion.div
          variants={blurReveal}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
          className="mt-5 rounded-2xl border border-white/10 bg-black/30 px-6 py-4 backdrop-blur-xl"
        >
          <h1
            className="text-[clamp(22px,6.5vw,28px)] font-bold leading-[1.25] tracking-[-0.5px] text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.8)]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Capilla Dental & Aesthetic Center
          </h1>
        </motion.div>

        {/* ── Supporting Taglines ── */}
        <motion.div
          variants={stagger(0.3)}
          initial="hidden"
          animate="visible"
          className="mt-3 flex flex-col items-center gap-0.5"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <motion.p
            variants={fadeUp}
            className="text-[clamp(16px,4.5vw,19px)] font-medium leading-[1.3] text-white/95 [text-shadow:0_2px_14px_rgba(0,0,0,0.7)]"
          >
            Smile Brighter. Glow Naturally.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-[clamp(16px,4.5vw,19px)] font-medium leading-[1.3] text-[#D4AF5A] [text-shadow:0_2px_14px_rgba(0,0,0,0.7)]"
          >
            Restore Your Confidence.
          </motion.p>
        </motion.div>

        {/* ── Specialty pills (SKIN · DENTAL · HAIR) ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.45 }}
          className="mt-4 flex items-center gap-2"
        >
          {['SKIN', 'DENTAL', 'HAIR'].map((item, i) => (
            <span
              key={item}
              className="rounded-full border border-white/20 bg-white/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/85 backdrop-blur-sm"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {item}
            </span>
          ))}
        </motion.div>

        {/* ── Description ── */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.55 }}
          className="mt-4 w-full text-[clamp(13.5px,4vw,15px)] font-normal leading-[1.7] text-[#F0F0F0]/90 [text-shadow:0_1px_10px_rgba(0,0,0,0.6)]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Advanced dentistry, medical-grade skin therapies and hair restoration in Perumbakkam.
        </motion.p>

        {/* ── Primary CTA: Book Appointment ── */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.65 }}
          className="mt-7 w-full"
        >
          <Link
            to="/contact"
            className="flex h-[58px] w-full items-center justify-center gap-3 rounded-[20px] text-[16.5px] font-semibold text-[#0B0B0B] shadow-gold transition-all duration-300 active:scale-[0.96]"
            style={{
              fontFamily: "'Poppins', sans-serif",
              background: `linear-gradient(135deg, ${GOLD} 0%, #E2C27B 50%, #C09A45 100%)`,
            }}
          >
            <Calendar size={19} />
            Book Appointment
          </Link>
        </motion.div>

        {/* ── Secondary CTAs: WhatsApp & Call Now ── */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.75 }}
          className="mt-3 flex w-full gap-3"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <a
            href={clinicInfo.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[50px] flex-1 items-center justify-center gap-2 rounded-[18px] border border-white/25 bg-white/[0.07] text-[14px] font-semibold text-white backdrop-blur-sm transition-all duration-300 active:scale-[0.96] active:border-[#D4AF5A] active:bg-white/[0.12]"
          >
            <MessageCircle size={17} className="text-[#25D366]" />
            WhatsApp
          </a>
          <a
            href={clinicInfo.phoneHref}
            className="flex h-[50px] flex-1 items-center justify-center gap-2 rounded-[18px] border border-white/25 bg-white/[0.07] text-[14px] font-semibold text-white backdrop-blur-sm transition-all duration-300 active:scale-[0.96] active:border-[#D4AF5A] active:bg-white/[0.12]"
          >
            <Phone size={16} className="text-[#D4AF5A]" />
            Call Now
          </a>
        </motion.div>

        {/* ── Address / hours line ── */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.85 }}
          className="mt-4 max-w-[280px] text-[11.5px] leading-[1.5] text-white/60"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Indra Priyadarshini Nagar, Perumbakkam, Chennai — Open until 8 PM
        </motion.p>

        {/* ── Marquee Text Animation ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
          className="mt-4 w-full overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl"
        >
          <div className="relative flex w-full py-3">
            <motion.div
              animate={{
                x: [0, -1000],
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
              className="flex whitespace-nowrap"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#D4AF5A]/90">
                DENTAL CARE • SKIN CARE • HAIR CARE • PREMIUM CLINIC • DENTAL CARE • SKIN CARE • HAIR CARE • PREMIUM CLINIC • DENTAL CARE • SKIN CARE • HAIR CARE • PREMIUM CLINIC •
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Seam into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-primary-white to-transparent" />
    </section>
  );
}