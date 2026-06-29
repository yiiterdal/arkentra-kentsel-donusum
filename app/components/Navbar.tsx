'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import ArkentraLogo from './ArkentraLogo';
import { navLinks } from '../data/site';

function hasHeroUnderNav(pathname: string | null): boolean {
  if (!pathname) return false;
  if (pathname === '/') return true;
  if (/^\/yazilarimiz\/[^/]+$/.test(pathname)) return false;

  const heroRoutes = [
    '/hakkimizda',
    '/ekibimiz',
    '/iletisim',
    '/sss',
    '/yazilarimiz',
    '/hizmetler',
    '/kvkk',
  ];

  return heroRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`));
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const heroOverlay = hasHeroUnderNav(pathname) && !scrolled;
  const overlay = heroOverlay && !open;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setScrolled(window.scrollY > 20);
  }, [pathname]);

  useEffect(() => {
    const root = document.documentElement;
    if (open) {
      root.classList.add('lenis-stopped');
      document.body.style.overflow = 'hidden';
    } else {
      root.classList.remove('lenis-stopped');
      document.body.style.overflow = '';
    }
    return () => {
      root.classList.remove('lenis-stopped');
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) => pathname?.startsWith(href);

  const headerSurface =
    overlay
      ? 'bg-transparent border-b border-transparent'
      : open || scrolled
        ? 'bg-white shadow-sm border-b border-gray-100'
        : 'bg-white/95 backdrop-blur-sm border-b border-gray-100';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-300 ${headerSurface}`}
    >
      <div className="container-editorial flex min-h-16 items-center justify-between py-1.5 md:h-[72px] md:py-0">
        <Link href="/" className="flex min-w-0 flex-1 items-center pr-1 sm:pr-2" aria-label="ARKENTRA Kentsel Dönüşüm">
          <ArkentraLogo
            variant={overlay ? 'white-full' : 'color-full'}
            className="min-w-0"
            priority
            withAppIcon
          />
        </Link>

        <div className="flex shrink-0 items-center gap-2 md:gap-4">
          <nav className="hidden lg:flex items-center gap-0.5">
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
            aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className={`lg:hidden flex h-11 w-11 items-center justify-center transition-colors ${overlay ? 'text-white' : 'text-gray-800'}`}
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
        <div className="lg:hidden border-t border-gray-100 bg-white" data-lenis-prevent>
          <div className="container-editorial flex flex-col py-2">
            {navLinks
              .filter((link) => link.href !== '/iletisim')
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`border-b border-gray-50 py-3.5 text-base font-medium last:border-0 ${
                    isActive(link.href) ? 'text-brand-700' : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            <Link
              href="/iletisim"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white"
            >
              İletişim
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
