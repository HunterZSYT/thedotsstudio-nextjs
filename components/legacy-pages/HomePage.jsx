const BRAND_LOGOS = [
  "/assets/dots-clients/nittoponno_online_logo.png",
  "/assets/dots-clients/RKB.png",
  "/assets/dots-clients/1st-cup-coffee.png",
  "/assets/dots-clients/advance-handyman.png",
  "/assets/dots-clients/approach-education.png",
  "/assets/dots-clients/army.png",
  "/assets/dots-clients/bd-ace-encoders.png",
  "/assets/dots-clients/bright-future.png",
  "/assets/dots-clients/cafe-brazilia.png",
  "/assets/dots-clients/chitkotha.png",
  "/assets/dots-clients/coffee-time.png",
  "/assets/dots-clients/covrades.png",
  "/assets/dots-clients/dominus.png",
  "/assets/dots-clients/fatema sequins.png",
  "/assets/dots-clients/film-valley.png",
  "/assets/dots-clients/garihasan.png",
  "/assets/dots-clients/goverment.png",
  "/assets/dots-clients/gsc.png",
  "/assets/dots-clients/haveli.png",
  "/assets/dots-clients/intro-space.png",
  "/assets/dots-clients/maxxi-sneaker.png",
  "/assets/dots-clients/nf.png",
  "/assets/dots-clients/OL.png",
  "/assets/dots-clients/PizzaRolla.png",
  "/assets/dots-clients/pretty-little-stuff.png",
  "/assets/dots-clients/PW.png",
  "/assets/dots-clients/realtor.png",
  "/assets/dots-clients/red-dot.png",
  "/assets/dots-clients/riche-rich.png",
  "/assets/dots-clients/sense.png",
  "/assets/dots-clients/setex.png",
  "/assets/dots-clients/shariyatpur-exclusive-club.png",
  "/assets/dots-clients/SKS.png",
  "/assets/dots-clients/sophos.png",
  "/assets/dots-clients/unknown.png",
  "/assets/dots-clients/viva-creations.png",
  "/assets/dots-clients/walton.png",
  "/assets/dots-clients/xplore-global.png",
  "/assets/dots-clients/TINDS.png",
  "/assets/dots-clients/papa jhons.png",
  "/assets/dots-clients/mgi.png",
];

function brandAltFromPath(src) {
  const filename = src.split("/").pop() || "brand";
  const normalized = filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .trim();
  return `${normalized} logo`;
}
export default function HomePage() {
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
                          {/* Begin menu list */}        <ul className="tt-ol-menu-list">
                            {/* Home (no dropdown) */}
                            <li><a href="/">Home</a></li>
                            <li><a href="#services">Services</a></li>
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
              <div id="page-header" className="ph-full ph-cap-sm ph-image-cropped ph-image-cover-3 ph-content-parallax">
                <div className="page-header-inner tt-wrap">
                  {/* Begin page header image 
      							============================= */}
                  <div className="ph-image">
                    <div className="ph-image-inner">
                      <video playsInline data-autoplay="true" autoPlay className="pgi-video" loop muted preload="metadata">
                        <source src="/assets/dots-assets-vids/home-video-1.webm" type="video/webm" />
                      </video>
                    </div>
                  </div>
                  {/* End page header image */}
                  {/* Begin page header caption
      							=============================== 
      							Use class "max-width-*" to set caption max width if needed. For example "max-width-1000". More info about helper classes can be found in the file "helper.css".
      							*/}
                  <div className="ph-caption max-width-1000">
                    <h1 className="ph-caption-title ph-appear font-normal"><em>Welcome to Dots Studio.</em><br /> We transform vision into reality through design and technology — Powering Ideas, Connecting <u>Dots.</u></h1>
                    <div className="ph-caption-title-ghost ph-appear">Hello!</div>
                    {/* <div class="ph-caption-subtitle ph-appear">Subtitle</div> */}
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
                {/* =======================
      						///// Begin tt-section /////
      						============================ 
      						* You can use padding classes if needed. For example "padding-top-xlg-150", "padding-bottom-xlg-150", "no-padding-top", "no-padding-bottom", etc. Note that each situation may be different and each section may need different classes according to your needs. More info about helper classes can be found in the file "helper.css".
      						*/}
                <div className="tt-section no-padding-bottom">
                  <div className="tt-section-inner">
                    {/* Begin tt-Heading 
      								====================== 
      								* Use class "tt-heading-xsm", "tt-heading-sm", "tt-heading-lg", "tt-heading-xlg" or "tt-heading-xxlg" to set caption size (no class = default size).
      								* Use class "tt-heading-stroke" to enable stroke style.
      								* Use class "tt-heading-center" to align tt-Heading to center.
      								* Use prepared helper class "max-width-*" to add custom width if needed. Example: "max-width-800". More info about helper classes can be found in the file "helper.css".
      								*/}
                    <div className="tt-heading tt-heading-lg tt-heading-center margin-bottom-10-p anim-fadeinup">
                      <h3 className="tt-heading-subtitle text-gray">Latest Projects</h3>
                      <h2 className="tt-heading-title">Works</h2>
                      <div className="tt-btn tt-btn-link margin-top-20">
                        <a href="/portfolio" data-hover="See All Works">See All Works</a>
                      </div>
                    </div>
                    {/* End tt-Heading */}
                    {/* Begin portfolio grid (works combined with tt-Ggrid!)
      								========================== 
      								* Use class "pgi-hover" to enable portfolio grid item hover effect (behavior depends on "ttgr-gap-*" classes below!).
      								* Use class "pgi-cap-hover" to enable portfolio grid item caption hover effect (effect only with class "pgi-cap-inside"! Also no effect on mobile devices!).
      								* Use class "pgi-cap-center" to position portfolio grid item caption to center.
      								* Use class "pgi-cap-inside" to position portfolio grid item caption to inside.
      								*/} 
                    <div id="portfolio-grid" className="pgi-cap-inside pgi-hover">
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
                      <div className="tt-grid ttgr-layout-creative-2 ttgr-not-cropped ttgr-gap-4">
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
                                {/* Use class "cover-opacity-*" to set image overlay if ne</a>eded. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-image ttgr-height">
                                      <video playsInline data-autoplay="true" autoPlay className="pgi-video" loop muted preload="metadata">
                                        <source src="/assets/dots-assets-vids/home-video-2.webm" type="video/webm" />
                                      </video>
                                    </figure>
                                    <div className="pgi-gradient-overlay" /> {/* /.gradient */}
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    {/* <h2 class="pgi-title">Victorian Girls</h2> */}
                                    {/* <div class="pgi-categories-wrap">
      																	<div class="pgi-category">People</div>
      																</div>  */}
                                  </div> 
                                </div>
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
                              <div className="portfolio-grid-item anim-parallax">
                                {/* <a href="/single-project-2" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-image ttgr-height">
                                      <video playsInline data-autoplay="true" autoPlay className="pgi-video" loop muted preload="metadata">
                                        <source src="/assets/dots-assets-vids/home-video-3.webm" type="video/webm" />
                                      </video>
                                    </figure>
                                    {/* <div class="pgi-gradient-overlay"></div>  */}
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    {/* <h2 class="pgi-title">Smithy</h2> */}
                                    <div className="pgi-categories-wrap">
                                      {/* <div class="pgi-category">Creative</div> */}
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
                                {/* <a href="/single-project-3" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-video-wrap ttgr-height">
                                      <video playsInline data-autoplay="true" autoPlay className="pgi-video" loop muted preload="metadata" poster="/assets/img/web-video-poster.png">
                                        <source src="/assets/vids/website.webm" type="video/webm" />
                                      </video>
                                    </figure>
                                    {/* <div class="pgi-gradient-overlay"></div>  */}
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    {/* <h2 class="pgi-title">Washion Week</h2> */}
                                    <div className="pgi-categories-wrap">
                                      {/* <div class="pgi-category">People</div> */}
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
                                {/* <a href="/single-project-4" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                                {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-image ttgr-height">
                                      <video playsInline data-autoplay="true" autoPlay className="pgi-video" loop muted preload="metadata">
                                        <source src="/assets/dots-assets-vids/home-video-4.webm" type="video/webm" />
                                      </video>
                                    </figure>
                                    {/* <div class="pgi-gradient-overlay"></div> */}
                                  </div> {/* /.pgi-image-inner */}
                                </div> {/* /.pgi-image-holder */}
                                {/* /.pgi-image-wrap */}
                                <div className="pgi-caption">
                                  <div className="pgi-caption-inner">
                                    {/* <h2 class="pgi-title">Mystery Forest</h2> */}
                                    <div className="pgi-categories-wrap">
                                      {/* <div class="pgi-category">Nature</div> */}
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
                  </div> {/* /.tt-section-inner */}
                </div>
                {/* End tt-section */}
                {/* =======================
      						///// Begin tt-section /////
      						============================ 
      						* You can use padding classes if needed. For example "padding-top-xlg-150", "padding-bottom-xlg-150", "no-padding-top", "no-padding-bottom", etc. Note that each situation may be different and each section may need different classes according to your needs. More info about helper classes can be found in the file "helper.css".
      						*/}
                <div id="services" className="tt-section padding-bottom-xlg-150 padding-left-sm-3-p padding-right-sm-3-p">
                  <div className="tt-section-inner tt-wrap max-width-1100">
                    {/* Begin tt-Heading 
      								====================== 
      								* Use class "tt-heading-xsm", "tt-heading-sm", "tt-heading-lg", "tt-heading-xlg" or "tt-heading-xxlg" to set caption size (no class = default size).
      								* Use class "tt-heading-stroke" to enable stroke style.
      								* Use class "tt-heading-center" to align tt-Heading to center.
      								* Use prepared helper class "max-width-*" to add custom width if needed. Example: "max-width-800". More info about helper classes can be found in the file "helper.css".
      								*/}
                    <div className="tt-heading tt-heading-lg tt-heading-center margin-bottom-15-p anim-fadeinup">
                      <h3 className="tt-heading-subtitle text-gray">What We Do</h3>
                      <h2 className="tt-heading-title">Services</h2>
                    </div>
                    {/* End tt-Heading */}
                    {/* Begin accordion 
      								===================== 
      								* Use class "tt-ac-sm", "tt-ac-lg", "tt-ac-xlg" or "tt-ac-xxlg" to set accordion size.
      								* Use class "tt-ac-borders" to enable borders.
      								* Add class "is-open" to the "tt-accordion-content" to make this content open by default.
      								*/}
                    <div className="tt-accordion tt-ac-xlg tt-ac-borders">
                      <div className="tt-accordion-item anim-fadeinup">
                        <div className="tt-accordion-heading">
                          <h3 className="tt-ac-head-title">Website Development</h3>
                          <div className="tt-accordion-subtext">Crafting digital experiences that connect.</div>
                          <div className="tt-accordion-caret-wrap">
                            <div className="tt-accordion-caret magnetic-item" />
                          </div>
                        </div> {/* /.tt-accordion-heading */}
                        <div className="tt-accordion-content max-width-800">
                          <p>High-performance sites and stores built to convert. Your website should be more than a brochure—it’s a 24/7 sales engine</p>
                          <div className="tt-btn tt-btn-link">
                            <a href="/website-development" data-hover="Read More">Read More</a>
                          </div>
                        </div> {/* /.tt-accordion-content */}
                      </div> {/* /.tt-accordion-item */}
                      <div className="tt-accordion-item anim-fadeinup">
                        <div className="tt-accordion-heading">
                          <h3 className="tt-ac-head-title">Software Development</h3>
                          <div className="tt-accordion-subtext">Smart solutions built to scale with your business.</div>
                          <div className="tt-accordion-caret-wrap">
                            <div className="tt-accordion-caret magnetic-item" />
                          </div>
                        </div> {/* /.tt-accordion-heading */}
                        <div className="tt-accordion-content max-width-800">
                          <p>Custom apps and automation that grow with you. We build robust, scalable software tailored to your workflows—so you can</p>
                          <div className="tt-btn tt-btn-link">
                            <a href="/software-development" data-hover="Read More">Read More</a>
                          </div>
                        </div> {/* /.tt-accordion-content */}
                      </div> {/* /.tt-accordion-item */}
                      <div className="tt-accordion-item anim-fadeinup">
                        <div className="tt-accordion-heading">
                          <h3 className="tt-ac-head-title">Digital Marketing</h3>
                          <div className="tt-accordion-subtext">Turning data into growth, and clicks into customers.</div>
                          <div className="tt-accordion-caret-wrap">
                            <div className="tt-accordion-caret magnetic-item" />
                          </div>
                        </div> {/* /.tt-accordion-heading */}
                        <div className="tt-accordion-content max-width-800">
                          <p>Data-driven growth that hits your targets. We combine analytical rigor with creative flair to bring you predictable, mea</p>
                          <div className="tt-btn tt-btn-link">
                            <a href="/digital-marketing" data-hover="Read More">Read More</a>
                          </div>
                        </div> {/* /.tt-accordion-content */}
                      </div> {/* /.tt-accordion-item */}
                      <div className="tt-accordion-item anim-fadeinup">
                        <div className="tt-accordion-heading">
                          <h3 className="tt-ac-head-title">Creative Content</h3>
                          <div className="tt-accordion-subtext">Content that connects, engages, and inspires action.</div>
                          <div className="tt-accordion-caret-wrap">
                            <div className="tt-accordion-caret magnetic-item" />
                          </div>
                        </div> {/* /.tt-accordion-heading */}
                        <div className="tt-accordion-content max-width-800">
                          <p>Content strategies that connect and engage. Our work isn’t just creative—it’s built to spark meaningful action.</p>
                          <div className="tt-btn tt-btn-link">
                            <a href="/creative-content" data-hover="Read More">Read More</a>
                          </div>
                        </div> {/* /.tt-accordion-content */}
                      </div> {/* /.tt-accordion-item */}
                      <div className="tt-accordion-item anim-fadeinup">
                        <div className="tt-accordion-heading">
                          <h3 className="tt-ac-head-title">Creative Design</h3>
                          <div className="tt-accordion-subtext">Design that doesn’t just look good—it works hard for your brand.</div>
                          <div className="tt-accordion-caret-wrap">
                            <div className="tt-accordion-caret magnetic-item" />
                          </div>
                        </div> {/* /.tt-accordion-heading */}
                        <div className="tt-accordion-content max-width-800">
                          <p>Cohesive branding and UX that delight users. Our design work isn’t just beautiful—it’s built to guide users intuitively</p>
                          <div className="tt-btn tt-btn-link">
                            <a href="/creative-design" data-hover="Read More">Read More</a>
                          </div>
                        </div> {/* /.tt-accordion-content */}
                      </div> {/* /.tt-accordion-item */}
                      <div className="tt-accordion-item anim-fadeinup">
                        <div className="tt-accordion-heading">
                          <h3 className="tt-ac-head-title">Video Editing</h3>
                          <div className="tt-accordion-subtext">Every frame tells a story—crafted to leave impact.</div>
                          <div className="tt-accordion-caret-wrap">
                            <div className="tt-accordion-caret magnetic-item" />
                          </div>
                        </div> {/* /.tt-accordion-heading */}
                        <div className="tt-accordion-content max-width-800">
                          <p>Visual storytelling optimized for every channel. Short or long, documentary or animated—it’s all about crafting a narrat</p>
                          <div className="tt-btn tt-btn-link">
                            <a href="/video-editing" data-hover="Read More">Read More</a>
                          </div>
                        </div> {/* /.tt-accordion-content */}
                      </div> {/* /.tt-accordion-item */}
                      <div className="tt-accordion-item anim-fadeinup">
                        <div className="tt-accordion-heading">
                          <h3 className="tt-ac-head-title">AI and Automation</h3>
                          <div className="tt-accordion-subtext">Let smart automation handle the grind, while you scale.</div>
                          <div className="tt-accordion-caret-wrap">
                            <div className="tt-accordion-caret magnetic-item" />
                          </div>
                        </div> {/* /.tt-accordion-heading */}
                        <div className="tt-accordion-content max-width-800">
                          <p>Smart workflows and insights on autopilot. Cut costs, eliminate errors, and surface opportunity—our AI and RPA</p>
                          <div className="tt-btn tt-btn-link">
                            <a href="/ai-and-automation" data-hover="Read More">Read More</a>
                          </div>
                        </div> {/* /.tt-accordion-content */}
                      </div> {/* /.tt-accordion-item */}
                    </div>
                    {/* End accordion */}
                  </div> {/* /.tt-section-inner */}
                </div>
                {/* End tt-section */}
                {/* =======================
      						///// Begin tt-section /////
      						============================ 
      						* You can use padding classes if needed. For example "padding-top-xlg-150", "padding-bottom-xlg-150", "no-padding-top", "no-padding-bottom", etc. Note that each situation may be different and each section may need different classes according to your needs. More info about helper classes can be found in the file "helper.css".
      						*/}
                <div className="tt-section padding-top-xlg-150 padding-bottom-xlg-100 padding-left-sm-3-p padding-right-sm-3-p bg-white-accent-3">
                  <div className="tt-section-inner">
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
                                "Working with Dots Studio was a game-changer for us. Their team didn’t just deliver on time, they actually understood our brand and gave us designs that felt like us. Clients noticed the difference immediately."
                              </div>
                              <div className="tt-ts-subtext">— Rashed Khan, Business Owner</div>
                            </div>
                          </div> 
                          {/* End swiper slide */}
                          {/* Begin swiper slide 
      											======================== */}
                          <div className="swiper-slide font-alter">
                            <div className="tt-ts-item">
                              <div className="tt-ts-text">
                                "I’ve worked with other agencies before, but none matched the mix of creativity and reliability that Dots Studio brought. They’re fast, responsive, and the quality speaks for itself."
                              </div>
                              <div className="tt-ts-subtext">— Maria Hossain, Marketing Manager</div>
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
                              <div className="tt-ts-subtext">— Tanvir Ahmed, Startup Founder</div>
                            </div>
                          </div>
                          {/* End swiper slide */}
                          {/* Begin swiper slide 
      											======================== */}
                          <div className="swiper-slide font-alter">
                            <div className="tt-ts-item">
                              <div className="tt-ts-text">
                                "From the very first meeting to the final delivery, the process was so smooth. Clear communication, regular updates, and zero last-minute stress. That’s rare to find these days."
                              </div>
                              <div className="tt-ts-subtext">— Anika Rahman, Brand Manager</div>
                            </div>
                          </div> 
                          {/* End swiper slide */}
                          {/* Begin swiper slide 
      											======================== */}
                          <div className="swiper-slide font-alter">
                            <div className="tt-ts-item">
                              <div className="tt-ts-text">
                                "We didn’t just get a website—we got an entire identity upgrade. Engagement on our socials jumped, customers loved the new look, and sales improved within weeks. Highly recommend them!"
                              </div>
                              <div className="tt-ts-subtext">— Zubair Chowdhury, E-Commerce Owner</div>
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
                  </div> {/* /.tt-section-inner */}
                </div>
                {/* End tt-section */}
                <div><h2 className="custom-2">Brands We've Worked With</h2></div>
                {/* =======================
      						///// Begin tt-section /////
      						============================ 
      						* You can use padding classes if needed. For example "padding-top-xlg-150", "padding-bottom-xlg-150", "no-padding-top", "no-padding-bottom", etc. Note that each situation may be different and each section may need different classes according to your needs. More info about helper classes can be found in the file "helper.css".
      						*/}
                {/* BRANDS WE'VE WORKED WITH */}
                <div className="tt-section padding-top-xlg-150 padding-bottom-xlg-150">
                  <div className="tt-section-inner">
                    <div className="brand-scroller" aria-label="Brands we've worked with">
                      <div className="brand-track">
                        {[...BRAND_LOGOS, ...BRAND_LOGOS].map((logoSrc, index) => {
                          const isDuplicate = index >= BRAND_LOGOS.length;
                          const primaryIndex = index % BRAND_LOGOS.length;
                          return (
                            <div className="brand" key={`${logoSrc}-${index}`} aria-hidden={isDuplicate ? "true" : undefined}>
                              <img
                                loading={isDuplicate ? "lazy" : (primaryIndex < 10 ? "eager" : "lazy")}
                                fetchPriority={isDuplicate ? "auto" : (primaryIndex < 4 ? "high" : "auto")}
                                decoding="async"
                                src={logoSrc}
                                alt={brandAltFromPath(logoSrc)}
                                draggable="false"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                {/* End tt-section */}
                {/* =======================
      						///// Begin tt-section /////
      						============================ 
      						* You can use padding classes if needed. For example "padding-top-xlg-150", "padding-bottom-xlg-150", "no-padding-top", "no-padding-bottom", etc. Note that each situation may be different and each section may need different classes according to your needs. More info about helper classes can be found in the file "helper.css".
      						*/}
                <div className="tt-section padding-top-xlg-150 padding-bottom-xlg-150 padding-left-sm-3-p padding-right-sm-3-p bg-white-accent-3">
                  <div className="tt-section-inner tt-wrap max-width-900">
                    {/* Begin tt-Heading 
      								====================== 
      								* Use class "tt-heading-xsm", "tt-heading-sm", "tt-heading-lg", "tt-heading-xlg" or "tt-heading-xxlg" to set caption size (no class = default size).
      								* Use class "tt-heading-stroke" to enable stroke style.
      								* Use class "tt-heading-center" to align tt-Heading to center.
      								* Use prepared helper class "max-width-*" to add custom width if needed. Example: "max-width-800". More info about helper classes can be found in the file "helper.css".
      								*/}
                    <div className="tt-heading tt-heading-lg margin-bottom-10-p anim-fadeinup">
                      <h3 className="tt-heading-subtitle text-gray">Get in Touch</h3>
                      <h2 className="tt-heading-title">Drop Us<br /> a Line</h2>
                    </div>
                    {/* End tt-Heading */}
                    {/* Begin form 
      									================ 
      									* Use class "tt-form-filled" or "tt-form-minimal" to change form style.
      									* Use class "tt-form-sm" or "tt-form-lg" to change form size (no class = default size).
      									*/}
                    <form id="tt-contact-form" className="tt-form-minimal anim-fadeinup">
                      {/* Begin hidden required fields (https://github.com/agragregra/uniMail) */}
                      <input type="hidden" name="project_name" defaultValue="yourwebsiteaddress.com" /> {/* Change value to your site name */}
                      <input type="hidden" name="admin_email" defaultValue="your@email.com" /> {/* Change value to your valid email address (where a message will be sent) */}
                      <input type="hidden" name="form_subject" defaultValue="Message from yourwebsiteaddress.com" /> {/* Change value to your own message subject */}
                      {/* End Hidden Required Fields */}
                      <div className="tt-row">
                        <div className="tt-col-md-6">
                          <div className="tt-form-group">
                            <label>Name <span className="required">*</span></label>
                            <input className="tt-form-control" type="text" name="Name" placeholder="" required />
                          </div>
                        </div> {/* /.tt-col */}
                        <div className="tt-col-md-6">
                          <div className="tt-form-group">
                            <label>Email address <span className="required">*</span></label>
                            <input className="tt-form-control" type="email" name="Email" placeholder="" required />
                          </div>
                        </div> {/* /.tt-col */}
                      </div> {/* /.tt-row */}
                      <div className="tt-form-group">
                        <label>Subject <span className="required">*</span></label>
                        <input className="tt-form-control" type="text" name="Subject" placeholder="" required />
                      </div>
                      <div className="tt-form-group">
                        <label>Select an option <span className="required">*</span></label>
                        <select className="tt-form-control" name="option" required defaultValue="">
                          <option value="" disabled>Please choose an option</option>
                          <option value="Say Hello">Say hello</option>
                          <option value="New Project">New project</option>
                          <option value="Feedback">Feedback</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="tt-form-group">
                        <label>Message <span className="required">*</span></label>
                        <textarea className="tt-form-control" rows={6} name="Message" placeholder="" required defaultValue={""} />
                      </div>
                      <small className="tt-form-text"><em>Fields marked with an asterisk (*) are required!</em></small>
                      <div className="tt-btn tt-btn-light-outline margin-top-40">
                        <button type="submit" data-hover="Send Message">Send Message</button>
                      </div>
                    </form>
                    {/* End form */}
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
                        © Copyright - <a href="https://www.facebook.com/dotslimited" target="_blank" rel="noopener" className="tt-link">Dots It and Software Limited</a>
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

