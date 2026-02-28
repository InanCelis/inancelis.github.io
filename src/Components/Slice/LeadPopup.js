import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../../assets/styles/LeadPopup.scss";

const LeadPopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("leadPopupSeen")) return;

    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
    localStorage.setItem("leadPopupSeen", "true");
  };

  if (!visible) return null;

  return (
    <div className="lead-backdrop" onClick={handleClose}>
      <div className="lead-popup" onClick={(e) => e.stopPropagation()}>
        <button className="lead-close" onClick={handleClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="lead-icon">
          <i className="fa-regular fa-paper-plane"></i>
        </div>
        <h3>Need a Website for Your Business?</h3>
        <p>
          Let's build a clean, modern, and professional website that helps your
          business grow. Get in touch today for a free consultation.
        </p>
        <NavLink to="/contact/" className="lead-cta" onClick={handleClose}>
          Get In Touch <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
      </div>
    </div>
  );
};

export default LeadPopup;
