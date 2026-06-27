# SEO & Metadata — ARKENTRA Kentsel Dönüşüm

## Canlı site
- **Domain:** `https://www.arkentrakentseldonusum.com` (`.env` içinde `NEXT_PUBLIC_SITE_URL` ile override edilebilir)
- **Dil:** Türkçe (`lang="tr"`)
- **Konum:** Bayrampaşa, İstanbul

## Ana metadata
- **Title:** ARKENTRA Kentsel Dönüşüm
- **Description:** İstanbul Bayrampaşa merkezli bağımsız malik temsilcisi. Riskli yapı tespiti, kat karşılığı sözleşmesi, 6306 süreçleri.

## Birincil anahtar kelimeler
- kentsel dönüşüm danışmanlığı İstanbul
- kentsel dönüşüm danışmanlığı Bayrampaşa
- riskli yapı tespiti danışmanlığı
- malik temsilciliği kentsel dönüşüm
- kat karşılığı inşaat sözleşmesi danışmanlığı
- 6306 sayılı kanun danışmanlığı
- kira yardımı başvurusu kentsel dönüşüm

## İkincil / long-tail
- riskli yapı tespitine itiraz
- kat malikleri toplantısı organizasyonu
- müteahhit sözleşmesi kontrol
- aşamalı teknik denetim kentsel dönüşüm
- kentsel dönüşüm hukuki danışmanlık İstanbul

## Teknik SEO (uygulandı)
- `app/sitemap.ts` — tüm canlı rotalar + hizmet alt sayfaları + yazılar
- `app/robots.ts` — sitemap referansı
- `app/layout.tsx` — `metadataBase`, Open Graph, Twitter Card, title template
- JSON-LD: Organization/LocalBusiness, Person (kurucular), FAQPage, Service/OfferCatalog, Article, BreadcrumbList
- `/public/images/og-default.jpg` — varsayılan paylaşım görseli

## Sayfa bazlı notlar
| Sayfa | SEO odağı |
|-------|-----------|
| `/` | kentsel dönüşüm danışmanlığı, malik temsilciliği |
| `/hizmetler` + `/hizmetler/[slug]` | hizmet bazlı long-tail |
| `/yazilarimiz/[slug]` | rehber/haber içerikleri, Article schema |
| `/sss` | FAQPage schema, SSS zengin sonuçları |
| `/ekibimiz` | E-E-A-T, kurucu Person schema |
| `/hakkimizda` | marka güveni, yerel otorite |

## Yayın sonrası yapılacaklar (kod dışı)
1. **Google Search Console** — domain doğrula, `/sitemap.xml` gönder
2. **Bing Webmaster Tools** — sitemap gönder
3. **Google Business Profile** — Bayrampaşa adresi, telefon, WhatsApp, çalışma saatleri
4. **Yazı cadence** — 2–3 haftada bir `/yazilarimiz` rehberi; ilgili `/hizmetler/*` sayfasına iç link

## Kaçınılacak terimler
- Genel “inşaat firması” / “müteahhit” vurgusu (Arkentra müteahhit değil, malik temsilcisidir)
- İstanbul dışı şehir hedeflemesi (henüz hizmet alanı İstanbul odaklı)
