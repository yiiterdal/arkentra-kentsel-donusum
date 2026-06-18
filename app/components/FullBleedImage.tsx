import Image from 'next/image';
import { IMAGE_QUALITY } from '../lib/image-utils';

interface FullBleedImageProps {
  src: string;
  alt: string;
  caption?: string;
  aspect?: 'panoramic' | 'wide' | 'cinematic';
}

const aspectClasses = {
  panoramic: 'aspect-[32/9] min-h-[160px] md:min-h-[220px]',
  wide: 'aspect-[21/9] min-h-[180px] md:min-h-[260px]',
  cinematic: 'aspect-[16/6] min-h-[200px] md:min-h-[300px]',
};

export default function FullBleedImage({
  src,
  alt,
  caption,
  aspect = 'panoramic',
}: FullBleedImageProps) {
  return (
    <figure className="w-full">
      <div className={`relative w-full ${aspectClasses[aspect]}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={IMAGE_QUALITY}
        />
      </div>
      {caption && (
        <figcaption className="container-editorial py-3 text-sm text-gray-500 font-light">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
