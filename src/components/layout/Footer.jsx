import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
} from 'lucide-react';
import {
  clinicInfo,
  footerQuickLinks,
  footerTreatments,
  legalLinks,
} from '../../data/clinic';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg text-primary-white">
      <div className="container-premium pt-16 md:pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold">
                <span className="font-display text-lg text-primary-white font-semibold">C</span>
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-xl font-semibold">Capilla</span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-gold-light">
                  Dental & Aesthetic Center
                </span>
              </span>
            </Link>
            <p className="mt-5 text-sm font-light leading-relaxed text-primary-white/55 max-w-sm">
              {clinicInfo.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={clinicInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-white/15 text-primary-white/70 transition-all hover:border-gold hover:text-gold"
              >
                <Instagram size={16} />
              </a>
              <a
                href={clinicInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-white/15 text-primary-white/70 transition-all hover:border-gold hover:text-gold"
              >
                <Facebook size={16} />
              </a>
              <a
                href={clinicInfo.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-white/15 text-primary-white/70 transition-all hover:border-gold hover:text-gold"
              >
                <Youtube size={16} />
              </a>
              <a
                href={clinicInfo.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-white/15 text-primary-white/70 transition-all hover:border-gold hover:text-gold"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-gold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerQuickLinks.map((link) => (
                <li key={link.path + link.label}>
                  <Link
                    to={link.path}
                    className="text-sm font-light text-primary-white/55 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-gold mb-5">
              Treatments
            </h4>
            <ul className="space-y-3">
              {footerTreatments.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm font-light text-primary-white/55 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-gold mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <a
                  href={clinicInfo.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-primary-white/55 hover:text-gold transition-colors"
                >
                  {clinicInfo.address.full}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-gold" />
                <a
                  href={clinicInfo.phoneHref}
                  className="text-sm font-light text-primary-white/55 hover:text-gold transition-colors"
                >
                  {clinicInfo.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
                <a
                  href={clinicInfo.emailHref}
                  className="text-sm font-light text-primary-white/55 hover:text-gold transition-colors"
                >
                  {clinicInfo.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={16} className="mt-0.5 shrink-0 text-gold" />
                <div className="space-y-1">
                  {clinicInfo.workingHours.map((item) => (
                    <p key={item.day} className="text-sm font-light text-primary-white/55">
                      <span className="text-primary-white/80">{item.day}:</span> {item.hours}
                    </p>
                  ))}
                </div>
              </li>
            </ul>

            <div className="mt-6 overflow-hidden rounded-2xl border border-primary-white/10 aspect-video">
              <iframe
                title="Clinic location"
                src={clinicInfo.mapsEmbedUrl}
                className="h-full w-full border-0 grayscale opacity-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-primary-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-white/40">
            © {year} {clinicInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-xs text-primary-white/40 transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
