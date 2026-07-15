import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Cpu,
  ShieldCheck,
  Clock,
  Star,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { Container, SectionTitle } from '../common';
import { whyChooseItems } from '../../data/home';
import { placeholders } from '../../data/content';

const tileBase =
  'group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm transition-all duration-500 hover:border-gold/40 hover:bg-white/[0.06]';

const tileMotion = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

function GlowCorner() {
  return (
    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/10 blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
  );
}

export default function WhyChoose() {
  return (
    <section className="section-padding relative overflow-hidden bg-[#0B0B0B]">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(200,164,93,0.12),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_90%_100%,rgba(200,164,93,0.08),transparent_45%)]" />

      <Container className="relative z-10">
        <SectionTitle
          light
          eyebrow="Why Capilla"
          title="The Capilla Standard"
          description="Not just a clinic — a destination. Every detail engineered for people who expect the exceptional."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.08 }}
          className="grid auto-rows-[minmax(150px,auto)] grid-cols-2 gap-4 md:grid-cols-4 md:gap-5"
        >
          {/* Feature image tile */}
          <motion.div
            variants={tileMotion}
            className={`${tileBase} col-span-2 row-span-2 min-h-[340px] md:min-h-[420px]`}
          >
            <img
              src={placeholders.clinicInterior}
              alt="Capilla clinic interior"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-transparent" />
            <div className="relative flex h-full flex-col justify-end p-6 md:p-8">
              <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-[#0B0B0B]/60 px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold backdrop-blur-md">
                <Sparkles size={12} />
                Luxury Patient Experience
              </span>
              <h3 className="font-display text-3xl leading-tight text-primary-white md:text-4xl">
                Excellence you can
                <span className="text-gold"> feel</span>.
              </h3>
              <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-primary-white/60">
                Calm interiors, attentive hosts, and hospital-grade standards —
                a clinic experience designed entirely around you.
              </p>
              <Link
                to="/about"
                className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-light"
              >
                Explore the clinic
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </motion.div>

          {/* Stat — years */}
          <motion.div
            variants={tileMotion}
            className={`${tileBase} flex flex-col justify-between p-5 md:p-6`}
          >
            <GlowCorner />
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-primary-white/40">
              Since 2014
            </span>
            <div>
              <p className="font-display text-5xl leading-none text-gold md:text-6xl">
                10+
              </p>
              <p className="mt-2 text-xs font-light text-primary-white/60 md:text-sm">
                Years of clinical excellence
              </p>
            </div>
          </motion.div>

          {/* Stat — patients */}
          <motion.div
            variants={tileMotion}
            className={`${tileBase} flex flex-col justify-between p-5 md:p-6`}
          >
            <GlowCorner />
            <div className="flex gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} className="fill-gold" />
              ))}
            </div>
            <div>
              <p className="font-display text-5xl leading-none text-gold md:text-6xl">
                5000+
              </p>
              <p className="mt-2 text-xs font-light text-primary-white/60 md:text-sm">
                Happy patients &amp; counting
              </p>
            </div>
          </motion.div>

          {/* Technology */}
          <motion.div
            variants={tileMotion}
            className={`${tileBase} col-span-2 flex flex-col justify-between p-5 md:p-6`}
          >
            <GlowCorner />
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-gold">
              <Cpu size={20} strokeWidth={1.8} />
            </span>
            <div className="mt-4">
              <h3 className="font-display text-xl text-primary-white md:text-2xl">
                Advanced Technology
              </h3>
              <p className="mt-1.5 text-xs font-light leading-relaxed text-primary-white/55 md:text-sm">
                Digital diagnostics and precision-guided treatment systems for
                safer, faster, more predictable outcomes.
              </p>
            </div>
          </motion.div>

          {/* Sterile */}
          <motion.div
            variants={tileMotion}
            className={`${tileBase} flex flex-col justify-between p-5 md:p-6`}
          >
            <GlowCorner />
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-gold">
              <ShieldCheck size={20} strokeWidth={1.8} />
            </span>
            <div className="mt-4">
              <h3 className="font-display text-lg leading-snug text-primary-white md:text-xl">
                Sterile Environment
              </h3>
              <p className="mt-1.5 text-xs font-light leading-relaxed text-primary-white/55">
                Hospital-grade sterilization for complete peace of mind.
              </p>
            </div>
          </motion.div>

          {/* Same day */}
          <motion.div
            variants={tileMotion}
            className={`${tileBase} flex flex-col justify-between p-5 md:p-6`}
          >
            <GlowCorner />
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-gold">
              <Clock size={20} strokeWidth={1.8} />
            </span>
            <div className="mt-4">
              <h3 className="font-display text-lg leading-snug text-primary-white md:text-xl">
                Same-Day Consultation
              </h3>
              <p className="mt-1.5 text-xs font-light leading-relaxed text-primary-white/55">
                Prompt evaluations when you need clarity fast.
              </p>
            </div>
          </motion.div>

          {/* Specialties */}
          <motion.div
            variants={tileMotion}
            className={`${tileBase} col-span-2 flex flex-col justify-center p-6 md:p-8`}
          >
            <GlowCorner />
            <p className="font-display text-2xl leading-snug text-primary-white md:text-3xl">
              <span className="text-gold">3 specialties.</span> One refined
              roof.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                ['Dental', '/dental'],
                ['Skin', '/skin'],
                ['Hair', '/hair'],
              ].map(([label, path]) => (
                <Link
                  key={label}
                  to={path}
                  className="rounded-full border border-white/15 px-4 py-1.5 text-xs font-medium text-primary-white/75 transition-all duration-300 hover:border-gold hover:text-gold"
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Marquee strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mt-12 border-y border-white/[0.07] py-5 md:mt-16"
      >
        <div className="marquee-track flex w-max items-center gap-8">
          {[...whyChooseItems, ...whyChooseItems].map((item, i) => (
            <span
              key={`${item.id}-${i}`}
              className="flex shrink-0 items-center gap-8 whitespace-nowrap"
            >
              <span className="font-display text-lg text-primary-white/45 md:text-xl">
                {item.title}
              </span>
              <span className="text-[8px] text-gold">◆</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
