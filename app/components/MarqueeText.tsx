'use client';

interface MarqueeTextProps {
  text: string;
  className?: string;
}

export default function MarqueeText({ text, className = '' }: MarqueeTextProps) {
  const repeated = Array(6).fill(text);

  return (
    <div className={`marquee-wrapper overflow-hidden ${className}`} aria-hidden="true">
      <div className="marquee-track flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="marquee-item px-8">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
