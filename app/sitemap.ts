import type { MetadataRoute } from 'next';
import { ilceler } from './data/ilceler';
import { FEATURED_YAZI_SLUG, HIGH_PRIORITY_YAZI_SLUGS, yazilar } from './data/yazilar';
import { serviceSlug, services, siteUrl } from './data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/hakkimizda`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/hizmetler`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/kentsel-donusum-danismanligi`, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${siteUrl}/yazilarimiz`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/sss`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/ekibimiz`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/iletisim`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/muteahhit-teklif-karsilastirma`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/muteahhit-secimi-kontrol-listesi`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${siteUrl}/kvkk`, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const ilceRoutes: MetadataRoute.Sitemap = ilceler.map((ilce) => ({
    url: `${siteUrl}/${ilce.slug}`,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteUrl}/hizmetler/${serviceSlug(service)}`,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const articleRoutes: MetadataRoute.Sitemap = yazilar.map((yazi) => ({
    url: `${siteUrl}/yazilarimiz/${yazi.slug}`,
    lastModified: yazi.date,
    changeFrequency: HIGH_PRIORITY_YAZI_SLUGS.includes(
      yazi.slug as (typeof HIGH_PRIORITY_YAZI_SLUGS)[number],
    )
      ? 'weekly'
      : 'monthly',
    priority: yazi.slug === FEATURED_YAZI_SLUG ? 0.95 : HIGH_PRIORITY_YAZI_SLUGS.includes(
        yazi.slug as (typeof HIGH_PRIORITY_YAZI_SLUGS)[number],
      )
      ? 0.9
      : 0.7,
  }));

  return [...staticRoutes, ...ilceRoutes, ...serviceRoutes, ...articleRoutes];
}
