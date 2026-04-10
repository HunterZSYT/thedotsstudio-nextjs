import VideoEditingPage from "@/components/legacy-pages/VideoEditingPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Video Editing Services | Dots Studio",
  description: "Professional video editing services for commercials, social content, brand films, and high-impact digital storytelling.",
  path: "/video-editing",
  keywords: ["video editing", "motion content"],
});

export default function Page() {
  return <VideoEditingPage />;
}