import type { MetadataRoute } from 'next';
import { FEATURED_YAZI_SLUG, yazilar } from './data/yazilar';
import { serviceSlug, services, siteUrl } from './data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/hakkimizda`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/hizmetler`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/yazilarimiz`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/sss`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/ekibimiz`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/iletisim`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/kvkk`, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteUrl}/hizmetler/${serviceSlug(service)}`,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const articleRoutes: MetadataRoute.Sitemap = yazilar.map((yazi) => ({
    url: `${siteUrl}/yazilarimiz/${yazi.slug}`,
    lastModified: yazi.date,
    changeFrequency: yazi.slug === FEATURED_YAZI_SLUG ? 'weekly' : 'monthly',
    priority: yazi.slug === FEATURED_YAZI_SLUG ? 0.95 : 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...articleRoutes];
}
