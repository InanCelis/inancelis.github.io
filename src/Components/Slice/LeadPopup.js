import React, { useState, useEffect } from "react";
import "../../assets/styles/LeadPopup.scss";

const LeadPopup = ({ open, onClose }) => {
  const [autoVisible, setAutoVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("leadPopupSeen")) return;

    const timer = setTimeout(() => {
      setAutoVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const visible = open || autoVisible;

  useEffect(() => {
    if (!visible) return;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [visible]);

  const handleClose = () => {
    setAutoVisible(false);
    if (onClose) onClose();
    localStorage.setItem("leadPopupSeen", "true");
  };

  if (!visible) return null;

  return (
    <div className="lead-backdrop" onClick={handleClose}>
      <div className="lead-popup" onClick={(e) => e.stopPropagation()}>
        <button className="lead-close" onClick={handleClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="lead-header">
          <div className="lead-icon">
            <i className="fa-regular fa-calendar-check"></i>
          </div>
          <h3>Book a Free Consultation</h3>
          <p className="lead-description">
            Let's discuss how I can help build a fast, modern website for your
            business. Pick a time that works for you!
          </p>
        </div>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/celisinan/30min?primary_color=bd883c"
          style={{ minWidth: "320px", height: "100%" }}
        ></div>
      </div>
    </div>
  );
};

export default LeadPopup;
