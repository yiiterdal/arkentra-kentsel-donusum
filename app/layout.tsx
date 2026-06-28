// app/layout.tsx
import './globals.css';
import GoogleAnalytics from './components/GoogleAnalytics';
import JsonLd from './components/JsonLd';
import SiteChrome from './components/SiteChrome';
import SmoothScrollProvider from './components/SmoothScrollProvider';
import { siteDescription, siteName, siteUrl } from './data/site';
import { playfairDisplay, plusJakartaSans } from './fonts';
import { organizationSchema } from './lib/schema';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName,
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: siteName }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: [
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr" className={`${plusJakartaSans.variable} ${playfairDisplay.variable}`}>
      <head>
        <JsonLd data={organizationSchema()} />
      </head>
      <body className="min-h-screen flex flex-col bg-white font-sans antialiased text-gray-800">
        <GoogleAnalytics />
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
