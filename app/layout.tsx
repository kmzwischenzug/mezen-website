import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

// TODO: Update title/description/OG from CMO copy brief (MEZA-29)
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://mezen.co"
  ),
  title: {
    default: "Mezen — B2B Revenue Growth Consulting",
    template: "%s | Mezen",
  },
  description:
    "Mezen helps growing B2B companies accelerate revenue, improve margins, and make better strategic decisions. We work alongside founders — completing the work, not just advising.",
  keywords: [
    "B2B consulting",
    "revenue growth",
    "go-to-market",
    "founder consulting",
    "sales strategy",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Mezen",
    // TODO: Add OG image from Designer (MEZA-30)
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
