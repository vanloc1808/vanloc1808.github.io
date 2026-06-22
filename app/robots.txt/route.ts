import { robotsTxt } from '@/lib/agentDiscovery';
import { textResponse } from '@/lib/agent';

export const dynamic = 'force-static';

export function GET() {
  return textResponse(robotsTxt());
}
