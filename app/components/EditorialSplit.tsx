import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { IMAGE_QUALITY } from '../lib/image-utils';

interface EditorialSplitProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  reverse?: boolean;
  bg?: 'white' | 'gray' | 'brand';
  href?: string;
  linkLabel?: string;
}

export default function EditorialSplit({
  imageSrc,
  imageAlt,
  title,
  eyebrow,
  children,
  reverse = false,
  bg = 'white',
  href,
  linkLabel = 'Daha fazla bilgi →',
}: EditorialSplitProps) {
  const bgClass =
    bg === 'gray' ? 'bg-gray-50' : bg === 'brand' ? 'bg-brand-50' : 'bg-white';

  return (
    <section className={bgClass}>
      <div className="container-editorial py-14 md:py-20">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
            reverse ? 'lg:[&>*:first-child]:order-2' : ''
          }`}
        >
          <div className="lg:col-span-5 relative aspect-[4/3] overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 40vw"
              quality={IMAGE_QUALITY}
            />
          </div>
          <div className={`lg:col-span-7 ${reverse ? 'lg:order-1' : ''}`}>
            {eyebrow && (
              <p className="text-brand-600 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                {eyebrow}
              </p>
            )}
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight mb-5 leading-snug">
              {title}
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-4 text-base md:text-lg font-light">
              {children}
            </div>
            {href && (
              <Link
                href={href}
                className="inline-flex items-center mt-6 text-brand-700 text-base font-semibold hover:text-brand-800 transition-colors"
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
