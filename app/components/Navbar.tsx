'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { navLinks } from '../data/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => pathname?.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm border-b border-gray-100' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container-editorial flex items-center justify-between h-16 md:h-[72px]">
        <Link href="/" className="flex items-center gap-1.5" aria-label="ARKENTRA Kentsel Dönüşüm">
          <div className="w-1 h-8 bg-brand-600 shrink-0" aria-hidden />
          <div className="flex flex-col gap-0 leading-none">
            <div className="text-[15px] md:text-base font-semibold text-gray-900 tracking-tight">
              ARKENTRA
            </div>
            <div className="text-[10px] md:text-[11px] text-gray-500 tracking-wide -mt-px">
              Kentsel Dönüşüm Danışmanlığı
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-2 md:gap-4">
          <nav className="hidden xl:flex items-center gap-0.5">
            {navLinks
              .filter((link) => link.href !== '/iletisim')
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 py-2 text-[13px] font-medium tracking-wide transition-colors whitespace-nowrap ${
                    isActive(link.href)
                      ? 'text-brand-700'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
          </nav>

          <Link
            href="/iletisim"
            className="hidden md:inline-flex items-center px-5 py-2 bg-brand-600 text-white text-[13px] font-semibold hover:bg-brand-700 transition-colors shrink-0"
          >
            İletişim
          </Link>

          <button
            aria-label="Menü"
            onClick={() => setOpen(!open)}
            className="xl:hidden text-gray-800 p-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden bg-white border-t border-gray-100">
          <div className="container-editorial py-4 flex flex-col">
            {navLinks
              .filter((link) => link.href !== '/iletisim')
              .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-sm font-medium border-b border-gray-50 last:border-0 ${
                  isActive(link.href) ? 'text-brand-700' : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/iletisim"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold"
            >
              İletişim
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
