import Image from 'next/image';
import Link from 'next/link';
import { teamContent } from '../data/site';
import { IMAGE_QUALITY } from '../lib/image-utils';

const featuredFounders = teamContent.founders.filter((member) =>
  member.role.includes('Kurucu'),
);

export default function FoundersPreview() {
  return (
    <section className="bg-gray-50 py-14 md:py-20 border-t border-gray-100">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-brand-600 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Kurucu Ekip
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-gray-900 tracking-tight">
              Kentsel dönüşümde malik tarafını temsil eden uzman kadro
            </h2>
            <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed font-light max-w-2xl">
              Av. Ferhat Yıldırım ve Mimar Nevzat Yıldırım; 6306 sayılı Kanun, riskli yapı tespiti,
              kat karşılığı sözleşmeleri ve aşamalı teknik denetim alanlarında maliklere doğrudan
              danışmanlık sunar.
            </p>
          </div>
          <Link href="/ekibimiz" className="link-button link-button--ghost shrink-0">
            Ekibimizi tanıyın →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {featuredFounders.map((member) => (
            <Link
              key={member.name}
              href="/ekibimiz"
              className="group flex items-center gap-5 bg-white border border-gray-100 p-6 md:p-8 hover:border-brand-200 transition-colors"
            >
              <div className="relative h-20 w-20 md:h-24 md:w-24 shrink-0 overflow-hidden rounded-full bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.imageAlt}
                  fill
                  sizes="96px"
                  quality={IMAGE_QUALITY}
                  className={`object-cover grayscale group-hover:grayscale-0 transition-all ${member.imagePosition ?? 'object-[center_32%]'}`}
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900">{member.name}</p>
                <p className="text-sm text-brand-600 font-medium mt-0.5">{member.role}</p>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2 font-light">{member.bio[0]}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
