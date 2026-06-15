interface SectionIntroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionIntro({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionIntroProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : '';

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="text-brand-600 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight leading-snug">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed font-light">
          {description}
        </p>
      )}
    </div>
  );
}
