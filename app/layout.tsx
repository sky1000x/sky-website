import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sky Growth Agency | Scale Your Business to 1000x",
  description:
    "Sky Growth Agency helps ambitious businesses achieve exponential growth through data-driven marketing, brand strategy, and performance optimization.",
  keywords: ["growth agency", "marketing", "brand strategy", "performance"],
  authors: [{ name: "Sky Growth Agency" }],
  openGraph: {
    title: "Sky Growth Agency | Scale Your Business to 1000x",
    description:
      "Sky Growth Agency helps ambitious businesses achieve exponential growth.",
    url: "https://sky1000x.com",
    siteName: "Sky Growth Agency",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sky Growth Agency | Scale Your Business to 1000x",
    description:
      "Sky Growth Agency helps ambitious businesses achieve exponential growth.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
