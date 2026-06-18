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
};

const iconSrc = {
  color: '/images/logo/arkentra-icon.svg',
  white: '/images/logo/arkentra-icon-white.svg',
} as const;

export default function ArkentraLogo({
  variant = 'color-full',
  className = '',
  priority = false,
}: ArkentraLogoProps) {
  const isWhite = variant.startsWith('white');
  const isCompact = variant.endsWith('compact');
  const isIconOnly = variant.startsWith('icon');

  const titleClass = isWhite ? 'text-white' : 'text-[#2f3438]';
  const taglineClass = isWhite ? 'text-white/80' : 'text-[#6b7280]';

  if (isIconOnly) {
    return (
      <span className={`inline-flex shrink-0 ${className}`}>
        <Image
          src={isWhite ? iconSrc.white : iconSrc.color}
          alt=""
          width={40}
          height={46}
          className="h-9 w-auto md:h-10"
          priority={priority}
        />
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2.5 md:gap-3 min-w-0 ${className}`}>
      <Image
        src={isWhite ? iconSrc.white : iconSrc.color}
        alt=""
        width={44}
        height={50}
        className="h-9 w-auto shrink-0 md:h-10"
        priority={priority}
      />
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={`text-[15px] md:text-[17px] font-bold tracking-[0.14em] uppercase ${titleClass}`}
        >
          ARKENTRA
        </span>
        {!isCompact && (
          <span className={`mt-1 text-[10px] md:text-[11px] font-normal tracking-wide ${taglineClass}`}>
            Kentsel Dönüşüm Danışmanlığı
          </span>
        )}
      </span>
    </span>
  );
}
