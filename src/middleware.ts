import { NextRequest, NextResponse } from "next/server";
import { privateRoutePathes } from "@/constants/route";

const TOKEN_KEY = process.env.AUTH_TOKEN_KEY ?? "";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const { pathname } = request.nextUrl;

  if (privateRoutePathes.some((path) => pathname.startsWith(path))) {
    if (!request.cookies.get(TOKEN_KEY)) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return response;
}
