import { jsonResponse, openApiDocument } from '@/lib/agentDiscovery';

export const dynamic = 'force-static';

export function GET() {
  return jsonResponse(openApiDocument(), 'application/vnd.oai.openapi+json;version=3.1; charset=utf-8');
}
