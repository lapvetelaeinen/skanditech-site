"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../lib/storageHelper";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = localStorage.getItem("cookie_consent");

    if (storedCookieConsent) {
      setCookieConsent(storedCookieConsent);
    }
  }, [cookieConsent]);

  const acceptAll = () => {
    setConsent({
      necessary: true,
      analytics: true,
      preferences: true,
      martketing: true,
    });
  };

  const declineAll = () => {
    setConsent({
      necessary: false,
      analytics: false,
      preferences: false,
      martketing: false,
    });
  };

  const setConsent = (consent) => {
    const consentMode = {
      functionality_storage: consent.necessary ? "granted" : "denied",
      security_storage: consent.necessary ? "granted" : "denied",
      ad_storage: consent.martketing ? "granted" : "denied",
      analytics_storage: consent.analytics ? "granted" : "denied",
      personalization_storage: consent.preferences ? "granted" : "denied",
    };
    window.gtag("consent", "update", consent);
    localStorage.setItem("consentMode", JSON.stringify(consentMode));
    localStorage.setItem("cookie_consent", JSON.stringify(consentMode));
    setCookieConsent(true);
  };

  useEffect(() => {
    if (!cookieConsent) {
      const cookieBanner = document.getElementById("cookies");
      cookieBanner.style.bottom = "0px";
    }
  }, [cookieConsent]);

  if (cookieConsent) {
    return;
  }

  return (
    <div
      id="cookies"
      className="z-50 py-10 px-4 fixed w-full flex flex-col gap-6 justify-center items-center bottom-[-100%] transition-all duration-300 bg-neutral-50"
    >
      <div className="text-center">
        <p className="text-xl">
          Vi använder oss av{" "}
          <span className="font-bold text-skandiblue">cookies</span> för att
          förbättra användarupplevelsen på vår hemsida.
        </p>
      </div>
      <div className="flex gap-12">
        <button
          onClick={declineAll}
          className="md:px-12 px-6 py-4 text-lightolive rounded-lg md:text-xl text-lg "
        >
          Neka cookies
        </button>
        <button
          onClick={acceptAll}
          className="bg-skandiblue md:px-12 px-6 py-4 text-white md:text-xl text-lg hover:scale-105 duration-100"
        >
          Godkänn
        </button>
      </div>
    </div>
  );
}
