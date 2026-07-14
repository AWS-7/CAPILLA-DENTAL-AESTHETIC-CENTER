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

/** Desktop / tablet floating CTAs — hidden on phones (MobileBottomBar used instead). */
export default function FloatingButtons() {
  return (
    <div
      className="hidden md:flex fixed z-40 flex-col items-end gap-3 bottom-8 right-8"
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
            <span className="flex h-12 w-12 items-center justify-center" aria-hidden="true">
              <Icon size={20} />
            </span>
            <span className="hidden max-w-0 overflow-hidden whitespace-nowrap pr-0 text-sm font-medium opacity-0 transition-all duration-300 group-hover:max-w-[120px] group-hover:pr-4 group-hover:opacity-100 lg:block">
              {btn.label.split(' ')[0]}
            </span>
          </motion.span>
        );

        if (btn.to) {
          return (
            <Link key={btn.id} to={btn.to} aria-label={btn.label} onClick={btn.onTrack}>
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
