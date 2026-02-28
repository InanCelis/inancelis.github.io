import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
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
        <p className="lead-description">
          Send me a message and let's discuss how I can help build a fast,
          modern website for your business.
        </p>
        <ContactForm compact onSuccess={handleClose} />
      </div>
    </div>
  );
};

export default LeadPopup;
