import Link from 'next/link';
import type { ExpertiseItem } from '../data/site';
import { ServiceIcon } from './ServiceIcons';

interface ExpertiseGridProps {
  title: string;
  description: string;
  items: readonly ExpertiseItem[];
}

function ExpertiseCard({ item }: { item: ExpertiseItem }) {
  return (
    <Link
      href={item.href}
      className="group flex h-full flex-col bg-white border border-gray-200 p-8 md:p-9 transition-all duration-200 hover:border-brand-600 hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
    >
      <span
        className="mb-6 inline-flex h-12 w-12 items-center justify-center bg-brand-50 text-brand-800 transition-colors duration-200 group-hover:bg-brand-700 group-hover:text-white"
        aria-hidden
      >
        <ServiceIcon id={item.icon} className="h-6 w-6" />
      </span>

      <h3 className="font-serif text-xl md:text-2xl font-medium text-gray-900 mb-3 leading-snug">
        {item.title}
      </h3>

      <p className="text-gray-600 leading-relaxed text-base mb-8 flex-1 font-light">
        {item.description}
      </p>

      <span className="text-base font-semibold text-brand-800 group-hover:underline">
        Daha fazla bilgi →
      </span>
    </Link>
  );
}

export default function ExpertiseGrid({ title, description, items }: ExpertiseGridProps) {
  return (
    <section className="bg-gray-50 py-14 md:py-20">
      <div className="container-editorial">
        <header className="mb-10 md:mb-14 max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 mb-4 tracking-tight">
            {title}
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">{description}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((item) => (
            <ExpertiseCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
