import React from "react";
import { NavLink } from "react-router-dom";
import { useHelperFunction } from "../utils/helperFuntion";
import skillsData from "../api/skills.json";
import workData from "../api/work.json";
import GradPhoto from "../assets/images/Inan Celis.png";
import SEO from "../Components/SEO";
import "../assets/styles/virtual-cv.scss";

const ENDORSEMENTS = [
  "Website Development",
  "Responsive Web Design",
  "Front-End Development",
  "Back-End Development",
  "WordPress Development",
  "WooCommerce Development",
  "System Development",
  "API Integration",
  "PSD to HTML",
  "Database Management",
];

function VirtualCV() {
  useHelperFunction("CV |");

  const handlePrint = () => window.print();

  return (
    <div className="cv-wrapper" data-theme="theme-light">
      <SEO
        title="Virtual CV | Ferdinand T. Celis — Website Developer Philippines"
        description="Professional CV of Ferdinand T. Celis (Inan Celis), Website Developer & Designer in the Philippines. Founder of WebGrowth Pros."
        url="https://inancelis.com/inan-celis-resume/"
      />

      {/* Sticky toolbar — hidden when printing */}
      <div className="cv-toolbar no-print">
        <NavLink to="/" className="cv-back-btn">
          <i className="fa-solid fa-arrow-left" /> Back to Portfolio
        </NavLink>
        <button onClick={handlePrint} className="cv-print-btn">
          <i className="fa-solid fa-download" /> Download PDF
        </button>
      </div>

      {/* ── Paper document ── */}
      <div className="cv-document">
        <div className="cv-accent-bar" />

        {/* Header */}
        <div className="cv-header">
          <div className="cv-header-text">
            <h1 className="cv-name">Ferdinand T. Celis</h1>
            <p className="cv-title">Website Developer / Designer</p>
            <div className="cv-contact-info">
              <p>
                <i className="fa-solid fa-location-dot" />
                Lilian st. Brgy. Bulihan, Famy, Laguna Philippines 4021
              </p>
              <p>
                <i className="fa-solid fa-phone" />
                <a href="tel:+639923019995">+63 (992) 301 9995</a>
                &nbsp;/&nbsp;
                <a href="tel:+639380386385">+63 (938) 038 6385</a>
              </p>
              <p>
                <i className="fa-solid fa-envelope" />
                <a href="mailto:celisinan@gmail.com">celisinan@gmail.com</a>
              </p>
              <p>
                <i className="fa-solid fa-globe" />
                <a href="https://inancelis.com/" target="_blank" rel="noopener noreferrer">https://inancelis.com/</a>
              </p>
              <p>
                <i className="fa-solid fa-building" />
                Founder —&nbsp;
                <a href="https://webgrowthpros.com/" target="_blank" rel="noopener noreferrer">WebGrowth Pros (webgrowthpros.com)</a>
              </p>
            </div>
          </div>
          <div className="cv-photo-wrap">
            <img src={GradPhoto} alt="Ferdinand T. Celis" className="cv-photo" />
          </div>
        </div>

        {/* About / Summary */}
        <div className="cv-section">
          <h2 className="cv-section-title">About Me</h2>
          <p className="cv-summary">
            I'm a professional website developer and designer from the Philippines with over 5 years of experience
            building clean, fast, and easy-to-use websites. I specialize in WordPress, WooCommerce, PHP, Laravel,
            React, and Vue. I also serve as Founder of WebGrowth Pros, a web agency focused on helping businesses
            grow online through strategic design and development.
          </p>
        </div>

        {/* Skills & Endorsement */}
        <div className="cv-section">
          <h2 className="cv-section-title">Skills & Endorsement</h2>
          <ul className="cv-endorsement-list">
            {ENDORSEMENTS.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        {/* Tools & Technologies */}
        <div className="cv-section">
          <h2 className="cv-section-title">Tools & Technologies</h2>
          <div className="cv-skills-grid">
            {skillsData.map((cat) => (
              <div key={cat.category} className="cv-skill-col">
                <h3 className="cv-skill-category">{cat.category}</h3>
                <ul>
                  {cat.skills.map((s) => (
                    <li key={s.text}>{s.text}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="cv-section">
          <h2 className="cv-section-title">Experience</h2>
          {workData.map((job) => (
            <div key={job.id} className="cv-job">
              <div className="cv-job-meta">
                <div>
                  <span className="cv-job-title">{job.position}</span>
                  <span className="cv-job-type"> · {job.job_type}</span>
                </div>
                <span className="cv-job-dates">
                  {job.from_date} – {job.to_date}
                </span>
              </div>
              <p className="cv-job-company">
                {job.company} — {job.address}
              </p>
              <div
                className="cv-job-desc"
                dangerouslySetInnerHTML={{ __html: job.description }}
              />
              <div className="cv-job-tools">
                {job.tool.map((t) => (
                  <span key={t} className="cv-tool-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="cv-section cv-section--last">
          <h2 className="cv-section-title">Education</h2>
          <div className="cv-job cv-job--last">
            <div className="cv-job-meta">
              <span className="cv-job-title">
                Bachelor of Science in Information Technology
              </span>
              <span className="cv-job-dates">2017 – 2021</span>
            </div>
            <p className="cv-job-company">
              Laguna State Polytechnic University — Sta. Cruz, Laguna, Philippines
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VirtualCV;
