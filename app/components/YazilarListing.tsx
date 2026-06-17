'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  type YaziSort,
  yazilar,
  yaziKonulari,
  yaziSortOptions,
  yaziTurleri,
} from '../data/yazilar';
import { IMAGE_QUALITY } from '../lib/image-utils';

type MenuKey = 'konu' | 'tur' | 'sort' | null;

function FilterMenu({
  label,
  value,
  open,
  onToggle,
  onClose,
  children,
}: {
  label: string;
  value: string;
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open, onClose]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={`inline-flex items-center gap-2 border px-4 py-2.5 text-sm transition-colors ${
          open
            ? 'border-brand-700 bg-brand-50 text-brand-800'
            : 'border-gray-300 bg-white text-gray-800 hover:border-brand-600 hover:bg-gray-50'
        }`}
      >
        <span className="text-gray-500">{label}:</span>
        <span className="font-medium">{value}</span>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute left-0 z-20 mt-2 min-w-[220px] max-h-64 overflow-y-auto border border-gray-200 bg-white py-1 shadow-lg"
        >
          {children}
        </div>
      )}
    </div>
  );
}

function MenuOption({
  active,
  onSelect,
  children,
}: {
  active: boolean;
  onSelect: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      role="option"
      aria-selected={active}
      onClick={onSelect}
      className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors ${
        active ? 'bg-brand-50 text-brand-800 font-medium' : 'text-gray-700 hover:bg-gray-50'
      }`}
    >
      {children}
      {active && (
        <svg className="w-4 h-4 text-brand-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )}
    </button>
  );
}

export default function YazilarListing() {
  const [selectedKonu, setSelectedKonu] = useState<string>('Tümü');
  const [selectedTur, setSelectedTur] = useState<string>('Tümü');
  const [sort, setSort] = useState<YaziSort>('newest');
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);

  const sortLabel = yaziSortOptions.find((o) => o.value === sort)?.label ?? 'En yeni';

  const filteredYazilar = useMemo(() => {
    const filtered = yazilar.filter((yazi) => {
      const konuMatch = selectedKonu === 'Tümü' || yazi.konu === selectedKonu;
      const turMatch = selectedTur === 'Tümü' || yazi.tur === selectedTur;
      return konuMatch && turMatch;
    });

    return [...filtered].sort((a, b) => {
      if (sort === 'newest') return b.date.localeCompare(a.date);
      if (sort === 'oldest') return a.date.localeCompare(b.date);
      return a.title.localeCompare(b.title, 'tr');
    });
  }, [selectedKonu, selectedTur, sort]);

  const hasActiveFilter =
    selectedKonu !== 'Tümü' || selectedTur !== 'Tümü' || sort !== 'newest';

  const resetFilters = () => {
    setSelectedKonu('Tümü');
    setSelectedTur('Tümü');
    setSort('newest');
    setOpenMenu(null);
  };

  const toggleMenu = (key: MenuKey) => {
    setOpenMenu((current) => (current === key ? null : key));
  };

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container-editorial">
        <div className="mb-8 md:mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-gray-200">
          <div className="flex flex-wrap items-center gap-2">
            <FilterMenu
              label="Konu"
              value={selectedKonu}
              open={openMenu === 'konu'}
              onToggle={() => toggleMenu('konu')}
              onClose={() => setOpenMenu(null)}
            >
              {yaziKonulari.map((option) => (
                <MenuOption
                  key={option}
                  active={selectedKonu === option}
                  onSelect={() => {
                    setSelectedKonu(option);
                    setOpenMenu(null);
                  }}
                >
                  {option}
                </MenuOption>
              ))}
            </FilterMenu>

            <FilterMenu
              label="Tür"
              value={selectedTur}
              open={openMenu === 'tur'}
              onToggle={() => toggleMenu('tur')}
              onClose={() => setOpenMenu(null)}
            >
              {yaziTurleri.map((option) => (
                <MenuOption
                  key={option}
                  active={selectedTur === option}
                  onSelect={() => {
                    setSelectedTur(option);
                    setOpenMenu(null);
                  }}
                >
                  {option}
                </MenuOption>
              ))}
            </FilterMenu>

            <FilterMenu
              label="Sıralama"
              value={sortLabel}
              open={openMenu === 'sort'}
              onToggle={() => toggleMenu('sort')}
              onClose={() => setOpenMenu(null)}
            >
              {yaziSortOptions.map((option) => (
                <MenuOption
                  key={option.value}
                  active={sort === option.value}
                  onSelect={() => {
                    setSort(option.value);
                    setOpenMenu(null);
                  }}
                >
                  {option.label}
                </MenuOption>
              ))}
            </FilterMenu>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500 shrink-0">
            <span>
              <span className="font-medium text-gray-800">{filteredYazilar.length}</span> yazı
            </span>
            {hasActiveFilter && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-brand-700 font-medium hover:underline underline-offset-2"
              >
                Temizle
              </button>
            )}
          </div>
        </div>

        {filteredYazilar.length === 0 ? (
          <p className="text-gray-500 text-base font-light py-12 text-center">
            Seçtiğiniz filtrelere uygun yazı bulunamadı.
          </p>
        ) : (
          <div className="space-y-10 md:space-y-12">
            {filteredYazilar.map((yazi) => (
              <Link
                key={yazi.slug}
                href={`/yazilarimiz/${yazi.slug}`}
                className="group grid grid-cols-1 md:grid-cols-5 gap-8 pb-10 md:pb-12 border-b border-gray-200 last:border-b-0 hover:bg-gray-50/50 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
              >
                <div className="md:col-span-2 relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    src={yazi.imageSrc}
                    alt={yazi.imageAlt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    quality={IMAGE_QUALITY}
                  />
                </div>
                <div className="md:col-span-3 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-gray-500 mb-3">
                    <span>{yazi.konu}</span>
                    <span aria-hidden="true">·</span>
                    <span>{yazi.tur}</span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={yazi.date}>{yazi.dateLabel}</time>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 decoration-brand-700/40 group-hover:underline underline-offset-[5px]">
                    {yazi.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed font-light mb-5">{yazi.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 group-hover:underline underline-offset-4">
                    Devamını oku
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
