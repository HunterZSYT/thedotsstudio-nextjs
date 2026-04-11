export default function SoftwareDevelopmentPage() {
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
                            <li><a href="/#services">Services</a></li>
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
              <div id="page-header" className="ph-full ph-cap-xxlg ph-center ph-image-cropped ph-image-cover-4 ph-content-parallax">
                <div className="page-header-inner tt-wrap">
                  {/* Begin page header image 
      							============================= */}
                  <div className="ph-image">
                    <div className="ph-image-inner">
                      <img loading="lazy" decoding="async" src="/assets/img/title-pages-hero-images/software-development.jpg" alt="Image" />
                    </div>
                  </div>
                  {/* End page header image */}
                  {/* Begin page header caption
      							=============================== 
      							Use class "max-width-*" to set caption max width if needed. For example "max-width-1000". More info about helper classes can be found in the file "helper.css".
      							*/}
                  <div className="ph-caption">
                    <h1 className="ph-caption-title ph-appear">Software Development</h1>
                    <div className="ph-caption-title-ghost ph-appear">Soft Dev</div>
                    <div className="ph-caption-subtitle ph-appear">Building solutions that scale with you.</div>
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
                <div className="tt-section">
                  <div className="tt-section-inner tt-wrap max-width-900">
                    {/* Begin tt-Heading 
      									====================== 
      									* Use class "tt-heading-xsm", "tt-heading-sm", "tt-heading-lg", "tt-heading-xlg" or "tt-heading-xxlg" to set caption size (no class = default size).
      									* Use class "tt-heading-stroke" to enable stroke style.
      									* Use class "tt-heading-center" to align tt-Heading to center.
      									* Use prepared helper class "max-width-*" to add custom width if needed. Example: "max-width-800". More info about helper classes can be found in the file "helper.css".
      									*/}
                    <div className="tt-heading tt-heading-lg">
                      <h3 className="tt-heading-subtitle text-gray">Services</h3>
                      <h2 className="tt-heading-title">Software Development</h2>
                      {/* <h3 class="tt-heading-subtitle text-gray">Subtitle</h3> */}
                    </div>
                    {/* End tt-Heading */}
                    <p className="text-gray">Software should do more than support your businessâ€”it should scale with it. At DOTS, we build custom solutions designed to fit your workflow, not the other way around. Every system we create is robust, future-ready, and built with growth in mind.</p>
                    <p className="text-gray">We help you build meaningful connections with your audience through search visibility, social engagement, and campaigns designed to convert. Every move we make is backed by data, but every message is crafted with personality and purpose.</p>
                    <p className="text-gray">From SEO and ads to content and social campaigns, our focus is long-term growth. We donâ€™t chase trendsâ€”we build strategies that keep your brand relevant and impossible to ignore.</p>
                    <br />
                    <h3>Why Choose DOTS for Software Development?</h3>
                    <p className="text-gray">At DOTS, we donâ€™t just write codeâ€”we solve problems. Every piece of software we create starts with understanding your workflow and your goals, so the final product feels natural to use and perfectly aligned with how your business operates. That way, youâ€™re not adapting to the softwareâ€”the software adapts to you. </p>
                    {/* Begin tt-image
      									====================
      									* Use class "tti-fixed-height" to enable image fixed height (no effect on small screens!).
      									* Use class "anim-image-parallax" on <img loading="lazy" decoding="async"> tag to enable parallax effect.
      									* Use class "margin-bottom-*" to enable bottom margins. For example "margin-bottom-40". More info about helper classes can be found in the file "helper.css".
      									*/}
                    <div className="tt-image margin-bottom-40">
                      <figure>
                        <img loading="lazy" decoding="async" className="anim-image-parallax tt-lazy" src="/assets/img/title-pages-hero-images/software-development-2.jpg" data-src="/assets/img/title-pages-hero-images/software-development-2.jpg" alt="image" />
                        <figcaption>
                          Drink Some Water
                        </figcaption>
                      </figure>
                    </div> 
                    {/* End tt-image */}
                    <p className="text-gray">Our approach balances reliability with scalability. We build systems that are robust enough to handle todayâ€™s challenges but flexible enough to grow with your business tomorrow. From automation tools that save time to enterprise applications that connect teams, every solution is designed to be secure, efficient, and future-ready.</p>
                    <p className="text-gray">Most importantly, we act as a partnerâ€”not just a vendor. Our team stays involved to make sure your software keeps delivering value as your business evolves. With DOTS, you donâ€™t just get a productâ€”you get a long-term solution that gives you control, efficiency, and the freedom to scale without limits.</p>
                  </div> {/* /.tt-section-inner */}
                </div>
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
      												* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"! Also no effect on small screens!).*/}
                          <div className="portfolio-grid-item">
                            {/* <a href="/single-project-1" class="pgi-image-wrap" data-cursor="View<br>Project"> */}
                            {/* Use class "cover-opacity-*" to set image overlay if ne</a>eded. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                            <div className="pgi-image-holder cover-opacity-2">
                              <div className="pgi-image-inner anim-zoomin">
                                <figure className="pgi-image ttgr-height">
                                  <video playsInline data-autoplay="true" autoPlay className="pgi-video" loop muted preload="metadata">
                                    <source src="/assets/dots-services-vids/software-development/software-development-vid-1.mp4" type="video/mp4" />
                                  </video>
                                </figure>
                                <div className="pgi-gradient-overlay" /> {/* /.pgi-image */}
                              </div> {/* /.pgi-image-inner */}
                            </div> {/* /.pgi-image-holder */}
                            {/* /.pgi-image-wrap */}
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
                                  <img loading="lazy" decoding="async" src="/assets/dots-services-img/software-development/soft-dev-1.jpg" alt="image" />
                                </figure>
                                <div className="pgi-gradient-overlay" /> {/* /.pgi-image */}
                              </div> {/* /.pgi-image-inner */}
                            </div> {/* /.pgi-image-holder */}
                            {/* /.pgi-image-wrap */}
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
                                <figure className="pgi-image ttgr-height">
                                  <img loading="lazy" decoding="async" src="/assets/dots-services-img/software-development/soft-dev-2.png" alt="image" />
                                </figure>
                              </div> {/* /.pgi-image-inner */}
                            </div> {/* /.pgi-image-holder */}
                            {/* /.pgi-image-wrap */}
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
                                <figure className="pgi-video-wrap ttgr-height">
                                  <video playsInline data-autoplay="true" autoPlay className="pgi-video" loop muted preload="metadata">
                                    <source src="/assets/dots-services-vids/software-development/software-development-vid-2.mp4" type="video/mp4" />
                                  </video>
                                </figure>
                                {/* /.pgi-image */}
                              </div> {/* /.pgi-image-inner */}
                            </div> {/* /.pgi-image-holder */}
                            {/* /.pgi-image-wrap */}
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
                <div className="tt-section padding-top-xlg-150 padding-bottom-xlg-150 bg-white-accent-2">
                  <div className="tt-section-inner tt-wrap">
                    {/* Begin tt-Heading 
      								====================== 
      								* Use class "tt-heading-xsm", "tt-heading-sm", "tt-heading-lg", "tt-heading-xlg" or "tt-heading-xxlg" to set caption size (no class = default size).
      								* Use class "tt-heading-stroke" to enable stroke style.
      								* Use class "tt-heading-center" to align tt-Heading to center.
      								* Use prepared helper class "max-width-*" to add custom width if needed. Example: "max-width-800". More info about helper classes can be found in the file "helper.css".
      								*/}
                    <div className="tt-heading tt-heading-xxlg tt-heading-stroke tt-heading-center margin-bottom-10-p anim-fadeinup">
                      <h3 className="tt-heading-subtitle text-gray">
                        Powered by the tools we trust to craft seamless digital experiences.
                      </h3>
                      <h2 className="tt-heading-title">
                        Stack
                      </h2>
                      {/* <h3 class="tt-heading-subtitle text-gray">Subtitle</h3> */}
                    </div>
                    {/* End tt-Heading */}
                    {/* Begin logo wall 
      								=====================
      								* Use class "cl-col-2", "cl-col-3" or "cl-col-4" to change columns.
      								* Hint: for better results make sure all your images are in the same dimensions!
      								*/}
                    <ul className="tt-logo-wall cl-col-44 anim-fadeinup">
                      <li>
                        <a className="cursor-alter" href="https://www.facebook.com/thedotslimited" rel="noopener" target="_blank">
                          <img loading="lazy" decoding="async" alt="Client" src="/assets/img/tools-logo/figma.png" />
                        </a>
                      </li>
                      <li>
                        <a className="cursor-alter" href="https://www.facebook.com/thedotslimited" rel="noopener" target="_blank">
                          <img loading="lazy" decoding="async" alt="Client" src="/assets/img/tools-logo/vs-code.png" />
                        </a>
                      </li>
                      <li>
                        <a className="cursor-alter" href="https://www.facebook.com/thedotslimited" rel="noopener" target="_blank">
                          <img loading="lazy" decoding="async" alt="Client" src="/assets/img/tools-logo/react.png" />
                        </a>
                      </li>
                      <li>
                        <a className="cursor-alter" href="https://www.facebook.com/thedotslimited" rel="noopener" target="_blank">
                          <img loading="lazy" decoding="async" alt="Client" src="/assets/img/tools-logo/node.js.png" />
                        </a>
                      </li>
                      <li>
                        <a className="cursor-alter" href="https://www.facebook.com/thedotslimited" rel="noopener" target="_blank">
                          <img loading="lazy" decoding="async" alt="Client" src="/assets/img/tools-logo/mongo-db.png" />
                        </a>
                      </li>
                      <li>
                        <a className="cursor-alter" href="https://www.facebook.com/thedotslimited" rel="noopener" target="_blank">
                          <img loading="lazy" decoding="async" alt="Client" src="/assets/img/tools-logo/my-sql.png" />
                        </a>
                      </li>
                      <li>
                        <a className="cursor-alter" href="https://www.facebook.com/thedotslimited" rel="noopener" target="_blank">
                          <img loading="lazy" decoding="async" alt="Client" src="/assets/img/tools-logo/github.png" />
                        </a>
                      </li>
                      <li>
                        <a className="cursor-alter" href="https://www.facebook.com/thedotslimited" rel="noopener" target="_blank">
                          <img loading="lazy" decoding="async" alt="Client" src="/assets/img/tools-logo/cloudfare.png" />
                        </a>
                      </li>
                      <li>
                        <a className="cursor-alter" href="https://www.facebook.com/thedotslimited" rel="noopener" target="_blank">
                          <img loading="lazy" decoding="async" alt="Client" src="/assets/img/tools-logo/postman.png" />
                        </a>
                      </li>
                      <li>
                        <a className="cursor-alter" href="https://www.facebook.com/thedotslimited" rel="noopener" target="_blank">
                          <img loading="lazy" decoding="async" alt="Client" src="/assets/img/tools-logo/vercel.png" />
                        </a>
                      </li>
                      {/* Use the below example if you want a list without links */}
                      {/* <li><img loading="lazy" decoding="async" src="/assets/img/clients/client-1.png" alt="Client"></li> */}
                    </ul>
                    {/* End logo wall */}
                  </div>
                  {/* /.tt-section-inner */}
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
                      <a href="/portfolio" className="tt-pn-link anim-fadeinup">
                        <div className="tt-pn-title">Portfolio</div>
                        <div className="tt-pn-hover-title">Portfolio</div>
                      </a> {/* /.tt-pn-link */}
                      <div className="tt-pn-subtitle anim-fadeinup">Selected Works</div>
                      {/* Use if destination page contains page header image */}
                      <div className="tt-pn-image">
                        <video playsInline data-autoplay="true" autoPlay className="pgi-video" loop muted preload="metadata">
                          <source src="/assets/dots-assets-vids/portfolio-vid.mp4" type="video/mp4" />
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
                        Â© Copyright - <a href="https://www.facebook.com/dotslimited" target="_blank" rel="noopener" className="tt-link">Dots It and Software Limited</a>
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


