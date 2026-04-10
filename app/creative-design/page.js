import CreativeDesignPage from "@/components/legacy-pages/CreativeDesignPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Creative Design Services | Dots Studio",
  description: "Brand-first creative design services including visual identity, campaign design, and digital assets crafted for impact.",
  path: "/creative-design",
  keywords: ["graphic design", "branding design"],
});

export default function Page() {
  return <CreativeDesignPage />;
}