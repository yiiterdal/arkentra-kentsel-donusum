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
        subtitle="Kentsel dönüşüm dünyasından güncel haberler, rehberler ve uzman görüşleri."
        eyebrow="Blog"
        imageSrc={images.documents.src}
        imageAlt={images.documents.alt}
        variant="overlay"
      />

      <YazilarListing />
    </>
  );
}
