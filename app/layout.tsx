import type { Metadata } from "next";
import { fontVars } from "@/lib/fonts";
import { LAYOUT_DESCRIPTION, LAYOUT_TITLE } from "@/lib/constants";
import VisitorCounter from "@/app/components/VisitorCounter";
import "./globals.css";

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
      <body className={fontVars}>
        <VisitorCounter />
        {children}
      </body>
    </html>
  );
}
