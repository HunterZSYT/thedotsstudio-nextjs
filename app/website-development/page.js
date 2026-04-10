import WebsiteDevelopmentPage from "@/components/legacy-pages/WebsiteDevelopmentPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Website Development Services | Dots Studio",
  description: "Website development services blending strategy, UX, performance, and modern engineering for business growth.",
  path: "/website-development",
  keywords: ["website development", "web agency"],
});

export default function Page() {
  return <WebsiteDevelopmentPage />;
}