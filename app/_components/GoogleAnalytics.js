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

  return <></>;
}
