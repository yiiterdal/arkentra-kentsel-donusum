import Link from 'next/link';
import type { ReactNode } from 'react';

function renderInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const regex = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (match[2] && match[3]) {
      const href = match[3];
      const isInternal = href.startsWith('/');
      if (isInternal) {
        parts.push(
          <Link key={key++} href={href} className="text-brand-700 font-medium hover:underline">
            {match[2]}
          </Link>,
        );
      } else {
        parts.push(
          <a
            key={key++}
            href={href}
            className="text-brand-700 font-medium hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {match[2]}
          </a>,
        );
      }
    } else if (match[4]) {
      parts.push(
        <strong key={key++} className="font-semibold text-gray-900">
          {match[4]}
        </strong>,
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

function renderTable(block: string, index: number) {
  const rows = block
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('|') && !line.match(/^\|[-\s|:]+\|$/));

  if (rows.length === 0) return null;

  const parseRow = (row: string) =>
    row
      .split('|')
      .slice(1, -1)
      .map((cell) => cell.trim());

  const [header, ...body] = rows.map(parseRow);

  return (
    <div key={index} className="mb-8 overflow-x-auto">
      <table className="w-full min-w-[480px] border-collapse text-left text-base">
        <thead>
          <tr className="border-b-2 border-gray-200 bg-gray-50">
            {header.map((cell) => (
              <th key={cell} className="px-4 py-3 font-semibold text-gray-900">
                {renderInline(cell)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row) => (
            <tr key={row.join('-')} className="border-b border-gray-100">
              {row.map((cell) => (
                <td key={cell} className="px-4 py-3 text-gray-700 font-light">
                  {renderInline(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderBlock(block: string, index: number) {
  const trimmed = block.trim();
  if (!trimmed) return null;

  if (trimmed.startsWith('> ')) {
    const quoteText = trimmed
      .split('\n')
      .map((line) => line.replace(/^>\s?/, ''))
      .join(' ');
    return (
      <blockquote
        key={index}
        className="mb-6 border-l-4 border-brand-500 bg-gray-50 px-5 py-4 text-lg text-gray-700 font-light leading-relaxed"
      >
        {renderInline(quoteText)}
      </blockquote>
    );
  }

  if (trimmed.startsWith('## ')) {
    return (
      <h2
        key={index}
        className="text-2xl font-semibold text-gray-900 mt-10 mb-4 leading-tight"
      >
        {renderInline(trimmed.slice(3))}
      </h2>
    );
  }

  if (trimmed.startsWith('### ')) {
    return (
      <h3
        key={index}
        className="text-xl font-semibold text-gray-900 mt-8 mb-3 leading-snug"
      >
        {renderInline(trimmed.slice(4))}
      </h3>
    );
  }

  const lines = trimmed.split('\n');
  if (lines.every((line) => line.startsWith('- '))) {
    return (
      <ul key={index} className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700 font-light">
        {lines.map((line, i) => (
          <li key={i}>{renderInline(line.slice(2))}</li>
        ))}
      </ul>
    );
  }

  if (lines[0]?.startsWith('|')) {
    return renderTable(trimmed, index);
  }

  return (
    <p key={index} className="text-lg text-gray-700 leading-relaxed mb-6 font-light">
      {renderInline(trimmed)}
    </p>
  );
}

export default function YaziContent({ content }: { content: string }) {
  const blocks = content.split('\n\n').filter(Boolean);
  return <div className="max-w-none">{blocks.map(renderBlock)}</div>;
}
