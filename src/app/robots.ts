import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "Google-Extended", "OAI-SearchBot"],
        allow: "/",
      },
    ],
    sitemap: "https://www.david-ortiz.dev/sitemap.xml",
  };
}
