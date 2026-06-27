import {
  contactAddressLine1,
  contactAddressLine2,
  contactEmail,
  contactMapHref,
  contactPhone,
  contactPhoneHref,
} from '../data/contact';
import { services, siteName, siteTagline, siteUrl, teamContent } from '../data/site';
import type { FaqItem } from '../data/sss';
import type { Yazi } from '../data/yazilar';

const ORG_ID = `${siteUrl}/#organization`;

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
    '@id': ORG_ID,
    name: siteName,
    alternateName: 'ARKENTRA',
    url: siteUrl,
    logo: `${siteUrl}/images/logo/arkentra-logo-color.png`,
    image: `${siteUrl}/images/og-default.jpg`,
    description: siteTagline,
    telephone: contactPhone,
    email: contactEmail,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contactAddressLine1,
      addressLocality: 'Bayrampaşa',
      addressRegion: 'İstanbul',
      addressCountry: 'TR',
    },
    areaServed: {
      '@type': 'City',
      name: 'İstanbul',
    },
    priceRange: '$$',
    sameAs: [contactMapHref],
  };
}

export function personSchema(member: (typeof teamContent.founders)[number]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.name,
    jobTitle: member.role,
    image: `${siteUrl}${member.image}`,
    worksFor: { '@id': ORG_ID },
    url: `${siteUrl}/ekibimiz`,
  };
}

export function foundersSchema() {
  return teamContent.founders.map(personSchema);
}

export function faqPageSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function serviceCatalogSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'ARKENTRA Kentsel Dönüşüm Hizmetleri',
    itemListElement: services.map((service, index) => ({
      '@type': 'Offer',
      position: index + 1,
      itemOffered: {
        '@type': 'Service',
        name: service,
        provider: { '@id': ORG_ID },
        areaServed: 'İstanbul, Türkiye',
      },
    })),
  };
}

export function servicePageSchema(serviceName: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    provider: { '@id': ORG_ID },
    areaServed: {
      '@type': 'City',
      name: 'İstanbul',
    },
  };
}

export function articleSchema(yazi: Yazi) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: yazi.title,
    description: yazi.excerpt,
    datePublished: yazi.date,
    image: yazi.imageSrc.startsWith('http') ? yazi.imageSrc : `${siteUrl}${yazi.imageSrc}`,
    author: {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: siteName,
    },
    publisher: {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo/arkentra-logo-color.png`,
      },
    },
    mainEntityOfPage: `${siteUrl}/yazilarimiz/${yazi.slug}`,
  };
}

export function breadcrumbSchema(items: { name: string; url?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}` } : {}),
    })),
  };
}
