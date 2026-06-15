import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { IMAGE_QUALITY } from '../lib/image-utils';

interface ImageBannerProps {
  src: string;
  alt: string;
  title: string;
  eyebrow?: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  children?: ReactNode;
  variant?: 'dark' | 'light';
  size?: 'medium' | 'large';
  imagePosition?: string;
}

export default function ImageBanner({
  src,
  alt,
  title,
  eyebrow,
  description,
  href,
  linkLabel = 'Daha fazla bilgi →',
  children,
  variant = 'dark',
  size = 'large',
  imagePosition = 'object-center',
}: ImageBannerProps) {
  const heightClass =
    size === 'large'
      ? 'min-h-[320px] md:min-h-[440px] lg:min-h-[520px]'
      : 'min-h-[260px] md:min-h-[340px]';

  const overlayClass =
    variant === 'dark'
      ? 'bg-gradient-to-r from-black/75 via-black/50 to-black/25'
      : 'bg-gradient-to-r from-white/90 via-white/70 to-white/40';

  const textClass = variant === 'dark' ? 'text-white' : 'text-gray-900';
  const subtextClass = variant === 'dark' ? 'text-white/85' : 'text-gray-600';
  const eyebrowClass = variant === 'dark' ? 'text-brand-300' : 'text-brand-600';

  return (
    <section className="relative w-full">
      <div className={`relative w-full aspect-[21/9] ${heightClass}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover ${imagePosition}`}
          sizes="100vw"
          quality={IMAGE_QUALITY}
        />
        <div className={`absolute inset-0 ${overlayClass}`} />
        <div className="absolute inset-0 flex items-center">
          <div className="container-editorial py-10 md:py-14 max-w-2xl">
            {eyebrow && (
              <p className={`${eyebrowClass} text-sm font-semibold tracking-[0.2em] uppercase mb-4`}>
                {eyebrow}
              </p>
            )}
            <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-snug ${textClass}`}>
              {title}
            </h2>
            {description && (
              <p className={`mt-5 text-base md:text-lg leading-relaxed font-light ${subtextClass}`}>
                {description}
              </p>
            )}
            {children && (
              <div className={`mt-5 space-y-4 text-base leading-relaxed font-light ${subtextClass}`}>
                {children}
              </div>
            )}
            {href && (
              <Link
                href={href}
                className={`inline-flex items-center mt-8 text-base font-semibold ${
                  variant === 'dark'
                    ? 'text-white hover:text-brand-200'
                    : 'text-brand-700 hover:text-brand-800'
                } transition-colors`}
              >
                {linkLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
