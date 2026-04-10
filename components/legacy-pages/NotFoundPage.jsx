export default function NotFoundPage() {
  return (
    <>
      <div>
        {/* *************************************
      		*********** Begin body inner ************* 
      		************************************** */}
        <main id="body-inner">
          {/* Begin page transition (do not remove!!!) 
      			=========================== */}
          <div id="page-transition">
            <div className="ptr-overlay" />
            <div className="ptr-preloader">
              <div className="ptr-prel-content">
                {/* Hint: You may need to change the img height and opacity to match your logo type. You can do this from the "theme.css" file (find: ".ptr-prel-image"). */}
                <img loading="eager" fetchPriority="high" decoding="async" src="/assets/img/dots-logo-white.png" className="ptr-prel-image tt-logo-light" alt="Logo" />
              </div> {/* /.ptr-prel-content */}
            </div> {/* /.ptr-preloader */}
          </div>
          {/* End page transition */}
          {/* Begin magic cursor 
      			======================== */}
          <div id="magic-cursor">
            <div id="ball" />
          </div>
          {/* End magic cursor */}
          {/* Begin noise background */}
          <div className="bg-noise" />
          {/* End noise background */} 
          {/* *****************************************
      			*********** Begin scroll container *********** 
      			****************************************** */}
          <div id="scroll-container"> 
            {/* ===================
      				///// Begin header /////
      				========================
      				* Use class "tt-header-fixed" to set header to fixed position.
      				*/}
            <header id="tt-header" className="tt-header-fixed">
              <div className="tt-header-inner"> {/* add/remove class "tt-wrap" to enable/disable element boxed layout (class "tt-boxed" is required in <body> tag!). Note: additionally you can use prepared helper class "max-width-*" to add custom width to "tt-wrap". Example: "max-width-1500" (class "tt-wrap" is still required!). More info about helper classes can be found in the file "helper.css". */}
                <div className="tt-header-col">
                  {/* Begin logo 
      							================ */}
                  <div className="tt-logo"> 
                    <a href="/">
                      {/* Hint: You may need to change the img height to match your logo type. You can do this from the "theme.css" file (find: ".tt-logo img"). */}
                      <img loading="eager" fetchPriority="high" decoding="async" src="/assets/img/dots-logo-white.png" className="tt-logo-light magnetic-item" alt="Logo" /> {/* logo light */}
                      <img loading="lazy" decoding="async" src="/assets/img/dots-logo-dark.png" className="tt-logo-dark magnetic-item" alt="Logo" /> {/* logo dark */}
                    </a>
                  </div>
                  {/* End logo */}
                </div> {/* /.tt-header-col */}
                <div className="tt-header-col">
                  {/* Begin overlay menu toggle button */}
                  <div id="tt-ol-menu-toggle-btn-wrap">
                    <div className="tt-ol-menu-toggle-btn-text">
                      <span className="text-menu" data-hover="Open">Menu</span>
                      <span className="text-close">Close</span>
                    </div>
                    <div className="tt-ol-menu-toggle-btn-holder">
                      <a href="#" className="tt-ol-menu-toggle-btn magnetic-item"><span /></a>
                    </div>
                  </div>
                  {/* End overlay menu toggle button */}
                  {/* Begin overlay menu 
      							======================== 
      							* Use class "tt-ol-menu-center" to align menu to center.
      							* Use class "tt-ol-menu-count" to enable menu counter.
      							*/}
                  <nav className="tt-overlay-menu tt-ol-menu-center tt-ol-menu-count">
                    <div className="tt-ol-menu-holder">
                      <div className="tt-ol-menu-inner tt-wrap">
                        <div className="tt-ol-menu-content">
                          {/* Begin menu list */}
                          <ul className="tt-ol-menu-list">
                            {/* <li><a href="">Single Link</a></li> */}
                            {/* Begin submenu (submenu master)
      												==================================== */}
                            <li className="tt-ol-submenu-wrap">
                              <div className="tt-ol-submenu-trigger">
                                <a href="#">Home</a>
                                <div className="tt-ol-submenu-caret-wrap">
                                  <div className="tt-ol-submenu-caret magnetic-item" />
                                </div> {/* /.tt-ol-submenu-caret-wrap */}
                              </div> {/* /.tt-ol-submenu-trigger */}
                              <div className="tt-ol-submenu">
                                <ul className="tt-ol-submenu-list">
                                  <li><a href="/landing-page-1">Landing Page v.1</a></li>
                                  <li><a href="/landing-page-2">Landing Page v.2</a></li>
                                </ul> {/* /.tt-ol-submenu-list */}
                              </div> {/* /.tt-ol-submenu */}
                            </li>
                            {/* End submenu (sub-master) */}
                            {/* Begin submenu (submenu master)
      												==================================== */}
                            <li className="tt-ol-submenu-wrap">
                              <div className="tt-ol-submenu-trigger">
                                <a href="#">Portfolio</a>
                                <div className="tt-ol-submenu-caret-wrap">
                                  <div className="tt-ol-submenu-caret magnetic-item" />
                                </div> {/* /.tt-ol-submenu-caret-wrap */}
                              </div> {/* /.tt-ol-submenu-trigger */}
                              <div className="tt-ol-submenu">
                                <ul className="tt-ol-submenu-list">
                                  {/* Begin submenu
      															=================== */}
                                  <li className="tt-ol-submenu-wrap">
                                    <div className="tt-ol-submenu-trigger">
                                      <a href="#" className="tt-ol-submenu-link">Portfolio List</a>
                                      <div className="tt-ol-submenu-caret-wrap">
                                        <div className="tt-ol-submenu-caret magnetic-item" />
                                      </div> {/* /.tt-ol-submenu-caret-wrap */}
                                    </div> {/* /.tt-ol-submenu-trigger */}
                                    <div className="tt-ol-submenu">
                                      <ul className="tt-ol-submenu-list">
                                        <li><a href="/portfolio-list-classic">List Classic</a></li>
                                        <li><a href="/portfolio-list-overlay">List Overlay</a></li>
                                        <li><a href="/portfolio-list-compact">List Compact</a></li>
                                      </ul> {/* /.tt-ol-submenu-list */}
                                    </div> {/* /.tt-ol-submenu */}
                                  </li>
                                  {/* End submenu */}
                                  {/* Begin submenu
      															=================== */}
                                  <li className="tt-ol-submenu-wrap">
                                    <div className="tt-ol-submenu-trigger">
                                      <a href="#" className="tt-ol-submenu-link">Portfolio Grid</a>
                                      <div className="tt-ol-submenu-caret-wrap">
                                        <div className="tt-ol-submenu-caret magnetic-item" />
                                      </div> {/* /.tt-ol-submenu-caret-wrap */}
                                    </div> {/* /.tt-ol-submenu-trigger */}
                                    <div className="tt-ol-submenu">
                                      <ul className="tt-ol-submenu-list">
                                        <li><a href="/portfolio-grid-creative-1">Grid Creative v.1</a></li>
                                        <li><a href="/portfolio-grid-creative-2">Grid Creative v.2</a></li>
                                        <li><a href="/portfolio-grid-modern">Grid Modern</a></li>
                                        <li><a href="/portfolio-grid-classic">Grid Classic</a></li>
                                        <li><a href="/portfolio-grid-portrait-mode">Portrait Mode</a></li>
                                        <li><a href="/portfolio-one-column">One Column</a></li>
                                      </ul> {/* /.tt-ol-submenu-list */}
                                    </div> {/* /.tt-ol-submenu */}
                                  </li>
                                  {/* End submenu */}
                                  {/* Begin submenu
      															=================== */}
                                  <li className="tt-ol-submenu-wrap">
                                    <div className="tt-ol-submenu-trigger">
                                      <a href="#" className="tt-ol-submenu-link">Slider &amp; Carousel</a>
                                      <div className="tt-ol-submenu-caret-wrap">
                                        <div className="tt-ol-submenu-caret magnetic-item" />
                                      </div> {/* /.tt-ol-submenu-caret-wrap */}
                                    </div> {/* /.tt-ol-submenu-trigger */}
                                    <div className="tt-ol-submenu">
                                      <ul className="tt-ol-submenu-list">
                                        <li><a href="/portfolio-fullscreen-slider">Fullscreen Slider</a></li>
                                        <li><a href="/portfolio-carousel-overlay">Carousel Overlay</a></li>
                                        <li><a href="/portfolio-carousel-center">Carousel Center</a></li>
                                        <li><a href="/portfolio-hover-carousel">Hover Carousel</a></li>
                                      </ul> {/* /.tt-ol-submenu-list */}
                                    </div> {/* /.tt-ol-submenu */}
                                  </li>
                                  {/* End submenu */}
                                  <li><a href="/portfolio-interactive">Interactive</a></li>
                                  <li><a href="/portfolio-interactive-compact">Interactive Compact</a></li>
                                  <li><a href="/elements-classic-menu">Classic Menu</a></li>
                                  <li><a href="/elements-classic-filter">Classic Filter</a></li>
                                </ul> {/* /.tt-ol-submenu-list */}
                              </div> {/* /.tt-ol-submenu */}
                            </li>
                            {/* End submenu (sub-master) */}
                            {/* Begin submenu (submenu master)
      												==================================== */}
                            <li className="tt-ol-submenu-wrap active">
                              <div className="tt-ol-submenu-trigger">
                                <a href="#">About</a>
                                <div className="tt-ol-submenu-caret-wrap">
                                  <div className="tt-ol-submenu-caret magnetic-item" />
                                </div> {/* /.tt-ol-submenu-caret-wrap */}
                              </div> {/* /.tt-ol-submenu-trigger */}
                              <div className="tt-ol-submenu">
                                <ul className="tt-ol-submenu-list">
                                  <li><a href="/about-us">About Us</a></li>
                                  <li className="active"><a href="/about-me">About Me</a></li>
                                </ul> {/* /.tt-ol-submenu-list */}
                              </div> {/* /.tt-ol-submenu */}
                            </li>
                            {/* End submenu (sub-master) */}
                            {/* Begin submenu (submenu master)
      												==================================== */}
                            <li className="tt-ol-submenu-wrap">
                              <div className="tt-ol-submenu-trigger">
                                <a href="#">Blog</a>
                                <div className="tt-ol-submenu-caret-wrap">
                                  <div className="tt-ol-submenu-caret magnetic-item" />
                                </div> {/* /.tt-ol-submenu-caret-wrap */}
                              </div> {/* /.tt-ol-submenu-trigger */}
                              <div className="tt-ol-submenu">
                                <ul className="tt-ol-submenu-list">
                                  {/* Begin submenu
      															=================== */}
                                  <li className="tt-ol-submenu-wrap">
                                    <div className="tt-ol-submenu-trigger">
                                      <a href="#" className="tt-ol-submenu-link">Blog List</a>
                                      <div className="tt-ol-submenu-caret-wrap">
                                        <div className="tt-ol-submenu-caret magnetic-item" />
                                      </div> {/* /.tt-ol-submenu-caret-wrap */}
                                    </div> {/* /.tt-ol-submenu-trigger */}
                                    <div className="tt-ol-submenu">
                                      <ul className="tt-ol-submenu-list">
                                        <li><a href="/blog-interactive">Interactive List</a></li>
                                        <li><a href="/blog-list">Compact List</a></li>
                                        <li><a href="/blog-classic">Classic List</a></li>
                                        <li><a href="/blog-classic-sidebar">Classic Sidebar</a></li>
                                      </ul> {/* /.tt-ol-submenu-list */}
                                    </div> {/* /.tt-ol-submenu */}
                                  </li>
                                  {/* End submenu */}
                                  {/* Begin submenu
      															=================== */}
                                  <li className="tt-ol-submenu-wrap">
                                    <div className="tt-ol-submenu-trigger">
                                      <a href="#" className="tt-ol-submenu-link">Blog Post</a>
                                      <div className="tt-ol-submenu-caret-wrap">
                                        <div className="tt-ol-submenu-caret magnetic-item" />
                                      </div> {/* /.tt-ol-submenu-caret-wrap */}
                                    </div> {/* /.tt-ol-submenu-trigger */}
                                    <div className="tt-ol-submenu">
                                      <ul className="tt-ol-submenu-list">
                                        <li><a href="/blog-post">Single Post</a></li>
                                        <li><a href="/blog-post-classic-sidebar">Classic Sidebar</a></li>
                                      </ul> {/* /.tt-ol-submenu-list */}
                                    </div> {/* /.tt-ol-submenu */}
                                  </li>
                                  {/* End submenu */}
                                </ul> {/* /.tt-ol-submenu-list */}
                              </div> {/* /.tt-ol-submenu */}
                            </li>
                            {/* End submenu (sub-master) */}
                            {/* Begin submenu (submenu master)
      												==================================== */}
                            <li className="tt-ol-submenu-wrap">
                              <div className="tt-ol-submenu-trigger">
                                <a href="#">Shop</a>
                                <div className="tt-ol-submenu-caret-wrap">
                                  <div className="tt-ol-submenu-caret magnetic-item" />
                                </div> {/* /.tt-ol-submenu-caret-wrap */}
                              </div> {/* /.tt-ol-submenu-trigger */}
                              <div className="tt-ol-submenu">
                                <ul className="tt-ol-submenu-list">
                                  {/* Begin submenu
      															=================== */}
                                  <li className="tt-ol-submenu-wrap">
                                    <div className="tt-ol-submenu-trigger">
                                      <a href="#" className="tt-ol-submenu-link">Product Lists</a>
                                      <div className="tt-ol-submenu-caret-wrap">
                                        <div className="tt-ol-submenu-caret magnetic-item" />
                                      </div> {/* /.tt-ol-submenu-caret-wrap */}
                                    </div> {/* /.tt-ol-submenu-trigger */}
                                    <div className="tt-ol-submenu">
                                      <ul className="tt-ol-submenu-list">
                                        <li><a href="/shop-list">Sliding Sidebar</a></li>
                                        <li><a href="/shop-list-classic">Classic Sidebar</a></li>
                                      </ul> {/* /.tt-ol-submenu-list */}
                                    </div> {/* /.tt-ol-submenu */}
                                  </li>
                                  {/* End submenu */}
                                  {/* Begin submenu
      															=================== */}
                                  <li className="tt-ol-submenu-wrap">
                                    <div className="tt-ol-submenu-trigger">
                                      <a href="#" className="tt-ol-submenu-link">Product Pages</a>
                                      <div className="tt-ol-submenu-caret-wrap">
                                        <div className="tt-ol-submenu-caret magnetic-item" />
                                      </div> {/* /.tt-ol-submenu-caret-wrap */}
                                    </div> {/* /.tt-ol-submenu-trigger */}
                                    <div className="tt-ol-submenu">
                                      <ul className="tt-ol-submenu-list">
                                        <li><a href="/shop-single">Product Page</a></li>
                                        <li><a href="/shop-single-simple">Simple Product Page</a></li>
                                      </ul> {/* /.tt-ol-submenu-list */}
                                    </div> {/* /.tt-ol-submenu */}
                                  </li>
                                  {/* End submenu */}
                                  {/* Begin submenu
      															=================== */}
                                  <li className="tt-ol-submenu-wrap">
                                    <div className="tt-ol-submenu-trigger">
                                      <a href="#" className="tt-ol-submenu-link">Product Ordering</a>
                                      <div className="tt-ol-submenu-caret-wrap">
                                        <div className="tt-ol-submenu-caret magnetic-item" />
                                      </div> {/* /.tt-ol-submenu-caret-wrap */}
                                    </div> {/* /.tt-ol-submenu-trigger */}
                                    <div className="tt-ol-submenu">
                                      <ul className="tt-ol-submenu-list">
                                        <li><a href="/shop-cart">Shopping Cart</a></li>
                                        <li><a href="/shop-checkout">Checkout</a></li>
                                        <li><a href="/shop-order-details">Order Details</a></li>
                                      </ul> {/* /.tt-ol-submenu-list */}
                                    </div> {/* /.tt-ol-submenu */}
                                  </li>
                                  {/* End submenu */}
                                  {/* Begin submenu
      															=================== */}
                                  <li className="tt-ol-submenu-wrap">
                                    <div className="tt-ol-submenu-trigger">
                                      <a href="#" className="tt-ol-submenu-link">More Pages</a>
                                      <div className="tt-ol-submenu-caret-wrap">
                                        <div className="tt-ol-submenu-caret magnetic-item" />
                                      </div> {/* /.tt-ol-submenu-caret-wrap */}
                                    </div> {/* /.tt-ol-submenu-trigger */}
                                    <div className="tt-ol-submenu">
                                      <ul className="tt-ol-submenu-list">
                                        <li><a href="/shop-wishlist">Wishlist</a></li>
                                        <li><a href="/shop-login">Login Page</a></li>
                                        <li><a href="/shop-register">Register Account</a></li>
                                        <li><a href="/shop-reset-password">Reset Password</a></li>
                                      </ul> {/* /.tt-ol-submenu-list */}
                                    </div> {/* /.tt-ol-submenu */}
                                  </li>
                                  {/* End submenu */}
                                </ul> {/* /.tt-ol-submenu-list */}
                              </div> {/* /.tt-ol-submenu */}
                            </li>
                            {/* End submenu (sub-master) */}
                            <li><a href="/contact">Contact</a></li>
                          </ul>
                          {/* End menu list */}
                        </div> {/* /.tt-ol-menu-content */}
                      </div> {/* /.tt-ol-menu-inner */}
                    </div> {/* /.tt-ol-menu-holder */}
                    {/* Begin noise background */}
                    <div className="bg-noise" />
                    {/* End noise background */}
                  </nav> 
                  {/* End overlay menu */}
                </div> {/* /.header-col */}
              </div> {/* /.header-inner */}
            </header>
            {/* End header */}
            {/* *************************************
      				*********** Begin content wrap *********** 
      				************************************** */}
            <div id="content-wrap">
              {/* ========================
      					///// Begin page header /////
      					============================= 
      					* Use class "ph-full" to enable fullscreen size.
      					* Use class "ph-cap-sm", "ph-cap-lg", "ph-cap-xlg" or "ph-cap-xxlg" to set caption size (no class = default size).
      					* Use class "ph-center" to enable content center position.
      					* Use class "ph-bg-image" to enable page header background image (required for a portfolio single project!).
      					* Use class "ph-bg-image-is-light" if needed, it makes the elements dark and more visible if you use a very light image (effect only with class "ph-bg-image").
      					* Use class "ph-image-shadow" to enable page header background image (effect only with class "ph-bg-image").
      					* Use class "ph-image-cropped" to crop image. It fixes image dimensions (no effect for "ph-bg-image"!).
      					* Use class "ph-image-cover-*" to set image overlay opacity. For example "ph-image-cover-2" or "ph-image-cover-2-5" (up to "ph-image-cover-9-5").
      					* Use class "ph-content-parallax" to enable content parallax.
      					* Use class "ph-stroke" to enable caption title stroke style.
      					*/}
              <div id="page-header" className="ph-full ph-cap-xxlg ph-center ph-bg-image ph-image-cover-6">
                <div className="page-header-inner tt-wrap">
                  {/* Begin page header image 
      							============================= */}
                  <div className="ph-image">
                    <div className="ph-image-inner">
                      <img loading="lazy" decoding="async" src="/assets/img/page-header/ph-7.jpg" alt="Image" />
                    </div>
                  </div>
                  {/* End page header image */}
                  {/* Begin page header caption
      							=============================== 
      							Use class "max-width-*" to set caption max width if needed. For example "max-width-1000". More info about helper classes can be found in the file "helper.css".
      							*/}
                  <div className="ph-caption">
                    <h1 className="ph-caption-title ph-appear">404</h1>
                    <div className="ph-caption-title-ghost ph-appear">404</div>
                    <div className="ph-caption-subtitle ph-appear">Oops! We couldn't find that page.</div>
                  </div> 
                  {/* End page header caption */}
                </div> {/* /.page-header-inner */}
              </div>
              {/* End page header */}
              {/* ======================
      					///// Begin tt-footer /////
      					=========================== */}
              <footer id="tt-footer" className="footer-absolute">
                <div className="tt-footer-inner">
                  {/* Begin footer column 
      							========================= */}
                  <div className="footer-col tt-align-center-left">
                    <div className="footer-col-inner">
                      {/* You can use whatever button or link here */}
                      <div className="tt-btn tt-btn-link">
                        <a href="/" data-hover="Back to Home">Back to Home</a>
                      </div>
                    </div> {/* /.footer-col-inner */}
                  </div>
                  {/* Begin footer column */}
                  {/* Begin footer column 
      							========================= */}
                  <div className="footer-col tt-align-center order-m-last">
                    <div className="footer-col-inner">
                      <div className="tt-copyright">
                        © Copyright - <a href="https://themetorium.net" target="_blank" rel="noopener" className="tt-link">Themetorium.net</a>
                      </div>
                    </div> {/* /.footer-col-inner */}
                  </div>
                  {/* Begin footer column */}
                  {/* Begin footer column 
      							========================= */}
                  <div className="footer-col tt-align-center-right">
                    <div className="footer-col-inner">
                      <div className="footer-social">
                        <div className="footer-social-text"><span>Follow</span><i className="fas fa-share-alt" /></div>
                        <div className="social-buttons">
                          <ul>
                            <li><a href="https://www.facebook.com/themetorium" className="magnetic-item" target="_blank" rel="noopener">Fb.</a></li>
                            <li><a href="https://twitter.com/Themetorium" className="magnetic-item" target="_blank" rel="noopener">Tw.</a></li>
                            <li><a href="https://www.youtube.com/" className="magnetic-item" target="_blank" rel="noopener">Yt.</a></li>
                            <li><a href="https://dribbble.com/Themetorium" className="magnetic-item" target="_blank" rel="noopener">Dr.</a></li>
                            <li><a href="https://www.behance.net/Themetorium" className="magnetic-item" target="_blank" rel="noopener">Be.</a></li>
                          </ul>
                        </div> {/* /.social-buttons */}
                      </div> {/* /.footer-social */}
                    </div> {/* /.footer-col-inner */}
                  </div>
                  {/* Begin footer column */}
                </div> {/* /.tt-section-inner */}
              </footer>
              {/* End tt-footer */}
            </div>
            {/* End content wrap */}
          </div>
          {/* End scroll container */}
        </main>
        {/* End body inner */}
        {/* ====================
      		///// Scripts below /////
      		===================== */}
        {/* Core JS */}
        {/* jquery JS (https://jquery.com) */}
        {/* Libs and Plugins JS */}
        {/* GSAP JS (https://greensock.com/gsap/) */}
        {/* GSAP ScrollToPlugin JS (https://greensock.com/scrolltoplugin/) */}
        {/* GSAP ScrollTrigger JS (https://greensock.com/scrolltrigger/) */}
        {/* Smooth Scrollbar JS (https://github.com/idiotWu/smooth-scrollbar/) */}
        {/* Swiper JS (https://swiperjs.com/) */}
        {/* imagesloaded JS (more info: https://imagesloaded.desandro.com/) */}
        {/* Isotope JS (http://isotope.metafizzy.co) */}
        {/* Isotope Packery Mode JS (https://isotope.metafizzy.co/layout-modes/packery.html) */}
        {/* lightGallery Plugins JS (http://sachinchoolur.github.io/lightGallery) */}
        {/* A jQuery plugin that adds cross browser mouse wheel support (https://github.com/jquery/jquery-mousewheel) */}
        {/* Theme master JS */}
      </div>
      
    </>
  );
}
