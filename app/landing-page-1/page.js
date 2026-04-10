import LandingPage1Page from "@/components/legacy-pages/LandingPage1Page";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Landing Experience | Dots Studio",
  description: "A premium Dots Studio landing experience showcasing creative capability, motion-rich visuals, and brand storytelling.",
  path: "/landing-page-1",
  keywords: ["landing page", "brand experience"],
});

export default function Page() {
  return <LandingPage1Page />;
}