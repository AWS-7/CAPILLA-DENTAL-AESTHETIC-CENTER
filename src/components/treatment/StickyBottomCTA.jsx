import { motion } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function StickyBottomCTA({ onContactUs, onBookAppointment }) {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContact = () => {
    if (onContactUs) {
      onContactUs();
    } else {
      navigate('/contact');
    }
  };

  const handleBook = () => {
    if (onBookAppointment) {
      onBookAppointment();
    } else {
      navigate('/contact');
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-primary-white/95 backdrop-blur-glass border-t border-gold/20 safe-area-bottom"
    >
      <div className="mx-auto w-full max-w-container px-5 md:px-8 lg:px-12 py-4">
        <div className="flex gap-4">
          {/* Contact Us Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleContact}
            className="flex-1 flex items-center justify-center gap-2 bg-primary-white border-2 border-gold/30 text-primary-black px-6 py-4 rounded-2xl font-medium text-base md:text-lg hover:border-gold hover:bg-gold/5 transition-all duration-300"
          >
            <Phone size={20} className="md:hidden" />
            <span className="hidden md:inline">Contact Us</span>
            <span className="md:hidden">Contact</span>
          </motion.button>

          {/* Book Appointment Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleBook}
            className="flex-1 flex items-center justify-center gap-2 bg-gold text-primary-white px-6 py-4 rounded-2xl font-medium text-base md:text-lg hover:bg-gold-light transition-all duration-300 shadow-gold"
          >
            <Calendar size={20} className="md:hidden" />
            <span className="hidden md:inline">Book Appointment</span>
            <span className="md:hidden">Book Now</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
