import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Innovia | Axon Studio",
  description: "Your weekly scoop of tech innovations, trends and insights.",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="canonical" href="https://grow.axonstudio.tech/" key="canonical" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
