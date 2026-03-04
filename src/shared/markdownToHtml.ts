const escapeHtml = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const formatInline = (text: string) => {
  const brToken = '__BR_TOKEN__';
  const withBrToken = text.replace(/<br\s*\/?>/gi, brToken);

  return escapeHtml(withBrToken)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>')
    .replace(new RegExp(brToken, 'g'), '<br />');
};

const getListMeta = (line: string) => {
  const match = line.match(/^(\s*)([-*]|\d+\.)\s+(.*)$/);
  if (!match) return null;

  const indent = match[1].replace(/\t/g, '  ').length;
  const type = /^\d+\.$/.test(match[2]) ? 'ol' : 'ul';
  const text = match[3].trim();

  return { indent, type, text };
};

export const markdownToHtml = (markdown: string) => {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const html: string[] = [];
  let i = 0;
  let paragraph: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      html.push(`<p>${formatInline(paragraph.join(' '))}</p>`);
      paragraph = [];
    }
  };

  const parseList = (start: number, baseIndent: number): { html: string; next: number } => {
    const first = getListMeta(lines[start]);
    if (!first) return { html: '', next: start };

    const type = first.type;
    let idx = start;
    let out = `<${type}>`;
    let currentItem = '';

    const pushCurrent = () => {
      if (currentItem) {
        out += `<li>${currentItem}</li>`;
        currentItem = '';
      }
    };

    while (idx < lines.length) {
      const raw = lines[idx];
      if (!raw.trim()) break;

      const meta = getListMeta(raw);
      if (!meta) {
        if (currentItem) currentItem += ` ${formatInline(raw.trim())}`;
        idx += 1;
        continue;
      }

      if (meta.indent < baseIndent) break;

      if (meta.indent > baseIndent) {
        if (!currentItem) break;
        const nested = parseList(idx, meta.indent);
        currentItem += nested.html;
        idx = nested.next;
        continue;
      }

      if (meta.type !== type) break;

      pushCurrent();
      currentItem = formatInline(meta.text);
      idx += 1;
    }

    pushCurrent();
    out += `</${type}>`;

    return { html: out, next: idx };
  };

  while (i < lines.length) {
    const raw = lines[i];
    const trimmed = raw.trim();

    if (!trimmed) {
      flushParagraph();
      i += 1;
      continue;
    }

    const heading = trimmed.match(/^(#{1,3})\s+(.*)$/);
    if (heading) {
      flushParagraph();
      const level = heading[1].length;
      html.push(`<h${level}>${formatInline(heading[2])}</h${level}>`);
      i += 1;
      continue;
    }

    const listMeta = getListMeta(raw);
    if (listMeta) {
      flushParagraph();
      const nested = parseList(i, listMeta.indent);
      html.push(nested.html);
      i = nested.next;
      continue;
    }

    // Single line breaks are treated as spaces; only empty line starts a new paragraph.
    paragraph.push(trimmed);
    i += 1;
  }

  flushParagraph();
  return html.join('\n');
};
