import { MetadataRoute } from "next";

const SITE_URL = "https://www.david-ortiz.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = [
    { url: SITE_URL, priority: 1 },
    { url: `${SITE_URL}/servicios/paginas-web-para-negocios`, priority: 0.9 },
    { url: `${SITE_URL}/servicios/landing-pages`, priority: 0.9 },
    { url: `${SITE_URL}/servicios/ecommerce`, priority: 0.9 },
    { url: `${SITE_URL}/servicios/paginas-web-bogota`, priority: 0.8 },
    { url: `${SITE_URL}/servicios/paginas-web-colombia`, priority: 0.8 },
    { url: `${SITE_URL}/blog/cuanto-cuesta-una-pagina-web-en-colombia`, priority: 0.7 },
    { url: `${SITE_URL}/blog/por-que-tu-negocio-necesita-una-pagina-web`, priority: 0.7 },
    { url: `${SITE_URL}/blog/pagina-web-vs-instagram-para-negocios`, priority: 0.7 },
  ];

  return pages.map((page) => ({
    url: page.url,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: page.priority,
  }));
}
