'use client';

import { useRef, useState } from 'react';

type Teklif = {
  ad: string;
  netM2: string;
  ekOdeme: string;
  teslimAy: string;
  kiraDestegi: string;
  gecikmeCezasi: string;
  teminat: string;
  sigorta: boolean;
  asamaliTapu: boolean;
  sartname: boolean;
  referans: string;
};

const bosTeklif = (ad: string): Teklif => ({
  ad,
  netM2: '',
  ekOdeme: '',
  teslimAy: '',
  kiraDestegi: '',
  gecikmeCezasi: '',
  teminat: '',
  sigorta: false,
  asamaliTapu: false,
  sartname: false,
  referans: '',
});

type NumKey = 'netM2' | 'ekOdeme' | 'teslimAy' | 'kiraDestegi' | 'gecikmeCezasi' | 'teminat' | 'referans';
type BoolKey = 'sigorta' | 'asamaliTapu' | 'sartname';

const sayiAlanlari: { key: NumKey; label: string; birim: string; enIyi: 'max' | 'min' }[] = [
  { key: 'netM2', label: 'Maliklere teslim edilecek toplam net alan', birim: 'm²', enIyi: 'max' },
  { key: 'ekOdeme', label: 'Maliklerin ödeyeceği toplam ek bedel', birim: 'TL', enIyi: 'min' },
  { key: 'teslimAy', label: 'Teslim süresi', birim: 'ay', enIyi: 'min' },
  { key: 'kiraDestegi', label: 'Müteahhidin aylık kira desteği (daire başı)', birim: 'TL', enIyi: 'max' },
  { key: 'gecikmeCezasi', label: 'Aylık gecikme cezası (daire başı)', birim: 'TL', enIyi: 'max' },
  { key: 'teminat', label: 'Teminat mektubu tutarı', birim: 'TL', enIyi: 'max' },
  { key: 'referans', label: 'İskânı alınmış tamamlanmış proje sayısı', birim: 'adet', enIyi: 'max' },
];

const evetHayirAlanlari: { key: BoolKey; label: string }[] = [
  { key: 'sigorta', label: 'Bina tamamlama sigortası var' },
  { key: 'asamaliTapu', label: 'Müteahhide tapu devri inşaat ilerlemesine bağlı' },
  { key: 'sartname', label: 'Marka ve model yazılı teknik şartname var' },
];

const sayi = (value: string): number | null => {
  const cleaned = value.replace(/\./g, '').replace(',', '.').trim();
  if (cleaned === '') return null;
  const parsed = Number(cleaned);
  return Number.isFinite(parsed) ? parsed : null;
};

const bicimle = (value: number | null, birim: string) =>
  value === null ? '—' : `${value.toLocaleString('tr-TR')} ${birim}`;

function guvenceSkoru(t: Teklif): number {
  const teminat = sayi(t.teminat) ?? 0;
  const gecikme = sayi(t.gecikmeCezasi) ?? 0;
  return [teminat > 0, gecikme > 0, t.sigorta, t.asamaliTapu, t.sartname].filter(Boolean).length;
}

function uyarilar(t: Teklif, mevcutM2: number | null): string[] {
  const list: string[] = [];
  const teminat = sayi(t.teminat);
  const gecikme = sayi(t.gecikmeCezasi);
  const kira = sayi(t.kiraDestegi);
  const teslim = sayi(t.teslimAy);
  const netM2 = sayi(t.netM2);
  const referans = sayi(t.referans);

  if (!teminat) list.push('Teminat mektubu yok. İş yarım kalırsa malikleri koruyacak nakdi güvence bulunmuyor.');
  if (!gecikme) list.push('Gecikme cezası belirtilmemiş. Teslim gecikirse kira masrafı maliklere kalır.');
  else if (kira && gecikme < kira)
    list.push('Gecikme cezası, aylık kira desteğinden düşük. Gecikmek müteahhit için daha ucuz olabilir.');
  if (!t.asamaliTapu)
    list.push('Müteahhide tapu devri inşaat ilerlemesine bağlanmamış. Daireler iş bitmeden satılabilir.');
  if (!t.sartname)
    list.push('Teknik şartnamede marka ve model yazılı değil. “Birinci sınıf malzeme” ifadesi denetlenemez.');
  if (!t.sigorta) list.push('Bina tamamlama sigortası yok.');
  if (teslim !== null && teslim > 36) list.push('Teslim süresi 36 aydan uzun.');
  if (referans === 0) list.push('İskânı alınmış tamamlanmış proje referansı yok.');
  if (mevcutM2 && netM2 !== null && netM2 < mevcutM2)
    list.push('Maliklere teslim edilecek alan, bugünkü toplam alandan küçük.');
  return list;
}

export default function TeklifKarsilastirma() {
  const [teklifler, setTeklifler] = useState<Teklif[]>([
    bosTeklif('Teklif A'),
    bosTeklif('Teklif B'),
    bosTeklif('Teklif C'),
  ]);
  const [mevcutM2Text, setMevcutM2Text] = useState('');
  const tracked = useRef(false);

  const track = () => {
    if (tracked.current || typeof window === 'undefined') return;
    tracked.current = true;
    const w = window as typeof window & { dataLayer?: Record<string, unknown>[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: 'teklif_karsilastirma_kullanim' });
  };

  const guncelle = <K extends keyof Teklif>(index: number, key: K, value: Teklif[K]) => {
    track();
    setTeklifler((prev) => prev.map((t, i) => (i === index ? { ...t, [key]: value } : t)));
  };

  const mevcutM2 = sayi(mevcutM2Text);
  const doluMu = teklifler.some((t) => sayiAlanlari.some((alan) => sayi(t[alan.key]) !== null));

  const enIyiIndeksler = (key: NumKey, enIyi: 'max' | 'min') => {
    const values = teklifler.map((t) => sayi(t[key]));
    const dolu = values.filter((v): v is number => v !== null);
    if (dolu.length < 2) return new Set<number>();
    const hedef = enIyi === 'max' ? Math.max(...dolu) : Math.min(...dolu);
    if (dolu.every((v) => v === hedef)) return new Set<number>();
    return new Set(values.flatMap((v, i) => (v === hedef ? [i] : [])));
  };

  const inputClass =
    'w-full border border-gray-200 bg-white px-3 py-2 text-base text-gray-900 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500';

  return (
    <div>
      <div className="mb-8 max-w-md print:hidden">
        <label htmlFor="mevcut-m2" className="block text-sm font-medium text-gray-700 mb-1.5">
          Bugünkü toplam net alanınız (isteğe bağlı, m²)
        </label>
        <input
          id="mevcut-m2"
          inputMode="decimal"
          className={inputClass}
          value={mevcutM2Text}
          onChange={(e) => {
            track();
            setMevcutM2Text(e.target.value);
          }}
          placeholder="Örn. 1200"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 print:hidden">
        {teklifler.map((teklif, index) => (
          <fieldset key={index} className="border border-gray-200 bg-white p-5">
            <legend className="sr-only">{teklif.ad || `Teklif ${index + 1}`}</legend>
            <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor={`ad-${index}`}>
              Müteahhit / teklif adı
            </label>
            <input
              id={`ad-${index}`}
              className={`${inputClass} mb-4 font-semibold`}
              value={teklif.ad}
              onChange={(e) => guncelle(index, 'ad', e.target.value)}
            />
            <div className="space-y-4">
              {sayiAlanlari.map((alan) => (
                <div key={alan.key}>
                  <label
                    className="block text-sm text-gray-600 mb-1"
                    htmlFor={`${alan.key}-${index}`}
                  >
                    {alan.label} ({alan.birim})
                  </label>
                  <input
                    id={`${alan.key}-${index}`}
                    inputMode="decimal"
                    className={inputClass}
                    value={teklif[alan.key]}
                    onChange={(e) => guncelle(index, alan.key, e.target.value)}
                  />
                </div>
              ))}
              {evetHayirAlanlari.map((alan) => (
                <label key={alan.key} className="flex items-start gap-3 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 accent-brand-600"
                    checked={teklif[alan.key]}
                    onChange={(e) => guncelle(index, alan.key, e.target.checked)}
                  />
                  {alan.label}
                </label>
              ))}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="mt-12" aria-live="polite">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-5">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-gray-900">
            Karşılaştırma sonucu
          </h2>
          <button
            type="button"
            onClick={() => window.print()}
            className="border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:border-gray-500 print:hidden"
          >
            Yazdır / PDF olarak kaydet
          </button>
        </div>

        {!doluMu ? (
          <p className="text-lg text-gray-600 font-light">
            Tekliflerdeki rakamları girdikçe karşılaştırma tablosu burada oluşur.
          </p>
        ) : (
          <>
            <div className="overflow-x-auto border border-gray-200">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-gray-700">Kriter</th>
                    {teklifler.map((t, i) => (
                      <th key={i} className="px-4 py-3 font-semibold text-gray-900">
                        {t.ad || `Teklif ${i + 1}`}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {sayiAlanlari.map((alan) => {
                    const enIyi = enIyiIndeksler(alan.key, alan.enIyi);
                    return (
                      <tr key={alan.key}>
                        <th scope="row" className="px-4 py-3 font-normal text-gray-600">
                          {alan.label}
                        </th>
                        {teklifler.map((t, i) => (
                          <td
                            key={i}
                            className={`px-4 py-3 tabular-nums ${
                              enIyi.has(i) ? 'bg-brand-50 font-semibold text-brand-800' : 'text-gray-900'
                            }`}
                          >
                            {bicimle(sayi(t[alan.key]), alan.birim)}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                  {mevcutM2 ? (
                    <tr>
                      <th scope="row" className="px-4 py-3 font-normal text-gray-600">
                        Bugünkü alana göre değişim
                      </th>
                      {teklifler.map((t, i) => {
                        const net = sayi(t.netM2);
                        return (
                          <td key={i} className="px-4 py-3 tabular-nums text-gray-900">
                            {net === null
                              ? '—'
                              : `%${(((net - mevcutM2) / mevcutM2) * 100).toLocaleString('tr-TR', {
                                  maximumFractionDigits: 1,
                                })}`}
                          </td>
                        );
                      })}
                    </tr>
                  ) : null}
                  {evetHayirAlanlari.map((alan) => (
                    <tr key={alan.key}>
                      <th scope="row" className="px-4 py-3 font-normal text-gray-600">
                        {alan.label}
                      </th>
                      {teklifler.map((t, i) => (
                        <td
                          key={i}
                          className={`px-4 py-3 ${t[alan.key] ? 'text-brand-800 font-medium' : 'text-red-700'}`}
                        >
                          {t[alan.key] ? 'Evet' : 'Hayır'}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr className="bg-gray-50">
                    <th scope="row" className="px-4 py-3 font-semibold text-gray-900">
                      Güvence skoru
                    </th>
                    {teklifler.map((t, i) => (
                      <td key={i} className="px-4 py-3 font-semibold text-gray-900 tabular-nums">
                        {guvenceSkoru(t)} / 5
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-gray-500">
              Vurgulanan hücreler, o satırda maliklerin lehine olan en iyi değeri gösterir. Güvence
              skoru; teminat mektubu, gecikme cezası, tamamlama sigortası, aşamalı tapu devri ve
              markalı teknik şartnamenin varlığını sayar.
            </p>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
              {teklifler.map((t, i) => {
                const list = uyarilar(t, mevcutM2);
                return (
                  <div key={i} className="border border-gray-200 p-5">
                    <h3 className="text-base font-semibold text-gray-900 mb-3">
                      {t.ad || `Teklif ${i + 1}`}: dikkat edilecekler
                    </h3>
                    {list.length === 0 ? (
                      <p className="text-sm text-gray-600">Temel güvence kontrollerinde eksik görünmüyor.</p>
                    ) : (
                      <ul className="space-y-2 text-sm text-gray-700">
                        {list.map((u) => (
                          <li key={u} className="flex gap-2">
                            <span className="text-red-600" aria-hidden="true">
                              !
                            </span>
                            {u}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
