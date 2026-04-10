import LegacyHtmlPage from "@/components/LegacyHtmlPage";
import { getLegacyNotFoundPage } from "@/lib/legacy-pages";

export const metadata = {
  title: "404 Not Found",
};

export default function NotFound() {
  const page = getLegacyNotFoundPage();
  return <LegacyHtmlPage html={page?.bodyHtml || "<h1>404 Not Found</h1>"} />;
}
