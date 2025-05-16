import type { Metadata } from "next";
import localFont from "next/font/local";
import { LAYOUT_DESCRIPTION, LAYOUT_TITLE } from "@/lib/constants";

import "./globals.css";

const jost = localFont({
  src: "./fonts/JOST.ttf",
  variable: "--font-jost",
});

const overpass = localFont({
  src: "./fonts/OVERPASS.ttf",
  variable: "--font-overpass",
});

const redhat = localFont({
  src: "./fonts/REDHATDISPLAY.ttf",
  variable: "--font-redhat",
});

export const metadata: Metadata = {
  title: LAYOUT_TITLE,
  description: LAYOUT_DESCRIPTION,
  icons: {
    icon: "./base.png",
    shortcut: "./base.png",
    apple: "./base.png",
  },
  manifest: "./manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${jost.variable} ${overpass.variable} ${redhat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
