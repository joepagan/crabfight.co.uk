import type { Metadata } from "next";
import { Geist, Geist_Mono, Trade_Winds } from "next/font/google";
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
  title: "CrabFight - A rap rock band from Leeds, UK",
  description: "A six piece rap rock band from Leeds, UK. Sounds a bit like chillis with synths. But also kinda unique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tradeWinds.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
