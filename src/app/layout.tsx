import type { Metadata, Viewport } from "next";
import {
  Fraunces,
  Manrope,
  Noto_Serif_Devanagari,
  Noto_Serif_Malayalam,
  Noto_Serif_Tamil,
  Noto_Serif_Telugu,
} from "next/font/google";
import { LanguageProvider } from "@/components/language-provider";
import { ScrollProgress } from "@/components/scroll-progress";
import { SiteHeader } from "@/components/site-header";
import { DEFAULT_KEYWORDS, SITE } from "@/lib/site";
import "./globals.css";

const display = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const sans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const deva = Noto_Serif_Devanagari({
  variable: "--font-deva",
  subsets: ["devanagari", "latin"],
  display: "swap",
});

const tamil = Noto_Serif_Tamil({
  variable: "--font-tamil",
  subsets: ["tamil", "latin"],
  display: "swap",
});

const telugu = Noto_Serif_Telugu({
  variable: "--font-telugu",
  subsets: ["telugu", "latin"],
  display: "swap",
});

const malayalam = Noto_Serif_Malayalam({
  variable: "--font-malayalam",
  subsets: ["malayalam", "latin"],
  display: "swap",
});

const GOOGLE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const BING_VERIFICATION = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — free celebration links for Indian festivals`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  generator: "Next.js",
  keywords: DEFAULT_KEYWORDS,
  authors: [{ name: SITE.creator.name, url: SITE.creator.url }],
  creator: SITE.creator.name,
  publisher: SITE.name,
  category: "lifestyle",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Search Console / Bing verification tokens can be supplied at build time.
  verification: {
    ...(GOOGLE_VERIFICATION ? { google: GOOGLE_VERIFICATION } : {}),
    ...(BING_VERIFICATION
      ? { other: { "msvalidate.01": BING_VERIFICATION } }
      : {}),
  },
  appleWebApp: {
    capable: true,
    title: SITE.name,
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — one beautiful link for every celebration`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    site: SITE.twitter,
    creator: SITE.twitter,
    title: `${SITE.name} — one beautiful link for every celebration`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#08050f",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${sans.variable} ${deva.variable} ${tamil.variable} ${telugu.variable} ${malayalam.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      {/* Browser extensions inject attributes (for example `inmaintabuse`) on
          <body> before React hydrates, which is not something the server can
          predict. Suppressing the warning here keeps the console clean without
          hiding real app-level mismatches. */}
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-gold px-4 py-2 font-semibold text-[#241200] focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <LanguageProvider>
          <ScrollProgress />
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
