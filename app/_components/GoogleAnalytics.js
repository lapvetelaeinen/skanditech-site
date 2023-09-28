"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { pageview } from "../lib/gtagHelper";

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const gtmId = "GTM-W53SWH5C";

  const helpNavigation = (gtmId, url) => {
    window.gtag("config", gtmId, {
      page_path: url,
    });
  };

  useEffect(() => {
    const url = pathname + searchParams.toString();
    if (typeof window !== undefined) {
      return;
    }
    helpNavigation(gtmId, url);
  }, [pathname, searchParams]);

  return <></>;
}
