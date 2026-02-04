import React from "react";
import videos from '../assets/videos/generated_video.mp4'
const FooterComponent = ({ adFooterUrl, adFooterImg }) => (
  <footer className="bg-white border-top border-light ">
    <div className="container-fluid ">

      {/* Footer Ad Banner */}
      <div className="row ">
        <div className="col-12">
          <div className="">
                 <div className="">
                   <div className=" ">
                     {/* <small className="text-muted text-uppercase fw-bold tracking-wide">
                       Sponsored Leaderboard
                     </small> */}
                   </div>
                   <div className="p-2 text-center">
                     <a
                      //  href={adUrl}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="stretched-link text-decoration-none d-block w-100"
                     >
                       <video
                         src={videos}
                         className="img-fluid rounded-2 w-100 border-0"
                         style={{
                           width: '100%',
                           height: '150px',
                           objectFit: 'cover'
                         }}
                         muted
                         autoPlay
                         loop
                         playsInline
                         preload="metadata"
                       />
                     </a>
                   </div>
                   {/* <div className="card-footer bg-light text-center py-1 px-3 border-top">
                     <small className="text-muted">Advertisement</small>
                   </div> */}
                 </div>
               </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="row g-4 pb-4">

        {/* Company Info */}
        <div className="col-lg-4 col-md-6">
          <div>
            <h5 className="fw-bold text-dark mb-3">TRENTGO</h5>
            <p className="text-muted small mb-3">
              Marketplace Intelligence for Port Spare Parts.
              Connecting global buyers with verified suppliers.
            </p>
            <div className="d-flex gap-2 small">
              <a id="emailid" href="mailto:info@trentgo.com" className="text-primary text-decoration-none">info@trentgo.com</a>
              <span>|</span>
              <a href="tel:+1-555-123-4567" className="text-primary text-decoration-none">+1-555-123-4567</a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-lg-2 col-md-6">
          <h6 className="fw-bold text-dark mb-3">Quick Links</h6>
          <ul className="list-unstyled small">
            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Featured Articles</a></li>
            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Market Index</a></li>
            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Updates</a></li>
            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Supplier</a></li>
          </ul>
        </div>

        {/* Advertise & Actions */}
        <div className="col-lg-3 col-md-6">
          <h6 className="fw-bold text-dark mb-3">Advertise on TrentGO</h6>
          <p className="text-muted small mb-3">
            Reach port & terminal spare-parts buyers worldwide
          </p>
          <a id="emailid" href="mailto:ads@trentgo.com" className="btn btn-outline-primary btn-sm fw-bold px-3 py-1 mb-2">
            ads@trentgo.com
          </a>
          <div className="d-flex flex-column gap-2 small mt-3">
            <a href="#" className="text-primary text-decoration-none">List your spare parts</a>
            <a href="#" className="text-primary text-decoration-none">Subscribe</a>
            <a href="#" className="text-primary text-decoration-none">Unsubscribe</a>
          </div>
        </div>

        {/* Social Media + Newsletter */}
        <div className="col-lg-3 col-md-6">
          <h6 className="fw-bold text-dark mb-3">Follow Us</h6>

          {/* Social Media Icons */}
          <div className="d-flex gap-3 mb-4">
            <a href="https://linkedin.com/company/trentgo" target="_blank" rel="noopener noreferrer" className="text-primary">
              <i className="bi bi-linkedin fs-5" style={{width: '24px', height: '24px'}}></i>
            </a>
            <a href="https://x.com/trentgo" target="_blank" rel="noopener noreferrer" className="text-primary">
              <i className="bi bi-twitter-x fs-5" style={{width: '24px', height: '24px'}}></i>
            </a>
            <a href="https://instagram.com/trentgo" target="_blank" rel="noopener noreferrer" className="text-primary">
              <i className="bi bi-instagram fs-5" style={{width: '24px', height: '24px'}}></i>
            </a>
          </div>

          {/* Newsletter Signup */}
          <h6 className="fw-bold text-dark mb-3 mt-4">Stay Updated</h6>
          <p className="text-muted small mb-3">
            Monthly marketplace intelligence delivered to your inbox
          </p>
          <div className="input-group input-group-sm mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="your@email.com"
              aria-label="Email for newsletter"
            />
            <button className="btn btn-primary fw-bold px-3" type="button">
              Subscribe
            </button>
          </div>
          <small className="text-muted">No spam. Unsubscribe anytime.</small>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-top border-light pt-3 pb-4">
        <div className="row align-items-center">
          <div className="col-md-6 small text-muted">
            © {new Date().getFullYear()-1} TrentGO. All rights reserved.
          </div>
          <div className="col-md-6 text-md-end small">
            <a href="#" className="text-muted text-decoration-none me-3">Privacy</a>
            <a href="#" className="text-muted text-decoration-none me-3">Terms</a>
            <a href="#" className="text-muted text-decoration-none">Cookies</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default FooterComponent;
