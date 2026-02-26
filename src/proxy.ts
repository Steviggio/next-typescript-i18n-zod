import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "../i18n-config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales = Array.from(i18n.locales);

  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  );

  languages = languages.filter((lang) => lang !== "*");

  try {
    const locale = matchLocale(languages, locales, i18n.defaultLocale);
    return locale;
  } catch (error) {
    console.warn(
      "Error matching locale, falling back to default locale:",
      i18n.defaultLocale,
      "Error details:",
      error,
    );
  }
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const hasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname == `/${locale}`,
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  const locale = getLocale(request);

  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|pdf|txt|ico|json)$|.*\\.(?:svg|png|jpg|jpeg|gif|webp|pdf|txt|ico|json)\\?).*)",
  ],
};
