import {
  kvkkIntro,
  kvkkSections,
  kvkkTitle,
  type KvkkSection,
  type KvkkTable,
} from '../data/kvkk';

function renderParagraphs(paragraphs: string[] | undefined, keyPrefix: string) {
  if (!paragraphs?.length) return null;
  return paragraphs.map((text, index) => (
    <p
      key={`${keyPrefix}-p-${index}`}
      className="text-base text-gray-600 leading-relaxed font-light mb-4 last:mb-0"
    >
      {text}
    </p>
  ));
}

function renderBullets(bullets: string[] | undefined, keyPrefix: string) {
  if (!bullets?.length) return null;
  return (
    <ul className="list-disc pl-5 space-y-2 text-base text-gray-600 font-light mb-4 last:mb-0">
      {bullets.map((item, index) => (
        <li key={`${keyPrefix}-b-${index}`}>{item}</li>
      ))}
    </ul>
  );
}

function renderTable(table: KvkkTable, key: string) {
  return (
    <div key={key} className="mb-6 overflow-x-auto">
      {table.caption && (
        <p className="text-sm font-semibold text-gray-800 mb-3">{table.caption}</p>
      )}
      <table className="w-full min-w-[640px] text-left text-base border border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {table.headers.map((header) => (
              <th
                key={header}
                className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-900 align-top"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-gray-100 last:border-0">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-3 text-gray-600 font-light align-top leading-relaxed"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderSection(section: KvkkSection) {
  return (
    <article key={section.id} id={section.id} className="scroll-mt-28 border-b border-gray-100 pb-10 mb-10 last:border-0 last:mb-0 last:pb-0">
      <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 leading-snug">
        {section.title}
      </h2>
      {renderParagraphs(section.paragraphs, section.id)}
      {renderBullets(section.bullets, section.id)}
      {section.subsections?.map((sub, subIndex) => (
        <div key={`${section.id}-sub-${subIndex}`} className="mb-6 last:mb-0">
          {sub.title && (
            <h3 className="text-base font-semibold text-gray-800 mb-2">{sub.title}</h3>
          )}
          {renderParagraphs(sub.paragraphs, `${section.id}-sub-${subIndex}`)}
          {renderBullets(sub.bullets, `${section.id}-sub-${subIndex}`)}
        </div>
      ))}
      {section.tables?.map((table, tableIndex) =>
        renderTable(table, `${section.id}-table-${tableIndex}`),
      )}
    </article>
  );
}

export default function KvkkContent() {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 leading-snug">
        {kvkkTitle}
      </h1>
      <p className="text-base text-gray-600 leading-relaxed font-light mb-10">
        {kvkkIntro}
      </p>
      <div className="space-y-0">{kvkkSections.map(renderSection)}</div>
    </div>
  );
}
