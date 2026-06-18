import Link from 'next/link';
import EditorialSplit from './components/EditorialSplit';
import FaqSection from './components/FaqSection';
import ImageBanner from './components/ImageBanner';
import SectionIntro from './components/SectionIntro';
import ServiceCard from './components/ServiceCard';
import VideoHero from './components/VideoHero';
import { heroVideo, images } from './data/images';
import { faqItems, faqPreviewCount } from './data/sss';
import { siteDescription, siteName, siteTagline } from './data/site';

export const metadata = {
  title: 'Ana Sayfa | ARKENTRA Kentsel Dönüşüm',
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
  return (
    <>
      <VideoHero
        title="Kentsel Dönüşümde Güvenilir Çözüm Ortağınız"
        subtitle="İstanbul ve çevre illerde; hukuk, mühendislik, mimarlık ve finans uzmanlığını tek çatı altında birleştirerek kentsel dönüşüm süreçlerini uçtan uca yönetiyoruz."
        eyebrow="Kentsel Dönüşüm ve Danışmanlık"
        videoSrc={heroVideo.local}
        posterAlt="Kentsel dönüşüm hero görseli"
      />

      <EditorialSplit
        imageSrc={images.community.src}
        imageAlt={images.community.alt}
        eyebrow="Hakkımızda"
        title="Yaşam alanlarını hukuk ve vizyonla yeniden inşa ediyoruz"
        href="/hakkimizda"
        bg="white"
      >
        <p>
          {siteName}, Üçyıldız Kentsel Dönüşüm Mühendislik İnşaat Taahhüt Ltd. Şti’nin iştiraki
          olarak İstanbul ve çevre illerde kentsel dönüşüm süreçlerinde malikleri; hukuk,
          mühendislik, mimarlık ve finans alanlarında tek çatı altında temsil eden bir danışmanlık
          firmasıdır.
        </p>
        <p>
          Riskli yapıların güvenli, modern ve değer kazandıran yapılara dönüşümünü; yeşil alanları
          koruyan sürdürülebilir projelerle birlikte yürütüyoruz.
        </p>
        <ul className="space-y-2 pt-2">
          {['Malik temsili ve hukuki danışmanlık', 'Teknik mühendislik ve proje yönetimi', 'Şeffaf ve güvenilir süreç'].map((item) => (
            <li key={item} className="flex items-center gap-2 text-base">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </EditorialSplit>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container-editorial">
          <SectionIntro
            eyebrow="Süreç"
            title="Stratejik danışmanlıktan proje teslimine"
            description="Kentsel dönüşüm sürecinin her aşamasında yanınızdayız; riskli yapı tespitinden tapu tesciline kadar tek elden profesyonel çözüm."
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

      <FaqSection
        title="Sık sorulan sorular"
        description="Kentsel dönüşüm sürecinde maliklerin en çok merak ettiği konulara kısa yanıtlar."
        items={faqItems.slice(0, faqPreviewCount)}
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
