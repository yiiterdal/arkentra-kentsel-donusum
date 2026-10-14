import Link from 'next/link';
import type { Metadata } from 'next';
import JsonLd from '../components/JsonLd';
import PageHero from '../components/PageHero';
import TeklifKarsilastirma from '../components/TeklifKarsilastirma';
import YaziCta from '../components/YaziCta';
import { YaziFaq, YaziSources } from '../components/YaziExtras';
import { images } from '../data/images';
import { siteUrl } from '../data/site';
import { breadcrumbSchema, faqPageSchema } from '../lib/schema';

const PAGE_TITLE = 'Müteahhit Teklifi Karşılaştırma Aracı';
const PAGE_DESCRIPTION =
  'Üç müteahhit teklifini teslim edilecek m², ek ödeme, teslim süresi, teminat, gecikme cezası ve teknik şartname açısından ücretsiz karşılaştırın.';

export const metadata: Metadata = {
  title: { absolute: 'Müteahhit Teklifi Karşılaştırma Aracı (Ücretsiz) | ARKENTRA' },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: '/muteahhit-teklif-karsilastirma' },
  openGraph: {
    title: 'Müteahhit Teklifi Karşılaştırma Aracı | ARKENTRA',
    description: PAGE_DESCRIPTION,
  },
};

const kriterler = [
  {
    title: 'Maliklere teslim edilecek net alan',
    text: 'Tekliflerdeki “%40 fazla alan” gibi oranlar farklı hesaplanabilir. Karşılaştırmayı her zaman maliklere teslim edilecek toplam net m² üzerinden yapın ve brüt-net farkını sorun.',
  },
  {
    title: 'Ek ödeme ve kira desteği',
    text: 'Maliklerden istenen ek bedel ile müteahhidin ödeyeceği kira desteği birlikte değerlendirilmelidir. 6306 sayılı Kanun kapsamındaki devlet kira yardımı bundan ayrıdır.',
  },
  {
    title: 'Teslim süresi ve gecikme cezası',
    text: 'Gecikme cezası, malikin gecikme süresince ödeyeceği kiradan düşükse gecikmek müteahhit için kârlı hale gelir. Ceza tutarı en az piyasa kirası düzeyinde olmalıdır.',
  },
  {
    title: 'Teminat mektubu ve tamamlama sigortası',
    text: 'İş yarım kalırsa maliklerin başvurabileceği nakdi güvenceler bunlardır. Banka teminat mektubunun tutarı, süresi ve hangi koşulda nakde çevrileceği sözleşmede yazmalıdır.',
  },
  {
    title: 'Aşamalı tapu devri',
    text: '6306 sayılı Kanun’un 6/13. maddesine göre müteahhide ait bağımsız bölümlerin satışı inşaatın ilerlemesine göre ve İdare izniyle yapılır. Sözleşmede tapu devri de bu ilerlemeye bağlanmalıdır.',
  },
  {
    title: 'Marka ve model yazılı teknik şartname',
    text: '“Birinci sınıf malzeme” ifadesi denetlenemez. Pencere, kapı, vitrifiye, asansör ve yalıtım için marka, seri ve standart yazılı olmalıdır; teklifler aynı şartname üzerinden alınmalıdır.',
  },
];

const faqItems = [
  {
    question: 'Müteahhit tekliflerini karşılaştırırken en önemli kriter nedir?',
    answer:
      'Tek bir kriter yoktur. Teslim edilecek net m² ve ek ödeme tekliflerin ekonomik değerini, teminat mektubu, gecikme cezası ve aşamalı tapu devri ise sözün tutulmaması halinde maliklerin ne kadar korunduğunu gösterir. İkisini birlikte değerlendirmek gerekir.',
  },
  {
    question: 'Teklifler farklı projelere göre verildiyse ne yapmalıyız?',
    answer:
      'Bu durumda teklifler gerçekten karşılaştırılamaz. Tüm müteahhitlerden aynı imar durumu, aynı proje varsayımı ve aynı teknik şartname üzerinden teklif istemenizi öneririz.',
  },
  {
    question: 'Bu araç girdiğim bilgileri kaydediyor mu?',
    answer:
      'Hayır. Hesaplama tamamen tarayıcınızda yapılır; girdiğiniz rakamlar sunucuya gönderilmez ve sayfayı kapattığınızda silinir.',
  },
  {
    question: 'Araç sonucu hangi müteahhidi seçmemiz gerektiğini söyler mi?',
    answer:
      'Hayır. Araç tekliflerdeki güçlü ve zayıf noktaları görünür hale getirir. Müteahhidin mali durumu, geçmiş projeleri ve sözleşme metni ayrıca incelenmelidir.',
  },
];

const sources = [
  {
    label: '6306 sayılı Afet Riski Altındaki Alanların Dönüştürülmesi Hakkında Kanun',
    href: 'https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=6306&MevzuatTur=1&MevzuatTertip=5',
  },
  {
    label: '6098 sayılı Türk Borçlar Kanunu (eser sözleşmesi)',
    href: 'https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=6098&MevzuatTur=1&MevzuatTertip=5',
  },
];

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  url: `${siteUrl}/muteahhit-teklif-karsilastirma`,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  inLanguage: 'tr-TR',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
  provider: { '@id': `${siteUrl}/#organization` },
};

export default function MuteahhitTeklifKarsilastirmaPage() {
  return (
    <>
      <JsonLd data={webAppSchema} />
      <JsonLd data={faqPageSchema(faqItems)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Ana Sayfa', url: '/' },
          { name: PAGE_TITLE },
        ])}
      />

      <PageHero
        title={PAGE_TITLE}
        subtitle="Üç teklifi yan yana koyun; hangisinin maliklere daha çok alan ve daha güçlü güvence sunduğunu görün."
        eyebrow="Ücretsiz araç"
        imageSrc={images.construction.src}
        imageAlt={images.construction.alt}
        variant="overlay"
        priority
      />

      <section className="bg-white py-12 md:py-16">
        <div className="container-editorial max-w-3xl">
          <div className="space-y-4 text-lg text-gray-700 font-light leading-relaxed">
            <p>
              Kentsel dönüşümde müteahhit teklifleri çoğu zaman farklı birimlerle, farklı
              varsayımlarla ve farklı güvencelerle gelir. Bu araç, tekliflerdeki temel rakamları ve
              güvenceleri aynı tabloda toplar; maliklerin lehine olan değeri her satırda vurgular ve
              eksik güvenceler için uyarı verir.
            </p>
            <p>
              Rakamları teklif mektuplarından aynen aktarın. Bilmediğiniz alanları boş
              bırakabilirsiniz. Girdiğiniz bilgiler hiçbir yere gönderilmez.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 md:py-16 border-y border-gray-100">
        <div className="container-editorial">
          <TeklifKarsilastirma />
          <p className="mt-8 text-sm text-gray-500 font-light leading-relaxed max-w-3xl">
            Bu araç genel bilgilendirme amaçlıdır; hukuki veya teknik danışmanlık yerine geçmez.
            Sözleşme imzalamadan önce teklif ve sözleşme metninin bir avukat ve teknik uzman
            tarafından incelenmesini öneririz.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="container-editorial max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-gray-900 mb-8">
            Teklifleri hangi kriterlerle karşılaştırmalısınız?
          </h2>
          <div className="space-y-6">
            {kriterler.map((kriter) => (
              <div key={kriter.title}>
                <h3 className="text-lg font-semibold text-gray-900 mb-1.5">{kriter.title}</h3>
                <p className="text-lg text-gray-700 font-light leading-relaxed">{kriter.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 border border-brand-100 bg-brand-50/60 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Müteahhitle görüşmeden önce: 15 soruluk kontrol listesi
            </h2>
            <p className="text-base text-gray-700 font-light leading-relaxed mb-4">
              Teklif toplantısına götürebileceğiniz, yazdırılabilir ve paylaşılabilir PDF kontrol
              listemizi ücretsiz indirin.
            </p>
            <Link
              href="/muteahhit-secimi-kontrol-listesi"
              className="inline-block bg-brand-700 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-800"
            >
              Kontrol listesini görüntüle
            </Link>
          </div>

          <YaziFaq items={faqItems} />

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-5 leading-tight">
              İlgili rehberler
            </h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/yazilarimiz/kentsel-donusumde-muteahhit-secimi"
                  className="text-lg text-brand-700 font-medium hover:underline"
                >
                  Kentsel dönüşümde müteahhit seçimi nasıl yapılır?
                </Link>
              </li>
              <li>
                <Link
                  href="/yazilarimiz/2026-kat-karsiligi-insaat-sozlesmesi-rehberi"
                  className="text-lg text-brand-700 font-medium hover:underline"
                >
                  Kat karşılığı inşaat sözleşmesi rehberi
                </Link>
              </li>
              <li>
                <Link
                  href="/kentsel-donusum-danismanligi"
                  className="text-lg text-brand-700 font-medium hover:underline"
                >
                  Bağımsız kentsel dönüşüm danışmanlığı
                </Link>
              </li>
            </ul>
          </div>

          <YaziSources items={sources} />
          <YaziCta />
        </div>
      </section>
    </>
  );
}
