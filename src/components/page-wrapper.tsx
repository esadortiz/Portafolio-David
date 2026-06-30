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
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.documentElement.style.overflow = previousOverflow;
    }, 300);

    return () => {
      clearTimeout(timer);
      document.documentElement.style.overflow = previousOverflow;
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

