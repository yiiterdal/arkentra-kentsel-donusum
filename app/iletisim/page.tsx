import ContactForm from '../components/ContactForm';
import PageHero from '../components/PageHero';
import {
  contactAddressLine1,
  contactAddressLine2,
  contactEmail,
  contactPhone,
  contactPhoneHref,
} from '../data/contact';
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
        subtitle="En iyi teklifi almak için bizimle iletişime geçin. Uzman ekibimiz en kısa sürede size dönüş yapacaktır."
        eyebrow="Bize Ulaşın"
        imageSrc={images.blueprint.src}
        imageAlt={images.blueprint.alt}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Mesaj Gönderin</h2>
              <p className="text-gray-500 text-base font-light mb-8">
                Formu doldurun, size en kısa sürede dönüş yapalım.
              </p>
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">İletişim Bilgileri</h2>
              <dl className="space-y-8">
                <div>
                  <dt className="text-sm font-semibold tracking-[0.15em] uppercase text-brand-600 mb-2">
                    Adres
                  </dt>
                  <dd className="text-gray-600 text-base font-light leading-relaxed">
                    <address className="not-italic">
                      {contactAddressLine1}
                      <br />
                      {contactAddressLine2}
                    </address>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold tracking-[0.15em] uppercase text-brand-600 mb-2">
                    Telefon
                  </dt>
                  <dd>
                    <a
                      href={contactPhoneHref}
                      className="text-gray-900 text-base font-medium hover:text-brand-700 transition-colors"
                    >
                      {contactPhone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold tracking-[0.15em] uppercase text-brand-600 mb-2">
                    E-posta
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-gray-900 text-base font-medium hover:text-brand-700 transition-colors break-all"
                    >
                      {contactEmail}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
