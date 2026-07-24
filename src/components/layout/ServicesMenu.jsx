import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Search, Sparkles, X } from 'lucide-react';
import { useBookingModal } from '../../context/BookingModalProvider';
import PrimaryButton from '../common/PrimaryButton';
import SecondaryButton from '../common/SecondaryButton';
import { cn } from '../../utils/helpers';

const CATEGORY_META = {
  dental: {
    icon: '🦷',
    label: 'Dental Treatments',
    eyebrow: 'DENTAL',
    short: 'Precision restorative and cosmetic care.',
    description: 'Thoughtful treatments for comfort, function, and lasting confidence.',
  },
  skin: {
    icon: '✨',
    label: 'Skin Treatments',
    eyebrow: 'SKIN',
    short: 'Medical-grade skin renewal and glow.',
    description: 'Targeted solutions for rejuvenation, clarity, and healthy radiance.',
  },
  hair: {
    icon: '💇',
    label: 'Hair Treatments',
    eyebrow: 'HAIR',
    short: 'Advanced care for scalp and hair health.',
    description: 'Evidence-led therapies designed to restore fullness and confidence.',
  },
};

const VIEW_ALL_PATHS = {
  skin: '/skin-treatments',
  dental: '/dental-treatments',
  hair: '/hair-treatments',
};

export function ServicesMegaMenu({ open, groups, onClose, onSelect }) {
  const navigate = useNavigate();
  const { openBooking } = useBookingModal();
  const orderedGroups = useMemo(() => {
    const list = [...(groups ?? [])].sort((a, b) => {
      const order = ['skin', 'dental', 'hair'];
      return order.indexOf(a.id) - order.indexOf(b.id);
    });
    return list;
  }, [groups]);

  const [activeCategory, setActiveCategory] = useState(orderedGroups?.[0]?.id ?? 'dental');
  const [mobileSearch, setMobileSearch] = useState('');

  useEffect(() => {
    if (!orderedGroups?.some((group) => group.id === activeCategory)) {
      setActiveCategory(orderedGroups?.[0]?.id ?? 'dental');
    }
  }, [activeCategory, orderedGroups]);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    const previousTouchAction = document.body.style.touchAction;
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.touchAction = previousTouchAction;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  const activeGroup =
    orderedGroups?.find((group) => group.id === activeCategory) ?? orderedGroups?.[0] ?? null;

  const filteredMobileItems = useMemo(() => {
    const query = mobileSearch.trim().toLowerCase();
    if (!activeGroup) return [];
    if (!query) return activeGroup.items;
    return activeGroup.items.filter((item) => item.label.toLowerCase().includes(query));
  }, [activeGroup, mobileSearch]);

  const handleNavigateToCategory = (path) => {
    onSelect?.(path);
    onClose?.();
    navigate(path);
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });
  };

  if (!open) return null;

  const desktopContent = (
    <div className="hidden lg:flex lg:min-h-[560px] lg:flex-row">
      <div className="flex w-[34%] flex-col justify-between rounded-[24px] border border-[#D4AF5A]/20 bg-[#0B0B0B] p-6 text-[#fdf8ed] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
        <div className="space-y-4">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#D4AF5A]/25 bg-[#D4AF5A]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D4AF5A]">
            <Sparkles size={12} />
            Luxury Care
          </div>
          <div className="space-y-2">
            <h3 className="font-display text-[24px] font-semibold leading-tight text-primary-white">
              Explore Treatments
            </h3>
            <p className="max-w-[280px] text-sm leading-6 text-[#efe6d5]">
              Carefully curated treatment paths for modern dental, skin, and hair care.
            </p>
          </div>
          <div className="space-y-3">
            {orderedGroups?.map((group) => {
              const meta = CATEGORY_META[group.id] ?? CATEGORY_META.dental;
              const isActive = activeCategory === group.id;
              return (
                <button
                  key={group.id}
                  type="button"
                  onMouseEnter={() => setActiveCategory(group.id)}
                  onClick={() => setActiveCategory(group.id)}
                  className={cn(
                    'group flex w-full items-start gap-3 rounded-[20px] border p-4 text-left transition-all duration-200',
                    isActive
                      ? 'border-[#D4AF5A]/35 bg-[#fff7e8] text-[#0B0B0B] shadow-[0_10px_24px_rgba(212,175,90,0.12)]'
                      : 'border-white/10 bg-white/[0.06] text-[#fdf8ed] hover:-translate-y-0.5 hover:border-[#D4AF5A]/30 hover:bg-white/[0.10]'
                  )}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.10] text-xl">
                    {meta.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-[13px] font-semibold uppercase tracking-[0.2em]">
                        {meta.label}
                      </p>
                      <span className="text-[11px] font-medium text-[#D4AF5A]">
                        {group.items.length} Treatments
                      </span>
                    </div>
                    <p className={cn('mt-1 text-sm leading-5', isActive ? 'text-[#5b4b2a]' : 'text-[#efe6d5]')}>
                      {meta.short}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="ml-4 flex min-w-0 flex-1 flex-col rounded-[24px] border border-border/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(246,242,232,0.95))] p-5">
        <div className="flex items-start justify-between gap-4 border-b border-border/60 pb-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D4AF5A]">
              {activeGroup?.label?.toUpperCase()}
            </p>
            <h4 className="mt-2 font-display text-[24px] font-semibold leading-tight text-primary-black">
              {CATEGORY_META[activeCategory]?.label}
            </h4>
            <p className="mt-2 max-w-[480px] text-sm leading-6 text-dark-bg/70">
              {CATEGORY_META[activeCategory]?.description}
            </p>
          </div>
          <div className="rounded-full border border-[#D4AF5A]/20 bg-[#D4AF5A]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D4AF5A]">
            {activeGroup?.items?.length} Treatments
          </div>
        </div>

        <div className="mt-5 flex min-h-0 flex-1 flex-col overflow-hidden rounded-[20px] border border-border/60 bg-primary-white/60">
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(246,242,232,0.96))] px-4 py-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF5A]">
                {activeGroup?.label}
              </p>
              <p className="mt-1 text-sm font-medium text-primary-black">
                {CATEGORY_META[activeCategory]?.label}
              </p>
            </div>
            <div className="rounded-full border border-[#D4AF5A]/20 bg-[#D4AF5A]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D4AF5A]">
              {activeGroup?.items?.length} Treatments
            </div>
          </div>

          <div
            className="services-menu-scrollbar flex-1 overflow-y-auto overflow-x-hidden px-4 py-4 sm:px-5"
            style={{ WebkitOverflowScrolling: 'touch', overscrollBehavior: 'contain' }}
          >
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {activeGroup?.items?.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => {
                    onSelect?.(item.path);
                    onClose?.();
                  }}
                  className="group flex min-h-[120px] flex-col justify-between rounded-[20px] border border-border/70 bg-primary-white/80 p-4 transition-all duration-200 hover:-translate-y-1 hover:border-[#D4AF5A]/25 hover:shadow-[0_10px_20px_rgba(0,0,0,0.06)]"
                >
                  <div className="space-y-2">
                    <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#D4AF5A]">
                      {activeGroup.label}
                    </p>
                    <h5 className="text-[16px] font-semibold leading-tight text-primary-black">
                      {item.label}
                    </h5>
                    <p className="text-sm leading-6 text-dark-bg/65">
                      {item.label.includes('Treatment') ? 'Personalized care pathway' : 'Premium treatment experience'}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-sm font-medium text-dark-bg/75">
                    <span>Explore</span>
                    <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-start gap-3 border-t border-border/60 pt-4">
              <PrimaryButton
                onClick={() => handleNavigateToCategory(VIEW_ALL_PATHS[activeCategory] ?? '/dental')}
                variant="gold"
              >
                {`View All ${CATEGORY_META[activeCategory]?.label ?? 'Treatments'}`}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const mobileContent = (
    <div className="flex h-full flex-col lg:hidden">
      <div className="flex items-center justify-between border-b border-border/70 px-4 py-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D4AF5A]">
            Services
          </p>
          <h3 className="mt-1 font-display text-[20px] font-semibold text-primary-black">
            Treatments
          </h3>
        </div>
        <button
          type="button"
          aria-label="Close services menu"
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-primary-white text-primary-black"
        >
          <X size={18} />
        </button>
      </div>

      <div className="px-4 py-3">
        <label className="flex items-center gap-2 rounded-full border border-border/70 bg-primary-white/80 px-3 py-2 text-sm text-dark-bg/70 shadow-soft">
          <Search size={16} className="text-[#D4AF5A]" />
          <input
            value={mobileSearch}
            onChange={(event) => setMobileSearch(event.target.value)}
            placeholder="Search treatments"
            className="w-full border-0 bg-transparent text-sm text-primary-black outline-none placeholder:text-dark-bg/45"
          />
        </label>
      </div>

      <div className="flex gap-2 overflow-x-auto px-4 pb-2">
        {orderedGroups?.map((group) => {
          const isActive = activeCategory === group.id;
          return (
            <button
              key={group.id}
              type="button"
              onClick={() => setActiveCategory(group.id)}
              className={cn(
                'whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium',
                isActive
                  ? 'border-[#D4AF5A] bg-[#D4AF5A] text-[#0B0B0B] shadow-soft'
                  : 'border-border/70 bg-primary-white/80 text-dark-bg/75'
              )}
            >
              {group.label}
            </button>
          );
        })}
      </div>

      <div className="flex-1 overflow-hidden px-4 pb-24 pt-2">
        <div className="h-full rounded-[20px] border border-border/60 bg-primary-white/70 p-2">
          <div className="sticky top-0 z-10 mb-2 flex items-center justify-between rounded-[16px] border border-border/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(246,242,232,0.96))] px-3 py-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF5A]">
                {activeGroup?.label}
              </p>
              <p className="mt-1 text-sm font-medium text-primary-black">
                {CATEGORY_META[activeCategory]?.label}
              </p>
            </div>
            <div className="rounded-full border border-[#D4AF5A]/20 bg-[#D4AF5A]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D4AF5A]">
              {activeGroup?.items?.length} Treatments
            </div>
          </div>

          <div
            className="services-menu-scrollbar h-[calc(100%-84px)] overflow-y-auto overflow-x-hidden px-2 pb-2"
            style={{ WebkitOverflowScrolling: 'touch', overscrollBehavior: 'contain' }}
          >
            <div className="space-y-3">
              {filteredMobileItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => {
                    onSelect?.(item.path);
                    onClose?.();
                  }}
                  className="flex items-center justify-between rounded-[20px] border border-border/70 bg-primary-white/80 px-4 py-4 shadow-[0_8px_20px_rgba(0,0,0,0.04)]"
                >
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#D4AF5A]">
                      {activeGroup?.label}
                    </p>
                    <p className="mt-1 text-[15px] font-semibold text-primary-black">{item.label}</p>
                    <p className="mt-1 text-sm text-dark-bg/60">Premium treatment experience</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f7f0de] text-[#D4AF5A]">
                    <ArrowRight size={16} />
                  </div>
                </Link>
              ))}
              {!filteredMobileItems.length && (
                <div className="rounded-[20px] border border-dashed border-border/70 bg-primary-white/70 p-5 text-center text-sm text-dark-bg/60">
                  No treatments match your search right now.
                </div>
              )}
            </div>

            <div className="mt-4 flex justify-start">
              <PrimaryButton
                onClick={() => handleNavigateToCategory(VIEW_ALL_PATHS[activeCategory] ?? '/dental')}
                variant="gold"
              >
                {`View All ${CATEGORY_META[activeCategory]?.label ?? 'Treatments'}`}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 border-t border-border/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(246,242,232,0.95))] px-4 py-3 backdrop-blur">
        <div className="flex flex-col gap-2">
          <PrimaryButton onClick={openBooking} className="w-full">
            Book Appointment
          </PrimaryButton>
          <SecondaryButton to={activeGroup?.path} onClick={onClose} className="w-full">
            View All Treatments
          </SecondaryButton>
        </div>
      </div>
    </div>
  );

  const content = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[220] bg-black/45 backdrop-blur-sm"
        onClick={onClose}
        data-services-menu-root="true"
      >
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.98 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex h-full w-full items-end justify-center p-0 sm:items-center sm:justify-center sm:p-4 lg:p-6"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="relative flex h-[95dvh] w-full max-w-[1200px] flex-col overflow-hidden rounded-t-[28px] border border-white/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(246,242,232,0.95))] shadow-[0_30px_90px_rgba(0,0,0,0.2)] backdrop-blur-2xl sm:h-auto sm:max-h-[92dvh] sm:w-[min(92vw,1200px)] sm:rounded-[28px]">
            <button
              type="button"
              aria-label="Close services menu"
              onClick={onClose}
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF5A]/20 bg-primary-white/85 text-primary-black shadow-soft transition-colors hover:border-[#D4AF5A] hover:text-gold"
            >
              <X size={18} />
            </button>

            {desktopContent}
            {mobileContent}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return createPortal(content, document.body);
}
