import { jsonResponse, mcpServerCard } from '@/lib/agentDiscovery';

export const dynamic = 'force-static';

export function GET() {
  return jsonResponse(mcpServerCard());
}
