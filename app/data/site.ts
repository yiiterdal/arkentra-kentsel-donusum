export const siteName = 'ARKENTRA Kentsel Dönüşüm';
export const siteTagline = 'Kentsel dönüşüm ve gayrimenkul danışmanlığında güvenilir çözüm ortağınız.';
export const siteDescription =
  'Arkentra Kentsel Dönüşüm Danışmanlığı İstanbul — riskli yapı tespiti, müteahhit sözleşmesi, kira yardımı ve malik temsil hizmetleri.';

export const navLinks = [
  { href: '/hizmetler', label: 'HİZMETLER' },
  { href: '/hakkimizda', label: 'HAKKIMIZDA' },
  { href: '/yazilarimiz', label: 'YAZILARIMIZ' },
  { href: '/ekibimiz', label: 'EKİBİMİZ' },
  { href: '/iletisim', label: 'İLETİŞİM' },
] as const;

export const services = [
  'Mühendislik ve Teknik Danışmanlık',
  'Mimarlık ve Proje Geliştirme',
  'Hukuki Danışmanlık',
  'Gayrimenkul ve Finans Danışmanlığı',
  'Süreç Yönetimi ve Koordinasyon',
  'Yıkım, İnşaat ve Uygulama Yönetimi',
] as const;

export type ServiceIconId =
  | 'engineering'
  | 'architecture'
  | 'legal'
  | 'finance'
  | 'process'
  | 'construction';

export type ExpertiseItem = {
  title: string;
  description: string;
  icon: ServiceIconId;
  href: string;
};

export const expertiseAreas: readonly ExpertiseItem[] = [
  {
    title: 'Mühendislik ve Teknik Danışmanlık',
    description:
      'Riskli yapı tespiti, zemin etüdü ve yapı denetim süreçlerinde güvenli dönüşüm için teknik güvence.',
    icon: 'engineering',
    href: '/hizmetler',
  },
  {
    title: 'Mimarlık ve Proje Geliştirme',
    description:
      'Mimari tasarım, ruhsat süreçleri ve sürdürülebilir proje geliştirme danışmanlığı.',
    icon: 'architecture',
    href: '/hizmetler',
  },
  {
    title: 'Hukuki Danışmanlık',
    description:
      'Malik temsili, sözleşme hazırlığı ve tapu–belediye süreçlerinde hukuki güvence.',
    icon: 'legal',
    href: '/hizmetler',
  },
  {
    title: 'Gayrimenkul ve Finans Danışmanlığı',
    description:
      'Fizibilite, değerleme ve finansman modelleriyle yatırım kararlarını destekliyoruz.',
    icon: 'finance',
    href: '/hizmetler',
  },
  {
    title: 'Süreç Yönetimi ve Koordinasyon',
    description:
      'Kat malik toplantılarından müteahhit görüşmelerine kadar uçtan uca süreç koordinasyonu.',
    icon: 'process',
    href: '/hizmetler',
  },
  {
    title: 'Yıkım, İnşaat ve Uygulama Yönetimi',
    description:
      'Şantiye denetimi, iş güvenliği ve teslim öncesi kalite kontrolü ile güvenli uygulama.',
    icon: 'construction',
    href: '/hizmetler',
  },
] as const;

export const aboutContent = {
  pageTitle: 'HAKKIMIZDA',
  heroTitle: 'Hakkımızda',
  heroSubtitle:
    'İstanbul merkezli kentsel dönüşüm danışmanlığı — malikler, yatırımcılar ve müteahhitler için bütüncül çözümler.',
  lead: {
    eyebrow: 'ARKENTRA',
    title: 'Karmaşık süreçleri net bir yol haritasına dönüştürüyoruz',
    text: 'Riskli yapı tespitinden tapuya uzanan uzun bir zincirde; hukuk, mühendislik ve finans disiplinlerini aynı masada buluşturuyoruz. Amacımız yalnızca bina yenilemek değil — maliklerin haklarını güvence altına alarak sürdürülebilir değer yaratmak.',
  },
  expertise: {
    title: 'Uzmanlık alanlarımız',
    description:
      'Kentsel dönüşüm sürecinin her aşamasında — stratejik danışmanlıktan proje teslimine — multidisipliner hizmet sunuyoruz.',
  },
  approach: {
    eyebrow: 'Çalışma modelimiz',
    title: 'Her proje özeldir; standart paket sunmuyoruz',
    paragraphs: [
      'Önce mevcut durumu dinliyor, imar durumunu ve malik yapısını analiz ediyoruz. Ardından hukuki riskleri, teknik kısıtları ve finansal beklentileri tek bir stratejide birleştiriyoruz.',
      'Süreç boyunca düzenli bilgilendirme yapıyor; belediye, noter, tapu ve müteahhit iletişimini koordine ederek zaman kaybını en aza indiriyoruz.',
    ],
  },
  principles: [
    {
      title: 'Şeffaflık',
      description: 'Her adımı yazılı ve anlaşılır biçimde paylaşırız.',
    },
    {
      title: 'Bağımsızlık',
      description: 'Malik çıkarını önceleyen tarafsız danışmanlık sunarız.',
    },
    {
      title: 'Süreklilik',
      description: 'Sözleşmeden teslimata kadar yanınızda kalırız.',
    },
    {
      title: 'Yerellik',
      description: 'İstanbul ve çevre ilçelerin imar dinamiklerini iyi biliriz.',
    },
  ],
  closing: {
    title: 'Projenizi birlikte değerlendirelim',
    description:
      'Binanızın mevcut durumunu ve olası dönüşüm senaryolarını uzman ekibimizle görüşmek için bize ulaşın.',
    buttonLabel: 'İletişime geçin',
  },
};

export const teamContent = {
  pageTitle: 'EKİBİMİZ',
  heroSubtitle: 'Uzman kadromuzla kentsel dönüşümün her aşamasında yanınızdayız',
  intro: [
    'Arkentra Kentsel Dönüşüm ve Danışmanlık, kentsel dönüşüm projelerinin tüm hukuki, teknik ve idari aşamalarını tek çatı altında yürüten uzman bir ekibe sahiptir. Kentsel dönüşüm hukuku, gayrimenkul hukuku, mühendislik hizmetleri, belediye süreçleri, imar uygulamaları, tapu işlemleri, noter onayları ve proje yönetiminde deneyimli profesyonellerimizle dönüşüm projelerini hızlı, güvenli ve mevzuata uygun bir şekilde sonuçlandırıyoruz.',
    'Alanında yetkin avukatlar, mimarlar ve teknik uzmanlardan oluşan ekibimiz, arsa sahipleri, kat malikleri, yatırımcılar ve proje geliştiriciler için uçtan uca çözüm sunarak dönüşüm sürecinin her adımını şeffaf ve planlı bir şekilde yönetir.',
  ],
  foundersTitle: 'Kurucu Ekibimiz',
  founders: [
    {
      name: 'Av. Ferhat Yıldırım',
      role: 'Kurucu Ortak',
      bio: [
        'Kentsel dönüşüm hukuku ve gayrimenkul hukuku alanlarında uzmanlaşmış bir hukuk danışmanı olarak, mülkiyet ilişkileri, kat malikleri süreçleri, riskli yapı tespiti sonrası hukuki yol haritaları ve sözleşme hazırlıkları üzerine çalışır.',
        'Belediye izinleri, ruhsat süreçleri, tapu işlemleri, kat irtifakı – kat mülkiyeti dönüşümleri, noter sözleşmeleri ve müteahhit–malik ilişkilerinde ortaya çıkan hukuki risklerin yönetilmesinde aktif rol alır. Projelerin hukuki güvenliğini baştan sona sağlar.',
      ],
    },
    {
      name: 'Mimar Nevzat Yıldırım',
      role: 'Kurucu Ortak',
      bio: [
        'Kentsel dönüşüm projelerinin teknik omurgasını oluşturan mimari planlamayı, mühendislik koordinasyonunu ve belediye süreçlerini yönetir. Riskli yapı analizleri, statik–mimari proje entegrasyonu, yapı denetim süreçleri ve ruhsat başvurularının hazırlanmasında görev alır.',
        'Belediye imar birimleriyle yürütülen süreçlerde dosya hazırlığı, proje revizyonları, onay süreçlerinin takibi ve uygulama denetimi gibi teknik aşamaların tamamında aktif olarak yer alır. Projelerin mimari açıdan sürdürülebilir, güvenli ve yönetmeliklere uygun olmasını sağlar.',
      ],
    },
  ],
};

export const footerContent = {
  slogan: 'Dönüşümde Güven, Gelecekte Vizyon.',
  tagline: siteTagline,
  columns: {
    contact: 'İLETİŞİM',
    quickAccess: 'HIZLI ERİŞİM',
    services: 'HİZMETLERİMİZ',
  },
};
