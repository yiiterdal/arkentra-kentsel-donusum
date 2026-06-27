import PageHero from '../components/PageHero';
import YazilarListing from '../components/YazilarListing';
import { images } from '../data/images';

export const metadata = {
  title: 'Yazılarımız',
  description:
    '6306 sayılı Kanun, riskli yapı tespiti, kira yardımı, kat karşılığı sözleşmesi ve malik hakları hakkında uzman rehberler.',
};

export default function YazilarimizPage() {
  return (
    <>
      <PageHero
        title="Yazılarımız"
        subtitle="Hukuk, teknik süreçler ve malik hakları hakkında uzman rehberler."
        eyebrow="Blog"
        imageSrc={images.yazilarHero.src}
        imageAlt={images.yazilarHero.alt}
        variant="overlay"
      />

      <YazilarListing />
    </>
  );
}
