"use client";

import { useEffect } from "react";

export default function DecorativeMediaSanitizer() {
  useEffect(() => {
    const normalizeDecorativeVideos = () => {
      const videos = document.querySelectorAll("video.pgi-video");

      videos.forEach((video) => {
        video.muted = true;
        video.defaultMuted = true;
        video.autoplay = true;
        video.loop = true;
        video.controls = false;
        video.playsInline = true;
        video.tabIndex = -1;
        video.setAttribute("aria-hidden", "true");
        video.setAttribute("muted", "");
        video.setAttribute("playsinline", "");
        video.setAttribute("webkit-playsinline", "");
        video.setAttribute("preload", "metadata");
        video.setAttribute("disablePictureInPicture", "");
        video.setAttribute("controlsList", "nodownload noplaybackrate noremoteplayback");

        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {
            // Some mobile environments still block autoplay in low power mode.
          });
        }
      });
    };

    normalizeDecorativeVideos();
    const observer = new MutationObserver(normalizeDecorativeVideos);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("touchstart", normalizeDecorativeVideos, { passive: true });
    window.addEventListener("scroll", normalizeDecorativeVideos, { passive: true });
    document.addEventListener("visibilitychange", normalizeDecorativeVideos);

    return () => {
      observer.disconnect();
      window.removeEventListener("touchstart", normalizeDecorativeVideos);
      window.removeEventListener("scroll", normalizeDecorativeVideos);
      document.removeEventListener("visibilitychange", normalizeDecorativeVideos);
    };
  }, []);

  return null;
}
