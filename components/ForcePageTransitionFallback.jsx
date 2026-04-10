"use client";

import { useEffect } from "react";

export default function ForcePageTransitionFallback() {
  useEffect(() => {
    const hideTransition = () => {
      const transition = document.getElementById("page-transition");
      if (!transition) return;

      transition.style.opacity = "0";
      transition.style.visibility = "hidden";
      transition.style.pointerEvents = "none";
    };
    // Safety-only fallback: theme.js owns the normal animation flow.
    const safetyTimer = window.setTimeout(hideTransition, 8000);

    return () => {
      window.clearTimeout(safetyTimer);
    };
  }, []);

  return null;
}
