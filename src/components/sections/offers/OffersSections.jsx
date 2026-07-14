import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ArrowRight } from 'lucide-react';
import {
  Container,
  SectionTitle,
  PrimaryButton,
} from '../../common';
import { offersList } from '../../../data/offersPage';
import { staggerContainer, staggerItem } from '../../../utils/animations';
import { trackingEvents } from '../../../utils/analytics';

export function OffersGrid() {
  return (
    <section className="section-padding bg-primary-white">
      <Container>
        <SectionTitle
          eyebrow="Packages"
          title="Current Offers"
          description="Limited seasonal advantages on signature treatments — confirm eligibility when you book."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {offersList.map((offer) => (
            <motion.div key={offer.id} variants={staggerItem}>
              <article className="group h-full overflow-hidden rounded-3xl border border-border bg-primary-white shadow-soft hover:shadow-premium transition-shadow">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <motion.div className="h-full w-full" whileHover={{ scale: 1.06 }} transition={{ duration: 0.6 }}>
                    <LazyLoadImage
                      src={offer.image}
                      alt={offer.title}
                      effect="blur"
                      className="h-full w-full object-cover"
                      wrapperClassName="h-full w-full"
                    />
                  </motion.div>
                  <span className="absolute top-4 left-4 rounded-full bg-primary-black/80 px-3 py-1 text-[10px] uppercase tracking-wider text-primary-white">
                    {offer.badge}
                  </span>
                  <span className="absolute top-4 right-4 rounded-full bg-gold px-3 py-1.5 text-xs font-semibold text-primary-white shadow-gold">
                    {offer.discount}
                  </span>
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="font-display text-2xl text-primary-black group-hover:text-gold transition-colors">
                    {offer.title}
                  </h3>
                  <p className="mt-3 text-sm font-light text-dark-bg/55 leading-relaxed">
                    {offer.description}
                  </p>
                  <p className="mt-4 text-xs text-dark-bg/40">Valid until {offer.validUntil}</p>
                  <div className="mt-5">
                    <PrimaryButton
                      to={offer.path}
                      variant="gold"
                      size="sm"
                      onClick={() => trackingEvents.offerClaim(offer.title)}
                    >
                      Book Now
                      <ArrowRight size={14} />
                    </PrimaryButton>
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export function OffersCountdownBanner() {
  const [time, setTime] = useState({ d: 12, h: 8, m: 24, s: 59 });

  useEffect(() => {
    const id = setInterval(() => {
      setTime((t) => {
        let { d, h, m, s } = t;
        if (s > 0) s -= 1;
        else {
          s = 59;
          if (m > 0) m -= 1;
          else {
            m = 59;
            if (h > 0) h -= 1;
            else {
              h = 23;
              d = Math.max(0, d - 1);
            }
          }
        }
        return { d, h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const cells = [
    { label: 'Days', value: time.d },
    { label: 'Hours', value: time.h },
    { label: 'Mins', value: time.m },
    { label: 'Secs', value: time.s },
  ];

  return (
    <section className="section-padding bg-dark-bg">
      <Container>
        <div className="relative overflow-hidden rounded-3xl md:rounded-4xl border border-primary-white/10 px-4 py-10 sm:px-8 sm:py-12 md:px-14 md:py-16 text-center">
          <div className="absolute inset-0 bg-gold-gradient opacity-10 pointer-events-none" />
          <p className="relative text-xs uppercase tracking-[0.22em] text-gold mb-3">Limited Time</p>
          <h2 className="relative font-display text-[1.65rem] leading-tight sm:text-3xl md:text-5xl text-primary-white break-safe">
            Festival Offer Window Closing Soon
          </h2>
          <p className="relative mt-4 text-primary-white/55 font-light max-w-xl mx-auto text-sm sm:text-base">
            Countdown placeholder for seasonal campaigns — replace target date in production.
          </p>
          <div className="relative mt-8 sm:mt-10 grid grid-cols-4 gap-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-3 md:gap-5">
            {cells.map((c) => (
              <div
                key={c.label}
                className="min-w-0 rounded-2xl border border-primary-white/15 bg-primary-white/5 px-2 py-3 sm:min-w-[72px] sm:px-4 sm:py-4"
              >
                <p className="font-display text-2xl sm:text-3xl md:text-4xl text-gold">
                  {String(c.value).padStart(2, '0')}
                </p>
                <p className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-widest text-primary-white/45">
                  {c.label}
                </p>
              </div>
            ))}
          </div>
          <div className="relative mt-8 sm:mt-10 flex justify-center">
            <PrimaryButton
              to="/contact"
              variant="gold"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => trackingEvents.offerClaim('Festival Offer Window')}
            >
              Claim Offer Now
            </PrimaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
