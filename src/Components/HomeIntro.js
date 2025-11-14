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
          <span>Explore My World!</span>
          <p className="my-name">
            Hi, I'm{" "}
            <span className="textMain font-weight-bold">Inan Celis</span> a
          </p>
          <h1>Website</h1>
          <span className="tag-dev"></span>
          <p className="text-muted mb-5">
            Creative web developer and designer - crafting visually stunning,
            functional websites. Elevate your brand with bespoke design and
            innovative technology.
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
