import { Helmet } from 'react-helmet-async';
import { analyticsConfig } from '../../utils/analytics';

/**
 * Injects GA4 / GTM / Meta Pixel / Ads placeholders when enabled.
 * Safe no-op while enableInProduction is false.
 */
export default function AnalyticsPlaceholders() {
  if (!analyticsConfig.enableInProduction) {
    return (
      <Helmet>
        {/* Google Search Console verification placeholder */}
        {analyticsConfig.searchConsoleVerification ? (
          <meta
            name="google-site-verification"
            content={analyticsConfig.searchConsoleVerification}
          />
        ) : (
          <meta name="capilla:analytics" content="placeholders-ready" />
        )}
      </Helmet>
    );
  }

  const { gtmContainerId, ga4MeasurementId, metaPixelId } = analyticsConfig;

  return (
    <Helmet>
      {gtmContainerId && gtmContainerId !== 'GTM-XXXXXXX' && (
        <script>{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmContainerId}');
        `}</script>
      )}

      {ga4MeasurementId && ga4MeasurementId !== 'G-XXXXXXXXXX' && (
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}`} />
      )}
      {ga4MeasurementId && ga4MeasurementId !== 'G-XXXXXXXXXX' && (
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ga4MeasurementId}');
        `}</script>
      )}

      {metaPixelId && metaPixelId !== '000000000000000' && (
        <script>{`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
          document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${metaPixelId}');
          fbq('track', 'PageView');
        `}</script>
      )}
    </Helmet>
  );
}
