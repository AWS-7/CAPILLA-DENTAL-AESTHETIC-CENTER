import { clinicInfo } from '../data/clinic';

const WA_NUMBER = clinicInfo.whatsapp.replace(/\D/g, '');

/**
 * Build a wa.me link with a pre-filled appointment request message.
 */
export function buildAppointmentWhatsAppLink(form = {}) {
  const lines = [
    '*New Appointment Request*',
    form.name ? `Name: ${form.name}` : null,
    form.phone ? `Phone: ${form.phone}` : null,
    form.treatment ? `Treatment: ${form.treatment}` : null,
    form.date ? `Preferred Date: ${form.date}` : null,
    form.time ? `Preferred Time: ${form.time}` : null,
    form.message ? `Message: ${form.message}` : null,
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines)}`;
}
