'use client';

import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';

export default function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 w-full pb-20 md:pb-0">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
