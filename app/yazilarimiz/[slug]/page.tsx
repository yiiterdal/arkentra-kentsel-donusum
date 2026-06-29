import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import JsonLd from '../../components/JsonLd';
import YaziContent from '../../components/YaziContent';
import { getYaziBySlug, yazilar, FEATURED_YAZI_SLUG } from '../../data/yazilar';
import { siteUrl } from '../../data/site';
import { IMAGE_QUALITY } from '../../lib/image-utils';
import { articleSchema, breadcrumbSchema } from '../../lib/schema';
import type { Metadata } from 'next';

interface YaziPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return yazilar.map((yazi) => ({ slug: yazi.slug }));
}

export function generateMetadata({ params }: YaziPageProps): Metadata {
  const yazi = getYaziBySlug(params.slug);
  if (!yazi) return { title: 'Yazı Bulunamadı' };

  const imageUrl = yazi.imageSrc.startsWith('http') ? yazi.imageSrc : yazi.imageSrc;
  const isFeatured = yazi.slug === FEATURED_YAZI_SLUG;

  return {
    title: yazi.title,
    description: yazi.excerpt,
    ...(isFeatured && {
      keywords: [
        'kentsel dönüşüm kira yardımı 2026',
        'istanbul kentsel dönüşüm kira desteği',
        '2026 riskli yapı kira yardımı',
        'kiracı taşınma yardımı',
        'bayrampaşa kentsel dönüşüm',
        '6306 sayılı kanun kira yardımı',
      ],
    }),
    alternates: {
      canonical: `${siteUrl}/yazilarimiz/${yazi.slug}`,
    },
    openGraph: {
      type: 'article',
      publishedTime: yazi.date,
      title: yazi.title,
      description: yazi.excerpt,
      images: [{ url: imageUrl, alt: yazi.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: yazi.title,
      description: yazi.excerpt,
      images: [imageUrl],
    },
  };
}

export default function YaziPage({ params }: YaziPageProps) {
  const yazi = getYaziBySlug(params.slug);
  if (!yazi) notFound();

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-white">
      <JsonLd data={articleSchema(yazi)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Ana Sayfa', url: '/' },
          { name: 'Yazılarımız', url: '/yazilarimiz' },
          { name: yazi.title },
        ])}
      />

      <div className="container-editorial">
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-700 transition-colors">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <Link href="/yazilarimiz" className="hover:text-brand-700 transition-colors">
              Yazılarımız
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 line-clamp-1">{yazi.title}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-gray-500 mb-6">
            <span>{yazi.konu}</span>
            <span aria-hidden="true">·</span>
            <span>{yazi.tur}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={yazi.date}>{yazi.dateLabel}</time>
            {yazi.readTime && (
              <>
                <span aria-hidden="true">·</span>
                <span>{yazi.readTime}</span>
              </>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8 leading-tight">
            {yazi.title}
          </h1>

          <div className="relative aspect-[16/9] overflow-hidden mb-10 bg-gray-100">
            <Image
              src={yazi.imageSrc}
              alt={yazi.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              quality={IMAGE_QUALITY}
              priority
            />
          </div>

          <YaziContent content={yazi.content} />

          <Link
            href="/yazilarimiz"
            className="inline-block mt-8 text-sm font-semibold text-brand-700 hover:text-brand-800 transition-colors"
          >
            ← Yazılara dön
          </Link>
        </div>
      </div>
    </section>
  );
}
