import PortfolioFullscreenSliderPage from "@/components/legacy-pages/PortfolioFullscreenSliderPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Portfolio Fullscreen Slider | Dots Studio",
  description: "Browse Dots Studio portfolio projects in a fullscreen visual slider experience.",
  path: "/portfolio-fullscreen-slider",
  keywords: ["fullscreen portfolio", "project slider"],
});

export default function Page() {
  return <PortfolioFullscreenSliderPage />;
}