import Link from 'next/link';
import ArkentraLogo from './ArkentraLogo';
import {
  contactAddressLine1,
  contactAddressLine2,
  contactEmail,
  contactPhone,
  contactPhoneHref,
} from '../data/contact';
import { footerContent, navLinks, services, siteName } from '../data/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-editorial py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex mb-5" aria-label={siteName}>
              <ArkentraLogo variant="white-full" />
            </Link>
            <p className="text-sm leading-relaxed font-light site-footer__muted">{footerContent.tagline}</p>
          </div>

          <div>
            <h4 className="site-footer__heading mb-5">{footerContent.columns.contact}</h4>
            <div className="text-sm space-y-2.5 font-light">
              <address className="not-italic leading-relaxed">
                {contactAddressLine1}
                <br />
                {contactAddressLine2}
              </address>
              <a href={contactPhoneHref} className="block">
                {contactPhone}
              </a>
              <a href={`mailto:${contactEmail}`} className="block">
                {contactEmail}
              </a>
            </div>
          </div>

          <div>
            <h4 className="site-footer__heading mb-5">{footerContent.columns.quickAccess}</h4>
            <ul className="space-y-2 text-sm font-light">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="site-footer__heading mb-5">{footerContent.columns.services}</h4>
            <ol className="space-y-2 text-sm font-light list-none site-footer__muted">
              {services.slice(0, 4).map((service, i) => (
                <li key={service}>
                  {i + 1}. {service}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="site-footer__divider pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm font-light site-footer__muted">{footerContent.slogan}</p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <Link href="/kvkk" className="text-sm font-light">
              KVKK Aydınlatma Metni
            </Link>
            <p className="text-xs site-footer__muted">
              © {new Date().getFullYear()} {siteName}. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
