import { AnimatePresence, motion } from 'framer-motion';
import { Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Premium cookie consent banner.
 * Controlled by App via `decided`; calls onAccept / onDecline.
 * Analytics scripts load only after consent is granted.
 */
export default function CookieConsent({ decided, onAccept, onDecline }) {
  return (
    <AnimatePresence>
      {!decided && (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-label="Cookie consent"
          className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-xl rounded-2xl border border-gold/25 bg-[#0B0B0B]/95 p-4 shadow-premium backdrop-blur-md sm:inset-x-4 sm:bottom-4 sm:p-5"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
              <Cookie size={20} />
            </span>
            <p className="flex-1 text-sm font-light leading-relaxed text-primary-white/70">
              We use cookies to improve your experience and analyse site traffic.
              See our{' '}
              <Link to="/privacy-policy" className="font-medium text-gold hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
            <div className="flex shrink-0 gap-2.5">
              <button
                type="button"
                onClick={onDecline}
                className="rounded-full border border-primary-white/20 px-4 py-2 text-sm font-medium text-primary-white/80 transition-colors hover:border-primary-white/40 hover:text-primary-white"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={onAccept}
                className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-primary-black transition-transform hover:-translate-y-0.5"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
