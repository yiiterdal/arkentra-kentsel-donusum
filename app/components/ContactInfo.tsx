import type { ReactNode } from 'react';
import {
  contactAddressLine1,
  contactAddressLine2,
  contactEmail,
  contactInstagramHandle,
  contactInstagramHref,
  contactMapHref,
  contactPhone,
  contactPhoneHref,
  contactWhatsAppHref,
} from '../data/contact';

function IconPin() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function IconMail() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

type ContactCardProps = {
  icon: ReactNode;
  label: string;
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  variant?: 'default' | 'whatsapp';
  actionLabel?: string;
};

function ContactCard({
  icon,
  label,
  children,
  href,
  external,
  variant = 'default',
  actionLabel,
}: ContactCardProps) {
  const isWhatsApp = variant === 'whatsapp';

  const cardClass = isWhatsApp
    ? 'group relative flex flex-col gap-4 border border-[#25D366]/30 bg-gradient-to-br from-[#f0fdf4] to-white p-6 md:p-7 transition-all duration-200 hover:border-[#25D366]/60 hover:shadow-md'
    : 'group relative flex flex-col gap-4 border border-gray-200 bg-white p-6 md:p-7 transition-all duration-200 hover:border-brand-300 hover:shadow-md';

  const iconWrapClass = isWhatsApp
    ? 'flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white'
    : 'flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700';

  const inner = (
    <>
      <div className="flex items-start gap-4">
        <div className={iconWrapClass}>{icon}</div>
        <div className="min-w-0 flex-1 pt-0.5">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-brand-600 mb-2">
            {label}
          </p>
          <div className="text-gray-700 text-base leading-relaxed font-light">{children}</div>
        </div>
      </div>
      {href && actionLabel && (
        <span
          className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
            isWhatsApp
              ? 'text-[#128C7E] group-hover:text-[#075E54]'
              : 'text-brand-700 group-hover:text-brand-800'
          }`}
        >
          {actionLabel}
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={cardClass}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {inner}
      </a>
    );
  }

  return <div className={cardClass}>{inner}</div>;
}

export default function ContactInfo() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container-editorial">
        <div className="max-w-3xl mb-10 md:mb-12">
          <p className="text-brand-600 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            İletişim bilgileri
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-gray-900 tracking-tight leading-snug mb-4">
            Size en uygun kanaldan ulaşın
          </h2>
          <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
            Kentsel dönüşüm süreciniz hakkında sorularınız için telefon, e-posta veya WhatsApp
            üzerinden bize yazabilirsiniz. En kısa sürede dönüş yapıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          <ContactCard
            icon={<IconPin />}
            label="Adres"
            href={contactMapHref}
            external
            actionLabel="Haritada göster"
          >
            <address className="not-italic">
              {contactAddressLine1}
              <br />
              {contactAddressLine2}
            </address>
          </ContactCard>

          <ContactCard
            icon={<IconPhone />}
            label="Telefon"
            href={contactPhoneHref}
            actionLabel="Hemen ara"
          >
            <span className="text-gray-900 font-medium text-lg tracking-tight">{contactPhone}</span>
          </ContactCard>

          <ContactCard
            icon={<IconMail />}
            label="E-posta"
            href={`mailto:${contactEmail}`}
            actionLabel="E-posta gönder"
          >
            <span className="break-all text-gray-900 font-medium">{contactEmail}</span>
          </ContactCard>

          <ContactCard
            icon={<IconInstagram />}
            label="Instagram"
            href={contactInstagramHref}
            external
            actionLabel="Profili aç"
          >
            <span className="text-gray-900 font-medium">{contactInstagramHandle}</span>
          </ContactCard>

          <ContactCard
            icon={<IconWhatsApp />}
            label="WhatsApp"
            href={contactWhatsAppHref}
            external
            variant="whatsapp"
            actionLabel="Mesaj gönder"
          >
            <p>
              Hızlı yanıt için WhatsApp üzerinden yazın.
              <span className="mt-1 block text-sm text-gray-500">Hafta içi 09:00 – 18:00</span>
            </p>
          </ContactCard>
        </div>

        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href={contactWhatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2.5 px-6 py-3.5 bg-[#25D366] text-white text-sm font-semibold transition-all hover:bg-[#20bd5a] hover:shadow-md"
          >
            <IconWhatsApp />
            WhatsApp ile yazın
          </a>
          <a
            href={contactPhoneHref}
            className="inline-flex flex-1 items-center justify-center gap-2.5 px-6 py-3.5 border-2 border-brand-600 text-brand-700 bg-white text-sm font-semibold transition-all hover:bg-brand-600 hover:text-white hover:shadow-md"
          >
            <IconPhone />
            {contactPhone}
          </a>
        </div>
      </div>
    </section>
  );
}
