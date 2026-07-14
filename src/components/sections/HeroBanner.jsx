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
      className="relative min-h-screen w-full overflow-hidden bg-dark-bg"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#151515] to-[#1a160f]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(200,164,93,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(200,164,93,0.08),transparent_40%)]" />
      </motion.div>

      {floatingEls.map((el, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full border border-gold/25 bg-gold/10 backdrop-blur-sm"
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
        className="relative z-10 container-premium flex min-h-screen items-center pt-[var(--header-height)] pb-16"
      >
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            <p className="mb-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-gold">
              <Sparkles size={14} />
              Premium Dental, Skin & Hair Care in Perumbakkam
            </p>

            <h1 className="font-display text-primary-white">
              <span className="block text-4xl leading-[1.08] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
                Capilla Dental
              </span>
              <span className="mt-1 block text-3xl leading-[1.1] text-gold sm:text-4xl md:text-5xl lg:text-[3.5rem]">
                & Aesthetic Center
              </span>
            </h1>

            <div className="mt-6 space-y-1 font-display text-2xl text-primary-white/90 sm:text-3xl md:text-[2.35rem]">
              <p>Smile Brighter.</p>
              <p>Glow Naturally.</p>
              <p className="text-gold-light">Restore Your Confidence.</p>
            </div>

            <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-primary-white/65 md:text-lg">
              A luxury multi-specialty clinic in Perumbakkam offering advanced
              dentistry, medical-grade skin therapies, and hair restoration —
              delivered with clinical precision and refined care.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <PrimaryButton to="/contact" variant="gold" size="lg">
                Book Appointment
              </PrimaryButton>
              <SecondaryButton
                href={clinicInfo.whatsappHref}
                external
                variant="light"
                size="lg"
              >
                <MessageCircle size={18} />
                WhatsApp Consultation
              </SecondaryButton>
              <SecondaryButton
                href={clinicInfo.phoneHref}
                variant="light"
                size="md"
                className="border-primary-white/25"
              >
                <Phone size={16} />
                Call Now
              </SecondaryButton>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 border-t border-primary-white/10 pt-8">
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
                <p className="font-display text-2xl text-primary-white md:text-3xl">
                  Modern
                </p>
                <p className="mt-2 text-sm font-light text-primary-white/50">
                  Equipment
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-[2rem] bg-gold-gradient opacity-20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-primary-white/10 shadow-premium aspect-[3/4] max-h-[70vh]">
                <LazyLoadImage
                  src={placeholders.doctor}
                  alt="Capilla Dental specialist — premium care in Perumbakkam"
                  effect="blur"
                  className="h-full w-full object-cover"
                  wrapperClassName="h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold-light">
                    Clinical Excellence
                  </p>
                  <p className="mt-1 font-display text-2xl text-primary-white">
                    Trusted Specialists
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary-white to-transparent" />
    </section>
  );
}
