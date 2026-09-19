export const siteUrl = "https://grow.axonstudio.in";
export const organizationId = "https://axonstudio.in/#organization";

export interface Edition {
  number: number;
  slug: string;
  // card title in the archive
  title: string;
  // <title> and article headline
  headline: string;
  // meta description
  description: string;
  // short blurb on the archive card
  summary: string;
  datePublished: string;
  image: string;
  imageAlt: string;
}

export const editions: Edition[] = [
  {
    number: 1,
    slug: "edition-1",
    title: "Generative UI",
    headline: "Vercel's Generative UI Explained",
    description:
      "Vercel's v0 turns plain text prompts into working React and HTML interfaces. What Generative UI can do and why design is shifting toward outcomes.",
    summary:
      "Learn about Vercel's Generative UI and how it will shift the focus to outcome-oriented design.",
    datePublished: "2024-07-14",
    image: "/innovia-1/ssat.jpg",
    imageAlt: "v0 by Vercel homepage with the tagline Generate. Refine. Ship.",
  },
  {
    number: 2,
    slug: "edition-2",
    title: "Superintelligence",
    headline: "OpenAI's 5 Levels to Superintelligence",
    description:
      "OpenAI's leaked roadmap ranks AI on five levels, from chatbots to systems that run entire organizations. What each level means and where we are now.",
    summary:
      "Explore OpenAI's roadmap to superintelligence and transformative AI preparedness framework.",
    datePublished: "2024-07-23",
    image: "/innovia-2/rbt.jpg",
    imageAlt: "Illustration of a humanoid robot head with glowing red eyes",
  },
  {
    number: 3,
    slug: "edition-3",
    title: "Search GPT and Llama 3.1",
    headline: "SearchGPT and Llama 3.1: Two Big AI Updates",
    description:
      "OpenAI unveils SearchGPT to take on Perplexity while Meta ships Llama 3.1, its biggest open source model yet. What both updates mean for AI.",
    summary: "Read about the game changing updates dropped by OpenAI and Meta.",
    datePublished: "2024-07-30",
    image: "/innovia-3/aimg.jpg",
    imageAlt: "Illustration of a businessman facing a humanoid AI",
  },
];

export const getEdition = (slug: string) =>
  editions.find((edition) => edition.slug === slug)!;

// escape "<" so no string in the schema can close the script tag early
export const toJsonLd = (data: object) =>
  JSON.stringify(data).replace(/</g, "\u003c");
