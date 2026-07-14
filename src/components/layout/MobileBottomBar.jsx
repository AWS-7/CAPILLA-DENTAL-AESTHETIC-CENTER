import { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { clinicInfo } from '../../data/clinic';
import { trackingEvents } from '../../utils/analytics';
import { cn } from '../../utils/helpers';

const TAP_LOCK_MS = 700;

const actions = [
  {
    id: 'call',
    label: 'Call Now',
    href: clinicInfo.phoneHref,
    icon: Phone,
    onTrack: trackingEvents.phoneClick,
    className:
      'bg-primary-white text-primary-black shadow-soft hover:bg-primary-white/95',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: clinicInfo.whatsappHref,
    external: true,
    icon: MessageCircle,
    onTrack: trackingEvents.whatsappClick,
    className:
      'bg-[#25D366] text-primary-white shadow-[0_4px_16px_rgba(37,211,102,0.35)] hover:brightness-105',
  },
  {
    id: 'book',
    label: 'Book Appointment',
    to: '/contact',
    icon: Calendar,
    onTrack: trackingEvents.bookAppointmentClick,
    primary: true,
    className:
      'bg-gold-gradient text-primary-black shadow-gold hover:brightness-105',
  },
];

/**
 * Premium glassmorphic mobile bottom action bar.
 * Visible only below md (768px). Fixed, always on while scrolling.
 */
export default function MobileBottomBar() {
  const lastTap = useRef(0);

  const guardTap = useCallback((handler) => (e) => {
    const now = Date.now();
    if (now - lastTap.current < TAP_LOCK_MS) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    lastTap.current = now;
    handler?.();
  }, []);

  return (
    <motion.nav
      className="md:hidden fixed inset-x-0 bottom-0 z-[45]"
      aria-label="Quick booking actions"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={cn(
          'mobile-bottom-bar',
          'border-t border-primary-white/10',
          'bg-primary-black/75 backdrop-blur-2xl',
          'supports-[backdrop-filter]:bg-primary-black/65',
          'shadow-[0_-12px_40px_rgba(0,0,0,0.4)]',
          'rounded-t-[24px]',
          'px-3 pt-3',
          'pb-[max(0.65rem,env(safe-area-inset-bottom))]'
        )}
      >
        <div className="mx-auto flex max-w-lg items-stretch gap-2.5">
          {actions.map((action, index) => {
            const Icon = action.icon;
            const btnClass = cn(
              'mobile-bottom-bar__btn relative flex flex-1 flex-col items-center justify-center gap-1',
              'min-h-[52px] rounded-2xl px-1.5 py-2 overflow-hidden',
              'text-[10px] font-semibold tracking-wide leading-tight text-center',
              'transition-[transform,filter,box-shadow] duration-200 ease-out',
              'active:scale-[0.96]',
              'touch-manipulation select-none',
              action.className,
              action.primary && 'ring-1 ring-gold-light/40'
            );

            const content = (
              <motion.span
                className="relative z-[1] flex flex-col items-center gap-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + index * 0.06, duration: 0.35 }}
                whileTap={{ scale: 0.94 }}
              >
                <Icon size={18} strokeWidth={2} aria-hidden />
                <span className="max-w-[4.6rem] sm:max-w-none px-0.5">
                  {action.label}
                </span>
              </motion.span>
            );

            if (action.to) {
              return (
                <Link
                  key={action.id}
                  to={action.to}
                  onClick={guardTap(action.onTrack)}
                  className={btnClass}
                  aria-label={action.label}
                >
                  {content}
                </Link>
              );
            }

            return (
              <a
                key={action.id}
                href={action.href}
                onClick={guardTap(action.onTrack)}
                target={action.external ? '_blank' : undefined}
                rel={action.external ? 'noopener noreferrer' : undefined}
                className={btnClass}
                aria-label={action.label}
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
