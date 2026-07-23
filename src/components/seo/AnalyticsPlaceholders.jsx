import { Helmet } from 'react-helmet-async';
import { analyticsConfig } from '../../utils/analytics';

function SearchConsoleVerification() {
  if (!analyticsConfig.searchConsoleVerification) return null;
  return (
    <meta
      name="google-site-verification"
      content={analyticsConfig.searchConsoleVerification}
    />
  );
}

/**
 * Injects GA4 / GTM / Meta Pixel / Ads placeholders when enabled.
 * Search Console meta tag is always emitted when configured (no cookie consent required).
 */
export default function AnalyticsPlaceholders({ consent = false }) {
  const trackingEnabled = analyticsConfig.enableInProduction && consent;

  return (
    <Helmet>
      <SearchConsoleVerification />

      {!trackingEnabled ? (
        !analyticsConfig.searchConsoleVerification ? (
          <meta name="capilla:analytics" content="placeholders-ready" />
        ) : null
      ) : (
        <>
          {analyticsConfig.gtmContainerId && analyticsConfig.gtmContainerId !== 'GTM-XXXXXXX' && (
            <script>{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${analyticsConfig.gtmContainerId}');
        `}</script>
          )}

          {analyticsConfig.ga4MeasurementId &&
            analyticsConfig.ga4MeasurementId !== 'G-XXXXXXXXXX' && (
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.ga4MeasurementId}`}
              />
            )}
          {analyticsConfig.ga4MeasurementId &&
            analyticsConfig.ga4MeasurementId !== 'G-XXXXXXXXXX' && (
              <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${analyticsConfig.ga4MeasurementId}');
        `}</script>
            )}

          {analyticsConfig.metaPixelId && analyticsConfig.metaPixelId !== '000000000000000' && (
            <script>{`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
          document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${analyticsConfig.metaPixelId}');
          fbq('track', 'PageView');
        `}</script>
          )}
        </>
      )}
    </Helmet>
  );
}
