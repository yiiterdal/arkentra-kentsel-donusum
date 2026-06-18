import EditorialSplit from '../components/EditorialSplit';
import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import {
  serviceDetails,
  technicalInspectionNote,
  technicalInspectionStages,
} from '../data/hizmetler';
import { images } from '../data/images';
import { serviceSlug, services } from '../data/site';

export const metadata = {
  title: 'Hizmetler | ARKENTRA Kentsel Dönüşüm',
  description: 'Kentsel dönüşüm mühendislik, mimarlık, hukuk, finans danışmanlığı ve süreç yönetimi hizmetleri.',
};

export default function HizmetlerPage() {
  return (
    <>
      <PageHero
        title="Hizmetlerimiz"
        subtitle="Kentsel dönüşüm sürecinin tamamında, stratejik danışmanlıktan proje teslimine kadar tek noktadan profesyonel çözüm sunuyoruz."
        imageSrc={images.cityAerial.src}
        imageAlt={images.cityAerial.alt}
        variant="overlay"
      />

      <section className="bg-white py-12 md:py-16">
        <div className="container-editorial">
          <SectionIntro
            title="Proje yaşam döngüsünün her aşamasında yanınızdayız"
            description="Danışmanlık ve stratejik planlamadan izin süreçlerine, detaylı tasarımdan inşaat denetimi ve teslimata kadar multidisipliner ekibimizle hizmet veriyoruz."
          />
        </div>
      </section>

      {services.map((service, index) => {
        const detail = serviceDetails[service];
        return (
          <EditorialSplit
            key={service}
            id={serviceSlug(service)}
            imageSrc={detail.image.src}
            imageAlt={detail.image.alt}
            eyebrow={`Hizmet ${String(index + 1).padStart(2, '0')}`}
            title={service}
            reverse={index % 2 === 1}
            bg={index % 2 === 0 ? 'white' : 'gray'}
          >
            <p className="italic text-gray-500">{detail.description}</p>
            <ul className="space-y-2 !mt-4">
              {detail.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-brand-600 mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </EditorialSplit>
        );
      })}

      <section className="bg-white py-14 md:py-20 border-t border-gray-100">
        <div className="container-editorial">
          <SectionIntro
            eyebrow="Teknik denetim"
            title="İnşaat sürecinde aşamalı teknik denetim"
            description="Temelden iskâna kadar her kritik aşamada yerinde inceleme yapılır; tespitler fotoğraf ve tutanaklarla belgelenerek kat malikleri temsil heyetine raporlanır."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {technicalInspectionStages.map((stage) => (
              <div
                key={stage.code}
                className="flex gap-4 p-6 bg-gray-50 rounded-sm border border-gray-100"
              >
                <span
                  className="text-brand-600 text-sm font-semibold tabular-nums shrink-0 pt-0.5"
                  aria-hidden
                >
                  {stage.code}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1.5">{stage.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-gray-500 text-sm leading-relaxed font-light max-w-4xl">
            {technicalInspectionNote}
          </p>
        </div>
      </section>
    </>
  );
}
