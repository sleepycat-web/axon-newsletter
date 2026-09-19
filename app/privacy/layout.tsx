import type { Metadata } from "next";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Our privacy policy will help you understand what information is collected and how it is used.",
  alternates: {
    canonical: "https://grow.axonstudio.in/privacy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
