import "./globals.css";
import { Inter, Rubik, Lato } from "next/font/google";
import NavBar from "./_components/navbar";
import NavContextProvider from "@/context/NavContextProvider";
import NavDrawer from "./_components/NavDrawer";
import Script from "next/script";
import CookieBanner from "./_components/CookieBanner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });
const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: "Skanditech - Målinriktad webbutveckling",
  description:
    "Webbutveckling fokuserad på företags specifika mål och utmaningar",
};

export default function RootLayout({ children }) {
  // const scriptToInject = () => {
  //   window.dataLayer = window.dataLayer || [];
  //   function gtag(){dataLayer.push(arguments);}

  //   if(localStorage.getItem('consentMode') === null){
  //     gtag('consent', 'default', {
  //       'ad_storage': 'denied',
  //       'analytics_storage': 'denied',
  //       'functionality_storage': 'denied',
  //       'personalization_storage': 'denied',
  //       'security_storage': 'denied',
  //     });
  //   } else {
  //     gtag('consent', 'default', JSON.parse(localStorage.getItem('consentMode')));
  //   }
  // };

  return (
    <html lang="sv">
      <body
        className={`${inter.variable} ${rubik.variable} ${lato.className} bg-eggshell`}
      >
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

          <div className="absolute z-50 w-full">
            <NavContextProvider>
              <NavDrawer />
              <NavBar />
            </NavContextProvider>
          </div>

          {children}
          <CookieBanner />
        </>
      </body>
    </html>
  );
}
