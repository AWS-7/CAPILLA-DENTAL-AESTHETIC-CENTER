import { useCallback, useEffect, useState } from 'react';
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
  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = previousOverflow;
      // Reset shortly after close so the modal is fresh next time
      const t = setTimeout(() => {
        setForm(EMPTY);
        setErrors({});
      }, 300);
      return () => {
        clearTimeout(t);
        document.body.style.overflow = previousOverflow;
      };
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, handleClose]);

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
    handleClose();
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
          className="fixed inset-0 z-[130] flex items-end justify-center p-0 sm:items-center sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div
            className="absolute inset-0 bg-primary-black/70 backdrop-blur-sm"
            onClick={handleClose}
            aria-hidden="true"
          />

          <motion.div
            data-booking-modal-root="true"
            role="dialog"
            aria-modal="true"
            aria-label="Book an appointment"
            initial={{ y: 60, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 60, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex max-h-[88vh] w-full max-w-[560px] flex-col overflow-hidden rounded-t-3xl bg-primary-white shadow-premium sm:rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative shrink-0 bg-[#0B0B0B] px-6 py-4">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(212,175,90,0.18),transparent_60%)]" />
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close"
                className="absolute right-4 top-4 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-primary-white/15 text-primary-white/70 pointer-events-auto transition-colors hover:text-primary-white"
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

            <form onSubmit={onSubmit} noValidate className="flex min-h-0 flex-1 flex-col">
              <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">
                <div className="space-y-4">
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

                  <div className="flex gap-4">
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
                      rows={4}
                      className={cn(inputBase, 'h-24 resize-none border-border focus:border-gold')}
                    />
                  </div>
                </div>
              </div>

              <div className="flex shrink-0 gap-4 px-6 pb-5 pt-4">
                <button
                  type="submit"
                  className="flex min-h-[56px] flex-1 items-center justify-center rounded-xl bg-gold-gradient px-4 text-base font-semibold text-primary-black shadow-gold transition-transform active:scale-[0.98]"
                >
                  <span className="inline-flex items-center justify-center gap-2 leading-none">
                    <Calendar size={18} className="shrink-0" />
                    <span>Book Appointment</span>
                  </span>
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex min-h-[56px] flex-1 items-center justify-center rounded-xl border border-border bg-light-bg px-4 text-base font-semibold text-primary-black transition-colors hover:bg-primary-white"
                >
                  <span className="inline-flex items-center justify-center gap-2 leading-none">
                    <span className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
                    <span>Cancel</span>
                  </span>
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
