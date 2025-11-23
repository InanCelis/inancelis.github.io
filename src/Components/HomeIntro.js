import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";
import ResumeButton from "../Components/Slice/ResumeButton";
function HomeIntro({ photo }) {
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
          <h1>Website</h1>
          <span className="tag-dev"></span>
          <p className="my-name">in the Philippines</p>
          <p className="text-muted mb-5">
            I am a website developer Philippines who loves creating clean,
            beautiful, and easy-to-use websites. Design pages that look nice,
            load fast, and work well on any device. I use simple ideas and smart
            tools to help brands grow online. My goal is to make every website
            simple to explore, fun to look at, and helpful for visitors.
          </p>
          <div className="row m-0">
            <NavLink
              to="/contact/"
              className="button-52 button mr-5 mb-4 mb-sm-0"
            >
              Hire Me Now
            </NavLink>
            <ResumeButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeIntro;
