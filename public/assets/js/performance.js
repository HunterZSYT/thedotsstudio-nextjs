(function () {
  "use strict";

  var videos = Array.prototype.slice.call(document.querySelectorAll("video"));
  if (!videos.length) return;
  var visibilityMap = new Map();
  var webmSupported = (function () {
    try {
      var probe = document.createElement("video");
      if (!probe || typeof probe.canPlayType !== "function") return true;
      return !!probe.canPlayType("video/webm; codecs=vp8,vorbis");
    } catch (e) {
      return true;
    }
  })();

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

  function resolvePosterFromSource(sourceSrc) {
    if (!sourceSrc) return "";

    if (/\/assets\/dots-assets-vids\/portfolio-vid\.(webm|mp4)/i.test(sourceSrc)) {
      return "/assets/img/web-video-poster.png";
    }
    if (/\/assets\/dots-assets-vids\/contact-vid\.(webm|mp4)/i.test(sourceSrc)) {
      return "/assets/img/web-video-poster.png";
    }

    var match = sourceSrc.match(/portfolio-vid-(\d+)\.(webm|mp4)/i);
    if (!match) return "";
    var id = parseInt(match[1], 10);

    var portfolioPosterExt = {
      1: "jpg",
      2: "jpg",
      4: "png",
      5: "png",
      6: "png",
      7: "png",
      8: "png",
      9: "png",
      10: "png",
      11: "png"
    };

    if (!portfolioPosterExt[id]) return "";
    return "/assets/dots-portfolio-all/portfolio-pic-" + id + "." + portfolioPosterExt[id];
  }

  function applyPoster(video) {
    if (!video || video.getAttribute("poster")) return;
    var sourceNode = video.querySelector("source");
    var sourceSrc = "";
    if (sourceNode && sourceNode.getAttribute) {
      sourceSrc = sourceNode.getAttribute("src") || "";
    }
    if (!sourceSrc) {
      sourceSrc = video.getAttribute("src") || "";
    }
    var posterSrc = resolvePosterFromSource(sourceSrc);
    if (posterSrc) {
      video.setAttribute("poster", posterSrc);
    }
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
    var sourceNode = video.querySelector("source");
    var sourceSrc = sourceNode ? (sourceNode.getAttribute("src") || "") : (video.getAttribute("src") || "");
    if (!webmSupported && /\.webm(?:\?.*)?$/i.test(sourceSrc)) {
      var mp4Src = sourceSrc.replace(/\.webm(\?.*)?$/i, ".mp4$1");
      if (sourceNode) {
        sourceNode.setAttribute("src", mp4Src);
        sourceNode.setAttribute("type", "video/mp4");
      } else {
        video.setAttribute("src", mp4Src);
      }
    }

    video.controls = false;
    video.removeAttribute("controls");
    video.setAttribute("muted", "");
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    if (!video.dataset.autoplay) {
      video.dataset.autoplay = video.hasAttribute("autoplay") ? "true" : "false";
    }

    applyPoster(video);
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
