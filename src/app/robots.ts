import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://your-domain.com";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/api/", "/_next/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
