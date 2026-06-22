import { markdownResponse, pageMarkdown } from '@/lib/agent';

export const dynamic = 'force-static';

export function GET() {
  return markdownResponse(pageMarkdown('index'));
}
