import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Our privacy policy will help you understand what information is collected and how it is used.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="robots" content="noindex" />
      <link
        rel="canonical"
        href="https://grow.axonstudio.in/privacy"
        key="canonical"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
