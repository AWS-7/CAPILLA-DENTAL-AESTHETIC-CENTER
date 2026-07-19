import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Sparkles, Calendar, Check } from 'lucide-react';
import { useBookingModal } from '../../context/BookingModalProvider';

const SESSION_KEY = 'capilla-promo-seen';
const DELAY_MS = 10000;

const perks = [
  'Free Doctor Consultation',
  'Up to 40% Off Select Treatments',
  'Priority Same-Day Slots',
];

/**
 * Timed promotional popup — appears ~10s after entry, once per session.
 * CTA opens the shared booking modal.
 */
export default function PromoPopup() {
  const [open, setOpen] = useState(false);
  const { openBooking } = useBookingModal();

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    if (window.sessionStorage.getItem(SESSION_KEY)) return undefined;

    const timer = setTimeout(() => {
      setOpen(true);
      try {
        window.sessionStorage.setItem(SESSION_KEY, '1');
      } catch {
        /* ignore */
      }
    }, DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  const close = () => setOpen(false);

  const handleBook = () => {
    setOpen(false);
    openBooking();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[65] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="absolute inset-0 bg-primary-black/80"
            onClick={close}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Special offer"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-sm overflow-hidden rounded-3xl border border-gold/25 bg-[#0B0B0B] text-center shadow-premium"
          >
            {/* Ambient gold glows */}
            <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-gold/[0.14] blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-gold/[0.1] blur-3xl" />

            <button
              type="button"
              onClick={close}
              aria-label="Close offer"
              className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-primary-white/15 text-primary-white/70 transition-colors hover:text-primary-white"
            >
              <X size={18} />
            </button>

            <div className="relative px-6 pb-6 pt-9">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                <Sparkles size={13} />
                Limited Time Offer
              </span>

              <h3 className="mt-4 font-display text-[1.9rem] leading-tight text-primary-white">
                Grand Aesthetic <span className="text-gold">Offer</span>
              </h3>
              <p className="mx-auto mt-2 max-w-[280px] text-sm font-light leading-relaxed text-primary-white/60">
                Book your visit to Capilla today and unlock exclusive savings on
                dental, skin &amp; hair treatments.
              </p>

              <ul className="mx-auto mt-5 flex max-w-[260px] flex-col gap-2.5 text-left">
                {perks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-center gap-2.5 text-sm font-light text-primary-white/80"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <Check size={12} />
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={handleBook}
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-gold-gradient py-3.5 text-base font-semibold text-primary-black shadow-gold transition-transform active:scale-[0.98]"
              >
                <Calendar size={18} />
                Claim This Offer
              </button>
              <button
                type="button"
                onClick={close}
                className="mt-3 text-xs font-light text-primary-white/45 transition-colors hover:text-primary-white/70"
              >
                Maybe later
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
