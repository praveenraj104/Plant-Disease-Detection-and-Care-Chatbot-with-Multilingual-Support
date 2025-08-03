import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verify } from "jsonwebtoken"

export function middleware(request: NextRequest) {
  // Get the token from the cookies
  const token = request.cookies.get("auth_token")?.value

  // Check if the request is for the API routes that don't need authentication
  if (
    request.nextUrl.pathname.startsWith("/api/auth/login") ||
    request.nextUrl.pathname.startsWith("/api/auth/signup") ||
    request.nextUrl.pathname.startsWith("/api/auth/check-username")
  ) {
    return NextResponse.next()
  }

  // Check if the request is for the API routes that need authentication
  if (request.nextUrl.pathname.startsWith("/api/chat") && !token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  // For API routes that need authentication, verify the token
  if (request.nextUrl.pathname.startsWith("/api/chat") && token) {
    try {
      verify(token, process.env.JWT_SECRET || "fallback-secret-key")
      return NextResponse.next()
    } catch (error) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/api/chat/:path*", "/api/auth/:path*"],
}
