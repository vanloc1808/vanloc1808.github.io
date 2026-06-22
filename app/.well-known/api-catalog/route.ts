import { apiCatalog, jsonResponse } from '@/lib/agentDiscovery';

export const dynamic = 'force-static';

export function GET() {
  return jsonResponse(
    apiCatalog(),
    'application/linkset+json; profile="https://www.rfc-editor.org/info/rfc9727"; charset=utf-8'
  );
}
