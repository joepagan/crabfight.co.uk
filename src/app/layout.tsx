import type { Metadata } from "next";
import { Geist, Geist_Mono, Trade_Winds } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tradeWinds = Trade_Winds({
  weight: "400",
  variable: "--font-trade-winds",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crab Fight - A rap rock band from Leeds, UK",
  description: "A six piece rap rock band from Leeds, UK. Sounds a bit like chillis with synths. But also kinda unique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-5KCSGFZN" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tradeWinds.variable} antialiased bg-gradient-to-br from-background via-background to-muted`}
      >
        {children}
      </body>
    </html>
  );
}
