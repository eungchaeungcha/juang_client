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
    // api 요청의 경우 헤더에 토큰 추가
    const requestHeaders = new Headers(request.headers);
    if (authToken) {
      requestHeaders.set("Authorization", `Bearer ${authToken}`);
    } else {
      requestHeaders.delete("Authorization");
    }
    return NextResponse.next({
      request: { headers: requestHeaders },
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
     * 다음으로 시작하는 경로를 제외한 모든 요청 경로를 매칭합니다:
     * - _next/static (정적 파일)
     * - _next/image (이미지 최적화 파일)
     * - favicon.ico (파비콘 파일)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
