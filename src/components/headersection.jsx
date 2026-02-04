import React, { useState } from "react";

const HeaderSection = ({ logoSrc }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
      <header className="modern-header shadow-sm ">
        <div className="header-inner">

          {/* LEFT */}
          <div className="header-left">
            <img src={logoSrc} alt="logo" className="header-logo" />

            <div className="title-wrap">
              <h5 className="main-title">
                TRENTGO NEWSLETTER
                <span style={{ fontFamily: "cursive", color: "orange" }}>
                  <strong> #FEB'26</strong>
                </span>
              </h5>
              <span className="sub-title">
                Marketplace Intelligence for Port Spare Parts
              </span>
            </div>
          </div>

          {/* CENTER (Desktop only nav) */}
          <div className="navBar-container desktop-only">
            <nav className="header-nav">
              <a href="#">Featured Articles</a>
              <a href="#">Pricing Outlook</a>
              <a href="#happenings">Updates</a>
              <a href="#sponser">Featured Supplier</a>
            </nav>
          </div>

          {/* RIGHT */}
          <div className="header-right">

            {/* Search + Hamburger (always visible, responsive) */}
            <div className="search-hamburger-row">
              <input
                className="header-search"
                placeholder="Search"
              />

              <button
                className="hamburger-btn mobile-only"
                onClick={() => setShowMobileNav(true)}
              >
                ☰
              </button>
            </div>

            {/* Desktop only */}
            <button className="subscribe-btn desktop-only">
              Subscribe
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE NAV MODAL */}
      {showMobileNav && (
        <div className="mobile-nav-overlay">
          <div className="mobile-nav">
            <button
              className="close-btn"
              onClick={() => setShowMobileNav(false)}
            >
              ✕
            </button>

            <a onClick={() => setShowMobileNav(false)} href="#">Featured Articles</a>
            <a onClick={() => setShowMobileNav(false)} href="#">Market Index</a>
            <a onClick={() => setShowMobileNav(false)} href="#happenings">Updates</a>
            <a onClick={() => setShowMobileNav(false)} href="#sponser">Sponsor Supplier</a>

            <button className="subscribe-btn mobile-subscribe">
              Subscribe
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderSection;

