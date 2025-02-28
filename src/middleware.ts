import { NextRequest, NextResponse } from "next/server";
import {
  privateRoutePathes,
  publicRoutePathes,
  routePathes,
} from "@/constants/route";

const TOKEN_KEY = process.env.AUTH_TOKEN_KEY ?? "";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const { pathname } = request.nextUrl;
  const authToken = request.cookies.get(TOKEN_KEY)?.value;

  if (pathname.startsWith("/api")) {
    return NextResponse.next({
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
  }

  const isRootPage = pathname === routePathes.root;
  const isPrivatePage = privateRoutePathes.some((path) =>
    pathname.startsWith(path),
  );
  const isPublicPage = publicRoutePathes.some((path) =>
    pathname.startsWith(path),
  );
  if ((isRootPage || isPrivatePage) && !authToken) {
    // root page, private page 에서 로그인 안된 상태
    return NextResponse.redirect(
      new URL(routePathes.public.login, request.url),
    );
  }
  if (isPublicPage && authToken) {
    // public page 에서 로그인 된 상태
    return NextResponse.redirect(new URL(routePathes.root, request.url));
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
