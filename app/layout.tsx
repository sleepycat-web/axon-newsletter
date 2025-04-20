import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Innovia",
  description: "Your weekly scoop of tech innovations, trends and insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="font-poppins" lang="en">
      <link
        rel="canonical"
        href="https://grow.axonstudio.in/"
        key="canonical"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
