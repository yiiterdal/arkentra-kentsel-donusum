'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import ArkentraLogo from './ArkentraLogo';
import { navLinks } from '../data/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const overlay = isHome && !scrolled && !open;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname?.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        overlay
          ? 'bg-transparent border-b border-transparent'
          : scrolled
            ? 'bg-white shadow-sm border-b border-gray-100'
            : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
      }`}
    >
      <div className="container-editorial flex items-center justify-between h-16 md:h-[72px]">
        <Link href="/" className="flex items-center min-w-0 max-w-[58%] sm:max-w-none" aria-label="ARKENTRA Kentsel Dönüşüm">
          <ArkentraLogo
            variant={overlay ? 'white-full' : 'color-full'}
            className="min-w-0"
            priority
            withAppIcon
          />
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
                    overlay
                      ? isActive(link.href)
                        ? 'text-white'
                        : 'text-white/85 hover:text-white'
                      : isActive(link.href)
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
            className={`hidden md:inline-flex items-center px-5 py-2 text-[13px] font-semibold transition-colors shrink-0 ${
              overlay
                ? 'bg-brand-600 text-white hover:bg-brand-500'
                : 'bg-brand-600 text-white hover:bg-brand-700'
            }`}
          >
            İletişim
          </Link>

          <button
            aria-label="Menü"
            onClick={() => setOpen(!open)}
            className={`xl:hidden p-2 transition-colors ${overlay ? 'text-white' : 'text-gray-800'}`}
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
            <div className="pb-4 mb-2 border-b border-gray-100">
              <ArkentraLogo variant="color-compact" withAppIcon />
            </div>
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
