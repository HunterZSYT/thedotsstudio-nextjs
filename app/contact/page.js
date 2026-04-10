import ContactPage from "@/components/legacy-pages/ContactPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact Dots Studio",
  description: "Get in touch with Dots Studio for design, development, marketing, and automation services. Let us build your next project.",
  path: "/contact",
  keywords: ["contact agency", "hire dots studio"],
});

export default function Page() {
  return <ContactPage />;
}