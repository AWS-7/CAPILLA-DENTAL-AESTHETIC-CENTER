import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AppRoutes from './routes';
import AnalyticsPlaceholders from './components/seo/AnalyticsPlaceholders';
import SplashScreen from './components/common/SplashScreen';
import CookieConsent from './components/common/CookieConsent';
import PromoPopup from './components/common/PromoPopup';
import BookingModalProvider from './context/BookingModalProvider';

const CONSENT_KEY = 'capilla-cookie-consent';

export default function App() {
  const [consent, setConsent] = useState(() => {
    if (typeof window === 'undefined') return null;
    return window.localStorage.getItem(CONSENT_KEY);
  });

  const handleConsent = (value) => {
    try {
      window.localStorage.setItem(CONSENT_KEY, value);
    } catch {
      /* ignore storage errors */
    }
    setConsent(value);
  };

  return (
    <HelmetProvider>
      <BrowserRouter>
        <BookingModalProvider>
          <AnalyticsPlaceholders consent={consent === 'granted'} />
          <SplashScreen />
          <AppRoutes />
          <PromoPopup />
          <CookieConsent
            decided={Boolean(consent)}
            onAccept={() => handleConsent('granted')}
            onDecline={() => handleConsent('denied')}
          />
        </BookingModalProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
