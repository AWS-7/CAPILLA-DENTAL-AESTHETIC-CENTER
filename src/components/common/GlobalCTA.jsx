import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { PrimaryButton, SecondaryButton } from './index';
import { clinicInfo } from '../../data/clinic';
import { useBookingModal } from '../../context/BookingModalProvider';

/**
 * Global CTA component - consistent Book Appointment, WhatsApp, and Call buttons
 * Used across all pages for unified UX
 * 
 * Responsive behavior:
 * - Desktop: horizontal row with 20px gap
 * - Tablet: horizontal row with equal spacing
 * - Mobile: stacked vertically with equal spacing
 */
export default function GlobalCTA() {
  const { openBooking } = useBookingModal();

  return (
    <div className="flex flex-row items-stretch gap-5 md:gap-4 sm:flex-col sm:gap-3">
      <PrimaryButton
        onClick={openBooking}
        variant="gold"
        size="lg"
        className="min-h-12 flex items-center justify-center gap-2"
      >
        <Calendar size={18} />
        Book Appointment
      </PrimaryButton>
      <SecondaryButton
        href={clinicInfo.whatsappHref}
        external
        variant="light"
        size="lg"
        className="min-h-12 flex items-center justify-center gap-2 border-primary-white/25"
      >
        <MessageCircle size={18} />
        WhatsApp
      </SecondaryButton>
      <SecondaryButton
        href={clinicInfo.phoneHref}
        variant="light"
        size="lg"
        className="min-h-12 flex items-center justify-center gap-2 border-primary-white/25"
      >
        <Phone size={16} />
        Call
      </SecondaryButton>
    </div>
  );
}
