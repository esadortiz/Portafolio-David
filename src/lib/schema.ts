const SITE_URL = "https://www.david-ortiz.dev";
const IMAGE_URL = `${SITE_URL}/icon.png`;

export function siteSchemas() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "David Ortiz",
    jobTitle: "Desarrollador Web",
    url: SITE_URL,
    image: `${SITE_URL}/About.me.png`,
    sameAs: [
      "https://github.com/esadortiz",
      "https://wa.me/573106289086",
    ],
    description:
      "Desarrollador web en Colombia especializado en páginas web para negocios, landing pages profesionales y e-commerce.",
    knowsAbout: [
      "Desarrollo web",
      "Landing pages",
      "Diseño web responsive",
      "SEO técnico",
      "Integración con WhatsApp",
      "E-commerce",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "CO",
    },
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "David Ortiz",
    alternateName: "David Ortiz Desarrollador Web",
    url: SITE_URL,
    logo: IMAGE_URL,
    image: `${SITE_URL}/About.me.png`,
    email: "esauortiz014@gmail.com",
    telephone: "+573106289086",
    address: {
      "@type": "Country",
      name: "Colombia",
    },
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    knowsAbout: [
      "Desarrollo web",
      "Landing pages",
      "Diseño web responsive",
      "SEO básico",
      "Formularios de contacto",
      "Integración con WhatsApp",
      "E-commerce",
      "Despliegue web",
    ],
    sameAs: [
      "https://github.com/esadortiz",
      "https://wa.me/573106289086",
    ],
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: SITE_URL,
    name: "David Ortiz - Desarrollo Web",
    description:
      "Portafolio de David Ortiz, desarrollador web en Colombia. Páginas web profesionales para negocios.",
    inLanguage: "es",
    publisher: {
      "@type": "Person",
      name: "David Ortiz",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return { person, professionalService, webSite };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function serviceSchema(params: {
  pageUrl: string;
  serviceName: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: params.serviceName,
    provider: {
      "@type": "Person",
      name: "David Ortiz",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    description: params.description,
    url: params.pageUrl,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      businessFunction: "https://schema.org/ProvideService",
      areaServed: {
        "@type": "Country",
        name: "Colombia",
      },
    },
  };
}

export function blogPostingSchema(params: {
  pageUrl: string;
  headline: string;
  description: string;
  imageUrl: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: params.headline,
    description: params.description,
    image: params.imageUrl,
    author: {
      "@type": "Person",
      name: "David Ortiz",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "David Ortiz",
    },
    url: params.pageUrl,
    datePublished: params.datePublished,
    dateModified: params.datePublished,
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
