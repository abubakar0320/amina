import type { MetadataRoute } from "next";
import { toAbsoluteUrl } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: toAbsoluteUrl("/sitemap.xml"),
  };
}
