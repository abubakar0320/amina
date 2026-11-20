import type { MetadataRoute } from "next";
import { toAbsoluteUrl } from "@/config/site";
import { PUBLICATIONS } from "@/data/publications-and-profiles";

const STATIC_SITE_LAST_MODIFIED = "2026-05-28";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: toAbsoluteUrl("/"),
      lastModified: STATIC_SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: toAbsoluteUrl("/about"),
      lastModified: STATIC_SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: toAbsoluteUrl("/research"),
      lastModified: STATIC_SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: toAbsoluteUrl("/publications"),
      lastModified: STATIC_SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: toAbsoluteUrl("/teaching"),
      lastModified: STATIC_SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: toAbsoluteUrl("/cv"),
      lastModified: STATIC_SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: toAbsoluteUrl("/contact"),
      lastModified: STATIC_SITE_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.75,
    },
  ];

  const publicationRoutes: MetadataRoute.Sitemap = PUBLICATIONS.map(
    (publication) => ({
      url: toAbsoluteUrl(`/publications/${publication.slug}`),
      lastModified: publication.publishedIsoDate,
      changeFrequency: "yearly",
      priority: 0.95,
    })
  );

  return [...staticRoutes, ...publicationRoutes];
}
