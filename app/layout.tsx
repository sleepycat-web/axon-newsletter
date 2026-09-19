import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  editions,
  organizationId,
  siteUrl,
  toJsonLd,
} from "../lib/editions";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const title = "Innovia by Axon Studio | Weekly Tech and AI Newsletter";
const description =
  "Innovia is Axon Studio's newsletter: a weekly scoop of tech innovations, AI trends and insights, from generative UI to the latest OpenAI and Meta releases.";
const ogImage = {
  url: "https://axonstudio.in/assets/screenshots/ogi.jpg",
  width: 1200,
  height: 630,
  alt: "Innovia, the tech newsletter by Axon Studio",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Innovia",
  },
  description,
  applicationName: "Innovia",
  authors: [{ name: "Axon Studio", url: "https://axonstudio.in/" }],
  publisher: "Axon Studio",
  alternates: {
    canonical: `${siteUrl}/`,
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/`,
    siteName: "Innovia by Axon Studio",
    locale: "en_US",
    title,
    description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    site: "@WebAxon",
    creator: "@WebAxon",
    title,
    description,
    images: [ogImage.url],
  },
};

// same identity as the Organization block on axonstudio.in so Google merges the two
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": organizationId,
  name: "Axon Studio",
  alternateName: "The Axon Studio",
  url: "https://axonstudio.in/",
  logo: "https://axonstudio.in/assets/logos/axon-studio-logo.png",
  email: "info@axonstudio.in",
  sameAs: [
    "https://x.com/WebAxon",
    "https://www.instagram.com/theaxonstudio/",
    "https://www.linkedin.com/company/the-axon-studio/",
    "https://www.facebook.com/people/Axon-Studio/61557992653296/",
    "https://www.crunchbase.com/organization/axon-studio",
  ],
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${siteUrl}/#blog`,
  name: "Innovia",
  description,
  url: `${siteUrl}/`,
  inLanguage: "en",
  publisher: { "@id": organizationId },
  blogPost: editions.map((edition) => ({
    "@type": "BlogPosting",
    "@id": `${siteUrl}/${edition.slug}#article`,
    headline: edition.headline,
    url: `${siteUrl}/${edition.slug}`,
    datePublished: edition.datePublished,
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="font-poppins" lang="en">
      <body className={inter.className}>
        {/* plain script tags so the schema is in the server HTML, not injected after hydration */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(blogSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
