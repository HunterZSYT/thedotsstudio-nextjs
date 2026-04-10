import SoftwareDevelopmentPage from "@/components/legacy-pages/SoftwareDevelopmentPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Software Development Services | Dots Studio",
  description: "Custom software development services focused on scalable architecture, performance, and real business outcomes.",
  path: "/software-development",
  keywords: ["software company", "custom software"],
});

export default function Page() {
  return <SoftwareDevelopmentPage />;
}