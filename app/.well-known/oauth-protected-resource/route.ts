import { jsonResponse, oauthProtectedResourceMetadata } from '@/lib/agentDiscovery';

export const dynamic = 'force-static';

export function GET() {
  return jsonResponse(oauthProtectedResourceMetadata());
}
