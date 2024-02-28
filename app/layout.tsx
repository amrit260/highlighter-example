import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const inter = Roboto({weight:'400',subsets:["latin"]});

export const metadata: Metadata = {
  title: "React selection highlighter",
  description: "demo page for react selection highlighter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="roboto-regular" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
