import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kyle Boss",
  description:
    "Kyle Boss, seasoned Software Engineer with 8 years of expertise, offers personalized coaching to navigate tech interviews and break into the industry. Get proven strategies and insider tips for success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script src="/fullstory.js" />
      {process.env.NEXT_PUBLIC_GTM_ID ? (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      ) : null}
      <body className={inter.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
