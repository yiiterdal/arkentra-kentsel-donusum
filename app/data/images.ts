import {
  REMOTE_CARD_WIDTH,
  REMOTE_EDITORIAL_WIDTH,
  REMOTE_FULL_WIDTH,
  unsplashSrc,
} from '../lib/image-utils';

const pexels = (id: number, width = REMOTE_FULL_WIDTH) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}&fit=crop`;

export const images = {
  hero: {
    src: '/images/skyline.png',
    alt: 'Modern şehir silüeti ve kentsel dönüşüm',
  },
  residence: {
    src: '/images/residence.png',
    alt: 'Yenilenmiş konut ve yeşil yaşam alanı',
  },
  urbanMahalle: {
    src: pexels(16753049, REMOTE_EDITORIAL_WIDTH),
    alt: 'Yeşilliklerle çevrili kentsel yaşam alanı',
  },
  sehirPlani: {
    src: pexels(6943663, REMOTE_EDITORIAL_WIDTH),
    alt: 'Kentsel dönüşüm ve şehir planlaması',
  },
  kentMerkezi: {
    src: '/images/service-green-tower.png',
    alt: 'Dikey bahçeli sürdürülebilir mimari ve yeşil bina',
  },
  greenPark: {
    src: unsplashSrc('photo-1441974231531-c6227db76b6e', REMOTE_FULL_WIDTH),
    alt: 'Yeşil park ve yaşanabilir kent alanı',
  },
  greenUrban: {
    src: unsplashSrc('photo-1449824913935-59a10b8d2000', REMOTE_FULL_WIDTH),
    alt: 'Yeşilliklerle çevrili modern şehir',
  },
  uniqueApproach: {
    src: '/images/unique-nature.png',
    alt: 'Doğada özgün yeşil bitki — her projenin eşsizliği',
  },
  aboutHero: {
    src: unsplashSrc('photo-1519501025264-65ba15a82390', REMOTE_FULL_WIDTH),
    alt: 'Yeşil alanlarla çevrili modern kent manzarası',
  },
  greenNeighborhood: {
    src: '/images/service-palace-garden.png',
    alt: 'Yeşil bahçe ve tarihi yapı çevresinde kentsel yaşam',
  },
  sustainable: {
    src: unsplashSrc('photo-1600585154340-be6161a56a0c', REMOTE_EDITORIAL_WIDTH),
    alt: 'Sürdürülebilir mimari ve yeşil bina',
  },
  urbanPlanning: {
    src: unsplashSrc('photo-1469474968028-56623f02e42e', REMOTE_FULL_WIDTH),
    alt: 'Doğa ve kent planlaması',
  },
  teamHero: {
    src: unsplashSrc('photo-1522071820081-009f0129c71c', REMOTE_FULL_WIDTH),
    alt: 'Uzman ekip ve profesyonel iş birliği',
  },
  construction: {
    src: unsplashSrc('photo-1504307651254-35680f356dfd', REMOTE_EDITORIAL_WIDTH),
    alt: 'İnşaat ve kentsel dönüşüm projesi',
  },
  modernBuilding: {
    src: unsplashSrc('photo-1486406146926-c627a92ad1ab', REMOTE_EDITORIAL_WIDTH),
    alt: 'Modern yüksek bina ve kentsel dönüşüm',
  },
  community: {
    src: unsplashSrc('photo-1416879595882-3373a0480b5b', REMOTE_EDITORIAL_WIDTH),
    alt: 'Yeşil peyzaj ve topluluk alanı',
  },
  legal: {
    src: unsplashSrc('photo-1589829545856-d10d557cf95f', REMOTE_EDITORIAL_WIDTH),
    alt: 'Hukuki danışmanlık ve sözleşme süreçleri',
  },
  engineering: {
    src: unsplashSrc('photo-1541888946425-d81bb19240f5', REMOTE_EDITORIAL_WIDTH),
    alt: 'Mühendislik ve teknik danışmanlık',
  },
  finance: {
    src: unsplashSrc('photo-1560518883-ce09059eeffa', REMOTE_EDITORIAL_WIDTH),
    alt: 'Gayrimenkul ve finans danışmanlığı',
  },
  process: {
    src: unsplashSrc('photo-1454165804606-c3d57bc86b40', REMOTE_EDITORIAL_WIDTH),
    alt: 'Süreç yönetimi ve koordinasyon',
  },
  demolition: {
    src: unsplashSrc('photo-1541888946425-d81bb19240f5', REMOTE_EDITORIAL_WIDTH),
    alt: 'İnşaat sahası ve teknik uzmanlık',
  },
  cityAerial: {
    src: pexels(6943663, REMOTE_FULL_WIDTH),
    alt: 'Kentsel dönüşüm ve şehir planlaması',
  },
  freshHome: {
    src: '/images/service-urban-plaza.png',
    alt: 'Yeşil alanlı modern kent meydanı ve kentsel dönüşüm',
  },
  blueprint: {
    src: unsplashSrc('photo-1503387762-592deb58ef4e', REMOTE_FULL_WIDTH),
    alt: 'Mimari proje ve planlama',
  },
  handshake: {
    src: unsplashSrc('photo-1521791136064-7986c2920216', REMOTE_EDITORIAL_WIDTH),
    alt: 'Danışmanlık ve iş birliği',
  },
  documents: {
    src: unsplashSrc('photo-1450101499163-c8848c66ca85', REMOTE_FULL_WIDTH),
    alt: 'Hukuki evrak ve sözleşme süreçleri',
  },
  kvkkPrivacy: {
    src: unsplashSrc('photo-1521791136064-7986c2920216', REMOTE_FULL_WIDTH),
    alt: 'Güvene dayalı danışmanlık ve veri güvenliği',
  },
} as const;

export const heroVideo = {
  local: '/videos/hero-web.mp4',
  poster: '/images/skyline.png',
} as const;
