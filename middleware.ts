import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()

  // Get the hostname (e.g. nguyenvanloc.com, www.nguyenvanloc.com)
  const hostname = request.headers.get('host') || ''

  // Get the pathname of the request (e.g. /, /blog)
  const pathname = request.nextUrl.pathname

  // If the hostname is www.nguyenvanloc.com, redirect to nguyenvanloc.com
  if (hostname.startsWith('www.')) {
    url.hostname = hostname.replace('www.', '')
    return NextResponse.redirect(url)
  }

  // If the request is not HTTPS, redirect to HTTPS
  if (!request.headers.get('x-forwarded-proto')?.includes('https')) {
    url.protocol = 'https'
    return NextResponse.redirect(url)
  }

  // If the pathname has a trailing slash, remove it
  if (pathname !== '/' && pathname.endsWith('/')) {
    url.pathname = pathname.slice(0, -1)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}