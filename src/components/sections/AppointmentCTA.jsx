import { motion } from 'framer-motion';
import {
  Sparkles,
  ShieldCheck,
  Clock,
  Stethoscope,
} from 'lucide-react';
import { Container, GlobalCTA } from '../common';
import { clinicInfo } from '../../data/clinic';
import { fadeUp } from '../../utils/animations';

const highlights = [
  {
    icon: Stethoscope,
    title: 'Expert Specialists',
    text: 'Consult experienced dental, skin & hair doctors.',
  },
  {
    icon: ShieldCheck,
    title: 'Personalised Plan',
    text: 'A transparent treatment roadmap made for you.',
  },
  {
    icon: Clock,
    title: 'Same-Day Slots',
    text: 'Flexible appointments when availability allows.',
  },
];

export default function AppointmentCTA() {
  return (
    <section className="section-padding bg-primary-white">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative overflow-hidden rounded-3xl border border-gold/20 bg-[#0B0B0B] px-5 py-14 sm:px-8 md:rounded-[2.5rem] md:px-16 md:py-20"
        >
          {/* Ambient gold glows */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gold/[0.12] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-gold/[0.08] blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,175,90,0.1),transparent_55%)]" />

          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
            <span
              className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <Sparkles size={14} />
              Private Consultation
            </span>

            <h2 className="mt-6 font-display text-[clamp(1.9rem,5vw,3.25rem)] font-bold leading-[1.12] text-primary-white">
              Book Your Consultation Today
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base font-light leading-relaxed text-primary-white/60 md:text-lg">
              Begin your transformation with a specialist consultation at Capilla —
              the premium dental, skin &amp; hair clinic in Perumbakkam and Salem.
            </p>

            {/* Highlights */}
            <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
              {highlights.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-primary-white/[0.1] bg-primary-white/[0.04] p-5 text-left backdrop-blur-sm"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <Icon size={18} />
                  </span>
                  <p className="mt-3 font-display text-lg text-primary-white">
                    {title}
                  </p>
                  <p className="mt-1 text-sm font-light leading-relaxed text-primary-white/55">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex w-full items-center justify-center">
              <GlobalCTA />
            </div>

            {/* Branch phone numbers */}
            <div className="mt-8 flex flex-col items-center gap-2 text-sm text-primary-white/55 sm:flex-row sm:gap-6">
              {clinicInfo.locations.map((loc) => (
                <a
                  key={loc.id}
                  href={loc.phoneHref}
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold"
                >
                  <Phone size={14} className="text-gold" />
                  <span className="font-medium text-primary-white/80">
                    {loc.label}:
                  </span>
                  {loc.phone}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
