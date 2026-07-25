import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function PageTransitionLoader({ isLoading }) {
  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'linear' }}
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-gradient-to-br from-primary-white via-gold/5 to-primary-white will-change-opacity"
        >
          <div className="relative flex flex-col items-center">
            {/* Animated ring */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-gold/20 border-t-gold"
                style={{ width: '140px', height: '140px' }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-gold/10 border-b-gold/30"
                style={{ width: '120px', height: '120px', left: '10px', top: '10px' }}
              />
              <motion.img
                src="/logo-new.png"
                alt="Capilla Dental & Aesthetic Center"
                width={100}
                height={100}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="relative z-10 h-[90px] w-auto max-w-[100px] object-contain rounded-full will-change-transform"
                style={{ willChange: 'transform, opacity' }}
              />
            </motion.div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-6 text-center"
            >
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-sm font-medium text-dark-bg/70"
              >
                Loading your experience...
              </motion.p>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '120px' }}
                exit={{ width: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-2 h-0.5 bg-gradient-to-r from-gold to-gold-light rounded-full"
              />
            </motion.div>

            {/* Decorative sparkles */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-8 -right-8"
            >
              <Sparkles size={24} className="text-gold/40" />
            </motion.div>
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-6 -left-6"
            >
              <Sparkles size={20} className="text-gold/30" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
