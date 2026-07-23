import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
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
  const openBooking = useCallback(() => setOpen(true), []);
  const closeBooking = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    closeBooking();
  }, [open, location.pathname, location.search, location.hash, closeBooking]);

  useEffect(() => {
    if (!open) return;

    const handleNavigationIntent = (event) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target) return;
      if (target.closest('[data-booking-modal-root="true"]')) return;
      if (!target.closest('a[href]')) return;
      closeBooking();
    };

    const handleHistoryNavigation = () => {
      closeBooking();
    };

    document.addEventListener('click', handleNavigationIntent, true);
    window.addEventListener('hashchange', handleHistoryNavigation);
    window.addEventListener('popstate', handleHistoryNavigation);

    return () => {
      document.removeEventListener('click', handleNavigationIntent, true);
      window.removeEventListener('hashchange', handleHistoryNavigation);
      window.removeEventListener('popstate', handleHistoryNavigation);
    };
  }, [open, closeBooking]);

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
