import LegacyHtmlPage from "@/components/LegacyHtmlPage";
import { getHomeLegacyPage } from "@/lib/legacy-pages";

export const metadata = {
  title: "Dots Studio - Creative Portfolio Showcase",
};

export default function Home() {
  const page = getHomeLegacyPage();
  return <LegacyHtmlPage html={page?.bodyHtml || ""} />;
}
