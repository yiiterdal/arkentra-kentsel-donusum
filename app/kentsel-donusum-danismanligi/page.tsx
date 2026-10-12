import Link from 'next/link';
import JsonLd from '../components/JsonLd';
import PageHero from '../components/PageHero';
import YaziCta from '../components/YaziCta';
import { YaziFaq } from '../components/YaziExtras';
import { images } from '../data/images';
import { expertiseAreas, siteUrl } from '../data/site';
import { getYaziBySlug, getYaziHref, type Yazi } from '../data/yazilar';
import { breadcrumbSchema, faqPageSchema, servicePageSchema } from '../lib/schema';
import type { Metadata } from 'next';

const PAGE_TITLE = 'Kentsel Dönüşüm Danışmanlığı';
const PAGE_DESCRIPTION =
  'İstanbul’da kat maliklerini temsil eden bağımsız kentsel dönüşüm danışmanlığı: riskli yapı tespiti, müteahhit seçimi, sözleşme ve inşaat denetimi.';

export const metadata: Metadata = {
  title: 'İstanbul Kentsel Dönüşüm Danışmanlığı',
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${siteUrl}/kentsel-donusum-danismanligi` },
  openGraph: {
    title: 'İstanbul Kentsel Dönüşüm Danışmanlığı | ARKENTRA',
    description: PAGE_DESCRIPTION,
  },
};

const steps = [
  {
    title: 'Ön değerlendirme',
    text: 'Tapu kayıtlarını, imar durumunu, malik yapısını ve binanın mevcut durumunu inceleyerek size özel bir yol haritası çıkarırız.',
  },
  {
    title: 'Riskli yapı tespiti',
    text: 'Bakanlık yetkili kuruluşumuz aracılığıyla tespit başvurusunu hazırlar, gerekirse karot alımı ve tespit işlemlerini yürütürüz.',
  },
  {
    title: 'Kat malikleri toplantısı ve karar',
    text: 'Toplantı çağrısı, gündem, tebligat ve tutanak süreçlerini 6306 sayılı Kanun’a uygun şekilde organize ederiz.',
  },
  {
    title: 'Proje ve müteahhit teklifleri',
    text: 'Ortak teknik şartname hazırlar, müteahhitlerden aynı esaslar üzerinden teklif alır ve teklifleri karşılaştırmalı olarak raporlarız.',
  },
  {
    title: 'Sözleşme',
    text: 'Kat karşılığı inşaat sözleşmesinde teslim süresi, gecikme cezası, teminatlar ve aşamalı tapu devrinin malik lehine düzenlenmesini sağlarız.',
  },
  {
    title: 'Ruhsat, yıkım ve inşaat denetimi',
    text: 'Belediye ve tapu süreçlerini takip eder; temelden iskâna kadar kritik aşamalarda sahada teknik denetim yapıp maliklere raporlarız.',
  },
  {
    title: 'Teslim ve tapu',
    text: 'İskân öncesi eksik tespiti yapar, bağımsız bölümlerin teslimi ve tapu devirlerinin eksiksiz tamamlanmasını takip ederiz.',
  },
];

const faqItems = [
  {
    question: 'Kentsel dönüşüm danışmanlığı nedir?',
    answer:
      'Kentsel dönüşüm danışmanlığı; riskli yapı tespitinden anahtar teslimine kadar kat maliklerinin hukuki, teknik ve mali haklarını koruyarak süreci yönetme hizmetidir. ARKENTRA bu hizmeti müteahhitten bağımsız olarak, yalnızca malikler adına verir.',
  },
  {
    question: 'ARKENTRA müteahhit mi?',
    answer:
      'Hayır. ARKENTRA inşaat yapmaz ve arsa payı talep etmez. Müteahhit seçiminde ve sözleşme müzakerelerinde yalnızca kat maliklerinin tarafında yer alır.',
  },
  {
    question: 'Hukuki işleri kim yürütüyor?',
    answer:
      'Hukuki görüş, sözleşme hazırlığı ve temsil gerektiren işler ekibimizdeki avukat tarafından yürütülür. Teknik inceleme ve saha denetimi ise mimar ve mühendislerimiz tarafından yapılır.',
  },
  {
    question: 'Danışmanlık ücreti nasıl belirleniyor?',
    answer:
      'Ücret; bağımsız bölüm sayısına, hizmet kapsamına ve hukuki karmaşıklığa göre projeye özel belirlenir. Ön görüşmede binanızı değerlendirip yazılı teklif sunarız.',
  },
  {
    question: 'Hangi bölgelerde hizmet veriyorsunuz?',
    answer: 'İstanbul genelinde kentsel dönüşüm danışmanlığı hizmeti veriyoruz.',
  },
];

const guideSlugs = [
  'kentsel-donusumde-muteahhit-secimi',
  'kentsel-donusumde-kat-malikleri-haklari',
  'kat-malikleri-toplantisi-nasil-yapilir-2026',
  '2026-kat-karsiligi-insaat-sozlesmesi-rehberi',
];

export default function KentselDonusumDanismanligiPage() {
  const guides = guideSlugs
    .map((slug) => getYaziBySlug(slug))
    .filter((yazi): yazi is Yazi => yazi !== undefined);

  return (
    <>
      <JsonLd data={servicePageSchema(PAGE_TITLE, PAGE_DESCRIPTION)} />
      <JsonLd data={faqPageSchema(faqItems)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Ana Sayfa', url: '/' },
          { name: 'Hizmetler', url: '/hizmetler' },
          { name: PAGE_TITLE },
        ])}
      />

      <PageHero
        title={PAGE_TITLE}
        subtitle="İstanbul genelinde, müteahhitten bağımsız olarak yalnızca kat maliklerini temsil ediyoruz."
        eyebrow="Hizmetlerimiz"
        imageSrc={images.cityAerial.src}
        imageAlt={images.cityAerial.alt}
        variant="overlay"
        priority
      />

      <section className="bg-white py-14 md:py-20">
        <div className="container-editorial max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-gray-900 mb-6">
            Kentsel dönüşüm sürecini sizin adınıza yönetiyoruz
          </h2>
          <div className="space-y-5 text-lg text-gray-700 font-light leading-relaxed">
            <p>
              Kentsel dönüşüm; riskli yapı tespiti, kat malikleri kararları, müteahhit seçimi,
              sözleşme, ruhsat ve inşaat gibi birbirine bağlı birçok aşamadan oluşur. Bu
              aşamaların her birinde verilen karar, mülkünüzün değerini ve sürecin ne kadar
              süreceğini doğrudan etkiler.
            </p>
            <p>
              ARKENTRA, hukuk, mimarlık ve mühendislik uzmanlığını tek çatı altında toplayan
              bağımsız bir danışmanlık firmasıdır. Müteahhit değiliz; tek tarafımız kat
              malikleridir.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20 border-y border-gray-100">
        <div className="container-editorial max-w-4xl">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-gray-900 mb-10">
            Süreç adım adım nasıl ilerler?
          </h2>
          <ol className="space-y-6">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-5 bg-white border border-gray-100 p-6">
                <span
                  className="text-brand-600 text-sm font-semibold tabular-nums shrink-0 pt-1"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1.5">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-light">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container-editorial max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-gray-900 mb-6">
            Neden bağımsız bir danışman?
          </h2>
          <ul className="space-y-4 text-lg text-gray-700 font-light leading-relaxed">
            <li className="flex gap-3">
              <span className="mt-3 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
              Müteahhidin hazırladığı sözleşme ve şartname doğal olarak müteahhidi korur. Bağımsız
              danışman, aynı belgeleri malik gözüyle inceler.
            </li>
            <li className="flex gap-3">
              <span className="mt-3 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
              Farklı müteahhitlerden gelen teklifler ancak aynı şartname üzerinden alındığında
              gerçekten karşılaştırılabilir.
            </li>
            <li className="flex gap-3">
              <span className="mt-3 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
              İnşaat sırasında yapılan bağımsız saha denetimi, eksiklerin teslimden önce tespit
              edilip giderilmesini sağlar.
            </li>
          </ul>
          <p className="mt-8 border-l-4 border-brand-500 bg-gray-50 px-5 py-4 text-base text-gray-700 font-light leading-relaxed">
            Hukuki görüş, sözleşme hazırlığı ve temsil gerektiren işler, kurucu ortağımız{' '}
            <Link href="/ekibimiz" className="font-medium text-brand-700 hover:underline">
              Av. Ferhat Yıldırım
            </Link>{' '}
            tarafından yürütülür. Teknik inceleme ve saha denetimi, kurucu ortağımız Mimar Nevzat
            Yıldırım ve teknik ekibimiz tarafından yapılır.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20 border-y border-gray-100">
        <div className="container-editorial">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-gray-900 mb-8">
            Hizmet kapsamı
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertiseAreas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="block bg-white border border-gray-100 p-6 transition-colors hover:border-brand-200"
              >
                <h3 className="text-base font-semibold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  {area.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container-editorial max-w-3xl">
          <YaziFaq items={faqItems} />

          {guides.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5 leading-tight">
                Karar vermeden önce okuyun
              </h2>
              <ul className="space-y-3">
                {guides.map((yazi) => (
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

          <YaziCta />
        </div>
      </section>
    </>
  );
}
