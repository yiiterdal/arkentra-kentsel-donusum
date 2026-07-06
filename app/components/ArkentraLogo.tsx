import Image from 'next/image';
import { LOGO_IMAGE_QUALITY } from '../lib/image-utils';

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
  /** Override app icon color when using withAppIcon (e.g. green icon + white text in footer). */
  appIconVariant?: 'color' | 'white';
};

const appIcons = {
  color: {
    src: '/images/logo/arkentra-app-icon.png',
    width: 512,
    height: 512,
  },
  white: {
    src: '/images/logo/arkentra-app-icon-mark-white.png',
    width: 512,
    height: 512,
  },
  /** Green box + white mark (footer etc.) */
  boxedWhite: {
    src: '/images/logo/arkentra-app-icon.png',
    width: 512,
    height: 512,
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
    width: 708,
    height: 154,
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
    width: 708,
    height: 154,
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
  appIconVariant,
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

    const useBoxedIcon = appIconVariant === 'white';
    const useGreenBox =
      appIconVariant === 'color' || (!isWhite && appIconVariant == null);

    const boxSizeClass = isCompact ? 'h-8 w-8' : 'h-11 w-11';
    const markOnlySizeClass = isCompact ? 'h-10 w-10' : 'h-14 w-14';
    const markInsetClass = useGreenBox
      ? isCompact
        ? 'inset-[4%]'
        : 'inset-[1%]'
      : isCompact
        ? 'inset-[2%]'
        : 'inset-0';

    return (
      <span className={`group inline-flex min-w-0 max-w-full flex-row items-center gap-2.5 ${className}`}>
        <span
          className={`relative shrink-0 overflow-hidden ${
            useGreenBox || useBoxedIcon ? boxSizeClass : markOnlySizeClass
          }`}
        >
          {useBoxedIcon ? (
            <Image
              src={appIcons.boxedWhite.src}
              alt=""
              fill
              sizes={isCompact ? '32px' : '44px'}
              className="object-contain"
              priority={priority}
              quality={LOGO_IMAGE_QUALITY}
              aria-hidden
            />
          ) : (
            <>
              {useGreenBox && <span className="absolute inset-0 bg-brand-600" aria-hidden />}
              <span className={`absolute ${markInsetClass}`}>
                <Image
                  src={appIcons.white.src}
                  alt=""
                  fill
                  sizes={isCompact ? '32px' : '44px'}
                  className="object-contain"
                  priority={priority}
                  quality={LOGO_IMAGE_QUALITY}
                  aria-hidden
                />
              </span>
            </>
          )}
        </span>
        <span className="inline-flex min-w-0 items-stretch gap-2">
          <span className="w-1 shrink-0 self-stretch bg-brand-300" aria-hidden />
          <span className="flex min-w-0 flex-col justify-center gap-0.5">
            <span
              className={`block whitespace-nowrap text-lg font-bold uppercase leading-none tracking-tight ${titleClass}`}
            >
              ARKENTRA
            </span>
            {!isCompact && (
              <span
                className={`block whitespace-nowrap text-sm font-medium leading-tight ${taglineClass}`}
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
        quality={LOGO_IMAGE_QUALITY}
      />
    </span>
  );
}
