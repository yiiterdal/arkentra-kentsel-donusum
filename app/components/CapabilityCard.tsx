import Link from 'next/link';

interface CapabilityCardProps {
  title: string;
  description: string;
  href: string;
}

export default function CapabilityCard({ title, description, href }: CapabilityCardProps) {
  return (
    <Link
      href={href}
      className="block border border-gray-200 p-6 md:p-8 hover:border-navy hover:shadow-lg transition-all"
    >
      <h3 className="text-lg font-semibold text-navy mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </Link>
  );
}
