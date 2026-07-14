/**
 * Marketing & analytics placeholders.
 * Replace measurement IDs before production launch.
 * Events stay no-ops until scripts are enabled.
 */

export const analyticsConfig = {
  ga4MeasurementId: 'G-XXXXXXXXXX', // Google Analytics 4
  gtmContainerId: 'GTM-XXXXXXX', // Google Tag Manager
  metaPixelId: '000000000000000', // Meta Pixel
  googleAdsId: 'AW-XXXXXXXXX', // Google Ads
  googleAdsConversionLabel: 'XXXXXXXXXXXXXXXXXX',
  searchConsoleVerification: '', // meta verification token
  enableInProduction: false, // flip to true after IDs are live
};

export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.info('[analytics:placeholder]', eventName, params);
  }
}

export const trackingEvents = {
  whatsappClick: () =>
    trackEvent('whatsapp_click', { event_category: 'engagement', event_label: 'whatsapp' }),
  phoneClick: () =>
    trackEvent('phone_click', { event_category: 'engagement', event_label: 'call' }),
  bookAppointmentClick: () =>
    trackEvent('book_appointment_click', { event_category: 'conversion', event_label: 'cta' }),
  formSubmit: (treatment = 'general') =>
    trackEvent('appointment_form_submit', {
      event_category: 'conversion',
      event_label: treatment,
    }),
  offerClaim: (offerName) =>
    trackEvent('offer_claim_click', { event_category: 'conversion', event_label: offerName }),
};
