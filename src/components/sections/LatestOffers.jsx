import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Check, Clock, Flame, ArrowRight } from 'lucide-react';
import { Container, MobileSwiper } from '../common';
import { homeOffers } from '../../data/home';

const EASE = [0.25, 0.46, 0.45, 0.94];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

function OfferCard({ offer }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.35, ease: EASE }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[rgba(212,175,90,0.25)] bg-white/[0.05] p-7 backdrop-blur-xl transition-shadow duration-500 hover:border-[rgba(212,175,90,0.5)] hover:shadow-[0_24px_70px_-20px_rgba(212,175,90,0.45)]"
    >
      {/* Offer image */}
      <div className="relative h-[200px] overflow-hidden rounded-[20px] md:h-[180px]">
        <LazyLoadImage
          src={offer.image}
          alt={offer.title}
          effect="blur"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          wrapperClassName="block h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-gold-gradient px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-primary-black shadow-gold">
          <Flame size={12} />
          Limited Offer
        </span>
      </div>

      {/* Category */}
      <p
        className="mt-6 text-[14px] font-semibold uppercase tracking-[0.18em] text-gold"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {offer.category}
      </p>

      {/* Title */}
      <h3
        className="mt-2 text-[clamp(26px,3vw,32px)] font-bold leading-[1.15] text-primary-white"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {offer.title}
      </h3>

      {/* Description */}
      <p
        className="mt-3 line-clamp-3 text-[17px] font-light leading-relaxed text-[#CFCFCF]"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {offer.description}
      </p>

      {/* Price */}
      <div className="mt-6 flex flex-wrap items-end gap-x-3 gap-y-2">
        <span className="text-sm font-light text-primary-white/45 line-through">
          {offer.oldPrice}
        </span>
        <span
          className="text-[40px] font-bold leading-none text-gold"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {offer.offerPrice}
        </span>
        <span className="mb-1 inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
          {offer.savings}
        </span>
      </div>

      {/* Features */}
      <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {offer.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 text-sm font-light text-primary-white/75"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
              <Check size={12} strokeWidth={3} />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-auto pt-7">
        <Link
          to={offer.path}
          className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gold-gradient text-base font-semibold text-primary-black shadow-gold transition-all duration-300 hover:brightness-105 hover:shadow-[0_12px_40px_-8px_rgba(212,175,90,0.6)] active:scale-[0.97]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Book This Offer
          <ArrowRight size={18} />
        </Link>

        {/* Countdown-style badge */}
        <div className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-primary-white/55">
          <Clock size={13} className="text-gold" />
          <span>Offer Ends Soon</span>
          <span className="text-primary-white/25">•</span>
          <span>Limited Slots Available</span>
        </div>
      </div>
    </motion.article>
  );
}

export default function LatestOffers() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0B] py-[120px]">
      {/* Soft gold radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,175,90,0.14),transparent_55%)]" />
      {/* Floating blur elements */}
      <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-gold/[0.08] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-24 h-80 w-80 rounded-full bg-gold/[0.06] blur-3xl" />

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-gold"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            🔥 Limited Time Offers
          </span>

          <h2
            className="mt-5 text-[clamp(36px,5vw,56px)] font-bold leading-[1.1] text-primary-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Latest Offers
          </h2>

          <p
            className="mx-auto mt-4 max-w-xl text-[clamp(16px,2vw,18px)] font-light leading-relaxed text-[#BDBDBD]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Exclusive treatments at special prices. Book your consultation before
            the offer expires.
          </p>
        </motion.div>

        {/* Mobile: swiper carousel */}
        <div className="mt-12 md:hidden">
          <MobileSwiper
            slidesPerView={1.15}
            spaceBetween={16}
            freeMode
            loop
            autoplay={4000}
            lightPagination
            ariaLabel="Latest offers"
          >
            {homeOffers.map((offer) => (
              <div key={offer.id} className="h-full pb-2">
                <OfferCard offer={offer} />
              </div>
            ))}
          </MobileSwiper>
        </div>

        {/* Tablet & Desktop: grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 hidden gap-8 md:grid md:grid-cols-2 xl:grid-cols-3"
        >
          {homeOffers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
