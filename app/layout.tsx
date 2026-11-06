import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Sweet Delights | Handcrafted Artisanal Sweets & Gift Boxes",
  description:
    "Experience authentic handcrafted sweets made daily with 100% pure desi ghee, organic dry fruits, and traditional recipes. Order fresh online with express delivery.",
  keywords: [
    "sweets",
    "mithai",
    "kaju katli",
    "gulab jamun",
    "desi ghee sweets",
    "festive gift boxes",
    "Indian sweets",
    "confectionery",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FFFDF9] text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-amber-200 selection:text-amber-900">
        {children}
      </body>
    </html>
  );
}
