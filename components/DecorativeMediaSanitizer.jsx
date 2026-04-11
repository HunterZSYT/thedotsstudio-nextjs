"use client";

import { useEffect } from "react";

export default function DecorativeMediaSanitizer() {
  useEffect(() => {
    const managed = new WeakSet();
    const mobileQuery = "(max-width: 991px), (pointer: coarse)";
    const isMobileDevice = window.matchMedia?.(mobileQuery)?.matches ?? false;
    const path = (window.location?.pathname || "").replace(/\/+$/, "") || "/";
    const isPortfolioPage = path === "/portfolio";
    const webmSupported = (() => {
      const probe = document.createElement("video");
      if (!probe || typeof probe.canPlayType !== "function") return true;
      return !!probe.canPlayType("video/webm; codecs=vp8,vorbis");
    })();

    const getVideoSource = (video) => {
      const source = video.querySelector("source")?.getAttribute("src");
      return source || video.getAttribute("src") || "";
    };

    const resolvePoster = (video) => {
      const currentPoster = video.getAttribute("poster");
      if (currentPoster) return currentPoster;
      return "/assets/img/web-video-poster.png";
    };

    const sanitizeVideo = (video) => {
      if (managed.has(video)) return;

      managed.add(video);
      const poster = resolvePoster(video);
      const source = video.querySelector("source");
      const currentSrc = getVideoSource(video);

      if (!webmSupported && currentSrc && /\.webm(?:\?.*)?$/i.test(currentSrc)) {
        const mp4Src = currentSrc.replace(/\.webm(\?.*)?$/i, ".mp4$1");
        if (source) {
          source.setAttribute("src", mp4Src);
          source.setAttribute("type", "video/mp4");
        } else {
          video.setAttribute("src", mp4Src);
        }
        video.load();
      }

      video.autoplay = true;
      video.muted = true;
      video.defaultMuted = true;
      video.loop = true;
      video.controls = false;
      video.removeAttribute("controls");
      video.playsInline = true;
      video.tabIndex = -1;
      video.setAttribute("aria-hidden", "true");
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
      video.setAttribute("data-autoplay", "true");
      video.setAttribute("poster", poster);
      video.setAttribute("disablePictureInPicture", "");
      video.setAttribute("controlsList", "nodownload noplaybackrate noremoteplayback");

      video.setAttribute("autoplay", "");
      video.setAttribute("preload", isMobileDevice ? "metadata" : "auto");

      const tryPlay = () => {
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {});
        }
      };

      if (video.readyState >= 2) {
        tryPlay();
      } else {
        video.addEventListener("loadedmetadata", tryPlay, { once: true });
      }
    };

    const scan = (root = document) => {
      root.querySelectorAll("video.pgi-video").forEach(sanitizeVideo);
    };

    const pinPortfolioFilterTrigger = () => {
      if (!isMobileDevice || !isPortfolioPage) return;
      const triggerWrap = document.querySelector(".ttgr-cat-trigger-wrap.ttgr-cat-fixed");
      if (!(triggerWrap instanceof HTMLElement)) return;
      triggerWrap.style.position = "fixed";
      triggerWrap.style.right = "12px";
      triggerWrap.style.bottom = "calc(env(safe-area-inset-bottom, 0px) + 84px)";
      triggerWrap.style.opacity = "1";
      triggerWrap.style.visibility = "visible";
      triggerWrap.style.pointerEvents = "auto";
      triggerWrap.style.zIndex = "9999";
      triggerWrap.style.transform = "none";
    };

    scan();
    pinPortfolioFilterTrigger();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches?.("video.pgi-video")) {
            sanitizeVideo(node);
          }
          scan(node);
          pinPortfolioFilterTrigger();
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
