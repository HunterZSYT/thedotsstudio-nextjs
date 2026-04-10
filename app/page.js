import HomePage from "@/components/legacy-pages/HomePage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Dots Studio - Powering Ideas, Connecting Dots",
  description: "Creative design, digital marketing, website development, software solutions, and AI automation for ambitious brands. Powering Ideas, Connecting Dots.",
  path: "/",
  keywords: ["creative portfolio", "agency in bangladesh"],
});

export default function Page() {
  return <HomePage />;
}