import { images } from './images';

export type ServiceDetail = {
  description: string;
  items: string[];
  image: { src: string; alt: string };
};

export const serviceDetails: Record<string, ServiceDetail> = {
  'Mühendislik ve Teknik Danışmanlık': {
    description:
      'Bakanlık yetkili kuruluşumuz aracılığıyla riskli yapı tespitinden inşaat denetimine kadar; projeyi, malzemeyi ve saha uygulamasını mevzuat ve teknik şartnamelere göre değerlendiriyoruz.',
    image: images.engineering,
    items: [
      'Riskli yapı tespiti başvurusunun hazırlanması; talep halinde karot alımı ve tespit işlemlerinin yürütülmesi',
      'Teknik şartname, proje ve uygulama detaylarının incelenmesi; malzeme kalitesi ve mevzuat uygunluğunun değerlendirilmesi',
      'Mimari, statik, mekanik ve elektrik projelerinin mevzuat ve sözleşme hükümlerine uygunluğunun raporlanması',
      'Kazı, temel, taşıyıcı sistem ve kritik imalat aşamalarında yoğunlaştırılmış saha denetimi',
      'İnce inşaat, tesisat, cephe ve iç mimari aşamalarında aylık yerinde teknik inceleme ve ilerleme raporları',
      'Tespit edilen eksikliklere ilişkin ihtar, uyarı ve düzeltme talebi taslaklarının hazırlanması',
      'En fazla beş mimari etüt alternatifinin hazırlanması veya yüklenici projelerinin karşılaştırmalı teknik değerlendirmesi',
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
      'Yüklenici projelerinde ortak alan planlaması, kullanım verimliliği ve mimari bütünlük değerlendirmesi',
    ],
  },
  'Hukuki Danışmanlık': {
    description:
      '6306 sayılı Kanun ve ilgili mevzuat çerçevesinde; toplantı organizasyonundan sözleşme hazırlığına, tapu ve teminat süreçlerine kadar malik çıkarını koruyan hukuki danışmanlık.',
    image: images.legal,
    items: [
      '6306 Sayılı Kanun kapsamında kat malikleri toplantılarının organizasyonu, gündem, tebligat ve tutanak süreçleri',
      'Kat karşılığı inşaat ve taşınmaz satış vaadi sözleşmelerinin hazırlanması, incelenmesi ve revize edilmesi',
      'Teslim koşulları, teminat yapısı, cezai şart, ruhsat ve iskân süreçleri ile tapu devri hükümlerinin değerlendirilmesi',
      'Malik talepleri doğrultusunda sözleşme taslağının baştan hazırlanması',
      'Noter işlemleri, vekâletname, ihtarname ve idari başvuruların hukuki koordinasyonu',
      'Tapu kayıtlarındaki haciz, şerh ve ipotek gibi takyidatların incelenmesi ve kaldırılmasına yönelik idari süreç desteği',
      'Banka teminat mektupları ile bina tamamlama ve all-risk sigortalarının malik menfaatine uygunluğunun değerlendirilmesi',
    ],
  },
  'Gayrimenkul ve Finans Danışmanlığı': {
    description:
      '6306 sayılı Kanun kapsamındaki devlet destekleri, teşvikler ve mali avantajlar hakkında maliklere yol gösteriyoruz.',
    image: images.finance,
    items: [
      'Kira yardımı, taşınma yardımı ve hibe destekleri hakkında bilgilendirme ve başvuru rehberliği',
      'Faiz destekli kredi imkânları, Yarısı Bizden programı ve İklim ve Afetlere Dayanıklı Şehirler Projesi (İADŞP) kapsamındaki kentsel dönüşüm kredileri',
      'Vergi avantajları, harç muafiyetleri, damga vergisi ve tapu harcı istisnalarına ilişkin mali danışmanlık',
      'Proje fizibilite ve değerleme çalışmaları',
      'Malik bazlı daire paylaşım planı ve finansman modeli değerlendirmesi',
    ],
  },
  'Süreç Yönetimi ve Koordinasyon': {
    description:
      '04 Şubat 2026 tarihli yönetmelik değişikliğiyle zorunlu hale gelen toplantı süreçlerinden müteahhit görüşmelerine kadar uçtan uca koordinasyon.',
    image: images.process,
    items: [
      'Kat malikleri toplantılarının organizasyonu; çağrı, tebligat, muhtarlık askı süreçleri ve karar tutanakları',
      'Belediye, tapu müdürlüğü ve Bakanlık nezdindeki başvuruların hukuki takip ve koordinasyonu',
      'Müteahhit görüşmeleri, teklif değerlendirmesi ve sözleşme müzakerelerine destek',
      'Yüklenici yükümlülüklerinin yerine getirilip getirilmediğinin değerlendirilmesi ve malik bilgilendirmesi',
      'Sözleşme sonrası inşaat takibi ve anahtar teslim sürecinin koordinasyonu',
    ],
  },
  'Yıkım, İnşaat ve Uygulama Yönetimi': {
    description:
      'Şantiye denetimi, kalite kontrolü ve aşamalı teknik raporlama ile güvenli ve şeffaf bir uygulama süreci.',
    image: images.construction,
    items: [
      'Temelden iskâna kadar aşamalı teknik denetim ve fotoğraflı tespit raporları',
      'Taşıyıcı sistem, tesisat, cephe ve iç mekân imalatlarının proje ve şartnameye uygunluk kontrolü',
      'Yıkım sürecinde çevre güvenliği ve ruhsat işlemlerinin koordinasyonu',
      'Şantiye denetimi, iş güvenliği ve malzeme kalitesi kontrolleri',
      'İskân öncesi eksiklik tespiti ve kat maliklerine yazılı bildirim',
    ],
  },
};

export type TechnicalInspectionStage = {
  code: string;
  title: string;
  description: string;
};

export const technicalInspectionStages: TechnicalInspectionStage[] = [
  {
    code: 'A',
    title: 'Temel betonu öncesi denetim',
    description:
      'Temel donatı yerleşimi, donatı çapları, bina köşe noktaları, yapı oturum alanı, asansör kuyusu ölçüleri ve temel donatı imalatlarının projeye uygunluğu yerinde incelenir.',
  },
  {
    code: 'B',
    title: 'Temel drenaj ve su yalıtımı denetimi',
    description:
      'Drenaj sistemleri, boru yerleşimi ve eğimleri; temel bohçalama ile perde beton su yalıtımı uygulamalarının teknik şartname ve proje detaylarına uygunluğu değerlendirilir.',
  },
  {
    code: 'C',
    title: 'Kat beton dökümü öncesi denetim',
    description:
      'Taşıyıcı sistem donatıları, bina çıkma mesafeleri, şaft boşlukları, merdiven basamak genişlikleri, rıht yükseklikleri ve sahanlık ölçüleri kontrol edilir.',
  },
  {
    code: 'D',
    title: 'Son kat beton dökümü sonrası denetim',
    description:
      'Bina toplam yüksekliği, kat kotları, asansör kulesi ölçüleri, parapet uygulamaları ve kaba inşaat genel uygunluğu denetlenir.',
  },
  {
    code: 'E',
    title: 'Kat duvar imalatları denetimi',
    description:
      'Duvar terazisi, kapı ve pencere boşluk ölçüleri, duvar kalınlıkları, ıslak hacim detayları ve bölme duvar uygulamaları incelenir.',
  },
  {
    code: 'F',
    title: 'Mekanik, elektrik ve tesisat denetimi',
    description:
      'Elektrik, sıhhi ve mekanik tesisat uygulamalarının projelere, malzeme şartnamelerine ve mimari entegrasyona uygunluğu kontrol edilir.',
  },
  {
    code: 'G',
    title: 'Alçı, sıva ve boya denetimi',
    description:
      'Alçı ve sıva uygulamalarının teknik gerekliliklere uygunluğu, yüzey düzgünlüğü ile astar ve boya kalitesi değerlendirilir.',
  },
  {
    code: 'H',
    title: 'Cephe uygulamaları denetimi',
    description:
      'Cephe kaplama, yalıtım ve birleşim detayları; yağmur suyu drenaj hatları ve iniş borularının konumlandırılması incelenir.',
  },
  {
    code: 'İ',
    title: 'Sabit mobilya ve iç mekân denetimi',
    description:
      'Parke, kapı, mutfak ve portmanto gibi uygulamalarda malzeme uyumu, imalat kalitesi ve mimari projeye uygun yerleşim kontrol edilir.',
  },
  {
    code: 'J',
    title: 'İskân aşaması denetimi',
    description:
      'Yapı kullanma izin belgesine engel teşkil edebilecek eksiklik ve uygunsuzluklar tespit edilerek kat maliklerine raporlanır.',
  },
];

export const technicalInspectionNote =
  'Denetimler sonucunda hazırlanan teknik raporlar, tespitleri ve destekleyici fotoğrafları içerir; kat malikleri temsil heyetine yazılı olarak sunulur. İncelemeler, inceleme tarihindeki gözlemlenebilir durumu esas alan sınırlı teknik değerlendirmelerdir; yapı denetim kuruluşu veya fenni mesul sıfatıyla hareket edilmez.';
