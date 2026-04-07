import type { ArticleSection } from "../lib/content";

/* ═══════════════════════════════════════
   Renders article sections as HTML prose.
   Handles markdown-like formatting:
   - **bold** → <strong>
   - `code` → <code>
   - Lines starting with - → <li>
   - Lines starting with 1. → <ol><li>
   - Empty lines → paragraph break
   ═══════════════════════════════════════ */

function renderBody(body: string): string {
  const lines = body.split("\n");
  let html = "";
  let inUl = false;
  let inOl = false;

  for (const line of lines) {
    const trimmed = line.trim();

    // Close lists if needed
    if (!trimmed.startsWith("- ") && inUl) {
      html += "</ul>";
      inUl = false;
    }
    if (!/^\d+\.\s/.test(trimmed) && inOl) {
      html += "</ol>";
      inOl = false;
    }

    if (trimmed === "") {
      continue;
    } else if (trimmed.startsWith("- ")) {
      if (!inUl) {
        html += "<ul>";
        inUl = true;
      }
      html += `<li>${inlineFormat(trimmed.slice(2))}</li>`;
    } else if (/^\d+\.\s/.test(trimmed)) {
      if (!inOl) {
        html += "<ol>";
        inOl = true;
      }
      html += `<li>${inlineFormat(trimmed.replace(/^\d+\.\s/, ""))}</li>`;
    } else {
      html += `<p>${inlineFormat(trimmed)}</p>`;
    }
  }

  if (inUl) html += "</ul>";
  if (inOl) html += "</ol>";

  return html;
}

function inlineFormat(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`(.+?)`/g, "<code>$1</code>");
}

export function ArticleRenderer({
  sections,
}: {
  sections: ArticleSection[];
}) {
  return (
    <div className="prose">
      {sections.map((section, i) => (
        <div key={i}>
          <h2 id={slugify(section.heading)}>{section.heading}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: renderBody(section.body) }}
          />
        </div>
      ))}
    </div>
  );
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function TableOfContents({
  sections,
  label = "On this page",
}: {
  sections: ArticleSection[];
  label?: string;
}) {
  return (
    <nav className="hidden xl:block w-[200px] shrink-0">
      <div className="sticky top-[calc(var(--header-h)+2rem)]">
        <p className="text-[var(--text-xs)] text-t3 uppercase tracking-wider font-heading font-bold mb-3">
          {label}
        </p>
        <ul className="space-y-1.5">
          {sections.map((section, i) => (
            <li key={i}>
              <a
                href={`#${slugify(section.heading)}`}
                className="block text-[var(--text-sm)] text-t3 hover:text-t1 transition-colors leading-snug"
              >
                {section.heading}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
