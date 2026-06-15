import Image from 'next/image';
import { IMAGE_QUALITY } from '../lib/image-utils';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  imageSrc: string;
  imageAlt: string;
  priority?: boolean;
  variant?: 'default' | 'overlay';
}

export default function PageHero({
  title,
  subtitle,
  eyebrow,
  imageSrc,
  imageAlt,
  priority = false,
  variant = 'default',
}: PageHeroProps) {
  if (variant === 'overlay') {
    return (
      <section className="relative w-full pt-16 md:pt-[72px]">
        <div className="relative w-full min-h-[360px] md:min-h-[460px] lg:min-h-[520px] flex items-center justify-center overflow-hidden">
          <Image
            key={imageSrc}
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center scale-105"
            sizes="100vw"
            quality={IMAGE_QUALITY}
            priority={priority}
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10 container-editorial text-center px-6 py-20 md:py-24">
            {eyebrow && (
              <p className="text-white/80 text-sm font-semibold tracking-[0.25em] uppercase mb-5">
                {eyebrow}
              </p>
            )}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-5 md:mt-6 text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full pt-16 md:pt-[72px]">
      <div className="relative w-full aspect-[21/9] min-h-[220px] max-h-[480px] md:max-h-[520px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={IMAGE_QUALITY}
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
      </div>
      <div className="bg-white border-b border-gray-100">
        <div className="container-editorial py-8 md:py-12">
          {eyebrow && (
            <p className="text-brand-600 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              {eyebrow}
            </p>
          )}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight max-w-4xl leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed font-light">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
