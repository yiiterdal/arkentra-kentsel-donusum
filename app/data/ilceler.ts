import { images } from './images';
import type { YaziKaynak, YaziSoru } from './yazilar';

export interface IlceStat {
  label: string;
  value: string;
  note?: string;
}

export interface IlceBolum {
  title: string;
  paragraphs?: string[];
  items?: string[];
}

export interface Ilce {
  slug: string;
  name: string;
  seoTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  summary: string;
  image: { src: string; alt: string };
  stats: IlceStat[];
  statsNote: string;
  mahalleler: IlceBolum;
  surec: IlceBolum;
  durumlar: IlceBolum;
  faq: YaziSoru[];
  sources: YaziKaynak[];
  relatedYaziSlugs: string[];
}

const IBB_BINA_VERISI: YaziKaynak = {
  label: 'İBB Açık Veri: Mahalle Bazlı Bina Sayıları (2016–2017, 20 kattan az binalar)',
  href: 'https://data.ibb.gov.tr/tr/dataset/mahalle-bazli-bina-analiz-verisi',
};

const IBB_SENARYO: YaziKaynak = {
  label: 'İBB Açık Veri: Deprem Senaryosu Analiz Sonuçları (Mw 7,5 senaryosu)',
  href: 'https://data.ibb.gov.tr/dataset/deprem-senaryosu-analiz-sonuclari',
};

const KANUN_6306: YaziKaynak = {
  label: '6306 sayılı Afet Riski Altındaki Alanların Dönüştürülmesi Hakkında Kanun',
  href: 'https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=6306&MevzuatTur=1&MevzuatTertip=5',
};

const CSB_RISKLI_YAPI: YaziKaynak = {
  label: 'Çevre, Şehircilik ve İklim Değişikliği Bakanlığı: Riskli Yapı Süreci',
  href: 'https://istanbulakdm.csb.gov.tr/riskli-yapi-sureci-104407',
};

const STATS_NOTE =
  'Bina sayıları İBB’nin 2016–2017 MAKS verilerine dayanan, 20 kattan az binaları kapsayan envanterdir. Hasar rakamları İBB’nin Mw 7,5 büyüklüğündeki deprem senaryosu için yaptığı model tahminidir; tek tek binaların durumunu göstermez. Binanızın durumunu yalnızca lisanslı kuruluşça yapılan riskli yapı tespiti belirler.';

export const ilceler: Ilce[] = [
  {
    slug: 'kadikoy-kentsel-donusum',
    name: 'Kadıköy',
    seoTitle: 'Kadıköy Kentsel Dönüşüm Danışmanlığı: Süreç ve Yapı Stoku',
    metaDescription:
      'Kadıköy’de binaların yarısı 1980 öncesi yapıldı. Kadıköy kentsel dönüşüm sürecinde başvuru, belgeler ve müteahhit seçimi için bağımsız danışmanlık.',
    heroSubtitle:
      'Kadıköy’deki kat malikleri için riskli yapı tespitinden sözleşmeye kadar bağımsız danışmanlık.',
    summary:
      'İBB verilerine göre Kadıköy’de 20 kattan az 25.210 binanın %51’i 1980 öncesinde yapıldı. Riskli yapı tespit raporunun onay başvurusu Kadıköy Belediyesi e-Belediye sistemi üzerinden yapılır. Arsa değerinin yüksek olduğu ilçede müteahhit teklifleri bol, ama doğru karşılaştırma şart.',
    image: images.ilceler.kadikoy,
    stats: [
      { label: 'İncelenen bina', value: '25.210', note: '21 mahalle' },
      { label: '1980 öncesi yapılan', value: '%51', note: '12.816 bina' },
      { label: '1980–2000 arası', value: '%22', note: '5.611 bina' },
      {
        label: 'Senaryoda ağır / çok ağır hasar',
        value: '713 bina',
        note: 'İlçedeki binaların yaklaşık %3’ü',
      },
    ],
    statsNote: STATS_NOTE,
    mahalleler: {
      title: 'Hangi mahallelerde yapı stoku daha eski?',
      paragraphs: [
        'İBB verisinde 1980 öncesi yapılan binaların oranı en yüksek mahalleler Caferağa (%69), Zühtüpaşa (%65), Rasimpaşa (%61), Fikirtepe (%61) ve Feneryolu’dur (%59).',
        'Deprem senaryosunda ağır ve çok ağır hasar beklenen bina sayısının en yüksek olduğu mahalleler ise Eğitim (67), Fikirtepe (60), Merdivenköy (59) ve Rasimpaşa’dır (59).',
        'Bu rakamlar bölge düzeyinde bir fikir verir. Aynı mahallede çok sağlam ve çok riskli binalar yan yana bulunabilir.',
      ],
    },
    surec: {
      title: 'Kadıköy’de riskli yapı ve proje süreci nasıl işliyor?',
      items: [
        'Riskli yapı tespiti, maliklerden birinin başvurusuyla Bakanlıkça lisanslandırılmış bir kuruluşa yaptırılır.',
        'Kadıköy Belediyesi’nin hizmet standartlarına göre riskli yapı tespit raporunun onayı ve ilgili başvurular e-Belediye sistemindeki “Hizmet Başvuruları” bölümünden yapılır.',
        'Onay başvurusunda adres ve parsel bilgilerini içeren form, lisanslı kuruluşun raporu, tahsilat makbuzu, tapu senedi, nüfus kayıt örneği ve varsa vekâletname istenir.',
        'Riskli yapı kesinleştikten sonra tahliye ve yıkım için tebligat tutanağı binanın girişine ve muhtarlığa asılır.',
        'Kadıköy Belediyesi 16 Haziran 2025’ten bu yana avan (ön) proje başvurularını e-İmar sistemi üzerinden alıyor. Bu sistemde malikler, mimar ve müteahhit projenin hangi onay aşamasında olduğunu izleyebiliyor.',
      ],
    },
    durumlar: {
      title: 'Kadıköy’de sık karşılaşılan durumlar',
      items: [
        'Yüksek arsa değeri nedeniyle maliklere çok sayıda müteahhit teklifi gelir. Tekliflerin aynı teknik şartname üzerinden alınmaması, karşılaştırmayı imkânsız hale getirir.',
        'Fikirtepe’de yıllarca süren ve bazı projelerin yarım kaldığı dönüşüm süreci, teminat mektubu, bina tamamlama sigortası ve fesih maddelerinin ne kadar önemli olduğunu gösterdi.',
        'Kadıköy Belediyesi İmar ve Şehircilik Müdürlüğü bünyesinde Koruma Uygulama ve Denetim (KUDEB) birimi bulunur. Tescilli yapı veya koruma alanında kalan parsellerde ek onay süreçleri gündeme gelebilir.',
        'Eski binalarda kat irtifakı veya kat mülkiyeti kurulmamış, arsa paylı tapulara rastlanabilir. Bu durumda riskli yapı tespitini kimin yaptırabileceği tapu kaydına göre değişir.',
      ],
    },
    faq: [
      {
        question: 'Kadıköy’de riskli yapı tespiti için nereye başvurulur?',
        answer:
          'Tespit, Bakanlıkça lisanslandırılmış bir kuruluşa yaptırılır. Lisanslı kuruluşun hazırladığı raporun onayı için Kadıköy Belediyesi e-Belediye sistemindeki Hizmet Başvuruları bölümü kullanılır.',
      },
      {
        question: 'Kadıköy’de binam eski; mutlaka riskli mi çıkar?',
        answer:
          'Hayır. Yapım yılı yalnızca bir göstergedir. Binanın riskli olup olmadığını beton dayanımı, donatı durumu ve zemin gibi verilerle yapılan riskli yapı tespiti belirler.',
      },
      {
        question: 'Kadıköy’de kaç müteahhitten teklif almalıyız?',
        answer:
          'Arsa değeri yüksek olduğu için çok sayıda teklif gelebilir. En az üç teklifi aynı proje varsayımı ve aynı teknik şartname üzerinden alıp teminat, teslim süresi ve gecikme cezası açısından karşılaştırmanızı öneriyoruz.',
      },
    ],
    sources: [
      IBB_BINA_VERISI,
      IBB_SENARYO,
      {
        label: 'Kadıköy Belediyesi Hizmet Standartları: Afet İşleri (riskli yapı başvuruları)',
        href: 'https://kadikoyapi.kadikoy.bel.tr/42cf546ab5ca4ec189d66ee290efe711.pdf',
      },
      {
        label: 'Kadıköy Belediyesi: e-İmar Başvuru',
        href: 'https://kadikoy.bel.tr/tr/e-imar-basvuru',
      },
      {
        label: 'Kadıköy Belediyesi: İmar ve Şehircilik Müdürlüğü',
        href: 'https://kadikoy.bel.tr/tr/mudurlukler/imar-ve-sehircilik-mudurlugu',
      },
      CSB_RISKLI_YAPI,
      KANUN_6306,
    ],
    relatedYaziSlugs: [
      'kentsel-donusumde-muteahhit-secimi',
      'riskli-yapi-tespitine-nasil-itiraz-edilir',
      '2026-kat-karsiligi-insaat-sozlesmesi-rehberi',
    ],
  },
  {
    slug: 'maltepe-kentsel-donusum',
    name: 'Maltepe',
    seoTitle: 'Maltepe Kentsel Dönüşüm Danışmanlığı: Belgeler ve Süreç',
    metaDescription:
      'Maltepe’de binaların %63’ü 1980–2000 arasında yapıldı. Riskli yapı onayı, kira yardımı ve yıkım ruhsatı belgeleri ile bağımsız danışmanlık rehberi.',
    heroSubtitle:
      'Maltepe’deki kat malikleri için riskli yapı onayından yıkım ruhsatına kadar bağımsız danışmanlık.',
    summary:
      'İBB verilerine göre Maltepe’de 20 kattan az 28.742 binanın %63’ü 1980–2000 arasında, yani 2001’de Yapı Denetimi Kanunu yürürlüğe girmeden önce yapıldı. Riskli yapı onayı, kira yardımı ve yıkım ruhsatı başvuruları Maltepe Belediyesi Kentsel Dönüşüm Müdürlüğü tarafından yürütülür.',
    image: images.ilceler.maltepe,
    stats: [
      { label: 'İncelenen bina', value: '28.742', note: '18 mahalle' },
      { label: '1980–2000 arası yapılan', value: '%63', note: '18.144 bina' },
      { label: '1980 öncesi', value: '%23', note: '6.541 bina' },
      {
        label: 'Senaryoda ağır / çok ağır hasar',
        value: '927 bina',
        note: 'İlçedeki binaların yaklaşık %3’ü',
      },
    ],
    statsNote: STATS_NOTE,
    mahalleler: {
      title: 'Hangi mahallelerde risk daha yoğun?',
      paragraphs: [
        'Deprem senaryosunda ağır ve çok ağır hasar beklenen bina sayısının en yüksek olduğu mahalleler Gülensu (127), Cevizli (96), Esenkent (92) ve Başıbüyük’tür (87).',
        '1980 öncesi yapılan binaların oranı en yüksek mahalleler ise Feyzullah (%41), Bağlarbaşı (%38), Gülsuyu (%37) ve Küçükyalı Merkez’dir (%35).',
        'Maltepe’de asıl dikkat çeken nokta, binaların büyük bölümünün “çok eski” değil, 1980–2000 arasında yapılmış olmasıdır. Bu dönemin binaları dışarıdan yeni görünebilir; ancak yapı denetimi sisteminin kurulmasından önce inşa edilmişlerdir.',
      ],
    },
    surec: {
      title: 'Maltepe Belediyesi’nde hangi belgeler isteniyor?',
      paragraphs: [
        'Maltepe’de 6306 sayılı Kanun kapsamındaki uygulamalar belediyenin Kentsel Dönüşüm Müdürlüğü tarafından yürütülür. Belediyenin yayımladığı listelere göre:',
      ],
      items: [
        'Riskli yapı tespit onayı: lisanslı büro dilekçesi, riskli yapı tespit formu, başvuran malikin dilekçesi, vekâletname, tapu ve emlak beyanı.',
        'Malik için kira yardımı: kira yardımı dilekçesi, kimlik, Web Tapu’dan alınmış güncel taşınmaz kaydı, hak sahibine ait Ziraat Bankası vadesiz TL hesap bilgisi; vekâleten başvuruda kira yardımı başvurusu ve ödeme alma yetkisi içeren vekâletname.',
        'Kiracı için taşınma yardımı: dilekçe, kimlik ve riskli yapının tahliye edildiğini gösteren tarihçeli yerleşim yeri belgesi (e-Devlet’ten).',
        'Yıkım ruhsatı: yıkım dilekçesi, malik ve müteahhit arasındaki yıkım sözleşmesi, binada nüfus bulunmadığına dair yazı, yıkım planı, yıkım müteahhidi, müellif ve şantiye şefine ait noter onaylı taahhütnameler.',
        'Taşınmazın imar durumu, belediyenin e-İmar uygulamasından adres veya parsel bilgisiyle sorgulanabilir.',
      ],
    },
    durumlar: {
      title: 'Maltepe’de sık karşılaşılan durumlar',
      items: [
        '1980–2000 arası binalarda malikler çoğu zaman “binamız o kadar eski değil” diyerek tespiti erteler. Oysa bu binalar 2001’deki 4708 sayılı Yapı Denetimi Kanunu’ndan önce yapılmıştır; durumu ancak tespit gösterir.',
        'Bazı mahallelerde hisseli tapu veya kat mülkiyetine geçilmemiş yapılara rastlanabilir. Bu durum hem tespit başvurusunu kimin yapacağını hem de çoğunluk hesabını etkiler.',
        'Kira yardımı başvurusunda hesap bilgisi ve vekâletnamedeki ifadeler gibi küçük eksikler ödemeleri geciktirebilir. Başvuru dosyasını eksiksiz hazırlamak zaman kazandırır.',
        'Yıkım ruhsatı için müteahhit, müellif ve şantiye şefi belgelerinin noter onaylı olması gerekir. Müteahhit seçilirken bu belgeleri zamanında hazırlayabilecek kapasitesi de değerlendirilmelidir.',
      ],
    },
    faq: [
      {
        question: 'Maltepe’de kira yardımı başvurusu nereye yapılır?',
        answer:
          'Maltepe Belediyesi Kentsel Dönüşüm Müdürlüğü’ne yapılır. Belediyenin listesine göre dilekçe, kimlik, güncel taşınmaz kaydı ve hak sahibine ait Ziraat Bankası vadesiz TL hesap bilgisi istenir. Güncel tutarlar için kira yardımı rehberimize bakabilirsiniz.',
      },
      {
        question: 'Binamız 1990’larda yapıldı; yine de tespit yaptırmalı mıyız?',
        answer:
          'Evet, değerlendirmeye değer. Maltepe’deki binaların çoğu 1980–2000 arasında, yapı denetim sistemi kurulmadan önce yapıldı. Binanın gerçek durumunu yalnızca lisanslı kuruluşun yapacağı riskli yapı tespiti gösterir.',
      },
      {
        question: 'Maltepe’de imar durumumu nasıl öğrenirim?',
        answer:
          'Maltepe Belediyesi’nin e-İmar uygulamasından adres veya ada-parsel bilgisiyle imar durumu sorgulanabilir. Proje aşamasında güncel imar durumu belgesinin belediyeden alınması gerekir.',
      },
    ],
    sources: [
      IBB_BINA_VERISI,
      IBB_SENARYO,
      {
        label: 'Maltepe Belediyesi: 6306 sayılı Kanun uygulamaları ve istenen belgeler',
        href: 'https://www.maltepe.bel.tr/icerik/6306-sayili-riskli-yapi-kanunu-uygulamalari',
      },
      {
        label: 'Maltepe Belediyesi: e-İmar uygulaması',
        href: 'https://webgis.maltepe.bel.tr/imardurumu/index.aspx',
      },
      CSB_RISKLI_YAPI,
      KANUN_6306,
    ],
    relatedYaziSlugs: [
      '2026-kentsel-donusum-kira-yardimi-istanbul-guncel-rakamlar',
      'kentsel-donusumde-kat-malikleri-haklari',
      'kentsel-donusumde-muteahhit-secimi',
    ],
  },
  {
    slug: 'bakirkoy-kentsel-donusum',
    name: 'Bakırköy',
    seoTitle: 'Bakırköy Kentsel Dönüşüm Danışmanlığı: Hızlı Tarama ve Süreç',
    metaDescription:
      'Bakırköy’de İBB senaryosuna göre binaların %17’sinde ağır hasar bekleniyor. Hızlı tarama, karot, ada bazlı dönüşüm ve malik hakları rehberi.',
    heroSubtitle:
      'Bakırköy’deki kat malikleri için hızlı taramadan ada bazlı dönüşüme kadar bağımsız danışmanlık.',
    summary:
      'İBB’nin deprem senaryosunda Bakırköy’deki 11.950 binanın 2.088’inde (yaklaşık %17) ağır veya çok ağır hasar öngörülüyor. Bakırköy Belediyesi, İBB’nin hızlı taramasında D ve E sınıfı çıkan binalarda karot alımı yapıyor ve riskli yapılar için ada bazlı dönüşümü hedefliyor.',
    image: images.ilceler.bakirkoy,
    stats: [
      { label: 'İncelenen bina', value: '11.950', note: '15 mahalle' },
      {
        label: 'Senaryoda ağır / çok ağır hasar',
        value: '2.088 bina',
        note: 'Binaların yaklaşık %17’si',
      },
      { label: '2000 öncesi yapılan', value: '%83', note: '9.961 bina' },
      { label: '1980 öncesi', value: '%41', note: '4.869 bina' },
    ],
    statsNote: STATS_NOTE,
    mahalleler: {
      title: 'Hangi mahalleler öne çıkıyor?',
      paragraphs: [
        'Deprem senaryosunda ağır ve çok ağır hasar beklenen bina sayısının en yüksek olduğu mahalleler Yeşilköy (511), Şenlikköy (344), Kartaltepe (214) ve Zuhuratbaba’dır (164).',
        '1980 öncesi yapılan binaların oranı en yüksek mahalleler Yenimahalle (%65), Sakızağacı (%64), Zuhuratbaba (%63), Yeşilyurt (%58) ve Kartaltepe’dir (%53).',
        'Bakırköy’ün senaryodaki hasar oranı, Kadıköy ve Maltepe gibi ilçelere göre belirgin şekilde yüksektir. Bu, ilçedeki her binanın riskli olduğu anlamına gelmez; ancak tespitin ertelenmemesi gerektiğini gösterir.',
      ],
    },
    surec: {
      title: 'Bakırköy’de süreç nasıl işliyor?',
      items: [
        'Bakırköy Belediyesi’nin açıklamasına göre İBB’nin Hızlı Tarama testlerinde D (yüksek risk) ve E (çok yüksek risk) sınıfında çıkan binalarda, belediyenin Kentsel Dönüşüm Müdürlüğü ekipleri karot örneği alıyor.',
        'Örnekler Bakanlıkça lisanslandırılmış kuruluşlarca incelenip ARAAD sistemine yükleniyor; sonuca göre bina riskli yapı ilan edilebiliyor.',
        'Belediye, karot alımını vatandaş kendi yaptırdığında ortalama 40 bin TL, belediye aracılığıyla yapıldığında yaklaşık 18 bin TL olarak açıkladı. Güncel bedel için belediyeye danışılmalıdır.',
        'Hızlı tarama resmi bir riskli yapı tespiti değildir; yalnızca kapsamlı inceleme yapılması gereken binaları işaret eder.',
        'Belediye, riskli yapılar için parsel bazlı değil, ada bazlı dönüşümün devreye gireceğini açıkladı.',
      ],
    },
    durumlar: {
      title: 'Bakırköy’de dikkat edilmesi gerekenler',
      items: [
        'Ada bazlı dönüşümde birden fazla parsel ve çok daha fazla malik aynı projede yer alır. Karar alma, arsa payı hesabı ve daire paylaşımı tek parsele göre daha karmaşık hale gelir.',
        'Hızlı taramada D veya E çıkan binalarda malikler çoğu zaman “bina zaten riskli ilan edildi” diye düşünür. Oysa riskli yapı kararı ancak lisanslı kuruluşun tespiti ve onay süreciyle kesinleşir; itiraz hakları da bu aşamadan sonra işler.',
        'Belediye, uzun süredir bekleyen imar planlarının onaylandığını açıkladı. Proje tasarımına başlamadan önce parselin güncel imar durumu mutlaka belediyeden teyit edilmelidir.',
        'Bakırköy’de binaların büyük çoğunluğu 9 kattan azdır. Mevcut ve yeni imar hakları arasındaki fark, müteahhit tekliflerinin gerçekçiliğini doğrudan etkiler.',
      ],
    },
    faq: [
      {
        question: 'Hızlı tarama sonucu binamız E çıktı; bina riskli mi sayılır?',
        answer:
          'Hayır, hızlı tarama resmi riskli yapı tespiti değildir. Binanın riskli yapı sayılması için lisanslı kuruluşça karot ve analizle tespit yapılması ve raporun onaylanması gerekir.',
      },
      {
        question: 'Ada bazlı dönüşüm bizim için ne değiştirir?',
        answer:
          'Proje birden fazla parseli kapsadığı için malik sayısı, arsa payı hesabı ve daire paylaşımı daha karmaşık hale gelir. Bu süreçte bağımsız bir temsilcinin tüm parsellerdeki maliklerin haklarını birlikte gözetmesi önem kazanır.',
      },
      {
        question: 'Bakırköy’de karot alımını belediye mi yapıyor?',
        answer:
          'Bakırköy Belediyesi’nin açıklamasına göre İBB hızlı taramasında D ve E sınıfı çıkan binalarda karot alımı belediye ekipleri ve ihale edilen firma tarafından birlikte yapılıyor. Malikler tespiti doğrudan lisanslı bir kuruluşa da yaptırabilir.',
      },
    ],
    sources: [
      IBB_BINA_VERISI,
      IBB_SENARYO,
      {
        label: 'Bakırköy Belediyesi: Bakırköy’deki binalara deprem testi',
        href: 'https://www.bakirkoy.bel.tr/tr/haber/bakirkoydeki-binalara-deprem-testi',
      },
      CSB_RISKLI_YAPI,
      KANUN_6306,
    ],
    relatedYaziSlugs: [
      'riskli-yapi-tespitine-nasil-itiraz-edilir',
      'kentsel-donusumde-kat-malikleri-haklari',
      'kat-malikleri-toplantisi-nasil-yapilir-2026',
    ],
  },
];

export function getIlce(slug: string): Ilce {
  const ilce = ilceler.find((item) => item.slug === slug);
  if (!ilce) throw new Error(`Bilinmeyen ilçe: ${slug}`);
  return ilce;
}
