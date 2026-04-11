export default function AboutUsPage() {
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
            <div className="ptr-overlay">
            </div>
            <div className="ptr-preloader">
              <div className="ptr-prel-content">
                {/* Hint: You may need to change the img height and opacity to match your logo type. You can do this from the "theme.css" file (find: ".ptr-prel-image"). */}
                <img loading="eager" fetchPriority="high" decoding="async" alt="Logo" className="ptr-prel-image tt-logo-light" src="/assets/img/dots-logo-white.png" />
              </div>
              {/* /.ptr-prel-content */}
            </div>
            {/* /.ptr-preloader */}
          </div>
          {/* End page transition */}
          {/* Begin magic cursor 
      			======================== */}
          <div id="magic-cursor">
            <div id="ball">
            </div>
          </div>
          {/* End magic cursor */}
          {/* Begin noise background */}
          {/* <div class="bg-noise">
         </div> */}
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
            <header className="tt-header-fixed" id="tt-header">
              <div className="tt-header-inner">
                {/* add/remove class "tt-wrap" to enable/disable element boxed layout (class "tt-boxed" is required in <body> tag!). Note: additionally you can use prepared helper class "max-width-*" to add custom width to "tt-wrap". Example: "max-width-1500" (class "tt-wrap" is still required!). More info about helper classes can be found in the file "helper.css". */}
                <div className="tt-header-col">
                  {/* Begin logo 
      							================ */}
                  <div className="tt-logo">
                    <a href="/">
                      {/* Hint: You may need to change the img height to match your logo type. You can do this from the "theme.css" file (find: ".tt-logo img"). */}
                      <img loading="eager" fetchPriority="high" decoding="async" alt="Logo" className="tt-logo-light magnetic-item" src="/assets/img/dots-logo-white.png" />
                      {/* logo light */}
                      <img loading="lazy" decoding="async" alt="Logo" className="tt-logo-dark magnetic-item" src="/assets/img/dots-logo-dark.png" />
                      {/* logo dark */}
                    </a>
                  </div>
                  {/* End logo */}
                </div>
                {/* /.tt-header-col */}
                <div className="tt-header-col">
                  {/* Begin overlay menu toggle button */}
                  <div id="tt-ol-menu-toggle-btn-wrap">
                    <div className="tt-ol-menu-toggle-btn-text">
                      <span className="text-menu" data-hover="Open">
                        Menu
                      </span>
                      <span className="text-close">
                        Close
                      </span>
                    </div>
                    <div className="tt-ol-menu-toggle-btn-holder">
                      <a className="tt-ol-menu-toggle-btn magnetic-item" href="#">
                        <span>
                        </span>
                      </a>
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
                            <li>
                              <a href="/">
                                Home
                              </a>
                            </li>
                            {/* Portfolio (minimal dropdown) */}
                            <li className="tt-ol-submenu-wrap">
                              <div className="tt-ol-submenu-trigger">
                                <a href="/portfolio">
                                  Portfolio
                                </a>
                                <div className="tt-ol-submenu-caret-wrap">
                                  {/* <div class="tt-ol-submenu-caret magnetic-item"></div> */}
                                </div>
                              </div>
                              <div className="tt-ol-submenu">
                                <ul className="tt-ol-submenu-list">
                                  {/* <li><a href="/portfolio-grid-creative-1">Grid Creative</a></li> */}
                                  {/* <li><a href="/portfolio-fullscreen-slider">Fullscreen Slider</a></li> */}
                                </ul>
                              </div>
                            </li>
                            {/* About (no personal version) */}
                            <li className="tt-ol-submenu-wrap">
                              <div className="tt-ol-submenu-trigger">
                                <a href="/about-us">
                                  About Us
                                </a>
                                <div className="tt-ol-submenu-caret-wrap">
                                  {/* <div class="tt-ol-submenu-caret magnetic-item"></div> */}
                                </div>
                              </div>
                              <div className="tt-ol-submenu">
                                <ul className="tt-ol-submenu-list">
                                  <li>
                                    <a href="/about-us">
                                      About Us
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            {/* Contact */}
                            <li>
                              <a href="/contact">
                                Contact
                              </a>
                            </li>
                          </ul>
                          {/* End menu list */}
                        </div>
                      </div>
                    </div>
                    {/* Noise background (keep if your theme uses it) */}
                    {/* <div class="bg-noise">
        </div> */}
                  </nav>
                  {/* End overlay menu */}
                </div>
                {/* /.header-col */}
              </div>
              {/* /.header-inner */}
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
              <div className="ph-full ph-cap-xxlg ph-center ph-image-cropped ph-image-cover-4 ph-content-parallax" id="page-header">
                <div className="page-header-inner tt-wrap">
                  {/* Begin page header image 
      							============================= */}
                  <div className="ph-image">
                    <div className="ph-image-inner">
                      <img loading="lazy" decoding="async" alt="Image" src="/assets/dots-assets-img/about-us.jpg" />
                    </div>
                  </div>
                  {/* End page header image */}
                  {/* Begin page header caption
      							=============================== 
      							Use class "max-width-*" to set caption max width if needed. For example "max-width-1000". More info about helper classes can be found in the file "helper.css".
      							*/}
                  <div className="ph-caption">
                    <h1 className="ph-caption-title ph-appear">
                      About
                    </h1>
                    <div className="ph-caption-title-ghost ph-appear">
                      About
                    </div>
                    <div className="ph-caption-subtitle ph-appear">
                      The House
                    </div>
                  </div>
                  {/* End page header caption */}
                </div>
                {/* /.page-header-inner */}
                {/* Begin scroll down circle (you can change "data-offset" to set scroll top offset) 
      						============================== */}
                <a className="scroll-down-circle" data-offset={30} href="#page-content">
                  <div className="sdc-inner ph-appear">
                    <div className="sdc-icon">
                      <i className="fas fa-chevron-down">
                      </i>
                    </div>
                    <svg viewBox="0 0 500 500">
                      <defs>
                        <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle">
                        </path>
                      </defs>
                      <text dy={30}>
                        <textPath xlinkHref="#textcircle">
                          Scroll down - Scroll down -
                        </textPath>
                      </text>
                    </svg>
                  </div>
                  {/* /.sdc-inner */}
                </a>
                {/* End scroll down circle */}
                {/* Begin made with love 
      						========================== */}
                <div className="made-with-love ph-appear">
                  <div className="mwl-inner">
                    <div className="mwl-text">
                      Made with
                    </div>
                    <div className="mwl-icon">
                      <i className="far fa-heart">
                      </i>
                    </div>
                  </div>
                </div>
                {/* End made with love */}
              </div>
              {/* End page header */}
              {/* *************************************
      					*********** Begin page content *********** 
      					************************************** */}
              <div id="page-content">
                {/* =======================
      						///// Begin tt-section /////
      						============================ 
      						* You can use padding classes if needed. For example "padding-top-xlg-150", "padding-bottom-xlg-150", "no-padding-top", "no-padding-bottom", etc. Note that each situation may be different and each section may need different classes according to your needs. More info about helper classes can be found in the file "helper.css".
      						*/}
                <div className="tt-section">
                  <div className="tt-section-inner tt-wrap">
                    <div className="tt-row">
                      <div className="tt-col-lg-4 padding-right-lg-5-p">
                        {/* Begin tt-Heading 
      										====================== 
      										* Use class "tt-heading-xsm", "tt-heading-sm", "tt-heading-lg", "tt-heading-xlg" or "tt-heading-xxlg" to set caption size (no class = default size).
      										* Use class "tt-heading-stroke" to enable stroke style.
      										* Use class "tt-heading-center" to align tt-Heading to center.
      										* Use prepared helper class "max-width-*" to add custom width if needed. Example: "max-width-800". More info about helper classes can be found in the file "helper.css".
      										*/}
                        <div className="tt-heading tt-heading-sm margin-bottom-60 anim-fadeinup">
                          <h2 className="tt-heading-title text-gray">
                            The
                            <br className="hide-from-md" />
                            Story
                          </h2>
                          {/* <h3 class="tt-heading-subtitle text-gray">Subtitle</h3> */}
                        </div>
                        {/* End tt-Heading */}
                      </div>
                      {/* /.tt-col */}
                      <div className="tt-col-lg-8">
                        <div className="text-xxlg font-alter">
                          <p className="anim-fadeinup">
                            At Dots, we are driven by innovation, technology, and creativity. We believe in connecting ideas, people, and businesses through seamless digital experiences. 
                          </p>
                          <p className="anim-fadeinup">
                            Our team specializes in crafting exceptional solutions that go beyond just design. We focus on creating long-lasting impact, whether it's through our software, web development, or digital marketing services. 
                            <a href="https://linktr.ee/dotslimited" rel="noopener" target="_blank">
                              explore Dots innovative solutions. <br /> <br />
                            </a>
                            From building robust CRMs to developing stunning e-commerce platforms, Dots is here to help you grow and transform in this digital age. Every project we take on tells a unique story, designed to make a difference.
                          </p>
                        </div>
                      </div>
                      {/* /.tt-col */}
                    </div>
                    {/* /.tt-row */}
                  </div>
                  {/* /.tt-section-inner */}
                </div>
                {/* End tt-section */}
                {/* =======================
      						///// Begin tt-section /////
      						============================ 
      						* You can use padding classes if needed. For example "padding-top-xlg-150", "padding-bottom-xlg-150", "no-padding-top", "no-padding-bottom", etc. Note that each situation may be different and each section may need different classes according to your needs. More info about helper classes can be found in the file "helper.css".
      						*/}
                <div className="tt-section">
                  <div className="tt-section-inner">
                    {/* =============================
      								///// Begin content carousel /////
      								==================================
      								* Use class "cc-shifted" to enable shifted style (no effect on small screens!).
      								* Use class "cursor-drag" to enable cursor drag on carousel hover ("data-simulate-touch" attribute must be enabled!).
      								* Use class "cc-scale-down" to enable scale down animation on carousel click.
      								* Use class "cc-pagination-outside" to bring pagination outside.
      								* Use class "cc-hide-pagination" to hide pagination (for desktop only!).
      								* Use class "cc-hide-navigation" to hide navigation arrows.
      								* Available data attributes:
      										data-speed="900"......................(milliseconds)
      										data-autoplay="5000"..................(milliseconds. Note: disabled after user first interactions)
      										data-simulate-touch="true"............(true/false)
      										data-loop="true"......................(true/false)
      										data-pagination-type="bullets"........(bullets/fraction/progressbar)
      								*/}
                    <div className="tt-content-carousel cc-shifted cursor-drag cc-scale-down cc-hide-pagination cc-hide-navigation" data-simulate-touch="true" data-speed={900}>
                      {/* Begin swiper container */}
                      <div className="swiper">
                        {/* Begin swiper wrapper (required) */}
                        <div className="swiper-wrapper">
                          {/* Begin swiper slide 
      											======================== */}
                          <div className="swiper-slide">
                            <div className="tt-content-carousel-item">
                              <figure className="cover-opacity-1">
                                <img loading="lazy" decoding="async" className="tt-cc-image" src="/assets/dots-assets-img/about-us-1.jpg" alt="About Us" />
                                {/* <figcaption>Image Caption</figcaption> */}
                              </figure>
                            </div>
                            {/* /.tt-content-carousel-item */}
                          </div>
                          {/* End swiper slide */}
                          {/* Begin swiper slide 
      											======================== */}
                          <div className="swiper-slide">
                            <div className="tt-content-carousel-item">
                              <figure className="cover-opacity-1">
                                <img loading="lazy" decoding="async" className="tt-cc-image" src="/assets/dots-assets-img/about-us-2.jpg" alt="About Us" />
                                {/* <figcaption>Image Caption</figcaption> */}
                              </figure>
                            </div>
                            {/* /.tt-content-carousel-item */}
                          </div>
                          {/* End swiper slide */}
                          {/* Begin swiper slide 
      											======================== */}
                          <div className="swiper-slide">
                            <div className="tt-content-carousel-item">
                              <figure className="cover-opacity-1">
                                <img loading="lazy" decoding="async" className="tt-cc-image" src="/assets/dots-assets-img/about-us-3.jpg" alt="About Us" />
                              </figure>
                            </div>
                            {/* /.tt-content-carousel-item */}
                          </div>
                          {/* End swiper slide */}
                          {/* Begin swiper slide 
      											======================== */}
                          <div className="swiper-slide">
                            <div className="tt-content-carousel-item">
                              <figure className="cover-opacity-1">
                                <img loading="lazy" decoding="async" className="tt-cc-image" src="/assets/dots-assets-img/about-us-4.jpg" alt="About Us" />
                                {/* <figcaption>Image Caption</figcaption> */}
                              </figure>
                            </div>
                            {/* /.tt-content-carousel-item */}
                          </div>
                          {/* End swiper slide */}
                          {/* Begin swiper slide 
      											======================== */}
                          <div className="swiper-slide">
                            <div className="tt-content-carousel-item">
                              <figure className="cover-opacity-1">
                                <img loading="lazy" decoding="async" className="tt-cc-image" src="/assets/dots-assets-img/about-us-5.jpg" alt="About Us" />
                                {/* <figcaption>Image Caption</figcaption> */}
                              </figure>
                            </div>
                            {/* /.tt-content-carousel-item */}
                          </div>
                          {/* End swiper slide */}
                          {/* Begin swiper slide 
      											======================== */}
                          {/* End swiper slide */}
                        </div>
                        {/* End swiper wrapper */}
                      </div>
                      {/* End swiper container */}
                      {/* Begin content carousel navigation */}
                      <div className="tt-cc-nav-prev">
                        <div className="tt-cc-nav-arrow magnetic-item">
                        </div>
                      </div>
                      <div className="tt-cc-nav-next">
                        <div className="tt-cc-nav-arrow magnetic-item">
                        </div>
                      </div>
                      {/* End content carousel navigation */}
                      {/* Content carousel pagination */}
                      <div className="tt-cc-pagination hide-cursor">
                      </div>
                    </div>
                    {/* End content carousel */}
                  </div>
                  {/* /.tt-section-inner */}
                </div>
                {/* End tt-section */}
                {/* =======================
      						///// Begin tt-section /////
      						============================ 
      						* You can use padding classes if needed. For example "padding-top-xlg-150", "padding-bottom-xlg-150", "no-padding-top", "no-padding-bottom", etc. Note that each situation may be different and each section may need different classes according to your needs. More info about helper classes can be found in the file "helper.css".
      						*/}
                <div id="page-content">
                  {/* =======================
      						///// Begin tt-section /////
      						============================ 
      						* You can use padding classes if needed. For example "padding-top-xlg-150", "padding-bottom-xlg-150", "no-padding-top", "no-padding-bottom", etc. Note that each situation may be different and each section may need different classes according to your needs. More info about helper classes can be found in the file "helper.css".
      						*/}
                  <div className="tt-section">
                    <div className="tt-section-inner">
                      <h2 className="custom">Meet The Team</h2>
                      {/* Begin portfolio grid (works combined with tt-Ggrid!)
      								========================== 
      								* Use class "pgi-hover" to enable portfolio grid item hover effect (behavior depends on "ttgr-gap-*" classes below!).
      								* Use class "pgi-cap-hover" to enable portfolio grid item caption hover effect (effect only with class "pgi-cap-inside"! Also no effect on mobile devices!).
      								* Use class "pgi-cap-center" to position portfolio grid item caption to center.
      								* Use class "pgi-cap-inside" to position portfolio grid item caption to inside.
      								*/} 
                      <div id="portfolio-grid" className="pgi-hover">
                        {/* Begin tt-Grid
      									=================== 
      									* Use class "ttgr-layout-2", "ttgr-layout-3", "ttgr-layout-4" to set grid layout (columns). No class = one column.
      									* Use class "ttgr-layout-1-2", "ttgr-layout-2-1", "ttgr-layout-2-3", "ttgr-layout-3-2", "ttgr-layout-3-4" or "ttgr-layout-4-3" to set grid mixed layout (columns).
      									* Use class "ttgr-layout-creative-1" or "ttgr-layout-creative-2" to set grid creative mixed layout (no effect with classes "ttgr-portrait", "ttgr-portrait-half", "ttgr-not-cropped" and "ttgr-shifted").
      									* Use class "ttgr-portrait" or "ttgr-portrait-half" to enable portrait mode (no effect with classes "ttgr-layout-creative-1", "ttgr-layout-creative-2" and "ttgr-not-cropped").
      									* Use class "ttgr-gap-1", "ttgr-gap-2", "ttgr-gap-3", "ttgr-gap-4", "ttgr-gap-5" or "ttgr-gap-6" to add space between items.
      									* Use class "ttgr-not-cropped" to enable not cropped mode (effect only with classes "ttgr-layout-2", "ttgr-layout-3" and "ttgr-layout-4").
      									* Use class "ttgr-shifted" to enable shifted layout (effect only with classes "ttgr-layout-2", "ttgr-layout-3" and "ttgr-layout-4").
      									*/}
                        <div className="tt-grid ttgr-layout-3 ttgr-gap-3">
                          {/* Begin tt-Ggrid top content 
      										================================ */}
                          <div className="tt-grid-top">
                            {/* Begin tt-Ggrid categories/filter
      											====================================== */}
                            <div className="tt-grid-categories">
                              {/* Begin tt-Ggrid categories trigger 
      												======================================= 
      												* Use class "ttgr-cat-fixed" to enable categories trigger fixed position.
      												*/}
                              {/* End tt-Ggrid categories trigger */}
                              {/* Begin tt-Ggrid categories nav 
      												=================================== */}
                              <div className="ttgr-cat-nav">
                                <div className="ttgr-cat-list-holder cursor-close">
                                  <div className="ttgr-cat-list-inner">
                                    <div className="ttgr-cat-list-content">
                                      <ul className="ttgr-cat-list">
                                        <li className="ttgr-cat-close">Close <i className="fas fa-times" /></li> {/* For mobile devices! */}
                                        <li className="ttgr-cat-item"><a href="#" className="active">Show All</a></li>
                                        <li className="ttgr-cat-item"><a href="#" data-filter=".branding">Development and Operations</a></li>
                                        <li className="ttgr-cat-item"><a href="#" data-filter=".people">Multimedia &amp; Graphics</a></li>
                                        <li className="ttgr-cat-item"><a href="#" data-filter=".nature">Branding &amp; Marketing</a></li>
                                        <li className="ttgr-cat-item"><a href="#" data-filter=".creative">Creative</a></li>
                                      </ul>
                                    </div> {/* /.ttgr-cat-links-content */}
                                  </div> {/* /.ttgr-cat-links-inner */}
                                </div> {/* /.ttgr-cat-links-holder */}
                              </div>
                              {/* End tt-Ggrid categories nav */}
                            </div>
                            {/* End tt-Ggrid categories/filter*/}
                          </div>
                          {/* End tt-Grid top content */}
                          {/* Begin tt-Grid items wrap 
      										============================== */}
                          <div className="tt-grid-items-wrap isotope-items-wrap">
                            {/* Begin tt-Grid item
      											======================== */}
                            <div className="tt-grid-item isotope-item people">
                              <div className="ttgr-item-inner">
                                {/* Begin portfolio grid item 
      													===============================
      													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"! Also no effect on small screens!).
      													*/}
                                <div className="portfolio-grid-item">
                                  {/* <a href="/single-project-1" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                  {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                  <div className="pgi-image-holder">
                                    <div className="pgi-image-inner anim-zoomin">
                                      <figure className="pgi-image ttgr-height">
                                        <img loading="lazy" decoding="async" src="/assets/dots-team-members/Zunaed Saimon.jpg" alt="image" />
                                      </figure> {/* /.pgi-image */}
                                    </div> {/* /.pgi-image-inner */}
                                  </div> {/* /.pgi-image-holder */}
                                  {/* /.pgi-image-wrap */}
                                  <div className="pgi-caption">
                                    <div className="pgi-caption-inner">
                                      <h2 className="pgi-title">
                                        <p>Zunaed Saimon</p>
                                      </h2>
                                      <div className="pgi-categories-wrap">
                                        <div className="pgi-category">Development and Operations</div>
                                        {/* <div class="pgi-category">Varia</div> */}
                                      </div> {/* /.pli-categories-wrap */}
                                    </div> {/* /.pgi-caption-inner */}
                                  </div> {/* /.pgi-caption */}
                                </div>
                                {/* End portfolio grid item */}
                              </div> {/* /.ttgr-item-inner */}
                            </div>
                            {/* End tt-Grid item */}
                            {/* Begin tt-Grid item
      											======================== */}
                            <div className="tt-grid-item isotope-item creative">
                              <div className="ttgr-item-inner">
                                {/* Begin portfolio grid item 
      													===============================
      													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"!).
      													*/}
                                <div className="portfolio-grid-item">
                                  {/* <a href="/single-project-2" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                  {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                  <div className="pgi-image-holder">
                                    <div className="pgi-image-inner anim-zoomin">
                                      <figure className="pgi-image ttgr-height">
                                        <img loading="lazy" decoding="async" src="/assets/dots-team-members/Subhanul Islam.jpg" alt="image" />
                                      </figure> {/* /.pgi-image */}
                                    </div> {/* /.pgi-image-inner */}
                                  </div> {/* /.pgi-image-holder */}
                                  {/* /.pgi-image-wrap */}
                                  <div className="pgi-caption">
                                    <div className="pgi-caption-inner">
                                      <h2 className="pgi-title">
                                        <p>Subhanul Islam</p>
                                      </h2>
                                      <div className="pgi-categories-wrap">
                                        <div className="pgi-category">Multimedia &amp; Graphics</div>
                                        {/* <div class="pgi-category">Varia</div> */}
                                      </div> {/* /.pli-categories-wrap */}
                                    </div> {/* /.pgi-caption-inner */}
                                  </div> {/* /.pgi-caption */}
                                </div>
                                {/* End portfolio grid item */}
                              </div> {/* /.ttgr-item-inner */}
                            </div>
                            {/* End tt-Grid item */}
                            {/* Begin tt-Grid item
      											======================== */}
                            <div className="tt-grid-item isotope-item people">
                              <div className="ttgr-item-inner">
                                {/* Begin portfolio grid item 
      													===============================
      													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"!).
      													*/}
                                <div className="portfolio-grid-item">
                                  {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                  <div className="pgi-image-holder">
                                    <div className="pgi-image-inner anim-zoomin">
                                      <figure className="pgi-image ttgr-height">
                                        <img loading="lazy" decoding="async" src="/assets/dots-team-members/Zannatul Faria Ikra.jpg" alt="image" />
                                      </figure> {/* /.pgi-video-wrap */}
                                    </div> {/* /.pgi-image-inner */}
                                  </div> {/* /.pgi-image-holder */}
                                  {/* /.pgi-image-wrap */}
                                  <div className="pgi-caption">
                                    <div className="pgi-caption-inner">
                                      <h2 className="pgi-title">
                                        <p>Zannatul Faria Ikra</p>
                                      </h2>
                                      <div className="pgi-categories-wrap">
                                        <div className="pgi-category">Multimedia &amp; Graphics</div>
                                        {/* <div class="pgi-category">Varia</div> */}
                                      </div> {/* /.pli-categories-wrap */}
                                    </div> {/* /.pgi-caption-inner */}
                                  </div> {/* /.pgi-caption */}
                                </div>
                                {/* End portfolio grid item */}
                              </div> {/* /.ttgr-item-inner */}
                            </div>
                            {/* End tt-Grid item */}
                            {/* Begin tt-Grid item
      											======================== */}
                            <div className="tt-grid-item isotope-item nature">
                              <div className="ttgr-item-inner">
                                {/* Begin portfolio grid item 
      													===============================
      													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"!).
      													*/}
                                <div className="portfolio-grid-item">
                                  {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                  <div className="pgi-image-holder">
                                    <div className="pgi-image-inner anim-zoomin">
                                      <figure className="pgi-image ttgr-height">
                                        <img loading="lazy" decoding="async" src="/assets/dots-team-members/Sibrat-bin Chowdhury Yousra.jpg" alt="image" />
                                      </figure> {/* /.pgi-image */}
                                    </div> {/* /.pgi-image-inner */}
                                  </div> {/* /.pgi-image-holder */}
                                  {/* /.pgi-image-wrap */}
                                  <div className="pgi-caption">
                                    <div className="pgi-caption-inner">
                                      <h2 className="pgi-title">
                                        <p>Sibrat-bin Chowdhury Yousra</p>
                                      </h2>
                                      <div className="pgi-categories-wrap">
                                        <div className="pgi-category">Multimedia &amp; Graphics</div>
                                        {/* <div class="pgi-category">Varia</div> */}
                                      </div> {/* /.pli-categories-wrap */}
                                    </div> {/* /.pgi-caption-inner */}
                                  </div> {/* /.pgi-caption */}
                                </div>
                                {/* End portfolio grid item */}
                              </div> {/* /.ttgr-item-inner */}
                            </div>
                            {/* End tt-Grid item */}
                            {/* Begin tt-Grid item
      											======================== */}
                            <div className="tt-grid-item isotope-item branding">
                              <div className="ttgr-item-inner">
                                {/* Begin portfolio grid item 
      													===============================
      													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"!).
      													*/}
                                <div className="portfolio-grid-item">
                                  {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                  <div className="pgi-image-holder">
                                    <div className="pgi-image-inner anim-zoomin">
                                      <figure className="pgi-image ttgr-height">
                                        <img loading="lazy" decoding="async" src="/assets/dots-team-members/MD. Mohidul Islam Bhuyan.jpg" alt="image" />
                                      </figure> {/* /.pgi-image */}
                                    </div> {/* /.pgi-image-inner */}
                                  </div> {/* /.pgi-image-holder */}
                                  {/* /.pgi-image-wrap */}
                                  <div className="pgi-caption">
                                    <div className="pgi-caption-inner">
                                      <h2 className="pgi-title">
                                        <p>MD. Mohidul Islam Bhuyan</p>
                                      </h2>
                                      <div className="pgi-categories-wrap">
                                        <div className="pgi-category">Multimedia &amp; Graphics</div>
                                        {/* <div class="pgi-category">Varia</div> */}
                                      </div> {/* /.pli-categories-wrap */}
                                    </div> {/* /.pgi-caption-inner */}
                                  </div> {/* /.pgi-caption */}
                                </div>
                                {/* End portfolio grid item */}
                              </div> {/* /.ttgr-item-inner */}
                            </div>
                            {/* End tt-Grid item */}
                            {/* Begin tt-Grid item
      											======================== */}
                            <div className="tt-grid-item isotope-item people">
                              <div className="ttgr-item-inner">
                                {/* Begin portfolio grid item 
      													===============================
      													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"!).
      													*/}
                                <div className="portfolio-grid-item">
                                  {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                  <div className="pgi-image-holder">
                                    <div className="pgi-image-inner anim-zoomin">
                                      <figure className="pgi-image ttgr-height">
                                        <img loading="lazy" decoding="async" src="/assets/dots-team-members/Raihan Shawn.jpg" alt="image" />
                                      </figure> {/* /.pgi-image */}
                                    </div> {/* /.pgi-image-inner */}
                                  </div> {/* /.pgi-image-holder */}
                                  {/* /.pgi-image-wrap */}
                                  <div className="pgi-caption">
                                    <div className="pgi-caption-inner">
                                      <h2 className="pgi-title">
                                        <p>Raihan Shawn</p>
                                      </h2>
                                      <div className="pgi-categories-wrap">
                                        <div className="pgi-category">Branding &amp; Marketing</div>
                                        {/* <div class="pgi-category">Varia</div> */}
                                      </div> {/* /.pli-categories-wrap */}
                                    </div> {/* /.pgi-caption-inner */}
                                  </div> {/* /.pgi-caption */}
                                </div>
                                {/* End portfolio grid item */}
                              </div> {/* /.ttgr-item-inner */}
                            </div>
                            {/* End tt-Grid item */}
                            {/* Begin tt-Grid item
      											======================== */}
                            <div className="tt-grid-item isotope-item nature">
                              <div className="ttgr-item-inner">
                                {/* Begin portfolio grid item 
      													===============================
      													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"!).
      													*/}
                                <div className="portfolio-grid-item">
                                  {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                  <div className="pgi-image-holder">
                                    <div className="pgi-image-inner anim-zoomin">
                                      <figure className="pgi-image ttgr-height">
                                        <img loading="lazy" decoding="async" src="/assets/dots-team-members/Shobarna Akter.jpg" alt="image" />
                                      </figure> {/* /.pgi-image */}
                                    </div> {/* /.pgi-image-inner */}
                                  </div> {/* /.pgi-image-holder */}
                                  {/* /.pgi-image-wrap */}
                                  <div className="pgi-caption">
                                    <div className="pgi-caption-inner">
                                      <h2 className="pgi-title">
                                        <p>Shobarna Akter</p>
                                      </h2>
                                      <div className="pgi-categories-wrap">
                                        <div className="pgi-category">Branding &amp; Marketing</div>
                                        {/* <div class="pgi-category">Varia</div> */}
                                      </div> {/* /.pli-categories-wrap */}
                                    </div> {/* /.pgi-caption-inner */}
                                  </div> {/* /.pgi-caption */}
                                </div>
                                {/* End portfolio grid item */}
                              </div> {/* /.ttgr-item-inner */}
                            </div>
                            {/* End tt-Grid item */}
                            {/* Begin tt-Grid item
      											======================== */}
                            {/* <div class="ttgr-item-inner">  for future usage
      													<div class="portfolio-grid-item">
      														<a href="/single-project-8" class="pgi-image-wrap" data-cursor="View<br>Project">
      																<div class="pgi-image-inner anim-zoomin">
      																	<figure class="pgi-image ttgr-height">
      																		<img loading="lazy" decoding="async" src="/assets/img/portfolio/portfolio-7.jpg" alt="image">
      																	</figure>
      																</div> 
      															</div> 
      														</a> 
      
      														<div class="pgi-caption">
      															<div class="pgi-caption-inner">
      																<h2 class="pgi-title">
      																	<p>Wall Lamp</p>
      																</h2>
      																<div class="pgi-categories-wrap">
      																	<div class="pgi-category">Development and Operations</div>
      																</div> 
      															</div> 
      														</div> 
      													</div> */}
                            {/* </div>  */}
                          </div>
                          {/* End tt-Grid item */}
                          {/* Begin tt-Grid item
      											======================== */}
                          {/* <div class="tt-grid-item isotope-item creative"> For future usages 2
      												<div class="ttgr-item-inner">
      													<div class="portfolio-grid-item">
      															<div class="pgi-image-holder">
      																<div class="pgi-image-inner anim-zoomin">
      																	<figure class="pgi-image ttgr-height">
      																		<img loading="lazy" decoding="async" src="/assets/img/portfolio/portfolio-8.jpg" alt="image">
      																	</figure> 
      																</div> 
      															</div> 
      														</a> 
      
      														<div class="pgi-caption">
      															<div class="pgi-caption-inner">
      																<h2 class="pgi-title">
      																	<a href="/single-project-9">Elegant Stoves</a>
      																</h2>
      																<div class="pgi-categories-wrap">
      																	<div class="pgi-category">Creative</div>
      																	
      																</div> 
      															</div> 
      														</div> 
      													</div>
      													
      
      												</div> 
      											</div> */}
                          {/* End tt-Grid item */}
                        </div>
                        {/* End tt-Grid items wrap  */}
                      </div>
                      {/* End tt-Grid */}
                    </div>
                    {/* End portfolio grid */}
                    {/* Begin tt-pagination (uncomment below code if you want to use pagination)
      								========================= 
      								* Use class "tt-pagin-center" to align center.
      								*/}
                    {/* <div class="tt-pagination tt-pagin-center anim-fadeinup">
      									<div class="tt-pagin-prev">
      										<a href="" class="tt-pagin-item magnetic-item"><i class="fas fa-chevron-left"></i></a>
      									</div>
      									<div class="tt-pagin-numbers">
      										<a href="#0" class="tt-pagin-item magnetic-item active">1</a>
      										<a href="" class="tt-pagin-item magnetic-item">2</a>
      										<a href="" class="tt-pagin-item magnetic-item">3</a>
      										<a href="" class="tt-pagin-item magnetic-item">4</a>
      									</div>
      									<div class="tt-pagin-next">
      										<a href="" class="tt-pagin-item tt-pagin-next magnetic-item"><i class="fas fa-chevron-right"></i></a>
      									</div>
      								</div> */}
                    {/* End tt-pagination */}
                  </div> {/* /.tt-section-inner */}
                </div>
                {/* End tt-section */}
                {/* =======================
      						///// Begin tt-section /////
      						============================ 
      						* You can use padding classes if needed. For example "padding-top-xlg-150", "padding-bottom-xlg-150", "no-padding-top", "no-padding-bottom", etc. Note that each situation may be different and each section may need different classes according to your needs. More info about helper classes can be found in the file "helper.css".
      						*/}
                <div className="tt-section padding-bottom-xlg-150">
                  <div className="tt-section-inner tt-wrap">
                    {/* Begin page nav 
      								==================== 
      								* Use class "tt-pn-stroke" to enable title stroke style.
      								* Use class "tt-pn-scroll" to enable hover title scroll. Note: If "tt-pn-hover-title" text is wider than "tt-pn-link" then it scrolls by default. The longer the text, the faster it scrolls.
      								*/}
                    <div className="tt-page-nav tt-pn-scroll">
                      <a href="/contact" className="tt-pn-link anim-fadeinup">
                        <div className="tt-pn-title">Let's talk</div>
                        <div className="tt-pn-hover-title">Let's talk</div>
                      </a> {/* /.tt-pn-link */}
                      <div className="tt-pn-subtitle anim-fadeinup">Get in Touch</div>
                      {/* Use if destination page contains page header image */}
                      <div className="tt-pn-image">
                        <video playsInline data-autoplay="true" autoPlay className="pgi-video" loop muted preload="metadata">
                          <source src="/assets/dots-assets-vids/contact-vid.mp4" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                    {/* End page nav */}
                  </div> {/* /.tt-section-inner */}
                </div>
                {/* End tt-section */}
              </div>
              {/* End tt-section */}
              {/* =======================
      						///// Begin tt-section /////
      						============================ 
      						* You can use padding classes if needed. For example "padding-top-xlg-150", "padding-bottom-xlg-150", "no-padding-top", "no-padding-bottom", etc. Note that each situation may be different and each section may need different classes according to your needs. More info about helper classes can be found in the file "helper.css".
      						*/}
              <div className="tt-section padding-top-xlg-150 padding-bottom-xlg-150 padding-left-sm-3-p padding-right-sm-3-p bg-white-accent-2">
                <div className="tt-section-inner tt-wrapp">
                  {/* Begin testimonials slider 
      								===============================
      								* Use class "text-center" to align text to the center.
      								* Use class "cursor-drag" to enable cursor drag on carousel hover ("data-simulate-touch" attribute must be enabled!).
      								* Use class "ts-hide-pagination" to hide pagination (for desktop only!).
      								* Use class "ts-hide-navigation" to hide navigation arrows.
      								* Use class "ts-full-width" to enable full width slider.
      								* Available data attributes:
      										data-speed="900"......................(milliseconds)
      										data-autoplay="5000"..................(milliseconds. Note: disabled after user first interactions)
      										data-simulate-touch="true"............(true/false)
      										data-loop="true"......................(true/false)
      								*/}
                  <div className="tt-testimonials-slider ts-full-width text-center cursor-drag ts-scale-down ts-hide-navigation anim-fadeinup" data-loop="true" data-simulate-touch="true" data-speed={900}>
                    {/* Begin swiper container */}
                    <div className="swiper">
                      {/* Begin swiper wrapper (required) */}
                      <div className="swiper-wrapper">
                        {/* Begin swiper slide 
      											======================== */}
                        <div className="swiper-slide font-alter">
                          <div className="tt-ts-item">
                            <div className="tt-ts-text">
                              "Working with Dots Studio was a game-changer for us. Their team didnâ€™t just deliver on time, they actually understood our brand and gave us designs that felt like us. Clients noticed the difference immediately."
                            </div>
                            <div className="tt-ts-subtext">â€” Rashed Khan, Business Owner</div>
                          </div>
                        </div> 
                        {/* End swiper slide */}
                        {/* Begin swiper slide 
      											======================== */}
                        <div className="swiper-slide font-alter">
                          <div className="tt-ts-item">
                            <div className="tt-ts-text">
                              "Iâ€™ve worked with other agencies before, but none matched the mix of creativity and reliability that Dots Studio brought. Theyâ€™re fast, responsive, and the quality speaks for itself."
                            </div>
                            <div className="tt-ts-subtext">â€” Maria Hossain, Marketing Manager</div>
                          </div>
                        </div>
                        {/* End swiper slide */}
                        {/* Begin swiper slide 
      											======================== */}
                        <div className="swiper-slide font-alter">
                          <div className="tt-ts-item">
                            <div className="tt-ts-text">
                              "Honestly, I was worried about costs at first, but what I got was way more valuable than the price I paid. They gave me strategy, design, and guidance that I still use every day."
                            </div>
                            <div className="tt-ts-subtext">â€” Tanvir Ahmed, Startup Founder</div>
                          </div>
                        </div>
                        {/* End swiper slide */}
                        {/* Begin swiper slide 
      											======================== */}
                        <div className="swiper-slide font-alter">
                          <div className="tt-ts-item">
                            <div className="tt-ts-text">
                              "From the very first meeting to the final delivery, the process was so smooth. Clear communication, regular updates, and zero last-minute stress. Thatâ€™s rare to find these days."
                            </div>
                            <div className="tt-ts-subtext">â€” Anika Rahman, Brand Manager</div>
                          </div>
                        </div> 
                        {/* End swiper slide */}
                        {/* Begin swiper slide 
      											======================== */}
                        <div className="swiper-slide font-alter">
                          <div className="tt-ts-item">
                            <div className="tt-ts-text">
                              "We didnâ€™t just get a websiteâ€”we got an entire identity upgrade. Engagement on our socials jumped, customers loved the new look, and sales improved within weeks. Highly recommend them!"
                            </div>
                            <div className="tt-ts-subtext">â€” Zubair Chowdhury, E-Commerce Owner</div>
                          </div>
                        </div> 
                        {/* End swiper slide */}
                      </div>
                      {/* End swiper wrapper */}
                    </div>
                    {/* End swiper container */}
                    {/* Testimonials slider navigation (arrows) */}
                    <div className="tt-ts-nav-prev">
                      <div className="tt-ts-nav-arrow magnetic-item" />
                    </div>
                    <div className="tt-ts-nav-next">
                      <div className="tt-ts-nav-arrow magnetic-item" />
                    </div>
                    {/* Testimonials slider pagination */}
                    <div className="tt-ts-pagination hide-cursor" />
                  </div>
                  {/* End testimonials slider */}
                </div>
                {/* /.tt-section-inner */}
              </div>
              {/* =======================
      						///// Begin tt-section /////
      						============================ 
      						* You can use padding classes if needed. For example "padding-top-xlg-150", "padding-bottom-xlg-150", "no-padding-top", "no-padding-bottom", etc. Note that each situation may be different and each section may need different classes according to your needs. More info about helper classes can be found in the file "helper.css".
      						*/}
              {/* End tt-section */}
              {/* =======================
      						///// Begin tt-section /////
      						============================ 
      						* You can use padding classes if needed. For example "padding-top-xlg-150", "padding-bottom-xlg-150", "no-padding-top", "no-padding-bottom", etc. Note that each situation may be different and each section may need different classes according to your needs. More info about helper classes can be found in the file "helper.css".
      						*/}
              <div className="tt-section padding-top-xlg-150 padding-bottom-xlg-150">
                <div className="tt-section-inner tt-wrap">
                  {/* Begin page nav 
      								==================== 
      								* Use class "tt-pn-stroke" to enable title stroke style.
      								* Use class "tt-pn-scroll" to enable hover title scroll. Note: If "tt-pn-hover-title" text is wider than "tt-pn-link" then it scrolls by default. The longer the text, the faster it scrolls.
      								*/}
                  {/* End page nav */}
                </div>
                {/* /.tt-section-inner */}
              </div>
              {/* End tt-section */}
            </div>
            {/* End page content */}
            {/* ======================
      					///// Begin tt-footer /////
      					=========================== */}
            <footer id="tt-footer">
              <div className="tt-footer-inner">
                {/* Begin footer column 
      							========================= */}
                <div className="footer-col tt-align-center-left">
                  <div className="footer-col-inner">
                    {/* You can use whatever button or link here */}
                    <div className="tt-btn tt-btn-link">
                      <a className="scroll-to-top" data-hover="Back to top" href="#">
                        Back to top
                      </a>
                    </div>
                  </div>
                  {/* /.footer-col-inner */}
                </div>
                {/* Begin footer column */}
                {/* Begin footer column 
      							========================= */}
                <div className="footer-col tt-align-center order-m-last">
                  <div className="footer-col-inner">
                    <div className="tt-copyright">
                      Â© Copyright -
                      <a className="tt-link" href="https://www.facebook.com/dotslimited" rel="noopener" target="_blank">
                        Dots It and Software Limited
                      </a>
                    </div>
                  </div>
                  {/* /.footer-col-inner */}
                </div>
                {/* Begin footer column */}
                {/* Begin footer column 
      							========================= */}
                <div className="footer-col tt-align-center-right">
                  <div className="footer-col-inner">
                    <div className="footer-social">
                      <div className="footer-social-text">
                        <span>
                          Follow
                        </span>
                        <i className="fas fa-share-alt">
                        </i>
                      </div>
                      <div className="social-buttons">
                        <ul>
                          <li>
                            <a className="magnetic-item" href="https://www.facebook.com/dotslimited" rel="noopener" target="_blank">
                              Fb.
                            </a>
                          </li>
                          <li>
                            <a className="magnetic-item" href="https://www.instagram.com/dotslimited/" rel="noopener" target="_blank">
                              Inst.
                            </a>
                          </li>
                          <li><a href="https://wa.me/8801345753054" className="magnetic-item" target="_blank" rel="noopener">Whats.</a></li>
                          <li>
                            {/* <a class="magnetic-item" href="https://dribbble.com/Themetorium" rel="noopener" target="_blank">
              Dr.
             </a> */}
                          </li>
                          <li>
                            {/* <a class="magnetic-item" href="https://www.behance.net/Themetorium" rel="noopener" target="_blank">
              Be.
             </a> */}
                          </li>
                        </ul>
                      </div>
                      {/* /.social-buttons */}
                    </div>
                    {/* /.footer-social */}
                  </div>
                  {/* /.footer-col-inner */}
                </div>
                {/* Begin footer column */}
              </div>
              {/* /.tt-section-inner */}
            </footer>
            {/* End tt-footer */}
          </div>
          {/* End content wrap */}
        </main></div>
      {/* End scroll container */}
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
      
    </>
  );
}

