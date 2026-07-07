"use client";

import Script from "next/script";
import { useEffect } from "react";
import {
  COOKIE_CONSENT_CHANGED_EVENT,
  getStoredConsent,
} from "@/components/CookieConsent/cookieConsent";
import {
  GA4_MEASUREMENT_ID,
  GTM_CONTAINER_ID,
  updateGoogleConsent,
} from "@/components/CookieConsent/googleConsentMode";

export function GoogleTags() {
  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) updateGoogleConsent(stored);

    const onConsentChange = () => {
      const value = getStoredConsent();
      if (value) updateGoogleConsent(value);
    };

    window.addEventListener(COOKIE_CONSENT_CHANGED_EVENT, onConsentChange);
    return () => window.removeEventListener(COOKIE_CONSENT_CHANGED_EVENT, onConsentChange);
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA4_MEASUREMENT_ID}');
        `}
      </Script>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');
        `}
      </Script>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="Google Tag Manager"
        />
      </noscript>
    </>
  );
}
