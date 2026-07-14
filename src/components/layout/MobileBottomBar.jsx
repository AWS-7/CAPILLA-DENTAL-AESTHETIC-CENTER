import { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';
import { clinicInfo } from '../../data/clinic';
import { trackingEvents } from '../../utils/analytics';
import { cn } from '../../utils/helpers';

const TAP_LOCK_MS = 700;

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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
    icon: WhatsAppIcon,
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

  const setRipple = useCallback((e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--ripple-x', `${x}%`);
    el.style.setProperty('--ripple-y', `${y}%`);
  }, []);

  return (
    <motion.nav
      className="md:hidden fixed inset-x-0 bottom-0 z-[45] overflow-x-hidden"
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
          'px-2.5 min-[360px]:px-3 pt-3',
          'pb-[max(0.65rem,env(safe-area-inset-bottom))]'
        )}
      >
        <div className="mx-auto flex max-w-lg items-stretch gap-2 min-[360px]:gap-2.5">
          {actions.map((action, index) => {
            const Icon = action.icon;
            const btnClass = cn(
              'mobile-bottom-bar__btn relative flex flex-1 flex-col items-center justify-center gap-0.5 min-[360px]:gap-1',
              'min-h-[52px] rounded-2xl px-1 py-2 min-[360px]:px-1.5 overflow-hidden',
              'text-[9px] min-[360px]:text-[10px] font-semibold tracking-wide leading-tight text-center',
              'transition-[transform,filter,box-shadow] duration-200 ease-out',
              'active:scale-[0.96]',
              'touch-manipulation select-none',
              action.className,
              action.primary && 'ring-1 ring-gold-light/40'
            );

            const content = (
              <motion.span
                className="relative z-[1] flex flex-col items-center gap-0.5 min-[360px]:gap-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + index * 0.06, duration: 0.35 }}
                whileTap={{ scale: 0.94 }}
              >
                <Icon size={18} strokeWidth={2} aria-hidden />
                {action.id === 'book' ? (
                  <span className="px-0.5">
                    <span className="block min-[390px]:inline">Book </span>
                    <span className="block min-[390px]:inline">Appointment</span>
                  </span>
                ) : (
                  <span className="px-0.5 whitespace-nowrap">{action.label}</span>
                )}
              </motion.span>
            );

            const sharedProps = {
              className: btnClass,
              'aria-label': action.label,
              onPointerDown: setRipple,
            };

            if (action.to) {
              return (
                <Link
                  key={action.id}
                  to={action.to}
                  onClick={guardTap(action.onTrack)}
                  {...sharedProps}
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
                {...sharedProps}
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
