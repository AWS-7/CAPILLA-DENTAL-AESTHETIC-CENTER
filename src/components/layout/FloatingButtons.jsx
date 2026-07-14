import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { clinicInfo } from '../../data/clinic';
import { trackingEvents } from '../../utils/analytics';

const buttons = [
  {
    id: 'whatsapp',
    label: 'Chat on WhatsApp',
    href: clinicInfo.whatsappHref,
    external: true,
    icon: MessageCircle,
    className: 'bg-[#25D366] text-primary-white hover:brightness-110',
    onTrack: trackingEvents.whatsappClick,
  },
  {
    id: 'call',
    label: 'Call Capilla clinic',
    href: clinicInfo.phoneHref,
    external: false,
    icon: Phone,
    className: 'bg-primary-black text-primary-white hover:bg-gold',
    onTrack: trackingEvents.phoneClick,
  },
  {
    id: 'book',
    label: 'Book an appointment',
    to: '/contact',
    icon: Calendar,
    className: 'bg-gold text-primary-white hover:bg-gold-dark shadow-gold',
    onTrack: trackingEvents.bookAppointmentClick,
  },
];

export default function FloatingButtons() {
  return (
    <div
      className="fixed z-40 flex flex-col items-end gap-2.5 right-3 bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] sm:right-5 sm:bottom-6 sm:gap-3 md:bottom-8 md:right-8"
      role="complementary"
      aria-label="Quick contact actions"
    >
      {buttons.map((btn, index) => {
        const Icon = btn.icon;
        const content = (
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 * index, duration: 0.4 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className={`group flex items-center gap-2 rounded-full shadow-premium transition-all duration-300 ${btn.className}`}
          >
            <span className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center" aria-hidden="true">
              <Icon size={18} className="sm:hidden" />
              <Icon size={20} className="hidden sm:block" />
            </span>
            <span className="hidden md:block max-w-0 overflow-hidden whitespace-nowrap pr-0 text-sm font-medium opacity-0 transition-all duration-300 group-hover:max-w-[120px] group-hover:pr-4 group-hover:opacity-100">
              {btn.label.split(' ')[0]}
            </span>
          </motion.span>
        );

        if (btn.to) {
          return (
            <Link
              key={btn.id}
              to={btn.to}
              aria-label={btn.label}
              onClick={btn.onTrack}
            >
              {content}
            </Link>
          );
        }

        return (
          <a
            key={btn.id}
            href={btn.href}
            aria-label={btn.label}
            target={btn.external ? '_blank' : undefined}
            rel={btn.external ? 'noopener noreferrer' : undefined}
            onClick={btn.onTrack}
          >
            {content}
          </a>
        );
      })}
    </div>
  );
}
