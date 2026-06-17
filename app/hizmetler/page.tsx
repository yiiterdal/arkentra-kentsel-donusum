import EditorialSplit from '../components/EditorialSplit';
import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import { images } from '../data/images';
import { services } from '../data/site';

export const metadata = {
  title: 'Hizmetler | ARKENTRA Kentsel Dönüşüm',
  description: 'Kentsel dönüşüm mühendislik, mimarlık, hukuk, finans danışmanlığı ve süreç yönetimi hizmetleri.',
};

const serviceDetails: Record<
  string,
  { description: string; items: string[]; image: { src: string; alt: string } }
> = {
  'Mühendislik ve Teknik Danışmanlık': {
    description: 'Güvenli bir dönüşüm, doğru mühendislik analizleriyle başlar.',
    image: images.engineering,
    items: [
      'Riskli yapı tespiti başvurusunun hazırlanması',
      'Zemin etüdü, taşıyıcı sistem analizi ve raporlamalar',
      'Statik, mekanik ve elektrik projelerinin kontrolü',
      'Yapı denetim süreci koordinasyonu',
      'İnşaat sürecinde teknik kontrol ve ilerleme raporları',
    ],
  },
  'Mimarlık ve Proje Geliştirme': {
    description: 'Estetik, işlev ve mevzuata uygunluk aynı çizgide buluşur.',
    image: images.sustainable,
    items: [
      'Mimari proje tasarımı ve revizyonu',
      'Kat planlarının malik taleplerine göre düzenlenmesi',
      'Ruhsat ve imar uygunluk süreçlerinin yürütülmesi',
      '3D görselleştirme ve proje sunumları',
      'Enerji verimliliği, yeşil bina ve sürdürülebilir tasarım danışmanlığı',
    ],
  },
  'Hukuki Danışmanlık': {
    description: 'Her adımda yasal güvence, her sözleşmede şeffaflık.',
    image: images.legal,
    items: [
      'Kat maliklerinin temsil edilmesi',
      'Kat karşılığı inşaat ve arsa payı sözleşmelerinin hazırlanması',
      'Tapu, belediye ve noter işlemlerinin yürütülmesi',
      'Anlaşmazlık, dava ve uzlaşma süreçlerinde temsil',
      'Müteahhit seçiminde hukuki risk analizi',
    ],
  },
  'Gayrimenkul ve Finans Danışmanlığı': {
    description: 'Proje sadece bina değil, aynı zamanda bir yatırım sürecidir.',
    image: images.finance,
    items: [
      'Proje fizibilite ve değerleme çalışmaları',
      'Malik bazlı daire paylaşım planı hazırlanması',
      'Finansman modelleri ve kredi çözümleri',
      'Kentsel dönüşüm kira yardımı ve devlet destekleri hakkında rehberlik',
    ],
  },
  'Süreç Yönetimi ve Koordinasyon': {
    description: 'Tüm tarafların uyum içinde çalıştığı, planlı bir dönüşüm süreci.',
    image: images.process,
    items: [
      'Kat malik toplantılarının organize edilmesi',
      'Belediyeler ve bakanlıklarla yazışma ve izin takibi',
      'Müteahhit görüşmeleri ve teklif değerlendirmesi',
      'Sözleşme sonrası inşaat takibi ve teslim süreci kontrolü',
    ],
  },
  'Yıkım, İnşaat ve Uygulama Yönetimi': {
    description: 'Güvenli yıkım, kontrollü inşaat, kaliteli sonuç.',
    image: images.construction,
    items: [
      'Yıkım sürecinde çevre güvenliği ve ruhsat işlemleri',
      'Şantiye denetimi ve iş güvenliği kontrolleri',
      'Malzeme kalitesi ve yapı tekniği uygunluğu denetimi',
      'İnşaat ilerleme raporları ve teslim öncesi kontrol listeleri',
    ],
  },
};

export default function HizmetlerPage() {
  return (
    <>
      <PageHero
        title="Hizmetlerimiz"
        subtitle="Kentsel dönüşüm sürecinin tamamında, stratejik danışmanlıktan proje teslimine kadar tek noktadan profesyonel çözüm sunuyoruz."
        imageSrc={images.cityAerial.src}
        imageAlt={images.cityAerial.alt}
        variant="overlay"
      />

      <section className="bg-white py-12 md:py-16">
        <div className="container-editorial">
          <SectionIntro
            title="Proje yaşam döngüsünün her aşamasında yanınızdayız"
            description="Danışmanlık ve stratejik planlamadan izin süreçlerine, detaylı tasarımdan inşaat ve teslimata kadar multidisipliner ekibimizle hizmet veriyoruz."
          />
        </div>
      </section>

      {services.map((service, index) => {
        const detail = serviceDetails[service];
        return (
          <EditorialSplit
            key={service}
            imageSrc={detail.image.src}
            imageAlt={detail.image.alt}
            eyebrow={`Hizmet ${String(index + 1).padStart(2, '0')}`}
            title={service}
            reverse={index % 2 === 1}
            bg={index % 2 === 0 ? 'white' : 'gray'}
          >
            <p className="italic text-gray-500">{detail.description}</p>
            <ul className="space-y-2 !mt-4">
              {detail.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-brand-600 mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </EditorialSplit>
        );
      })}
    </>
  );
}
