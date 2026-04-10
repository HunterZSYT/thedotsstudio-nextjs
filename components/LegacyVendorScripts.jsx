"use client";

import { useEffect } from "react";

const SCRIPT_URLS = [
  "/assets/vendor/jquery/jquery.min.js",
  "/assets/vendor/gsap/gsap.min.js",
  "/assets/vendor/gsap/ScrollToPlugin.min.js",
  "/assets/vendor/gsap/ScrollTrigger.min.js",
  "/assets/vendor/smooth-scrollbar.js",
  "/assets/vendor/swiper/js/swiper-bundle.min.js",
  "/assets/vendor/isotope/imagesloaded.pkgd.min.js",
  "/assets/vendor/isotope/isotope.pkgd.min.js",
  "/assets/vendor/isotope/packery-mode.pkgd.min.js",
  "/assets/vendor/lightgallery/js/lightgallery-all.min.js",
  "/assets/vendor/jquery.mousewheel.min.js",
  "/assets/js/performance.js?v=2",
  "/assets/js/theme.js",
];

let scriptsLoadPromise;

function loadScriptsSequentially(urls) {
  return urls.reduce((promise, url) => {
    return promise.then(
      () =>
        new Promise((resolve, reject) => {
          const existing = document.querySelector(`script[data-legacy-src="${url}"]`);
          if (existing) {
            resolve();
            return;
          }

          const script = document.createElement("script");
          script.src = url;
          script.async = false;
          script.defer = false;
          script.dataset.legacySrc = url;
          script.onload = () => resolve();
          script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
          document.body.appendChild(script);
        }),
    );
  }, Promise.resolve());
}

export default function LegacyVendorScripts() {
  useEffect(() => {
    if (!scriptsLoadPromise) {
      scriptsLoadPromise = loadScriptsSequentially(SCRIPT_URLS).catch((error) => {
        console.error(error);
      });
    }
  }, []);

  return null;
}
