import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow the homepage itself
  if (pathname === '/') {
    return NextResponse.next()
  }

  // Redirect everything else to /
  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: [
    /*
      Match all request paths except:
      - _next/static (static files)
      - _next/image (image optimization)
      - favicon.ico
    */
    '/((?!_next/static|_next/image|favicon.ico).*)'
  ],
}
