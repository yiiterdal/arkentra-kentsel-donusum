import Link from 'next/link';
import EditorialSplit from '../components/EditorialSplit';
import ExpertiseGrid from '../components/ExpertiseGrid';
import JsonLd from '../components/JsonLd';
import PageHero from '../components/PageHero';
import { images } from '../data/images';
import { aboutContent, expertiseAreas } from '../data/site';

import { foundersSchema } from '../lib/schema';

export const metadata = {
  title: 'Hakkımızda',
  description:
    'Bayrampaşa merkezli ARKENTRA: 6306 sayılı Kanun kapsamında malik temsilciliği, riskli yapı tespiti, kat karşılığı sözleşmesi ve aşamalı teknik denetim danışmanlığı.',
};

export default function HakkimizdaPage() {
  return (
    <>
      <JsonLd data={foundersSchema()} />
      <PageHero
        title={aboutContent.heroTitle}
        subtitle={aboutContent.heroSubtitle}
        imageSrc={images.aboutHero.src}
        imageAlt={images.aboutHero.alt}
        variant="overlay"
        priority
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 lg:items-center text-left">
            <div className="lg:col-span-8">
              <p className="text-brand-600 text-sm font-semibold tracking-[0.2em] uppercase mb-5">
                {aboutContent.lead.eyebrow}
              </p>
              <h2 className="font-serif text-2xl md:text-4xl font-medium text-gray-900 tracking-tight leading-snug mb-6">
                {aboutContent.lead.title}
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light">
                {aboutContent.lead.text}
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link href="/ekibimiz" className="link-button shrink-0">
                Ekibimizi tanıyın →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ExpertiseGrid
        title={aboutContent.expertise.title}
        description={aboutContent.expertise.description}
        items={expertiseAreas}
      />

      <EditorialSplit
        imageSrc={images.uniqueApproach.src}
        imageAlt={images.uniqueApproach.alt}
        eyebrow={aboutContent.approach.eyebrow}
        title={aboutContent.approach.title}
        reverse
        bg="white"
      >
        {aboutContent.approach.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </EditorialSplit>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="text-brand-600 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                İlkelerimiz
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-gray-900 tracking-tight leading-snug">
                Güven inşa eden dört temel değer
              </h2>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {aboutContent.principles.map((principle, index) => (
                <div key={principle.title} className="flex gap-4">
                  <span
                    className="text-brand-600 text-sm font-semibold tabular-nums shrink-0 pt-0.5"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1.5">
                      {principle.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed font-light">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
