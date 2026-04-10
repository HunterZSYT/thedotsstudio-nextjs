import AboutUsPage from "@/components/legacy-pages/AboutUsPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "About Us | Dots Studio",
  description: "Learn how Dots Studio builds growth through strategy, design, development, and automation. Powering Ideas, Connecting Dots.",
  path: "/about-us",
  keywords: ["about dots studio", "creative team"],
});

export default function Page() {
  return <AboutUsPage />;
}