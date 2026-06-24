"use client";

import { useState, useEffect } from "react";
import { LoadingScreen } from "@/components/loading-screen";
import { WhatsAppButton } from "@/components/whatsapp-button";

interface PageWrapperProps {
  children: React.ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 1200);

    return () => {
      clearTimeout(timer);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      {!isLoading && <WhatsAppButton />}
      {children}
    </>
  );
}

