import { contactAddressFull, contactEmail } from './contact';

export interface KvkkTable {
  caption?: string;
  headers: [string, string, string];
  rows: [string, string, string][];
}

export interface KvkkSection {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  subsections?: {
    title?: string;
    paragraphs?: string[];
    bullets?: string[];
  }[];
  tables?: KvkkTable[];
}

export const kvkkTitle =
  'Kişisel Verilerin İşlenmesi ve Çerez Politikasına İlişkin Aydınlatma Metni';

export const kvkkIntro =
  'ARKENTRA KENTSEL DÖNÜŞÜM VE DANIŞMANLIK (bundan böyle "Danışman" olarak anılacaktır) tarafından tutulan Kişisel Verilerin İşlenmesine İlişkin Bu Gizlilik Bildirimi, bu web sitesinde kullanılan çerezlere yönelik olarak özel olarak hazırlanmıştır.';

export const kvkkSections: KvkkSection[] = [
  {
    id: 'neden',
    title: '1. BU BİLDİRİM NEDEN GÖNDERİLİYOR?',
    paragraphs: [
      '6698 sayılı Kişisel Verilerin Korunması Kanunu\'nun (KVKK) kapsamında danışman tüm veri sahiplerine kendileri hakkında toplanan verileri bildirmekle yükümlüdür. Bu form ayrıca belirli verileri toplamak için de kullanılabilir.',
    ],
  },
  {
    id: 'konular',
    title: '2. BU BİLDİRİM HANGİ KONULARI İÇERİR?',
    bullets: [
      'Çerezler ve Web Sitesinde Kullanılan Çerezler Hakkında Genel Bilgiler',
      'Hangi veriler toplanıyor?',
      'Veriler hangi amaçla kullanılır?',
      'Veriler kimlerle paylaşılıyor?',
      'Verilerinizi tutmanın yasal dayanağı',
      'Verilerinizi ne kadar süreyle saklayacağız?',
      '6698 sayılı Kişisel Verilerin Korunması Kanunu\'nun (KVKK) kapsamındaki bireysel haklarınız',
    ],
  },
  {
    id: 'cerezler',
    title: '3. WEB SİTESİNDE KULLANILAN ÇEREZLER VE ÇEREZLERİN KULLANILMASI HAKKINDA GENEL BİLGİLER',
    subsections: [
      {
        title: 'Çerez Nedir ve Neden Kullanılır?',
        paragraphs: [
          'Çerezler, bilgisayarınızda veya mobil cihazınızda depolanan küçük metin dosyalarıdır. Web sitelerinin çalışmasını veya daha iyi, daha verimli bir şekilde çalışmasını sağlamak için yaygın olarak kullanılırlar. Bunu, web sitelerinin bu dosyaları okuyup yazabilmesi sayesinde yapabilirler; bu da sizi tanımalarını ve bir web sitesini kullanımınızı daha rahat hale getirecek önemli bilgileri hatırlamalarını sağlar. Çerezler hakkında daha ayrıntılı bilgi için www.allaboutcookies.org adresini ziyaret edebilirsiniz.',
          'Web sitemizde çerez kullanılmasının başlıca amaçları aşağıda sıralanmıştır:',
        ],
        bullets: [
          'Sitenin işlevselliğini ve performansını artırarak size sunulan hizmetleri iyileştirmek,',
          'Site\'yi iyileştirmek ve Site\'de yeni özellikler sunmak ve sunulan özellikleri tercihlerinize göre kişiselleştirmek;',
          'Sitenin, sizin ve Şirketimizin hukuki ve ticari güvenliğinin sağlanması.',
        ],
      },
      {
        title: 'Kalıcılık Sürelerine Göre Çerez Türleri',
        paragraphs: ['Sitede aşağıdaki çerez türleri kullanılmaktadır:'],
      },
      {
        title: 'Oturum Çerezleri',
        paragraphs: [
          'Bu çerezler, daha önce yaptığınız seçimleri ve tercihleri veya daha önce verdiğiniz bilgileri hatırlamak için kullanılır. Oturum çerezleri geçicidir ve web tarayıcınız kapandığında makinenizden silinir. İnternet kullanımınızı izlememize yardımcı olmak için oturum çerezleri kullanırız.',
        ],
      },
      {
        title: 'Kalıcı Çerezler',
        paragraphs: [
          'Kalıcı çerez, bilgisayarınızda bir dosya olarak depolanan ve web tarayıcınızı kapattığınızda orada kalan çerezdir. Çerez, onu oluşturan web sitesi tarafından, o web sitesini tekrar ziyaret ettiğinizde okunabilir. Siteleri kullanma deneyiminizi iyileştirmek için kalıcı çerezler kullanıyoruz. Bu, Siteleri kullandığınızda ilk kez görünen çerez mesajını kaldırmak için Çerez Politikamızı kabul ettiğinizi kaydetmeyi içerir.',
        ],
      },
      {
        title: 'Kullanım Amacına Göre Çerez Türleri',
        paragraphs: ['Sitede aşağıdaki çerez türleri kullanılmaktadır:'],
      },
      {
        title: 'Kesinlikle Gerekli Çerezler',
      },
      {
        title: 'Teknik Çerezler',
        paragraphs: [
          'Teknik çerezler sitenin çalışmasını sağlar; sitenin çalışmayan sayfaları ve alanları tespit edilir.',
        ],
      },
      {
        title: 'Kimlik Doğrulama Çerezleri',
        paragraphs: [
          'Ziyaretçilerin şifrelerini kullanarak Site\'ye giriş yapmaları durumunda, söz konusu çerezler ile ziyaretçinin Site\'de ziyaret ettiği her bir sayfada Site kullanıcısı olduğu belirlenmekte ve kullanıcının her sayfada şifresini yeniden girmesi önlenmektedir.',
        ],
      },
      {
        title: 'Flash Çerezler',
        paragraphs: [
          'İnternet sitesinde yer alan görüntü veya ses içeriklerinin aktif hale getirilmesini sağlamak amacıyla kullanılan çerez türleridir.',
        ],
      },
      {
        title: 'Özelleştirme Çerezleri',
        paragraphs: [
          'Farklı web sitelerinin farklı sayfalarını ziyaret ederken kullanıcıların tercihlerini hatırlamak için kullanılan çerezlerdir. Örneğin, seçtiğiniz dil tercihini hatırlamak. Bunlar, web sitelerinde veya uygulamalarda kişiselleştirme ve tercihleri hatırlama amacıyla kullanılan çerezlerdir. Veri sahibinin bilgi toplumu hizmetini açıkça talep ettiği açık olmadığı durumlarda açık onay gerekecektir.',
        ],
      },
      {
        title: 'Analitik Çerezler',
        paragraphs: [
          'Analitik çerezler ile Site\'yi ziyaret edenlerin sayıları, Site\'de görüntülenen sayfaların tespiti, Site ziyaret saatleri, Site sayfaları kaydırma hareketleri gibi analitik sonuçların üretimini sağlayan çerezlerdir.',
        ],
      },
      {
        title: 'Reklam/Pazarlama Çerezleri',
        paragraphs: [
          'Reklam ve pazarlama çerezleri, kullanıcıların çevrimiçi faaliyetlerini izleyerek kişisel ilgi alanlarını belirlemeyi ve bu ilgi alanlarına dayalı olarak internette onlara reklamlar göstermeyi amaçlar.',
        ],
      },
      {
        title: 'Açık Onay Gerektiren Çerezler Hakkında Ek Bilgiler',
      },
      {
        title: 'Sosyal Eklenti İzleme Çerezleri',
        paragraphs: [
          'Birçok sosyal ağ, web sitesi sahiplerinin üyeler tarafından açıkça talep edildiği düşünülebilecek belirli hizmetleri sağlamak için web sitelerine entegre edebilecekleri sosyal eklenti modülleri sağlar. Ancak bu modüller davranışsal reklamcılık, analiz veya pazar araştırması gibi ek amaçlar için üçüncü taraf çerezleri aracılığıyla hem üyeleri hem de üye olmayanları izlemek için de kullanılabilir. Bu nedenle açık onay gereklidir.',
        ],
      },
      {
        title: 'Çevrimiçi Davranışsal Reklamcılık Çerezleri',
        paragraphs: [
          'Davranışsal reklamcılık için kullanılan çerezler açık rıza gerektirir. Bu durumda açık rıza gereksinimi; frekans sınırlaması, finansal kayıt tutma, reklam bağlantısı, tıklama sahtekarlığı tespiti, araştırma ve pazar analizi, ürün geliştirme ve hata ayıklama gibi amaçlar için kullanılan reklamla ilgili çerezleri içerir.',
        ],
      },
      {
        title: 'Çerezler Hakkında Taraflarına Göre Ek Bilgiler',
      },
      {
        title: 'Birinci Taraf Çerezleri',
        paragraphs: [
          'Bu çerezler, kullanıcının doğrudan etkileşimde bulunduğu web sitesi veya etki alanı tarafından ayarlanır. Genellikle kullanıcı tercihlerini hatırlamak ve kişiselleştirilmiş bir tarama deneyimi sağlamak için kullanılırlar.',
        ],
      },
      {
        title: 'Üçüncü Taraf Çerezleri',
        paragraphs: [
          'Bu çerezler, kullanıcının şu anda ziyaret ettiği alan dışındaki alan adları tarafından ayarlanır. Genellikle reklam, analiz ve diğer amaçlar için birden fazla web sitesinde kullanıcı davranışını izlemek için kullanılırlar.',
        ],
      },
      {
        title: 'Açık Onay Gerektirmeyen Çerezler Hakkında Bilgi',
        paragraphs: [
          'Kullanıcı girişi çerezleri, kimlik doğrulama çerezleri, kullanıcı merkezli güvenlik çerezleri, multimedya oynatıcısı oturum çerezleri, yük dengeleme oturum çerezleri, kullanıcı arayüzü kişiselleştirme çerezleri, sosyal eklenti içerik paylaşım çerezleri, onay yönetim platformu tarafından kullanılan çerezler, birinci taraf analitik çerezler ve web sitesi güvenliği için kullanılan çerezler; talep edilen hizmetlerin sağlanması ve güvenli bir tarama deneyimi sunulması amacıyla kullanılabilir. Bu çerez türlerinin kullanımı ilgili mevzuat çerçevesinde değerlendirilir ve kullanıcılara çerez bildirimi aracılığıyla açıklanır.',
        ],
      },
    ],
  },
  {
    id: 'veriler',
    title: '4. HANGİ VERİLERİ İŞLİYORUZ?',
    paragraphs: [
      'Web sitemizde kullanılan zorunlu çerezler dışındaki çerezler için kullanıcılardan açık rıza alınır ve istedikleri zaman rızalarını değiştirme olanağı sağlanır. Kullanıcılar çerez yönetim paneli aracılığıyla web sitemizde kullanılan çerez türlerini görüntüleyebilir ve zorunlu çerezler dışındaki tüm çerezler için tercihlerini "etkin" veya "devre dışı" olarak belirleyebilirler.',
    ],
    subsections: [
      {
        title: 'Web Sitesini ziyaret ettiğinizde, Temel Çerezler aracılığıyla',
        paragraphs: [
          'Kişisel Veri Kategorisi: İşlem Güvenliği',
          'Bu tür çerezlerin çalışması için işlenen kişisel veriler; örneğin tarayıcı bilgileri, IP adresi, erişim günlükleridir.',
        ],
      },
      {
        title: 'Açık rızanızı verdiğinizde, Performans Çerezleri aracılığıyla',
        paragraphs: [
          'Kişisel Veri Kategorisi: İşlem Güvenliği',
          'Bu tür çerezlerin çalışması için işlenen kişisel veriler; tarayıcı bilgileri, IP adresi, erişim kayıtları, en çok ziyaret edilen sayfalar, gezinme sırasında karşılaşılan sorunlar, ziyaret edilen sayfalar, tıklanan bağlantılar, arama terimleri ve kullanılan diğer metinlerdir.',
        ],
      },
      {
        title: 'Açık rızanızı verdiğinizde, Reklam ve Hedefleme yoluyla',
        paragraphs: [
          'Kişisel Veri Kategorisi: İşlem Güvenliği',
          'Bu tür çerezlerin çalışması için işlenen kişisel verileriniz; tarayıcı bilgileriniz, IP adresiniz, erişim günlükleriniz, ilgi alanlarınız ve profiliniz gibi verilerdir. (Bunlar reklam ortaklarımız tarafından yerleştirilen üçüncü taraf çerezlerdir.)',
        ],
      },
      {
        title: 'Açık rızanızı verdiğinizde, İşlevsel Çerezler aracılığıyla',
        paragraphs: [
          'Kişisel Veri Kategorisi: İşlem Güvenliği',
          'Bu tür çerezlerin çalışması için işlenen kişisel verileriniz; tarayıcı bilgileriniz, IP adresiniz, erişim günlükleri, dil, bölge, tema vb. tercih seçenekleriniz ve sitedeki form alanlarındaki metin kutularına daha önce girmiş olduğunuz bilgilerdir.',
        ],
      },
    ],
  },
  {
    id: 'paylasim',
    title: '5. KİŞİSEL VERİLERİNİZİ KİMLERLE VE HANGİ AMAÇLA PAYLAŞIYORUZ?',
    paragraphs: [
      '6698 sayılı Kişisel Verilerin Korunması Kanunu\'nun (KVKK) hükümlerine dayanarak, verilerinizi hukuka ve dürüstlük kurallarına uygun olarak, doğru ve güncel olması, belirli, açık ve meşru amaçlarla sınırlı olması, olası hukuki uyuşmazlıklar, soruşturmalar, yargısal veya idari denetimler için, belirtilen amaçları gerçekleştirebilmek için veya yasal bir zorunluluk gereği bu verileri talep etmeye yetkili olan kamu kurum ve kuruluşlarıyla paylaşmaktayız. Ayrıca resmi veya yasal diğer bilgi ve belge taleplerine yanıt vermek amacıyla da paylaşmaktayız.',
      'Verileriniz; bilgi talep eden kamu kurum ve kuruluşları, mahkemeler, savcılıklar, icra müdürlükleri ve diğer yargı makamları ile hukuk müşavirleri ile paylaşılmaktadır.',
    ],
  },
  {
    id: 'yontem',
    title: '6. VERİLERİNİZİN TOPLANMA VE İŞLENME YÖNTEMİ NEDİR?',
    paragraphs: [
      'Danışman, işbu web sitesine giriş yaptığınızda kişisel verilerinizi otomatik olarak çerezler (cookies) yoluyla toplamakta; olası bir uyuşmazlık halinde ilgili makamlara aktarılmak üzere verilerinizi işleyebilmekte ve veri tabanı oluşturmak, barındırmak, sunucuda bulundurmak, liste yapmak, belge doldurmak, dilekçe yazmak, form doldurmak suretiyle, işin niteliğine ve talep edilen/işlenmesi istenen kişisel verinin niteliğine göre otomatik veya otomatik olmayan yollarla işleyebilmektedir.',
    ],
  },
  {
    id: 'hukuki-dayanak',
    title: '7. VERİLERİN İŞLENME AMACI VE BU VERİLERİN KULLANILMASININ HUKUKİ DAYANAĞI NEDİR?',
    tables: [
      {
        caption: 'a. Website\'yi ziyaret ettiğinizde, Temel Çerezler aracılığıyla',
        headers: ['Kişisel Veri Kategorisi', 'Verilerin İşlenme Amaçları', 'Yasal Dayanak/Yasal Temel'],
        rows: [
          [
            'İşlem Güvenliği',
            'Talep edilen bilgi toplumu hizmetinin sağlanması (oturum açma, form doldurma, sayfa gezintisi sırasında oturumunuzu sürdürme, multimedya içeriklerinin görüntülenmesi gibi) hizmetin ifası için gereklidir. Ayrıca hukuki hususların takibi, yürürlükteki mevzuata uyum, bilgi güvenliği süreçlerinin sağlanması ve erişim haklarının yönetilmesi için de gereklidir.',
            'Mevzuatta açıkça öngörülmüş olması; bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması kaydıyla kişisel verilerin işlenmesinin gerekli olması; ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla meşru menfaatler için veri işlenmesinin zorunlu olması.',
          ],
        ],
      },
      {
        caption: 'b. Açık rızanızı verdiğinizde, Performans Çerezleri aracılığıyla',
        headers: ['Kişisel Veri Kategorisi', 'Verilerin İşlenme Amaçları', 'Yasal Dayanak/Yasal Temel'],
        rows: [
          [
            'İşlem Güvenliği',
            'Web sitemizi ziyaret edenlerin sayısı, görüntülenen sayfaların tespiti, site ziyaret süreleri ve kaydırma hareketleri gibi analitik sonuçların üretilmesi; ziyaretçi trafiğinin ölçülmesi ve sitenin performansının iyileştirilmesi amacıyla veri toplanır.',
            'İlgili kişinin açık rızası.',
          ],
        ],
      },
      {
        caption: 'c. Reklam ve Hedefleme yoluyla açık rızanızı verdiğinizde',
        headers: ['Kişisel Veri Kategorisi', 'Verilerin İşlenme Amaçları', 'Yasal Dayanak/Yasal Temel'],
        rows: [
          [
            'İşlem Güvenliği',
            'Reklam ortaklarımız tarafından yerleştirilen üçüncü taraf çerezler aracılığıyla site kullanımınız, ilgi alanlarınız ve davranışlarınız analiz edilerek hedefleme ve kişiselleştirilmiş reklam çalışmaları yürütülür.',
            'İlgili kişinin açık rızası.',
          ],
        ],
      },
      {
        caption: 'd. Açık rızanızı verdiğinizde, İşlevsel Çerezler aracılığıyla',
        headers: ['Kişisel Veri Kategorisi', 'Verilerin İşlenme Amaçları', 'Yasal Dayanak/Yasal Temel'],
        rows: [
          [
            'İşlem Güvenliği',
            'Web sitemizi daha işlevsel ve kişiselleştirilmiş hale getirmek, tercihlerinizi hatırlamak ve otomatik form doldurmayı etkinleştirmek amacıyla kullanılır.',
            'İlgili kişinin açık rızası.',
          ],
        ],
      },
    ],
  },
  {
    id: 'haklar',
    title: '8. 6698 SAYILI KİŞİSEL VERİLERİN KORUNMASI KANUNU\'NA (KVKK) DAYALI HAKLARINIZ',
    bullets: [
      'Doğruluk için verilerde düzeltmeyi talep etme.',
      'Devam eden işlenmeler için zorlayıcı bir sebep bulunmadığı takdirde kişisel verilerin silinmesini veya yok edilmesini talep etme.',
      'Zarar veya sıkıntıya neden olma ihtimali bulunan veya zarar veya sıkıntıya neden olan kişisel verilerin işlenmesine itiraz etme.',
      'Kişisel verilerinizi farklı hizmetlerde kendi amaçlarınız doğrultusunda elde etmek ve yeniden kullanmak.',
      'Otomatik yollarla karar alınmasına itiraz etme.',
      'Belirli durumlarda yanlış kişisel verilerin düzeltilmesi, bloke edilmesi, silinmesi veya yok edilmesini talep etme.',
      'Veri koruma düzenlemelerinin ihlali nedeniyle meydana gelen zararların tazminini talep etme.',
    ],
    subsections: [
      {
        title: 'Tarayıcı Ayarlarından Çerez Ayarları',
        paragraphs: [
          'Web sitemizi ilk ziyaretiniz sırasında açılan pop-up\'ta "Çerez Ayarlarını Özelleştir" sekmesine tıklayarak çerez tercihlerinizi özelleştirebilirsiniz. Çerez yönetim panelindeki düğmeleri istediğiniz konuma ayarlayarak ve "Ayarları Kaydet" düğmesine tıklayarak tercihlerinizi istediğiniz zaman değiştirebilirsiniz.',
          'Ek olarak çerezleri tarayıcı ayarlarınız aracılığıyla kısmen kontrol edebilirsiniz:',
        ],
        bullets: [
          'Google Chrome: https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&hl=tr',
          'Mozilla Firefox: https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop',
          'Microsoft Internet Explorer: https://support.microsoft.com/en-gb/windows/delete-and-manage-cookies',
          'Safari: https://help.apple.com/safari/mac/9.0/#/sfri40732',
          'Opera: https://help.opera.com/en/latest/web-preferences/',
        ],
      },
    ],
  },
  {
    id: 'onlemler',
    title: '9. KİŞİSEL VERİLERİNİZİ KORUMA ÖNLEMLERİ',
    paragraphs: [
      'Kişisel verilerin korunması şirketimiz için önemli bir konudur. Şirketimiz, kişisel verilere yetkisiz erişime veya bu bilgilerin kaybına, kötüye kullanılmasına, ifşa edilmesine, değiştirilmesine veya imha edilmesine karşı korumak için gerekli teknik ve idari önlemleri alır.',
      'Şirketimizin gerekli bilgi güvenliği önlemlerini almasına karşın, web sitesine ve sisteme yapılan saldırılar sonucunda kişisel verilerin zarar görmesi veya üçüncü kişilerin eline geçmesi durumunda bu durum derhal sizlere ve Kişisel Verileri Koruma Kurulu\'na bildirilir.',
    ],
  },
  {
    id: 'dogruluk',
    title: '10. KİŞİSEL VERİLERİNİZİN DOĞRU VE GÜNCEL SAKLANMASI',
    paragraphs: [
      'Kişisel verilerini bizimle paylaşanlar, bu bilgilerin doğru olduğunu ve güncel tutulduğunu; 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında kişisel verileri üzerinde sahip oldukları haklar açısından önemli olduğunu kabul ve beyan ederler.',
      `Kişisel verilerinizde yaptığınız değişiklik ve/veya güncellemelere ilişkin bildirimleri ${contactAddressFull} adresimize veya ${contactEmail} e-posta adresi üzerinden tarafımıza iletebilirsiniz.`,
    ],
  },
  {
    id: 'imha',
    title: '11. KİŞİSEL VERİLERİNİZİN SİLİNMESİ, İMHA EDİLMESİ VEYA ANONİMLEŞTİRİLMESİ',
    paragraphs: [
      'Bu bildirimde belirtilen amaçlarla işlenen kişisel verileriniz; işlenmesini gerektiren amaç ortadan kalktığında ve varsa kanunlarda belirtilen süreler dolduğunda Şirketimizin Kişisel Verileri Saklama ve İmha Politikası\'na uygun olarak kendiliğinden veya talebiniz üzerine silinecek, yok edilecek veya anonim hale getirilerek kullanılmaya devam edilecektir.',
    ],
  },
  {
    id: 'toplayici',
    title: '12. TOPLAYICININ KİMLİĞİ',
    paragraphs: [
      'ARKENTRA KENTSEL DÖNÜŞÜM VE DANIŞMANLIK',
      `Adres: ${contactAddressFull}`,
      `E-posta: ${contactEmail}`,
    ],
  },
];
