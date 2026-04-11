export default function PortfolioFullscreenSliderPage() {
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
              {/* *************************************
      					*********** Begin page content *********** 
      					************************************** */}
              <div id="page-content">
                {/* ==================================================
      						///// Begin portfolio slider (full screen slider) /////
      						=======================================================
      						* Use class "cursor-drag-mouse-down" to enable cursor drag style on mouse down ("data-simulate-touch" attribute must be enabled!).
      						* Available data attributes:
      								data-speed="900"......................(milliseconds)
      								data-autoplay="5000"..................(milliseconds. Note: disabled after user first interactions)
      								data-mousewheel="true"................(true/false)
      								data-keyboard="true"..................(true/false)
      								data-simulate-touch="true"............(true/false)
      								data-grab-cursor="true"...............(true/false)
      								data-pagination-type="fraction".......(bullets/fraction/progressbar)
      								data-parallax-mouse-move="true".......(true/false)
      						*/}
                <div className="tt-portfolio-slider cursor-drag-mouse-down" data-speed={1000} data-mousewheel="true" data-keyboard="true" data-simulate-touch="true" data-grab-cursor="true" data-pagination-type="fraction" data-parallax-mouse-move="true">
                  {/* Begin swiper container */}
                  <div className="swiper">
                    {/* Begin swiper wrapper (required) */}
                    <div className="swiper-wrapper">
                      {/* Begin swiper slide 
      									======================== 
      									* Change data attributes (data-url="...", data-title="...", data-category="...") according to your needs.
      									* Use class "psi-image-is-light" if needed, it makes the elements dark and more visible if you use a very light image.
      									*/}
                      <div className="swiper-slide" data-url="single-project-1.html" data-title="Victorian Girls" data-category="People">
                        {/* Use class "cover-opacity-*" to set an image overlay if needed. For example "cover-opacity-2". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                        <div className="tt-portfolio-slider-item cover-opacity-3" data-swiper-parallax="50%">
                          <img loading="lazy" decoding="async" className="tt-psi-image swiper-lazy" src="/assets/img/low-qlt-thumb.jpg" data-src="/assets/img/portfolio/portfolio-1.jpg" alt="Image" />
                        </div> {/* /.tt-portfolio-slider-item */}
                      </div> 
                      {/* End swiper slide */}
                      {/* Begin swiper slide 
      									======================== 
      									* Change data attributes (data-url="...", data-title="...", data-category="...") according to your needs.
      									* Use class "psi-image-is-light" if needed, it makes the elements dark and more visible if you use a very light image.
      									*/}
                      <div className="swiper-slide" data-url="single-project-2.html" data-title="Smithy" data-category="Creative">
                        {/* Use class "cover-opacity-*" to set an image overlay if needed. For example "cover-opacity-2". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                        <div className="tt-portfolio-slider-item cover-opacity-3" data-swiper-parallax="50%">
                          <img loading="lazy" decoding="async" className="tt-psi-image swiper-lazy" src="/assets/img/low-qlt-thumb.jpg" data-src="/assets/img/portfolio/portfolio-2.jpg" alt="Image" />
                        </div> {/* /.tt-portfolio-slider-item */}
                      </div> 
                      {/* End swiper slide */}
                      {/* Begin swiper slide 
      									======================== 
      									* Change data attributes (data-url="...", data-title="...", data-category="...") according to your needs.
      									* Use class "psi-image-is-light" if needed, it makes the elements dark and more visible if you use a very light image.
      									*/}
                      <div className="swiper-slide" data-url="single-project-3.html" data-title="Fashion Week" data-category="People">
                        {/* Use class "cover-opacity-*" to set an image overlay if needed. For example "cover-opacity-2". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                        <div className="tt-portfolio-slider-item cover-opacity-3" data-swiper-parallax="50%">
                          <video playsInline className="tt-bg-video" loop muted preload="none" poster="/assets/vids/fashion-week.jpg">
                            <source src="/assets/vids/website.mp4" type="video/mp4" />
                            <source src="/assets/vids/website.mp4" type="video/mp4" />
                          </video>
                        </div> {/* /.tt-portfolio-slider-item */}
                      </div> 
                      {/* End swiper slide */}
                      {/* Begin swiper slide 
      									======================== 
      									* Change data attributes (data-url="...", data-title="...", data-category="...") according to your needs.
      									* Use class "psi-image-is-light" if needed, it makes the elements dark and more visible if you use a very light image.
      									*/}
                      <div className="swiper-slide" data-url="single-project-4.html" data-title="Mystery Forest" data-category="Nature">
                        {/* Use class "cover-opacity-*" to set an image overlay if needed. For example "cover-opacity-2". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                        <div className="tt-portfolio-slider-item cover-opacity-3" data-swiper-parallax="50%">
                          <img loading="lazy" decoding="async" className="tt-psi-image swiper-lazy" src="/assets/img/low-qlt-thumb.jpg" data-src="/assets/img/portfolio/portfolio-3.jpg" alt="Image" />
                        </div> {/* /.tt-portfolio-slider-item */}
                      </div> 
                      {/* End swiper slide */}
                      {/* Begin swiper slide 
      									======================== 
      									* Change data attributes (data-url="...", data-title="...", data-category="...") according to your needs.
      									* Use class "psi-image-is-light" if needed, it makes the elements dark and more visible if you use a very light image.
      									*/}
                      <div className="swiper-slide" data-url="single-project-5.html" data-title="Red Package" data-category="Branding">
                        {/* Use class "cover-opacity-*" to set an image overlay if needed. For example "cover-opacity-2". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                        <div className="tt-portfolio-slider-item cover-opacity-3" data-swiper-parallax="50%">
                          <img loading="lazy" decoding="async" className="tt-psi-image swiper-lazy" src="/assets/img/low-qlt-thumb.jpg" data-src="/assets/img/portfolio/portfolio-4.jpg" alt="Image" />
                        </div> {/* /.tt-portfolio-slider-item */}
                      </div> 
                      {/* End swiper slide */}
                      {/* Begin swiper slide 
      									======================== 
      									* Change data attributes (data-url="...", data-title="...", data-category="...") according to your needs.
      									* Use class "psi-image-is-light" if needed, it makes the elements dark and more visible if you use a very light image.
      									*/}
                      <div className="swiper-slide" data-url="single-project-6.html" data-title="Studio Shoot" data-category="People">
                        {/* Use class "cover-opacity-*" to set an image overlay if needed. For example "cover-opacity-2". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                        <div className="tt-portfolio-slider-item cover-opacity-3" data-swiper-parallax="50%">
                          <img loading="lazy" decoding="async" className="tt-psi-image swiper-lazy" src="/assets/img/low-qlt-thumb.jpg" data-src="/assets/img/portfolio/portfolio-5.jpg" alt="Image" />
                        </div> {/* /.tt-portfolio-slider-item */}
                      </div> 
                      {/* End swiper slide */}
                      {/* Begin swiper slide 
      									======================== 
      									* Change data attributes (data-url="...", data-title="...", data-category="...") according to your needs.
      									* Use class "psi-image-is-light" if needed, it makes the elements dark and more visible if you use a very light image.
      									*/}
                      <div className="swiper-slide" data-url="single-project-7.html" data-title="Breaking Wave" data-category="Nature">
                        {/* Use class "cover-opacity-*" to set an image overlay if needed. For example "cover-opacity-2". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                        <div className="tt-portfolio-slider-item cover-opacity-3" data-swiper-parallax="50%">
                          <img loading="lazy" decoding="async" className="tt-psi-image swiper-lazy" src="/assets/img/low-qlt-thumb.jpg" data-src="/assets/img/portfolio/portfolio-6.jpg" alt="Image" />
                        </div> {/* /.tt-portfolio-slider-item */}
                      </div> 
                      {/* End swiper slide */}
                      {/* Begin swiper slide 
      									======================== 
      									* Change data attributes (data-url="...", data-title="...", data-category="...") according to your needs.
      									* Use class "psi-image-is-light" if needed, it makes the elements dark and more visible if you use a very light image.
      									*/}
                      <div className="swiper-slide psi-image-is-light" data-url="single-project-8.html" data-title="Wall Lamp" data-category="Branding">
                        {/* Use class "cover-opacity-*" to set an image overlay if needed. For example "cover-opacity-2". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                        <div className="tt-portfolio-slider-item" data-swiper-parallax="50%">
                          <img loading="lazy" decoding="async" className="tt-psi-image swiper-lazy" src="/assets/img/low-qlt-thumb.jpg" data-src="/assets/img/portfolio/portfolio-7.jpg" alt="Image" />
                        </div> {/* /.tt-portfolio-slider-item */}
                      </div> 
                      {/* End swiper slide */}
                      {/* Begin swiper slide 
      									======================== 
      									* Change data attributes (data-url="...", data-title="...", data-category="...") according to your needs.
      									* Use class "psi-image-is-light" if needed, it makes the elements dark and more visible if you use a very light image.
      									*/}
                      <div className="swiper-slide" data-url="single-project-9.html" data-title="Elegant Stoves" data-category="Creative">
                        {/* Use class "cover-opacity-*" to set an image overlay if needed. For example "cover-opacity-2". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                        <div className="tt-portfolio-slider-item cover-opacity-3" data-swiper-parallax="50%">
                          <img loading="lazy" decoding="async" className="tt-psi-image swiper-lazy" src="/assets/img/low-qlt-thumb.jpg" data-src="/assets/img/portfolio/portfolio-8.jpg" alt="Image" />
                        </div> {/* /.tt-portfolio-slider-item */}
                      </div> 
                      {/* End swiper slide */}
                    </div>
                    {/* End swiper wrapper */}
                  </div>
                  {/* End swiper container */}
                  {/* Begin portfolio slider caption
      							==================================== 
      							* Use class "psc-center" to align caption.
      							* Use class "psc-stroke" to enable caption title stroke style.
      							* Note: Titles and URLs are loaded from "swiper-slide" data attributes. Do not change them here!!!
      							*/}
                  <div className="tt-portfolio-slider-caption psc-center">
                    <div className="tt-ps-caption-inner">
                      <h2 className="tt-psc-elem tt-ps-caption-title"><a href data-cursor="View<br>Project" /></h2>
                      <div className="tt-psc-elem tt-ps-caption-category" />
                    </div> {/* /.tt-ps-caption-inner */}
                  </div>
                  {/* End portfolio slider caption */}
                  {/* Begin portfolio slider navigation 
      							======================================= */}
                  <div className="tt-portfolio-slider-navigation tt-swiper-nav">
                    <div className="tt-ps-nav-prev">
                      <div className="tt-ps-nav-arrow tt-ps-nav-arrow-prev magnetic-item" />
                    </div>
                    <div className="tt-ps-nav-next">
                      <div className="tt-ps-nav-arrow tt-ps-nav-arrow-next magnetic-item" />
                    </div>
                    <div className="tt-ps-nav-pagination" />
                  </div>
                  {/* End portfolio slider navigation */}
                </div>
                {/* End portfolio slider */}
              </div>
              {/* End page content */}
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
                        <a href="/contact" data-hover="Get in Touch">Get in Touch</a>
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

