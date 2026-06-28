export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.arkentrakentseldonusum.com';

export const siteName = 'ARKENTRA Kentsel Dönüşüm';
export const siteTagline =
  'İstanbul ve Bayrampaşa odaklı kentsel dönüşüm danışmanlığı — riskli yapı tespiti, 6306 malik temsili ve kat karşılığı sözleşme danışmanlığı.';
export const siteDescription =
  'ARKENTRA Kentsel Dönüşüm Danışmanlığı: İstanbul Bayrampaşa merkezli bağımsız malik temsilcisi. Riskli yapı tespiti, kat karşılığı inşaat sözleşmesi, kira yardımı başvurusu, 6306 sayılı Kanun süreçleri ve aşamalı teknik denetim.';

export const navLinks = [
  { href: '/hizmetler', label: 'HİZMETLER' },
  { href: '/hakkimizda', label: 'HAKKIMIZDA' },
  { href: '/yazilarimiz', label: 'YAZILARIMIZ' },
  { href: '/sss', label: 'SSS' },
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

export function serviceSlug(name: string): string {
  return name
    .toLocaleLowerCase('tr-TR')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ı/g, 'i')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function serviceHref(name: string): string {
  return `/hizmetler/${serviceSlug(name)}`;
}

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
      'Riskli yapı tespiti, proje incelemesi, aşamalı saha denetimi ve teknik ilerleme raporlarıyla güvenli dönüşüm.',
    icon: 'engineering',
    href: '/hizmetler/muhendislik-ve-teknik-danismanlik',
  },
  {
    title: 'Mimarlık ve Proje Geliştirme',
    description:
      'Mimari tasarım, ruhsat süreçleri ve sürdürülebilir proje geliştirme danışmanlığı.',
    icon: 'architecture',
    href: '/hizmetler/mimarlik-ve-proje-gelistirme',
  },
  {
    title: 'Hukuki Danışmanlık',
    description:
      'Toplantı organizasyonu, kat karşılığı sözleşmeleri, tapu ve teminat süreçlerinde malik çıkarını koruyan hukuki danışmanlık.',
    icon: 'legal',
    href: '/hizmetler/hukuki-danismanlik',
  },
  {
    title: 'Gayrimenkul ve Finans Danışmanlığı',
    description:
      'Kira yardımı, Yarısı Bizden, İADŞP kredileri ve vergi avantajları dahil devlet destekleri hakkında rehberlik.',
    icon: 'finance',
    href: '/hizmetler/gayrimenkul-ve-finans-danismanligi',
  },
  {
    title: 'Süreç Yönetimi ve Koordinasyon',
    description:
      '6306 kapsamındaki toplantı süreçlerinden müteahhit görüşmelerine kadar uçtan uca koordinasyon.',
    icon: 'process',
    href: '/hizmetler/surec-yonetimi-ve-koordinasyon',
  },
  {
    title: 'Yıkım, İnşaat ve Uygulama Yönetimi',
    description:
      'Temelden iskâna aşamalı teknik denetim, şantiye kontrolü ve teslim öncesi kalite değerlendirmesi.',
    icon: 'construction',
    href: '/hizmetler/yikim-insaat-ve-uygulama-yonetimi',
  },
] as const;

export const aboutContent = {
  pageTitle: 'HAKKIMIZDA',
  heroTitle: 'Hakkımızda',
  heroSubtitle:
    'Bayrampaşa merkezli, İstanbul genelinde 6306 sayılı Kanun kapsamında malik temsilciliği; riskli yapı tespiti, kat karşılığı sözleşmesi ve aşamalı teknik denetim.',
  lead: {
    eyebrow: 'ARKENTRA',
    title: '6306 kapsamında malik temsilciliği ve uçtan uca kentsel dönüşüm danışmanlığı',
    text: 'Arkentra Kentsel Dönüşüm ve Danışmanlık, Üçyıldız Kentsel Dönüşüm Mühendislik İnşaat Taahhüt Sanayi ve Ticaret Ltd. Şti’nin iştiraki olarak Bayrampaşa merkezli faaliyet gösterir. Müteahhit değiliz; malikleri temsil eden bağımsız bir danışmanlık firmasıyız. Riskli yapı tespiti başvurusundan kat malikleri toplantılarına, kat karşılığı inşaat sözleşmesi müzakerelerinden aşamalı saha denetimine kadar hukuk, mühendislik ve mimarlığı tek çatı altında sunuyoruz.',
  },
  expertise: {
    title: 'Uzmanlık alanlarımız',
    description:
      'Kentsel dönüşüm sürecinin her aşamasında, stratejik danışmanlıktan proje teslimine kadar multidisipliner hizmet sunuyoruz.',
  },
  approach: {
    eyebrow: 'Çalışma modelimiz',
    title: 'Her proje özeldir; standart paket sunmuyoruz',
    paragraphs: [
      'Önce mevcut durumu dinliyor, imar durumunu ve malik yapısını analiz ediyoruz. Ardından hukuki riskleri, teknik kısıtları ve finansal beklentileri tek bir stratejide birleştiriyoruz.',
      'Süreç boyunca düzenli bilgilendirme yapıyor; belediye, noter, tapu ve müteahhit iletişimini koordine ederek zaman kaybını en aza indiriyoruz.',
      'Bakanlık tarafından yetkilendirilmiş kuruluşumuz aracılığıyla riskli yapı tespiti başvurularından inşaat aşamalarındaki teknik denetimlere kadar geniş bir hizmet yelpazesi sunuyoruz. Yalnızca binaları değil, yaşam alanlarını dönüştürerek modern ve sürdürülebilir projelerle geleceği inşa ediyoruz.',
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
      image: '/images/team/ferhat-yildirim.png',
      imageAlt: 'Av. Ferhat Yıldırım — Arkentra Kurucu Ortak',
      imagePosition: 'object-[center_32%]',
      bio: [
        'Kentsel dönüşüm hukuku ve gayrimenkul hukuku alanlarında uzmanlaşmış bir hukuk danışmanı olarak, mülkiyet ilişkileri, kat malikleri süreçleri, riskli yapı tespiti sonrası hukuki yol haritaları ve sözleşme hazırlıkları üzerine çalışır.',
        'Belediye izinleri, ruhsat süreçleri, tapu işlemleri, kat irtifakı ve kat mülkiyeti dönüşümleri, noter sözleşmeleri ve müteahhit-malik ilişkilerinde ortaya çıkan hukuki risklerin yönetilmesinde aktif rol alır. Projelerin hukuki güvenliğini baştan sona sağlar.',
      ],
    },
    {
      name: 'Mimar Nevzat Yıldırım',
      role: 'Kurucu Ortak',
      image: '/images/team/mimar-nevzat-yildirim.png',
      imageAlt: 'Mimar Nevzat Yıldırım — Arkentra Kurucu Ortak',
      imagePosition: 'object-[center_32%]',
      bio: [
        'Kentsel dönüşüm projelerinin teknik omurgasını oluşturan mimari planlamayı, mühendislik koordinasyonunu ve belediye süreçlerini yönetir. Riskli yapı analizleri, statik ve mimari proje entegrasyonu, yapı denetim süreçleri ve ruhsat başvurularının hazırlanmasında görev alır.',
        'Kentsel dönüşüm projelerine yönelik teknik danışmanlık ve aşamalı saha denetimi hizmetleri sunar; temelden iskâna kadar her kritik imalat aşamasında yerinde inceleme ve teknik raporlama yapar. Projelerin mimari açıdan sürdürülebilir, güvenli ve yönetmeliklere uygun olmasını sağlar.',
      ],
    },
    {
      name: 'Yiğit Erdal',
      role: 'Medya ve İletişim Sorumlusu',
      image: '/images/team/yigit-erdal.png',
      imageAlt: 'Yiğit Erdal — Arkentra Medya ve İletişim Sorumlusu',
      imagePosition: 'object-center',
      bio: [
        'Sosyal medya kanallarının yönetimi, içerik planlaması ve markanın dış iletişim stratejisinden sorumludur. Medya platformları aracılığıyla maliklere ulaşmayı, süreci anlaşılır ve erişilebilir kılmayı hedefler.',
        'Arkentra\'nın kurumsal iletişimini yönetir; markanın şeffaf, tutarlı ve profesyonel bir çizgide temsil edilmesini sağlar.',
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
