import type { MetadataRoute } from "next";
import { editions, siteUrl } from "../lib/editions";

export default function sitemap(): MetadataRoute.Sitemap {
  const latest = editions[editions.length - 1].datePublished;
  return [
    {
      url: `${siteUrl}/`,
      lastModified: latest,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...editions.map((edition) => ({
      url: `${siteUrl}/${edition.slug}`,
      lastModified: edition.datePublished,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
