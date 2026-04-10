import fs from "node:fs";
import path from "node:path";

const LEGACY_HTML_DIR = path.join(process.cwd(), "legacy-html");

const SLUG_TO_FILE = {
  "404": "404.html",
  "about-us": "about-us.html",
  "ai-and-automation": "ai-and-automation.html",
  "contact": "contact.html",
  "creative-content": "creative-content.html",
  "creative-design": "creative-design.html",
  "digital-marketing": "digital-marketing.html",
  "landing-page-1": "landing-page-1.html",
  "portfolio": "portfolio.html",
  "portfolio-fullscreen-slider": "portfolio-fullscreen-slider.html",
  "software-development": "software-development.html",
  "video-editing": "video-editing.html",
  "website-development": "website-development.html",
  "brands-tools": "brands-tools.html",
};

function defaultTitleFromFile(fileName) {
  const base = fileName.replace(/\.html$/i, "");
  if (base === "index") return "Dots Studio";
  return base
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function readLegacyFile(fileName) {
  const filePath = path.join(LEGACY_HTML_DIR, fileName);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const titleMatch = raw.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const bodyMatch = raw.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

  const title = (titleMatch?.[1] || defaultTitleFromFile(fileName))
    .replace(/\s+/g, " ")
    .trim();
  const bodyHtml = (bodyMatch?.[1] || raw).replace(/<script\b[\s\S]*?<\/script>/gi, "");

  return { title, bodyHtml };
}

export function getHomeLegacyPage() {
  return readLegacyFile("index.html");
}

export function getLegacyPageBySlug(slug) {
  const fileName = SLUG_TO_FILE[slug];
  if (!fileName) return null;
  return readLegacyFile(fileName);
}

export function getLegacySlugs() {
  return Object.keys(SLUG_TO_FILE);
}

export function getLegacyNotFoundPage() {
  return readLegacyFile("404.html");
}
