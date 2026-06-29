'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import FeaturedYaziCard from './FeaturedYaziCard';
import {
  FEATURED_YAZI_SLUG,
  type Yazi,
  type YaziSort,
  getYaziBySlug,
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
          className="absolute left-0 z-20 mt-2 w-max max-w-[calc(100vw-3rem)] min-w-[12rem] max-h-64 overflow-y-auto border border-gray-200 bg-white py-1 shadow-lg"
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

function YaziCard({ yazi }: { yazi: Yazi }) {
  return (
    <Link
      href={`/yazilarimiz/${yazi.slug}`}
      className="group flex flex-col overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-brand-200 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <Image
          key={yazi.imageSrc}
          src={yazi.imageSrc}
          alt={yazi.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={IMAGE_QUALITY}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
        <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-white/95 text-brand-800 text-xs font-semibold uppercase tracking-wide">
          {yazi.konu}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-3">
          <span className="font-medium text-brand-700">{yazi.tur}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={yazi.date}>{yazi.dateLabel}</time>
          {yazi.readTime && (
            <>
              <span aria-hidden="true">·</span>
              <span>{yazi.readTime}</span>
            </>
          )}
        </div>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug mb-3 group-hover:text-brand-800 transition-colors line-clamp-3">
          {yazi.title}
        </h2>
        <p className="text-gray-600 leading-relaxed font-light text-[15px] line-clamp-3 flex-1">
          {yazi.excerpt}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 group-hover:gap-2.5 transition-all">
          Devamını oku
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
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

    const sorted = [...filtered].sort((a, b) => {
      if (sort === 'newest') return b.date.localeCompare(a.date);
      if (sort === 'oldest') return a.date.localeCompare(b.date);
      return a.title.localeCompare(b.title, 'tr');
    });

    const pinned = getYaziBySlug(FEATURED_YAZI_SLUG);
    if (!pinned || !sorted.some((yazi) => yazi.slug === FEATURED_YAZI_SLUG)) {
      return sorted;
    }

    return [pinned, ...sorted.filter((yazi) => yazi.slug !== FEATURED_YAZI_SLUG)];
  }, [selectedKonu, selectedTur, sort]);

  const [featuredYazi, ...otherYazilar] = filteredYazilar;

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
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="container-editorial">
        <div className="mb-10 md:mb-12">
          <p className="text-brand-700 text-sm font-semibold tracking-[0.2em] uppercase mb-2">
            Uzman içerikler
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 max-w-2xl leading-tight">
            Kentsel dönüşümde bilmeniz gerekenleri sade ve net anlatıyoruz
          </h2>
        </div>

        <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-gray-200">
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
          <div className="space-y-10 md:space-y-14">
            {featuredYazi && <FeaturedYaziCard yazi={featuredYazi} />}
            {otherYazilar.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {otherYazilar.map((yazi) => (
                  <YaziCard key={yazi.slug} yazi={yazi} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
