export default function YaziSummary({ text }: { text: string }) {
  return (
    <aside
      className="mb-8 rounded-lg border-l-4 border-brand-600 bg-brand-50 px-5 py-4"
      aria-label="Kısa cevap"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-700 mb-2">
        Kısa cevap
      </p>
      <p className="text-lg text-gray-800 leading-relaxed font-light">{text}</p>
    </aside>
  );
}
