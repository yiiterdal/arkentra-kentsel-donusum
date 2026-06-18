import Image from 'next/image';

export type ArkentraLogoVariant =
  | 'color-full'
  | 'white-full'
  | 'color-compact'
  | 'white-compact'
  | 'icon-color'
  | 'icon-white';

type ArkentraLogoProps = {
  variant?: ArkentraLogoVariant;
  className?: string;
  priority?: boolean;
  withAppIcon?: boolean;
};

const appIcons = {
  color: {
    src: '/images/logo/arkentra-app-icon.png',
    width: 436,
    height: 436,
  },
  white: {
    src: '/images/logo/arkentra-app-icon-white.png',
    width: 426,
    height: 426,
  },
} as const;

const logoAssets = {
  'color-full': {
    src: '/images/logo/arkentra-logo-color.png',
    width: 297,
    height: 81,
    className: 'h-9 w-auto md:h-11',
  },
  'white-full': {
    src: '/images/logo/arkentra-logo-white.png',
    width: 354,
    height: 77,
    className: 'h-9 w-auto md:h-11',
  },
  'color-compact': {
    src: '/images/logo/arkentra-logo-color.png',
    width: 297,
    height: 81,
    className: 'h-8 w-auto',
  },
  'white-compact': {
    src: '/images/logo/arkentra-logo-white.png',
    width: 354,
    height: 77,
    className: 'h-8 w-auto',
  },
  'icon-color': {
    src: '/images/logo/arkentra-icon.png',
    width: 68,
    height: 63,
    className: 'h-9 w-auto md:h-10',
  },
  'icon-white': {
    src: '/images/logo/arkentra-icon-white.png',
    width: 77,
    height: 82,
    className: 'h-9 w-auto md:h-10',
  },
} as const;

export default function ArkentraLogo({
  variant = 'color-full',
  className = '',
  priority = false,
  withAppIcon = false,
}: ArkentraLogoProps) {
  const asset = logoAssets[variant];
  const isWhite = variant.startsWith('white');
  const isCompact = variant.endsWith('compact');
  const isIconOnly = variant.startsWith('icon');

  if (withAppIcon && !isIconOnly) {
    const titleClass = isWhite
      ? 'text-white'
      : 'text-gray-900 group-hover:text-brand-800 transition-colors';
    const taglineClass = isWhite ? 'text-white' : 'text-gray-800';

    const appIcon = isWhite ? appIcons.white : appIcons.color;

    return (
      <span className={`group inline-flex items-center gap-2 min-w-0 shrink-0 ${className}`}>
        <span
          className={`relative shrink-0 overflow-hidden ${
            isCompact ? 'h-8 w-8' : 'h-9 w-9 md:h-11 md:w-11'
          }`}
        >
          <Image
            src={appIcon.src}
            alt=""
            fill
            sizes={isCompact ? '32px' : '(max-width: 768px) 36px, 44px'}
            className="object-contain"
            priority={priority}
            unoptimized
            aria-hidden
          />
        </span>
        <span className="inline-flex items-stretch gap-1.5 min-w-0">
          <span className="w-1 shrink-0 bg-brand-300" aria-hidden />
          <span className="flex min-w-0 flex-col">
            <span
              className={`block text-base md:text-lg font-bold tracking-tight uppercase leading-none ${titleClass}`}
            >
              ARKENTRA
            </span>
            {!isCompact && (
              <span
                className={`block text-xs md:text-sm font-medium tracking-wide leading-none -mt-1 ${taglineClass}`}
              >
                Kentsel Dönüşüm Danışmanlığı
              </span>
            )}
          </span>
        </span>
      </span>
    );
  }

  return (
    <span className={`inline-flex shrink-0 min-w-0 ${className}`}>
      <Image
        src={asset.src}
        alt="ARKENTRA Kentsel Dönüşüm Danışmanlığı"
        width={asset.width}
        height={asset.height}
        className={`${asset.className} max-w-full object-contain object-left`}
        priority={priority}
      />
    </span>
  );
}
