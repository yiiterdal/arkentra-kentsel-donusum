import Link from 'next/link';
import { notFound } from 'next/navigation';
import JsonLd from '../../components/JsonLd';
import PageHero from '../../components/PageHero';
import { serviceDetails } from '../../data/hizmetler';
import { serviceSlug, services } from '../../data/site';
import { FEATURED_YAZI_SLUG, getFeaturedYazi } from '../../data/yazilar';
import { IMAGE_QUALITY } from '../../lib/image-utils';
import { breadcrumbSchema, servicePageSchema } from '../../lib/schema';
import type { Metadata } from 'next';

interface ServicePageProps {
  params: { slug: string };
}

function getServiceBySlug(slug: string) {
  return services.find((service) => serviceSlug(service) === slug);
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: serviceSlug(service) }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const serviceName = getServiceBySlug(params.slug);
  if (!serviceName) return { title: 'Hizmet Bulunamadı' };

  const detail = serviceDetails[serviceName];
  return {
    title: serviceName,
    description: detail.description,
    openGraph: {
      title: serviceName,
      description: detail.description,
    },
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const serviceName = getServiceBySlug(params.slug);
  if (!serviceName) notFound();

  const detail = serviceDetails[serviceName];
  const slug = params.slug;
  const featuredYazi = getFeaturedYazi();
  const showKiraRehberi = slug === serviceSlug('Gayrimenkul ve Finans Danışmanlığı') && featuredYazi;

  return (
    <>
      <JsonLd data={servicePageSchema(serviceName, detail.description)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Ana Sayfa', url: '/' },
          { name: 'Hizmetler', url: '/hizmetler' },
          { name: serviceName },
        ])}
      />

      <PageHero
        title={serviceName}
        subtitle={detail.description}
        imageSrc={detail.image.src}
        imageAlt={detail.image.alt}
        variant="overlay"
      />

      <section className="bg-white py-14 md:py-20">
        <div className="container-editorial max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-gray-900 mb-8">
            Kapsam
          </h2>
          <ul className="space-y-4">
            {detail.items.map((item) => (
              <li key={item.slice(0, 48)} className="flex gap-3 text-gray-700 leading-relaxed">
                <span className="mt-2.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                {item}
              </li>
            ))}
          </ul>

          {showKiraRehberi && (
            <div className="mt-10 border border-brand-100 bg-brand-50/60 p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-800 mb-2">
                İlgili rehber
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{featuredYazi.title}</h3>
              <p className="text-gray-700 leading-relaxed font-light mb-4">{featuredYazi.excerpt}</p>
              <Link
                href={`/yazilarimiz/${FEATURED_YAZI_SLUG}`}
                className="link-button link-button--ghost"
              >
                Kira yardımı rehberini okuyun →
              </Link>
            </div>
          )}

          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/iletisim" className="link-button">
              Danışmanlık talep edin
            </Link>
            <Link href="/hizmetler" className="link-button link-button--ghost">
              ← Tüm hizmetler
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20 border-t border-gray-100">
        <div className="container-editorial">
          <h2 className="font-serif text-xl md:text-2xl font-medium text-gray-900 mb-8">
            Diğer hizmetler
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services
              .filter((service) => serviceSlug(service) !== slug)
              .map((service) => (
                <Link
                  key={service}
                  href={`/hizmetler/${serviceSlug(service)}`}
                  className="block bg-white border border-gray-100 p-5 hover:border-brand-200 transition-colors text-sm font-medium text-gray-800"
                >
                  {service}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
