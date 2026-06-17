import Image from 'next/image';
import Link from 'next/link';
import { IMAGE_QUALITY } from '../lib/image-utils';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
}

export default function ServiceCard({
  title,
  description,
  imageSrc,
  imageAlt,
  href = '/hizmetler',
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white border border-gray-200 hover:border-brand-600 hover:shadow-md transition-all duration-200 overflow-hidden"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
          quality={IMAGE_QUALITY}
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-brand-700 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-base leading-relaxed font-light line-clamp-3">{description}</p>
        <span className="link-button--card mt-4">
          Detaylı bilgi →
        </span>
      </div>
    </Link>
  );
}
