"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "@/../i18n-config";

export default function LocaleSwitcher() {
  const pathname = usePathname();

  const getNewPath = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-xs text-sage/60 dark:text-neutral-500 mb-2">
        Locale switcher:
      </p>
      <div className="flex gap-[0.5rem] text-xs">
        {i18n.locales.map((locale) => {
          return (
            <Link
              key={locale}
              scroll={false}
              href={getNewPath(locale)}
              className={`text-xs font-bold uppercase transition-opacity hover:opacity-100 ${
                pathname.startsWith(`/${locale}`)
                  ? "opacity-100 underline"
                  : "opacity-50"
              }`}
            >
              {locale}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
