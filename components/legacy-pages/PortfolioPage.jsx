export default function PortfolioPage() {
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
          {/* <div class="bg-noise"></div> */}
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
                            <li><a href="/">Home</a></li>
                            {/* Portfolio (minimal dropdown) */}
                            <li className="tt-ol-submenu-wrap">
                              <div className="tt-ol-submenu-trigger">
                                <a href="/portfolio">Portfolio</a>
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
                                <a href="/about-us">About</a>
                                <div className="tt-ol-submenu-caret-wrap">
                                  {/* <div class="tt-ol-submenu-caret magnetic-item"></div> */}
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
                    {/* <div class="bg-noise"></div> */}
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
              <div id="page-header" className="ph-full ph-cap-xxlg ph-center ph-image-cropped ph-image-cover-2 ph-content-parallax">
                <div className="page-header-inner tt-wrap">
                  {/* Begin page header image 
      							============================= */}
                  <div className="ph-image">
                    <div className="ph-image-inner">
                      <video playsInline data-autoplay="true" autoPlay className="pgi-video" loop muted preload="metadata" poster="/assets/img/web-video-poster.png">
                        <source src="/assets/dots-assets-vids/portfolio-vid.webm" type="video/webm" />
                      </video>
                    </div>
                  </div>
                  {/* End page header image */}
                  {/* Begin page header caption
      							=============================== 
      							Use class "max-width-*" to set caption max width if needed. For example "max-width-1000". More info about helper classes can be found in the file "helper.css".
      							*/}
                  <div className="ph-caption">
                    <h1 className="ph-caption-title ph-appear">Portfolio</h1>
                    <div className="ph-caption-title-ghost ph-appear">Portfolio</div>
                    <div className="ph-caption-subtitle ph-appear">Selected Works</div>
                  </div> 
                  {/* End page header caption */}
                </div> {/* /.page-header-inner */}
                {/* Begin scroll down circle (you can change "data-offset" to set scroll top offset) 
      						============================== */}
                <a href="#page-content" className="scroll-down-circle" data-offset={30}>
                  <div className="sdc-inner ph-appear">
                    <div className="sdc-icon"><i className="fas fa-chevron-down" /></div>
                    <svg viewBox="0 0 500 500">
                      <defs>
                        <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle" />
                      </defs>
                      <text dy={30}>
                        <textPath xlinkHref="#textcircle">Scroll down - Scroll down -</textPath>
                      </text>
                    </svg>
                  </div> {/* /.sdc-inner */}
                </a>
                {/* End scroll down circle */}
                {/* Begin made with love 
      						========================== */}
                <div className="made-with-love ph-appear">
                  <div className="mwl-inner">
                    <div className="mwl-text">Made with</div>
                    <div className="mwl-icon"><i className="far fa-heart" /></div>
                  </div>
                </div>
                {/* End made with love */}
              </div>
              {/* End page header */}
              {/* *************************************
      					*********** Begin page content *********** 
      					************************************** */}
              <div id="page-content">
                <div className="ttgr-cat-trigger-wrap ttgr-cat-fixed">
                  <a href="#portfolio-grid" className="ttgr-cat-trigger not-hide-cursor" data-offset={150}>
                    <div className="ttgr-cat-text">
                      <span data-hover="Open">Filter</span>
                    </div>
                    <div className="ttgr-cat-icon">
                      <span className="magnetic-item"><i className="fas fa-layer-group" /></span>
                    </div>
                  </a>
                </div>
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
                          <li className="ttgr-cat-item"><a href="#" data-filter=".design">Design</a></li>
                          <li className="ttgr-cat-item"><a href="#" data-filter=".branding">Branding</a></li>
                          <li className="ttgr-cat-item"><a href="#" data-filter=".ui-ux">UI/UX</a></li>
                          <li className="ttgr-cat-item"><a href="#" data-filter=".motion">Motion</a></li>
                          <li className="ttgr-cat-item"><a href="#" data-filter=".video-editing">Video Editing</a></li>
                        </ul>
                      </div> {/* /.ttgr-cat-links-content */}
                    </div> {/* /.ttgr-cat-links-inner */}
                  </div> {/* /.ttgr-cat-links-holder */}
                </div>
                {/* =======================
      						///// Begin tt-section /////
      						============================ 
      						* You can use padding classes if needed. For example "padding-top-xlg-150", "padding-bottom-xlg-150", "no-padding-top", "no-padding-bottom", etc. Note that each situation may be different and each section may need different classes according to your needs. More info about helper classes can be found in the file "helper.css".
      						*/}
                <div className="tt-section no-padding-bottom">
                  <div className="tt-section-inner">
                    {/* Begin portfolio grid (works combined with tt-Ggrid!)
      								========================== 
      								* Use class "pgi-hover" to enable portfolio grid item hover effect (behavior depends on "ttgr-gap-*" classes below!).
      								* Use class "pgi-cap-hover" to enable portfolio grid item caption hover effect (effect only with class "pgi-cap-inside"! Also no effect on mobile devices!).
      								* Use class "pgi-cap-center" to position portfolio grid item caption to center.
      								* Use class "pgi-cap-inside" to position portfolio grid item caption to inside.
      								*/} 
                    <div id="portfolio-grid" className="pgi-cap-inside pgi-cap-hover">
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
                      <div className="tt-grid ttgr-layout-creative-1 ttgr-gap-6">
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
                          <div className="tt-grid-item isotope-item design">
                            <div className="ttgr-item-inner">
                              {/* Begin portfolio grid item 
      													===============================
      													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"! Also no effect on small screens!).
      													*/}
                              <div className="portfolio-grid-item">
                                {/* <a href="/single-project-1" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-image ttgr-height">
                                      <img loading="lazy" decoding="async" src="/assets/dots-portfolio-all/portfolio-pic-1.jpg" alt="image" />
                                    </figure> {/* /.pgi-image */}
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    <h2 className="pgi-title">Vita Flora</h2>
                                    <div className="pgi-categories-wrap">
                                      <div className="pgi-category">Design</div>
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
                          <div className="tt-grid-item isotope-item design">
                            <div className="ttgr-item-inner">
                              {/* Begin portfolio grid item 
      													===============================
      													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"!).
      													*/}
                              <div className="portfolio-grid-item">
                                {/* <a href="/single-project-2" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-image ttgr-height">
                                      <img loading="lazy" decoding="async" src="/assets/dots-portfolio-all/portfolio-pic-2.jpg" alt="image" />
                                    </figure> {/* /.pgi-image */}
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    <h2 className="pgi-title">Misty Peaks</h2>
                                    <div className="pgi-categories-wrap">
                                      <div className="pgi-category">Design</div>
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
                          <div className="tt-grid-item isotope-item video-editing">
                            <div className="ttgr-item-inner">
                              {/* Begin portfolio grid item 
      													===============================
      													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"!).
      													*/}
                              <div className="portfolio-grid-item">
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-video-wrap ttgr-height">
                                      <video playsInline data-autoplay="true" autoPlay className="pgi-video" loop muted preload="metadata" poster="/assets/dots-portfolio-all/portfolio-pic-1.jpg">
                                        <source src="/assets/dots-portfolio-all/portfolio-vid-1.webm" type="video/webm" />
                                      </video>
                                    </figure> {/* /.pgi-video-wrap */}
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    <h2 className="pgi-title">Grid Motion</h2>
                                    <div className="pgi-categories-wrap">
                                      <div className="pgi-category">Video Editing</div>
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
                          <div className="tt-grid-item isotope-item design">
                            <div className="ttgr-item-inner">
                              {/* Begin portfolio grid item 
      													===============================
      													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"!).
      													*/}
                              <div className="portfolio-grid-item">
                                {/* <a href="/single-project-4" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-image ttgr-height">
                                      <img loading="lazy" decoding="async" src="/assets/dots-portfolio-all/portfolio-pic-3.png" alt="image" />
                                    </figure> {/* /.pgi-image */}
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    <h2 className="pgi-title">Coffee Love</h2>
                                    <div className="pgi-categories-wrap">
                                      <div className="pgi-category">Design</div>
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
                                {/* <a href="/single-project-5" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-image ttgr-height">
                                      <img loading="lazy" decoding="async" src="/assets/dots-portfolio-all/portfolio-pic-4.png" alt="image" />
                                    </figure> {/* /.pgi-image */}
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    <h2 className="pgi-title">Soda Ice</h2>
                                    <div className="pgi-categories-wrap">
                                      <div className="pgi-category">Branding</div>
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
                          <div className="tt-grid-item isotope-item video-editing">
                            <div className="ttgr-item-inner">
                              {/* Begin portfolio grid item 
      													===============================
      													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"!).
      													*/}
                              <div className="portfolio-grid-item">
                                {/* <a href="/single-project-6" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-video-wrap ttgr-height">
                                      <video data-autoplay="true" autoPlay className="pgi-video" loop muted preload="metadata" playsInline poster="/assets/dots-portfolio-all/portfolio-pic-2.jpg">
                                        <source src="/assets/dots-portfolio-all/portfolio-vid-2.webm" type="video/webm" />	
                                      </video>
                                    </figure> {/* /.pgi-image */}
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    <h2 className="pgi-title">Dots Property</h2>
                                    <div className="pgi-categories-wrap">
                                      <div className="pgi-category">Video Editing</div>
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
                          <div className="tt-grid-item isotope-item design">
                            <div className="ttgr-item-inner">
                              {/* Begin portfolio grid item 
      													===============================
      													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"!).
      													*/}
                              <div className="portfolio-grid-item">
                                {/* <a href="/single-project-7" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-image ttgr-height">
                                      <img loading="lazy" decoding="async" src="/assets/dots-portfolio-all/portfolio-pic-5.png" alt="image" />
                                    </figure> {/* /.pgi-image */}
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    <h2 className="pgi-title">National Sports Day</h2>
                                    <div className="pgi-categories-wrap">
                                      <div className="pgi-category">Design</div>
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
                          <div className="tt-grid-item isotope-item design">
                            <div className="ttgr-item-inner">
                              {/* Begin portfolio grid item 
      													===============================
      													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"!).
      													*/}
                              <div className="portfolio-grid-item">
                                {/* <a href="/single-project-4" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-image ttgr-height">
                                      <img loading="lazy" decoding="async" src="/assets/dots-portfolio-all/portfolio-pic-6.png" alt="image" />
                                    </figure> {/* /.pgi-image */}
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    <h2 className="pgi-title">Stanley Jungle</h2>
                                    <div className="pgi-categories-wrap">
                                      <div className="pgi-category">Design</div>
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
                          <div className="tt-grid-item isotope-item motion">
                            <div className="ttgr-item-inner">
                              {/* Begin portfolio grid item 
      													===============================
      													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"!).
      													*/}
                              <div className="portfolio-grid-item">
                                {/* <a href="/single-project-9" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-video-wrap ttgr-height">
                                      <video playsInline data-autoplay="true" autoPlay className="pgi-video" loop muted preload="metadata" poster="/assets/dots-portfolio-all/portfolio-pic-4.png">
                                        <source src="/assets/dots-portfolio-all/portfolio-vid-4.webm" type="video/webm" />
                                      </video>
                                    </figure> {/* /.pgi-image */}
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    <h2 className="pgi-title">Dots Showreel – Web &amp; UI</h2>
                                    <div className="pgi-categories-wrap">
                                      <div className="pgi-category">Motion</div>
                                      {/* <div class="pgi-category">Varia</div> */}
                                    </div> {/* /.pli-categories-wrap */}
                                  </div> {/* /.pgi-caption-inner */}
                                </div> {/* /.pgi-caption */}
                              </div>
                              {/* End portfolio grid item */}
                            </div> {/* /.ttgr-item-inner */}
                          </div>
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
                <div className="tt-section no-padding-bottom">
                  <div className="tt-section-inner">
                    {/* Begin portfolio grid (works combined with tt-Ggrid!)
      								========================== 
      								* Use class "pgi-hover" to enable portfolio grid item hover effect (behavior depends on "ttgr-gap-*" classes below!).
      								* Use class "pgi-cap-hover" to enable portfolio grid item caption hover effect (effect only with class "pgi-cap-inside"! Also no effect on mobile devices!).
      								* Use class "pgi-cap-center" to position portfolio grid item caption to center.
      								* Use class "pgi-cap-inside" to position portfolio grid item caption to inside.
      								*/} 
                    <div id="portfolio-grid" className="pgi-cap-inside pgi-cap-hover">
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
                      <div className="tt-grid ttgr-layout-creative-1 ttgr-gap-6">
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
                          <div className="tt-grid-item isotope-item design">
                            <div className="ttgr-item-inner">
                              {/* Begin portfolio grid item 
      													===============================
      													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"! Also no effect on small screens!).
      													*/}
                              <div className="portfolio-grid-item">
                                {/* <a href="/single-project-1" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-image ttgr-height">
                                      <img loading="lazy" decoding="async" src="/assets/dots-portfolio-all/portfolio-pic-8.png" alt="image" />
                                    </figure> {/* /.pgi-image */}
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    <h2 className="pgi-title">Watch Ads Collection</h2>
                                    <div className="pgi-categories-wrap">
                                      <div className="pgi-category">Design</div>
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
                                {/* <a href="/single-project-2" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-image ttgr-height">
                                      <img loading="lazy" decoding="async" src="/assets/dots-portfolio-all/portfolio-pic-9.png" alt="image" />
                                    </figure> {/* /.pgi-image */}
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    <h2 className="pgi-title">Blue Ice Beer</h2>
                                    <div className="pgi-categories-wrap">
                                      <div className="pgi-category">Branding</div>
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
                          <div className="tt-grid-item isotope-item motion">
                            <div className="ttgr-item-inner">
                              {/* Begin portfolio grid item 
      													===============================
      													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"!).
      													*/}
                              <div className="portfolio-grid-item">
                                {/* <a href="/single-project-3" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-video-wrap ttgr-height">
                                      <video playsInline data-autoplay="true" autoPlay className="pgi-video" loop muted preload="metadata" poster="/assets/dots-portfolio-all/portfolio-pic-5.png">
                                        <source src="/assets/dots-portfolio-all/portfolio-vid-5.webm" type="video/webm" />
                                      </video>
                                    </figure> {/* /.pgi-video-wrap */}
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    <h2 className="pgi-title">Logo &amp; Branding Reel</h2>
                                    <div className="pgi-categories-wrap">
                                      <div className="pgi-category">Motion</div>
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
                                {/* <a href="/single-project-4" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-image ttgr-height">
                                      <img loading="lazy" decoding="async" src="/assets/dots-portfolio-all/portfolio-pic-10.png" alt="image" />
                                    </figure> {/* /.pgi-image */}
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    <h2 className="pgi-title">Treadmill Feed</h2>
                                    <div className="pgi-categories-wrap">
                                      <div className="pgi-category">Creative</div>
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
                          <div className="tt-grid-item isotope-item ui-ux">
                            <div className="ttgr-item-inner">
                              {/* Begin portfolio grid item 
      													===============================
      													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"!).
      													*/}
                              <div className="portfolio-grid-item">
                                {/* <a href="/single-project-5" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-image ttgr-height">
                                      <img loading="lazy" decoding="async" src="/assets/dots-portfolio-all/portfolio-pic-11.png" alt="image" />
                                    </figure> {/* /.pgi-image */}
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    <h2 className="pgi-title">Gigabyte Landing Page</h2>
                                    <div className="pgi-categories-wrap">
                                      <div className="pgi-category">UI/UX</div>
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
                          <div className="tt-grid-item isotope-item ui-ux">
                            <div className="ttgr-item-inner">
                              {/* Begin portfolio grid item 
      													===============================
      													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"!).
      													*/}
                              <div className="portfolio-grid-item">
                                {/* <a href="/single-project-6" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-video-wrap ttgr-height">
                                      <video data-autoplay="true" autoPlay className="pgi-video" loop muted preload="metadata" playsInline poster="/assets/dots-portfolio-all/portfolio-pic-6.png">
                                        <source src="/assets/dots-portfolio-all/portfolio-vid-6.webm" type="video/webm" />
                                      </video>
                                    </figure> {/* /.pgi-image */}
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    <h2 className="pgi-title">Dots Law Firm – Landing Page</h2>
                                    <div className="pgi-categories-wrap">
                                      <div className="pgi-category">UI/UX</div>
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
                          <div className="tt-grid-item isotope-item ui-ux">
                            <div className="ttgr-item-inner">
                              {/* Begin portfolio grid item 
      													===============================
      													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"!).
      													*/}
                              <div className="portfolio-grid-item">
                                {/* <a href="/single-project-7" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-image ttgr-height">
                                      <img loading="lazy" decoding="async" src="/assets/dots-portfolio-all/portfolio-pic-13.png" alt="image" />
                                    </figure> {/* /.pgi-image */}
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    <h2 className="pgi-title">VR Reality – Landing Page</h2>
                                    <div className="pgi-categories-wrap">
                                      <div className="pgi-category">UI/UX</div>
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
                          <div className="tt-grid-item isotope-item design">
                            <div className="ttgr-item-inner">
                              {/* Begin portfolio grid item 
      													===============================
      													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"!).
      													*/}
                              <div className="portfolio-grid-item">
                                {/* <a href="/single-project-2" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-image ttgr-height">
                                      <img loading="lazy" decoding="async" src="/assets/dots-portfolio-all/portfolio-pic-14.png" alt="image" />
                                    </figure> {/* /.pgi-image */}
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    <h2 className="pgi-title">Pizza Promo</h2>
                                    <div className="pgi-categories-wrap">
                                      <div className="pgi-category">Design</div>
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
                          <div className="tt-grid-item isotope-item ui-ux">
                            <div className="ttgr-item-inner">
                              {/* Begin portfolio grid item 
      													===============================
      													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"!).
      													*/}
                              <div className="portfolio-grid-item ui-ux">
                                {/* <a href="/single-project-9" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-video-wrap ttgr-height">
                                      <video playsInline data-autoplay="true" autoPlay className="pgi-video" loop muted preload="metadata" poster="/assets/dots-portfolio-all/portfolio-pic-7.png">
                                        <source src="/assets/dots-portfolio-all/portfolio-vid-7.webm" type="video/webm" />
                                      </video>
                                    </figure> {/* /.pgi-image */}
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    <h2 className="pgi-title">Dots Travel – Landing Page</h2>
                                    <div className="pgi-categories-wrap">
                                      <div className="pgi-category">UI/UX</div>
                                      {/* <div class="pgi-category">Varia</div> */}
                                    </div> {/* /.pli-categories-wrap */}
                                  </div> {/* /.pgi-caption-inner */}
                                </div> {/* /.pgi-caption */}
                              </div>
                              {/* End portfolio grid item */}
                            </div> {/* /.ttgr-item-inner */}
                          </div>
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
                <div className="tt-section no-padding-bottom">
                  <div className="tt-section-inner">
                    {/* Begin portfolio grid (works combined with tt-Ggrid!)
      								========================== 
      								* Use class "pgi-hover" to enable portfolio grid item hover effect (behavior depends on "ttgr-gap-*" classes below!).
      								* Use class "pgi-cap-hover" to enable portfolio grid item caption hover effect (effect only with class "pgi-cap-inside"! Also no effect on mobile devices!).
      								* Use class "pgi-cap-center" to position portfolio grid item caption to center.
      								* Use class "pgi-cap-inside" to position portfolio grid item caption to inside.
      								*/} 
                    <div id="portfolio-grid" className="pgi-cap-inside pgi-cap-hover">
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
                      <div className="tt-grid ttgr-layout-creative-1 ttgr-gap-6">
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
                          <div className="tt-grid-item isotope-item branding">
                            <div className="ttgr-item-inner">
                              {/* Begin portfolio grid item 
      													===============================
      													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"! Also no effect on small screens!).
      													*/}
                              <div className="portfolio-grid-item">
                                {/* <a href="/single-project-1" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-image ttgr-height">
                                      <img loading="lazy" decoding="async" src="/assets/dots-portfolio-all/portfolio-pic-15.jpg" alt="image" />
                                    </figure> {/* /.pgi-image */}
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    <h2 className="pgi-title">Manami Mart – Billboard Ad</h2>
                                    <div className="pgi-categories-wrap">
                                      <div className="pgi-category">Branding</div>
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
                                {/* <a href="/single-project-2" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-image ttgr-height">
                                      <img loading="lazy" decoding="async" src="/assets/dots-portfolio-all/portfolio-pic-16.jpg" alt="image" />
                                    </figure> {/* /.pgi-image */}
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    <h2 className="pgi-title">Cocoa Luxe – Packaging</h2>
                                    <div className="pgi-categories-wrap">
                                      <div className="pgi-category">Branding</div>
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
                          <div className="tt-grid-item isotope-item ui-ux">
                            <div className="ttgr-item-inner">
                              {/* Begin portfolio grid item 
      													===============================
      													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"!).
      													*/}
                              <div className="portfolio-grid-item">
                                {/* <a href="/single-project-3" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-video-wrap ttgr-height">
                                      <video playsInline data-autoplay="true" autoPlay className="pgi-video" loop muted preload="metadata" poster="/assets/dots-portfolio-all/portfolio-pic-8.png">
                                        <source src="/assets/dots-portfolio-all/portfolio-vid-8.webm" type="video/webm" />
                                      </video>
                                    </figure> {/* /.pgi-video-wrap */}
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    <h2 className="pgi-title">Dots Healthcare – Landing Page</h2>
                                    <div className="pgi-categories-wrap">
                                      <div className="pgi-category">UI/UX</div>
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
                          <div className="tt-grid-item isotope-item design">
                            <div className="ttgr-item-inner">
                              {/* Begin portfolio grid item 
      													===============================
      													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"!).
      													*/}
                              <div className="portfolio-grid-item">
                                {/* <a href="/single-project-4" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-image ttgr-height">
                                      <img loading="lazy" decoding="async" src="/assets/dots-portfolio-all/portfolio-pic-17.jpg" alt="image" />
                                    </figure> {/* /.pgi-image */}
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    <h2 className="pgi-title">Digital Mindset Series</h2>
                                    <div className="pgi-categories-wrap">
                                      <div className="pgi-category">Design</div>
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
                          <div className="tt-grid-item isotope-item ui-ux">
                            <div className="ttgr-item-inner">
                              {/* Begin portfolio grid item 
      													===============================
      													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"!).
      													*/}
                              <div className="portfolio-grid-item">
                                {/* <a href="/single-project-5" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-image ttgr-height">
                                      <img loading="lazy" decoding="async" src="/assets/dots-portfolio-all/portfolio-pic-18.jpg" alt="image" />
                                    </figure> {/* /.pgi-image */}
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    <h2 className="pgi-title">JuicePay App</h2>
                                    <div className="pgi-categories-wrap">
                                      <div className="pgi-category">UI/UX</div>
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
                          <div className="tt-grid-item isotope-item ui-ux">
                            <div className="ttgr-item-inner">
                              {/* Begin portfolio grid item 
      													===============================
      													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"!).
      													*/}
                              <div className="portfolio-grid-item">
                                {/* <a href="/single-project-6" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-video-wrap ttgr-height">
                                      <video playsInline data-autoplay="true" autoPlay className="pgi-video" loop muted preload="metadata" poster="/assets/dots-portfolio-all/portfolio-pic-9.png">
                                        <source src="/assets/dots-portfolio-all/portfolio-vid-9.webm" type="video/webm" />
                                      </video>
                                    </figure> {/* /.pgi-image */}
                                    <div className="gradient-overlay" />
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    <h2 className="pgi-title">E-Learning Platform</h2>
                                    <div className="pgi-categories-wrap">
                                      <div className="pgi-category">UI/UX</div>
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
                                {/* <a href="/single-project-7" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-image ttgr-height">
                                      <img loading="lazy" decoding="async" src="/assets/dots-portfolio-all/portfolio-pic-19.jpg" alt="image" />
                                    </figure> {/* /.pgi-image */}
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    <h2 className="pgi-title">App UI</h2>
                                    <div className="pgi-categories-wrap">
                                      <div className="pgi-category">UI/UX</div>
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
                          <div className="tt-grid-item isotope-item ui-ux">
                            <div className="ttgr-item-inner">
                              {/* Begin portfolio grid item 
      													===============================
      													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"!).
      													*/}
                              <div className="portfolio-grid-item">
                                {/* <a href="/single-project-2" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-image ttgr-height">
                                      <img loading="lazy" decoding="async" src="/assets/dots-portfolio-all/portfolio-pic-20.jpg" alt="image" />
                                    </figure>
                                    <div className="gradient-overlay" /> {/* /.pgi-image */}
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    <h2 className="pgi-title">Shopping App UI</h2>
                                    <div className="pgi-categories-wrap">
                                      <div className="pgi-category">UI/UX</div>
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
                          <div className="tt-grid-item isotope-item motion">
                            <div className="ttgr-item-inner">
                              {/* Begin portfolio grid item 
      													===============================
      													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"!).
      													*/}
                              <div className="portfolio-grid-item">
                                {/* <a href="/single-project-9" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-video-wrap ttgr-height">
                                      <video data-autoplay="true" autoPlay className="pgi-video" loop muted preload="metadata" playsInline poster="/assets/dots-portfolio-all/portfolio-pic-10.png">
                                        <source src="/assets/dots-portfolio-all/portfolio-vid-10.webm" type="video/webm" />
                                      </video>
                                    </figure> {/* /.pgi-image */}
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    <h2 className="pgi-title">Portfolio</h2>
                                    <div className="pgi-categories-wrap">
                                      <div className="pgi-category">Motion</div>
                                      {/* <div class="pgi-category">Varia</div> */}
                                    </div> {/* /.pli-categories-wrap */}
                                  </div> {/* /.pgi-caption-inner */}
                                </div> {/* /.pgi-caption */}
                              </div>
                              {/* End portfolio grid item */}
                            </div> {/* /.ttgr-item-inner */}
                          </div>
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
                <div className="tt-section no-padding-bottom">
                  <div className="tt-section-inner">
                    {/* Begin portfolio grid (works combined with tt-Ggrid!)
      								========================== 
      								* Use class "pgi-hover" to enable portfolio grid item hover effect (behavior depends on "ttgr-gap-*" classes below!).
      								* Use class "pgi-cap-hover" to enable portfolio grid item caption hover effect (effect only with class "pgi-cap-inside"! Also no effect on mobile devices!).
      								* Use class "pgi-cap-center" to position portfolio grid item caption to center.
      								* Use class "pgi-cap-inside" to position portfolio grid item caption to inside.
      								*/} 
                    <div id="portfolio-grid" className="pgi-cap-inside pgi-cap-hover">
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
                      <div className="tt-grid ttgr-layout-creative-1 ttgr-gap-6">
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
                          <div className="tt-grid-item isotope-item ui-ux">
                            <div className="ttgr-item-inner">
                              {/* Begin portfolio grid item 
      													===============================
      													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"! Also no effect on small screens!).
      													*/}
                              <div className="portfolio-grid-item">
                                {/* <a href="/single-project-1" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-image ttgr-height">
                                      <img loading="lazy" decoding="async" src="/assets/dots-portfolio-all/portfolio-pic-22.jpg" alt="image" />
                                    </figure>
                                    <div className="gradient-overlay" /> {/* NEW GRADIENT */}
                                  </div>
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    <h2 className="pgi-title">Analytics Dashboard</h2>
                                    <div className="pgi-categories-wrap">
                                      <div className="pgi-category">UI/UX</div>
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
                          <div className="tt-grid-item isotope-item design">
                            <div className="ttgr-item-inner">
                              {/* Begin portfolio grid item 
      													===============================
      													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"!).
      													*/}
                              <div className="portfolio-grid-item">
                                {/* <a href="/single-project-2" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-image ttgr-height">
                                      <img loading="lazy" decoding="async" src="/assets/dots-portfolio-all/portfolio-pic-21.jpg" alt="image" />
                                    </figure>
                                    <div className="gradient-overlay" /> {/* /.pgi-image */}
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    <h2 className="pgi-title">Buzz Lime</h2>
                                    <div className="pgi-categories-wrap">
                                      <div className="pgi-category">Design</div>
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
                          <div className="tt-grid-item isotope-item motion">
                            <div className="ttgr-item-inner">
                              {/* Begin portfolio grid item 
      													===============================
      													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"!).
      													*/}
                              <div className="portfolio-grid-item">
                                {/* <a href="/single-project-3" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-video-wrap ttgr-height">
                                      <video playsInline data-autoplay="true" autoPlay className="pgi-video" loop muted preload="metadata" poster="/assets/dots-portfolio-all/portfolio-pic-11.png">
                                        <source src="/assets/dots-portfolio-all/portfolio-vid-11.webm" type="video/webm" />
                                      </video>
                                    </figure>
                                    <div className="gradient-overlay" /> {/* /.pgi-video-wrap */}
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    <h2 className="pgi-title">Construction Site</h2>
                                    <div className="pgi-categories-wrap">
                                      <div className="pgi-category">Motion</div>
                                      {/* <div class="pgi-category">Varia</div> */}
                                    </div> {/* /.pli-categories-wrap */}
                                  </div> {/* /.pgi-caption-inner */}
                                </div> {/* /.pgi-caption */}
                              </div>
                              {/* End portfolio grid item */}
                            </div> {/* /.ttgr-item-inner */}
                          </div>
                          {/* End tt-Grid item */}
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
                          <video playsInline data-autoplay="true" autoPlay className="pgi-video" loop muted preload="metadata" poster="/assets/img/web-video-poster.png">
                            <source src="/assets/dots-assets-vids/contact-vid.webm" type="video/webm" />
                          </video>
                        </div>
                      </div>
                      {/* End page nav */}
                    </div> {/* /.tt-section-inner */}
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
                          <a href="#" className="scroll-to-top" data-hover="Back to top">Back to top</a>
                        </div>
                      </div> {/* /.footer-col-inner */}
                    </div>
                    {/* Begin footer column */}
                    {/* Begin footer column 
      							========================= */}
                    <div className="footer-col tt-align-center order-m-last">
                      <div className="footer-col-inner">
                        <div className="tt-copyright">
                          © Copyright - <a href="https://www.facebook.com/dotslimited" target="_blank" rel="noopener" className="tt-link">Dots It and Software Limited </a>
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
                              <li><a href="https://www.facebook.com/dotslimited" className="magnetic-item" target="_blank" rel="noopener">Fb.</a></li>
                              <li><a href="https://wa.me/8801345753054" className="magnetic-item" target="_blank" rel="noopener">Whats.</a></li>
                              {/* <li><a href="https://www.youtube.com/" class="magnetic-item" target="_blank" rel="noopener">Yt.</a></li> */}
                              {/* <li><a href="https://dribbble.com/Themetorium" class="magnetic-item" target="_blank" rel="noopener">Dr.</a></li> */}
                              <li><a href="https://www.instagram.com/dotslimited/" className="magnetic-item" target="_blank" rel="noopener">Inst.</a></li>
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
          </div></main>
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
