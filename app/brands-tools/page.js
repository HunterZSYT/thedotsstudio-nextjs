import BrandsToolsPage from "@/components/legacy-pages/BrandsToolsPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Brands and Tools | Dots Studio",
  description: "Explore the brands, technologies, and creative tools used by Dots Studio to deliver high-impact digital experiences.",
  path: "/brands-tools",
  keywords: ["tools", "technology stack"],
});

export default function Page() {
  return <BrandsToolsPage />;
}