import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('========| Middleware Running |========');
  console.log('=> Request URL: ', request.url);
  console.log('=> Request Method: ', request.method);

  const authSessionToken = request.cookies.get('authjs.session-token');
  const dealkhSessionToken = request.cookies.get('dealkh-refresh-token');

  if (
    request.nextUrl.pathname === '/login' ||
    request.nextUrl.pathname === '/register'
  ) {
    // If there is a session, redirect them away from /login or /register
    if (dealkhSessionToken && authSessionToken) {
      return NextResponse.redirect(new URL('/', request.url)); // Redirect to home page or another appropriate page
    }
    
  }

  return NextResponse.next();
}

// Define when user visited these page and redirect into page when have no session
export const config = {
  matcher: ['/login', '/register'],
};
