import { authMarkdown } from '@/lib/agentDiscovery';
import { markdownResponse } from '@/lib/agent';

export const dynamic = 'force-static';

export function GET() {
  return markdownResponse(authMarkdown());
}
