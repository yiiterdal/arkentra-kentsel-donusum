import ContactInfo from '../components/ContactInfo';
import PageHero from '../components/PageHero';
import { images } from '../data/images';

export const metadata = {
  title: 'İletişim | ARKENTRA Kentsel Dönüşüm',
  description: 'ARKENTRA Kentsel Dönüşüm ile iletişime geçin. Bayrampaşa, İstanbul.',
};

export default function IletisimPage() {
  return (
    <>
      <PageHero
        title="İletişim"
        subtitle="Telefon, e-posta veya WhatsApp üzerinden bize ulaşabilirsiniz."
        eyebrow="Bize Ulaşın"
        imageSrc={images.blueprint.src}
        imageAlt={images.blueprint.alt}
        variant="overlay"
      />

      <ContactInfo />
    </>
  );
}
