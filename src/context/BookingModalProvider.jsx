import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BookingModal from '../components/common/BookingModal';

const BookingModalContext = createContext({
  openBooking: () => {},
  closeBooking: () => {},
});

export function useBookingModal() {
  return useContext(BookingModalContext);
}

export default function BookingModalProvider({ children }) {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const lastLocationRef = useRef({ pathname: location.pathname, search: location.search, hash: location.hash });
  const openBooking = useCallback(() => setOpen(true), []);
  const closeBooking = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    // Keep the modal open on the initial open action; only close it on real navigation changes.
    const currentLocation = `${location.pathname}${location.search}${location.hash}`;
    const previousLocation = `${lastLocationRef.current.pathname}${lastLocationRef.current.search}${lastLocationRef.current.hash}`;

    if (currentLocation !== previousLocation) {
      closeBooking();
    }

    lastLocationRef.current = {
      pathname: location.pathname,
      search: location.search,
      hash: location.hash,
    };
  }, [closeBooking, location.hash, location.pathname, location.search, open]);

  useEffect(() => {
    if (!open) return;

    const handleNavigationIntent = (event) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target) return;
      if (target.closest('[data-booking-modal-root="true"]')) return;
      if (!target.closest('a[href]')) return;
      closeBooking();
    };

    const handleBookingTrigger = (event) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target) return;
      if (target.closest('[data-booking-modal-root="true"]')) return;

      const trigger = target.closest('button, a, [role="button"], [data-booking-trigger]');
      if (!trigger) return;

      const text = [trigger.textContent, trigger.getAttribute('aria-label'), trigger.getAttribute('title')]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      if (!/book\s+(?:your\s+)?(?:an\s+)?appointment/i.test(text)) return;

      event.preventDefault();
      event.stopPropagation();
      openBooking();
    };

    const handleHistoryNavigation = () => {
      closeBooking();
    };

    document.addEventListener('click', handleBookingTrigger, true);
    document.addEventListener('click', handleNavigationIntent, true);
    window.addEventListener('hashchange', handleHistoryNavigation);
    window.addEventListener('popstate', handleHistoryNavigation);

    return () => {
      document.removeEventListener('click', handleBookingTrigger, true);
      document.removeEventListener('click', handleNavigationIntent, true);
      window.removeEventListener('hashchange', handleHistoryNavigation);
      window.removeEventListener('popstate', handleHistoryNavigation);
    };
  }, [open, closeBooking, openBooking]);

  const value = useMemo(
    () => ({
      openBooking,
      closeBooking,
    }),
    [openBooking, closeBooking]
  );

  return (
    <BookingModalContext.Provider value={value}>
      {children}
      <BookingModal open={open} onClose={closeBooking} />
    </BookingModalContext.Provider>
  );
}
