import PageHero from '../components/PageHero';
import YazilarListing from '../components/YazilarListing';
import { images } from '../data/images';

export const metadata = {
  title: 'Yazılarımız | ARKENTRA Kentsel Dönüşüm',
  description: 'Kentsel dönüşüm, riskli yapı, kira yardımı ve hukuki süreçler hakkında güncel yazılar.',
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
