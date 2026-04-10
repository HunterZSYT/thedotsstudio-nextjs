(function () {
  "use strict";

  var videos = Array.prototype.slice.call(document.querySelectorAll("video"));
  if (!videos.length) return;

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

  if (!("IntersectionObserver" in window)) {
    videos.forEach(playIfNeeded);
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        var video = entry.target;
        if (entry.isIntersecting) {
          playIfNeeded(video);
        } else {
          pauseIfNeeded(video);
        }
      });
    },
    {
      root: null,
      rootMargin: "300px 0px",
      threshold: 0.15
    }
  );

  videos.forEach(function (video) {
    if (video.dataset.autoplay === "true") {
      video.setAttribute("preload", "metadata");
    } else {
      video.setAttribute("preload", "none");
    }
    if (!video.hasAttribute("playsinline")) {
      video.setAttribute("playsinline", "");
    }
    observer.observe(video);
  });
})();
