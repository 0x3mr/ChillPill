import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Initialize the Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chill Pill", // Set the page title
  description: "Ditch Anxiety: Chill Pill to the Rescue", // Set the page description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body> {/* Apply the Inter font class to the body */}
    </html>
  );
}
