"use client";

import { useEffect } from "react";

export default function DecorativeMediaSanitizer() {
  useEffect(() => {
    const managed = new WeakSet();

    const sanitizeVideo = (video) => {
      if (managed.has(video)) return;

      managed.add(video);
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
      // Keep initial network pressure low; performance.js promotes preload when needed.
      video.setAttribute("preload", "none");
      video.setAttribute("disablePictureInPicture", "");
      video.setAttribute("controlsList", "nodownload noplaybackrate noremoteplayback");
    };

    const scan = (root = document) => {
      root.querySelectorAll("video.pgi-video").forEach(sanitizeVideo);
    };

    scan();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches?.("video.pgi-video")) sanitizeVideo(node);
          scan(node);
        });
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    const onVisibilityChange = () => {
      if (document.visibilityState !== "hidden") return;
      document.querySelectorAll("video.pgi-video").forEach((video) => {
        if (!video.paused) video.pause();
      });
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return null;
}
