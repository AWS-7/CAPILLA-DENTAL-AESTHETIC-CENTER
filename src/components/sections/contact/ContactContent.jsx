import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
  Siren,
} from 'lucide-react';
import {
  Container,
  SectionTitle,
  PrimaryButton,
  SecondaryButton,
} from '../../common';
import { clinicInfo } from '../../../data/clinic';
import { contactTreatments } from '../../../data/contactPage';
import { fadeUp, slideInLeft, slideInRight } from '../../../utils/animations';
import { trackingEvents } from '../../../utils/analytics';

const inputClass =
  'w-full min-h-12 rounded-2xl border border-border bg-light-bg px-4 py-3.5 text-base outline-none transition-colors focus:border-gold focus:bg-primary-white';

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: '',
    date: '',
    time: '',
    message: '',
  });

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    trackingEvents.formSubmit(form.treatment || 'general');
    setSubmitted(true);
  };

  return (
    <>
      <section className="section-padding bg-primary-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-8"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Visit Us</p>
                <h2 className="font-display text-3xl md:text-4xl text-primary-black">
                  Contact Information
                </h2>
              </div>

              <ul className="space-y-5">
                {clinicInfo.locations.map((loc) => (
                  <li key={loc.id} className="flex gap-4">
                    <MapPin className="mt-1 shrink-0 text-gold" size={18} />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-dark-bg/40 mb-1">
                        Address · {loc.label}
                      </p>
                      <a
                        href={loc.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-light text-dark-bg/75 hover:text-gold"
                      >
                        {loc.full}
                      </a>
                    </div>
                  </li>
                ))}
                <li className="flex gap-4">
                  <Phone className="mt-1 shrink-0 text-gold" size={18} />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-dark-bg/40 mb-1">Phone</p>
                    {clinicInfo.locations.map((loc) => (
                      <a
                        key={loc.id}
                        href={loc.phoneHref}
                        className="block text-sm font-light text-dark-bg/75 hover:text-gold"
                      >
                        <span className="font-medium text-dark-bg/90">{loc.label}:</span>{' '}
                        {loc.phone}
                      </a>
                    ))}
                  </div>
                </li>
                <li className="flex gap-4">
                  <MessageCircle className="mt-1 shrink-0 text-gold" size={18} />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-dark-bg/40 mb-1">WhatsApp</p>
                    <a
                      href={clinicInfo.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-light text-dark-bg/75 hover:text-gold"
                    >
                      {clinicInfo.whatsapp}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail className="mt-1 shrink-0 text-gold" size={18} />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-dark-bg/40 mb-1">Email</p>
                    <a href={clinicInfo.emailHref} className="text-sm font-light text-dark-bg/75 hover:text-gold">
                      {clinicInfo.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock className="mt-1 shrink-0 text-gold" size={18} />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-dark-bg/40 mb-1">Working Hours</p>
                    {clinicInfo.workingHours.map((h) => (
                      <p key={h.day} className="text-sm font-light text-dark-bg/75">
                        <span className="font-medium text-dark-bg/90">{h.day}:</span> {h.hours}
                      </p>
                    ))}
                  </div>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <PrimaryButton
                  href={clinicInfo.whatsappHref}
                  external
                  variant="gold"
                  className="w-full sm:w-auto"
                >
                  <MessageCircle size={16} />
                  WhatsApp Now
                </PrimaryButton>
                <SecondaryButton href={clinicInfo.phoneHref} className="w-full sm:w-auto">
                  <Phone size={16} />
                  Call Now
                </SecondaryButton>
              </div>

              <div className="rounded-3xl border border-gold/30 bg-gold-muted p-6">
                <div className="flex items-start gap-3">
                  <Siren className="text-gold shrink-0 mt-0.5" size={20} />
                  <div>
                    <h3 className="font-display text-xl text-primary-black">Emergency Contact</h3>
                    <p className="mt-2 text-sm font-light text-dark-bg/60 leading-relaxed">
                      For urgent dental pain during working hours, call us immediately. We prioritise emergency slots whenever possible.
                    </p>
                    <a
                      href={clinicInfo.phoneHref}
                      className="mt-3 inline-block text-sm font-medium text-gold hover:underline"
                    >
                      {clinicInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-dark-bg/40 mb-3">Social</p>
                <div className="flex gap-3">
                  {[
                    { href: clinicInfo.social.instagram, icon: Instagram, label: 'Instagram' },
                    { href: clinicInfo.social.facebook, icon: Facebook, label: 'Facebook' },
                    { href: clinicInfo.social.youtube, icon: Youtube, label: 'YouTube' },
                  ].map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-dark-bg/50 hover:border-gold hover:text-gold transition-colors"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="rounded-3xl border border-border bg-primary-white p-5 sm:p-6 md:p-9 shadow-premium">
                <h2 className="font-display text-[1.65rem] sm:text-2xl md:text-3xl text-primary-black break-safe">
                  Appointment Form
                </h2>
                <p className="mt-2 text-sm font-light text-dark-bg/55">
                  Frontend form UI only — connect to your booking backend later.
                </p>

                {submitted ? (
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="mt-8 rounded-2xl bg-light-bg border border-border p-8 text-center"
                  >
                    <p className="font-display text-2xl text-primary-black">Request Received</p>
                    <p className="mt-3 text-sm font-light text-dark-bg/55">
                      Thank you, {form.name || 'there'}. Our team will confirm your consultation shortly.
                      Prefer faster confirmation? Message us on WhatsApp.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                      <PrimaryButton href={clinicInfo.whatsappHref} external variant="gold">
                        WhatsApp Us
                      </PrimaryButton>
                      <SecondaryButton
                        onClick={() => {
                          setSubmitted(false);
                          setForm({
                            name: '',
                            phone: '',
                            email: '',
                            treatment: '',
                            date: '',
                            time: '',
                            message: '',
                          });
                        }}
                      >
                        Submit Another
                      </SecondaryButton>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label className="mb-1.5 block text-xs uppercase tracking-wider text-dark-bg/45">
                        Full Name
                      </label>
                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        className={inputClass}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs uppercase tracking-wider text-dark-bg/45">
                        Phone Number
                      </label>
                      <input
                        required
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={onChange}
                        className={inputClass}
                        placeholder="+91"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs uppercase tracking-wider text-dark-bg/45">
                        Email
                      </label>
                      <input
                        required
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={onChange}
                        className={inputClass}
                        placeholder="you@email.com"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-1.5 block text-xs uppercase tracking-wider text-dark-bg/45">
                        Treatment Selection
                      </label>
                      <select
                        required
                        name="treatment"
                        value={form.treatment}
                        onChange={onChange}
                        className={inputClass}
                      >
                        <option value="">Select a treatment</option>
                        {contactTreatments.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs uppercase tracking-wider text-dark-bg/45">
                        Preferred Date
                      </label>
                      <input
                        required
                        name="date"
                        type="date"
                        value={form.date}
                        onChange={onChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs uppercase tracking-wider text-dark-bg/45">
                        Preferred Time
                      </label>
                      <input
                        required
                        name="time"
                        type="time"
                        value={form.time}
                        onChange={onChange}
                        className={inputClass}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-1.5 block text-xs uppercase tracking-wider text-dark-bg/45">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={onChange}
                        className={inputClass}
                        placeholder="Tell us about your concerns or goals"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <PrimaryButton type="submit" variant="gold" className="w-full sm:w-auto" size="lg">
                        Book Appointment
                      </PrimaryButton>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-24 bg-primary-white">
        <Container>
          <SectionTitle
            eyebrow="Location"
            title="Find Us on the Map"
            description="Capilla Dental & Aesthetic Center — Perumbakkam (Chennai) and Salem branches."
          />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {clinicInfo.locations.map((loc) => (
              <div key={loc.id} className="flex flex-col">
                <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                  <MapPin size={15} />
                  {loc.label}
                </p>
                <div className="overflow-hidden rounded-3xl border border-border shadow-soft aspect-[16/10]">
                  <iframe
                    title={`Capilla clinic map — ${loc.label}`}
                    src={loc.mapsEmbedUrl}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
