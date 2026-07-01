import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Content Makeover Studio — UGC Portfolio Websites",
  description:
    "We build portfolio websites for UGC creators. Win more brand deals, look professional, and stand out — all in one link.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen">
        {children}
        <Script
          defer
          data-website-id="dfid_nB6TlGnZTGclJuv9X2ui8"
          data-domain="makeover-studio-two.vercel.app"
          src="https://datafa.st/js/script.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
