import { MetadataRoute } from "next";

const SITE_URL = "https://www.david-ortiz.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = [
    { url: SITE_URL, priority: 1, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/servicios/paginas-web-para-negocios`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/servicios/landing-pages`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/servicios/ecommerce`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/servicios/paginas-web-bogota`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/servicios/paginas-web-colombia`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/blog/cuanto-cuesta-una-pagina-web-en-colombia`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/blog/por-que-tu-negocio-necesita-una-pagina-web`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/blog/pagina-web-vs-instagram-para-negocios`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/politica-de-privacidad`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${SITE_URL}/terminos-y-condiciones`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return pages.map((page) => ({
    url: page.url,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
