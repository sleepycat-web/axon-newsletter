import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Innovia | Edition 2",
  description:
    "Learn about Vercel's Generative UI and how it will shift the focus to outcome-oriented design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-neutral-950 h-dvh" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
