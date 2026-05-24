import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "1000x Growth Systems — Build the systems behind your next level",
  description:
    "1000x Growth Systems helps men and women optimize mindset, habits, money, execution, and business so they can create more clarity, discipline, income, fulfillment, and freedom.",
  keywords: [
    "personal growth",
    "business systems",
    "mindset optimization",
    "execution framework",
    "1000x growth",
  ],
  authors: [{ name: "1000x Growth Systems" }],
  openGraph: {
    title: "1000x Growth Systems — Build the systems behind your next level",
    description:
      "Optimize mindset, habits, money, execution, and business. Create clarity, discipline, income, fulfillment, and freedom.",
    url: "https://skyler1000x.com",
    siteName: "1000x Growth Systems",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "1000x Growth Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "1000x Growth Systems",
    description:
      "Build the systems behind your next level. Optimize mindset, habits, money, execution, and business.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  metadataBase: new URL("https://skyler1000x.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
