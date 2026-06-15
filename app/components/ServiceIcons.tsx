import type { ReactElement } from 'react';
import type { ServiceIconId } from '../data/site';

interface IconProps {
  className?: string;
}

function EngineeringIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function ArchitectureIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
    </svg>
  );
}

function LegalIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3M6 9h12M8 9l-1 12h10l-1-12" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6h6" />
    </svg>
  );
}

function FinanceIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 18V6m0 12h16M8 14l3-3 3 3 4-5" />
    </svg>
  );
}

function ProcessIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 12a8 8 0 0113.66-5.66M20 12a8 8 0 01-13.66 5.66M4 4v4h4M20 20v-4h-4"
      />
    </svg>
  );
}

function ConstructionIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 20h20M4 20V10l8-6 8 6v10M9 20v-5h6v5" />
    </svg>
  );
}

const iconMap: Record<ServiceIconId, (props: IconProps) => ReactElement> = {
  engineering: EngineeringIcon,
  architecture: ArchitectureIcon,
  legal: LegalIcon,
  finance: FinanceIcon,
  process: ProcessIcon,
  construction: ConstructionIcon,
};

export function ServiceIcon({ id, className }: { id: ServiceIconId; className?: string }) {
  const Icon = iconMap[id];
  return <Icon className={className} />;
}
