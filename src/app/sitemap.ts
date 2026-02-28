import { MetadataRoute } from "next";
import { i18n } from "../../i18n-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.steviggio.fr";
  const lastModified = new Date();

  const routes = i18n.locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 1,
  }));

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...routes,
  ];
}
