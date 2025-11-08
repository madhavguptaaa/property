import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteChatWidget } from "@/components/SiteChatWidget";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aggent.in"),
  title: "Aggent | Bespoke Property Advisory",
  description:
    "Aggent is a premium property concierge helping you discover and acquire luxury homes and investments across India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-[#05070d] text-slate-50`}>
        <Header />
        <main className="min-h-screen bg-[#05070d] text-white">{children}</main>
        <Footer />
        <SiteChatWidget />
      </body>
    </html>
  );
}
