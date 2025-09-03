import React from 'react';

/**
 * Parses markdown-style links in text and converts them to clickable HTML
 * Example: [Link Text](https://example.com) becomes <a href="...">Link Text</a>
 */
export function parseMarkdownLinks(text: string): React.ReactNode[] {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    // Add the link
    parts.push(
      React.createElement(
        'a',
        {
          key: `link-${match.index}`,
          href: match[2],
          target: '_blank',
          rel: 'noopener noreferrer',
          className: 'text-[#448171] hover:underline dark:text-[#16f2b3]',
        },
        match[1]
      )
    );

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text after the last link
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  // If no links were found, return the original text
  if (parts.length === 0) {
    return [text];
  }

  return parts;
}
