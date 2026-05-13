import React from "react";
import "../assets/styles/founder-banner.scss";

function FounderBanner() {
  return (
    <div className="founder-banner" data-aos="fade-up">
      <div className="container">
        <div className="founder-banner__inner">
          <span className="founder-banner__label">Founder of</span>
          <div className="founder-banner__divider" />
          <a
            href="https://webgrowthpros.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="founder-banner__logo-link"
          >
            <img
              src="https://webgrowthpros.com/wp-content/uploads/2026/01/WebGrowthPros_Dark_Transparent-e1768645597991.png"
              alt="WebGrowth Pros"
              className="founder-banner__logo"
            />
          </a>
          <div className="founder-banner__divider" />
          <p className="founder-banner__desc">
            A web agency helping businesses grow online through strategic design &amp; development.
          </p>
          <a
            href="https://webgrowthpros.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="founder-banner__cta"
          >
            Visit The Website <i className="fa-solid fa-arrow-right" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FounderBanner;
