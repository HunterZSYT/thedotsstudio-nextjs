const SITE_URL = "https://www.thedotsstudio.com";
const SITE_NAME = "Dots Studio";
const DEFAULT_OG_IMAGE = "/assets/dots-portfolio-all/portfolio-pic-1.jpg";
const DEFAULT_OG_ALT = "Dots Studio - Powering Ideas, Connecting Dots";

export function buildPageMetadata({ title, description, path = "/", keywords = [] }) {
  const url = `${SITE_URL}${path}`;
  const normalizedKeywords = [
    "Dots Studio",
    "Powering Ideas, Connecting Dots",
    "creative agency",
    "web development",
    "digital marketing",
    "video editing",
    "software development",
    ...keywords,
  ];

  return {
    title,
    description,
    keywords: normalizedKeywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          alt: DEFAULT_OG_ALT,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export const rootMetadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: "Dots Studio - Powering Ideas, Connecting Dots",
  description:
    "Dots Studio creates design, marketing, and development experiences that help brands grow. Powering Ideas, Connecting Dots.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dots Studio - Powering Ideas, Connecting Dots",
    description:
      "Creative design, digital marketing, website and software development, and AI-powered automation services by Dots Studio.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        alt: DEFAULT_OG_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dots Studio - Powering Ideas, Connecting Dots",
    description:
      "Creative design, digital marketing, website and software development, and AI-powered automation services by Dots Studio.",
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};
