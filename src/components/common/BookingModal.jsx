import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Calendar, AlertCircle } from 'lucide-react';
import { contactTreatments } from '../../data/contactPage';
import { buildAppointmentWhatsAppLink } from '../../utils/whatsapp';
import { trackingEvents } from '../../utils/analytics';
import { cn } from '../../utils/helpers';

const EMPTY = { name: '', phone: '', email: '', department: '', treatment: '', date: '', time: '', message: '' };
const TODAY = new Date().toISOString().split('T')[0];

const inputBase =
  'w-full min-h-12 rounded-xl border bg-light-bg px-4 py-3 text-base text-primary-black outline-none transition-colors focus:bg-primary-white';

function validate(form) {
  const errors = {};
  if (form.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (form.phone.replace(/\D/g, '').length < 10)
    errors.phone = 'Enter a valid phone number.';
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = 'Enter a valid email address.';
  if (!form.department) errors.department = 'Please select a department.';
  if (!form.treatment) errors.treatment = 'Please select a treatment.';
  if (form.date && form.date < TODAY) errors.date = 'Date cannot be in the past.';
  return errors;
}

/**
 * Reusable quick-booking modal. On submit it opens WhatsApp with a
 * pre-filled appointment request message.
 */
export default function BookingModal({ open, onClose }) {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Reset shortly after close so the modal is fresh next time
      const t = setTimeout(() => {
        setForm(EMPTY);
        setErrors({});
      }, 300);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const next = validate(form);
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }
    const link = buildAppointmentWhatsAppLink(form);
    trackingEvents.formSubmit(form.treatment || 'quick-booking');
    trackingEvents.whatsappClick();
    window.open(link, '_blank', 'noopener,noreferrer');
    // Message sent to WhatsApp — close the form automatically.
    onClose?.();
  };

  const fieldClass = (name) =>
    cn(
      inputBase,
      errors[name]
        ? 'border-red-400 focus:border-red-500'
        : 'border-border focus:border-gold'
    );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div
            className="absolute inset-0 bg-primary-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Book an appointment"
            initial={{ y: 60, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 60, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-md overflow-hidden rounded-t-3xl bg-primary-white shadow-premium sm:rounded-3xl"
          >
            {/* Header */}
            <div className="relative bg-[#0B0B0B] px-6 py-5">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(212,175,90,0.18),transparent_60%)]" />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-primary-white/15 text-primary-white/70 transition-colors hover:text-primary-white"
              >
                <X size={18} />
              </button>
              <p className="relative text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
                Book Appointment
              </p>
              <h3 className="relative mt-1 font-display text-2xl text-primary-white">
                Reserve Your Consultation
              </h3>
            </div>

            <form onSubmit={onSubmit} noValidate className="space-y-3.5 px-6 py-6">
                <div>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Full Name *"
                    aria-label="Full name"
                    className={fieldClass('name')}
                  />
                  {errors.name && (
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-red-500">
                      <AlertCircle size={13} />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="Mobile Number *"
                    aria-label="Mobile number"
                    className={fieldClass('phone')}
                  />
                  {errors.phone && (
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-red-500">
                      <AlertCircle size={13} />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="Email Address"
                    aria-label="Email address"
                    className={fieldClass('email')}
                  />
                  {errors.email && (
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-red-500">
                      <AlertCircle size={13} />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <select
                    name="department"
                    value={form.department}
                    onChange={onChange}
                    aria-label="Department"
                    className={fieldClass('department')}
                  >
                    <option value="">Select Department</option>
                    <option value="Dental">Dental</option>
                    <option value="Skin">Skin</option>
                    <option value="Hair">Hair</option>
                  </select>
                  {errors.department && (
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-red-500">
                      <AlertCircle size={13} />
                      {errors.department}
                    </p>
                  )}
                </div>

                <div>
                  <select
                    name="treatment"
                    value={form.treatment}
                    onChange={onChange}
                    aria-label="Treatment"
                    className={fieldClass('treatment')}
                  >
                    <option value="">Select Treatment</option>
                    {contactTreatments.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.treatment && (
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-red-500">
                      <AlertCircle size={13} />
                      {errors.treatment}
                    </p>
                  )}
                </div>

                <div className="flex gap-3">
                  <div className="flex-1">
                    <input
                      name="date"
                      type="date"
                      min={TODAY}
                      value={form.date}
                      onChange={onChange}
                      aria-label="Preferred date"
                      className={fieldClass('date')}
                    />
                    {errors.date && (
                      <p className="mt-1 flex items-center gap-1.5 text-xs text-red-500">
                        <AlertCircle size={13} />
                        {errors.date}
                      </p>
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      name="time"
                      type="time"
                      value={form.time}
                      onChange={onChange}
                      aria-label="Preferred time"
                      className={cn(inputBase, 'border-border focus:border-gold')}
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder="Message"
                    aria-label="Message"
                    rows={3}
                    className={cn(inputBase, 'resize-none border-border focus:border-gold')}
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gold-gradient py-3.5 text-base font-semibold text-primary-black shadow-gold transition-transform active:scale-[0.98]"
                  >
                    <Calendar size={18} />
                    Book Appointment
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-light-bg py-3.5 text-base font-semibold text-primary-black transition-colors hover:bg-primary-white"
                  >
                    Cancel
                  </button>
                </div>
              </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
