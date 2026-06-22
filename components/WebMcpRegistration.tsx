'use client';

import { useEffect } from 'react';

const PAGE_OPTIONS = ['index', 'background', 'work', 'journal', 'contact'] as const;

type ModelContext = {
  provideContext?: (context: unknown) => void | Promise<void>;
};

export default function WebMcpRegistration() {
  useEffect(() => {
    const modelContext = (navigator as Navigator & { modelContext?: ModelContext }).modelContext;

    if (!modelContext?.provideContext) {
      return;
    }

    void modelContext.provideContext({
      tools: [
        {
          name: 'get_site_markdown',
          description: 'Return a public portfolio page as Markdown.',
          inputSchema: {
            type: 'object',
            properties: {
              page: {
                type: 'string',
                enum: PAGE_OPTIONS,
                description: 'The public page to fetch.',
              },
            },
            required: ['page'],
            additionalProperties: false,
          },
          execute: async ({ page }: { page: (typeof PAGE_OPTIONS)[number] }) => {
            const response = await fetch(page === 'index' ? '/index.md' : `/${page}.md`, {
              headers: { accept: 'text/markdown' },
            });

            if (!response.ok) {
              throw new Error(`Failed to fetch ${page}.md: ${response.status}`);
            }

            return await response.text();
          },
        },
      ],
    });
  }, []);

  return null;
}
