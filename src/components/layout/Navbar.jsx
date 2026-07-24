import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, MessageCircle } from 'lucide-react';
import { clinicInfo, navLinks } from '../../data/clinic';
import useScrolled from '../../hooks/useScrolled';
import PrimaryButton from '../common/PrimaryButton';
import SecondaryButton from '../common/SecondaryButton';
import { ServicesMegaMenu, ServicesMobileAccordion } from './ServicesMenu';
import { cn } from '../../utils/helpers';

function Logo({ onNavigate, compact = false }) {
  return (
    <Link
      to="/"
      onClick={onNavigate}
      className="group flex items-center shrink-0"
      aria-label="Capilla Dental & Aesthetic Center"
    >
      <img
        src="/logo.png"
        alt="Capilla Dental & Aesthetic Center"
        width={180}
        height={80}
        className={cn(
          'w-auto object-contain object-left',
          compact ? 'h-14 sm:h-16 lg:h-[72px]' : 'h-16 sm:h-20'
        )}
        decoding="async"
      />
    </Link>
  );
}

function DesktopDropdown({ link, light }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;

    const handlePointerDown = (event) => {
      if (event.target instanceof Node && event.target.closest('[data-services-menu-root]')) {
        return;
      }

      setOpen(false);
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={(event) => {
          event.preventDefault();
          setOpen((prev) => !prev);
        }}
        className={cn(
          'inline-flex items-center gap-1 px-2 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300',
          light
            ? 'text-primary-white/85 hover:text-gold'
            : 'text-dark-bg/75 hover:text-gold'
        )}
      >
        {link.label}
        <ChevronDown
          size={14}
          className={cn('transition-transform duration-300', open && 'rotate-180')}
        />
      </button>

      <ServicesMegaMenu
        open={open}
        groups={link.menuGroups}
        onClose={() => setOpen(false)}
        onSelect={() => setOpen(false)}
        light={light}
      />
    </div>
  );
}

export default function Navbar() {
  const scrolled = useScrolled(24);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const transparent = isHome && !scrolled && !mobileOpen;
  const scrollLockY = useRef(0);

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenAccordion(null);
  };

  useEffect(() => {
    closeMobile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      scrollLockY.current = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollLockY.current}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
    } else {
      const y = scrollLockY.current;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      if (y) window.scrollTo(0, y);
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
    };
  }, [mobileOpen]);

  const drawer = (
    <AnimatePresence>
      {mobileOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Close menu overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden fixed inset-0 z-[110] bg-primary-black/50 backdrop-blur-[3px]"
            onClick={closeMobile}
          />

          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
            className="xl:hidden fixed top-0 right-0 z-[120] flex h-[100dvh] w-[min(88vw,340px)] flex-col border-l border-primary-white/40 bg-primary-white/80 shadow-premium backdrop-blur-2xl supports-[backdrop-filter]:bg-primary-white/70"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between border-b border-border/70 px-5 py-4 shrink-0">
              <Logo onNavigate={closeMobile} />
              <button
                type="button"
                aria-label="Close menu"
                onClick={closeMobile}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-primary-white/80 text-primary-black hover:border-gold hover:text-gold transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto overscroll-contain px-5 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {link.megaMenu ? (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenAccordion((prev) =>
                            prev === link.path ? null : link.path
                          )
                        }
                        className="flex w-full min-h-12 items-center justify-between py-3 text-base font-medium text-primary-black"
                      >
                        {link.label}
                        <ChevronDown
                          size={18}
                          className={cn(
                            'transition-transform',
                            openAccordion === link.path && 'rotate-180'
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {openAccordion === link.path && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pb-2"
                          >
                            <ServicesMobileAccordion
                              groups={link.menuGroups}
                              onSelect={closeMobile}
                              onClose={closeMobile}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink
                      to={link.path}
                      end={link.path === '/'}
                      onClick={closeMobile}
                      className={({ isActive }) =>
                        cn(
                          'flex min-h-12 items-center py-3 text-base font-medium transition-colors',
                          isActive ? 'text-gold' : 'text-primary-black',
                          link.isCta && 'rounded-full bg-gold-gradient px-3 text-primary-black shadow-gold'
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  )}
                </div>
              ))}
            </nav>

            <div className="border-t border-border/70 px-5 py-5 space-y-3 shrink-0 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
              <PrimaryButton
                to="/contact"
                className="w-full"
                variant="gold"
                onClick={closeMobile}
              >
                Book Appointment
              </PrimaryButton>
              <SecondaryButton
                href={clinicInfo.whatsappHref}
                external
                className="w-full"
                variant="gold"
                onClick={closeMobile}
              >
                <MessageCircle size={18} />
                WhatsApp
              </SecondaryButton>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] site-header',
          'transform-gpu will-change-[background-color,backdrop-filter]',
          'transition-[background-color,backdrop-filter,box-shadow,border-color] duration-400 ease-out',
          'border-b',
          transparent
            ? 'border-transparent bg-transparent shadow-none'
            : 'border-border/50 bg-primary-white/80 shadow-soft backdrop-blur-glass supports-[backdrop-filter]:bg-primary-white/75'
        )}
      >
        <div className="container-premium flex h-[var(--header-height)] items-center justify-between gap-3 sm:gap-4">
          <Logo compact />

          <nav className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((link) =>
              link.megaMenu ? (
                <DesktopDropdown key={link.path} link={link} light={transparent} />
              ) : (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    cn(
                      'px-2.5 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300',
                      link.isCta
                        ? 'rounded-full bg-gold-gradient px-3.5 py-2 text-primary-black shadow-gold'
                        : transparent
                          ? isActive
                            ? 'text-gold'
                            : 'text-primary-white/85 hover:text-gold'
                          : isActive
                            ? 'text-gold'
                            : 'text-dark-bg/75 hover:text-gold'
                    )
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={clinicInfo.phoneHref}
              className={cn(
                'hidden lg:inline-flex items-center gap-2 text-sm font-medium transition-colors',
                transparent ? 'text-primary-white hover:text-gold' : 'text-dark-bg hover:text-gold'
              )}
            >
              <Phone size={16} className="text-gold" />
              {clinicInfo.phone}
            </a>

            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className={cn(
                'xl:hidden flex h-[52px] w-[52px] md:h-11 md:w-11 items-center justify-center rounded-full border transition-colors',
                transparent
                  ? 'border-white/[0.12] bg-white/[0.08] text-primary-white backdrop-blur-md md:border-primary-white/30 md:bg-transparent md:backdrop-blur-none'
                  : 'border-border text-primary-black'
              )}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {typeof document !== 'undefined' && createPortal(drawer, document.body)}
    </>
  );
}
