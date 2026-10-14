import Link from 'next/link';
import type { Metadata } from 'next';
import JsonLd from './JsonLd';
import PageHero from './PageHero';
import YaziCta from './YaziCta';
import { YaziFaq, YaziSources } from './YaziExtras';
import { ilceler, type Ilce, type IlceBolum } from '../data/ilceler';
import { getYaziBySlug, getYaziHref, type Yazi } from '../data/yazilar';
import { breadcrumbSchema, faqPageSchema, servicePageSchema } from '../lib/schema';

export function ilceMetadata(ilce: Ilce): Metadata {
  return {
    title: { absolute: `${ilce.seoTitle} | ARKENTRA` },
    description: ilce.metaDescription,
    alternates: { canonical: `/${ilce.slug}` },
    openGraph: {
      title: `${ilce.seoTitle} | ARKENTRA`,
      description: ilce.metaDescription,
      images: [{ url: ilce.image.src, alt: ilce.image.alt }],
    },
  };
}

function Bolum({ bolum, tone }: { bolum: IlceBolum; tone: 'white' | 'gray' }) {
  return (
    <section
      className={
        tone === 'gray' ? 'bg-gray-50 py-14 md:py-16 border-y border-gray-100' : 'bg-white py-14 md:py-16'
      }
    >
      <div className="container-editorial max-w-3xl">
        <h2 className="font-serif text-2xl md:text-3xl font-medium text-gray-900 mb-6">
          {bolum.title}
        </h2>
        {bolum.paragraphs && (
          <div className="space-y-4 text-lg text-gray-700 font-light leading-relaxed">
            {bolum.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        )}
        {bolum.items && (
          <ul className="mt-5 space-y-4 text-lg text-gray-700 font-light leading-relaxed">
            {bolum.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-3 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default function IlcePage({ ilce }: { ilce: Ilce }) {
  const pageTitle = `${ilce.name} Kentsel Dönüşüm Danışmanlığı`;
  const related = ilce.relatedYaziSlugs
    .map((slug) => getYaziBySlug(slug))
    .filter((yazi): yazi is Yazi => yazi !== undefined);
  const otherIlceler = ilceler.filter((item) => item.slug !== ilce.slug);

  return (
    <>
      <JsonLd data={servicePageSchema(pageTitle, ilce.metaDescription, ilce.name)} />
      <JsonLd data={faqPageSchema(ilce.faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Ana Sayfa', url: '/' },
          { name: 'Kentsel Dönüşüm Danışmanlığı', url: '/kentsel-donusum-danismanligi' },
          { name: pageTitle },
        ])}
      />

      <PageHero
        title={pageTitle}
        subtitle={ilce.heroSubtitle}
        eyebrow="İstanbul ilçe rehberi"
        imageSrc={ilce.image.src}
        imageAlt={ilce.image.alt}
        variant="overlay"
        priority
      />

      <section className="bg-white py-14 md:py-16">
        <div className="container-editorial max-w-3xl">
          <div className="border-l-4 border-brand-500 bg-brand-50/60 px-5 py-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700 mb-2">
              Kısa cevap
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">{ilce.summary}</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-16 border-y border-gray-100">
        <div className="container-editorial max-w-4xl">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-gray-900 mb-8">
            Rakamlarla {ilce.name} yapı stoku
          </h2>
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {ilce.stats.map((stat) => (
              <div key={stat.label} className="bg-white border border-gray-100 p-5">
                <dt className="text-sm text-gray-500 mb-2">{stat.label}</dt>
                <dd className="text-2xl md:text-3xl font-semibold text-gray-900 tabular-nums">
                  {stat.value}
                </dd>
                {stat.note && <dd className="mt-1 text-sm text-gray-500">{stat.note}</dd>}
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-gray-500 font-light leading-relaxed">
            Kaynak: İBB Açık Veri Portalı. {ilce.statsNote}
          </p>
        </div>
      </section>

      <Bolum bolum={ilce.mahalleler} tone="white" />
      <Bolum bolum={ilce.surec} tone="gray" />
      <Bolum bolum={ilce.durumlar} tone="white" />

      <section className="bg-gray-50 py-14 md:py-16 border-y border-gray-100">
        <div className="container-editorial max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-gray-900 mb-6">
            ARKENTRA {ilce.name}’de ne yapar?
          </h2>
          <div className="space-y-4 text-lg text-gray-700 font-light leading-relaxed">
            <p>
              İstanbul genelinde olduğu gibi {ilce.name}’de de müteahhitten bağımsız olarak yalnızca
              kat maliklerini temsil ediyoruz. Riskli yapı tespiti başvurusundan kat malikleri
              kararına, ortak teknik şartnameden kat karşılığı sözleşmeye ve inşaat denetimine kadar
              süreci sizin adınıza yönetiyoruz.
            </p>
            <p>
              Hukuki işler kurucu ortağımız{' '}
              <Link href="/ekibimiz" className="font-medium text-brand-700 hover:underline">
                Av. Ferhat Yıldırım
              </Link>
              , teknik inceleme ve saha denetimi kurucu ortağımız Mimar Nevzat Yıldırım ve teknik
              ekibimiz tarafından yürütülür.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/kentsel-donusum-danismanligi"
              className="block border border-brand-100 bg-white px-5 py-4 text-base font-medium text-gray-900 transition-colors hover:border-brand-300"
            >
              Danışmanlık sürecimiz →
            </Link>
            <Link
              href="/muteahhit-teklif-karsilastirma"
              className="block border border-brand-100 bg-white px-5 py-4 text-base font-medium text-gray-900 transition-colors hover:border-brand-300"
            >
              Müteahhit teklifi karşılaştırma aracı →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container-editorial max-w-3xl">
          <YaziFaq items={ilce.faq} />

          {related.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5 leading-tight">
                İlgili rehberler
              </h2>
              <ul className="space-y-3">
                {related.map((yazi) => (
                  <li key={yazi.slug}>
                    <Link
                      href={getYaziHref(yazi.slug)}
                      className="text-lg text-brand-700 font-medium hover:underline"
                    >
                      {yazi.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <YaziSources items={ilce.sources} />

          <YaziCta />

          <p className="mt-10 text-base text-gray-600">
            Diğer ilçe rehberleri:{' '}
            {otherIlceler.map((item, index) => (
              <span key={item.slug}>
                {index > 0 && ', '}
                <Link href={`/${item.slug}`} className="text-brand-700 hover:underline">
                  {item.name} kentsel dönüşüm
                </Link>
              </span>
            ))}
          </p>
        </div>
      </section>
    </>
  );
}
