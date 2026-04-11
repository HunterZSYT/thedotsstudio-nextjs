export default function ContactPage() {
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
              <div id="page-header" className="ph-full ph-cap-xxlg ph-center ph-image-cropped ph-image-cover-2 ph-content-parallax">
                <div className="page-header-inner tt-wrap">
                  {/* Begin page header image 
      							============================= */}
                  <div className="ph-image">
                    <div className="ph-image-inner">
                      <video playsInline data-autoplay="true" autoPlay className="pgi-video" loop muted preload="metadata">
                        <source src="/assets/dots-assets-vids/contact-vid.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                  {/* End page header image */}
                  {/* Begin page header caption
      							=============================== 
      							Use class "max-width-*" to set caption max width if needed. For example "max-width-1000". More info about helper classes can be found in the file "helper.css".
      							*/}
                  <div className="ph-caption">
                    {/* <h1 class="ph-caption-title ph-appear">Contact</h1> */}
                    <div className="ph-caption-title-ghost ph-appear">Contact</div>
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
                <div className="tt-section">
                  <div className="tt-section-inner tt-wrap">
                    <div className="tt-row">
                      <div className="tt-col-lg-5 padding-right-lg-5-p">
                        {/* Begin tt-Heading 
      										====================== 
      										* Use class "tt-heading-xsm", "tt-heading-sm", "tt-heading-lg", "tt-heading-xlg" or "tt-heading-xxlg" to set caption size (no class = default size).
      										* Use class "tt-heading-stroke" to enable stroke style.
      										* Use class "tt-heading-center" to align tt-Heading to center.
      										* Use prepared helper class "max-width-*" to add custom width if needed. Example: "max-width-800". More info about helper classes can be found in the file "helper.css".
      										*/}
                        <div className="tt-heading tt-heading-lg margin-bottom-10-p anim-fadeinup">
                          <h3 className="tt-heading-subtitle text-gray">Get in Touch</h3>
                          <h2 className="tt-heading-title">Drop Us<br /> A Line</h2>
                        </div>
                        {/* End tt-Heading */}
                        {/* <div class="text-gray padding-bottom-40 anim-fadeinup">
      											<p>Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Molestias assumenda, ratione voluptatibus. Libero nisi laudantium.</p>
      										</div> */}
                        {/* Begin contact info 
      										======================== */}
                        <ul className="tt-contact-info padding-bottom-40 text-gray">
                          <li className="anim-fadeinup">
                            <span className="tt-ci-icon"><i className="fas fa-map-marker-alt" /></span>
                            Sel Trident Tower, 57 Naya Paltan 1000 Dhaka, Bangladesh
                          </li>
                          <li className="anim-fadeinup">
                            <span className="tt-ci-icon"><i className="fas fa-phone" /></span>
                            <a href="tel:+123456789000" className="tt-link">01345-753054</a>
                          </li>
                          <li className="anim-fadeinup">
                            <span className="tt-ci-icon"><i className="fas fa-envelope" /></span>
                            <a href="mailto:company@email.com" className="tt-link">hello@thedotslimited.com</a>
                          </li>
                          <li className="anim-fadeinup">
                            <h6 className="no-margin-bottom margin-top-40">Follow:</h6>
                            {/* Begin social buttons */}
                            <div className="social-buttons">
                              <ul>
                                <li><a href="https://www.facebook.com/dotslimited" className="magnetic-item" target="_blank" rel="noopener">Fb.</a></li>
                                <li><a href="https://wa.me/8801345753054" className="magnetic-item" target="_blank" rel="noopener">Whats.</a></li>
                                {/* <li><a href="https://www.youtube.com/" class="magnetic-item" target="_blank" rel="noopener">Yt.</a></li> */}
                                {/* <li><a href="https://dribbble.com/Themetorium" class="magnetic-item" target="_blank" rel="noopener">Dr.</a></li> */}
                                <li><a href="https://www.instagram.com/dotslimited/" className="magnetic-item" target="_blank" rel="noopener">Inst.</a></li>
                              </ul>
                            </div>
                            {/* End social buttons */}
                          </li>
                        </ul>
                        {/* End contact info */}
                      </div> {/* /.tt-col */}
                      <div className="tt-col-lg-7">
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
                      </div> {/* /.tt-col */}
                    </div> {/* /.tt-row */}
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
                        Â© Copyright - <a href="https://www.facebook.com/dotslimited" target="_blank" rel="noopener" className="tt-link">Dots It and Software Limited </a>
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
                            <li><a href="https://www.instagram.com/dotslimited/" className="magnetic-item" target="_blank" rel="noopener">Inst.</a></li>
                            {/* <li><a href="https://dribbble.com/Themetorium" class="magnetic-item" target="_blank" rel="noopener">Dr.</a></li> */}
                            {/* <li><a href="https://www.behance.net/Themetorium" class="magnetic-item" target="_blank" rel="noopener">Be.</a></li> */}
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


