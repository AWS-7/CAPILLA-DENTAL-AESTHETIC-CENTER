import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { clinicInfo, navLinks } from '../../data/clinic';
import useScrolled from '../../hooks/useScrolled';
import PrimaryButton from '../common/PrimaryButton';
import { cn } from '../../utils/helpers';

function Logo({ light = false }) {
  return (
    <Link to="/" className="group flex items-center gap-3 shrink-0">
      <span
        className={cn(
          'flex h-10 w-10 items-center justify-center rounded-xl transition-colors',
          light ? 'bg-gold' : 'bg-primary-black group-hover:bg-gold'
        )}
      >
        <span className="font-display text-lg text-primary-white font-semibold">C</span>
      </span>
      <span className="hidden sm:flex flex-col leading-tight">
        <span
          className={cn(
            'font-display text-lg md:text-xl font-semibold tracking-tight',
            light ? 'text-primary-white' : 'text-primary-black'
          )}
        >
          Capilla
        </span>
        <span
          className={cn(
            'text-[10px] uppercase tracking-[0.18em] font-medium',
            light ? 'text-gold-light' : 'text-gold'
          )}
        >
          Dental & Aesthetic
        </span>
      </span>
    </Link>
  );
}

function DesktopDropdown({ link, light }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <NavLink
        to={link.path}
        className={({ isActive }) =>
          cn(
            'inline-flex items-center gap-1 px-2 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300',
            light
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
        <ChevronDown
          size={14}
          className={cn('transition-transform duration-300', open && 'rotate-180')}
        />
      </NavLink>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 z-50 min-w-[240px] pt-3"
          >
            <div className="rounded-2xl border border-border bg-primary-white shadow-premium overflow-hidden py-2">
              {link.children.map((child) => (
                <Link
                  key={child.path}
                  to={child.path}
                  className="block px-5 py-2.5 text-sm text-dark-bg/70 transition-colors hover:bg-light-gray hover:text-gold"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const scrolled = useScrolled(30);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const transparent = isHome && !scrolled && !mobileOpen;

  useEffect(() => {
    setMobileOpen(false);
    setOpenAccordion(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        transparent
          ? 'bg-transparent'
          : 'glass border-b border-border/60 shadow-soft'
      )}
    >
      <div className="container-premium flex h-[var(--header-height)] items-center justify-between gap-4">
        <Logo light={transparent} />

        <nav className="hidden xl:flex items-center gap-0.5">
          {navLinks.map((link) =>
            link.children ? (
              <DesktopDropdown key={link.path} link={link} light={transparent} />
            ) : (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  cn(
                    'px-2.5 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300',
                    transparent
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

        <div className="flex items-center gap-3">
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

          <PrimaryButton
            to="/contact"
            size="sm"
            variant={transparent ? 'gold' : 'primary'}
            className="hidden md:inline-flex"
          >
            Book Appointment
          </PrimaryButton>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
            className={cn(
              'xl:hidden flex h-11 w-11 items-center justify-center rounded-full border transition-colors',
              transparent
                ? 'border-primary-white/30 text-primary-white'
                : 'border-border text-primary-black'
            )}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="xl:hidden overflow-hidden border-t border-border bg-primary-white"
          >
            <nav className="container-premium max-h-[calc(100dvh-var(--header-height))] overflow-y-auto py-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {link.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenAccordion((prev) =>
                            prev === link.path ? null : link.path
                          )
                        }
                        className="flex w-full items-center justify-between py-3 text-base font-medium text-primary-black"
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
                            className="overflow-hidden pl-4 pb-2"
                          >
                            <Link
                              to={link.path}
                              className="block py-2 text-sm text-gold font-medium"
                            >
                              View All
                            </Link>
                            {link.children.map((child) => (
                              <Link
                                key={child.path}
                                to={child.path}
                                className="block py-2 text-sm text-dark-bg/65 hover:text-gold"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink
                      to={link.path}
                      end={link.path === '/'}
                      className={({ isActive }) =>
                        cn(
                          'block py-3 text-base font-medium transition-colors',
                          isActive ? 'text-gold' : 'text-primary-black'
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  )}
                </div>
              ))}

              <div className="pt-4">
                <PrimaryButton to="/contact" className="w-full" variant="gold">
                  Book Appointment
                </PrimaryButton>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
