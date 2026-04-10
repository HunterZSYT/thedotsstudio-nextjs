export default function MyMenuPage() {
  return (
    <>
      <div><nav className="tt-overlay-menu tt-ol-menu-center tt-ol-menu-count">
          <div className="tt-ol-menu-holder">
            <div className="tt-ol-menu-inner tt-wrap">
              <div className="tt-ol-menu-content">
                {/* Begin menu list */}
                <ul className="tt-ol-menu-list">
                  {/* Home (no dropdown) */}
                  <li><a href="/landing-page-1">Home</a></li>
                  {/* Portfolio (minimal dropdown) */}
                  <li className="tt-ol-submenu-wrap">
                    <div className="tt-ol-submenu-trigger">
                      <a href="#">Portfolio</a>
                      <div className="tt-ol-submenu-caret-wrap">
                        <div className="tt-ol-submenu-caret magnetic-item" />
                      </div>
                    </div>
                    <div className="tt-ol-submenu">
                      <ul className="tt-ol-submenu-list">
                        <li><a href="/portfolio-grid-creative-1">Grid Creative</a></li>
                        <li><a href="/portfolio-fullscreen-slider">Fullscreen Slider</a></li>
                      </ul>
                    </div>
                  </li>
                  {/* About (no personal version) */}
                  <li className="tt-ol-submenu-wrap">
                    <div className="tt-ol-submenu-trigger">
                      <a href="#">About</a>
                      <div className="tt-ol-submenu-caret-wrap">
                        <div className="tt-ol-submenu-caret magnetic-item" />
                      </div>
                    </div>
                    <div className="tt-ol-submenu">
                      <ul className="tt-ol-submenu-list">
                        <li><a href="/about-us">About Us</a></li>
                      </ul>
                    </div>
                  </li>
                  {/* Contact */}
                  <li><a href="/contact">Contact</a></li>
                </ul>
                {/* End menu list */}
              </div>
            </div>
          </div>
          {/* Noise background (keep if your theme uses it) */}
          <div className="bg-noise" />
        </nav></div>
      
    </>
  );
}
