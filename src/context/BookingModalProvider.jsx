import { createContext, useContext, useMemo, useState } from 'react';
import BookingModal from '../components/common/BookingModal';

const BookingModalContext = createContext({
  openBooking: () => {},
  closeBooking: () => {},
});

export function useBookingModal() {
  return useContext(BookingModalContext);
}

export default function BookingModalProvider({ children }) {
  const [open, setOpen] = useState(false);

  const value = useMemo(
    () => ({
      openBooking: () => setOpen(true),
      closeBooking: () => setOpen(false),
    }),
    []
  );

  return (
    <BookingModalContext.Provider value={value}>
      {children}
      <BookingModal open={open} onClose={() => setOpen(false)} />
    </BookingModalContext.Provider>
  );
}
