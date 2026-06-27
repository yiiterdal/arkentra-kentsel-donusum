import type { MetadataRoute } from 'next';
import { siteUrl } from './data/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/about',
        '/contact',
        '/news',
        '/transactions',
        '/capabilities',
        '/careers',
        '/cases',
        '/services',
        '/team',
        '/terms',
        '/privacy',
      ],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
