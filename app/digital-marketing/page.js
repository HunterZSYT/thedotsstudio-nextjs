import DigitalMarketingPage from "@/components/legacy-pages/DigitalMarketingPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Digital Marketing Services | Dots Studio",
  description: "Performance-driven digital marketing services including paid campaigns, strategy, and content execution to grow your brand.",
  path: "/digital-marketing",
  keywords: ["digital marketing agency", "growth marketing"],
});

export default function Page() {
  return <DigitalMarketingPage />;
}