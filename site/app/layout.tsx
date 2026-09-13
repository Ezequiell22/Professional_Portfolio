import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { dictionaries } from "@/lib/dictionaries";
import { LanguageProvider } from "@/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const enMeta = dictionaries.en.meta;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: enMeta.title,
  description: enMeta.description,
  applicationName: "Ezequiel Menegas — AI Product Manager",
  authors: [{ name: SITE.name }],
  keywords: [
    "AI Product Manager",
    "AI Product Lead",
    "Technical Product Manager",
    "AI Solutions Architecture",
    "AI Engineering",
    "Agentic AI",
    "RAG",
    "MCP",
    "LLM",
    "Product Strategy",
  ],
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "pt-BR": "/pt-BR",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Ezequiel Menegas",
    title: enMeta.ogTitle,
    description: enMeta.ogDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: enMeta.ogTitle,
    description: enMeta.ogDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full bg-bg antialiased`}
    >
      <body className="min-h-full text-fg">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
