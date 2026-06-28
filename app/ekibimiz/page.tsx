import Image from 'next/image';
import JsonLd from '../components/JsonLd';
import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import { images } from '../data/images';
import { teamContent } from '../data/site';
import { IMAGE_QUALITY } from '../lib/image-utils';

import { foundersSchema } from '../lib/schema';

export const metadata = {
  title: 'Ekibimiz',
  description:
    'Av. Ferhat Yıldırım ve Mimar Nevzat Yıldırım liderliğinde kentsel dönüşüm hukuku, riskli yapı tespiti ve aşamalı teknik denetim uzman ekibi.',
};

export default function EkibimizPage() {
  return (
    <>
      <JsonLd data={foundersSchema()} />
      <PageHero
        title="Ekibimiz"
        subtitle={teamContent.heroSubtitle}
        imageSrc={images.teamHero.src}
        imageAlt={images.teamHero.alt}
        variant="overlay"
      />

      <section className="bg-white py-14 md:py-20">
        <div className="container-editorial max-w-3xl">
          <div className="space-y-6 text-gray-600 text-base leading-relaxed font-light">
            {teamContent.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20 border-t border-gray-100">
        <div className="container-editorial">
          <SectionIntro
            eyebrow={teamContent.pageTitle}
            title={teamContent.foundersTitle}
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white border border-gray-100 mb-10">
            {teamContent.founders.map((member) => (
              <div key={member.name} className="flex min-w-0 flex-col items-center px-4 py-10 sm:px-6 md:px-8 md:py-12">
                <div className="relative h-32 w-32 sm:h-36 sm:w-36 md:h-48 md:w-48 shrink-0 overflow-hidden rounded-full bg-gray-100">
                  <Image
                    src={member.image}
                    alt={member.imageAlt}
                    fill
                    sizes="(max-width: 768px) 160px, 192px"
                    quality={IMAGE_QUALITY}
                    className="object-cover object-center grayscale"
                  />
                </div>
                <h3 className="mt-6 text-lg md:text-xl font-semibold text-gray-900 tracking-tight text-center">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm md:text-base text-brand-600 font-medium text-center max-w-[16rem]">
                  {member.role}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {teamContent.founders.map((member) => (
              <article
                key={`${member.name}-bio`}
                className="bg-white border border-gray-100 p-8 md:p-10"
              >
                <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed font-light">
                  {member.bio.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
