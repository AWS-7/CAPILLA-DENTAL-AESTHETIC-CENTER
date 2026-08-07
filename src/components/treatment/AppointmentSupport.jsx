import { motion } from 'framer-motion';
import { Phone, HeadsetIcon } from 'lucide-react';
import { fadeUp } from '../../utils/animations';

export default function AppointmentSupport({ phoneNumber = '+91 98765 43210', description = 'Our team is ready to assist you with booking appointments and answering your questions.' }) {
  const handleCall = () => {
    window.open(`tel:${phoneNumber.replace(/\s/g, '')}`);
  };

  return (
    <section className="section-padding bg-light-bg">
      <div className="mx-auto w-full max-w-container px-5 md:px-8 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-3xl border border-gold/30 bg-dark-bg p-8 md:p-10 lg:p-12 shadow-premium relative overflow-hidden"
        >
          {/* Floating Support Icon */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -right-8 -top-8 opacity-10"
          >
            <HeadsetIcon size={200} className="text-gold" />
          </motion.div>

          <div className="relative z-10">
            {/* Section Title */}
            <div className="mb-6">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-primary-white mb-2">
                Appointment Support
              </h2>
              <p className="text-base md:text-lg font-light text-primary-white/70 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Phone Number */}
            <div className="mb-8">
              <a
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                className="font-display text-3xl md:text-4xl lg:text-5xl text-gold hover:text-gold-light transition-colors duration-300"
              >
                {phoneNumber}
              </a>
            </div>

            {/* Call Now Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCall}
              className="inline-flex items-center gap-3 bg-gold text-primary-white px-8 py-4 rounded-2xl font-medium text-lg hover:bg-gold-light transition-all duration-300 shadow-gold"
            >
              <Phone size={24} />
              Call Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
