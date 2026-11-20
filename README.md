# Amina Mumtaz — International Academic Website

Academic portfolio, research showcase, publication archive, teaching resources, and curriculum vitae for **Amina Mumtaz**, Applied Linguistics Researcher & University Lecturer.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

## Production Domain & Environment Configuration

Copy `.env.example` to `.env.local` (or set environment variables in your hosting provider) before deploying live:

1. **`NEXT_PUBLIC_SITE_URL`**: Configure your verified production origin (preferred domain baseline: `https://aminamumtaz.com`). Localhost URLs are never published as production canonical URLs; when unset, `src/config/site.ts` falls back to `https://aminamumtaz.com`.
2. **`RESEND_API_KEY`**, **`CONTACT_FROM_EMAIL`**, **`CONTACT_TO_EMAIL`**: Required for live contact-form email delivery on `/contact` (`POST /api/contact`).
3. **`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` / `NEXT_PUBLIC_BING_SITE_VERIFICATION`**: Optional meta verification tokens emitted only when explicitly provided.

## Search Engine Indexing & Webmaster Deployment Checklist

Note: The domain `aminamumtaz.com` is a preferred domain target unless verified as live. Once a production domain is connected and deployed over HTTPS:

### Google Search Console Readiness
1. Verify domain ownership (recommended: **Domain property via DNS TXT record**, or set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` for HTML tag verification).
2. Confirm `/robots.txt` allows crawling of public pages (`Allow: /`, `Disallow: /api/`).
3. Submit `<SITE_URL>/sitemap.xml` inside **Indexing → Sitemaps**.
4. Run **URL Inspection** on key canonical pages (`/`, `/about`, `/research`, `/publications`, `/publications/study-of-colligation`, `/teaching`, `/cv`, `/contact`) and request indexing once live.
5. Monitor coverage, canonical selection, and Schema.org structured-data extraction (`Person`, `WebSite`, `ProfilePage`, `ScholarlyArticle`, `BreadcrumbList`).

### Bing Webmaster Tools Readiness
1. Add and verify the site property (via DNS verification, Search Console import, or `NEXT_PUBLIC_BING_SITE_VERIFICATION` emitting `<meta name="msvalidate.01">`).
2. Submit `<SITE_URL>/sitemap.xml` and verify URL crawlability and mobile compatibility.
3. Review Bing URL Inspection for canonical URLs and Open Graph metadata.

## Vercel Production Deployment Instructions

1. Import the repository into Vercel (Framework Preset: **Next.js**). Build command: `npm run build`; Install command: `npm ci`.
2. Add environment variables in **Project Settings → Environment Variables** (`Production` and `Preview` as appropriate):
   - `NEXT_PUBLIC_SITE_URL` (set to your verified HTTPS production origin, e.g. `https://aminamumtaz.com`)
   - `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`
   - Optional: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, `NEXT_PUBLIC_BING_SITE_VERIFICATION`
3. Connect your custom domain under **Settings → Domains** and configure DNS `A` / `CNAME` records per Vercel's instructions until SSL issuance completes.
4. For high-traffic production deployments, consider upgrading the in-memory contact API rate limiter in `src/app/api/contact/route.ts` to a distributed store (e.g., Upstash Redis / Vercel WAF) so limits persist across serverless instances.

