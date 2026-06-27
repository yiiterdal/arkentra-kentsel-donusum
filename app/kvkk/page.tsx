import KvkkContent from '../components/KvkkContent';
import PageHero from '../components/PageHero';
import { images } from '../data/images';

export const metadata = {
  title: 'KVKK Aydınlatma Metni',
  description:
    'ARKENTRA Kentsel Dönüşüm Kişisel Verilerin İşlenmesi ve Çerez Politikasına İlişkin Aydınlatma Metni.',
};

export default function KvkkPage() {
  return (
    <>
      <PageHero
        title="KVKK Aydınlatma Metni"
        subtitle="Kişisel Verilerin İşlenmesi ve Çerez Politikasına ilişkin bilgilendirme."
        eyebrow="KVKK"
        imageSrc={images.kvkkPrivacy.src}
        imageAlt={images.kvkkPrivacy.alt}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container-editorial max-w-3xl">
          <KvkkContent />
        </div>
      </section>
    </>
  );
}
