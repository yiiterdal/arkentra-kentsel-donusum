'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { FaqCategory, FaqItem } from '../data/sss';

function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
  id,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        type="button"
        id={`${id}-button`}
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 py-5 md:py-6 text-left transition-colors hover:text-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
      >
        <span className="text-base md:text-lg font-semibold text-gray-900 leading-snug pr-2">
          {item.question}
        </span>
        <span
          className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border transition-all duration-300 md:h-7 md:w-7 ${
            isOpen
              ? 'border-brand-600 bg-brand-600 text-white rotate-180'
              : 'border-gray-300 bg-white text-gray-600'
          }`}
          aria-hidden
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 md:pb-6 text-gray-600 leading-relaxed font-light text-[15px] md:text-base pr-8">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

interface FaqAccordionProps {
  items: FaqItem[];
  defaultOpenIndex?: number | null;
  idPrefix?: string;
}

export function FaqAccordion({
  items,
  defaultOpenIndex = 0,
  idPrefix = 'faq',
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <div className="border-t border-gray-200 bg-white">
      {items.map((item, index) => (
        <FaqAccordionItem
          key={item.question}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          id={`${idPrefix}-${index}`}
        />
      ))}
    </div>
  );
}

interface FaqSectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  items?: FaqItem[];
  categories?: FaqCategory[];
  showCategories?: boolean;
  allLinkHref?: string;
  allLinkLabel?: string;
  className?: string;
}

export default function FaqSection({
  eyebrow = 'SSS',
  title,
  description,
  items,
  categories,
  showCategories = false,
  allLinkHref,
  allLinkLabel = 'Tüm soruları gör',
  className = '',
}: FaqSectionProps) {
  if (showCategories && categories) {
    return (
      <section className={`bg-white py-14 md:py-20 ${className}`}>
        <div className="container-editorial">
          <div className="max-w-3xl mb-10 md:mb-14">
            {eyebrow && (
              <p className="text-brand-600 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                {eyebrow}
              </p>
            )}
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight leading-tight">
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-lg text-gray-600 font-light leading-relaxed">{description}</p>
            )}
          </div>

          <div className="space-y-12 md:space-y-16">
            {categories.map((category) => (
              <div key={category.id}>
                <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-brand-700 mb-4">
                  {category.title}
                </h3>
                <FaqAccordion items={category.items} defaultOpenIndex={null} idPrefix={category.id} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const list = items ?? [];

  return (
    <section className={`bg-gray-50 py-14 md:py-20 ${className}`}>
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            {eyebrow && (
              <p className="text-brand-600 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                {eyebrow}
              </p>
            )}
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight leading-tight">
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-base md:text-lg text-gray-600 font-light leading-relaxed">
                {description}
              </p>
            )}
          </div>
          <div className="lg:col-span-8 border border-gray-200 bg-white px-6 md:px-8">
            <FaqAccordion items={list} defaultOpenIndex={0} idPrefix="home-faq" />
            {allLinkHref && (
              <div className="py-5 border-t border-gray-100 text-center">
                <Link
                  href={allLinkHref}
                  className="text-sm font-semibold text-brand-700 hover:text-brand-800 hover:underline underline-offset-4 transition-colors"
                >
                  {allLinkLabel} →
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
