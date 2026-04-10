import MyMenuPage from "@/components/legacy-pages/MyMenuPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Navigation | Dots Studio",
  description: "Navigate Dots Studio pages and discover services, portfolio highlights, and contact options.",
  path: "/my-menu",
  keywords: ["site navigation"],
});

export default function Page() {
  return <MyMenuPage />;
}