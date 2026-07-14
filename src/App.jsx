import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AppRoutes from './routes';
import AnalyticsPlaceholders from './components/seo/AnalyticsPlaceholders';
import SplashScreen from './components/common/SplashScreen';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AnalyticsPlaceholders />
        <SplashScreen />
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
}
