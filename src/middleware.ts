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

  const isAuthenticated = Boolean(request.cookies.get(TOKEN_KEY));

  const isRootPage = pathname === routePathes.root;
  const isPrivatePage = privateRoutePathes.some((path) =>
    pathname.startsWith(path),
  );
  const isPublicPage = publicRoutePathes.some((path) =>
    pathname.startsWith(path),
  );

  if ((isRootPage || isPrivatePage) && !isAuthenticated) {
    // root page, private page 에서 로그인 안된 상태
    return NextResponse.redirect(
      new URL(routePathes.public.login, request.url),
    );
  }

  if (isPublicPage && isAuthenticated) {
    // public page 에서 로그인 된 상태
    return NextResponse.redirect(new URL(routePathes.root, request.url));
  }

  return response;
}
