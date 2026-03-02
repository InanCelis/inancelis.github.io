import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";

function HomeIntro({ photo, onBook }) {
  return (
    <div className="homepage" data-aos="fade-up-right">
      <div className="content">
        <div className="image">
          <LazyLoadImage src={photo} className="my-image" />
        </div>
        <div className="details">
          <p className="my-name">
            Hi, I'm{" "}
            <span className="textMain font-weight-bold">Inan Celis</span> a
          </p>
          <h1 className="sr-only">Website Developer / Designer in the Philippines</h1>
          <p className="h1-visual" aria-hidden="true">Website</p>
          <span className="tag-dev" aria-hidden="true"></span>
          <p className="my-name" aria-hidden="true">in the Philippines</p>
          <p className="text-muted mb-5">
            I am a website developer Philippines who loves creating clean,
            beautiful, and easy-to-use websites. Design pages that look nice,
            load fast, and work well on any device. I use simple ideas and smart
            tools to help brands grow online. My goal is to make every website
            simple to explore, fun to look at, and helpful for visitors.
          </p>
          <div className="d-flex flex-wrap align-items-center hero-buttons">
            <NavLink
              to="/contact/"
              className="button-52 button"
            >
              Hire Me Now
            </NavLink>
            <button className="button-50 button" onClick={onBook}>
              Book Free Consultation &nbsp;<i className="fa-regular fa-calendar-check"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeIntro;
