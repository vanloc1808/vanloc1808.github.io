import { llmsFullTxt, textResponse } from '@/lib/agent';

export const dynamic = 'force-static';

export function GET() {
  return textResponse(llmsFullTxt());
}
