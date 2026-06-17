import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import { images } from '../data/images';
import { teamContent } from '../data/site';

export const metadata = {
  title: 'Ekibimiz | ARKENTRA Kentsel Dönüşüm',
  description:
    'ARKENTRA Kentsel Dönüşüm uzman ekibi; kentsel dönüşüm hukuku, mühendislik, mimarlık ve proje yönetiminde deneyimli profesyoneller.',
};

export default function EkibimizPage() {
  return (
    <>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {teamContent.founders.map((member) => (
              <article
                key={member.name}
                className="bg-white border border-gray-100 p-8 md:p-10"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-1 h-12 bg-brand-600 shrink-0" aria-hidden />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-base text-brand-600 font-medium">{member.role}</p>
                  </div>
                </div>
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
