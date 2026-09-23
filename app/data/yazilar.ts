import { images } from './images';

export type YaziKonu = 'Hukuk' | 'Mühendislik' | 'Malik Rehberi' | 'Finans' | 'Mevzuat';
export type YaziTur = 'Rehber' | 'Haber' | 'Uzman Görüşü';

export interface Yazi {
  slug: string;
  title: string;
  excerpt: string;
  summary: string;
  content: string;
  date: string;
  dateLabel: string;
  readTime?: string;
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
    slug: 'riskli-yapi-kesinlesmeden-kentsel-donusum-kararlari',
    title:
      'Riskli Yapı Kesinleşmeden Alınan Kentsel Dönüşüm Kararlarının Hukuki Geçerliliği',
    excerpt:
      'Yargıtay 5. Hukuk Dairesi’nin 20.05.2025 tarihli emsal kararı çerçevesinde, riskli yapı süreci tamamlanmadan alınan toplantı ve sözleşme kararlarının hukuki geçerliliği.',
    summary:
      'Riskli yapı tespiti kesinleşmeden alınan kentsel dönüşüm kararları hukuka aykırı olabilir. Kat mülkiyeti devam ettiği sürece Kat Mülkiyeti Kanunu geçerlidir ve yeniden yapım kararları oybirliği gerektirir.',
    date: '2025-05-25',
    dateLabel: '25 Mayıs 2025',
    readTime: '5 dk okuma',
    konu: 'Hukuk',
    tur: 'Uzman Görüşü',
    imageSrc: images.yazilar.yargitay.src,
    imageAlt: images.yazilar.yargitay.alt,
    content: `Kentsel dönüşüm uygulamalarında en fazla uyuşmazlık yaratan hususlardan biri, riskli yapı tespit süreci tamamlanmadan kat malikleri tarafından alınan yeniden yapım, müteahhit seçimi ve kat karşılığı inşaat sözleşmesi yapılmasına ilişkin kararların hukuki niteliğidir. Özellikle uygulamada, henüz riskli yapı raporu kesinleşmeden 6306 sayılı Kanun hükümlerinin uygulanmaya başlandığı, Ek-12 toplantılarının yapıldığı ve arsa payı çoğunluğu ile kararlar alındığı sıklıkla görülmektedir.

Ancak 20.05.2025 tarihli Yargıtay 5. Hukuk Dairesi kararı, uygulamada oldukça yaygın şekilde gerçekleştirilen birçok işlemin hukuki geçerliliği bakımından ciddi riskler barındırdığını açık biçimde ortaya koymuştur. Yargıtay; 6306 sayılı Kanun hükümlerinin uygulanabilmesi için yalnızca riskli yapı tespitinin yapılmasının değil, aynı zamanda bu sürecin usulüne uygun biçimde kesinleşmesinin ve taşınmaz üzerindeki kat mülkiyeti rejiminin sona ermesinin de önem taşıdığını vurgulamıştır.

Kararda açıkça ifade edildiği üzere, her ne kadar taşınmaz hakkında riskli yapı şerhi bulunuyor olsa da, toplantının yapıldığı tarihte yapının fiilen yıkılmamış olması ve kat mülkiyetinin halen devam ediyor olması nedeniyle uyuşmazlığın 634 sayılı Kat Mülkiyeti Kanunu hükümlerine tabi olarak değerlendirilmesi gerektiği kabul edilmiştir.

Yargıtay, taşınmazın yeniden yaptırılması, mevcut bağımsız bölümlerin ortadan kaldırılması ve kat mülkiyetine ilişkin ayni hak düzeninin tamamen yeniden şekillenmesi sonucunu doğuran işlemlerin, kat maliklerinin mülkiyet hakkına doğrudan müdahale niteliğinde olduğunu değerlendirmiştir. Bu nedenle, kat mülkiyeti devam ettiği sürece söz konusu işlemlerin ancak Kat Mülkiyeti Kanunu’nun 45. maddesi kapsamında tüm kat maliklerinin oybirliği ile alınabileceğini ortaya koymuştur.

İlgili Yargıtay kararının künyesi: Yargıtay 5. Hukuk Dairesi’nin 20.05.2025 tarihli, 2025/2632 Esas ve 2025/7778 Karar sayılı ilamı.

## 6306 Sayılı Kanun Kapsamında Karar Alma Süreci

6306 sayılı Kanun’un temel amacı; ekonomik ömrünü tamamlamış, can ve mal güvenliği açısından risk taşıyan yapıların dönüştürülerek güvenli yapılaşmanın sağlanmasıdır. Kanun kapsamında birçok karar, maliklerin arsa payı bakımından salt çoğunluğu (50+1) ile alınabilmektedir. Ancak bu özel çoğunluk sisteminin hangi aşamadan itibaren uygulanabileceği kritik önem taşır.

Uygulamada çoğu zaman yalnızca riskli yapı tespit raporunun alınmış olması yeterli görülerek 6306 sayılı Kanun’daki çoğunluk hükümleri uygulanmaya başlanmaktadır. Oysa riskli yapı sürecinin usulüne uygun şekilde kesinleşip kesinleşmediği, kat mülkiyetinin devam edip etmediği hususları büyük önem taşımaktadır.

## Riskli Yapı Tespitinin Kesinleşmesi

Yalnızca riskli yapı tespitinin yapılmış olması, tek başına 6306 sayılı Kanun hükümlerinin derhal uygulanabileceği anlamına gelmemektedir. Riskli yapı sürecinin tamamlanabilmesi için:

- Lisanslı kuruluş tarafından riskli yapı tespit raporunun hazırlanması
- İlgili idareye bildirilmesi
- Maliklerin tebliğ edilmesi
- İtiraz süresinin geçmesi veya itirazların kesin olarak sonuçlanması

gerekmektedir. Bu aşama tamamlanmadan maliklerin 6306 sayılı Kanun’daki özel çoğunluk hükümlerine dayanarak işlem yapmaları ciddi hukuki riskler doğurur.

Kanaatimizce, söz konusu hükmün amacı maliklerin mülkiyet haklarını doğrudan etkileyen özel karar alma mekanizmalarının uygulanmasına imkân tanımak olduğundan, “tespit” ifadesinin “kesinleşmiş riskli yapı tespiti” olarak yorumlanması gerekmektedir.

## Sonuç

Yargıtay 5. Hukuk Dairesi’nin 20.05.2025 tarihli emsal kararı, kentsel dönüşüm uygulamalarında “riskli yapı sürecinin kesinleşmesi” ile “6306 sayılı Kanun hükümlerinin uygulanabilir hale gelmesi” arasındaki farkı açık biçimde ortaya koymuştur.

- Riskli yapı raporunun düzenlenmiş olması tek başına yeterli değildir
- Kat mülkiyeti devam ettiği sürece Kat Mülkiyeti Kanunu uygulanmaya devam eder
- Yapının yeniden yaptırılmasına ilişkin kararlar oybirliği gerektirir
- Salt çoğunluk (50+1) ancak 6306 sayılı Kanun süreci usulüne uygun biçimde kesinleştikten sonra uygulanabilir

Kentsel dönüşüm süreçlerinin hukuka uygun şekilde yürütülmesi; riskli yapı tespiti, toplantı ve karar süreçleri ile yüklenici sözleşmelerinin doğru yönetilmesi bakımından büyük önem taşır. Aksi halde alınan kararların iptali, projelerin durması ve tarafların ciddi maddi zararlarla karşılaşması söz konusu olabilir.

Arkentra Kentsel Dönüşüm ve Danışmanlık olarak; uzman hukukçu ve teknik ekibimiz ile süreçlerin tamamını 6306 sayılı Kanun, Kat Mülkiyeti Kanunu ve ilgili mevzuata uygun şekilde yöneterek, maliklerin hak kaybı yaşamadan güvenli bir dönüşüm süreci yürütmelerine destek sağlamaktayız.`,
  },
  {
    slug: '2026-kat-karsiligi-insaat-sozlesmesi-rehberi',
    title:
      '2026 Kat Karşılığı İnşaat Sözleşmesi Rehberi: Müteahhitle Anlaşmadan Önce Bilmeniz Gereken 10 Kritik Madde',
    excerpt:
      'Kat karşılığı inşaat sözleşmesinde teknik şartname, şerefiye paylaşımı, gecikme tazminatı ve bina tamamlama sigortası gibi kritik maddeler.',
    summary:
      'Kat karşılığı inşaat sözleşmesi noter huzurunda yapılmalıdır. İmzalamadan önce teknik şartname, şerefiye paylaşımı, gecikme tazminatı ve bina tamamlama sigortası maddelerini mutlaka kontrol edin.',
    date: '2025-12-25',
    dateLabel: '25 Aralık 2025',
    readTime: '3 dk okuma',
    konu: 'Hukuk',
    tur: 'Rehber',
    imageSrc: images.yazilar.katKarsiligi.src,
    imageAlt: images.yazilar.katKarsiligi.alt,
    content: `Bir mülk sahibi için Kat Karşılığı İnşaat Sözleşmesi, sadece kağıt üzerinde bir imza değil; mülkünüzün geleceğini, ailenizin huzurunu ve milyonlarca liralık bir yatırımı müteahhide emanet etmektir. 2026 yılına girerken, değişen maliyetler ve hukuki düzenlemeler ışığında standart matbu sözleşmeler artık mülk sahiplerini korumaya yetmiyor.

## Kat Karşılığı İnşaat Sözleşmesi Nedir?

En basit tabiriyle; arsa sahibinin arsa payını müteahhide devrettiği, müteahhidin ise bunun karşılığında arsa üzerinde bina inşa ederek belirli bağımsız bölümleri arsa sahibine teslim etmeyi taahhüt ettiği, noter huzurunda yapılması zorunlu olan bir sözleşmedir.

## 2026'da Bir Sözleşmeyi Güvenli Kılan 10 Altın Kural

### 1. Teknik Şartname
Sözleşmenin eki olan teknik şartnamede “birinci sınıf malzeme” gibi yuvarlak ifadeler yerine; markaların serileri, modelleri ve kalite standartları (TSE, CE) tek tek yazılmalıdır.

### 2. Şerefiye Paylaşımı
Hangi dairenin kime ait olacağı, manzara, kat ve cephe farkları gözetilerek SPK lisanslı değerleme uzmanları tarafından hazırlanan şerefiye raporuna göre belirlenmelidir.

### 3. İnşaat Süresi ve Gecikme Tazminatı
İnşaatın ruhsat tarihinden değil, sözleşme tarihinden itibaren ne zaman başlayacağı ve biteceği netleştirilmelidir. Gecikilen her ay için müteahhidin ödeyeceği tazminat, o günkü rayiç kira bedelinin en az 1,5–2 katı olarak belirlenmelidir.

### 4. Bina Tamamlama Sigortası
2026'da artık bir tercih değil, zorunluluk olmalıdır. Müteahhit inşaatı bitiremezse, sigorta şirketi devreye girerek inşaatın tamamlanmasını veya paranızın iadesini sağlar.

### 5. Salt Çoğunluk ve Karar Alma
Yeni yasaya göre arsa payı sahiplerinin %50+1 çoğunluğu ile karar alınabilir. Ancak azınlık haklarının korunması için sözleşmedeki oylama mekanizmaları uzmanlarca kurgulanmalıdır.

## Sık Sorulan Sorular

### Sözleşmeyi kendi aramızda imzalasak geçerli olur mu?
Hayır. Kat karşılığı inşaat sözleşmeleri resmi şekil şartına tabidir. Mutlaka noter huzurunda düzenleme şeklinde yapılmalıdır.

### Müteahhit inşaatı yarıda bırakırsa sözleşmeyi nasıl feshederiz?
Gecikme veya temerrüt durumunda fesih süreci oldukça karışıktır. Sözleşmeye hızlı fesih ve tahliye mekanizmaları eklenmemişse mahkeme süreci yıllarca sürebilir.

### Müteahhit iflas ederse daireme ne olur?
Tapu devirleri inşaatın aşamalarına göre yapılmadıysa, mülkünüzü geri kazanmak çok zor olabilir. Doğru sözleşme, tapuyu inşaat ilerledikçe teslim eder.

## Neden Uzman Desteği Almalısınız?

Müteahhitlerin sunduğu sözleşmeler genellikle müteahhidi koruyan maddelerle doludur. Arkentra olarak sadece hukuki değil, aynı zamanda teknik ve finansal denetim yapıyoruz: müteahhidin finansal geçmişini sorguluyor, teknik şartnameyi mühendislerimizle inceliyor ve sözleşmeyi mülk sahibi lehine hukuki bir zırha dönüştürüyoruz.

Elinizde bir sözleşme taslağı mı var? İmzalamadan önce Arkentra uzmanlarından ücretsiz ön inceleme alın.`,
  },
  {
    slug: 'riskli-yapi-tespitine-nasil-itiraz-edilir',
    title: 'Riskli Yapı Tespitine Nasıl İtiraz Edilir? 2026 Hukuki ve Teknik Hak Arama Rehberi',
    excerpt:
      'Tapu şerhi, 15 günlük idari itiraz süresi, teknik heyet incelemesi ve idare mahkemesi yollarıyla riskli yapı tespitine itiraz rehberi.',
    summary:
      'Riskli yapı tespitine tebliğ veya muhtarlık ilanından itibaren 15 gün içinde idari itiraz yapılmalıdır. İtiraz reddedilirse 30 gün içinde idare mahkemesinde dava açılabilir.',
    date: '2025-12-22',
    dateLabel: '22 Aralık 2025',
    readTime: '3 dk okuma',
    konu: 'Hukuk',
    tur: 'Rehber',
    imageSrc: images.yazilar.riskliYapi.src,
    imageAlt: images.yazilar.riskliYapi.alt,
    content: `Evinize veya iş yerinize Tapu Müdürlüğü’nden bir tebligat geldi ve binanızın 6306 sayılı Kanun gereğince riskli yapı olduğu mu bildirildi? Bu durum, binanız için geri dönüşü zor bir yıkım sürecinin başladığı anlamına gelir. Ancak kararın hatalı olduğunu düşünüyorsanız yasal haklarınızı kullanmak için vaktiniz var.

## Süreç Nasıl Başlar?

Riskli yapı raporu onaylandığında süreç teknik bir incelemeden hukuki bir boyuta evrilir.

- Tapu Müdürlüğü taşınmazın kaydına “Riskli Yapıdır” şerhini işler
- Tüm maliklere resmi tebligat gönderilir
- Adresinde bulunamayanlar için muhtarlıkta 15 günlük ilan süreci işletilir

Kritik uyarı: Tebligatı almadım savunmaları, muhtarlık ilanı kuralı nedeniyle genellikle geçersiz sayılmaktadır.

## İdari İtiraz: 15 Günlük Kritik Süre

Binanızın riskli olmadığına inanıyorsanız, ilk adım idari itiraz yoludur. Tebligatın ulaşmasından veya muhtarlık ilanının bitişinden itibaren 15 gün içinde itiraz edilmelidir. Bu süre hak düşürücüdür.

İtiraz; Çevre, Şehircilik ve İklim Değişikliği İl Müdürlüğü’ne, yetkili belediyeye veya e-Devlet üzerinden yapılabilir. Sadece tapu malikleri veya yasal temsilcileri itiraz edebilir.

### İtiraz Dilekçesinde Neler Olmalı?

Basit bir “yıkılmasını istemiyorum” dilekçesi teknik heyet tarafından doğrudan reddedilir. Dilekçede şu noktaların altı çizilmelidir:

- Karot numunelerinin yönetmeliğe aykırı noktalardan alınması
- Zemin etüdü verilerindeki tutarsızlıklar
- Statik modellemede kullanılan yanlış yük katsayıları

Profesyonel bir teknik mütalaa eklemek, itirazın kabul edilme şansını önemli ölçüde artırır.

## Teknik Heyet ve İdare Mahkemesi

İtirazınız, üniversite öğretim üyeleri ve Bakanlık yetkililerinden oluşan Teknik Heyet tarafından incelenir. Heyet kararı idari açıdan kesindir.

İdari itiraz reddedilirse, ret kararının tebliğinden itibaren 30 gün içinde İdare Mahkemesi’nde dava açılmalıdır. Yürütmeyi durdurma kararı alınmazsa dava sürerken belediye binayı yıkabilir.

## Yıkım ve Tahliye Süreci

Hukuki süreçlerin sonunda rapor kesinleşirse bina yasal olarak yıkılması gereken yapı statüsüne geçer. İdare tahliye ve yıkım için en az 60 gün süre verir; tahliye yapılmazsa 30 günlük ek ihtar gönderilir.

Riskli yapı tespit süreci, hata kabul etmeyen teknik ve hukuki bir süreçtir. Süreci profesyonelce yönetmek için Arkentra uzman ekibimizle iletişime geçebilirsiniz.`,
  },
  {
    slug: '2026-kentsel-donusum-kira-yardimi-istanbul-guncel-rakamlar',
    title: '2026 Kentsel Dönüşüm Kira Yardımı Ne Kadar Oldu? (İstanbul Güncel Rakamlar)',
    excerpt:
      '2026 İstanbul kentsel dönüşüm kira yardımı tutarları, taşınma desteği, kiracı hakları ve başvuru belgeleri. Pendik, Maltepe ve Kartal için güncel rakamlar.',
    summary:
      '2026 yılında İstanbul’da konut malikleri aylık 8.000 TL (Bakanlık) kira yardımı alabilir; İBB riskli yapı desteğiyle bu tutar 10.000 TL’ye çıkabilir. Tek seferlik taşınma yardımı 16.000 TL’dir.',
    date: '2026-06-15',
    dateLabel: '15 Haziran 2026',
    readTime: '6 dk okuma',
    konu: 'Mevzuat',
    tur: 'Rehber',
    imageSrc: images.yazilar.kiraYardimi.src,
    imageAlt: images.yazilar.kiraYardimi.alt,
    content: `İstanbul'da beklenen büyük deprem riski ve yapı stokunun yaşlanması, kentsel dönüşümü bir tercih değil, zorunluluk haline getirdi. Ancak evini yenilemek isteyen mülk sahiplerinin aklındaki en büyük soru işareti değişmiyor: İnşaat süresince nerede kalacağım ve devlet kiramı karşılayacak mı?

2026 yılına girerken, artan kira maliyetleri karşısında Çevre, Şehircilik ve İklim Değişikliği Bakanlığı ile yerel yönetimler destek paketlerini güncelledi. İster Pendik, ister Maltepe veya İstanbul’un diğer ilçelerinde ikamet edin, kentsel dönüşüm sürecinde cebinizi rahatlatacak güncel kira yardımı rakamlarını ve başvuru şartlarını sizler için derledik.

## 2026 İstanbul Kentsel Dönüşüm Kira Yardımı Tutarları

2025 sonu itibarıyla yapılan düzenlemelerle birlikte, İstanbul'da riskli yapı sahiplerine ödenen kira yardımı tutarları ciddi oranda artırıldı. Bu rakamlar, binanın bulunduğu ilçeye veya risk durumuna göre değişiklik gösterebilmektedir.

Bakanlık ve ilgili kurumların belirlediği güncel rakamlar şu şekildedir:

### Konut Maliki (Ev Sahibi)
- Aylık kira yardımı: 8.000 TL (Bakanlık) / 10.000 TL (İBB Riskli Yapı)*
- Taşınma yardımı (tek seferlik): 16.000 TL

### Kiracı
- Aylık kira yardımı: Kira yardımı alamaz
- Taşınma yardımı (tek seferlik): 16.000 TL

### Sınırlı Ayni Hak Sahibi
- Aylık kira yardımı: Kira yardımı alamaz
- Taşınma yardımı (tek seferlik): 40.000 TL

Önemli not: İstanbul Büyükşehir Belediyesi (İBB), "Hızlı Tarama Testi" sonucunda en riskli grupta olduğu tespit edilen binalar için kira yardımını 10.000 TL'ye kadar çıkarmıştır.

## Kira Yardımı mı, Faiz Destekli Kredi mi?

Kentsel dönüşüm sürecinde devlet iki farklı finansal destek sunar, ancak bunlardan sadece birini seçebilirsiniz:

- Kira Yardımı: 18 ay boyunca hibe olarak verilir, geri ödenmez.
- Faiz Destekli Dönüşüm Kredisi: Binanızı yenilemek için bankadan çekeceğiniz kredinin faiz masrafının bir kısmını devlet karşılar.

Eğer Kartal veya Pendik gibi bölgelerde müteahhitle "kat karşılığı" değil de "taahhüt" usulü (yani inşaat parasını sizin ödediğiniz model) ile anlaştıysanız, düşük faizli kredi desteği kira yardımından daha avantajlı olabilir. Ancak binanız kat karşılığı yapılıyorsa, kira yardımı almak en mantıklı seçenektir.

## Kiracılar Kentsel Dönüşümden Yararlanabilir mi?

Evet, kiracılar da mağdur edilmemektedir. Riskli ilan edilen binada en az 1 yıldır oturduğunu belgeleyen kiracılar, tek seferlik taşınma yardımı (İstanbul için 16.000 TL) alabilirler. Ancak kiracılara aylık düzenli kira ödemesi yapılmaz; bu hak sadece tapu sahiplerine (maliklere) aittir.

## Başvuru İçin Gerekli Belgeler Nelerdir?

İstanbul merkez ofisimizden veya e-Devlet üzerinden yönetebileceğiniz süreç için şu belgeleri hazırlamanız gerekir:

- Riskli Yapı Tespit Raporu: Binanızın 6306 sayılı kanun kapsamında riskli olduğunu gösteren onaylı rapor.
- Tapu Belgesi ve Kimlik Fotokopisi.
- Adres Bilgileri Raporu: Nüfus müdürlüğünden alınacak, riskli yapıda ikamet ettiğinizi gösteren belge.
- Yıkım Tutanağı: Binanın boşaltılıp yıkıldığını kanıtlayan belge.
- Ziraat Bankası Hesap Cüzdanı: Ödemelerin yatırılacağı hesaba ait IBAN.

## Arkentra ile Süreci Tek Noktadan Yönetin

Kentsel dönüşüm sadece eski binayı yıkıp yenisini yapmak değildir; kira yardımından vergi muafiyetlerine kadar tüm yasal haklarınızı eksiksiz kullanmanız gereken bir süreçtir.

Arkentra Kentsel Dönüşüm olarak, İstanbul’daki merkezimizden Pendik, Kartal ve Maltepe başta olmak üzere İstanbul'un her noktasına hizmet veriyoruz:

- Riskli yapı tespit başvurusu
- Kira yardımı dosyasının hazırlanması
- Müteahhit sözleşmelerinin hukuki denetimi

Biz müteahhit değiliz, sizin çözüm ortağınızız. Hak kaybı yaşamadan güvenli evlerinize kavuşmanızı sağlıyoruz.

Yasal uyarı: Kira yardımı tutarları Çevre, Şehircilik ve İklim Değişikliği Bakanlığı tarafından yıllık olarak güncellenmektedir. En doğru ve kişiye özel bilgi için uzmanlarımızla görüşmeniz tavsiye edilir.`,
  },
  {
    slug: 'kentsel-donusum-danismanligi-fiyat-ne-kadar-2026',
    title: '2026 Kentsel Dönüşüm Danışmanlık Ücreti ve Fiyat Rehberi',
    excerpt:
      '2026 kentsel dönüşüm danışmanlık ücretleri neye göre belirlenir? Daire başı fiyatlandırma, hizmet kapsamı, maliyet analizi ve malikler için risk yönetimi rehberi.',
    summary:
      'Kentsel dönüşüm danışmanlık ücreti daire sayısı, hukuki karmaşıklık ve hizmet kapsamına göre belirlenir. Standart paket yoktur; her proje için özel fiyatlandırma yapılır.',
    date: '2026-06-18',
    dateLabel: '18 Haziran 2026',
    readTime: '7 dk okuma',
    konu: 'Malik Rehberi',
    tur: 'Rehber',
    imageSrc: images.yazilar.danismanlik.src,
    imageAlt: images.yazilar.danismanlik.alt,
    content: `Kentsel dönüşüm süreci başladığında mülk sahiplerinin zihnini kurcalayan en kritik soru şudur: "Kentsel dönüşüm danışmanlık ücreti ne kadar?" 2026 yılı itibarıyla inşaat maliyetlerinin ve mülkiyet değerlerinin ulaştığı seviyeler, profesyonel bir yol arkadaşı ile çalışmayı opsiyonel olmaktan çıkarıp zorunlu hale getirmiştir.

Arkentra Kentsel Dönüşüm olarak, şeffaflık ilkemiz gereği danışmanlık fiyatlarının nasıl belirlendiğini, hangi kriterlerin maliyeti etkilediğini ve bu hizmetin aslında size nasıl para kazandırdığını tüm detaylarıyla açıklıyoruz.

## Kentsel Dönüşüm Danışmanlık Fiyatları Neye Göre Belirlenir?

Her binanın teknik durumu, malik sayısı ve hukuki geçmişi farklı olduğu için standart bir paket fiyat yerine projeye özel fiyatlandırma modeli uygulanır. Fiyatı etkileyen dört temel sütun şunlardır:

- Bağımsız bölüm (daire/dükkan) sayısı: Projedeki ünite sayısı arttıkça yönetilmesi gereken malik trafiği ve hukuki operasyon büyür. Ancak birim başına düşen maliyet genellikle toplu projelerde daha avantajlı hale gelir.
- Hukuki karmaşıklık derecesi: Tapu üzerindeki şerhler, veraset sorunları veya uzlaşma sağlanamayan azınlık hisselerinin varlığı, uzman ekibin mesai süresini belirler.
- Hizmetin kapsamı: Sadece sözleşme denetimi mi istiyorsunuz, yoksa inşaatın son aşamasına kadar sürecek teknik müşavirlik mi? Kapsam genişledikçe fiyat yapısı değişir.
- Lokasyon ve imar durumu: İstanbul'un merkezi ilçelerindeki yüksek değerli arazilerde hata payı çok düşük olduğu için daha detaylı ve hassas bir danışmanlık süreci kurgulanır.

## Sık Sorulan Sorular

### 1. Kentsel dönüşüm danışmanlık ücreti daire başı mı hesaplanır?

Genellikle evet. Apartman ve site projelerinde maliyetin şeffaf paylaşılması adına daire başı danışmanlık ücreti belirlenir. Ancak büyük ticari projelerde veya kentsel dönüşüm ihalelerinde toplam proje bedeli üzerinden bir yüzde ile de çalışılabilmektedir.

### 2. Danışmanlık ücreti inşaat maliyetinden ayrı mı ödenir?

Bu mülk sahiplerinin tercihine bağlıdır. Bazı durumlarda danışmanlık bedeli malikler tarafından doğrudan karşılanırken, bazı projelerde bu maliyetin müteahhit tarafından üstlenilmesi sözleşme maddesi olarak eklenir. Arkentra olarak tarafsızlığımızı korumak adına malik temsilciliğini önemsiyoruz.

### 3. "Ücretsiz kentsel dönüşüm danışmanlığı" mümkün mü?

Belediyelerin bilgilendirme ofisleri temel bilgileri ücretsiz sağlar. Ancak binanıza özel statik analiz, teknik şartname hazırlığı, müteahhit hukuki denetimi ve yerinde inşaat kontrolü gibi profesyonel ve sorumluluk gerektiren hizmetler, lisanslı uzmanlık gerektiren ücretli hizmetlerdir.

### 4. Danışmanlık fiyatına hangi hizmetler dahildir?

Arkentra'nın kapsamlı danışmanlık paketinde şu hizmetler fiyata dahil edilebilir:

- Riskli yapı tespit süreci yönetimi
- SPK lisanslı değerleme (şerefiye) raporu organizasyonu
- Teknik şartnamenin mühendislerce hazırlanması
- Müteahhit firmaların finansal ve teknik yeterlilik analizi
- Hukuki sözleşme hazırlığı ve %50+1 salt çoğunluk süreci yönetimi

### 5. En ucuz kentsel dönüşüm danışmanlık firmasını seçmek riskli mi?

Kesinlikle. Kentsel dönüşümde ucuz hizmet, genellikle eksik denetim veya deneyimsiz kadro demektir. İnşaat sırasında yapılacak tek bir mühendislik hatası veya sözleşmedeki bir boşluk, size danışmanlık ücretinin yüzlerce katı zarar olarak dönebilir.

## Danışmanlık Ücreti Size Ne Kadar Para Kazandırır?

Gelin, 2026 rakamlarıyla bir karşılaştırma yapalım:

Senaryo A (danışmansız): Müteahhit ile doğrudan anlaştınız. Sözleşmedeki bir boşluk nedeniyle inşaat 1 yıl gecikti. 10 dairelik bir apartmanda yıllık toplam kira kaybınız ve artan inşaat maliyeti zararı yaklaşık 3.000.000 TL civarındadır.

Senaryo B (Arkentra danışmanlığı ile): Profesyonel destek aldınız. Sözleşmeye gecikme tazminatı ve bina tamamlama sigortası eklendi. İnşaat süresinde bitti, malzeme kalitesi denetlendi ve mülkünüzün değeri piyasanın üzerinde oluştu.

Sonuç: Ödediğiniz danışmanlık ücreti, sizi milyonlarca liralık zarardan kurtarırken mülkünüzün değerine değer katabilir.

## Binanız İçin Şeffaf Fiyat Teklifi Alın

Arkentra olarak her binanın özel olduğuna inanıyoruz. Size internet üzerinden ezber bir fiyat vermek yerine binanızın tapu kayıtlarını inceliyor, malik sayısını ve beklentilerinizi analiz ediyor ve ardından en adil fiyat teklifini hazırlıyoruz.

Milyonluk dairenizi şansa değil, uzmana emanet edin. Kentsel dönüşüm maliyet analiziniz ve size özel danışmanlık fiyat teklifimiz için bize ulaşın:

- Telefon ve WhatsApp: 0545 832 6199
- Ücretsiz ön inceleme: Web sitemiz üzerinden binanızın bilgilerini bırakın, sizi 24 saat içinde arayalım.`,
  },
  {
    slug: 'muteahhit-sozlesme-check-up',
    title:
      'Müteahhit Sözleşmesi İmzalamadan Önce Durun! Arkentra Sözleşme Check-Up ile Haklarınızı Koruyun',
    excerpt:
      'Kat karşılığı inşaat sözleşmelerinde hukuki, teknik ve finansal risk alanları ile Arkentra Sözleşme Check-Up süreci.',
    summary:
      'Müteahhit sözleşmesini imzalamadan önce hukuki tuzaklar, teknik şartname eksiklikleri ve finansal güvenceleri (bina tamamlama sigortası, teminat mektubu) kontrol ettirin.',
    date: '2025-12-21',
    dateLabel: '21 Aralık 2025',
    readTime: '2 dk okuma',
    konu: 'Malik Rehberi',
    tur: 'Uzman Görüşü',
    imageSrc: images.yazilar.sozlesmeDenetim.src,
    imageAlt: images.yazilar.sozlesmeDenetim.alt,
    content: `Kentsel dönüşüm sürecinde atacağınız en önemli imza, kat karşılığı inşaat sözleşmesidir. Ancak çoğu mülk sahibi, teknik ve hukuki detaylara hakim olmadığı için sadece metrekare ve daire katı pazarlığı yapar. Oysa asıl tehlike, sözleşmenin satır aralarında gizlidir.

## Müteahhit Sözleşmelerindeki 3 Temel Risk Alanı

### Hukuki Tuzaklar
Müteahhidin işi yarım bırakması durumunda sözleşme fesih şartları, gecikme tazminatlarının tahsil edilebilirliği ve arsa payı devir zamanlamaları incelenir.

### Teknik Eksiklikler
Kullanılacak beton sınıfından asansör markasına, dış cephe yalıtım standartlarından iç mimari detaylara kadar tüm teknik şartname mülk sahibi lehine revize edilir.

### Finansal Güvenceler
Bina tamamlama sigortası veya kesin teminat mektubu gibi zorunlulukların sözleşmede yer alıp almadığı kontrol edilir.

## Neden Sözleşme Check-Up Yaptırmalısınız?

- Çıkar çatışmasını önler: Biz müteahhit değiliz; sizin tarafınızdaki teknik ve hukuki kalkanınızız
- Bilgi asimetrisini giderir: Standart prosedür dediği maddelerin sizin aleyhinize olup olmadığını raporlarız
- Pazarlık gücü sağlar: Profesyonel denetim raporuyla talepleriniz istek değil teknik zorunluluk haline gelir

## Süreç Nasıl İşliyor?

- Sözleşme taslağını bize iletin
- Avukat, mühendis ve mimar ekibimiz metni eş zamanlı analiz eder
- 48 saat içinde risk raporunuzu alın
- İsterseniz müteahhit toplantılarına katılarak haklarınızı savunalım

Kentsel dönüşümde en pahalı sözleşme, imzalandıktan sonra hata olduğu anlaşılan sözleşmedir. Binanızın geleceğini şansa bırakmayın; müteahhidin sunduğu teklifi imzalamadan önce Arkentra uzmanlarına gönderin.`,
  },
  {
    slug: 'kat-malikleri-toplantisi-nasil-yapilir-2026',
    title: 'Kat Malikleri Toplantısı Nasıl Yapılır? 2026 Güncel Rehber ve Gündem Örneği',
    excerpt:
      '6306 sayılı Kanun kapsamında kat malikleri toplantısı nasıl yapılır? Çağrı, tebligat, salt çoğunluk, gündem maddeleri ve 2026 yönetmelik değişiklikleri.',
    summary:
      'Kat malikleri toplantısı için tüm maliklere en az 15 gün önceden tebligat gönderilmelidir. 6306 kapsamında birçok karar arsa payı salt çoğunluğu (%50+1) ile alınabilir; ancak riskli yapı süreci kesinleşmeden toplantı yapılması hukuki risk taşır.',
    date: '2026-07-06',
    dateLabel: '6 Temmuz 2026',
    readTime: '5 dk okuma',
    konu: 'Mevzuat',
    tur: 'Rehber',
    imageSrc: images.yazilar.toplanti.src,
    imageAlt: images.yazilar.toplanti.alt,
    content: `Kentsel dönüşüm sürecinin en kritik adımlarından biri kat malikleri toplantısıdır. Müteahhit seçimi, kat karşılığı inşaat sözleşmesi onayı ve yeniden yapım kararları bu toplantılarda alınır. 2026 yılında yürürlüğe giren yönetmelik değişiklikleriyle birlikte toplantı süreçleri daha sıkı denetim altına alınmıştır.

## Kat Malikleri Toplantısı Nedir?

6306 sayılı Afet Riski Altındaki Alanların Dönüştürülmesi Hakkında Kanun kapsamında, riskli yapı statüsündeki binalarda maliklerin bir araya gelerek yeniden yapım, müteahhit seçimi ve sözleşme onayı gibi kararları aldığı resmi toplantıdır. Bu toplantılar Ek-12 formatında tutanak tutulur ve noter onayı gerektirir.

## Toplantı Öncesi Hazırlık Adımları

### 1. Riskli Yapı Sürecinin Tamamlanması
Toplantı yapılmadan önce riskli yapı tespit raporunun kesinleşmiş olması gerekir. Kesinleşmeden alınan kararlar Yargıtay kararlarıyla iptal edilebilmektedir. Detaylı bilgi için [riskli yapı kesinleşmeden alınan kararlar](/yazilarimiz/riskli-yapi-kesinlesmeden-kentsel-donusum-kararlari) yazımızı okuyabilirsiniz.

### 2. Malik Listesinin Hazırlanması
Tapu müdürlüğünden güncel malik listesi alınmalı; vekâletname ile temsil edilen maliklerin belgeleri dosyaya eklenmelidir.

### 3. Gündem Maddelerinin Belirlenmesi
Gündemde şu maddeler yer almalıdır:

- Yeniden yapım kararı
- Müteahhit seçimi ve teklif değerlendirmesi
- Kat karşılığı inşaat sözleşmesi taslağının onayı
- Malik temsilcisi atanması (varsa)
- Teknik şartname ve mimari proje onayı

### 4. Tebligat ve Çağrı
Tüm maliklere toplantı tarihi, saati, yeri ve gündem maddeleri en az 15 gün önceden tebligatla bildirilmelidir. Adresinde bulunamayan malikler için muhtarlıkta 15 günlük ilan süreci işletilir.

## Toplantı Günü: Nasıl İlerler?

- Toplantı yeter sayısı: Arsa payının salt çoğunluğunun (%50+1) temsil edilmesi gerekir
- Başkan ve sekreter seçimi yapılır
- Gündem maddeleri tek tek oylanır
- Her karar için ayrı oy pusulası kullanılır
- Tutanak Ek-12 formatında düzenlenir ve katılanlar imzalar
- Tutanak noter huzurunda onaylatılır

## Salt Çoğunluk ile Alınabilecek Kararlar

6306 sayılı Kanun kapsamında aşağıdaki kararlar arsa payı salt çoğunluğu ile alınabilir:

- Yeniden yapım kararı
- Kat karşılığı inşaat sözleşmesi yapılması
- Müteahhit seçimi
- Malik temsilcisi atanması
- Teknik şartname onayı

## Sık Yapılan Hatalar

- Riskli yapı süreci kesinleşmeden toplantı yapılması
- Tebligat süresine uyulmaması
- Gündemde olmayan konuların oylanması
- Tutanak formatının hatalı doldurulması
- Azınlık maliklerin haklarının gözetilmemesi

## Malik Temsilcisi Atanmalı mı?

Çoğu malik toplantılara katılamayabilir veya süreci takip edemeyebilir. Bu durumda bağımsız bir malik temsilcisi atanması, hem hukuki hem teknik açıdan maliklerin çıkarını korur. Arkentra, müteahhit değil; yalnızca malikleri temsil eden danışmanlık firmasıdır.

## Sonuç

Kat malikleri toplantısı, kentsel dönüşümün hukuki temelini oluşturur. Hatalı bir toplantı, tüm sürecin iptaline ve yıllarca süren mahkeme davalarına yol açabilir. Toplantı öncesi profesyonel destek almak, maliklerin hak kaybı yaşamaması için kritik önem taşır.`,
  },
  {
    slug: 'malik-temsilcisi-kentsel-donusum-nedir',
    title: 'Malik Temsilcisi Kentsel Dönüşüm Nedir? Görevleri ve Neden Gereklidir?',
    excerpt:
      'Kentsel dönüşümde malik temsilcisi kimdir, ne iş yapar? Müteahhit ile farkı, görevleri, seçimi ve maliklerin haklarını koruma rehberi.',
    summary:
      'Malik temsilcisi, kentsel dönüşüm sürecinde kat maliklerini bağımsız şekilde temsil eden danışmanlık firmasıdır. Müteahhit değildir; hukuki, teknik ve finansal çıkarları yalnızca malikler adına savunur.',
    date: '2026-07-06',
    dateLabel: '6 Temmuz 2026',
    readTime: '4 dk okuma',
    konu: 'Malik Rehberi',
    tur: 'Rehber',
    imageSrc: images.yazilar.malikTemsilcisi.src,
    imageAlt: images.yazilar.malikTemsilcisi.alt,
    content: `"Malik temsilcisi" terimi kentsel dönüşüm sürecinde sıkça duyulur; ancak çoğu malik bu kavramın müteahhitlikten farkını tam olarak bilmez. Oysa doğru temsilci seçimi, milyonlarca liralık mülkünüzün güvenliği için belirleyicidir.

## Malik Temsilcisi Nedir?

Malik temsilcisi, 6306 sayılı Kanun kapsamında kentsel dönüşüm sürecini kat malikleri adına yöneten, hukuki ve teknik danışmanlık sunan bağımsız bir firmadır. Müteahhit değildir; inşaat yapmaz, arsa payı talep etmez. Tek çıkarı, maliklerin haklarını korumaktır.

## Müteahhit ile Malik Temsilcisi Arasındaki Fark

| | Müteahhit | Malik Temsilcisi |
|---|---|---|
| Amaç | İnşaat yapıp kar elde etmek | Maliklerin haklarını korumak |
| Taraf | Kendi çıkarı | Maliklerin çıkarı |
| Gelir modeli | Arsa payı / satış karı | Danışmanlık ücreti |
| Sözleşme | Kendi lehine hazırlar | Malik lehine denetler |

Bu fark, sözleşme müzakerelerinde ve inşaat denetiminde kritik önem taşır.

## Malik Temsilcisinin Görevleri

### Hukuki Danışmanlık
- Kat malikleri toplantısı organizasyonu ve tutanak hazırlığı
- Kat karşılığı inşaat sözleşmesi hazırlığı ve denetimi
- Noter, tapu ve idari başvuru süreçlerinin koordinasyonu
- İhtarname ve hukuki süreçlerin yönetimi

### Teknik Danışmanlık
- Riskli yapı tespit sürecinin yönetimi
- Teknik şartname hazırlığı ve denetimi
- İnşaat aşamalarında saha denetimi
- Malzeme kalitesi ve proje uygunluk kontrolü

### Finansal Danışmanlık
- Kira yardımı ve devlet destekleri başvuru rehberliği
- Şerefiye raporu organizasyonu
- Müteahhit finansal yeterlilik analizi
- Proje fizibilite değerlendirmesi

## Malik Temsilcisi Nasıl Seçilir?

Kat malikleri toplantısında arsa payı salt çoğunluğu (%50+1) ile malik temsilcisi atanabilir. Seçimde dikkat edilmesi gerekenler:

- Firmanın müteahhit veya inşaat şirketi olmaması
- Hukuk, mühendislik ve mimarlık uzmanlığının tek çatı altında bulunması
- Referans projeler ve deneyim
- Şeffaf fiyatlandırma ve yazılı hizmet sözleşmesi
- Bakanlık yetkili kuruluş statüsü (riskli yapı tespiti için)

## Ne Zaman Malik Temsilcisi Gerekir?

- Binanız riskli yapı ilan edildiğinde
- Müteahhit teklifleri değerlendirilirken
- Sözleşme imzalanmadan önce
- İnşaat sürecinde denetim gerektiğinde
- Malikler arasında anlaşmazlık olduğunda

## Arkentra Farkı

Arkentra Kentsel Dönüşüm, İstanbul merkezli bağımsız malik temsilcisi olarak İstanbul'un 39 ilçesinde hizmet vermektedir. Üçyıldız Kentsel Dönüşüm Mühendislik İnşaat Taahhüt Ltd. Şti'nin iştiraki olarak; hukuk, mühendislik, mimarlık ve finans uzmanlığını tek çatı altında sunuyoruz.

Müteahhit değiliz. Sizin tarafınızdayız.`,
  },
  {
    slug: 'kentsel-donusum-kaynak-rehberi-2026',
    title:
      'Kentsel Dönüşüm Kaynak Rehberi 2026: İstatistikler, Destek Tutarları ve Süre Tablosu',
    excerpt:
      'Türkiye ve İstanbul kentsel dönüşüm istatistikleri, 2026 kira yardımı tutarları, destek süreleri ve malik hakları : tek sayfada güncel kaynak.',
    summary:
      'Türkiye’de 6,7 milyondan fazla bağımsız bölüm riskli yapı kapsamındadır. 2026’da İstanbul’da konut malikleri aylık 8.000–10.000 TL kira yardımı, 16.000 TL taşınma desteği alabilir. Kira yardımı süresi 18 aydır.',
    date: '2026-07-06',
    dateLabel: '6 Temmuz 2026',
    readTime: '8 dk okuma',
    konu: 'Mevzuat',
    tur: 'Rehber',
    imageSrc: images.yazilar.kaynakRehberi.src,
    imageAlt: images.yazilar.kaynakRehberi.alt,
    content: `Bu sayfa, kentsel dönüşüm süreciyle ilgili güncel rakamları, destek tutarlarını ve süreleri tek bir kaynakta toplamak amacıyla hazırlanmıştır. Gazeteciler, araştırmacılar ve malikler için referans niteliğindedir.

> Kaynak: Çevre, Şehircilik ve İklim Değişikliği Bakanlığı, İstanbul Büyükşehir Belediyesi ve 6306 sayılı Kanun. Rakamlar yıllık olarak güncellenmektedir.

## Türkiye Geneli Kentsel Dönüşüm Rakamları

| Gösterge | Rakam | Kaynak |
|---|---|---|
| Riskli yapı kapsamındaki bağımsız bölüm sayısı | 6,7 milyon+ | Bakanlık, 2025 |
| Riskli yapı tespit edilen bina sayısı (kümülatif) | 1,5 milyon+ | Bakanlık, 2025 |
| Kentsel dönüşüm kapsamında tamamlanan bağımsız bölüm | 1,2 milyon+ | Bakanlık, 2025 |
| Ortalama kentsel dönüşüm süresi (başvuru–teslim) | 24–36 ay | Sektör ortalaması |

## 2026 İstanbul Destek Tutarları Tablosu

| Destek Türü | Konut Maliki | Kiracı | Sınırlı Ayni Hak Sahibi |
|---|---|---|---|
| Aylık kira yardımı (Bakanlık) | 8.000 TL | : | : |
| Aylık kira yardımı (İBB riskli yapı) | 10.000 TL* | : | : |
| Tek seferlik taşınma yardımı | 16.000 TL | 16.000 TL | 40.000 TL |
| Kira yardımı süresi | 18 ay | : | : |

*İBB desteği, Hızlı Tarama Testi sonucunda en riskli grupta tespit edilen binalar için geçerlidir.

Detaylı başvuru rehberi: [2026 Kira Yardımı Rehberi](/yazilarimiz/2026-kentsel-donusum-kira-yardimi-istanbul-guncel-rakamlar)

## Kentsel Dönüşüm Süre Tablosu

| Aşama | Ortalama Süre | Not |
|---|---|---|
| Riskli yapı tespit başvurusu | 2–4 hafta | Lisanslı kuruluş |
| Tespit raporu ve tebliğ | 4–8 hafta | 15 günlük itiraz süresi |
| Kat malikleri toplantısı | 2–4 hafta | Tebligat + toplantı |
| Müteahhit seçimi ve sözleşme | 4–8 hafta | Noter onayı |
| Yıkım ve ruhsat | 2–3 ay | Belediye süreci |
| İnşaat | 18–30 ay | Proje büyüklüğüne göre |
| İskân ve tapu devri | 1–2 ay | Son aşama |

## Hukuki Süreler (Hak Düşürücü)

| İşlem | Süre | Sonuç |
|---|---|---|
| Riskli yapı tespitine idari itiraz | 15 gün | Hak düşürücü |
| İdari itiraz reddine karşı dava | 30 gün | İdare mahkemesi |
| Tahliye süresi (kesinleşme sonrası) | Min. 60 gün | İdare kararı |
| Kira yardımı başvurusu | Yıkım sonrası | 18 ay ödeme |

## Malik Hakları Özet Tablosu

- **Salt çoğunluk (%50+1):** Yeniden yapım, müteahhit seçimi, sözleşme onayı (6306 kesinleştikten sonra)
- **Oybirliği:** Kat mülkiyeti devam ederken yeniden yapım kararı (634 sayılı KMK)
- **Kira yardımı:** Yalnızca tapu sahipleri (malikler)
- **Taşınma yardımı:** Malikler, kiracılar ve sınırlı ayni hak sahipleri
- **Vergi muafiyeti:** KDV, damga vergisi, tapu harcı istisnaları (şartlara bağlı)

## İndirilebilir Kaynaklar

Aşağıdaki rehberlerimiz, kentsel dönüşüm sürecinin farklı aşamalarında referans olarak kullanılabilir:

- [Kat Malikleri Toplantısı Nasıl Yapılır?](/yazilarimiz/kat-malikleri-toplantisi-nasil-yapilir-2026)
- [Riskli Yapı Tespitine İtiraz Rehberi](/yazilarimiz/riskli-yapi-tespitine-nasil-itiraz-edilir)
- [Kat Karşılığı İnşaat Sözleşmesi 10 Kritik Madde](/yazilarimiz/2026-kat-karsiligi-insaat-sozlesmesi-rehberi)
- [Malik Temsilcisi Nedir?](/yazilarimiz/malik-temsilcisi-kentsel-donusum-nedir)
- [Müteahhit Sözleşmesi Check-Up](/yazilarimiz/muteahhit-sozlesme-check-up)

## Bu Sayfayı Nasıl Alıntılayabilirsiniz?

Bu sayfayı kaynak göstermek için:

> Arkentra Kentsel Dönüşüm, "Kentsel Dönüşüm Kaynak Rehberi 2026", arkentrakentseldonusum.com/yazilarimiz/kentsel-donusum-kaynak-rehberi-2026, Erişim tarihi: [tarih].

Sorularınız için: info@arkentrakentseldonusum.com

*Son güncelleme: Temmuz 2026. Rakamlar Bakanlık ve İBB duyurularına göre değişebilir.*`,
  },
];

export const FEATURED_YAZI_SLUG = '2026-kentsel-donusum-kira-yardimi-istanbul-guncel-rakamlar';

export const HIGH_PRIORITY_YAZI_SLUGS = [
  FEATURED_YAZI_SLUG,
  'kentsel-donusum-kaynak-rehberi-2026',
  'kat-malikleri-toplantisi-nasil-yapilir-2026',
  'malik-temsilcisi-kentsel-donusum-nedir',
  'kentsel-donusum-danismanligi-fiyat-ne-kadar-2026',
  'riskli-yapi-tespitine-nasil-itiraz-edilir',
  '2026-kat-karsiligi-insaat-sozlesmesi-rehberi',
  'riskli-yapi-kesinlesmeden-kentsel-donusum-kararlari',
  'muteahhit-sozlesme-check-up',
] as const;

export const yaziKeywordsBySlug: Record<string, string[]> = {
  [FEATURED_YAZI_SLUG]: [
    'kentsel dönüşüm kira yardımı 2026',
    'istanbul kentsel dönüşüm kira desteği',
    '2026 riskli yapı kira yardımı',
    'kiracı taşınma yardımı',
    'istanbul kentsel dönüşüm',
    '6306 sayılı kanun kira yardımı',
  ],
  'kentsel-donusum-danismanligi-fiyat-ne-kadar-2026': [
    'kentsel dönüşüm danışmanlık ücretleri 2026',
    'kentsel dönüşüm danışmanlığı ne kadar',
    'kentsel dönüşüm danışmanlık fiyatları',
    'daire başı fiyat 2026',
    'istanbul kentsel dönüşüm danışmanlık firmaları',
  ],
  'riskli-yapi-tespitine-nasil-itiraz-edilir': [
    'riskli yapı tespitine itiraz',
    'riskli yapı itiraz süreci',
    '6306 riskli yapı itiraz',
  ],
  '2026-kat-karsiligi-insaat-sozlesmesi-rehberi': [
    'kat karşılığı inşaat sözleşmesi',
    'kat karşılığı sözleşme danışmanlık',
    'kentsel dönüşüm sözleşme maddeleri',
  ],
  'riskli-yapi-kesinlesmeden-kentsel-donusum-kararlari': [
    'kentsel dönüşüm müteahhit mağdurları',
    'riskli yapı kesinleşmeden karar',
    '6306 malik temsilciliği',
  ],
  'muteahhit-sozlesme-check-up': [
    'müteahhit sözleşmesi kontrol',
    'kat karşılığı sözleşme denetimi',
    'kentsel dönüşüm sözleşme check up',
  ],
  'kat-malikleri-toplantisi-nasil-yapilir-2026': [
    'kat malikleri toplantısı nasıl yapılır',
    'kentsel dönüşüm toplantı gündemi',
    '6306 kat malikleri toplantısı 2026',
    'ek-12 toplantı tutanağı',
    'salt çoğunluk kentsel dönüşüm',
  ],
  'malik-temsilcisi-kentsel-donusum-nedir': [
    'malik temsilcisi kentsel dönüşüm nedir',
    'kentsel dönüşüm malik temsilcisi',
    'bağımsız malik temsilcisi istanbul',
    'malik temsilcisi ile müteahhit farkı',
  ],
  'kentsel-donusum-kaynak-rehberi-2026': [
    'kentsel dönüşüm istatistikleri 2026',
    'istanbul kentsel dönüşüm rakamları',
    '6306 sayılı kanun destek tutarları',
    'kentsel dönüşüm kira yardımı tablosu',
    'kentsel dönüşüm süre tablosu',
  ],
};

export const serviceYaziSlugs: Record<string, string[]> = {
  'muhendislik-ve-teknik-danismanlik': [
    'riskli-yapi-tespitine-nasil-itiraz-edilir',
    'riskli-yapi-kesinlesmeden-kentsel-donusum-kararlari',
  ],
  'mimarlik-ve-proje-gelistirme': ['2026-kat-karsiligi-insaat-sozlesmesi-rehberi'],
  'hukuki-danismanlik': [
    '2026-kat-karsiligi-insaat-sozlesmesi-rehberi',
    'muteahhit-sozlesme-check-up',
    'kat-malikleri-toplantisi-nasil-yapilir-2026',
    'malik-temsilcisi-kentsel-donusum-nedir',
    'riskli-yapi-kesinlesmeden-kentsel-donusum-kararlari',
  ],
  'gayrimenkul-ve-finans-danismanligi': [
    FEATURED_YAZI_SLUG,
    'kentsel-donusum-kaynak-rehberi-2026',
    'kentsel-donusum-danismanligi-fiyat-ne-kadar-2026',
  ],
  'surec-yonetimi-ve-koordinasyon': [
    'riskli-yapi-kesinlesmeden-kentsel-donusum-kararlari',
    'kat-malikleri-toplantisi-nasil-yapilir-2026',
    FEATURED_YAZI_SLUG,
  ],
  'yikim-insaat-ve-uygulama-yonetimi': [
    'muteahhit-sozlesme-check-up',
    '2026-kat-karsiligi-insaat-sozlesmesi-rehberi',
  ],
};

export function getYaziBySlug(slug: string): Yazi | undefined {
  return yazilar.find((yazi) => yazi.slug === slug);
}

export function getFeaturedYazi(): Yazi | undefined {
  return getYaziBySlug(FEATURED_YAZI_SLUG);
}

export function getSpotlightYazilar(excludeSlug?: string, limit = 4): Yazi[] {
  const priority = HIGH_PRIORITY_YAZI_SLUGS.map((slug) => getYaziBySlug(slug)).filter(
    (yazi): yazi is Yazi => yazi !== undefined && yazi.slug !== excludeSlug,
  );

  if (priority.length >= limit) {
    return priority.slice(0, limit);
  }

  const rest = yazilar.filter(
    (yazi) =>
      yazi.slug !== excludeSlug &&
      !HIGH_PRIORITY_YAZI_SLUGS.includes(yazi.slug as (typeof HIGH_PRIORITY_YAZI_SLUGS)[number]),
  );

  return [...priority, ...rest].slice(0, limit);
}

export function getRelatedYazilar(currentSlug: string, limit = 3): Yazi[] {
  const current = getYaziBySlug(currentSlug);
  if (!current) return getSpotlightYazilar(currentSlug, limit);

  const others = yazilar.filter((yazi) => yazi.slug !== currentSlug);
  const sameKonu = others.filter((yazi) => yazi.konu === current.konu);
  const otherPriority = getSpotlightYazilar(currentSlug, limit).filter(
    (yazi) => yazi.konu !== current.konu,
  );

  const combined = [...sameKonu, ...otherPriority];
  const seen = new Set<string>();

  return combined
    .filter((yazi) => {
      if (seen.has(yazi.slug)) return false;
      seen.add(yazi.slug);
      return true;
    })
    .slice(0, limit);
}

export function getYazilarForService(serviceSlugValue: string): Yazi[] {
  const slugs = serviceYaziSlugs[serviceSlugValue] ?? [];
  return slugs.map((slug) => getYaziBySlug(slug)).filter((yazi): yazi is Yazi => Boolean(yazi));
}

export function getYaziHref(slug: string): string {
  return `/yazilarimiz/${slug}`;
}
