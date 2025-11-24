import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import { ACCESS_RULES } from '@/constants/access';
import { ROUTES } from '@/constants/routes';
import { matchesRoute } from '@/utils/matchesRoute';
import type { NextRequest } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request
  });

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        supabaseResponse = NextResponse.next({
          request
        });
        cookiesToSet.forEach(({ name, value }) => supabaseResponse.cookies.set(name, value));
      }
    }
  });
  // IMPORTANT: Avoid writing any logic between createServerClient and
  // supabase.auth.getClaims(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.
  // IMPORTANT: Don't remove getClaims()

  const { data } = await supabase.auth.getClaims();
  const pathName = request.nextUrl.pathname;
  const isGuestOnly = matchesRoute(pathName, ACCESS_RULES.guestOnly);
  const isAuthOnly = matchesRoute(pathName, ACCESS_RULES.authOnly);
  const user = data?.claims;
  const isOAuthCallback = request.nextUrl.searchParams.has('code');

  if (isOAuthCallback) {
    return NextResponse.next();
  }
  if (user && isGuestOnly) {
    return NextResponse.redirect(new URL(ROUTES.HOME, request.url));
  }

  if (!user && isAuthOnly) {
    return NextResponse.redirect(new URL(ROUTES.SIGN_IN, request.url));
  }
  // IMPORTANT: You *must* return the supabaseResponse object as it is. If you're
  // creating a new response object with NextResponse.next() make sure to:
  // 1. Pass the request in it, like so:
  //    const myNewResponse = NextResponse.next({ request })
  // 2. Copy over the cookies, like so:
  //    myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
  // 3. Change the myNewResponse object to fit your needs, but avoid changing
  //    the cookies!
  // 4. Finally:
  //    return myNewResponse
  // If this is not done, you may be causing the browser and server to go out
  // of sync and terminate the user's session prematurely!
  return supabaseResponse;
}
