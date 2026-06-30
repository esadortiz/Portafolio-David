"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-KJC8372X";

export function GoogleTagManagerHead() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const events = ["mousemove", "touchstart", "scroll", "keydown", "click"] as const;

    const load = () => {
      if (loaded) return;
      setLoaded(true);
      events.forEach((e) => document.removeEventListener(e, load));
    };

    events.forEach((e) => document.addEventListener(e, load, { once: true, passive: true }));

    const timeout = setTimeout(load, 5000);

    return () => {
      clearTimeout(timeout);
      events.forEach((e) => document.removeEventListener(e, load));
    };
  }, [loaded]);

  useEffect(() => {
    if (!loaded) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(script);
  }, [loaded]);

  return null;
}

export function GoogleTagManagerBody() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
