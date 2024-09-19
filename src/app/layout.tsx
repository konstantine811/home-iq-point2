import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

import { Mulish } from "next/font/google";

// Load Inter font
const inter = Mulish({
  subsets: ["latin"], // You can specify other subsets if needed
});

export const metadata: Metadata = {
  title: "Home IQ",
  description: "Home IQ point2 WEB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
