import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Calendar, AlertCircle, CheckCircle2 } from 'lucide-react';
import {
  BRANCH_OPTIONS,
  DEPARTMENT_OPTIONS,
  buildAppointmentWhatsAppLink,
  getTreatmentOptions,
  validateAppointmentForm,
} from '../../utils/appointmentForm';
import { trackingEvents } from '../../utils/analytics';
import { cn } from '../../utils/helpers';

const EMPTY = {
  name: '',
  phone: '',
  email: '',
  branch: '',
  department: '',
  treatment: '',
  date: '',
  time: '',
  message: '',
};
const TODAY = new Date().toISOString().split('T')[0];

const inputBase =
  'w-full min-h-12 rounded-xl border bg-light-bg px-4 py-3 text-base text-primary-black outline-none transition-colors focus:bg-primary-white';

export default function BookingModal({ open, onClose }) {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  const activeTreatments = useMemo(() => getTreatmentOptions(form.department), [form.department]);

  const handleClose = useCallback(() => {
    if (isSubmitting) return;
    setShowToast(false);
    onClose?.();
  }, [isSubmitting, onClose]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = previousOverflow;
      const t = window.setTimeout(() => {
        setForm(EMPTY);
        setErrors({});
        setIsSubmitting(false);
        setShowToast(false);
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

  useEffect(() => {
    if (!open) return;

    const focusableSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusables = Array.from(dialogRef.current?.querySelectorAll(focusableSelector) ?? []).filter((element) => {
      if (element.hasAttribute('disabled')) return false;
      const style = window.getComputedStyle(element);
      return style.display !== 'none' && style.visibility !== 'hidden';
    });

    const target = focusables.find((element) => element.getAttribute('name') === 'name') ?? focusables[0];
    target?.focus();
  }, [open]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => {
      if (name === 'department') {
        const nextTreatments = getTreatmentOptions(value);
        return {
          ...f,
          department: value,
          treatment: nextTreatments.includes(f.treatment) ? f.treatment : '',
        };
      }

      return { ...f, [name]: value };
    });

    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const onKeyDown = (e) => {
    if (e.key !== 'Tab') return;

    const focusableSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusables = Array.from(dialogRef.current?.querySelectorAll(focusableSelector) ?? []).filter((element) => {
      if (element.hasAttribute('disabled')) return false;
      const style = window.getComputedStyle(element);
      return style.display !== 'none' && style.visibility !== 'hidden';
    });

    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const next = validateAppointmentForm(form, TODAY);

    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }

    setIsSubmitting(true);
    setShowToast(true);

    window.setTimeout(() => {
      const link = buildAppointmentWhatsAppLink(form);
      trackingEvents.formSubmit(form.treatment || 'quick-booking');
      trackingEvents.whatsappClick();
      window.open(link, '_blank', 'noopener,noreferrer');
      handleClose();
    }, 650);
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
          className="fixed inset-0 z-[130] flex items-start justify-center overflow-y-auto p-0 sm:items-center sm:p-4"
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
            ref={dialogRef}
            data-booking-modal-root="true"
            role="dialog"
            aria-modal="true"
            aria-label="Book an appointment"
            initial={{ y: 60, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 60, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 my-4 flex max-h-[92dvh] w-full max-w-[600px] flex-col overflow-hidden rounded-t-3xl bg-primary-white shadow-premium sm:my-0 sm:rounded-3xl"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={onKeyDown}
          >
            <div className="relative shrink-0 bg-[#0B0B0B] px-6 py-4">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(212,175,90,0.18),transparent_60%)]" />
              <button
                ref={closeButtonRef}
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
                      autoComplete="name"
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
                      autoComplete="tel"
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
                      autoComplete="email"
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
                      name="branch"
                      value={form.branch}
                      onChange={onChange}
                      aria-label="Branch"
                      className={fieldClass('branch')}
                    >
                      <option value="">Select Branch</option>
                      {BRANCH_OPTIONS.map((branch) => (
                        <option key={branch.value} value={branch.value}>
                          {branch.label}
                        </option>
                      ))}
                    </select>
                    {errors.branch && (
                      <p className="mt-1 flex items-center gap-1.5 text-xs text-red-500">
                        <AlertCircle size={13} />
                        {errors.branch}
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
                      {DEPARTMENT_OPTIONS.map((department) => (
                        <option key={department} value={department}>
                          {department}
                        </option>
                      ))}
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
                      {activeTreatments.map((treatment) => (
                        <option key={treatment} value={treatment}>
                          {treatment}
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

                  <div className="flex flex-col gap-4 sm:flex-row">
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
                        className={cn(inputBase, errors.time ? 'border-red-400 focus:border-red-500' : 'border-border focus:border-gold')}
                      />
                      {errors.time && (
                        <p className="mt-1 flex items-center gap-1.5 text-xs text-red-500">
                          <AlertCircle size={13} />
                          {errors.time}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      placeholder="Tell us a little more about your concern"
                      aria-label="Message"
                      rows={4}
                      className={cn(inputBase, 'h-24 resize-none border-border focus:border-gold')}
                    />
                  </div>
                </div>
              </div>

              <div className="flex shrink-0 flex-col gap-3 px-6 pb-5 pt-4 sm:flex-row">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex min-h-[56px] flex-1 items-center justify-center rounded-xl bg-gold-gradient px-4 text-base font-semibold text-primary-black shadow-gold transition-transform disabled:cursor-not-allowed disabled:opacity-75 active:scale-[0.98]"
                >
                  <span className="inline-flex items-center justify-center gap-2 leading-none">
                    {isSubmitting ? (
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-black/20 border-t-primary-black" />
                    ) : (
                      <Calendar size={18} className="shrink-0" />
                    )}
                    <span>{isSubmitting ? 'Preparing Request…' : 'Book Appointment'}</span>
                  </span>
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  disabled={isSubmitting}
                  className="flex min-h-[56px] flex-1 items-center justify-center rounded-xl border border-border bg-light-bg px-4 text-base font-semibold text-primary-black transition-colors hover:bg-primary-white disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span className="inline-flex items-center justify-center gap-2 leading-none">
                    <span className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
                    <span>Cancel</span>
                  </span>
                </button>
              </div>
            </form>
          </motion.div>

          {showToast && (
            <div className="pointer-events-none fixed bottom-4 left-1/2 z-[140] -translate-x-1/2 rounded-full border border-gold/20 bg-[#0B0B0B] px-4 py-2 text-sm font-medium text-primary-white shadow-premium">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-gold" />
                Preparing your WhatsApp request…
              </span>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
