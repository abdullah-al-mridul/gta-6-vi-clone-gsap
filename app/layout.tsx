import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GTA VI",
  description: "Fan made GTA VI clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
