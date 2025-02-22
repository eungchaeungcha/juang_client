import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const TOKEN_KEY = process.env.AUTH_TOKEN_KEY ?? "";

export async function POST() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete(TOKEN_KEY);

    return NextResponse.json({ message: "Logout Success" }, { status: 200 });
  } catch (error: unknown) {
    return NextResponse.json(
      { message: String(error) || "Internal Server Error" },
      { status: 500 },
    );
  }
}
