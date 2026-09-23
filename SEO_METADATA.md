# SEO & Metadata : ARKENTRA Kentsel Dönüşüm

## Canlı site
- **Domain:** `https://www.arkentrakentseldonusum.com` (`.env` içinde `NEXT_PUBLIC_SITE_URL` ile override edilebilir)
- **Dil:** Türkçe (`lang="tr"`)
- **Konum:** İstanbul

## Ana metadata
- **Title:** ARKENTRA Kentsel Dönüşüm
- **Description:** İstanbul merkezli bağımsız malik temsilcisi. Riskli yapı tespiti, kat karşılığı sözleşmesi, 6306 süreçleri.

## Birincil anahtar kelimeler
- kentsel dönüşüm danışmanlığı İstanbul
- kentsel dönüşüm danışmanlığı İstanbul
- riskli yapı tespiti danışmanlığı
- malik temsilciliği kentsel dönüşüm
- kat karşılığı inşaat sözleşmesi danışmanlığı
- 6306 sayılı kanun danışmanlığı
- kira yardımı başvurusu kentsel dönüşüm

## İkincil / long-tail (Autocomplete araştırması : Temmuz 2026)
- kat malikleri toplantısı nasıl yapılır → `/yazilarimiz/kat-malikleri-toplantisi-nasil-yapilir-2026`
- malik temsilcisi kentsel dönüşüm nedir → `/yazilarimiz/malik-temsilcisi-kentsel-donusum-nedir`
- kentsel dönüşüm istatistikleri 2026 → `/yazilarimiz/kentsel-donusum-kaynak-rehberi-2026` (backlink kaynağı)
- riskli yapı tespitine itiraz → `/yazilarimiz/riskli-yapi-tespitine-nasil-itiraz-edilir`
- kat karşılığı sözleşmesinde dikkat edilecekler → `/yazilarimiz/2026-kat-karsiligi-insaat-sozlesmesi-rehberi`
- kentsel dönüşüm kira yardımı 2026 → `/yazilarimiz/2026-kentsel-donusum-kira-yardimi-istanbul-guncel-rakamlar`

## Teknik SEO (uygulandı)
- `app/sitemap.ts` : tüm canlı rotalar + hizmet alt sayfaları + yazılar
- `app/robots.ts` : sitemap referansı
- `app/layout.tsx` : `metadataBase`, Open Graph, Twitter Card, title template
- JSON-LD: Organization/LocalBusiness, Person (kurucular), FAQPage, Service/OfferCatalog, Article, BreadcrumbList
- `/public/images/og-default.jpg` : varsayılan paylaşım görseli
- Yazı sayfalarında **Kısa cevap** özeti (`YaziSummary`), WhatsApp CTA (`YaziCta`), tablo ve iç link desteği (`YaziContent`)

## Sayfa bazlı notlar
| Sayfa | SEO odağı |
|-------|-----------|
| `/` | kentsel dönüşüm danışmanlığı, malik temsilciliği |
| `/hizmetler` + `/hizmetler/[slug]` | hizmet bazlı long-tail |
| `/yazilarimiz/[slug]` | rehber/haber içerikleri, Article schema |
| `/yazilarimiz/kentsel-donusum-kaynak-rehberi-2026` | backlink kaynağı, istatistik tabloları |
| `/sss` | FAQPage schema, SSS zengin sonuçları |
| `/ekibimiz` | E-E-A-T, kurucu Person schema |
| `/hakkimizda` | marka güveni, yerel otorite |

## Yayın sonrası : SİZİN YAPMANIZ GEREKENLER (kod dışı)
1. **Google Search Console** : domain doğrula, `/sitemap.xml` gönder
2. **Bing Webmaster Tools** : sitemap gönder
3. **Google Business Profile** : İstanbul adresi, telefon, WhatsApp, çalışma saatleri
4. **Kaynak rehberini paylaş** : LinkedIn'de `/yazilarimiz/kentsel-donusum-kaynak-rehberi-2026` linkini paylaşın
5. **Yazı cadence** : 2–3 haftada bir yeni `/yazilarimiz` rehberi

## Kaçınılacak terimler
- Genel “inşaat firması” / “müteahhit” vurgusu (Arkentra müteahhit değil, malik temsilcisidir)
- İstanbul dışı şehir hedeflemesi (henüz hizmet alanı İstanbul odaklı)
