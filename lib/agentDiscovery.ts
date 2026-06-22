import { contactInfo } from '@/data/contact';
import { PAGES, SITE_URL, llmsFullTxt, llmsTxt, pageMarkdown } from '@/lib/agent';

export const DISCOVERY_CACHE_CONTROL =
  'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800';

export const AGENT_SKILL_PATH = '/.well-known/agent-skills/site-profile/SKILL.md';
export const AGENT_SKILL_DIGEST =
  'sha256:082b2e0653c325327d61edc5707ec4e939f7fc91672c4bbec6bda085d18dd637';

const MCP_PROTOCOL_VERSION = '2025-06-18';

const AI_AGENTS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Amazonbot',
  'Bytespider',
  'CCBot',
  'Meta-ExternalAgent',
  'cohere-ai',
  'DuckAssistBot',
  'Diffbot',
  'YouBot',
  'Timpibot',
];

const jsonHeaders = (contentType = 'application/json; charset=utf-8') => ({
  'access-control-allow-origin': '*',
  'cache-control': DISCOVERY_CACHE_CONTROL,
  'content-type': contentType,
});

export function jsonResponse(body: unknown, contentType?: string): Response {
  return new Response(JSON.stringify(body, null, 2) + '\n', {
    headers: jsonHeaders(contentType),
  });
}

export function robotsTxt(): string {
  return [
    'User-Agent: *',
    'Allow: /',
    '',
    ...AI_AGENTS.flatMap((agent) => [`User-Agent: ${agent}`]),
    'Allow: /',
    '',
    'Content-Signal: ai-train=no, search=yes, ai-input=yes',
    '',
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    `Host: ${new URL(SITE_URL).host}`,
    '',
  ].join('\n');
}

export function apiCatalog() {
  return {
    linkset: [
      {
        anchor: `${SITE_URL}/.well-known/api-catalog`,
        item: [
          {
            href: `${SITE_URL}/openapi.json`,
            type: 'application/vnd.oai.openapi+json;version=3.1',
            title: 'OpenAPI description for public read-only content routes',
          },
          {
            href: `${SITE_URL}/llms.txt`,
            type: 'text/plain',
            title: 'LLMs index',
          },
          {
            href: `${SITE_URL}/llms-full.txt`,
            type: 'text/plain',
            title: 'Full site text for language models',
          },
        ],
        'service-desc': [
          {
            href: `${SITE_URL}/openapi.json`,
            type: 'application/vnd.oai.openapi+json;version=3.1',
          },
        ],
        'service-doc': [
          {
            href: `${SITE_URL}/llms.txt`,
            type: 'text/plain',
          },
          {
            href: `${SITE_URL}/auth.md`,
            type: 'text/markdown',
          },
        ],
        status: [
          {
            href: `${SITE_URL}/.well-known/status.json`,
            type: 'application/json',
          },
        ],
      },
    ],
  } as const;
}

const textResponse = (description: string, mediaType: string) => ({
  description,
  content: {
    [mediaType]: {
      schema: { type: 'string' },
    },
  },
});

export function openApiDocument() {
  const markdownPaths = Object.fromEntries(
    PAGES.map((page) => [
      page.md,
      {
        get: {
          operationId: `get${page.slug[0].toUpperCase()}${page.slug.slice(1)}Markdown`,
          summary: `Get ${page.title} as Markdown`,
          description: page.description,
          responses: {
            '200': textResponse('Markdown document', 'text/markdown; charset=utf-8'),
          },
        },
      },
    ])
  );

  return {
    openapi: '3.1.0',
    info: {
      title: 'nguyenvanloc.com public content API',
      version: '1.0.0',
      description:
        'Read-only machine-readable routes for the public portfolio, profile, projects, publications, journal, and contact pages.',
    },
    servers: [{ url: SITE_URL }],
    paths: {
      '/llms.txt': {
        get: {
          operationId: 'getLlmsTxt',
          summary: 'Get the concise LLM index',
          responses: {
            '200': textResponse('Plain text LLM index', 'text/plain; charset=utf-8'),
          },
        },
      },
      '/llms-full.txt': {
        get: {
          operationId: 'getLlmsFullTxt',
          summary: 'Get the full site text for language models',
          responses: {
            '200': textResponse('Plain text full-site export', 'text/plain; charset=utf-8'),
          },
        },
      },
      '/.well-known/api-catalog': {
        get: {
          operationId: 'getApiCatalog',
          summary: 'Get the API catalog linkset',
          responses: {
            '200': {
              description: 'API catalog linkset',
              content: {
                'application/linkset+json': {
                  schema: { type: 'object' },
                },
              },
            },
          },
        },
      },
      ...markdownPaths,
    },
  } as const;
}

export function statusDocument() {
  return {
    status: 'ok',
    service: 'nguyenvanloc.com public content',
    documentation: `${SITE_URL}/llms.txt`,
  } as const;
}

export function authMarkdown(): string {
  return `# Auth.md for nguyenvanloc.com

nguyenvanloc.com is a public portfolio and research profile. Agents do not need to register, authenticate, or request OAuth credentials to read the public content routes.

## Public resources

- Site index for agents: ${SITE_URL}/llms.txt
- Full text export: ${SITE_URL}/llms-full.txt
- API catalog: ${SITE_URL}/.well-known/api-catalog
- OpenAPI description: ${SITE_URL}/openapi.json
- MCP endpoint: ${SITE_URL}/mcp

## Agent authentication

- Registration required: no
- OAuth required: no
- Protected scopes: none
- Contact for access questions: ${contactInfo.email}

If protected APIs are added later, this file and the OAuth well-known metadata will be updated with registration and token instructions.
`;
}

export function oauthProtectedResourceMetadata() {
  return {
    resource: SITE_URL,
    resource_name: 'nguyenvanloc.com public content',
    authorization_servers: [],
    scopes_supported: [],
    resource_documentation: `${SITE_URL}/auth.md`,
  } as const;
}

export function agentSkillsIndex() {
  return {
    $schema: 'https://schemas.agentskills.io/discovery/0.2.0/schema.json',
    skills: [
      {
        name: 'nguyenvanloc-site-profile',
        type: 'skill-md',
        description:
          'Use the public machine-readable portfolio routes to answer questions about Van-Loc Nguyen.',
        url: AGENT_SKILL_PATH,
        digest: AGENT_SKILL_DIGEST,
      },
    ],
  } as const;
}

export function mcpServerCard() {
  return {
    serverInfo: {
      name: 'nguyenvanloc-public-profile',
      title: 'nguyenvanloc.com Public Profile',
      version: '1.0.0',
    },
    protocolVersion: MCP_PROTOCOL_VERSION,
    transport: {
      type: 'streamable-http',
      endpoint: `${SITE_URL}/mcp`,
    },
    authorization: {
      type: 'none',
    },
    capabilities: {
      resources: {
        listChanged: false,
      },
      tools: {
        listChanged: false,
      },
    },
    description:
      'Read-only MCP surface for public portfolio Markdown, LLM text exports, projects, publications, journal, and contact information.',
  } as const;
}

type ResourceEntry = {
  uri: string;
  name: string;
  title: string;
  description: string;
  mimeType: string;
  read: () => string;
};

export function mcpResources(): ResourceEntry[] {
  return [
    {
      uri: `${SITE_URL}/llms.txt`,
      name: 'llms.txt',
      title: 'LLMs index',
      description: 'Concise index of all machine-readable site resources.',
      mimeType: 'text/plain',
      read: llmsTxt,
    },
    {
      uri: `${SITE_URL}/llms-full.txt`,
      name: 'llms-full.txt',
      title: 'Full site text',
      description: 'All public pages concatenated into one text document.',
      mimeType: 'text/plain',
      read: llmsFullTxt,
    },
    ...PAGES.map((page) => ({
      uri: `${SITE_URL}${page.md}`,
      name: page.slug,
      title: page.title,
      description: page.description,
      mimeType: 'text/markdown',
      read: () => pageMarkdown(page.slug),
    })),
  ];
}

export function mcpToolDefinitions() {
  return [
    {
      name: 'get_site_markdown',
      title: 'Get Site Markdown',
      description: 'Return a public portfolio page as Markdown.',
      inputSchema: {
        type: 'object',
        properties: {
          page: {
            type: 'string',
            enum: PAGES.map((page) => page.slug),
            description: 'The page to return.',
          },
        },
        required: ['page'],
        additionalProperties: false,
      },
      annotations: {
        readOnlyHint: true,
        openWorldHint: false,
      },
    },
  ] as const;
}

export function callMcpTool(name: string, args: unknown) {
  if (name !== 'get_site_markdown') {
    return null;
  }

  const pageName =
    args && typeof args === 'object' && 'page' in args ? (args as { page?: unknown }).page : undefined;
  const page = PAGES.find((entry) => entry.slug === pageName);

  if (!page) {
    return {
      content: [
        {
          type: 'text',
          text: `Unknown page. Choose one of: ${PAGES.map((entry) => entry.slug).join(', ')}.`,
        },
      ],
      isError: true,
    };
  }

  return {
    content: [
      {
        type: 'text',
        text: pageMarkdown(page.slug),
      },
    ],
    isError: false,
  };
}
