import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Netflix Clone",
  description: "A frontend clone of Netflix built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}