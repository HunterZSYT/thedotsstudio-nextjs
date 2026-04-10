import NotFoundPage from "@/components/legacy-pages/NotFoundPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "404 Not Found | Dots Studio",
  description: "The page you are looking for could not be found on Dots Studio.",
  path: "/404",
});

export default function Page() {
  return <NotFoundPage />;
}