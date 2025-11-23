import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/cta.scss";

function CallToAction() {
  return (
    <div className="cta-section container">
      <div className="cta-content" data-aos="fade-up">
        <h2 className="title-3 text-center">
          Let's Bring Your Website Ideas to Life!
        </h2>
        <p className="text-center text-muted f-text-m mt-3">
          If you're ready to build a clean, modern, and easy-to-use website
          that supports your goals, contact us today and let's create a simple,
          smooth, and professional online presence together.
        </p>
        <div className="d-flex justify-content-center mt-5">
          <NavLink to="/contact/" className="button-52 button">
            Get Started Now
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
