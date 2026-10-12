import Link from 'next/link';
import type { YaziKaynak, YaziServiceLink, YaziSoru } from '../data/yazilar';

export function YaziByline({ reviewedBy }: { reviewedBy?: string }) {
  return (
    <p className="mb-8 text-sm text-gray-500">
      Hazırlayan: ARKENTRA Kentsel Dönüşüm
      {reviewedBy && (
        <>
          <span className="mx-2" aria-hidden="true">
            ·
          </span>
          İnceleyen:{' '}
          <Link href="/ekibimiz" className="font-medium text-brand-700 hover:underline">
            {reviewedBy}
          </Link>
        </>
      )}
    </p>
  );
}

export function YaziFaq({ items }: { items: YaziSoru[] }) {
  return (
    <section className="mt-12" aria-labelledby="yazi-sss">
      <h2 id="yazi-sss" className="text-2xl font-semibold text-gray-900 mb-6 leading-tight">
        Sık sorulan sorular
      </h2>
      <div className="divide-y divide-gray-100 border-y border-gray-100">
        {items.map((item) => (
          <details key={item.question} className="group py-4">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-medium text-gray-900">
              {item.question}
              <span
                className="mt-1 text-brand-600 transition-transform group-open:rotate-45"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-lg text-gray-700 font-light leading-relaxed">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function YaziSources({ items }: { items: YaziKaynak[] }) {
  return (
    <section className="mt-10 rounded-lg bg-gray-50 px-5 py-5" aria-labelledby="yazi-kaynaklar">
      <h2
        id="yazi-kaynaklar"
        className="text-sm font-semibold uppercase tracking-wide text-gray-700 mb-3"
      >
        Kaynaklar
      </h2>
      <ul className="space-y-2 text-base">
        {items.map((item) => (
          <li key={item.href + item.label}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-700 hover:underline"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm text-gray-500 font-light">
        Mevzuat ve destek şartları değişebilir; güncel metin için resmi kaynakları kontrol edin.
      </p>
    </section>
  );
}

export function YaziServiceLinks({ items }: { items: YaziServiceLink[] }) {
  return (
    <section className="mt-12" aria-labelledby="yazi-hizmetler">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-700 mb-2">
        İlgili hizmetler
      </p>
      <h2 id="yazi-hizmetler" className="text-2xl font-semibold text-gray-900 mb-5 leading-tight">
        Bu konuda size nasıl yardımcı oluyoruz?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block border border-brand-100 bg-brand-50/60 px-5 py-4 text-base font-medium text-gray-900 transition-colors hover:border-brand-300"
          >
            {item.title} →
          </Link>
        ))}
      </div>
    </section>
  );
}
