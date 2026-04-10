import "./globals.css";
import ForcePageTransitionFallback from "../components/ForcePageTransitionFallback";
import LegacyVendorScripts from "../components/LegacyVendorScripts";
import DecorativeMediaSanitizer from "../components/DecorativeMediaSanitizer";
import PortfolioMediaOverlay from "../components/PortfolioMediaOverlay";
import { rootMetadata } from "@/lib/seo";

export const metadata = rootMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200;300;400;500;600;700;900&display=swap"
        />
        <link rel="stylesheet" href="/assets/vendor/normalize/normalize.min.css" />
        <link rel="stylesheet" href="/assets/vendor/fontawesome/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="/assets/vendor/swiper/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/vendor/lightgallery/css/lightgallery.min.css" />
        <link rel="stylesheet" href="/assets/css/helper.css" />
        <link rel="stylesheet" href="/assets/css/theme.css" />
      </head>
      <body id="body" className="tt-transition tt-boxed tt-smooth-scroll tt-magic-cursor">
        {children}
        <LegacyVendorScripts />
        <DecorativeMediaSanitizer />
        <PortfolioMediaOverlay />
        <ForcePageTransitionFallback />
      </body>
    </html>
  );
}
