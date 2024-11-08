// middleware.js
import { NextResponse, NextRequest } from "next/server";
import { getUserLocale } from "./service/locale";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set("Accept-Language", await getUserLocale());
  return response;
}
