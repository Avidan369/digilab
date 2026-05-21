import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest): NextResponse {
  const url = request.nextUrl.clone();
  
  // Capturamos el dominio que nos envía Nginx
  const hostname = request.headers.get('host');

  // Enrutamiento interno por dominio
  if (hostname === 'digilablatam.com' || hostname === 'www.digilablatam.com') {
    url.pathname = `/digilablatam${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  if (hostname === 'opticorp.com.bo' || hostname === 'www.opticorp.com.bo') {
    url.pathname = `/opticorp${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};