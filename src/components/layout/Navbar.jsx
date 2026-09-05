import { useState, useEffect, useRef, useCallback, memo } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, MessageCircle } from 'lucide-react';
import { clinicInfo, navLinks } from '../../data/clinic';
import PrimaryButton from '../common/PrimaryButton';
import SecondaryButton from '../common/SecondaryButton';
import ServicesMegaMenu from './ServicesMenu';
import { cn } from '../../utils/helpers';

function Logo({ onNavigate, compact = false, showText = false }) {
  return (
    <Link
      to="/"
      onClick={onNavigate}
      className="group flex items-center shrink-0"
      aria-label="Capilla Dental & Aesthetic Center"
    >
      <img
        src="/logo-new.png"
        alt="Capilla Dental & Aesthetic Center"
        width={180}
        height={80}
        className={cn(
          'w-auto object-contain object-left rounded-full',
          compact ? 'h-14 sm:h-16 lg:h-[72px]' : 'h-16 sm:h-20'
        )}
        decoding="async"
      />
      {showText && (
        <span className="ml-2 font-display text-sm sm:text-base font-semibold text-primary-black leading-tight">
          Capilla Dental & Aesthetic Center
        </span>
      )}
    </Link>
  );
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const location = useLocation();
  const scrollLockY = useRef(0);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setServicesMenuOpen(false);
  }, []);

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
            className="xl:hidden fixed inset-0 z-[110] bg-primary-black/70"
            onClick={closeMobile}
          />

          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
            className="xl:hidden fixed top-0 right-0 z-[120] flex h-[100dvh] w-[min(88vw,340px)] flex-col border-l border-primary-white/40 bg-primary-white/95 shadow-premium"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between border-b border-border/70 px-5 py-4 shrink-0">
              <img
                src="/logo-mobile-new.png"
                alt="Capilla Dental & Aesthetic Center"
                className="h-16 w-auto object-contain"
                decoding="async"
              />
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
                <div key={link.id ?? link.path}>
                  {link.megaMenu ? (
                    <button
                      type="button"
                      onClick={() => {
                        setMobileOpen(false);
                        setServicesMenuOpen(true);
                      }}
                      className="flex w-full min-h-12 items-center justify-between py-3 text-base font-medium text-primary-black"
                    >
                      {link.label}
                      <ChevronDown size={18} className="transition-transform" />
                    </button>
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
        className="fixed top-0 left-0 right-0 z-[100] site-header bg-white border-b shadow-sm"
        style={{
          borderBottomColor: 'rgba(212,175,55,0.15)',
          boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
        }}
      >
        <div className="flex h-[var(--header-height)] items-center justify-between gap-2 sm:gap-3 px-6 lg:px-12">
          <img
            src="/logo-mobile-new.png"
            alt="Capilla Dental & Aesthetic Center"
            className="h-20 w-auto object-contain"
            decoding="async"
          />

          <nav className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((link) =>
              link.megaMenu ? (
                <button
                  key={link.id ?? link.path}
                  type="button"
                  onClick={() => setServicesMenuOpen((prev) => !prev)}
                  className="inline-flex items-center gap-1 px-2 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 text-dark-bg/75 hover:text-gold"
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={cn('transition-transform duration-300', servicesMenuOpen && 'rotate-180')}
                  />
                </button>
              ) : (
                <NavLink
                  key={link.id ?? link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    cn(
                      'px-2.5 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300',
                      link.isCta
                        ? 'rounded-full bg-gold-gradient px-3.5 py-2 text-primary-black shadow-gold'
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
              className="hidden lg:inline-flex items-center gap-2 text-sm font-medium transition-colors text-dark-bg hover:text-gold"
            >
              <Phone size={16} className="text-gold" />
              {clinicInfo.phone}
            </a>

            <div className="xl:hidden flex items-center gap-3">
              <button
                type="button"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
                className="flex h-[52px] w-[52px] md:h-11 md:w-11 items-center justify-center rounded-full border transition-colors shrink-0 ml-auto border-border text-primary-black"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <ServicesMegaMenu
        open={servicesMenuOpen}
        groups={navLinks.find((link) => link.megaMenu)?.menuGroups}
        onClose={() => setServicesMenuOpen(false)}
        onSelect={() => setServicesMenuOpen(false)}
        light={false}
      />

      {typeof document !== 'undefined' && createPortal(drawer, document.body)}
    </>
  );
}

export default memo(Navbar);
