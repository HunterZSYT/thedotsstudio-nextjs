"use client";

import { useEffect } from "react";

export default function DecorativeMediaSanitizer() {
  useEffect(() => {
    const managed = new WeakSet();
    const mobileQuery = "(max-width: 991px), (pointer: coarse)";
    const isMobileDevice = window.matchMedia?.(mobileQuery)?.matches ?? false;

    const getVideoSource = (video) => {
      const source = video.querySelector("source")?.getAttribute("src");
      return source || video.getAttribute("src") || "";
    };

    const toGeneratedPosterPath = (src) => {
      if (!src) return "";
      const normalized = src.replace(/^\/+/, "");
      return `/assets/generated-posters/${normalized
        .replace(/[\\/]/g, "__")
        .replace(/\.(webm|mp4|mov|m4v)$/i, ".jpg")}`;
    };

    const resolvePoster = (video) => {
      const currentPoster = video.getAttribute("poster");
      const src = getVideoSource(video);
      const isPortfolioGridVideo = !!video.closest(".portfolio-grid-item");
      const generatedPoster = src ? toGeneratedPosterPath(src) : "";

      // On mobile, portfolio grid motion cards should use same-video thumbnail frames.
      if (isMobileDevice && isPortfolioGridVideo && generatedPoster) return generatedPoster;

      if (currentPoster) return currentPoster;

      if (src) {
        if (generatedPoster) return generatedPoster;
      }

      return "/assets/img/web-video-poster.png";
    };

    const sanitizeVideo = (video) => {
      if (managed.has(video)) return;

      managed.add(video);
      const poster = resolvePoster(video);

      video.autoplay = !isMobileDevice;
      video.muted = true;
      video.defaultMuted = true;
      video.loop = true;
      video.controls = false;
      video.playsInline = true;
      video.tabIndex = -1;
      video.setAttribute("aria-hidden", "true");
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
      video.setAttribute("poster", poster);
      video.setAttribute("preload", "none");
      video.setAttribute("disablePictureInPicture", "");
      video.setAttribute("controlsList", "nodownload noplaybackrate noremoteplayback");

      if (isMobileDevice) {
        const mobileSrc = getVideoSource(video);
        if (mobileSrc) video.setAttribute("data-mobile-src", mobileSrc);
        video.removeAttribute("autoplay");
        video.removeAttribute("data-autoplay");
        video.pause();
      }
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
