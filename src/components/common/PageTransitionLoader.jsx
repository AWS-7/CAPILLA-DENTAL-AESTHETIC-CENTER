import { motion, AnimatePresence } from 'framer-motion';

export default function PageTransitionLoader({ isLoading }) {
  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: 'linear' }}
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-primary-white will-change-opacity"
        >
          <div className="relative flex flex-col items-center">
            <motion.img
              src="/logo-new.png"
              alt="Capilla Dental & Aesthetic Center"
              width={80}
              height={80}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="h-[70px] w-auto max-w-[80px] object-contain rounded-full will-change-transform"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
