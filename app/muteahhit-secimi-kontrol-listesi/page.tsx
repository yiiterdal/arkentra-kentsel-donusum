import Link from 'next/link';
import type { Metadata } from 'next';
import JsonLd from '../components/JsonLd';
import PageHero from '../components/PageHero';
import YaziCta from '../components/YaziCta';
import checklist from '../data/muteahhit-kontrol-listesi.json';
import { images } from '../data/images';
import { siteUrl } from '../data/site';
import { breadcrumbSchema } from '../lib/schema';

const PAGE_PATH = '/muteahhit-secimi-kontrol-listesi';
const PAGE_DESCRIPTION =
  'Kentsel dönüşümde müteahhit seçmeden önce sorulması gereken 15 kritik soru: yetki belgesi, teminat, gecikme cezası, tapu devri. Ücretsiz PDF indirin.';

export const metadata: Metadata = {
  title: { absolute: 'Müteahhit Seçimi Kontrol Listesi: 15 Kritik Soru (PDF) | ARKENTRA' },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: 'Müteahhit Seçimi Kontrol Listesi: 15 Kritik Soru | ARKENTRA',
    description: PAGE_DESCRIPTION,
  },
};

const pageUrl = `${siteUrl}${PAGE_PATH}`;
const shareText = `Kentsel dönüşümde müteahhide sorulması gereken 15 kritik soru: ${pageUrl}`;

export default function MuteahhitSecimiKontrolListesiPage() {
  let counter = 0;

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'DigitalDocument',
          name: checklist.title,
          description: PAGE_DESCRIPTION,
          url: pageUrl,
          encodingFormat: 'application/pdf',
          contentUrl: `${siteUrl}${checklist.pdfPath}`,
          inLanguage: 'tr-TR',
          isAccessibleForFree: true,
          publisher: { '@id': `${siteUrl}/#organization` },
        }}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Ana Sayfa', url: '/' },
          { name: checklist.title },
        ])}
      />

      <PageHero
        title={checklist.title}
        subtitle={checklist.subtitle}
        eyebrow="Ücretsiz PDF"
        imageSrc={images.documents.src}
        imageAlt={images.documents.alt}
        variant="overlay"
        priority
      />

      <section className="bg-white py-12 md:py-16">
        <div className="container-editorial max-w-3xl">
          <p className="text-lg text-gray-700 font-light leading-relaxed">
            Kat malikleri toplantısında müteahhitleri dinlemeden önce bu listeyi yazdırın veya
            yöneticiyle paylaşın. Her soruya yazılı ve belgeli cevap isteyin; cevap veremeyen ya da
            belge sunmaktan kaçınan teklifleri dikkatle değerlendirin.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={checklist.pdfPath}
              download
              className="inline-block bg-brand-700 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-800"
            >
              PDF’i indir
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-800 hover:border-gray-500"
            >
              WhatsApp’ta paylaş
            </a>
            <a
              href={`mailto:?subject=${encodeURIComponent(checklist.title)}&body=${encodeURIComponent(shareText)}`}
              className="inline-block border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-800 hover:border-gray-500"
            >
              E-postayla gönder
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 md:py-16 border-y border-gray-100">
        <div className="container-editorial max-w-3xl space-y-12">
          {checklist.groups.map((group) => (
            <div key={group.title}>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-gray-900 mb-6">
                {group.title}
              </h2>
              <ol className="space-y-4">
                {group.questions.map((item) => {
                  counter += 1;
                  return (
                    <li key={item.q} className="flex gap-5 bg-white border border-gray-100 p-5">
                      <span
                        className="text-brand-600 text-sm font-semibold tabular-nums shrink-0 pt-1"
                        aria-hidden
                      >
                        {String(counter).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1.5">{item.q}</h3>
                        <p className="text-base text-gray-600 leading-relaxed font-light">{item.why}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="container-editorial max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-gray-900 mb-5">
            Cevapları topladınız; şimdi teklifleri karşılaştırın
          </h2>
          <p className="text-lg text-gray-700 font-light leading-relaxed mb-6">
            Müteahhitlerden gelen rakamları ücretsiz karşılaştırma aracımıza girerek teslim
            edilecek alanı, teslim süresini ve güvenceleri yan yana görebilirsiniz.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/muteahhit-teklif-karsilastirma"
              className="block border border-brand-100 bg-brand-50/60 px-5 py-4 text-base font-medium text-gray-900 transition-colors hover:border-brand-300"
            >
              Teklif karşılaştırma aracı →
            </Link>
            <Link
              href="/yazilarimiz/kentsel-donusumde-muteahhit-secimi"
              className="block border border-brand-100 bg-brand-50/60 px-5 py-4 text-base font-medium text-gray-900 transition-colors hover:border-brand-300"
            >
              Müteahhit seçimi rehberi →
            </Link>
          </div>
          <p className="mt-8 text-sm text-gray-500 font-light leading-relaxed">
            Bu liste genel bilgilendirme amaçlıdır ve hukuki danışmanlık yerine geçmez. Mevzuat
            atıfları için:{' '}
            <a
              href="https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=6306&MevzuatTur=1&MevzuatTertip=5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-700 hover:underline"
            >
              6306 sayılı Kanun
            </a>
            .
          </p>
          <YaziCta />
        </div>
      </section>
    </>
  );
}
