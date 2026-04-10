import PortfolioPage from "@/components/legacy-pages/PortfolioPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Portfolio | Dots Studio",
  description: "Explore selected work from Dots Studio across branding, design, web development, software, and digital marketing.",
  path: "/portfolio",
  keywords: ["portfolio", "case studies", "creative work"],
});

export default function Page() {
  return <PortfolioPage />;
}