import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;

  // Allow NextAuth routes to bypass auth checks
  if (pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }
  // Redirect if not authenticated
  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Admin routes protection
  if (pathname.startsWith("/admin") && token.account_type !== "admin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Staff routes protection
  if (
    pathname.startsWith("/dashboard/staff") &&
    token.account_type !== "staff"
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Student routes protection
  if (
    pathname.startsWith("/dashboard/student") &&
    token.account_type !== "student"
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // API routes protection for non logged in users - keeping access to login routes
  if (pathname.startsWith("/api") && !token) {
    return NextResponse.redirect(new URL("/", req.url));
  }




  return NextResponse.next();
}

// Apply middleware to these routes
export const config = {
  matcher: [
    "/admin/:path*",
    "/dashboard/staff/:path*",
    "/dashboard/student/:path*",
    "/api/:path*",
  ],
};
