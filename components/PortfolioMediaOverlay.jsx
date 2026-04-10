"use client";

import { useEffect, useRef, useState } from "react";

const CLOSE_ANIMATION_MS = 260;

function findMediaFromItem(item) {
  if (!item) return null;

  const title = item.querySelector(".pgi-title")?.textContent?.trim() || "Portfolio Preview";

  const video = item.querySelector("video.pgi-video");
  if (video) {
    const source = video.querySelector("source")?.getAttribute("src");
    const src = source || video.getAttribute("src");
    if (src) {
      return {
        type: "video",
        src,
        title,
      };
    }
  }

  const image = item.querySelector(".pgi-image img");
  if (image) {
    const src = image.getAttribute("src");
    if (src) {
      return {
        type: "image",
        src,
        title,
      };
    }
  }

  return null;
}

export default function PortfolioMediaOverlay() {
  const [activeMedia, setActiveMedia] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimerRef = useRef(null);
  const isClosingRef = useRef(false);
  const activeMediaRef = useRef(null);

  useEffect(() => {
    activeMediaRef.current = activeMedia;
    isClosingRef.current = isClosing;
  }, [activeMedia, isClosing]);

  const openOverlay = (media) => {
    if (!media) return;
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsClosing(false);
    setActiveMedia(media);
  };

  const closeOverlay = () => {
    if (!activeMediaRef.current || isClosingRef.current) return;
    setIsClosing(true);
    closeTimerRef.current = window.setTimeout(() => {
      setActiveMedia(null);
      setIsClosing(false);
      closeTimerRef.current = null;
    }, CLOSE_ANIMATION_MS);
  };

  useEffect(() => {
    const markItemsClickable = () => {
      document.querySelectorAll(".portfolio-grid-item").forEach((item) => {
        if (item.getAttribute("data-preview-clickable") === "1") return;
        if (!findMediaFromItem(item)) return;

        item.setAttribute("data-preview-clickable", "1");
        item.setAttribute("role", "button");
        item.setAttribute("tabindex", "0");
        item.setAttribute("aria-label", "Open media preview");
        item.classList.add("portfolio-preview-clickable");
      });
    };

    const openFromTarget = (target) => {
      if (!target) return;
      if (target.closest("a[href]")) return;

      const item = target.closest(".portfolio-grid-item");
      if (!item) return;

      const media = findMediaFromItem(item);
      if (!media) return;
      openOverlay(media);
    };

    const onClick = (event) => {
      openFromTarget(event.target);
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeOverlay();
        return;
      }

      if (event.key !== "Enter" && event.key !== " ") return;

      const item = event.target.closest(".portfolio-grid-item");
      if (!item) return;
      event.preventDefault();
      const media = findMediaFromItem(item);
      if (media) openOverlay(media);
    };

    markItemsClickable();
    const observer = new MutationObserver(markItemsClickable);
    observer.observe(document.body, { childList: true, subtree: true });

    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      observer.disconnect();
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKeyDown);
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!activeMedia) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeMedia]);

  if (!activeMedia) return null;

  return (
    <div
      className={`portfolio-overlay-modal ${isClosing ? "is-closing" : "is-opening"}`}
      role="dialog"
      aria-modal="true"
      aria-label={activeMedia.title}
    >
      <button type="button" className="portfolio-overlay-backdrop" aria-label="Close preview" onClick={closeOverlay} />
      <div className="portfolio-overlay-content">
        <button type="button" className="portfolio-overlay-close" aria-label="Close preview" onClick={closeOverlay}>
          ×
        </button>
        <div className="portfolio-overlay-title">{activeMedia.title}</div>
        {activeMedia.type === "video" ? (
          <video
            src={activeMedia.src}
            className="portfolio-overlay-video"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            controls={false}
            disablePictureInPicture
            controlsList="nodownload noplaybackrate noremoteplayback"
          />
        ) : (
          <img src={activeMedia.src} alt={activeMedia.title} className="portfolio-overlay-image" />
        )}
      </div>
    </div>
  );
}
