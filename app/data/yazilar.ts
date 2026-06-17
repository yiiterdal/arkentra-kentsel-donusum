import { unsplashSrc } from '../lib/image-utils';

export type YaziKonu = 'Hukuk' | 'Mühendislik' | 'Malik Rehberi' | 'Finans' | 'Mevzuat';
export type YaziTur = 'Rehber' | 'Haber' | 'Uzman Görüşü';

export interface Yazi {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  dateLabel: string;
  konu: YaziKonu;
  tur: YaziTur;
  imageSrc: string;
  imageAlt: string;
}

export const yaziKonulari = [
  'Tümü',
  'Hukuk',
  'Mühendislik',
  'Malik Rehberi',
  'Finans',
  'Mevzuat',
] as const;

export const yaziTurleri = ['Tümü', 'Rehber', 'Haber', 'Uzman Görüşü'] as const;

export type YaziSort = 'newest' | 'oldest' | 'title-asc';

export const yaziSortOptions: { value: YaziSort; label: string }[] = [
  { value: 'newest', label: 'En yeni' },
  { value: 'oldest', label: 'En eski' },
  { value: 'title-asc', label: 'Başlık (A-Z)' },
];

export const yazilar: Yazi[] = [
  {
    slug: 'riskli-yapi-tespiti-sureci',
    title: 'Riskli Yapı Tespiti Sürecinde Maliklerin Bilmesi Gerekenler',
    excerpt:
      'Riskli yapı tespiti başvurusundan rapor onayına kadar sürecin her adımını, maliklerin haklarını ve dikkat edilmesi gereken kritik noktaları özetliyoruz.',
    content: `Riskli yapı tespiti, kentsel dönüşüm sürecinin en kritik başlangıç adımlarından biridir. Maliklerin bu süreçte bilinçli hareket etmesi, hem haklarının korunması hem de projenin sağlıklı ilerlemesi açısından büyük önem taşır.

Başvuru aşamasında binanın yaşı, taşıyıcı sistem durumu ve zemin etüdü gibi teknik veriler toplanır. Belediye ve ilgili kurulların değerlendirmesi sonucunda riskli yapı kararı verilirse, malikler için yasal süreçler devreye girer.

Bu aşamada sözleşme imzalamadan önce hukuki danışmanlık almak, kat malikleri arasındaki anlaşmazlıkları önlemek ve müteahhit seçiminde şeffaf kriterler belirlemek kritik öneme sahiptir.`,
    date: '2026-03-10',
    dateLabel: '10 Mart 2026',
    konu: 'Malik Rehberi',
    tur: 'Rehber',
    imageSrc: unsplashSrc('photo-1541888946425-d81bb19240f5', 800),
    imageAlt: 'Kentsel dönüşüm inşaat alanı',
  },
  {
    slug: 'kat-karsiligi-sozlesme-kontrol-listesi',
    title: 'Kat Karşılığı Sözleşmede Kontrol Edilmesi Gereken 8 Madde',
    excerpt:
      'Kat karşılığı inşaat sözleşmelerinde malikleri koruyan temel maddeleri ve sık yapılan hataları uzman görüşüyle ele alıyoruz.',
    content: `Kat karşılığı sözleşmeler, kentsel dönüşümün en yaygın modellerinden biridir. Ancak hazırlıksız imzalanan sözleşmeler, malikler için ciddi maddi ve hukuki riskler doğurabilir.

Sözleşmede teslim süresi, gecikme cezaları, arsa payı dağılımı, geçici konut ve kira yardımı yükümlülükleri, değişen imar durumuna ilişkin hükümler ve fesih koşulları mutlaka net biçimde yazılmalıdır.

Ayrıca müteahhitin mali gücü, referans projeleri ve teminat yapısı da sözleşme öncesinde değerlendirilmelidir.`,
    date: '2026-02-18',
    dateLabel: '18 Şubat 2026',
    konu: 'Hukuk',
    tur: 'Uzman Görüşü',
    imageSrc: unsplashSrc('photo-1450101499163-c8848c66ca85', 800),
    imageAlt: 'Sözleşme imzalama',
  },
  {
    slug: 'kira-yardimi-basvuru-rehberi',
    title: '6306 Sayılı Kanun Kapsamında Kira Yardımı Başvuru Rehberi',
    excerpt:
      'Riskli yapıda oturan malik ve kiracıların kira yardımından yararlanma şartları, başvuru adımları ve gerekli belgeler.',
    content: `6306 sayılı Kanun kapsamında riskli yapıda ikamet eden malik ve kiracılar, belirli şartları sağladıklarında kira yardımından faydalanabilir. Başvuru sürecinde eksik belge sunulması, ödemelerin gecikmesine neden olabilir.

Başvuru için tapu kaydı, riskli yapı tespit raporu, nüfus kayıt örneği ve banka hesap bilgileri gibi belgelerin güncel olması gerekir. Yardım tutarları her yıl güncellenmekte olup, malik ve kiracı için farklı tutarlar uygulanabilir.

Sürecin takibi ve itiraz hakkının kullanımı konusunda profesyonel destek almak, hak kaybını önler.`,
    date: '2026-01-22',
    dateLabel: '22 Ocak 2026',
    konu: 'Mevzuat',
    tur: 'Rehber',
    imageSrc: unsplashSrc('photo-1560518883-ce09059eeffa', 800),
    imageAlt: 'Konut ve kentsel dönüşüm',
  },
  {
    slug: 'zemin-etudu-neden-onemli',
    title: 'Kentsel Dönüşümde Zemin Etüdü Neden Kritik?',
    excerpt:
      'Zemin etüdü raporunun proje güvenliği, maliyet planlaması ve ruhsat süreçlerindeki rolünü teknik perspektiften açıklıyoruz.',
    content: `Zemin etüdü, kentsel dönüşüm projelerinde yapının güvenliği için vazgeçilmez bir adımdır. Yanlış veya eksik zemin analizi, proje maliyetlerinde öngörülemeyen artışlara ve yapısal sorunlara yol açabilir.

Etüt raporunda zemin taşıma kapasitesi, sıvılaşma riski, yeraltı su seviyesi ve temel tipi önerileri yer alır. Mimari ve statik projenin bu verilere göre hazırlanması gerekir.

Ruhsat başvurusunda zemin etüdü raporunun güncel ve yetkili kurum onaylı olması şarttır.`,
    date: '2025-12-05',
    dateLabel: '5 Aralık 2025',
    konu: 'Mühendislik',
    tur: 'Uzman Görüşü',
    imageSrc: unsplashSrc('photo-1503387762-592deb58ef4e', 800),
    imageAlt: 'İnşaat ve mühendislik',
  },
  {
    slug: 'kentsel-donusumde-vergi-mevzuati',
    title: 'Kentsel Dönüşümde Vergi ve Harç Muafiyetleri',
    excerpt:
      'Tapu harcı, emlak vergisi ve KDV istisnalarına ilişkin güncel mevzuat değişiklikleri ve uygulama notları.',
    content: `Kentsel dönüşüm projelerinde maliklere çeşitli vergi ve harç kolaylıkları tanınmaktadır. Ancak bu muafiyetlerden yararlanmak için belirli şartların sağlanması ve sürelerin takip edilmesi gerekir.

Tapu işlemlerinde harç indirimleri, emlak vergisi muafiyetleri ve inşaat döneminde uygulanan istisnalar, projenin finansal fizibilitesini doğrudan etkiler.

Mevzuat değişiklikleri sık yaşandığından, işlem öncesinde güncel düzenlemelerin kontrol edilmesi önerilir.`,
    date: '2025-11-14',
    dateLabel: '14 Kasım 2025',
    konu: 'Finans',
    tur: 'Haber',
    imageSrc: unsplashSrc('photo-1554224155-8d04cb21cd6c', 800),
    imageAlt: 'Finans ve vergi belgeleri',
  },
  {
    slug: 'malik-toplantisi-nasil-yurutulur',
    title: 'Kat Malikleri Kurul Toplantısı Nasıl Yürütülür?',
    excerpt:
      'Kentsel dönüşüm kararlarının alınması için gerekli toplantı usulü, çoğunluk şartları ve tutanak düzenleme rehberi.',
    content: `Kat malikleri kurulu toplantıları, kentsel dönüşüm sürecinde bağlayıcı kararların alındığı en önemli platformdur. Toplantının usulüne uygun yapılmaması, alınan kararların geçersiz sayılmasına neden olabilir.

Toplantı davetinin süresi, gündem maddeleri, çoğunluk ve karar nisabı 634 sayılı Kat Mülkiyeti Kanunu hükümlerine uygun olmalıdır. Tutanakların noter onaylı şekilde düzenlenmesi, ileride doğabilecek uyuşmazlıklarda delil niteliği taşır.

Profesyonel moderasyon desteği, toplantının verimli geçmesini ve tüm maliklerin sürece dahil olmasını sağlar.`,
    date: '2025-10-28',
    dateLabel: '28 Ekim 2025',
    konu: 'Malik Rehberi',
    tur: 'Rehber',
    imageSrc: unsplashSrc('photo-1521791136064-7986c2920216', 800),
    imageAlt: 'Toplantı ve danışmanlık',
  },
  {
    slug: 'imar-barisi-ve-kentsel-donusum',
    title: 'İmar Barışı Kararları ve Kentsel Dönüşüm İlişkisi',
    excerpt:
      'İmar barışı kapsamında yapılan başvuruların kentsel dönüşüm sürecine etkisi ve dikkat edilmesi gereken hususlar.',
    content: `İmar barışı uygulamaları, birçok malik için yapı kayıt sürecini kolaylaştırmış olsa da kentsel dönüşüm planlarıyla birlikte değerlendirildiğinde farklı sonuçlar doğurabilir.

Kayıt altına alınan yapıların riskli yapı statüsü, dönüşüm projesindeki arsa payı hesaplamaları ve müteahhit anlaşmaları üzerinde etkili olabilir. Bu nedenle imar barışı belgelerinin proje dosyasına doğru şekilde entegre edilmesi gerekir.

Her parsel için ayrı değerlendirme yapılması, ileride doğabilecek hukuki sorunların önüne geçer.`,
    date: '2025-09-12',
    dateLabel: '12 Eylül 2025',
    konu: 'Mevzuat',
    tur: 'Haber',
    imageSrc: unsplashSrc('photo-1486406146926-c627a92ad1ab', 800),
    imageAlt: 'Şehir ve imar planı',
  },
  {
    slug: 'proje-fizibilitesi-nasil-hazirlanir',
    title: 'Kentsel Dönüşüm Projesinde Fizibilite Analizi Nasıl Hazırlanır?',
    excerpt:
      'Arsa değeri, inşaat maliyeti, satış projeksiyonu ve finansman senaryolarını içeren fizibilite raporunun temel bileşenleri.',
    content: `Fizibilite analizi, kentsel dönüşüm projesinin ekonomik olarak uygulanabilir olup olmadığını gösteren temel belgedir. Malikler ve yatırımcılar için karar verme sürecinin merkezinde yer alır.

Analizde arsa piyasa değeri, inşaat birim maliyetleri, proje süresi, satış veya kira gelir projeksiyonları ile finansman maliyetleri birlikte değerlendirilir. Farklı senaryoların modellenmesi, risklerin erken tespit edilmesini sağlar.

Bağımsız bir danışmanlık firması tarafından hazırlanan fizibilite raporu, müzakere süreçlerinde maliklerin güçlü bir referans noktası olur.`,
    date: '2025-08-03',
    dateLabel: '3 Ağustos 2025',
    konu: 'Finans',
    tur: 'Rehber',
    imageSrc: unsplashSrc('photo-1460472178965-622eb319585a', 800),
    imageAlt: 'Finansal analiz',
  },
];

export function getYaziBySlug(slug: string): Yazi | undefined {
  return yazilar.find((yazi) => yazi.slug === slug);
}
