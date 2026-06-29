export type FaqItem = {
  question: string;
  answer: string;
  readMoreHref?: string;
  readMoreLabel?: string;
};

export type FaqCategory = {
  id: string;
  title: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    id: 'genel',
    title: 'Genel',
    items: [
      {
        question: 'Kentsel dönüşüm nedir?',
        answer:
          'Kentsel dönüşüm; riskli, ekonomik ömrünü tamamlamış veya depreme dayanıksız yapıların yıkılarak yeniden inşa edilmesi sürecidir. 6306 sayılı Kanun kapsamında maliklerin hakları korunarak güvenli ve modern yaşam alanları oluşturulması hedeflenir.',
      },
      {
        question: 'Arkentra müteahhit firması mı?',
        answer:
          'Hayır. Arkentra bir müteahhit değil, malikleri temsil eden bağımsız kentsel dönüşüm danışmanlık firmasıdır. Üçyıldız Kentsel Dönüşüm Mühendislik İnşaat Taahhüt Ltd. Şti’nin iştiraki olarak; hukuk, mühendislik, mimarlık ve finans uzmanlığını tek çatı altında sunarak süreci sizin adınıza yönetiriz.',
      },
      {
        question: 'Hangi bölgelerde hizmet veriyorsunuz?',
        answer:
          'Merkezimiz Bayrampaşa, İstanbul’da olmakla birlikte İstanbul’un 39 ilçesinde ve çevre illerde kentsel dönüşüm danışmanlığı hizmeti sunuyoruz.',
      },
    ],
  },
  {
    id: 'riskli-yapi',
    title: 'Riskli Yapı',
    items: [
      {
        question: 'Riskli yapı tespiti nasıl yapılır?',
        answer:
          'Bakanlık tarafından lisanslandırılmış kuruluşlara binadan karot örneği aldırılarak teknik inceleme yapılır. Arkentra, Çevre, Şehircilik ve İklim Değişikliği Bakanlığı tarafından yetkilendirilmiş olup; talep halinde karot alımı ve riskli yapı tespiti işlemlerini de yürütebilir. Hazırlanan rapor ilgili idareye sunulur, maliklere tebliğ edilir ve itiraz süreci tamamlandıktan sonra kesinleşir.',
      },
      {
        question: 'Riskli yapı tespitine itiraz süresi ne kadardır?',
        answer:
          'Tebligatın ulaşmasından veya muhtarlık ilanının bitişinden itibaren 15 gün içinde idari itiraz yapılmalıdır. Bu süre hak düşürücüdür; gecikme halinde idari yoldan itiraz hakkı kaybedilebilir.',
      },
      {
        question: 'Karot testi yaptırırsam evim hemen yıkılır mı?',
        answer:
          'Hayır. Riskli yapı kararı kesinleşse bile tahliye ve yıkım için idare tarafından en az 60 günlük süre verilir. Süreç boyunca itiraz ve dava haklarınız saklıdır.',
      },
    ],
  },
  {
    id: 'hukuk-sozlesme',
    title: 'Hukuk ve Sözleşme',
    items: [
      {
        question: 'Kat karşılığı inşaat sözleşmesi noter huzurunda mı yapılmalı?',
        answer:
          'Evet. Kat karşılığı inşaat sözleşmeleri resmi şekil şartına tabidir ve noter huzurunda düzenleme şeklinde yapılmalıdır. Taraflar arasında imzalanan sözleşmeler geçersiz sayılır.',
      },
      {
        question: 'Salt çoğunluk (50+1) kuralı nedir?',
        answer:
          '6306 sayılı Kanun kapsamında, riskli yapı süreci usulüne uygun şekilde kesinleştikten sonra arsa payı sahiplerinin salt çoğunluğu ile kentsel dönüşüm kararları alınabilir. Süreç kesinleşmeden alınan kararlar hukuki risk taşıyabilir.',
      },
      {
        question: 'Sözleşme Check-Up nedir?',
        answer:
          'Müteahhidin sunduğu kat karşılığı inşaat sözleşmesinin avukat, mühendis ve mimar ekibimiz tarafından hukuki, teknik ve finansal açıdan incelenmesidir. Teslim koşulları, teminat yapısı, cezai şartlar, ruhsat ve iskân süreçleri ile tapu devri hükümleri değerlendirilir; riskli maddeler tespit edilir ve müzakere desteği sağlanır.',
      },
      {
        question: 'Hukuki danışmanlık dava takibini kapsıyor mu?',
        answer:
          'Standart danışmanlık hizmetimiz; sözleşme hazırlığı, toplantı organizasyonu, tapu ve idari süreçlerin hukuki koordinasyonunu kapsar. Dava takibi, icra takibi ve mahkemelerde temsil ayrı bir hukuki hizmet sözleşmesi kapsamında değerlendirilir.',
      },
      {
        question: 'Kat malikleri toplantıları neden önemli?',
        answer:
          '04 Şubat 2026 tarihli Resmî Gazete’de yayımlanan yönetmelik değişikliğiyle 6306 sayılı Kanun kapsamındaki kat malikleri toplantılarının organizasyonu zorunlu hale gelmiştir. Gündem oluşturma, tebligat, muhtarlık askı süreçleri ve tutanakların mevzuata uygun yürütülmesi kritik önem taşır.',
      },
    ],
  },
  {
    id: 'finans-destek',
    title: 'Finans ve Destekler',
    items: [
      {
        question: '2026 kentsel dönüşüm kira yardımı ne kadar?',
        answer:
          'İstanbul’da konut maliklerine Bakanlık kapsamında aylık 8.000 TL, İBB riskli yapı desteğiyle 10.000 TL’ye kadar kira yardımı ödenir. Taşınma desteği malikler için 16.000 TL, kiracılar için 16.000 TL tek seferlik hibe olarak verilir.',
        readMoreHref: '/yazilarimiz/2026-kentsel-donusum-kira-yardimi-istanbul-guncel-rakamlar',
        readMoreLabel: '2026 kira yardımı rehberini okuyun →',
      },
      {
        question: 'Kira yardımına kimler başvurabilir?',
        answer:
          'Riskli yapıda malik veya kiracı olan hak sahipleri, yıkım sonrası belirli süre içinde başvuru yapabilir. Malik ve kiracı için gerekli belgeler farklılık gösterir.',
      },
      {
        question: 'Yarısı Bizden kampanyasından kimler yararlanabilir?',
        answer:
          'İstanbul’un 39 ilçesinde riskli yapı ilan ettiren konut ve iş yeri sahipleri kampanyadan faydalanabilir. Proje ön şartları ve başvuru koşulları için güncel mevzuatı takip etmek gerekir.',
      },
      {
        question: 'İADŞP kentsel dönüşüm kredisi nedir?',
        answer:
          'İklim ve Afetlere Dayanıklı Şehirler Projesi (İADŞP) kapsamında Dünya Bankası finansmanıyla sunulan kentsel dönüşüm kredileridir. 6306 sayılı Kanun kapsamındaki projelerde faiz destekli kredi imkânları da değerlendirilebilir; başvuru koşulları proje ve malik durumuna göre değişir.',
      },
    ],
  },
  {
    id: 'teknik-denetim',
    title: 'Teknik Denetim',
    items: [
      {
        question: 'Teknik denetim hangi aşamalarda yapılır?',
        answer:
          'Temel betonu öncesi, drenaj ve yalıtım, kat beton dökümü, son kat sonrası, duvar imalatları, mekanik-elektrik tesisat, alçı-sıva-boya, cephe, sabit mobilya ve iskân aşamalarında yerinde inceleme yapılır. Kritik taşıyıcı sistem aşamalarında denetimler daha sık aralıklarla gerçekleştirilir.',
      },
      {
        question: 'Teknik denetim raporları kime iletilir?',
        answer:
          'Saha incelemelerinde tespit edilen eksiklik ve uygunsuzluklar fotoğraf, tutanak ve teknik değerlendirmelerle belgelenir; ayrıntılı ilerleme raporları kat malikleri temsil heyetine yazılı olarak sunulur.',
      },
      {
        question: 'Teknik danışmanlık yapı denetiminin yerini tutar mı?',
        answer:
          'Hayır. Danışmanlık hizmetimiz, belirli aşamalarda yapılan sınırlı süreli gözlemsel kontroller ve genel nitelikli teknik tespitlerden oluşur. Yapı denetim kuruluşu, fenni mesul veya yüklenici sıfatıyla hareket edilmez; proje müellifleri ve yüklenicinin kanuni sorumlulukları devam eder.',
      },
    ],
  },
];

export const faqItems: FaqItem[] = faqCategories.flatMap((category) => category.items);

const kiraYardimiFaq = faqCategories.find((category) => category.id === 'finans-destek')!.items[0];

export const faqHomePreview: FaqItem[] = [
  kiraYardimiFaq,
  ...faqItems.filter((item) => item.question !== kiraYardimiFaq.question).slice(0, 4),
];

export const faqPreviewCount = 5;
