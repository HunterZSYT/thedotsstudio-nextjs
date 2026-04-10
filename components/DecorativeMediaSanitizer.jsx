"use client";

import { useEffect } from "react";

export default function DecorativeMediaSanitizer() {
  useEffect(() => {
    const managed = new WeakSet();
    const mobileQuery = "(max-width: 991px), (pointer: coarse)";
    const isMobileDevice = window.matchMedia?.(mobileQuery)?.matches ?? false;

    const VIDEO_POSTER_MAP = [
      [/\/assets\/dots-portfolio-all\/portfolio-vid-1\.webm$/i, "/assets/dots-portfolio-all/portfolio-pic-1.jpg"],
      [/\/assets\/dots-portfolio-all\/portfolio-vid-2\.webm$/i, "/assets/dots-portfolio-all/portfolio-pic-2.jpg"],
      [/\/assets\/dots-portfolio-all\/portfolio-vid-4\.webm$/i, "/assets/dots-portfolio-all/portfolio-pic-4.png"],
      [/\/assets\/dots-portfolio-all\/portfolio-vid-5\.webm$/i, "/assets/dots-portfolio-all/portfolio-pic-5.png"],
      [/\/assets\/dots-portfolio-all\/portfolio-vid-6\.webm$/i, "/assets/dots-portfolio-all/portfolio-pic-6.png"],
      [/\/assets\/dots-portfolio-all\/portfolio-vid-7\.webm$/i, "/assets/dots-portfolio-all/portfolio-pic-7.png"],
      [/\/assets\/dots-portfolio-all\/portfolio-vid-8\.webm$/i, "/assets/dots-portfolio-all/portfolio-pic-8.png"],
      [/\/assets\/dots-portfolio-all\/portfolio-vid-9\.webm$/i, "/assets/dots-portfolio-all/portfolio-pic-9.png"],
      [/\/assets\/dots-portfolio-all\/portfolio-vid-10\.webm$/i, "/assets/dots-portfolio-all/portfolio-pic-10.png"],
      [/\/assets\/dots-portfolio-all\/portfolio-vid-11\.webm$/i, "/assets/dots-portfolio-all/portfolio-pic-11.png"],
      [/\/assets\/dots-services-vids\/creative-content\/creative-content-vid-1\.webm$/i, "/assets/dots-services-img/creative-content/creative-content-img-1.png"],
      [/\/assets\/dots-services-vids\/creative-content\/creative-content-vid-2\.webm$/i, "/assets/dots-services-img/creative-content/creative-content-img-2.png"],
      [/\/assets\/dots-services-vids\/creative-design\/creative-design-vid-1\.webm$/i, "/assets/dots-services-img/creative-design/creative-design-1.jpg"],
      [/\/assets\/dots-services-vids\/creative-design\/creative-design-vid-2\.webm$/i, "/assets/dots-services-img/creative-design/Creative-Design2.jpg"],
      [/\/assets\/dots-services-vids\/digital-marketing\/digi-marketing-vid-1\.webm$/i, "/assets/dots-services-img/digital-marketing/digi-market-1.png"],
      [/\/assets\/dots-services-vids\/digital-marketing\/digi-marketing-vid-2\.webm$/i, "/assets/dots-services-img/digital-marketing/digi-market-2.png"],
      [/\/assets\/dots-services-vids\/software-development\/software-development-vid-1\.webm$/i, "/assets/dots-services-img/software-development/soft-dev-1.jpg"],
      [/\/assets\/dots-services-vids\/software-development\/software-development-vid-2\.webm$/i, "/assets/dots-services-img/software-development/soft-dev-2.png"],
      [/\/assets\/dots-services-vids\/website-development\/website-development-vid-1\.webm$/i, "/assets/dots-services-img/website-development/web-dev-1.png"],
      [/\/assets\/dots-services-vids\/website-development\/website-development-vid-2\.webm$/i, "/assets/dots-services-img/website-development/web-dev-2.png"],
    ];

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
      if (currentPoster) return currentPoster;

      const src = getVideoSource(video);
      if (src) {
        const generatedPoster = toGeneratedPosterPath(src);
        if (generatedPoster) return generatedPoster;

        for (const [pattern, poster] of VIDEO_POSTER_MAP) {
          if (pattern.test(src)) return poster;
        }
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
