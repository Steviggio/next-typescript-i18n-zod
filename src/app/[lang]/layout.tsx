import { ReactNode } from "react";
import { i18n, type Locale } from "@/../i18n-config";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { ThemeProvider } from "@/core/providers/theme-provider";
import "@/app/globals.css";
import { getDictionnary } from "./dictionnaries";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

interface Props {
  params: Promise<{ lang: Locale }>;
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionnary(lang);
  const baseUrl = "https://www.steviggio.fr";

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      url: `https://www.steviggio.fr/${lang}`,
      siteName: "Steviggio Portfolio",
      locale: lang,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        en: "/en",
        fr: "/fr",
        es: "/es",
        pt: "/pt",
        "x-default": `${baseUrl}/fr`, // Recommandé pour le SEO
      },
    },
  };
}

export default async function RootLayout(props: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = params.lang as Locale;

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute={"class"}
          defaultTheme={"system"}
          enableSystem
          disableTransitionOnChange
        >
          {props.children}
        </ThemeProvider>
      </body>
    </html>
  );
}
