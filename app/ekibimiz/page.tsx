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

type TeamMember = (typeof teamContent.founders)[number];

function TeamMemberCard({ member }: { member: TeamMember }) {
  const imagePosition =
    'imagePosition' in member && member.imagePosition ? member.imagePosition : 'object-center';

  return (
    <article className="flex h-full flex-col overflow-hidden border border-gray-100 bg-white">
      <div className="flex flex-col items-center border-b border-gray-100 px-6 py-10 md:px-8 md:py-12">
        <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full bg-gray-100 sm:h-40 sm:w-40 md:h-48 md:w-48">
          <Image
            src={member.image}
            alt={member.imageAlt}
            fill
            sizes="(max-width: 768px) 160px, 192px"
            quality={IMAGE_QUALITY}
            className={`object-cover grayscale ${imagePosition}`}
          />
        </div>
        <h3 className="mt-6 text-center text-lg font-semibold tracking-tight text-gray-900 md:text-xl">
          {member.name}
        </h3>
        <p className="mt-1 max-w-[16rem] text-center text-sm font-medium text-brand-600 md:text-base">
          {member.role}
        </p>
      </div>
      <div className="flex flex-1 flex-col space-y-4 px-6 py-8 text-base font-light leading-relaxed text-gray-600 md:px-10 md:py-10 md:text-lg">
        {member.bio.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

const foundingPartners = teamContent.founders.filter((member) => member.role.includes('Kurucu'));
const otherTeamMembers = teamContent.founders.filter((member) => !member.role.includes('Kurucu'));

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
          <div className="space-y-6 text-base font-light leading-relaxed text-gray-600">
            {teamContent.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-14 md:py-20">
        <div className="container-editorial">
          <SectionIntro
            eyebrow={teamContent.pageTitle}
            title={teamContent.foundersTitle}
            className="mb-12"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {foundingPartners.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>

          {otherTeamMembers.length > 0 && (
            <div className="mt-12 md:mt-16">
              <h3 className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
                Ekip
              </h3>
              <div className="grid grid-cols-1 gap-8 md:max-w-xl">
                {otherTeamMembers.map((member) => (
                  <TeamMemberCard key={member.name} member={member} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
