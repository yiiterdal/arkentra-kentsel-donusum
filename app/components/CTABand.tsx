import Link from 'next/link';

interface CTABandProps {
  title: string;
  description?: string;
  buttonLabel: string;
  buttonHref: string;
}

export default function CTABand({ title, description, buttonLabel, buttonHref }: CTABandProps) {
  return (
    <section className="bg-white border-t border-gray-100">
      <div className="container-editorial py-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-snug text-gray-900">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-gray-600 text-base md:text-lg font-light leading-relaxed">
              {description}
            </p>
          )}
        </div>
        <Link
          href={buttonHref}
          className="shrink-0 inline-flex items-center justify-center px-8 py-3.5 bg-brand-700 text-white text-base font-semibold hover:bg-brand-800 transition-colors"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
