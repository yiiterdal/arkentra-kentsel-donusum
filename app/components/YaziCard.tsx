import Image from 'next/image';
import Link from 'next/link';
import type { Yazi } from '../data/yazilar';
import { IMAGE_QUALITY } from '../lib/image-utils';

export default function YaziCard({ yazi, compact = false }: { yazi: Yazi; compact?: boolean }) {
  return (
    <Link
      href={`/yazilarimiz/${yazi.slug}`}
      className="group flex min-w-0 flex-col overflow-hidden border border-gray-200 bg-white shadow-sm hover:border-brand-200 hover:shadow-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
    >
      <div className={`relative overflow-hidden bg-gray-100 ${compact ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}>
        <Image
          src={yazi.imageSrc}
          alt={yazi.imageAlt}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={IMAGE_QUALITY}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
        <span className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] truncate px-2.5 py-1 bg-white/95 text-brand-800 text-[11px] sm:text-xs font-semibold uppercase tracking-wide">
          {yazi.konu}
        </span>
      </div>
      <div className={`flex min-w-0 flex-1 flex-col ${compact ? 'p-4 sm:p-5' : 'p-5 sm:p-6 md:p-7'}`}>
        <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-gray-500 sm:text-xs">
          <span className="font-medium text-brand-700">{yazi.tur}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={yazi.date}>{yazi.dateLabel}</time>
          {yazi.readTime && (
            <>
              <span aria-hidden="true">·</span>
              <span>{yazi.readTime}</span>
            </>
          )}
        </div>
        <h2
          className={`font-semibold text-gray-900 leading-snug mb-3 break-words group-hover:text-brand-800 transition-colors line-clamp-3 ${
            compact ? 'text-base sm:text-lg' : 'text-lg sm:text-xl md:text-2xl'
          }`}
        >
          {yazi.title}
        </h2>
        <p
          className={`text-gray-600 leading-relaxed font-light flex-1 break-words line-clamp-3 ${
            compact ? 'text-sm' : 'text-sm sm:text-[15px]'
          }`}
        >
          {yazi.excerpt}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 group-hover:gap-2.5 transition-all">
          Devamını oku
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
