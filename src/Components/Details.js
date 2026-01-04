import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import LineClipPath from "./Slice/LineClipPath";
import "../assets/styles/details.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
function Details() {
  const [age, setAge] = useState("");
  useEffect(() => {
    var birthday = "1998-09-04";
    var calculatedAge = calculate_age(birthday);
    setAge(calculatedAge);
  }, []);

  const calculate_age = (dob1) => {
    var today = new Date();
    var birthDate = new Date(dob1); // create a date object directly from `dob1` argument
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    console.log(age_now);
    return age_now;
  };
  return (
    <>
      <div className="details-about container">
        <div className="content">
          <div className={`details`}>
            <h2 className="font-weight-bold pb-3" data-aos="fade-up">
              Hello There!
            </h2>
            <p className="text-muted f-text-m pb-4" data-aos="fade-up">
              I'm Inan, a professional web developer in the Philippines who
              enjoys building websites that are fast, easy to use, and simple to
              understand. I also work as a web designer Philippines and a
              WordPress developer Philippines, creating websites that look clean
              and work well for both small and large businesses.
              <br />
              <br />
              As one of the web developers Philippines, I use tools like React,
              Vue, Laravel, PHP, and Node.js to turn ideas into working web
              applications. I take complex tasks and make them smooth,
              organised, and easy for users to enjoy.
              <br />
              <br />
              My approach is simple. I focus on clear design, good function, and
              a friendly user experience. Handle the full process from planning
              to testing and launching. I also work with WordPress, Elementor
              Pro, databases, and cloud services to make sure every project runs
              well and looks great on any device.
            </p>
            <NavLink to={`/contact/`} className="link">
              <i className="fa-regular fa-paper-plane"></i>{" "}
              <span>Send Message</span>
            </NavLink>
            <div className="pt-5">
              <h3 className="f-text-m pb-2" data-aos="fade-up">
                Personal Information
              </h3>
              <div className="item-border pb-5">
                <div data-aos="fade-up">
                  <strong className="font-weight-bold text-muted f-text-s">
                    Name{" "}
                  </strong>
                  <span>Ferdinand T. Celis</span>
                </div>
                <div data-aos="fade-up">
                  <strong className="font-weight-bold text-muted f-text-s">
                    Birthday
                  </strong>
                  <span>September 4, 1998</span>
                </div>
                <div data-aos="fade-up">
                  <strong className="font-weight-bold text-muted f-text-s">
                    Age
                  </strong>
                  <span>{age}</span>
                </div>
                <div data-aos="fade-up">
                  <strong className="font-weight-bold text-muted f-text-s">
                    Degree
                  </strong>
                  <span>Bachelor of Science in Information Technology</span>
                </div>
              </div>
            </div>
          </div>
          <div className="image" data-aos="fade-up">
            <LineClipPath content={`About me`} textClass={"f-text-s"} />
            <LazyLoadImage src={require(`../assets/images/me-at-office.jpg`)} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
