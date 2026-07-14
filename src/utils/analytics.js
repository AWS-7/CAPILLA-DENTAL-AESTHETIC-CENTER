/**
 * Marketing & analytics placeholders.
 * Fill VITE_* IDs in .env.local, then set enableInProduction true.
 * Events push to dataLayer / gtag even before scripts load (queue-safe).
 */

const env = import.meta.env;

export const analyticsConfig = {
  ga4MeasurementId: env.VITE_GA4_MEASUREMENT_ID || 'G-XXXXXXXXXX',
  gtmContainerId: env.VITE_GTM_CONTAINER_ID || 'GTM-XXXXXXX',
  metaPixelId: env.VITE_META_PIXEL_ID || '000000000000000',
  googleAdsId: env.VITE_GOOGLE_ADS_ID || 'AW-XXXXXXXXX',
  googleAdsConversionLabel: env.VITE_GOOGLE_ADS_CONVERSION_LABEL || 'XXXXXXXXXXXXXXXXXX',
  searchConsoleVerification: env.VITE_SEARCH_CONSOLE_VERIFICATION || '',
  // Flip to true after real measurement IDs are configured
  enableInProduction: env.VITE_ENABLE_ANALYTICS === 'true',
};

export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  if (typeof window.fbq === 'function' && eventName === 'appointment_form_submit') {
    window.fbq('track', 'Lead', params);
  }

  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.info('[analytics:placeholder]', eventName, params);
  }
}

/** Google Ads conversion placeholder */
export function trackAdsConversion(sendTo) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  const conversion =
    sendTo ||
    `${analyticsConfig.googleAdsId}/${analyticsConfig.googleAdsConversionLabel}`;
  window.gtag('event', 'conversion', { send_to: conversion });
}

export const trackingEvents = {
  whatsappClick: () =>
    trackEvent('whatsapp_click', { event_category: 'engagement', event_label: 'whatsapp' }),
  phoneClick: () =>
    trackEvent('phone_click', { event_category: 'engagement', event_label: 'call' }),
  bookAppointmentClick: () =>
    trackEvent('book_appointment_click', { event_category: 'conversion', event_label: 'cta' }),
  formSubmit: (treatment = 'general') => {
    trackEvent('appointment_form_submit', {
      event_category: 'conversion',
      event_label: treatment,
    });
    trackAdsConversion();
  },
  offerClaim: (offerName) =>
    trackEvent('offer_claim_click', { event_category: 'conversion', event_label: offerName }),
};
