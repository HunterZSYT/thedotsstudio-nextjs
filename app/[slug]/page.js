import LegacyHtmlPage from "@/components/LegacyHtmlPage";
import { getLegacyPageBySlug } from "@/lib/legacy-pages";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getLegacyPageBySlug(slug);
  if (!page) return {};
  return { title: page.title };
}

export default async function LegacySlugPage({ params }) {
  const { slug } = await params;
  const page = getLegacyPageBySlug(slug);
  if (!page) notFound();
  return <LegacyHtmlPage html={page.bodyHtml} />;
}
