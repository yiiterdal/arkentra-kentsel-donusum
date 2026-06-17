import Link from 'next/link';
import FaqSection from '../components/FaqSection';
import PageHero from '../components/PageHero';
import { contactWhatsAppHref } from '../data/contact';
import { images } from '../data/images';
import { faqCategories } from '../data/sss';

export const metadata = {
  title: 'Sık Sorulan Sorular | ARKENTRA Kentsel Dönüşüm',
  description:
    'Kentsel dönüşüm, riskli yapı tespiti, kira yardımı, kat karşılığı sözleşmesi ve malik hakları hakkında sık sorulan sorular.',
};

export default function SssPage() {
  return (
    <>
      <PageHero
        title="Sık Sorulan Sorular"
        subtitle="Kentsel dönüşüm sürecinde en çok merak edilen konulara kısa ve net yanıtlar."
        eyebrow="SSS"
        imageSrc={images.process.src}
        imageAlt={images.process.alt}
        variant="overlay"
      />

      <FaqSection
        title="Merak ettikleriniz"
        description="Aşağıdaki sorular maliklerden en sık gelen başlıkları kapsar. Size özel durumunuz için uzman ekibimizle görüşebilirsiniz."
        categories={faqCategories}
        showCategories
        eyebrow=""
      />

      <section className="bg-gray-50 py-14 md:py-16 border-t border-gray-200">
        <div className="container-editorial text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Sorunuzun yanıtını bulamadınız mı?
          </h2>
          <p className="text-gray-600 font-light leading-relaxed mb-8">
            Uzman ekibimiz projenize özel sorularınızı yanıtlamak için hazır. WhatsApp veya
            telefon ile hemen ulaşabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={contactWhatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-[#25D366] text-white text-base font-semibold hover:bg-[#20bd5a] transition-colors w-full sm:w-auto"
            >
              WhatsApp ile sorun
            </a>
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center px-6 py-3.5 border border-gray-300 text-gray-900 text-base font-semibold hover:border-brand-600 hover:text-brand-700 transition-colors w-full sm:w-auto"
            >
              İletişim sayfası
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
