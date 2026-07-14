import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { clinicInfo } from '../../data/clinic';

const buttons = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: clinicInfo.whatsappHref,
    external: true,
    icon: MessageCircle,
    className: 'bg-[#25D366] text-primary-white hover:brightness-110',
  },
  {
    id: 'call',
    label: 'Call',
    href: clinicInfo.phoneHref,
    external: false,
    icon: Phone,
    className: 'bg-primary-black text-primary-white hover:bg-gold',
  },
  {
    id: 'book',
    label: 'Book',
    to: '/contact',
    icon: Calendar,
    className: 'bg-gold text-primary-white hover:bg-gold-dark shadow-gold',
  },
];

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 md:bottom-8 md:right-8">
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
            <span className="flex h-12 w-12 items-center justify-center">
              <Icon size={20} />
            </span>
            <span className="hidden sm:block max-w-0 overflow-hidden whitespace-nowrap pr-0 text-sm font-medium opacity-0 transition-all duration-300 group-hover:max-w-[120px] group-hover:pr-4 group-hover:opacity-100">
              {btn.label}
            </span>
          </motion.span>
        );

        if (btn.to) {
          return (
            <Link key={btn.id} to={btn.to} aria-label={btn.label}>
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
          >
            {content}
          </a>
        );
      })}
    </div>
  );
}
