import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { clinicInfo } from '../../data/clinic';

/** Fixed Instagram CTA — vertically centered on the right (mobile + desktop). */
export default function FloatingInstagram() {
  const href = clinicInfo.social.instagram;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow Capilla on Instagram"
      className="fixed right-3 sm:right-4 top-1/2 z-[44] -translate-y-1/2 md:right-5"
    >
      <motion.span
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-primary-white shadow-[0_8px_28px_rgba(238,42,123,0.35)] transition-[filter,transform] hover:brightness-110 sm:h-[52px] sm:w-[52px]"
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.35, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
      >
        <Instagram size={22} strokeWidth={2} aria-hidden />
      </motion.span>
    </a>
  );
}
