import { AnimatePresence, motion } from 'framer-motion';
import { X, Phone, MapPin, ChevronRight } from 'lucide-react';
import { clinicInfo } from '../../data/clinic';
import { trackingEvents } from '../../utils/analytics';

function WhatsAppGlyph({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/**
 * Bottom sheet that lets the visitor pick a branch before calling or
 * messaging on WhatsApp. `mode` is 'call' | 'whatsapp' | null.
 */
export default function BranchActionSheet({ mode, onClose }) {
  const open = mode === 'call' || mode === 'whatsapp';
  const isCall = mode === 'call';

  const hrefFor = (loc) => {
    if (isCall) return loc.phoneHref;
    const digits = loc.phone.replace(/\D/g, '');
    const message =
      `Hello Capilla Dental & Aesthetic Center (${loc.label} branch), ` +
      `I would like to know more about your treatments and book an appointment.`;
    return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
  };

  const handleSelect = () => {
    if (isCall) trackingEvents.phoneClick?.();
    else trackingEvents.whatsappClick?.();
    onClose?.();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="md:hidden fixed inset-0 z-[75] flex items-end justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div
            className="absolute inset-0 bg-primary-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={isCall ? 'Choose a branch to call' : 'Choose a branch on WhatsApp'}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full overflow-hidden rounded-t-3xl border-t border-primary-white/10 bg-[#0B0B0B] pb-[max(1rem,env(safe-area-inset-bottom))] shadow-[0_-12px_40px_rgba(0,0,0,0.5)]"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,175,90,0.16),transparent_65%)]" />

            <div className="relative flex items-center justify-between px-5 pt-4">
              <div className="flex items-center gap-2.5">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full ${
                    isCall ? 'bg-gold/15 text-gold' : 'bg-[#25D366]/15 text-[#25D366]'
                  }`}
                >
                  {isCall ? <Phone size={16} /> : <WhatsAppGlyph size={16} />}
                </span>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-gold">
                    Choose Branch
                  </p>
                  <p className="text-sm font-semibold text-primary-white">
                    {isCall ? 'Call our clinic' : 'Message on WhatsApp'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-white/15 text-primary-white/70 transition-colors hover:text-primary-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="relative mt-4 space-y-2.5 px-5 pt-1">
              {clinicInfo.locations.map((loc) => (
                <a
                  key={loc.id}
                  href={hrefFor(loc)}
                  target={isCall ? undefined : '_blank'}
                  rel={isCall ? undefined : 'noopener noreferrer'}
                  onClick={handleSelect}
                  className="flex items-center gap-3 rounded-2xl border border-primary-white/10 bg-white/[0.05] p-4 transition-colors active:border-gold/50 active:bg-white/[0.08]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-gold">
                    <MapPin size={18} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-primary-white">
                      {loc.label}
                    </span>
                    <span className="mt-0.5 block text-[13px] font-light text-primary-white/60">
                      {loc.phone}
                    </span>
                  </span>
                  <ChevronRight size={18} className="shrink-0 text-primary-white/40" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
