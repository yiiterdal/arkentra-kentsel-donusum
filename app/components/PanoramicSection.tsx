import Image from 'next/image';
import type { ReactNode } from 'react';
import { IMAGE_QUALITY } from '../lib/image-utils';

interface PanoramicSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  bg?: 'white' | 'gray';
}

export default function PanoramicSection({
  imageSrc,
  imageAlt,
  title,
  eyebrow,
  children,
  bg = 'white',
}: PanoramicSectionProps) {
  const bgClass = bg === 'gray' ? 'bg-gray-50' : 'bg-white';

  return (
    <section className={bgClass}>
      <div className="relative w-full aspect-[32/9] min-h-[160px] md:min-h-[240px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={IMAGE_QUALITY}
        />
      </div>
      <div className="container-editorial py-12 md:py-16 max-w-4xl">
        {eyebrow && (
          <p className="text-brand-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight mb-6 leading-snug">
          {title}
        </h2>
        <div className="text-gray-600 leading-relaxed space-y-4 text-base md:text-lg font-light">
          {children}
        </div>
      </div>
    </section>
  );
}
