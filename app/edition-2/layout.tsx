import type { Metadata } from "next";
import { EditionSchema, editionMetadata } from "../../lib/edition-seo";

const slug = "edition-2";

export const metadata: Metadata = editionMetadata(slug);

export default function EditionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <EditionSchema slug={slug} />
      {children}
    </>
  );
}
