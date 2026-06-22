import {
  callMcpTool,
  jsonResponse,
  mcpResources,
  mcpToolDefinitions,
} from '@/lib/agentDiscovery';

const RPC_HEADERS = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'POST, GET, OPTIONS',
  'access-control-allow-headers': 'content-type, accept, mcp-protocol-version',
};

function rpcResult(id: unknown, result: unknown): Response {
  return Response.json({ jsonrpc: '2.0', id, result }, { headers: RPC_HEADERS });
}

function rpcError(id: unknown, code: number, message: string, data?: unknown): Response {
  return Response.json({ jsonrpc: '2.0', id, error: { code, message, data } }, { headers: RPC_HEADERS });
}

function resourceMetadata() {
  return mcpResources().map((resource) => ({
    uri: resource.uri,
    name: resource.name,
    title: resource.title,
    description: resource.description,
    mimeType: resource.mimeType,
  }));
}

export function OPTIONS() {
  return new Response(null, { status: 204, headers: RPC_HEADERS });
}

export function GET() {
  return new Response('This MCP endpoint accepts JSON-RPC messages over HTTP POST.\n', {
    status: 405,
    headers: { ...RPC_HEADERS, allow: 'POST, OPTIONS' },
  });
}

export async function POST(request: Request) {
  let message: unknown;

  try {
    message = await request.json();
  } catch {
    return rpcError(null, -32700, 'Parse error');
  }

  if (!message || typeof message !== 'object' || Array.isArray(message)) {
    return rpcError(null, -32600, 'Invalid Request');
  }

  const rpc = message as { id?: unknown; method?: unknown; params?: unknown };

  if (typeof rpc.method !== 'string') {
    return rpcError(rpc.id ?? null, -32600, 'Invalid Request');
  }

  if (!('id' in rpc)) {
    return new Response(null, { status: 202, headers: RPC_HEADERS });
  }

  switch (rpc.method) {
    case 'initialize':
      return rpcResult(rpc.id, {
        protocolVersion: '2025-06-18',
        capabilities: {
          resources: { listChanged: false },
          tools: { listChanged: false },
        },
        serverInfo: {
          name: 'nguyenvanloc-public-profile',
          title: 'nguyenvanloc.com Public Profile',
          version: '1.0.0',
        },
        instructions:
          'Use this read-only MCP server for public information about Van-Loc Nguyen. No authentication is required.',
      });

    case 'ping':
      return rpcResult(rpc.id, {});

    case 'resources/list':
      return rpcResult(rpc.id, { resources: resourceMetadata() });

    case 'resources/read': {
      const uri =
        rpc.params && typeof rpc.params === 'object' && 'uri' in rpc.params
          ? (rpc.params as { uri?: unknown }).uri
          : undefined;
      const resource = mcpResources().find((entry) => entry.uri === uri);

      if (!resource) {
        return rpcError(rpc.id, -32002, 'Resource not found', { uri });
      }

      return rpcResult(rpc.id, {
        contents: [
          {
            uri: resource.uri,
            mimeType: resource.mimeType,
            text: resource.read(),
          },
        ],
      });
    }

    case 'resources/templates/list':
      return rpcResult(rpc.id, { resourceTemplates: [] });

    case 'tools/list':
      return rpcResult(rpc.id, { tools: mcpToolDefinitions() });

    case 'tools/call': {
      const params = rpc.params as { name?: unknown; arguments?: unknown } | undefined;

      if (!params || typeof params.name !== 'string') {
        return rpcError(rpc.id, -32602, 'Invalid params');
      }

      const result = callMcpTool(params.name, params.arguments);

      if (!result) {
        return rpcError(rpc.id, -32601, 'Tool not found', { name: params.name });
      }

      return rpcResult(rpc.id, result);
    }

    default:
      return rpcError(rpc.id, -32601, 'Method not found', { method: rpc.method });
  }
}

export function HEAD() {
  return jsonResponse({ status: 'ok' });
}
