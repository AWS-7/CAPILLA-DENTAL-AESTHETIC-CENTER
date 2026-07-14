import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AppRoutes from './routes';
import AnalyticsPlaceholders from './components/seo/AnalyticsPlaceholders';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AnalyticsPlaceholders />
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
}
