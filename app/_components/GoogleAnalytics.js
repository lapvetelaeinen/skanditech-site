"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { pageview } from "../lib/gtagHelper";

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const gtmId = "GTM-W53SWH5C";

  useEffect(() => {
    const url = pathname + searchParams.toString();
    pageview(gtmId, url);
  }, [pathname, searchParams, gtmId]);

  return (
    <>
      <Script
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `  window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
            
              if(localStorage.getItem('consentMode') === null){
                gtag('consent', 'default', {
                  'ad_storage': 'denied',
                  'analytics_storage': 'denied',
                  'functionality_storage': 'denied',
                  'personalization_storage': 'denied',
                  'security_storage': 'denied',
                });
              } else {
                gtag('consent', 'default', JSON.parse(localStorage.getItem('consentMode')));
              }
            `,
        }}
      />
      <Script>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=GTM-W53SWH5C`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </Script>
      <Script
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', 'GTM-W53SWH5C');
            `,
        }}
      />
    </>
  );
}
