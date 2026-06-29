import Image from 'next/image';
import Link from 'next/link';
import type { Yazi } from '../data/yazilar';
import { IMAGE_QUALITY } from '../lib/image-utils';

function YaziMeta({ yazi, light = false }: { yazi: Yazi; light?: boolean }) {
  const muted = light ? 'text-white/75' : 'text-gray-500';
  const accent = light ? 'text-brand-300' : 'text-brand-700';

  return (
    <div className={`flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide ${muted}`}>
      <span
        className={`px-2 py-0.5 font-semibold ${light ? 'bg-white/15 text-white' : 'bg-brand-50 text-brand-800'}`}
      >
        {yazi.konu}
      </span>
      <span className={accent}>{yazi.tur}</span>
      <span aria-hidden="true">·</span>
      <time dateTime={yazi.date}>{yazi.dateLabel}</time>
      {yazi.readTime && (
        <>
          <span aria-hidden="true">·</span>
          <span>{yazi.readTime}</span>
        </>
      )}
    </div>
  );
}

export default function FeaturedYaziCard({ yazi }: { yazi: Yazi }) {
  return (
    <Link
      href={`/yazilarimiz/${yazi.slug}`}
      className="group relative grid grid-cols-1 lg:grid-cols-12 overflow-hidden bg-gray-900 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
    >
      <div className="relative lg:col-span-7 min-h-[260px] lg:min-h-[420px] overflow-hidden">
        <Image
          src={yazi.imageSrc}
          alt={yazi.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 58vw"
          quality={IMAGE_QUALITY}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/20 lg:to-black/80" />
        <span className="absolute top-4 left-4 px-3 py-1 bg-brand-600 text-white text-xs font-semibold uppercase tracking-widest">
          Öne Çıkan
        </span>
      </div>
      <div className="lg:col-span-5 flex flex-col justify-center p-8 md:p-10 lg:p-12 text-white">
        <YaziMeta yazi={yazi} light />
        <h2 className="mt-4 text-2xl md:text-3xl lg:text-[2rem] font-semibold leading-tight tracking-tight text-white group-hover:text-brand-200 transition-colors">
          {yazi.title}
        </h2>
        <p className="mt-4 text-base md:text-lg text-white/80 leading-relaxed font-light line-clamp-4">
          {yazi.excerpt}
        </p>
        <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 group-hover:gap-3 transition-all">
          Yazıyı oku
          <span aria-hidden="true" className="text-lg">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
