import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";
import { Header } from "@/components/header";
import { PageWrapper } from "@/components/page-wrapper";
import { GoogleTagManagerHead, GoogleTagManagerBody } from "@/components/google-tag-manager";
import { siteSchemas } from "@/lib/schema";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const SITE_URL = "https://www.david-ortiz.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "David Ortiz | Desarrollo de páginas web para negocios",
  description:
    "Desarrollador web en Colombia. Creo páginas web modernas, responsivas y profesionales para negocios, emprendedores y marcas personales.",
  keywords: [
    "desarrollo web",
    "páginas web para negocios",
    "diseñador web Colombia",
    "desarrollador web Colombia",
    "landing pages",
    "páginas web Valledupar",
    "sitios web profesionales",
    "diseño web para negocios",
    "portafolio desarrollador web",
  ],
  authors: [{ name: "David Ortiz", url: SITE_URL }],
  creator: "David Ortiz",
  publisher: "David Ortiz",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "David Ortiz | Páginas web profesionales para negocios",
    description:
      "Creo sitios web modernos y responsivos para negocios que quieren mejorar su presencia digital y recibir clientes.",
    url: SITE_URL,
    siteName: "David Ortiz",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/icon.png`,
        width: 512,
        height: 512,
        alt: "Portafolio de David Ortiz, desarrollador web para negocios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Ortiz | Desarrollo de páginas web para negocios",
    description:
      "Creo páginas web modernas y profesionales para negocios, emprendedores y marcas personales.",
    images: [`${SITE_URL}/icon.png`],
  },
};

function JsonLd() {
  const s = siteSchemas();

  const combined = {
    "@context": "https://schema.org",
    "@graph": [s.professionalService, s.person, s.webSite],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(combined) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <GoogleTagManagerHead />
        <link rel="alternate" type="text/plain" href="/llms.txt" />
        <JsonLd />
      </head>
      <body
        className={`${inter.className} bg-white dark:bg-black text-black dark:text-white transition-colors duration-300`}
      >
        <GoogleTagManagerBody />
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Ir al inicio
        </a>
        <Header />
        <PageWrapper>
          <main>{children}</main>
        </PageWrapper>
      </body>
    </html>
  );
}
