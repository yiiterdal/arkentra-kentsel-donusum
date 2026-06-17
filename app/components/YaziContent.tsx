function renderBlock(block: string, index: number) {
  const trimmed = block.trim();
  if (!trimmed) return null;

  if (trimmed.startsWith('## ')) {
    return (
      <h2
        key={index}
        className="text-2xl font-semibold text-gray-900 mt-10 mb-4 leading-tight"
      >
        {trimmed.slice(3)}
      </h2>
    );
  }

  if (trimmed.startsWith('### ')) {
    return (
      <h3
        key={index}
        className="text-xl font-semibold text-gray-900 mt-8 mb-3 leading-snug"
      >
        {trimmed.slice(4)}
      </h3>
    );
  }

  const lines = trimmed.split('\n');
  if (lines.every((line) => line.startsWith('- '))) {
    return (
      <ul key={index} className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700 font-light">
        {lines.map((line) => (
          <li key={line}>{line.slice(2)}</li>
        ))}
      </ul>
    );
  }

  return (
    <p key={index} className="text-lg text-gray-700 leading-relaxed mb-6 font-light">
      {trimmed}
    </p>
  );
}

export default function YaziContent({ content }: { content: string }) {
  const blocks = content.split('\n\n').filter(Boolean);
  return <div className="max-w-none">{blocks.map(renderBlock)}</div>;
}
