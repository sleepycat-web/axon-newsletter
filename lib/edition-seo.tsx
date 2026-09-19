import type { Metadata } from "next";
import { getEdition, organizationId, siteUrl, toJsonLd } from "./editions";

export function editionMetadata(slug: string): Metadata {
  const edition = getEdition(slug);
  const url = `${siteUrl}/${edition.slug}`;
  return {
    title: edition.headline,
    description: edition.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "Innovia by Axon Studio",
      title: edition.headline,
      description: edition.description,
      publishedTime: edition.datePublished,
      authors: ["https://axonstudio.in/"],
      images: [{ url: edition.image, alt: edition.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@WebAxon",
      title: edition.headline,
      description: edition.description,
      images: [edition.image],
    },
  };
}

export function EditionSchema({ slug }: { slug: string }) {
  const edition = getEdition(slug);
  const url = `${siteUrl}/${edition.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: edition.headline,
    description: edition.description,
    image: `${siteUrl}${edition.image}`,
    datePublished: edition.datePublished,
    url,
    mainEntityOfPage: url,
    inLanguage: "en",
    author: { "@id": organizationId },
    publisher: { "@id": organizationId },
    isPartOf: { "@id": `${siteUrl}/#blog` },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: toJsonLd(schema) }}
    />
  );
}
