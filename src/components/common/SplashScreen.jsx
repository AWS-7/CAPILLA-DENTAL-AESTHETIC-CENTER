import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const SESSION_KEY = 'capilla-splash-v2';
const SPLASH_MS = 1900;
const MOBILE_MQ = '(max-width: 767px)';

/**
 * Premium mobile splash — new Capilla brand logo.
 * Once per browser session · mobile only · desktop bypass.
 */
export default function SplashScreen() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isMobile = window.matchMedia(MOBILE_MQ).matches;
    const seen = sessionStorage.getItem(SESSION_KEY) === '1';

    if (!isMobile || seen) return;

    setShow(true);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const timer = window.setTimeout(() => {
      setShow(false);
      sessionStorage.setItem(SESSION_KEY, '1');
      document.body.style.overflow = prevOverflow || '';
    }, SPLASH_MS);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = prevOverflow || '';
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="capilla-splash-v2"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#FFFFFF] md:hidden"
          role="dialog"
          aria-label="Capilla Dental & Aesthetic Center"
          aria-live="polite"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src="/splash-logo.png"
            alt="Capilla Dental & Aesthetic Center"
            width={160}
            height={160}
            decoding="async"
            fetchPriority="high"
            className="h-[120px] w-auto max-h-[140px] max-w-[160px] object-contain object-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            draggable={false}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
