import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { Star, Phone, MessageCircle, Sparkles } from 'lucide-react';
import { PrimaryButton, SecondaryButton, AnimatedCounter } from '../../common';
import { clinicInfo } from '../../../data/clinic';
import HeroBackground from './HeroBackground';

const DESCRIPTION =
  'A luxury multi-specialty clinic in Perumbakkam offering advanced dentistry, medical-grade skin therapies, and hair restoration — delivered with clinical precision and refined care.';

const SPRING = { stiffness: 120, damping: 18, mass: 0.4 };

const container3d = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const pop3d = {
  hidden: { opacity: 0, y: 40, rotateX: -35 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * HeroDesktop (≥1024px) — premium centered layout with interactive 3D motion.
 * Mouse-driven perspective tilt + parallax depth orbs + 3D pop-in entrance.
 */
export default function HeroDesktop() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), SPRING);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), SPRING);

  // Parallax depth for floating orbs
  const orbAX = useSpring(useTransform(mx, [-0.5, 0.5], [-40, 40]), SPRING);
  const orbAY = useSpring(useTransform(my, [-0.5, 0.5], [-30, 30]), SPRING);
  const orbBX = useSpring(useTransform(mx, [-0.5, 0.5], [55, -55]), SPRING);
  const orbBY = useSpring(useTransform(my, [-0.5, 0.5], [40, -40]), SPRING);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      id="hero"
      data-hero
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[96vh] overflow-hidden [perspective:1200px] xl:min-h-screen"
    >
      {/* Rotating clinic photo background */}
      <HeroBackground />
      {/* Readability overlays */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_15%,rgba(200,164,93,0.12),transparent_55%)]" />

      {/* Floating 3D depth orbs */}
      <motion.div
        aria-hidden="true"
        style={{ x: orbAX, y: orbAY }}
        className="pointer-events-none absolute left-[8%] top-[22%] z-[5]"
      >
        <motion.div
          animate={{ y: [0, -22, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="h-28 w-28 rounded-full border border-gold/30 bg-gold/[0.08] shadow-[0_0_60px_rgba(212,175,90,0.35)] backdrop-blur-sm"
        />
      </motion.div>
      <motion.div
        aria-hidden="true"
        style={{ x: orbBX, y: orbBY }}
        className="pointer-events-none absolute right-[10%] top-[30%] z-[5]"
      >
        <motion.div
          animate={{ y: [0, 26, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="h-40 w-40 rounded-[2rem] border border-gold/25 bg-gold/[0.06] shadow-[0_0_70px_rgba(212,175,90,0.28)] backdrop-blur-sm"
        />
      </motion.div>
      <motion.div
        aria-hidden="true"
        style={{ x: orbBX, y: orbAY }}
        className="pointer-events-none absolute bottom-[16%] left-[16%] z-[5]"
      >
        <motion.div
          animate={{ y: [0, 18, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="h-16 w-16 rounded-full border border-gold/40 bg-gold/[0.1] shadow-[0_0_40px_rgba(212,175,90,0.4)]"
        />
      </motion.div>

      <motion.div
        variants={container3d}
        initial="hidden"
        animate="visible"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative z-10 mx-auto flex min-h-[96vh] w-full max-w-[1200px] flex-col items-center justify-center px-6 pb-16 pt-[calc(var(--header-height)+2rem)] text-center xl:min-h-screen xl:pb-20"
      >
        <motion.p
          variants={pop3d}
          className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-gold"
        >
          <Sparkles size={14} />
          Premium Dental, Skin & Hair Care in Perumbakkam
        </motion.p>

        <motion.h1
          variants={pop3d}
          style={{ z: 60 }}
          className="whitespace-nowrap font-display text-[clamp(2.5rem,4.6vw,4rem)] font-bold leading-[1.1] text-primary-white [text-shadow:0_10px_40px_rgba(0,0,0,0.5)]"
        >
          Capilla Dental <span className="text-gold">&amp; Aesthetic Center</span>
        </motion.h1>

        <motion.p
          variants={pop3d}
          style={{ z: 40 }}
          className="mt-6 whitespace-nowrap font-display text-[clamp(1.4rem,2.6vw,2.2rem)] leading-[1.2] text-primary-white/90"
        >
          Smile Brighter. Glow Naturally.{' '}
          <span className="text-gold-light">Restore Your Confidence.</span>
        </motion.p>

        <motion.p
          variants={pop3d}
          className="mx-auto mt-6 max-w-[640px] text-lg font-light leading-relaxed text-primary-white/65"
        >
          {DESCRIPTION}
        </motion.p>

        <motion.div
          variants={pop3d}
          style={{ z: 50 }}
          className="mt-8 flex flex-row flex-wrap items-stretch justify-center gap-3"
        >
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
        </motion.div>

        <motion.div
          variants={pop3d}
          style={{ z: 30 }}
          className="mx-auto mt-10 grid w-full max-w-[720px] grid-cols-2 gap-3 sm:grid-cols-4"
        >
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
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[8] h-14 bg-gradient-to-t from-primary-white to-transparent" />
    </section>
  );
}
