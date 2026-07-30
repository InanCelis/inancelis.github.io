import "../assets/styles/agency-projects.scss";

function AgencyProjects() {
  return (
    <div className="agency-projects container" data-aos="fade-up">
      <div className="agency-projects__header">
        <h2 className="f-text-m">More Projects via Web Growth Pros</h2>
        <p>
          A showcase of client websites built through my web agency,{" "}
          <a
            href="https://webgrowthpros.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web Growth Pros
          </a>
          .
        </p>
      </div>
      <div className="agency-projects__frame-wrap">
        <iframe
          src="https://webgrowthpros.com/embed-projects/"
          title="Web Growth Pros project portfolio"
          loading="lazy"
          className="agency-projects__frame"
          allowTransparency="true"
        />
        <div className="agency-projects__fade">
          <span>
            Scroll to browse more <i className="fa-solid fa-chevron-down"></i>
          </span>
        </div>
      </div>
      <div className="d-flex justify-content-center pt-5">
        <a
          href="https://webgrowthpros.com/projects/"
          target="_blank"
          rel="noopener noreferrer"
          className="button-50 button"
        >
          View full portfolio &nbsp;<i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}

export default AgencyProjects;
