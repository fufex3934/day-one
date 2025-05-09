// middleware.ts
import { authOptions } from "@/lib/auth";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: authOptions.secret });

  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

// Apply only to protected routes
export const config = {
  matcher: ["/dashboard/:path*"],
};
