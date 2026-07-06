import Link from 'next/link';
import { getSpotlightYazilar } from '../data/yazilar';
import SectionIntro from './SectionIntro';
import YaziCard from './YaziCard';

type YaziSpotlightSectionProps = {
  excludeSlug?: string;
  limit?: number;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  bg?: 'white' | 'gray';
};

export default function YaziSpotlightSection({
  excludeSlug,
  limit = 3,
  eyebrow = 'Popüler rehberler',
  title = 'En çok okunan uzman yazılarımız',
  description = 'Kira yardımı, danışmanlık ücretleri, riskli yapı süreci ve sözleşme rehberleri.',
  className = '',
  bg = 'gray',
}: YaziSpotlightSectionProps) {
  const items = getSpotlightYazilar(excludeSlug, limit);
  if (items.length === 0) return null;

  const bgClass = bg === 'gray' ? 'bg-gray-50' : 'bg-white';

  return (
    <section className={`${bgClass} py-14 md:py-20 border-t border-gray-100 ${className}`}>
      <div className="container-editorial">
        <SectionIntro eyebrow={eyebrow} title={title} description={description} className="mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((yazi) => (
            <YaziCard key={yazi.slug} yazi={yazi} compact />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/yazilarimiz" className="link-button link-button--ghost">
            Tüm yazıları görüntüle
          </Link>
        </div>
      </div>
    </section>
  );
}
