import { NextRequest, NextResponse } from "next/server";
import { routePathes } from "./constants/route";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const { pathname } = request.nextUrl;

  if (routePathes.private.some((path) => pathname.startsWith(path))) {
    if (!request.cookies.get("auth")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return response;
}
