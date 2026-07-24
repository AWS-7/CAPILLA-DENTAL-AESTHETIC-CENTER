import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import { cn } from '../../utils/helpers';

const SERVICE_IMAGE_MAP = {
  dental: '/gallery/clinic-treatment-suite.webp',
  skin: '/gallery/clinic-laser-room.webp',
  hair: '/gallery/clinic-brand-wall.webp',
};

export function ServicesMegaMenu({
  open,
  groups,
  onClose,
  onSelect,
  light = false,
}) {
  const orderedGroups = [...(groups ?? [])].sort((a, b) => {
    const order = ['skin', 'dental', 'hair'];
    return order.indexOf(a.id) - order.indexOf(b.id);
  });

  const [activeCategory, setActiveCategory] = useState(orderedGroups?.[0]?.id ?? 'dental');

  useEffect(() => {
    if (!orderedGroups?.some((group) => group.id === activeCategory)) {
      setActiveCategory(orderedGroups?.[0]?.id ?? 'dental');
    }
  }, [activeCategory, orderedGroups]);

  const activeGroup =
    orderedGroups?.find((group) => group.id === activeCategory) ?? orderedGroups?.[0] ?? null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-1/2 top-full z-[60] mt-4 w-[min(94vw,1280px)] -translate-x-1/2"
          data-services-menu-root="true"
        >
          <div className="overflow-hidden rounded-[30px] border border-white/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(246,242,232,0.95))] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.2)] backdrop-blur-2xl sm:p-5 lg:p-6">
            <div className="grid gap-4 xl:grid-cols-[minmax(280px,0.92fr)_minmax(0,1.08fr)]">
              <div className="flex min-h-[360px] flex-col justify-center rounded-[24px] border border-[#D4AF5A]/20 bg-[#0B0B0B] p-5 text-[#fdf8ed] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-6">
                <div className="flex flex-1 flex-col justify-center space-y-4">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#D4AF5A]/25 bg-[#D4AF5A]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D4AF5A]">
                    <Sparkles size={12} />
                    Luxury Multi-Speciality Care
                  </div>
                  <h3 className="max-w-[290px] font-display text-[22px] font-semibold leading-tight text-primary-white">
                    Capilla Dental &amp; Aesthetic Center
                  </h3>
                  <p className="max-w-[300px] text-sm leading-6 text-[#efe6d5]">
                    Advanced Dental, Medical Skin, Hair Restoration Treatments
                    under one roof.
                  </p>

                  <div className="grid w-full grid-cols-1 gap-2.5 sm:grid-cols-3">
                    {orderedGroups?.map((group) => (
                      <button
                        key={group.id}
                        type="button"
                        onMouseEnter={() => setActiveCategory(group.id)}
                        onClick={() => {
                          setActiveCategory(group.id);
                          onSelect?.(group.path);
                        }}
                        className={cn(
                          'flex min-h-[44px] w-full items-center justify-center rounded-full border px-3 py-2 text-center text-sm font-medium transition-all duration-200',
                          activeCategory === group.id
                            ? 'border-[#D4AF5A] bg-[#D4AF5A] text-[#0B0B0B] shadow-soft'
                            : 'border-white/15 bg-white/10 text-[#fdf8ed] hover:border-[#D4AF5A]/40 hover:bg-white/15'
                        )}
                      >
                        {group.buttonLabel}
                      </button>
                    ))}
                  </div>

                  <div className="rounded-[18px] border border-white/10 bg-white/[0.06] p-3 text-sm text-[#f4ebdf]">
                    <p className="font-medium text-[#D4AF5A]">Why patients choose us</p>
                    <p className="mt-1 leading-6 text-[#e8dcc1]">
                      Precision-led treatment plans, luxury patient experience, and
                      contemporary clinical care in Chennai.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex min-h-0 flex-col gap-4">
                <div className="max-h-[470px] overflow-y-auto overflow-x-hidden pr-1 scroll-smooth">
                  <div className="grid gap-3 md:grid-cols-1 xl:grid-cols-3">
                    {orderedGroups?.map((group) => (
                      <div
                        key={group.id}
                        onMouseEnter={() => setActiveCategory(group.id)}
                        className={cn(
                          'flex h-full min-h-[230px] flex-col rounded-[22px] border p-4 transition-all duration-200 sm:p-5',
                          activeCategory === group.id
                            ? 'border-[#D4AF5A]/35 bg-[#fff7e8] shadow-[0_12px_30px_rgba(212,175,90,0.12)]'
                            : 'border-border/70 bg-white/80 hover:border-[#D4AF5A]/25 hover:bg-[#fffdf8]'
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-[14px] font-semibold uppercase tracking-[0.2em] text-[#0B0B0B]">
                            {group.label}
                          </h4>
                          <ChevronRight
                            size={15}
                            className={cn(
                              'transition-transform duration-200',
                              activeCategory === group.id && 'translate-x-1 text-[#D4AF5A]'
                            )}
                          />
                        </div>

                        <ul className="mt-4 flex-1 space-y-2.5">
                          {group.items.map((item) => (
                            <li key={item.path}>
                              <Link
                                to={item.path}
                                onClick={() => {
                                  onSelect?.(item.path);
                                  onClose?.();
                                }}
                                className="group flex min-h-[40px] items-center justify-between rounded-xl px-2.5 py-2 text-sm text-dark-bg/70 transition-all hover:bg-[#f7f0de] hover:text-gold"
                              >
                                <span>{item.label}</span>
                                <ArrowRight
                                  size={14}
                                  className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                                />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="overflow-hidden rounded-[24px] border border-border/70 bg-[#f6efe2]">
                  <div className="relative h-[180px] sm:h-[220px]">
                    <img
                      src={SERVICE_IMAGE_MAP[activeGroup?.id] || SERVICE_IMAGE_MAP.dental}
                      alt={activeGroup?.label || 'Capilla clinic'}
                      className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D4AF5A]">
                        Signature Care
                      </p>
                      <p className="mt-1 text-lg font-semibold">
                        {activeGroup?.label || 'Dental'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ServicesMobileAccordion({ groups, onSelect, onClose }) {
  const orderedGroups = [...(groups ?? [])].sort((a, b) => {
    const order = ['skin', 'dental', 'hair'];
    return order.indexOf(a.id) - order.indexOf(b.id);
  });
  const [openId, setOpenId] = useState(orderedGroups?.[0]?.id ?? 'dental');

  return (
    <div className="mt-3 space-y-2">
      {orderedGroups?.map((group) => {
        const isOpen = openId === group.id;
        return (
          <div
            key={group.id}
            className="overflow-hidden rounded-[18px] border border-border/70 bg-primary-white/70"
          >
            <button
              type="button"
              onClick={() => setOpenId((prev) => (prev === group.id ? null : group.id))}
              className="flex w-full items-center justify-between px-4 py-3 text-left text-[15px] font-semibold text-primary-black"
            >
              <span>{group.label}</span>
              <ChevronRight
                size={16}
                className={cn('transition-transform duration-200', isOpen && 'rotate-90')}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden border-t border-border/70 bg-[#fcfaf4]"
                >
                  <ul className="space-y-1 px-3 py-2">
                    {group.items.map((item) => (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          onClick={() => {
                            onSelect?.(item.path);
                            onClose?.();
                          }}
                          className="flex items-center justify-between rounded-xl px-2.5 py-2.5 text-sm text-dark-bg/70 transition-colors hover:bg-white hover:text-gold"
                        >
                          <span>{item.label}</span>
                          <ArrowRight size={13} className="text-[#D4AF5A]" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
