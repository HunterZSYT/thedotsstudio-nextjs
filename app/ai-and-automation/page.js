import AiAndAutomationPage from "@/components/legacy-pages/AiAndAutomationPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "AI and Automation Services | Dots Studio",
  description: "AI and automation solutions that streamline operations, improve customer experience, and accelerate business growth.",
  path: "/ai-and-automation",
  keywords: ["ai automation services", "business automation"],
});

export default function Page() {
  return <AiAndAutomationPage />;
}