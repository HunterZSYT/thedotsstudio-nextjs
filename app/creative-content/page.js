import CreativeContentPage from "@/components/legacy-pages/CreativeContentPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Creative Content Services | Dots Studio",
  description: "Creative content production for social media, campaigns, and digital platforms that drives engagement and brand growth.",
  path: "/creative-content",
  keywords: ["content production", "creative services"],
});

export default function Page() {
  return <CreativeContentPage />;
}