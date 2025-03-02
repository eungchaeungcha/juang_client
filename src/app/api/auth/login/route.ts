import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.JUANG_API_URL;
const TOKEN_KEY = process.env.AUTH_TOKEN_KEY ?? "";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // authenticate

    const response = await fetch(`${API_URL}/auth/authenticate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const cookieStore = await cookies();

    if (!response.ok) {
      cookieStore.delete(TOKEN_KEY);
      return NextResponse.json(
        { message: "Login failed" },
        { status: response.status },
      );
    }

    const data = await response.json();
    const token = data.token;

    cookieStore.set(TOKEN_KEY, token, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      maxAge: 3600 * 24 * 10,
    });

    // get user data

    const userResponse = await fetch(`${API_URL}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!userResponse.ok) {
      return NextResponse.json(
        { message: "Failed to fetch user data" },
        { status: userResponse.status },
      );
    }

    const userData = await userResponse.json();

    return NextResponse.json(userData, { status: response.status });
  } catch (error: unknown) {
    return NextResponse.json(
      { message: String(error) || "Internal Server Error" },
      { status: 500 },
    );
  }
}
