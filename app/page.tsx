import Link from 'next/link';
import EditorialSplit from './components/EditorialSplit';
import FaqSection from './components/FaqSection';
import FeaturedYaziCard from './components/FeaturedYaziCard';
import FoundersPreview from './components/FoundersPreview';
import ImageBanner from './components/ImageBanner';
import SectionIntro from './components/SectionIntro';
import ServiceCard from './components/ServiceCard';
import VideoHero from './components/VideoHero';
import { getHeroVideoMobileSrc, getHeroVideoSrc, heroVideo, images } from './data/images';
import { faqHomePreview, faqPreviewCount } from './data/sss';
import { getFeaturedYazi } from './data/yazilar';
import { siteDescription, siteName, siteTagline } from './data/site';

export const metadata = {
  title: 'Ana Sayfa',
  description: siteDescription,
};

const featuredServices = [
  {
    title: 'Mühendislik ve Teknik Danışmanlık',
    description:
      'Riskli yapı tespiti, proje incelemesi, aşamalı saha denetimi ve teknik ilerleme raporları.',
    image: images.freshHome,
  },
  {
    title: 'Mimarlık ve Proje Geliştirme',
    description:
      'Mimari etüt alternatifleri, ruhsat süreçleri ve sürdürülebilir proje geliştirme danışmanlığı.',
    image: images.sehirPlani,
  },
  {
    title: 'Hukuki Danışmanlık',
    description:
      'Toplantı organizasyonu, kat karşılığı sözleşmeleri, tapu ve teminat süreçlerinde malik temsili.',
    image: images.greenNeighborhood,
  },
];

const lifecycle = [
  {
    step: '01',
    title: 'Stratejik Danışmanlık',
    text: 'Proje fizibilitesi, malik analizi ve hukuki risk değerlendirmesi ile sürece güçlü bir başlangıç.',
  },
  {
    step: '02',
    title: 'Planlama ve Tasarım',
    text: 'Mimari proje, mühendislik raporları ve imar uygunluk süreçlerinin eksiksiz yürütülmesi.',
  },
  {
    step: '03',
    title: 'Sözleşme ve Onay',
    text: 'Müteahhit seçimi, sözleşme hazırlığı, belediye ve bakanlık izinlerinin takibi.',
  },
  {
    step: '04',
    title: 'Uygulama ve Teslim',
    text: 'Şantiye denetimi, ilerleme raporları ve anahtar teslim sürecinin profesyonel yönetimi.',
  },
];

export default function HomePage() {
  const featuredYazi = getFeaturedYazi();

  return (
    <>
      <VideoHero
        title={
          <>
            İstanbul Kentsel
            <br />
            Dönüşüm Danışmanlığı
          </>
        }
        subtitle="Bayrampaşa merkezli ARKENTRA; 6306 sayılı Kanun kapsamında riskli yapı tespiti, malik temsili, kat karşılığı sözleşmesi ve aşamalı teknik denetim hizmetleri sunar."
        eyebrow="Malik Temsilciliği · Hukuk · Mühendislik"
        videoSrc={getHeroVideoSrc()}
        mobileVideoSrc={getHeroVideoMobileSrc()}
        posterSrc={heroVideo.poster}
        posterAlt="Kentsel dönüşüm hero görseli"
      />

      <EditorialSplit
        imageSrc={images.community.src}
        imageAlt={images.community.alt}
        eyebrow="Hakkımızda"
        title="6306 kapsamında malik temsilciliği ve riskli yapı danışmanlığı"
        href="/hakkimizda"
        bg="white"
      >
        <p>
          {siteName}, Üçyıldız Kentsel Dönüşüm Mühendislik İnşaat Taahhüt Ltd. Şti’nin iştiraki
          olarak Bayrampaşa merkezli faaliyet gösterir. Müteahhit değiliz; malikleri temsil eden
          bağımsız bir kentsel dönüşüm danışmanlık firmasıyız. Riskli yapı tespiti, kat malikleri
          toplantıları, kat karşılığı inşaat sözleşmesi ve kira yardımı başvurularında yanınızdayız.
        </p>
        <p>
          İstanbul’un 39 ilçesinde; hukuk, mühendislik, mimarlık ve finans uzmanlığını tek çatı
          altında birleştirerek süreci şeffaf ve mevzuata uygun yönetiyoruz.
        </p>
        <ul className="space-y-2 pt-2">
          {['Riskli yapı tespiti ve 6306 süreç danışmanlığı', 'Kat karşılığı sözleşme müzakeresi', 'Aşamalı teknik denetim ve saha raporları'].map((item) => (
            <li key={item} className="flex items-center gap-2 text-base">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </EditorialSplit>

      {featuredYazi && (
        <section className="bg-white py-14 md:py-20 border-t border-gray-100">
          <div className="container-editorial">
            <SectionIntro
              eyebrow="Güncel rehber"
              title="2026 kentsel dönüşüm kira yardımı"
              description="İstanbul’daki güncel kira ve taşınma desteği tutarları, başvuru belgeleri ve malik-kiracı hakları."
              className="mb-8"
            />
            <FeaturedYaziCard yazi={featuredYazi} />
          </div>
        </section>
      )}

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container-editorial">
          <SectionIntro
            eyebrow="Süreç"
            title="Stratejik danışmanlıktan proje teslimine"
            description="Riskli yapı tespitinden tapu tesciline; kat malikleri toplantısı, müteahhit seçimi ve aşamalı saha denetimine kadar 6306 kapsamında uçtan uca danışmanlık."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {lifecycle.map((item) => (
              <div key={item.step} className="bg-white p-8 md:p-10">
                <span className="text-brand-600 text-base font-semibold tracking-wider">{item.step}</span>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 leading-snug">{item.title}</h3>
                <p className="mt-3 text-base text-gray-600 leading-relaxed font-light">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EditorialSplit
        imageSrc={images.residence.src}
        imageAlt={images.residence.alt}
        eyebrow="Sonuç"
        title="Yaşanabilir ve değer kazandıran yaşam alanları"
        reverse
        href="/hakkimizda"
      >
        <p>
          Kentsel dönüşümün hedefi yalnızca yeni bina değil; güvenli, modern, yeşil alanlarla
          çevrili sürdürülebilir bir yaşam ortamı oluşturmaktır.
        </p>
      </EditorialSplit>

      <EditorialSplit
        imageSrc={images.demolition.src}
        imageAlt={images.demolition.alt}
        eyebrow="Uzmanlık"
        title="Teknik uzmanlık, hukuki deneyim ve saha bilgisi"
        href="/hizmetler"
        linkLabel="Hizmetlerimizi inceleyin →"
        bg="gray"
      >
        <p>
          Ekibimiz; inşaat mühendisleri, mimarlar, hukukçular ve gayrimenkul uzmanlarından oluşur.
          Her projeyi imar mevzuatı ve 6306 Sayılı Kanun çerçevesinde özel olarak analiz ederiz.
        </p>
      </EditorialSplit>

      <ImageBanner
        src={images.greenPark.src}
        alt={images.greenPark.alt}
        eyebrow="Sürdürülebilirlik"
        title="Yeşil alanlar ve yaşanabilir mahalleler"
        description="Kentsel dönüşüm yalnızca yeni binalar değil; yeşil peyzaj, ortak alanlar ve sürdürülebilir bir yaşam kültürü inşa etmektir."
        href="/hakkimizda"
        size="large"
        variant="dark"
        imagePosition="object-center"
      />

      <section className="bg-white py-14 md:py-20">
        <div className="container-editorial">
          <SectionIntro
            eyebrow="Hizmetler"
            title="Öne çıkan hizmetlerimiz"
            description={siteTagline}
            className="mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                imageSrc={service.image.src}
                imageAlt={service.image.alt}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/hizmetler" className="link-button link-button--ghost">
              Tüm Hizmetleri Görüntüle
            </Link>
          </div>
        </div>
      </section>

      <FoundersPreview />

      <FaqSection
        title="Sık sorulan sorular"
        description="Kentsel dönüşüm sürecinde maliklerin en çok merak ettiği konulara kısa yanıtlar."
        items={faqHomePreview.slice(0, faqPreviewCount)}
        allLinkHref="/sss"
      />

      <EditorialSplit
        imageSrc={images.kentMerkezi.src}
        imageAlt={images.kentMerkezi.alt}
        eyebrow="Vizyon"
        title="Geleceğe güvenle adım atın"
        reverse
        href="/iletisim"
        linkLabel="Bizimle iletişime geçin →"
        bg="brand"
      >
        <p>
          Türkiye&apos;de kentsel dönüşümün sadece betonla değil, hukuk ve vizyonla yönetildiği bir
          çağı başlatmak. Şeffaf ve sürdürülebilir çözümlerle geleceği birlikte inşa ediyoruz.
        </p>
      </EditorialSplit>
    </>
  );
}
