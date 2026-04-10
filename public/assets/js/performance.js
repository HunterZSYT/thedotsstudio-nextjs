(function () {
  "use strict";

  var videos = Array.prototype.slice.call(document.querySelectorAll("video"));
  if (!videos.length) return;
  var visibilityMap = new Map();
  var isPortfolioPage = /^\/portfolio(?:\/|$)/.test(window.location.pathname || "");

  var isConstrainedDevice = false;
  try {
    var coarsePointer = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
    var smallViewport = window.matchMedia && window.matchMedia("(max-width: 991px)").matches;
    isConstrainedDevice = !!(coarsePointer || smallViewport);
  } catch (e) {
    isConstrainedDevice = false;
  }

  if (typeof navigator.deviceMemory === "number" && navigator.deviceMemory <= 4) {
    isConstrainedDevice = true;
  }

  // On mobile portfolio page, disable decorative autoplay entirely to avoid iOS tab reloads.
  if (isConstrainedDevice && isPortfolioPage) {
    videos.forEach(function (video) {
      if (!video.classList.contains("pgi-video")) return;
      video.dataset.autoplay = "false";
      video.removeAttribute("data-autoplay");
      video.autoplay = false;
      video.pause();
      video.setAttribute("preload", "none");
    });
  }

  function ensureReady(video) {
    if (video.dataset.perfLoaded === "1") return;

    if (video.dataset.autoplay === "true") {
      video.setAttribute("preload", "metadata");
    } else if (!video.getAttribute("preload")) {
      video.setAttribute("preload", "none");
    }

    video.dataset.perfLoaded = "1";
    video.load();
  }

  function playIfNeeded(video) {
    ensureReady(video);
    if (video.dataset.autoplay !== "true") return;

    var promise = video.play();
    if (promise && typeof promise.catch === "function") {
      promise.catch(function () {});
    }
  }

  function pauseIfNeeded(video) {
    if (video.dataset.autoplay === "true" && !video.paused) {
      video.pause();
    }
  }

  function syncConstrainedPlayback() {
    if (!isConstrainedDevice) return;

    var activeVideo = null;
    videos.some(function (video) {
      if (video.dataset.autoplay !== "true") return false;
      if (!visibilityMap.get(video)) return false;
      activeVideo = video;
      return true;
    });

    videos.forEach(function (video) {
      if (video.dataset.autoplay !== "true") return;
      if (video === activeVideo) {
        playIfNeeded(video);
      } else {
        pauseIfNeeded(video);
      }
    });
  }

  if (!("IntersectionObserver" in window)) {
    if (isConstrainedDevice) {
      videos.some(function (video) {
        if (video.dataset.autoplay !== "true") return false;
        playIfNeeded(video);
        return true;
      });
    } else {
      videos.forEach(playIfNeeded);
    }
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        var video = entry.target;
        visibilityMap.set(video, !!entry.isIntersecting);
      });

      if (isConstrainedDevice) {
        syncConstrainedPlayback();
        return;
      }

      entries.forEach(function (entry) {
        var video = entry.target;
        if (entry.isIntersecting) playIfNeeded(video);
        else pauseIfNeeded(video);
      });
    },
    {
      root: null,
      rootMargin: "120px 0px",
      threshold: 0.25
    }
  );

  videos.forEach(function (video) {
    video.setAttribute("preload", "none");
    if (!video.hasAttribute("playsinline")) {
      video.setAttribute("playsinline", "");
    }
    visibilityMap.set(video, false);
    observer.observe(video);
  });

  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState !== "hidden") return;
    videos.forEach(pauseIfNeeded);
  });
})();
