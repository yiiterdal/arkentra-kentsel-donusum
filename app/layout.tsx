// app/layout.tsx
import './globals.css';
import SiteChrome from './components/SiteChrome';
import SmoothScrollProvider from './components/SmoothScrollProvider';
import { playfairDisplay, plusJakartaSans } from './fonts';
import type { ReactNode } from 'react';
import { siteDescription, siteName } from './data/site';

export const metadata = {
  title: `${siteName} | Kentsel Dönüşüm Danışmanlığı İstanbul`,
  description: siteDescription,
  manifest: '/site.webmanifest',
  icons: {
    icon: [{ url: '/images/logo/app-icon.png', type: 'image/png' }],
    apple: [{ url: '/images/logo/app-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr" className={`${plusJakartaSans.variable} ${playfairDisplay.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <link rel="preconnect" href="https://images.pexels.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col bg-white font-sans antialiased text-gray-800">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-600 focus:text-white focus:px-4 focus:py-2"
        >
          Ana İçeriğe Atla
        </a>
        <SmoothScrollProvider>
          <SiteChrome>{children}</SiteChrome>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
