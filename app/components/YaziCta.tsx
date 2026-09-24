import Link from 'next/link';
import { contactWhatsAppHref } from '../data/contact';

export default function YaziCta() {
  return (
    <div className="mt-12 rounded-xl bg-gray-900 px-6 py-8 sm:px-8 text-white">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-300 mb-2">
        Ücretsiz ön görüşme
      </p>
      <h2 className="text-xl sm:text-2xl font-semibold mb-3 leading-tight">
        Bu konuda uzman desteği almak ister misiniz?
      </h2>
      <p className="text-gray-300 text-lg font-light mb-6 leading-relaxed">
        Arkentra, müteahhit değil; malikleri temsil eden bağımsız kentsel dönüşüm danışmanlık
        firmasıdır. Binanızın durumunu birlikte değerlendirelim.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href={contactWhatsAppHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#20bd5a]"
        >
          WhatsApp ile yazın
        </a>
        <Link
          href="/iletisim"
          className="inline-flex items-center justify-center rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          İletişim formu
        </Link>
      </div>
    </div>
  );
}
